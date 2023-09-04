import { createSlice } from '@reduxjs/toolkit'

export ProductModel = {
    id : number,
    name: string,
    alias: string,
    price: number,
    description: string,
    shortDescription: string,
    feature: false, 
    quantity: number,
    imge: string,
    categories: string,


}

export type ProducState = {
    arrProduct: ProductModel[]
}

const initialState:ProductState = {
    arrProduct = [
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
}

const productReducer = createSlice({
  name: 'productReducer',
  initialState,
  reducers: {}
});

export const {} = productReducer.actions

export default productReducer.reducer