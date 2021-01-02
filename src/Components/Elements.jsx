import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import SendIcon from "@material-ui/icons/Send";

function Elements(props) {
  const [input, setInput] = useState("");

  function userText(event) {
    setInput(event.target.value);
  }

  function sendData() {
    let data = input;
    props.childData(data);
  }

  return (
    <form noValidate autoComplete="off">
      <Container maxWidth="xs">
        <div>
          <Box component="span" m={1}>
            <TextField
              id="outlined-basic"
              label="Choose One Of...."
              variant="outlined"
              onChange={userText}
            />
          </Box>
          <Box m={2}>
            <Button
              onClick={sendData}
              variant="contained"
              color="primary"
              endIcon={<SendIcon />}
            >
              Send
            </Button>
          </Box>
        </div>
      </Container>
    </form>
  );
}

export default Elements;
