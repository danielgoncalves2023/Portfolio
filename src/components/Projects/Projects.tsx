import { useEffect, useState } from "react"
import { CardProject } from "./CardProject/CardProject"
import { ProjectsContainer, ProjectsGrid, ProjectsTitle } from "./Projects.style"
import { CardSkeleton } from "./CardSkeleton/CardSkeleton"
import { fetchRepository } from "../../services/api"
import IRepository from "../../models/Repository"

export const Projects = () => {
    const [repositories, setRepositories] = useState<IRepository[]>([]);

    const repositoryNames = [
        'BlackJackWithAPI',
        'E-commerce',
        'Jogo-da-velha',
        'Calculo_IMC',
        'JOKENPO',
        'projeto-mks'
    ]

    useEffect(() => {
        const fetchAllRepositories = async () => {
            const fetchedRepositories: IRepository[] = [];

            for (const name of repositoryNames) {
                const data = await fetchRepository(name);

                if (data) {
                    fetchedRepositories.push(data);
                }
            }

            setRepositories(fetchedRepositories);
        };

        fetchAllRepositories();
    }, []);

    return (
        <ProjectsContainer
            id="Projects"
        >
            <ProjectsTitle>
                Projetos
            </ProjectsTitle>
            <ProjectsGrid>
                {
                    repositories.length > 0 ? (
                        repositories.map((repos) => {
                            return (
                                <CardProject
                                    key={repos.id}
                                    id={repos.id}
                                    name={repos.name}
                                    description={repos.description}
                                    languages={repos.languages}
                                    updated_at={repos.updated_at}
                                    html_url={repos.html_url}
                                />
                            )
                        })
                    ) : (
                        <>
                            <CardSkeleton />
                            <CardSkeleton />
                            <CardSkeleton />
                            <CardSkeleton />
                            <CardSkeleton />
                            <CardSkeleton />
                        </>
                    )
                }
            </ProjectsGrid>
        </ProjectsContainer>
    )
}