import React, { useState, useRef }  from 'react'
import emailjs from '@emailjs/browser';
import { Fox } from '../models/fox';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { Loader } from '../components'; 
import { useAlert } from '../hooks/useAlert';
import { Alert } from '../components';
 export default function Contact() {
  const {alert, showAlert, hideAlert} = useAlert();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const formRef = useRef(null);
  const [isLoading,setIsLoading] = useState(false);
  const [currentAnimation,setCurrentAnimation] = useState('idle');
  const handleChange =(e)=> {
    const {name,value} = e.target;
    setForm({...form,[name]:value});
 
  }
  const handleFocus =()=> {
    setCurrentAnimation('walk');
  }
  const handleBlur =()=> {
    setCurrentAnimation('idle');
  } 
  const handleSubmit =(e)=> {
    e.preventDefault();
    setIsLoading(true);
    setCurrentAnimation('hit');
    emailjs.sendForm(
      import.meta.env.REACT_APP_EMAILJS_SERVICE_ID,
      import.meta.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      { 

        from_name: form.name,
        to_name: "Cenk",
        from_email: form.email,
        to_email: "cenk33m@gmail.com",
        message: form.message,
      },
      import.meta.env.REACT_APP_EMAILJS_PUBLIC_KEY,
    ).then(()=> {
      setIsLoading(false);
      showAlert("Message sent successfully", "success"); 
      setTimeout(()=> { 
        hideAlert();
        setCurrentAnimation('idle');
      }, 3000);
    }).catch((error)=> {
      setIsLoading(false);
      showAlert("Message not sent", "danger");
      setTimeout(()=> {
        hideAlert();
        setCurrentAnimation('idle');
      }, 3000);
    });
  } 
  return (
   <section className='relative flex lg:flex-row flex-col max-container h-[100vh]'>
    <div className='flex-1 min-w-[50%] flex flex-col'>
    {alert.show && <Alert alert={alert} />}

    <form className='w-full flex flex-col gap-7 mt-14' onSubmit={handleSubmit}>
      <label className='text-black-500 font-semibold'>Name
        <input type="text" name="name" className='input' required placeholder='John Doe' value={form.name} onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur} />
      </label> 
      <label className='text-black-500 font-semibold'>Email
        <input type="email" name="email" className='input' required placeholder='john.doe@example.com' value={form.email} onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur} />
      </label>
      <label className='text-black-500 font-semibold'>Message
        <textarea name="message" className='input' rows={4} required placeholder='how can we help you? we will get back to you as soon as possible.' value={form.message} onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur} />
      </label>
      <button type='submit' disabled={isLoading} className='btn' onFocus={handleFocus} onBlur={handleBlur} >{isLoading ? "Sending..." : "Submit"} </button>
    </form>
    </div>
    <div className='lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]'>
     <Canvas camera={{ position: [0, 0, 10], fov: 75 , near: 0.1, far: 1000 }}>
     <ambientLight intensity={2.5} />
     <directionalLight intensity={0.5}  position={[0, 0, 1]} />
      <Suspense fallback={<Loader />}>
        <Fox currentAnimation={currentAnimation} position={[0.5, 0.35, 0]} rotation={[12.6, -0.6, 0]} scale={[0.85, 0.85, 0.85]}   />

      </Suspense>
     </Canvas>
    </div>
   </section>
  )
}
