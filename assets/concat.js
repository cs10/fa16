// Concatenation of all CS10 JS Files.

// Maps days since **saturday** to the appropriate cell numbers
// Its value is the cell numbers to deal with.
// The file dynamically calculates days for the semester and doesn't read
// dates from specific cells.
var since = [
    [2],       // 0 days -- Sun: readings
    [3, 4],    // 1 day  -- Mon: lec lab 1
    [4],       // 2 days -- Tues: lab 1
    [5],       // 3 days -- Wed: lab 1, lec2, lab 2
    [6],       // 4 days -- thurs: lab 2
    [6, 7],    // 5 days -- fri: lab 2, disc, hw
    [2],       // 6 days -- Sat: readings
];

var STYLE  = "8px solid Gold";
var MS_DAY = 1000*60*60*24;
// Function used to highlight the current day.
// TODO: Fix this stuff to be a moment obj.
function updateCalendar(date) {
    console.log('CALLED');
    // The SATURDAY before the first week of the calendar.
    var start = new Date(2016, 0, 16),
        today = date || new Date(),
        highlight = since[ today.getDay() ],
        weeks = Math.floor(((today - start) / MS_DAY) / 7); // Weeks SINCE start

    // if (highlight[0] === 2) {
    //     weeks += 1; // really shitty hack for weekends....
    // }

    var c, i, j, // holy shit that's terrible. FIXME.
        rows = document.querySelectorAll("tbody > tr.cal"),
        temp = rows[weeks],
        cells;

    // Date is out of range of calendar
    if (typeof temp === 'undefined') {
        console.log('DATE OUT OF RANGE');
        return;
    }

    cells = temp.cells;

    if (today.getDay() === 3) { // HIGHLIGHT LAB ON WEDS BASED ON TIME OF DAY
        var n = (today.getHours() < 12) ? 4 : 6;
        highlight.push(n);
    }

    // Hack for weeks like spring break, deadweek
    // Not a robust hack, but it should work OK.
    c = (cells.length == 5) ? 3 : highlight[0];

    cells[c].style.border = STYLE;
    if (c === 2 & weeks >= 2) { // HW, in the row before
        // CANT USE 8 BECAUSE ALL WEEKS ARENT THE SAME DARNIT.
        prev = rows[weeks].cells;
        rows[weeks].cells[prev.length - 1].style.border = STYLE;
    }
    if (highlight[1] && cells.length > highlight[1]) {
        cells[highlight[1]].style.border = STYLE;
    }

    // Grey out cells that have past
    for(i = 0; i < rows.length; i += 1) {
        cells = rows[i].cells;
        for(j = 2; j < cells.length; j += 1) {
            if (cells[j].style.border) { return; }
            cells[j].style.background = "#BBB";
            // Go 1 level deep to change the background on inner divs.
            // FIXME: Banish the jQuery? or make this recursive... or
            // not because I would ever need it? But it might be fun...
            if (typeof $ !== 'undefined') {
                if ($(cells[j]).has('div')) {
                    $(cells[j]).children().css('background', '#BBB');
                }
            }
        }
    }
}

function displaySpeech(img_name, img_src) {
    document[img_name].src = img_src;
}



var cs10 = cs10 || {};

// Sunday at the start of the semester
cs10.startDate = '2016-01-17';
cs10.endDate   = '2016-05-14';

cs10.bCoursesID = '1408649';
cs10.NUM_WEEKS_TO_RENDER = 17;

cs10.gradingScheme = {
    'A+': 485,
    'A' : 470,
    'A-': 450,
    'B+': 445,
    'B' : 420,
    'B-': 400,
    'C+': 385,
    'C' : 370,
    'C-': 350,
    'D' : 300,
    'F' : 299
};


bcourses = function(id) {
    var base = 'https://bcourses.berkeley.edu/courses/';
    var reading = '/files/folder/Readings?preview='
    return base + cs10.bCoursesID + reading + id;
}

// ==================================================
// ==========     OBJECT CREATION          ==========
// ==================================================
// Return the week of the course in range [1, 17] else -1
function getWeekOfDate(date) {
    var now = new Date();
    var from = date;
    if (typeof from === 'string') {
        from = new Date(date);
    }

    var dist = from - now;

    if (dist < 0) {
        return -1;
    }

    var weeks = Math.floor(dist / (MS_DAY * 7));

    return weeks <= 17 ? weeks : -1;
}


cs10.newLabObject = function(title, url, rq, video) {
    var baseURL = 'http://beautyjoy.github.io/bjc-r/topic/topic.html?topic=';
    var urlEnd  = '&novideo&noreading&noassignment&course=cs10_fa15.html';
    var lab = { type: 'Lab' };
    lab.title = title;

    // Global Counter for lecture
    cs10.rqCounter = cs10.rqCounter || 0;
    cs10.labCounter = cs10.labCounter || 0;

    if (!title) {
        lab.title = 'No Lab';
    }

    if (url) {
        cs10.labCounter += 1;
        lab.title = cs10.labCounter + ': ' + lab.title;
        lab.url = baseURL + url + urlEnd;
    }

    if (rq) {
        cs10.rqCounter += 1;
        rq = cs10.rqCounter;
    }

    if (title.indexOf('Project Work') !== -1) {
        lab.classes = 'project';
    }

    if (title.indexOf('No Lab') !== -1 || title.indexOf('No Class') !== -1) {
        lab.classes = 'noClass';
    }

    lab.RQ = rq;

    lab.video = video;
    return lab;
};

cs10.newReadingsObject = function(title, url, classes) {
    var reading = {
        type: 'Reading',
        title: title,
        url: url
    };

    if (!classes) {
        classes = 'required'; // Default option
    }

    reading.classes = 'reading ' + classes;

    return reading;
};

cs10.newLectureObject = function(title, path, presenter, video) {
    var lect = { type: 'Lecture' };

    lect.title = title;
    if (!title) {
        lect.title = 'No Lecture';
        return lect;
    }

    if (title.indexOf('No Lecture') !== -1 || title.indexOf('No Class') !== -1) {
        lect.classes = 'noClass';
    }

    lect.url = path;
    lect.guest = presenter;
    lect.video = video;
    return lect;
};

