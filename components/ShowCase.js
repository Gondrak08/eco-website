const SCImage = require('/public/showcase.jpeg')

import Image from 'next/image';




const ShowCase = () => {
    return (
        <section className="showCase-container flex items-center justify-center   ">
            <div className="container grid grid-cols-1 md:grid-cols-2 justify-center md:space-x-3 space-y-4 md:space-y-0">
                <div className="two flex items-center">
                    <div className="texts flex flex-col px-3 items-center space-y-3 md:h-[80%] ">
                        <h2 className="text-[20px] md:text-[35px]">Ajude-nos a salvar o nosso planeta!</h2>

                        <p className="text-[#6c757d]"  >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam iusto dicta dolor quos, possimus modi vero debitis. Nulla dolore dolores molestiae quae architecto eveniet velit blanditiis, voluptas cupiditate sed a!</p>

                        <p className="text-[#6c757d] " >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam iusto dicta dolor quos, possimus modi vero debitis. Nulla dolore dolores molestiae quae architecto eveniet velit blanditiis, voluptas cupiditate sed a!</p>

                        <button className="bg-green-500 hover:bg-white  hover:text-green-500 hover:border-green-500 border-white border-[2px]
                        self-start
                        w-[fit-content] p-3 text-white font-bold text-[18px]  rounded">
                            Contribua você também com esta causa !
                        </button>
                    </div>
                </div>
                <div className="one  relative w-auto ">
                    <Image
                        src={SCImage}
                        height={800}
                        layout="responsive"
                        alt="avatar picture" />
                </div>
            </div>
        </section>
    )
}

export default ShowCase;