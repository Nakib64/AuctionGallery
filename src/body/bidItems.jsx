import React from 'react';
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import Heart from "react-animated-heart";

import { useState } from 'react';

const BidItems = ({data, handlefav}) => {
    
    const [bid, setBid] = useState(false)
            const bidBtn=()=>{      
                 setBid(true)
                
               handlefav(data)
            }
    return (
        <div className="flex items-center justify-center border-t-1 border-gray-300 py-3">
                                              
             <button className={bid && "text-red-500 cursor-not-allowed"} onClick={bidBtn} disabled={bid}>{bid? <FaHeart size={20}/>: <CiHeart  size={25}/>}</button> 
        </div>
    );
};

export default BidItems;