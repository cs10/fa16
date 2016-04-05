/* Shortcuts for creating schedule objects
 * Parameters:
 * Reading: (title, link, 'type [required is default]')
 * Lecture: (title, '[slides folder]', '[video URL]', '[Guest Name]')
 * lab1:     (title, 'topic file path', [boolean -- Reading Quiz?], 'video link')
 * disc:    (title, [boolean -- Resources available?])
 * HW:      (title, TBD...)
 * NOTE: These links are currently relative to the home page.
 */
var lab      = cs10.newLabObject,
    work     = lab, // shortcut for work sessions.
    reading  = cs10.newReadingsObject,
    lect     = cs10.newLectureObject,
    disc     = cs10.newDiscussionObject,
    hw       = cs10.newHomeworkObject,
    startDate = new Date('1/16/2016'); // The SATURDAY before the first week of the calendar.

function docs(id) {
    return 'assign.html?//docs.google.com/document/d/' + id + '/pub';
}

function lectureURL(googId) {
   return 'https://docs.google.com/a/berkeley.edu/presentation/d/' +
           googId +  '/edit?usp=sharing';
}

// CONSTANTS:
var hw1Spec = docs('1ybuatsrUMCI-tHHRPwxUpGoZoGxk_SEiGEArocQtIlI');
var hw2Spec = docs('1NrZaFKMIeN7Jvfpwe8Auv6Cc-OhcOIZzZX83IN2azPA');
var hw3Spec = docs('1z-DZD3ya3Uxp9WkkmqF838Giq_VEjtdmXNI0dVzU5sg');
var mtProjSpec = docs('1fFLorzOLOIO4WXzIxllMBACuEvMWZx-ykeLO-rsAIjc');
var exploreSpec = docs('1i79rb0BL0FJV54cy7s-VC1wa7bUwlfVUT5xFN_o2EDc');
var finalProjSpec = docs('1eoPoHWad-yBrsIFKZx_AltKD4xlcvVPEdGxIviQQMGM');

// ==================================================
// ==========     SCHEDULE ITEMS           ==========
// ==================================================

// JAN 19 - 22
cs10.week1 = {
    readings: 'No Readings',
    lect1: lect('No Lecture Monday'),
    lab1: lab('No Labs Monday, Tuesday, or Wednesday morning'),
    lect2: lect(
        'Welcome and Abstraction',
        'https://docs.google.com/a/berkeley.edu/presentation/d/1T9abQi3qjhWi4ws0pADRiYBkpP-lvs5TKyokVPJWUFU/edit?usp=sharing'
    ),
    lab2: lab("Welcome to <span class='snap'>snap</span>", "berkeley_bjc/intro_pair/1-introduction.topic"),
    disc: disc('Welcome to CS10!'),
    hw: hw('HW0', '1/24', 'quizzes/2162430')
};

// JAN 25 - 29
cs10.week2 = {
    readings: [
        reading('Prof. Harvey\'s Intro to Abstraction',
                docs('1PZJ_LYYWRYu12cTbBKF9IyY4BqEG-BibgisBoQn9BpY')),
        reading('Learning to Code!', 'http://www.youtube.com/watch?v=dU1xS07N-FA'),
        reading('Is Abstraction the Key to Computing?',
                bcourses('59744797'),
                'optional'),
        reading('Scratch: Programming for All',
                bcourses('59744796'),
                'optional')
    ],
    lect1: lect('Procedures', 'https://docs.google.com/a/berkeley.edu/presentation/d/12LLM36NEfkylUsy9mG-1TnvorovQbYxhUDI_cMSzDuU/edit?usp=sharing'),
    lab1: lab('Build Your Own Blocks', 'berkeley_bjc/intro_pair/2-loops-variables.topic'),
    lect2: lect('Numbers and Abstraction', 'https://docs.google.com/presentation/d/1TVXERNz4ude_YYsPccwwirFWxXQXSs2ex-cccHytfzo/edit?usp=sharing'),
    lab2: lab('Conditionals and Reporters', 'berkeley_bjc/intro_pair/3-conditionals.topic', true),
    disc: disc('Anatomy of a Computer and the Power of Binary', true),
    hw: hw('HW1: Word Guessing', '2/3', 'assignments/7259694', hw1Spec)
};

