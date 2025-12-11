
import React, { useState } from 'react';
import { User, Post, TabView, Hashtag } from './types';
import Navigation from './components/Navigation';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';
import Profile from './components/Profile';
import Notifications from './components/Notifications';
import Friends from './components/Friends';
import LiteR from './components/LiteR';
import Auth from './components/Auth';
import IntroAnimation from './components/IntroAnimation';
import Explore from './components/Explore';
import Settings from './components/Settings';

const INITIAL_USER: User = {
  id: 'user_001',
  name: 'CLARA SOLOMON',
  handle: '@clara_os',
  avatar: 'https://picsum.photos/seed/clara_os/150/150',
  bio: 'System Architect. Reality is just a construct. 🌌',
  location: 'Node 7',
  isVerified: true,
  verifiedColor: 'liquid-glass',
  followers: '30B',
  following: '42',
  joinedDate: 'September 2025',
  flintCoin: 1540,
  isTrending: true,
  status: 'Coding the future'
};

const MOCK_POSTS: Post[] = [
  { id: '1', userId: 'bot1', user: { ...INITIAL_USER, name: 'MARS.CO', handle: '@mars_co', avatar: 'https://images.unsplash.com/photo-1614728853913-1e2ae8a60481?w=150&h=150&fit=crop', isVerified: true, verifiedColor: 'red', followers: '10B', following: '0', bio: '', joinedDate: '' }, content: 'Terraforming complete in Sector 4. The air smells like rust and victory. 🔴✨', likes: 4500, comments: 200, shares: 50, views: 12000, tips: 500, timestamp: '1h', isPinned: true },
  // REPLACED Tobi's audio post with a text post
  { id: '2', userId: 'bot2', user: { ...INITIAL_USER, name: 'TOBI', handle: '@tobi_turtle', avatar: 'https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?w=150&h=150&fit=crop', isVerified: true, verifiedColor: 'green', followers: '10B', following: '0', bio: '', joinedDate: '' }, content: 'Just beat the hare in a race. Slow and steady, folks. 🐢💨 #Speed', likes: 1200, comments: 45, shares: 12, views: 5000, tips: 20, timestamp: '3h' },
];

const MOCK_TRENDING: Hashtag[] = [
  { tag: '#FlintOS', posts: '2.5M', category: 'Technology' },
  { tag: '#MarsColony', posts: '1.2M', category: 'Space' },
  { tag: 'Zephaniah', posts: '500K', category: 'Creator' },
  { tag: '#AnimeLife', posts: '450K', category: 'Entertainment' },
];

const MOCK_SUGGESTIONS: User[] = [
  { id: 'z', name: 'ZEPHANIAH', handle: '@creator', avatar: 'https://picsum.photos/seed/zeph/150/150', isVerified: true, followers: '30B', following: '1', bio: 'The Creator.', joinedDate: 'Day 0' },
  { id: 'r', name: 'ROTIMI', handle: '@rotimi_baller', avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop', isVerified: true, verifiedColor: 'liquid-glass', followers: '20B', following: '10', bio: '', joinedDate: '' },
];

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showIntro, setShowIntro] = useState(true);
  const [currentUser, setCurrentUser] = useState<User>(INITIAL_USER);
  const [currentTab, setCurrentTab] = useState<TabView>('feed');
  const [posts, setPosts] = useState<Post[]>(MOCK_POSTS);

  const handleLogin = (userData: Partial<User>) => {
    setCurrentUser(prev => ({ ...prev, ...userData }));
    setIsAuthenticated(true);
  };

  const handleCreatePost = (newPost: Post) => {
    setPosts([newPost, ...posts]);
    setCurrentUser(prev => ({
      ...prev,
      posts: [newPost, ...(prev.posts || [])]
    }));
  };

  if (showIntro) {
    return <IntroAnimation onClose={() => setShowIntro(false)} />;
  }

  if (!isAuthenticated) {
    return <Auth onLogin={handleLogin} />;
  }

  // Filter posts for Bookmarks tab (mock)
  const bookmarkedPosts = posts.filter((_, index) => index === 0);

  return (
    <div className="min-h-screen bg-black text-white flex justify-center">
      <div className="w-full max-w-[1300px] flex">
        
        {/* Navigation / Sidebar */}
        <header className="flex-shrink-0">
           <Navigation 
             currentTab={currentTab} 
             onTabChange={setCurrentTab} 
             currentUser={currentUser}
             onLogout={() => setIsAuthenticated(false)}
           />
        </header>

        {/* Main Content Area */}
        <main className="flex-1 min-w-0 border-r border-white/10">
           {currentTab === 'feed' && <Feed currentUser={currentUser} posts={posts} onPostCreated={handleCreatePost} />}
           {currentTab === 'profile' && <Profile user={currentUser} />}
           {currentTab === 'liter' && <div className="h-screen"><LiteR /></div>}
           {currentTab === 'messages' && <Friends currentUser={currentUser} />}
           {currentTab === 'notifications' && <Notifications />}
           {currentTab === 'explore' && <Explore />}
           {currentTab === 'bookmarks' && <Feed currentUser={currentUser} posts={bookmarkedPosts} onPostCreated={() => {}} />}
           {currentTab === 'settings' && <Settings user={currentUser} />}
        </main>

        {/* Right Sidebar (Desktop Only) */}
        <aside className="hidden lg:block flex-shrink-0">
           <Sidebar 
             trending={MOCK_TRENDING} 
             suggestions={MOCK_SUGGESTIONS} 
             onSearch={(q) => console.log(q)} 
           />
        </aside>

      </div>
    </div>
  );
};

export default App;
