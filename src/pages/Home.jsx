import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import Navbar from "../components/Navbar";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => console.error(err));
  }, []);

  if (loading)
    return (
      <div className="flex justify-center items-center min-h-screen">
        <h2 className="text-2xl font-medium">Loading...</h2>
      </div>
    );

  return (
    <div className="min-h-screen w-full bg-gradient-to-r from-gray-100 to-blue-100">
      <Navbar />
      <div id="products" className="max-w-[1200px] mx-auto px-4 py-8">
        <h1 className="text-3xl font-semibold text-center mb-8">Products</h1>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
