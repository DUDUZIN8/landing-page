import { RiWhatsappLine } from 'react-icons/ri'
import { IoCart } from 'react-icons/io5'
import { FaTruck } from 'react-icons/fa'
import { PiStampFill } from 'react-icons/pi'
import fundo2 from '../../assets/img/fundo2.png'
import imageWoman from '../../assets/img/image.png'
import './page2.css'

export const Pagina2 = () => {
  return (
    <div className='container-page2' id='products'>
      <div className='quader-white'></div>
      <h2 className='title'>Esse produto serve pra mim?</h2>
      <p className='text2'>
        Com experiência de 2 décadas de Mercado Publicitário o My Logo produz
        capas de antena de alarme com qualidade fotográfica e garantia de prazo
        de entrega!
      </p>
      <p className='bolder-text'>
        Não está atraindo público para dentro da loja? <br /> E quer ter
        tranquilidade com a logística de sua campanha?
      </p>
      <p className='texto2'>
        A capa de antena de alarme é uma poderosa mídia, com grande capacidade
        de <br /> atrair clientes para dentro do ponto de venda!
        <br /> Produza com quem tem grande compromisso com a logística da tua{' '}
        <br />
        campanha!
      </p>
      <div className='button-content2'>
        <button className='button-whatsapp2'>
          <RiWhatsappLine className='whatsapp-image2' />
          Solicitar Orçamento
        </button>
      </div>
      <div className='things-container2'>
        <div className='things2'>
          <IoCart size={35} className='position-icon2' />
          <p className='guide2'>Compra 100% Segura</p>
        </div>
        <div className='things2'>
          <FaTruck size={35} className='position-icon2' />
          <p className='guide2'>Enviamos para Todo Brasil</p>
        </div>
        <div className='things2'>
          <PiStampFill size={35} className='position-icon2' />
          <p className='guide2'>Resultados Comprovados</p>
        </div>
      </div>{' '}
      <img src={fundo2} alt='Fundo' className='image-background' />
      <div className='container-part2'>
        <div className='quader-white-part2'></div>
        <h6 className='title-2'>Serviço de Excelência!</h6>
        <h1 className='txt'>Aplicação de nossos Produtos</h1>
        <p className='text-part2'>
          Nossos resultados falam por si. entregamos cores vívidas que saltam
          aos olhos, detalhes nítidos que impressionam e uma qualidade que
          perdura. Quando se trata de impressão, estamos comprometidos em
          proporcionar o melhor.
        </p>
        <p className='text-part23'>
          Para transformar sua visão em uma realidade impressionante. Somos a
          escolha certa quando se trata de resultados de impressão de elite.
          Junte-se a nós e experimente a diferença.
        </p>
        <div className='container-quaders'>
          <div className='quader-container'>
            <div className='quader1'></div>
            <p className='name-quader'>Qualidade</p>
          </div>
          <div className='quader-container'>
            <div className='quader2'></div>
            <p className='name-quader'>Preço Justo</p>
          </div>
          <div className='quader-container'>
            <div className='quader3'></div>
            <p className='name-quader'>Projetos Personalizados</p>
          </div>
        </div>
        <div className='button-content-part2'>
          <button className='button-whatsapp-part2'>
            <RiWhatsappLine className='whatsapp-image-part2' />
            Solicitar Orçamento
          </button>
        </div>
        <div className='things-container-part2'>
          <div className='things-part2'>
            <IoCart size={35} className='position-icon-part2' />
            <p className='guide-part2'>Compra 100% Segura</p>
          </div>
          <div className='things-part2'>
            <FaTruck size={35} className='position-icon-part2' />
            <p className='guide-part2'>Enviamos para Todo Brasil</p>
          </div>
          <div className='things-part2'>
            <PiStampFill size={35} className='position-icon-part2' />
            <p className='guide-part2'>Resultados Comprovados</p>
          </div>
        </div>{' '}
        <div className='background-white'></div>
        <img src={imageWoman} className='image-woman' alt='Woman' />
      </div>
    </div>
  )
}
