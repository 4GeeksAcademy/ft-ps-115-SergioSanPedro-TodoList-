import { useState } from "react";


export const TodoList = () => {

    const [usuario, setUserValue] = useState('');
    const [listaTarea, setLista] = useState([]);

    const handleKeyUp = (e) => {
        if (e.key === 'Enter') {
            setLista([...listaTarea, usuario]);
            setUserValue('');

        }
    };

    const deleteTarea = (id) => {

        setLista(listaTarea.filter((_, index) => index !== id));
    };


    return (
        <>

            <h1 className="text-center mt-4 titulo">LISTA DE TAREAS</h1>

            <div className="container my-4 border-2 d-flex justify-content-center ">

                <div className="row p-3 mx-5 w-50 bg-dark rounded-2">
                    <input
                        className="input rounded-2"
                        type="text"
                        placeholder="Introduce la tarea"
                        onChange={(e) => setUserValue(e.target.value)}
                        onKeyUp={handleKeyUp}
                        value={usuario}

                    />
                    <span className="text-white text-center my-2">
                        Te {listaTarea.length === 1 ? 'queda' : 'quedan'} {listaTarea.length} {listaTarea.length === 1 ? 'tarea' : 'tareas'} aún por completar. {listaTarea.length > 1 ? 'Espavila' : ''}

                    </span>

                    {
                        listaTarea.map((tarea, index) => (
                            
                                <div key={index} className="d-flex justify-content-between bg-white align-items-center mt-1 border border-2 tarea rounded-2 ">
                                    <span>{tarea}</span>
                                    <button onClick={() => deleteTarea(index)} className="btn">X</button>
                                </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
};