import Footer from "@/component/Footer";
import Navbar from "@/component/Navbar";
import { PaginationComp } from "@/component/PaginationComp";
import { ShopItem } from "@/component/ShopItem";
import { APIType, ShopType } from "@/Type/type";
import { useEffect, useState } from "react";

export function Shop({ count, setClick, cartItem, setCount, setCartItem, items, setItems, click }: ShopType) {

    const [shopProducts, setShopProducts] = useState<APIType[]>([])
    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then(res => res.json())
            .then(json => setShopProducts(json))
    }, [])
    console.log(shopProducts)


    // {
    //     const filteredProducts = json.filter((products: ShopType)=>
    //         products.category === "men's clothing" || products.category === "women's clothing"
    //     )
    //     setHomeProducts(filteredProducts)
    // }



    return (
        <div className="">
            <div className="bg-[#e3e6f3] sticky top-0">
                <Navbar count={count} setCount={setCount} click={click} setClick={setClick} cartItem={cartItem} setCartItem={setCartItem} items={items} setItems={setItems} />
            </div>
            <div className="bg-[url('/public/imgs/ShopImg.jpg')] h-[300px] flex flex-col justify-center items-center">
                <h1 className="font-bold text-5xl text-center text-white pb-4">#ShoppyForShopping</h1>
                <p className="text-white font-light">Save more with coupons & up to 70% off</p>
            </div>

            <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-y-5 mx-20 gap-x-2 my-14">
                {
                    shopProducts.map((product) => (
                        <div key={product.id} >
                            <ShopItem id={product.id} name={product.title} price={product.price} imgUrl={product.image} category={product.category} description={product.description} count={count} setCount={setCount} cartItem={cartItem} setCartItem={setCartItem} items={items} setItems={setItems} />
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
