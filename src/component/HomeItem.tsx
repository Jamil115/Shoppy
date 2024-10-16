import { HomeItemType } from "@/Type/type"
import { formatCurrency } from "@/utilities/formatCurrency"
import { useEffect } from "react";

export default function HomeItem({ id, name, price, description, imgUrl, category, count, setCount, cartItem, setCartItem, items, setItems}: HomeItemType) {
    console.log(id, name, price, description, imgUrl, category)


    let status = false;
    useEffect(() => {
        cartItem.forEach((item) => (
            (item.id == id) ? item.status = true : item
        ))
        console.log(cartItem)
    }, [cartItem])



    const handleAddToCart: (id: number) => void = () => {
        setCount(count + 1)

        const newItem = { id, name, price, imgUrl, quantity: 1, status }
        setCartItem((prevItems) => [...prevItems, newItem])
        setItems((preItems) => [...preItems, newItem])

        console.log("New item added")
    }

    useEffect(() => {
        console.log(items)
    }, [items])

    const handleRemoveFromCart: (id: number) => void = (id) => {
        const itemToRemove = items.find((item) => item.id === id); // Find the item by id

        if (itemToRemove) {

            items.map((item) => (
                (item.id == id) ? item.status = false : item
            ))
            setCount(count - 1);
            // setQuantity(0)
            setItems((prevItems) => prevItems.filter((item) => item.id !== id));
            setCartItem((preItems) => preItems.filter((element) => element.id !== id));
            console.log("Item removed");
        } else {
            console.log("Item not found");
        }
    }

    // function increaseQuantity(id: number) {

    //     setCartItem(currItems => {
    //         return currItems.map(item => {
    //             if (item.id === id) {
    //                 return { ...item, quantity: item.quantity + 1 }
    //             } else {
    //                 return item
    //             }
    //         })
    //     })
    // }

    // function decreaseQuantity(id: number) {

    //     setCartItem((currItems) => {
    //         return currItems.map((item) => {
    //             if (item.id === id) {
    //                 if (item.quantity == 1) {
    //                     setCount(count - 1)
    //                     item.status = false
    //                     return 1
    //                 } else {
    //                     return { ...item, quantity: item.quantity - 1 }
    //                 }
    //             } else {
    //                 return item
    //             }
    //         }).filter((item) => item !== 1)
    //     })
    // }


    const itemInCart = cartItem.find((item) => {
        if (item.status) {
            return item.id == id && item.status
        } else {
            return item.id == id && !item.status
        }
    })


    return (
        <div className="h-[370px] w-[260px] border-2 rounded-xl shadow-lg overflow-hidden flex flex-col justify-between  hover:shadow-2xl">
            <img src={imgUrl} alt="" className="h-40 py-3 object-contain cursor-pointer" />
            <div className="mt-4">
                <p className="ml-4 font-light">{category}</p>
                <p className="ml-4 mr-2 mt-1 font-serif text-rose-600 line-clamp-2 cursor-pointer">{name}</p>
                <p className="ml-4  font-bold text-green-600">{formatCurrency(price)}</p>
            </div>

            <div>
                {
                    (!itemInCart) ?
                        <div>
                            {/* <p className="mx-4 my-2">{description}</p> */}
                            <div className="flex justify-center mb-2">
                                <button onClick={() => { handleAddToCart(id) }} className="bg-yellow-400 text-black font-bold w-60 mt-4 pb-1 mb-3 rounded-md">
                                    <span className="text-xl">+</span>Add to Cart
                                </button>
                            </div>
                        </div>
                        :
                        <div>
                            {/* <div className="flex justify-center">
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
                            </div> */}

                            <div className="flex justify-center">
                                <button onClick={() => { handleRemoveFromCart(id) }} className="bg-red-600 hover:bg-red-700 text-white w-60 px-4 py-1 rounded-lg mt-4 mb-5 font-bold">Remove from Cart</button>
                            </div>
                        </div>
                }
            </div>
        </div>
    )
}
