import React, { useState } from "react";
import "../css/learning.css";
import { useMutation } from "@tanstack/react-query";
import { FetchingData } from "../components/http";
import { Content } from "../components/Content";

function Learning() {
  const [value, setValue] = useState({description:""});
  const { mutate, isPending, isError, error, data } = useMutation({
    mutationKey: ["value"],
    mutationFn: FetchingData,
  });
  const buttonHandler = () => {
    mutate(value);
    setValue({description:""});
  };

  let content = Content(data,isError,isPending,error)

  return (
    <div className="main">
      <div className="details">
        <h2>Добро пожаловать в раздел обучение</h2>
        <p>Здесь вы можете разбирать сложные темы с AI</p>
      </div>

      <div className="answers">
        {content}
      </div>

      <div className="inbt">
        <input
          type="text"
          placeholder="Запрос"
          onChange={(e) => setValue({description:e.target.value})}
          value={value.description}
          required
        />
        <button onClick={buttonHandler} disabled={isPending}>
          {isPending ? "Ожидатайте..." : "Отправить"}
        </button>
      </div>
    </div>
  );
}

export default Learning;
