
import Movie from "./assets/pages/Movie";
import DerivedState from "./hooks/DerivedState";
import LiftStateUp from "./hooks/LiftStateUp";
import PassingEventProps from "./hooks/PassingEventProps";
import State from "./hooks/State";
import ToggleSwitch from "./porjects/ToggleSwitch";



function App() {
  return (
    <>
      {/* <Movie /> */}
      <State />
      <PassingEventProps />
      <DerivedState />
      <LiftStateUp />
      <ToggleSwitch />
    </>
  );
}

export default App;
