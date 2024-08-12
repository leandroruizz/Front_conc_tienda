import React, { useState } from 'react';
import Card from './Card';
import './CardWrapper.css';
import data from './data.json';

export default function CardWrapper() {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [selectedCategoria, setSelectedCategoria] = useState('');

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  const handleCategoriaClick = (categoria) => {
    setSelectedCategoria(categoria);
    toggleDropdown();
  };

  return (
    <div>
      <div className="menu">
        <button className="categoria-titulo" onClick={toggleDropdown}>
          <img className="filtro" src="https://cdn-icons-png.flaticon.com/512/25/25337.png" width={15}/>Filtros
        </button>
        {isDropdownVisible && (
        <div className="categoria-cont">
          <button className="categoria" onClick={() => handleCategoriaClick('')}>Todos</button>
          <button className="categoria" onClick={() => handleCategoriaClick('Parafernalia')}>Parafernalia</button>
          <button className="categoria" onClick={() => handleCategoriaClick('Tecnologia y Herramientas')}>Tecnología </button>
          <button className="categoria" onClick={() => handleCategoriaClick('Sustratos y fertilizantes')}>Cultivo</button>
        </div>
      )}
    </div>
    <div className="grilla">
      {data.filter((product) => {
          if (selectedCategoria === '') {
            return true
           } else {
             return product.categoria === selectedCategoria;
           }
         })
      .map((product) => {
        return <Card key={product.id} {...product} />;
      })}
     </div>
    </div>
  );
}


