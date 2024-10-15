import CartIcon from "@/component/CartIcon";
import CartItem from "@/component/CartItem";
import Navbar from "@/component/Navbar";
import { StoreItem } from "@/component/StoreItem";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { CartItemType, StoreType } from "@/Type/type";
import { formatCurrency } from "@/utilities/formatCurrency";
import { useState } from "react";

export function Store({ proList }: StoreType) {

    const [count, setCount] = useState<number>(0)
    const [click, setClick] = useState<boolean>(false)
    const [cartItem, setCartItem] = useState<CartItemType[]>([])
    const [items, setItems] = useState<CartItemType[]>([])

    let amount = 0;
    let totalAmount;

    cartItem.map((item) => {
        amount += item.quantity * item.price
    })
    totalAmount = formatCurrency(amount)

    return (
        <div className="">
            <div className="sticky top-0 flex shadow-md bg-green-400">
                <Navbar />

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

            <div className=" grid gap-y-6 gap-x-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 justify-items-center mt-6">
                {
                    proList.map((product) => (
                        <div key={product.id}>
                            <StoreItem key={product.id} {...product} count={count} setCount={setCount} cartItem={cartItem} setCartItem={setCartItem} items={items} setItems={setItems} />
                            {/* quantity={quantity} setQuantity={setQuantity} */}
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
