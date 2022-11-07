import React from 'react';
import MainThisWeek from './components/MainThisWeek';


const App = () => {
  return <div>
  <div style={{ display: 'flex', flexDirection: 'row' }}>
    <MainThisWeek title="What's on This Week"/>
    <MainThisWeek title="Latest Lesson Link"/>
    <MainThisWeek title="Student Work Showcase"/>
    </div>
    <div style={{
      borderColor: 'black',
      borderStyle: 'dashed',
      borderWidth: 1, 
      borderRadius: 15,
      alignItems: 'center',
      marginRight: 75,
      marginLeft: 75
    }}>
      <MainThisWeek title="Upload Your Work"/>
    </div>
  </div>
}

export default App; 