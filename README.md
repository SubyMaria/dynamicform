This React application dynamically generates a user form based on a JSON schema. It showcases schema-driven UI rendering, modular component design, and internal form state management.


 Getting Started
Prerequisites
Node.js (>= 14.x)

npm or yarn

Installation
Clone the repository:

bash
Copy
Edit
git clone
cd dynamic-form-renderer

Install dependencies:

bash
Copy
Edit
npm install
or
yarn install
Start the development server:

bash
Copy
Edit
npm run dev
 or
yarn dev
Open your browser at http://localhost:5173

 JSON Schema Format
json
Copy
Edit
{
  "title": "User Registration",
  "fields": [
    { "label": "Name", "type": "text", "name": "name", "required": true },
    { "label": "Age", "type": "number", "name": "age" },
    { "label": "Subscribe", "type": "checkbox", "name": "subscribe" },
    {
      "label": "Gender",
      "type": "select",
      "name": "gender",
      "options": ["Male", "Female", "Other"]
    },
    { "label": "Bio", "type": "textarea", "name": "bio" },
    { "label": "Birthdate", "type": "date", "name": "birthdate" }
  ]
}

