import React, {useContext} from 'react';
import Card from '../Components/Card';
import {ContextGlobal} from "../Components/utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {

  const {state} = useContext(ContextGlobal)


  return (
    <main className="" >
      <h1>Home</h1>
      <div className='card-grid'>
        {/* Aqui deberias renderizar las cards */}
        {state.data.map((dentist) => (
          <div key={dentist.id}>
            <Card {...dentist}/>
          </div>
        ))}
      </div>
    </main>
  )
}

export default Home