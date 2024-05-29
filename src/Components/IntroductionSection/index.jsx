import "./introductionSection.scss"
const IntroductionSection = () => {
    return (
        <section className="introduction-section">
            <img className="logo1" src="https://static.wixstatic.com/media/af1e77_27c6d718eae94b87ad6903ea5ab9a88d~mv2.png/v1/fill/w_192,h_200,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/stickerspng-03.png" alt="" />
            <img className="logo2" src="https://static.wixstatic.com/media/af1e77_0eb728ff141f414d8426dd5b1f187d28~mv2.png/v1/fill/w_238,h_248,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/stickerspng-04.png" alt="" />
            <h2 className="introduction-title">
                Si estás leyendo esto, (casi) seguro es porque...
            </h2>
            <div className="introduction-content">

                <div className="item-container" >
                    <h3 className="number">01</h3>
                    <span className="item">
                        <p>Estás empezando a crear tu marca<br />y no estás seguro por dónde empezar.
                        </p>
                    </span>

                </div>
                <div className="item-container" >
                    <h3 className="number">02</h3>
                    <span className="item">
                        <p>Te abruma pensar en el tiempo que<br />
                            te lleva ocuparte de todo y necesitas delegar.
                        </p>
                    </span>

                </div>
                <div className="item-container" >
                    <h3 className="number">03</h3>
                    <span className="item">
                        <p>Sabes la importancia de contar con
                            <br />
                            presencia online pero no sabés cómo gestionarla a tu favor.
                        </p>
                    </span>
                </div>
                <div className="item-container" >
                    <h3 className="number">04</h3>
                    <span className="item">
                        <p>No sabes cómo hacer para
                            <br />
                            diferenciarte de tu competencia.
                        </p>
                    </span>
                </div>
                <div className="item-container" >
                    <h3 className="number">05</h3>
                    <span className="item">
                        <p>Querés darle un impulso a tu
                            <br />
                            imagen de marca.
                        </p>
                    </span>
                </div>


            </div>

        </section>
    )
}
export default IntroductionSection