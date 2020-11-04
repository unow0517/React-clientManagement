import logo from './logo.svg';
import './App.css';
import Customer from './components/Customer';

const customers=[
  {
    id: 1,
    image: 'https://placeimg.com/64/64/1',
    name: 'Lionel Messi',
    birthday: '971222',
    gender: 'male',
    job: 'uni student'
  },
  {
    id: 2,
    image: 'https://placeimg.com/64/64/2',
    name: 'C.Ronaldo',
    birthday: '924225',
    gender: 'male',
    job: 'rich'
    },  
  {
    id: 3,
    image: 'https://placeimg.com/64/64/3',
    name: 'Lewi',
    birthday: '91232',
    gender: 'female',
    job: 'jobless'
  }
]
function App() {
  return (
    customers.map(c => {
      return(
        <Customer
          key={c.id}
          id={c.id}
          image={c.image}
          name={c.name}
          birthday={c.birthday}
          gender={c.gender}
          job={c.job}
        />
      )
    })
  );
}

export default App;
