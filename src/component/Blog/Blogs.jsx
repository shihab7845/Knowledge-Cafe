import { useEffect, useState } from "react"
import Blog from "./Blog"
import SideHeading from "../Side-Heading/Heading"
export default function Blogs() {

    const [blog, setblog] = useState([])
    const [titles, settitles] = useState([])
    const [Rtime, setRtime] = useState(0)


    useEffect(() => {
        fetch('BLOGS.json')
            .then(response => response.json())
            .then(data => setblog(data))
    }, [])


    const handleBtn = (blog, reading_time) => {
        const newTitle = [...titles, blog]
        setRtime(reading_time + Rtime);
        settitles(newTitle)

    }

    return (
        <div className="flex items-start m-12">

            {/* 2nd one  */}
            <div>
                {
                    blog.map((blog, index) => <Blog
                        key={index}
                        blog={blog}
                        handleBtn={handleBtn}
                    ></Blog>)
                }
            </div>

            {/* 1st one  */}
            <div className="w-2/5">

                <h1 className="text-3xl font-semibold bg-purple-500 bg-opacity-30 border border-red-400 text-purple-700 p-3 rounded-xl  ">Spent time on read : {Rtime}</h1>

                <div className="bg-slate-400 bg-opacity-30">

                    <h1 className="text-3xl font-bold bg-gray-400 bg-opacity-30  text-black p-3 rounded-xl">Bookmarked Blogs  :{titles.length}</h1>
                    {
                        titles.map(titles => <SideHeading
                            titles={titles}

                        ></SideHeading>)
                    }
                </div>

            </div>


        </div>
    )
}
