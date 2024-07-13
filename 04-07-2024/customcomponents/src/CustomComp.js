function First() {
  return (
    <>
      <h2>This is first custom component</h2>
    </>
  );
}

function Second() {
  return (
    <>
      <h3>This is second custom component</h3>
    </>
  );
}

function Third() {
  return (
    <>
      <h3>This is third custom component</h3>
    </>
  );
}

function Fourth() {
  return (
    <>
      <h3>This is fourth custom component</h3>
    </>
  );
}

function Fifth() {
  return (
    <>
      <Fourth />
      <h3>This is fifth custom component</h3>
    </>
  );
}

function Logout() {
  return (
    <>
      <button>LOGOUT</button>
    </>
  );
}

export default First;
export { Second, Third, Fifth, Logout };
