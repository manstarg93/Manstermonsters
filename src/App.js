
import { useEffect, useState } from 'react';
import './App.css';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box-component';


const App = () => {

  const [monsters, setMonsters] = useState([])
  const [ searchValue, setSearchValue] = useState('')
  const[filteredMonsters, setFilteredMonsters]=useState(monsters)
  

  useEffect(() => {

  fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => response.json())
  .then(users => setMonsters(users))
  },[])

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchValue)
    })
    setFilteredMonsters(newFilteredMonsters)
   
  },[monsters,searchValue])



const onSearchChange = (event) => {
  const searchValues = event.target.value.toLowerCase()
 
  setSearchValue(searchValues)

}





    
  return(
    <div className="App">
    <h1 className='app-title'>My Monsters</h1>

 <SearchBox 
 className='monsters-search-box' 
 onChangeHandler={onSearchChange} 
 placeholder='search monsters'

 />




<CardList monsters={filteredMonsters}/>

</div>
  )
}



export default App;