// FEB 1 - 5
cs10.week3 = {
    readings: [
        reading('The First Object Oriented Software System', 
                'https://www.youtube.com/watch?v=yyYB_Vo15WE'),
        reading('The Story of Alan Turing &amp; His Machine',
                'https://youtu.be/CQhrMmbiaM0'),
        reading('BtB Chapter 1',
                '{{ site.baseurl }}/resources/readings/btb/chapter1.pdf')
    ],
    lect1: lect('Multimedia Computing', 'https://docs.google.com/presentation/d/1guhwTCV3PgH7QVVSt-bQlyeQsGACulRLzHWgio_wd2c/edit?usp=sharing'),
    lab1: lab('Functions', 'berkeley_bjc/intro_pair/4-abstraction-testing.topic', true),
    lect2: lect('Lists and Programming Paradigms', 'https://docs.google.com/presentation/d/1HielUCvYaOTgqnyP9UciJx-PUBbyhbfxTQWO0Tb9kbU/edit?usp=sharing'),
    lab2: lab('Lists I', 'berkeley_bjc/lists/lists-I.topic'),
    disc: disc('All about lists', true),
    hw: hw('HW1: Word Guessing', '2/3', 'assignments/7259694', hw1Spec)
};
// cs10.week3.lect3.classes = 'exam';
// cs10.week3.work.title += '<hr><strong>Finch Robots Lab (Sect 111)</strong>';

