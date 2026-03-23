type ChipProps = {
  content: string
  className?: string
  variant?: "red" | "white"
}

export default function Chip({
  content,
  className,
  variant = "white"
}: ChipProps) {
  return (
    <div
      translate="no"
      className={`notranslate px-[20px] py-[10px] rounded-[50px] w-fit ${variant === "red" ? 'bg-[var(--color-white-30)] text-[var(--color-white)]' : 'bg-[var(--color-red-30)] text-[var(--color-gray)]'} ${className ?? ''}`}
    >
      <h6>
        {content}
      </h6>
    </div>
  )
}