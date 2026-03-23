'use client';

import { useEffect } from 'react';

export default function TitleHandler() {
  useEffect(() => {
    const docTitle = document.title;

    const onBlur = () => {
      document.title = 'This could’ve been something';
    };

    const onFocus = () => {
      document.title = docTitle;
    };

    window.addEventListener('blur', onBlur);
    window.addEventListener('focus', onFocus);

    return () => {
      window.removeEventListener('blur', onBlur);
      window.removeEventListener('focus', onFocus);
    };
  }, []);

  return null;
}