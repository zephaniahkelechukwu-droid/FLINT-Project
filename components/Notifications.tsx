import React from 'react';
import { Notification } from '../types';

// Mock data based on the structure in your types.ts file
const MOCK_NOTIFICATIONS: Notification[] = [
  {
    id: 'n1',
    type: 'like',
    user: { id: 'u1', name: 'R. K. Sterling', handle: '@rks', avatar: 'https://picsum.photos/seed/rks/150/150', bio: '', followers: '1.2M', following: '10', joinedDate: 'Jan 2024' },
    text: 'liked your latest post.',
    timestamp: new Date(Date.now() - 3600000).toISOString(),
    isRead: false,
  },
  {
    id: 'n2',
    type: 'follow',
    user: { id: 'u2', name: 'Synthetica', handle: '@synth', avatar: 'https://picsum.photos/seed/synth/150/150', bio: '', followers: '10K', following: '500', joinedDate: 'Oct 2025' },
    text: 'started following you.',
    timestamp: new Date(Date.now() - 7200000).toISOString(),
    isRead: false,
  },
  {
    id: 'n3',
    type: 'system',
    text: 'Your FLINTCoin transfer has been processed.',
    timestamp: new Date(Date.now() - 86400000).toISOString(),
    isRead: true,
  },
];

const Notifications: React.FC = () => {
  const [notifications, setNotifications] = React.useState<Notification[]>(MOCK_NOTIFICATIONS);

  const getIcon = (type: Notification['type']) => {
    switch (type) {
      case 'like': return '💖';
      case 'follow': return '✨';
      case 'comment': return '💬';
      case 'tip': return '💰';
      case 'mention': return '@';
      case 'system': return '⚙️';
      default: return '🔔';
    }
  };

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-10 glass-nav p-4 border-b border-white/10">
        <h2 className="text-2xl font-display text-white">Notifications</h2>
      </header>

      <div className="space-y-1">
        {notifications.map((notif) => (
          <div 
            key={notif.id} 
            className={`flex items-start space-x-4 p-4 border-b border-white/10 cursor-pointer transition-colors ${
              notif.isRead ? 'bg-transparent hover:bg-white/5' : 'bg-neon-card/50 hover:bg-neon-card/70'
            }`}
          >
            <div className="text-2xl pt-1 flex-shrink-0">{getIcon(notif.type)}</div>
            <div className="flex-1">
              <p className="text-sm text-gray-400">{new Date(notif.timestamp).toLocaleTimeString()}</p>
              <p className="mt-1 text-white">
                {notif.user && (
                  <span className="font-semibold text-neon-blue">{notif.user.name} </span>
                )}
                {notif.text}
              </p>
            </div>
          </div>
        ))}

        {notifications.length === 0 && (
          <div className="text-center p-8 text-gray-500">No new notifications.</div>
        )}
      </div>
    </div>
  );
};

export default Notifications;