// CSS IN JS

// create style here
import { styles as jeri, test, ganteng } from "./Style";

// create Form component
function Form() {
  return (
    // code inside div
    <div style={{ background: "blue" }}>
      <h1>Login</h1>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          width: "1000px",
          justifyContent: "center",
          alignItems: "center",
          margin: "auto",
          backgroundColor: "white",
        }}
      >
        <input
          type="email"
          placeholder="Email address..."
          style={jeri.myInput}
        />
        <input type="password" placeholder="Password..." style={jeri.myInput} />
      </form>
    </div>
  );
}

export default Form;
