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
        
        className=" flex  justify-between  itens-center h-24 max-w-[1240px] mx-auto px-4 pb-15px" >
           <h1 className="text-[#E6E6EA] text-4xl font-bold md:pl-50 my-10 "> Ativos
            
            <span className=" text-[#36D97D]  text-4xl font-medium 
            transition  "> Digitais</span>
             </h1>

             <div className="text-[#E6E6EA] flex text-3xl md:flex my-10">
                <img className="
                 transition duration-300 hover:scale-75 size-12 ml-10"    src={ativos} alt="ativos" />
           
             </div>
           
        </motion.div>
    )
}
export default Navbar;

  //  #273A73
  //  #36D97D 
  //  #E6E6EA