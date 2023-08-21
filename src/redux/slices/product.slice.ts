import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  listProduct: [],
};

const productSlice = createSlice({
  name: "productSlice",
  initialState,
  reducers: {
    setListProduct: (state, actiton) => {
      //
    },
  },
});

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

const number = 1;

// cham hon, do ton tai nguyen
switch (number) {
  case 1: {
    console.log("so mot");
    break;
  }
  default:
    console.log("....");
}
// nhanh hon, ton tai nguyen
const obj = {
  "1": () => {
    console.log("so mot");
  },
  "2": () => {
    console.log("so hai");
  },
};

obj[1]();

// mapper
