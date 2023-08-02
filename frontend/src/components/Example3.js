function Example3(props) {
  const isGoal = props.isGoal;
  if (isGoal) {
    return <MadeGoal />;
  }
  return <MissedGoal />;
}

function MadeGoal() {
  return <h1>Goal Goal</h1>;
}

function MissedGoal() {
  return <h1>Missed Goal</h1>;
}
export default Example3;
