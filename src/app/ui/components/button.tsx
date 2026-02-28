import Icon from "./icon"
import { IconName } from "lucide-react/dynamic"

type ButtonProps = {
  content?: string
  onlyIcon?: boolean
  icon?: IconName
  width?: "full" | "fit"
  className?: string
}

export default function Button({
  content,
  onlyIcon = false,
  icon,
  width = "fit",
  className
}: ButtonProps) {

  const widthClass = width === "full" ? "w-full" : "w-fit"

  return (
    <button
      className={`${widthClass} ${className}`}
    >
      {!onlyIcon && content && <span>{content}</span>}
      {icon && <Icon name={icon}/>}
    </button>
  )
}