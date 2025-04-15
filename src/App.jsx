
import './App.css'
import './app.js'
function App() {
  return (
    <>
      <div className="modal">
        <form>
          <input type="text" name='car' placeholder='Car name' />
          <input type="text" name='madel' placeholder='Car madel' />
          <input type="text" name='price' placeholder='Price' />
          <button>Submit</button>
        </form>
      </div>
      <ul>
        <li>Cars</li>
        <button className='btn'>Add</button>
      </ul>
      <div className="item">
        <ul>
          <li>Car</li>
          <li>Madel</li>
          <li>Priec</li>
          <li>Edit</li>
        </ul>
        <div className="itemCars">
         
        </div>
      </div>
    </>
  )


}

export default App

