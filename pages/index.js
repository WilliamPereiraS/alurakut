import React from 'react';
import MainGrid from '../src/components/MainGrid'
import Box from '../src/components/Box'
import { AlurakutMenu, AlurakutProfileSidebarMenuDefault, OrkutNostalgicIconSet } from '../src/lib/AlurakutCommons';
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations';

function ProfileSidebar(user) {
  console.log(user);
  return (
    <Box>
    <img src={`https://github.com/${user.githubUser}.png`} style={{borderRadius: '8px'}}/> 
    <hr />
    <p>
      <a className="boxLink" href={`https://github.com/${user.githubUser}`}>
        @{user.githubUser}
      </a>
    </p>
    <hr />

    <AlurakutProfileSidebarMenuDefault />
  </Box>
  )
}

export default function Home() {
  const [comunidades, setComunidades] = React.useState([{   
    id: '123123',
    title: 'Eu odeio acorda Cedo',
    image: 'https://alurakut.vercel.app/capa-comunidade-01.jpg'
  }]);
  console.log(comunidades);

  const githubUser = 'WilliamPereiraS';
  //{const comunidades = ['Alurakut'];}
  const pessoasFavoritas = ['omariosouto', 'juunegreiros', 'peas', 'Dragon-ball','Onepiece']

  return (
    <>
      <AlurakutMenu />
      <MainGrid>
        <div className = "profileArea" style={{ gridArea: 'profileArea'}}>
          <ProfileSidebar githubUser={githubUser}/>
        </div>
        <div className = "welcomeArea" style={{ gridArea: 'welcomeArea'}}>
          <Box>
            <h1 className="title">
              BemVindo (a)
            </h1>
            <OrkutNostalgicIconSet />
          </Box>

          <Box>
            <h2 className="subTitle"> O que você deseja fazer?</h2>
            <form onSubmit={function handleCriaComunidade(e) {
              e.preventDefault();
              // {console.log(e)}
              const dadosDoForm = new FormData(e.target);

              console.log('Campo: ', dadosDoForm.get('title'));
              console.log('Imagem: ', dadosDoForm.get('image'));

              const comunidades = {
                id: new Date().toISOString,
                title: dadosDoForm.get('title'),
                image: dadosDoForm.get('image'),
              }
              const comunidadesAtualizadas = [...comunidades, 'Alura Stars']
              setComunidades(comunidadesAtualizadas);
              console.log(setComunidades);


            }}>
              <div>
                <input 
                  placeholder="Qual vai ser o nome da sua comunidade?" 
                  name="title" 
                  aria-label="Qual vai ser o nome da sua comunidade?"
                  type="text"
                />                
              </div>
              <div>
                <input 
                  placeholder="Coloque uma URL para usarmos de capa" 
                  name="image" 
                  aria-label="Coloque uma URL para usarmos de capa"
                  />
              </div>
              <button>
                Criar Comunidade
              </button>
            </form>
          </Box>
        </div>
        <div className = "profileRelationsArea" style={{ gridArea: 'profileRelationsArea'}}>
        <ProfileRelationsBoxWrapper>
          <h2 className="smallTitle">
              Comunidade ({comunidades.length})
            </h2>
            <ul>
              {comunidades.map((itemAtual) => {
                return  ( 
                  <li key={itemAtual.id}>
                    <a href={`/users/${itemAtual.title}`}>
                    <img src={itemAtual.image} />
                    <span>{itemAtual.title}</span>
                    </a>                 
                  </li>
                )
              })}
            </ul>
        </ProfileRelationsBoxWrapper>
          <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">
              Pessoas da Comunidade ({pessoasFavoritas.length})
            </h2>

            <ul>
              {pessoasFavoritas.map((itemAtual) => {
                return  ( 
                  <li key={itemAtual}>
                    <a href={`/users/${itemAtual}`}>
                    <img src={`https://github.com/${itemAtual}.png`} />
                    <span>{itemAtual}</span>
                    </a>                 
                  </li>
                )
              })}
            </ul>
          </ProfileRelationsBoxWrapper>
        </div>
      </MainGrid>
    </>
  )
}