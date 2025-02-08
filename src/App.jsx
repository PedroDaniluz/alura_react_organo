import { useState } from 'react'
import Banner from './components/Banner'
import Form from './components/Form'
import Team from './components/Team';

function App() {

  const times = [
    {nome: 'Programação', corPrimaria: '#57C278', corSecundaria: '#D9F7E9'},
    {nome: 'Front-End', corPrimaria: '#82CFFA', corSecundaria: '#F0F8E2'},
    {nome: 'Data Science', corPrimaria: '#E06B69', corSecundaria: '#FDE7E8'},
    {nome: 'UX e Design', corPrimaria: '#D86EBF', corSecundaria: '#FAE5F5'},
    {nome: 'Mobile', corPrimaria: '#FEBA05', corSecundaria: '#FFF5D9'},
    {nome: 'Inovação e Gestão', corPrimaria: '#FF8A29', corSecundaria: '#FFEEDF'}
  ]

  const [colaboradores, setColaboradores] = useState([]);

  const aoNovoColaborador = (colaborador) => {
    console.log(colaborador)
    setColaboradores([...colaboradores, colaborador]);
  }

  return (
    <div>
      <Banner/>

      <Form 
        aoColaboradorCadastrado={colaborador=> aoNovoColaborador(colaborador)}
        times={times}
      />

      {times.map(
        time =>
          <Team
            key={time.nome}
            nome={time.nome}
            corPrimaria={time.corPrimaria}
            corSecundaria={time.corSecundaria}
            colaboradores={colaboradores.filter(colab => colab.time === time.nome)}
          />
        )
      }

    </div>
  );
}

export default App
