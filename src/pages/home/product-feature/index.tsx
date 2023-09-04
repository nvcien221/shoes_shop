import React from "react";
import css from "./product-feature.module.scss";
import Card from "src/components/card/card";

function ProductFeature() {
  return (
    <div>
      <h2 className={css["heading"]}>Product Feature</h2>

      <Card data={{
          id : 1,
          name: '',
          alias: '',
          price: 58,
          description: '',
          shortDescription: '',
          feature: false, 
          quantity: 0,
          imge: '',
          categories: '',
      }} />
    </div>
  );
}

export default ProductFeature;
