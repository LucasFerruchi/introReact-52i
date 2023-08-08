import "./App.css";
import MovieList from "./components/MovieList.jsx";
// import moviesList from "./data/movies.json";

function App() {
  //codigo javascript
  // console.log(moviesList);

  return (
    <>
      <div>
        <div>
          <h1>52Film 🎞</h1>
        </div>
        <MovieList />
      </div>
    </>
  );
}

export default App;
