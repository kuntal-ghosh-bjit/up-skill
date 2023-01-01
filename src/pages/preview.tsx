import img from "@images/commons/403.svg";

export default function Preview() {
  return (
    <>
      <div className="main"> hello from next.js</div>
      <img src={img.src} alt="image alt" />
      <div>Sample Heading Component</div>
    </>
  );
}
