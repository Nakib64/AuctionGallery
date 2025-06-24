const Footer=()=>{
    return(
        <div className="py-20 flex items-center flex-col gap-4" id="footer">
            <div className=" font-bold text-2xl text-amber-500">
             <span className="text-blue-500">Auction</span>Gallery
            </div>
       <div className="flex gap-4">
        <a href="">Bid.</a>
        <a href="">Win.</a>
        <a href="">Own</a>
       </div>

       <div className="flex flex-col gap-1 items-center xl:flex-row xl:gap-8">
        <a href="">Home</a>
        <a href="">Auctions</a>
        <a href="">Categories</a>
        <a href="">How to works</a>
       </div>

       <h1>© 2025 AuctionHub. All rights reserved.</h1>
        </div>
    )
}

export default Footer;