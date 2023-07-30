import "./Header.css";

export const Header = ({ albumCount, picCount, showFav, isFav }) => {
  return (
    <div className="header">
      <h1>Welcome to my album!</h1>
      <p>
        (We have {albumCount} albums and {picCount} pictures)
      </p>
      <button onClick={showFav}>
        {" "}
        Show my {isFav ? "albums" : "favorites"}
      </button>
    </div>
  );
};
