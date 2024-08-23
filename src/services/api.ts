import IRepository from "../models/Repository";

const myUser = 'danielgoncalves2023';
const tokenGithub = import.meta.env.VITE_API_TOKEN;
const apiFetchRepository = (repos: string) => `https://api.github.com/repos/${myUser}/${repos}`;
const apiFetchRepositoryLanguages = (repos: string) => `https://api.github.com/repos/${myUser}/${repos}/languages`;

export const fetchRepository = async (repository: string): Promise<IRepository | undefined> => {
    try {
        // Primeira chamada: Obter detalhes do repositório
        const responseApi = await fetch(apiFetchRepository(repository), {
            headers: {
                'Authorization': `token ${tokenGithub}`
            }
        });

        if (!responseApi.ok) {
            throw new Error(`HTTP error! status: ${responseApi.status}`);
        }

        const repositoryData: IRepository = await responseApi.json();

        // Segunda chamada: Obter as linguagens do repositório
        const responseLanguages = await fetch(apiFetchRepositoryLanguages(repository), {
            headers: {
                'Authorization': `token ${tokenGithub}`
            }
        });

        if (!responseLanguages.ok) {
            throw new Error(`HTTP error! status: ${responseLanguages.status}`);
        }

        const languagesData = await responseLanguages.json();

        // Combinar os dados de linguagens com os dados do repositório
        const repositoryWithLanguages: IRepository = {
            ...repositoryData,
            languages: languagesData
        };

        return repositoryWithLanguages;

    } catch (error) {
        console.error("Error fetching repository:", (error as Error).message);
        return undefined;
    }
}