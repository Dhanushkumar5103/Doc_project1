
import Navbar from './Navbar';
import tick from '../assets/check-mark-verified.gif';

const Last = () => {

    return (
        <>
        <Navbar />
        <img src={tick} className='tick' />
        <div class="booked-success">
            Your Appointment Booked Successfully
        </div>
        </>
        

    )
}

export default Last;