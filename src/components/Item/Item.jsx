import { memo } from "react"
import { Link } from "react-router-dom"


const Item = memo(({ product }) => {
  return (
      <Link to={`/detail/${product.id}`} >

        <button className="containerItem" key={product.id}>
          <div>
            <img className="picturesItems" src={product.img} alt="food" />
          </div>
          {product.name}
        </button>
        
      </Link>
  )
})

export default Item 