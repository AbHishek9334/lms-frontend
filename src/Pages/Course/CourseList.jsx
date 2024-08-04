import { useDispatch, useSelector } from "react-redux";
import { getAllCourses } from "../../Redux/Slices/CourseSlice";
import HomeLayouts from "../../Layouts/HomeLayouts";
import { useEffect } from "react";
import CourseCard from "../../Components/CourseCard";

function CourseList(){
    const dispatch=useDispatch()
    const {courseData}=useSelector((state)=>state.courses)
    async function loadCourses(){
        await dispatch(getAllCourses())
    }
    useEffect(()=>{
        loadCourses()

    },[])

    return (
        <HomeLayouts>
            <div className="min-h-[98vh] pt-12 pl-20 flex flex-col gap-10 text-white">
                <h1>
                    Explore the courses made by
                    <span className="font-bold text-yellow-500"> Industry experts</span>
                </h1>
                <div className="mb-10 flex flex-wrap gap-14">
                    {courseData?.map((element)=>{
                        return <CourseCard key={element._id} data={element}/>
                    })}
                </div>
            </div>

        </HomeLayouts>
    )
}
export default CourseList