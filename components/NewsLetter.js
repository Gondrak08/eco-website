import Image from 'next/image';
const BgImage = require('/public/grass.jpeg')
const NewsLetter = () => {
    return (
        <div className="newsLetter-container h-[30vh] relative flex items-center justify-center">
            <div className="container flex flex-col items-center space-y-4 z-50">
                <div className="texts px-3 md:px-0 flex flex-col items-center space-y-2">
                    <span className="self-start uppercase text-white text-[14px]" >Newsletter</span>
                    <h3 className="text-white font-bold text-[16px] md:text-[24px]" >Inscreva-se agora em nossa newsletter e receba as ultimas notícias!</h3>
                </div>
                <div className="inputs flex-col items-center  w-full flex space-y-3 px-2">
                    <input className="w-[100%] md:w-[45vw] h-[3em] "
                        type="text"
                        placeholder="inscreva o seu email" />
                    <button className="bg-white hover:outline-2  hover:outline-green-500 hover:outline w-auto md:w-[20vw] self-center border-round text-green-500 px-3 py-2">
                        inscreva-se agora        
                    </button>
                </div>
            </div>
            <div className="w-full h-full bg-[#1b7e3c] left-0 top-0 absolute opacity-[0.8] z-30" />
            <div className="image-container">
                <Image src={BgImage} className="image" layout="fill" alt="" loading="eager" priority={true} />
            </div>
        </div>
    )    

}


export default NewsLetter;
