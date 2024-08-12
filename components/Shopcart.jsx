import './Shopcart.css'
import { useContext, useState, useEffect } from 'react'
import { CartContext } from '@/components/context/ShoppingCartContext'
import axios from 'axios'
 
const ShopCart = () => {

  const [cart] = useContext(CartContext)
  const [loading, setLoading] = useState(false);

  const quantity = cart.reduce((acc, curr) => acc + curr.quantity, 0);
  const totalPrice = cart.reduce((acc, curr) => acc + curr.quantity * curr.precio, 0);

  const createMercadoPagoPreference = async () => {
    try {
      setLoading(true);
      const productos = cart.map(item => ({
        title: item.title,
        unit_price: item.precio,
        quantity: item.quantity,
        currency_id: 'ARS',
      }));

      const response = await axios.post('https://greenallday-server-lime.vercel.app/Mercado_Pago', {
        productos,
      });

      setTimeout(() => {
        setLoading(false); // Ocultar pantalla de carga después de 8 segundos
        window.location.href = response.data; // Redirigir a Mercado Pago
      }, 8000);

    } catch (error) {
      setLoading(false);
      console.error('Error al crear preferencia de Mercado Pago:', error);
    }
  };
  const redirectToWhatsApp = () => {
    const whatsappMessage = `¡Hola! Quiero comprar los siguientes productos:\n${cart.map(item => `${item.title} - Cantidad: ${item.quantity}`).join('\n')}\nTotal: $${totalPrice}`;

    const whatsappUrl = `https://wa.me/543585042516/?text=${encodeURIComponent(whatsappMessage)}`;

    window.location.href = whatsappUrl;
  };

  return (
    <div className='cart'>
      {loading && (
        <div className='loading-screen'>
          <h2 className='resaltado-loadig'> Al realizar el pago en mercado pago </h2>
          <h2>esperar los 5s para poder llenar los datos de contacto (por lo contrario se anulara la compra y se devolvera el dinero)</h2>
        </div>
      )}
      <div className='cont-cart'>
        <div className='productos'>
          <img src='images/compras.png' alt="Carrito de compras" width={40} />{quantity}
          {cart.map((item) => (
            <p className='productos-añadidos' key={item.id}>{item.title}</p>
          ))}
        </div>
        <div className='total'> Total ${totalPrice}</div>
        <div className='cont-botones'>
          <button className='boton-comprar' onClick={createMercadoPagoPreference}>
            COMPRAR
          </button>
          <button className='boton-retirar' onClick={redirectToWhatsApp}>
            Retirar y Pagar
          </button>
        </div>
      </div>
    </div>

  )
}
export default ShopCart;