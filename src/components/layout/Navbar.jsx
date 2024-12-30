// import React, { useState, useEffect } from 'react';
// import { Menu, X, ChevronDown, Globe, Sun, Moon } from 'lucide-react';
// import logo from './drt-logo.png';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [activeDropdown, setActiveDropdown] = useState(null);
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isDark, setIsDark] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 20);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const navItems = [
//     {
//       title: 'Individuals',
//       dropdownItems: ['Personal Account', 'Investments', 'Benefits', 'Support']
//     },
//     {
//       title: 'Developers',
//       dropdownItems: ['Build', 'Learn', 'Tools', 'Documentation']
//     },
//     {
//       title: 'The Farmer',
//       dropdownItems: ['Resources', 'Programs', 'Training', 'Community']
//     },
//     {
//       title: 'Mother Earth',
//       dropdownItems: ['Sustainability', 'Green Initiatives', 'Impact', 'Projects']
//     },
//     {
//       title: 'Products',
//       dropdownItems: ['xWallet', 'xExchange', 'xBridge', 'xExplorer']
//     }
//   ];

//   const secondaryItems = [
//     {
//       title: 'Ecosystem',
//       dropdownItems: ['Partners', 'Projects', 'Growth', 'Participate']
//     },
//     {
//       title: 'Community',
//       dropdownItems: ['Events', 'Forums', 'Social', 'Support']
//     },
//     {
//       title: 'About',
//       dropdownItems: ['Mission', 'Team', 'Roadmap', 'Contact']
//     }
//   ];

//   return (
//     <nav className={`fixed w-full z-50 transition-all duration-300 ${
//       isScrolled ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-lg' : 
//       'bg-transparent'
//     }`}>
//       {/* Top bar with secondary navigation */}
//       <div className="hidden lg:block bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white">
//         <div className="max-w-7xl mx-auto px-4">
//           <div className="flex justify-between items-center h-10">
//             <div className="flex space-x-4 text-sm">
//               {secondaryItems.map((item, index) => (
//                 <div key={index} className="relative group">
//                   <button className="hover:text-gray-200 flex items-center">
//                     {item.title}
//                     <ChevronDown className="ml-1 w-3 h-3" />
//                   </button>
//                   <div className="absolute left-0 mt-1 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
//                     <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl ring-1 ring-black ring-opacity-5 p-2">
//                       {item.dropdownItems.map((dropdownItem, idx) => (
//                         <a
//                           key={idx}
//                           href="/dharitri"
//                           className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700"
//                         >
//                           {dropdownItem}
//                         </a>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//             <div className="flex items-center space-x-4">
//               <button className="flex items-center text-sm hover:text-gray-200">
//                 <Globe className="w-4 h-4 mr-1" />
//                 EN
//               </button>
//               <button 
//                 onClick={() => setIsDark(!isDark)}
//                 className="p-1 rounded-full hover:bg-white/10 transition-colors"
//               >
//                 {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Main navigation */}
//       <div className={`max-w-7xl mx-auto px-4 transition-all duration-300 ${
//         isScrolled ? 'py-2' : 'py-4'
//       }`}>
//         <div className="flex items-center justify-between">
//           {/* Logo */}
//           <div className="flex-shrink-0 flex items-center">
//             <img
//               src={logo}
//               alt="Dharitri Logo"
//               className={`transition-all duration-300 ${
//                 isScrolled ? 'h-8' : 'h-10'
//               }`}
//             />
//             <span className={`ml-2 font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent ${
//               isScrolled ? 'text-xl' : 'text-2xl'
//             }`}>
//               DHARITRI
//             </span>
//           </div>

//           {/* Desktop Navigation */}
//           <div className="hidden lg:flex items-center space-x-1">
//             {navItems.map((item, index) => (
//               <div key={index} className="relative group">
//                 <button
//                   className={`px-4 py-2 rounded-full flex items-center text-sm font-medium transition-all duration-200 ${
//                     isScrolled
//                       ? 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
//                       : 'text-gray-900 dark:text-white hover:bg-white/10'
//                   }`}
//                 >
//                   {item.title}
//                   <ChevronDown className="ml-1 w-4 h-4 transition-transform group-hover:rotate-180" />
//                 </button>
//                 <div className="absolute left-0 mt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
//                   <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 p-2">
//                     {item.dropdownItems.map((dropdownItem, idx) => (
//                       <a
//                         key={idx}
//                         href="/dharitri"
//                         className="flex items-center px-4 py-2 text-sm text-gray-700 dark:text-gray-200 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
//                       >
//                         {dropdownItem}
//                       </a>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Mobile menu button */}
//           <button
//             className="lg:hidden p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
//             onClick={() => setIsOpen(!isOpen)}
//           >
//             {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile menu */}
//       <div className={`lg:hidden transition-all duration-300 transform ${
//         isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
//       } absolute top-full left-0 w-full bg-white dark:bg-gray-900 shadow-xl`}>
//         <div className="p-4 space-y-2">
//           {[...navItems, ...secondaryItems].map((item, index) => (
//             <div key={index} className="space-y-2">
//               <button
//                 className="w-full px-4 py-2 flex items-center justify-between text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
//                 onClick={() => setActiveDropdown(activeDropdown === item.title ? null : item.title)}
//               >
//                 {item.title}
//                 <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
//                   activeDropdown === item.title ? 'rotate-180' : ''
//                 }`} />
//               </button>
//               {activeDropdown === item.title && (
//                 <div className="pl-4 space-y-1">
//                   {item.dropdownItems.map((dropdownItem, idx) => (
//                     <a
//                       key={idx}
//                       href="/dharitri"
//                       className="block px-4 py-2 text-sm text-gray-600 dark:text-gray-400 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
//                     >
//                       {dropdownItem}
//                     </a>
//                   ))}
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Sun, Moon, ArrowRight, Sparkles } from 'lucide-react';
import logo from './drt-logo.png';