// FEB 8 - 12
cs10.week4 = {
    readings: [
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
    lect1: lect('Algorithms', 'https://docs.google.com/presentation/d/1v5SU7KQiGuCuAFXBmwjrI0fR8U8NYsenNHL6qWlScng/edit?usp=sharing'),
    lab1: lab('Algorithms', 'berkeley_bjc/areas/algorithms.topic', true),
    lect2: lect('Algorithmic Complexity', 'https://docs.google.com/presentation/d/1dExMn1OoSs-wo3sLNXFnd4TYL_vl4bDfguzNtZLSeww/edit?usp=sharing'), 
    lab2: lab('Algorithmic Complexity', 'berkeley_bjc/areas/algorithm-complexity.topic'),
    disc: disc('Quest Review', true),
    hw: hw('HW2: Encryptify', '2/17', 'assignments/7259695', hw2Spec)
};

// FEB 15 - 19 (President's Day: Monday)
cs10.week5 = {
    readings: 'No Readings for this Week - Study for the Quest!',
    lect1: lect('No Class Monday - Presidents Day'),
    lab1: lab('Quest Review'),
    lect2: lect('Quest In Class'),
    lab2: lab('Finch Lab', 'berkeley_bjc/robots/robots.topic'),
    disc: disc('Quest Debrief'),
    hw: hw('HW2: Encryptify', '2/17', 'assignments/7259695', hw2Spec)
};
 cs10.week5.lect2.classes = 'exam';
 cs10.week5.lect2.title += '<br><a href="exams/quest.html">Quest</a><br><br>Weds 2/17<br>In Class<br>105 Stanley';

// FEB 22 - 26
cs10.week6 = {
    readings: [
        reading('BtB Chapter 5',
        'http://www.bitsbook.com/wp-content/uploads/2008/12/chapter5.pdf'),
    ],
    lect1: lect(
        'Testing',
        'https://docs.google.com/presentation/d/1-jlAQQiITE7-XPIK1mxirLtgFmJyIhCJ1LzTGYYMOgs/edit?usp=sharing',
        'TA Alex McKinney'
    ),
    lab1: lab('Testing, HW3', 'berkeley_bjc/2048-testing/2048.topic', true),
    lect2: lect('Recursion I', 'https://docs.google.com/presentation/d/14erZ9b8MJZlVTVcTPzHUm9uWynjpiSQHpo8skkkMLtM/edit?usp=sharing'),
    lab2: lab('Trees and Fractals Using Recursion', 'berkeley_bjc/recur/recursion-trees-fractals.topic'),
    disc: disc('Recursion', true),
    hw: hw('HW3: 2048','3/4', 'assignments/7515294', hw3Spec)
};

// FEB 29 - MAR 4
cs10.week7 = {
    readings: [
        reading('The End of Moore\'s Law',
                'http://www.nytimes.com/2015/09/27/technology/smaller-faster-cheaper-over-the-future-of-computer-chips.html?_r=0'),
        reading('eWEEK at 30: Multicore CPUs Keep Chip Makers in Step With Moore\'s Law',
            'https://docs.google.com/document/d/1FC-_lcn_EWlGXLfPDlQbSQeE1Q4NpTG39S-kVkHRxv8/edit?usp=sharing')
    ],
    lect1: lect('Recursion II',
            'https://docs.google.com/presentation/d/13WLfJKmyCxLIT8kJfbxlbp2hU9mb7MSfW3o16Uxv6Cw/edit?usp=sharing'
        ),
    lect2: lect('Cryptography and Security', null, 'Nick Weaver'),
//'https://docs.google.com/presentation/d/1NuOa586nkC1m95X_5LYyiI4gs0s3XL5eRZF7DeH81us/pub?start=false&loop=false&delayms=3000'),
    lab1: lab('Homework 3 Work Session', null, true),
    lab2: lab('Recursive Reporters I', 'berkeley_bjc/recur/recursive-reporters-part1.topic'),
    disc: disc('More Recursion'),
    hw: hw('HW3: 2048','3/4', 'assignments/7515294', hw3Spec)
};

// MAR 7 - 11
cs10.week8 = {
    readings: [
        reading('BtB chapter 2, pg. 19-29, 36-42',
                'http://www.bitsbook.com/wp-content/uploads/2008/12/chapter2.pdf'),
        reading('Rest of BtB chapter 2',
                'http://www.bitsbook.com/wp-content/uploads/2008/12/chapter2.pdf', 'optional'),
    ],
    lect1: lect('Algorithmic Complexity II', 'https://docs.google.com/presentation/d/1NFpvg3lzj3hrojXZPk42xoBM3MEFEy8FRl-VeR9Sdxs/edit?usp=sharing'),
    lab1: lab('Tic-Tac-Toe, Boards', 'berkeley_bjc/lists/tic-tac-toe.topic', true),
    lect2: lect('CS Ed', 'lecture/L13 cs-ed', 'Michael Ball'),
    lab2: lab('Project Work Session'),
    disc: disc('Midterm Review'),
    hw: hw('Midterm Project Proposals', '3/11', 'assignments/7259699', mtProjSpec)
};

// MAR 14 - 18
cs10.week9 = {
    readings: [
        reading('As We May Think',
                'http://www.theatlantic.com/magazine/archive/1945/07/as-we-may-think/303881/')
    ],
    disc: disc('Midterm Debrief'),
    lab1: lab('Online <span class="snap">snap</span> Midterm'),
    lab2: lab('Concurrency', 'berkeley_bjc/areas/concurrency.topic'),
    lect1: lect('Concurrency','https://docs.google.com/presentation/d/1M5dhs9NnnDvs62dSNO22tcLYg-JGo_wDvNfVosQMSUs/edit?usp=sharing'), //'https://docs.google.com/presentation/d/1o4GtTha_TbRNCvqp7wEchJxGaeoENnH3KTX0Hl6nvD0/edit?usp=sharing'),
    lect2: lect('The Internet I', 'https://docs.google.com/presentation/d/1eXJOOJotmIOCTdwYadz6_hJ8SRvvl0bmuKxZwdx8_lY/edit?usp=sharing'), //'L15 - HCI'),
    //lab2: lab('Project Work Session'),
    hw: [        
        hw('Midterm Project<br> Milestone', '3/18', 'assignments/7259698')
    ]    
};
cs10.week9.lect2.classes = 'exam';
cs10.week9.lect2.title += '<br><br><div class="exam inner"><a href="exams/midterm.html">Midterm Exam</a><br><br>Wednesday 3/16<br>7 - 9 PM | 155 Dwinelle Hall</div>';


// MAR 21 - 25 (Spring Break?)
cs10.week10 = {
    special: 'Spring Break -- No Class',
    readings: [],
    hw: hw('Continue Working On Your Project')
};

/*
cs10.week10 = {
    readings: 'No Reading.', /*[
        reading('Data Explosion Creates Revolution',
                'http://www.sfgate.com/cgi-bin/article.cgi?f=/c/a/2011/10/19/BU5K1LJ4R3.DTL'),
        reading('Data Mining',
                'https://webdocs.cs.ualberta.ca/~zaiane/courses/cmput690/notes/Chapter1/ch1.pdf'),
        reading('IBM\'s Watson supercomputer to speed up cancer care',
                'http://www.bbc.com/news/technology-32607688'),
        reading('Data Pitfalls',
                'https://searchenginewatch.com/article/2289574/Big-Data-Big-Trouble-How-to-Avoid-5-Data-Analysis-Pitfalls',
                'optional'),
        TODO: bCourses
        reading('Computing as Social Science',
                'https://cacm.acm.org/magazines/2009/4/22953-computing-as-social-science/fulltext',
                'optional')
    ], *\/
    disc: disc('No Discussion - Spring Break'),
    lab1: lab('No lab - Spring Break'),
    lect1: lect('No Lecture - Spring Break'),
    lect2: lect('No Lecture - Spring Break'),
    lab2: lab('No Lab - Spring Break'),
    hw: [
        hw('Midterm Project', 'TBD', 'assignments/6644475')
    ]
};
cs10.week10.lab2.classes = 'exam';
cs10.week10.lab2.title += '<br><br><div class="exam inner"><a href="exams/midterm.html">Midterm Exam</a><br><br>Thursday 10/29<br>8 - 10 PM | 2050 VLSB</div>';
*/



// MAR 28 - APR 1
// FIXME -- Why is BtB in Google Drive and not on the website... :'(
// Sad old TAs are sad.
cs10.week11 = {
    readings: [
        reading('TED: What is the Internet?',
                'https://www.ted.com/talks/andrew_blum_what_is_the_internet_really?language=en'),
        reading(
            'BtB pg. 295-304, 309',
            'https://drive.google.com/file/d/0B3vESj3HTRTkbVo1dTV5SUp4T0U/view?usp=sharing'),
        reading(
            'What is the Internet?',
            'https://www.youtube.com/watch?v=UlJku_CSyNg',
            'optional'),
        reading(
            'BtB pg. 305-316',
            'https://drive.google.com/file/d/0B3vESj3HTRTkbVo1dTV5SUp4T0U/view?usp=sharing',
            'optional'
        )  
    ],
    disc: disc('Concurrency, Mutability, Data and HOFs'),
    lect1: lect('Procedures as Data', 'https://docs.google.com/presentation/d/12n7JQXQCJHBt7SjKjGGkVNP5iyhAngOLMVeMpg40D8I/edit?usp=sharing'), //'https://docs.google.com/presentation/d/1TwO63UECd9I4ufKDYUj9LDFT6RrDOtFQlbbcC9oBebE/pub?start=false&loop=false&delayms=3000'),
    lect2: lect('Python I', 'https://docs.google.com/presentation/d/1kZ2LwxKUTJLyo5GlLUdX72S9xT_9YqblN5WLD8y8Gg0/edit?usp=sharing'), //'https://docs.google.com/presentation/d/1Ouz8QdPT-L0x3lg77S2yBGbsqjmuKJLAG3SjxtD7zLQ/pub?start=false&loop=false&delayms=3000'),
    //lab1: lab('The Internet', 'berkeley_bjc/areas/internet.topic', true),
    lab1: lab('Functions as Data and HOFs', 'berkeley_bjc/hofs/hofs-practice.topic', true),
    lab2: lab('Optional Make-Up/Project Work Day', null),
    hw: [
        hw('Midterm Project', '4/1', 'assignments/7259697', mtProjSpec),
        hw('"Explore" Writing Assignment', '4/3', '/discussion_topics/4632124', exploreSpec)
    ]
};

// APR 4 - 8
cs10.week12 = {
    readings: [
        reading(
            'Why Python is a Great First Language', 
            'http://blog.trinket.io/why-python/'),
        reading(
            'The GNU Manifesto Turns Thirty', 
            'http://www.newyorker.com/business/currency/the-gnu-manifesto-turns-thirty', 
            'optional'),
        reading(
            'Python vs. COBOL (parody)', 
            'https://medium.com/@oceankidbilly/python-vs-r-vs-cobol-which-is-best-for-data-science-7b2979c6a000',
            'optional')
    ],
    disc: disc('All About Python'),
    lect1: lect('Python II', 'https://docs.google.com/presentation/d/1awAwgpYve-vCKUx9LmFr5ZFKbfS15cQuTp3Prg7QiWw/edit?usp=sharing'), //'https://docs.google.com/presentation/d/1dqoMCkDFxoGusaJBwyvMYMgoPY47wUt8WRgG1HOVfLQ/edit?usp=sharing'),
    lect2: lect('Internet II'),
    lab1: lab('Besides Blocks: Welcome to Python', 'berkeley_bjc/python/besides-blocks-welcome.topic', true),
    lab2: lab('Besides Blocks: Data Structures in Python', 'berkeley_bjc/python/besides-blocks-data-struct.topic'),
    hw: [
        hw('"Explore" Comments', '4/8', '/discussion_topics/4632124'),
        hw('Final Project Proposal', '4/8', 'assignments/7259699', finalProjSpec)
    ]
};

// APR 11 - 15
cs10.week13 = {
    readings: [
        reading('CS8 lecture 1 (watch first, optional)', 'https://www.youtube.com/watch?v=69hHbVza7XI&t=27m49s', 'optional'),
        reading('Intro to Data Science (stop at Expressions)', 'http://data8.org/text/1_data.html#why-data-science')
    ],    
    disc: disc('Social Implications of Computing, Internet'),
    lab1: lab('The Internet', 'berkeley_bjc/areas/internet.topic', true), //, 'berkeley_bjc/python/besides-blocks-data-struct.topic', true),
    lect1: lect('Social Implications - Copyright'),
    lect2: lect('Social Implications - Cryptography and Security'), //'https://docs.google.com/presentation/d/1MLG5pjfSrvZ17WNp5CSfPbPa3QOnxKtNGKlfRIGgEPw/edit?usp=sharing'),
    lab2: lab('Project Work Session'), //, 'berkeley_bjc/python/besides-blocks-data.topic'),
    hw: hw('Final Project Milestone', '4/15', 'assignments/7259692')
};


// APR 18 - 22
cs10.week14 = {
    readings: [
        reading(
            'BtB Chapter 6',
            'http://www.bitsbook.com/wp-content/uploads/2008/12/chapter6.pdf',
            'optional'
        )
    ],
    disc: disc('TBD'),
    lab1: lab('Besides Blocks: Text Processing in Python', 'berkeley_bjc/python/besides-blocks-text-processing.topic', true),
    lect1: lect('TBD'), //'https://docs.google.com/presentation/d/1SvosTLRIU9IfgXD75v_lctIOvHaBARc9sm7Y5Dn-J8g/pub?start=false&loop=false&delayms=3000'),
    lect2: lect('Limits of Computing'),
    lab2: lab('Project Work Session'),
    hw: hw('Continue Working on your Project')
};

// APR 25 - 29
cs10.week15 = {
    readings: [
        reading('The Doomsday Invention', 'http://www.newyorker.com/magazine/2015/11/23/doomsday-invention-artificial-intelligence-nick-bostrom'),
        reading('A Quantum Leap in Computing?', 'http://www.newyorker.com/tech/elements/a-quantum-leap-in-computing', 'optional')
    ],       
    disc: disc('Farewell! Recap and Feedback'),
    lab1: lab('Project Work Session', null, true),
    lect1: lect('Future of Computing'), //'https://docs.google.com/presentation/d/1_k3boAVzNT3W_z-uhmbdP5tugM4PUuGwT-BPSmU8A-o/pub?start=false&loop=false&delayms=3000'),
    lect2: lect('Conclusion'), //'https://docs.google.com/presentation/d/1CgPu3RBXYUyN7r0X6NpWzgGN95cZIPyfqTSNBCX7nd4/edit?usp=sharing'),
    lab2: lab('In-Lab Final Exam'),
    hw: [        
        hw('Final Project', '4/29', 'assignments/7259691')
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
    readings: 'No Reading.',    
    lab1: lab('Final Exam<br>Tuesday, 8:00 - 11:00am<br>2050 VLSB'),
    hw: 'Enjoy your summer!'
};
cs10.week17.lab1.classes = 'exam';
cs10.week17.lab1.title += '<br><br><div class="exam inner">Final Exam<br><br>Tuesday 5/10<br>8:00 - 11:00 AM</div>';


// Load the Calendar
$(document).ready(function() {
    cs10.renderTableCalendar();
    updateCalendar(startDate);
});
