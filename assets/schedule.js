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
        'Welcome and Abstraction'
        'https://docs.google.com/a/berkeley.edu/presentation/d/1T9abQi3qjhWi4ws0pADRiYBkpP-lvs5TKyokVPJWUFU/edit?usp=sharing',
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
    lect1: lect('Procedures'), //'https://docs.google.com/presentation/d/1_lKWy3HeznujFDTeRfffoGSAkvVEPqzpNvKVM2jkC0c/pub'),
    lab1: lab('Build Your Own Blocks', 'berkeley_bjc/intro_pair/2-loops-variables.topic'),
    lect2: lect('Numbers and Abstraction'), //'https://docs.google.com/presentation/d/1zHEl4C_jLGFVFznWPMWhDYFtcLENUU3_DubOb_H5UZs/pub'),
    lab2: lab('Conditionals and Reporters', 'berkeley_bjc/intro_pair/3-conditionals.topic', true),
    disc1: disc('Anatomy of a Computer and the Power of Binary'),
    hw: hw('HW1: Word Guessing', 'TBD', 'assignments/6644471', hw1Spec)
};

// FEB 1 - 5
cs10.week3 = {
    readings1: [
        reading('The First Object Oriented Software System', 
                'https://www.youtube.com/watch?v=yyYB_Vo15WE'),
        reading('The Story of Alan Turing &amp; His Machine',
                'https://youtu.be/CQhrMmbiaM0'),
        reading('BtB Chapter 1',
                '{{ site.baseurl }}/resources/readings/btb/chapter1.pdf')
        /*reading('Designing Games with a Purpose (GWAP)',
                bcourses('59744795')),*/
        // reading('Justices Split on Violent Games',
        //         bcourses('53994720')),
        // reading('Video Games Lecture',
        //         'https://coursesharing.org/courses/6/lectures/11'),
        // reading('(Slides)',
        //         '{{ site.baseurl }}/resources/readings/graphics'),

        // reading('More readings on video games',
        //         '{{ site.baseurl }}/resources/readings/video-games/',
        //         'optional'),
        /*reading('Animating a Blockbuster',
                'https://www.wired.com/magazine/2010/05/process_pixar/',
                'optional')*/
    ],
    lect1: lect('Programming Paradigms'),
    lab1: lab('Functions', 'berkeley_bjc/intro_pair/4-abstraction-testing.topic', true),
    lect2: lect('Multimedia Computing'), //'https://docs.google.com/presentation/d/136vfh3rhRyTsGUKNv1MuUSHZqdPp4xVvt9GX3LlGX6I/pub'),
    lab2: lab('Lists I', 'berkeley_bjc/lists/lists-I.topic'),
    disc1: disc('All about lists'),
    hw: hw('HW1: Word Guessing', 'TBD', 'assignments/6644471', hw1Spec)
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
    lab2: lab('Finish Lab 6 and HW2 help'),
    disc1: disc('Quest Review'),
    hw: hw('HW2: Encryptify', 'TBD', 'assignments/6644472', hw2Spec)

    // [
//         hw('Midterm Project<br><strong>Individual</strong> Milestone', '3/13', 'assignments/6120151'),
//         hw('Midterm Project<br><strong>Group</strong> Milestone', '3/13', 'assignments/6120100')
//     ]
};

