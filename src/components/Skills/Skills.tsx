import { useState, useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Container, Title, Tabs, Tab, TabButton, TabContent, SkillsRow, Skill, SkillTitle, ProgressBar } from './Skills.style';

const Skills = () => {
    const [activeTab, setActiveTab] = useState<'hard-skills' | 'soft-skills'>('hard-skills');
    const techSkillsRef = useRef<HTMLDivElement | null>(null);
    const softSkillsRef = useRef<HTMLDivElement | null>(null);

    const tecnologies = [
        { name: 'Javascript', percentageSkill: 80 },
        { name: 'Typescript', percentageSkill: 75 },
        { name: 'NodeJS', percentageSkill: 70 },
        { name: 'ReactJS', percentageSkill: 80 },
        { name: 'NextJS', percentageSkill: 60 },
        { name: 'VueJS', percentageSkill: 25 },
        { name: 'Java', percentageSkill: 30 },
        { name: 'HTML', percentageSkill: 70 },
        { name: 'CSS', percentageSkill: 75 },
        { name: 'SQL', percentageSkill: 70 },
    ];

    const softskills = [
        { name: 'Orientado a Metas', percentageSkill: 90 },
        { name: 'Trabalho em Equipe', percentageSkill: 80 },
        { name: 'Organização', percentageSkill: 75 },
        { name: 'Empatia', percentageSkill: 75 },
        { name: 'Resolução de Problemas', percentageSkill: 80 },
        { name: 'Adaptabilidade', percentageSkill: 90 },
        { name: 'Criatividade', percentageSkill: 80 },
        { name: 'Pontualidade', percentageSkill: 100 },
        { name: 'Comunicação', percentageSkill: 80 },
        { name: 'Vontade de Aprender', percentageSkill: 100 },
    ];

    // Criar controles de animação para tecnologias e softskills
    const techControls = tecnologies.map(() => useAnimation());
    const softControls = softskills.map(() => useAnimation());

    useEffect(() => {
        const observerCallback = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    if (entry.target === techSkillsRef.current) {
                        techControls.forEach((control, index) => {
                            control.start({ width: `${tecnologies[index].percentageSkill}%` });
                        });
                    } else if (entry.target === softSkillsRef.current) {
                        softControls.forEach((control, index) => {
                            control.start({ width: `${softskills[index].percentageSkill}%` });
                        });
                    }
                } else {
                    if (entry.target === techSkillsRef.current) {
                        techControls.forEach((control) => {
                            control.start({ width: "0%" });
                        });
                    } else if (entry.target === softSkillsRef.current) {
                        softControls.forEach((control) => {
                            control.start({ width: "0%" });
                        });
                    }
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, { threshold: 0.1 });

        if (techSkillsRef.current) observer.observe(techSkillsRef.current);
        if (softSkillsRef.current) observer.observe(softSkillsRef.current);

        return () => observer.disconnect();
    }, [techControls, softControls, tecnologies, softskills]);

    return (
        <Container id='Skills'>
            <Title>Habilidades</Title>

            {/* Abas */}
            <Tabs>
                <Tab>
                    <TabButton $active={activeTab === 'hard-skills'} onClick={() => setActiveTab('hard-skills')}>
                        Tecnologias
                    </TabButton>
                </Tab>
                <Tab>
                    <TabButton $active={activeTab === 'soft-skills'} onClick={() => setActiveTab('soft-skills')}>
                        Soft Skills
                    </TabButton>
                </Tab>
            </Tabs>

            {/* Aba Tecnologias ADICIONAR ANIMAÇÃO */}
            <TabContent $active={activeTab === 'hard-skills'}>
                <SkillsRow ref={techSkillsRef}>
                    {tecnologies.map((tech, index) => (
                        <Skill key={index}>
                            <SkillTitle>{tech.name}</SkillTitle>
                            <ProgressBar>
                                <motion.div
                                    initial={{ width: 0 }}
                                    animate={techControls[index]}
                                    exit={{ width: 0 }}
                                    transition={{ duration: 1 }}
                                    style={{ height: '100%', backgroundColor: '#3498db', borderRadius: '4px' }}
                                />
                            </ProgressBar>
                        </Skill>
                    ))}
                </SkillsRow>
            </TabContent>

            {/* Aba SoftSkills ADICIONAR ANIMAÇÃO */}
            <TabContent $active={activeTab === 'soft-skills'}>
                <SkillsRow ref={softSkillsRef}>
                    {softskills.map((softskill, index) => (
                        <Skill key={index}>
                            <SkillTitle>{softskill.name}</SkillTitle>
                            <ProgressBar>
                                <motion.div
                                    initial={{ width: 0 }}
                                    animate={softControls[index]}
                                    exit={{ width: 0 }}
                                    transition={{ duration: 1 }}
                                    style={{ height: '100%', backgroundColor: '#2ecc71', borderRadius: '4px' }}
                                />
                            </ProgressBar>
                        </Skill>
                    ))}
                </SkillsRow>
            </TabContent>
        </Container>
    );
};

export default Skills;