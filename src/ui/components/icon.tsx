import { DynamicIcon, IconName } from 'lucide-react/dynamic';

type IconProps = {
  name: IconName, 
  color?: string,
  size?: string
}

export default function Icon({ 
  name, 
  color = "white",
  size = "size-[1.5em]"
}: IconProps) {
  const iconColor = `var(--color-${color})`;
  return (
    <DynamicIcon 
      name={name} 
      className={size}
      color={iconColor}
    />
  );
}