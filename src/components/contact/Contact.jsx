import "./contact.scss";
import handShake from "../../assets/handshake.gif";
import { useState } from "react";

export default function Contact() {
  const [formValue, setFormValue] = useState({
    email: "",
    message: "",
  });
  const [message, setMessage] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    // console.log(`The name is : ${name}`);
    // console.log(`The value is : ${value}`);
    setFormValue((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setMessage(true);
    setTimeout(() => {
      setMessage(false);
      setFormValue((prevState) => ({
        email: "",
        message: "",
      }));
    }, 4000);
  }

  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src={handShake} alt="" />
      </div>
      <div className="right">
        <h2>Contact</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            value={formValue.email}
            onChange={handleChange}
            name="email"
            placeholder="Email"
          />
          <textarea
            placeholder="Message"
            name="message"
            value={formValue.message}
            onChange={handleChange}
          ></textarea>
          <button>Submit</button>
          {message && <span>Thanks, I'll reach back to you soon :)</span>}
        </form>
      </div>
    </div>
  );
}
