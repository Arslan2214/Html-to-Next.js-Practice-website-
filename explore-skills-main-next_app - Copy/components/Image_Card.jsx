import Image from "next/image";

export default function Image_Card(props) {
  return (
    <>
      <div className="facilities-col">
        <Image
          width={110}
          height={100}
          src={props.src}
          alt={props.alt ? props.alt : `Feature_Image(${props.text})`}
        />
        <h3>{props.title ? props.title : "Title"}</h3>
        <p>{props.text ? props.text : "Text"}</p>
      </div>
    </>
  );
}
