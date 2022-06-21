class App extends React.Component{
  render(){
    return(
      <div className="App">
      <RollDice /> 
      </div>
    )
  }
}

ReactDOM.render(<App/>,
document.getElementById("root"));
