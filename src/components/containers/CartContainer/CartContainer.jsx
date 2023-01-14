import { addDoc, collection, connectFirestoreEmulator, getFirestore } from "firebase/firestore"
import { useState } from "react"
import { useCartContext } from "../../../context/CartContext"
import Input from "../../Input/Input"

const CartContainer = () => {

  const { cartList, emptyCart, totalPrice, deleteItem } = useCartContext()

  const [orderDone, setOrderDone] = useState(true)

  
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: ""
  })

  const handleInputChange = (event) => {
    
    const { name, value } = event.target
    
    setValues({
      ...values,
      [name]: value
    })
  }
  
  const createOrder = () => {
    
    console.log(values)
    
    
    const order = {}
    order.buyer = { name: values.name, phone: values.phone, email: values.email }
    order.item = cartList.map(({ name, id, price }) => ({ name, id, price }))
    order.total = totalPrice()


    const db = getFirestore()
    const queryOrder = collection(db, 'orders')

    addDoc(queryOrder, order)
      .then(response => console.log(response))

    setOrderDone(false)
  }

  function orderStatus() {
    return (
      <p>{(totalPrice() === 0) ? 'YOUR CART IS EMPTY' : ('Your total price is:' + " " + totalPrice() + '$')}</p>
    )
  }

  function createOrderBtn() {
    
    if ( totalPrice() === 0 ) {
      return(
        <div className="placement">
          <button className="counterBtn" onClick={emptyCart}>EMPTY CART</button>
          <button type="submit" className="createOrderBtn" disabled onClick={createOrder}>CREATE ORDER</button>
        </div>
      )
    } else {
      return(
        <div className="placement">
          <button className="counterBtn" onClick={emptyCart}>EMPTY CART</button>
          {orderDone ? 
          <button type="submit" className="createOrderBtn"  onClick={createOrder}>CREATE ORDER</button> : 
          <div><p>working</p></div>  }
        </div>
      )
    }
  }

  function Form() {
    
    if ( totalPrice() === 0 ) {
      return(
        <form className="placement1">
          <h2 className="titleInfo">FILL YOUR INFORMATION</h2>
          <label className="form-label">Full Name</label>
          <input className="inputStyle" type="text" name="name" disabled onChange={handleInputChange} />
          <label className="form-label">Email</label>
          <input className="inputStyle" type="text" name="email" disabled onChange={handleInputChange} />
          <label className="form-label">Phone</label>
          <input className="inputStyle" type="number" name="phone" disabled onChange={handleInputChange} />
          </form>
      )
    } else {
      return(
        <form className="placement1">
          <h2 className="titleInfo">FILL YOUR INFORMATION</h2>
          <label className="form-label">Full Name</label>
          <input className="inputStyle" type="text" name="name"  onChange={handleInputChange} />
          <label className="form-label">Email</label>
          <input className="inputStyle" type="text" name="email"  onChange={handleInputChange} />
          <label className="form-label">Phone</label>
          <input className="inputStyle" type="number" name="phone"  onChange={handleInputChange} />
          </form>
      )
    }
  }




  return (
    <section className="container">
      <div className="row">
        {/* items */}
        <div className="col-lg-6 productsStyle ">

          {cartList.map(products => <li className="productsListStyle">
            <img className="productImgs" src={products.img} alt="images" />- {products.name} - {products.amount}
            <button className="productsDeleteBtn" onClick={() => deleteItem(products.id)}>x</button></li>)}

          {/* order empty? */}
          <div className="orderStatus">
            {orderStatus()}
          </div>
          {/* order empty end */}

        </div>
        {/* items end */}

        {/* create order btn */}
        <div className="col-lg-6">
          {Form()}
          {createOrderBtn()}

        </div>
        {/* create order btn end */}

      </div>
    </section>
  )
}
export default CartContainer  