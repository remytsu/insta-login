import "./App.css" 

function App(){

  return <div className="container">
    <div className="cont1">
      <h1>See everyday moments from your <span>close friends</span>.</h1>
      <img src="/public/images/TZyiZuKrlQL.png" alt="" />
    </div>

    <div className="cont2">
      <h2>Log into Instagram</h2>
      <input type="text" placeholder="Mobile number, username or email" />
      <input type="password" placeholder="Password" />
      <button className="ingia" disabled>Log In</button>
      <p>Forgot password?</p>
      <br />
      <br />
      <button className="fb-btn">Login in with Facebook</button>
      <button className ="cna">Create new account</button>
  </div>
  </div>
}

export default App;