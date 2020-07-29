import React from "react";
import "./App.css";
import Layout from "../../components/Layout/Layout";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
${(props) => {
  switch (props.color) {
    case "blue":
      return `:root {
        --mainColor: #15202b;
        --secondaryColor: #192734;
        --borderColor: #164d56;
        --mainText: #fff;
        --secondaryText: #eeeeee;
        --themeDotBorder: #fff;
        --previewBg: rgb(25, 39, 52, 0.8);
        --previewShadow: #111921;
        --buttonColor: #17a2b8;
      }`;
    case "green":
      return `:root {
          --mainColor: #606b56;
          --secondaryColor: #515a48;
          --borderColor: #161914;
          --mainText: #fff;
          --secondaryText: #eeeeee;
          --themeDotBorder: #fff;
          --previewBg: rgb(81, 90, 72, 0.8);
          --previewShadow: #2a2f25;
          --buttonColor: #669966;
        }`;
    case "purple":
      return `:root{
            --mainColor:#46344E;
            --secondaryColor:#382a3f;
            --borderColor:#1d1520;
            --mainText:#fff;
            --secondaryText:#eeeeee;
            --themeDotBorder:#FFF;
            --previewBg:rgb(29, 21, 32, 0.8);
            --previewShadow:#2b202f;
            --buttonColor:#8534a3;
          }`;
    default:
      return `:root {
          --mainColor: #eaeaea;
          --secondaryColor: #fff;
          --borderColor: #c1c1c1;
          --mainText: black;
          --secondaryText: #4b5156;
          --themeDotBorder: #24292e;
          --previewBg: rgb(251, 249, 243, 0.8);
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
        <GlobalStyle color={this.state.color} />
        <Layout handleThemeChange={this.handleThemeChange}/>
        <main>
          
        </main>
      </div>
    );
  }
}
export default App;