// Instructors

var DanGarcia = {
    name: 'Teaching Professor Dan Garcia',
    img: 'DanGarciaUCBFaculty2004.jpg',
    imgSrc: 'DanGarcia.jpg',
    imgCrazy: true,
    web: 'http://www.cs.berkeley.edu/~ddgarcia/',
    bio: 'DanBio.txt',
    email: 'dan@cs10.org',
    office: '777 Soda, (510) 517-4041'
};

// TAs

var adamK = {
    name: 'Head TA Adam Kuphaldt',
    img: 'Sp14/AdamKuphaldt.jpg',
    imgSrc: 'AdamKuphaldt.jpg',
    email: 'adam@cs10.org',
    web: 'https://linkedin.com/in/adam-kuphaldt-16a33768'
};

var rachelH = {
    name: 'Head TA Rachel Huang',
    img: 'Fa13/RachelHuang.jpg',
    imgSrc: 'RachelHuang.jpg',
    email: 'rachel@cs10.org'
};

var aranyU = {
    name: 'TA Arany Uthayakumar',
    img: 'Sp14/AranyUthayakumar.jpg',
    imgSrc: 'AranyUthayakumar.jpg',
    // bio: 'AranyBio.txt',
    email: 'arany@cs10.org' 
};

var carlosF = {
    name: 'TA Carlos Flores',
    img: 'Sp14/CarlosFlores.jpg',
    bio: 'CarlosBio.txt',
    imgSrc: 'CarlosFlores.jpg',
    email: 'carlos@cs10.org'
};
    
var christianL = {
    name: 'TA Christian Lista-Nicoloso',
    img: 'Christian Lista-Nicoloso.JPG',
    imgSrc: '../Fa16/Christian Lista-Nicoloso.JPG',
    email: 'christian@cs10.org'
};
    
var elizabethS = {
    name: 'TA Elizabeth Steger',
    img: 'Fa16/LizzySteger.JPG',
    imgSrc: '../Fa16/LizzySteger.JPG',
    email: 'lizzy@cs10.org'
};

var erikD = {
    name: 'TA Erik Dahlquist',
    img: 'Sp15/ErikDahlquist.jpg',
    imgSrc: 'ErikDahlquist.jpg',
    email: 'erik@cs10.org' 
};

var jannaG = {
    name: 'TA Janna Golden',
    img: 'Sp14/JannaGolden.jpg',
    imgSrc: 'JannaGolden.jpg',
    email: 'janna@cs10.org'
};

var jobelV = {
    name: 'TA Jobel Vecino',
    img: 'Fa13/JobelVecino.jpg',
    imgSrc: 'JobelVecino.jpg',
    email: 'jobel@cs10.org' 
};

var laraM = {
    name: 'TA Lara McConnaughey',
    img: 'Su15/LaraMcConnaughey.jpg',
    imgSrc: 'LaraMcConnaughey.jpg',
    //imgCrazy: 'LaraMcConnaugheyCrazy.jpg',
    email: 'lara@cs10.org'
};

var stevenT = {
    name: 'TA Steven Traversi',
    img: 'Sp14/StevenTraversi.jpg',
    imgSrc: 'StevenTraversi.jpg',
    imgCrazy: true,
    web: 'http://steven.codes',
    bio: 'StevenBio.txt',
    email: 'steven@cs10.org'
};

var yifatA = {
  name: 'TA Yifat Amir',
  img: 'Fa16/YifatAmir.JPG',
  imgSrc: '../Fa16/YifatAmir.JPG',
  web: 'https://www.linkedin.com/in/yifat-amir-45633584',
  email: 'yifat@cs10.org'
};

var williamT = {
  name: 'TA William Tang',
  img: 'Fa16/WilliamTang.JPG',
  imgSrc: '../Fa16/WilliamTang.JPG',
  email: 'william@cs10.org'
};

// Readers

var meghnaD = {
    name: 'Reader Meghna Dasgupta',
    img: 'NPY3D.jpg',
    imgSrc: 'NPY3D.jpg',
};

var addisonH = {
    name: 'Reader Addison Howe',
    img: 'Fa16/AddisonHowe.JPG',
    imgSrc: '../Fa16/AddisonHowe.JPG',
};

var samuelS = {
    name: 'Reader Samuel Starks',
    img: 'NPY3D.jpg',
    imgSrc: 'NPY3D.jpg',
};

var matthewS = {
    name: 'Reader Matthew Schwartz',
    img: 'Fa16/MatthewSchwartz.JPG',
    imgSrc: '../Fa16/MatthewSchwartz.JPG',
};

var noahJ = {
    name: 'Reader Noah Jacobs',
    img: 'NPY3D.jpg',
    imgSrc: 'NPY3D.jpg',
};




/*****************************************************************************/
/** LIST DEFINITIONS **/
/*****************************************************************************/

var inst = [ DanGarcia ];
var tas = [ adamK, rachelH, aranyU, carlosF, christianL, elizabethS, erikD, jannaG, jobelV, laraM, williamT, yifatA, stevenT ];
var readers = [ addisonH, matthewS, meghnaD, noahJ, samuelS ];

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
    var hostName = window.location.hostname;
    if (hostName === 'localhost' || hostName == '127.0.0.1') {
        imgPathBase = '{{ site.baseurl }}'
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
        elm += '(<a href="{{ site.baseurl }}/bios/' + data.bio + '">bio</a>)';
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
