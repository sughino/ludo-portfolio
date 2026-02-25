export const isTouchDevice = (): boolean => 
  window.matchMedia('(hover: none)').matches || window.matchMedia('(pointer: coarse)').matches;