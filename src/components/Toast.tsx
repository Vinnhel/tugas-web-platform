'use client';

import { useState, useEffect } from 'react';

interface ToastProps {
  message: string;
  type?: 'success' | 'error' | 'info';
  duration?: number;
  show: boolean;
  onClose: () => void;
}

export default function Toast({ message, type = 'success', duration = 3000, show, onClose }: ToastProps) {
  useEffect(() => {
    if (!show) return;
    
    const timer = setTimeout(() => {
      onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [show, duration, onClose]);

  const bgColor = type === 'success' ? 'bg-blue-500' : type === 'error' ? 'bg-red-500' : 'bg-blue-500';

  return (
    // use opacity transition, element stays in DOM for animation
    <div
      className={`fixed top-4 right-4 ${bgColor} text-white px-6 py-3 rounded shadow-lg z-50 transition-opacity duration-500 ${
        show ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      {message}
    </div>
  );
}
