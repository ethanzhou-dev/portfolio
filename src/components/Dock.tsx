import React from 'react';
import { Mail, Code2, Camera, MessageSquare } from 'lucide-react';
import { GlassCard } from './GlassCard';

export const Dock: React.FC = () => {
  return (
    <div style={{
      position: 'fixed',
      bottom: '32px',
      left: '50%',
      transform: 'translateX(-50%)',
      zIndex: 100,
    }}>
      <GlassCard className="dock-container" style={{
        display: 'flex',
        gap: '24px',
        padding: '16px 32px',
        borderRadius: '24px',
        // Increased blur for the dock to mimic macOS
        backdropFilter: 'blur(30px) saturate(180%)',
        WebkitBackdropFilter: 'blur(30px) saturate(180%)',
      }}>
        <DockItem icon={<Code2 size={24} strokeWidth={1.5} />} href="#" tooltip="GitHub" />
        <DockItem icon={<Camera size={24} strokeWidth={1.5} />} href="#" tooltip="Instagram" />
        <DockItem icon={<MessageSquare size={24} strokeWidth={1.5} />} href="#" tooltip="Twitter" />
        <DockItem icon={<Mail size={24} strokeWidth={1.5} />} href="mailto:hello@example.com" tooltip="Email" />
      </GlassCard>
    </div>
  );
};

const DockItem = ({ icon, href, tooltip }: { icon: React.ReactNode, href: string, tooltip: string }) => (
  <a href={href} className="dock-item" title={tooltip} style={{
    color: 'rgba(255,255,255,0.7)',
    transition: 'all 0.3s cubic-bezier(0.25, 1, 0.5, 1)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '10px',
    borderRadius: '16px',
    textDecoration: 'none',
  }}>
    {icon}
  </a>
);
