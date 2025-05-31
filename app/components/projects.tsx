import { Card, CardDescription, CardTitle } from "@/components/ui/card";

export function Projects(){
return(
    <section className="border-black">
        <div className="border-black flex flex-row justify-around space-y-4">
            <Card className="border-black">
                <CardTitle><a href="https://github.com/Matheusclay/Eletiva4_FabricadeMoveis">Gerenciador de Fábrica de Móveis</a></CardTitle>
                <CardDescription>
                    Sistema para controle da produção, pedidos, estoque e entregas. Permite gerenciar o fluxo de fabricação, acompanhar o status de cada encomenda, organizar materiais e otimizar a logística da fábrica de forma centralizada e eficiente.
                </CardDescription>

            </Card>
            <Card className="border-black">
                <CardTitle><a href="https://github.com/pablo-sa10/Estudio-de-danca">Gerenciador de Estúdio de Dança</a></CardTitle>
                <CardDescription>
                    Plataforma para gestão de aulas, turmas, professores e matrículas. Permite agendar horários, controlar presença, organizar pagamentos e manter a comunicação com os alunos, facilitando a administração completa do estúdio.
                </CardDescription>
                
            </Card>
            <Card className="border-black">
                <CardTitle><a href="https://github.com/pedrohcornetti/EstudioDeTatuagem">Gerenciador de Estúdio de Tatuagem</a></CardTitle>
                <CardDescription>
                    Sistema para agendamento de sessões, cadastro de clientes, portfólios de tatuadores e controle financeiro. Facilita a gestão do estúdio, organizando horários, históricos de atendimento e comunicação com os clientes de forma prática e eficiente.
                </CardDescription>
                
            </Card>

        </div>
        <div className="border-black flex flex-row justify-around">
            <Card className="border-black">
                <CardTitle><a href="https://github.com/esmerdel/EmpresaConstrucao">Gerenciador de Empresa de Construção</a></CardTitle>
                <CardDescription>
                    Plataforma para gestão de obras, equipes, materiais e cronogramas. Permite acompanhar o progresso de projetos em tempo real, controlar custos e recursos, além de organizar as etapas da construção de forma eficiente e centralizada.
                </CardDescription>
                
            </Card>
            <Card className="border-black">
                <CardTitle><a href="https://github.com/Deigosz/agviagens">Gerenciador de Agência de Viagens</a></CardTitle>
                <CardDescription>
                    Sistema para gestão de pacotes turísticos, reservas, clientes e roteiros personalizados. Permite o controle de destinos, acomodações, pagamentos e atendimento ao cliente, centralizando todas as operações da agência em uma única plataforma.
                </CardDescription>
                
            </Card>
            <Card className="border-black">
                <CardTitle><a href="https://github.com/LucasSantz1/PHP-FATEC/tree/main/Linguagem%20de%20Programa%C3%A7%C3%A3o%20IV/CentralDeEventos">Gerenciador Central de Eventos</a></CardTitle>
                <CardDescription>
                    Plataforma para organização e gerenciamento de eventos. Permite cadastrar eventos, controlar inscrições, emitir ingressos e acompanhar a participação em tempo real. Desenvolvido para facilitar a gestão de eventos corporativos, culturais ou educacionais.                    
                </CardDescription>
                
            </Card>
            
        </div>
        <div className="border-black flex flex-row justify-center">
            <Card className="border-black">
                <CardTitle><a href="https://github.com/EdyFS/projetotransportadora">Gerenciador de Transportadora</a></CardTitle>
                <CardDescription>
                    Sistema para controle logístico de transportadoras. Permite gerenciar cargas, motoristas, veículos e rotas, com geração de relatórios operacionais. Desenvolvido com foco em eficiência e organização das entregas.                  
                </CardDescription>
                
            </Card>
            
        </div>
    </section>
);

}
