import React from 'react'
import Whatsapp from '../../assets/img/whatsapp.png'
import { IoCart } from 'react-icons/io5'
import { FaTruck } from 'react-icons/fa'
import { PiStampFill } from 'react-icons/pi'
import './page1.css'

export const Pagina = () => {
  return (
    <div className='container'>
      <p className='titulo'>Capas de Antena de Alarme:</p>
      <div className='text-container'>
        <h2 className='texto'>
          Atraia Clientes para Sua Loja com{' '}
          <span className='destaque'>Qualidade Fotográfica</span> e{' '}
          <span className='destaque'>Garantia de Energia!</span>
        </h2>
        <p className='small'>
          Não está atraindo público para dentro da loja? Quer ter tranquilidade
          com a logística de sua campanha? O My Logo te ajuda!
        </p>
      </div>
      <div className='button-content'>
        <button className='button-whatsapp'>
          <img src={Whatsapp} className='whatsapp-image' alt='Whatsapp' />
          Solicitar Orçamento
        </button>
      </div>
      <div className='things'>
        <IoCart className='position-icon' />
        <p className='guide'>Compra 100% Segura</p>
      </div>
      <div className='things'>
        <FaTruck className='position-icon' />
        <p className='guide'>Enviamos para Todo Brasil</p>
      </div>
      <div className='things'>
        <PiStampFill className='position-icon' />
        <p className='guide'>Resultados Comprovados</p>
      </div>
    </div>
  )
}
