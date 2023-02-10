import "../styles/submitForm.css"

export default function Card(props){
    const {name , email , dob , phone} = props.data
    
   

    return <div id="cont">
        <h2>{name}</h2>
        <h6>{email}</h6>
        <h6>{dob}</h6>
        <h6>{phone}</h6>
    </div>
}