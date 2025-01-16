import { useState } from "react";
import productData from "../data/productData";
import { ToastContainer, toast } from "react-toastify";
import { FaTrash, FaEdit } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import "react-toastify/dist/ReactToastify.css";
import Modal from "../components/Modal";

export default function ProductManagement() {
  const [products, setProducts] = useState(productData);
  const [searchTerm, setSearchTerm] = useState("");
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [newProduct, setNewProduct] = useState({
    name: "",
    stock: "",
    price: "",
  });

  const toggleAddModal = () => {
    setNewProduct({ name: "", stock: "", price: "" });
    setIsAddModalOpen(!isAddModalOpen);
  };

  const toggleEditModal = (product = null) => {
    setSelectedProduct(product);
    setNewProduct(product || { name: "", stock: "", price: "" });
    setIsEditModalOpen(!isEditModalOpen);
  };

  const toggleDeleteModal = (product = null) => {
    setSelectedProduct(product);
    setIsDeleteModalOpen(!isDeleteModalOpen);
  };

  const handleAddProduct = () => {
    const id = Date.now(); // ایجاد ID منحصربه‌فرد
    setProducts([...products, { ...newProduct, id }]);
    toggleAddModal();
    toast.success("محصول با موفقیت اضافه شد!");
  };

  const handleEditProduct = () => {
    setProducts(
      products.map((product) =>
        product.id === selectedProduct.id
          ? { ...selectedProduct, ...newProduct }
          : product
      )
    );
    toggleEditModal();
    toast.success("محصول با موفقیت ویرایش شد!");
  };

  const handleDeleteProduct = () => {
    setProducts(
      products.filter((product) => product.id !== selectedProduct.id)
    );
    toggleDeleteModal();
    toast.success("محصول با موفقیت حذف شد!");
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div
      style={{
        padding: "20px",
        fontFamily: "Arial, sans-serif",
        position: "relative",
      }}
    >
      <input
        type="text"
        placeholder="جستجوی کالا..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          width: "100%",
          padding: "10px 10px 10px 40px",
          marginBottom: "20px",
          border: "1px solid #ddd",
          borderRadius: "9px",
          outline: "none",
          boxSizing: "border-box",
          backgroundImage:
            "url('data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 fill=%27%23aaa%27 viewBox=%270 0 24 24%27%3E%3Cpath d=%27M10 18a8 8 0 100-16 8 8 0 000 16zm5-2.93a10 10 0 111.414-1.414l4.486 4.486-1.414 1.414-4.486-4.486z%27/%3E%3C/svg%3E')",
          backgroundSize: "16px 16px",
          backgroundPosition: "10px center",
          backgroundRepeat: "no-repeat",
        }}
      />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "20px",
        }}
      >
        <button
          style={{
            padding: "10px 20px",
            backgroundColor: "#55A3F0",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
          onClick={toggleAddModal}
        >
          افزودن محصول
        </button>

        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <h3 style={{ margin: 0, fontSize: "24px", padding: "5px" }}>
            مدیریت کالا
          </h3>
          <svg
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ marginRight: "8px" }}
          >
            <path
              d="M11.25 27.5H18.75C25 27.5 27.5 25 27.5 18.75V11.25C27.5 5 25 2.5 18.75 2.5H11.25C5 2.5 2.5 5 2.5 11.25V18.75C2.5 25 5 27.5 11.25 27.5Z"
              stroke="#292D32"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M19.4624 23.125V18.25"
              stroke="#292D32"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M19.4624 9.3125V6.875"
              stroke="#292D32"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M19.4624 15.8125C21.2573 15.8125 22.7124 14.3574 22.7124 12.5625C22.7124 10.7676 21.2573 9.3125 19.4624 9.3125C17.6675 9.3125 16.2124 10.7676 16.2124 12.5625C16.2124 14.3574 17.6675 15.8125 19.4624 15.8125Z"
              stroke="#292D32"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10.5376 23.125V20.6875"
              stroke="#292D32"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10.5376 11.75V6.875"
              stroke="#292D32"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10.5376 20.6875C12.3325 20.6875 13.7876 19.2324 13.7876 17.4375C13.7876 15.6426 12.3325 14.1875 10.5376 14.1875C8.74267 14.1875 7.2876 15.6426 7.2876 17.4375C7.2876 19.2324 8.74267 20.6875 10.5376 20.6875Z"
              stroke="#292D32"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      {/* لیست محصولات */}
      <div
        style={{
          border: "1px solid #ddd",
          padding: "10px",
          borderRadius: "4px",
          minHeight: "50vh",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            backgroundColor: "#f0f0f0",
            padding: "10px",
          }}
        >
          <span>نام کالا</span>
          <span>موجودی</span>
          <span>قیمت</span>
          <span>عملیات</span>
        </div>
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "10px",
              borderBottom: "1px solid #ddd",
              alignItems: "center",
            }}
          >
            <span>{product.name}</span>
            <span>{product.stock}</span>
            <span>{product.price}</span>
            <div>
              <button
                style={{
                  backgroundColor: "transparent",
                  border: "none",
                  cursor: "pointer",
                  color: "#4CAF50",
                  marginRight: "10px",
                }}
                onClick={() => toggleEditModal(product)}
              >
                <FaEdit size={18} />
              </button>
              <button
                style={{
                  backgroundColor: "transparent",
                  border: "none",
                  cursor: "pointer",
                  color: "#f44336",
                }}
                onClick={() => toggleDeleteModal(product)}
              >
                <FaTrash size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* مودال افزودن */}
      {isAddModalOpen && (
        <Modal
          title="افزودن محصول"
          onClose={toggleAddModal}
          onSubmit={handleAddProduct}
          product={newProduct}
          setProduct={setNewProduct}
        />
      )}

      {/* مودال ویرایش */}
      {isEditModalOpen && (
        <Modal
          title="ویرایش اطلاعات"
          onClose={toggleEditModal}
          onSubmit={handleEditProduct}
          product={newProduct}
          setProduct={setNewProduct}
        />
      )}

      {/* مودال حذف */}
      {isDeleteModalOpen && (
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
              textAlign: "center",
            }}
          >
            <h2 style={{ marginBottom: "20px" }}>
              آیا از حذف این محصول مطمئنید؟
            </h2>
            <div style={{ marginBottom: "20px" }}>
              <strong>نام کالا:</strong> {selectedProduct?.name}
            </div>
            <div>
              <button
                onClick={handleDeleteProduct}
                style={{
                  padding: "10px 20px",
                  backgroundColor: "#F43F5E",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                  marginRight: "10px",
                }}
              >
                حذف
              </button>
              <button
                onClick={toggleDeleteModal}
                style={{
                  padding: "10px 20px",
                  backgroundColor: "#DFDFDF",
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
      )}

      {/* کانتینر Toast */}
      <ToastContainer />
    </div>
  );
}
