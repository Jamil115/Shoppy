import React from "react";
import { CartIconType } from "@/Type/type";
import { RiShoppingBag4Line } from "react-icons/ri";

const CartIcon = React.forwardRef<HTMLButtonElement, CartIconType>(({ count, onClick }, ref) => {
    return (
        <button ref={ref} onClick={onClick} className="h-10 border-2 rounded-lg m-3 mr-14  text-black hover:text-blue-700">
            <RiShoppingBag4Line className=" mx-2 text-2xl cursor-pointer" />

            {
                count > 0 && (
                    <div className="bg-red-500 rounded-full w-5 h-5 text-white text-sm font-semibold absolute ml-7 -mt-2">
                        {count}
                    </div>
                )
            }


        </button>
    )
}
)

export default CartIcon
