import React from "react";
import PropType from "prop-types";

const InputField = (props) => {
  return (
    <React.Fragment>
      <label>{props.label}</label>
      <input
        type={props.type}
        className={[
          "form-control",
          props.identifier.touched && !props.identifier.valid
            ? "shop-input-error"
            : "",
        ].join(" ")}
        placeholder={props.placeholder}
        value={props.identifier.value}
        onChange={(event) => props.changed(event, "inputname")}
      />
      {!props.identifier.valid ? (
        <div className="shop-input-errors">{props.identifier.errorsMsg}</div>
      ) : null}
    </React.Fragment>
  );
};

InputField.propTypes = {
  label: PropType.string,
  type: PropType.string,
  identifier: PropType.object.isRequired,
  changed: PropType.func.isRequired,
};

export default InputField;