// FEB 15 - 19 (President's Day: Monday)
cs10.week5 = {
    readings1: 'TBD',//[
        //reading('BtB Chapter 5',
                //'http://www.bitsbook.com/wp-content/uploads/2008/12/chapter5.pdf'),
        /*reading('BtB Chapter 4 Reading Segment 2',
                '{{ site.baseurl }}/resources/readings/btb/BtB4-pt2.pdf'),*/
        // TODO: This is paywalled....
        /*reading('Living in a Digital World',
                'https://cacm.acm.org/magazines/2011/10/131393-living-in-a-digital-world/pdf',
                'optional'),
        reading('BtB Chapter 3',
                '{{ site.baseurl }}/resources/readings/btb/chapter3.pdf',
                'optional')*/
    //],
    lect1: lect('No Class Monday - Presidents Day'),
    lab1: lab('Algorithmic Complexity', 'berkeley_bjc/areas/algorithm-complexity.topic', true),
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
    lab1: lab('TBD'),
    lect2: lect('Recursion I'),
    lab2: lab('Testing, HW3', 'berkeley_bjc/2048-testing/2048.topic'),
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
    lab1: lab('Trees and Fractals Using Recursion', 'berkeley_bjc/recur/recursion-trees-fractals.topic', true),
    lect2: lect('Computer Vision'), //'https://docs.google.com/presentation/d/1NuOa586nkC1m95X_5LYyiI4gs0s3XL5eRZF7DeH81us/pub?start=false&loop=false&delayms=3000'),
    lab2: lab('Concurrency', 'berkeley_bjc/areas/concurrency.topic'),
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
    lab1: lab('Tic Tac Toe', 'berkeley_bjc/lists/tic-tac-toe.topic'),
    lect1: lect('Concurrency'), //'https://docs.google.com/presentation/d/1o4GtTha_TbRNCvqp7wEchJxGaeoENnH3KTX0Hl6nvD0/edit?usp=sharing'),
    lect2: lect('The Internet I'), //'L15 - HCI'),
    lab2: lab('Project Work Session'),
    hw: [        
        hw('Midterm Project<br> Milestone', 'TBD', 'assignments/6644521')
    ]    
};

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
    lab1: lab('Functions as Data and HOFs', 'berkeley_bjc/hofs/hofs-practice.topic', true),
    lect1: lect('The Internet II'), //'https://docs.google.com/presentation/d/1TwO63UECd9I4ufKDYUj9LDFT6RrDOtFQlbbcC9oBebE/pub?start=false&loop=false&delayms=3000'),
    lect2: lect('Privacy'), //'https://docs.google.com/presentation/d/1Ouz8QdPT-L0x3lg77S2yBGbsqjmuKJLAG3SjxtD7zLQ/pub?start=false&loop=false&delayms=3000'),
    lab2: lab('The Internet', 'berkeley_bjc/areas/internet.topic'),
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
    lab1: lab('Besides Blocks: Welcome to Python', 'berkeley_bjc/python/besides-blocks-welcome.topic', true),
    lect1: lect('Lambda + HOFs'), //'https://docs.google.com/presentation/d/1dqoMCkDFxoGusaJBwyvMYMgoPY47wUt8WRgG1HOVfLQ/edit?usp=sharing'),
    lect2: lect('Intro to Python'),
    lab2: lab('Optional Catch-Up Day'),
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
    lab2: lab('Besides Blocks: Text Processing in Python', 'berkeley_bjc/python/besides-blocks-text-processing.topic'), //, 'berkeley_bjc/python/besides-blocks-data.topic'),
    hw: hw('Final Project Milestone', 'TBD', 'assignments/6644523')
};


// APR 18 - 22
cs10.week14 = {
    readings1: [
        reading('BtB Chapter 6',
                'http://www.bitsbook.com/wp-content/uploads/2008/12/chapter6.pdf', 'optional')
        ],
    disc1: disc('TBD'),
    lab1: lab('Project Work Session'),
    lect1: lect('Python II'), //'https://docs.google.com/presentation/d/1SvosTLRIU9IfgXD75v_lctIOvHaBARc9sm7Y5Dn-J8g/pub?start=false&loop=false&delayms=3000'),
    lect2: lect('Limits of Computing'),
    lab2: lab('TBD'),
    hw: hw('TBD')
};

// APR 25 - 29
cs10.week15 = {
    readings1: [
        reading('The Doomsday Invention', 'http://www.newyorker.com/magazine/2015/11/23/doomsday-invention-artificial-intelligence-nick-bostrom'),
        reading('A Quantum Leap in Computing?', 'http://www.newyorker.com/tech/elements/a-quantum-leap-in-computing', 'optional')
    ],       
    disc1: disc('Farewell! Recap and Feedback'),
    lab1: lab('Project Work Session'),
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
