import { Movie } from "./Movie";

function Movies(props) {
    const { movies = [] } = props;

    return (
        <div className="movies">
            {movies.length ? (
                movies.map((movie) => <Movie key={movie.imbdID} {...movie} />)
            ) : (
                <h4>Sorry! We can't find something according to your request.</h4>
            )}
        </div> 
    );
}

export { Movies };