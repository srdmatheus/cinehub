import { Credits } from '@/types/credits'
import Image from 'next/image'

type DirectorProps = {
  data: Credits
}

export const Director = async ({ data }: DirectorProps) => {
  const { crew } = data

  const director = crew.find((hole) => hole.job === 'Director')

  if (!director) return <p>Diretor desconhecido</p>

  return (
    <>
      <div className="h-[144px] w-24 overflow-hidden ">
        <Image
          width={200}
          height={200}
          className="object-fit rounded-md"
          src={
            director.profile_path
              ? `https://image.tmdb.org/t/p/w500/${director.profile_path}`
              : '/avatar.jpg'
          }
          alt={director.name}
        />
      </div>
      <p className="mt-2 text-base leading-none">{director.name}</p>
    </>
  )
}
