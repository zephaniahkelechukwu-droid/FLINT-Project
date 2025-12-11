
export interface User {
  id: string;
  name: string;
  handle: string;
  avatar: string;
  banner?: string; // Feature: Profile Banner
  bio: string;
  location?: string;
  website?: string; // Feature: Website Link
  birthDate?: string;
  isVerified?: boolean;
  verifiedColor?: string;
  isTrending?: boolean;
  followers: string;
  following: string;
  postsCount?: number;
  flintCoin?: number;
  walletAddress?: string; // Feature: Crypto Wallet
  isNftAvatar?: boolean; // Feature: NFT Avatar
  status?: string; // Feature: Mood Status
  joinedDate: string;
  posts?: Post[];
}

export interface PollOption {
  id: string;
  text: string;
  votes: number;
}

export interface Post {
  id: string;
  userId: string;
  user: User;
  content: string;
  mediaUrl?: string;
  mediaType?: 'image' | 'video' | 'gif'; // Feature: GIFs
  audioUrl?: string; // Feature: Voice Posts
  poll?: { // Feature: Polls
    question: string;
    options: PollOption[];
    totalVotes: number;
    endsAt: Date;
  };
  likes: number;
  comments: number;
  shares: number;
  views: number; // Feature: View Counts
  tips: number; // Feature: Tipping
  timestamp: string;
  isLiked?: boolean;
  isBookmarked?: boolean; // Feature: Bookmarks
  isPinned?: boolean; // Feature: Pinned Post
  isRepost?: boolean; // Feature: Reposts
  repostUser?: User;
}

export interface Story { // Feature: Stories/Sparks
  id: string;
  userId: string;
  user: User;
  mediaUrl: string;
  isViewed: boolean;
}

export interface Notification { // Feature: Notifications
  id: string;
  type: 'like' | 'comment' | 'follow' | 'tip' | 'mention' | 'system';
  user?: User;
  text: string;
  timestamp: string;
  isRead: boolean;
}

export interface Hashtag { // Feature: Trending
  tag: string;
  posts: string;
  category?: string;
}

export interface Message {
  id: string;
  senderId: string;
  text: string;
  timestamp: Date;
}

export type TabView = 'feed' | 'liter' | 'notifications' | 'messages' | 'profile' | 'settings' | 'explore' | 'bookmarks';