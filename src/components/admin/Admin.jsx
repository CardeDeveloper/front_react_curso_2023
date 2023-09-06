import { useEffect, useState, useCallback } from 'react'
import Invoice from '../invoice/Invoice'
import { useFetch } from '../../hooks/useFetch'
import { useSelector} from "react-redux"
import { selectCurrentToken } from "../../auth/authSlice"
import FormInvoice from '../invoice/FormInvoice'

function Admin() {
  const token = useSelector(selectCurrentToken)
    const {invoices, loading, error} = useFetch("http://localhost:3000/invoices", {
      headers:{
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'x-access-token' : token
      }})

      const [result, setResult] = useState([])
      const [modal, setModal] = useState(true)

      const newRecord = () =>{
        


        setModal(!modal)

        

      }

      useEffect(() =>{
        
        fetch("http://localhost:3000/invoices",{
          headers:{
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'x-access-token' : token
          }})
      .then((response) => response.json())
      .then((json) => {

       setResult(json)
      })
      .catch((error) => {
        if (error.name === "AbortError") {
          console.log("Cancelled request");
        } else {
          console.log(error)
        }
      })
      },[])

      const filterInvoices = useCallback((e) => {
        setResult(invoices => [...invoices, e])
      }, []);


   
      if (loading) {
        return <p>Loading...</p>;
      }
    
      if (error) {
        return <p>An error occurred: {error.message}</p>;
      }

    return (
      <>
      <button onClick={newRecord} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Nuevo</button>
      <FormInvoice onChange={filterInvoices} initalState={true} isHidden={modal}></FormInvoice>
      <section className=' grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 place-items-center'>
        {
           result?.map(({id,amount,date}) => (
              <Invoice key={id} amount={amount} id={id} date= {date}></Invoice>
      
           ))
        }
      </section>
       
      </>
    )
  }
  
  export default Admin