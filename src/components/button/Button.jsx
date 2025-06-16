import './button.css'

export default function Button(props){


    return (

        <div className="button-core"  style={props.css}>

            <button  onClick={props.onClick} className="button">{props.name} </button>
            {props.children}

        </div>
    )
}