cs10.newDiscussionObject = function(title, files) {
    var disc = { type: 'Discussion' };

    disc.title = title;
    if (!title) {
        disc.title = 'No Discussion';
    }

    if (title.indexOf('No Discussion') !== -1 || title.indexOf('No Class') !== -1) {
        disc.classes = 'noClass';
    }

    // Global Counter for discussions
    cs10.discussionCounter = cs10.discussionCounter || 0;
    cs10.discussionCounter += 1;

    if (files) {
        var count = cs10.discussionCounter;
        disc.url = 'discussion/' + (count < 10 ? '0' : '') + count + '/';
    }

    return disc;
};

cs10.newHomeworkObject = function(title, due, submission, spec) {
    var obj = {
        type: 'Homework',
        urls: []
    };

    // TODO: Consider refactoring this....
    if (!title) {
        obj.title = 'No Homework!<br />But you might want to check next week\'s';
        return obj;
    }

    obj.title = title;

    if (due) {
        obj.classes = 'due';
        obj.due = due;
    }

    if (spec) {
        obj.urls.push({
            title: "Spec",
            url: spec
        });
    }

    if (submission) {
        // Allow multiple submissions per assignment
        // but keep shorthand for a common single URL
        if (submission.constructor !== Array) {
            submission = [ {
                title: "Submit",
                url: submission
            } ];
        }

        submission.forEach(function(subm) {
            obj.urls.push({
                title: subm.title || "LINK -- FIXME",
                url: 'https://bcourses.berkeley.edu/courses/' + cs10.bCoursesID +
              '/' + subm.url
            });
        });
    }

    return obj;
};

// ==================================================
// ==========     RENDERING CODE           ==========
// ==================================================
// REQUIRES MOMENTJS
cs10.getWeekStartDate = function(week) {
    var start = moment(cs10.startDate);

    return start.add((week - 1) * 7 + 1, 'd');
}

// cs10.renderTableCalendar = function() {
//     var result = $('.cal-container');
//     // TODO: weeks config
//     for (var i = 1; i < 9; i += 1) {
//         var color;
//         if (i % 2 == 0) {
//             color = 'light';
//         } else {
//             color = 'dark';
//         }
//         var first = $('.weekFirst').clone().removeClass('weekFirst');
//         var data = cs10['week' + i];
//         var row = cs10.renderTableFirst(i, data, color);
//         first.append(row);
//         result.append(first);
//         var second = $('.weekSecond').clone().removeClass('weekSecond');
//         second.append(cs10.renderTableSecond(i, data, color));
//         result.append(second);
//     }
// };

cs10.renderTableCalendar = function() {
    var result = $('<tbody>');
    var table = $('.calendar.table');
    if (table.length === 0) { return; }
    for(var i = 1; i <= cs10.NUM_WEEKS_TO_RENDER; i += 1) {
        result.append(cs10.renderTableRow(i, cs10['week' + i]));
    }
    table.append(result);
};

cs10.renderTableRow = function(week, data) {
    var result = $('<tr>').addClass('cal');

    // TODO: Special Case For data.special
    // TODO: Handle Exams (data.exams)

    result.append($('<td>').html(week))                     // Week Number
          .append($('<td>').html(cs10.getDateString(week))) // Dates
          .append(cs10.renderTableReading(data.readings1))   // Readings
          .append(cs10.renderTableLecture(data.lect1))      // Mon Lecture
          .append(cs10.renderTableLab(data.lab1))           // 1st Lab
          .append(cs10.renderTableLecture(data.lect2))      // Wed Lecture
          .append(cs10.renderTableLab(data.lab2))           // 2nd Lab
          .append(cs10.renderTableDiscussion(data.disc1))    // Discussion
          .append(cs10.renderTableHW(data.hw));             // Assignments

    return result;
};

// // This renders a single week in the large semester calendar.
// // M-W
// cs10.renderTableFirst = function (week, data, color) {
//     var result = $('<tr>').addClass('cal' + ' ' + color);
//     // TODO: Special Case For data.special
//     // TODO: Handle Exams (data.exams)
//     result.append($('<td>').html(week))                      // Week Number
//           .append($('<td>').html(cs10.getDateString(week)))  // Dates
//           .append(cs10.renderTableReading(data.readings1))   // Readings
//           .append(cs10.renderTableLab(data.lab1))            // 1st Lab
//           .append(cs10.renderTableDiscussion(data.disc1))    // 1st discussion
//           .append(cs10.renderTableLecture(data.lect1))       // Mon Lecture
//           .append(cs10.renderTableLecture(data.lect2))       // Tues Lecture
//           .append(cs10.renderTableLab(data.work))            // Work Session

//     return result;
// };

// // W-F
// cs10.renderTableSecond = function (week, data, color) {
//     var result = $('<tr>').addClass('cal' + ' ' + color);
//     // TODO: Special Case For data.special
//     // TODO: Handle Exams (data.exams)
//     result.append($('<td>').html(week))                      // Week Number
//           .append($('<td>').html(cs10.getDateString(week)))  // Dates
//           .append(cs10.renderTableReading(data.readings2))   // Readings
//           .append(cs10.renderTableLab(data.lab2))            // 2nd Lab
//           .append(cs10.renderTableDiscussion(data.disc2))    // 2nd Disc
//           .append(cs10.renderTableLecture(data.lect3))       // Wed Lecture
//           .append(cs10.renderTableLecture(data.lect4))       // Thus Lecture
//           .append(cs10.renderTableHW(data.hw));              // Assignments

//     return result;
// };


cs10.getDateString = function(week) {
    var start = cs10.getWeekStartDate(week);
    var end   = moment(start).add(4, 'd');
    return (start.month() + 1) + '-' + start.date() + ' to ' +
            (end.month() + 1) + '-' + end.date();
};

cs10.renderTableReading = function(readings) {
    var result = $('<td>');
    if (!readings) {
        result.append('No Reading');
    } else if (typeof readings === 'string') {
        result.append(readings);
    } else {
        for (var i = 0; i < readings.length; i += 1) {
            var rd = readings[i];
            var a = $('<a>').html(rd.title).attr(
                {'class': rd.classes, 'href': rd.url, 'target': '_blank'} );
            result.append(a);
            result.append('<br>');
        }
    }
    return result;
};

