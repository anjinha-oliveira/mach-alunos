import React from "react"
import { useState } from "react";

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
        <a className="navbar-brand" href="#">Coloque um logo</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#secao-dica-1">Dica 1</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Dica 2</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Cadastro</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Lista de alunos</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div className="container pb-5">
      <div className="row">
        <div className="col">
          <h1 className="display-3 mb-4">
            Este é um teste de programação Frontend
          </h1>
          <h3 className="mb-5">
            Vamos fazer um cadastro básico e uma listagem
          </h3>
          <button type="button" className="btn btn-primary">
            Cadastro aluno
          </button>
        </div>
        <div className="col">
          <img src="https://via.placeholder.com/1000x500?text=Coloque+uma+imagem" className="img-fluid" alt="..."/>
        </div>
      </div>
    </div>
    <div className="container bg-secondary bg-opacity-25" id="secao-dica-1">
      <div className="row">
        <div className="col">
          <h1 className="display-3 mb-4 text-center">Dica 1</h1>
        </div>
      </div>
      <div className="row">
        <div className="col text-center">
          <img src="https://via.placeholder.com/100x100?text=Coloque+uma+imagem" className="rounded-circle" alt="..."/>
          <h1>
            Os links no menu
          </h1>
          <h3>
            Cada link deve navegar para uma aréa correspondente do site
          </h3>
        </div>
        <div className="col text-center">
          <img 
            src="https://via.placeholder.com/100x100?text=Coloque+uma+imagem" 
            className="rounded-circle" alt="..."/> 
          <h1>
            Os botões
          </h1>
          <h3>
            Deve navegar para a aréa de cadastro de aluno
          </h3>
        </div>
      </div>
    </div>
    <div className="container pt-5">
      <div className="row">
        <div className="col">
          <img src="https://via.placeholder.com/400x300?text=Coloque+uma+imagem" className="img-fluid" alt="..."/>
        </div>
        <div className="col">
          <h1 className="display-3 mb-4">
            Dica 2
          </h1>
          <h3>
            Cada aluno cadastrado deve aparecer na tabela abaixo do formulário, além da inclusão, crie um método para remover o cadastro
          </h3>
          <button type="button" className=" mt-3 btn btn-primary">
            Cadastro aluno
          </button>
        </div>
      </div>
    </div>      
    <div className="container mt-5 bg-secondary bg-opacity-25 ">
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
          </div>
          <div className="col">
            <label for="id_email" className="form-label">Email *</label>
            <input type="email" className="form-control" id="id_email" 
              placeholder="name@example.com" required name="email"/>
          </div>
        </div>
        <div className="row">
          <div className="col mt-3"> 
            <label for="id_cpf" className="form-label">CPF *</label>
            <input type="text" className="form-control" id="id_cpf" 
              placeholder="000.000.000-00" required name="cpf"/>
          </div>
          <div className="col mt-3">
            <label for="id_curso" className="form-label">Curso *</label>
            <input type="text" className="form-control" id="id_curso" 
              placeholder="Curso do aluno" required name="curso"/>
          </div>
        </div>
        <div className="row">
          <div className="col text-center mt-5">
            <button type="submit" className="btn btn-primary">
              Cadastrar
            </button>
          </div>
        </div>
      </form>
    </div>
    <div className="container text-center mt-5">
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
                alunos.map((aluno) => (
                    <tr key={aluno.id}>
                        <th scope="row">{aluno.id}</th>
                        <td>{aluno.nome}</td>
                        <td>{aluno.email}</td>
                        <td>{aluno.cpf}</td>
                        <td>{aluno.curso}</td>
                        <td>
                        <button onClick={() => removerAluno(aluno.id)}>
                            remover
                        </button>
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