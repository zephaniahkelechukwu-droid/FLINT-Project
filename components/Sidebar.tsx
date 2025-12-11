import React from 'react';
import { Hashtag, User } from '../types';

interface SidebarProps {
  trending: Hashtag[];
  suggestions: User[];
  onSearch: (query: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ trending, suggestions, onSearch }) => {
  const [searchQuery, setSearchQuery] = React.useState('');

  // Minimal MOCK data to ensure the map functions don't crash the build if the props are empty.
  const trendingData = trending.length > 0 ? trending : [{ tag: 'AIFuture', count: 120000 }, { tag: 'Web3', count: 85000 }];
  const suggestionsData = suggestions.length > 0 ? suggestions : [{ id: 'mock1', name: 'Dev Bot', handle: '@dev_bot', avatar: 'https://picsum.photos/seed/devbot/150/150' }, { id: 'mock2', name: 'Support AI', handle: '@support_ai', avatar: 'https://picsum.photos/seed/supportai/150/150' }];
  
  return (
    <aside className="fixed w-[350px] h-screen p-6 flex flex-col space-y-6">
      {/* Search Bar */}
      <div className="flex items-center space-x-2 p-2 rounded-full glass-card">
        <input
          type="text"
          placeholder="Search FLINT..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              onSearch(searchQuery);
            }
          }}
          className="bg-transparent text-white placeholder-gray-500 flex-1 focus:outline-none"
        />
        <button onClick={() => onSearch(searchQuery)} className="text-neon-blue">
          &#9906;
        </button>
      </div>

      {/* Trending Section */}
      <div className="glass-card p-4 rounded-xl space-y-3">
        <h3 className="text-xl font-display text-white">Trending Now</h3>
        {trendingData.slice(0, 3).map((tag, index) => (
          <div key={index} className="text-sm">
            <p className="text-gray-500">Trending</p>
            <p className="font-semibold hover:text-neon-blue cursor-pointer transition-colors">#{tag.tag}</p>
            <p className="text-gray-500 text-xs">{tag.count} Posts</p>
          </div>
        ))}
      </div>
      
      {/* Follow Suggestions */}
      <div className="glass-card p-4 rounded-xl space-y-3">
        <h3 className="text-xl font-display text-white">Who to Follow</h3>
        {suggestionsData.slice(0, 2).map((user) => (
          <div key={user.id} className="flex items-center justify-between text-sm">
            <div className="flex items-center space-x-3">
              <img src={user.avatar} alt={user.handle} className="w-10 h-10 rounded-full" />
              <div>
                <p className="font-medium">{user.name}</p>
                <p className="text-gray-500 text-xs">{user.handle}</p>
              </div>
            </div>
            <button className="bg-neon-blue text-black px-3 py-1 rounded-full font-bold hover:opacity-80 transition-opacity">
              Follow
            </button>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;