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
    startDate = new Date('08/20/2016'); // The SATURDAY before the first week of the calendar.

function docs(id) {
    return 'assign.html?//docs.google.com/document/d/' + id + '/pub';
}

function lectureURL(googId) {
   return 'https://docs.google.com/a/berkeley.edu/presentation/d/' +
           googId +  '/edit?usp=sharing';
}

// CONSTANTS:
var hw1Spec         = docs('1ybuatsrUMCI-tHHRPwxUpGoZoGxk_SEiGEArocQtIlI')
    hw2Spec         = docs('1NrZaFKMIeN7Jvfpwe8Auv6Cc-OhcOIZzZX83IN2azPA')
    hw3Spec         = docs('1z-DZD3ya3Uxp9WkkmqF838Giq_VEjtdmXNI0dVzU5sg')
    mtProjSpec      = docs('1fFLorzOLOIO4WXzIxllMBACuEvMWZx-ykeLO-rsAIjc')
    exploreSpec     = docs('1i79rb0BL0FJV54cy7s-VC1wa7bUwlfVUT5xFN_o2EDc')
    finalProjSpec   = docs('1eoPoHWad-yBrsIFKZx_AltKD4xlcvVPEdGxIviQQMGM')
    hw0             = hw('HW0', '8/28', 'quizzes/2262950')
    hw1             = hw('HW1: Word Guessing', 'TBD', 'assignments/7725682', hw1Spec)
    hw2             = hw('HW2: Encryptify', 'TBD', 'assignments/7725961', hw2Spec)
    hw3             = hw('HW3: 2048','TBD', 'assignments/7725684', hw3Spec)
    mProposal       = hw('Midterm Project Proposals', 'TBD', 'assignments/7725687', mtProjSpec)
    mMilestone      = hw('Midterm Project<br> Milestone', 'TBD', 'assignments/7725686')
    mProject        = hw('Midterm Project', 'TBD', 'assignments/7725685', mtProjSpec)
    explorePost     = hw('"Explore" Writing Assignment', 'TBD', '/discussion_topics/5042373', exploreSpec)
    exploreComments = hw('"Explore" Comments', 'TBD', '/discussion_topics/5042373')
    fProposal       = hw('Final Project Proposal', 'TBD', 'assignments/7725681', finalProjSpec)
    fMilestone      = hw('Final Project Milestone', 'TBD', 'assignments/7725680')
    fProject        = hw('Final Project', 'TBD', 'assignments/7725679')

// ==================================================
// ==========     SCHEDULE ITEMS           ==========
// ==================================================

// AUG 22 - 26
cs10.week1 = {
    readings: 'No Readings',
    lect1: lect('No Lecture Monday'),
    lab1: lab('No Labs Monday, Tuesday, or Wednesday morning'),
    lect2: lect('Welcome and Abstraction'
        //lectureURL('1T9abQi3qjhWi4ws0pADRiYBkpP-lvs5TKyokVPJWUFU')
    ),
    lab2: lab("Welcome to <span class='snap'>snap</span>", "berkeley_bjc/intro_pair/1-introduction.topic"),
    disc: disc('Welcome to CS10!'),
    hw: hw0
};

// AUG 29 - SEP 2
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
    lect1: lect('Building Blocks'
            //lectureURL('12LLM36NEfkylUsy9mG-1TnvorovQbYxhUDI_cMSzDuU')
    ),
    lab1: lab('Build Your Own Blocks', 'berkeley_bjc/intro_pair/2-loops-variables.topic'),
    lect2: lect('Numbers and Abstraction'
            //lectureURL('1TVXERNz4ude_YYsPccwwirFWxXQXSs2ex-cccHytfzo')
    ),
    lab2: lab('Conditionals and Reporters', 'berkeley_bjc/intro_pair/3-conditionals.topic', true),
    disc: disc('Anatomy of a Computer and the Power of Binary'),
    hw: hw1
};

