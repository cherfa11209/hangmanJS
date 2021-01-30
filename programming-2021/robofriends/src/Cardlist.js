import react from 'react';
import App from './App';
import Card from './Card';
import robots from './robots';


let Cardlistcomponenets = robots.map((user, i) => {
    return <Card key={i} id={robots[i].id} name={robots[i].name} username={robots[i].username} email={robots[i].email}/>
})

const Cardlist = ( {robots} ) => {
    return (
        <div> 
           {Cardlistcomponenets}
        </div>
    );
}

export default Cardlist;