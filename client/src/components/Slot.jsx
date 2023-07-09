import doctor from '../assets/doctor-image.jpg';
import Navbar from './Navbar';
import { useParams } from 'react-router';
import {doctorlist} from './doctor';

const Slot = () => {
    const {id} = useParams();
    console.log(doctorlist[id-1]);
    const {name,desc} = doctorlist[id-1];
    return (
        <>
        <Navbar />
        <div class="content">
        <div class="left-side">
            <img src={doctor} />
            <div class="name">{name}</div>
                <div class="desc1">{desc}
                </div>
        </div>
        <div class="right-side">
            <div class="fee">
                Clinic Appointment ₹ 150 fee
            </div>
            <div class="slot">
                <table>
                    <tr>
                        <th>Today</th>
                        <th>Tomorrow</th>
                        <th>Wed, 28 JUN</th>
                    </tr>
                    <tr >
                        <th>Morning</th>
                        <td>09:00 AM</td>
                        <td>10:00 AM</td>
                        <td>10:30 AM</td>
                        <td>11:00 AM</td>
                        <td>11:30 AM</td>
                        <td>12:00 PM</td>
                    </tr>
                    <tr >
                        <th>AfterNoon</th>
                        <td>12:00 PM</td>
                        <td>12:30 PM</td>
                        <td>01:00 PM</td>
                        <td>01:30 PM</td>
                        <td>02:00 PM</td>
                        <td>02:30 PM</td>
                    </tr>
                </table>
            </div>
            <div class="btn"><a href={`/book/${id}`}>Book</a></div>
        </div>
    </div>
        </>
        
    )
};

export default Slot;