cs10.renderTableLecture = function(lect) {
    var result = $('<td>');
    if (!lect) {
        result.append('No Lecture');
        result.attr({'class': 'noClass'});
    } else if (typeof lect === 'string') {
        result.append(lect);
    } else {
        if (lect.guest) {
            result.append($('<strong>').html('Guest Lecturer: ' + lect.guest));
            result.append($('<br>'));
        }
        var title = lect.title;
        if (lect.url) {
            title = $('<a>').attr({href: lect.url}).html(lect.title);
        }
        result.append(title);
        result.append('<br>');
        if (lect.video) {
            result.append(
                $('<a>').attr({href: lect.video}).html('(Video)')
            )
        }
        result.attr({ 'class' : lect.classes });
    }
    return result;
};

cs10.renderTableLab = function(lab) {
    var result = $('<td>');
    if (!lab) {
        result.append('No Lab');
        result.attr({'class': 'noClass'});
    } else if (typeof lab === 'string') {
        result.append(lab);
    } else {
        var tag = lab.url ? '<a>' : '<span>';
        var title = $(tag).html(lab.title).attr({
            'href': lab.url, 'target': '_blank'});
        result.append(title);
        result.append('<br>');
        if (lab.RQ) {
            result.append($('<br>'));
            result.append($('<strong>').html('Reading Quiz ' + lab.RQ +' (in lab)'));
        }
        result.attr({ 'class' : lab.classes });
        if (lab.video) {
            result.append($('<br>'));
            result.append($('<a>').html('(Video Review)').attr({
                'href' : lab.video, 'target' : '_blank' }));
        }
    }
    return result;
};

cs10.renderTableDiscussion = function(disc) {
    var result = $('<td>');
    if (!disc) {
        result.append('No Discussion');
        result.attr({'class': 'noClass'});
    } else if (typeof disc === 'string') {
        result.append(disc);
    } else {
        result.append(disc.title);
        result.append('<br>');
        result.attr({ 'class' : disc.classes });
        if (disc.url) {
            var url = $('<a>').html('Resources').attr({'href' : disc.url});
            result.append($('<br>'));
            result.append($('<strong>').html('(' + url[0].outerHTML + ')'));
        }
    }
    return result;
};

cs10.renderTableHW = function(hw) {
    var result = $('<td>');
    if (!hw) {
        hw = [cs10.newHomeworkObject('No Homework')];
    } else if (typeof hw === 'string') {
        hw = [cs10.newHomeworkObject(hw)];
    } else if (!(hw instanceof Array)) { // HW is a list.
        hw = [ hw ];
    }

    for (var i = 0; i < hw.length; i += 1) {
        var assn = hw[i];
            result.append(assn.title);
            result.append('<br>');
            result.attr({ 'class' : assn.classes });

        var j = 0, links = assn.urls.length, item;
        for (; j < links; j += 1) {
            item = assn.urls[j];
            result.append($('<a>').html(item.title).attr({
                href: item.url,
                target: '_blank'
            }));

            if (j + 1 < links) {
                result.append(' | ');
            }
        }

        if (assn.url) {
            result.append($('<a>').html('Submit').attr({
                'href' : assn.url, }));
        }
        if (assn.due) {
            result.append('<br>');
            result.append($('<i>').html('due ' + assn.due + ' at 11:59pm'));
        }
        if (i + 1 < hw.length) {
            result.append('<hr>');
        }
    }

    return result;
};


/* Shortcuts for creating schedule objects
 * Parameters:
 * Reading: (title, link, 'type [required is default]')
 * Lecture: (title, '[slides folder]', '[video URL]', '[Guest Name]')
 * lab1:     (title, 'topic file path', [boolean -- Reading Quiz?], 'video link')
 * disc1:    (title, [boolean -- Resources available?])
 * HW:      (title, TBD...)
 * NOTE: These links are currently relative to the home page.
 */
var lab      = cs10.newLabObject,
    work     = lab, // shortcut for work sessions.
    reading  = cs10.newReadingsObject,
    lect     = cs10.newLectureObject,
    disc     = cs10.newDiscussionObject,
    hw       = cs10.newHomeworkObject;

function docs(id) {
    return 'assign.html?//docs.google.com/document/d/' + id + '/pub';
}
// CONSTANTS:
var hw1Spec = docs('1ybuatsrUMCI-tHHRPwxUpGoZoGxk_SEiGEArocQtIlI');
var hw2Spec = docs('15s641ROrtQtt6hOA4WIdXW3wvmdBjZN0yPDi1D9IL2k');
var hw3Spec = docs('186x49Yd05JKztSwlSNv0S82Jy5w5ql_MVDLTZo-_mPQ');
var mtProjSpec = docs('1nOOTJnTf_8ZsRKEWFEVMwRnNVUTbFMJyzMkIQiH6BaY');
var exploreSpec = docs('1V-WT8L0IkH9e1jFF28f3gfTj4UYCWccPDAjyVjlNOMU');
var finalProjSpec = docs('1Pf29lFwyD883yIxIKtc2ywpqU-VTvsmUJyIw-jYuUyQ');

// ==================================================
// ==========     SCHEDULE ITEMS           ==========
// ==================================================

// JAN 19 - 22
cs10.week1 = {
    readings1: 'No Readings',
    lect1: lect('No Lecture Monday'),
    lab1: lab('No Labs Monday, Tuesday, or Wednesday morning'),
    lect2: lect(
        'Welcome and Abstraction',
        'https://docs.google.com/a/berkeley.edu/presentation/d/1T9abQi3qjhWi4ws0pADRiYBkpP-lvs5TKyokVPJWUFU/edit?usp=sharing'
        //null,
        //'https://www.youtube.com/watch?v=2cl45WjH41g'
    ),
    lab2: lab("Welcome to <span class='snap'>snap</span>", "berkeley_bjc/intro_pair/1-introduction.topic"),
    disc1: disc('Welcome to CS10!'),
    hw: hw('HW0', '1/24', 'quizzes/2162430')
};

