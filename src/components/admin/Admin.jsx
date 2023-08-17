import { useEffect, useState } from 'react'
import Invoice from '../invoice/Invoice'

function Admin() {
    const [invoices, setinvoices] = useState([])
    let result = []


   

    useEffect(()=>{
      //traer todo los invoices

      setinvoices(
        [
          {
              id: 1,
              amount: "83110.63",
              date: "2023-7-8"
          },
          {
              id: 2,
              amount: "11467.85",
              date: "2023-7-8"
          },
          {
              id: 3,
              amount: "93025.61",
              date: "2023-7-8"
          },
          {
              id: 4,
              amount: "32569.64",
              date: "2023-7-8"
          },
          {
              id: 5,
              amount: "78965.49",
              date: "2023-7-8"
          }
      ]
        
      )

      

    }, [])

    invoices.forEach(({id,amount,date}) => {
      result.push(
        <Invoice key={id} amount={amount} id={id} date= {date}></Invoice>
      )

    })
    

  
    return (
      <>
      <section className=' grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 place-items-center'>
        {result}
      </section>
       
      </>
    )
  }
  
  export default Admin