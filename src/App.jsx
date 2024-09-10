import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import TrainingCourses from './pages/TrainingCourses/TrainingCourses';
import CoursesConducted from './pages/CoursesConducted/CoursesConducted';
import TrainingFacilities from './pages/TrainingFacilities/TrainingFacilities';
import ContactUs from './pages/ContactUs/ContactUs';
import ScrollToTop from './components/ScrollToTop/ScrollToTop'; // Ensure this path is correct

// Importing components used in the Home component
import Hero from './components/Hero/Hero';
import Title from './components/Title/Title';
import Programs from './components/Programs/Programs';
import About from './components/About/About';
import Body from './components/Body/Body';
import Pictures from './components/Pictures/Pictures';
import Sent from './components/Body/Sent';
import Sponsors from './components/Sponsors/Sponsors';

const Home = () => (
  <div>
    <Hero />
    <Title 
      subTitle={''} 
      title='Gijima Training Academy' 
    />
    <Programs />
    <About />
    <Body />
    <Pictures />
    <Sent />
    <Sponsors />
  </div>
);

const App = () => {
  return (
    <Router>
      <ScrollToTop /> {/* Add ScrollToTop component here */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/training-courses" element={<TrainingCourses />} />
        <Route path="/courses-conducted" element={<CoursesConducted />} />
        <Route path="/training-facilities" element={<TrainingFacilities />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