// JAN 25 - 29
cs10.week2 = {
    readings1: [
        reading('Prof. Harvey\'s Intro to Abstraction',
                docs('1PZJ_LYYWRYu12cTbBKF9IyY4BqEG-BibgisBoQn9BpY')),
        reading('Learning to Code!', 'http://www.youtube.com/watch?v=dU1xS07N-FA'),
        reading('Is Abstraction the Key to Computing?',
                bcourses('59744797'),
                'optional'),
        reading('Scratch: Programming for All',
                bcourses('59744796'),
                'optional')
        /*,
        reading('TEDx Berkeley: The Beauty and Joy of Computing',
                'https://www.youtube.com/watch?v=ozRovyDwKEM'),
        reading('Why Software is Eating the World',
                bcourses('58003308')),
        reading('All I Really Need to Know about Pair Programming I Learned In Kindergarten',
                'https://collaboration.csc.ncsu.edu/laurie/Papers/Kindergarten.PDF'),
        reading('Learning to Code!',
                'https://www.youtube.com/watch?v=dU1xS07N-FA',
                'optional'),
        reading('Is Abstraction the Key to Computing?',
                bcourses('59744797'),
                'optional'),
        reading('Scratch: Programming for All',
                bcourses('59744796'),
                'optional')*/
    ],
    lect1: lect('Procedures', 'https://docs.google.com/a/berkeley.edu/presentation/d/12LLM36NEfkylUsy9mG-1TnvorovQbYxhUDI_cMSzDuU/edit?usp=sharing'), //'https://docs.google.com/presentation/d/1_lKWy3HeznujFDTeRfffoGSAkvVEPqzpNvKVM2jkC0c/pub'),
    lab1: lab('Build Your Own Blocks', 'berkeley_bjc/intro_pair/2-loops-variables.topic'),
    lect2: lect('Numbers and Abstraction', 'https://docs.google.com/presentation/d/1TVXERNz4ude_YYsPccwwirFWxXQXSs2ex-cccHytfzo/edit?usp=sharing'), //'https://docs.google.com/presentation/d/1zHEl4C_jLGFVFznWPMWhDYFtcLENUU3_DubOb_H5UZs/pub'),
    lab2: lab('Conditionals and Reporters', 'berkeley_bjc/intro_pair/3-conditionals.topic', true),
    disc1: disc('Anatomy of a Computer and the Power of Binary'),
    hw: hw('HW1: Word Guessing', '2/3', 'assignments/7259694', hw1Spec)
};

// FEB 1 - 5
cs10.week3 = {
    readings1: [
        reading('The First Object Oriented Software System', 
                'https://www.youtube.com/watch?v=yyYB_Vo15WE'),
        reading('The Story of Alan Turing &amp; His Machine',
                'https://youtu.be/CQhrMmbiaM0'),
        reading('BtB Chapter 1',
                '/sp16/resources/readings/btb/chapter1.pdf')
        /*reading('Designing Games with a Purpose (GWAP)',
                bcourses('59744795')),*/
        // reading('Justices Split on Violent Games',
        //         bcourses('53994720')),
        // reading('Video Games Lecture',
        //         'https://coursesharing.org/courses/6/lectures/11'),
        // reading('(Slides)',
        //         '/sp16/resources/readings/graphics'),

        // reading('More readings on video games',
        //         '/sp16/resources/readings/video-games/',
        //         'optional'),
        /*reading('Animating a Blockbuster',
                'https://www.wired.com/magazine/2010/05/process_pixar/',
                'optional')*/
    ],
    lect1: lect('Multimedia Computing'),
    lab1: lab('Functions', 'berkeley_bjc/intro_pair/4-abstraction-testing.topic', true),
    lect2: lect('Lists and Programming Paradigms'), //'https://docs.google.com/presentation/d/136vfh3rhRyTsGUKNv1MuUSHZqdPp4xVvt9GX3LlGX6I/pub'),
    lab2: lab('Lists I', 'berkeley_bjc/lists/lists-I.topic'),
    disc1: disc('All about lists'),
    hw: hw('HW1: Word Guessing', '2/3', 'assignments/7259694', hw1Spec)
};
// cs10.week3.lect3.classes = 'exam';
// cs10.week3.work.title += '<hr><strong>Finch Robots Lab (Sect 111)</strong>';

// FEB 8 - 12
cs10.week4 = {
    readings1: [
        reading('What is an Algorithm (book excerpts)?',
                bcourses('60735934')),
       reading('How Algorithms Shape Our World',
                'http://www.ted.com/talks/kevin_slavin_how_algorithms_shape_our_world.html'),        
        reading('Algorithms Are Great and All, But They Can Also Ruin Lives',
                'http://www.wired.com/2014/11/algorithms-great-can-also-ruin-lives/'),
        reading('Hacker News Comments on "Algorithms Are Great and All..."',
                'https://news.ycombinator.com/item?id=8630311'),        
        reading('The 10 Algorithms That Dominate Our World',
                'http://io9.com/the-10-algorithms-that-dominate-our-world-1580110464',
                'optional'),
        reading('The real 10 algorithms that dominate our world',
                'https://medium.com/@_marcos_otero/the-real-10-algorithms-that-dominate-our-world-e95fa9f16c04',
                'optional')
    ],
    lect1: lect('Algorithms'), //'https://docs.google.com/presentation/d/1VsF8pEI882QS4X6Vu3JqCkO_1d8ttp763p0cONt_GgI/pub?start=false&loop=false&delayms=3000'),
    lab1: lab('Algorithms', 'berkeley_bjc/areas/algorithms.topic', true),
    lect2: lect('Algorithmic Complexity'), //'https://docs.google.com/presentation/d/1hJTCiCxmaWfhjjSFTclkGeyzrH5UVMr9vVinAt_ohFk/pub?start=false&loop=false&delayms=3000'),
    lab2: lab('Algorithmic Complexity', 'berkeley_bjc/areas/algorithm-complexity.topic'),
    disc1: disc('Quest Review'),
    hw: hw('HW2: Encryptify', 'TBD', 'assignments/6644472', hw2Spec)

    // [
//         hw('Midterm Project<br><strong>Individual</strong> Milestone', '3/13', 'assignments/6120151'),
//         hw('Midterm Project<br><strong>Group</strong> Milestone', '3/13', 'assignments/6120100')
//     ]
};

