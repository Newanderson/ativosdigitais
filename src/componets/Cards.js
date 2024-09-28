
import ecomerce from '../img/ecommerce.png'
import treinamento from '../img/infoproduto.png'
import local from '../img/negocio.png'
import { motion } from 'framer-motion'

const Cards = () => {
    return(

        <div className='w-full p-3 '>
        <div className=" w-full bg-[#273A73] px-4 my-2 cursor-pointer xl:my-  sm:my-5">

            <motion.div
            initial={{ y:-100, opacity:0}}
            whileInView={{ y:0, opacity:1 }}
            transition={{delay:0.3, y:{type:"spring", stiffness:60},opacity:{duration:1}, ease:"eseaIn", duration:1}}>
                <h1 className='text-[#E6E6EA] center text-center text-3xl sm:text-3xl md:text-3xl  font-bold m-10'>
                 Acelere seus resultados
                </h1>
            
            </motion.div>

            

         <div className="max-w-[1200px] mx-auto grid md:grid-cols-3 gap-8  ">
         <motion.div
         initial={{ y:-100, opacity:0}}
         whileInView={{ y:0, opacity:1 }}
         transition={{delay:0.3, y:{type:"spring", stiffness:60},opacity:{duration:1}, ease:"eseaIn", duration:1
        }}
         
         className="xl:w-full flex flex-col border rounded-lg p-8  ursor-pointer" 
          
         >
            <img className='w-[120px] mx-auto' src={ecomerce} alt="/" />

            <h2 className="text-2xl font-bold text-[#36D97D] text-center ">E-commerce</h2>

            <p className='xl:w-[300px] text-center mx-auto text-[#E6E6EA] md:w-[120px] sm:w-[180px] 
            
            '>Trabalhamos para o crescimento do seu e-commerce, oferecendo soluções personalizadas e estratégias que maximizam o seu potencial de vendas online. Com nossa expertise, ajudamos a fortalecer sua presença digital, aumentar o tráfego qualificado e impulsionar conversões, garantindo que sua loja virtual alcance novos patamares de sucesso.</p>

            </motion.div>

            <motion.div
         initial={{ y:-100, opacity:0}}
         whileInView={{ y:0, opacity:1 }}
         transition={{delay:0.3, y:{type:"spring", stiffness:60},opacity:{duration:1}, ease:"eseaIn", duration:1
        }}
         
         className="xl:w-full flex flex-col border rounded-lg p-8  ursor-pointer" 
          
         >
            <img className='w-[120px] mx-auto' src={treinamento} alt="/" />

            <h2 className="text-2xl font-bold text-[#36D97D] text-center ">Treinamento</h2>

            <p className='xl:w-[300px] text-center mx-auto text-[#E6E6EA] md:w-[120px] sm:w-[180px] 
            
            '>Vamos explorar as habilidades e técnicas essenciais para se destacar em vendas, construir relacionamentos duradouros e alcançar resultados excepcionais. Vender não é apenas sobre fechar negócios; trata-se de entender as necessidades do cliente e oferecer soluções que realmente agreguem valor.</p>

            </motion.div>

            

            <motion.div 
            initial={{ y:-100, opacity:0}}
            whileInView={{ y:0, opacity:1 }}
            transition={{delay:0.3, y:{type:"spring", stiffness:60},opacity:{duration:1}, ease:"eseaIn", duration:1
           }}
            
            className=" flex flex-col border rounded-lg p-8 ">
            <img className='w-[120px]   bg-[#273A73] mx-auto' src={local} alt="/" />

            <h2 className="text-2xl font-bold text-[#36D97D] text-center ">Neg. local </h2>

            <p className='xl:w-[300px] text-center mx-auto   text-[#E6E6EA] md:w-[150px] sm:w-[180px] '>Analisamos o seu mercado e criamos campanhas adaptadas às necessidades específicas do seu negócio, garantindo que você se destaque da concorrência,utilizamos as melhores práticas de SEO, redes sociais e anúncios online para aumentar sua visibilidade e atrair mais clientes para sua loja.</p>
            
            </motion.div>
            

         </div>
          
         <button className=" flex pl-[60px] flex-col justify-center 
         bg-[#36d97d] w-[200px] rounded-md font-medium  my-[40px] p-3  mx-auto  text-[#273A73] text-center transition duration-300 hover:skew-y-2 hover:text-[#36d97d] 
         hover:bg-[#E6E6EA]  ">Potencializar</button>
        
        
            

        </div>

        </div>
    )
}
export default Cards;

  //  #273A73
  //  #36D97D 
  //  #E6E6EA


            
           