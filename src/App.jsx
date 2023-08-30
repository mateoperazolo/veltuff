import React from 'react';
import{ Fragment } from 'react';
import './App.css'
import { Search } from './components/Search/index';
import { Item } from './components/Item';
import { Modal } from './components/Modal';
import Products  from './fromsItems.json'



function App() {
  const [items, setItems] = React.useState(Products)  // estado q contine los items de la lista de items
  const [searchValue, setSearchValue] = React.useState('') // estado q contiene lo q se escriibe en el primer input de <Search>>
  const [searchVariantValue, setSearchVariantValue] = React.useState('') // contiene el input del Varian
  const [searchColorValue, setSearchColorValue] = React.useState('') // contine opcion elejida de COlor
  const [searchSizeValue, setSearchSizeValue] = React.useState('')  // // contine opcion elejida de Size



  const searchedItems = items.filter((item) => {       // searchedItems es el filtrado de la lista de Items
    const itemNoMatch =  item.ItemNo_.toLowerCase().includes(searchValue.toLowerCase())
    const descriptionMatch =  item.Description?.toLowerCase().includes(searchValue.toLowerCase())
    const variantMatch =  item.Code?.includes(searchVariantValue)

    return (itemNoMatch || descriptionMatch) && variantMatch   // searchedItems seria la busqueda por numero de Item o Descripcion, q a se vez coincida con Variant
  })



  const uniqueSize = [...new Set(searchedItems.map(item => item.SizeCode))]  // genera una lista de colores q apartir del filtrado de searchedItems
  const uniqueColors = [...new Set(searchedItems.map(item => item.ColourCode))]  // genera una lista de colores q apartir del filtrado de searchedItems


  const finalMatchSearch = searchedItems.filter((item) => {           // finalMatchSearch es la concidencia entre searchedItems y varian y color
    const sizeMatch = searchSizeValue === '' || item.SizeCode === searchSizeValue;
    const colorMatch = searchColorValue === '' || item.ColourCode === searchColorValue; // el match tiene q ser la igualdad entre la opcion elejida y "" o donde cioncidan la opcion elejida y la lista de searchedItems

    return sizeMatch && colorMatch //finalMatchSearch seria la cioncidencia entre el filtrado de searchedItems en color y size
  });

  const filteredItems = finalMatchSearch.filter(item => item.XREF !== undefined);
  return (
    <>
      <header className="heder">
        <h1 className='titleName'>Project-V</h1>
        <Search
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        searchVariantValue = {searchVariantValue}
        setSearchVariantValue = {setSearchVariantValue}
        searchColorValue = {searchColorValue}
        setSearchColorValue = {setSearchColorValue}
        searchSizeValue = {searchSizeValue}
        setSearchSizeValue = {setSearchSizeValue}
        uniqueColors={uniqueColors}
        uniqueSize = {uniqueSize}
        />
      </header>

      <main className='main'>
        {filteredItems.slice(0, 50).map( produ => (
          <Item
          xref={produ.XREF}
          itemNo_={produ.ItemNo_}
          code={produ.Code}
          description = {produ.Description}
          colourCode = {produ.ColourCode}
          sizeCode = {produ.SizeCode}
          />

        ))}

      </main>
    </>
  )
}

export default App
