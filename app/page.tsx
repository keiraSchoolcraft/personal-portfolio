'use client';
import './globals.css';
import Banner from '@/components/Banner';

export default function Home() {

  const playwriteStyle = {
    fontFamily: '"Playwrite DK Loopet", cursive'
  };
  
  const cascadiaCodeStyle = {
    fontFamily: '"Cascadia Code", monospace'
  };

  return (
    <div className='h-screen flex flex-col'>
      <Banner/>
      <div className="bg-white flex-grow flex items-center justify-center">
        <div className="border-4 border-[#15662B] h-[80vh] w-[80vw] flex items-center justify-center flex-col lg:flex-row p-2">
          <div className="w-full overflow-hidden h-[60vh] lg:h-full lg:w-auto">
            <img
              src="/green_professional.png"
              alt="image taken outside of higgins garden"
              className="w-full h-full object-cover object-center lg:max-h-full lg:max-w-full lg:object-contain lg:object-left"
            />
          </div>
          <div className='w-full h-full flex-grow lg:w-1/2 p-2 flex flex-col justify-center'>
            <h1 style={{ fontFamily: '"Playwrite DK Loopet", cursive' }} 
              className='text-green-800 text-3xl lg:text-6xl font-extrabold '>Hello, I'm Keira!</h1>
            <div className='p-2'>
              <p style={cascadiaCodeStyle} className='text-gray-900 text-sm font-extralight mt-2 lg:mt-5 lg:text-2xl'>I am an aspiring software developer currently working towards my bachelor's in Computer Science 
                and my Master's in Artificial Intelligence at Worcester Polytechnic Institute.
              </p>
              <br></br>
              <p style={cascadiaCodeStyle} className='text-gray-900 text-sm font-extralight lg:mt-2 lg:text-2xl'>
                I have a passion for frontend development, web development, AI/ML, and software that has a real impact.
                I'm always up for a challenge, and I'm always excited to learn more!
              </p>  
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
