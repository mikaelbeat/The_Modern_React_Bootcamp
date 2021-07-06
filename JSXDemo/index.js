
function getMood() {
	const moods = ['Angry', 'Hungry', 'Silly', 'Quiet', 'Paranoid'];
	return moods[Math.floor(Math.random() * moods.length)];
}
class Hello extends React.Component {
	render() {
		return (
			<div>
				<h1>Hello there!</h1>
				<h1>Hello there!</h1>
				<h1>Hello there!</h1>
				<h3>Test</h3>
				<h1>My number is {100 * 10.5}</h1>
				<h2>My current mood is {getMood()}</h2>
				<img src="https://img.fruugo.com/product/8/30/97649308_max.jpg" />
			</div>
		);
	}
}

ReactDOM.render(<Hello />, document.getElementById('root'));
