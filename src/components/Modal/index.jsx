import React from "react";
import JsBarcode from "jsbarcode";
import "./modal.css"


function Modal({
  closeModal,
  xref,
  itemNo_,
  code,
  description,
  colourCode,
  sizeCode
 }) {
  const handleOverlayClick = (event) => {
    if (event.target.classList.contains("modal-overlay")) {
      closeModal();
    }
  };
  const barcodeRef = React.useRef(null);

  React.useEffect(() => {
    // Genera el código de barras utilizando jsbarcode
    JsBarcode(barcodeRef.current, xref, {
      format: "CODE128", // Puedes ajustar el formato según tus necesidades
      displayValue: false, // No mostrar el valor del código
    });
  }, [xref]);



  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal-content">
        <h1>Barcode of {description}</h1>
        <svg
          ref={barcodeRef}
          className="barcode-svg"

        />
        <p>{itemNo_}  {colourCode}  {sizeCode}</p>
        <button onClick={closeModal}>Cerrar Modal</button>
      </div>
    </div>
  );
}

export { Modal };
