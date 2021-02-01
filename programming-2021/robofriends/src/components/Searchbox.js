import react from 'react'


const Searchbox = ({searchChange}) => {
    return(
        <div className="pa2 ma2 shadow-5 tc">
            <input 
            className="pa3 ba b--purple bg-light-gray"
            type="search"
            placeholder="Search for fam"
            onChange = {searchChange}
            />
        </div>
    );
}

export default Searchbox;