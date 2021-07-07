
class App extends React.Component {
  render(){
    return (
    <div>
        <Hello from="Paul" to="Ringo" />
        <Hello to="Cher" />
        <Hello from="Mady" />
    </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('root'))