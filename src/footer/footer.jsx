const Footer=()=>{
    return(
        <div className="py-20 flex items-center flex-col gap-4">
            <div className=" font-bold text-2xl text-amber-500">
             <span className="text-blue-500">Auction</span>Gallery
            </div>
       <div className="flex gap-4">
        <a href="Home">Bid.</a>
        <a href="Home">Win.</a>
        <a href="Home">Own</a>
       </div>

       <div className="flex gap-8">
        <a href="Home">Home</a>
        <a href="Home">Auctions</a>
        <a href="Home">Categories</a>
        <a href="Home">How to works</a>
       </div>

       <h1>© 2025 AuctionHub. All rights reserved.</h1>
        </div>
    )
}

export default Footer;