import Colab from '../Colab';
import './Team.css';

export default function Team(props) {
    return (
        (props.colaboradores.length > 0) && <section className="team" style={{backgroundColor: props.corSecundaria}}>
            <h3 style={{borderColor: props.corPrimaria}}>{props.nome}</h3>
            <div className='colaboradores'>
                {props.colaboradores.map(colab => <Colab 
                    key={colab.nome}
                    nome={colab.nome}
                    imagem={colab.imagem}
                    cargo={colab.cargo}
                    corDeFundo={props.corPrimaria}
                />)}
            </div>
        </section>
    );
}