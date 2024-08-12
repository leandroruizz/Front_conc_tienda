import Link from 'next/link'
import './Navigation.css'

export default function Navigation () {
    return (
        <nav className='nav'>
            <img className='navlogo' src="/favicon.ico" width={70}/>
            <input type="checkbox" id='check'/>
            <label for="check" className='checkbtn'>
                <img className='bars' src="images/fabars.png" width={30}/>
            </label>
            <div className='nav-lista'>
                <li className='nav-item'>
                    <Link className='nav-text' href='./'>Inicio</Link>
                </li>
                <li className='nav-item'>
                    <Link className='nav-text' href='/shop'>Tienda</Link>
                </li>
                <li className='nav-item'>
                    <Link className='nav-text' href='./#nosotros'>Nosotros</Link>
                </li>
                <li className='nav-item'>
                    <Link className='nav-text' href='/contacto'>Contacto</Link>
                </li>
            </div>
        </nav>
    )
}
