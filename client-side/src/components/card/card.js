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
          I am a very simple card. I am good at containing small bits of
          information. I am convenient because I require little markup to use
          effectively. lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
          ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
          lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
          ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
          lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
          ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
          lorem ipsum lorem ipsum lorem ipsum lorem ipsum
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
          <CheckCircleIcon sx={{ fontSize: "1.5vw" }} />
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
