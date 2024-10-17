import { Link } from "react-router-dom";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import CartIcon from "./CartIcon";
import { NavbarType } from "@/Type/type";
import CartItem from "./CartItem";
import { formatCurrency } from "@/utilities/formatCurrency";

export default function Navbar({ count, setClick, cartItem, setCount, setCartItem, items, setItems, click }: NavbarType) {
    console.log(cartItem)

    let amount = 0;
    let totalAmount;

    cartItem.map((item) => {
        amount += item.quantity * item.price
    })
    totalAmount = formatCurrency(amount)


    return (
        <div className="flex">
            <div>
                <img src="/public/imgs/logo.webp" alt="" className="w-36 -mt-3 -mb-12 ml-4 " />
            </div>
            <div className=" w-11/12 flex justify-center ">
                <ul className="flex gap-16 py-5 font-semibold">
                    <li className="ml-10"> <Link to={'/'}>Home</Link></li>
                    <li> <Link to={'/shop'}>Shop</Link> </li>
                    <li> <Link to={'/blogs'}>Blogs</Link> </li>
                    <li> <Link to={'/about'}>About</Link> </li>
                </ul>
            </div>

            <div className="flex">

                <div className="right-0 top-2">
                    <Sheet>
                        <SheetTrigger asChild>
                            <CartIcon count={count} onClick={() => setClick(!click)} />
                        </SheetTrigger>
                        <SheetContent>
                            <SheetHeader>
                                <SheetTitle>Cart</SheetTitle>
                            </SheetHeader>

                            <div className="grid gap-3 py-8">
                                {
                                    (count != 0) ?
                                        cartItem.map((item) => (
                                            <CartItem key={item.id} {...item} count={count} setCount={setCount} items={items} setItems={setItems} setCartItem={setCartItem} />
                                        ))
                                        :
                                        <p className="text-xl text-center font-semibold">No Item Added</p>
                                }
                                {
                                    (count > 0) ?
                                        <p className="text-lg text-right">Total: <span className="font-bold">{totalAmount}</span> </p>
                                        :
                                        ""
                                }
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>

        </div>
    )
}

