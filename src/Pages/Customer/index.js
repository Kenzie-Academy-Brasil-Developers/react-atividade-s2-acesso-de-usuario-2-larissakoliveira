import { useParams, Link } from "react-router-dom";

const Customer = ({ members }) => {
  const params = useParams();

  const member = members.find((person) => person.id === params.id);

  return (
    <div className='dados'>
      <h1>Detalhes do cliente</h1>

      <p>Nome: {member && member.name}</p>

      <Link to="/">Voltar</Link>
    </div>
  );
};

export default Customer;
