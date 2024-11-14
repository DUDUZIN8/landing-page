import './page3.css'
import { IoCart } from 'react-icons/io5'
import { FaTruck } from 'react-icons/fa'
import { PiStampFill } from 'react-icons/pi'
import { RiWhatsappLine } from 'react-icons/ri'

export const Pagina3 = () => {
  return (
    <div className='container-page3' id='beneficies'>
      <h1 className='title3'>Características Técnicas</h1>
      <p className='text3'>
        Centenas de milhares de capas de alarme produzidas para os mais variados
        estabelecimentos: Lojistas de calçados, vestuário, farmácia, home
        centers, boutique, magazine, centro comercial, lojas de departamento,
        eventos, etc.
      </p>
      <h1 className='title-part3'>Agilidade e Credibilidade</h1>
      <p className='text-part3'>
        As capas de Antena de Alarme, são sublimadas, com esta técnica você pode
        estampar com qualidade fotográfica, explorando efeitos artísticos e
        degrades à vontade! Produzidas com Helanca Light, tem boa elasticidade,
        vestindo com facilidade o alarme da sua loja.
      </p>
      <div className='button-content3'>
        <button className='button-whatsapp3'>
          <RiWhatsappLine className='whatsapp-image3' />
          Solicitar Orçamento
        </button>
      </div>
      <div className='things-container3'>
        <div className='things3'>
          <IoCart size={35} className='position-icon3' />
          <p className='guide3'>Compra 100% Segura</p>
        </div>
        <div className='things3'>
          <FaTruck size={35} className='position-icon3' />
          <p className='guide3'>Enviamos para Todo Brasil</p>
        </div>
        <div className='things3'>
          <PiStampFill size={35} className='position-icon3' />
          <p className='guide3'>Resultados Comprovados</p>
        </div>
      </div>{' '}
    </div>
  )
}
