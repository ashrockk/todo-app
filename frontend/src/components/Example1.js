//rfce

//Adding events to Component

export default function Example1() {
  const shoot = () => {
    alert("Goal!");
  };
  return (
    <>
      <button onClick={shoot}>Take the shot!</button>
    </>
  );
}
