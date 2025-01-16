import { useState } from "react";
import { useRouter } from "next/router";

export default function Signup() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSignup = (e) => {
    e.preventDefault();

   
    if (formData.password !== formData.confirmPassword) {
      alert("رمز عبور و تکرار رمز عبور مطابقت ندارند!");
      return;
    }

    
    localStorage.setItem("user", JSON.stringify(formData));

    
    router.push("/product-management");
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", backgroundColor: "#F7F8F8" }}>
      <form
        onSubmit={handleSignup}
        style={{
          display: "flex",
          flexDirection: "column", 
          alignItems: "center", 
          padding: "20px", 
          border: "1px solid #ddd",
          borderRadius: "40px",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
          backgroundColor: "#fff", 
          width: "100%",
          maxWidth: "400px", 
          boxSizing: "border-box", 
        }}
      >
        <h2 style={{ textAlign: "center" }}>فرم ثبت‌ نام</h2>
        <input
          type="text"
          name="username"
          placeholder="نام کاربری"
          value={formData.username}
          onChange={handleChange}
          required
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
          type="password"
          name="password"
          placeholder="رمز عبور"
          value={formData.password}
          onChange={handleChange}
          required
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
          type="password"
          name="confirmPassword"
          placeholder="تکرار رمز عبور"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
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
        <button
          type="submit"
          style={{
            width: "calc(100% - 20px)",
            padding: "10px",
            margin: "10px 0",
            backgroundColor: "#55A3F0",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          ثبت‌نام
        </button>
        <p >
          <a href="/login" style={{ textAlign: "center", marginTop: "10px",color:"#55A3F0",textDecoration:"none" }}>حساب کاربری دارید؟ </a>
        </p>
      </form>
    </div>
  );
}
