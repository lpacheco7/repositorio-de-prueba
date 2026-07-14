import React from 'react'
import Header from "../../components/header.jsx"
import './imagesScreen.css'

function ImagesScreen() {
    const modulos = import.meta.glob('../../assets/*.jpeg', { eager: true });

    const imagenes = Object.entries(modulos).map(([path, mod], index) => ({
        id: index,
        src: mod.default,
        alt: path.split('/').pop().replace('.jpeg', '')
    }));

    return (
        <div>
            <Header />
            <div className="imagenes-container">
                {imagenes.map((img) => (
                    <div key={img.id} className="imagen-item">
                        <img src={img.src} alt={img.alt} loading="lazy" />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ImagesScreen