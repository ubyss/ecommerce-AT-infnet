import './App.css'
import Header from './components/Header'
import Main from './components/Main'


export default function App() {

  const produtoOBJ = {
    produto: {
      nome: "Smartphone Pro",
      imagem: "./public/smartphone.png",
      descricao: "Smartphone Pro com tela de 6.5 polegadas, 128GB de armazenamento.",
      preco: "R$ 2.999,00",
      nota: 4.5
    },
    vendedor: {
      nome: "Loja de Eletrônicos ABC",
      email: "contato@lojaabc.com",
      telefone: "(11) 99999-9999",
      nota: 4.7
    },
    comentarios: [
      {
        usuario: "João Silva",
        data: "10/03/2023",
        mensagem: "Ótimo produto, entrega rápida!",
        nota: 5
      },
      {
        usuario: "João Silva",
        data: "10/03/2023",
        mensagem: "Ótimo produto, entrega rápida!",
        nota: 5
      },
      {
        usuario: "Maria Fernandes",
        data: "12/03/2023",
        mensagem: "Produto de excelente qualidade, mas a entrega demorou um pouco.",
        nota: 4
      },
      {
        usuario: "João Silva",
        data: "10/03/2023",
        mensagem: "Ótimo produto, entrega rápida!",
        nota: 5
      },
    ],
    perguntas: [
      {
        usuario: "Maria Oliveira",
        data: "12/03/2023",
        duvida: "O produto vem com garantia?",
        resposta: "Sim, garantia de 12 meses."
      },
    ],
    produtosRelacionados: [
      {
        nome: "Smartphone Lite",
        imagem: "./public/smartphoneLite.png",
        preco: "R$ 1.599,00"
      },
    ]
  }


  return (
    <>
      <Header />
      <Main produtoOBJ={produtoOBJ} />
    </>
  )
}
