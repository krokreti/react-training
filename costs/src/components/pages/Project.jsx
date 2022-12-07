import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import styles from './Project.module.css'

function Project() {
    const {id} = useParams();
    const [project, setProject] = useState(); 

    useEffect(() => {
        fetch(`http://localhost:5000/projects/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => response.json())
        .then(data => setProject(data))
        .catch(err => console.log(err))
    }, [id])

    return <p>Projeto</p>
}

export default Project