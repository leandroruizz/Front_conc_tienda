import './envios.css'
import Enviosydatos from '@/components/Enviosydatos'

export default function Envio() {
    return (
        <main className='contacto'>
            <div>
              <div className='cont-contact'>
                <h1 className='titulo-contacto'>Llena los datos de contacto y envio</h1>
                <a className='subtitulo-contacto'>si no se realiza el llenado de este formulario se cancelara la compra. el envio se paga en destino, se enviara un total del costo del envio por mensaje</a>
              </div>
              <Enviosydatos/>
            </div>
        </main>
    )
}