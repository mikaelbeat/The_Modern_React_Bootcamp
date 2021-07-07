class Slots extends React.Component {
  render() {

    const {value1, value2, value3} = this.props;
    const winner = (value1 === value2) && (value2 === value3);

    return (
      <div>
        <p>{value1} {value2} {value3}</p>
        <p>{winner ? 'Winner!' : 'Loser!'}</p>
      </div>

    );
  }
}

