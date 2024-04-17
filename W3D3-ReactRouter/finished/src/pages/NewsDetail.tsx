import React from 'react'
import { useSearchParams } from 'react-router-dom'

export default function NewsDetail() {
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <div>
        <p>News Id: {searchParams.get('id')}</p>
        <p>News Title: {searchParams.get('title')}</p>
        <p>News Content: {searchParams.get('content')}</p>
    </div>
  )
}
