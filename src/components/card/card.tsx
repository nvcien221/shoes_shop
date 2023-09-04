import React from 'react'
import { NavLink } from 'react-router-dom'

const data ={
    id: 1,
    name: "Adidas Prophere",
    alias: "adidas-prophere",
    price: 350,
    feature: false,
    description: "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
    size: [
      "36",
      "37",
      "38",
      "39",
      "40",
      "41",
      "42"
    ],
    shortDescription: "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
    quantity: 995,
    image: "https://shop.cyberlearn.vn/images/adidas-prophere.png",
    categories: [
      {
        "id": "ADIDAS",
        "category": "ADIDAS"
      },
      {
        "id": "MEN",
        "category": "MEN"
      },
      {
        "id": "WOMEN",
        "category": "WOMEN"
      }
    ],
}
type TCard = {
  id : number,
  name: string,
  alias: string,
  price: number,
  feature: boolean,
  description: string,
  size: number,
  shortDescription: string,
  quantity: number,
  imge: string,
  categories: string,
}
type Props = {
  data: TCard;
}


export function Card(props: Props) {
  const {data} = props;
  return (
    <div className='card position-relative' style={{
      width:"334px", height:"369px",
      backgroundColor:"#F8F8F8", margin:"20px 0",boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)"}}>
      <div className='icon '>
        <div className='position-absolute ' style={{
          
          right: "26px",
          top:"30px",
        }}>
        <i className='fa fa-heart' style={{color:"#FB0B0B",fontSize:36,}}></i>
        </div>
      </div>
      <div style={{
        width:"210px", height:"168px",
        marginTop:"45px",
        marginLeft:"57px",
        backgroundColor:"#F8F8F8",
      }}>
      <img style={{ height:"100%"}} src={data.image} alt="..." />
      </div>
      <div className='card-body'>
        <h2 className='card-title'>Adidas Prophere</h2>
        <p className='card-dsc'>{data.shortDescription}</p>
      </div>
      <div className=' d-flex' style={{height:"64px"}}>
        <NavLink to={`/detail/${data.id}`} className={"btn border-none w-50"} style={{backgroundColor:"#9DE167",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"24px",fontWeight:400}}>
          Buy now
        </NavLink>
        <p className='product-price text-center w-50' style={{
          fontSize:"24px",
          fontWeight:600,
          marginBottom: 0,
          backgroundColor:"#DEDDDC",
          display:"flex",
          alignItems:"center",justifyContent:"center",
        }}>
          {data.price}$
        </p>
      </div>
    </div>
  )
}