import { useState } from 'react';
import emailjs from 'emailjs-com';
// import ReCAPTCHA from "react-google-recaptcha";

const Form=()=>{
    const [formData, setFormData] = useState({
        from_name: '',
        from_email: '',
        from_message: ''
      });
    //   const [captchaValue, setCaptchaValue] = useState(null);
      const [formStatus, setFormStatus] = useState('');
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value
        });
      };
    
    //   const handleCaptchaChange = (value) => {
    //     setCaptchaValue(true);
    //   };
    
      const handleSubmit = (e) => {
        e.preventDefault();
    
        // if (!captchaValue) {
        //   setFormStatus('Please complete the CAPTCHA.');
        //   return;
        // }
        const serviceID = 'default_service';
        const templateID = 'template_za47z84';
        const userID = "zI61JzSxXpf2W7Y4u"
        emailjs.sendForm(serviceID, templateID, e.target, userID)
          .then((result) => {
              setFormStatus('Message sent successfully!');
              console.log(result)
          }, (error) => {
              setFormStatus('Failed to send message. Please try again.');
              console.log(error)
          });
    
        setFormData({
          name: '',
          email: '',
          message: ''
        });
        // setCaptchaValue(null);
      };


    return(
        
<form onSubmit={handleSubmit}>
  <div >
    <label htmlFor="from_name">Name</label>
    <input 
    type="text" 
    id="from_name"
    name="from_name"
    value={formData.name}
    onChange={handleChange}
    required
    />
  </div>

  <div >
    <label htmlFor="from_email">Email</label>
    <input     
    type="text" 
    id="from_email"
    name="from_email"
    value={formData.email}
    onChange={handleChange}
    required/>
  </div>
  <div >
    <label htmlFor="message">Message</label>
    <input
       type="text" 
       id="from_message"
       name="from_message"
       value={formData.message}
       onChange={handleChange}
       required/>
  </div>

  <button type="submit">Submit</button>
      {formStatus && <p>{formStatus}</p>}
 
</form>
    )
}
export default Form

{/* <ReCAPTCHA
sitekey="YOUR_RECAPTCHA_SITE_KEY"
onChange={handleCaptchaChange}
/> */}