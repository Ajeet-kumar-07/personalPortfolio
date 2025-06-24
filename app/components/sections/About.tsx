'use client'

import AnimatedText from "../common/AnimatedText"

export default function About() {
  return (
    <section id="about" className="min-h-screen w-full flex items-center justify-center p-8">
      <div className="max-w-2xl space-y-12">
        <AnimatedText>
          <h1 className="text-4xl font-bold mb-8">About Me</h1>
        </AnimatedText>

        <div className="space-y-8">
          <AnimatedText>
            <div className="space-y-4">
              <p className="text-lg text-foreground/80 leading-relaxed">
              Hi! I'm Ajeet, a B.Tech student in Electronics and Communication Engineering. I'm passionate about software development and problem-solving, with a strong foundation in C++ and Data Structures & Algorithms.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
              I've worked with technologies like HTML, CSS, JavaScript, React, Node.js, Express.js, and MongoDB, and I enjoy building full-stack applications that solve real-world problems.My projects include a Note-Taking CLI tool, a To-Do List with Google Sheets Integration, and a Hostel Management System using the MERN stack. I've also been involved in 3D designing, and participated in hackathons and technical challenges.
              </p>
            </div>
          </AnimatedText>

          {/* <AnimatedText>
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">Personal Interests</h2>
              <p className="text-lg text-foreground/80 leading-relaxed">
                In this section, you can share your personal interests and hobbies. This content can make your profile more vibrant and showcase your unique personality traits.
              </p>
            </div>
          </AnimatedText> */}

          <AnimatedText>
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">Career Goals</h2>
              <p className="text-lg text-foreground/80 leading-relaxed">
              I'm actively working on improving my DSA skills and building impactful projects to become industry-ready.
              </p>
            </div>
          </AnimatedText>
        </div>
      </div>
    </section>
  )
}