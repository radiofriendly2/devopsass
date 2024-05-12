import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Courses from './components/Courses';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Certificates from './components/Certificates';

function App() {
  const navBarOptions = [
    {
      id: 1,
      name: 'Home'
    },
    {
      id: 2,
      name: 'Projects'
    }, {
      id: 3,
      name: 'Education'
    },
    {
      id: 3,
      name: 'Certificate'
    },

  ]
  const certificates = [
    {
      id: 1,
      name: 'Google Cybersecurity Certificate',
      academy: 'coursera',
      image: require('./resources/coursera.png')

    },

    {
      id: 2,
      name: 'C Development',
      academy: 'edx',
      image: require('./resources/edx.png')

    }, {
      id: 3,
      name: 'Blockchain Basics',
      academy: 'udemy',
      image: require('./resources/udemy.png')

    }, {
      id: 4,
      name: 'HTML, CSS',
      academy: 'Khan Academy',
      image: require('./resources/khanAcademy.png')

    }
  ]
  const projects = [
    {
      id: 1,
      name: 'Text Based Adventure',
      description: 'A text based game on C',
      techStack: ['C']
    },
    {
      id: 2,
      name: 'Tic Tac Toe using TCP',
      description: 'A tic-tac toe with multiplayer using TCP',
      techStack: ['C#']
    }, {
      id: 3,
      name: 'Network Scanner',
      description: 'A network scanner',
      techStack: ['Python']
    }, {
      id: 4,
      name: 'RegEx Engine',
      description: 'RegEx engine using DFA',
      techStack: ['JavaScript']
    }, {

      id: 5,
      name: 'Movie Recommendation System',
      description: 'A movie recommendation system using 3GB of data from IMDBs website. Implemented various Data Structures and Algorithms to provide personalized movie recommendations based on user preferences and help movie makers understand audience preferences and which genres to focus on.',
      techStack: ['C++', 'OpenMP']
    }
  ]
  const courses = [
    {
      id: 1,
      courseCode: 'CL-117',
      name: 'Intro to Info. and Comm. Technologies'
    },
    {
      id: 2,
      courseCode: 'CS-118',
      name: 'Programming Fundamentals'
    },
    {
      id: 3,
      courseCode: 'CS-217',
      name: 'Object Oriented Programming'
    },
    {
      id: 4,
      courseCode: 'CS-2001',
      name: 'Data Structures'
    },
    {
      id: 5,
      courseCode: 'EE-2003',
      name: 'Computer Organization and Assembly Language'
    },
    {
      id: 6,
      courseCode: 'CS-2006',
      name: 'Operating Systems'
    },
    {
      id: 7,
      courseCode: 'CY-3005',
      name: 'Network and Cybersecurity'
    },
    {
      id: 8,
      courseCode: 'CL-2005',
      name: 'Database'
    },
    {
      id: 9,
      courseCode: 'CS-2009',
      name: 'Design and Analysis of Algorithms'
    },
    {
      id: 10,
      courseCode: 'CS-3004',
      name: 'Software Design and Analysis'
    },
    {
      id: 11,
      courseCode: 'CS-3006',
      name: 'Parallel and Distributed Computing'
    },
    {
      id: 12,
      courseCode: 'AI-2002',
      name: 'Artifical Intelligence'
    },
    {
      id: 13,
      courseCode: 'CS-3001',
      name: 'Computer Networks'
    },
    {
      id: 14,
      courseCode: 'CS-3009',
      name: 'Software Engineering'
    },
    {
      id: 15,
      courseCode: 'CS-4051',
      name: 'Information Retrieval'
    },
    {
      id: 16,
      courseCode: 'CS-3002',
      name: 'Information Systems'
    },
    {
      id: 17,
      courseCode: 'CS-4067',
      name: 'DevOps'
    },
    {
      id: 18,
      courseCode: 'CS-4103',
      name: 'Requirement Engineering and Software and Systems'
    }
  ]
  return (
    <div>
      <>
        <Router>
          <Navbar options={navBarOptions} />
          <Routes>
            <Route
              path="/"
              element={<Navigate to="/Home" />}
            />
            <Route exact path='/Home' element={
              <Home
                name="<Muhammad Zaeem Aslam>"
                bio="Chilling and Fortnite" />} />
            <Route exact path='/Projects' element={
              <Projects projects={projects} />} />
            <Route exact path='/Education' element={
              <Courses courses={courses} />}

            />
            <Route exact path='/Certificate' element={
              <Certificates certificates={certificates} />}

            />
            <Route exact path='/Courses' element={
              <Certificates courses={courses} />}

            />
          </Routes>
        </Router>
      </>


    </div>
  );
}

export default App;