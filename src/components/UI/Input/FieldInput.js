import React from "react";
import { Field } from "react-final-form";
import './FieldInput.css';
const FieldInput = (props) =>
{
        return(
            <Field name={props.name} >
            {({ input, meta }) => (
              <div className="form-group">
                <label htmlFor={props.name}>{props.label}</label>
                <input {...input} type={props.type} className="form-control" placeholder={props.placeholder} id={props.name}/>
                {meta.error && meta.touched && <span className="fieldInput_input-color">{meta.error}</span>}
              </div>
            )}
          </Field>
        )
}

export default FieldInput;