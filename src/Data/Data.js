const introData = {
   
        name : "Melek Ketata" ,
        jobTitle : "Software Engineer",
        description :   "Welcome to my portfolio website! I'm a Software Engineer with 2 years of experience, specializing in software development, full-stack development, mobile app development, and DevOps. My passion for technology and problem-solving has driven me to excel in creating innovative solutions that meet the needs of businesses and users alike. With a focus on continuous learning and improvement, I'm committed to staying at the forefront of technology trends and best practices. Explore my portfolio to see how I can contribute to your next project." ,
        
    
};

const socialMediaData = [
    {
      icon: "fa-brands:facebook-f",
      iconBgClass: "facebook",
      href: "https://www.facebook.com/melek.ketata.18/",
    },
    {
      icon: "ion:logo-stackoverflow",
      iconBgClass: "stack",
      href: "https://stackoverflow.com/users/15318020/mk56852",
    },
    {
      icon: "fa-brands:linkedin-in",
      iconBgClass: "linkedin",
      href: "https://www.linkedin.com/in/melek-ketata-5a43371b7/",
    },
    {
      icon: "fa-brands:github",
      iconBgClass: "github",
      href: "https://github.com/mk56852",
    },
  ]
const aboutUsData = 
    {
        imgSrc: "mk.png",
        miniTitle: "About Us",
        title: "I AM SOFTWARE  <span> ENGINEER</span>",
        description:
          "Seasoned software engineer with 2 years of hands-on experience at PrimatecEngineering. Proficient in Java EE, Spring Boot, React, and more. Skilled in building scalable applications and optimizing performance. Familiar with creating mobile applications using React Native and Flutter. Expertise in DevOps tools like Jenkins, Docker, and Kubernetes. Passionate about crafting efficient solutions to complex problems.",
        funfacts: [
          {
            title: "Professional Projects",
            number: 5,
          },
          {
            title: "Years Experience",
            number: 2,
          },
          {
            title: "Personal Projects",
            number: 6,
          },
        ],
        btnText: "Download CV",
        btnUrl: "contactus",
      }
