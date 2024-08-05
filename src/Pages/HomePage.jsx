import { Link } from "react-router-dom"
import HomeLayouts from "../Layouts/HomeLayouts"

function HomePage(){
    return (
        <HomeLayouts>
            <div className="pt-10 text-white flex items-center justify-center gap-10 mx-16 h-[90vh]">
                <div className="w-1/2 space-y-6">
                    <h1 className="text-2xl font-semibold">
                        Find out best
                        <span className="text-yellow-500 font-bold"> Online Courses</span>
                    </h1>
                    <p className="text-xl text-gray-200 ">
                        We have a large library of courses taught by highly skilled and qualify faculty at a very affordable cost
                    </p>
                    <div className="space-x-6">
                        <Link to="/courses">
                            <button className="bg-yellow-500 px-3 py-3 rounded-md font-semibold text-1xl cursor-pointer hover:bg-yellow-600 transition-all ease-in-out duration-300">
                                Explore Courses
                            </button>

                        </Link>
                        <Link to="/contact">
                            <button className="border border-yellow-500 px-3 py-3 rounded-md font-semibold text-1xl cursor-pointer hover:bg-yellow-600 transition-all ease-in-out duration-300">
                                Contact Us
                            </button>

                        </Link>
                    </div>
                
                </div>
                <div className="w-1/2 flex items-center justify-center  ">
                    <img className="rounded-full"   alt="homepage image" src=" https://img.freepik.com/free-vector/flat-boy-working-call-center-background_23-2148180070.jpg?uid=R142114299&ga=GA1.1.374287107.1689482951&semt=ais_hybrid"/>
                </div>
            </div>
        </HomeLayouts>
    )

}
export default HomePage