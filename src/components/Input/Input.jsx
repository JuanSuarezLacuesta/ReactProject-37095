import { useState } from "react"

function Input({order}) {

    const [name, setName] = useState()

    const inputName = (event) => {
        const nameInfo = event.target.value
        setName(nameInfo)
    }
    const inputPhone = (event) => {
        const phone = event.target.value
        console.log(phone)
    }
    const inputEmail = (event) => {
        const email = event.target.value
        console.log(email)
    }
    const inputEmailConfirmation = (event) => {
        const email2 = event.target.value
        console.log(email2)
    }
    
    const inputInfo = (order) =>{
        const orderName = order.name
    }


  return (
    <div>
        <input type="text" name="full name" onKeyDown={inputName} />
        {/* <input type="text" name="full name" onKeyDown={inputEmail} />
        <input type="text" name="full name" onKeyDown={inputEmailConfirmation} />
        <input type="text" name="full name" onKeyDown={inputPhone} /> */}
    </div>
  )
}

export default Input