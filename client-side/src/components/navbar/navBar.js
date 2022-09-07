import "./navBar.css";
import { useState } from "react";
import BasicModal from "../modal/modal";

function NavBar() {
  const handleclose = () => {
    setOpen(false);
  };
  const [open, setOpen] = useState(false);
  return (
    <div className="navBar">
      <button className="app-button" onClick={() => setOpen(true)}>
        add a card
      </button>

      <BasicModal
        open={open}
        handleclose={handleclose}
        product={[]}
        purpose="add"
      />
    </div>
  );
}
export default NavBar;
