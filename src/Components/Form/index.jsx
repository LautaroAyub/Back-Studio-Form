import { useState } from 'react';
import emailjs from 'emailjs-com';
import "./form.scss"

const Form=()=>{
    const [formData, setFormData] = useState({
        from_name: '',
        from_email: '',
        from_message: ''
      });
      const [formStatus, setFormStatus] = useState('');
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value
        });
      };
      const handleSubmit = (e) => {
        e.preventDefault();
        const serviceID = 'default_service';
        const templateID = 'template_za47z84';
        const userID = import.meta.env.VITE_API_KEY;
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
      };


    return(
        
<form onSubmit={handleSubmit}
className='form-container'>
  <div className='form-options' >
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

  <div className='form-options'>
    <label htmlFor="from_email">Email</label>
    <input     
    type="text" 
    id="from_email"
    name="from_email"
    value={formData.email}
    onChange={handleChange}
    required/>
  </div>
  <div className='form-options'>
    <label htmlFor="message">Message</label>
    <textarea
       type="text" 
       id="from_message"
       name="from_message"
       value={formData.message}
       onChange={handleChange}
       required/>
  </div>

  <button type="submit">Enviar</button>
      {formStatus && <p>{formStatus}</p>}
 
</form>
    )
}
export default Form
