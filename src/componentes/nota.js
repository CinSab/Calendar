import React from "react";
import './nota.css';
import Formi from "./plusN";

const Nota = ({texto}) => (
		//let {texto} = this.props;

			<div className='nota'>
			<div className='jumbotron'>
				<button>+{texto}</button>

			</div>
			<Formi />
			</div>
	);


export default Nota;
