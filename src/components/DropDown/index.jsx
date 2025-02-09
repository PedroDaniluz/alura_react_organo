import './DropDown.css';

export default function DropDown(props) {
    
    const aoSelecionar = (event) => {
        props.aoSelecionar(event.target.value)
    }

    return (
        <div className="drop-down">
            <label>{props.label}</label>
            <select
                value={props.valor}
                required={props.obrigatorio}
                onChange={aoSelecionar}
                >
                    <option value=""></option>
                    {props.itens.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}