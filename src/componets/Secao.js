import montanha from '../img/montanha.png';
import { motion } from 'framer-motion';



const Secao = () => {
    return(
        <div className="w-full bg-[#E6E6EA] py-16 px-4 text-[#273A73] ">
            <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
                <motion.img 
 
                 initial={{ x:-100, opacity:0}}
                 whileInView={{ x:0, opacity:1 }}
                 transition={{delay:0.2, x:{type:"spring", stiffness:60},opacity:{duration:1}, ease:"eseaIn", duration:1}}
                 
                 className='w-[500px] mx-auto my-5 ' src={montanha} alt='/'/>

                <div className=' flex flex-col justify-center m-8'>
                    <motion.h1 
                    initial={{ x:100, opacity:0}}
                    whileInView={{ x:0, opacity:1 }}
                    transition={{delay:0.3, x:{type:"spring", stiffness:60},opacity:{duration:1}, ease:"eseaIn", duration:1
                   }}
                    
                    className='d:text-5xl sm:text-3xl text-3xl  font-bold pt-10'>Chegando ao topo</motion.h1>

                    <motion.p 
                     initial={{ x:100, opacity:0}}
                     whileInView={{ x:0, opacity:1 }}
                     transition={{delay:0.3, x:{type:"spring", stiffness:60},opacity:{duration:1}, ease:"eseaIn", duration:1
                    }}
                    
                    className='font-bold text-[#36D97D] pt-5'>  Fique atento às novas tendências e tecnologias, e esteja disposto a adaptar suas estratégias conforme necessário. </motion.p>

                    <motion.p 
                    
                    initial={{ x:100, opacity:0}}
                    whileInView={{ x:0, opacity:1 }}
                    transition={{delay:0.3, x:{type:"spring", stiffness:60},opacity:{duration:1}, ease:"eseaIn", duration:1
                   }}

                    className='pt-3'>No cenário competitivo atual, escalar um negócio requer mais do que boas ideias; é essencial ter uma estratégia sólida de marketing de crescimento. O marketing de crescimento, ou growth marketing, foca em experimentação contínua e em dados para impulsionar o crescimento de forma sustentável. </motion.p>
                 
                    <button 
                     
                    
                    
                    className=" bg-[#36d97d] w-[200px] rounded-md font-medium  my-10 p-3  text-[#273A73] mx-auto htransition duration-300 hover:skew-y-2 hover:text-[#E6E6EA] 
                    hover:bg-[#273A73]

                   ">Potencializar</button>
                    

                </div>

            </div>
           
          
           
        </div>
    )
}
export default Secao;

  //  #273A73
  //  #36D97D 
  //  #E6E6EA