import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Clock } from 'lucide-react';
import logoImg from '../../assets/logo.png';
import chartIcon from '../../assets/ChartLine.png';

const Navbar = () => {
    const location = useLocation();
    
    const navItems = [
        { path: '/', label: 'Home', icon: <Home size={18}/> },
        { path: '/timeline', label: 'Timeline', icon: <Clock size={18}/> },
        { 
            path: '/stats', 
            label: 'Stats', 
            icon: <img src={chartIcon} alt="Stats Icon" className="object-contain" /> 
        },
    ];

    return (
        <nav className="bg-white py-4 px-6 lg:px-30 flex justify-between items-center sticky top-0 z-50 shadow-sm">
            
            <Link to="/" className="flex items-center">
                <img src={logoImg} alt="KeenKeeper Logo" className="h-8 w-auto object-contain" />
            </Link>

            {/* Nav Items */}
            <div className="flex gap-2">
                {navItems.map(item => (
                    <Link 
                        key={item.path} 
                        to={item.path} 
                        className={`flex items-center gap-2 px-4 py-2 rounded-xl font-bold transition-all duration-300 ${
                            location.pathname === item.path 
                            ? 'bg-[#244D3F] text-white shadow-md' 
                            : 'text-gray-500 hover:bg-gray-100'
                        }`}
                    >
                      
                        <span className={location.pathname === item.path && item.label === 'Stats' ? 'brightness-0 invert' : ''}>
                            {item.icon}
                        </span>
                        <span className="hidden md:block">{item.label}</span>
                    </Link>
                ))}
            </div>
        </nav>
    );
};

export default Navbar;