import React from 'react';
import { connect } from 'react-redux';

import shortid from 'shortid';

import Dashboard from 'components/Dashboard';
import JobInformation from './JobInformation';

import './home.css';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profileSteps: 0,
      jobs: []
    };
  }

  componentWillUpdate(prevProps, prevState) {
    if (prevProps.profileSteps !== prevState.profileSteps) {
      this.setState({ profileSteps: prevProps.profileSteps });
    }
  }

  render() {
    return (
      <main className='home'>
        <Dashboard>
          {this.props.jobs.map(j =>
            <JobInformation
              id={j.id}
              title = {j.title}
              company = {j.company}
              city = {j.city}
              state = {j.state}
              country = {j.country}
              creationDate = {j.creationDate}
              description = {j.description}
              experience = {j.experience}
              industries = {j.industries}
              employmentStatus = {j.employmentStatus}
              jobFunctions = {j.jobFunctions}
            />
          )}
        </Dashboard>
        {this.props.children}
      </main>
    );
  }
}

export default connect(
  state => ({
    profileSteps: 0,
    jobs: [{
      id: shortid.generate()
      ,title: "Analista de Infraestrutura de Middleware"
      ,company: "Compasso"
      ,city: "Porto Alegre e Região"
      ,state: "RS"
      ,country: "Brasil"
      ,creationDate: "2017/11/01"
      ,description: "A Compasso está procurando pessoas talentosas, inovadoras, comprometidas, inteligentes e que queiram ajudar a fazer a transformação digital acontecer em nossos clientes.\\n\\nQueremos conhecer você, que está em busca de carreira desafiadora e oportunidades de crescimento profissional.\\n\\nRequisitos\\n\\nSólido domínio em Oracle Weblogic Server / Apache / JBoss\\nCapacidade para realizar troubleshooting de ambiente\\nElaboração de Relatório de Analise de Causa Raiz\\nExperiência com Sistemas operacionais Linux e/ou Unix\\nExperiência com tecnologias de virtualização\\nSuperior completo, ou em vias de completar, em Ciência da Computação ou áreas correlatas\\nHabilidade de redigir documentos técnicos e manuais de procedimentos\\nInglês intermediário\\n\\nDesejável\\n\\nExperiência com IaaS, PaaS, SaaS na nuvem (AWS, Azure, Google, Oracle Cloud, etc.)\\nExperiência com Banco de Dados Oracle\\nExperiência em Oracle Webcenter, Oracle SOA Suíte, Oracle BPM, OIM, OAM, Oracle Data Integrator\\nExperiência com ferramentas de automação de tarefas\\nPrincipais atividades\\n\\nAtuar na área de implantação e sustentação de plataformas de Middleware\\n"
      ,experience: "Pleno-sênior"
      ,industries: ["Software", "Desenvolvimento de programas", "Tecnologia da informação e serviços"]
      ,employmentStatus: "Tempo integral"
      ,jobFunctions: ["Tecnologia da informação"]
    }]
  }),
)(Home);
