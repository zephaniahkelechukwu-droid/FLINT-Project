import React from 'react';
import { User } from '../types'; 

interface FriendsProps {
  currentUser: User;
}

const Friends: React.FC<FriendsProps> = ({ currentUser }) => {
  
  // Mock data for the messages/friends list
  const MOCK_FRIENDS = [
    { id: 'f1', name: 'Digital Muse', handle: '@digitalmuse', avatar: 'https://picsum.photos/seed/friend1/150/150', lastMessage: 'Okay, sounds good. Deploy soon!', time: '1h' },
    { id: 'f2', name: 'Astro Gamer', handle: '@astro_g', avatar: 'https://picsum.photos/seed/friend2/150/150', lastMessage: 'See you at the Node 7 meetup!', time: '3h' },
  ];

  return (
    <div className="min-h-screen border-r border-white/10">
      <header className="sticky top-0 z-10 glass-nav p-4 border-b border-white/10 flex justify-between items-center">
        <h2 className="text-2xl font-display text-white">Messages</h2>
        <p className="text-sm text-gray-400">Viewing chats for {currentUser.handle}</p>
      </header>
      
      <div className="p-4 space-y-3">
        {MOCK_FRIENDS.map(friend => (
          <div key={friend.id} className="glass-card p-4 rounded-xl flex items-center justify-between hover:bg-white/5 transition-colors cursor-pointer">
            <div className="flex items-center space-x-3">
              <img src={friend.avatar} alt={friend.handle} className="w-12 h-12 rounded-full object-cover" />
              <div>
                <p className="font-semibold text-white">{friend.name}</p>
                <p className="text-sm text-gray-500">{friend.handle}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-xs text-gray-400">{friend.time}</p>
              {/* Truncate the message so it doesn't overflow */}
              <p className="text-sm text-white truncate w-40">{friend.lastMessage}</p> 
            </div>
          </div>
        ))}
      </div>
      
      {MOCK_FRIENDS.length === 0 && (
        <div className="text-center p-8 text-gray-500">
          No active conversations. (Placeholder)
        </div>
      )}
    </div>
  );
};

export default Friends;