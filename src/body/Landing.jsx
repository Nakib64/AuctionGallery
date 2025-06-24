import './landing.css'
const Landing=()=>{
    return(
        <>
            <div className="w-full lg:h-[93vh] px-5 py-30 bg-[url(https://i.ibb.co.com/6cZMyw7d/Banner-min.jpg)]  bg-cover flex items-center">
             <div className="w-full sm:container  2xl:max-w-[80%] mx-auto">
                <div className="md:w-[50%] flex flex-col gap-5">
                     <h1 className="p text-white text-4xl lg:text-5xl font-bold overflow-hidden whitespace-nowrap border-r-1 w-[50%] xl:w-full ">Bid on Unique Items !!!</h1>
                     <p className="text-white opacity-70 text-xl">Discover rare collectibles, luxury goods, and vintage treasures in our curated auctions</p>
                     <button className="bg-white py-3 px-5 w-fit rounded-2xl"><a href="#bid">Explore Auctions</a></button>
                 </div>
             </div>
             </div>

        </>
    )
}
export default Landing;