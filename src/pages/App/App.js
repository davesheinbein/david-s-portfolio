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
        --HeadingColor: #871a12;
        --mainColor: #AA2319;
        --secondaryColor: #B9271C;
        --mainText: #ffffff;
        --subText: rgba(255, 255, 255, .95);
        --secondaryText: rgba(0, 0, 0, 1);
        --TertiaryText: #000000;
        --TertiaryTextBtn: #FFFFFF;
        --TertiaryTextBtnHover: #ff8915;
        --TertiaryTextBtnText: #FFFFFF;
        --formColor: #e08d87;
        --themeDotBorder: #fff;
        --themeContainerDotBorder: #231E6A;
        --previewBg: rgb(255, 255, 255, 0.75);
                  
        --heroCape: #FF84B1;
        --heroSkin: #F9E699;
        --heroBody: #B697BC;
        --heroPants: #8DDC99;
        --heroShoes: #b9d2ca;
        --heroHair: #FF8915; 
        --heroSpecs: #F5E045;
        --heroStars: #ffffff;
        --heroCross: #00E6E2;
        
        --computerGuyskin: #EBD0AC; 
        --computerGuyHair: #654321; 
        --computerGuyShirt: #ff8915; 
        --computerGuyShirtLogo: #ffbde8;
        --computerGuyComputerTable: #767676;
        --computerGuyTreePlanter: #B79371;
        --computerGuyTreePlanterStroke: #664433;
        --computerGuyTreeBush: #9FF239;
        --computerLogoCircle: #FFD1CE;
        --computerLogoCircleGradient: url(#linear-gradient-B);
        --computerSpecs: #a9ffff;
        --computerStars: #f55f44;
        --computerCircles: #4d8af0;
        --computerCrosses: #2F1E0D;

      }`;
      case "green":
        return `:root {
          --HeadingColor: #2F342A;
          --mainColor: #606b56;
          --secondaryColor: #515a48;
          --mainText: #fff;
          --subText: rgba(255, 255, 255, .85);
          --secondaryText: rgba(255, 255, 255, .75);
          --TertiaryText: #000000;
          --TertiaryTextBtn: #FFBEE8;
          --TertiaryTextBtnHover: #ffffff;
          --TertiaryTextBtnText: #FFBEE8;
          --formColor: #ffffff;
          --themeDotBorder: #fff;
          --themeContainerDotBorder: #17a2b8;
          --previewBg: rgb(0, 0, 0, 0.75);
                    
          --heroCape: #FEDB2B;
          --heroSkin: #9F616A;
          --heroBody: #AA2319;
          --heroPants: #2F3B57;
          --heroShoes: #ffffff;
          --heroHair: #313230;
          --heroSpecs: #FAE6E3;
          --heroStars: #AA8E00;
          --heroCross: #006FE6;
          
          --computerGuyskin: #ffc791;
          --computerGuyHair: #ff8915;
          --computerGuyShirt: #ffbde8;
          --computerGuyShirtLogo: #6cc5ff;
          --computerGuyComputerTable: #3f3d56;
          --computerGuyTreePlanter: #e1c1a5;
          --computerGuyTreePlanterStroke: #336;
          --computerGuyTreeBush: #E1FF59;
          --computerLogoCircle: #b1ffff;
          --computerLogoCircleGradient: url(#linear-gradient-A);
          --computerSpecs: #a9ffff;
          --computerStars: #f55f44;
          --computerCircles: #4d8af0;
          --computerCrosses: #00e699;

        }`;
      case "blue":
        return `:root{
          --HeadingColor: #5083A5;
          --mainColor: #0D9DFD;
          --secondaryColor: #459CF6;
          --mainText: #ffffff;
          --subText: rgba(255, 255, 255, .85);
          --secondaryText: #000000;
          --TertiaryText: #ffffff;
          --TertiaryTextBtn: #61DBFF;
          --TertiaryTextBtnHover: #FFBEE8;
          --TertiaryTextBtnText: #000000;
          --formColor: #ffffff;
          --themeDotBorder: #24292e;
          --themeContainerDotBorder: #db1a0f;
          --previewBg: rgb(179, 179, 179, 0.5);
          
          --heroCape: #80FF63;
          --heroSkin: #E0A387;
          --heroBody: #FAE754;
          --heroPants: #70D7D7;
          --heroShoes: #000000;
          --heroHair: #654321;
          --heroSpecs: #f55f44;
          --heroStars: #4d8af0;
          --heroCross: #00e699;
          
          --computerGuyskin: #a0616a; 
          --computerGuyHair: #2f2e41;
          --computerGuyShirt: #ffbde8;
          --computerGuyShirtLogo: #6cc5ff;
          --computerGuyComputerTable: #3f3d56;
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
          --HeadingColor: #F1F1F1;
          --mainColor:#F3F3F3;
          --secondaryColor:#FFFCFC;
          --mainText:#000000;
          --subText: rgba(0, 0, 0, .75);
          --secondaryText:#084181;
          --TertiaryText: #ffffff;
          --TertiaryTextBtn: #084181;
          --TertiaryTextBtnHover: #ffffff
          --TertiaryTextBtnText: #63dbff;
          --formColor: #ffffff;
          --themeDotBorder: #787878;
          --themeContainerDotBorder: #787878;
          --previewBg:rgb(255, 255, 255, 0.75);
                    
          --heroCape: #666666;
          --heroSkin: #fdc0a4;
          --heroBody: #fa5757;
          --heroPants: #fce3e3;
          --heroShoes: #000000;
          --heroHair: #654321;
          --heroSpecs: #44f5d5;
          --heroStars: #4df05d;
          --heroCross: #7644c7;
          
          --computerGuyskin: #ebbe83; 
          --computerGuyHair: #914236;
          --computerGuyShirt: #7f8583;
          --computerGuyShirtLogo: #faff6c;
          --computerGuyComputerTable: #982B2B;
          --computerGuyTreePlanter: #e1aba5;
          --computerGuyTreePlanterStroke: #336648;
          --computerGuyTreeBush: #6cff96;
          --computerLogoCircle: #fcffb1;
          --computerLogoCircleGradient: url(#linear-gradient-D);
          --computerSpecs: #b7a9ff;
          --computerStars: #44ecf5;
          --computerCircles: #f04daf;
          --computerCrosses: #f54444;
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