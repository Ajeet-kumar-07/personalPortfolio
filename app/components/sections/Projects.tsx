'use client'

import AnimatedText from '../common/AnimatedText'
import Image from 'next/image'
import GradientBackground from '../common/GradientBackground'
import ExperienceModal from './Motal'
import { useState } from 'react'

// Define project data type
// Each project must include:
// - id: Unique identifier
// - title: Project name
// - description: Project description
// - period: Development period
// - image: Project screenshot path (stored in public/project/ directory)
// - skills: Tech stack used
// - link: Project link (GitHub/Demo)
type Project = {
  id: number
  title: string
  description: string
  image: string
  skills: string[]
  link: string
}

// Example project data
// Usage instructions:
// 1. Copy template below and modify content as needed
// 2. Place project screenshots in public/project/ directory
// 3. Sort projects in reverse chronological order
// 4. Project descriptions should highlight core features and technical highlights
const projects: Project[] = [
  {
    id: 1,
    title: "Hostel-Attendance-System",
    description: "This is a full-stack Hostel Attendance Management System designed to efficiently manage student attendance and hostel operations. It features dashboards for  guards,  enabling actions like marking attendance . With a clean and responsive UI, it ensures smooth interactions across devices. Built using the MERN stack with Firebase Auth and JWT, it demonstrates skills in RESTful API development, secure authentication, and CI/CD-based deployment. Ideal for institutions aiming to digitize hostel workflows with real-time tracking and approvals.",
    image: "/gallery/hstl.webp", // Screenshot path
    skills: ["React", "JavaScript", "Node.js", "MongoDB","express.js"], // Tech stack
    link: "https://github.com/Ajeet-kumar-07/Note-taking-CLI"
  },
  {
    id: 2,
    title: "Note-Taking App",
    description: "This is a Command Line Interface (CLI) application for efficiently managing personal notes.It allows users to create, read, update, and delete notes directly from the terminal. Designed with a clean and intuitive command structure, this tool supports features like categorization, search, and file-based storage. Built using modern JavaScript tools, this project showcases skills in CLI app development, file system interaction, and modular code organization. Ideal for developers who prefer managing notes without a GUI.",
    image: "/gallery/cli.jpg", // Screenshot path
    skills: ["React", "JavaScript", "Node.js", "MongoDB","express.js"], // Tech stack
    link: "https://github.com/Ajeet-kumar-07/Note-taking-CLI"
  },
  {
    id: 3, 
    title: "ToDo GoogleSheet Integration",
    description: "This is a full-stack To-Do List web application integrated with Google Sheets for real-time task storage and tracking.It allows users to add, update, and delete tasks through an intuitive interface, while all data is synchronized with a connected Google Sheet. The app features a clean UI, dynamic task management, and secure API handling. The backend handles authentication (if included), Google Sheets API integration, and data persistence, while the frontend offers a responsive and user-friendly experience for efficient daily planning",
    image: "/gallery/todo.png",
    skills: ["React","JavaScript" ,"Node.js", "MongoDB","express.js"],
    link: "https://github.com/Ajeet-kumar-07/ToDoApp-Google-Sheets"
  },
  // {
  //   id: 4, 
  //   title: "Drama Blossom",
  //   description: "Drama Blossom is a full-stack MERN web application for K-drama and K-movie enthusiasts. Users can create personal accounts to explore a curated library of Korean dramas and movies, bookmark favorites, and engage in community discussions through comments and reviews. The platform features secure user authentication, personalized watchlists, and an admin dashboard for managing content and user activity. The backend efficiently handles data management, authentication, and user sessions, while the frontend offers a modern, responsive, and user-friendly interface for a seamless entertainment experience.",
  //   image: "/gallery/dramaBlossom.png",
  //   skills: ["React","JavaScript" ,"Node.js", "MongoDB","express.js"],
  //   link: "https://github.com/AlkaGupta680/MERN-Drama-Blossom"
  // }

];

export default function Projects() {
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedProject, setSelectedProject] = useState<number | null>(null)

  return (
    <section id="projects" className="container mx-auto px-4 sm:px-8 md:px-12">
      <div className="
        min-h-screen
        flex flex-col items-center justify-center
        py-4 md:py-8
        relative
        overflow-hidden
      ">
        <GradientBackground 
          sectionId="projects"
          gradientColors={{
            start: '#F43F5E',  // Light rose
            end: '#BE123C'     // Deep rose
          }}
        />

        <AnimatedText>
          <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-center relative z-10">
            Projects
          </h1>
        </AnimatedText>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 relative z-0 max-w-6xl w-full">
          {projects.map((project) => (
            <div key={project.id}>
              <AnimatedText>
                <div 
                  onClick={() => {
                    setSelectedProject(project.id)
                    setModalOpen(true)
                  }}
                  className="
                    bg-white/[0.1] dark:bg-black/[0.2]
                    backdrop-blur-[20px]
                    rounded-2xl
                    border border-white/[0.1] dark:border-white/[0.1]
                    p-6
                    transition-all duration-300
                    hover:-translate-y-1
                    hover:shadow-xl
                    cursor-pointer
                  "
                >
                  <div className="relative w-full h-48 md:h-72 mb-4">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="rounded-lg object-cover"
                    />
                  </div>
                  
                  <h2 className="text-2xl font-semibold mb-2">
                    {project.title}
                  </h2>
                  
                 
                  
                  <p className="text-base text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.skills.map((skill) => (
                      <span
                        key={skill}
                        className="
                          px-3 py-1
                          text-sm
                          rounded-full
                          bg-white/[0.05] dark:bg-white/[0.05]
                          backdrop-blur-[8px]
                          border border-white/[0.05]
                          text-gray-600 dark:text-gray-400
                        "
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </AnimatedText>
            </div>
          ))}
        </div>
      </div>

      <ExperienceModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        experienceId={selectedProject ?? 1}
      />
    </section>
  )
} 