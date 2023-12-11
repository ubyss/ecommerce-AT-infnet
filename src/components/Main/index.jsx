import React from 'react';
import RatingStars from './RatingStars';

function Main({ produtoOBJ }) {
  const {
    produto,
    vendedor,
    comentarios,
    produtosRelacionados,
    perguntas
  } = produtoOBJ;

  return (
    <main className="main-container">
      <div className="left-column">
        <section className="product-details">
          <h2 className="product-name">{produto.nome}</h2>
          <img className="product-image" src={produto.imagem} alt={produto.nome} />
          <p className="product-description">{produto.descricao}</p>
          <p className="product-price">Preço: {produto.preco}</p>
          <p className="product-rating"><RatingStars rating={produto.nota} /></p>
        </section>

        <section className="questions">
          <h3 className="questions-title">Perguntas</h3>
          {perguntas.map((question) => (
            <div key={question.usuario} className="question-item">
              <p className="question-user">{question.usuario} ({question.data}):</p>
              <p className="question-query">{question.duvida}</p>
              <p className="question-answer">Resposta: {question.resposta}</p>
            </div>
          ))}
        </section>
      </div>

      <div className="right-column">
        <section className="seller-info">
          <div className="seller-details">
            <div className="seller-icon"></div>
            <div className="seller-text">
              <h3 className="seller-title">{vendedor.nome}</h3>
              <p className="seller-email">{vendedor.email}</p>
              <p className="seller-phone">{vendedor.telefone}</p>
            <div className="seller-rating">
              <RatingStars rating={vendedor.nota} />
            </div>
            </div>
          </div>
        </section>

        <section className="comments">
          <h3 className="comments-title">Comentários</h3>
          {comentarios.map((comment) => (
            <div key={comment.usuario} className="comment-item">
              <p className="comment-user">{comment.usuario} ({comment.data}):</p>
              <p className="comment-message">{comment.mensagem}</p>
              <p className="comment-rating"><RatingStars rating={comment.nota} /></p>
            </div>
          ))}
        </section>
      </div>

      <section className="related-products">
        <h3 className="related-products-title">Produtos Relacionados</h3>
        {produtosRelacionados.map((product) => (
          <div key={product.nome} className="related-product">
            <h4 className="related-product-name">{product.nome}</h4>
            <img className="related-product-image" src={product.imagem} alt={product.nome} />
            <p className="related-product-price">Preço: {product.preco}</p>
          </div>
        ))}
      </section>
    </main>
  );
}

export default Main;
