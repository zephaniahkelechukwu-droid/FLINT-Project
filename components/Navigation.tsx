import React from 'react';
import { User, TabView } from '../types'; 

interface NavigationProps {
  currentTab: TabView;
  onTabChange: (tab: TabView) => void;
  currentUser: User;
  onLogout: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ currentTab, onTabChange, currentUser, onLogout }) => {
  const tabs: TabView[] = ['feed', 'profile', 'liter', 'messages', 'notifications', 'explore', 'bookmarks', 'settings'];

  return (
    <nav className="glass-nav fixed h-full w-[250px] p-6 flex flex-col justify-between">
      <div className="flex flex-col space-y-4">
        <h1 className="text-xl font-display text-neon-blue">FLINT</h1>
        {tabs.map(tab => (
          <button 
            key={tab}
            onClick={() => onTabChange(tab)} 
            className={`p-2 rounded capitalize ${currentTab === tab ? 'bg-neon-card' : 'hover:bg-white/10'}`}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="pt-4 border-t border-white/10">
        <p className="text-sm">Logged in as {currentUser.handle}</p>
        <button onClick={onLogout} className="mt-2 text-sm text-red-400 hover:text-red-300">
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navigation;