'use client'

import { useRouter } from 'next/navigation'
import { Undo2 } from 'lucide-react'

import { Button } from '@/components/ui/button'

import { cn } from '@/utils/cn'

type BackButtonProps = {
  className: string
}

export const BackButton = ({ className }: BackButtonProps) => {
  const router = useRouter()
  return (
    <Button
      onClick={() => router.back()}
      className={cn(
        'flex items-center justify-center gap-2.5 text-sm font-semibold leading-none shadow',
        className
      )}
    >
      <Undo2 size={16} />
      Voltar
    </Button>
  )
}
