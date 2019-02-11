import React from 'react';
import { Button , Card , message , Row , Col , Input } from 'antd';
import axios from 'axios';

const { TextArea } = Input;

class Page extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			title:null,
			description:null
		}
	}

	setTitle = (e) => {
		this.setState({
			title:e.target.value
		})
	}

	setDescription = (e) => {
		this.setState({
			description:e.target.value
		})
	}


	handleClick = () => {
		if(this.state.title && this.state.description){
			let data = {};
			data.title = this.state.title;
			data.description = this.state.description;
			axios.post("http://44bcb284.ngrok.io/create_articles" , data)
			.then(response =>{
				console.log(response)
			})
			.catch(error => {
		 		console.log(error)	
			})
		}
		else
		{
			message.error("Please enter the Title and Description")
		}
	}
	render(){
		return(<div>
				<Row>
					<Col span={12}>
						<Card className="container">
							<div className="labels">Title of your Article</div>
							<Input type="text" placeholder="Enter the Title of your Article" className="input-title" name="title" value={this.state.title} onChange={this.setTitle}/>
							<div className="labels">Description of your Article</div>
							<TextArea rows={10} className="textarea-desc" placeholder="Enter the description of your Article" name="description" value={this.state.description} onChange={this.setDescription}/> 
							<Button type="primary" className="click-btn" onClick={this.handleClick}>Create New Article</Button>
						</Card>
					</Col>
				</Row>
				
				 
			</div>
		)
	}
}
export default Page;