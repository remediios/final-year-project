import React, { useState, useEffect, useRef } from "react";
import randomWords from "random-words";
import { Card, CardContent, Container, Button } from "@mui/material";
import { Input, MainContainer } from "../styles/forms/Global";
import {
  HeaderText,
  MediumText,
  StatsResultsText,
  StatsText,
} from "../styles/texts/Headings";
import { Timer } from "../styles/texts/Global";

const TypingSpeed = () => {
  const MAX_WORDS = 200;
  const SECONDS = 60;
  const [words, setWords] = useState([]);
  const [countDown, setCountDown] = useState(SECONDS);
  const [currentInput, setCurrentInput] = useState([]);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(-1);
  const [currentChar, setCurrentChar] = useState("");
  const [correct, setCorrect] = useState(0);
  const [incorrect, setIncorrect] = useState(0);
  const [status, setStatus] = useState("waiting");
  const inputRef = useRef(null);

  const generateWords = () => {
    return new Array(MAX_WORDS).fill(null).map(() => randomWords());
  };

  const startTimer = () => {
    if (status !== "finished") {
      setWords(generateWords());
      setCurrentWordIndex(0);
      setCorrect(0);
      setIncorrect(0);
      setCurrentCharIndex(-1);
      setCurrentChar("");
    }

    if (status !== "started") {
      setStatus("started");
      let interval = setInterval(() => {
        setCountDown((prevCountDown) => {
          if (prevCountDown === 0) {
            clearInterval(interval);
            setStatus("finished");
            setCurrentInput("");
            return SECONDS;
          } else {
            return prevCountDown - 1;
          }
        });
      }, 1000);
    }
  };

  const checkMatch = () => {
    const wordToCompare = words[currentWordIndex];
    const doesItMatch = wordToCompare === currentInput.trim();
    if (doesItMatch) {
      setCorrect(correct + 1);
    } else {
      setIncorrect(incorrect + 1);
    }
  };

  const handleKeyDown = ({ keyCode, key }) => {
    //spacebar
    if (keyCode === 32) {
      checkMatch();
      setCurrentInput("");
      setCurrentWordIndex(currentWordIndex + 1);
      setCurrentCharIndex(-1);
      //backspace
    } else if (keyCode === 8) {
      setCurrentCharIndex(currentCharIndex - 1);
      setCurrentChar("");
    } else {
      setCurrentCharIndex(currentCharIndex + 1);
      setCurrentChar(key);
    }
  };

  const getCharacterClass = (wordIndex, charIndex, char) => {
    if (
      wordIndex === currentWordIndex &&
      charIndex === currentCharIndex &&
      currentChar &&
      status !== "finished"
    ) {
      if (char === currentChar) {
        return { background: "rgb(66, 186, 150)" };
      } else {
        return { background: "rgb(223, 71, 89)" };
      }
    } else if (
      wordIndex === currentWordIndex &&
      currentCharIndex >= words[currentWordIndex].length
    ) {
      return { background: "rgb(223, 71, 89)" };
    } else {
      return {};
    }
  };

  useEffect(() => {
    setWords(generateWords);
  }, []);

  useEffect(() => {
    if (status === "started") {
      inputRef.current.focus();
    }
  }, [status]);

  return (
    <>
      <MainContainer>
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
            disabled={status !== "started"}
            ref={inputRef}
            type="text"
            placeholder="Start typing..."
            style={{ borderRadius: "10px" }}
            onKeyDown={handleKeyDown}
            value={currentInput}
            onChange={(e) => setCurrentInput(e.target.value)}
          />
          <Button
            disabled={status === "started"}
            variant="contained"
            style={{ marginLeft: "10px", background: "rgb(24, 183, 214)" }}
            onClick={startTimer}
          >
            Start
          </Button>
        </Container>
        {status === "started" && (
          <Container>
            <Card sx={{ minWidth: 275, border: "1px solid " }}>
              <CardContent>
                {words.map((word, i) => (
                  <span key={i}>
                    <span>
                      {word.split("").map((char, index) => (
                        <span
                          style={getCharacterClass(i, index, char)}
                          key={index}
                        >
                          {char}
                        </span>
                      ))}
                    </span>
                    <span> </span>
                  </span>
                ))}
              </CardContent>
            </Card>
          </Container>
        )}
        {status === "finished" && (
          <Container style={{ textAlign: "center", display: "flex" }}>
            <Container>
              <StatsText>Words per minute (WPM) : </StatsText>
              <StatsResultsText>{correct}</StatsResultsText>
            </Container>
            <Container>
              <StatsText>Accuracy : </StatsText>
              <StatsResultsText>
                {Math.round((correct / (correct + incorrect)) * 100)} %
              </StatsResultsText>
            </Container>
          </Container>
        )}
      </MainContainer>
    </>
  );
};

export default TypingSpeed;
