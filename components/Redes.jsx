import Link from "next/link"
import './Redes.css'

export default function Redes() {
  return (
    <div className='contredes'>
      <Link className='instagram' href='https://www.instagram.com/greenalldaygrowshop' target='_blank'><img src="images/instagramlogo.png" alt="" width={60} /></Link>
      <Link className='whatsapp' href='https://api.whatsapp.com/send?phone=543585042516' target='_blank'><img src="images/whatsapp.png" alt="" width={60} /></Link>
    </div>
  )
}