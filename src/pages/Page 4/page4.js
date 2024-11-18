import './page4.css'
import Caixa from '../../assets/img/caixaimagem.png'
import PortoSeguro from '../../assets/img/portoimagem.png'
import Gucci from '../../assets/img/guccimagem.png'
import { IoCart } from 'react-icons/io5'
import { FaTruck } from 'react-icons/fa'
import { PiStampFill } from 'react-icons/pi'
import { RiWhatsappLine } from 'react-icons/ri'
import { FaPlay } from 'react-icons/fa'
import Liquida from '../../assets/img/liquida.png'

export const Pagina4 = () => {
  return (
    <div className='container4' id='depoiments'>
      <h5 className='title4'>Não perca a oportunidade de garantir o seu!</h5>
      <h1 className='text4'>
        Veja abaixo<span className='title-red4'>os resultados</span> de nossa
        manufatura!
      </h1>
      <div className='product-grid'>
        <div className='product-card'>
          <img src={Caixa} alt='2x2' />
          <p className='product-label'> 2 x 2</p>
        </div>
        <div className='product-card'>
          <img src={PortoSeguro} alt='3x2' />
          <p className='product-label'> 3 x 2</p>
        </div>
        <div className='product-card'>
          <img src={Gucci} alt='ESPECIAIS' />
          <p className='product-label'> ESPECIAIS</p>
        </div>
      </div>
      <div className='button-content4'>
        <button className='button-whatsapp4'>
          <RiWhatsappLine className='whatsapp-image4' />
          Solicitar Orçamento
        </button>
      </div>
      <div className='things-container4'>
        <div className='things4'>
          <IoCart size={35} className='position-icon4' />
          <p className='guide4'>Compra 100% Segura</p>
        </div>
        <div className='things4'>
          <FaTruck size={35} className='position-icon4' />
          <p className='guide4'>Enviamos para Todo Brasil</p>
        </div>
        <div className='things4'>
          <PiStampFill size={35} className='position-icon4' />
          <p className='guide4'>Resultados Comprovados</p>
        </div>
      </div>{' '}
      <div className='container-part4'>
        <p className='title-part4 '>
          Benefícios e Vantagens de se juntar ao Grupo Aragon
        </p>
        <h1 className='text-part4'>
          Por que utilizar a&nbsp;
          <span className='text-red-part4'>Capa de Alarme</span> como
          método&nbsp;
          <span className='text-red-part4'>Publicitário?</span>
        </h1>
      </div>
      <div className='banner-container'>
        <div className='banner-column-left'>
          <div className='text-block-1'>
            <h3 className='c-1'>
              <span className='highlight'>Impacto&nbsp;</span>
              Visual
            </h3>
            <p>Forte poder de exibição</p>
          </div>

          <div className='text-block-2'>
            <h3 className='c-2'>
              <span className='highlight'>Visibilidade&nbsp;</span>Efetiva
            </h3>
            <p className='px-1'>
              Tua campanha vista por motoristas e pedestres
            </p>
          </div>

          <div className='text-block-3'>
            <h3 className='c-3'>
              Impressão&nbsp;
              <span className='highlight'>Impecável</span>
            </h3>
            <p className='px-2'>Qualidade de Impressão Fotográfica</p>
          </div>

          <div className='text-block-4'>
            <h3 className='c-4'>
              {' '}
              <span className='highlight'>Cores&nbsp;</span>Vibrantes
            </h3>
            <p>Cores vívidas e alta nitidez</p>
          </div>

          <div className='text-block-5'>
            <h3 className='c-5'>
              <span className='highlight'>Instalação&nbsp;</span>Simples
            </h3>
            <p>Fácil de instalar</p>
          </div>
        </div>
        <img src={Liquida} className='liquida-image' alt='Liquida' />
      </div>
      <div className='banner-column-right'>
        <div className='text-block-a1'>
          <h3 className='h-1'>Vantajoso</h3>
          <p className='txt-21'>Excelente relação custo benefício</p>
        </div>
        <div className='text-block-a2'>
          <h3 className='h-2'>
            <span className='highlight'>Produção&nbsp;</span>Própria
          </h3>
          <p className='txt-22'>A Logo possui produção interna</p>
        </div>
        <div className='text-block-a3'>
          <h3 className='h-3'>
            Caimento&nbsp;<span className='highlight'>Perfeito</span>
          </h3>
          <p className='txt-23'>Ajustado em seus mínimos detalhes</p>
        </div>
        <div className='text-block-a4'>
          <h3 className='h-4'>Leveza</h3>
          <p className='txt-24'>Cores vívidas e alta nitidez</p>
        </div>
        <div className='text-block-a5'>
          <h3 className='h-5'>
            Frete&nbsp;<span className='highlight'>Econômico</span>
          </h3>
          <p className='txt-25'>Baixo custo de transporte/ frete</p>
        </div>
      </div>
      <div className='button-content-part4'>
        <button className='button-whatsapp-part4'>
          <RiWhatsappLine className='whatsapp-image-part4' />
          Solicitar Orçamento
        </button>
      </div>
      <div className='things-container-part4'>
        <div className='things-part4'>
          <IoCart size={35} className='position-icon-part4' />
          <p className='guide-part4'>Compra 100% Segura</p>
        </div>
        <div className='things-part4'>
          <FaTruck size={35} className='position-icon-part4' />
          <p className='guide-part4'>Enviamos para Todo Brasil</p>
        </div>
        <div className='things-part4'>
          <PiStampFill size={35} className='position-icon-part4' />
          <p className='guide-part4'>Resultados Comprovados</p>
        </div>
      </div>{' '}
      <div className='container-button'>
        <button className='button-play-container'>
          <FaPlay className='play-button' />
          Cilque para ver o vídeo do produto!
        </button>
      </div>
    </div>
  )
}
