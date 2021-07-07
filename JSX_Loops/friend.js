class Friend extends React.Component {
  
  render() {

    const {name, hobbies} = this.props;
    const hobbies_list = hobbies.map(h => <li>{h}</li>)

    return (
      <div>
        <h1>{name}</h1>
        <ul>
          {hobbies_list}
        </ul>
      </div>

    );
  }
}

