import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {

    const error = useRouteError();

    return (
        <div>
            <h2>Oops!!!</h2>            
            <p>{error.statusText || error.message}</p>
            {
                error.status == 404 && <div>
                    <h3>Contact with admin</h3>
                    <Link to={'/'}>Go Home</Link>
                </div>
            }
        </div>
    );
};

export default ErrorPage;