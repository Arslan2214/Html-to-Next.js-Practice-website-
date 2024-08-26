export default function Button(props) {
  return (
    <>
      <button type="submit" className="hero_btn uppercase btn">
        {props.text ? props.text : "Click Me"}
      </button>
    </>
  );
}
