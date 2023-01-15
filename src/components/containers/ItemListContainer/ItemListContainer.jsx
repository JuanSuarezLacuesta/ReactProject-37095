import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs, getFirestore, orderBy, query, where } from 'firebase/firestore'

import ItemList from "../../ItemList/ItemList";
import Loading from "../../Loading/Loading";

import "./ItemListContainer.css"

function ItemListContainer({ greeting }) {

  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const { categoryId } = useParams()

  // --- information from firebase db --- //
  
  useEffect(() => {

    const db = getFirestore()
    const queryCollection = collection(db, 'products')

    if (categoryId) {

      const queryFiltred = query(queryCollection, where('category', '==', categoryId))
      getDocs(queryFiltred)
        .then(response => setProducts(response.docs.map(products => ({ id: products.id, ...products.data() }))))
        .catch((err) => console.log(err))
        .finally(() => setLoading(false))

    } else {

      const queryPlaced = query(queryCollection, orderBy('price', 'asc'))
      getDocs(queryPlaced)
        .then(response => setProducts(response.docs.map(products => ({ id: products.id, ...products.data() }))))
        .finally(() => setLoading(false))
        .catch(err => console.log(err))

    }

  }, [categoryId])


  return (
    <section>
      <div className="greeting">{greeting}</div>

      <div className="position1">
        {loading ?
          <Loading /> :
          <ItemList products={products} />}
      </div>

    </section>


  )
}

export default ItemListContainer