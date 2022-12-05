import { useLocation } from "react-router-dom"
import Message from "../layout/Message"
import styles from "./Projects.module.css"
import Container from "../layout/Container"
import LinkButton from "../layout/LinkButton"
import ProjectCard from "../project/ProjectCard"
import { useState, useEffect } from "react"
import Loading from "../layout/Loading"

function Projects() {
const [projects, setProjects] = useState([])
const [removeLoading, setRemoveLoading] = useState(false)

    const location = useLocation();
    let message = '';
    if(location.state) {
        message = location.state.message;
    }

    useEffect(() => {
        fetch('http://localhost:5000/projects', {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            },
        }).then(response => response.json())
        .then(data => {
            console.log(data)
            setProjects(data)
            setRemoveLoading(true)
        })
        .catch(err => console.log(err))
    }, [])

    return (
        <div className={styles.project_container}>
            <div className={styles.title_container}>
                <h1>Meus Projetos</h1>
                <LinkButton text={"Novo Projeto"}></LinkButton>
            </div>
            {message && <Message msg={message} type={"success"}/> }
            <Container customClass="start">
                {projects.length > 0 &&
                projects.map(project => (
                    <ProjectCard name={project.name} id={project.id} category={project.category.name} budget={project.budget} key={project.id}/>
                ))}
                {!removeLoading && <Loading/>}
            </Container>
        </div>
    )
}

export default Projects