
import { useEffect, useState } from 'react'


function Invoice({id, amount, date}) {
    const [amount2, setAmount] = useState(amount)
    const [editable , setEditable] = useState(true)
    
    useEffect(()=>{
      console.log(amount2)
    },[amount2])
    

    const editFunction = ()=>{
      setEditable(!editable) 

    }

    const saveNewValue = ()=>{
      //TODO hacer la funcion conel fetch para mandar la peticion enla API
      setEditable(!editable)


    }

    const deleteRecord = ()=>{
      //TODO hacer el fetch para borrar el esta factura en la API.
      console.log(id)
    }
  
    return (
    <>
       <article className="bg-white rounded shadow border p-6 w-64 flex flex-col center-align-items">
        <h5 className="text-black text-3xl font-bold mb-4 mt-0 text-center">#{id}</h5>
        <section className="flex flex-col py-px">
          <div className={`${!editable ? 'hidden ' : ''} text-black text-sm text-center font-bold`}>${amount2}</div>
          <input onChange={(val) => setAmount(val.target.value)} type="text" value={amount2} className={`${editable ? 'hidden ' : ''} bg-white rounded shadow border text-black text-center`}/>
          <div className="text-gray-700 text-sm text-center mb-4">{date}</div>
        </section>
        <button className={`${!editable ? 'hidden ' : ''} bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded mb-2`} onClick={editFunction}> Editar</button>
        <button className={`${editable ? 'hidden ' : ''} bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mb-2`} onClick={saveNewValue}> Guardar</button>
        <button onClick={deleteRecord} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
          Eliminar
        </button>
      </article>


    </>
    )
  }
  
  export default Invoice;