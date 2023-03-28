// import package for property types
import PropTypes from "prop-types";

// create component here

// define property type for this component here
function DetailAbout(props) {
  return (
    <>
      <h1>{props.name}</h1>
      <h1>{props.value}</h1>
    </>
  );
}

DetailAbout.defaultProps = {
  value: 100000000000000,
};

DetailAbout.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
};

export default DetailAbout;
