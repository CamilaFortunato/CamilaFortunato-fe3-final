import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import DOCTOR from "../images/doctor.jpg"

const Card = ({ name, username, id }) => {

  const [inFavs, setInFavs] = useState(false);

  useEffect(() => {
    const favs = JSON.parse(localStorage.getItem('favs')) || [];
    const dentistExists = favs.find((dentist) => dentist.id === id);
    if (dentistExists) { setInFavs(true) }
  }, [id]);


  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
    const favs = JSON.parse(localStorage.getItem('favs')) || [];
    const dentistExists = favs.find((dentist) => dentist.id === id);

    //belete
    if (dentistExists) {
      const otherFavs = favs.filter((dentist) => dentist.id !== id);
      localStorage.setItem('favs', JSON.stringify(otherFavs));
      setInFavs(false);
      return;
    }

    //add
    const dentistData = { name, username, id };
    favs.push(dentistData);
    localStorage.setItem('favs', JSON.stringify(favs));
    setInFavs(true);
    
  }

  return (
    <div className="card">
        {/* En cada card deberan mostrar en name - username y el id */}
        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <Link to={`/dentist/${id}`}>
          <img src={DOCTOR} alt='doctor' className="card-img"/>
          <h3>{name}</h3>
          <p>{username}</p>
          <p>{id}</p>
      </Link>
        <button onClick={addFav} className="favButton">{inFavs ? "Delete from" : "Add to"}  favs</button>
    </div>
  );
};

export default Card;
