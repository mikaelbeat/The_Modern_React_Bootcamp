
class App extends React.Component {
  render(){
    return (
    <div>
      <h1>JSX Loops Demo</h1>
      <Friend 
        name="Elton"
        hobbies={['Piano', 'Singing', 'Dancing']}
      />
      <Friend
        name="Solid Snake"
        hobbies={['Sneaking', 'Counter Intelligence', 'Saving the world']}
      />
    </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('root'))