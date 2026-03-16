import { useState,useEffect} from 'react'
import React from 'react';
import { BrowserRouter as Router, Routes, Route,useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Course from './pages/Course';
import Contact from './pages/Contactc';
import CourseDetail from './pages/CourseDetail';
import Footer from './components/Footer';
// import ForgetPassword from './components/ForgetPassword';
// import ResePassword from './components/ForgetPassword';
// import SingIn from './components/SignIn';
// import SingUp from './components/SignUp';
// 新增：创建滚动到顶部的组件
const ScrollToTop = () => {
  const location = useLocation();
  useEffect(() => {
    // 每次路由变化，滚动到页面顶部
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // 平滑滚动，可选
    });
  }, [location.pathname]); // 监听路由路径变化

  return null;
};
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <ScrollToTop />
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/course" element={<Course />} />
          <Route path="/course/:slug" element={<CourseDetail />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </div>

  );
}

export default App
