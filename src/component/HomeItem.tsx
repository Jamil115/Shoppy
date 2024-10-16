import { HomeItemType } from "@/Type/type"
import { formatCurrency } from "@/utilities/formatCurrency"

export default function HomeItem({ id, title, price, description, image, category }: HomeItemType) {
    console.log(id, title, price, description, image, category)
    let itemInCart = false
    return (
        <div className="h-[350px] w-[260px] border-2 rounded-xl shadow-lg overflow-hidden flex flex-col justify-between">
            <img src={image} alt="" className="h-40 py-3 object-contain" />
            <div className="mt-4">
                <p className="ml-4 font-light">{category}</p>
                <p className="ml-4 mr-2 mt-1 font-serif text-rose-600 line-clamp-2">{title}</p>
                <p className="ml-4  font-bold text-green-600">{formatCurrency(price)}</p>
            </div>

            <div>
                {
                    (!itemInCart) ?
                        <div>
                            {/* <p className="mx-4 my-2">{description}</p> */}
                            <div className="flex justify-center mb-2">
                                {/* onClick={() => { handleAddToCart(id) }} */}
                                <button className="bg-yellow-400 text-black font-bold w-60 mt-4 pb-1 mb-3 rounded-md">
                                    <span className="text-xl">+</span>Add to Cart
                                </button>
                            </div>
                        </div>
                        :
                        <div>
                            {/* <div className="flex justify-center mt-8">
                                {(quantity == 1 && status) ?
                                    <button onClick={() => { decreaseQuantity(id) }} className="bg-blue-600 hover:bg-blue-700 text-white px-2 pb-1 rounded-md text-xl">-</button>
                                    :
                                    <button onClick={() => decreaseQuantity(id)} className="bg-blue-600 hover:bg-blue-700 text-white px-2 pb-1 rounded-md text-xl">-</button>
                                }
                                <div className="mx-1 font-semibold"><span className="text-3xl font-normal">
                                    {cartItem.map((item) => (
                                        (item.id === id) ?
                                            item.quantity
                                            :
                                            ""
                                    ))}
                                </span> in cart</div>
                                <button onClick={() => increaseQuantity(id)} className="bg-blue-600 hover:bg-blue-700 text-white px-2 pb-1 rounded-md text-xl">+</button>
                            </div>

                            <div className="flex justify-center">
                                <button onClick={() => { handleRemoveFromCart(id) }} className="bg-red-600 hover:bg-red-700 text-white px-4 py-1 rounded-lg mt-4 ">Remove</button>
                            </div> */}
                        </div>
                }
            </div>
        </div>
    )
}
