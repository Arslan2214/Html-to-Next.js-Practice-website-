import Image from "next/image";

export default function Campus_Card(props) {
  return (
    <>
      <div className="campus-col">
        <Image width={100} height={100} src={props.src} alt={props.alt ? props.alt : `Campus_Image(${props.text})`} />
        <div className="layer">
          <h3>{props.text ? props.text : "Text"}</h3>
        </div>
      </div>
    </>
  );
}
