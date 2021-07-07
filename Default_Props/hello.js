class Hello extends React.Component {

  static defaultProps = {from: 'Anonymous', to: 'Anonymous'}

  render() {

    const sender = this.props.from
    const receiver = this.props.to

    console.log(this.props);

    return (

    <div>
        <h1>Hi from {sender} to {receiver}!</h1>
    </div>

    );
  }
}