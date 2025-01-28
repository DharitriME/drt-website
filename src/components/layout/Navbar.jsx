import React, { useState, useEffect } from "react";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import logo from "../../logo.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  // const [isDark, setIsDark] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Define routes for navigation
  // Define expanded routes for navigation
  const routes = {
    individuals: {
      Started: "/individuals/Started",
      Rewa: "/individuals/Rewa",
      Chain: "/individuals/Chain",
      Staking: "/individuals/Staking",
      Sustainability: "/individuals/Sustainability",
    },
    developers: {
      Builders: "/Developers/BuildersHub",
      Dapp: "/developers/Dapp",
      Tutorials: "/developers/Tutorials",
      Tools: "/developers/Tools",
      Releases: "/developers/Releases",
      Roadmap: "/developers/Roadmap",
    },
    farmer: {
      resources: "/farmer/resources",
      programs: "/farmer/programs",
      training: "/farmer/training",
      community: "/farmer/community",
    },
    motherEarth: {
      sustainability: "/mother-earth/sustainability",
      greenInitiatives: "/mother-earth/green-initiatives",
      impact: "/mother-earth/impact",
      projects: "/mother-earth/projects",
    },
    products: {
      wallet: "/products/xwallet",
      exchange: "/products/xexchange",
      bridge: "/products/xbridge",
      explorer: "/products/xexplorer",
    },
    ecosystem: {
      discover: "/ecosystem/discover",
      grants: "/ecosystem/grants",
      projects: "/ecosystem/projects",
      partners: "/ecosystem/partners",
      validators: "/ecosystem/validators",
      service: "/ecosystem/service-providers",
    },
    community: {
      events: "/community/events-calenders",
      governance: "/community/governance",
      program: "/community/ambassador-governance",
      faq: "/community/faq",
      blog: "/community/blog",
    },
    about: {
      transformation: "/about/transformation",
      media: "/about/media-kit",
      careers: "/about/careers",
    },
  };

  const navItems = [
    {
      title: "Individuals",
      dropdownItems: [
        {
          title: "Get Started",
          description: "Blockchain to the power of Dharitri",
          icon: "👤",
          path: routes.individuals.Started,
        },
        {
          title: "Th Rewa Token",
          description: "eGold is the currency of Dharitri",
          icon: "📈",
          path: routes.individuals.Rewa,
        },
        {
          title: "On-chain 2FA",
          description: "Easy to setup, impossible to break, unique to Dharitri",
          icon: "🎁",
          path: routes.individuals.Chain,
        },
        {
          title: "Staking",
          description: "Secure the network and earn rewards",
          icon: "🤝",
          path: routes.individuals.Staking,
        },
        {
          title: "Sustainability",
          description:
            "Towards a more responsible and sustainable infrastructure",
          icon: "🤝",
          path: routes.individuals.Sustainability,
        },
      ],
    },
    {
      title: "Developers",
      dropdownItems: [
        {
          title: "Builders Hub",
          description:
            "Discover all Dharitri has to offer and take the first step today",
          icon: "🛠️",
          path: routes.developers.Builders,
        },
        {
          title: "Build a dApp in 30 minutes",
          description: "Create your first Dharitri dApp",
          icon: "📚",
          path: routes.developers.Dapp,
        },
        {
          title: "Tutorials",
          description: "Your journey starts here",
          icon: "🔧",
          path: routes.developers.Tutorials,
        },
        {
          title: "Tools & Resources",
          description: "Curated library of developer resources",
          icon: "📖",
          path: routes.developers.Tools,
        },
        {
          title: "Releases",
          description:
            "Here's a feed to help you catch up with our latest releases",
          icon: "📖",
          path: routes.developers.Releases,
        },
        {
          title: "Tech Roadmap",
          description: "Provides a regularly updated high-level overview",
          icon: "📖",
          path: routes.developers.Roadmap,
        },
      ],
    },
    {
      title: "TheFarmer",
      dropdownItems: [
        {
          title: "Resources",
          description: "Farming tools & guides",
          icon: "🌾",
          path: routes.farmer.resources,
        },
        {
          title: "Programs",
          description: "Support initiatives",
          icon: "🌱",
          path: routes.farmer.programs,
        },
        {
          title: "Training",
          description: "Skill development",
          icon: "📋",
          path: routes.farmer.training,
        },
        {
          title: "Community",
          description: "Connect with farmers",
          icon: "👥",
          path: routes.farmer.community,
        },
      ],
    },
    {
      title: "MotherEarth",
      dropdownItems: [
        {
          title: "Sustainability",
          description: "Environmental initiatives",
          icon: "🌍",
          path: routes.motherEarth.sustainability,
        },
        {
          title: "Green Initiatives",
          description: "Eco-friendly projects",
          icon: "🌱",
          path: routes.motherEarth.greenInitiatives,
        },
        {
          title: "Impact",
          description: "Environmental impact metrics",
          icon: "📊",
          path: routes.motherEarth.impact,
        },
        {
          title: "Projects",
          description: "Conservation efforts",
          icon: "🌿",
          path: routes.motherEarth.projects,
        },
      ],
    },
    {
      title: "Accountability",
      dropdownItems: [
        {
          title: "xWallet",
          description: "Secure digital wallet",
          icon: "💼",
          path: routes.products.wallet,
        },
        {
          title: "xExchange",
          description: "Trade assets",
          icon: "💱",
          path: routes.products.exchange,
        },
        {
          title: "xBridge",
          description: "Cross-chain transfers",
          icon: "🌉",
          path: routes.products.bridge,
        },
        {
          title: "xExplorer",
          description: "Blockchain explorer",
          icon: "🔍",
          path: routes.products.explorer,
        },
      ],
    },
    {
      title: "Ecosystem",
      dropdownItems: [
        {
          title: "Discover",
          description:
            "Explore projects and partners from the Dharitri ecosystem",
          icon: "🤝",
          path: routes.ecosystem.discover,
        },
        {
          title: "Grants",
          description: "Join the Dharitri Growth Games grants program",
          icon: "🤝",
          path: routes.ecosystem.grants,
        },
        {
          title: "Projects",
          description:
            "A new dimension of utility built and launched on Dharitri",
          icon: "🚀",
          path: routes.ecosystem.projects,
        },
        {
          title: "Partners",
          description:
            "Seamlessly connect with leading platforms and protocols",
          icon: "📈",
          path: routes.ecosystem.partners,
        },
        {
          title: "Validators",
          description: "Help secure the network and earn rewards",
          icon: "🎯",
          path: routes.ecosystem.validators,
        },
        {
          title: "Service Providers",
          description: "Bring your business to the Dharitri network",
          icon: "🎯",
          path: routes.ecosystem.service,
        },
      ],
    },
    {
      title: "Community",
      dropdownItems: [
        {
          title: "Events Calender",
          description: "Meet us at events across the world",
          icon: "📅",
          path: routes.community.events,
        },
        {
          title: "Governance",
          description:
            "A new dimension of utility built and launched on Dharitri",
          icon: "💭",
          path: routes.community.governance,
        },
        {
          title: "Ambassador Program",
          description:
            "Seamlessly connect with leading platforms and protocols",
          icon: "🌐",
          path: routes.community.program,
        },
        {
          title: "FAQ",
          description: "The answers to the questions you most seek",
          icon: "💡",
          path: routes.community.faq,
        },
        {
          title: "Blog",
          description:
            "Latest posts on ecosystem, research, technology, and more",
          icon: "🎯",
          path: routes.community.blog,
        },
      ],
    },
    {
      title: "About",
      dropdownItems: [
        {
          title: "From Elrond to Dharitri",
          description:
            "The story of our transformation from Elrond to Dharitri",
          icon: "🎯",
          path: routes.about.transformation,
        },
        {
          title: "Media Kit",
          description:
            "Latest media appearances, access to your official media kit",
          icon: "👥",
          path: routes.about.media,
        },
        {
          title: "Careers",
          description:
            "Join one of the most resourceful tech companies in the world",
          icon: "🗺️",
          path: routes.about.careers,
        },
      ],
    },
  ];

  return (
    <div className="relative">
      <nav
        className={`fixed w-full z-50 transition-all duration-500  ${
          isScrolled
            ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg shadow-lg"
            : "bg-gray-900/90 backdrop-blur-lg"
        }`}
      >
        <div className="border-b border-gray-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-24 items-center">
              {/* Logo */}
              <div className="flex-shrink-0 flex items-center space-x-4 mr-16">
                <div className="relative">
                  {/* Using placeholder image instead of imported logo */}
                  <Link to="/">
                    <img
                      src={logo}
                      alt="Dharitri Logo"
                      className={`transition-all duration-300 ${
                        isScrolled ? "h-11" : "h-12"
                      }`}
                    />
                  </Link>
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
                    <button
                      className={`
                  px-4 py-2 rounded-full flex items-center text-sm font-medium
                  transition-all duration-200
                  ${
                    isScrolled
                      ? "text-gray-700 dark:text-gray-300 hover:text-indigo-400"
                      : "text-gray-100 hover:text-indigo-400"
                  }
                  relative
                `}
                    >
                      {item.title}
                      <ChevronDown
                        className={`
                    ml-1 w-4 h-4 transition-transform duration-300
                    ${hoveredItem === item.title ? "rotate-180" : ""}
                  `}
                      />
                      {hoveredItem === item.title && (
                        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 transform origin-left scale-x-100 transition-transform duration-300" />
                      )}
                    </button>

                    {/* Mega Menu Dropdown */}
                    <div
                      className={`
                  absolute left-0 mt-2 w-80 opacity-0 invisible
                  group-hover:opacity-100 group-hover:visible
                  transition-all duration-300 transform
                  group-hover:translate-y-0 translate-y-2
                `}
                    >
                      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl ring-1 ring-black ring-opacity-5 p-6">
                        <div className="grid gap-6">
                          {item.dropdownItems.map((dropdownItem, idx) => (
                            <a
                              key={idx}
                              href={dropdownItem.path}
                              className="flex items-center p-3 -m-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition duration-150 ease-in-out"
                            >
                              <div className="flex-shrink-0">
                                <span className="text-2xl">
                                  {dropdownItem.icon}
                                </span>
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
              {/* <div className="hidden lg:flex items-center space-x-4">
                <button
                  onClick={() => setIsDark(!isDark)}
                  className="p-2 rounded-full hover:bg-gray-800 transition-colors text-gray-100"
                >
                  {isDark ? (
                    <Sun className="w-4 h-4" />
                  ) : (
                    <Moon className="w-4 h-4" />
                  )}
                </button>
                <button
                  onClick={() => setIsNavVisible(!isNavVisible)}
                  className={`p-3 rounded-full transition-colors ${
                    isScrolled
                      ? "text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
                      : "text-gray-100 hover:bg-gray-800"
                  }`}
                >
                  {isNavVisible ? (
                    <X className="w-5 h-5" />
                  ) : (
                    <Menu className="w-5 h-5" />
                  )}
                </button>
              </div> */}


              {/* Mobile menu button */}
              <button
                className="lg:hidden p-2 rounded-lg text-gray-100 hover:bg-gray-800"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`lg:hidden transition-all duration-300 transform ${
            isOpen
              ? "translate-y-0 opacity-100 visible"
              : "-translate-y-full opacity-0 invisible"
          } absolute top-full left-0 w-full bg-gray-900 shadow-xl`}
        >
          <div className="p-4 space-y-2">
            {navItems.map((item, index) => (
              <div key={index} className="space-y-2">
                <button
                  className="w-full px-4 py-2 flex items-center justify-between text-gray-100 rounded-lg hover:bg-gray-800"
                  onClick={() =>
                    setActiveDropdown(
                      activeDropdown === item.title ? null : item.title
                    )
                  }
                >
                  {item.title}
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      activeDropdown === item.title ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {activeDropdown === item.title && (
                  <div className="pl-4 space-y-2">
                    {item.dropdownItems.map((dropdownItem, idx) => (
                      <a
                        key={idx}
                        href={dropdownItem.path}
                        className="flex items-center p-2 text-sm text-gray-300 rounded-lg hover:bg-gray-800"
                      >
                        <span className="text-xl mr-3">
                          {dropdownItem.icon}
                        </span>
                        <div>
                          <p className="font-medium">{dropdownItem.title}</p>
                          <p className="text-xs text-gray-500">
                            {dropdownItem.description}
                          </p>
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
      {/* {!isNavVisible && (
        <button
          onClick={() => setIsNavVisible(true)}
          className="fixed top-4 right-4 z-50 p-3 rounded-full bg-indigo-600 text-white hover:bg-indigo-700 shadow-lg transition-all duration-300"
        >
          <Menu className="w-5 h-5" />
        </button>
      )} */}
    </div>
  );
};

export default Navbar;
