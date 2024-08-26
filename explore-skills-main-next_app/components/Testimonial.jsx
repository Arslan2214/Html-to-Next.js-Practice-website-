import Image from "next/image";

export default function Testimonial(props) {
  return (
    <>
      <div className="testimonials-col">
        <Image width={50} height={50} src={props.src} alt={props.alt} />
        <div>
          <p>{props.text ? props.text : "Text"}</p>
          <h3>{props.name ? props.name : "Student Name"}</h3>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
        </div>
      </div>
    </>
  );
}
