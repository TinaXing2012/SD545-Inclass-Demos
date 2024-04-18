import logo from './images/logo.jpg';

export default function App() {
  return (
    <div className='container'>
      <header className="p-3 text-bg-dark">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <img src={logo} alt='Maharishi Logo' style={{ width: '100px' }} />
            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <li><a href="#" className="nav-link px-2 text-secondary">Products</a></li>
              <li><a href="#" className="nav-link px-2 text-white">Add</a></li>
            </ul>
          </div>
        </div>
      </header>
      <div className="row mt-5">
        <div className="col">
          <ul className="list-group">
            <li className="list-group-item">Node.js</li>
            <li className="list-group-item">React.js</li>
          </ul>
        </div>
        <div className="col">
          <p>Product Id: </p>
          <p>Product Title: </p>
          <p>Product Price: </p>
          <p>Product Description: </p>
          <p><button className='btn btn-danger'>Delete</button></p>
        </div>
      </div>
    </div>
  )
}
