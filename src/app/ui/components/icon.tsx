import { DynamicIcon, IconName } from 'lucide-react/dynamic';

export default function Icon({ name }: { name: IconName }) {
  return (
    <DynamicIcon 
      name={name} 
      className="size-[1.5em]"
      color="var(--color-white)"
    />
  );
}