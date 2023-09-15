import React, {useState,useEffect} from "react";
import Card from "../Components/Card";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {

  const [favDentists, setFavDentists] = useState([]);

  useEffect(() => {
    const saveFavs = localStorage.getItem('favs');
    if (saveFavs) {
      setFavDentists(JSON.parse(saveFavs));
    }
  }, []);


  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
        {favDentists.map((dentist) => (
        <Card key={dentist.id} {...dentist} />
      ))}
      </div>
    </>
  );
};

export default Favs;
