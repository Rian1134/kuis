import { Link } from "react-router";

const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="card w-5/6 mt-30 flex flex-col">
        <div className="card-body">
          <h1 className="text-center text-2xl text-indigo-700 font-bold mb-5">
            Selamat datang
          </h1>
          <p className="text-balance">
            Semua soal yang ada didalam kuis ini dibuat oleh{" "}
            <span className="font-bold">Iksan Junianto</span>
          </p>
          <p className="mt-5">Selamat mengerjakan</p>
        </div>
        <Link to={'/kuis'} className="btn-success m-2">Mulai</Link>
      </div>
    </div>
  );
};

export default Home;
