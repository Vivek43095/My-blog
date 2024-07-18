import Style from './Errors.module.css';

function NotFound(){
    return(
        <div className={Style.container}>
            <h1>404</h1>
            <p>Page Not Found!!</p>
        </div>
    )
}
export default NotFound;