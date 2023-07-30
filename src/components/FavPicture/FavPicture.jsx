import "./FavPicture.css";

export const FavPicture = ({ url, title }) => {
  return (
    <>
      <div className="favPic">
        <div className="favImg">
          <img src={url} />
        </div>
        <p>{title}</p>
      </div>
    </>
  );
};
