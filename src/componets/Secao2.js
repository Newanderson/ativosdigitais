import ilustra from '../img/ilustra.png';
import { motion } from 'framer-motion';



const Secao2 = () => {
    return(
        <div className="w-full bg-[#E6E6EA] py-16 px-4 text-[#273A73] ">
            <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">


            <div className=' flex flex-col justify-center m-8'>
                    <motion.h1 
                    initial={{ x:-100, opacity:0}}
                    whileInView={{ x:0, opacity:1 }}
                    transition={{delay:0.2, x:{type:"spring", stiffness:60},opacity:{duration:1}, ease:"eseaIn", duration:1}}
                    
                    className='d:text-5xl sm:text-3xl text-3xl  font-bold  pt-10'>Mantenha-se Atualizado</motion.h1>

                    <motion.p
                     initial={{ x:-100, opacity:0}}
                     whileInView={{ x:0, opacity:1 }}
                     transition={{delay:0.2, x:{type:"spring", stiffness:60},opacity:{duration:1}, ease:"eseaIn", duration:1}}
                    

                    className='font-bold text-[#36D97D] pt-5'>Experiência do cliente pode levar a um aumento significativo </motion.p>
                     
                    

                    

                    <motion.p 
                    initial={{ x:-100, opacity:0}}
                    whileInView={{ x:0, opacity:1 }}
                    transition={{delay:0.2, x:{type:"spring", stiffness:60},opacity:{duration:1}, ease:"eseaIn", duration:1}}
                    className='pt-3'>O Antes de qualquer estratégia, é crucial entender quem são seus clientes. Realize pesquisas e colete dados demográficos, comportamentais e psicográficos. Crie personas detalhadas que representem seus clientes ideais.
                    Escalar um negócio com marketing de crescimento é um processo contínuo que combina análise, criatividade e adaptação. Ao focar na experiência do cliente, testar novas abordagens e aprender com os dados, você pode impulsionar o crescimento de sua empresa de forma eficaz e sustentável. </motion.p>

                  

                </div>
                
                <motion.img
                initial={{ x:100, opacity:0}}
                whileInView={{ x:0, opacity:1 }}
                transition={{delay:0.3, x:{type:"spring", stiffness:60},opacity:{duration:1}, ease:"eseaIn", duration:1
               }}

                className='w-[800px] mx-auto my-5
                justify-center center
                md:200px ' src={ilustra} alt='/' />

                

            </div>
            </div>
    )
}
export default Secao2;

  //  #273A73
  //  #36D97D 
  //  #E6E6EA