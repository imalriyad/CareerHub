import { Link, useRouteError } from "react-router-dom";


const NotFound = () => {
    const error = useRouteError()
    console.log(error);
    return (
        <div className="max-w-screen-lg mx-auto text-center my-36">
            <h1 className="text-6xl">{error.status} {error.statusText}</h1>
            <p className="mt-2">{error.data}</p>
             <Link to='/'>
             <button className="px-5 my-12 md:text-base text-xs py-3 font-bold text-white bg-[#6c5ce7] rounded-md cursor-pointer">Home</button>
             </Link>
        </div>
    );
};

export default NotFound;