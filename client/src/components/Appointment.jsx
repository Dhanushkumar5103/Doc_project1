import Navbar from "./Navbar"
import doctor from '../assets/doctor-image.jpg';
import {doctorlist} from './doctor';

const Appointment = () =>{
    console.log(doctorlist)
    return (
        <div>
            <Navbar />
            <div class="body1">

            {
                doctorlist.map((el,id) => {
                    return (
                    <div class="doctor-section">
                    <img src={doctor} alt="Doctor Image" />
                    <div class="details">
                        <div class="name">{el.name}</div>
                        <div class="desc">{el.desc}
                        </div>
                    </div>
                    <div class="book">
                        <div class="time">Available Tomorrow</div>
                        <div class="Booking"><a href={`/slot/${el.id}`} >Check Availablity</a></div>
                        
                    </div>
                </div>
                    )
                })
            }
            
            
        </div>
        </div>
    )
}

export default Appointment;