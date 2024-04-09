import { useRouteError } from "react-router-dom"
const Error =()=>{
    const error=useRouteError();
    console.log(error)
    return(
        <div>
          <p>{error.data}</p>
        </div>
    )
}

export default Error