import React, { useEffect, useState } from 'react';
import { FaDeleteLeft } from "react-icons/fa6";
import { ToastContainer, toast } from 'react-toastify';
import BidItems from './bidItems';



const Bid = () => {

         
         
        const [fav, setfav]= useState([])
        const [cost, setcost] = useState(0)
        const handlefav=(data)=>{
            const newfav= [...fav, data]
            console.log(newfav);
            setfav(newfav)
            console.log(fav)
            setcost(cost+ data.currentBidPrice)
            toast("Item added!")
        }
        const handleDelete=(data)=>{
            setcost(cost- data.currentBidPrice)
            const newfav= fav.filter(singleFav=>singleFav !==data)
            setfav(newfav)
        }
    
    const [data, setData]= useState([])
    
    useEffect(()=>{
        fetch("data.json").then(res=>res.json())
        .then(data=>setData(data))
    }, [])
    

    
    return (
        
        <div className='w-full bg-gray-100 mt-16' id='bid'>
            <ToastContainer autoClose={1000} />
            <div className='w-full sm:container 2xl:max-w-[80%] mx-auto py-12'>
               <h1 className='text-blue-900 font-bold text-2xl'>Active Auctions</h1>
               <p>Discover and bid on extraordinary items</p>
               <div className='w-full flex gap-3 flex-col lg:flex-row'>
                    <div className='xl:w-[70%] mx-1 sm:w-full flex flex-col border-1 rounded-2xl xl:grid xl:grid-cols-6 pl-3 border-gray-300 text-gray-900 bg-white '>
                        <div className='col-span-3 py-3 font-semibold border-b-1 border-gray-300'>Items</div>

                        <div className='flex items-center justify-center py-3 font-semibold border-b-1 border-gray-300'>Current Bid</div> 

                        <div className="flex items-center justify-center py-3 font-semibold border-b-1 border-gray-300">Time Left</div>

                        <div className="flex items-center justify-center py-3 font-semibold border-b-1 border-gray-300">Bid Now</div>
                        {
                            data.map(data=>{
                                
                                
                            
                                return (
                                    <>
                                    <div className='xl:col-span-3 flex flex-col gap-2 border-t-1 border-gray-300 py-3'>
                                        
                                        <div className='w-15'>
                                            <img src={data.image} alt="" className='  w-14 h-14 rounded-lg ' />
                                        </div>
                                        <h2 className='sm:text-[10px] overflow-hidden'>{data.title}</h2>
                                    </div>

                                    <div className='flex items-center justify-center border-t-1 border-gray-300 py-3'>${data.currentBidPrice}</div> 

                                    <div className="flex items-center justify-center border-t-1 border-gray-300 py-3">{data.timeLeft}</div>
                                    <BidItems handlefav={handlefav} data={data}></BidItems>
                                    </>
                                )
                            })
                        }
                    </div>
                    <div className='xl:w-[30%] mx-1 border-1 border-gray-300 bg-white rounded-2xl h-fit '>
                        <div className='py-3 border-b-1 border-gray-300 text-blue-900 font-bold text-center'> 
                            🖤 Favourite Items</div>
                            {
                               (fav.length===0)?
                                (
                                    <div  className='flex border-b-1 border-gray-300 text-center gap-4 flex-col'>
                                    <h1>No favourites yet!</h1>
                                    <p>Click the heart icon on any item to add it to your favorites</p>
                                    </div>
                                ):
                                fav.map(data=>{                
                                    return(
                                        <div className='flex border-b-1 border-gray-300 '>
                                            <div className='flex w-[90%] p-3 text-sm gap-2'>
                                                <div >
                                                    <img src={data.image} alt="" className='aspect-square h-12 rounded-lg' />
                                                </div>  
                                                <div>
                                                <h2>{data.title}</h2>
                                                <div className='flex gap-16'>
                                                <h4>${data.currentBidPrice}</h4>
                                                <h4>bids: {data.bidsCount}</h4>
                                                </div>
                                                </div>
                                            </div>
                                            <div className='flex items-center justify-center'>
                                                <button onClick={()=>handleDelete(data)}><FaDeleteLeft size={25}/>
                                                </button>
                                            </div>
                                        </div>
                                    )
                                })
                            
                            }
                        <div className='p-3  border-gray-300 flex justify-between font-bold text-center'>
                            <h1>Total bid amount: </h1>
                            <h1>${cost}</h1>
                        </div>
                    </div>
                    
               </div>
            </div>
        </div>
    );
};

export default Bid;