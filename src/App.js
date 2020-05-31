import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = { 
      GMT: {dayOfWeek: undefined, time: undefined},
      showGMTTime: false,
      BJTFromGMT: {dayOfWeek: undefined, time: undefined},
      PDT: {dayOfWeek: undefined, time: undefined},
      KST: {dayOfWeek: undefined, time: undefined} 
    };
  }
  onChangeGMTDate = (e) => {
    const newDate = e.target.value
    this.setState((prevState)=>{
      const newGMT = {dayOfWeek: newDate, time: prevState.GMT.time}
      return {GMT: newGMT}
    })
  }

  onChangeGMTTime = (e) => {
    const newTime = e.target.value
    this.setState((prevState)=>{
      const newGMT = {dayOfWeek: prevState.GMT.dayOfWeek, time: newTime}
      return {GMT: newGMT}
    })
  }

  convertGMT = () => {
    this.setState( (prevState) => {
      const GMTTime = prevState.GMT.time
      let GMTDay = prevState.GMT.dayOfWeek
      const rawBJT = Number(GMTTime) + 8
      const oneMoreDay = Number(rawBJT) > 24
      const BJTDay = oneMoreDay ? Number(GMTDay) + 1 :GMTDay
      const BJT = oneMoreDay ? Number(rawBJT) - 24 :rawBJT

      return {showGMTTime: true,
              BJTFromGMT: {dayOfWeek: BJTDay, time: BJT}
            }
    })
  }

  render() {
    console.log(this.state)
  return (
    <div className="App">
      <header className="App-header">
        <h1>我来帮你算</h1>
      </header>
      <body>
      <h2>北京时间是多少？</h2>
        <section>
          <h3>GMT时间是</h3>
          <div>
          星期<input type="text" placeholder="1" 
          value={this.state.GMT.dayOfWeek}
          onChange={this.onChangeGMTDate}
          ></input>
          </div>
          <span>
          <input placeholder="16"
            value={this.state.GMT.time}
            onChange={this.onChangeGMTTime}
          ></input>点
          </span>
          <button 
            disabled={!(this.state.GMT.dayOfWeek && this.state.GMT.time)}
            onClick={this.convertGMT}
          >显示北京时间</button>
          <div>
          { this.state.showGMTTime && (
            <section>
              <h3>北京那时候是</h3>
              <div> 星期{this.state.BJTFromGMT.dayOfWeek}  </div>
              <div>{this.state.BJTFromGMT.time}点</div>
            </section>
          ) } 
          </div>
        </section>

        {/* <section>
          <label>PDT时间是：</label>
          <input></input>
          <button>显示北京时间</button> */}

          {/* <label>北京时间是：</label>
          <span></span> */}

        {/* </section>

        <section>
          <label>KST时间是：</label>
          <input></input>
          <button>显示北京时间</button> */}

          {/* <label>北京时间是：</label>
          <span></span> */}
        {/* </section> */}

      </body>
    </div>
  );
}
}

export default App;
