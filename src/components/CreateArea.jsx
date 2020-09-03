import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Zoom from "@material-ui/core/Zoom";
import Fab from "@material-ui/core/Fab";

function CreateArea(props) {
  const [isClicked, setIsClicked] = useState(false);

  function isClick() {
    setIsClicked(true);
  }

  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  function handelChange(event) {
    const { name, value } = event.target;
    setNote((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    event.preventDefault();
    setNote({
      title: "",
      content: "",
    });
  }

  return (
    <div>
      <form className="create-note">
        {isClicked ? (
          <input
            onChange={handelChange}
            name="title"
            value={note.title}
            placeholder="Title"
          />
        ) : null}
        <textarea
          onChange={handelChange}
          onClick={isClick}
          name="content"
          value={note.content}
          placeholder="Take a note..."
          rows={isClicked ? 3 : 1}
        />
        <Zoom in={isClicked}>
          <Fab onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
