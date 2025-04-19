
import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import NewsComponents from './Components/NewsComponents';
import LoadingBar from 'react-top-loading-bar';
import {
  BrowserRouter as Router,
  // Switch,
  Route,
  // Link,
  Routes
} from "react-router-dom";

export default class App extends Component {
  pageSize = 6;
  state = {
    page:0
  }
  setProgress = (progress)=>{
    this.setState({progress: progress})
  }
  render() {
    return (
      <div style={{ backgroundColor: 'black' }}>
        <Router>
          <Navbar />
          <LoadingBar
          height={3}
            color='#f11946'
            progress={this.state.progress}
          />
          <Routes>
            {/* <NewsComponents setProgress={this.setProgress} pageSize={6} country='us' category='science' /> */}
            <Route exact path='/' key='general' element={<NewsComponents setProgress={this.setProgress} pageSize={this.pageSize} country='us' category='general' />}></Route>
            <Route exact path='/business' key='business' element={<NewsComponents setProgress={this.setProgress} pageSize={this.pageSize} country='us' category='business' />}></Route>
            <Route exact path='/entertainment' key='entertainment' element={<NewsComponents setProgress={this.setProgress} pageSize={this.pageSize} country='us' category='entertainment' />}></Route>
            <Route exact path='/health' key='health' element={<NewsComponents setProgress={this.setProgress} pageSize={this.pageSize} country='us' category='health' />}></Route>
            <Route exact path='/science' key='science' element={<NewsComponents setProgress={this.setProgress} pageSize={this.pageSize} country='us' category='science' />}></Route>
            <Route exact path='/sports' key='sports' element={<NewsComponents setProgress={this.setProgress} pageSize={this.pageSize} country='us' category='sports' />}></Route>
            <Route exact path='/technology' key='technology' element={<NewsComponents setProgress={this.setProgress} pageSize={this.pageSize} country='us' category='technology' />}></Route>
          </Routes>
        </Router>
      </div>
    );
  }
}

