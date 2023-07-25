import { Picture } from "../Picture/Picture"
import './Album.css'

export const Album = ({albumName, description, pictures}) => {
    return(
        <>
            <h2>{albumName}</h2>
            <h6>{description}</h6>
            <div className="album-wrapper">
                {pictures.map(picture => {
                    return(
                        <Picture 
                            key={picture.id}
                            url={picture.url}
                            title={picture.title} 
                        />
                    )
                })}
            </div>
        </>
    )
}