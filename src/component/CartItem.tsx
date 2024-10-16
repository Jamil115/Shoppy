import { Button } from "@/components/ui/button";
import { CartType } from "@/Type/type";
import { formatCurrency } from "@/utilities/formatCurrency";
import { useEffect } from "react";
import { CgClose } from "react-icons/cg";

export default function CartItem({ id, imgUrl, name, price, quantity, count, setCount, items, setItems, setCartItem }: CartType) {

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
    console.log(items)

    const itemInCart = items.find((item) => {
        return item.id == id && item.status
    })
    return (
        <div>
            {
                (itemInCart) ?
                    <div className="grid grid-cols-3">
                        <div className="flex justify-start col-span-2">
                            <img src={imgUrl} alt="" className="w-[110px] h-[75px] object-cover" />
                            <div className="p-2">
                                <h2 className="font-semibold flex gap-1">
                                    {name} <span className="font-light text-sm">x{quantity}</span>
                                </h2>
                                <p>
                                    {price}
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col items-end justify-center gap-2 ">
                            <Button onClick={() => { cartStatus() }} variant="outline" size="icon" className=" border-red-500 text-red-500 hover:bg-red-500 hover:text-white h-6 w-6">
                                <CgClose className="h-4 w-4" />
                            </Button>
                            <p className="font-semibold">{formatCurrency(quantity * price)}</p>
                        </div>
                    </div>
                    :
                    ""
            }
        </div >
    )
}
