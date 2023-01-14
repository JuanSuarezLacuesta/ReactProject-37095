import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCartContext } from '../../context/CartContext'
import Counter from '../Counter/Counter'

function ItemDetail({ product }) {

  const [isCount, setIsCount] = useState(true)

  const { addToCart, cartList } = useCartContext()

  const onAdd = (amount) => {
    // console.log('cantidad seleccionada',amount )
    addToCart({ ...product, amount })
    setIsCount(false)

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
      </div>
    </section>

  )
}

export default ItemDetail