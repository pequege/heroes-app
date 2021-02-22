import React from 'react'
import { HeroesList } from '../Heroes/HeroesList'

export const DcScreen = () => {
  return (
    <div>
      <h2>Dc Heroes</h2>
      <hr/>
      <HeroesList publisher="DC Comics"/>
    </div>
  )
}
