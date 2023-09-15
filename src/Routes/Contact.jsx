import React,{useContext} from 'react'
import Form from '../Components/Form'
import { ContextGlobal } from "../Components/utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context


const Contact = () => {
  const { state } = useContext(ContextGlobal)

  return (
    <main className={state.theme}>
      <h1>¿Quieres más información?</h1>
      <p style={{textAlign:"center"}}>Envia todas tus dudas y te contactaremos pronto</p>
      <Form/>
    </main>
  )
}

export default Contact