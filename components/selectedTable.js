import React, { useState, useEffect } from 'react'
import '../styles/cart.css'

const Cart = ({ cart, setCart, handleChange }) => {
  const [price, setPrice] = useState([])

  const [percentage, setPercentage] = useState({})

  const handleRemove = (id) => {
    const arr = cart.filter((item) => item.id !== id)
    setCart(arr)
    handlePrice()
  }

  const handlePrice = (e) => {
    let ans = 0
    cart.map(
      (item) => ((ans +=  item.price), console.log('ans' + ans)),
    )
    setPrice(ans)
  }
  useEffect(() => {
    handlePrice()
  })
  // handle input changes
  // const handleChange = (even) =>{
  //   const name = even.target.name;

  // }
  console.log('price' + price)
  const [choreDesc, setChoreDesc] = useState([]);
  console.log("choreDesc",choreDesc);
const addinput =()=>{
  
}
console.log("this is car render",cart);
  return (
    <dive>
      {cart.map((item) => (
        <div>
          <div className="cart_box" key={item.id}>
            <div className="cart_img">
              {/* <img src={item.img} alt="" /> */}
              <p>{item.Keyword}</p>
            </div>
            <input 
          name='choreDesc' 
          type='text'
          value={setChoreDesc}
          // onChange={e => handleChange(e.target.value)}
          // onChange={(e) => handleChange(item, e.target.value)}
        />
            <div>
            <button onClick={() => handleChange(item, 1)}>+</button>
            <button>{item.price}</button>
            <button onClick={() => handleChange(item, -1)}>-</button>
          </div>

            <div>
              <span>{item.price}</span>
              <button onClick={() => handleRemove(item.id)}>Remove</button>
            </div>
          </div>
        </div>
      ))}
      <div className="total">
        <span>Total % </span>
        <small pirce>
          {price > 100 || price < 100 ? ' must be 100 %' : price}
        </small>
      </div>
      {price > 100 || price < 100 ? '' : <button>submitt</button>}
    </dive>
  )
}

export default Cart
