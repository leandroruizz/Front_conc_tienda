import './contacto.css'
import Form from '@/components/Form'

export default function Contacto() {
    return (
        <main className='contacto'>
            <div>
              <img className='imgform' src="/favicon.ico" alt="" />
              <h1 className='titulo-contacto'>Contáctenos</h1>
              <p className='texto-contacto'></p>
              <Form/>
            </div>
        </main>
    )
}