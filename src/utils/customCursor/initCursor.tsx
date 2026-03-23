'use client';
 
import { useEffect } from 'react'
import { useIsTouch } from '@/contexts/DeviceContext'
import { CustomCursor } from './customCursor'
 
export default function CursorInit() {
  const isTouch = useIsTouch();
 
  useEffect(() => {
    if (isTouch) return;
    const cursor = CustomCursor();
    return () => cursor.destroy();
  }, [isTouch]);
 
  return null;
}