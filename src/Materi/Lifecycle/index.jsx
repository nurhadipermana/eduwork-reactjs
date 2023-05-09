import React from "react";


class Lifecycle extends React.Component {
  state = {
    name: "Components",
    view: true,
    count: 0
  }

  render() {
    console.log('RENDER')
    return (
      <div>
        {
          this.state.view && <Title name={this.state.name} count={this.state.count}/>
        }

        <button onClick={() => this.setState({view: false})}>copot</button>
        <button onClick={() => this.setState({view: 'Class'})}>update</button>
        <button onClick={() => this.setState({count: this.state.count + 1})}>count</button>
      </div>
    )
  }
}