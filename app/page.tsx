import Image from "next/image";
import './globals.css';
import { Fredoka } from 'next/font/google';
const fredoka = Fredoka({ subsets: ['latin'] });

export default function Home() {
  return (
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
    // <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      
    //   <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
    //     <a
    //       className="flex items-center gap-2 hover:underline hover:underline-offset-4"
    //       href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <Image
    //         aria-hidden
    //         src="/file.svg"
    //         alt="File icon"
    //         width={16}
    //         height={16}
    //       />
    //       Learn
    //     </a>
    //     <a
    //       className="flex items-center gap-2 hover:underline hover:underline-offset-4"
    //       href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <Image
    //         aria-hidden
    //         src="/window.svg"
    //         alt="Window icon"
    //         width={16}
    //         height={16}
    //       />
    //       Examples
    //     </a>
    //     <a
    //       className="flex items-center gap-2 hover:underline hover:underline-offset-4"
    //       href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <Image
    //         aria-hidden
    //         src="/globe.svg"
    //         alt="Globe icon"
    //         width={16}
    //         height={16}
    //       />
    //       Go to nextjs.org →
    //     </a>
    //   </footer>
    // </div>
  );
}
