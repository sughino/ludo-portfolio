export type WorkBgColor = 'red' | 'light-red' | 'gray';

export interface Work {
  title: string;
  description: string;
  img: string;
  width: number;
  height: number;
  color: WorkBgColor;
  variant?: string;
}