const Navbar = ({ isNavVisible, setIsNavVisible }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Define routes for navigation
  // Define expanded routes for navigation
const routes = {
  individuals: {
    personal: '/individuals/personal',
    investments: '/individuals/investments',
    benefits: '/individuals/benefits',
    support: '/individuals/support'
  },
  developers: {
    build: '/developers/build',
    learn: '/developers/learn',
    tools: '/developers/tools',
    docs: '/developers/documentation'
  },
  farmer: {
    resources: '/farmer/resources',
    programs: '/farmer/programs',
    training: '/farmer/training',
    community: '/farmer/community'
  },
  // motherEarth: {
  //   sustainability: '/mother-earth/sustainability',
  //   greenInitiatives: '/mother-earth/green-initiatives',
  //   impact: '/mother-earth/impact',
  //   projects: '/mother-earth/projects'
  // },
  products: {
    wallet: '/products/xwallet',
    exchange: '/products/xexchange',
    bridge: '/products/xbridge',
    explorer: '/products/xexplorer'
  },
  ecosystem: {
    partners: '/ecosystem/partners',
    projects: '/ecosystem/projects',
    growth: '/ecosystem/growth',
    participate: '/ecosystem/participate'
  },
  community: {
    events: '/community/events',
    forums: '/community/forums',
    social: '/community/social',
    support: '/community/support'
  },
  about: {
    mission: '/about/mission',
    team: '/about/team',
    roadmap: '/about/roadmap',
    contact: '/about/contact'
  }
};

const navItems = [
  {
    title: 'Individuals',
    dropdownItems: [
      { title: 'Personal Account', description: 'Manage your personal finances', icon: '👤', path: routes.individuals.personal },
      { title: 'Investments', description: 'Grow your wealth', icon: '📈', path: routes.individuals.investments },
      { title: 'Benefits', description: 'Exclusive member perks', icon: '🎁', path: routes.individuals.benefits },
      { title: 'Support', description: '24/7 customer service', icon: '🤝', path: routes.individuals.support }
    ]
  },
  {
    title: 'Developers',
    dropdownItems: [
      { title: 'Build', description: 'Create next-gen apps', icon: '🛠️', path: routes.developers.build },
      { title: 'Learn', description: 'Developer resources', icon: '📚', path: routes.developers.learn },
      { title: 'Tools', description: 'Development tools', icon: '🔧', path: routes.developers.tools },
      { title: 'Documentation', description: 'Technical guides', icon: '📖', path: routes.developers.docs }
    ]
  },
  {
    title: 'The Farmer',
    dropdownItems: [
      { title: 'Resources', description: 'Farming tools & guides', icon: '🌾', path: routes.farmer.resources },
      { title: 'Programs', description: 'Support initiatives', icon: '🌱', path: routes.farmer.programs },
      { title: 'Training', description: 'Skill development', icon: '📋', path: routes.farmer.training },
      { title: 'Community', description: 'Connect with farmers', icon: '👥', path: routes.farmer.community }
    ]
  },
  // {
  //   title: 'Mother Earth',
  //   dropdownItems: [
  //     { title: 'Sustainability', description: 'Environmental initiatives', icon: '🌍', path: routes.motherEarth.sustainability },
  //     { title: 'Green Initiatives', description: 'Eco-friendly projects', icon: '🌱', path: routes.motherEarth.greenInitiatives },
  //     { title: 'Impact', description: 'Environmental impact metrics', icon: '📊', path: routes.motherEarth.impact },
  //     { title: 'Projects', description: 'Conservation efforts', icon: '🌿', path: routes.motherEarth.projects }
  //   ]
  // },
  {
    title: 'Products',
    dropdownItems: [
      { title: 'xWallet', description: 'Secure digital wallet', icon: '💼', path: routes.products.wallet },
      { title: 'xExchange', description: 'Trade assets', icon: '💱', path: routes.products.exchange },
      { title: 'xBridge', description: 'Cross-chain transfers', icon: '🌉', path: routes.products.bridge },
      { title: 'xExplorer', description: 'Blockchain explorer', icon: '🔍', path: routes.products.explorer }
    ]
  },
  {
    title: 'Ecosystem',
    dropdownItems: [
      { title: 'Partners', description: 'Strategic partnerships', icon: '🤝', path: routes.ecosystem.partners },
      { title: 'Projects', description: 'Ecosystem initiatives', icon: '🚀', path: routes.ecosystem.projects },
      { title: 'Growth', description: 'Ecosystem metrics', icon: '📈', path: routes.ecosystem.growth },
      { title: 'Participate', description: 'Get involved', icon: '🎯', path: routes.ecosystem.participate }
    ]
  },
  {
    title: 'Community',
    dropdownItems: [
      { title: 'Events', description: 'Upcoming gatherings', icon: '📅', path: routes.community.events },
      { title: 'Forums', description: 'Community discussions', icon: '💭', path: routes.community.forums },
      { title: 'Social', description: 'Connect with us', icon: '🌐', path: routes.community.social },
      { title: 'Support', description: 'Help & assistance', icon: '💡', path: routes.community.support }
    ]
  },
  {
    title: 'About',
    dropdownItems: [
      { title: 'Mission', description: 'Our vision & goals', icon: '🎯', path: routes.about.mission },
      { title: 'Team', description: 'Meet our team', icon: '👥', path: routes.about.team },
      { title: 'Roadmap', description: 'Future plans', icon: '🗺️', path: routes.about.roadmap },
      { title: 'Contact', description: 'Get in touch', icon: '📧', path: routes.about.contact }
    ]
  }
];

return (

  <div className="relative">

  <nav className={`fixed w-full z-50 transition-all duration-500 ${
    !isNavVisible ? '-translate-y-full' : 'translate-y-0'
  } ${
    isScrolled 
      ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg shadow-lg' 
      : 'bg-gray-900/90 backdrop-blur-lg'
  }`}>
    <div className="border-b border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-24 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center space-x-4 mr-16">
            <div className="relative">
              {/* Using placeholder image instead of imported logo */}
              <img
                src={logo}
                alt="Dharitri Logo"
                className={`transition-all duration-300 ${
                  isScrolled ? 'h-8' : 'h-10'
                }`}
              />
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
            </div>
            <div className="relative">
              <span className={`font-bold text-transparent bg-clip-text bg-gradient-to-r 
                from-indigo-600 via-purple-600 to-pink-600
                animate-gradient-x ${isScrolled ? 'text-xl' : 'text-2xl'}`}>
                DHARITRI
              </span>
              <Sparkles className="absolute -right-6 -top-2 w-4 h-4 text-yellow-400 animate-pulse" />
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <div
                key={index}
                className="relative group"
                onMouseEnter={() => setHoveredItem(item.title)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <button className={`
                  px-4 py-2 rounded-full flex items-center text-sm font-medium
                  transition-all duration-200
                  ${isScrolled
                    ? 'text-gray-700 dark:text-gray-300 hover:text-indigo-400'
                    : 'text-gray-100 hover:text-indigo-400'}
                  relative
                `}>
                  {item.title}
                  <ChevronDown className={`
                    ml-1 w-4 h-4 transition-transform duration-300
                    ${hoveredItem === item.title ? 'rotate-180' : ''}
                  `} />
                  {hoveredItem === item.title && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 transform origin-left scale-x-100 transition-transform duration-300" />
                  )}
                </button>

                {/* Mega Menu Dropdown */}
                <div className={`
                  absolute left-0 mt-2 w-80 opacity-0 invisible
                  group-hover:opacity-100 group-hover:visible
                  transition-all duration-300 transform
                  group-hover:translate-y-0 translate-y-2
                `}>
                  <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl ring-1 ring-black ring-opacity-5 p-6">
                    <div className="grid gap-6">
                      {item.dropdownItems.map((dropdownItem, idx) => (
                        <a
                          key={idx}
                          href={dropdownItem.path}
                          className="flex items-center p-3 -m-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition duration-150 ease-in-out"
                        >
                          <div className="flex-shrink-0">
                            <span className="text-2xl">{dropdownItem.icon}</span>
                          </div>
                          <div className="ml-4">
                            <p className="text-sm font-medium text-gray-900 dark:text-white">
                              {dropdownItem.title}
                            </p>
                            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                              {dropdownItem.description}
                            </p>
                          </div>
                          <ArrowRight className="w-4 h-4 ml-auto text-gray-400 group-hover:text-gray-500" />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
            
          </div>

          {/* Right Section */}
          <div className="hidden lg:flex items-center space-x-4">
            <button 
              onClick={() => setIsDark(!isDark)}
              className="p-2 rounded-full hover:bg-gray-800 transition-colors text-gray-100"
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            <button 
                  onClick={() => setIsNavVisible(!isNavVisible)}
                  className={`p-3 rounded-full transition-colors ${
                    isScrolled 
                      ? 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800' 
                      : 'text-gray-100 hover:bg-gray-800'
                  }`}
                >
                  {isNavVisible ? (
                    <X className="w-5 h-5" />
                  ) : (
                    <Menu className="w-5 h-5" />
                  )}
                </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 rounded-lg text-gray-100 hover:bg-gray-800"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>
    </div>

    {/* Mobile menu */}
    <div className={`lg:hidden transition-all duration-300 transform ${
      isOpen ? 'translate-y-0 opacity-100 visible' : '-translate-y-full opacity-0 invisible'
    } absolute top-full left-0 w-full bg-gray-900 shadow-xl`}>
      <div className="p-4 space-y-2">
        {navItems.map((item, index) => (
          <div key={index} className="space-y-2">
            <button
              className="w-full px-4 py-2 flex items-center justify-between text-gray-100 rounded-lg hover:bg-gray-800"
              onClick={() => setActiveDropdown(activeDropdown === item.title ? null : item.title)}
            >
              {item.title}
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                activeDropdown === item.title ? 'rotate-180' : ''
              }`} />
            </button>
            {activeDropdown === item.title && (
              <div className="pl-4 space-y-2">
                {item.dropdownItems.map((dropdownItem, idx) => (
                  <a
                    key={idx}
                    href={dropdownItem.path}
                    className="flex items-center p-2 text-sm text-gray-300 rounded-lg hover:bg-gray-800"
                  >
                    <span className="text-xl mr-3">{dropdownItem.icon}</span>
                    <div>
                      <p className="font-medium">{dropdownItem.title}</p>
                      <p className="text-xs text-gray-500">{dropdownItem.description}</p>
                    </div>
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  </nav>
  {!isNavVisible && (
    <button
      onClick={() => setIsNavVisible(true)}
      className="fixed top-4 right-4 z-50 p-3 rounded-full bg-indigo-600 text-white hover:bg-indigo-700 shadow-lg transition-all duration-300"
    >
      <Menu className="w-5 h-5" />
    </button>
  )}
  </div>
);
};

export default Navbar;