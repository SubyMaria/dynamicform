import React from "react";


export default function FormField({ field, value, onChange, error }) {
  const handleChange = (e) => {
    const val = field.type === "checkbox" ? e.target.checked : e.target.value;
    onChange(field.name, val);
  };

  const commonProps = {
    name: field.name,
    value: value,
    onChange: handleChange,
    className: "input-field",
  };

  return (
    <div className="form-field">
      <label className="label">
        {field.label} {field.required && <span className="required">*</span>}
      </label>

      {field.type === "text" || field.type === "number" || field.type === "date" ? (
        <input className="input-field" type={field.type} {...commonProps} />
      ) : field.type === "textarea" ? (
        <textarea {...commonProps} />
      ) : field.type === "select" ? (
        <select {...commonProps}>
          <option value="">Select...</option>
          {field.options.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      ) : field.type === "checkbox" ? (
        <input
          type="checkbox"
          checked={value}
          onChange={handleChange}
          className="checkbox"
        />
      ) : null}

      {error && <p className="error">{error}</p>}
    </div>
  );
}
