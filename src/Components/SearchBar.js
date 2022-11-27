import "./SearchBar.scss"


function SearchBar (props){

    return(
        <input type="text" className="searchBar mt" placeholder={props.placeholder} value={props.value} onChange={(e)=>props.onChange(e.target.value)} />
    )
}

export default SearchBar;