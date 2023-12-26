'use client'

import { getMovieByQuery } from '@/functions/fetch-api'
import { useState } from 'react'
import { MovieList } from '../movie-list'
import { Movie } from '@/types/movies'
import { Button } from '@/components/ui/button'
import { SearchIcon } from 'lucide-react'

export const Search = () => {
  const [search, setSearch] = useState('')
  const [movies, setMovies] = useState<Movie[]>([])

  const handleSearch = () =>
    getMovieByQuery({ query: search }).then((response) => setMovies(response))

  return (
    <>
      <div className="mb-4 flex items-center justify-between">
        <div className="flex h-12 items-start justify-start rounded ">
          <input
            className="h-full w-96 rounded-md rounded-r-none bg-primary/10  p-3 text-secondary outline-none ring-inset ring-accent focus:ring-1"
            placeholder="Pesquisar..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <Button onClick={handleSearch} className="h-full rounded-l-none">
            <SearchIcon size={16} />
            Pesquisar
          </Button>
        </div>
      </div>

      {movies.length ? (
        <MovieList movies={movies} />
      ) : (
        <p>Nada encontrado na busca.</p>
      )}
    </>
  )
}
