import "./Picture.css";
// import { Button } from '../Button/Button'

export const Picture = ({
  url,
  title,
  id,
  albumId,
  handleDelete,
  handleFav,
}) => {
  // const random = Math.floor(Math.random() * picture.length)
  return (
    <div className="picture-wrapper">
      <img src={url} />
      <div className="picture-body">
        <p>{title}</p>
        <div className="btns">
          <button onClick={() => handleDelete(id, albumId)}>
            <i id="trash" className="fa-solid fa-trash-can"></i>
          </button>
          <button onClick={() => handleFav(id)}>
            <i id="heart" className="fa fa-heart"></i>
          </button>
        </div>
      </div>
    </div>
  );
};
