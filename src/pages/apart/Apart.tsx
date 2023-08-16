import { Button, Input } from "@mui/material";
import { Container } from "@mui/system";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Api } from "../../common/api";
import { countWord } from "../../common/wordsLib/common";
import { fetchApart, getWords } from "../../redux";
import store from "../../redux/store";

let timeout: any = 0;

export const Apart = () => {
  const [word, setWord] = useState("");
  const [udar, setUdar] = useState("1");
  const [slogs, setSlogs] = useState("1");
  const words = useSelector(getWords);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const { udar, slogs } = countWord(value);
    setWord(value);
    setSlogs(slogs.toString());
    setUdar(udar.toString());
    timeout = setTimeout(() => {
      store.dispatch(fetchApart(value));
      clearTimeout(timeout);
    }, 300);
  };

  const handleChangeUdar = (e: React.ChangeEvent<HTMLInputElement>) => {
    const udar = e.target.value;
    setUdar(udar);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (word.length < 3) {
      return;
    }

    await Api.addApart({
      slogs,
      udar,
      word: countWord(word).word,
    });

    setWord("");
    setUdar("1");
    setSlogs("1");
  };

  return (
    <>
      <Container>
        <h1>Деепричастия</h1>
        <form onSubmit={handleSubmit}>
          Слово: <Input value={word} onChange={handleChange} />
          <br />
          Ударение:{" "}
          <Input type="number" value={udar} onChange={handleChangeUdar} />
          <br />
          Слоги: <Input type="number" value={slogs} />
          <br />
          <br />
          <Button type="submit" variant="contained">
            Добавить
          </Button>
        </form>

        <br />

        {words.map((word) => (
          <p key={word}>{word}</p>
        ))}
      </Container>
    </>
  );
};
