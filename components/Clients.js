import Image from 'next/image';
import ClientLogo from '/public/clientLogo.png'


const Clients = () => {
    return (
        <div className="clients-container w-full  py-8 h-full flex flex-col bg-[#1b7e3c] justify-center items-center " >
            <h2 className="logo self-center text-[20px] md:text-[36px] text-white " > Conheça alguns dos nossos clientes</h2>
            <div className="container md:gap-5  h-full py-8 justify-evenly items-center flex-wrap flex ">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10,11,12].map(index => (
                    <a href="" key={index} className="clientLogo" >
                        <Image
                            src={ClientLogo}
                            alt="avatar picture"
                            className="img"
                            loading="eager"
                            priority={true}
                        />
                    </a>    
                ))}
            </div>
        </div>
    )
}

export default Clients;