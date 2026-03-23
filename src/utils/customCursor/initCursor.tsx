'use client';
 
import { useEffect } from 'react'
import { useIsTouch } from '@/contexts/DeviceContext'
import { CustomCursor } from './customCursor'
import { hobbies } from '@/data/hobbies'
 
export default function CursorInit() {
  const isTouch = useIsTouch();
  const images = hobbies.map(i => i.img)
 
  useEffect(() => {
    if (isTouch) return;
    const cursor = CustomCursor(images);
    return () => cursor.destroy();
  }, [isTouch]);
 
  return null;
}