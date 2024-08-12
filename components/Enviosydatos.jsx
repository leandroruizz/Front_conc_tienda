import './Enviosydatos.css'

function Form() {
  return (
    <form action="https://formsubmit.co/greenalldaygrow@gmail.com" method="post" className='formulario'>
     <label className='cont-contacto'>
         <h3>NOMBRE</h3>
         <input className='inputarea' type="nombre" name="nombre" required="true" />
     </label>
     <label className='cont-contacto'>
         <h3>DNI</h3>
         <input className='inputarea' type="DNI" name="DNI" required="true" />
     </label>
     <label className='cont-contacto'>
         <h3>TELEFONO</h3>
         <input className='inputarea' type="telefono" name="telefono" required="true" />
     </label>
     <label className='cont-contacto'>
         <h3>LOCALIDAD</h3>
         <input className='inputarea' type="localidad" name="localidad" required="true" />
     </label>
     <label className='cont-contacto'>
         <h3>CODIGO POSTAL</h3>
         <input className='inputarea' type="codigo postal" name="codigo postal" required="true" />
     </label>
     <label className='cont-contacto'>
         <h3>E-MAIL</h3>
         <input className='inputarea' type="email" name="email" required="true" />
     </label>
     <button className='boton-enviar'type="submit">Enviar</button>
     <input type="hidden" name="_next" value="https://greenalldaygrow.vercel.app" />
    </form>
  )
}

export default Form