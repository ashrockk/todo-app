import Title from "./components/Title";
import Example from "./components/Example1";
import Example2 from "./components/Example2";
import Example3 from "./components/Example3";
import Garage from "./components/Example4";
import Example5 from "./components/Example5";
import Example6 from "./components/Example6";
import Hooks from "./components/Example7";
import Car from "./components/Example8";
import Timer from "./components/Example9";
const cars = ["BMW", "Audi", "Mercedes"];

function App() {
  return (
    <>
      <Title name="TO DO app" />
      <Example />
      <br />
      <Example2 />
      <Example3 isGoal={true} />
      <Garage cars={cars} />
      <Example5 isGoal={false} />
      <Example6 />
      <Hooks />
      <Car />
      <Timer />
    </>
  );
}

export default App;
