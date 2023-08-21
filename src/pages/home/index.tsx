import { useEffect } from "react";
import { getAllProduct } from "src/services/product.service";
import HomeCarousel from "./home-carousel";
import ProductFeature from "./product-feature";
function Home() {
  // useEffect không cho sử dụng async trực tiếp mà nên tạo một hàm vào gọi nó sau đó.
  useEffect(() => {
    // getAllProduct().then((resp) => {
    //   console.log("resp", resp);
    // });

    // Cách 1: mong muốn sử dụng async await - Tạo function
    // const get = async () => {
    //   const resp = await getAllProduct();

    //   console.log(resp);
    // };
    // getAllProduct là function async nên giá trị trả về luôn là một promise;

    // get();

    // Cách 2: mong muốn sử dụng async await - IIFE
    (async () => {
      const resp = await getAllProduct();

      console.log(resp);
    })();
  }, []);

  return (
    <div>
      <HomeCarousel />
      <ProductFeature />
    </div>
  );
}

export default Home;
