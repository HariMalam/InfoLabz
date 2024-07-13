function Notification() {
  return(
    <div className="comp">
      <p>This is Notification Component</p>
    </div>
  )
}

function Login() {
  return(
    <div className="comp">
      <p>This is Login Component</p>
    </div>
  );
}

function Logout() {
  return(
    <div className="comp">
      <p>This is Logout Component</p>
      <Login/>
    </div>
  )
}

export default Notification
export {Login, Logout};