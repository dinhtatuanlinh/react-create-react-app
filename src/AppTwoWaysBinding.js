import {useState} from 'react';

const gifts = [
  'cpu',
  'ram',
  'keyboard'
]
const courses = [
  {
    id: 1,
    name: 'html'
  },
  {
    id: 2,
    name: "js"
  },
  {
    id: 3,
    name: 'php'
  }
]
function App() {
  const [gift, setGift] = useState();
  const randomGift = () =>{
    const index = Math.floor(Math.random() * gifts.length)
    setGift(gifts[index]);
  }
  const [name, setName] = useState('')
  const [email, setEmail] = useState('');
  const handleSubmit =()=>{
    console.log({
      name,
      email
    });

  }
  const [checked, setChecked] = useState();
  const [boxChecked, setBoxChecked] = useState([]);
  const handleCheck = (id)=>{
    
    setBoxChecked(prev => {
      const isChecked = boxChecked.includes(id)
      if(isChecked){
        return boxChecked.filter(item => item !== id)
      } else{
        return [...prev, id]
      }
    })
    
  }
  return (
    <div className="App">
      <h1>{gift || 'chua co thuong'}</h1>
      <button onClick={randomGift}>lay thuong</button>
      <input
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <input
        value={email}
        onChange={e=> setEmail(e.target.value)}
      />
      
      {courses.map(course =>(
        <div key={course.id}>
          <input type="radio" 
            checked={checked === course.id}
            onChange={()=>setChecked(course.id)}
          />
          {course.name}
        </div>
      ))}
      {courses.map(course=>(
        <div key={course.id}>
          <input type="checkbox" 
            checked={boxChecked.includes(course.id)}
            onChange={()=>handleCheck(course.id)}
          />
          {course.name}
        </div>
      ))}
      <button onClick={handleSubmit}>change</button>
    </div>
  );
}

export default App;