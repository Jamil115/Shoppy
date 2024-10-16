import Navbar from "@/component/Navbar";
import { ShopItem } from "@/component/ShopItem";
import { ShopType } from "@/Type/type";

export function Shop({ proList, count, setClick, cartItem, setCount, setCartItem, items, setItems, click }: ShopType) {

    // console.log(proList)    

    return (
        <div className="">
            <div className="sticky top-0 flex shadow-md">
                <Navbar count={count} setCount={setCount} click={click} setClick={setClick} cartItem={cartItem} setCartItem={setCartItem} items={items} setItems={setItems} />
            </div>

            <div className=" grid gap-y-6 gap-x-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 justify-items-center mt-6">
                {
                    proList.map((product) => (
                        <div key={product.id}>
                            <ShopItem key={product.id} {...product} count={count} setCount={setCount} cartItem={cartItem} setCartItem={setCartItem} items={items} setItems={setItems} />
                            {/* quantity={quantity} setQuantity={setQuantity} */}
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
