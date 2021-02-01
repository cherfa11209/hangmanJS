import react, {Component} from 'react';
import robots from './robots' 
import Cardlist from './Cardlist'
import Searchbox from './Searchbox'
import './App.css'



class App extends Component{

    constructor(){
        super()
        this.state = {
            robots: robots,
            searchfield: ""
        }
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
        const filteredRobots = this.state.robots.filter((robot) => {
          return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })
        console.log(filteredRobots);
    }

    render(){
        const filteredRobots = this.state.robots.filter((robot) => {
        return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })
        return (
        <div className="tc">
          <h1 className="">BABY FAM</h1>
          <Searchbox searchChange = {this.onSearchChange}/>
          <Cardlist robots={filteredRobots} />
          <footer className="pv4 ph3 ph5-m ph6-l mid-gray"><a href="github.com/cherfa11209">Sherif Cherfa's Github
          <br/>
            Code along with Zero To mastery!
          </a></footer>
        </div>
        )
    };

}

export default App;