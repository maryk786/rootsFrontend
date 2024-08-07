import React from "react";
import { useSelector } from "react-redux";
// import { getAllProduct, addToWishlist } from "../features/product/productSlice";
// import { toast } from "react-toastify";
import ProductCard from "./ProductCard";

const FeaturedProduct = () => {
  // const dispatch = useDispatch();
  const productState = useSelector((state) => state.product?.product) || [];
  console.log("fetaure product", productState);

  // const notify = () => toast("Added to Wishlist");
  // useEffect(() => {
  //   dispatch(getAllProduct());
  // }, [dispatch]);

  // const addToWish = (id) => {
  //   dispatch(addToWishlist(id));
  //   notify();
  // };

  const featuredProducts = Array.isArray(productState)
    ? productState?.filter((products) => products?.featuredProducts)
    : [];

  console.log("featuredProducts", featuredProducts);

  return (
    <>
      <div className="flex flex-col justify-center items-center mb-4">
        <h1 className="feature-section-head text-center mb-5 font-bold text-3xl">
          Our Popular Products
        </h1>
        {featuredProducts.length === 0 ? (
          <p className="text-center text-xl text-gray-600 mt-5">
            No products available
          </p>
        ) : (
          <div className="feature-card grid grid-cols-4 gap-4">
            {featuredProducts.map((item) => (
              <ProductCard key={item._id} data={item} />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default FeaturedProduct;
