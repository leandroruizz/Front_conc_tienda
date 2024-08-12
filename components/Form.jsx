import './Form.css'

function Form() {
  return (
    <form action="https://formsubmit.co/greenalldaygrow@gmail.com" method="post" className='formulario'>
     <label className='cont-contacto'>
         <h3>NOMBRE</h3>
         <input className='inputarea' type="nombre" name="nombre" required="true" />
     </label>
     <label className='cont-contacto'>
         <h3>E-MAIL</h3>
         <input className='inputarea' type="email" name="email" required="true" />
     </label>
     <label className='cont-contacto'>
         <h3>MENSAJE</h3>
         <textarea className='textarea' name="mensaje" required="true"></textarea>
     </label>
     <button className='boton-enviar'type="submit">Enviar</button>
     <input type="hidden" name="_next" value="http://localhost:3000/" />
    </form>
  )
}

export default Form