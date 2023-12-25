import React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/utils/cn'

export const titleVariants = cva('font-semibold tracking-tighter', {
  variants: {
    variant: {
      h1: 'leading-relaxed text-4xl',
      h2: 'leading-relaxed text-2xl',
      h3: 'leading-relaxed text-xl',
      h4: 'leading-relaxed text-base',
      h5: 'leading-relaxed text-sm',
      h6: 'leading-relaxed text-xs'
    }
  }
})

export type TitleProps = React.HTMLAttributes<HTMLHeadingElement> &
  VariantProps<typeof titleVariants> & {
    variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  }

export const Title = ({ className, variant, ...props }: TitleProps) => {
  const Comp = variant

  return (
    <Comp className={cn(titleVariants({ variant, className }))} {...props} />
  )
}
