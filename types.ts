// Define the core entity types used across the application

export interface User {
    id: string;
    name: string;
    handle: string;
    avatar: string;
    bio: string;
    followers: string;
    following: string;
    joinedDate: string;
}

export interface Post {
    id: string;
    author: User;
    content: string;
    timestamp: string;
    likes: number;
    comments: number;
    tipAmount: number;
    isBookmarked: boolean;
}

export interface Notification {
    id: string;
    type: 'like' | 'follow' | 'comment' | 'tip' | 'mention' | 'system';
    user?: User;
    text: string;
    timestamp: string;
    isRead: boolean;
}