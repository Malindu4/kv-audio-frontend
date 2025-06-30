import { useState } from "react";

export default function AdminItemsPageAdd() {
  const [productKey, setProductKey] = useState("");
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productCategory, setProductCategory] = useState("audio");
  const [productDescription, setProductDescription] = useState("");

  const handleSubmit = () => {
    const productData = {
      key: productKey,
      name: productName,
      price: productPrice,
      category: productCategory,
      description: productDescription,
    };

    console.log("Submitting product:", productData);
    // You can add the actual API call or logic here
  };

  return (
    <div className="w-full h-full flex flex-col items-center">
      <h1 className="text-[25px] font-bold">Add Items</h1>
      <br />
      <div className="w-[400px] h-auto border p-4 flex flex-col gap-3">
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
          type="text"
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
          onClick={handleSubmit}
          className="w-full h-[40px] bg-black text-white font-bold flex justify-center items-center"
        >
          Submit
        </button>
      </div>
    </div>
  );
}
