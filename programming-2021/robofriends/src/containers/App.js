import react, {Component} from 'react';
import Scroll from '../components/Scroll'
import Cardlist from '../components/Cardlist'
import Searchbox from '../components/Searchbox'
import './App.css'



class App extends Component{

    constructor(){
        super()
        this.state = {
            robots: [],
            searchfield: ""
        }
    }

    componentDidMount(){
      fetch('https://jsonplaceholder.typicode.com/users').then(response=> response.json()).then(users=>{this.setState({robots: users})})
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
    }

    render(){
        const filteredRobots = this.state.robots.filter((robot) => {
        return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })
        return (
        <div className="tc">
          <h1 className="">BABY FAM</h1>
          <Searchbox searchChange = {this.onSearchChange}/>
          <Scroll>
            <Cardlist robots={filteredRobots} />
          </Scroll>
          <footer className="pv4 ph3 ph5-m ph6-l mid-gray"><a href="github.com/cherfa11209">Sherif Cherfa's Github
          <br/>
            Code along with Zero To mastery!
          </a></footer>
        </div>
        )
    };

}

export default App;