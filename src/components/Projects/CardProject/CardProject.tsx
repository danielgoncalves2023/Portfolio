import {
    Ancor,
    Button,
    CardBottomDiv,
    CardContainer,
    CardTopDiv,
    DescriptionProject,
    LastUpdate,
    NameProject,
    TechnologiasList,
    TechnologiesTitle
} from "./CardProject.style"
import { FaGithub } from "react-icons/fa"
import IRepository from "../../../models/Repository"
import { formatDate } from "../../../utils/dateFormat"

export const CardProject = ({ name, description, languages, updated_at, html_url }: IRepository) => {

    // Função para formatar a lista de tecnologias
    const formatLanguages = (languages: Record<string, number>) => {
        return Object.keys(languages).join(" | ");
    };

    return (
        <CardContainer>

            {/* Card TOP */}
            <CardTopDiv>
                <NameProject>
                    {name}
                </NameProject>
                <DescriptionProject>
                    {description}
                </DescriptionProject>
                <Button>
                    <Ancor href={html_url} target="_blank" rel="noopener noreferrer">
                        <FaGithub />
                        Visitar
                    </Ancor>
                </Button>
            </CardTopDiv>

            {/* Card BOTTOM */}
            <CardBottomDiv>
                <TechnologiesTitle>
                    Tecnologias: <br />
                    <TechnologiasList>{formatLanguages(languages)}</TechnologiasList>
                </TechnologiesTitle>
                <LastUpdate>
                    Última atualização: <span>{formatDate(updated_at)}</span>
                </LastUpdate>
            </CardBottomDiv>

        </CardContainer>
    )
}