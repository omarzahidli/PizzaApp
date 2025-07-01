import { Link } from "react-router"

function Error() {
    return (
        <main>
            <div className="p-4">
                <h2>Error 404</h2>
                <p>Belə səhifə yoxdur</p>
                <p><Link to="/">Ana səhifəyə</Link> qayıt</p>
            </div>
        </main>
    )
}

export default Error