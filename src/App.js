import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes, useLocation } from 'react-router-dom';
import { ChakraProvider } from "@chakra-ui/react";
import MaterialUIPage from './pages/MaterialUIPage';
import FlowbitePage from './pages/FlowbitePage';
import ShadcnPage from './pages/ShadcnPage';
import ChakraUIPage from './pages/ChakraUIPage';

function NavLink({ to, children }) {
  const location = useLocation();
  const isActive = location.pathname === to;
  
  return (
    <Link
      to={to}
      className={`px-3 py-2 rounded-md text-sm font-medium ${
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
  return (
    <nav className="bg-gray-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <span className="text-white font-bold text-xl">UI Libraries Demo</span>
            <div className="ml-10 flex items-baseline space-x-4">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/material-ui">Material UI</NavLink>
              <NavLink to="/flowbite">Flowbite</NavLink>
              <NavLink to="/shadcn">shadcn/ui</NavLink>
              <NavLink to="/chakra-ui">Chakra UI</NavLink>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

function Home() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Explore Modern UI Libraries
          </h1>
          <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500">
            Explore React UI components with this interactive showcase featuring Material UI, Flowbite, shadcn/ui, and Chakra UI.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
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