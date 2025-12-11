import React from 'react';
import { User } from '../types';

// Using the same mock user structure from App.tsx
const MOCK_USER: User = {
  id: 'user_001',
  name: 'CLARA SOLOMON',
  handle: '@clara_os',
  avatar: 'https://picsum.photos/seed/clara_os/150/150',
  bio: 'System Architect. Reality is just a construct.',
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

interface AuthProps {
  // This prop is required by App.tsx to set the user state after a successful login
  onLogin: (user: User) => void;
}

const Auth: React.FC<AuthProps> = ({ onLogin }) => {
  const [view, setView] = React.useState<'login' | 'signup'>('login');
  
  // This function simulates a successful login and calls the parent's handler
  const handleAuth = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this is where server validation happens.
    // Here, we simulate success immediately.
    onLogin(MOCK_USER);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-neon-dark">
      <div className="glass-card w-full max-w-md p-8 rounded-2xl shadow-2xl">
        <h1 className="text-4xl font-display text-neon-blue text-center mb-6">FLINT - Node Access</h1>
        
        <div className="text-center mb-6">
            <button 
                onClick={() => setView('login')} 
                className={`text-lg font-bold mx-4 pb-1 transition-colors ${view === 'login' ? 'text-neon-pink border-b-2 border-neon-pink' : 'text-gray-500 hover:text-white'}`}
            >
                Login
            </button>
            <button 
                onClick={() => setView('signup')} 
                className={`text-lg font-bold mx-4 pb-1 transition-colors ${view === 'signup' ? 'text-neon-pink border-b-2 border-neon-pink' : 'text-gray-500 hover:text-white'}`}
            >
                Sign Up
            </button>
        </div>

        <form onSubmit={handleAuth} className="space-y-4">
          <input
            type="text"
            placeholder="Handle or Email"
            required
            className="w-full bg-neon-dark p-3 rounded-lg border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-neon-blue"
          />
          <input
            type="password"
            placeholder="Password"
            required
            className="w-full bg-neon-dark p-3 rounded-lg border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-neon-blue"
          />
          <button
            type="submit"
            className="w-full bg-neon-blue text-black font-bold py-3 rounded-lg hover:opacity-80 transition-opacity"
          >
            {view === 'login' ? 'Access Node' : 'Initialize User'}
          </button>
        </form>

        <p className="text-center text-sm text-gray-500 mt-6">
          By clicking {view === 'login' ? 'Access Node' : 'Initialize User'}, you agree to the FLINT Protocols.
        </p>
      </div>
    </div>
  );
};

export default Auth;