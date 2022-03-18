import "../css/Button.css";
export default function Button(props){
  console.log(props.class);
  const className = "button " + props.class;
  return <div className={className} style={props.style} onClick={props.onClick}>{props.children}</div>
}