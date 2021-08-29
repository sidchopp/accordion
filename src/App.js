import Questions from './Questions'
import './index.css'

function App() {
  return (
    <div>
      {Questions.map((about) => {
        return (
          <div>{about.title}</div>
        )
      })}
    </div>
  );
}

export default App;
