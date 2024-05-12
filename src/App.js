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
// Importing Certificates component
// import Certificates from './components/Certificates';

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
    // Commenting out the 'Certificate' option
    // {
    //   id: 3,
    //   name: 'Certificate'
    // },

  ]
  // Commenting out the 'certificates' data
  // const certificates = [
  //   {
  //     id: 1,
  //     name: 'NLP Masters with Hands on experience',
  //     academy: 'coursera',
  //     image: require('./resources/coursera.png')

  //   },

  //   {
  //     id: 2,
  //     name: 'Scrum Master',
  //     academy: 'edx',
  //     image: require('./resources/edx.png')

  //   }, {
  //     id: 3,
  //     name: 'Machine Learning',
  //     academy: 'udemy',
  //     image: require('./resources/udemy.png')

  //   }, {
  //     id: 4,
  //     name: 'React Basics',
  //     academy: 'Khan Academy',
  //     image: require('./resources/khanAcademy.png')

  //   }
  // ]
  const projects = [
    {
      id: 1,
      name: 'Advance Tour Guide',
      description: 'A web-based service to provide a seamless and customized experience for booking tours, flights, hotels, and transportation.',
      techStack: ['MySQL', 'Express', 'NodeJS', 'PUG', 'React', 'Bootstrap']
    },
    {
      id: 2,
      name: 'Gene Sequence Alignment',
      description: 'A program that utilizes the power of parallelism and threads to efficiently align millions of huge genetic strings with minimal penalty',
      techStack: ['C++', 'OpenMP', 'Linux']
    }, {
      id: 3,
      name: 'Sorting Visualizer',
      description: 'A program that visualizes the workings and complexities of various sorting algorithms by using a large dataset of random numbers, making it easy for non-technical users to understand the algorithms',
      techStack: ['Python', 'Tkinter', 'Google Colab']
    }, {
      id: 4,
      name: 'Super Market Sales Analysis',
      description: 'The goal was to analyze and gain insights from a public Kaggle dataset to evaluate a companys product and retail performance. The objective was to provide self-evaluation for the company and retailers.',
      techStack: ['Python', 'Numpy', 'Seaborn', 'Pandas', 'SciKit Learn', 'Matplotlib']
    }, {
      id: 5,
      name: 'LearnLance',
      description: 'The idea is to bring all the scattered users like teachers, students of freelancing and learning to a single platform where they can bid and learn under one roof',
      techStack: ['Python', 'NodeJS', 'React-Native', 'MongoDB', 'Azure DevOps', 'Figma']
    }, {

      id: 6,
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
      courseCode: 'CS-3005',
      name: 'Theory of Automata'
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
                name="Muhammad Zaeem Aslam"
                bio="Chilling and Fortnite" />} />
            <Route exact path='/Projects' element={
              <Projects projects={projects} />} />
            <Route exact path='/Education' element={
              <Courses courses={courses} />}

            />
            {/* <Route exact path='/Certificate' element={
              <Certificates certificates={certificates} />}

            /> */}
            {/* {/* <Route exact path='/Courses' element={
              <Certificates courses={courses} />} */}

            /> */}
          </Routes>
        </Router>
      </>


    </div>
  );
}

export default App;
