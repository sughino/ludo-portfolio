import Icon from "./icon"
import { IconName } from "lucide-react/dynamic"

type ButtonProps = {
  content?: string
  onlyIcon?: boolean
  icon?: IconName
  width?: "full" | "fit"
  className?: string
  reverse?: boolean
  iconColor?: string
}

export default function Button({
  content,
  onlyIcon = false,
  icon,
  width = "fit",
  className,
  reverse = false,
  iconColor
}: ButtonProps) {

  const widthClass = width === "full" ? "w-full" : "w-fit"
  const bgColorClass = reverse ? "bg-[var(--color-white)]" : "bg-[var(--color-red)]";
  const txtColorClass = reverse ? "text-[var(--color-red)]" : "text-[var(--color-white)]";

  return (
    <button
      className={`${widthClass} ${bgColorClass} ${className}`}
    >
      {!onlyIcon && content && <span className={txtColorClass}>{content}</span>}
      {icon && <Icon name={icon} color={iconColor}/>}
    </button>
  )
}