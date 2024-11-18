import './page5.css'
import { VscQuote } from 'react-icons/vsc'
import Dudu from '../../assets/img/dudu.jpg'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import { useInView } from 'react-intersection-observer'
import Mobile from '../../assets/img/mobile.png'
import { IoCart } from 'react-icons/io5'
import { FaTruck } from 'react-icons/fa'
import { PiStampFill } from 'react-icons/pi'
import { RiWhatsappLine } from 'react-icons/ri'

export const Pagina5 = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2
  })

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  }

  return (
    <div className='container5' id='orcamento'>
      <div className='quader-red'></div>
      <div className='texts-container'>
        <p className='title5'>Cultivamos amizades!</p>
        <h1 className='text5'>
          Veja o que os clientes dizem sobre o resultado do Serviço!{' '}
        </h1>
      </div>
      <section
        className={`message-container ${inView ? 'animate' : ''}`}
        ref={ref}
      >
        <Carousel
          responsive={responsive}
          infinite={true}
          className='owl-carousel owl-theme message-slider'
        >
          <div className='item'>
            <VscQuote className='quote-red' />
            <p className='text-message'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.{' '}
            </p>
            <img src={Dudu} alt='Dudu' className='image-message' />
            <p className='name-message'>Eduardo Muller</p>
            <p className='city-message'>Mirante da Serra-RO</p>
          </div>
          <div className='item'>
            <VscQuote className='quote-red' />
            <p className='text-message'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.{' '}
            </p>
            <img src={Dudu} alt='Dudu' className='image-message' />
            <p className='name-message'>Eduardo Muller</p>
            <p className='city-message'>Mirante da Serra-RO</p>
          </div>
          <div className='item'>
            <VscQuote className='quote-red' />
            <p className='text-message'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.{' '}
            </p>
            <img src={Dudu} alt='Dudu' className='image-message' />
            <p className='name-message'>Eduardo Muller</p>
            <p className='city-message'>Mirante da Serra-RO</p>
          </div>
          <div className='item'>
            <VscQuote className='quote-red' />
            <p className='text-message'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.{' '}
            </p>
            <img src={Dudu} alt='Dudu' className='image-message' />
            <p className='name-message'>Eduardo Muller</p>
            <p className='city-message'>Mirante da Serra-RO</p>
          </div>
          <div className='item'>
            <VscQuote className='quote-red' />
            <p className='text-message'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.{' '}
            </p>
            <img src={Dudu} alt='Dudu' className='image-message' />
            <p className='name-message'>Eduardo Muller</p>
            <p className='city-message'>Mirante da Serra-RO</p>
          </div>
          <div className='item'>
            <VscQuote className='quote-red' />
            <p className='text-message'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.{' '}
            </p>
            <img src={Dudu} alt='Dudu' className='image-message' />
            <p className='name-message'>Eduardo Muller</p>
            <p className='city-message'>Mirante da Serra-RO</p>
          </div>
          <div className='item'>
            <VscQuote className='quote-red' />
            <p className='text-message'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.{' '}
            </p>
            <img src={Dudu} alt='Dudu' className='image-message' />
            <p className='name-message'>Eduardo Muller</p>
            <p className='city-message'>Mirante da Serra-RO</p>
          </div>
          <div className='item'>
            <VscQuote className='quote-red' />
            <p className='text-message'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.{' '}
            </p>
            <img src={Dudu} alt='Dudu' className='image-message' />
            <p className='name-message'>Eduardo Muller</p>
            <p className='city-message'>Mirante da Serra-RO</p>
          </div>
          <div className='item'>
            <VscQuote className='quote-red' />
            <p className='text-message'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.{' '}
            </p>
            <img src={Dudu} alt='Dudu' className='image-message' />
            <p className='name-message'>Eduardo Muller</p>
            <p className='city-message'>Mirante da Serra-RO</p>
          </div>
          <div className='item'>
            <VscQuote className='quote-red' />
            <p className='text-message'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.{' '}
            </p>
            <img src={Dudu} alt='Dudu' className='image-message' />
            <p className='name-message'>Eduardo Muller</p>
            <p className='city-message'>Mirante da Serra-RO</p>
          </div>
        </Carousel>
      </section>
      <div className='container-part5'>
        <div className='quader-red2'></div>
        <h1 className='title-part5'>
          COMO ENVIAR&nbsp;<span className='highlight'>A ARTE</span>
        </h1>
        <p className='px-100'>
          <span className='nigga'>Formato:&nbsp;</span>PDF, PSD, TIF, AI
          convertido em curvas e com as imagens inseridas dentro do documento em
          arquivos de Ilustrator, de JPG em alta.
        </p>
        <p className='highlight-2'>MODO DE COR CMYK.</p>
        <p className='px-200'>
          <span className='nigga'>Resolução:&nbsp;</span>300 DPI com metade do
          formato ou 150 DPI no tamanho final da arte.
        </p>
        <p className='px-300'>
          <span className='nigga'>Plataforma Wetransfers:&nbsp;</span>
          Preferencialmente enviar o arquivo pela plataforma Wetransfers,
          garantindo mais segurança as partes envolvidas.
        </p>
        <p className='px-400'>
          <span className='nigga'>Sangria:&nbsp;</span> É necessário acrescentar
          sangria ao arquivos, pode deixar nós acrescentamos em nosso sistema de
          pré-impressão.
        </p>
        <div className='button-content5'>
          <button className='button-whatsapp5'>
            <RiWhatsappLine className='whatsapp-image5' />
            Solicitar Orçamento
          </button>
        </div>
        <div className='things-container5'>
          <div className='things5'>
            <IoCart size={35} className='position-icon5' />
            <p className='guide5'>Compra 100% Segura</p>
          </div>
          <div className='things5'>
            <FaTruck size={35} className='position-icon5' />
            <p className='guide5'>Enviamos para Todo Brasil</p>
          </div>
          <div className='things5'>
            <PiStampFill size={35} className='position-icon5' />
            <p className='guide5'>Resultados Comprovados</p>
          </div>
        </div>{' '}
        <img src={Mobile} className='mobile-image' alt='Mobile' />
      </div>
    </div>
  )
}
