import Navbar from "@/component/Navbar";
import { ErrorType } from "@/Type/type";

export default function Error404({ count, setClick, cartItem, setCount, setCartItem, items, setItems, click }:ErrorType) {
    return (
        <div>
            <div className="bg-[#e3e6f3] sticky top-0">
                <Navbar count={count} setCount={setCount} click={click} setClick={setClick} cartItem={cartItem} setCartItem={setCartItem} items={items} setItems={setItems} />
            </div>
            Error 404 occured
        </div>
    )
}
