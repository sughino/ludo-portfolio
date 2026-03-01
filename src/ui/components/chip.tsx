type ChipProps = {
  content: string
  className?: string
  variant?: string
}

export default function Chip({
  content,
  className,
  variant
}: ChipProps) {
  return (
    <div
      className={`px-[20px] py-[10px] rounded-[50px] w-fit ${className ?? ''}`}
      data-variant={variant}
    >
      {content}
    </div>
  )
}