import { Picture } from "../Picture/Picture";
import "./Album.css";

export const Album = ({
  albumName,
  description,
  pictures,
  id,
  handleClick,
  handleDelete,
  handleFav,
}) => {
  return (
    <div className="album">
      <h2>{albumName}</h2>
      <h6>{description}</h6>
      <div className="album-wrapper">
        {pictures.map((picture) => {
          return (
            <Picture
              key={picture.id}
              // url={picture.url}
              // title={picture.title}
              handleDelete={handleDelete}
              handleFav={handleFav}
              albumId={id}
              // picId={picture.id}
              {...picture}
            />
          );
        })}
      </div>
      <button className="albumBtn" onClick={() => handleClick(id)}>
        Delete Album
      </button>
    </div>
  );
};
