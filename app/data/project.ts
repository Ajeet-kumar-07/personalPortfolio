// Type definition for project details
export type ProjectDetail = {
  id: number                // Unique identifier for the project
  title: string            // Project title
  company: string          // Company name
  overview: string         // Brief project overview
  mainImage: string        // Main project image path
  link: string            // Live project URL
  github?: string         // Optional GitHub repository URL
  
  techStack: {            // Technical stack groupings
    category: string      // Tech category name
    items: string[]       // List of technologies
  }[]
  
}

// Project data mapping object
export const PROJECT_DATA: Record<number, ProjectDetail> = {
  1: {
    id: 1,
    title: "Hostel-Attandance-Management-Sys",
    company: "Self", 
    overview: "Hostel Attendance Management System is a modern, full-stack web application designed to streamline hostel operations with a focus on attendance tracking. The platform offers a clean, mobile-responsive interface with dedicated panels for guards. Guards can mark Attendance for Hostel . Built using the MERN stack with Firebase Authentication and JWT for secure access, the application is deployed on Render with CI/CD integration for seamless updates.",
    mainImage: "/gallery/hstl.webp",
    link: "https://github.com/Ajeet-kumar-07/Hostel-Attandance-sys",
    // features: [
    //   {
    //     title: "login/signup",
    //     description: "user can create its account or if already exit then user can login",
    //     image: "/gallery/feature1.png"
    //   },
    //   {
    //     title: "Filter option",
    //     description: "filter option helps user to get mostly relevant result",
    //     image: "/gallery/feature2.png"
    //   }

    // ],
    techStack: [
      {
        category: "Frontend",
        items: ["React", "JavaScript", "tailwindcss"]
      },
      {
        category: "Backend",
        items: ["Node", "Express", "MongoDB"]
      }
    ],
   
  },
  2: {
    id: 2,
    title: " Note-Taking CLI",
    company: "Self learning", 
    overview: "This is a Command Line Interface (CLI) application for efficiently managing personal notes.It allows users to create, read, update, and delete notes directly from the terminal. Designed with a clean and intuitive command structure, this tool supports features like categorization, search, and file-based storage. Built using modern JavaScript tools, this project showcases skills in CLI app development, file system interaction, and modular code organization. Ideal for developers who prefer managing notes without a GUI.",
    mainImage: "/gallery/cli.jpg",
    link: "https://github.com/Ajeet-kumar-07/Note-taking-CLI",
    
    // features: [
    //   {
    //     title: "User sign up and login with Aadhar Card Number and password",
    //     description: "",
    //     image: "/gallery/feature.png"
    //   },
    //   {
    //     title: "User can view the list of candidates",
    //     description: "",
    //     image: "/gallery/feature.png"
    //   },
    //   {
    //     title: "Admin can manage candidates (add, update, delete)",
    //     description: "soon...",
    //     image: "/gallery/feature.png"
    //   }

    // ],
    techStack: [
      {
        category: "Full stack",
        items: ["React", "JavaScript","TailwindCSS","Nodejs","MongoDB","express","mongoose","nextjs"]
      }
    ],
    
  },
  3: {
    id: 3,
    title: "ToDo Sheets",
    company: "Self learning",
    overview: "This is a full-stack To-Do List web application that helps users manage their daily tasks efficiently with seamless Google Sheets integration.It allows users to add, update, and delete tasks in real time, with all task data automatically stored and synced in a connected Google Sheet. The application features a clean and interactive user interface, along with a robust backend that handles task management, data syncing, and API communication. This project demonstrates effective integration of external APIs (Google Sheets), along with a solid understanding of full-stack development using technologies like Node.js, Express.js, and MongoDB.", 
    mainImage: "/gallery/todo.png",
    link: "https://github.com/Ajeet-kumar-07/ToDoApp-Google-Sheets",
    // features: [
    //   {
    //     title: "Make reservation",
    //     description: "user can make reservation",
    //     image: ""
    //   }
    // ],
    techStack: [
      {
        category: "Full Stack",
        items: ["React","Vite" ,"JavaScript","TailwindCSS","Nodejs","MongoDB","express",]
      }
    ]
   
  },
  // 4: {
  //   id: 4,
  //   title: "Drama Blossom",
  //   company: "Self learning",
  //   overview: "Drama Blossom is a full-stack MERN web application for K-drama and K-movie enthusiasts. Users can create personal accounts to explore a curated library of Korean dramas and movies, bookmark favorites, and engage in community discussions through comments and reviews. The platform features secure user authentication, personalized watchlists, and an admin dashboard for managing content and user activity. The backend efficiently handles data management, authentication, and user sessions, while the frontend offers a modern, responsive, and user-friendly interface for a seamless entertainment experience.", 
  //   mainImage: "/gallery/dramaBlossom.png",
  //   link: "https://github.com/Ajeet-kumar-07/ToDoApp-Google-Sheets",
  //   // features: [
  //   //   {
  //   //     title: "user authentication",
  //   //     description: "user can make reservation",
  //   //     image: ""
  //   //   }
  //   // ],
  //   techStack: [
  //     {
  //       category: "Full Stack",
  //       items: ["React","Vite" ,"JavaScript","TailwindCSS","Nodejs","MongoDB","express",]
  //     }
  //   ],
   
  // },
  4: {
    id: 4,
    title: "BootLoader",
    company: "Self learning",
    overview: "This project demonstrates how to build a minimal 32-bit x86 bootloader from scratch using NASM assembly. It prints Hello World directly to the screen by leveraging BIOS interrupts, showcasing the fundamentals of how a computer boots and transfers control to a user-defined program. The bootloader is loaded into memory at 0x7C00, adheres to the 512-byte boot sector limit, and is tested using QEMU for safe virtualization. This project serves as a foundational step toward writing a simple operating system and understanding low-level systems programming.", 
    mainImage: "/gallery/cmd.png",
    link: "https://github.com/Ajeet-kumar-07/Bootloader",
    // features: [
    //   {
    //     title: "user authentication",
    //     description: "user can make reservation",
    //     image: ""
    //   }
    // ],
    techStack: [
      {
        category: "Assembly",
        items: ["C","ASM"]
      }
    ],
   
  },

}

// Helper function: Get project by ID
export const getProjectById = (id: number): ProjectDetail | undefined => {
  if (!Object.keys(PROJECT_DATA).length) {
    console.warn('PROJECT_DATA is empty');
    return undefined;
  }
  return PROJECT_DATA[id] || Object.values(PROJECT_DATA)[0];
}