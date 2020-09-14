import React from "react";
import { Link, useHistory } from "react-router-dom";
import CustomPromptDialog from "./components/CustomPromptDialog";

const About: React.FC = () => {
  const history = useHistory();

  return (
    <>
      <header className="App-header">
        <p>About</p>
        <div className={"home-link"}>
          <div>
            <Link className={"App-link"} to={`/home`}>
              カスタムプロンプト付きリンク
            </Link>
            <CustomPromptDialog
              navigate={(path) => {
                history.push(path);
              }}
            />
          </div>
        </div>
      </header>
    </>
  );
};

export default About;
