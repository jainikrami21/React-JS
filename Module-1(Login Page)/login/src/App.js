import './App.css';

function App() {
  return (
<div className='main'>
  <div className='sub-main'>
    <div>
      <div className='imgs'>
        <div className='container-image'>
          <img src="https://d3fp5tyfm1gdbn.cloudfront.net/2022/Feb/23/1645607393_user4.png" alt="profile" className='profile'/>
        </div>
      </div>
      <div>
        <h1>Login Page</h1>
        <div>
          <img src="https://pediaa.com/wp-content/uploads/2018/06/Difference-Between-Email-and-Gmail_Figure-1.png" alt="email" className='email' />
          <input type="text" placeholder="user name" className="name"/>
        </div>
        <div className="second-input">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3z6xwCfUm37LFVYfUflEv8MbrBFHEEhlxQA&usqp=CAU" alt="pass" className='email' />
          <input type="password" placeholder="user name" className="name"/>
        </div>
        <div className="login-button">
        <button>Login</button>
        </div>
        
        <p className="link">
          <a href="#">Forgot Password ?</a>or<a href="#">Sign Up</a>
        </p>
      </div>
    </div>
  </div>
</div>
  );
}

export default App;
