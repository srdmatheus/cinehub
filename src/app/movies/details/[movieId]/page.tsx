'use client'

import { useParams } from 'next/navigation'

export default function MovieDetails() {
  const { movieId } = useParams<{ movieId: string }>()

  return <div>{movieId}</div>
}
