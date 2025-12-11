import React from 'react';
import { Hashtag } from '../types';

// Mock data for the Explore view
const MOCK_CATEGORIES = ['Trending', 'AI & Tech', 'Gaming', 'Finance', 'Literature', 'Art & Design'];

const MOCK_HASHTAGS: Hashtag[] = [
    { tag: 'QuantumLeap', count: 980000 },
    { tag: 'CyberPunkFuture', count: 750000 },
    { tag: 'NextGenDev', count: 520000 },
    { tag: 'FLINTCreator', count: 400000 },
];


const Explore: React.FC = () => {
  return (
    <div className="min-h-screen p-6">
      <header className="mb-8">
        <h2 className="text-3xl font-display text-neon-pink">Explore the Node</h2>
        <p className="text-gray-400">Discover trending topics, users, and content across the network.</p>
      </header>
      
      {/* Category Tabs */}
      <div className="flex space-x-4 border-b border-white/10 mb-6 overflow-x-auto pb-2">
        {MOCK_CATEGORIES.map(category => (
            <button 
                key={category}
                className="whitespace-nowrap py-2 px-4 rounded-full bg-neon-card text-white hover:bg-neon-blue hover:text-black font-semibold transition-colors"
            >
                {category}
            </button>
        ))}
      </div>

      {/* Trending Hashtag Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {MOCK_HASHTAGS.map((tag, index) => (
            <div key={index} className="glass-card p-5 rounded-xl transition-shadow hover:shadow-neon-blue/50">
                <p className="text-sm text-gray-500">Trending #{index + 1}</p>
                <h3 className="text-2xl font-display text-white mt-1 hover:text-neon-blue cursor-pointer transition-colors">#{tag.tag}</h3>
                <p className="text-sm text-gray-400 mt-2">{tag.count.toLocaleString()} Posts</p>
            </div>
        ))}
      </div>
      
      <div className="text-center mt-10 p-4 text-gray-500">
        End of Explore view (Placeholder).
      </div>
    </div>
  );
};

export default Explore;