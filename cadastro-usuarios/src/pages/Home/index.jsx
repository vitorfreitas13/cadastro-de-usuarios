import "./style.css";
import { Trash2 } from "lucide-react";

function Home() {
  const users = [
    {
      id: "1515151515",
      name: "Vitor",
      age: 28,
      email: "vitor@gmail.com",
    },
    {
      id: "1515152665915",
      name: "Aline",
      age: 23,
      email: "aline@gmail.com",
    }  
  ];

  return (
    <div className="container">
      <form>
        <h1>Cadastros de Usuários</h1>
        <input placeholder="Nome" name="nome" type="text" />
        <input placeholder="Idade" name="nome" type="number" />
        <input placeholder="Email" name="nome" type="email" />
        <button type="button">Cadastrar</button>
      </form>
      {users.map((user) => (
        <div className="card" key={user.id}>
          <div>
            <p>Nome: <span>{user.name}</span></p>
            <p>Idade:<span>{user.age}</span></p>
            <p>Email:<span>{user.email}</span></p>
          </div>
          <button>
            <Trash2 />
          </button>
        </div>
      ))}
    </div>
  );
}

export default Home;
