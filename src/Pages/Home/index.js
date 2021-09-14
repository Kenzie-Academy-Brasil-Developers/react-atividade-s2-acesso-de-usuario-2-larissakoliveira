import { Link } from "react-router-dom";

const Home = ({ members }) => {
  return (
    <div className="navBar">
      {members.map((member, index) =>
        member.type === "pj" ? (
          <Link key={index} to={`/company/${member.id}`}>
            {member.name}
          </Link>
        ) : (
          <Link key={index} to={`/customer/${member.id}`}>
            {member.name}
          </Link>
        )
      )}
    </div>
  );
};

export default Home;