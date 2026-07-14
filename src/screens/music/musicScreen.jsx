import React from 'react'
import Header from "../../components/header.jsx"
import "./musicScreen.css";

function MusicScreen() {
    const canciones = [
        {
            nombre: "Deshoras",
            artista: "Babasónicos",
            video: "https://www.youtube.com/embed/X-1YQY-qnE8?si=hc3hyhTskeD3gZ8G"
        },
        {
            nombre: "Vivo",
            artista: "Gustavo Cerati",
            video: "https://www.youtube.com/embed/sXR93C_bSVk?si=05i_hjfTmaKgg0av"
        },
        {
            nombre: "I Don't Want to Miss a Thing",
            artista: "Aerosmith",
            video: "https://www.youtube.com/embed/WC6lEMYmxR8?si=bGwIC680hTcer6tO"
        },
        {
            nombre: "Daisies",
            artista: "Justin Bieber",
            video: "https://www.youtube.com/embed/msGuqelopMA?si=dZs5srCxNFiFQUyH"
        },
        {
            nombre: "My Girl",
            artista: "The Rolling Stones",
            video: "https://www.youtube.com/embed/0YxVIi1yzX4?si=iGCPD_ectITPK0zd"
        },
        {
            nombre: "Dos en la ciudad",
            artista: "Fito Paez",
            video: "https://www.youtube.com/embed/IhmwZDu1FMU?si=hrkscfajrTXAf1nB"
        },
        {
            nombre: "Dame una señal",
            artista: "Virus",
            video: "https://www.youtube.com/embed/1bWBte8XU6M?si=MrN49wpPPrH-voqZ"
        },
        {
            nombre: "El Tesoro",
            artista: "El Mató un Policía Motorizado",
            video: "https://www.youtube.com/embed/vlneT-a-KkQ?si=iYfuqH7WuoCITvZ1"
        },
        {
            nombre: "Don´t Let Me Down",
            artista: "The Beatles",
            video: "https://www.youtube.com/embed/NCtzkaL2t_Y?si=rnTse5-qDQewGTST"
        },
    ];

    return (
        <div className="musicContainer">
            <Header />

            <div className="videoGrid">

                <h2 className="videoQuote">Desde que te conocí todas las canciones de amor llevan tu nombre al final</h2>

                {canciones.map((cancion, index) => (
                    <div className="video-card" key={index}>
                        <h3 className="videoTitle">{cancion.nombre}</h3>
                        <p className="videoArtist">{cancion.artista}</p>

                        <div className="videoWrapper">
                            <iframe
                                src={cancion.video}
                                title={cancion.nombre}
                            ></iframe>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default MusicScreen