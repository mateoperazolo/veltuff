import React, { Fragment } from "react";
import './search.css';


function Search({
  searchValue,
   setSearchValue,
   searchVariantValue,
   setSearchVariantValue,
   searchSizeValue,
   setSearchSizeValue,
   searchColorValue,
   setSearchColorValue,
   uniqueColors,
   uniqueSize
  }) {

  return(
    <Fragment>
      <div className="contentItemNameVariant">
        <input
        className='itemNameInput'
         placeholder="Item Number"
         value={searchValue}
         onChange={(teclas) => {
          setSearchValue(teclas.target.value)
         }}
         >
         </input>

        <input
        className="variatInput"
        placeholder="Variat"
        value={searchVariantValue}
        onChange={(teclas) => {
          setSearchVariantValue(teclas.target.value)
        }}></input>

      </div>

      <div className="contentColorZide">
        <select
          className="colorInput"
          placeholder="Color"
          value={searchColorValue}
          onChange={(event) => {
            const selectedColor = event.target.value;
            setSearchColorValue(selectedColor);
          }}
        >
          <option
          value=""

          >--Color--</option>
          {uniqueColors.map((color)=>{
            return(
              <option value={color} key={color}>{color}</option>
            )
          })}
        </select>

        <select
        className="zideInput"
        value={searchSizeValue}
        onChange={(event) => {
          const selectedSize = event.target.value;
          setSearchSizeValue(selectedSize);
        }}
        >

          <option
          value="">--Zide--</option>
          {uniqueSize.map((zide)=>{
            return(
              <option value={zide} key={zide}>{zide}</option>
            )
          })}
        </select>
      </div>

      <div className='contentBtn'>
        <button className='btnClean'>Clean</button>
        <button className='btnSearch'>Search</button>
      </div>
    </Fragment>
  )

}

export { Search }
