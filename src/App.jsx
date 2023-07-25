import { Album } from './components/Album/Album';
import { albumData } from './data';
import React from 'react'
import './App.css';



class App extends React.Component {
  constructor(){
    super();
    this.state = {
      data: albumData
    }
  }

  render(){
    const {data} = this.state;
    return (
      <div className='App'>
        {data.map((album) => {

          return <Album
                    key={album.id}
                    {...album}
                />
        })}
      </div>
    )
  }
}

export default App
