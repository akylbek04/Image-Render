import "./Favorite.css";
import { FavPicture } from "../FavPicture/FavPicture";
import { styled } from "styled-components";

const Title = styled.div`
  margin-top: 0;
  padding: 10px 0;
`;

const FavAlbum = styled.div`
  margin: 10px 20px 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
`;

export const Favorite = ({ data }) => {
  return (
    <div className="fav-collection">
      <Title>
        <h2>My favorites collections</h2>
      </Title>
      <FavAlbum>
        {data.map((picture) => {
          return (
            <FavPicture
              key={picture.id}
              url={picture.url}
              title={picture.title}
            />
          );
        })}
      </FavAlbum>
    </div>
  );
};
