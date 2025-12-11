import React from 'react';
import { Post, User } from '../types';

interface FeedProps {
    currentUser: User | null;
    posts: Post[];
    onPostCreated: () => void;
}

const Feed: React.FC<FeedProps> = ({ currentUser, posts, onPostCreated }) => {
    // This minimal rendering prevents the crash by not trying to iterate or complexly check the posts prop.
    return (
        <div className="p-4 h-full overflow-y-auto">
            <h1 className="text-3xl font-bold mb-4 text-neon-pink">FLINT Feed</h1>
            <div className="bg-gray-800 p-6 rounded-lg shadow-xl">
                <p className="text-gray-300">Application structure is stable. Feed content will render here once the data fetching logic is built.</p>
                <p className="mt-4 text-sm text-gray-500">Currently displaying {posts.length} placeholder posts.</p>
            </div>
            {/* If you add any code to display posts, do it below here and be sure to check 'posts && posts.map' */}
        </div>
    );
};

export default Feed;