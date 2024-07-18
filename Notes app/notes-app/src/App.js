import React, { useState } from 'react';


function App() {
  const [subjects, setSubjects] = useState([
    { id: 1, name: 'React', description: 'Try to Learn React' },
    { id: 2, name: 'JavaScript', description: 'Try to Learn React' },
    { id: 3, name: 'Tailwind', description: 'Try to Learn React' }
  ]);

  const addSubject = () => {
    setSubjects([...subjects, { id: subjects.length + 1, name: 'New Subject', description: 'Try to Learn' }]);
  };

  return (
    <div className='App'>
      <div className="content">
        {subjects.map(subject => (
          <Subject key={subject.id} name={subject.name} description={subject.description} />
        ))}
      </div>
      <Footer addSubject={addSubject} />
    </div>
  );
}

function Subject({ name, description }) {
  return (
    <div className="subject">
      <h2 className="subject-name">{name}</h2>
      <p className="subject-description">{description}</p>
    </div>
  );
}

function Footer({ addSubject }) {
  return (
    <div className="footer">
      <div className="footer-content">
        <button className="footer-button">P</button>
        <button className="footer-button" onClick={addSubject}>+</button>
      </div>
    </div>
  );
}

export default App;
