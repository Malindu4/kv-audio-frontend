import { Link } from "react-router-dom";

export default function  ErrorNotFound() {
    return (
        <div>
            <h1>404 Error: page Not Found</h1>
            <Link className="bg-[#f2b036]" to="/">Go back to Home</Link>
        </div>
    );
}
