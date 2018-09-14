import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import * as React from "react";

const FormDetail = (element:any) => (
	<form onSubmit={element.getWeather}>
		<Input style={{width: '20%', fontSize: '15px'}} type="text" name="city" placeholder="Enter City Name..."/>&emsp;
		<Input style={{width: '20%', fontSize: '15px'}} type="text" name="country" placeholder="Enter Country Name..."/>
		<br/>
		<br/>
		<Button className="buttonShadow" style={{color: 'white' , backgroundColor: '#5580B3', fontSize: '15px'}} size="large" type='submit'>Search</Button>
	</form>
);

export default FormDetail;
