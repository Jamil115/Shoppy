import { Link } from "react-router-dom";

export default function Navbar() {
    // console.log(count)
    return (
        <div className="w-11/12">
            <ul className="flex gap-16 py-5 font-semibold">
                <li className="ml-10"> <Link to={'/'}>Home</Link></li>
                <li> <Link to={'/store'}>Store</Link> </li>
                <li> <Link to={'/about'}>About</Link> </li>
            </ul>

        </div>
    )
}

