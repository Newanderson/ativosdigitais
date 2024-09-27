import { motion } from "framer-motion";

const Home = () => {
    return(
        <div className="text-[#E6E6EA] ">
            <div className=" max-w-[800px] mt-[-10px] h-screen mx-auto text-center flex flex-col justify-center  pd-80px  ">
            <motion.p 
                 initial={{ y:-100, opacity:0}}
                 animate={{ y:0, opacity:1 }}
                 transition={{delay:0.3, y:{type:"spring", stiffness:60},opacity:{duration:1}, ease:"eseaIn", duration:1
                }}
            className="text-[#36d97d] font-bold p-15 text-2xl">marketing growth</motion.p>

            <motion.h1 
                 initial={{ y:-100, opacity:0}}
                 animate={{ y:0, opacity:1 }}
                 transition={{delay:0.3, y:{type:"spring", stiffness:60},opacity:{duration:0.6}, ease:"eseaIn", duration:1
                }}
            className="md:text-5xl sm:text-3xl text-3xl font bold ">Potencialize suas Vendas</motion.h1>

            <motion.p 
             initial={{ y:-100, opacity:0}}
             animate={{ y:0, opacity:1 }}
             transition={{delay:0.3, y:{type:"spring", stiffness:30},opacity:{duration:0.6}, ease:"eseaIn", duration:1
            }}
            className="md:text-2xl sm:text-lg text-xl  p-3 text-gray-400 "> Explorando o potencial do digitail para conquistar resultados</motion.p>

            <motion.button 
              
            className="bg-[#36d97d] w-[200px] rounded-md font-medium  my-5 p-3 mx-auto  text-[#273A73]   transition duration-300 hover:skew-y-2 hover:text-[#36d97d] 
             hover:bg-[#E6E6EA] ">Potencializar</motion.button>
            </div>
          
           
        </div>
    )
}
export default Home;

  //  #273A73
  //  #36D97D 
  //  #E6E6EA