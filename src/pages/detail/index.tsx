
import React from "react";
import {Card} from "src/components/card/card";
import { useAppSelector } from "src/redux/config-store";

function Detail() {
  const listProduct = useAppSelector((state) => state.productReducer.listProduct)
  return <div className="container">
    <div className="product-detail">

    </div>

    <div className="relate-product">
      <h2 className="text-center" style={{fontSize:40, fontWeight: 400,margin: "16px 150px"}}>-Realate Product -</h2>
      <div className="row">
        {
          listProduct.map(item =>{
            return <>
              <div className="col-4">
                <Card key={item.id} data={item}/>
              </div>
            </>
          })
        }
      </div>
    </div>
  </div>
}

export default Detail;
