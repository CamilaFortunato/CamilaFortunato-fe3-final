import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
 
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  const { id } = useParams();
  const [dentist, setDentist] = useState({});
 

  const getDentist = async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const data = await response.json();
    setDentist(data);
  }

  useEffect(() => {
    getDentist()
  })

  return (
    <div>
      <h1>Detail Dentist id </h1>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
      <table>
        <tbody>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Website</th>
          </tr>
          <tr>
            <td>{dentist.name}</td>
            <td>{dentist.email}</td>
            <td>{dentist.phone}</td>
            <td>{dentist.website}</td>
          </tr>
        </tbody>
      </table>

      
    
    </div>
  )
}

export default Detail