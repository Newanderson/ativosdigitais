


import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import {motion} from "framer-motion"


const Redes = () => {
    return(

        <motion.div 
        initial={{ y:-100, opacity:0}}
        whileInView={{ y:0, opacity:1 }}
        transition={{delay:0.3, y:{type:"spring", stiffness:60},opacity:{duration:1}, ease:"eseaIn", duration:1
       }}
        

        className="text-center sm:text-3xl text-3xl p-5 text-[#E6E6EA]">
        
            


            <div className="flex  justify-center gap-3 transition duration-300  ">
           
            <p className=" hover:scale-75 transition duration-300 "><FaWhatsapp /></p>
            <p className=" hover:scale-75 transition duration-300 "><FaInstagram /></p>
            <p className=" hover:scale-75 transition duration-300 "><FaFacebook /></p>
           
            
           
             </div>

        </motion.div>
    )
}
export default Redes;

 //  #273A73
 //  #36D97D 
 //  #E6E6EA