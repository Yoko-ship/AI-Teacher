import React, { useEffect } from "react";
import { themes } from "./themes";
import {useParams } from "react-router-dom";
import "../css/learning.css";
import { useMutation, useQuery } from "@tanstack/react-query";
import { FetchingData } from "./http";
import { Content } from "./Content";
function DetailedLearning() {
  const params = useParams();
  const value = themes.find((value) => value.id === Number(params.id));

  const { mutate, isError, error, isPending, data } = useMutation({
    mutationKey: ["data"],
    mutationFn: FetchingData,
  });

  useEffect(() => {
    mutate(value);
  }, []);

  let content = Content(data, isError, isPending, error);

  return (
    <div className="main">
      <div className="details">
        <h2>{value.title}</h2>
        <p>{value.description}</p>
      </div>

      <div className="answers">{content}</div>
    </div>
  );
}

export default DetailedLearning;
