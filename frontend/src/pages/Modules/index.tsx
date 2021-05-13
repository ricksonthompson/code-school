import React, { FormEvent, useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FaYoutube } from 'react-icons/fa';

import api from '../../services/api'

import NavBar from '../../components/NavBar'

import { Container, Course, Thumbnail, CourseList, ContainerAddModules, Form, Error } from './styles';

interface Module {
  title: string;
}

const Modules: React.FC = () => {
  const [modules, setModules] = useState<Module[]>([]);
  const [inputTitle, setInputTitle] = useState('');
  const [inputDescription, setInputDescription] = useState('');
  const [inputError, setInputError] = useState('');

  useEffect(() => {
    api
      .get('/modules')
      .then((response) => {
        const module: Module[] = response.data;

        setModules(module);

      })
  }, [modules]);


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

      const response = await api.post('modules', {
        title: inputTitle,
        description: inputDescription,
      }, {
        headers: {
          'Authorization': `Bearer ${token}`
        },
      });

      const module = response.data;

      setModules([...modules, module]);
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
      <p>Seus módulos</p>

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

      <h2>Clique para assistir</h2>
      <CourseList>
      <Course>
          <Link
            to={{
              pathname: '/cursos/trello',
              state: {
                courseName: 'Curso de Trello',
                playlistId: 'PLbV6TI03ZWYX0JAlemRNK6IXoeXscW5C8',
                slidesLink: '',
              },
            }}
          >
            <Thumbnail>
              <img
                src="https://i.ytimg.com/vi/ck7WWHaAgpU/maxresdefault.jpg"
                alt="Trello"
              />
            </Thumbnail>
          </Link>
          <span> Curso de Trello</span>
        </Course>

        <Course>
        <Link
            to={{
              pathname: '/cursos/node',
              state: {
                courseName: 'Curso de Node.JS',
                playlistId: 'PLJ_KhUnlXUPtbtLwaxxUxHqvcNQndmI4B',
                slidesLink:
                  'https://i.ytimg.com/vi/LLqq6FemMNQ/mqdefault.jpg',
              },
            }}
          >
            <Thumbnail>
              <img
                src="https://i.ytimg.com/vi/LLqq6FemMNQ/mqdefault.jpg"
                alt="Node JS"
              />
            </Thumbnail>
          </Link>
          <span> Curso de NodeJS</span>
        </Course>

        <Course>
          {modules.map(module => (
          <Link
          key={module.title}
           to={`/modules/${module.title}`}>

            <Thumbnail>
              <FaYoutube size={30}/>
            </Thumbnail>

            <span>{module.title}</span>
          </Link>
          ))}
        </Course>

      </CourseList>

    </Container>
  </>

};

export default Modules;
