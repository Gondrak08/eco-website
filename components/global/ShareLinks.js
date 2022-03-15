import { AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai'
import { FaFacebookF} from 'react-icons/fa'
import { RiLinkedinFill } from 'react-icons/ri';

const ShareLinks = ({ fontSize, classProps}) => {
    return (
        <div className={`social-links flex space-x-3  ${classProps}`}>
            <a href="#" className=" bg-[#1b7e3c] hover:bg-[#66ff66] p-1 rounded" >
                <AiOutlineTwitter
                    fontSize={fontSize} color={'white'}
                />
            </a>
            <a href="#" className=" bg-[#1b7e3c] hover:bg-[#66ff66] p-1 rounded" >
                <AiOutlineInstagram
                    fontSize={fontSize} color={'white'}
                />
            </a>
            <a href="#" className=" bg-[#1b7e3c] hover:bg-[#66ff66] p-1 rounded">
                <FaFacebookF
                    fontSize={fontSize} color={'white'}
                />
            </a>
            <a href="#" className=" bg-[#1b7e3c] hover:bg-[#66ff66] p-1 rounded">
                <RiLinkedinFill
                    fontSize={fontSize} color={'white'}
                />
            </a>
        </div>
    )
}

export default ShareLinks