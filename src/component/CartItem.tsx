import { Button } from "@/components/ui/button";
import { CartType } from "@/Type/type";
import { formatCurrency } from "@/utilities/formatCurrency";
import { useEffect } from "react";
import { CgClose } from "react-icons/cg";

export default function CartItem({ id, imgUrl, name, price, quantity, count, setCount, items, setItems, setCartItem }: CartType) {
    // console.log(quantity)

    useEffect(() => {
        console.log(items)
    }, [items])

    const cartStatus = () => {
        setCount(count - 1)
        console.log(items)
        setItems((prevItems) => (
            prevItems.map((element) => (
                (element.id === id) ? { ...element, status: false } : element
            ))

        ))

        setItems((prevItems) => (
            prevItems.filter((item) => item.id !== id)
        ))
        setCartItem((prevItems) => (
            prevItems.filter((item) => item.id !== id)
        ))
    }
    // console.log(items)



    function increaseQuantity(id: number) {

        setCartItem(currItems => {
            return currItems.map(item => {
                if (item.id === id) {
                    console.log(item.id)
                    console.log(id)
                    return { ...item, quantity: item.quantity + 1 }
                } else {
                    return item
                }
            })
        })
    }

    function decreaseQuantity(id: number) {

        setCartItem((currItems) => {
            return currItems.map((item) => {
                if (item.id === id) {
                    if (item.quantity == 1) {
                        setCount(count - 1)
                        item.status = false
                        return 1
                    } else {
                        return { ...item, quantity: item.quantity - 1 }
                    }
                } else {
                    return item
                }
            }).filter((item) => item !== 1)
        })
    }



    const itemInCart = items.find((item) => {
        return item.id == id && item.status
    })
    return (
        <div>
            <div className="py-4 border-b-2 border-slate-200">
                {
                    (itemInCart) ?
                        <div>
                            <div className="flex">
                                <div className="flex justify-start flex-1 ">
                                    <img src={imgUrl} alt="" className="w-[70px] h-[78px] object-contain flex-shrink-0" />
                                    <div className="pl-4 w-[260px]">
                                        <p className="font-semibold flex gap-1 line-clamp-2 h-10 mb-2 text-xs">
                                            {name} <sup className="font-light text-sm">x{quantity}</sup>
                                        </p>



                                        <div className="flex gap-14">


                                            <div className="flex border-slate-200 border-2 gap-2">
                                                {(quantity == 1 && status) ?
                                                    <button onClick={() => { decreaseQuantity(id) }} className=" px-2 -mt-1 rounded-md text-xl">-</button>
                                                    :
                                                    <button onClick={() => decreaseQuantity(id)} className="px-2 -mt-1 rounded-md text-xl">-</button>
                                                }
                                                <div className="mx-1 font-semibold">
                                                    {items.map((item) => (
                                                        // console.log(item.id)
                                                        // console.log(id)
                                                        (item.id === id) ?
                                                            quantity
                                                            :
                                                            ""
                                                    ))}
                                                </div>
                                                <button onClick={() => increaseQuantity(id)} className="px-2 -mt-1 rounded-md text-xl">+</button>
                                            </div>

                                            <div className="">
                                                <p className="font-light text-sm font-serif">{formatCurrency(price)}</p>
                                            </div>
                                        </div>



                                    </div>
                                </div>
                                <div className="flex flex-col items-end justify-center gap-2 mr-2">
                                    <Button onClick={() => { cartStatus() }} variant="outline" size="icon" className=" border-red-500 text-red-500 hover:bg-red-500 hover:text-white h-6 w-6">
                                        <CgClose className="h-4 w-4" />
                                    </Button>
                                    <p className="font-semibold">{formatCurrency(quantity * price)}</p>
                                </div>
                            </div>


                        </div>
                        :
                        ""
                }
            </div >

        </div>
    )
}







