const AboutUsImg = require('/public/trees.jpeg')

import Image from 'next/image';

const AboutUs = () => {
    return (
        <section className="showCase-container flex items-center justify-center   ">
            <div className="container grid grid-cols-1 md:grid-cols-2 justify-center md:space-x-3 space-y-4 md:space-y-0">
                <div className="one  relative w-auto ">
                    <Image
                        src={AboutUsImg}
                        height={800}
                        layout="responsive"
                        alt="avatar picture" />
                </div>
                <div className="two flex items-center">
                    <div className="texts flex flex-col px-3 py-2 md:py-0 items-center space-y-3 md:h-[80%] ">
                        <h2 className="self-center md:self-start text-[20px] md:text-[35px]">Quem Somos!</h2>
                        <p className="text-[#6c757d] " >Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur eaque nihil illo est nobis possimus, maiores neque, unde sit vitae inventore cum id, expedita voluptatem earum voluptas suscipit! Ducimus, nostrum.
                        Quibusdam saepe error eligendi ut maiores reprehenderit provident porro dolor, dolorem, culpa quam consectetur! Illo expedita ea suscipit deleniti soluta facilis, et sed. Atque qui provident dolorum voluptatibus. Ipsam, libero!
                        Adipisci minus fuga natus, corporis id voluptatem iusto recusandae ratione inventore. Eveniet optio quae eos ipsam, voluptas non magni consectetur enim impedit neque eligendi esse in exercitationem? Rem, necessitatibus quae.
                        <br />
                        <br />
                        Recusandae, ad autem officiis doloremque quos in, velit, molestiae maxime ut vero sed saepe? Minus commodi sed aspernatur deserunt quidem ea sapiente reiciendis nobis! Exercitationem libero quia provident repellendus vero.
                        Id libero suscipit dolores iure, voluptatibus illo explicabo vitae, possimus similique dolorum quas cum non inventore. Quam nostrum reprehenderit aperiam nulla veniam quod ab, ipsa rem provident pariatur repellat dignissimos.
                        Error odit iste debitis tenetur sunt quos quisquam maiores cupiditate laboriosam dignissimos eligendi expedita omnis, est dolor eum saepe amet adipisci, rem quaerat velit accusantium! Maiores dicta commodi voluptates quae.</p>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutUs;