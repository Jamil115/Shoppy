import { FaApple, FaFacebook, FaInstagram, FaLinkedin, FaPinterest } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { PiCopyright } from "react-icons/pi";

export default function HomeFooter() {
    return (
        <div>
            <div className="grid md:grid-cols-2 sm:grid-cols-1 sm:justify-items-center sm:gap-6 sm:h-44 bg-[#031b3c] h-32">
                <div className="flex flex-col justify-center items-start ml-32">
                    <p className="text-white font-semibold text-xl mb-2">Sign Up For Newsletters</p>
                    <p className=" text-xs text-slate-400">Get E-mail updates about our latest shop and <span className="text-yellow-500">special offers</span></p>
                </div>
                <div className="flex justify-start items-center">
                    <input type="text" placeholder="Your email address" className="p-2 w-80 rounded-l-sm" />
                    <button className="bg-[#07796e] text-white p-2 w-28 rounded-r-sm">Sign Up</button>
                </div>
            </div>

            <div className="grid grid-cols-6 ">
                <div className="col-span-2">
                    <img src="/public/imgs/logo.webp" alt="" className="w-36 mt-10 ml-20" />

                    <p className="font-bold ml-24 mb-2">Contact</p>
                    <p className="font-light ml-24"><span className="font-semibold">Address</span>: 115/A Street no 31, Barcelona, Spain </p>
                    <p className="font-light ml-24"><span className="font-semibold">Phone</span>: 01766609696</p>
                    <p className="font-light ml-24"><span className="font-semibold">Hours</span>: 10:00-18:00 Sun-Thu</p>

                    
                </div>

                <div className="mt-16">
                    <p className="font-bold">About</p>
                    <div className="font-light pt-3">
                        <p className="pb-1">About Us</p>
                        <p className="pb-1">Delivery Information</p>
                        <p className="pb-1">Privacy Policy</p>
                        <p className="pb-1">Terms & Conditions</p>
                        <p className="pb-1">Contact Us</p>
                    </div>
                </div>

                <div className="mt-16">
                    <p className="font-bold">My Account</p>
                    <div className="font-light pt-3">
                        <p className="pb-1">Sign in</p>
                        <p className="pb-1">View Cart</p>
                        <p className="pb-1">My Wishlist</p>
                        <p className="pb-1">Track My Order</p>
                        <p className="pb-1">Help</p>
                    </div>
                </div>

                <div className="mt-16 col-span-2">
                    <p className="font-bold pb-4">Install App</p>
                    <div>
                        <p className="font-light pb-3">From App Store or Google Play</p>
                        <div className="flex gap-2">
                            <button className="px-4 py-1 flex gap-1 border-2 border-slate-300 rounded-sm">
                                <IoLogoGooglePlaystore className="h-6" />
                                <p className="">Google Play</p>
                            </button>
                            <button className="px-4 py-1 flex gap-1 border-2 border-slate-300 rounded-sm">
                                <FaApple className="h-6" />
                                <p className="">App Store</p>
                            </button>
                        </div>
                    </div>

                    <p className="font-bold mt-6">Follow Us</p>
                    <div className="flex gap-3 mt-3 pb-5">
                        <button className="text-xl"><FaFacebook /></button>
                        <button className="text-xl"><FaXTwitter /></button>
                        <button className="text-xl"><FaLinkedin /></button>
                        <button className="text-xl"><FaInstagram /></button>
                        <button className="text-xl"><FaPinterest /></button>
                        <button className="text-xl"><IoLogoYoutube /></button>
                    </div>
                </div>
            </div>


            <div className="flex justify-center py-5">
                <p className="flex font-light">TM <span className="pt-1 px-1"><PiCopyright /></span> 2024 - Jamil Khan Riyed - All Rights Reserved.</p>
            </div>
        </div>
    )
}
