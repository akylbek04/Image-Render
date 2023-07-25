import './Picture.css'
import { Button } from '../Button/Button'

export const Picture = ({url, title }) => {


    // const random = Math.floor(Math.random() * picture.length)

    return(
        <div className="picture-wrapper">
            <img src={url}/>
            <p>{title}</p>
            <Button link={url} />
        </div>
    )
}