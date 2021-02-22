import React, { useMemo } from 'react'
import { getHeroByPublisher } from '../../Selectors/getHeroByPublisher'
import { HeroCard } from './HeroCard';

export const HeroesList = ({ publisher }) => {
  
  const heroes = useMemo(() => getHeroByPublisher(publisher), [publisher]);
  return (
    <div className="card-columns animate__animated animate__fadeIn">
      {
        heroes.map(hero =>(
          <HeroCard key={hero.id}
          {...hero}/>
        ))
      }
    </div>
  )
}
