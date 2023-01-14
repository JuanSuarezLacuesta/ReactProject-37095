import { memo } from "react"
import Item from "../Item/Item"


const ItemList = memo(
  ({products }) => {
  
    return (
      <div>
        {products.map(product => <Item product= {product}/>)}
      </div>
      )
  }
)  

export default ItemList