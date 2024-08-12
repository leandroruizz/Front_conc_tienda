import { CartContext } from "@/components/context/ShoppingCartContext"
import { useContext } from "react"
import './Card.css'

export default function Card({ id, imagen, titulo, descripcion, precio, cantidad }) {
  const [cart, setCart] = useContext(CartContext);

  const addToCart = () => {
    setCart((currCards) => {
      const isCardFound = currCards.find((card) => card.id === id);
      if (isCardFound) {
        if (isCardFound.quantity < cantidad) {
          return currCards.map((card) => {
            if (card.id === id) {
              return { ...card, quantity: card.quantity + 1 };
            } else {
              return card;
            }
          });
        } else {
          return currCards;
        }
      } else {
        if (cantidad > 0) {
          const product = {
            id,
            quantity: 1,
            precio,
            title: titulo,
          };
          return [...currCards, product];
        } else {
          return currCards;
        }
      }
    });
  };
  

    const removeCard = (id) => {
        setCart((currCards) => {
          if (currCards.find((card) => card.id === id)?.quantity === 1) {
            return currCards.filter((card) => card.id !== id) 
          } else {
            return currCards.map((card) => {
                if(card.id === id){
                  return { ...card, quantity: card.quantity -1 }
                } else {
                  return card
                }
            })
          }
        })
    }

    const getQuantityById = (id) => {
      return cart.find((card) => card.id === id)?.quantity || 0
    }
    const quantityPerCard = getQuantityById(id)

    return (
        <div className="card">
          {quantityPerCard > 0 && (
            <div className="card-quantity">{quantityPerCard}</div>
          )}
            <img src={imagen} alt="" />
            <div className="card-info">
                <h2 className='titulo'>{titulo}</h2>
                <div className="card-info-detalles">
                    <p className='precio'>${precio}</p>
                </div>
                <button className='boton-añadir' onClick={addToCart}>
                  + AÑADIR
                </button>
                {quantityPerCard > 0 && (
                  <button className='boton-quitar' onClick={() => removeCard(id)}>
                  - QUITAR
                  </button>
                )}
                <p className='descripcion'>{descripcion}</p>
            </div>             
        </div>
    )
}