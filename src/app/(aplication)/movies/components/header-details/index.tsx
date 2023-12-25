import { Title } from '@/components/ui/title'
import { Tag } from '../tag'
import { MovieDetails } from '@/types/details'

type HeaderDetailsProps = {
  data: MovieDetails
}

export const HeaderDetails = async ({ data }: HeaderDetailsProps) => {
  const { title, genres, tagline } = data

  return (
    <section className="flex flex-col">
      <Title variant="h1" className="text-secondary">
        {title}
      </Title>
      {tagline && <p className="text-base italic">{tagline}</p>}
      <div className="mt-4 flex gap-2">
        {genres.map((genre) => (
          <Tag key={genre.id}>{genre.name}</Tag>
        ))}
      </div>
    </section>
  )
}
