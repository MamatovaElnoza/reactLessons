// import React from 'react'
// import Header from './header/header'
// import Home from './home/home'
// import Gallery from './gallery/gallery'
// import Contact from './contact/contact'
// import Footer from './footer/footer'
// import './app.css'

// const images = [{src: '/images/gallery-img-01.jpg'},{src: '/images/gallery-img-02.jpg'},{src: '/images/gallery-img-03.jpg'},{src: '/images/gallery-img-04.jpg'},{src: '/images/gallery-img-05.jpg'},]

// const App = () => {
//   return (
//     <div>
//         {/* <Header /> */}
//         <Home />
//         <Gallery images= {images}/>
//         <Contact />
//         {/* <Footer /> */}
//     </div>
//   )
// }

// export default App

import React, { useState } from 'react';
import Header from './header/header';
import Home from './home/home';
import Gallery from './gallery/gallery';
import Contact from './contact/contact';
import Footer from './footer/footer';
import './app.css';

const lorem = ['Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fllam impuga fugit enim uedit lam impuga fugit enim uedit placeat recusandae mollitia eligendi veniam facilis nihil']

const images = [
  { src: '/images/gallery-img-01.jpg' },{ src: '/images/gallery-img-02.jpg' },{ src: '/images/gallery-img-03.jpg' },{ src: '/images/gallery-img-04.jpg' },{ src: '/images/gallery-img-05.jpg' },
];

const App = () => {
  const [info, setInfo] = useState({
    name: 'Infinite Loop',
    email: 'Bootstrap 4.0 Parallax Theme',
    message: 'Free HTML Template by TOOPLATE',
  });

  const updated = (newInfo) => {
    setInfo(newInfo);
  };

  return (
    <div>
      {/* <Header /> */}
      <Home content={info} />
      <Gallery images={images} lorem={lorem}/>
      <Contact submit={updated} lorem={lorem}/>
      {/* <Footer /> */}
    </div>
  );
};

export default App;
