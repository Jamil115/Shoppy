import { BlogItemType } from "@/Type/type";

export default function BlogItem({id, name, description, imgUrl}:BlogItemType) {
    console.log(id, name, description, imgUrl)
    return (
        <div className="my-20 flex gap-8">
            <div className="ml-32">
                <img src={imgUrl} alt="" className="w-[550px] h-[370px]"/>
            </div>
            <div className="flex flex-col justify-center w-[500px] ">
                <h1 className="mb-4 font-bold line-clamp-1 text-xl">{name}</h1>
                <p className="font-light line-clamp-3">{description}</p>
                <button className="font-bold self-start pt-10">Continue Reading.....</button>
            </div>
        </div>
    )
}
