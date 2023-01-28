import React, { useState, useEffect } from 'react'
import DisplayFetchData from './components/displayFetchData'
import Navbar from './components/navbar'
import SelectedTable from './components/selectedTable'
import ApiData from './Data.json'

const DisplayTable = () => {
  const [show, setShow] = useState(true)
  const [cart, setCart] = useState([])

    const handleClick = (item) => {
      console.log("display table item",item);
      if (cart.indexOf(item) !== -1) return
      setCart([...cart, item])
    }

  const handleChange = (item,d) => {
    const ind = cart.indexOf(item)
    const arr = cart
    console.log("d",d)
    console.log("arr[ind].amount",arr[ind].amount+" cart",cart)
    arr[ind].price += d

    if (arr[ind].price === 0) arr[ind].price = 1
    setCart([...arr])
  }

  return (
    <React.Fragment>
      {/* <Navbar setShow={setShow} size={cart.length} /> */}

      <div className="row">
        <div className="col" style={{ backgroundColor: 'gray' }}>
          <DisplayFetchData handleClick={handleClick} data={ApiData} />
        </div>
        <div className="col-4"
          style={{ backgroundColor: 'greenyellow', padding: 50 }}
        >
          <SelectedTable
            cart={cart}
            setCart={setCart}
            handleChange={handleChange}
          />
        </div>
      </div>
    </React.Fragment>
  )
}

export default DisplayTable
