'use client'
import './shop.css'
import CardWrapper from '@/components/CardWrapper';
import Shopcart from '@/components/Shopcart';
import { ShoppingCartProvider } from '@/components/context/ShoppingCartContext';


export default function Shop() {
  return (
    <main className="shop">
      <ShoppingCartProvider>
        <div className='shop-cont'>
          <CardWrapper/>
          <Shopcart />
        </div>
      </ShoppingCartProvider>
    </main>
  );
}