// FEB 15 - 19 (President's Day: Monday)
cs10.week5 = {
    readings1: 'No Readings for this Week - Study for the Quest!',//[
        //reading('BtB Chapter 5',
                //'http://www.bitsbook.com/wp-content/uploads/2008/12/chapter5.pdf'),
        /*reading('BtB Chapter 4 Reading Segment 2',
                '/sp16/resources/readings/btb/BtB4-pt2.pdf'),*/
        // TODO: This is paywalled....
        /*reading('Living in a Digital World',
                'https://cacm.acm.org/magazines/2011/10/131393-living-in-a-digital-world/pdf',
                'optional'),
        reading('BtB Chapter 3',
                '/sp16/resources/readings/btb/chapter3.pdf',
                'optional')*/
    //],
    lect1: lect('No Class Monday - Presidents Day'),
    lab1: lab('Quest Review'),
    lect2: lect('Quest In Class'),
    lab2: lab('Finch Lab', 'berkeley_bjc/robots/robots.topic'),
    disc1: disc('Quest Debrief'),
    hw: hw('HW2: Encryptify', 'TBD', 'assignments/6644472', hw2Spec)
    //hw: hw('HW2: Snowman', '9/18', 'assignments/6644472', 'assign.html?//docs.google.com/document/d/1iJDOxWMBnmE5lOzqmUi_-F-HoSyGuQrzn-COiGQd29Y/pub')
};
 cs10.week5.lect2.classes = 'exam';
 cs10.week5.lect2.title += '<br><a href="exams/quest.html">Quest</a><br><br>Weds 2/17<br>In Class<br>105 Stanley';
 //cs10.week5.lab2.classes = 'exam';

// FEB 22 - 26
cs10.week6 = {
    readings1: [
    reading('BtB Chapter 5',
            'http://www.bitsbook.com/wp-content/uploads/2008/12/chapter5.pdf'),
        ],//'No Reading.<br><b>Quest Review 1 - 3 PM in 2050 VLSB on 9/27</br>',
    lect1: lect('Testing'), //'https://docs.google.com/presentation/d/1EqmuMag-_swWmEQvi9coK0_J2fl0N0H1p6NuNr9WaaI/edit?usp=sharing'),
	lab1: lab('Testing, HW3', 'berkeley_bjc/2048-testing/2048.topic', true),
    lect2: lect('Recursion I'),
    lab2: lab('Trees and Fractals Using Recursion', 'berkeley_bjc/recur/recursion-trees-fractals.topic'),
    disc1: disc('TBD'),
    hw: hw('HW3: 2048','TBD', 'assignments/6930656', hw3Spec)
};

// FEB 29 - MAR 4
cs10.week7 = {
    readings1: [
        reading('The End of Moore\'s Law',
                'http://www.nytimes.com/2015/09/27/technology/smaller-faster-cheaper-over-the-future-of-computer-chips.html?_r=0'),
        reading('eWEEK at 30: Multicore CPUs Keep Chip Makers in Step With Moore\'s Law',
            'https://docs.google.com/document/d/1FC-_lcn_EWlGXLfPDlQbSQeE1Q4NpTG39S-kVkHRxv8/edit?usp=sharing')
    ],
    lect1: lect('HCI'), //'https://docs.google.com/presentation/d/1b_vwq1xO3zFWTAexXv-QFydbRVGoInM1sLIO32zAUMU/pub?start=false&loop=false&delayms=3000'),
    lab1: lab('Tic Tac Toe', 'berkeley_bjc/lists/tic-tac-toe.topic', true),
    lect2: lect('Computer Vision'), //'https://docs.google.com/presentation/d/1NuOa586nkC1m95X_5LYyiI4gs0s3XL5eRZF7DeH81us/pub?start=false&loop=false&delayms=3000'),
    lab2: lab('Homework 3 Work Session'),
    disc1: disc('Recursion'),
    hw: hw('HW3: 2048','TBD', 'assignments/6930656', hw3Spec)
};

// MAR 7 - 11
cs10.week8 = {
    readings1: [
        reading('BtB chapter 2, pg. 19-29, 36-42',
                'http://www.bitsbook.com/wp-content/uploads/2008/12/chapter2.pdf'),
        reading('Rest of BtB chapter 2',
                'http://www.bitsbook.com/wp-content/uploads/2008/12/chapter2.pdf', 'optional'),
    ],
    disc1: disc('More Recursion'),
    lab1: lab('Recursive Reporters I', 'berkeley_bjc/recur/recursive-reporters-part1.topic', true),
    lect1: lect('Recursion II'), //'https://docs.google.com/presentation/d/1IzvyATwwmue57YXuGLXevOyTLNgepV0xH8VaiGGHrYw/pub?start=false&loop=false&delayms=3000'),
    lect2: lect('Algorithmic Complexity II'), //'L13 - Privacy'),
    lab2: lab('Project Work Session'),
    hw: hw('Midterm Project Proposals', 'TBD', 'assignments/6644519', mtProjSpec)
};

// MAR 14 - 18
cs10.week9 = {
    readings1: [
        reading('As We May Think',
                'http://www.theatlantic.com/magazine/archive/1945/07/as-we-may-think/303881/')
        // TODO: Replace these with Superfish?
        /*reading('The Heartbleed Bug',
                'https://blog.agilebits.com/2014/04/08/imagine-no-ssl-encryption-its-scary-if-you-try/'),
        reading('When Servers Bleed',
                'https://medium.com/p/804cdf4b48c1',
                'hard')*/
    ],
    disc1: disc('Midterm Review'),
    lab1: lab('Concurrency', 'berkeley_bjc/areas/concurrency.topic', true),
    lect1: lect('Concurrency'), //'https://docs.google.com/presentation/d/1o4GtTha_TbRNCvqp7wEchJxGaeoENnH3KTX0Hl6nvD0/edit?usp=sharing'),
    lect2: lect('The Internet I'), //'L15 - HCI'),
    lab2: lab('Project Work Session'),
    hw: [        
        hw('Midterm Project<br> Milestone', 'TBD', 'assignments/6644521')
    ]    
};
cs10.week9.lect2.classes = 'exam';
cs10.week9.lect2.title += '<br><br><div class="exam inner"><a href="exams/midterm.html">Midterm Exam</a><br><br>Wednesday 3/16<br>7 - 9 PM | 155 Dwinelle Hall</div>';


