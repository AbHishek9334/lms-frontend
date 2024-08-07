import { useLocation, useNavigate } from "react-router-dom"
import HomeLayouts from "../../Layouts/HomeLayouts"
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
import { deleteCourseLecture, getCourseLectures } from "../../Redux/Slices/LectureSlice"

function Displaylectures(){
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const {state}=useLocation()
    const [currentVedio,setCurrentVedio]=useState(0)
    const {lectures}=useSelector((state)=>state.lecture)
    const {role}=useSelector((state)=>state.auth)
    async function onLectureDelete(courseId,lectureId){
        await dispatch(deleteCourseLecture({courseId:courseId,lectureId:lectureId}))
        await dispatch(getCourseLectures(courseId))
    }
    useEffect(()=>{
        if(!state)navigate("/courses")
            dispatch(getCourseLectures(state._id))
    },[])
    return(
        <>
        <HomeLayouts>
            <div className="flex flex-col gap-10 items-center justify-center min-h-[90vh] py-10 text-white mx-[5%]">
                <div className="text-center text-2xl font-semibold text-yellow-500">
                    CourseName:{state?.title}
                </div>
                {lectures && lectures.length>0 && (<div className="flex justify-center gap-10 w-full">
                    <div className="space-y-5 w-[28rem] p-2 rounded-lg shadow-[0_0_10px_black]">
                        <vedio src={lectures && lectures[currentVedio]?.lecture?.secure_url} 
                                className="object-fill rounded-tl-lg rounded-tr-lg w-full"
                                controls
                                disablePictureInPicture
                                muted
                                controlsList="nodownload">

                        </vedio>
                        <div>
                            <h1>
                                <span className="text-yellow-500">Title:{" "}
                                   
                                </span>
                                {lectures && lectures[currentVedio]?.title}
                            </h1>
                            <p>
                                <span className="text-yellow-500 line-clamp-4">
                                    Description:{" "}
                                </span>
                                {lectures && lectures[currentVedio]?.description}
                            </p>
                        </div>
                    </div>
                    <ul className="w-[28rem] p-2 rounded-lg shadow-[0_0_10px_black] space-y-4">
                        <li className="font-semibold text-xl text-yellow-500 flex items-center justify-between">
                            <p>Lectures List</p>
                            {role=="ADMIN" && (
                                <button onClick={()=>navigate("/course/addLecture",{state:{...state}})} className="btn-primary px-2 py-1 rounded-md font-semibold text-sm">
                                    Add new Lecture
                                </button>
                            )}
                        </li>
                        {lectures && lectures.map((lecture,idx)=>{
                            return(
                                <li className="space-y-2" key={lecture._id}>
                                    <p className="cursor-pointer" onClick={()=>setCurrentVedio(idx)}>
                                        <span>
                                            {" "} Lecture{idx+1}:{" "}
                                        </span>
                                        {lecture?.title}
                                    </p>
                                    {role=="ADMIN" && (
                                        <button onClick={()=>onLectureDelete(state?._id,lecture?._id)} className="btn-accent px-2 py-2 rounded-md font-semibold text-sm">
                                            Delete Lecture
                                        </button>
                                    )}
                                </li>
                            )
                        })}
                    </ul>
                </div>)}
            </div>

        </HomeLayouts>
        
        </>
    )

}
export default Displaylectures