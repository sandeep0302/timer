import React, {useState} from 'react';
import Clock from './Clock';
import TodoApp from './TodoApp';
function App() {
  const [time, setTime] = useState("");
  
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <Clock time={time} setTime={setTime} />
        <TodoApp />
      </div>
    </div>
  );
}

export default App;