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
        --shadow: rgb(0, 0, 0, 0.75);

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
        --computerGuyShirt: #8D58C6; 
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
          --HeadingColor: #326201;
          --mainColor: #517c26;
          --secondaryColor: #406f12;
          --mainText: #ffffff;
          --subText: rgba(255, 255, 255, .85);
          --secondaryText: rgba(255, 255, 255, .75);
          --TertiaryText: #000000;
          --TertiaryTextBtn: #FFBEE8;
          --TertiaryTextBtnHover: #ffffff;
          --TertiaryTextBtnText: #FFBEE8;
          --formColor: #829174;
          --themeDotBorder: #fff;
          --themeContainerDotBorder: #17a2b8;
          --previewBg: rgb(70, 35, 25, 0.5);
          --shadow: rgb(0, 0, 0, 0.75);

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
          --computerGuyShirt: #62BFED;
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
          --formColor: #73c9ff;
          --themeDotBorder: #24292e;
          --themeContainerDotBorder: #db1a0f;
          --previewBg: rgb(179, 179, 179, 0.5);
          --shadow: rgb(0, 0, 0, 0.75);

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
          --computerSpecs: #ffdede;
          --computerStars: #f55f44;
          --computerCircles: #4d8af0;
          --computerCrosses: #00ff2a;
          }`;
      case "black":
        return `:root{
          --HeadingColor: #000000;
          --mainColor: #141212;
          --secondaryColor: #0B0A0A;
          --mainText: #ffffff;
          --subText: rgba(255, 255, 255, .85);
          --secondaryText: #ffffff;
          --TertiaryText: #ffffff;
          --TertiaryTextBtn: #5E5E5E;
          --TertiaryTextBtnHover: #ffffff;
          --TertiaryTextBtnText: #000000;
          --formColor: #b5b5b5;
          --themeDotBorder: #CBD5E5;
          --themeContainerDotBorder: #E0E4EA;
          --previewBg: rgb(179, 179, 179, 0.5);
          --shadow: rgb(255, 255, 255, 0.25);

          --heroCape: #80FF63;
          --heroSkin: #EEC794;
          --heroBody: #FA9455;
          --heroPants: #6F7BD6;
          --heroShoes: #00e699;
          --heroHair: #654321;
          --heroSpecs: #ff9214;
          --heroStars: #fc7ec3;
          --heroCross: #055b80;
          
          --computerGuyskin: #F3B767; 
          --computerGuyHair: #FFF3C3;
          --computerGuyShirt: #BDFFFF;
          --computerGuyShirtLogo: #6cc5ff;
          --computerGuyComputerTable: #62806C;
          --computerGuyTreePlanter: #DFA777;
          --computerGuyTreePlanterStroke: #506633;
          --computerGuyTreeBush: #F1FF59;
          --computerLogoCircle: #fcb97e;
          --computerLogoCircleGradient: url(#linear-gradient-B);
          --computerSpecs: #f5ea16;
          --computerStars: #2eb83e;
          --computerCircles: #864df0;
          --computerCrosses: #00e613;
          }`;
      case "transparent":
        return `:root{
          --HeadingColor: transparent;
          --mainColor: transparent;
          --secondaryColor: transparent;
          --mainText: #000000;
          --subText: rgba(0, 0, 0, .85);
          --secondaryText: rgba(0, 0, 0, .75);
          --TertiaryText: #ffffff;
          --TertiaryTextBtn: rgba(0, 0, 0, .85);
          --TertiaryTextBtnHover: #ffffff;
          --TertiaryTextBtnText: rgba(255, 255, 255, .9);
          --formColor: transparent;
          --themeDotBorder: rgba(0, 0, 0, .5);
          --themeContainerDotBorder: rgba(0, 0, 0, .5);
          --previewBg: rgb(255, 255, 255, 0.25);
          --shadow: rgb(0, 0, 0, 0.5);

          --heroCape: #506633;
          --heroSkin: #F3B767;
          --heroBody: #6cc5ff;
          --heroPants: #62806C;
          --heroShoes: #DFA777;
          --heroHair: #FFF3C3;
          --heroSpecs: #864df0;
          --heroStars: #fc7ec3;
          --heroCross: #00e613;
          
          --computerGuyskin: #F3B767; 
          --computerGuyHair: #654321;
          --computerGuyShirt: #EB7A15;
          --computerGuyShirtLogo: #00e699;
          --computerGuyComputerTable: #627d7f;
          --computerGuyTreePlanter: #df7777;
          --computerGuyTreePlanterStroke: #665c33;
          --computerGuyTreeBush: #eeff59;
          --computerLogoCircle: #fcb97e;
          --computerLogoCircleGradient: url(#linear-gradient-B);
          --computerSpecs: #16f5a3;
          --computerStars: #fcf635;
          --computerCircles: #f0504d;
          --computerCrosses: #a100e6;
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
          --shadow: rgb(0, 0, 0, 0.75);

          --heroCape: #666666;
          --heroSkin: #fdc0a4;
          --heroBody: #fa5757;
          --heroPants: #fce3e3;
          --heroShoes: #c44545;
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