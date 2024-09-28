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
        
        className=" flex ml-5   mx-auto px-4 
      
        
        " >
           <h1 className="w-full  text-[#E6E6EA] text-4xl font-bold md:pl-50 my-2 "> Ativos
            
            <span className="w-full  text-[#36D97D]  text-4xl font-medium 
              "> Digitais</span>
             </h1>

             <div className=" text-[#E6E6EA] flex text-3xl mr-5 md:flex my-2 ml-[-90px]">
                <img className="
                 transition duration-300 hover:scale-75 size-[70px] ml-5"    src={ativos} alt="ativos" />
           
             </div>
           
        </motion.div>
    )
}
export default Navbar;

  //  #273A73
  //  #36D97D 
  //  #E6E6EA