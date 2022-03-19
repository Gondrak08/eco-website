import { ShareLinks } from './index'

import Image from 'next/image';
const BgImage = require('/public/footer.jpg')
const Footer = () => {
    const NavLiks = ({ title, props }) => {
        return (
            <li className={`cursor-pointer  ${props}`} >
                {title}
            </li>
        )
    }
    return (
        <footer className="footer relative flex items-center justify-center h-full md:h-[45vh]">
            <section className="f-one flex justify-center items-center relative h-full w-full ">
                <div className="container h-[90%] grid grid-cols-1 md:grid-cols-3 relative z-50 space-x-5 py-5 px-3">
                    <div className="flex flex-col space-y-3 px-4 md:px-0">
                        <a href="#" className=" cursor-pointer">
                            <p className="logo w-min text-white text-[20px] md:text-[30px] hover:opacity-[0.5] ">MandalaGeo</p>
                        </a>
                        <p className="text-[#f8f9fa] text-[16px]" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit at, enim fugit placeat error, fuga adipisci, culpa mollitia sint ea iste sed soluta! Magnam corporis laborum atque aperiam nihil suscipit?
                        </p>
                        <ShareLinks fontSize="16" />
                    </div>
                    <div className="links flex flex-col md:justify-self-center  space-y-5 mb-2">
                        <h3 className="text-white text-left  font-bold  text-[20px] pt-2" >Serviços</h3>
                        <ul className="text-[#fff] text-[17px] flex list-none flex-col flex-wrap  items-left space-y-2 ">
                            {["Reciclagem", "Sondagem de poços", "Energia Solar", "Energia Eólica", "Reflorestamento", "Demarcação de Territórios", "Mineração" ].map((item, index) => (
                                <NavLiks classn key={item + index} title={item} props="hover:text-[#66ff66]"  />
                            ))}
                        </ul>
                    </div>
                    <div className="services flex flex-col space-y-5 mb-1">
                        <h3 className="text-white font-bold  text-[20px] pt-2" >Links</h3>
                        <ul className="text-white text-[18px] flex list-none flex-col flex-wrap  items-left space-y-2">
                            {["Home", "Serviços", "SobreNós", "Contato"].map((item, index) => (
                                <NavLiks key={item + index} title={item} props="hover:text-[#66ff66]"  />
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="w-full h-full bg-black left-0 top-0 absolute opacity-[0.7] z-30" />
                <div className="image-container">
                    <Image src={BgImage} className="image" layout="fill" alt="" loading="eager" priority={true} />
                </div>
            </section>
            <section></section>
        </footer>
    )
}

export default Footer;