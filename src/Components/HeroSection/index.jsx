import "./heroSection.scss"
import { scrollToSection } from "../../Utils"
const HeroSection=()=>{
  
    return(
      <section className="hero-container">
        <img className="hero-logo-1" src="https://static.wixstatic.com/media/af1e77_f95dabe853b0470db5a936774968b93b~mv2.png/v1/fill/w_230,h_238,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/stickerspng-05.png" alt="" />
        <img className="hero-logo-2" src="https://static.wixstatic.com/media/af1e77_ece3bd666d7146e4bae14f0fda836736~mv2.png/v1/fill/w_260,h_266,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/stickerspng-02.png" alt="" />
        <h1>TRANQUI,<br/>PODEMOS AYUDARTE :)</h1>
    
            <div onClick={()=>scrollToSection("form-section")} className="hero-button">
                <span>
                ¡Quiero saber más!
                </span>
            </div>
      </section>
    )
}
export default HeroSection