type ProductType = {
    id: number;
    name: string;
    price: number,
    imgUrl: string,
    description: string
}[]

type NavbarType = {
    count: number,
    setCount: React.Dispatch<React.SetStateAction<number>>,
    click: boolean
    setClick: React.Dispatch<React.SetStateAction<boolean>>,
    cartItem : CartItemType[],
    setCartItem: React.Dispatch<React.SetStateAction<CartItemType[]>>
    items:CartItemType[],
    setItems: React.Dispatch<React.SetStateAction<CartItemType[]>>,
}

type APIType = {
    id:number,
    title: string,
    price: number,
    description: string,
    image: string,
    category: string
}

type HomeType = {
    count: number,
    setCount: React.Dispatch<React.SetStateAction<number>>,
    click: boolean
    setClick: React.Dispatch<React.SetStateAction<boolean>>,
    cartItem : CartItemType[],
    setCartItem: React.Dispatch<React.SetStateAction<CartItemType[]>>
    items:CartItemType[],
    setItems: React.Dispatch<React.SetStateAction<CartItemType[]>>,
    homeProducts: APIType[],
    setHomeProducts: React.Dispatch<React.SetStateAction<APIType[]>>
}


type HomeItemType = {
    id:number,
    name: string,
    price: number,
    description: string,
    imgUrl: string,
    category: string,
    count: number,
    setCount: React.Dispatch<React.SetStateAction<number>>,
    cartItem : CartItemType[],
    setCartItem: React.Dispatch<React.SetStateAction<CartItemType[]>>,
    items:CartItemType[],
    setItems: React.Dispatch<React.SetStateAction<CartItemType[]>>
}

type ShopType= {
    // proList : ProductType,
    count: number,
    setCount: React.Dispatch<React.SetStateAction<number>>,
    click: boolean
    setClick: React.Dispatch<React.SetStateAction<boolean>>,
    cartItem : CartItemType[],
    setCartItem: React.Dispatch<React.SetStateAction<CartItemType[]>>
    items:CartItemType[],
    setItems: React.Dispatch<React.SetStateAction<CartItemType[]>>,
    shopProducts: APIType[],
    setShopProducts: React.Dispatch<React.SetStateAction<APIType[]>>
}

type ShopItemType={
    id:number,
    name: string,
    price: number,
    description: string,
    imgUrl: string,
    category: string,
    count: number,
    setCount: React.Dispatch<React.SetStateAction<number>>,
    cartItem : CartItemType[],
    setCartItem: React.Dispatch<React.SetStateAction<CartItemType[]>>,
    items:CartItemType[],
    setItems: React.Dispatch<React.SetStateAction<CartItemType[]>>
}

type AboutType = {
    count: number,
    setCount: React.Dispatch<React.SetStateAction<number>>,
    click: boolean
    setClick: React.Dispatch<React.SetStateAction<boolean>>,
    cartItem : CartItemType[],
    setCartItem: React.Dispatch<React.SetStateAction<CartItemType[]>>
    items:CartItemType[],
    setItems: React.Dispatch<React.SetStateAction<CartItemType[]>>,
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
    status: boolean
}

type CartType = {
    id: number,
    imgUrl : string,
    name: string,
    price: number,
    quantity: number,
    status: boolean,
    count: number,
    setCount: React.Dispatch<React.SetStateAction<number>>
    items:CartItemType[],
    setItems: React.Dispatch<React.SetStateAction<CartItemType[]>>,
    setCartItem: React.Dispatch<React.SetStateAction<CartItemType[]>>
}

type BlogsType = {
    count: number,
    setCount: React.Dispatch<React.SetStateAction<number>>,
    click: boolean
    setClick: React.Dispatch<React.SetStateAction<boolean>>,
    cartItem : CartItemType[],
    setCartItem: React.Dispatch<React.SetStateAction<CartItemType[]>>
    items:CartItemType[],
    setItems: React.Dispatch<React.SetStateAction<CartItemType[]>>,
    // filteredBlogs: BlogAPIType
}

type BlogItemType = {
    id:number,
    name: string,
    description: string,
    imgUrl: string
}

type BlogAPIType = {
    id:number,
    title: string,
    description: string,
    urlToImage: string,
}

type ProductInfoType = {
    count: number,
    setCount: React.Dispatch<React.SetStateAction<number>>,
    click: boolean
    setClick: React.Dispatch<React.SetStateAction<boolean>>,
    cartItem : CartItemType[],
    setCartItem: React.Dispatch<React.SetStateAction<CartItemType[]>>
    items:CartItemType[],
    setItems: React.Dispatch<React.SetStateAction<CartItemType[]>>,
    shopProducts: APIType[]
}

export type{
    ProductType,
    HomeType,
    HomeItemType,
    AboutType,
    NavbarType,
    ShopType,
    ShopItemType,
    CartIconType,
    CartItemType,
    CartType,
    APIType,
    BlogsType,
    BlogItemType,
    BlogAPIType,
    ProductInfoType
}