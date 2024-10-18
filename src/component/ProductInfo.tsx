import { ProductInfoType } from '@/Type/type'
import Navbar from './Navbar'
import { Link, useLocation } from 'react-router-dom'
import { formatCurrency } from '@/utilities/formatCurrency'

export default function ProductInfo({ count, setClick, cartItem, setCount, setCartItem, items, setItems, click, homeProducts, shopProducts }: ProductInfoType) {
    // console.log(count, setClick, cartItem, setCount, setCartItem, items, setItems, click)
    console.log(homeProducts)
    console.log(shopProducts)
    let currData

    let useLoc = useLocation()
    let currentId = useLoc.pathname.split('/')[1]
    let currId = Number(currentId)
    if (homeProducts.length!=0) {
        currData = homeProducts.filter((item) => item.id == currId)[0]
    }else {
        currData = shopProducts.filter((item) => item.id == currId)[0]
    }

    console.log(useLoc)
    console.log(currentId)
    console.log(currId)
    console.log(currData)



    return (
        <div>
            <div className="bg-[#e3e6f3] sticky top-0">
                <Navbar count={count} setCount={setCount} click={click} setClick={setClick} cartItem={cartItem} setCartItem={setCartItem} items={items} setItems={setItems} />
            </div>
            <div className='flex justify-center items-center gap-10 h-[600px]'>
                <div >
                    <img src={currData.image} alt="" className='h-[400px]' />
                </div>
                <div className='w-[600px] flex flex-col mt-10'>
                    <h1 className='font-bold text-2xl font-serif mb-2'>{currData.title}</h1>
                    <p className='font-bold text-xl text-red-500 mb-5'>{formatCurrency(currData.price)}</p>
                    <p className='font-light mb-10'>{currData?.description}</p>
                    <Link to={'/'}><button className="text-center bg-cyan-600 text-white font-bold w-32 py-2 mb-3 rounded-md"> Back to Home</button></Link>
                </div>
            </div>

        </div>
    )
}
