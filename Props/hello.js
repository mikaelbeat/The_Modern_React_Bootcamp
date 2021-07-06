class Hello extends React.Component {
  render() {

    const sender = this.props.from
    const receiver = this.props.to
    const num = this.props.num
    const data = this.props.data
    const registered = this.props.registered
    const image = this.props.img

    let bangs = "!".repeat(this.props.bangs)

    console.log(this.props);

    return (

    <div>
        <h1>Hi from {sender} to {receiver}! number: {num} data: {data} and registered: {registered}{bangs}</h1>
        <img src={image} />
    </div>

    );
  }
}