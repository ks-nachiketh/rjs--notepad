import './Icons.css'

export default function Icon(props) {

  return (
    <div className="icon-core">

      <img
        className="icon"
        src={props.imgPath}
        alt={props.altName}
      ></img>

    </div>
  );
}
