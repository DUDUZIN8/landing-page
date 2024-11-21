import React from 'react'
import { RiWhatsappLine } from 'react-icons/ri'
import { IoCart } from 'react-icons/io5'
import { FaTruck } from 'react-icons/fa'
import { PiStampFill } from 'react-icons/pi'
import './page1.css'
import fundo from '../../assets/img/fundo.png'

export const Pagina = () => {
  return (
    <div className='container' id='home'>
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
          <RiWhatsappLine className='whatsapp-image' />
          Solicitar Orçamento
        </button>
      </div>
      <div className='things-container'>
        <div className='things'>
          <IoCart size={35} className='position-icon' />
          <p className='guide'>Compra 100% Segura</p>
        </div>
        <div className='things'>
          <FaTruck size={35} className='position-icon' />
          <p className='guide'>Enviamos para Todo Brasil</p>
        </div>
        <div className='things'>
          <PiStampFill size={35} className='position-icon' />
          <p className='guide'>Resultados Comprovados</p>
        </div>
      </div>
      <div className='container-emblems'>
        <div className='container-text-black'>
          <div className='text-black'>
            <p>
              ENVIAMOS PARA TODO BRASIL ▪️ ENVIAMOS PARA TODO BRASIL ▪️ ENVIAMOS
              PARA TODO BRASIL
            </p>
          </div>
        </div>
        <div className='container-text-red'>
          <div className='text-red'>
            <p className='red'>
              ENVIAMOS PARA TODO BRASIL ▪️ ENVIAMOS PARA TODO BRASIL ▪️ ENVIAMOS
              PARA TODO BRASIL
            </p>
          </div>
        </div>
      </div>
      <div className='fundo-image-container'>
        <img src={fundo} className='fundo-image' alt='Fundo' />
      </div>
    </div>
  )
}
