import React from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export const GlassCard: React.FC<GlassCardProps> = ({ children, className = '', style }) => {
  return (
    <div className={`glass-panel ${className}`} style={{
      ...style,
      transition: 'all 0.4s cubic-bezier(0.25, 1, 0.5, 1)',
    }}>
      {children}
    </div>
  );
};