// SEP 5 - 9
cs10.week3 = {
    readings: [
        reading('The First Object Oriented Software System', 
                'https://www.youtube.com/watch?v=yyYB_Vo15WE'),
        reading('The Story of Alan Turing &amp; His Machine',
                'https://youtu.be/CQhrMmbiaM0'),
        reading('BtB Chapter 1',
                '{{ site.baseurl }}/resources/readings/btb/chapter1.pdf')
    ],
    lect1: lect('No Lecture - Enjoy Your Labor Day!'
            //lectureURL('1guhwTCV3PgH7QVVSt-bQlyeQsGACulRLzHWgio_wd2c')
    ),
    lab1: lab('Functions', 'berkeley_bjc/intro_pair/4-abstraction-testing.topic', true),
    lect2: lect('Lists and Scoping'
            //lectureURL('1HielUCvYaOTgqnyP9UciJx-PUBbyhbfxTQWO0Tb9kbU')
    ),
    lab2: lab('Lists I', 'berkeley_bjc/lists/lists-I.topic'),
    disc: disc('All about lists'),
    hw: hw2
};
// cs10.week3.lect3.classes = 'exam';
// cs10.week3.work.title += '<hr><strong>Finch Robots Lab (Sect 111)</strong>';

// SEP 12 - 16
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
    lect1: lect('Algorithms'
            //lectureURL('1v5SU7KQiGuCuAFXBmwjrI0fR8U8NYsenNHL6qWlScng')
    ),
    lab1: lab('Algorithms', 'berkeley_bjc/areas/algorithms.topic', true),
    lect2: lect('Algorithmic Complexity'
            //lectureURL('1dExMn1OoSs-wo3sLNXFnd4TYL_vl4bDfguzNtZLSeww')
    ),
    lab2: lab('Algorithmic Complexity', 'berkeley_bjc/areas/algorithm-complexity.topic'),
    disc: disc('Quest Review'),
    hw: hw2
};

// SEP 19 - 23 
cs10.week5 = {
    readings: 'No Readings for this Week - Study for the Quest!',
    lect1: lect('Programming Paradigms'),
    lab1: lab('Quest Review'),
    lect2: lect('<br><a href="exams/quest.html">Quest</a><br><br>Weds 9/21<br>In Class<br>Pauley Ballroom'),
    //lab2: lab('Finch Lab', 'berkeley_bjc/robots/robots.topic'),
    lab2: lab('Testing, HW3', 'berkeley_bjc/2048-testing/2048.topic'),
    disc: disc('Quest Debrief and HW3 Introduction'),
    hw: hw2
};

cs10.week5.lect2.classes = 'exam';

// SEP 26 - 30
cs10.week6 = {
    readings: [
        reading('BtB Chapter 5',
        'http://www.bitsbook.com/wp-content/uploads/2008/12/chapter5.pdf'),
    ],
    lect1: lect('Concurrency'
        //lectureURL('1-jlAQQiITE7-XPIK1mxirLtgFmJyIhCJ1LzTGYYMOgs')
        //'TA Alex McKinney'
    ),
    lab1: lab('Concurrency', 'berkeley_bjc/areas/concurrency.topic', true),
    lect2: lect('Testing + HW3'
            //lectureURL('14erZ9b8MJZlVTVcTPzHUm9uWynjpiSQHpo8skkkMLtM')
    ),
    lab2: lab('HW3 Work Session'),
    //lab2: lab('Trees and Fractals Using Recursion', 'berkeley_bjc/recur/recursion-trees-fractals.topic'),
    disc: disc('HW3 Help'),
    hw: hw3
};

// OCT 3 - 7
cs10.week7 = {
    readings: [
        reading('The End of Moore\'s Law',
                'http://www.nytimes.com/2015/09/27/technology/smaller-faster-cheaper-over-the-future-of-computer-chips.html?_r=0'),
        reading('eWEEK at 30: Multicore CPUs Keep Chip Makers in Step With Moore\'s Law',
            'https://docs.google.com/document/d/1FC-_lcn_EWlGXLfPDlQbSQeE1Q4NpTG39S-kVkHRxv8/edit?usp=sharing')
    ],
    lect1: lect('Artificial Intelligence'
            //lectureURL('13WLfJKmyCxLIT8kJfbxlbp2hU9mb7MSfW3o16Uxv6Cw')
    ),
    lect2: lect('Social Implications of Computing I'
        //lectureURL('1NuOa586nkC1m95X_5LYyiI4gs0s3XL5eRZF7DeH81us')
    ),
    lab1: lab('Tic-Tac-Toe, Boards', 'berkeley_bjc/lists/tic-tac-toe.topic', true),
    lab2: lab('Midterm Project Work Session'),
    disc: disc('AI and Social Implications'),
    hw: mProposal
};

