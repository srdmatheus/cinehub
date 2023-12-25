import { Backdrop } from '@/types/backdrops'
import Image from 'next/image'

type BackdropsProps = {
  data: Backdrop[]
}

export const Backdrops = async ({ data }: BackdropsProps) => {
  if (!data) return <p>Galeria não encontrada</p>

  return (
    <>
      <div className="grid grid-cols-[repeat(auto-fit,_minmax(260px,_3fr))] items-center justify-center gap-4">
        {data.map((backdrop) => (
          <div key={backdrop.file_path}>
            <Image
              width={260}
              height={260}
              src={`https://image.tmdb.org/t/p/w500/${backdrop.file_path}`}
              alt=""
              quality={60}
              className="rounded-md"
            />
          </div>
        ))}
      </div>
    </>
  )
}
