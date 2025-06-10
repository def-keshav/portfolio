/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Keshav Sharma",
  title: "Hi all, I'm Keshav",
  subTitle: emoji(
    "I'm a robotics and AI engineer based in Maryland, specializing in intelligent systems, autonomous navigation, and machine vision."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1YcbD9i5tHkj26jDyFEM0jUkNnErn9ZXy/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/def-keshav",
  linkedin: "https://www.linkedin.com/in/keshav-sharma-4260441b6/",
  gmail: "keshav.sharma.090500@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "ROBOTICS AND AI ENGINEER WHO BUILDS INTELLIGENT AUTONOMOUS SYSTEMS",
  skills: [
    emoji("🤖 Design and simulate robotic systems using ROS2, Gazebo, and SolidWorks"),
    emoji("🧠 Develop intelligent agents using Reinforcement Learning and Deep Learning (DQN, CNNs, NeRF)"),
    emoji("📍 Implement path planning algorithms like RRT*, A*, and trajectory optimization for autonomous navigation"),
    emoji("🛠️ Integrate computer vision on edge devices using TensorRT, OpenCV, and PyTorch"),
    emoji("📡 Fuse sensor data (LIDAR, IMU) for SLAM and real-time localization"),
    emoji("📦 Build and test scalable robotics software in Python, C++, and MATLAB")
  ],

  softwareSkills: [
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "c++",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "matlab",
      fontAwesomeClassname: "fas fa-square-root-alt"
    },
    {
      skillName: "robot",
      fontAwesomeClassname: "fas fa-robot"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "linux",
      fontAwesomeClassname: "fab fa-linux"
    },
    {
      skillName: "ros",
      fontAwesomeClassname: "fas fa-cogs"
    },
    {
      skillName: "gazebo",
      fontAwesomeClassname: "fas fa-vr-cardboard"
    },
    {
      skillName: "opencv",
      fontAwesomeClassname: "fas fa-eye"
    },
    {
      skillName: "pytorch",
      fontAwesomeClassname: "fas fa-brain"
    },
    {
      skillName: "tensorflow",
      fontAwesomeClassname: "fas fa-project-diagram"
    },
    {
      skillName: "solidworks",
      fontAwesomeClassname: "fas fa-cube"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of Maryland, College Park",
      logo: require("C:\Users\asus\Desktop\portfolio\src\assets\images\Maryland-Terrapins-Logo-1996.png"), // Add your logo image to assets
      subHeader: "Master of Engineering in Robotics",
      duration: "August 2023 - May 2025 (Expected)",
      desc: "Coursework focused on autonomous systems, perception, and planning.",
      descBullets: [
        "Projects included self-driving car navigation with Deep Q-Networks and a mobile pick-and-place robot using ROS2 and Gazebo",
        "Hands-on work with SLAM, reinforcement learning, path planning (RRT, A*), and robotic arm kinematics"
      ]
    },
    {
      schoolName: "KIET Group of Institutions, India",
      logo: require("C:\Users\asus\Desktop\portfolio\src\assets\images\images.jpeg"), // Add your logo image to assets
      subHeader: "Bachelor of Technology in Mechanical Engineering",
      duration: "July 2018 - July 2022",
      desc: "Graduated with a strong foundation in mechanical systems and automation.",
      descBullets: [
        "Interned in mechanical product design, using CATIA V5 and FEA for pump optimization",
        "Transitioned from classical mechanics to robotics and computer vision through self-initiated research"
      ]
    }
  ]
};

const techStack = {
  viewSkillBars: true, // Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Robotics & Simulation (ROS2, Gazebo, RViz, URDF)",
      progressPercentage: "90%"
    },
    {
      Stack: "Machine Learning & Computer Vision (PyTorch, OpenCV, TensorRT)",
      progressPercentage: "85%"
    },
    {
      Stack: "Control Systems & Motion Planning (PID, MPC, RRT*, A*)",
      progressPercentage: "80%"
    },
    {
      Stack: "Programming (Python, C++, MATLAB)",
      progressPercentage: "75%"
    },
    {
      Stack: "Embedded & Hardware (Jetson, Arduino, LIDAR, IMU)",
      progressPercentage: "70%"
    }
  ],
  displayCodersrank: false // You can enable this if you want to add CodersRank badges later
};

const workExperiences = {
  display: true, // Set it to true to show workExperiences Section
  experience: [
    {
      role: "Product Design Intern",
      company: "Mechathon Engineering Pvt. Ltd.",
      companylogo: require("C:\Users\asus\Desktop\portfolio\src\assets\images\mechathon.jpeg"), // Add this logo in assets/images
      date: "Jul 2021 – Sep 2021",
      desc: "Worked on high-performance mechanical systems and optimized them using advanced CAD and FEA tools.",
      descBullets: [
        "Engineered a high-pressure hexaplex plunger pump using CATIA V5, applying DFM and FEA to enhance performance",
        "Reduced material costs by 10% via topology optimization and improved mechanical reliability"
      ]
    },
    {
      role: "IoT & Computer Vision Intern",
      company: "The Sparks Foundation",
      companylogo: require("C:\Users\asus\Desktop\portfolio\src\assets\images\sparks.png"), // Add this logo in assets/images
      date: "Apr 2021 – May 2021",
      desc: "Developed edge-optimized computer vision systems and accelerated ML inference pipelines.",
      descBullets: [
        "Used TensorFlow and PyTorch with transfer learning to boost visual classification accuracy by 15%",
        "Implemented TensorRT-based hardware acceleration to reduce prototyping time by one-third"
      ]
    }
  ]
};


