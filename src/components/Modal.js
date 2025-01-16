import React from "react";

export default function Modal({ title, onClose, onSubmit, product, setProduct }) {
  return (
    <div
      style={{
        position: "fixed",
        top: "0",
        left: "0",
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
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
            width: "100%",
            marginBottom: "10px",
            padding: "10px",
            border: "1px solid #ddd",
            borderRadius: "5px",
          }}
        />
        <input
          type="number"
          placeholder="موجودی کالا"
          value={product.stock}
          onChange={(e) => setProduct({ ...product, stock: e.target.value })}
          style={{
            width: "100%",
            marginBottom: "10px",
            padding: "10px",
            border: "1px solid #ddd",
            borderRadius: "5px",
          }}
        />
        <input
          type="number"
          placeholder="قیمت کالا"
          value={product.price}
          onChange={(e) => setProduct({ ...product, price: e.target.value })}
          style={{
            width: "100%",
            marginBottom: "20px",
            padding: "10px",
            border: "1px solid #ddd",
            borderRadius: "5px",
          }}
        />
        <div style={{ textAlign: "right" }}>
          <button
            onClick={onSubmit}
            style={{
              padding: "10px 20px",
              backgroundColor: "#4CAF50",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              marginRight: "10px",
            }}
          >
            ثبت
          </button>
          <button
            onClick={onClose}
            style={{
              padding: "10px 20px",
              backgroundColor: "#f44336",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            لغو
          </button>
        </div>
      </div>
    </div>
  );
}
