import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router';
import { useSelector } from 'react-redux';
import { BLOG_DATA } from '../assets/data';
import classes from './Blog.module.css';

const Blogdetail = () => {
  const params = useParams();
  const blogID = params && params.id;
  let blogDetails = null;
  for (let item of BLOG_DATA) {
    if (item.id === parseInt(blogID, 10)) {
      blogDetails = item;
    }
  }
  const navigate = useNavigate();
  const isUserLoggedIn = useSelector(state => state.isUserLoggedIn);

  useEffect(() => {
    if (!isUserLoggedIn) {
      navigate('/unauthorized');
    }
  }, [isUserLoggedIn, navigate]);

  return (
    <div className={classes.MainContainer}>
      {
        !blogDetails ? <h2 className={classes.BlogHeading}>Blog Not Found!!</h2>
          :
          <div className={classes.BlogContentWrapper}>
            <img className={classes.BlogThumbnail} src={blogDetails.thumbnail} alt={blogDetails.title} />
            <h2 className={classes.BlogHeading}>{blogDetails.title}</h2>
            <p className={classes.BlogDescription}>{blogDetails.description}</p>
          </div>
      }
    </div>
  );
};

export default Blogdetail;
