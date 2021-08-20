/* Change this file to get your personal Porfolio */

// Website related settings

const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Dhruv's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Dhruv Kumar Portfolio",
    type: "website",
    url: "",
  },
};

//Home Page
const greeting = {
  title: "Dhruv Kumar",
  logo_name: "DhruvKumar",
  nickname: "Dhruv",
  subTitle:
    'I am Dhruv Kumar, currently working as a Specialist Programmer in <b>Infosys Limited</b>. I love solving Data Structures & algorithmic problems <br/>Check out my resume below ▼.<br/> Thanks for visiting ❤️.',

  resumeLink:"https://drive.google.com/file/d/1ursM_58qAXfkr6Z7jqipL3ymgS0aU3Pe/view?usp=sharing",
  portfolio_repository: "https://github.com/Dhruv1573",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/Dhruv1573",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://in.linkedin.com/in/dhruv-kumar-632650128",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:dkumarsw@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
];

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building resposive website front end using React-Angular",
        "⚡ Creating backend application in Node, Express",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "AngularJS",
          fontAwesomeClassname: "simple-icons:angular",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        
      ],
    },
    {
      title: "Big Data Technologies",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Experience working on Azure cloud platforms",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
      ],
      softwareSkills: [
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#47A248",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/dkumarsw7",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/dhruv_kr_1",
    },
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754",
      },
      profileLink: "https://www.hackerearth.com/@dkumarsw",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Amity University Jaipur (Rajsthan)",
      subtitle: "B.Tech. in Computer Science & Engineering",
      logo_path: "aur.svg",
      alt_name: "AUR Jaipur",
      duration: "2016 - 2020",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
        "⚡ Apart from this, I have done courses on Deep Learning, Data Science, Cloud Computing and Full Stack Development.",
        "⚡ I was selected for Merit cum Means Scholarship which is given to top 10% of students in college. I have received award from respected director for consistently best performance in academics.",
      ],
      website_link: "https://www.amity.edu/jaipur/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Machine Learning",
      subtitle: "- Andrew Ng",
      logo_path: "stanford_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/9FPS6DXA4FRN",
      alt_name: "Stanford University",
      color_code: "#8C151599",
    },
    {
      title: "SQL Learning",
      subtitle: "- Linkedin",
      logo_path: "LI-In-Bug.png",
      certificate_link:
        "https://www.linkedin.com/learning/learning-sql-programming-8382385?trk=flagship-lil_details_certification&trk=lil_details_certification",
      alt_name: "Hackerrank",
      color_code: "#FFFFFF",
    },
    {
      title: "Problem Solving (Basic)",
      subtitle: "- HackerRank",
      logo_path: "hackerrank.svg",
      certificate_link:
        "https://www.hackerrank.com/certificates/1967bcc8c5c3",
      alt_name: "Hackerrank",
      color_code: "#00000099",
    },
    {
      title: "SQL Basic",
      subtitle: "- HackerRank",
      logo_path: "hackerrank.svg",
      certificate_link:
        "https://www.hackerrank.com/certificates/475b6bde3e5a",
      alt_name: "Hackerrank",
      color_code: "#D83B0199",
    },
    {
      title: "SQL Intermediate",
      subtitle: "- HackerRank",
      logo_path: "hackerrank.svg",
      certificate_link:
        "https://www.hackerrank.com/certificates/a30b303d6dde",
      alt_name: "Hackerrank",
      color_code: "#1F70C199",
    },
    {
      title: "Java Basic",
      subtitle: "- HackerRank",
      logo_path: "hackerrank.svg",
      certificate_link:
        "https://www.hackerrank.com/certificates/832df988c409",
      alt_name: "Microsoft",
      color_code: "#D83B0199",
    },
    {
      title: "Java Intermediate",
      subtitle: "- HackerRank",
      logo_path: "hackerrank.svg",
      certificate_link:
        "https://www.hackerrank.com/certificates/cee2a7ac553b",
      alt_name: "Microsoft",
      color_code: "#1F70C199",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I am working with Infosys as a Specialist Programmer (Software Engineer) role. I have rich knowledge in MEAN/MERN Technology and also i had worked on Big Data Technology",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title: "Specialist Programmer",
          company: "Infosys Limited",
          company_url: "https://www.infosys.com/",
          logo_path: "Infosys.png",
          duration: "Oct 2020 - PRESENT",
          location: "Bangalore, Karnatka",
          description:
            "I am working on Microsoft CSSBI products. The projects involve automation for Invoicing.",
          color: "#0879bf",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        
      ],
    },
    
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create MEAN/MERN and Invoicing (in Spark SQL) projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "dhruv.png",
    description:
      "",
  },
  blogSection: {
    title: "",
    subtitle:
      "",
    link: "",
    avatar_image_path: "",
  },
  addressSection: {
    title: "Address",
    subtitle:
      "AT- Kela bigha, P.O+PS - Telhara, Dist - Nalanda, Bihar (801306)",
    avatar_image_path: "address_image.svg",
    location_map_link: "",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+91 7992275395",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
};
