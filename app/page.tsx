'use client';
import Image from "next/image";
import './globals.css';
import { useEffect } from "react";
import { Fredoka } from 'next/font/google';
const fredoka = Fredoka({ subsets: ['latin'] });

export default function Home() {

  useEffect(() => {
    const sections = document.querySelectorAll('.fade-in');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          } else {
            entry.target.classList.remove('visible');
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
      observer.disconnect();
    };
  }, []);

  return (
    <div className="flex flex-col">
      <div className="flex flex-row min-h-screen">
        <div className="flex-1 bg-[#C42217] flex flex-col relative justify-center">
          <div className="bg-white h-2/3 p-5 w-3/4 rounded-lg absolute bottom-[5%] left-1/2 transform -translate-x-1/2 flex flex-col">
            <h1 className="text-[#2b46bd] text-7xl font-bold p-2 max-w-full break-words">
              Keira Schoolcraft
            </h1>
            <p className="text-xl text-[#2b46bd] p-2">
              Software Developer
            </p>
            <div className="flex flex-row p-2 items-center absolute bottom-5">
              <p className="text-[#1d7151] text-7xl font-extrabold">&rarr;</p>
              <a href="mailto:your-email@example.com?subject=Contact%20Form&body=Hello%2C%20I%20would%20like%20to%20get%20in%20touch." className="hover:underline text-[#1d7151] text-2xl ml-5">
                Contact Me
              </a>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <img 
            src="/me_main.png" 
            alt="Background" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>


      {/* About Me */}
      <div id="about" className="fade-in h-screen bg-[#edd947] flex flex-row items-center justify-center">
        <div className="relative w-1/3 h-[80vh] flex items-center justify-center">
          <div className="absolute w-[40%] h-[60%] rounded-lg border-8 border-red-500 transform rotate-[-15deg] left-[20%] top-[10%]">
            <img src="/me_rowing.jpg" alt="Image 1" className="w-full h-full object-cover"/>
          </div>
          <div className="absolute w-[40%] h-[60%] rounded-lg border-8 border-red-500 transform rotate-[15deg] left-[50%] top-[35%]">
            <img src="/me_rome.png" alt="Image 2" className="w-full h-full object-cover"/>
          </div>
        </div>
        <div className="w-2/3 p-2">
          <h1 className="text-[#2b46bd] text-7xl font-bold">
            About Me (She/Her)
          </h1>
          <br></br>
          <p className="text-[#2b46bd] text-xl text-justify mr-10">
            I am a Computer Science undergraduate and Aritificial Intelligence/Machine Learning graduate student at WPI, set to graduate in May, 2026.
            I also have obtained a minor in Robotics Engineering. Throughout my class projects, specifically web development projects, 
            I have developed a passion for frontend UI/UX design. Although relatively new to the field of AI/ML, I am enjoying my studies
            and am quickly developing an interest in how AI/ML can aide humans in difficult tasks.
          </p>
          <br></br>
          <p className="text-[#2b46bd] text-xl text-justify mr-10">
            Outside of academics, I am a varsity rower here at WPI and work as a Student Assistant, passionate in developing my own understanding
            of material through teaching. I love to travel, read, and cook, and I tend to find a new hobby every couple of months, always eager to
            expand my horizons.
          </p>
        </div>
      </div>

      {/* Experience/Education */}
      <div id="education" className="fade-in h-screen bg-[#1d7151] flex items-center justify-center text-white flex-row">
        <div className="w-[40%] h-full p-2 flex flex-col justify-between items-start relative">
          <h1 className="text-7xl font-bold mt-5 ml-5">Experience & Education</h1>
          <p className="text-9xl text-[#f2eddb] text-center absolute bottom-[10%] ml-5">&rarr;</p>
        </div>
        <div className="w-[60%] flex justify-center items-center h-full">
          <div className="bg-white flex flex-col rounded-xl w-[80%] h-[80%] p-2 text-[#2b46bd]">
            <div className="flex flex-1 flex-col">
              <h1 className="font-semibold text-xl">Worcester Polytechnic Institute - Computer Science Bachelors</h1>
              <p className="font-semibold text-lg">2022-2026</p>
              <p className="font-semibold text-md">
                  Obtaining a Bachelor's Degree in Computer Science and a minor in Robotics Engineering. Dean's List honor every semester. 
              </p>
              <p className="font-semibold text-md">
                Relevant Coursework: Algorithms, Software Engineering, Webware, Artificial Intelligence, Mobile & Ubiquitous Computing.
              </p>
            </div>
            <div className="flex flex-1 flex-col">
              <h1 className="font-semibold text-xl">Lockheed Martin - Software Engineering Intern</h1>
              <p className="font-semibold text-lg">Summer 2023</p>
              <p className="font-semibold text-md">
                  Worked on a display system using Java and JavaFX. Tasked with creating and changing UI elements and fixing algorithmic bugs.
              </p>
              <p className="font-semibold text-md">
                Skills Used: Git, Jira, Agile, Scrum, JavaFX, Java.
              </p>
            </div>
            <div className="flex flex-1 flex-col">
              <h1 className="font-semibold text-xl">Lockheed Martin - Software Engineering Intern</h1>
              <p className="font-semibold text-lg">Summer 2024</p>
              <p className="font-semibold text-md">
                  Worked on system services team to maintain, update, and improve system software. Tasked with automating testing, deployment, and fixing server bugs.
              </p>
              <p className="font-semibold text-md">
                Skills Used: Git, Jira, Agile, Scrum, Linux, Bash, XML, Python, Ansible, Jenkins.
              </p>
            </div>
            <div className="flex flex-1 flex-col">
              <h1 className="font-semibold text-xl">Worcester Polytechnic Institute - AI/ML Masters</h1>
              <p className="font-semibold text-lg">2025-2026</p>
              <p className="font-semibold text-md">
                  Obtaining a Master's Degree in Artificial Intelligence and Machine Learning as a BS/MS program. 
              </p>
              <p className="font-semibold text-md">
                Relevant Coursework: Artificial Intelligence, Machine Learning, AI Ethics & Policy.
              </p>
            </div>
            <div className="flex flex-1 flex-col">
              <h1 className="font-semibold text-xl">Lockheed Martin - Software Engineering Intern</h1>
              <p className="font-semibold text-lg">Summer 2025</p>
              <p className="font-semibold text-md">
                  Coming soon!
              </p>
              <p className="font-semibold text-md">
                Skills Used: Coming soon!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Personal Projects */}
      <div id="projects" className="fade-in visible h-screen bg-[#f2eddb] flex items-center justify-center flex-col">
        <h1 className="text-7xl font-bold text-[#1d7151]">
          Personal Projects
        </h1>
        <div className="flex flex-row h-1/2 justify-between w-[80%] gap-5 mt-10 text-white">
          <div className="flex flex-1 flex-col bg-[#2b46bd] rounded-xl h-full w-auto justify-center items-center">
            <img 
              src="/coming_soon.png" 
              alt="coming_soon" 
              className="max-w-[70%] max-h-[70%] object-cover rounded-full p-5"
            />
            <h1 className="font-bold text-xl">Project Title #1</h1>
            <p className="text-lg text-center">This project doesn't quite exist yet. Coming soon!</p>
          </div>
          <div className="flex flex-1 flex-col bg-[#2b46bd] rounded-xl h-full w-auto justify-center items-center">
            <img 
              src="/coming_soon.png" 
              alt="coming_soon2" 
              className="max-w-[70%] max-h-[70%] object-cover rounded-full p-5"
            />
            <h1 className="font-bold text-xl">Project Title #2</h1>
            <p className="text-lg text-center">This project doesn't quite exist yet. Coming soon!</p>
          </div>
          <div className="flex flex-1 flex-col bg-[#2b46bd] rounded-xl h-full w-auto justify-center items-center">
            <img 
              src="/coming_soon.png" 
              alt="coming_soon3" 
              className="max-w-[70%] max-h-[70%] object-cover rounded-full p-5"
            />
            <h1 className="font-bold text-xl">Project Title #3</h1>
            <p className="text-lg text-center">This project doesn't quite exist yet. Coming soon!</p>
          </div>
        </div>
      </div>

      {/* Reach Out */}
      <div id="contact" className="fade-in visible h-screen bg-[#C42217] flex items-center justify-center flex-row">
        <div className="flex flex-col w-1/3 h-full ml-5 mt-5 mb-5">
          <h1 className="text-7xl font-bold">Reach Out</h1>
          <div className="flex flex-col justify-between h-full"> 
            <div>
              <p className="text-xl">Keira Schoolcraft</p>
              <p className="text-xl">keira.schoolcraft@gmail.com</p>
            </div>
            <div className="mb-5">
              <p className="text-xl">Connect with me!</p>
              <br></br>
              <div className="flex flex-row items-center gap-5">
              <a href="https://www.linkedin.com/in/keiraschoolcraft/" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path fill="#f2eddb" d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"/></svg>
              </a>
              <a href="https://github.com/keiraSchoolcraft" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path fill="#f2eddb" d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"/></svg>
              </a>
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path fill="#f2eddb" d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"/></svg>
              </a>
              </div>
            </div>
          </div>
        </div>
        <div className="w-2/3">
          <img 
              src="/professional_pic.png" 
              alt="Professional_Pic" 
              className="max-w-[70%] max-h-[70%] object-cover"
            />
        </div>
      </div>

    </div>
  );
}
