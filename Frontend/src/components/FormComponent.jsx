import { useState } from "react"
import { useNavigate } from "react-router-dom"
import '../styles/formStyle.css'

export default function FormComponent() {
  const [isValid , setValid] = useState(true)
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
      setValid(false)
      setError({ ...error, [name]: "This field is required" })
    }
    else {
      setValid(true)
      setError({ ...error, [name]: "" })
    }
    // Date Validation
    if (name == "dob") {
      let today = new Date()
      today = today.getFullYear()
      let calDate = value.split("-")
      calDate = calDate[0]
      if (calDate > today || (today - calDate) < 18) {
        setValid(false)
        setError({ ...error, [name]: "Age should be above 18" })
      }
      else {
        setValid(true)
        setError({ ...error, [name]: "" })
      }

    }

    // Email validation

    if (name == "email") {
      let expression = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/
      if (!expression.test(value)) {
        setValid(false)
        setError({ ...error, [name]: "Please provide a valid email" })
      }
      else {
        setValid(true)
        setError({ ...error, [name]: "" })
      }
    }

    setData({ ...data, [name]: value })
  }

  // handle submit
  let navigate = useNavigate()

  async function handleSubmit(e) {
    e.preventDefault()
    const res = await fetch("https://forms-web-service.onrender.com/form-submit",{
      method: 'POST',
      body: JSON.stringify(data),
      headers : {
        'content-Type' : 'application/json'
      }
    })
    console.log(data)
    navigate("/forms")
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
          <input type="submit" value="Submit" id="submit" disabled={!isValid}/>
        </div>
      </form>

    </div>

  </>;
}
