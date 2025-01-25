import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <>
    <p>Hello world</p>
    <Lista />
    </>
  )
}

export default App

function Lista() {
  const [lista, setLista] = useState([])

  const hadleAddSection = () => {
    setLista([
      ...lista,
      {
        id: lista.length + 2,
        nombre: 'John Doe',
        cargo: 'Product Owner',
        permisos: 'Administrador',
        status: 'Confirmado',
      }
    ])
  }


  return (
    <>

    <div className='card-body'>
      <div className='table-responsive'>
        <table className='table table-striped' id='dataTable' width='100%' cellSpacing='10'>

          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre usuario</th>
              <th>Cargo</th>
              <th>Permisos</th>
              <th>Status</th>
              <th>Acciones</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>1</td>
              <td>John Doe</td>
              <td>Product Owner</td>
              <td className="d-flex justify-content-start">
                  <select className="form-control w-auto">
                      <option value="admin">Administrador</option>
                      <option value="personnel">Personal</option>
                  </select>
                  <button type="button" className="btn btn-icon">
                      <i className="bi bi-check-square-fill"></i>
                  </button>
                  <button type="button" className="btn btn-icon">
                        <i className="bi bi-x-square-fill" ></i>
                  </button>
              </td>
              <td>Confirmado</td>
              <td>
                <button className='btn btn-primary'>Editar</button>
                <button className='btn btn-danger'>Eliminar</button>
                <button type='button' className='btn btn-danger'> DESVINCULAR</button>
              </td>
            </tr>

            {lista.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.nombre}</td>
                <td>{item.cargo}</td>
                <td className="d-flex justify-content-start">
                  <select className="form-control w-auto" defaultValue={item.permisos}>
                      <option value="admin">Administrador</option>
                      <option value="personnel">Personal</option>
                  </select>
                  <button type="button" className="btn btn-icon">
                      <i className="bi bi-check-square-fill"></i>
                  </button>
                  <button type="button" className="btn btn-icon">
                        <i className="bi bi-x-square-fill" ></i>
                  </button>
                </td>
                <td>{item.status}</td>
                <td>
                  <button className='btn btn-primary'>Editar</button>
                  <button className='btn btn-danger'>Eliminar</button>
                  <button type='button' className='btn btn-danger'> DESVINCULAR</button>
                </td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>
    </div>
    <button onClick={hadleAddSection}>Agregar usuario</button>




    </>
  )
}