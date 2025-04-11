import "../App.css";
const Nav=()=>{
    return(
       <><div className="navbar bg-base-100 shadow-sm flex justify-between max-w-[80%] mx-auto">
       <div className=" font-bold text-2xl text-amber-500">
         <span className="text-blue-500">Auction</span>Gallery
       </div>
       <div className="flex gap-4">
        <a href="Home">Home</a>
        <a href="Home">Auctions</a>
        <a href="Home">Categories</a>
        <a href="Home">How to works</a>
       </div>
       <div className="flex items-center">
       <i className="fa-solid fa-bell text-2xl mr-2 "></i>
         <div className="dropdown dropdown-end">
           <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
             <div className="w-10 rounded-full">
               <img
                 alt="Tailwind CSS Navbar component"
                 src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
             </div>
           </div>
           <ul
             tabIndex={0}
             className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
             <li>
               <a className="justify-between">
                 Profile
                 <span className="badge">New</span>
               </a>
             </li>
             <li><a>Settings</a></li>
             <li><a>Logout</a></li>
           </ul>
         </div>
       </div>
     </div></>
    )
}
export default Nav;