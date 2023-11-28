import { useSelector } from "react-redux";

function TotalPitchers() {
  const pitcherList = useSelector((store) => store.pitcherNames);

  return <div>Total Pitchers: {pitcherList.length}</div>;
}

export default TotalPitchers;
