import HomeLayouts from "../Layouts/HomeLayouts";

function AboutUs(){
    return(
        <HomeLayouts>
            <div className="pl-20 pt-20 flex flex-col text-white">
                <div className="flex items-center gap-5 mx-10 h-[50%]">
                    <section className="w-1/2 space-y-10">
                        <h1 className="text-5xl text-yellow-500 font-semibold">Affordable and quality education</h1>
                        <p className="text-xl text-gray-200">Our goal is to provide affordable and quality education to the world . We are providing the platform for the aspiring teacher and students to share their skills,creativity and knowledge to each other to empower and contribute to the growth and welfare of the mankind</p>
                    </section>
                    <div className="w-1/2">
                        <img id="id1" src="https://img.freepik.com/premium-vector/online-learning-concept-with-diverse-group-students-teacher_123891-13827.jpg?size=626&ext=jpg&uid=R142114299&ga=GA1.1.374287107.1689482951&semt=ais_hybrid" style={{filter:"drop-shadow(0px 10px 10px rgb(0,0,0)"}} className="drop-shadow-2xl rounded-full" alt="about main Image"/>
                    </div>
                </div>
                <div className="carousel w-full h-96">
                    <div id="item1" className="carousel-item w-full">
                        <img
                            src="https://cdn.pixabay.com/photo/2022/05/05/15/21/man-7176384_640.jpg"
                            className="w-full" />
                    </div>
                    <div id="item2" className="carousel-item w-full">
                        <img
                            src="https://media.gettyimages.com/id/56458980/photo/england-sir-isaac-newton-canvas-sir-isaac-newton-gemaelde.jpg?s=612x612&w=0&k=20&c=sX_rnXxDRRBaSLYTl-O-uTqWuGv2KWkvtCgQNURf17Q="
                            className="w-full" />
                    </div>
                    <div id="item3" className="carousel-item w-full">
                        <img
                            src="https://media.gettyimages.com/id/1236321409/photo/lisbon-portugal-3-november-2021-brendan-eich-brave-on-pandaconf-stage-during-day-two-of-web.jpg?s=612x612&w=0&k=20&c=SXkZIT_Y48Bxlk7Ty9pRG9fSkA2wgD11swJ4xKr3H6o="
                            className="w-full" />
                    </div>
                    <div id="item4" className="carousel-item w-full">
                        <img
                            src="https://media.gettyimages.com/id/482138352/photo/new-delhi-india-president-apj-abdul-kalam-during-a-education-summit-innovating-for-excelience.jpg?s=612x612&w=0&k=20&c=b9LeklIzWFdFBCBFvwCVN6lXl6GXJKhADgTWAZ9O1mg="
                            className="w-full" />
                    </div>
                </div>
                <div className="flex w-full justify-center gap-2 py-2">
                    <a href="#item1" className="btn btn-xs">1</a>
                    <a href="#item2" className="btn btn-xs">2</a>
                    <a href="#item3" className="btn btn-xs">3</a>
                    <a href="#item4" className="btn btn-xs">4</a>
                </div>
            </div>
        </HomeLayouts>
    )
}
export default AboutUs