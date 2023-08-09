const composable = {
      header: 'React Component',
      about: 'React Component is a piece of UI that has its own logic and appearance. A component can be small button or an entire page',
      types: 'It is of two types as functional components and class based components',
      imp: 'Components name always starts with a capital letter'
}
function Desc() {
      return (
            <>
                  <p className="about">{composable.about}</p>
                  <p className="types"> {composable.types}</p>
                  <p className="imp">{composable.imp}</p>
            </>
      );
}
function MyNote()
{
      return (
            <>
                  <h1 className="h">{composable.header}</h1>

            </>



      );
}
function App() {
      return (
            <>
                  <MyNote />
                  <Desc/>
            </>
      )
}
ReactDOM.createRoot(document.getElementById("root")).render(
  <App />
)