// MAR 21 - 25 (Spring Break?)
cs10.week10 = {
    special: 'Spring Break -- No Class',
    readings: [],
    hw: hw('TBD')
};
//cs10.week10 = {
    //readings1: 'No Reading.', /*[
        //reading('Data Explosion Creates Revolution',
                //'http://www.sfgate.com/cgi-bin/article.cgi?f=/c/a/2011/10/19/BU5K1LJ4R3.DTL'),
        //reading('Data Mining',
                //'https://webdocs.cs.ualberta.ca/~zaiane/courses/cmput690/notes/Chapter1/ch1.pdf'),
        //reading('IBM\'s Watson supercomputer to speed up cancer care',
                //'http://www.bbc.com/news/technology-32607688'),
        //reading('Data Pitfalls',
                //'https://searchenginewatch.com/article/2289574/Big-Data-Big-Trouble-How-to-Avoid-5-Data-Analysis-Pitfalls',
                //'optional'),
        // TODO: bCourses
        //reading('Computing as Social Science',
                //'https://cacm.acm.org/magazines/2009/4/22953-computing-as-social-science/fulltext',
                //'optional')
    //],*/
    //disc1: disc('No Discussion - Spring Break'),
    //lab1: lab('No lab - Spring Break'),
    //lect1: lect('No Lecture - Spring Break'),
    //lect2: lect('No Lecture - Spring Break'),
    //lab2: lab('No Lab - Spring Break'),
    //hw: [        
        //hw('Midterm Project', 'TBD', 'assignments/6644475')
    //]        
//};
//cs10.week10.lab2.classes = 'exam';
//cs10.week10.lab2.title += '<br><br><div class="exam inner"><a href="exams/midterm.html">Midterm Exam</a><br><br>Thursday 10/29<br>8 - 10 PM | 2050 VLSB</div>';


// MAR 28 - APR 1
cs10.week11 = {
    readings1: [
        reading('TED: What is the Internet?', 'https://www.ted.com/talks/andrew_blum_what_is_the_internet_really?language=en'),
        reading('BtB pg. 295-304, 309', 'https://drive.google.com/file/d/0B3vESj3HTRTkbVo1dTV5SUp4T0U/view?usp=sharing'),
        reading('What is the Internet?', 'https://www.youtube.com/watch?v=UlJku_CSyNg', 'optional'),
        reading('BtB pg. 305-316', 'https://drive.google.com/file/d/0B3vESj3HTRTkbVo1dTV5SUp4T0U/view?usp=sharing', 'optional')  
    ],
    disc1: disc('The Internet | Data and HOFs'),
    lect1: lect('The Internet II'), //'https://docs.google.com/presentation/d/1TwO63UECd9I4ufKDYUj9LDFT6RrDOtFQlbbcC9oBebE/pub?start=false&loop=false&delayms=3000'),
    lect2: lect('Lamba + HOFs'), //'https://docs.google.com/presentation/d/1Ouz8QdPT-L0x3lg77S2yBGbsqjmuKJLAG3SjxtD7zLQ/pub?start=false&loop=false&delayms=3000'),
    lab1: lab('The Internet', 'berkeley_bjc/areas/internet.topic', true),
    lab2: lab('Functions as Data and HOFs', 'berkeley_bjc/hofs/hofs-practice.topic'),
    hw: [
        hw('"Explore" Writing Assignment', 'TBD', '/discussion_topics/4250600', exploreSpec)
        // hw('Midterm Regrade Requests<br>(Gradescope)', '11/6')
    ]
};

// APR 4 - 8
cs10.week12 = {
        readings1: [
        reading('Why Python is a Great First Language', 'http://blog.trinket.io/why-python/'),
        reading('The GNU Manifesto Turns Thirty', 'http://www.newyorker.com/business/currency/the-gnu-manifesto-turns-thirty', 'optional'),
        reading('Python vs. COBOL (parody)', 'https://medium.com/@oceankidbilly/python-vs-r-vs-cobol-which-is-best-for-data-science-7b2979c6a000', 'optional')
    ],
    disc1: disc('Social Implications of Computing | More HoF and Call Work'),
    lect1: lect('Privacy'), //'https://docs.google.com/presentation/d/1dqoMCkDFxoGusaJBwyvMYMgoPY47wUt8WRgG1HOVfLQ/edit?usp=sharing'),
    lect2: lect('Intro to Python'),
    lab1: lab('Optional Catch-Up Day', null, true),
    lab2: lab('Besides Blocks: Welcome to Python', 'berkeley_bjc/python/besides-blocks-welcome.topic'),
    hw: [
        hw('"Explore" Comments', 'TBD', '/discussion_topics/4250600'),
        hw('Final Project Proposal', 'TBD', 'assignments/7001951', finalProjSpec)
    ]
};

// APR 11 - 15
cs10.week13 = {
    readings1: [
        reading('CS8 lecture 1 (watch first, optional)', 'https://www.youtube.com/watch?v=69hHbVza7XI&t=27m49s', 'optional'),
        reading('Intro to Data Science (stop at Expressions)', 'http://data8.org/text/1_data.html#why-data-science')
    ],    
    disc1: disc('All about Python', true),
    lab1: lab('Besides Blocks: Data Structures in Python', 'berkeley_bjc/python/besides-blocks-data-struct.topic', true), //, 'berkeley_bjc/python/besides-blocks-data-struct.topic', true),
    lect1: lect('Social Implications - Copyright'),
    lect2: lect('Social Implications - Cryptography and Security'), //'https://docs.google.com/presentation/d/1MLG5pjfSrvZ17WNp5CSfPbPa3QOnxKtNGKlfRIGgEPw/edit?usp=sharing'),
    lab2: lab('Project Work Session'), //, 'berkeley_bjc/python/besides-blocks-data.topic'),
    hw: hw('Final Project Milestone', 'TBD', 'assignments/6644523')
};


