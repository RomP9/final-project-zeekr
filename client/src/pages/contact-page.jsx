import backGround from "../assets/hero/Vector.png";
import iconX from "../assets/icons/15755.png";
import backIcon from "../assets/icons/iconX.png";
import steps from "../assets/icons/steps.png";
export default function Contact() {
  return (
    <div style={{
          backgroundImage: `url(${backGround})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "697px",
          width: "360px",
        }}>
      <div>
        <div
          className="d-flex align-items-center flex-row justify-content-around"
          dir="rtl"
          style={{ backgroundColor: "#24292B", height: "70px" }}
        >
          <img src={iconX} alt="" style={{ width: "40px", height: "40px" }} />
          <h3 style={{ color: "white" }}>הרשמה לשירות </h3>
          <img
            src={backIcon}
            alt=""
            style={{ width: "40px", height: "40px" }}
          />
        </div>
      </div>
      <img src={steps} alt="" />
      <h6 style={{color:"white",fontSize:"10px"}} className="d-flex justify-content-end p-3 ">כדאי לבדוק שוב שהפרטים נכונים </h6>
    </div>
  );
}
