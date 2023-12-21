import Image from 'next/image'
import { Card } from '../card'
import Link from 'next/link'

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
        <Image
          src={poster}
          width={250}
          height={375}
          alt="name"
          className="absolute top-0 right-0 left-0 hover:scale-105 transition-all duration-500"
        />
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
