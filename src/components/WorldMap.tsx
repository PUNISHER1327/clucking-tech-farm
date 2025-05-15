
import React from 'react';

const WorldMap = () => {
  return (
    <div className="relative w-full h-full">
      <svg viewBox="0 0 1000 500" className="w-full h-full opacity-90">
        {/* World map paths for each continent - improved styling */}
        {/* North America */}
        <path 
          d="M122,107 C160,80 198,70 230,90 C250,100 270,120 280,140 C290,160 292,180 295,195 C298,210 305,230 300,250 C295,270 280,290 265,305 C250,320 240,325 220,335 C200,345 180,350 160,345 C140,340 130,330 115,315 C100,300 95,290 85,270 C75,250 70,230 75,210 C80,190 90,170 100,150 C110,130 122,107 122,107 Z" 
          fill="rgba(249, 115, 22, 0.2)" 
          stroke="#f97316" 
          strokeWidth="2"
          className="continent-path"
        />
        
        {/* South America */}
        <path 
          d="M235,345 C245,330 255,320 270,315 C285,310 300,312 315,315 C330,318 340,325 350,335 C360,345 365,360 370,380 C375,400 377,420 375,440 C373,460 368,475 360,490 C352,505 340,515 325,520 C310,525 295,528 280,525 C265,522 255,515 245,505 C235,495 228,485 222,470 C216,455 212,440 210,425 C208,410 210,390 215,375 C220,360 225,360 235,345 Z" 
          fill="rgba(34, 197, 94, 0.2)" 
          stroke="#22c55e" 
          strokeWidth="2"
          className="continent-path"
        />
        
        {/* Europe */}
        <path 
          d="M445,115 C460,105 475,100 490,98 C505,96 520,95 535,98 C550,101 565,105 575,115 C585,125 590,135 595,145 C600,155 603,165 605,180 C607,195 605,210 600,225 C595,240 588,250 580,260 C572,270 562,275 550,280 C538,285 525,287 512,285 C500,283 490,280 480,275 C470,270 462,265 455,255 C448,245 442,235 440,225 C438,215 436,205 435,195 C434,185 435,175 437,165 C439,155 445,115 445,115 Z" 
          fill="rgba(249, 115, 22, 0.2)" 
          stroke="#f97316" 
          strokeWidth="2"
          className="continent-path"
        />
        
        {/* Africa */}
        <path 
          d="M485,295 C500,280 515,270 535,265 C555,260 575,260 590,265 C605,270 618,280 628,295 C638,310 645,325 650,345 C655,365 657,385 655,405 C653,425 648,440 640,455 C632,470 622,482 610,490 C598,498 585,503 570,505 C555,507 540,505 525,500 C510,495 497,488 487,480 C477,472 468,462 462,450 C456,438 452,425 450,412 C448,400 447,388 448,375 C449,362 452,350 458,340 C464,330 470,310 485,295 Z" 
          fill="rgba(34, 197, 94, 0.2)" 
          stroke="#22c55e" 
          strokeWidth="2"
          className="continent-path"
        />
        
        {/* Asia */}
        <path 
          d="M620,125 C650,110 680,105 710,110 C740,115 760,125 780,140 C800,155 815,175 825,200 C835,225 840,250 835,275 C830,300 820,320 805,335 C790,350 775,360 755,365 C735,370 715,368 695,365 C675,362 655,355 640,345 C625,335 615,320 605,300 C595,280 592,260 590,240 C588,220 592,200 600,180 C608,160 620,125 620,125 Z" 
          fill="rgba(249, 115, 22, 0.2)" 
          stroke="#f97316" 
          strokeWidth="2"
          className="continent-path"
        />
        
        {/* Australia */}
        <path 
          d="M800,375 C815,360 830,350 845,345 C860,340 875,340 890,345 C905,350 915,360 925,375 C935,390 942,405 945,420 C948,435 948,450 945,465 C942,480 935,490 925,500 C915,510 905,515 890,518 C875,521 860,520 845,515 C830,510 820,500 810,490 C800,480 795,470 790,455 C785,440 783,425 785,410 C787,395 800,375 800,375 Z" 
          fill="rgba(34, 197, 94, 0.2)" 
          stroke="#22c55e" 
          strokeWidth="2"
          className="continent-path"
        />
        
        {/* Improved location markers with alternating colors */}
        <circle cx="480" cy="190" r="8" className="fill-orange-500 animate-pulse-glow" />
        <circle cx="535" cy="350" r="8" className="fill-green-500 animate-pulse-glow" />
        <circle cx="700" cy="250" r="8" className="fill-orange-500 animate-pulse-glow" />
        <circle cx="830" cy="450" r="8" className="fill-green-500 animate-pulse-glow" />
        <circle cx="180" cy="230" r="8" className="fill-orange-500 animate-pulse-glow" />
        
        {/* Enhanced connection lines with curvature */}
        <path 
          d="M480,190 Q550,220 535,350" 
          fill="none" 
          stroke="rgba(249,115,22,0.6)" 
          strokeWidth="1.5"
          strokeDasharray="5,5"
        />
        <path 
          d="M535,350 Q620,300 700,250" 
          fill="none" 
          stroke="rgba(34,197,94,0.6)" 
          strokeWidth="1.5"
          strokeDasharray="5,5"
        />
        <path 
          d="M700,250 Q780,350 830,450" 
          fill="none" 
          stroke="rgba(249,115,22,0.6)" 
          strokeWidth="1.5"
          strokeDasharray="5,5"
        />
        <path 
          d="M480,190 Q330,180 180,230" 
          fill="none" 
          stroke="rgba(34,197,94,0.6)" 
          strokeWidth="1.5"
          strokeDasharray="5,5"
        />
      </svg>
      
      {/* Enhanced glow effects */}
      <div className="absolute inset-0 bg-gradient-radial from-orange-500/10 via-green-500/5 to-transparent pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-black to-transparent"></div>
    </div>
  );
};

export default WorldMap;