// OCT 10 - 14
cs10.week8 = {
    readings: [
        reading('BtB chapter 2, pg. 19-29, 36-42',
                'http://www.bitsbook.com/wp-content/uploads/2008/12/chapter2.pdf'),
        reading('Rest of BtB chapter 2',
                'http://www.bitsbook.com/wp-content/uploads/2008/12/chapter2.pdf', 'optional'),
    ],
    lect1: lect('Recursion I'
            //lectureURL('1NFpvg3lzj3hrojXZPk42xoBM3MEFEy8FRl-VeR9Sdxs')
    ),
    lab1: lab('Trees and Fractals Using Recursion', 'berkeley_bjc/recur/recursion-trees-fractals.topic', true),
    lect2: lect('Social Implications of Computing II'),
    lab2: lab('Midterm Project Work Session'),
    disc: disc('Recursion'),
    hw: mMilestone
};

// OCT 17 - 21
cs10.week9 = {
    readings: [
        reading('As We May Think',
                'http://www.theatlantic.com/magazine/archive/1945/07/as-we-may-think/303881/')
    ],
    disc: disc('More on Recursion'),
    lab1: lab('Recursive Reporters', 'berkeley_bjc/recur/recursive-reporters-part1.topic', true),
    lab2: lab('Midterm Project Work Session'),
    lect1: lect('Recursion II'
            //lectureURL('1M5dhs9NnnDvs62dSNO22tcLYg-JGo_wDvNfVosQMSUs')
            //lectureURL('1o4GtTha_TbRNCvqp7wEchJxGaeoENnH3KTX0Hl6nvD0')
    ),
    lect2: lect('Social Implications of Computing III'
            //lectureURL('1eXJOOJotmIOCTdwYadz6_hJ8SRvvl0bmuKxZwdx8_lY')
            //'L15 - HCI'),
    ),
    //lab2: lab('Project Work Session'),
    hw: mProject
};
//cs10.week9.lect2.classes = 'exam';
//cs10.week9.lect2.title += '<br><br><div class="exam inner"><a href="exams/midterm.html">Midterm Exam</a><br><br>Wednesday 3/16<br>7 - 9 PM | 155 Dwinelle Hall</div>';


// OCT 24 - 28
cs10.week10 = {
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
    disc: disc('Midterm Review'),
    lect1: lect('Procedures as Data - Higher Order Functions'
            //lectureURL('12n7JQXQCJHBt7SjKjGGkVNP5iyhAngOLMVeMpg40D8I')
            //lectureURL('1TwO63UECd9I4ufKDYUj9LDFT6RrDOtFQlbbcC9oBebE')
    ),
    lect2: lect('Python I'
            //lectureURL('1kZ2LwxKUTJLyo5GlLUdX72S9xT_9YqblN5WLD8y8Gg0')
            //lectureURL('1Ouz8QdPT-L0x3lg77S2yBGbsqjmuKJLAG3SjxtD7zLQ')
    ),
    //lab1: lab('The Internet', 'berkeley_bjc/areas/internet.topic', true),
    lab1: lab('Functions as Data and HOFs', 'berkeley_bjc/hofs/hofs-practice.topic', true),
    lab2: lab('Besides Blocks: Welcome to Python', 'berkeley_bjc/python/besides-blocks-welcome.topic'),
    hw: 'No homework - Study for the Midterm Exam!'
};

// OCT 31 - NOV 4
cs10.week11 = {
    readings: 'No Reading.',
    disc: disc('Midterm Debrief'),
    lect1: lect('<br><br><div class="exam inner"><a href="exams/midterm.html">Midterm Exam Part I</a><br><br>Monday 10/31<br>Pauley Ballroom</div>'
    ),
    lect2: lect('<br><br><div class="exam inner"><a href="exams/midterm.html">Midterm Exam Part II</a><br><br>Wednesday 11/2<br>Pauley Ballroom</div>'
    ),
    //lab1: lab('The Internet', 'berkeley_bjc/areas/internet.topic', true),
    lab1: lab('Online <span class="snap">snap</span> Midterm'),
    lab2: lab('Finch Lab', 'berkeley_bjc/robots/robots.topic'),
    hw: 'Start Thinking about Explore Post'
};

cs10.week11.lect1.classes = 'exam';
cs10.week11.lect2.classes = 'exam';


