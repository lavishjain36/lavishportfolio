import React, { useState } from 'react';
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Projects from './components/projects/Projects';
import ContactForm from './components/contactme/ContactForm';
import Footer from './components/footer/Footer';

import { CirclesWithBar } from 'react-loader-spinner';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  setTimeout(() => {
    setIsLoading(false);
    // isLoading ? setIsLoading(true) : setIsLoading(false);
  }, 2250);

  return (
    <>
      {isLoading
        ? <div className='bg-dark loding'>
          <CirclesWithBar
            height="100"
            width="100"
            color="#4fa94d"
            wrapperStyle={{ display: "flex", alignItem: "center", justifyContent: "center" }}
            wrapperClass=""
            visible={true}
            outerCircleColor=""
            innerCircleColor=""
            barColor=""
            ariaLabel='circles-with-bar-loading'
          />
        </div>
        : <>
          <Navbar />
          <main>
            <Hero />
            <hr className='m-0' />
            <About />
            <hr className='m-0' />
            <Skills />
            <hr className='m-0' />
            <Projects />
            <hr className='m-0' />
            <ContactForm />
            <hr className='m-0' />
          </main>
          <footer>
            <Footer />
          </footer>
        </>
      }

    </>
  );
};

export default App;