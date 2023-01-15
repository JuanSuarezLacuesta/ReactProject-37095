import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Check, X } from 'react-bootstrap-icons';

import { useCartContext } from '../../context/CartContext'
import Counter from '../Counter/Counter'

function ItemDetail({ product }) {

  const [isCount, setIsCount] = useState(true)
  const { addToCart, cartList } = useCartContext()
  let productStock = product.stock

  // --- add to cart function --- //

  const onAdd = (amount) => {
    addToCart({ ...product, amount })
    setIsCount(false)

  }

  // --- add to cart function disabled --- //
  
  const onFalse = () => {
    alert('NO MORE STOCK')
    setIsCount(true)
  }

  // --- if stock is false or empty disable --- //

  const stockState = () => {

    switch (productStock) {

      case true:
        return (
          <div>
            <div className='position'>
            <p>STOCK: <Check /></p>
            </div>
            {isCount ?
              <Counter
                end={10}
                initial={1}
                onAdd={onAdd}
              /> :
              <div>
                <Link to='/cart'>
                  <button className='counterBtn'> going to cart </button>
                </Link>
                <Link to='/home'>
                  <button className='counterBtn'> home </button>
                </Link>
              </div>
            } </div>)

      case false:
        return (
          <div className=''>
            <div className='position'>
              <p>STOCK: <X /> </p>
            </div>
            {isCount ?
              <Counter
                end={0}
                initial={0}
                onAdd={onFalse}
              /> :
              <div>
                <Link to='/cart'>
                  <button className='counterBtn'> going to cart </button>
                </Link>
                <Link to='/home'>
                  <button className='counterBtn'> home </button>
                </Link>
              </div>
            }
          </div>
        )

      case (0):
        return (
          <div className=''>
            <div className='position'>
              <p>STOCK: <X /> </p>
            </div>
            {isCount ?
              <Counter
                end={0}
                initial={0}
                onAdd={onFalse}
              /> :
              <div>
                <Link to='/cart'>
                  <button className='counterBtn'> going to cart </button>
                </Link>
                <Link to='/home'>
                  <button className='counterBtn'> home </button>
                </Link>
              </div>
            }
          </div>
        )

      default:
        return (
          <div className=''>
            <div className='position'>
              <p>STOCK: {productStock}</p>
            </div>
            {isCount ?
              <Counter
                end={10}
                initial={1}
                onAdd={onAdd}
              /> :
              <div>
                <Link to='/cart'>
                  <button className='counterBtn'> going to cart </button>
                </Link>
                <Link to='/home'>
                  <button className='counterBtn'> home </button>
                </Link>
              </div>
            }
          </div>
        )}
  }

  return (
    <section className='ItemDetailBox'>
      <div className=''>

        <div className='position'>
          <img src={product.img} alt="picture" className='picturesDetailItems' />
        </div>

        <div className='position titleText'>
          {product.name}
        </div>

      </div>


      <div className=''>

        <div className='position'>
          {product.description}
        </div>

        <div className='position'>
          <span className='priceText'>PRICE:</span>
          {product.price}$
        </div>

        <div className='position'>
          {stockState()}
        </div>
        
      </div>
    </section>

  )
}

export default ItemDetail