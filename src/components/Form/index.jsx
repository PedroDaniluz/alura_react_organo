import React, { useState } from 'react';
import './Form.css';
import TextField from '../TextField';
import DropDown from '../DropDown';
import Button from '../Button';

export default function Form(props) {

    const [nome, setNome] = useState('');
    const [cargo, setCargo] = useState('');
    const [imagem, setImagem] = useState('');
    const [time, setTime] = useState('');

    const aoSalvar = (event) => {
        event.preventDefault();
        props.aoColaboradorCadastrado({
            nome,
            cargo,
            imagem,
            time
        });
        setNome('');
        setCargo('');
        setImagem('');
        setTime('');
        console.log(time);
    }

    return(
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <TextField
                    obrigatorio={true}
                    label="Nome"
                    placeholder="Digite o seu nome"
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />
                <TextField
                    obrigatorio={true}
                    label="Cargo"
                    placeholder="Digite o seu cargo"
                    valor={cargo}
                    aoAlterado={valor => setCargo(valor)}
                />
                <TextField
                    obrigatorio={false}
                    label="Imagem"
                    placeholder="Digite o endereço da imagem"
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
                />
                <DropDown
                    obrigatorio={true} 
                    label="Time" 
                    itens={props.times.map(time => time.nome)}
                    valor={time}
                    aoSelecionar={time => setTime(time)}
                />
                <Button>
                    Criar card
                </Button>
            </form>
        </section>
    )
}