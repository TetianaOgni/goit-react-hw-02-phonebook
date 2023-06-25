import PropTypes from "prop-types";

const Filter = ({value, onChange}) => {
  return(
    <label htmlFor="">Find contacts by name
        <input type="text" 
        value={value} onChange={onChange} />
    </label>            
  )
    
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
    onChange: PropTypes.func,
  };

export default Filter