import BlogItem from '@/component/BlogItem'
import Footer from '@/component/Footer'
import Navbar from '@/component/Navbar'
import { PaginationComp } from '@/component/PaginationComp'
import { BlogAPIType, BlogsType } from '@/Type/type'
import { useEffect, useState } from 'react'

export default function Blogs({ count, setClick, cartItem, setCount, setCartItem, items, setItems, click }: BlogsType) {
    // console.log( id, name, price, imgUrl, description, count, setCount, cartItem, setCartItem, items, setItems )

    // https://newsapi.org/v2/everything?q=fashion&apiKey=62e343d6cb6b4a0894a4beb87220b8e5

    const [blogs, setBlogs] = useState<BlogAPIType[]>([])
    useEffect(() => {
        fetch("https://newsapi.org/v2/everything?q=fashion&apiKey=62e343d6cb6b4a0894a4beb87220b8e5&sortBy=publishedAt&pageSize=5")
            .then(res => res.json())
            .then(json => {
                const filteredBlogs = json.articles.filter((item: BlogAPIType) => item.urlToImage !== null)
                setBlogs(filteredBlogs)
            })
    }, [])
    console.log(blogs)

    return (
        <div className="">
            <div className="bg-[#e3e6f3] sticky top-0">
                <Navbar count={count} setCount={setCount} click={click} setClick={setClick} cartItem={cartItem} setCartItem={setCartItem} items={items} setItems={setItems} />
            </div>
            <div className="bg-[url('/public/imgs/readmore.jpg')] h-[300px] flex flex-col justify-center items-center ">
                <h1 className="font-bold text-5xl text-center text-white pb-4">#readmore</h1>
                <p className="text-white font-mono text-lg">Read all the latest fashion news</p>
            </div>

            <div className="">
                {
                    blogs.map((item, index) => (
                        <div key={index} >
                            <BlogItem id={index} name={item.title} imgUrl={item.urlToImage} description={item.description} />
                        </div>
                    ))
                }
            </div>

            <div>
                <PaginationComp />
            </div>

            <div>
                <Footer />
            </div>
        </div>
    )
}
