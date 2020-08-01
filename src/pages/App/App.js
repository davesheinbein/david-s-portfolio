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
        --HeadingColor: #db2d21;
        --mainColor: #771811;
        --secondaryColor: #992118;
        --mainText: #FFE9F0;
        --secondaryText: #3d3d3d;
        --TertiaryText: red;
        --TertiaryTextBtn: orange;
        --formColor: #ffdf5e;
        --themeDotBorder: #fff;
        --themeContainerDotBorder: #ffa45e;
        --previewBg: rgb(255, 231, 122, 0.5);
        --previewShadow: #111921;
        --buttonColor: #17a2b8;
                  
        --heroCape: #63dbff;
        --heroPants: #fdc0a4;
        --heroBody: #b9d2ca;
        --heroHair: #654321;
        --heroSpecs: #f55f44;
        --heroStars: #4d8af0;
        --heroCross: #00e699;
        
        --computerGuyskin: #a0616a;
        --computerGuyHair: #2f2e41;
        --computerGuyShirt: #ffbde8;
        --computerGuyShirtLogo: #6cc5ff;
        --computerGuyTable: #3f3d56;
        --computerGuyTreePlanter: #e1c1a5;
        --computerGuyTreePlanterStroke: #336;
        --computerGuyTreeBush: #79ff5a;
        --computerLogoCircle: #b1ffff;
        --computerLogoCircleGradient: url(#linear-gradient-A);
        --computerSpecs: #a9ffff;
        --computerStars: #f55f44;
        --computerCircles: #4d8af0;
        --computerCrosses: #00e699;

      }`;
      case "green":
        return `:root {
          --HeadingColor: #5083A5;
          --mainColor: #606b56;
          --secondaryColor: #515a48;
          --mainText: #fff;
          --secondaryText: #eeeeee;
          --TertiaryText: red;
          --TertiaryTextBtn: orange;
          --formColor: #ffffff;
          --themeDotBorder: #fff;
          --themeContainerDotBorder: #17a2b8;
          --previewBg: rgb(81, 90, 72, 0.8);
          --previewShadow: #2a2f25;
          --buttonColor: #669966;
                    
          --heroCape: #63dbff;
          --heroPants: #fdc0a4;
          --heroBody: #b9d2ca;
          --heroHair: #654321;
          --heroSpecs: #f55f44;
          --heroStars: #4d8af0;
          --heroCross: #00e699;
          
          --computerGuyskin: #a0616a;
          --computerGuyHair: #2f2e41;
          --computerGuyShirt: #ffbde8;
          --computerGuyShirtLogo: #6cc5ff;
          --computerGuyTable: #3f3d56;
          --computerGuyTreePlanter: #e1c1a5;
          --computerGuyTreePlanterStroke: #336;
          --computerGuyTreeBush: #79ff5a;
          --computerLogoCircle: #b1ffff;
          --computerLogoCircleGradient: url(#linear-gradient-A);
          --computerSpecs: #a9ffff;
          --computerStars: #f55f44;
          --computerCircles: #4d8af0;
          --computerCrosses: #00e699;

        }`;
      case "yellow":
        return `:root{
          --HeadingColor: #5083A5;
          --mainColor:#46344E;
          --secondaryColor:#382a3f;
          --mainText:#fff;
          --secondaryText:#eeeeee;
          --TertiaryText: red;
          --TertiaryTextBtn: orange;
          --formColor: #ffffff;
          --themeDotBorder:#FFF;
          --themeContainerDotBorder: #17a2b8;
          --previewBg:rgb(29, 21, 32, 0.8);
          --previewShadow:#2b202f;
          --buttonColor:#8534a3;
                    
          --heroCape: #63dbff;
          --heroPants: #fdc0a4;
          --heroBody: #b9d2ca;
          --heroHair: #654321;
          --heroSpecs: #f55f44;
          --heroStars: #4d8af0;
          --heroCross: #00e699;
          
          --computerGuyskin: #a0616a;
          --computerGuyHair: #2f2e41;
          --computerGuyShirt: #ffbde8;
          --computerGuyShirtLogo: #6cc5ff;
          --computerGuyTable: #3f3d56;
          --computerGuyTreePlanter: #e1c1a5;
          --computerGuyTreePlanterStroke: #336;
          --computerGuyTreeBush: #79ff5a;
          --computerLogoCircle: #b1ffff;
          --computerLogoCircleGradient: url(#linear-gradient-A);
          --computerSpecs: #a9ffff;
          --computerStars: #f55f44;
          --computerCircles: #4d8af0;
          --computerCrosses: #00e699;

          }`;
      default:
        return `:root {
          --HeadingColor: #5083A5;
          --mainColor: #0D9DFD;
          --secondaryColor: #459CF6;
          --mainText: #ffffff;
          --secondaryText: #000000;
          --TertiaryText: red;
          --TertiaryTextBtn: orange;
          --formColor: #ffffff;
          --themeDotBorder: #24292e;
          --themeContainerDotBorder: #db1a0f;
          --previewBg: rgb(179, 179, 179, 0.5);
          --previewShadow: #f0ead6;
          --buttonColor: black;
          
          --heroCape: #63dbff;
          --heroPants: #fdc0a4;
          --heroBody: #b9d2ca;
          --heroHair: #654321;
          --heroSpecs: #f55f44;
          --heroStars: #4d8af0;
          --heroCross: #00e699;
          
          --computerGuyskin: #a0616a;
          --computerGuyHair: #2f2e41;
          --computerGuyShirt: #ffbde8;
          --computerGuyShirtLogo: #6cc5ff;
          --computerGuyTable: #3f3d56;
          --computerGuyTreePlanter: #e1c1a5;
          --computerGuyTreePlanterStroke: #336;
          --computerGuyTreeBush: #79ff5a;
          --computerLogoCircle: #b1ffff;
          --computerLogoCircleGradient: url(#linear-gradient-A);
          --computerSpecs: #a9ffff;
          --computerStars: #f55f44;
          --computerCircles: #4d8af0;
          --computerCrosses: #00e699;
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