import { useNavigate } from 'react-router-dom';

import ProjectForm from '../project/ProjectForm'
import styles from './NewProject.module.css'


function NewProject() {
    const navigate = useNavigate()

    function createProject(project) {
        project.costs = 0
        project.services = []

        fetch("http://localhost:5000/projects", {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(project)
        }).then(response => response.json())
        .then(data => {
            console.log(data)
            navigate("/projects", {message: 'Projeto criadoa com sucesso!'})
        }) 
        .catch(err => console.log(err))
    }

    return (
        <div className={styles.newproject_container}>
            <h1>Criar Projeto</h1>
            <p>
                Crie seu projeto para depois adicionar os serviços
            </p>
            <ProjectForm handleSubmit={createProject} btnText="Criar Projeto"/>
        </div>
    )
}

export default NewProject