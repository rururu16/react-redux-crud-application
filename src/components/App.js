import React, { Component } from 'react';

// stateは変更可能：ミュータブル

const App = () =>( <Counter></Counter>)

class Counter extends Component {
  constructor(props){
    super(props)
    this.state = {count: 0}
  }

  handlePlusButton = () => {
    // setstateがrenderをコールバック。これで関連するDOMが自動で再描画される
    this.setState({ count: this.state.count + 1 })
  }

  handleMinusButton = () => {
    this.setState({ count: this.state.count - 1 })
  }
  render(){
    return(
      <React.Fragment>
        <div>count: { this.state.count } </div>
        <button onClick={this.handlePlusButton}>+1</button>
        <button onClick={this.handleMinusButton}>-1</button>
      </React.Fragment >

    )
  }
}

export default App;
