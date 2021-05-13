import React, { useState, FormEvent } from 'react';
import { useHistory } from 'react-router-dom';

import api from '../../services/api';

import NavBar from '../../components/NavBar'

import { Container, ContainerAddModules, Form, Error } from './styles';

const Lessons: React.FC = () => {
  const [inputTitle, setInputTitle] = useState('');
  const [inputDescription, setInputDescription] = useState('');
  const [inputError, setInputError] = useState('');

  const history = useHistory();

  async function handleSubmitModule(
    e: FormEvent<HTMLFormElement>
  ): Promise<void> {

    e.preventDefault();

    if (!inputTitle) {
      setInputError('Preencha todos os campos.');
      return;
    } else if (!inputDescription) {
        setInputError('Preencha todos os campos.');
        return;
    }

    try {
      const token = localStorage.getItem('@CodeSchool:token');

      await api.post('modules', {
        title: inputTitle,
        description: inputDescription,
      },{
      headers: {
        'Authorization': `Bearer ${token}`
      },
    });

      setInputTitle('');
      setInputDescription('');
      setInputError('');

      alert('Módulo criado com sucesso!');

      history.push('/modules');

    } catch (err) {
      if (err) {
        setInputError('Houve um erro no cadastro!');
      }
    }

  };

  return <>
    <NavBar />
    <Container>
      <p>Suas aulas</p>
      <ContainerAddModules>
      <h2>Crie um novo módulo</h2>
        <Form hasError={!!inputError} onSubmit={handleSubmitModule}>
          <input
            name="title"
            type="Title"
            value={inputTitle}
            onChange={e => setInputTitle(e.target.value)}
            placeholder="Título"
          />

          <input
            name="description"
            type="Description"
            value={inputDescription}
            onChange={e => setInputDescription(e.target.value)}
            placeholder="Descrição"
          />

          <button type="submit">Cadastrar</button>

        </Form>

        {inputError && <Error>{inputError}</Error>}

      </ContainerAddModules>
      {/* <CourseList>
        <Course>
          <Link
            to={{
              pathname: '/modules/linux',
              state: {
                courseName: 'Curso de Terminal Linux',
                playlistId: 'PLbV6TI03ZWYXXwbP2TNTbviUaFh6YqqVt',
                slidesLink:
                  'https://mega.nz/#F!AbAQEYBT!UYpnwXoXwjFcDhcf2ZXi3g',
              },
            }}
          >
            <Thumbnail>
              <img
                src="https://i.ytimg.com/vi/VRR3V42EdSg/maxresdefault.jpg"
                alt="Terminal Linux"
              />
            </Thumbnail>
          </Link>
          <span> Curso de Terminal Linux</span>
        </Course>

      </CourseList> */}


    </Container>
    </>

};

export default Lessons;
