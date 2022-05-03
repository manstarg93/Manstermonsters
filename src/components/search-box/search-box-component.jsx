
import './search-box.styles.css'
const SearchBox = ({className,onChangeHandler,placeholder}) => {

    return(
        <input 
        className={` search-box ${className}`}
        onChange=
        {onChangeHandler}
        type='search' 
      placeholder={placeholder}/>
    )

    
}

export default SearchBox