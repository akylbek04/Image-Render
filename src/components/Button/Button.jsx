import './Button.css';


export const Button = ({link}) => {



    return(
        <>
            <a href={link} target='_blank'> 
                <button className='btn'>Click</button>
            </a>
        </>
    )
}