import {FiMenu} from "react-icons/fi"
import {AiFillCloseCircle} from "react-icons/ai"
import { Link } from "react-router-dom";
import Footer from "../Components/Footer";
function HomeLayouts({children}){
    function changeWidth(){
        const drawerSide=document.getElementsByClassName("drawer-side")
        drawerSide[0].style.width="auto"
    }
    function hideDrawer(){
        const element=document.getElementsByClassName("drawer-toggle");
        element[0].checked=false;
        const drawerSide=document.getElementsByClassName("drawer-side")
        drawerSide[0].style.width=0;
        
    }
    return(
        <div className="min-h-[90vh]">
            <div className="drawer absolute left-0 z-50 w-fit ">
                <input className="drawer-toggle" id="my-drawer" type="checkbox"/>
                <div className="drawer-content">
                    <label htmlFor="my-drawer" className="cursor-pointer relative">
                        <FiMenu onClick={changeWidth}
                                size={"25px"}
                                className="font-bold text-white m-4"
                        />
                    </label>
                </div>
                <div className="drawer-side w-0 bg-gray-500">
                    <label htmlFor="my-drawer" className="drawer-overlay">

                    </label>
                    <ul className="menu p-4 w-48 sm:w-80 bg-gray-100 text-base-content relative">
                        <li className="  w-fit absolute right-2 z-50">
                            <button onClick={hideDrawer}>
                                <AiFillCloseCircle/>
                            </button>
                        </li>
                        <li>
                            <Link to="/">Home</Link>

                        </li>
                        <li>
                            <Link to="/courses">All courses</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact us</Link>
                        </li>
                        <li>
                            <Link to="/about">About us</Link>
                        </li>

                    </ul>
                </div>
            </div>
            {children}
            <Footer/>
        
        </div>
    )

}
export default HomeLayouts