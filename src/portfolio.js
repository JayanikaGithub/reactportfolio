/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";

// Summary And Greeting Section

const illustration = {
  animated: false // Set to false to use static SVG
};

const greeting = {
  username: "Kalpani Wijegunawardana",
  title: "Hi, I'm Kalpani Wijegunawardana",
  subTitle: emoji(
    "I'm a Freelance Graphic Designer and I love to help people to promote their products by using attractive designs.(Social Media Marketing)"
  ),
  resumeLink:
    "https://drive.google.com/file/d/1TIM8NfTin2NRr4mvRbw99Qg0FvjEKHTr/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  linkedin: "https://www.linkedin.com/in/kalpani-wijegunawardana-225717219/",
  gmail: "96588@fhss.sjp.ac.lk",
  github: "https://github.com/JayanikaGithub",
  facebook: "https://m.facebook.com/kalpani.wijegunawardana.9",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "About Me",
  subTitle: "I'm a third year undergraduate of Department of Information & Communication Technology, faculty of Humanities and Social Sciences university of Sri Jayewardenepura. I want to keep up with the ever-evolving technology and conquer the world with new technologies.",
  skills: [
    emoji(
      "⚡ I Have a good knowledge about the programming concepts such as OOP as well as good knowledge about WEB developing and designing."
    ),
    emoji("⚡I have a passion for design and believe there’s an opportunity to create something beautiful with every project."),
    emoji(
      "⚡ I am not scared of undertaking new responsibilities no matter the degree of difficulty. I am a critical thinker and a good researcher."
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    
  
    
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "C.W.W Kannangara Central College",
      logo: require("./assets/images/logo kc.jpg"),
      subHeader: " primary & secondary education",
      duration: "January 2005 - August 2018",
      desc: "",
      descBullets: [
        
      ]
    },
    {
      schoolName: "University of Sri Jayewardenepura",
      logo: require("./assets/images/jpura logo.png"),
      subHeader: "Bachelor of Science in Information & Communication Technology",
      duration: "From March 2020",
      
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Graphic Designing", //Insert stack or technology you have experience in
      progressPercentage: "65%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "45%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "30%"
    },
    {
      Stack: "Programming",
      progressPercentage: "40%"
    }
  ],
  displayCodersrank: false 
  // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};





// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "IT Director",
      company: "Green Pulse Foundation",
      companylogo: require("./assets/images/gpf.png"),
      date: "June 2020 – Present",
      desc: "Green Pulse Foundation is the Sri Lankan Movement for a green economy. The mission of Green Pulse is to promote the green economy principles and practices within the context of sustainable development and poverty eradication.",
      descBullets: [
        "As a IT director I give my fully commitment for achieve organization's goals ",
        
      ]
    },
    {
      role: "Graphic Designer",
      company: "IEEE Student branch-University of Sri Jayewardenepura",
      companylogo: require("./assets/images/iee.jpg"),
      date: "August 2021 – present",
      desc: "IEEE Student Branch of the University of Sri Jayewardenepura is the latest addition to the Student Branches of the IEEE Sri Lanka Section."
    },
    {
      role: "Graphic Designer",
      company: "Japura Flames",
      companylogo: require("./assets/images/flames.png"),
      date: "Jan 2021 – present",
      desc: "The best media coverage of sports and events of University of Sri Jayewardenepura. J’pura flames crew promotes and supports all functions and events of the university making mother Jpura reach great heights."
    },
    {
      role: "Graphic Designer",
      company: "Japura Youth Assurance Society",
      companylogo: require("./assets/images/yas.jpg"),
      date: "Sep 2021 – present",
      desc: "J'pura Youth Assurance Society is a youth community organization that focuses on youth generation. Our vision is to build a secure society with well-being, courage, defense, and peace."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "SOME OF THE PROJECTS THAT I'VE DEVELOPED.",
  projects: [
    
    {
      image: require("./assets/images/web.png"),
      projectName: "UI design for online clothing store",
      projectDesc: "This is the web site UI design mainly created for purchasing clothes using online platform",
      footerLink: [
        {
          name: "Explore",
          url: "https://www.behance.net/gallery/125783347/My-first-UI-design-for-online-clothing-center"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/hmsystem.jpg"),
      projectName: "Hospital Management System",
      projectDesc: "This system is mainly created for e-channeling and some other services. This system is helpful and time saving both patients as well as doctors. and hospital staff.",
      footerLink: [
        {
          name: "Explore",
          url: "https://github.com/JayanikaGithub"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/library.jpg"),
      projectName: "Library Management System",
      projectDesc: "A library management system is software that is designed to manage all the functions of a library. It helps librarian to maintain the database of new books and the books that are borrowed by members along with their due dates. This system completely automates all your library's activities.",
      footerLink: [
        {
          name: "Explore",
          url: "https://github.com/JayanikaGithub"
        }
      ]
    },
    {
      image: require("./assets/images/co.jpeg"),
      projectName: "Coffee table book for hotel in Sigiriya",
      projectDesc: "A coffee table book, also known as a cocktail table book, is an oversized, usually hard-covered book whose purpose is for display on a table intended for use in an area in which one entertains guests and from which it can serve to inspire conversation or pass the time.This book is created for tourist hotel and this book include attractive places in Sri Lanka.",
      footerLink: [
        {
          name: "Explore",
          url: "https://drive.google.com/drive/folders/1QB6VhsZXouvsK3dTmYH8t3ATVjHc3klk?usp=sharing"
        }
      ]
    },
    {
      image: require("./assets/images/plant.jpeg"),
      projectName: "Plant App",
      projectDesc: "This app is created for plant nursery and using this app users can order their needs with few clicks",
      footerLink: [
        {
          name: "Explore",
          url: "https://github.com/JayanikaGithub/plant_app/tree/Dev/app"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/m1.jpeg"),
      projectName: "Website for relax with music",
      projectDesc: "This is the very simple website that is created for easily find the songs and knowing the history and all the details of songs.",
      footerLink: [
        {
          name: "Explore",
          url: "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing"
        }
        //  you can add extra buttons here.
      ]
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Diploma in Information Technology",
      subtitle:
        "",
      image: require("./assets/images/emc-placeholder.png"),
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing"
        },
        {
          name: "",
          url: ""
        },
        {
          name: "",
          url: ""
        }
      ]
    },
    {
      title: "National Certificate of Computer Application Assistant(NVQ Level 04)",
      subtitle:
        "",
      image: require("./assets/images/nvq.png"),
      footerLink: [
        {
          name: "certification",
          url: "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing"
        }
      ]
    },

    {
      title: "Diploma in Graphic Designing at Vocational Computer Training Institute.",
      subtitle: "",
      image: require("./assets/images/vta.png"),
      footerLink: [
        {name: "Certification", url: "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing"},
        {
          name: "",
          url: ""
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Volunteer Experiences",
  subtitle:
    "I love to collaborate with others when doing volunteer things",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "",
      title: "IEEE USJ Student Branch - Media crew member",
      description:
        ""
    },
    {
      url: "",
      title: "Japura Flames - Graphic Designer",
      description:
        ""
    },
    {
      url: "",
      title: "Green Pulse Foundation - IT Director",
      description:
        ""
    },
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "",
      subtitle: "",
      slides_url: "",
      event_url: ""
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    ""
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "0766326061",
  email_address: "96588@fhss.sjp.ac.lk"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
