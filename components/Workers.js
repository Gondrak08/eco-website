import { ShareLinks } from './index';
import Image from 'next/image'
const Avatar = require('/public/avatar.png')
const Data = [
    {
        name: 'Wolflan Pimentel',
        title: 'Geólogo',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate quas optio, dolorem repudiandae nemo.',
        image: Avatar
    },
    {
        name: 'Suzana Ferreira',
        title: 'Eng. Ambiental',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate quas optio, dolorem repudiandae nemo.',
        image: Avatar
    },
    {
        name: 'Pedro Barbosa',
        title: 'Advogado',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate quas optio, dolorem repudiandae nemo.',
        image: Avatar
    },
    {
        name: 'Ana Pimenta',
        title: 'Administradora',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate quas optio, dolorem repudiandae nemo.',
        image: Avatar
    },
    {
        name: 'Felipe Souza',
        title: 'Eng. de Software',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate quas optio, dolorem repudiandae nemo.',
        image: Avatar
    }
]


const Workers = () => {
    return (
        <div className="aboutUs-container flex items-center justify-center  px-5 bg-[#f8f9fa] py-8">
            <div className="container  flex flex-col gap-10 items-center">
                <div className="texts flex flex-col justify-center items-center gap-[5px]">
                    <span className="logo text-[16px] md:text-[20px] text-[#73b925]" >Time técnico.</span>
                    <h2 className="text-[20px] text-center lg:text-[36px]">conheça a nossa equipe</h2>
                </div>
                <div className="grid-cols-1 items-center  md:grid md:grid-cols-3 lg:grid-cols-5 flew-wrap justify-content-center gap-[15px] content-center g-lg-2 mb-5" >
                    {
                        Data.map((item, index) => (
                            <div key={item + index} className="card overflow-hidden relative  d-flex  bg-white py-4 px-5" >
                                <div className="aboutUs">
                                    <div className="icon relative" >
                                        <div className="avatar-image">
                                            <Image
                                                src={item.image}
                                                layout="responsive"
                                                alt="avatar picture" />
                                        </div>
                                    </div>
                                    <div className="texts mt-4 flex flex-col ">
                                        <p className="font-bold text-center text-[18px]" >{item.name}</p>
                                        <p className="text-[16px] text-center text-[#1b7e3c] text-bold mb-1" >{item.title}</p>
                                        <ShareLinks fontSize="15" classProps="justify-center my-2" />
                                        <p className="mb-0 text-[#8c8c8c]  ">{item.description}</p>
                                    </div>
                                </div>
                            </div>
                        
                        )
                    
                    
                    )
                    }
            </div>
            </div>
        </div>
    )
}

export default Workers;