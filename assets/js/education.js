AOS.init();

// MOOCs Cards

const moocs = document.querySelector(".moocs");
const moocscards = [
  {
    title: "DeepLearning.AI TensorFlow Developer",
    cardImage: "assets/images/education-page/coursera2.svg",
    moocLink: "https://www.coursera.org/professional-certificates/tensorflow-in-practice",
  },
  
  {
    title: "Architecting with Google Compute Engine",
    cardImage: "assets/images/education-page/coursera2.svg",
    moocLink: "https://www.coursera.org/specializations/gcp-architecture",
  },
  {
    title: "Introduction to Quantum Computing",
    cardImage: "assets/images/education-page/tcs.jpg",
    moocLink: "https://www.qubitbyqubit.org/programs",
  },
  {
    title: "CNSS Certified Network Security Specialist",
    cardImage: "assets/images/education-page/icsi.jpeg",
    moocLink: "",
  },
  {
    title: "Javascript",
    cardImage: "assets/images/education-page/udacity.svg",
    moocLink: "https://www.udacity.com/course/intro-to-javascript--ud803",
  },
  {
    title: "Bootstrap 4",
    cardImage: "assets/images/education-page/udemy.svg",
    moocLink: "https://www.udemy.com/course/bootstrap-4-tutorials/",
  },
  {
    title: "Intro to React",
    cardImage: "assets/images/education-page/edx.svg",
    moocLink: "https://www.edx.org/learn/reactjs",
  },
  {
    title: "Intro to React Native",
    cardImage: "assets/images/education-page/coursera2.svg",
    moocLink: "https://www.coursera.org/lecture/react-native/introduction-to-react-native-Eax0D",
  },
  {
    title: "NodeJS, Express and MongoDB",
    cardImage: "assets/images/education-page/coursera2.svg",
    moocLink: "https://www.coursera.org/learn/server-side-nodejs",
  },
  {
    title: "XML-AJAX",
    cardImage: "assets/images/education-page/udemy.svg",
    moocLink: "https://www.udemy.com/course/xml-from-beginner-to-expert/",
  },
  {
    title: "Data Structures & Algorithms",
    cardImage: "assets/images/education-page/udacity.svg",
    moocLink: "https://www.udacity.com/course/data-structures-and-algorithms-nanodegree--nd256",
  },
];

const exp = document.querySelector(".exp");
const experience = [
  {
    img: "assets/images/education-page/c1.png"
  },
  {
    img: "assets/images/education-page/c2.jpg"
  },
  {
    img: "assets/images/education-page/c3.png"
  },
  {
    img: "assets/images/education-page/c4.png"
  },
  {
    img: "assets/images/education-page/c5.jpg"
  },
];

let currentItem = 0;

const img = document.getElementById('image');

const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

window.addEventListener('DOMContentLoaded', function () {
  showExperience();
})

function showExperience() {
  setInterval(function () {
    if (currentItem === experience.length) {
      currentItem = 0;
    }
      const item = experience[currentItem];
      img.src = item.img;
      currentItem++;

    },
    3000);
}

const showCards = () => {
  let output = "";
  moocscards.forEach(
    ({ title, cardImage, moocLink }) =>
    (output += `        
        <div class="col-6 col-md-3 col-sm-4 column" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="600" >  
            <div class="card mb-3 mx-auto">
               <div class="content">
                  <div class="content-overlay"></div>
                    <img src=${cardImage} class="card-img-top content-image">     
                  <div class="content-details fadeIn-bottom">
                    <a href="${moocLink}" target="_blank"><i class="fa fa-info-circle fa-2x" aria-hidden="true" style="color: white;"></i></a>                                   
                  </div>
                </div>
                <div class="card-body">
                    <h6 class="mt-0 py-2 text-center font-weight-bold mooc-title" style="font-size:12px;">${title}</h6>
                </div>
            </div>
        </div>        
      `)
  );
  moocs.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);


/* Badges*/

const bagdes = document.querySelector(".badges");
const badgesection = [
  {
    title: "Microsoft Certified: Azure Developer Associate",
    image: "assets/images/education-page/microsoft-certified-azure-developer-associate.png",
    description: "Earned December 21, 2021",
  },
  {
    title: "Data Science Foundations Specialization",
    image: "assets/images/education-page/data-science-foundations-specialization.png",
    description: "Earned May 23, 2020",
  },
  {
    title: "Python for Data Science and AI",
    image: "assets/images/education-page/python-for-data-science-and-ai.png",
    description: "Earned May 16, 2020",
  },
  {
    title: "Data Visualization with Python",
    image: "assets/images/education-page/python-for-data-science-and-ai.png",
    description: "Earned May 16, 2020",
  },
  {
    title: "Python for Data Science and AI",
    image: "assets/images/education-page/data-visualization-with-python.png",
    description: "Earned June 18, 2020",
  },
  {
    title: "Data Analysis with Python",
    image: "assets/images/education-page/data-analysis-with-python.png",
    description: "Earned June 10, 2020",
  },
  {
    title: "Big Data Foundations - Level 1",
    image: "assets/images/education-page/big-data-foundations-level-1.png",
    description: "Earned May 28, 2020",
  },
  {
    title: "Cloud engineering - Google Cloud Platform",
    image: "assets/images/education-page/gcp.png",
    description: "Earned October 24, 2020",
  },
];

const showCards1 = () => {
  let output = "";
  badgesection.forEach(
    ({ title, image, description }) =>
    (output += `       
      <div class="col-lg-4 col-md-6 p-2" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="600"> 
        <img class="img-fluid d-block mb-3 mx-auto hvr-grow" src="${image}" alt="Card image cap" width="200">
          <div class="text-center font-weight-bolder" style="font-size: 1.3em;">${title}</div>
          <div class="text-center text-muted font-weight-bolder p-2">${description}</div>
      </div>`)
  );
  bagdes.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards1);


/* Timeline Section*/

$(function(){

  window.sr = ScrollReveal();

  if ($(window).width() < 768) {

    if ($('.timeline-content').hasClass('js--fadeInLeft')) {
      $('.timeline-content').removeClass('js--fadeInLeft').addClass('js--fadeInRight');
    }

    sr.reveal('.js--fadeInRight', {
      origin: 'right',
      distance: '300px',
      easing: 'ease-in-out',
      duration: 800,
    });

  } else {
    
    sr.reveal('.js--fadeInLeft', {
      origin: 'left',
      distance: '300px',
      easing: 'ease-in-out',
      duration: 800,
    });

    sr.reveal('.js--fadeInRight', {
      origin: 'right',
      distance: '300px',
      easing: 'ease-in-out',
      duration: 800,
    });

  }
  
  sr.reveal('.js--fadeInLeft', {
      origin: 'left',
      distance: '300px',
      easing: 'ease-in-out',
      duration: 800,
    });

    sr.reveal('.js--fadeInRight', {
      origin: 'right',
      distance: '300px',
      easing: 'ease-in-out',
      duration: 800,
    });


});