import { Link } from "react-router-dom"

const Home = ({members}) => {

    return(
        <div className='navBar'>
      {members.map((member) => (
          member.type === 'pj' ?
          <Link to={`/company/${member.id}`}>{member.name}</Link>
          :
          <Link to={`/customer/${member.id}`}>{member.name}</Link>
      ))}
        </div>  
    )

}





// Use um map no array members para criar um <Link/> para cada membro. Caso o member seja type="pj", passe no parâmetro to: `/company/${member.id}`. Caso contrário passe `/customer/${member.id}`.

// Exemplo: to={`/company/${member.id}`}

export default Home