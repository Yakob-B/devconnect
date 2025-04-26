
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    fetch('http://localhost:5000/api/test')
      .then(res => res.json())
      .then(data => console.log(data));
  }, []);

  return (
    <div className="text-center text-2xl text-green-500 mt-10">
      DevConnect Client is Running ✅
    </div>
  );
}

export default App;

