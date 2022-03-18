
const Contact = () => {
    return (
        <div className="contact-container flex justify-center items-center bg-[#f9faf7] py-8" >
            <div className="container flex h-full flex-col space-y-5 md:space-y-3 items-center">
                <div className="text w-auto flex flex-col items-center">
                    <h2 className="text-[20px] md:text-[36px]  " >Fale Conosco</h2>
                    <span className="text-[16px]">compartilhe suas idéias!</span>
                </div>
                <div className="inputs w-full max-w-[35em] h-full flex space-y-2 flex-col px-5 md:px-0">
                    <input  type="text" placeholder="Nome" />
                    <input type="email" placeholder="email" />
                    <input type="text" placeholder="assunto" />
                    <textarea name="" id="" cols="30" rows="10" placeholder="escrava a sua mensagem"
                    style={{resize:'none'}}>

                    </textarea>
                    <button className="
                    bg-[#1b7e3c]
                    text-white
                    py-2 px-4
                    rounded
                    self-end
                    m-t2">
                        enviar
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Contact;