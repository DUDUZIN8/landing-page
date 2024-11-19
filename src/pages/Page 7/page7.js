import './page7.css'
import MyLogo from '../../assets/img/logo.png'
import { IoCart } from 'react-icons/io5'
import { FaTruck } from 'react-icons/fa'
import { PiStampFill } from 'react-icons/pi'

export const Pagina7 = () => {
  return (
    <div className='container7'>
      <div className='quader-big'>
        <img src={MyLogo} className='logo-image' alt='Logo' />
        <h1 className='title-quader'>REALIZE SUA COTAÇÃO</h1>
        <div className='line-black'></div>
        <p className='px-1000'>
          Preencha o formulário e, com essa informações teremos mais
          assertividade e agilidade para responder seu orçamento.{' '}
        </p>
        <p className='px-2000'>
          Perguntas sem respostas são oportunidades perdidas, entre em contato
          agora através do nosso formulário e receba respostas personalizadas.
        </p>
        <div className='button-formulation-content'>
          <button className='button-formulario'>Preencher o Formulário</button>
        </div>
        <div className='things-container7'>
          <div className='things7'>
            <IoCart size={35} className='position-icon7' />
            <p className='guide7'>Compra 100% Segura</p>
          </div>
          <div className='things7'>
            <FaTruck size={35} className='position-icon7' />
            <p className='guide7'>Enviamos para Todo Brasil</p>
          </div>
          <div className='things7'>
            <PiStampFill size={35} className='position-icon7' />
            <p className='guide7'>Resultados Comprovados</p>
          </div>
        </div>{' '}
      </div>
    </div>
  )
}
