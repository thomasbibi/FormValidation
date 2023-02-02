import { useState } from "react"
import '../styles/formStyle.css'

export default function FormComponent() {
  const [data, setData] = useState({
    name: "",
    dob: "",
    email: "",
    phone: ""
  })

  const [error, setError] = useState({
    name: "",
    dob: "",
    email: "",
    phone: ""
  })

  // validation function
  function handleChange(e) {
    let { name, value } = e.target
    // Empty field validation
    if (value == "") {
      setError({ ...error, [name]: "This field is required" })
    }
    else {
      setError({ ...error, [name]: "" })
    }
    // Date Validation
    if (name == "dob") {
      let today = new Date()
      today = today.getFullYear()
      let calDate = value.split("-")
      calDate = calDate[0]
      if (calDate > today || (today - calDate) < 18) {

        setError({ ...error, [name]: "Age should be above 18" })
      }
      else {
        setError({ ...error, [name]: "" })
      }

    }

    // Email validation

    if (name == "email") {
      let expression = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/
      if (!expression.test(value)) {
        setError({ ...error, [name]: "Please provide a valid email" })
      }
      else {
        setError({ ...error, [name]: "" })
      }
    }

    setData({ ...data, [name]: value })
  }

  // handle submit
  async function handleSubmit(e) {
    e.preventDefault()
    const res = await fetch("", {
      method: 'POST',
      body: data
    })
  }

  return <>
    <div className="cont">
      <form action="#" method="post" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
        </div>
        <input type="text" name="name"
          id="name"
          placeholder="Enter name"
          value={data.name}
          onChange={handleChange}
        />
        {error.name == "" ? null : <pre>{error.name}</pre>}
        <div>
          <label htmlFor="email">Email:</label>
        </div>
        <input type="email"
          name="email"
          id="email"
          placeholder="Enter email:"
          value={data.email}
          onChange={handleChange}
        />
        {error.email == "" ? null : <pre>{error.email}</pre>}
        <div>
          <label htmlFor="dob">Date of birth</label>
        </div>
        <input type="date" name="dob"
          id="dob"
          placeholder="Date of birth"
          value={data.date}
          onChange={handleChange}
        />
        {error.dob == "" ? null : <pre>{error.dob}</pre>}
        <div>
          <label htmlFor="phone">Phone No.</label>
        </div>
        <input type="text" name="phone"
          id="phone"
          placeholder="Enter phone no."
          value={data.phone}
          onChange={handleChange}
        />
        {error.phone == "" ? null : <pre>{error.phone}</pre>}

        <div>
          <input type="submit" value="Submit" id="submit" />
        </div>
      </form>

    </div>

  </>;
}