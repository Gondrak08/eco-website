import Image from 'next/image'

import Recycle from '../public/recycle.svg'
import Water from '../public/water.svg'
import WindMill from '../public/windmill.svg'
import SolarPanel from '../public/solarpanel.svg'
import Mining from '../public/mining.svg'

const Data = [
    {
        title: "Preservação Ambiental",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate quas optio, dolorem repudiandae nemo.",
        image: <Recycle width="auto" heigth="auto"  className="svg"/>
    },
    {
        title: "Água",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate quas optio, dolorem repudiandae nemo.",
        image: <Water width="auto" heigth="auto"  className="svg" />,
    },
    {
        title: "Energia Eolica",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate quas optio, dolorem repudiandae nemo.",
        image: <WindMill width="auto" heigth="auto"  className="svg" />
    },
    {
        title: "Energia Solar",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate quas optio, dolorem repudiandae nemo.",
        image: <SolarPanel width="auto" heigth="auto"  className="svg" />,
    },
    {
        title: "Mineração",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate quas optio, dolorem repudiandae nemo.",
        image: <Mining width="auto" heigth="auto" className="svg"  />
    },
]


const Services = () => {
    

    return (
        <section className="services-container flex align-center h-auto py-3 bg-[#f9faf7] ">
            <div className="w-[auto] max-w-[1100px] flex flex-col gap-[15px] m-auto  ">
                <div className="row justify-content-center my-5 text-center py-5">
                    <span className="logo text-[16px] text-[#73b925]">serviços</span>
                    <h2 className="text-[26px] lg:text-[36px]"  >
                        Prestamos variados serviços, <br /> com diversos <span className="text-[#73b925]">clientes</span> satisfeitos
                    </h2>
                </div>
                <div className="grid-cols-1 items-center  md:grid md:grid-cols-3 lg:grid-cols-5 flew-wrap justify-content-center gap-[15px] content-center g-lg-2 mb-5" >
                    {
                        Data.map((item, index) => (
                            <div key={item + index} className="card overflow-hidden  d-flex  bg-white py-4 px-5" >
                                <div className="services">
                                    <div className="icon" >
                                        <div className="icon-image">
                                            {item.image}
                                        </div>
                                    </div>
                                    <div className="texts">
                                        <p className="font-[22px] font-bold mb-[15px]" >{item.title}</p>
                                        <p className="mb-0 text-[#8c8c8c]  ">{item.description}</p>
                                    </div>
                                </div>
                            </div>
                        )
                        )
                    }
                </div>
            </div>
        </section>
    )
}

export default Services;