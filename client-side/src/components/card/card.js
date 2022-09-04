import CloseIcon from "@mui/icons-material/Close";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import "./card.css";

function Card() {
  return (
    <div className="card">
      <div className="card-left">
        <div className="card-image">
          <img
            src="https://veganwithgusto.com/wp-content/uploads/2021/05/speedy-spaghetti-arrabbiata-featured-e1649949762421.jpg"
            alt="sample"
          />
        </div>
      </div>
      <div className="card-center">
        <span className="card-title">Card Title</span>
        <p className="card-content">
          lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin varius
          eros quis nulla lacinia, eu porttitor orci laoreet. Mauris tempus
          consectetur fermentum. Ut vel porta quam. Nunc sit amet luctus ipsum.
          Maecenas sed lacus fermentum, dapibus tellus quis, pellentesque ipsum.
          Etiam at ornare dui. Phasellus eget arcu leo. Donec pulvinar placerat
          pulvinar. Donec rhoncus ex sed tincidunt gravida. Phasellus mollis,
          arcu non viverra posuere, justo odio tempus erat, sit amet fringilla
          urna nisi non felis. Praesent id pulvinar libero.
        </p>
        <div className="card-skills">
          <div className="card-skill">htlm</div>
          <div className="card-skill">CSS</div>
          <div className="card-skill">react</div>
          <div className="card-skill">typeScript</div>
        </div>
      </div>
      <div className="card-right">
        <span className="card-status">
          <CheckCircleIcon sx={{ fontSize: "1vw" }} />
          internship
        </span>
        <button className="delete-btn">
          <CloseIcon sx={{ fontSize: "1.5vw" }} />
        </button>
        <div className="card-buttons">
          <button className="card-button">view profile</button>
          <button className="card-button">update profile</button>
        </div>
      </div>
    </div>
  );
}
export default Card;
