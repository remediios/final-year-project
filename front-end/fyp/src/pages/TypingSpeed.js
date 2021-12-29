import React, { useState, useEffect } from "react";
import randomWords from "random-words";
import { Card, CardContent, Container, Button } from "@mui/material";
import { Input } from "../styles/forms/Global";
import { HeaderText, MediumText } from "../styles/texts/Headings";
import { Timer } from "../styles/texts/Global";

const TypingSpeed = () => {
  const MAX_WORDS = 200;
  const SECONDS = 60;
  const [words, setWords] = useState([]);
  const [countDown, setCountDown] = useState(SECONDS);

  const generateWords = () => {
    return new Array(MAX_WORDS).fill(null).map(() => randomWords());
  };

  const startTimer = () => {
    setInterval(() => {
      setCountDown((prevCountDown) => prevCountDown - 1);
    }, 1000);
  };

  useEffect(() => {
    setWords(generateWords);
  }, []);

  return (
    <>
      <Container style={{ textAlign: "center" }}>
        <HeaderText style={{ color: "black", marginBottom: "10px" }}>
          STEP 1
        </HeaderText>
        <MediumText style={{ marginBottom: "2px" }}>
          Please go ahead and type as many words as you can within 1 minute!
        </MediumText>
        <MediumText
          style={{ color: "black", marginTop: "0px", marginBottom: "30px" }}
        >
          Results will be displayed at the end.
        </MediumText>
        <Timer>{countDown}</Timer>
      </Container>
      <Container
        style={{ width: "50%", display: "flex", marginBottom: "30px" }}
      >
        <Input
          type="text"
          placeholder="Start typing..."
          style={{ borderRadius: "10px" }}
        />
        <Button
          variant="contained"
          style={{ marginLeft: "10px", background: "rgb(24, 183, 214)" }}
          onClick={startTimer}
        >
          Start
        </Button>
      </Container>

      <Container>
        <Card sx={{ minWidth: 275, border: "1px solid " }}>
          <CardContent>
            {words.map((word, i) => (
              <>
                <span>{word} </span>
                <span> </span>
              </>
            ))}
          </CardContent>
        </Card>
      </Container>
    </>
  );
};

export default TypingSpeed;
