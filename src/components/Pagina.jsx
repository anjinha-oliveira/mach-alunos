import React from "react"
import { useState } from "react";

import imagemInicial from '../images/alunos-pag-inicial.jpg'
import imagemFinal from '../images/alunos-pag-final.jpg'

export default () => {
    const [alunos, setAlunos] = useState([]);
    const [count, setCount] = useState(1)

    const cadastrarAluno = (evento) => {
        const formData = new FormData(evento.currentTarget);

        const nome = formData.get('nome'); 
        const email = formData.get('email');
        const cpf = formData.get('cpf');
        const curso = formData.get('curso');

        const aluno = {
            id: count, 
            nome: nome, 
            email: email, 
            cpf: cpf, 
            curso: curso
        };

        setAlunos([...alunos, aluno]);
        setCount(count + 1);

        evento.preventDefault();
    }

    const removerAluno = (id) => {
        const novosAlunos = alunos.filter((aluno) => aluno.id != id);

        setAlunos(novosAlunos);
    }
    return (
    <>
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Mach1</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#id_formulario_de_cadastro">Cadastrar Alunos</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#id_lista_de_alunos">Listar alunos cadastrados</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div className="container pb-5">
      <div className="row">
        <div className="col d-flex align-items-center">
          <div>
          <h1 className="display-3 mb-4">
            Cadastro de alunos MACH1
          </h1>
          <h3 className="mb-5">
            Para cadastrar alunos clique no botão abaixo
          </h3>
          <a className="btn btn-success" href="#id_formulario_de_cadastro">Clique aqui</a>
          </div>
          
        </div>
        <div className="col">
          <img src={imagemInicial} className="img-fluid" alt="..."/>
        </div>
      </div>
    </div>

    <div className="container pt-5">
      <div className="row">
        <div className="col">
          <img src={imagemFinal} className="img-fluid" alt="..."/>
        </div>
        <div className="col">
          <h1 className="display-3 mb-4">
            Para remover aluno cadastrado
          </h1>
          <h3>
            O botão "Remover aluno" remove as informações de casdastro de alunos. 
          </h3>
          <p><strong>Atenção ao número de ID de cada cadastro antes de fazer a remoção.</strong></p>
        </div>
      </div>
    </div>      
    <div className="container mt-5 bg-info bg-opacity-25 " id="id_formulario_de_cadastro">
      <div className="row">
        <di className="col">
          <h1 className="text-center display-3">
            Cadastro Aluno
          </h1>
        </di>
      </div>
      <form onSubmit={cadastrarAluno}>
        <div className="row">
          <div className="col">
            <label for="id_nome" className="form-label">Nome *</label>
            <input type="text" className="form-control" id="id_nome" 
              placeholder="Digite o nome do aluno" required name="nome" />
            <small class="form-text text-muted">Preencha com o nome completo.</small>

          </div>
          <div className="col">
            <label for="id_email" className="form-label">Email *</label>
            <input type="email" className="form-control" id="id_email" 
              placeholder="name@example.com" required name="email"/>
            <small class="form-text text-muted">Exemplo: nome@gmail.com.</small>
  
          </div>
        </div>
        <div className="row">
          <div className="col mt-3"> 
            <label for="id_cpf" className="form-label">CPF *</label>
            <input type="text" className="form-control" id="id_cpf" 
              placeholder="000.000.000-00" required name="cpf"/>
            <small class="form-text text-muted">Preencha o CPF no formato: 000.000.000-00.</small>
  
          </div>
          <div className="col mt-3">
            <label for="id_curso" className="form-label">Curso *</label>
            <input type="text" className="form-control" id="id_curso" 
              placeholder="Curso do aluno" required name="curso"/>
            <small class="form-text text-muted">Preencha com o nome completo do curso sem abreviações.</small>
          </div>
        </div>
        <div className="row">
          <div className="col text-center mt-5">
            <button type="submit" className="btn btn-success">Cadastrar aluno</button>
          </div>
        </div>
      </form>
    </div>
    <div className="container text-center mt-5" id="id_lista_de_alunos">
      <h1>
        Lista de Alunos
      </h1>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nome</th>
            <th scope="col">Email</th>
            <th scope="col">CPF</th>
            <th scope="col">Curso</th>
            <th scope="col">Ações</th>
          </tr>
        </thead>
        <tbody className="table-group-divider">
          {
            alunos.length == 0 && (
              <tr key="nrnhum-aluno">
                <td colSpan={6}>Nenhum Aluno cadastrado.</td>
              </tr>
            )
          }
            {
                alunos.map((aluno) => (
                    <tr key={aluno.id}>
                        <th scope="row">{aluno.id}</th>
                        <td>{aluno.nome}</td>
                        <td>{aluno.email}</td>
                        <td>{aluno.cpf}</td>
                        <td>{aluno.curso}</td>
                        <td>
                        <button onClick={() => removerAluno(aluno.id)}
                        type="button" class="btn btn-danger">Remover aluno</button>

                        </td>
                    </tr>
                ))
            }
        </tbody>
      </table>
    </div>
    <div className="container text-center mt-5 bg-secondary bg-opacity-25">
      <h5>
        Powered by Mach1 - Pilotando para o futuro!
      </h5>
    </div>
    </>
)}