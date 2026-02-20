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

  if (!show) return null;

  const bgColor = type === 'success' ? 'bg-green-500' : type === 'error' ? 'bg-red-500' : 'bg-blue-500';

  return (
    <div className={`fixed top-4 right-4 ${bgColor} text-white px-6 py-3 rounded shadow-lg animate-pulse z-50`}>
      {message}
    </div>
  );
}