// APR 18 - 22
cs10.week14 = {
    readings1: [
        reading('BtB Chapter 6',
                'http://www.bitsbook.com/wp-content/uploads/2008/12/chapter6.pdf', 'optional')
        ],
    disc1: disc('TBD'),
    lab1: lab('Besides Blocks: Text Processing in Python', 'berkeley_bjc/python/besides-blocks-text-processing.topic', true),
    lect1: lect('Python II'), //'https://docs.google.com/presentation/d/1SvosTLRIU9IfgXD75v_lctIOvHaBARc9sm7Y5Dn-J8g/pub?start=false&loop=false&delayms=3000'),
    lect2: lect('Limits of Computing'),
    lab2: lab('Project Work Session'),
    hw: hw('TBD')
};

// APR 25 - 29
cs10.week15 = {
    readings1: [
        reading('The Doomsday Invention', 'http://www.newyorker.com/magazine/2015/11/23/doomsday-invention-artificial-intelligence-nick-bostrom'),
        reading('A Quantum Leap in Computing?', 'http://www.newyorker.com/tech/elements/a-quantum-leap-in-computing', 'optional')
    ],       
    disc1: disc('Farewell! Recap and Feedback'),
    lab1: lab('Project Work Session', null, true),
    lect1: lect('Future of Computing'), //'https://docs.google.com/presentation/d/1_k3boAVzNT3W_z-uhmbdP5tugM4PUuGwT-BPSmU8A-o/pub?start=false&loop=false&delayms=3000'),
    lect2: lect('Conclusion'), //'https://docs.google.com/presentation/d/1CgPu3RBXYUyN7r0X6NpWzgGN95cZIPyfqTSNBCX7nd4/edit?usp=sharing'),
    lab2: lab('In-Lab Final Exam'),
    hw: [        
        hw('Final Project', 'TBD', 'assignments/6644476')
    ]
};

// DEAD WEEK
// MAY 2 - 6
cs10.week16 = {
    special: 'RRR Week -- No Class',
    readings: [],
    hw: hw('Study for the Final')
};

// MAY 9 - 13
cs10.week17 = {
    readings1: 'No Reading.',    
    lab1: lab('Final Exam<br>Tuesday, 8:00 - 11:00am<br>2050 VLSB'),
    hw: ''
};
cs10.week17.lab1.classes = 'exam';
cs10.week17.lab1.title += '<br><br><div class="exam inner">Final Exam<br><br>Tuesday 5/10<br>8:00 - 11:00 AM</div>';


// Load the Calendar
$(document).ready(function() {
    cs10.renderTableCalendar();
    updateCalendar();
});


// Instructors


var GeraldF = {
    name: 'Dr. Gerald Friedland',
    img: 'Fa13/Gerald.jpg',
    imgSrc: 'Gerald.jpg',
    //bio: 'DanBio.txt',
    email: 'gerald@cs10.org'
};

var JustinH = {
    name: 'Dr. Justin Hsia',
    img: 'Sp16/Justin.jpg',
    imgSrc: 'JustinHsia.jpg',
    email: 'justin@cs10.org'
};


// TAs

var adamK = {
    name: 'Head TA Adam Kuphaldt',
    img: 'Sp14/AdamKuphaldt.jpg',
    imgSrc: 'AdamKuphaldt.jpg',
    email: 'adam@cs10.org',
    web: 'https://linkedin.com/in/adam-kuphaldt-16a33768' };

var rachelH = {
    name: 'Head TA Rachel Huang',
    img: 'Fa13/RachelHuang.jpg',
    imgSrc: 'RachelHuang.jpg',
    email: 'rachel@cs10.org'
};

var alexM = {
    name: 'TA Alex McKinney',
    img: 'Sp14/AlexMcKinney.jpg',
    imgSrc: 'AlexMcKinney.jpg',
    email: 'alex@cs10.org'};
    
var amrutaY = {
    name: 'TA Amruta Yelamanchili',
    img: 'Sp14/AmrutaYelamanchili.jpg',
    imgSrc: 'AmrutaYelamanchili.jpg',
    email: 'amruta@cs10.org'};


var andyS = {
    name: 'Development TA Andy Schmitt',
    img: 'Sp14/AndrewSchmitt.jpg',
    imgSrc: 'AndrewSchmitt.jpg',
    email: 'andy@cs10.org'};
    
var aranyU = {
    name: 'TA Arany Uthayakumar',
    img: 'Sp14/AranyUthayakumar.jpg',
    imgSrc: 'AranyUthayakumar.jpg',
    // bio: 'AranyBio.txt',
    email: 'arany@cs10.org' };

var carlosF = {
    name: 'TA Carlos Flores',
    img: 'Sp14/CarlosFlores.jpg',
    web: 'http://carlos.codes',
    imgSrc: 'CarlosFlores.jpg',
    email: 'carlos@cs10.org' };
    
var claireW = {
    name: 'TA Claire Watanabe',
    img: 'Fa13/ClaireWatanabe.jpg',
    imgSrc: 'ClaireWatanabe.jpg',
    email: 'claireleilani@berkeley.edu'};

var erikD = {
    name: 'TA Erik Dahlquist',
    img: 'Sp15/ErikDahlquist.jpg',
    imgSrc: 'ErikDahlquist.jpg',
    email: 'erik@cs10.org' };

var jannaG = {
    name: 'TA Janna Golden',
    img: 'Sp14/JannaGolden.jpg',
    imgSrc: 'JannaGolden.jpg',
    email: 'janna@cs10.org'
};

var josephC = {
    name: 'TA Joseph Cawthorne',
    img: 'Fa13/JosephCawthorne.jpg',
    imgSrc: 'JosephCawthorne.jpg',
    email: 'joseph@cs10.org' };
    
var laraM = {
    name: 'TA Lara McConnaughey',
    img: 'Su15/LaraMcConnaughey.jpg',
    imgSrc: 'LaraMcConnaughey.jpg',
    email: 'lara@cs10.org'
};

var stevenT = {
    name: 'Development TA Steven Traversi',
    img: 'Sp14/StevenTraversi.jpg',
    imgSrc: 'StevenTraversi.jpg',
    imgCrazy: 'StevenTraversiCrazy.jpg',
    web: 'http://steven.codes',
    bio: 'StevenBio.txt',
    email: 'steven@cs10.org'
};

var victoriaS = {
    name: 'Development TA Victoria Shi',
    img: 'Fa13/VictoriaShi.jpg',
    imgSrc: 'VictoriaShi.jpg',
    // bio: 'VictoriaBio.txt',
    email: 'victoria@cs10.org' };
    
