import {FiMenu} from "react-icons/fi"
import {AiFillCloseCircle} from "react-icons/ai"
import { Link, useNavigate } from "react-router-dom";
import Footer from "../Components/Footer";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../Redux/Slices/AuthSlice";
function HomeLayouts({children}){
    const dispatch=useDispatch()
    const navigate=useNavigate()
    //for checking if user is logged in
    const isLoggedIn=useSelector((state)=>state?.auth?.isLoggedIn)
    //for displaying the options acc to role
    const role=useSelector((state)=>state?.auth?.role)
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
    async function handleLogout(e){
        e.preventDefault();
        const res=await dispatch(logout())
        navigate("/")
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
                    <ul className="menu h-[100%] p-4 w-48 sm:w-80 bg-gray-100 text-base-content relative">
                        <li className="  w-fit absolute right-2 z-50">
                            <button onClick={hideDrawer}>
                                <AiFillCloseCircle/>
                            </button>
                        </li>
                        <li className="color-gray-400">
                            <Link to="/">Home</Link>

                        </li>
                        {isLoggedIn && role=="ADMIN" && (
                            <li>
                                <Link to="/admin/dashboard">Admin Dashboard
                                
                                </Link>
                            </li>
                        )}
                        {isLoggedIn && role=="ADMIN" && (
                            <li>
                                <Link to="/course/create">Create new course
                                
                                </Link>
                            </li>
                        )}
                        <li>
                            <Link to="/courses">All courses</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact us</Link>
                        </li>
                        <li>
                            <Link to="/about">About us</Link>
                        </li>
                        {!isLoggedIn && (
                        <li className="absolute bottom-2 w-[90%]">
                            <div className="w-full flex items-center justify-center">
                                <button className="bg-gray-400 btn-primary px-4 py-1 font-semibold rounded-md w-full">
                                    <Link to="/Login">Login</Link>
                                </button>
                                <button className="bg-gray-400 btn-secondary px-4 py-1 font-semibold rounded-md w-full">
                                    <Link to="/Signup">Signup</Link>
                                </button>
                            </div>

                        </li>
                        )}
                        {isLoggedIn && (
                        <li className="absolute bottom-2 w-[90%]">
                            <div className="w-full flex items-center justify-center">
                                <button className="bg-gray-400 btn-primary px-4 py-1 font-semibold rounded-md w-full">
                                    <Link to="/user/profile">Profile</Link>
                                </button>
                                <button className="bg-gray-400 btn-secondary px-4 py-1 font-semibold rounded-md w-full">
                                    <Link onClick={handleLogout}>Logout</Link>
                                </button>
                            </div>

                        </li>
                        )}

                    </ul>
                </div>
            </div>
            {children}
            <Footer/>
        
        </div>
    )

}
export default HomeLayouts