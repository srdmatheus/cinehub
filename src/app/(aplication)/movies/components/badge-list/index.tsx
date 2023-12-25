import { getMovieDetails } from '@/functions/fetch-api'
import { Badge } from '../badge'

type BadgeList = {
  movieId: number
}

export const BadgeList = async ({ movieId }: BadgeList) => {
  const data = await getMovieDetails({ id: movieId })

  const date = new Date(data.release_date)

  return (
    <div className="flex gap-4">
      <Badge
        title="Votação média"
        description={`${data.vote_average.toFixed(1)}/10`}
        color="orange"
      />
      <Badge
        title="Lançamento"
        description={`${date.toLocaleDateString('pt-BR')}`}
      />
      <Badge title="Duração" description={`${data.runtime} minutos`} />
      {data.budget > 0 && (
        <Badge
          title="Orçamento"
          description={`${data.budget.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          })}`}
        />
      )}
      {data.revenue > 0 && (
        <Badge
          title="Bilheteria"
          description={`${data.budget.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          })}`}
        />
      )}
    </div>
  )
}
