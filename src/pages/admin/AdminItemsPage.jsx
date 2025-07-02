import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function AdminItemsPageAdd() {
  const [productKey, setProductKey] = useState("");
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productCategory, setProductCategory] = useState("audio");
  const [productDescription, setProductDescription] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token");

    if (!token) {
      toast.error("Login First");
      return;
    }

    const productData = {
      key: productKey,
      name: productName,
      price: productPrice,
      category: productCategory,
      description: productDescription,
    };

    try {
      const result = await axios.post(
        "http://localhost:3000/api/products",
        productData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      toast.success(result.data.message || "Product added successfully!");
      navigate("/admin/items");
    } catch (err) {
      console.error(err);
      toast.error(err?.response?.data?.error || "Something went wrong!");
    }
  };

  return (
    <div className="w-full h-full flex flex-col items-center">
      <h1 className="text-[25px] font-bold">Add Items</h1>
      <br />
      <form
        onSubmit={handleSubmit}
        className="w-[400px] h-auto border p-4 flex flex-col gap-3"
      >
        <input
          onChange={(e) => setProductKey(e.target.value)}
          value={productKey}
          type="text"
          placeholder="Product Key"
          className="p-2 border"
        />
        <input
          onChange={(e) => setProductName(e.target.value)}
          value={productName}
          type="text"
          placeholder="Product Name"
          className="p-2 border"
        />
        <input
          onChange={(e) => setProductPrice(e.target.value)}
          value={productPrice}
          type="number"
          placeholder="Product Price"
          className="p-2 border"
        />
        <select
          value={productCategory}
          onChange={(e) => setProductCategory(e.target.value)}
          className="p-2 border"
        >
          <option value="audio">Audio</option>
          <option value="lights">Lights</option>
          <option value="video">Video</option>
          <option value="accessories">Accessories</option>
        </select>
        <textarea
          onChange={(e) => setProductDescription(e.target.value)}
          value={productDescription}
          placeholder="Product Description"
          className="p-2 border"
        ></textarea>

        <button
          type="submit"
          className="w-full h-[40px] bg-green-600 text-white font-bold flex justify-center items-center"
        >
          Submit
        </button>
        <button
          type="button"
          onClick={() => navigate("/admin/items")}
          className="w-full h-[40px] bg-red-600 text-white font-bold flex justify-center items-center"
        >
          Cancel
        </button>
      </form>
    </div>
  );
}
