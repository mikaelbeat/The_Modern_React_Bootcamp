
function getNum(){
	return Math.floor(Math.random() * 10 + 1);
}

class NumPicker extends React.Component {
	render() {

		const num = getNum()
		let msg;

		if (num == 7) {
			msg = 
			<div>
				<h2>Great you win!!!</h2>
				<img src="https://media.giphy.com/media/dVdIu1HNxeKyqzkgPA/giphy.gif" />
			</div>
		} else {
			msg =
			<div>
				<h2>Sorry, you lose!</h2>
				<img src="https://media.giphy.com/media/EU5ox7Mve7FS0/giphy.gif" />
			</div>
		}

		return (
			<div>
				<h1>Your number is: {num}</h1>
				{msg}
			</div>
		);
	}
}

ReactDOM.render(<NumPicker />, document.getElementById('root'));
