import React from "react";
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-black text-white pt-14 pb-3 -my-6">
            <div className=" flex-col md:flex-row gap-[50px] md:gap-0 w-full max-w-[1290px ] px-5 md:px-10 mx-auto flex items-center justify-between ">
                {/* LEFT START */}
                <div className="flex gap-[50px] md:gap-[75px] lg:gap-[100px] flex-col md:flex-row">
                    {/* MENU START */}
                    <div className="flex flex-col gap-3 shrink-0">
                        <div className="font-oswald font-medium uppercase text-sm ">
                            Find a store
                        </div>
                        <div className="font-oswald font-medium uppercase text-sm ">
                            become a partner
                        </div>
                        <div className="font-oswald font-medium uppercase text-sm ">
                            sign up for email
                        </div>
                        <div className="font-oswald font-medium uppercase text-sm ">
                            send us feedback
                        </div>
                        <div className="font-oswald font-medium uppercase text-sm ">
                            student discount
                        </div>
                    </div>
                    {/* MENU END */}

                    {/* NORMAL MENU START */}
                    <div className="flex gap-[50px] md:gap-[75px] lg:gap-[100px] shrink-0">
                        {/* MENU START */}
                        <div className="flex flex-col gap-3 ">
                            <Link to={'/d'} className="font-oswald font-medium uppercase text-sm">
                                get help
                            </Link>
                            <Link to={'/d'} className="text-sm text-white/[0.5] hover:text-white cursor-pointer">
                                Order Status
                            </Link>
                            <Link to={'/d'} className="text-sm text-white/[0.5] hover:text-white cursor-pointer">
                                Delivery
                            </Link>
                            <Link to={'/d'} className="text-sm text-white/[0.5] hover:text-white cursor-pointer">
                                Returns
                            </Link>
                            <Link to={'/p'} className="text-sm text-white/[0.5] hover:text-white cursor-pointer">
                                Payment Options
                            </Link>
                            <Link to={'/contact'} className="text-sm text-white/[0.5] hover:text-white cursor-pointer">
                                Contact Us
                            </Link>
                        </div>
                        {/* MENU END */}

                        {/* MENU START */}
                        <div className="flex flex-col gap-3">
                            <Link to={'/a'} className="font-oswald font-medium uppercase text-sm">
                                About nike
                            </Link>
                            <Link to={'/a'} className="text-sm text-white/[0.5] hover:text-white cursor-pointer">
                                News
                            </Link>
                            <Link to={'/a'} className="text-sm text-white/[0.5] hover:text-white cursor-pointer">
                                Careers
                            </Link>
                            <Link to={'/a'} className="text-sm text-white/[0.5] hover:text-white cursor-pointer">
                                Investors
                            </Link>
                            <Link to={'/a'} className="text-sm text-white/[0.5] hover:text-white cursor-pointer">
                                Sustainability
                            </Link>
                        </div>
                        {/* MENU END */}
                    </div>
                    {/* NORMAL MENU END */}
                </div>
                {/* LEFT END */}

                {/* RIGHT START */}
                <div className="flex gap-4 justify-center md:justify-start">
                    <div
                    onClick={() =>{
                      window.open('https://www.facebook.com/profile.php?id=100090373562700',"_blank" )
                    }}
                     className="w-10 h-10 rounded-full bg-white/[0.25] flex items-center justify-center text-black hover:bg-white/[0.5] cursor-pointer">
                        <FaFacebookF size={20} />
                    </div>
                    <div
                        onClick={() =>{
                          window.open('https://sheikharbab.github.io/portfolio/',"_blank" )
                        }}
                    className="w-10 h-10 rounded-full bg-white/[0.25] flex items-center justify-center text-black hover:bg-white/[0.5] cursor-pointer">
                        <FaTwitter size={20} />
                    </div>
                    <div
                        onClick={() =>{
                          window.open('https://sheikharbab.github.io/portfolio/',"_blank" )
                        }}
                     className="w-10 h-10 rounded-full bg-white/[0.25] flex items-center justify-center text-black hover:bg-white/[0.5] cursor-pointer">
                        <FaYoutube size={20} />
                    </div>
                    <div
                        onClick={() =>{
                          window.open('https://www.instagram.com/arbab_zafar4',"_blank" )
                        }}
                     className="w-10 h-10 rounded-full bg-white/[0.25] flex items-center justify-center text-black hover:bg-white/[0.5] cursor-pointer">
                        <FaInstagram size={20} />
                    </div>
                </div>
                {/* RIGHT END */}
            </div>
            <div className="flex justify-between mt-10 flex-col md:flex-row gap-[10px] md:gap-0 w-full max-w-[1290px ] px-5 md:px-10 mx-auto flex items-center justify-between ">
                {/* LEFT START */}
                <div
                onClick={() =>{
                    window.open('https://sheikharbab.github.io/portfolio/', "_blank")
                }}
                className="text-[12px] text-white/[0.5] hover:text-white cursor-pointer text-center md:text-left">
                    © 2023 Nike, Inc. All Rights Reserved
                </div>
                {/* LEFT END */}

                {/* RIGHT START */}
                <div className="flex gap-2 md:gap-5 text-center md:text-left flex-wrap justify-center">
                    <div onClick={() =>{
                        window.open('https://sheikharbab.github.io/portfolio/', "_blank")
                    }} className="text-[12px] text-white/[0.5] hover:text-white cursor-pointer">
                        Guides
                    </div>
                    <div 
                    onClick={() =>{
                        window.open('https://sheikharbab.github.io/portfolio/', "_blank")
                    }}
                    className="text-[12px] text-white/[0.5] hover:text-white cursor-pointer">
                        Terms of Sale
                    </div>
                    <div
                    onClick={() =>{
                        window.open('https://sheikharbab.github.io/portfolio/', "_blank")
                    }}
                     className="text-[12px] text-white/[0.5] hover:text-white cursor-pointer">
                        Terms of Use
                    </div>
                    <div
                    onClick={() =>{
                        window.open('https://sheikharbab.github.io/portfolio/', "_blank")
                    }}
                     className="text-[12px] text-white/[0.5] hover:text-white cursor-pointer">
                        Privacy Policy
                    </div>
                </div>
                {/* RIGHT END */}
            </div>
        </footer>
    );
};

export default Footer;