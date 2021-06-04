import './Card.css'
import dados from './dados.json'

function Card() {

    const cards = dados.map((content) =>
        <div className="card-content">
            <img className="card-content__img" src={content.imagem} alt={dados.alt}></img>
            <h2 className="card-content__title">{content.titulo}</h2>
            <p className="card-content__text">{content.texto}</p>
{/*             <a href="" className="card-content__button">
                <b>Ver mais</b>
            </a> */}
        </div>
    )

    return (
        <div className="cards-content">
            {cards}
        </div>
    )
}

export default Card;
