type ProductType = {
    id: number;
    name: string;
    price: number,
    imgUrl: string,
    description: string
}[]

type StoreType= {
    proList : ProductType
}

type StoreItemType={
    id: number;
    name: string;
    price: number,
    imgUrl: string,
    description: string,
    count: number,
    setCount: React.Dispatch<React.SetStateAction<number>>,
    cartItem : CartItemType[],
    setCartItem: React.Dispatch<React.SetStateAction<CartItemType[]>>,
    items:CartItemType[],
    setItems: React.Dispatch<React.SetStateAction<CartItemType[]>>
}


type CartIconType = {
    count: number,
    onClick?: ()=> void
}

type CartItemType = {
    id: number
    imgUrl : string,
    name: string,
    price: number,
    quantity: number,
    stat: boolean
}

type CartType = {
    id: number,
    imgUrl : string,
    name: string,
    price: number,
    quantity: number,
    stat: boolean,
    count: number,
    setCount: React.Dispatch<React.SetStateAction<number>>
    items:CartItemType[],
    setItems: React.Dispatch<React.SetStateAction<CartItemType[]>>,
    setCartItem: React.Dispatch<React.SetStateAction<CartItemType[]>>
}

export type{
    ProductType,
    StoreType,
    StoreItemType,
    CartIconType,
    CartItemType,
    CartType
}