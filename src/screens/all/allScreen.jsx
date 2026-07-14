import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/header.jsx"
import "./allScreen.css";

function AllScreen() {
    const fechaInicio = new Date(2026, 2, 6, 19, 6);

    const fechaActual = new Date();

    const diferencia = fechaActual - fechaInicio;

    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));

    return (
        <div>
            <Header />
            <div className="AllScreenContainer">
                <p>
                    Según la Real Academia Española (RAE), el amor se define principalmente como un <span className="highlight">“sentimiento intenso del ser humano que, partiendo de su propia insuficiencia, necesita y busca el encuentro y unión con otro ser”</span>.
                </p>

                <p>
                    Yo hace <span className="highlight">{dias}</span> días que estoy redescubriendo el significado de esa palabra.
                </p>

                <p>
                    Desde el <span className="highlight">6 de marzo de 2026</span>, desde ese día en que me escribiste, no dejamos de hablar ni un solo día, y espero que siga siendo así.
                </p>

                <p>
                    Eese primer mensaje tuyo: <span className="highlight">“Acepto mensajes además de likes a música”</span>. Fue algo que jamás estuvo en mis planes. Nunca imaginé que una chica tan linda, a la que no me animaba a escribirle, porque pensaba que no tenía chance, fue la que se animó a dar el primer paso. Y yo como un cagón me había limitado a darle likes a tus historias y a la música que compartías en tus notas, sin saber que vos tambíen me querias conocer, y sin imaginarme a donde ibamos a terminar.
                </p>

                <p>

                    <span className="highlight">Ocho días después</span> de ese mensaje tuvimos nuestra primera cita. Fue una mezcla de nervios y emoción. Iba a conocerte en persona y estaba yendo a tu casa a buscarte; en el camino pensaba qué hacer, qué decir, para que la cita fuera percecta. Tenía miedo de no gustarte en persona, de que las cosas fueran diferentes afuera del chat.
                </p>

                <p>
                    Pero me sorprendiste desde el primer momento. Cuando te vi salir de tu casa y subirte al auto tan <span className="highlight">hermosa</span>, como siempre y con ese perfume que tanto me gusta, me saludaste con un beso en el cachete y todos mis nervios desaparecieron. La cita ya había empezado.
                </p>

                <p>
                    Fuimos a Antares, tomamos algo, hablamos de todo un poco: boludeces, cosas serias, de nuestras vidas, etc. En el bar te animaste a conocer a mis amigos siendo la primera vez que nos veíamos, y eso fue algo que valoré mucho. Después te dije de salir a bailar a Madison y me rechazaste la invitación, creo que fue para mejor, porque de ahi terminamos yendo a la costanera y pudimos seguir hablando, conociéndonos y disfrutando del momento nosotros dos solos.
                </p>

                <p>
                    No sé si fue por el alcohol o porque después de hablar tanto por chat ya había confianza, pero esa noche descubrí lo increíble que sos. Vi a una chica <span className="highlight">viva</span>, divertida, que canta, baila y se ríe como si nadie la estuviera observando.
                </p>

                <p>
                    Me acuerdo que cuando me pediste que te ayudara a reclinar el asiento, aproveché y me animé a acercarme a tus labios, esa vez yo dí el paso, y nos dimos ese <span className="highlight">primer beso</span> tan hermoso que nunca me voy a olvidar. Nos quedamos hablando, compartimos mucho más esa noche y, aunque se hizo muy tarde, ninguno de los dos quería volver a su casa.
                </p>

                <p>
                    Después de esa cita hubieron muchas más, y cada una fue más linda que la anterior. Pero la verdad es que desde la primera<span className="highlight">ya sabía que quería todo con vos</span>, que quería seguir conociéndote, que formes parte de mi vida y yo de la tuya.
                </p>

                <p>
                    De una manera muy intensa y con cero disimulos empecé a demostrar cada vez mis sentimientos hacia vos, me gustabas mucho y quería algo serio, al principio resultaste medio reacia a la idea y medio arisca a mis demostraciones de afecto, eso me preocupo, pero con el paso del tiempo ya estábamos en la misma sintonía, a día de hoy creo que vos sos más <span className="highlight">amorosa</span> que yo ahora y me encanta.
                </p>

                <p>
                    Me encanta tu forma de ser, tu sentido del humor, lo cariñosa y detallista que sos, admiro mucho lo responsable que sos con el estudio, me encanta que me muestres música, pelis, libros, <span className="highlight">amquiero seguir descubriendo cosas con vosorosa</span>.
                </p>

                <p>
                    Físicamente me parecés <span className="highlight">perfecta</span>. Tus rulos fueron lo primero que me llamó la atención, pero con el tiempo empecé a enamorarme de cada detalle tuyo: tu sonrisa, tu mirada, tus lunares, tu cara, tu forma de ser. Me siento muy afortunado de que una mujer tan hermosa me haya elegido a mí como pareja.
                </p>

                <p>
                    Te agradezco que me acompañes día a día, me apoyes y me hagas sentir tan bien. Me amas de una manera que nunca me habían amado, tuviste y tenes gestos y actitudes que nadie nunca antes había tenido conmigo, detalles mimos palabras lindas. Al lado tuyo siento que puedo con todo, vos me haces creer en mi mismo y ves en mi virtudes que yo no encuentro.
                </p>

                <p>
                    Quiero seguir acompañándote en tu camino, que por cosas de la vida se cruzó con el mío, seguir recibiendo tu amor y darte del mío.
                </p>

                <p>
                    Esta es mi forma de escribirte una cartita de amor jasajas,.
                </p>

                <p>
                    <span className="highlight">Te amo, Abril</span> y eso no va a cambiar nunca.
                </p>

                <p>
                    <span className="highlight">PD:</span> Empecé a hacer esta pagina el 13 de julio del 2026 a las 2am, mientras estas dormidita en llamada, espero que el Lolo del futuro la termine y te la haga llegar el sábado 24 que se cumplen 140 días desde que empezamos a hablar, y que de paso te pida que seas su novia que ya es hora de formalizar, yo se que no se aguanta las ganas, pero quiere que sea un momento especial.
                </p>
            </div>
        </div>
    )
}

export default AllScreen;