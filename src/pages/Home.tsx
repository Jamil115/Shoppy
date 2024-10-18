import Footer from "@/component/Footer";
import HomeItem from "@/component/HomeItem";
import Navbar from "@/component/Navbar";
import { APIType, HomeType } from "@/Type/type";
import { useEffect, useState } from "react";

export default function Home({ count, setClick, cartItem, setCount, setCartItem, items, setItems, click }: HomeType) {
    const [homeProducts, setHomeProducts]= useState<APIType[]>([])
    useEffect(()=>{
        fetch("https://fakestoreapi.com/products")
        .then(res => res.json())
        .then(json => {
            const filteredProducts = json.filter((products: APIType)=>
                products.category === "men's clothing" || products.category === "women's clothing"
            )
            setHomeProducts(filteredProducts)
        })
    },[])
    console.log(homeProducts)
    return (
        <div>
            <div className="bg-[#e3e6f3] sticky top-0">
                <Navbar count={count} setCount={setCount} click={click} setClick={setClick} cartItem={cartItem} setCartItem={setCartItem} items={items} setItems={setItems} />
            </div>
            <div className="bg-[#e3e6f3] flex justify-center items-center h-80">
                <h1 className="font-bold text-4xl text-center"><span className="text-6xl font-serif"><span className="text-8xl font-sans">Enjoy</span> The <span className="bg-[#e86e65] text-white">Best Deals</span> </span> <br /> in <span className="text-green-500 italic text-5xl font-extrabold">Affordable Price</span></h1>
            </div>

            <div className="flex flex-col justify-center items-center my-14">
                <h1 className="text-4xl font-bold font-serif">Featured Products</h1>
                <h4 className="font-light mt-2">Winter Collection New Modern Design</h4>
            </div>

            <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-y-5 mx-20 gap-x-2 mb-10">
                {
                    homeProducts.map((product)=>(
                        <div key={product.id} >
                            <HomeItem id={product.id} name={product.title} price={product.price} imgUrl={product.image} category={product.category} description={product.description} count={count} setCount={setCount} cartItem={cartItem} setCartItem={setCartItem} items={items} setItems={setItems} />
                        </div>
                    ))
                }
            </div>

            <div>
                <Footer />
            </div>
        </div>
    )
}

