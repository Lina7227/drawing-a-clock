import React from 'react';
import Main from './Main';
import Canvas from './Canvas';


function App() {

  const [lists, setLists] = React.useState([]);



  function handleAddFile(newFile) {
    setLists([newFile, ...lists]);
  }

 
  
  return (
    <div className="page">
      <Main
        lists={lists}
        onAddFile={handleAddFile}
      />
      <Canvas width={639} height={385}/>
        
    </div>
  );
}

export default App;
