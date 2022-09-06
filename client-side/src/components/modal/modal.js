import { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_PRODUCT } from "../../apollo-client/mutations";
import { GET_PRODUCTS } from "../../apollo-client/queries";
import { UPDATE_PRODUCT } from "../../apollo-client/mutations";
import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import Autocomplete from "@mui/material/Autocomplete";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import Button from "@mui/material/Button";
import { uploadImage } from "./upload";
import { devLanguages } from "./choises";

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 700,
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  bgcolor: "background.paper",
  border: "none",
  borderRadius: 3,
  boxShadow: 24,
  padding: "3rem",
};

export default function BasicModal({ open, handleclose, purpose, product }) {
  const [skills, setSkills] = useState(product.languages);
  const [name, setName] = useState(product.name);
  const [desc, setDesc] = useState(product.desc);
  const [status, setStatus] = useState(product.status);
  const [image, setImage] = useState("");
  const [url, setUrl] = useState(product.image);
  const [loading, setLoading] = useState(false);
  const [addProduct] = useMutation(ADD_PRODUCT, {
    refetchQueries: [{ query: GET_PRODUCTS }],
  });
  const [updateProduct] = useMutation(UPDATE_PRODUCT, {
    refetchQueries: [{ query: GET_PRODUCTS }],
  });
  const handleAddCard = () => {
    addProduct({
      variables: {
        name: name,
        desc: desc,
        status: status,
        image: url,
        languages: skills,
      },
    });
  };

  const handleUpdateCard = () => {
    updateProduct({
      variables: {
        updateProductId: product.id,
        name: name,
        desc: desc,
        status: status,
        image: url,
        languages: skills,
      },
    });
  };
  return (
    <Modal
      open={open}
      onClose={handleclose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <InputLabel htmlFor="component-simple">Name</InputLabel>
        <Input
          id="component-simple"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <InputLabel htmlFor="component-simple">status</InputLabel>
        <Input
          id="component-simple"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        />
        <InputLabel htmlFor="component-simple">image</InputLabel>

        <Button variant="contained" component="label">
          Upload
          <input
            hidden
            accept="image/*"
            multiple
            type="file"
            onChange={(e) => uploadImage(e.target.files[0], setUrl, setLoading)}
          />
        </Button>
        <InputLabel htmlFor="component-simple">skills</InputLabel>
        <Autocomplete
          multiple
          id="checkboxes-tags-demo"
          value={skills}
          options={devLanguages}
          disableCloseOnSelect
          onChange={(event, value) => setSkills(value)}
          getOptionLabel={(option) => option}
          renderOption={(props, option, { selected }) => (
            <li {...props}>
              <Checkbox
                icon={icon}
                checkedIcon={checkedIcon}
                style={{ marginRight: 8 }}
                checked={selected}
              />
              {option}
            </li>
          )}
          style={{ width: 500 }}
          renderInput={(params) => (
            <TextField {...params} label="skills" placeholder="skills" />
          )}
        />
        <InputLabel htmlFor="component-simple">description</InputLabel>
        <TextField
          id="outlined-multiline-static"
          multiline
          rows={4}
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
        {purpose === "add" ? (
          <Button
            disabled={loading}
            variant="contained"
            onClick={handleAddCard}
          >
            add card
          </Button>
        ) : (
          <Button
            disabled={loading}
            variant="contained"
            onClick={handleUpdateCard}
          >
            update card
          </Button>
        )}
      </Box>
    </Modal>
  );
}
