import { StoreItemType } from "@/Type/type";
import { formatCurrency } from "@/utilities/formatCurrency";
import { useEffect } from "react";

export function StoreItem({ id, name, price, imgUrl, description, count, setCount, cartItem, setCartItem, items, setItems }: StoreItemType) {

    console.log(cartItem)
    let quantity = 0
    let stat = false;
    useEffect(() => {
        cartItem.forEach((item) => (
            (item.id == id) ? item.stat = true : item
        ))
        console.log(cartItem)
    }, [cartItem])



    const handleAddToCart: (id: number) => void = () => {
        setCount(count + 1)

        const newItem = { id, name, price, imgUrl, quantity: 1, stat }
        setCartItem((prevItems) => [...prevItems, newItem])
        setItems((preItems) => [...preItems, newItem])

        console.log("New item added")
    }

    useEffect(() => {
        console.log(items)
    }, [items])

    const handleRemoveFromCart: (id: number) => void = (id) => {
        const itemToRemove = cartItem.find((item) => item.id === id); // Find the item by id

        if (itemToRemove) {

            cartItem.map((item) => (
                (item.id == id) ? item.stat = false : item
            ))
            setCount(count - 1);
            setCartItem((prevItems) => prevItems.filter((item) => item.id !== id));
            console.log("Item removed");
        } else {
            console.log("Item not found");
        }
    }

    function increaseQuantity(id: number) {

        setCartItem(currItems => {
            return currItems.map(item => {
                if (item.id === id) {
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
                        item.stat = false
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


    const itemInCart = cartItem.find((item) => {
        if (item.stat) {
            return item.id == id && item.stat
        } else {
            return item.id == id && !item.stat
        }
    })

    return (
        <div className="h-[420px] w-80 border-2 rounded-xl shadow-lg overflow-hidden">
            <img src={imgUrl} alt="" className="w-96 h-56 object-cover" />
            <div className="flex mt-2">
                <p className="flex-1 ml-4 font-semibold font-serif text-xl">{name}</p>
                <p className="mr-5 font-light text-lg">{formatCurrency(price)}</p>
            </div>

            <div>
                {
                    (!itemInCart) ?
                        <div>
                            <p className="mx-4 my-2">{description}</p>
                            <div className="flex justify-center">
                                <button onClick={() => { handleAddToCart(id) }} className="bg-blue-600 text-white w-72 mt-3 pb-1 rounded-md">
                                    <span className="text-xl">+</span>Add to Cart
                                </button>
                            </div>
                        </div>
                        :
                        <div>
                            <div className="flex justify-center mt-8">
                                {(quantity == 1 && stat) ?
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
                            </div>
                        </div>
                }
            </div>
        </div>
    )
}