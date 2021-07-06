
class App extends React.Component {
  render(){
    return (
    <div>
        <Hello to="Ringo" from="Paul" num={5} data={[1, 2, 3, 4, 5]} registered="true"/>
        <Hello to="Cher" from="Sonny" bangs={9}/>
        <Hello to="Test" from="Tester" bangs={100}/>
        <Hello to="Snake" from="Cat" img="https://media.giphy.com/media/13nDaxXRXz0Prq/giphy.gif" />
    </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('root'))