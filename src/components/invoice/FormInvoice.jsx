import { useEffect, useState, useRef } from 'react'
import { useSelector} from "react-redux"
import { selectCurrentToken } from "../../auth/authSlice"


export default function FormInvoice({initalState,isHidden, onChange}){
    const token = useSelector(selectCurrentToken)


    const [Hidden, setHidden] = useState(initalState)

    const hideModal = ()=> setHidden(!Hidden)
    const [isMountRef, setIsMountRef] = useState(true);

    const[amount, setAmount] = useState()
    const [date, setDate] = useState()

    useEffect(() =>{
        if(isMountRef){
            setIsMountRef(false)
        }else{
            setHidden(false)
        }
        

    },[isHidden])

    const saveNewRecord = () =>{
        fetch("http://localhost:3000/invoices/",{
          method:'POST',
          headers:{
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'x-access-token' : token
          },
          body:JSON.stringify({amount: amount, date: date})
        })
      .then((response) => response.json())
      .then((json) => {

        onChange(json)
      })
      .catch((error) => {
        if (error.name === "AbortError") {
          console.log("Cancelled request");
        } else {
          console.log(error)
        }
      })

    }


    return(
        <>
        
        <section className={Hidden ? 'hidden' : ''}>
            <div id="defaultModal" tabindex="-1" className="fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full flex items-center justify-center">
                <div className="relative w-full max-w-2xl max-h-full">
                 
                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                       
                        <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                
                            </h3>
                            <button onClick={hideModal} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="defaultModal">
                                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                                </svg>
                                <span className="sr-only">Close modal</span>
                            </button>
                        </div>
                        
                        <div className="p-6 space-y-6">
                            {/** Modal body */}

                            <div>
                                <label htmlFor="amount" className="block text-sm font-medium leading-6 text-white-900">
                                    Amount
                                </label>
                                <div className="mt-2">
                                    <input
                                    id="amount"
                                    name="amount"
                                    type="number"
                                    value={amount}
                                    onChange={e => setAmount(e.target.value)}
                                    autoComplete="amount"
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-white-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                                </div>

                                <div>
                                <div className="flex items-center justify-between">
                                    <label htmlFor="date" className="block text-sm font-medium leading-6 text-white-900">
                                    Date
                                    </label>
                                </div>
                                <div className="mt-2">
                                    <input
                                    id="date"
                                    value={date}
                                    onChange={e => setDate(e.target.value)}
                                    name="date"
                                    type="date"
                                    autoComplete="date"
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-white-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                        </div>

                        <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                            <button data-modal-hide="defaultModal" type="button" onClick={saveNewRecord} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Guardar</button>
                            <button data-modal-hide="defaultModal" type="button"  onClick={hideModal} className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Cancelar</button>
                        </div>
                    </div>
                </div>
            </div>



            </section>
        </>
    )
}