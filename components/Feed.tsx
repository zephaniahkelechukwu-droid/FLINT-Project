import React from 'react';
import { User, Post } from '../types';

interface FeedProps {
  currentUser: User;
  posts: Post[];
  onPostCreated: (post: Post) => void;
}

const Feed: React.FC<FeedProps> = ({ currentUser, posts, onPostCreated }) => {
  const [newPostContent, setNewPostContent] = React.useState('');

  // Minimal MOCK data to ensure the map functions don't crash the build if the props are empty.
  const displayPosts = posts.length > 0 ? posts : [
    {
      id: 'mock_post_1',
      userId: 'system',
      user: { ...currentUser, handle: '@system_message', name: 'System' },
      content: 'Welcome to the FLINT Feed. This is a placeholder post to confirm the build is working. Proceed with deployment after a successful build.',
      likes: 42, comments: 5, shares: 1, views: 100, tips: 0, timestamp: new Date().toISOString(),
    }
  ];

  const handlePost = () => {
    if (newPostContent.trim()) {
      // Placeholder logic for creating a post (to satisfy the prop)
      const newPost: Post = {
        id: Date.now().toString(),
        userId: currentUser.id,
        user: currentUser,
        content: newPostContent,
        likes: 0, comments: 0, shares: 0, views: 0, tips: 0,
        timestamp: new Date().toISOString(),
      };
      onPostCreated(newPost);
      setNewPostContent('');
    }
  };

  return (
    <div className="min-h-screen border-r border-white/10">
      <header className="sticky top-0 z-10 glass-nav p-4 border-b border-white/10">
        <h2 className="text-2xl font-display text-white">Feed</h2>
      </header>
      
      {/* Post Creator Section */}
      <div className="p-4 border-b border-white/10">
        <textarea
          className="w-full bg-neon-card p-3 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-neon-blue"
          rows={3}
          placeholder={`What's on your mind, ${currentUser.handle}?`}
          value={newPostContent}
          onChange={(e) => setNewPostContent(e.target.value)}
        ></textarea>
        <div className="flex justify-end mt-2">
          <button
            onClick={handlePost}
            disabled={!newPostContent.trim()}
            className="bg-neon-blue text-black font-bold py-2 px-4 rounded-full disabled:opacity-50 transition-opacity"
          >
            Post
          </button>
        </div>
      </div>

      {/* Posts List */}
      <div className="space-y-4 p-4">
        {displayPosts.map((post) => (
          <div key={post.id} className="glass-card p-4 rounded-xl border border-white/10">
            <div className="flex items-start space-x-3">
              <img src={post.user.avatar} alt={post.user.handle} className="w-10 h-10 rounded-full" />
              <div>
                <p className="font-semibold">{post.user.name} <span className="text-gray-500">{post.user.handle}</span></p>
                <p className="text-sm text-gray-400">{new Date(post.timestamp).toLocaleDateString()}</p>
              </div>
            </div>
            <p className="mt-3 text-white">{post.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feed;