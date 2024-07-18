import Style from './Errors.module.css';

function SomethingWentWrong (){
    return(
        <div className={Style.unauthorized}>
            <h1>Something Went Wrong!!</h1>
        </div>
    )
}
export default SomethingWentWrong;
