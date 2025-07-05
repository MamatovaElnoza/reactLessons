// import React from 'react'
// import './home.css'

// const Home = () => {
//   return (
//     <div className='bg'>
//       <div className='header'>
//         <h3 className='logo'>Infinite Loop</h3>
//         <ul>
//             <li>Home</li>
//             <li>What We Do</li>
//             <li>Testimonials</li>
//             <li>Gallery</li>
//             <li>Contact</li>
//         </ul>
//     </div>
//     <div className='home'>
//       <h1>Infinite Loop</h1>
//       <p>Bootstrap 4.0 Parallax Theme</p>
//       <p>Free HTML Template by TOOPLATE</p>
//       <div className='icon'>
//         <button><i class="fa-solid fa-arrow-down"></i></button>
//       </div>
//     </div>
//     </div>
//   )
// }

// export default Home

import React from 'react';
import './home.css';

const ulli = ['Home', 'What We Do', 'Testimonials', 'Gallery', 'Contact'];

const Home = ({ content }) => {
  return (
    <div className="bg">
      <div className="header">
        <h3 className="logo">{content.name}</h3>
        <ul>
  {ulli.map((item, index) => (
    <li key={index}>{item}</li>
  ))}
</ul>
      </div>
      <div className="home">
        <h1>{content.name}</h1>
        <p>{content.email}</p>
        <p>{content.message}</p>
        <div className="icon">
          <button><i className="fa-solid fa-arrow-down"></i></button>
        </div>
      </div>
    </div>
  );
};

export default Home;
