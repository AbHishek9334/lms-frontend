import { useDispatch, useSelector } from "react-redux"
import HomeLayouts from "../../Layouts/HomeLayouts"
import {ArcElement,Tooltip,Legend,CategoryScale,Chart as ChartJS,LinearScale,BarElement,Title} from "chart.js"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
import { deleteCourse, getAllCourses } from "../../Redux/Slices/CourseSlice"
import { getStatsData } from "../../Redux/Slices/StatSlice"
import { getPaymentRecord } from "../../Redux/Slices/RazorpaySlice"
import {FaUsers} from "react-icons/fa"
import {FcSalesPerformance} from "react-icons/fc"
import {GiMoneyStack} from "react-icons/gi"
import {Bar, Pie} from "react-chartjs-2"
import { BsCollectionPlayFill, BsTrash } from "react-icons/bs"
ChartJS.register(ArcElement,Tooltip,Legend,CategoryScale,LinearScale,BarElement,Title)
function AdminDashboard(){
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const {allUsersCount,subscribedCount}=useSelector((state)=>state.stat)
    const {allPayments,finalMonths,monthlySalesRecord}=useSelector((state)=>state.razorpay)
    console.log(allUsersCount,subscribedCount)
    const userData={
        labels:["RegisteredUser","EnrolledUser"],
        fontColor:"white",
        datasets:[
            {
                label:"User Details",
                data:[allUsersCount,subscribedCount],
                backgroundColor:["yellow","green"],
                borderWidth:1,
                borderColor:["yellow","green"]
            }
        ]
    }
    const salesData={
        labels:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],
        fontColor:"white",
        datasets:[
            {
                label:"Sales/Month",
                data:monthlySalesRecord,
                backgroundColor:["rgb(255,99,132)"],
                borderColor:["white"],
                borderWidth:2
            }
        ]
    }
    const myCourses=useSelector((state)=>state?.courses?.courseData)
    async function onCourseDelete(id){
        if(window.confirm("Are you sure you want to delete the course")){
            const res=await dispatch(deleteCourse(id))
            if(res?.payload?.success){
                await dispatch(getAllCourses())
            }
        }
    }
    useEffect(()=>{
        (
            async ()=>{
                await dispatch(getAllCourses())
                await dispatch(getStatsData())
                await dispatch(getPaymentRecord())
            }
        )()
    },[])
   
    return(

        <HomeLayouts>
            <div className="min-h-[90vh] pt-5 flex flex-col flex-wrap gap-10 text-white">
                <h1 className="text-center text-5xl font-semibold text-yellow-500">
                    Admin Dashboard
                </h1>
                <div className="grid grid-cols-2 gap-5 m-auto mx-10">
                    <div className="flex flex-col items-center gap-10 p-5 shadow-lg rounded-md">
                        <div className="w-80 h-80">
                            <Pie data={userData}/>
                        </div>
                        <div className="grid grid-cols-2 gap-5">
                            <div className="flex items-center justify-between p-5 gap-5 rounded-md shadow-md">
                                <div className="flex flex-col items-center">
                                    <p className="font-semibold">
                                        Registered Users
                                    </p>
                                    <h3 className="text-4xl font-bold">
                                        {allUsersCount}
                                    </h3>
                                </div>
                                <FaUsers className="text-yellow-500 text-5xl"/>
                            </div>
                            <div className="flex items-center justify-between p-5 gap-5 rounded-md shadow-md">
                                <div className="flex flex-col items-center">
                                    <p className="font-semibold">
                                        Enrolled Users
                                    </p>
                                    <h3 className="text-4xl font-bold">
                                        {subscribedCount}
                                    </h3>
                                </div>
                                <FaUsers className="text-green-500 text-5xl"/>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-center gap-10 p-5 shadow-lg rounded-md">
                        <div className="h-80 w-full relative">
                            <Bar data={salesData}/>
                        </div>
                        <div className="grid grid-cols-2 gap-5">
                        <div className="flex items-center justify-between p-5 gap-5 rounded-md shadow-md">
                                <div className="flex flex-col items-center">
                                    <p className="font-semibold">
                                        Subscription Count
                                    </p>
                                    <h3 className="text-4xl font-bold">
                                        {allPayments?.count}
                                    </h3>
                                </div>
                                <FcSalesPerformance className="text-yellow-500 text-5xl"/>
                            </div>
                            <div className="flex items-center justify-between p-5 gap-5 rounded-md shadow-md">
                                <div className="flex flex-col items-center">
                                    <p className="font-semibold">
                                        Total Revenue
                                    </p>
                                    <h3 className="text-4xl font-bold">
                                        {allPayments?.count*499}
                                    </h3>
                                </div>
                                <GiMoneyStack className="text-green-500 text-5xl"/>
                            </div>

                        </div>
                    </div>
                </div> 
                <div className="mx-[10%] w-[80%] self-center flex flex-col items-center justify-center gap-10 margin-bottom">
                    <div className="flex w-full items-center justify-between">
                        <h1 className="text-center text-3xl font-semibold">
                            Courses overview
                        </h1>
                        <button className=" w-fit bg-yellow-500 hover:bg-yellow-600 transition-all ease-in-out duration-300 rounded py-2 px-4 font-semibold text-lg cursor-pointer" 
                            onClick={()=>{
                                    navigate("/course/create")
                        }}>Add course

                        </button>
                    </div>
                    <table className=" table overflow-x-scroll">
                        <thead className="text-white">
                            <tr>
                                <th>SNo</th>
                                <th>CourseTitle</th>
                                <th>CourseCategory</th>
                                <th>Instructor</th>
                                <th>Total Lecture</th>
                                <th>Description</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {myCourses?.map((course,idx)=>{
                                return(
                                    <tr key={course._id}>
                                        <td>{idx+1}</td>
                                        <td>
                                            <textarea readOnly value={course?.title} className="w-40 h-auto bg-transparent resize-none"></textarea>
                                        </td>
                                        <td>
                                            {course?.category}
                                        </td>
                                        <td>
                                            {course?.createdBy}
                                        </td>
                                        <td>
                                            {course?.numberOfLectures}
                                        </td>
                                        <td className="max-w-28 overflow-hidden text-ellipsis whitespace-nowrap">
                                            <textarea value={course?.description} readOnly className="w-80 h-auto bg-transparent resize-none">

                                            </textarea>
                                        </td>
                                        <td className="flex items-center gap-4">
                                            <button onClick={()=>navigate("/course/displaylecture",{state:{...course}})} 
                                                        className="bg-green-500 hover:bg-green-600 transition-all ease-in-out duration-300 text-lg px-4 py-2 rounded-md font-bold">
                                                            <BsCollectionPlayFill/>

                                            </button>
                                            <button onClick={()=>onCourseDelete(course?._id) } 
                                                        className="bg-red-500 hover:bg-red-600 transition-all ease-in-out duration-300 text-lg px-4 py-2 rounded-md font-bold">
                                                            <BsTrash/>

                                            </button>
                                        </td>
                                    </tr>

                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        
        </HomeLayouts>
    )

}
export default AdminDashboard