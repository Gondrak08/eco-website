import { useState } from 'react';
import { HiMenuAlt4 } from 'react-icons/hi'
import { AiOutlineClose } from 'react-icons/ai'

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const NavLiks = ({ title, props }) => {
        return (
            <li className={`mx-4 cursor-pointer ${props}`} >
                {title}
            </li>
        )
    }

    return (
        <div className="w-full bg-[#1b7e3c] flex md:justify-center justify-center items-center p-4" >

            <div className="container flex justify-between">
                <div className=" flex-initial justify-center items-center">
                    <a href="#" className="w-3 cursor-pointer">
                        <p className="logo text-white text-[20px] md:text-[30px] hover:opacity-[0.5] ">MandalaGeo</p>
                    </a>
                </div>

                <ul className="text-white  md:flex hidden list-none flex-row justify-between items-center flex-initial text-[18px]">
                    {["Home", "Serviços", "SobreNós", "Contato"].map((item, index) => (
                        <NavLiks key={item + index} title={item} props="hover:text-[#66ff66]" />
                    ))}
                </ul>
                <div className="flex relative md:hidden">
                    {
                        isMenuOpen ?
                            <AiOutlineClose
                                fontSize={28}
                                className="text-white md:hidden cursor-pointer"
                                onClick={() => setIsMenuOpen(false)}
                            />
                            :
                            <HiMenuAlt4
                                fontSize={28}
                                className="text-white md:hidden cursor-pointer"
                                onClick={() => setIsMenuOpen(true)}
                            />
                    }
                    {
                        isMenuOpen && (
                            <ul className="z-10 fixed top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in" >
                                <li className="text-xl w-full my-2">
                                    <AiOutlineClose onClick={() => { setIsMenuOpen(false) }} />
                                </li>
                                {["Home", "Serviços", "SobreNós", "Contato"].map((item, index) => (
                                    <NavLiks key={item + index} title={item} props="my-2 text-lg hover:text-[#66ff66]" />
                                ))}
                            </ul>
                        )
                    }
                </div>
            </div>
            
       </div>
    )
}

export default Navbar;