//rfce

//Adding events to Component

export default function Example() {
  const shoot = () => {
    alert("Goal!");
  };
  return (
    <>
      <button onClick={shoot}>Take the shot!</button>
    </>
  );
}
