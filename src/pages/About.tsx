import Footer from "@/component/Footer";
import Navbar from "@/component/Navbar";
import { AboutType } from "@/Type/type";
import AboutImg from "/public/imgs/AboutImg.jpg"

export default function About({ count, setClick, cartItem, setCount, setCartItem, items, setItems, click }: AboutType) {

    return (
        <div>
            <div className="bg-[#e3e6f3] sticky top-0">
                <Navbar count={count} setCount={setCount} click={click} setClick={setClick} cartItem={cartItem} setCartItem={setCartItem} items={items} setItems={setItems} />
            </div>
            <div className="bg-[url('/public/imgs/AboutBanner.png')] h-[300px] flex flex-col justify-center items-center ">
                <h1 className="font-bold text-5xl text-center text-white pb-4">#KnowUs</h1>
                <p className="text-white">Lorem ipsum dolor  amet consectetur.</p>
            </div>

            <div className="my-20 flex gap-10">
                <div className="ml-32">
                    <img src={AboutImg} alt="" className="w-[550px] h-[370px]" />
                </div>
                <div className="mt-10 w-[600px] ">
                    <h1 className="mb-4 font-bold line-clamp-1 text-5xl font-serif">Who we Are?</h1>
                    <p className="font-light">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe exercitationem debitis laborum velit ratione at deleniti magnam, id repudiandae dolorem, numquam obcaecati rem ullam mollitia nobis laboriosam aliquam. Unde fugiat accusamus error eligendi harum sed, vel facere. Ex consectetur eveniet ad quasi tempora fugit aliquid, atque obcaecati? Eos omnis totam at perferendis enim vel aliquam asperiores ad odit eius natus perspiciatis, earum quibusdam laboriosam ea doloremque non explicabo iste distinctio, delectus voluptatum, quam consequatur inventore! Quod dolorum nostrum possimus et est? Accusantium animi eos odio dolor, pariatur odit neque obcaecati veniam, consequuntur aliquid itaque error dolores consectetur, sit quo illo.
                    </p>
                </div>
            </div>

            <div>
                <Footer />
            </div>

        </div>
    )
}
