export default function Input_Field(props) {
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
