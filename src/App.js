import './App.css';

import Carousel, { CarouselItem } from "./Carousel";

import photo1 from './img/beck1.jpg';
import photo2 from './img/P1055040.00_00_06_29.Still001.jpg';
import photo3 from './img/P1055040.00_00_06_32.Still002.jpg';
import photo4 from './img/P1055040.00_00_06_34.Still003.jpg';
import photo5 from './img/P1055088.00_00_03_25.Still004-2.jpg';
import photo6 from './img/P1055180.jpg';
import photo7 from './img/P1055088.00_00_25_18.Still009-2.jpg';


import photo8 from './img/lane-1.png';
import photo9 from './img/collage 4-4.png';

import photo10 from './img/Panama1.jpg';
import photo11 from './img/Panama2.jpg';
import photo12 from './img/Panama3.jpg';
import photo13 from './img/Panama4.jpg';

import photo14 from './img/sam 04.jpg';
import photo15 from './img/sam 05.jpg';
import photo16 from './img/ben backside windup.jpg';
import photo17 from './img/ben good backside wind up.jpg';
import photo18 from './img/real sam air.jpg';

import video from './img/finished panama edit.mp4';




function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="slide">
          <div className="Card-header">
            <h2>
            Jonah Saffran Productions
            </h2>
          </div>
            <div className="Contact-card">
                Instagram: @jonahsaffran<br></br>
                Email: jonahsaffran@gmail.com
            </div>
        </div>
      </header>
      <body>
        <div className="gallery">
          <div className="Carousel-slide1">
            <Carousel>
              <CarouselItem><img className="photo" src={photo1} loading="lazy"/></CarouselItem>
              <CarouselItem><img className="photo" src={photo2} loading="lazy"/></CarouselItem>
              <CarouselItem><img className="photo" src={photo3} loading="lazy"/></CarouselItem>
              <CarouselItem><img className="photo" src={photo4} loading="lazy"/></CarouselItem>
              <CarouselItem><img className="photo" src={photo5} loading="lazy"/></CarouselItem>
              <CarouselItem><img className="photo" src={photo6} loading="lazy"/></CarouselItem>
              <CarouselItem><img className="photo" src={photo7} loading="lazy"/></CarouselItem>
            </Carousel>
          </div>
          <div className="Carousel-slide2">
            <Carousel>
              <CarouselItem><img className="photo" src={photo8} loading="lazy"/></CarouselItem>
              <CarouselItem><img className="photo" src={photo9} loading="lazy"/></CarouselItem>
            </Carousel>
          </div>
          <div className="Carousel-slide3">
            <Carousel>
              <CarouselItem><img className="photo" src={photo10} loading="lazy"/></CarouselItem>
              <CarouselItem><img className="photo" src={photo11} loading="lazy"/></CarouselItem>
              <CarouselItem><img className="photo" src={photo12} loading="lazy"/></CarouselItem>
              <CarouselItem><img className="photo" src={photo13} loading="lazy"/></CarouselItem>
            </Carousel>
          </div>
          <div className="Carousel-slide4">
            <Carousel>
              <CarouselItem><img className="photo" src={photo14} loading="lazy"/></CarouselItem>
              <CarouselItem><img className="photo" src={photo15} loading="lazy"/></CarouselItem>
              <CarouselItem><img className="photo" src={photo16} loading="lazy"/></CarouselItem>
              <CarouselItem><img className="photo" src={photo17} loading="lazy"/></CarouselItem>
              <CarouselItem><img className="photo" src={photo18} loading="lazy"/></CarouselItem>
            </Carousel>
          </div>
        </div>
      </body>
    </div>
  );
}

export default App;
