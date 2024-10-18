import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import { Shop } from "./pages/Shop"
import Error404 from "./pages/Error404"
// import { products } from "./Data/data"
import { useState } from "react"
import { APIType, CartItemType } from "./Type/type"
import Blogs from "./pages/Blogs"
import ProductInfo from "./component/ProductInfo"

function App() {

  const [count, setCount] = useState<number>(0)
  const [click, setClick] = useState<boolean>(false)
  const [cartItem, setCartItem] = useState<CartItemType[]>([])
  const [items, setItems] = useState<CartItemType[]>([])
  const [homeProducts, setHomeProducts]= useState<APIType[]>([])
  const [shopProducts, setShopProducts] = useState<APIType[]>([])
  // const [quantity, setQuantity] = useState<number>(0)

  
  let allRoute = createBrowserRouter(
    [
      {
        path: '/',
        element: <Home count={count} setCount={setCount} click={click} setClick={setClick} cartItem={cartItem} setCartItem={setCartItem} items={items} setItems={setItems} homeProducts={homeProducts} setHomeProducts={setHomeProducts}/>
      },
      {
        path: '/:id',
        element: <ProductInfo count={count} setCount={setCount} click={click} setClick={setClick} cartItem={cartItem} setCartItem={setCartItem} items={items} setItems={setItems} shopProducts={shopProducts} />
      },
      {
        path: '/shop',
        element: <Shop  count={count} setCount={setCount} click={click} setClick={setClick} cartItem={cartItem} setCartItem={setCartItem} items={items} setItems={setItems} shopProducts={shopProducts} setShopProducts={setShopProducts} />
      },
      {
        path: '/blogs',
        element: <Blogs  count={count} setCount={setCount} click={click} setClick={setClick} cartItem={cartItem} setCartItem={setCartItem} items={items} setItems={setItems} />
      },
      {
        path: '/about',
        element: <About  count={count} setCount={setCount} click={click} setClick={setClick} cartItem={cartItem} setCartItem={setCartItem} items={items} setItems={setItems} />
      },
      {
        path: '*',
        element: <Error404 />
      }
    ]
  )
  
  return (
    <div>
      <RouterProvider router={allRoute} />
    </div>
  )
}

export default App
