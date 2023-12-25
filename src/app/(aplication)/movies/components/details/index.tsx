import { Title } from '@/components/ui/title'
import { MovieDetails } from '@/types/details'

type DetailsProps = {
  data: MovieDetails
}

export const Details = async ({ data }: DetailsProps) => {
  const { overview, original_title, original_language } = data

  return (
    <div className="flex flex-col gap-2">
      <div>
        <div>
          <Title variant="h4" className="text-secondary">
            Descrição
          </Title>

          <p>{overview}</p>
        </div>

        <div>
          <Title variant="h4" className="text-secondary">
            Título original
          </Title>

          <p>{original_title}</p>
        </div>
      </div>
      <div>
        <div>
          <Title variant="h4" className="text-secondary">
            Língua original
          </Title>
          <p>{original_language}</p>
        </div>
      </div>
    </div>
  )
}
