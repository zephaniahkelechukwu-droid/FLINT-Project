import React, { useState } from 'react';
import { User } from '../types';

interface ProfileProps {
  user: User;
}

const Profile: React.FC<ProfileProps> = ({ user }) => {
  const [activeTab, setActiveTab] = useState<'posts' | 'replies' | 'media' | 'liked'>('posts');

  return (
    <div className="min-h-screen">
      
      {/* Profile Header (Banner and Avatar) */}
      <header className="relative">
        <div className="h-48 bg-neon-dark border-b border-white/10" style={{ backgroundImage: `url(${user.banner || 'https://picsum.photos/seed/flintbanner/1300/300'})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
          {/* Banner area */}
        </div>
        <div className="absolute top-32 left-6">
          <img 
            src={user.avatar} 
            alt={user.handle} 
            className="w-32 h-32 rounded-full border-4 border-neon-dark object-cover" 
          />
        </div>
        <div className="p-6 pt-20 border-b border-white/10">
          <div className="flex justify-end mb-4">
            <button className="bg-neon-blue text-black font-bold py-2 px-4 rounded-full hover:opacity-80 transition-opacity">
              Edit Profile
            </button>
          </div>
          <h1 className="text-3xl font-display text-white">{user.name}</h1>
          <p className="text-gray-500 text-lg">{user.handle} 
            {user.isVerified && <span className="ml-2 text-neon-blue text-base">✓</span>}
          </p>
          <p className="mt-2 text-white">{user.bio}</p>
          <div className="flex space-x-4 mt-2 text-sm text-gray-400">
            {user.location && <span>{user.location}</span>}
            <span>Joined {user.joinedDate}</span>
          </div>
          <div className="flex space-x-4 mt-3 font-semibold text-white">
            <span>{user.following} Following</span>
            <span>{user.followers} Followers</span>
          </div>
        </div>
      </header>

      {/* Tabs for Posts/Media/Likes */}
      <div className="sticky top-0 z-10 glass-nav flex border-b border-white/10">
        <TabButton label="Posts" tabKey="posts" activeTab={activeTab} setActiveTab={setActiveTab} />
        <TabButton label="Replies" tabKey="replies" activeTab={activeTab} setActiveTab={setActiveTab} />
        <TabButton label="Media" tabKey="media" activeTab={activeTab} setActiveTab={setActiveTab} />
        <TabButton label="Liked" tabKey="liked" activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>

      {/* Content Area (Placeholder) */}
      <div className="p-4 text-gray-400 text-center">
        {activeTab === 'posts' && <p>Displaying user's posts (Placeholder).</p>}
        {activeTab === 'replies' && <p>Displaying user's replies (Placeholder).</p>}
        {activeTab === 'media' && <p>Displaying user's media (Placeholder).</p>}
        {activeTab === 'liked' && <p>Displaying user's liked posts (Placeholder).</p>}
      </div>
    </div>
  );
};

// Simple helper component for cleaner tab switching
const TabButton: React.FC<{label: string, tabKey: 'posts' | 'replies' | 'media' | 'liked', activeTab: string, setActiveTab: (key: any) => void}> = ({ label, tabKey, activeTab, setActiveTab }) => (
    <button
        onClick={() => setActiveTab(tabKey)}
        className={`flex-1 text-center py-3 font-semibold transition-all duration-200 ${
            activeTab === tabKey 
                ? 'text-neon-blue border-b-2 border-neon-blue' 
                : 'text-gray-400 hover:text-white'
        }`}
    >
        {label}
    </button>
);


export default Profile;