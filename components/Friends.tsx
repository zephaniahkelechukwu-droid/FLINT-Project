import React from 'react';

const Friends: React.FC = () => {
    // This is the simplest possible functional component, guaranteed not to crash.
    return (
        <div className="p-8 h-full overflow-y-auto">
            <h1 className="text-3xl font-bold mb-6 text-neon-pink">FLINT Messages/Friends List</h1>
            <p className="text-gray-400">This component is now safe and ready for the friends list logic.</p>
        </div>
    );
};

export default Friends;