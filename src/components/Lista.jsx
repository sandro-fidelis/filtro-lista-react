import React from "react";
import './Lista.css'
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Lista(props) {

    return (
        <div className="container mt-5">
            <h1 className="h1 mb-5 ">Lista</h1>
            <table className="table table-dark table-striped" >
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Idade</th>
                    </tr>
                </thead>
                <tbody>
                    { props.lista.map(lista => {
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
