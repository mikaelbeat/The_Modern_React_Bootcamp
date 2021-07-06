
function rollSlotMachine() {
  const slots = ['Angry', 'Hungry', 'Silly', 'Quiet', 'Paranoid'];
  return slots[Math.floor(Math.random() * slots.length)];
}

class Slots extends React.Component {
  render() {

    return (
      <div>
        <h1>Hello</h1>
      </div>

    );
  }
}

🍌🍉🍓