/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};
const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME SYSTEMS AND RESEARCH PROJECTS I’VE BUILT OR CONTRIBUTED TO",
  projects: [
    {
      image: require("./assets/images/robotArmLogo.png"), // You can create/add a robot icon or screenshot
      projectName: "Autonomous Pick and Place Robot",
      projectDesc:
        "Designed and simulated a mobile robot with a robotic arm in ROS2 and Gazebo. Implemented inverse kinematics, teleop control, and integrated CAD design from SolidWorks.",
      footerLink: [
        {
          name: "View Code",
          url: "https://github.com/def-keshav/Pick-and-place-robot"
        },
      ]
    },
    {
      image: require("./assets/images/3dreconLogo.png"),
      projectName: "3D Reconstruction with SfM",
      projectDesc:
        "Built a structure-from-motion pipeline in Python using OpenCV and Open3D. Generated colored 3D point clouds from image sequences and visualized reprojection error.",
      footerLink: [
        {
          name: "View Code",
          url: "https://github.com/def-keshav/Structure-From-motion" // Replace with your actual repo URL
        }
      ]
    },
    {
      image: require("./assets/images/rrtLogo.png"),
      projectName: "Hybrid RRT-A* Path Planning",
      projectDesc:
        "Implemented a hybrid RRT and A* algorithm with differential drive constraints. Visualized robot path planning in complex environments using Pygame and ROS2.",
      footerLink: [
        {
          name: "Project Code",
          url: "https://github.com/def-keshav" // Replace with actual repo or video if available
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};


// // Achievement Section
// // Include certificates, talks etc

// const achievementSection = {
//   title: emoji("Achievements And Certifications 🏆 "),
//   subtitle:
//     "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

//   achievementsCards: [
//     {
//       title: "Google Code-In Finalist",
//       subtitle:
//         "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
//       image: require("./assets/images/codeInLogo.webp"),
//       imageAlt: "Google Code-In Logo",
//       footerLink: [
//         {
//           name: "Certification",
//           url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
//         },
//         {
//           name: "Award Letter",
//           url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
//         },
//         {
//           name: "Google Code-in Blog",
//           url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
//         }
//       ]
//     },
//     {
//       title: "Google Assistant Action",
//       subtitle:
//         "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
//       image: require("./assets/images/googleAssistantLogo.webp"),
//       imageAlt: "Google Assistant Action Logo",
//       footerLink: [
//         {
//           name: "View Google Assistant Action",
//           url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
//         }
//       ]
//     },

//     {
//       title: "PWA Web App Developer",
//       subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
//       image: require("./assets/images/pwaLogo.webp"),
//       imageAlt: "PWA Logo",
//       footerLink: [
//         {name: "Certification", url: ""},
//         {
//           name: "Final Project",
//           url: "https://pakistan-olx-1.firebaseapp.com/"
//         }
//       ]
//     }
//   ],
//   display: true // Set false to hide this section, defaults to true
// };

// // Blogs Section

// const blogSection = {
//   title: "Blogs",
//   subtitle:
//     "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
//   displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
//   blogs: [
//     {
//       url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
//       title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
//       description:
//         "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
//     },
//     {
//       url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
//       title: "Why REACT is The Best?",
//       description:
//         "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
//     }
//   ],
//   display: true // Set false to hide this section, defaults to true
// };

// // Talks Sections

// const talkSection = {
//   title: "TALKS",
//   subtitle: emoji(
//     "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
//   ),

//   talks: [
//     {
//       title: "Build Actions For Google Assistant",
//       subtitle: "Codelab at GDG DevFest Karachi 2019",
//       slides_url: "https://bit.ly/saadpasta-slides",
//       event_url: "https://www.facebook.com/events/2339906106275053/"
//     }
//   ],
//   display: true // Set false to hide this section, defaults to true
// };

// // Podcast Section

// const podcastSection = {
//   title: emoji("Podcast 🎙️"),
//   subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

//   // Please Provide with Your Podcast embeded Link
//   podcast: [
//     "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
//   ],
//   display: true // Set false to hide this section, defaults to true
// };

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+1 240-413-7658",
  email_address: "keshav.sharma.090500@gmail.com"
};

// Twitter Section

// const twitterDetails = {
//   userName: "twitter", //Replace "twitter" with your twitter username without @
//   display: true // Set true to display this section, defaults to false
// };

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
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
  twitterDetails,
  isHireable,
  resumeSection
};
