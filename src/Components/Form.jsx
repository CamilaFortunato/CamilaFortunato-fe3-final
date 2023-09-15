import React, {useState} from "react";


const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones

const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [msg,setMsg] = useState("");

function handleName(e){
  setName(e.target.value)
}

function handleEmail(e){
  setEmail(e.target.value)
}

function validateEmail (email){
  const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return regex.test(email)
}
  
const handleSubmit = (e) =>{
  e.preventDefault();
  if(name.length > 5 && validateEmail(email) === true){
    setMsg(`Gracias ${name} te contactaremos cuando antes vía mail`)
    setName("")
    setEmail("")
  }else{
    setMsg("Por favor verifique su información nuevamente");
  }
};

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
        <input type="text"  placeholder="Nombre" value={name} onChange={handleName} />
        </div>
        <div>
            <input type="text" placeholder="Email" value={email} onChange={handleEmail} />
        </div>
        <button type="submit">Send</button>
        <div>{msg}</div>
      </form>
    </div>
  );
};

export default Form;
