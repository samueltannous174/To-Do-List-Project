import style from './App.module.css';
import {useState} from "react";

function App() {
    const [arrayList, setArrayList] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const handleChange = (event) => {
        setInputValue([event.target.value]);
    };

    const addItem = () => {
        setArrayList([...arrayList,inputValue]);
    };
    const deleteItem = () => {
        console.log(inputValue)
      const temp= arrayList.filter((item)=>{
           return item !== inputValue
        })
        setArrayList(temp);
    };
    const deleteItems = () => {
        setArrayList([]);
    };

    return (
    <div className={style.App}>
        <div className={style.container}>
            <h className={style.textToDo}> To-Do List</h>
            <div className={style.containerTextButton}>
                <input
                    type="text"
                    id="inputLine"
                    value={inputValue}
                     onChange={handleChange}
                    className={style.userInput}
                />
                <button onClick={addItem}>
                    Add
                </button>
            </div>
            <div className={style.listContainer}>
                 <ul>

                {arrayList.map((item,index)=>{
                  return <div className={style.itemButtonContainer}>
                      <li className={style.item}>{item}</li>
                      <button  className={style.removeItemButton} onClick={deleteItem}>X</button>
                  </div>
                })}
              </ul>
            </div>
          <button className={style.clearButton} onClick={deleteItems}>
              clear all
          </button>
        </div>
    </div>
  );
}

export default App;
