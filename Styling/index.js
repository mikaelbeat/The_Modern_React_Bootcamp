
class App extends React.Component {
  render(){
    return (
    <div>
        <h1>💰💰💰 SLOT MACHINES 💰💰💰</h1>
        <Slots value1="🍌" value2="🍉" value3="🍓"/>
        <Slots value1="🍉" value2="🍉" value3="🍉"/>
    </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('root'))