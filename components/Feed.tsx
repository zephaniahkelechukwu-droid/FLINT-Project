import React from 'react';
import { Post, User } from '../types';

interface FeedProps {
    currentUser: User | null;
    posts: Post[];
    onPostCreated: () => void;
}

const Feed: React.FC<FeedProps> = () => {
    return (
        <div className="p-4 h-full overflow-y-auto">
            <h1 className="text-3xl font-bold mb-4 text-neon-pink">FLINT Feed - Structural Check</h1>
            <div className="bg-gray-800 p-6 rounded-lg shadow-xl">
                <p className="text-gray-300">The application is running safely. The structural integrity is confirmed.</p>
            </div>
        </div>
    );
};

export default Feed;