// import css modules
import cssModules from "./Form.module.css";

function Form() {
  return (
    <div>
      <form className="form">
        <div className="formGroup">
          <label htmlFor="username" className="formLabel">
            Username
          </label>
          <input
            id="username"
            placeholder="Input username"
            className="formInput"
          />
        </div>
        <div className={cssModules.formGroup}>
          <label htmlFor="email" className={cssModules.formLabel}>
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Input email"
            className={cssModules.formInput}
          />
        </div>
        {/* code here */}
      </form>
    </div>
  );
}

export default Form;
