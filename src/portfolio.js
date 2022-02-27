/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Kalpani Wijegunawardana",
  title: "Hi all, I'm Kalpani",
  subTitle: emoji(
    "I like developing new things, learning new technologies and meeting new people."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
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
  subTitle: "I'm a third year undergraduate of Department of Information & Communication Technology, university of Sri Jayewardenepura.",
  skills: [
    emoji(
      "⚡ I am sociable, energetic and friendly person. My interpersonal skills make me a good communicator, able to work well with others."
    ),
    emoji("⚡I motivate and encourage people around me. I am self-aware and always seek to learn and grow. "),
    emoji(
      "⚡ I am not scared of undertaking new responsibilities no matter the degree of difficulty. I am a critical thinker and a good researcher."
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    
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
      progressPercentage: "45%" //Insert relative proficiency in percentage
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
  display: false, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Facebook",
      companylogo: require("./assets/images/facebookLogo.png"),
      date: "June 2018 – Present",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      role: "Front-End Developer",
      company: "Quora",
      companylogo: require("./assets/images/quoraLogo.png"),
      date: "May 2017 – May 2018",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      role: "Software Engineer Intern",
      company: "Airbnb",
      companylogo: require("./assets/images/airbnbLogo.png"),
      date: "Jan 2015 – Sep 2015",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "SOME OF THE PROJECTS THAT I'VE DEVELOPED.",
  projects: [
    {
      image: require("./assets/images/hmsystem.jpg"),
      projectName: "Hospital Management System",
      projectDesc: "Using this system users can do their requirements easily",
      footerLink: [
        {
          name: "Explore",
          url: "https://github.com/JayanikaGithub/plant_app/tree/Dev/app"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/library.jpg"),
      projectName: "Library Management System",
      projectDesc: "Using this system users can do their requirements easily",
      footerLink: [
        {
          name: "Explore",
          url: "https://github.com/JayanikaGithub/plant_app/tree/Dev/app"
        }
      ]
    },
    {
      image: require("./assets/images/pl nt.png"),
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
  display: true // Set false to hide this section, defaults to true
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
