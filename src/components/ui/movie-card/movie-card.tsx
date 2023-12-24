import Link from 'next/link'
import Image from 'next/image'

import { Card } from '../card'

type MovieCardProps = {
  title: string
  releaseYear: string
  genre: string
  poster: string
  url: string
}

export const MovieCard = ({
  title,
  releaseYear,
  genre,
  poster,
  url
}: MovieCardProps) => {
  return (
    <Link className="inline-flex" href={url}>
      <Card.Root>
        <div className="absolute left-0 right-0 top-0 h-[375px] w-[250px] transition-all duration-500 hover:scale-105 hover:brightness-125">
          <Image src={poster} fill alt={title} />
        </div>

        <Card.Header>
          <Card.Title>{title}</Card.Title>
          <Card.Description>
            {releaseYear} • {genre}
          </Card.Description>
        </Card.Header>
      </Card.Root>
    </Link>
  )
}