var yifatA = {
  name: 'TA Yifat Amir',
  img: 'sp16/YifatAmir.jpg',
  imgSrc: 'YifatAmir.jpg',
  email: 'yifat@cs10.org'
};

var williamT = {
  name: 'TA William Tang',
  img: 'NPY3D.jpg',
  imgSrc: 'NPY3D.jpg',
  email: 'william@cs10.org'
};

// Readers
var jobelV = {
    name: 'Reader Jobel Vecino',
    img: 'Fa13/JobelVecino.jpg',
    imgSrc: 'JobelVecino.jpg' };

var katherineM = {
    name: 'Reader Katherine McGauley',
    img: 'Su15/KatherineMcGauley.jpg',
    imgSrc: 'KatherineMcGauley.jpg' };

var lucasK = {
    name: 'Reader Lucas Karahadian',
    img: 'NPY3D.jpg',
    imgSrc: 'NPY3D.jpg',
};

var meghnaD = {
    name: 'Reader Meghna Dasgupta',
    img: 'NPY3D.jpg',
    imgSrc: 'NPY3D.jpg',
};

var addisonH = {
    name: 'Reader Addison Howe',
    img: 'NPY3D.jpg',
    imgSrc: 'NPY3D.jpg',
};

var elizabethS = {
    name: 'Reader Elizabeth Steger',
    img: 'sp16/ElizabethSteger.jpg',
    imgSrc: 'ElizabethSteger.jpg',
};



/*****************************************************************************/
/** LIST DEFINITIONS **/
/*****************************************************************************/

var inst = [ GeraldF, JustinH ];
var tas = [ adamK, rachelH, alexM, amrutaY, aranyU, erikD, jannaG, josephC, laraM, williamT, yifatA, andyS, stevenT, victoriaS ];

//var readers = [ jobelV, katherineM, laraM ]; todo: Update this once readers are hired!
var readers = [ addisonH, elizabethS, jobelV, lucasK, meghnaD ];

// If you need to add a new SECTION add it to this object.
// Follow the same format.
var all = {
    readers: readers,
    tas: tas,
    inst: inst
};

/*****************************************************************************/
/* DATA POPULATION FUNCTIONS  */
/*****************************************************************************/

// Build a basic object for a person from the current semester.
function baseObj(name, baseDir) {
    var src = name.replace(/ /g , '');
    var baseDir = baseDir || 'Sp14/';
    return { name: name,
             img: baseDir + src + '.jpg',
             imgSrc: src + '.jpg' };
}

function buildPerson(data, width) {
    var imgPathBase, imgPath, cls, elm, crazyPath;
    // Given a JSON object build a div that contains all the person's info
    // width is used to control how many are on a row on the page.

    // Build data objects for very simple cases with nothing special.
    if (data.constructor === String) {
        data = baseObj(data);
    }
    // when developing load images from a submodule, else load from /resources
    if (window.location.hostname === 'localhost') {
        imgPathBase = '/sp16'
    } else {
        imgPathBase = '';
    }
    imgPath = imgPathBase + '/resources/images/small/' + data.imgSrc;

    // Date Hacks for fun!
    if (Date().substr(4, 6) == 'Apr 01') {
        imgPath = 'https://www.cs.berkeley.edu/~ddgarcia/i/DanGarciaUCBFaculty2004Eyebrow_320.jpg';
    }

    // Create a div with this person's data, setting a class for width
    // Col-md- is based on standard bootstrap classes, md-20 is my own addition.
    cls = 'col-md-' + (width === 5 ? '20' : Math.floor(12/width));
    elm = '<div class="'+ cls + '">';
    if (data.img) {
        elm += '<a href="' + imgPathBase + '/resources/images/' + data.img + '">';
    }

    elm += '<img class="staff" align="center" ';
    elm += 'alt=" Staff Photo: ' + data.name + '" title="' + data.name + '" src="';
    elm += imgPath + '"';
    if (data.imgCrazy) {
        crazyPath = imgPath.replace('.jpg', 'Crazy.jpg');
        elm += ' onmouseenter="crazyImage(this, ' + " '" + crazyPath + "'" + ')"';
        elm += ' onmouseleave="normalImage(this,' + " '" + imgPath + "'" + ')"';
    }
    elm += '/>';
    if (data.img) {
        elm += '</a>';
    }
    elm += '<br><strong>';
    if (data.web) {
        elm += '<a href="' + data.web + '" target="_blank">' + data.name + '</a>';
    } else {
        elm += data.name;
    }
    elm += '</strong> ';
    if (data.bio) {
        elm += '(<a href="/sp16/bios/' + data.bio + '">bio</a>)';
    }
    if (data.email) {
        elm += '<br><a href="mailto:' + data.email +
        '?subject=[CS10] SUBJECT"><code>' + data.email + '</code></a>';
    }
    if (data.office) {
        elm +=  '<br>' + data.office;
    }
    elm += '</div>';
    return elm;
}

function buildGroup(group, w) {
    // Create image elements for all photos in the group (HTML ID)
    // with a WIDTH of w photos per row.
    var ppl = all[group];
    var doc = document.getElementById(group);
    var content = '';
    for (var i = 0; i < ppl.length; i += w) {
        content += '<div class="row staffimgrow">';
        for (var j = i; j < (i + w) && j < ppl.length; j += 1) {
            if (i + w > ppl.length) {
                 w = ppl.length - i;
             }
            content += buildPerson(ppl[j], w);
        }
        content += '</div>';
        content += '<div class="clearfix"></div>';
    }
    doc.innerHTML += content;
}

function addLoadEvent(func) {
  var oldonload = window.onload;
  if (typeof window.onload != 'function') {
    window.onload = func;
  } else {
    window.onload = function() {
      if (oldonload) {
        oldonload();
      }
      func();
    };
  }
}

function crazyImage(image, crazyPath) {
    image.src = crazyPath;
}
function normalImage(image, normalPath) {
    image.src = normalPath;
}

/* more code to run on page load */
// Parameters: a section (HTML 'id') and num of images per row.
buildGroup('inst', 5);
buildGroup('tas', 5);
buildGroup('readers', 3);
