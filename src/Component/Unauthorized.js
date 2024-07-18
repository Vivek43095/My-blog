import Style from './Errors.module.css';

function Unauthorized (){
    return(
        <div className={Style.unauthorized}>
            <h1>Unauthorized User!!</h1>
        </div>
    )
}
export default Unauthorized;