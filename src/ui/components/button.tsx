import Icon from "./icon"
import { IconName } from "lucide-react/dynamic"

type ButtonProps = {
  content?: string;
  onlyIcon?: boolean;
  icon?: IconName;
  width?: "full" | "fit";
  className?: string;
  reverse?: boolean;
  iconColor?: string;
  direction?: 'column';
  trasparent?: boolean;
  ariaLabel?: string;
  onClick?: () => void;
}

export default function Button({
  content,
  onlyIcon = false,
  icon,
  width = "fit",
  className,
  reverse = false,
  iconColor,
  direction,
  trasparent = false,
  ariaLabel,
  onClick
}: ButtonProps) {

  const widthClass = width === "full" ? "w-full" : "w-fit"
  const bgColorClass = reverse ? "bg-[var(--color-white)]" : "bg-[var(--color-red)]";
  const txtColorClass = reverse ? "text-[var(--color-red)]" : "text-[var(--color-white)]";

  return (
    <button
      className={`${widthClass} ${trasparent ?  "bg-[rgba(255,255,255,0)]" :bgColorClass} ${className} ${direction}`}
      data-cursor="hover"
      aria-label={ariaLabel}
      onClick={(e) => {
        e.stopPropagation()
        onClick?.()
      }}
    >
      {!onlyIcon && content && <span className={trasparent ? "text-[var(--color-red)]" : txtColorClass}>{content}</span>}
      {icon && <Icon name={icon} color={trasparent ? "red" : iconColor}/>}
    </button>
  )
}

export function GithubButton ({link, className, width="fit"} : {link: string, className?: string, width?: "full" | "fit";}) {
  const widthClass = width === "full" ? "w-full" : "w-fit"
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`See on github`}
      data-cursor="hover" 
      className={`${widthClass} ${className} rounded-[var(--radius-50)] px-[20px] py-[10px] bg-[var(--color-black)] text-[var(--color-white)] flex gap-[var(--spacing-gap-8)] items-center`}
    >
      <h6>See on github</h6>
      <Icon name={"github"}/>
    </a>
  )
}