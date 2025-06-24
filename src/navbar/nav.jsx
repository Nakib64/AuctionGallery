import "../App.css";
import { RiMenu2Fill } from "react-icons/ri";

const scrollToSection = () => {
  const section = document.getElementById("bid");
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};
const scrollToFooter = () => {
  const footer = document.getElementById("footer");
  if (footer) {
    footer.scrollIntoView({ behavior: "smooth" });
  }
};

const Nav=()=>{
    return(
       <><div className="navbar bg-base-100 shadow-sm flex justify-between mx-auto mx-auto sticky top-0">
        <div className="dropdown dropdown-start xl:hidden">
         <div tabIndex={0} role="button" className=""><RiMenu2Fill size={30}/>
         </div>
         <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
           <li><a href="">Home</a></li>
            <li><a  onClick={scrollToSection} className="cursor-pointer">Auction</a></li>
            <li><a onClick={scrollToFooter} className="cursor-pointer">Catagories</a></li>
            <li><a onClick={scrollToFooter} 
            className="cursor-pointer">How to works</a></li>
         </ul>
</div>
       <div className=" font-bold text-2xl text-amber-500">
         <span className="text-blue-500">Auction</span>Gallery
       </div>

       <div className=" gap-4 hidden xl:flex">
        <a href="index.html">Home</a>
        <a onClick={scrollToSection} className="cursor-pointer" >Auctions</a>
        <a onClick={scrollToFooter} className="cursor-pointer" >Categories</a>
        <a onClick={scrollToFooter}  className="cursor-pointer">How to works</a>
       </div>
       <div className="flex items-center">
       <i className="fa-solid fa-bell text-2xl mr-2 "></i>
         <div className="dropdown dropdown-end">
           <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
             <div className="w-10 rounded-full">
               <img
                 alt="Tailwind CSS Navbar component"
                 src="https://i.ibb.co.com/qM7St7Sz/IMG-20250407-182237.jpg" />
             </div>
           </div>
           <ul
             tabIndex={0}
             className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
             <li>
               <a className="justify-between" href="https://www.facebook.com/nafizuddowla.nokib" target="_blank">
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