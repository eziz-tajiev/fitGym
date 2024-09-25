import { useRef } from 'react';
import './Join.css'
// import emailjs from '@emailjs/browser';

const Join = () => {
  // const form = useRef<HTMLFormElement>(null);

  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   emailjs.sendForm('YOUR_SERVICES-ID' , 'YOUR TEMPLATE ID' , form.current, {
  //     publicKey: 'your public key'
  //   })
  //   .then(
  //     () => {
  //       console.log('Success!');
  //     },
  //     (error:any) => {
  //       console.log('Failed...', error.text);
  //     }
  //   );
  // };
  return(
    <div className="Join" id="join-us">
      <div className="left-j">
        <hr />
        <div>
        <span className='stroke-text'>Ready to</span>
        <span>Level up</span>
        </div>
        <div>
        <span>Your body</span>
        <span className='stroke-text'>With us?</span>
        </div>
      </div>
      <div className="right-j">
        <form  action="" className="email-container">
          <input type="email" name="user_email" placeholder='Enter your Email adress' />
          <button className='btn btn-j'>Join now</button>
        </form>
      </div>
    </div>
  )
}

export default Join