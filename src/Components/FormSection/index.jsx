import Form from "../Form"
import "./formSection.scss"
import { ReactComponent as PinIcon } from "../../assets/map-pin.svg"
import { ReactComponent as PhoneIcon } from "../../assets/phone.svg"
import { ReactComponent as EnvelopeIcon } from "../../assets/envelope.svg"
import { ReactComponent as InstagramIcon } from "../../assets/instagram.svg"

const FormSection = () => {
    return (
        <section className="form-section-container">

            <h1 >Pssssst, estás MUY cerca de empezar :)</h1>
            <Form />

            <div className="contact-info">
                <div className="contact-info-item">
                    <PinIcon className="form-icon" />
                    <a href="">Buenos Aires,Argentina</a>
                </div>
                <div className="contact-info-item">
                    <PhoneIcon className="form-icon" />
                    <a href="">+54 9 11 5484 9487</a>
                </div>
                <div className="contact-info-item">
                    <EnvelopeIcon className="form-icon" />
                    <a href="">backstudiomkt@gmail.com</a>
                </div>
                <div className="contact-info-item">
                    <InstagramIcon className="form-icon" />
                    <a href="">@backstudio__</a>
                </div>
            </div>

        </section>
    )
}
export default FormSection