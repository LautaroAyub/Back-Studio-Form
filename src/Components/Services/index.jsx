import { useContext } from 'react'
import "./services.scss"
import { ScreenWidthContext } from "../Context/screenProvider"
import ServicesBranding from "./ServicesBranding"
import ServicesDesign from "./ServicesDesign"

const Services = () => {
    const { screenWidth } = useContext(ScreenWidthContext)
    console.log(screenWidth);
    let noDouble = screenWidth < 1000
    return (
        <>
            {noDouble &&
                <>
                    <ServicesBranding />
                    <ServicesDesign />
                </>
            }
            {
                !noDouble &&
                <div className='services-double'>
                    <ServicesBranding />
                    <ServicesDesign />
                </div>
            }
        </>
    )
}
export default Services