const projectsData = 
    {
        allProjects: [
          {
            thumbUrl: "Pproject/weddingApp.png",
            title: "Tunisia Wedding Planner",
            subTitle: "Mobile Application",
            details: {
              title: "Tunisia Wedding Planner Mobile Application",
              description:
                "Tunisia Wedding Planner is a mobile application designed to simplify the wedding planning process for users in Tunisia. Whether you're a bride-to-be or someone helping plan a wedding, this app is your go-to resource for everything you need to create a memorable event. With Tunisia Wedding Planner, users can access a comprehensive list of wedding venues, photographers, wedding dress designers, and other essential services across Tunisia. Availability: Tunisia Wedding Planner will be available for download on the Play Store,",
              type: "Android | IOS",
              langages: "Dart | Java",
              platform: "Flutter | Spring boot",
              url: "https://github.com/mk56852/TunisiaWeddingPlanner",
            },
          },
          {
            thumbUrl: "Pproject/cap12.png",
            title: "DStore",
            subTitle: "Ecommerce Website",
            details: {
              title: "Ecommerce Website For DStore",
              description:
                "DStore is an innovative e-commerce platform tailored specifically for the DStore brand, offering a wide range of products and a user-friendly shopping experience. With its intuitive design and comprehensive product catalog, DStore provides customers with a seamless online shopping experience, allowing them to browse, search, and purchase products with ease.",
              type: "Website",
              langages: "Java Script",
              platform: "React",
              url: "https://github.com/mk56852/EcommerceShopFrontEnd",
            },
          },
          {
            thumbUrl: "Pproject/locateApp.png",
            title: "Locate My Device",
            subTitle: "Mobile Application | Web",
            details: {
              title: "Locate My Device Application",
              description:
                "Locate My Device is a mobile application designed to protect your Android device and provide peace of mind in case of theft or loss. With Locate My Device, users can safeguard their phones and easily locate them if they've been stolen or misplaced. The app offers various modes for protecting your device and includes a dashboard for tracking its location.",
              type: "Android | Website",
              langages: "JAVA SCRIPT | Java",
              platform: "Angular | Android Studio",
              url: "https://github.com/mk56852/Locate-my-device",
            },
          },
          {
            thumbUrl: "Pproject/chess.png",
            title: "Chess Game",
            subTitle: "Desktop Application",
            details: {
              title: "Chess Game",
              description:
                "The Chess Game is a desktop application built to provide users with an immersive and customizable chess-playing experience. Developed in Java, this application offers a range of features designed to enhance gameplay and cater to players of all skill levels. With three difficulty levels and the ability to modify chessboard pieces, users can enjoy a personalized and challenging game of chess.",
              type: "Desktop",
              langages: "Java",
              platform: "Java ",

              url: "https://github.com/mk56852/Chess_Game",
            },
          },
          {
            thumbUrl: "Pproject/cov.png",
            title: "Carpooling Application",
            subTitle: "Mobile Application",
            details: {
              title: "Carpooling Application",
              description:
                "The Carpooling Mobile Application is a versatile solution designed to streamline transportation and enhance safety for users. This mobile app facilitates the sharing of rides among individuals, offering a convenient platform for creating new posts and reserving trips. Additionally, the application includes a SaveMode feature, providing peace of mind to parents and guardians by enabling them to track their children's trips in real-time.",
              type: "Website",
              langages: "JAVA Script | Python",
              platform: "React Native | Flask",

              url: "https://github.com/mk56852/CovoiturageApp",
            },
          },
          
       
        ],
      
}
const experienceData = [
    {
      designation: "Connect Services",
      duration: "JUN 2021 - DEC 2022",
      jobType: "Intership | freelance",
      companyTitle: "Connect Services",
      companyDescription:
        "-Designed and developed a Dashboard aimed at assisting doctors in managing their activity."
        +"\n -The application included features such as displaying patient data, enabling doctors to access and manage important medical information easily.\n",
      
      technologies: "Spring Boot | Spring Security | React | Websockets  " ,
      
    },

    {
      designation: "FullStack | Mobile developer",
      duration: "JAN 2022 - JUN 2022",
      jobType: "Intership",
      companyTitle: "Talan Tunisie Consulting",
      companyDescription:
        "-Designed and developed a module, responsible for provisioning and managing smart meters and their configurations."
        +"\n -Created an intuitive admin dashboard to visualize data,providing an efficient and user-friendly interface for monitoring and managing smart meters. "
        +"\n-Developed a mobile application, enabling users to receive notifications about their meters \n",
        technologies: "Spring Boot | Spring Security | Spring Batch | Apache Camel | Kafka | Kafka Streams | React | React Native | Websockets  " ,
      },
    {
      designation: "Java JEE | DevOps Engineer",
      duration: "JUL 2022 - PRESENT",
      jobType: "FullTime",
      companyTitle: "Priamtec Engineering",
      companyDescription:
        "-Led a team to develop an editor for Robot Framework test cases, enhancing efficiency and quality of testing processes."
        +"\n-Implemented Jenkins automation for executing test cases from JIRA tickets, ensuring consistency and accuracy."
        +"\n-Developed a React-based product catalog application for centralized product information management and utilized Electron to create a desktop version of the application for enhanced accessibility.\n",

        technologies: "Java | JavaFX | Jenkins | Docker | Spring Boot | Spring Security | Kafka | React | Electron " ,
    
      },
  ]
const contactData = {
    contactImg: "mk.png",
    contactInfo: [
      { title: "Send me an e-mail", email: "melek.ketata@ensi-uma.tn" },
      { title: "Contact Me", tel: "+216 29267362" },
    ],
  }

  const technologiesData = [
    {
      "src": "logo/java.png",
      "alt": "java"
    },
    {
      "src": "logo/spring.png",
      "alt": "spring"
    },
    {
        "src": "logo/batch.png",
        "alt": "spring"
      },
    {
      "src": "logo/react.png",
      "alt": "react"
    },
    {
        "src": "logo/docker.png",
      "alt": "docker"
    },
    {
      "src": "logo/kafka.png",
      "alt": "kafka"
    },
    {
      "src": "logo/flutter.png",
      "alt": "flutter"
    },
    {
        "src": "logo/jenkins.png",
      "alt": "jenkins"
    },
   
    
  ];
  export  {introData,socialMediaData,aboutUsData, projectsData , experienceData,contactData,technologiesData};