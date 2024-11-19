import { useState } from 'react'
import './page6.css'

export const Pagina6 = () => {
  const [expandedIndex, setExpandedIndex] = useState(null)

  const handleToggle = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index)
  }

  const faqData = [
    {
      question: 'Vocês Entregam para Todo o Brasil?',
      answer:
        'Sim! Entregamos! Nossa rede de entrega eficiente e confiável garante que seu pedido seja tratado com cuidado e chegue ao seu destino no prazo prometido.'
    },
    {
      question: 'Como sabemos que o produto chegou na minha casa?',
      answer:
        'Nos te mandaremos um codígo de rastreio para você acompanhar o seu produto.'
    },
    {
      question: 'Como faço para cancelar meu pedido?',
      answer:
        'Entre em contato conosco pelo telefone ou e-mail e informe o seu pedido.'
    },
    {
      question: 'Como faço para trocar meu produto?',
      answer:
        'Pegue o produto que você comprou e escolha o produto que você deseja.'
    },
    {
      question: 'Qual e a garantia do produto?',
      answer: '7 dias'
    }
  ]

  return (
    <div className='container6'>
      <div className='container-content6'>
        <p className='title6'>Perguntas Frequentes</p>
        <h1 className='text6'>FAQ</h1>
      </div>
      <div className='faq-container'>
        {faqData.map((item, index) => (
          <div key={index} className='faq-item'>
            <div className='faq-header' onClick={() => handleToggle(index)}>
              <h3 className='faq-question'>{item.question}</h3>
              <span
                className={`faq-icon ${
                  expandedIndex === index ? 'expanded' : ''
                }`}
              >
                {expandedIndex === index ? '-' : '+'}
              </span>
            </div>
            {expandedIndex === index && (
              <div className='faq-answer'>
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className='container-six'>
        <h3 className='title-part6'>Tem mais alguma dúvida?</h3>
        <p className='text-part6'>
          Perguntas sem respostas são oportunidades perdidas. Entre em contato
          agora através do nosso formulário e receba respostas personalizadas
          para suas dúvidas.
        </p>
      </div>
      <div className='cota-container'>
        <p className='cota-word'>
          {' '}
          • COTE AGORA! • COTE AGORA! • COTE AGORA! • COTE AGORA! • COTE AGORA!
          •
        </p>
      </div>
    </div>
  )
}
