export default function Side_List_Item(props) {
  return (
    <>
      <div>
        <span>{props.title ? props.title : "Title"}</span>
        <span>{props.count ? props.count : 0}</span>
      </div>
    </>
  );
}
