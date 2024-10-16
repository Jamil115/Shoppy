import Navbar from "@/component/Navbar";
import { AboutType } from "@/Type/type";

export default function About({count, setClick, cartItem, setCount, setCartItem, items, setItems, click}: AboutType) {
    return (
        <div>
            <Navbar count={count} setCount={setCount} click={click} setClick={setClick} cartItem={cartItem} setCartItem={setCartItem} items={items} setItems={setItems} />
            <h1>About</h1>
        </div>
    )
}
