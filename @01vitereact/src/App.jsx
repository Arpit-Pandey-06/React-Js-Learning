import Chai from "./chai"
function App() {
  const username ="Arpit"
  return(
    <>
    <h3>Next line is imported by another folder</h3>
  <Chai/>
  <h1>Return many element by using fragments </h1>
  <h2>Fragments is the technique through we can return element as many we wanted to return
    because we create a empty element for return statement in which content or element we want to return are exist
  </h2>
  <h1>Hello I'am {username}</h1>

  </>
  );
}

export default App
