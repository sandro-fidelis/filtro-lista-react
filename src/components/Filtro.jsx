import React, { useState } from "react"


export default function Filtro(props) {

const [nome, setNome] = useState('')
console.log(props.lista)

const listaFiltrada = props.lista.filter((lista) => lista.nome.toLocaleLowerCase().includes(nome.toLocaleLowerCase()))

    return (
        <div className="container mt-5">
            <h1>Filtro da Lista</h1>
            <input type="text" placeholder="Pesquisar nome" 
                onChange={(e) => setNome(e.target.value)} value={nome}/>
            <table className="table table-dark table-striped mt-3" >
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Idade</th>
                    </tr>
                </thead>
                <tbody>
                    { listaFiltrada.map(lista => {
                    return (
                    <tr key={lista.id}>
                        <td>{lista.nome}</td>
                        <td>{lista.idade}</td>
                    </tr>
                    )
                    })}
                </tbody>
            </table>
        </div>
    )
}
