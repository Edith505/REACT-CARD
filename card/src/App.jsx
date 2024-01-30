import Card from "./components/Card"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


function App() {
  return (
    <div className="row row-cols-1 row-cols-md-4 g-4">
      <Card/>
      <Card/>
      <Card/>
    </div>
  )
}

export default App
