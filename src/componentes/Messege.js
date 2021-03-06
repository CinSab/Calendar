import './Messege.css'
import Nota from "./nota";


/*function Mensaje(props){

	let {fondo, day} = props; //destructuring object

	return (
			<div className='Mensaje' >
				<div className= "containerT" style={{backgroundColor: fondo}} >

					<h6>{day}</h6>

					<hr/>
					<Nota />
				</div>
			</div>
	)
}
*/

const Mensaje = ({fondo, day}) => (

	<div className='Mensaje' >
				<div className= "containerT" style={{backgroundColor: fondo}} >

					<h6>{day}</h6>

					<hr/>

					<Nota />
					
				</div>
			</div>

	)
;


export default Mensaje;

