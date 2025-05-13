'use client';
import Banner from '@/components/Banner';

export default function Home() {
  const playwriteStyle = {
    fontFamily: '"Playwrite DK Loopet", cursive'
  };
  
  const cascadiaCodeStyle = {
    fontFamily: '"Cascadia Code", monospace'
  };

  const handleClick = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <div className='h-screen flex flex-col bg-white'>
      <Banner />
      <div className='bg-white h-full flex justify-center p-2'>
        <div className='flex flex-col items-center'>
          <h1 style={playwriteStyle} className='text-[#15662B] text-3xl lg:text-7xl font-bold'>
            Class Projects
          </h1>
          <p style={cascadiaCodeStyle} className='text-gray-900 mt-1 lg:mt-5 text-xs lg:text-lg text-center'>
            The cornerstone of the WPI curriculum is project-based learning. Here's a look into what I have done with my project-based learning!
          </p>
          <div className='grid grid-cols-2 gap-2 lg:gap-4 h-full w-full items-center justify-center'>
            
            {/* Sous-Chef Presentation */}
            <div className='relative group cursor-pointer h-full' onClick={() => handleClick('https://docs.google.com/presentation/d/1BeSuiRzZWwurEVHGbC-qEF8KmvIycNBQNtoH2Lf8aLs/edit?usp=sharing')}>
                <iframe
                    src="https://docs.google.com/presentation/d/e/2PACX-1vTLmTc9uqzpoe7gd6h2OI9-1WCFL0M-1erhkIsbY1gtn6_Qs9xlz6ySVQGDO2nj-3FdiSDM-40VXtTO/pubembed?start=true&loop=true&delayms=3000"
                    allowFullScreen
                    className="w-full h-full pointer-events-none"
                ></iframe>
                <div className="absolute inset-0 bg-black bg-opacity-50 text-white opacity-0 group-hover:opacity-70 flex flex-col items-center justify-center text-center transition-opacity px-2">
                    <h1 style={playwriteStyle} className='text-md lg:text-xl font-bold'>Sous-Chef</h1>
                    <p style={cascadiaCodeStyle} className="text-sm md:text-lg font-medium">For my Mobile & Ubiquitous Computing class, my partner and I made this app using ReactNative and Expo.
                        The goal of this app was to provide a way to store groceries, view your inventory, and generate recipes. I was primarily responsible for the app UI and UX features and the 
                        Google Gemini recipe generation integration.
                    </p>
                    <br></br>
                    <p style={cascadiaCodeStyle} className="text-sm md:text-lg font-medium">View our presentation to see more!</p>
                </div>
            </div>

            {/* CopyConda presentation */}
            <div className='relative group cursor-pointer h-full' onClick={() => handleClick('https://docs.google.com/presentation/d/1QUinfmBLCT0ZKg0OJOYI6S2_K_DKAe03oYLM18oJsOE/edit?usp=sharing')}>
                <iframe
                    src="https://docs.google.com/presentation/d/e/2PACX-1vRbW1cpn_Uumk7wGY-g4hM__YoBnujej-o-fq-eoV-Q2SAUR7lrjI81fFW95pgXdZZuyluRfsg7hjBT/pubembed?start=true&loop=true&delayms=3000"
                    allowFullScreen
                    className="w-full h-full pointer-events-none"
                ></iframe>
                <div className="absolute inset-0 bg-black bg-opacity-50 text-white opacity-0 group-hover:opacity-70 flex flex-col items-center justify-center text-center transition-opacity px-2">
                    <h1 style={playwriteStyle} className='text-md lg:text-xl font-bold'>CopyConda: Playing Snake with Imitation Learning vs. Reinforcement Learning</h1>
                    <p style={cascadiaCodeStyle} className="text-sm md:text-lg font-medium">For Machine Learning, CS539, I worked on a team of 4 to compare Imitation Learning and Reinforcement Learning for the classic Snake Game.
                        I was primarily responsible for data collection (necessary to collect our own data because there is no available data set for the snake game) and aided with reinforcement learning. </p>
                    <br></br>
                    <p style={cascadiaCodeStyle} className="text-sm md:text-lg font-medium">View our presentation to see more!</p>
                </div>
            </div>

            {/* Boston Freedom Trail app */}
            <div className='relative group cursor-pointer h-full' onClick={() => handleClick('https://youtu.be/vE1TZa10x70?si=9EiZFHI30NtxLrl3')}>
                <iframe
                    src="https://www.youtube.com/embed/vE1TZa10x70?si=XPb0xMA1N-g_NTYQ" 
                    title="YouTube video player"
                    allowFullScreen
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    className="w-full h-full pointer-events-none"
                ></iframe>
                <div className="absolute inset-0 bg-black bg-opacity-50 text-white opacity-0 group-hover:opacity-70 flex flex-col items-center justify-center text-center transition-opacity px-2">
                    <h1 style={playwriteStyle} className='text-md lg:text-xl font-bold'>Boston Freedom Trail Application</h1>
                    <p style={cascadiaCodeStyle} className="text-sm md:text-lg font-medium">In Webware, CS4241, I worked on a team of 5 students to make an application for the Boston Freedom Trail. 
                        The goal of our website was to provide users with a free, virtual tourguide along the trail, to make navigation of the trail and obtaining information on sites easier.
                        Using Next.js, I was personally responsible for managing group requirements, the UI design, the Leaflet map (including the freedom trail path), and data collection.
                    </p>
                </div>
            </div>

            {/* src="https://www.youtube.com/embed/1LSxXzPJ4Zg?si=8yGXpR7_RgerbhA6" */}

            <div className='relative group cursor-pointer h-full' onClick={() => handleClick('src="https://www.youtube.com/embed/1LSxXzPJ4Zg?si=8yGXpR7_RgerbhA6')}>
                <iframe
                    src="https://www.youtube.com/embed/1LSxXzPJ4Zg?si=8yGXpR7_RgerbhA6" 
                    title="YouTube video player"
                    allowFullScreen
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    className="w-full h-full pointer-events-none"
                ></iframe>
                <div className="absolute inset-0 bg-black bg-opacity-50 text-white opacity-0 group-hover:opacity-70 flex flex-col items-center justify-center text-center transition-opacity px-2">
                    <h1 style={playwriteStyle} className='text-md lg:text-xl font-bold'>Venetian Green Revival</h1>
                    <p style={cascadiaCodeStyle} className="text-sm md:text-lg font-medium"> After spending an incredible 2 months working in Venice, my team of 4 produced our IQP project, which 
                        aimed towards collecting and displaying data on Venetian Green Spaces to improve the quality of life for Venetian residents. One of the final deliverables was a website, which 
                        I was solely responsible for. This React Javascript website displayed GIS data on the green spaces collected by the team, allowed for filtering by type and location.
                    </p>
                    <br></br>
                    <p style={cascadiaCodeStyle} className="text-sm md:text-lg font-medium">View our presentation to see more!</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
