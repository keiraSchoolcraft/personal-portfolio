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
    </div>
  );
}
