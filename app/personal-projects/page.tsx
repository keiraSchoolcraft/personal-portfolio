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
       <div className='flex flex-col items-center bg-white'>
          <h1 style={playwriteStyle} className='text-[#15662B] text-3xl lg:text-7xl mt-2 font-bold'>
            Personal Projects
          </h1>
          <p style={cascadiaCodeStyle} className='text-gray-900 mt-1 lg:mt-5 text-xs lg:text-lg text-center'>
            See what I've been doing in my free time!
          </p>
          <img
              src="/coming_soon.png"
              alt="coming soon"
              className="w-full h-full object-cover object-center lg:max-h-full lg:max-w-full lg:object-contain lg:object-left"
            />
      </div>
    </div>
  );
}
