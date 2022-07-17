import './Styles.css';
import Icon from '../../assets/Img/Icon.svg';
import axios from 'axios';
import { BASE_URL } from '../../utils/request';

type Props = {
    saleId: number;
}

function handleClick(id : number){
    axios(`${BASE_URL}/sales/${id}/notification`)
    .then(response =>{
        console.log("SUCESSO")
    })
}
function NotificationButton({saleId} : Props) {
    return (
        <div className="dsmeta-red-btn" onClick={() => handleClick(saleId)}>
            <img src={Icon} alt="Notificar"/>
            </div>
    )
}

export default NotificationButton