import React from "react";
import { Link, Prompt } from "react-router-dom";
import logo from "../logo.svg";

const Home: React.FC = () => {
  return (
    <>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Home</p>
        <div className={"home-link"}>
          <div>
            <Link className={"App-link"} to={`/about`}>
              プロンプト付きリンク
            </Link>
            <Prompt message="/aboutへ遷移しますか？" />
          </div>
        </div>
      </header>
    </>
  );
};

export default Home;
