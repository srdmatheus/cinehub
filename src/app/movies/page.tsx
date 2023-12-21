import { MovieCard } from '@/components/ui/movie-card'

const capa = '/capa-filme.jpg'

const data = [
  {
    url: '/movies/details/oppenheimer',
    title: 'Oppenheimer',
    genre: 'Ação',
    releaseYear: '2023',
    poster: capa,
    id: 1
  },
  {
    url: '/movies/details/oppenheimer',
    title: 'Indiana Jones e A Relíquia do Destino',
    genre: 'Ação',
    releaseYear: '2023',
    poster: capa,
    id: 2
  },
  {
    url: '/movies/details/oppenheimer',
    title: 'Oppenheimer',
    genre: 'Ação',
    releaseYear: '2023',
    poster: capa,
    id: 3
  },
  {
    url: '/movies/details/oppenheimer',
    title: 'Oppenheimer',
    genre: 'Ação',
    releaseYear: '2023',
    poster: capa,
    id: 4
  }
]

export default function Releases() {
  return (
    <main>
      <h1>Filmes populares</h1>
      <div className="flex gap-6">
        {data.map((movie) => (
          <MovieCard
            key={movie.id}
            url={movie.url}
            title={movie.title}
            genre={movie.genre}
            releaseYear={movie.releaseYear}
            poster={movie.poster}
          />
        ))}
      </div>
    </main>
  )
}
