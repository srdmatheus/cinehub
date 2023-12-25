import Image from 'next/image'

import { Credits } from '@/types/credits'

type CastListProps = {
  data: Credits
}

export const CastList = async ({ data }: CastListProps) => {
  const { cast } = data

  const actors = cast
    .filter((item) => item.known_for_department === 'Acting')
    .slice(0, 20)

  return (
    <div className="grid grid-cols-[repeat(auto-fit,_minmax(96px,_3fr))] items-start justify-start gap-4">
      {actors.map((actor) => (
        <div key={actor.id} className="flex flex-col gap-1">
          <div className="h-[144px] w-24 overflow-hidden object-cover">
            <Image
              width={200}
              height={200}
              className="rounded-md object-cover"
              src={
                actor.profile_path
                  ? `https://image.tmdb.org/t/p/w500/${actor.profile_path}`
                  : '/avatar.jpg'
              }
              alt={actor.name}
            />
          </div>
          <p className="text-sm leading-none">{actor.name}</p>
        </div>
      ))}
    </div>
  )
}
