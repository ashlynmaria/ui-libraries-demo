import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Routes, useLocation } from 'react-router-dom';
import { ChakraProvider } from "@chakra-ui/react";
import MaterialUIPage from './pages/MaterialUIPage';
import FlowbitePage from './pages/FlowbitePage';
import ShadcnPage from './pages/ShadcnPage';
import ChakraUIPage from './pages/ChakraUIPage';

function NavLink({ to, children, onClick }) {
  const location = useLocation();
  const isActive = location.pathname === to;
  
  return (
    <Link
      to={to}
      onClick={onClick}
      className={`block px-3 py-2 rounded-md text-base font-medium ${
        isActive
          ? 'bg-gray-900 text-white'
          : 'text-gray-300 hover:bg-gray-700 hover:text-white'
      }`}
    >
      {children}
    </Link>
  );
}

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-gray-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <span className="text-white font-bold text-xl">UI Libraries Demo</span>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/material-ui">Material UI</NavLink>
              <NavLink to="/flowbite">Flowbite</NavLink>
              <NavLink to="/shadcn">shadcn/ui</NavLink>
              <NavLink to="/chakra-ui">Chakra UI</NavLink>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <NavLink to="/" onClick={closeMenu}>Home</NavLink>
            <NavLink to="/material-ui" onClick={closeMenu}>Material UI</NavLink>
            <NavLink to="/flowbite" onClick={closeMenu}>Flowbite</NavLink>
            <NavLink to="/shadcn" onClick={closeMenu}>shadcn/ui</NavLink>
            <NavLink to="/chakra-ui" onClick={closeMenu}>Chakra UI</NavLink>
          </div>
        </div>
      )}
    </nav>
  );
}

function Home() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto py-6 sm:py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 sm:tracking-tight lg:text-6xl">
            Explore Modern UI Libraries
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base sm:text-lg md:mt-5 md:text-xl text-gray-500">
            Explore React UI components with this interactive showcase featuring Material UI, Flowbite, shadcn/ui, and Chakra UI.
          </p>
        </div>

        <div className="mt-10 sm:mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            { name: 'Material UI', description: 'Google\'s Material Design implemented for React', link: '/material-ui', color: 'bg-blue-500' },
            { name: 'Flowbite', description: 'Tailwind CSS-based UI components', link: '/flowbite', color: 'bg-teal-500' },
            { name: 'shadcn/ui', description: 'Beautifully designed components built with Radix UI and Tailwind CSS', link: '/shadcn', color: 'bg-purple-500' },
            { name: 'Chakra UI', description: 'Simple, modular and accessible component library', link: '/chakra-ui', color: 'bg-green-500' }
          ].map((lib) => (
            <div key={lib.name} className="bg-white overflow-hidden shadow rounded-lg flex flex-col">
              <div className={`${lib.color} px-4 py-5 sm:p-6 text-white`}>
                <h3 className="text-lg leading-6 font-medium">{lib.name}</h3>
              </div>
              <div className="px-4 py-5 sm:p-6 flex-grow">
                <p className="text-sm text-gray-500">{lib.description}</p>
              </div>
              <div className="px-4 py-4 sm:px-6">
                <Link 
                  to={lib.link} 
                  className={`w-full inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white ${lib.color} hover:bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-${lib.color}`}
                >
                  Explore {lib.name}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <ChakraProvider>
      <Router>
        <div className="min-h-screen bg-gray-100">
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/material-ui" element={<MaterialUIPage />} />
            <Route path="/flowbite" element={<FlowbitePage />} />
            <Route path="/shadcn" element={<ShadcnPage />} />
            <Route path="/chakra-ui" element={<ChakraUIPage />} />
          </Routes>
        </div>
      </Router>
    </ChakraProvider>
  );
}

export default App;
