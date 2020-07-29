import React from "react";
import { Link } from "react-router-dom";
import PageDefault from "../../../components/PageDefault";
import './style.css'


function CadastroVideo() {
  return (
    <PageDefault>
      <form>
        <h1>Cadastro de Video</h1>

        <div>Categoria</div>
        <select>
          <option value="INP">Inspiração</option>
          <option value="MUS">Música</option>
          <option value="FIL">Filme</option>
          <option value="RIR">Rir é o melhor remédio</option>
        </select>

        <div>Título</div>
        <input
          type="text"
          name="title"
          placeholder="Preencha o título do vídeo"
        />

        <div>Video URL</div>
        <input type="text" name="url" placeholder="https://" />

        <div>
          <button type="submit">Salvar</button>
          <button><a href="/">Cancelar</a></button>
        </div>

        <Link to="/cadastro/Categoria">
          <h1>Cadastrar Categoria</h1>
        </Link>
      </form>
    </PageDefault>
  );
}

export default CadastroVideo;
