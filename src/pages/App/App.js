import React from "react";
import "./App.css";
import Smoke from "../../components/Smoke/Smoke";
import Layout from "../../components/Layout/Layout";
import { createGlobalStyle } from "styled-components";
import { Route, Switch } from 'react-router-dom';

const GlobalStyle = createGlobalStyle`
${(props) => {
    switch (props.color) {
      case "red":
        return `:root {
        --HeadingColor: #5083A5;
        --mainColor: #15202b;
        --secondaryColor: #192734;
        --borderColor: #164d56;
        --mainText: #fff;
        --secondaryText: #eeeeee;
        --TertiaryText: red;
        --formColor: #ffffff;
        --themeDotBorder: #fff;
        --themeContainerDotBorder: #17a2b8;
        --inputFieldBorder: #b3b3b3;
        --previewBg: rgb(25, 39, 52, 0.8);
        --previewShadow: #111921;
        --buttonColor: #17a2b8;
      }`;
      case "green":
        return `:root {
          --HeadingColor: #5083A5;
          --mainColor: #606b56;
          --secondaryColor: #515a48;
          --borderColor: #161914;
          --mainText: #fff;
          --secondaryText: #eeeeee;
          --TertiaryText: red;
          --formColor: #ffffff;
          --themeDotBorder: #fff;
          --themeContainerDotBorder: #17a2b8;
          --inputFieldBorder: #b3b3b3;
          --previewBg: rgb(81, 90, 72, 0.8);
          --previewShadow: #2a2f25;
          --buttonColor: #669966;
        }`;
      case "yellow":
        return `:root{
          --HeadingColor: #5083A5;
          --mainColor:#46344E;
          --secondaryColor:#382a3f;
          --borderColor:#1d1520;
          --mainText:#fff;
          --secondaryText:#eeeeee;
          --TertiaryText: red;
          --formColor: #ffffff;
          --themeDotBorder:#FFF;
          --themeContainerDotBorder: #17a2b8;
          --inputFieldBorder: #b3b3b3;
          --previewBg:rgb(29, 21, 32, 0.8);
          --previewShadow:#2b202f;
          --buttonColor:#8534a3;
          }`;
      default:
        return `:root {
          --HeadingColor: #5083A5;
          --mainColor: #0D9DFD;
          --secondaryColor: #459CF6;
          --borderColor: #459CF6;
          --mainText: #ffffff;
          --secondaryText: #000000;
          --TertiaryText: red;
          --formColor: #ffffff;
          --themeDotBorder: #24292e;
          --themeContainerDotBorder: #db1a0f;
          --inputFieldBorder: #b3b3b3;
          --previewBg: rgb(179, 179, 179, 0.5);
          --previewShadow: #f0ead6;
          --buttonColor: black;
        }`;
    }
  }}
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    /*--- State ---*/

    this.state = {
      color: 'default',
    }
    this.handleThemeChange = this.handleThemeChange.bind(this);
  }

  /*--- Handle Methods ---*/

  handleThemeChange(color) {
    this.setState({
      color
    })
  }
  /*--- Lifecycle Methods ---*/
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' render={() =>
            <div>
              <Smoke />
            </div>
          } />

          <Route exact path='/main' render={() =>
            <div>
              <GlobalStyle color={this.state.color} />
              <Layout handleThemeChange={this.handleThemeChange} />
            </div>
          } />

        </Switch>
      </div>
    );
  }
}
export default App;