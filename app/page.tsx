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

    </div>
  );
}
