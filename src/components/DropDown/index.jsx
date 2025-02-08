import './DropDown.css';

export default function DropDown(props) {
    
    const aoSelecionar = (event) => {
        props.aoSelecionar(event.target.value)
    }

    return (
        <div className="drop-down">
            <label>{props.label}</label>
            <select
                required={props.obrigatorio}
                onChange={aoSelecionar}
                >
                    {props.itens.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}