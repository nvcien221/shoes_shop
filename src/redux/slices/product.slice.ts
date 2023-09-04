import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  listProduct: [
    {
        "id": 2,
        "name": "Adidas Prophere Black White",
        "alias": "adidas-prophere-black-white",
        "feature": false,
        "price": 450,
        "description": "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
        "shortDescription": "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
        "image": "https://shop.cyberlearn.vn/images/adidas-prophere-black-white.png"
    }
  ],
};

const productSlice = createSlice({
  name: "productSlice",
  initialState,
  reducers: {
    // name + reducer: productSlice/setListProduct
    setListProduct: (state, action) => {

      state.listProduct = action.payload;

      // Cách cũ. có return
      // return {
      //   ...state,
      //   listProduct: action.payload,
      // };
    },
  },
});
export const {setListProduct} = productSlice.actions;

export default productSlice.reducer;

// ----- Cách tạo ra create slice -----
const __createSlice = () => {
  return {
    reducer: (state = initialState, action: any) => {
      switch (action.type) {
        case "": {
          //
        }
      }
    },
  };
};


