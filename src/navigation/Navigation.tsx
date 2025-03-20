import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import ScrollToTop from '../component/common/ScrollToTop';
import { ToastContainer } from 'react-toastify';
import Home from '../pages/Home';
import HomeTwo from '../pages/HomeTwo';
import Blog from '../pages/Blog';
import BlogDetails from '../pages/BlogDetails';
import Contact from '../pages/Contact';
import Predict from '../pages/Predict';
import Forgot from '../pages/Forgot';
import Register from '../pages/Register';
import Login from '../pages/Login';
import DynamicBlogDeatils from '../pages/DynamicBlogDetails';
import Error from '../pages/Error';
import UseScrollToHash from '../hooks/useScrollToHash';

const AppNavigation = () => {
  return (
    <Router>
      <ScrollToTop />
      <UseScrollToHash />
      <ToastContainer position="top-center" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home-two" element={<HomeTwo />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog-details" element={<BlogDetails />} />
        <Route path="/blog-details/:id" element={<DynamicBlogDeatils />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/forgot" element={<Forgot />} />
        <Route path="/predict" element={<Predict />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
};

export default AppNavigation;
