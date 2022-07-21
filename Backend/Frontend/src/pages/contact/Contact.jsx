import "./contact.css";

export default function contact() {
  return(
    <div className="contact">
    <div className="background">
    <div className="contactimage">
    <img src="https://www.iconpacks.net/icons/3/free-icon-mail-5888.png"
       className="imageuser" >
       </img>
       <span className="Title">Contact Us</span>
      <form className="Form">
        <label>Your Name
        <input
          type="text"
          className="Input1"
          placeholder="Enter your name..."
        />
        </label>
        <label>User Email
        <input
          type="text"
          className="Input2"
          placeholder="Enter your email..."
        />
        </label>
        <label>Message
        <input
          type="text"
          className="Input3"
          placeholder="Type your message..."
        />
        </label>
        <button className="Button" type="submit" >
          Send
        </button>
      </form>
    </div>
    </div>
    </div>

  );
}
