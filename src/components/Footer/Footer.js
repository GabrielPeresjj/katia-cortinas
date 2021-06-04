import React from 'react'
import './Footer.css'


function Footer() {
    return (
        <div className="footer-content">
        <div>
            <img src="https://i.imgur.com/pFHIMvh.png" className="footer-content__frase" alt="Decorar é dar vida ao ambiente"></img>

        </div>
        <div>
            <a href="https://api.whatsapp.com/send?phone=5511999809335" target="__blank">
            <img src="https://i.imgur.com/GWCOkJF.png" className="footer-content__whatsapp" alt="(11)99980-9335"></img>
            </a>
        </div>
        </div>
    )
}

export default Footer
