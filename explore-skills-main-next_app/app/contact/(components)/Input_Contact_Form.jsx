export default function Input_Contact_Form(props) {
  return (
    <>
      <input
        type={props.type ? props.type : "text"}
        placeholder={props.place ? props.place : "Enter Text"}
        required
      />
    </>
  );
}
