var cs10 = cs10 || {};

// Sunday at the start of the semester
cs10.startDate = '{{ site.startDate }}';
cs10.endDate   = '{{ site.endDate }}';

cs10.bCoursesID = '{{ site.bCourses }}';
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


function bcourses(id) {
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
    var baseURL = '{{ site.labsurl }}/topic/topic.html?topic=';
    var urlEnd  = '&novideo&noreading&noassignment&course={{ site.labsCourse }}';
    var lab = { type: 'Lab' };

    // Global Counter for lecture
    cs10.rqCounter = cs10.rqCounter || 0;
    cs10.labCounter = cs10.labCounter || 0;

    if (!title) {
        title = 'No Lab';
    }
    lab.title = title;
    
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
        title: title || 'No Reading',
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
    if (!title) {
        title = 'No Lecture';
    }
    lect.title = title;
    
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
    if (!title) {
        title = 'No Discussion';
    }
    disc.title = title;
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

cs10.objectType = {
    'readings': cs10.newReadingsObject, // Readings
    'lect1': cs10.newLectureObject,    // Mon Lecture
    'lab1': cs10.newLabObject,     // 1st Lab
    'lect2': cs10.newLectureObject,    // Wed Lecture
    'lab2': cs10.newLabObject,     // 2nd Lab
    'disc': cs10.newDiscussionObject,     // Discussion
    'hw': cs10.newHomeworkObject        // Assignments
};

cs10.weeklyFormat = [
    'readings', // Readings
    'lect1',    // Mon Lecture
    'lab1',     // 1st Lab
    'lect2',    // Wed Lecture
    'lab2',     // 2nd Lab
    'disc',     // Discussion
    'hw'        // Assignments
];

// ==================================================
// ==========     RENDERING CODE           ==========
// ==================================================
// REQUIRES MOMENTJS
cs10.getWeekStartDate = function(week) {
    var start = moment(cs10.startDate);

    return start.add((week - 1) * 7 + 1, 'd');
}

// TODO: Extra more stuff into this object.
// The calendar will be the main render for the site.
function Calendar(weeks) {
    this.num_weeks = weeks;
    return this;
}

Calendar.prototype.renderTableCalendar = function(schedule) {
    var result = $('<tbody>');
    var table = $('.calendar.table');
    if (table.length === 0) { return; }
    for(var i = 1; i <= this.num_weeks; i += 1) {
        result.append(this.renderWeek(i, schedule['week' + i]));
    }
    table.append(result);
};

/*
    Given a cellType, and some data, find renderFunction for that type
    and call it with data.
    Note that this handles calling the function based on a somewhat arbitrary
    naming scheme.
*/
Calendar.prototype.renderCell = function(data) {
    if (!data) {
        return;
    }
    if (data.constructor == Array) {
        var result = $('<td>'),
            myself = this;
        data.forEach(function (datum) {
            result.append(myself.renderCell(datum));
        });
        return result;
    }
    
    var functionName = 'render' + data.type;
    if (this[functionName]) {
        return this[functionName](data);
    }
    return data;
}

Calendar.prototype.renderWeek = function(week, data) {
    var row = $('<tr>').addClass('cal'),
        myself = this;

    // TODO: Special Case For data.special
    // TODO: Handle Exams (data.exams)

    row.append($('<td>').html(week))                     // Week Number
       .append($('<td>').html(cs10.getDateString(week))) // Dates
    cs10.weeklyFormat.forEach(function (key) {
        console.log('Rendering: ', key);
        // The lecture object is a basic object which works well
        // for just titles.
        if (typeof data[key] === 'string') {
            data[key] = cs10.newLectureObject(data[key]);
        }
        if (!data[key]) {
            data[key] = cs10.objectType[key]();
        }
        
        row.append(myself.renderCell(data[key]));
    });

    return row;
};


cs10.getDateString = function(week) {
    var start = cs10.getWeekStartDate(week);
    var end   = moment(start).add(4, 'd');
    return (start.month() + 1) + '-' + start.date() + ' to ' +
            (end.month() + 1) + '-' + end.date();
};

Calendar.prototype.renderReading = function(readings) {
    
    function renderSingleReading(rd) {
        return $('<a>').html(rd.title).attr({
            'class': rd.classes, 'href': rd.url, 'target': '_blank'
        }).add('<br>');
    }
    
    var result = $('<td>');
    if (!readings) {
        result.append('No Reading');
    } else if (typeof readings === 'string') {
        result.append(readings);
    } else if (readings.constructor === Array) {
        readings.forEach(function (reading) {
            result.append(renderSingleReading(reading));
        });
    } else {
        return $('<span>').append(renderSingleReading(readings));
    }
    return result;
};

Calendar.prototype.renderLecture = function(lect) {
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

Calendar.prototype.renderLab = function(lab) {
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

Calendar.prototype.renderDiscussion = function(disc) {
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

Calendar.prototype.renderHomework = function(hw) {
    var result = $('<td>');
    if (!hw) {
        hw = [cs10.newHomeworkObject('No Homework')];
    } else if (typeof hw === 'string') {
        hw = [cs10.newHomeworkObject(hw)];
    }

    result.append(hw.title);
    result.append('<br>');
    result.attr({ 'class' : hw.classes });

    var j = 0, links = hw.urls.length, item;
    for (; j < links; j += 1) {
        item = hw.urls[j];
        result.append($('<a>').html(item.title).attr({
            href: item.url,
            target: '_blank'
        }));

        if (j + 1 < links) {
            result.append(' | ');
        }
    }

    if (hw.url) {
        result.append($('<a>').html('Submit').attr({
            'href' : hw.url, }));
    }
    if (hw.due) {
        result.append('<br>');
        result.append($('<i>').html('due ' + hw.due + ' at 11:59pm'));
    }
    
    // if (i + 1 < hw.length) {
    //     result.append('<hr>');
    // }

    return result;
};
