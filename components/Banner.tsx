'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Banner() {
  const pathname = usePathname();

  const playwriteStyle = {
    fontFamily: '"Playwrite DK Loopet", cursive'
  };
  
  const cascadiaCodeStyle = {
    fontFamily: '"Cascadia Code", monospace'
  };

  const tabs = [
    { name: 'Home', href: '/' },
    { name: 'Class Projects', href: '/class-projects' },
    { name: 'Personal Projects', href: '/personal-projects' },
    { name: 'More Info', href: '/more-info' },
  ];

  return (
    <div className="text-[#15662B] bg-white shadow-md py-2 px-4">
      <nav className="flex justify-between items-center lg:p-2">
        <div className="hidden lg:flex lg:items-center">
          <img src='/logo.png' alt="Logo" className="h-0 lg:h-10" />
        </div>

        <div className="flex gap-4">
          {tabs.map((tab) => {
            const isActive = pathname === tab.href;

            return (
              <Link
                key={tab.name}
                href={tab.href}
                style={cascadiaCodeStyle}
                className={`py-1 px-2 rounded-lg border-1 border-[#15662B] transition duration-150 ${
                  isActive
                    ? 'bg-gradient-to-r from-green-900 to-green-700 text-white font-semibold'
                    : 'hover:bg-[#90c69a] hover:text-white'
                }`}
              >
                {tab.name}
              </Link>
            );
          })}
        </div>
      </nav>
    </div>
  );
}
