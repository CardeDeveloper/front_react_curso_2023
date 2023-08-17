import { useEffect, useState } from 'react'

function Stats() {
    const [invoices, setinvoices] = useState([])


   

    useEffect(()=>{
      //traer las pweticiones

      

    }, [])
    

  
    return (
      <>
      <div className="max-w-full mx-4 py-6 sm:mx-auto sm:px-6 lg:px-8">
        <div className="sm:flex sm:space-x-4">
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow transform transition-all mb-4 w-full sm:w-1/3 sm:my-8">
                <div className="bg-white p-5">
                    <div className="sm:flex sm:items-start">
                        <div className="text-center sm:mt-0 sm:ml-2 sm:text-left">
                            <h3 className="text-sm leading-6 font-medium text-gray-400">Total de facturas</h3>
                            <p className="text-3xl font-bold text-black">71,897</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow transform transition-all mb-4 w-full sm:w-1/3 sm:my-8">
                <div className="bg-white p-5">
                    <div className="sm:flex sm:items-start">
                        <div className="text-center sm:mt-0 sm:ml-2 sm:text-left">
                            <h3 className="text-sm leading-6 font-medium text-gray-400">Monto Total</h3>
                            <p className="text-3xl font-bold text-black">580,980.9</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow transform transition-all mb-4 w-full sm:w-1/3 sm:my-8">
                <div className="bg-white p-5">
                    <div className="sm:flex sm:items-start">
                        <div className="text-center sm:mt-0 sm:ml-2 sm:text-left">
                            <h3 className="text-sm leading-6 font-medium text-gray-400">Facturas cobradas</h3>
                            <p className="text-3xl font-bold text-black">99.57%</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
      </>
    )
  }
  
  export default Stats