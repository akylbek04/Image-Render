import { Album } from "./components/Album/Album";
import { albumData } from "./data";
import React from "react";
import "./App.css";
import { Header } from "./components/Header/Header";
import { Favorite } from "./components/Favorite/Favorite";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: albumData,
      renderFavorites: false,
      favStorage: [],
    };
  }

  deleteAlbum = (id) => {
    const { data } = this.state;
    const filtered = data.filter((el) => el.id !== id);
    this.setState({ data: filtered });
  };

  // deletePic = (pictureId, albumId) => {
  // const albumIndex = this.state.data.findIndex((album) => album.id === albumId);
  // const updatedPics = this.state.data[albumIndex].pictures.filter((pic) => pic.id !== id);
  // const updatedAlbum = {...this.state.data[albumIndex], pictures: updatedPics}
  // const newState = this.state.data.map((album, index) => {
  //   if(index === albumIndex){
  //     return updatedAlbum;
  //   } else {
  //     return album;
  //   }
  // });
  // this.setState({ data: newState });
  // console.log('vsdvs')
  // const newState = this.state.data;
  // for (let i = 0; i < newState.length; i++) {
  //   const album = newState[i];
  //   if (album.id === albumId) {
  //     for (let j = 0; j < album.pictures.length; j++) {
  //       if (album.pictures[j].id === pictureId) album.pictures.splice(j, 1);
  //     }
  //   }
  // }

  // this.setState({ data: newState });
  // }

  showFav = () => {
    this.setState((prevState) => {
      return {
        ...prevState,
        renderFavorites: !this.state.renderFavorites,
      };
    });
  };

  handleFav = (id) => {
    const { data, favStorage } = this.state;
    const favStr = data
      .reduce((acc, album) => {
        return [...acc, ...album.pictures];
      }, [])
      .find((pic) => pic.id === id);

    this.setState((prevState) => {
      return {
        ...prevState,
        favStorage: [...favStorage, favStr],
      };
    });

    console.log(favStr);
  };

  deletePic = (picId, albumId) => {
    this.setState((prevState) => {
      const updatedData = prevState.data.map((album) => {
        if (album.id === albumId) {
          const updatedPictures = album.pictures.filter(
            (picture) => picture.id !== picId
          );
          return { ...album, pictures: updatedPictures };
        } else {
          return album;
        }
      });
      return { data: updatedData };
    });
  };
  // as i clikc on the button, only favorites component should be rendered. button name to change to "show Albums"
  render() {
    const { data, renderFavorites, favStorage } = this.state;
    const countAl = data.length;
    const countPic = data.reduce((acc, el) => acc + el.pictures.length, 0);
    return (
      <div className="App">
        <Header
          albumCount={countAl}
          picCount={countPic}
          showFav={this.showFav}
          isFav={renderFavorites}
        />
        {renderFavorites ? (
          <Favorite data={favStorage} />
        ) : (
          data.map((album) => {
            return (
              <Album
                key={album.id}
                {...album}
                handleClick={this.deleteAlbum}
                handleDelete={this.deletePic}
                handleFav={this.handleFav}
              />
            );
          })
        )}
      </div>
    );
  }
}

export default App;
