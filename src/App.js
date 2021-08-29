import { useState } from 'react';

import Questions from './Questions'
import Question from './Question'
import './index.css'

function App() {

  // states

  const [questions, setQuestions] = useState(Questions);

  return (
    <main>
      <div className='container'>
        <h3>Questions & Answers</h3>
        <section className="info">
          {Questions.map((ques) => {
            return (
              <Question key={ques.id} {...ques} />
            )
          })}
        </section>
      </div>

    </main>
  );
}

export default App;
