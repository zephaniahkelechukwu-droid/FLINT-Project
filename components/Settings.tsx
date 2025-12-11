import React, { useState } from 'react';
import { User } from '../types';

interface SettingsProps {
    user: User;
}

const Settings: React.FC<SettingsProps> = ({ user }) => {
    const [theme, setTheme] = useState('dark');
    const [notifications, setNotifications] = useState(true);
    const [privacy, setPrivacy] = useState(false);

    const handleSave = () => {
        // Placeholder for saving settings to a server/local storage
        console.log('Settings saved:', { theme, notifications, privacy });
        alert('Settings saved successfully! (Placeholder)');
    };

    return (
        <div className="min-h-screen p-6">
            <header className="mb-8">
                <h2 className="text-3xl font-display text-neon-pink">User Settings</h2>
                <p className="text-gray-400">Manage your preferences, security, and application behavior.</p>
            </header>

            <div className="space-y-6 max-w-2xl">
                
                {/* Theme Setting */}
                <div className="glass-card p-5 rounded-xl">
                    <h3 className="text-xl font-semibold mb-3">Display Theme</h3>
                    <p className="text-sm text-gray-400 mb-4">Current User: {user.handle}</p>
                    <div className="flex space-x-4">
                        <button
                            onClick={() => setTheme('dark')}
                            className={`px-4 py-2 rounded-full font-bold transition-colors ${theme === 'dark' ? 'bg-neon-blue text-black' : 'bg-neon-card text-white hover:bg-white/10'}`}
                        >
                            Dark Mode
                        </button>
                        <button
                            onClick={() => setTheme('light')}
                            className={`px-4 py-2 rounded-full font-bold transition-colors ${theme === 'light' ? 'bg-neon-blue text-black' : 'bg-neon-card text-white hover:bg-white/10'}`}
                        >
                            Light Mode
                        </button>
                    </div>
                </div>

                {/* Notifications Setting */}
                <div className="glass-card p-5 rounded-xl flex justify-between items-center">
                    <div>
                        <h3 className="text-xl font-semibold">Push Notifications</h3>
                        <p className="text-sm text-gray-400">Receive real-time updates on likes, comments, and followers.</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" checked={notifications} onChange={() => setNotifications(!notifications)} className="sr-only peer" />
                        <div className="w-11 h-6 bg-neon-card peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-neon-blue/50 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-neon-blue"></div>
                    </label>
                </div>
                
                {/* Privacy Setting */}
                <div className="glass-card p-5 rounded-xl flex justify-between items-center">
                    <div>
                        <h3 className="text-xl font-semibold">Private Profile</h3>
                        <p className="text-sm text-gray-400">Only approved followers can view your posts.</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" checked={privacy} onChange={() => setPrivacy(!privacy)} className="sr-only peer" />
                        <div className="w-11 h-6 bg-neon-card peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-neon-blue/50 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-neon-blue"></div>
                    </label>
                </div>

                {/* Save Button */}
                <div className="pt-4 border-t border-white/10">
                    <button
                        onClick={handleSave}
                        className="bg-neon-pink text-black font-bold py-3 px-6 rounded-full hover:opacity-80 transition-opacity"
                    >
                        Save All Settings
                    </button>
                </div>

            </div>
        </div>
    );
};

export default Settings;