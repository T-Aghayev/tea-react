// import Collections from "../sections/collections";
import TeaListItem from "./TeaListItem";

const teaName = [
  { name: "black", src: "./assets/images/blackTea.png", price: "10" },
  { name: "green", src: "./assets/images/blackTea.png", price: "15" },
  { name: "white", src: "./assets/images/blackTea.png", price: "20" },
];
function Tealist() {
  return (
    <div className="tea_list">
      <TeaListItem item={teaName[0]} />
      <TeaListItem item={teaName[1]} />
      <TeaListItem item={teaName[2]} />
    </div>
  );
}

export default Tealist;
