import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay } from "swiper";
import 'swiper/css';
import Image from 'next/image'
const Eolica = require('/public/eolica.jpg');
const Solar = require('/public/solar.jpg');
const Chapada = require('/public/chapada.jpg');
const Poco = require('/public/poco.jpg');

const Images = [
    {
        image: Eolica,
        title: 'Energia Eolica',
        description: 'Seja amigo do meio ambiente e produza energia sustentável.'
    },
    {
        image: Chapada,
        title: 'Preservação ambiental',
        description: 'Nós ajude a salvar o mundo, restaurando áreas desmatadas e preservando locais de natureza virgem'
    },
    {
        image: Solar,
        title: 'Energia Solar é autonomia',
        description: 'Seja amigo do meio ambiente e produza energia sustentável.'
    },
    {
        image: Poco,
        title: 'Poço Artesiano',
        description: 'Fure um poço em seu terreno. Faça uma avaliação conosco.'
    }
]

const Hero = () => {
    return (
        <>
            <div>
                <Swiper
                    className="h-[35vh] md:h-[60vh] "
                    effect="fade"
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false
                    }}
                    loop={true}
                    speed={500}z
                    spaceBetween={50}
                    slidesPerView={1}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    modules={[EffectFade, Autoplay]}
                >
                    {
                        Images.map((item, index) => (
                            <SwiperSlide className="relative" key={item + index}>
                                <div className="w-full h-full relative">
                                    <div className="w-full h-full bg-black left-0 top-0 absolute opacity-[.4] z-30" />
                                    
                                    <Image className="img img2" src={item.image} layout="fill" priority={true} alt="" />

                                    <div className="container  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                                    flex flex-col justify-center items-center gap-[10px] z-30
                                   
                                    ">
                                        <span className="px-2 py-1 bg-[#1b7e3c] rounded-l-xl rounded-bl-none rounded-b-xl mb-1" ><p className="logo text-white text-md">MandalaGeo</p></span>
                                        <h1 className="text-xl h-auto md:text-6xl text-white">{item.title}</h1>
                                        <p className="text-white  text-sm px-3 md:px-0 md:text-[18px] self-center" > {item.description}</p>
                                        <button className="bg-[#1b7e3c] text-white self-center py-2 px-4  rounded mt-2" >Saiba Mais</button>
                                    </div>
                                </div>
                        </SwiperSlide>
                            
                        )
                        
                        )
                    }
                   
                </Swiper>
            </div>
        </>
    )
}

export default Hero;