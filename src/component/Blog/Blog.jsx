import { useState } from "react"


export default function Blog({ blog, handleBtn }) {
    const { cover, title, author_img, author, posted_date, reading_time, hashtags } = blog
    const [visited, setvisited] = useState(false)

    const handleButtonClick = () => {
        setvisited(true);
        handleBtn(blog, reading_time);
    };
    return (
        <div className=" m-5 pl-36">
            <img src={cover} alt="" />

            <div className="flex space-x-64  ">
                {/* right after cover photo */}
                <div className="flex space-x-3 m-2">
                    <div className="w-14 h-14">
                        <img src={author_img} alt="" />
                    </div>
                    <div>
                        <p className="text-xl font-semibold">{author}</p>
                        <p>{posted_date}</p>
                    </div>

                </div>
                {/* reading time and bookmark */}
                <div className="space-y-3 ">
                    <div className="text-center">Reading time : {reading_time}</div>
                    <button
                        className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${visited ? 'opacity-50 cursor-not-allowed' : ''}`}
                        onClick={handleButtonClick}
                        disabled={visited}
                    >
                        Mark as Read
                    </button>
                </div>
            </div>
            {/* heading and hashtag */}
            <div className=" w-1/2 space-y-2 m-2">
                <h1 className="text-3xl font-bold">{title}</h1>
                <div className="flex space-x-3">
                    <p>#{hashtags[0]}</p>
                    <p>#{hashtags[1]}</p>
                </div>
            </div>
        </div>
    )
}
