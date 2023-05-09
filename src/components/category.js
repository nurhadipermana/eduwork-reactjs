import { useParams } from "react-router-dom";

const Categori = () => {
  const params = useParams();

  return <h3>Ini halaman Categori {params.name}!</h3>
};

export default Categori;