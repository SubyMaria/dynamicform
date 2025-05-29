import React, { useState } from "react";
import FormField from "../FormField/FormField";
import './DynamicForm.css'

export default function DynamicForm({ schema }) {
  const initialState = schema.fields.reduce((acc, field) => {
    acc[field.name] = field.type === "checkbox" ? false : "";
    return acc;
  }, {});

  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const newErrors = {};
    schema.fields.forEach((field) => {
      if (field.required && !formData[field.name]) {
        newErrors[field.name] = `${field.label} is required`;
      }
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setSubmittedData(formData);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="form">
        {schema.fields.map((field) => (
          <FormField
            key={field.name}
            field={field}
            value={formData[field.name]}
            error={errors[field.name]}
            onChange={handleChange}
          />
        ))}
        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>
      {submittedData && (
        <pre className="submitted-data">
          {JSON.stringify(submittedData, null, 2)}
        </pre>
      )}
    </>
  );
}