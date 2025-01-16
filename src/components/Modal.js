import React from "react";

export default function Modal({ title, onClose, onSubmit, product, setProduct }) {
  return (
    <div
  style={{
    position: "fixed",
     direction: "rtl",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backdropFilter: "blur(5px)", 
            WebkitBackdropFilter: "blur(5px)",
  }}
>
  <div
    style={{
      backgroundColor: "white",
      padding: "20px",
      borderRadius: "10px",
      width: "400px",
    }}
  >
    <h2 style={{ marginBottom: "20px" }}>{title}</h2>
    <input
      type="text"
      placeholder="نام کالا"
      value={product.name}
      onChange={(e) => setProduct({ ...product, name: e.target.value })}
      style={{
        width: "calc(100% - 40px)", 
        padding: "10px",
        margin: "10px 0",
        border: "none",
        borderRadius: "8px",
        backgroundColor: "#f2f2f2",
        outline: "none",
        boxShadow: "inset 0 1px 3px rgba(0, 0, 0, 0.1)", 
      }}
    />
    <input
      type="number"
      placeholder="موجودی کالا"
      value={product.stock}
      onChange={(e) => setProduct({ ...product, stock: e.target.value })}
      style={{
        width: "calc(100% - 40px)", 
        padding: "10px",
        margin: "10px 0",
        border: "none",
        borderRadius: "8px",
        backgroundColor: "#f2f2f2",
        outline: "none",
        boxShadow: "inset 0 1px 3px rgba(0, 0, 0, 0.1)", 
      }}
    />
    <input
      type="number"
      placeholder="قیمت کالا"
      value={product.price}
      onChange={(e) => setProduct({ ...product, price: e.target.value })}
      style={{
        width: "calc(100% - 40px)", 
        padding: "10px",
        margin: "10px 0",
        border: "none",
        borderRadius: "8px",
        backgroundColor: "#f2f2f2",
        outline: "none",
        boxShadow: "inset 0 1px 3px rgba(0, 0, 0, 0.1)", 
      }}
    />
    <div style={{ display: "flex", justifyContent: "space-between", gap: "10px", marginTop:"10px" }}>
      <button
        onClick={onSubmit}
        style={{
          width: "184px", // عرض دکمه ثبت
          padding: "10px",
          backgroundColor: "#55A3F0",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        ثبت
      </button>
      <button
        onClick={onClose}
        style={{
          width: "184px", // عرض دکمه انصراف
          padding: "10px",
          marginLeft:"18px",
          backgroundColor: "#DFDFDF",
          color: "black",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        انصراف
      </button>
    </div>
  </div>
</div>

  );
}
