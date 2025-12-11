import React, { useState } from 'react';
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
import { User, Post } from './types'; // Ensure you have User and Post types defined

// --- MOCK USER TO BYPASS AUTHENTICATION ---
const MOCK_USER: User = {
    id: 'u1',
    name: 'Nicholas Linus',
    handle: '@zephaniahkelechukwu-droid',
    avatar: 'https://picsum.photos/seed/user/150/150',
    bio: 'FLINT Project Developer. Node Access Forced.',
    followers: '10k',
    following: '500',
    joinedDate: 'Dec 2025'
};
// ------------------------------------

const App: React.FC = () => {
    // FORCING STATE: Setting currentUser to a mock object and isLoading to false 
    // This bypasses the IntroAnimation and Auth checks.
    const [currentUser, setCurrentUser] = useState<User | null>(MOCK_USER); 
    const [currentTab, setCurrentTab] = useState('feed');
    const [isLoading, setIsLoading] = useState(false); 

    // Placeholder data and functions
    const mockPosts: Post[] = [];
    const bookmarkedPosts: Post[] = [];
    const handleLogout = () => setCurrentUser(null);
    const handleLogin = (user: User) => setCurrentUser(user);
    const onPostCreated = () => console.log("Post created placeholder");


    // --- CRITICAL BYPASS LOGIC ---
    // If you ever want to re-enable the loading animation, comment out the line 
    // below and re-enable the conditionals (if, return <IntroAnimation...>)
    if (isLoading) {
        return <IntroAnimation />; // This line will not be hit because isLoading is false
    }
    if (!currentUser) {
        return <Auth onLogin={handleLogin} />; // This line will not be hit because currentUser is MOCK_USER
    }
    // -----------------------------


    return (
        <div className="flex h-screen bg-neon-dark text-white font-sans overflow-hidden">
            {/* Navigation / Sidebar (Always visible) */}
            <Navigation 
                currentUser={currentUser} 
                currentTab={currentTab} 
                onTabChange={setCurrentTab} 
                onLogout={handleLogout}
            />

            {/* Main Content Area */}
            <main className="flex-1 overflow-y-auto pt-16 md:pt-0"> 
                {currentTab === 'feed' && <Feed currentUser={currentUser} posts={mockPosts} onPostCreated={onPostCreated} />}
                {currentTab === 'profile' && <Profile currentUser={currentUser} />}
                {currentTab === 'liter' && <div className="h-screen"><LiteR /></div>}
                {currentTab === 'messages' && <Friends />}
                {currentTab === 'notifications' && <Notifications />}
                {currentTab === 'explore' && <Explore />}
                {currentTab === 'bookmarks' && <Feed currentUser={currentUser} posts={bookmarkedPosts} onPostCreated={onPostCreated} />}
                {currentTab === 'settings' && <Settings user={currentUser} />}

                {/* Fallback/Home Tab */}
                {currentTab === 'home' && (
                    <div className="p-8 text-center">
                        <h1 className="text-4xl font-display text-neon-pink">FLINT Project is Operational.</h1>
                        <p className="mt-4 text-xl text-gray-400">Use the Navigation bar to view tabs.</p>
                    </div>
                )}
            </main>

            {/* Right Sidebar (Desktop Only) */}
            <Sidebar />
        </div>
    );
};

export default App;