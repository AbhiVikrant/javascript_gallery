// Complete the Form Component and export it
import { name, email } from "./HomePage";
function formPreventDefault(e) {

    e.preventDefault();
  }

const Form = () => (
  <>
    <div>
      <form onSubmit={formPreventDefault}>
        <h3>Login Page</h3>
        <div><input type="text" placeholder="YourName" value={ name} /></div>
        <div><input type="email" placeholder="xyz@pqr.com" value={email} /></div>
        <div><button>Login</button></div>
      </form>
    </div>
  </>
);
export default Form;