import React, { useMemo } from 'react'
import { Redirect, useParams } from 'react-router-dom'
import { getHeroById } from '../../Selectors/getHeroById';

export const HeroesScreen = ({history}) => {
  const {heroeId} = useParams();
  
  const hero = useMemo(() => getHeroById(heroeId), [heroeId]);
  const {superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters} = hero;
  if(!hero){
   return <Redirect to="/" />
  }
  const handleReturn = () =>{
    console.log(history.lenght);
    if(history.lenght <= 1){
      history.push('/');
    }else{
      history.goBack();
    }
  }
  return (
    <div className="row mt-5">
      <div className="col-4">
        <img src={`../Assets/heroes/${heroeId}.jpg`}
        alt={superhero}
        className="img-thumbnail animate__animated animate__fadeInLeft"/>
      </div>
      <div className="col-8">
        <h3>{superhero}</h3>
        <ul className="list-group list-group-flush">
          <li className="list-gropu-item">Alter Ego: {alter_ego}</li>
          <li className="list-gropu-item">Publisher: {publisher}</li>
          <li className="list-gropu-item">First Appearance: {first_appearance}</li>
        </ul>
        <h5>Characters: {characters}</h5>
        <button className="btn btn-primary-outline" onClick={handleReturn}>
          Return
        </button>
      </div>
    </div>
  )
}
