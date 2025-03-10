
import "./shows.css";

/** A navbar that allows users to choose between a list of shows */
export default function ShowSelection({ showsList, setSelectedShow }) {
  return (
    <nav className="shows">
      {showsList.map((show) => (
        <a
          key={show.name}
          className={"show"}
          onClick={() => setSelectedShow(show)}
        >
          {show.name}
        </a>
      ))}
    </nav>
  );
}
