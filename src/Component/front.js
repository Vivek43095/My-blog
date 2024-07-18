import style from '../App.module.css';
import { Link } from 'react-router-dom';
function Front (){
    return(
        <>
      
         <Link to={`/home`} className={style.link}>
            <div className={style.home}>
              <h4 className={style.h}>Home Page!</h4>
            </div>

        </Link>
      
        <div className={style.blog}>
          <h4 className={style.h}>Blog Page!</h4>
      </div>
    
     
    <div className={style.login}>
      <h4 className={style.h}>Login Page!</h4>
    </div>
        </>
    )
}
export default Front;