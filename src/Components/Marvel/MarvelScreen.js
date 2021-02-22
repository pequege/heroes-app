import React from 'react'
import { HeroesList } from '../Heroes/HeroesList'

export const MarvelScreen = () => {
  return (
    <div>
      <h2>Marvel Heroes</h2>
      <hr/>
      <HeroesList publisher="Marvel Comics"/>
    </div>
  )
}
