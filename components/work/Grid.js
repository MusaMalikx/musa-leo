import data from "../../utils/data";
import GridItem from "./GridItem";

const Grids = () => {

  return (
    <div className="mx-10 space-y-10">
      {data.map((data, i) => (
        <GridItem key={i} data={data} />
      ))}
    </div>
  );
};

export default Grids;
