import "./App.css";

function Login() {
  return (
    <>
      <button>Login</button>
    </>
  );
}

function Logout() {
  return (
    <>
      <button>Logout</button>
    </>
  );
}

function Addtocart() {
  return (
    <>
      <button>Add To Cart</button>
    </>
  );
}

function All() {
  return (
    <>
      <Login />
      <Logout />
      <Addtocart />
    </>
  );
}

export default Login;
export { Logout, Addtocart, All };
