import './Colab.css';

export default function Colab({ nome, imagem, cargo, corDeFundo, aoDeletar }) {
    return(
        <div className='colaborador'>
            <div className='deletar' onClick={aoDeletar}>deletar</div>
            <div className='cabecalho' style={{backgroundColor: corDeFundo}}>
                <img src={imagem} alt={nome} />
            </div>
            <div className='rodape'>
                <h4 style={{color: corDeFundo}}>{nome}</h4>
                <h5>{cargo}</h5>
            </div>
        </div>
    )
}