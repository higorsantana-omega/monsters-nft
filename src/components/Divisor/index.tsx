import { cn } from "@/utils/cn"

export type DivisorProps = {
  className?: string
}

export function Divisor ({ className }: DivisorProps) {
  return (
    <hr className={cn("w-full border-[#242634]", className)} />
  )
}