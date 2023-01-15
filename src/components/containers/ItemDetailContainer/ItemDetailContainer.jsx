import { doc, getDoc, getFirestore } from 'firebase/firestore'

import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import ItemDetail from '../../ItemDetail/ItemDetail'
import Loading from '../../Loading/Loading'

function ItemDetailContainer() {

  const [product, setProduct] = useState({})
  const [loading, setLoading] = useState(true)
  const { productId } = useParams()

  // --- information from firebase db --- //
  useEffect(() =>{

    const db = getFirestore()
    const queryDoc = doc(db, 'products', productId)

    getDoc(queryDoc)
    .then (response => setProduct({id: response.id, ...response.data()}))
    .catch(err => console.log (err))
    .finally(() => setLoading(false))

  }, [])

  return (

    <div className='position'>

      {loading ? 
      <Loading/> : 
      <ItemDetail product={product}/> }
      
    </div>

  )}

export default ItemDetailContainer