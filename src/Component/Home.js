import { BLOG_DATA } from '../assets/data';
import { Link } from 'react-router-dom';
import style from './Home.module.css';
function Home (){
    return(
        <>
        <div className='container'>
            <h4 className={style.h}>All Blogs</h4>
        {
               BLOG_DATA.map((value,index)=>(
                <div className={style.ProductCard} key={index}>
                <Link className={style.link} to={`blog/${value.id}`}>
                <div>
                    <img className={style.ProductImage} src={value.thumbnail} alt=''/>
                </div>
                <div>
                    <h6 className={style.title}>{value.title}</h6>
                </div>
                </Link>
            </div>
        ))
       }
      
        </div>
  </>
    )
}
export default Home ;
