import React from 'react';
import MainThisWeek from './components/MainThisWeek';


const App = () => {
  return <div>
  <div style={{ display: 'flex', flexDirection: 'row' }}>
    <MainThisWeek title="What's on This Week"/>
    <MainThisWeek title="Latest Lesson Link"/>
    <MainThisWeek title="Student Work Showcase"/>
    </div>
  </div>
}

export default App; 