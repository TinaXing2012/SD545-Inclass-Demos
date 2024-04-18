import React from 'react'
import List from '../../components/List/list.component'
import Detail from '../../components/List/detail.component'

export default function ProductList() {
  return (
    <div className="row mt-5">
        <List />
        <Detail />
      </div>
  )
}
