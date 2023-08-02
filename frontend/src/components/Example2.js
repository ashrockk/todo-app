//rfce

//Adding events to Component

export default function Example2() {
  const shoot = (a) => {
    alert(a);
  };
  return (
    <>
      <button onClick={() => shoot("Great Shot!")}>Take the shot!</button>
    </>
  );
}
