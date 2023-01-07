import "./contact.scss";
import handShake from "../../assets/handshake.gif";
import { useState } from "react";

export default function Contact() {
  const [message, setMessage] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setMessage(true);
  }

  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src={handShake} alt="" />
      </div>
      <div className="right">
        <h2>Contact</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" name="" placeholder="Email" />
          <textarea placeholder="Message"></textarea>
          <button>Submit</button>
          {message && <span>Thanks, I'll reach back to you soon :)</span>}
        </form>
      </div>
    </div>
  );
}
