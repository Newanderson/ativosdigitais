import React from "react";
import ativos from '../img/ativos.png'
import {motion} from 'framer-motion'

//icons



const Navbar = () => {
    return(
        <motion.div
        
        initial={{ y:-100, opacity:0}}
        animate={{ y:0, opacity:1 }}
        transition={{delay:0.3, y:{type:"spring", stiffness:60},opacity:{duration:1}, ease:"eseaIn", duration:1
       }}
        
        className=" flex text-2xl
      
        
        " >
           <h1 className="w-full text-center mx-auto text-[#E6E6EA] font-bold my-5 "> Ativos
            
            <span className="w-full text-center mx-auto text-[#36D97D]  font-medium 
              "> Digitais</span>
             </h1>

             
           
        </motion.div>
    )
}
export default Navbar;

  //  #273A73
  //  #36D97D 
  //  #E6E6EA