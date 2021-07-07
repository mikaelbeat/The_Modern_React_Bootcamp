class Slots extends React.Component {
  render() {

    const {value1, value2, value3} = this.props;
    const winner = (value1 === value2) && (value2 === value3);
    const fontsize = { fontSize: '100px'}

    return (
      <div className="Slots">
        <p style={fontsize}>{value1} {value2} {value3}</p>
        <p className={winner ? 'Slots-winner' : 'Slots-loser'}>{winner ? 'Winner!' : 'Loser!'}</p>
      </div>

    );
  }
}

