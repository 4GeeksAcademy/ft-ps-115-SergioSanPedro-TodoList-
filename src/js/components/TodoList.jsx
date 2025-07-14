import { useState } from "react";


export const TodoList = () => {

    const [usuario, setUserValue] = useState('');
    const [listaTarea, setLista] = useState([]);


    const handleInput = (e) => {
        setUserValue(e.target.value);

    };

    const handleKeyUp = (e) => {
        if (e.key === 'Enter') {
            setLista([...listaTarea, usuario]);
            setUserValue('')

        }
    };

    const deleteTarea = (id) => {

        setLista(listaTarea.filter((tarea, index) => index !== id));
    };


    return (
        <>

            <h1 className="text-center mt-4">Lista de tareas</h1>

            <div className="container my-4 border-2 d-flex justify-content-center">

                <div className="row p-3 mx-5 w-50">
                    <input
                        type="text"
                        placeholder="Introduce la tarea"
                        onChange={handleInput}
                        onKeyUp={handleKeyUp}
                        value={usuario}

                    />
                    {
                        listaTarea.map((tarea, index) => (
                            <div className="d-flex justify-content-between align-items-center mt-2" id={index}>
                                <span>{tarea}</span>
                                <button onClick={() => deleteTarea(index)} className="delete-btn">X</button>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
};