
export default function SideHeading({titles}){
    
    const {title}= titles
    
    return(
        <div className="bg-white border rounded-lg m-4 ">
            
            <h1 className="text-3xl font-semibold p-4">{title}</h1>

        </div>
    )
}