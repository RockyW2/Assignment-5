import "./MoviesView.css";
import { Outlet, useNavigate } from "react-router-dom";
import Genres from "../components/Genres";
import Footer from "../components/Footer";

function MoviesView() {
    const navigate = useNavigate();

    const genres = [
        { genre: "Action", id: 28 },
        { genre: "Adventure", id: 12 },
        { genre: "Animation", id: 16 },
        { genre: "Comedy", id: 35 },
        { genre: "Family", id: 10751 },
        { genre: "Fantasy", id: 14 },
        { genre: "History", id: 36 },
        { genre: "Mystery", id: 9648 },
        { genre: "Science Fiction", id: 878 },
        { genre: "Thriller", id: 53 },
    ];

    function logout() {
        navigate("/");
    }
    return (
        <div className="app-container">
            <div className="header">
                <h1>Rocky Streaming Service</h1>
                <button onClick={() => logout()} className="logout-button">Logout</button>
            </div>
            <div className="main-content">
                <div className="Genres">
                    <div className="genres-list">
                        <Genres genresList={genres} />
                    </div>

                </div>
                <div className="outlet">
                    <Outlet />
                </div>
            </div>
            <Footer />
        </div>

    )
}

export default MoviesView