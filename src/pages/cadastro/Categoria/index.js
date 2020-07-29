import React from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';

function CadastroCategoria() {
  return (
    <PageDefault>
     <form>
        <h1>Cadastro de Categoria</h1>

        <div>Título</div>
        <input
          type="text"
          name="title"
          placeholder="Preencha o título da categoria"
        />

        <div>Cor</div>
        <input 
          type="color"
          name="color"
          placeholder="Clique para escolher a cor"
        />

        <div>
          <button type="submit">Salvar</button>
          <button><a href="/">Cancelar</a></button>
        </div>

      </form>
     
    </PageDefault>
  )
}

export default CadastroCategoria; 