import { useState } from "react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import gFetch from "../../../helpers/gFetch";
import ItemList from "../../ItemList/ItemList";
// import 'firebase/compat/auth'; 
// import 'firebase/compat/firestore';
import { collection, doc, getDocs, getFirestore, limit, orderBy, query, where } from 'firebase/firestore'
import "./ItemListContainer.css"
import Loading from "../../Loading/Loading";

function ItemListContainer({ greeting }) {


  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const { categoryId } = useParams()

  useEffect(() => {

    const db = getFirestore()
    const queryCollection = collection(db, 'products')

    if (categoryId) {

      const queryFiltred = query(queryCollection, where('category', '==', categoryId))
      getDocs(queryFiltred)
        .then(response => setProducts(response.docs.map(products => ({ id: products.id, ...products.data() }))))
        .catch((err) => console.log(err))
        .finally(() => setLoading(false))
      console.log(categoryId)

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
        <Loading/> :
        <ItemList products={products} />}
        </div>
    </section>


  )
}

export default ItemListContainer