import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import '../components/Card/Card.css'

import React from 'react'

function Sobre() {
    return (
        <>
            <Header />
            <div style={{ color: "white", margin: "auto 5% auto 5%", textAlign: "center", fontSize: 20 }}>
                <h2>Quem somos</h2>
                <p>Katia cortinas foi fundada em 2002 com o intuito de reunir profissionais com alta experiência no ramo da decoração.</p>
                <p>Nosso time consiste em vendedores e instaladores com mais de 20 anos no mercado para que sua experiência de compra seja completa e satisfatória.</p>
                <p>Também oferecemos serviços de consultoria em decoração e harmonização de ambientes.</p>
                <h2>Produtos em Destaque</h2>
                <div className="cards-content">
                    <div style={{marginTop: 30, marginBottom: 30}}>
                        <img className="card-content__img" src="https://i.imgur.com/a500Ar5.png" alt="Cortina Prega Macho"></img>
                        <h3 className="card-content__title">Cortina Prega Macho</h3>
                    </div>
                    <div style={{marginTop: 30, marginBottom: 30}}>
                        <img className="card-content__img" src="https://i.imgur.com/UN9KHIY.png" alt="Cortina Romana"></img>
                        <h3 className="card-content__title">Cortina Romana</h3>
                    </div>
                    <div style={{marginTop: 30, marginBottom: 30}}>
                        <img className="card-content__img" src="https://i.imgur.com/7gXJ0nb.png" alt="Cortina Double Vision"></img>
                        <h3 className="card-content__title">Cortina Double Vision</h3>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Sobre
