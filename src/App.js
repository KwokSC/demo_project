import './App.css';
import Hello from './components/Hello';
import Message from './components/Message';
import Profile from './components/Profile';
import Resume from './components/Resume';
import FunctionEvent from './components/FunctionEvent';
import ClassEvent from './components/ClassEvent';
import ConditionalComponent from './components/ConditionalComponent';
import Product from './components/Product';
import Form from './components/Form';
import Todo from './components/Todo';

function App() {
  return (
    <div className="App">
      <Hello/>
      <Message/>
      <Profile name = "Chunkie"/>
      <Profile name = "Greyson"/>
      <Profile name = "Sicheng" lastname = "Guo">
        <p>This is my profile</p>
      </Profile>
      <Message messagecode = "10" messagecontent = "This is a message from props"/>
      <Resume name = "Chunkie"/>
      <FunctionEvent/>
      <ClassEvent/>
      <ConditionalComponent></ConditionalComponent>
      <Product/>
      <Form/>
      <Todo/>
    </div>
  );
}

export default App;
