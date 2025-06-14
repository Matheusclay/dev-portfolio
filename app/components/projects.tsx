import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { Github } from "lucide-react";

export function Projects(){
return(
    <section className="max-w-6xl mx-auto p-20">
        <h1 className="flex flex-row justify-center font-bold text-2xl p-10">PROJETOS</h1>
        <div className="flex flex-row justify-around space-y-10">
            <a href="https://github.com/Matheusclay/Eletiva4_FabricadeMoveis" id="moveis">
            <Card className="space-x-3 w-75 h-75 p-5 shadow-xl/30 grid content-center">
                <div className="flex flex-row justify-center">
                <Github className="w-5 h-5"></Github>
                </div>
                <CardTitle className="flex flex-row justify-center">Gerenciador de Fábrica de Móveis</CardTitle>
                <CardDescription className="flex flex-row justify-center text-justify">
                    Sistema para controle da produção, pedidos, estoque e entregas. Permite gerenciar o fluxo de fabricação, acompanhar o status de cada encomenda, organizar materiais e otimizar a logística da fábrica de forma centralizada e eficiente.
                </CardDescription>

            </Card>
            </a>
            <a href="https://github.com/pablo-sa10/Estudio-de-danca">
            <Card className="space-x-3 w-75 h-76 p-5 shadow-xl/30 grid content-center" id="danca">
                <div className="flex flex-row justify-center">
                <Github className="w-5 h-5"></Github>
                </div>
                <CardTitle className="flex flex-row justify-center">Gerenciador de Estúdio de Dança</CardTitle>
                <CardDescription className="flex flex-row justify-center text-justify">
                    Sistema para gestão de aulas, turmas, professores e matrículas. Permite agendar horários, controlar presença, organizar pagamentos e manter a comunicação com os alunos, facilitando a administração completa do estúdio.
                </CardDescription>
                
            </Card>
            </a>
            <a href="https://github.com/pedrohcornetti/EstudioDeTatuagem">
            <Card className="space-x-3 w-75 h-75 p-5 shadow-xl/30 grid content-center" id="tatuagem">
                <div className="flex flex-row justify-center">
                <Github className="w-5 h-5"></Github>
                </div>
                <CardTitle className="flex flex-row justify-center">Gerenciador de Estúdio de Tatuagem</CardTitle>
                <CardDescription className="flex flex-row justify-center text-justify">
                    Sistema para agendamento de sessões, cadastro de clientes, portfólios de tatuadores e controle financeiro. Facilita a gestão do estúdio, organizando horários, históricos de atendimento e comunicação com os clientes de forma prática e eficiente.
                </CardDescription>
          
            </Card>
            </a>
        </div>
        <div className="flex flex-row justify-around space-y-10">
            <a href="https://github.com/esmerdel/EmpresaConstrucao">
            <Card className="space-x-3 w-75 h-75 p-5 shadow-xl/30 grid content-center" id="constucao">
                <div className="flex flex-row justify-center">
                <Github className="w-5 h-5"></Github>
                </div>
                <CardTitle className="flex flex-row justify-center">Gerenciador de Empresa de Construção</CardTitle>
                <CardDescription className="flex flex-row justify-center text-justify">
                    Sistema para gestão de obras, equipes, materiais e cronogramas. Permite acompanhar o progresso de projetos em tempo real, controlar custos e recursos, além de organizar as etapas da construção de forma eficiente e centralizada.
                </CardDescription>
                
            </Card>
            </a>
            <a href="https://github.com/Deigosz/agviagens">
            <Card className="space-x-3 w-75 h-75 p-5 shadow-xl/30 grid content-center" id="viagens">
                <div className="flex flex-row justify-center">
                <Github className="w-5 h-5"></Github>
                </div>
                <CardTitle className="flex flex-row justify-center">Gerenciador de Agência de Viagens</CardTitle>
                <CardDescription className="flex flex-row justify-center text-justify">
                    Sistema para gestão de pacotes turísticos, reservas, clientes e roteiros personalizados. Permite o controle de destinos, acomodações, pagamentos e atendimento ao cliente, centralizando todas as operações da agência em uma única plataforma.
                </CardDescription>
                
            </Card>
            </a>
            <a href="https://github.com/LucasSantz1/PHP-FATEC/tree/main/Linguagem%20de%20Programa%C3%A7%C3%A3o%20IV/CentralDeEventos">
            <Card className="space-x-3 w-75 h-75 p-5 shadow-xl/30 grid content-center" id="eventos">
                <div className="flex flex-row justify-center">
                <Github className="w-5 h-5"></Github>
                </div>
                <CardTitle className="flex flex-row justify-center">Gerenciador Central de Eventos</CardTitle>
                <CardDescription className="flex flex-row justify-center text-justify">
                    Sistema para organização e gerenciamento de eventos. Permite cadastrar eventos, controlar inscrições, emitir ingressos e acompanhar a participação em tempo real. Desenvolvido para facilitar a gestão de eventos corporativos, culturais ou educacionais.                    
                </CardDescription>
                
            </Card>
            </a>
            
        </div>
        <div className="flex flex-row justify-center space-y-10">
            <a href="https://github.com/EdyFS/projetotransportadora">
            <Card className="space-x-3 w-75 h-75 p-5 shadow-xl/30 grid content-center" id="transportadora">
            
                <div className="flex flex-row justify-center">
                <Github className="w-5 h-5 "></Github>
                </div>
                <CardTitle className="flex flex-row justify-center">Gerenciador de Transportadora</CardTitle>
                <CardDescription className="flex flex-row justify-center text-justify">
                    Sistema para controle logístico de transportadoras. Permite gerenciar cargas, motoristas, veículos e rotas, com geração de relatórios operacionais. Desenvolvido com foco em eficiência e organização das entregas.                  
                </CardDescription>
                
            </Card>
            </a>
            
        </div>
    </section>
);

}
