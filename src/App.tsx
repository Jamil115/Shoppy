import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import { Store } from "./pages/Store"
import Error404 from "./pages/Error404"
import { products } from "./Data/data"

function App() {
  let allRoute = createBrowserRouter(
    [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/store',
        element: <Store proList={products} />
      },
      {
        path: '/about',
        element: <About />
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
