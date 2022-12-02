import React from "react";
import { useParams } from "react-router-dom";
import { GithubUser } from "./GithubUser";

export function ShowGithubUser(props) {
  const { username } = useParams();

  return <GithubUser username={props.user} />;
}