// import css modules
import AzmiStyles from "./Form.module.css";

// const styles = {
//   form: {
//     margin: "16px 20% 0",
//   },
//   formGroup: {
//     marginBottom: "16px",
//   },
//   formLabel: {
//     marginBottom: "8px",
//     display: "inline-block",
//   },
//   formInput: {
//     display: "block",
//     width: "100%",
//     padding: ".375rem .75rem",
//     fontSize: "1rem",
//     lineHeight: 1.5,
//     color: "#212529",
//     backgroundColor: "#fff",
//     border: "1px solid #ced4da",
//     borderRadius: ".25rem",
//   },
// };

function Form() {
  return (
    <div>
      <form className={AzmiStyles.form}>
        <div className={AzmiStyles.formGroup}>
          <label htmlFor="username" className={AzmiStyles.formLabel}>
            Username
          </label>
          <input
            id="username"
            placeholder="Input username"
            className={AzmiStyles.formInput}
          />
        </div>
        {/* code here */}
      </form>
    </div>
  );
}

export default Form;
