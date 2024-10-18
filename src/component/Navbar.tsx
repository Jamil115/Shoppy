import { Link } from "react-router-dom";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import CartIcon from "./CartIcon";
import { NavbarType } from "@/Type/type";
import CartItem from "./CartItem";
import { formatCurrency } from "@/utilities/formatCurrency";
import { RiDeleteBin6Line } from "react-icons/ri";
import logo from "/public/imgs/logo.webp"

export default function Navbar({ count, setClick, cartItem, setCount, setCartItem, items, setItems, click }: NavbarType) {
    console.log(cartItem)

    let amount = 0;
    let totalAmount;

    cartItem.map((item) => {
        amount += item.quantity * item.price
    })
    totalAmount = formatCurrency(amount)




    const allRemoveFromCart: () => void = () => {
        // const itemToRemove = items.find((item) => item.id === id); // Find the item by id

        console.log("Hello")
        items.map((item) => (
            item.status = false
        ))
        setCount(0);
        setItems([]);
        setCartItem([]);
        console.log("All items removed");

    }

    return (
        <div className="flex">
            <Link to={'/'}>
                <div>
                    <img src={logo} alt="" className="w-36 -mt-4 -mb-12 ml-4 " />
                </div>
            </Link>
            <div className=" w-11/12 flex justify-center ">
                <ul className="flex gap-16 py-5 font-semibold">
                    <li className="ml-10 "> <Link to={'/'}>Home</Link></li>
                    <li> <Link to={'/shop'} className="focus:font-bold">Shop</Link> </li>
                    <li> <Link to={'/blogs'}>Blogs</Link> </li>
                    <li> <Link to={'/about'}>About</Link> </li>
                </ul>
            </div>

            <div className="flex">

                <div className="right-0 top-2 ">
                    <Sheet>
                        <SheetTrigger asChild>
                            <CartIcon count={count} onClick={() => setClick(!click)} />
                        </SheetTrigger>
                        <SheetContent>
                            <SheetHeader>
                                <SheetTitle className="mb-3">Cart</SheetTitle>
                            </SheetHeader>

                            <div>
                                <div className="grid gap-3 pb-2 pt-2 h-[510px] overflow-y-auto mb-2">
                                    {
                                        (count != 0) ?
                                            cartItem.map((item) => (
                                                <CartItem key={item.id} {...item} count={count} setCount={setCount} items={items} setItems={setItems} setCartItem={setCartItem} />
                                            ))
                                            :
                                            <p className="text-xl text-center font-semibold">No Item Added</p>
                                    }

                                </div>

                                <div className="">
                                    {
                                        (count > 0) ?
                                            <div>
                                                <div className="flex h-9 mt-3 mb-2">
                                                    <p className="text-lg mb-5 flex-1 mt-1 pl-4">Total: <span className="font-bold">{totalAmount}</span> </p>
                                                    <button onClick={() => { allRemoveFromCart() }} className="mr-5  border-2 border-slate-200 px-2 hover:bg-red-500 hover:text-white"><RiDeleteBin6Line /></button>
                                                </div>
                                                <div className="flex flex-col mx-3">
                                                    <button className="bg-slate-300 py-2 font-semibold mb-1">View Cart</button>
                                                    <button className=" bg-black text-white py-2 font-semibold">Checkout</button>
                                                </div>
                                            </div>
                                            :
                                            ""
                                    }
                                </div>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>

        </div>
    )
}