// NOV 7 - 11
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
    lect1: lect('Python II'
            //lectureURL('1awAwgpYve-vCKUx9LmFr5ZFKbfS15cQuTp3Prg7QiWw')
            //lectureURL('1dqoMCkDFxoGusaJBwyvMYMgoPY47wUt8WRgG1HOVfLQ')
    ),
    lect2: lect('Python III'
            //lectureURL('1syVIRCXLGgo9M0BUS4X-GLVeQq2-gBwwsUwQ7XJ8f0s')
    ),
    lab1: lab('Besides Blocks: Data Structures in Python', 'berkeley_bjc/python/besides-blocks-data-struct.topic', true),
    lab2: lab('Besides Blocks: Text Processing in Python', 'berkeley_bjc/python/besides-blocks-text-processing.topic'),
    hw: explorePost
};

// NOV 14 - 18
cs10.week13 = {
    readings: [
        reading('Addicted to Apps', 'http://www.nytimes.com/2013/08/25/sunday-review/addicted-to-apps.html?_r=0'),
        reading('CS8 lecture 1', 'https://www.youtube.com/watch?v=69hHbVza7XI&t=27m49s', 'optional')
    ],    
    disc: disc('The Internet'),
    lect1: lect('HCI'),
    lect2: lect('The Internet'
            //lectureURL('16NZgPMLObCthVot7vZwofOqctfhir2xKj6ajTyc1FZw')
            //lectureURL('1MLG5pjfSrvZ17WNp5CSfPbPa3QOnxKtNGKlfRIGgEPw')
    ),
    lab1: lab('Project Work Session', null, true), //, 'berkeley_bjc/python/besides-blocks-data.topic'),
    lab2: lab('The Internet', 'berkeley_bjc/areas/internet.topic'),
    hw: [exploreComments, fProposal]
};


// NOV 21 - 25
cs10.week14 = {
    readings: [
        reading('A World Without Work', 'http://www.theatlantic.com/magazine/archive/2015/07/world-without-work/395294/'),
        reading('Gladwell vs. Shirky: A Year Later, Scoring the Debate Over Social-Media Revolutions', 'http://www.wired.com/2011/12/gladwell-vs-shirky/')
    ],
    disc: disc('No Discussion - Enjoy your Thanksgiving Break!'),
    lab1: lab('Final Project Work Session', null, true),
    lect1: lect('Limits of Computing'
            //lectureURL('1SvosTLRIU9IfgXD75v_lctIOvHaBARc9sm7Y5Dn-J8g')
    ),
    lect2: lect('No Lecture - Enjoy your Thanksgiving Break!'
            //lectureURL('147eSV_T3_01IDdzPy0CYM1l66ETqZhKTRCOI1C-5448')
    ),
    lab2: lab('No Lab - Enjoy your Thanksgiving Break!'),
    hw: fMilestone
};

// NOV 28 - DEC 2
cs10.week15 = {
    readings: [
        reading('BtB Chapter 6','http://www.bitsbook.com/wp-content/uploads/2008/12/chapter6.pdf'),
        reading('A Quantum Leap in Computing?', 'http://www.newyorker.com/tech/elements/a-quantum-leap-in-computing', 'optional')
    ],       
    disc: disc('Farewell! Recap and Feedback'),
    lab1: lab('Project Work Session', null, true),
    lect1: lect('Saving'
            //lectureURL('0B7pxUEY76zATblJZa25NNUl1cGM')
            //lectureURL('1_k3boAVzNT3W_z-uhmbdP5tugM4PUuGwT-BPSmU8A-o')
    ),
    lect2: lect('Conclusion'
            //lectureURL('1KY3qeS_drHb28FgWQ_RDs-K7QEPeuHRdQhjphttfZmI')
            //lectureURL('1CgPu3RBXYUyN7r0X6NpWzgGN95cZIPyfqTSNBCX7nd4')
    ),
    lab2: lab('In-Lab Final Exam'),
    hw: fProject
};

// DEAD WEEK
// DEC 5 - 9
cs10.week16 = {
    special: 'RRR Week -- No Class',
    readings: 'No Reading.',
    hw: 'Study for the Final'
};

// DEC 12 - 16
cs10.week17 = {
    readings: 'No Reading.',    
    lab1: lab('<br><br><div class="exam inner">Final Exam<br><br>Tuesday 12/13<br>7:00 - 10:00 PM</div>'),
    hw: 'Enjoy your Winter Break!'
};
cs10.week17.lab1.classes = 'exam';


// Load the Calendar
$(document).ready(function() {
    cs10.renderTableCalendar();
    updateCalendar(startDate);
});
