import Link from "next/link";

export default function White_Border_Btn(props) {
  return (
    <>
      <Link href={props.href} className="uppercase hero_btn">
        {props.text}
      </Link>
    </>
  );
}
