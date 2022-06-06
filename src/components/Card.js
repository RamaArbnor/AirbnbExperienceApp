import '../App.css';
// import thumbnail from '../images/thumbnail.png'
// import status from '../images/status.png'
import star from '../images/star.png'

export default function Card(props) {
    if(props.openSpots !== 0){
        // props.status = null
        console.log(props.text)
    }
    return (
        <div className='card' >
            <img src={props.img} alt="alt"/>
            {props.openSpots === 0 && <img src={props.status} alt="alt" className='status'/>}
            <div className='card-info'>
                <img src={star} alt="alt" />
                <p>{props.rating}(6) USA</p>
                
            </div>
            <p>{props.text}</p>
            <p><span>From ${props.price} /</span> person</p>
        </div>
    )
}