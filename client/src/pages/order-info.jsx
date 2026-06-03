import { useNavigate } from "react-router-dom";
import zeekrCar from "../assets/images/cars/zeekr-white.png"; 
import mapBg from "../assets/images/backgrounds/background_order_info.png"; 
import confettiBg from "../assets/images/backgrounds/confetti.png"; 

export default function OrderInfo() {
  const navigate = useNavigate();

  return (
    <div
      dir="rtl"
      className="d-flex flex-column align-items-center"
      style={{
        backgroundColor: "#121415",
        backgroundImage: `url(${mapBg})`,
        backgroundSize: "cover",
        backgroundPosition: "bottom center", 
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
        width: "100%",
        maxWidth: "400px", 
        margin: "0 auto",
        fontFamily: "sans-serif",
        color: "white",
        position: "relative",
        overflowX: "hidden",
        paddingBottom: "90px", 
      }}
    >
      {/* 1. הדר עליון (Header) */}
      <div className="d-flex justify-content-between align-items-start w-100 p-3 mt-1">
        <div className="d-flex align-items-center gap-2">
          <div style={{ backgroundColor: "#2A2D30", padding: "8px 12px", borderRadius: "12px", display: "flex", alignItems: "center" }}>
            <span style={{ fontSize: "18px", color: "#6C757D" }}>👤</span>
          </div>
          <div className="text-end" style={{ lineHeight: "1.2" }}>
            <span style={{ fontSize: "12px", color: "#A7A9AA" }}>בוקר טוב,</span><br/>
            <span style={{ fontSize: "14px", fontWeight: "bold" }}>איתי</span>
          </div>
        </div>

        <div className="d-flex flex-column align-items-center mt-1">
          <div style={{ border: "1.5px solid white", width: "24px", height: "24px", borderRadius: "4px", position: "relative" }}>
            <div style={{ position: "absolute", top: 0, right: "50%", width: "1.5px", height: "100%", backgroundColor: "white", transform: "skewX(-20deg)" }}></div>
          </div>
          <div className="d-flex gap-1 mt-2">
            <div style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "white" }}></div>
            <div style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "#6C757D" }}></div>
          </div>
        </div>

        <div className="d-flex gap-2">
          <div style={{ backgroundColor: "#2A2D30", padding: "8px 12px", borderRadius: "12px", position: "relative", display: "flex", alignItems: "center" }}>
            <span style={{
              position: "absolute", top: "-5px", right: "-5px", backgroundColor: "#FF5800", color: "white",
              borderRadius: "50%", padding: "1px 6px", fontSize: "11px", fontWeight: "bold", zIndex: 2
            }}>1</span>
            <span style={{ fontSize: "16px" }}>📝</span> 
          </div>
          <div style={{ backgroundColor: "#2A2D30", padding: "8px 12px", borderRadius: "12px", display: "flex", alignItems: "center" }}>
            <span style={{ fontSize: "16px" }}>🔔</span>
          </div>
        </div>
      </div>

      {/* 2. כרטיסיית ההזמנה המרכזית */}
      <div className="w-100 px-3" style={{ marginTop: "110px", position: "relative" }}>
        
        <div style={{
          backgroundColor: "#1E2022",
          border: "2px solid #FF5800",
          borderRadius: "16px",
          padding: "50px 20px 20px", 
          textAlign: "center",
          position: "relative", 
          boxShadow: "0 10px 25px rgba(0,0,0,0.5)",
          zIndex: 2
        }}>
          
          {/* שכבת הקונפטי - משוכה למעלה בדיוק לקו ה-Navbar */}
          <div style={{
             position: "absolute", 
             top: "-100px", // <--- שחק עם המספר הזה (למשל -90 או -110) כדי לכוון בדיוק על הפיקסל
             left: 0, 
             right: 0, 
             height: "450px", 
             pointerEvents: "none", 
             zIndex: 10, 
             backgroundImage: `url(${confettiBg})`,
             backgroundSize: "contain",
             backgroundPosition: "top center",
             backgroundRepeat: "no-repeat"
          }}></div>

          {/* הרכב האבסולוטי */}
          <img
            src={zeekrCar}
            alt="Zeekr X White"
            style={{
              position: "absolute",
              top: "-75px", 
              left: "50%",
              transform: "translateX(-50%)", 
              width: "80%", 
              zIndex: 2 
            }}
          />

          {/* אזור הטקסט והכפתורים */}
          <div style={{ position: "relative", zIndex: 3 }}>
            <h1 style={{ fontSize: "26px", fontWeight: "bold", letterSpacing: "1px", margin: "15px 0 5px" }}>ZEEKR X</h1>
            <h4 style={{ fontSize: "15px", marginBottom: "5px", fontWeight: "normal" }}>ההזמנה של איתי</h4>
            <p style={{ color: "#A7A9AA", fontSize: "14px", marginBottom: "15px" }}>מספר הזמנה - 714553</p>
            
            <div className="d-flex justify-content-center align-items-center gap-2 mb-4">
              <span style={{ color: "#FF5800", fontSize: "16px" }}>📅</span>
              <span style={{ fontSize: "13px", fontWeight: "bold" }}>תאריך הגעה משוער לארץ עד XX/XXXX</span>
            </div>

            <button 
              className="btn" 
              onClick={() => navigate(-1)} 
              style={{
                backgroundColor: "#FF5800", color: "white", width: "85%", height: "42px", borderRadius: "25px",
                fontWeight: "bold", fontSize: "15px", border: "none", cursor: "pointer"
              }}
            >
              פרטי הזמנה
            </button>
          </div>
        </div>
      </div>

      {/* 3. שירותים (Services) */}
      <div className="w-100 px-3 mt-4 text-center">
        <h6 className="mb-3" style={{ color: "#E0E0E0", fontSize: "14px", fontWeight: "normal" }}>לשירותך</h6>
        <div className="d-flex justify-content-between gap-2">
          
          <div className="d-flex flex-column align-items-center justify-content-center" style={{ backgroundColor: "#1E2022", borderRadius: "16px", width: "31%", aspectRatio: "1/1", border: "1px solid #2A2D30" }}>
            <div style={{ border: "1.5px solid #FF5800", borderRadius: "50%", width: "32px", height: "32px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "10px" }}>
              <span style={{ color: "#FF5800", fontSize: "16px", fontWeight: "bold" }}>P</span>
            </div>
            <span style={{ fontSize: "13px", lineHeight: "1.3" }}>ניווט לחניון<br/>קרוב</span>
          </div>

          <div className="d-flex flex-column align-items-center justify-content-center" style={{ backgroundColor: "#1E2022", borderRadius: "16px", width: "31%", aspectRatio: "1/1", border: "1px solid #2A2D30" }}>
            <span style={{ color: "#FF5800", fontSize: "28px", marginBottom: "10px" }}>⚡</span>
            <span style={{ fontSize: "13px", lineHeight: "1.3" }}>נקודות<br/>טעינה</span>
          </div>

          <div className="d-flex flex-column align-items-center justify-content-center" style={{ backgroundColor: "#1E2022", borderRadius: "16px", width: "31%", aspectRatio: "1/1", border: "1px solid #2A2D30" }}>
            <div style={{ border: "1.5px solid #FF5800", width: "24px", height: "24px", position: "relative", marginBottom: "12px", borderRadius: "2px" }}>
               <div style={{ position: "absolute", top: 0, right: "50%", width: "1.5px", height: "100%", backgroundColor: "#FF5800", transform: "skewX(-20deg)" }}></div>
            </div>
            <span style={{ fontSize: "13px", lineHeight: "1.3", fontWeight: "bold" }}>MY<br/>ZEEKR</span>
          </div>

        </div>
      </div>

      {/* 4. תפריט ניווט תחתון */}
      <div style={{
        position: "fixed", bottom: 0, width: "100%", maxWidth: "400px", height: "75px",
        backgroundColor: "#1E2022", borderTopLeftRadius: "24px", borderTopRightRadius: "24px",
        display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0 20px", zIndex: 100,
        boxShadow: "0 -2px 10px rgba(0,0,0,0.2)"
      }}>
        
        <div style={{
          position: "absolute", top: "-28px", left: "50%", transform: "translateX(-50%)",
          backgroundColor: "#FF5800", width: "68px", height: "68px", borderRadius: "50%",
          display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center",
          border: "7px solid #121415", 
          color: "white", fontSize: "12px", fontWeight: "bold", lineHeight: "1.1", cursor: "pointer"
        }}>
          <span>דברו</span>
          <span>איתנו</span>
        </div>

        <div className="d-flex gap-3 align-items-center">
          <div className="d-flex align-items-center gap-2" style={{
            backgroundColor: "white", color: "black", padding: "8px 16px", borderRadius: "20px", fontWeight: "bold", fontSize: "14px"
          }}>
            <span>ראשי</span>
            <span style={{ fontSize: "16px" }}>🏠</span>
          </div>
          
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2px" }}>
            <div style={{ width: "6px", height: "6px", backgroundColor: "#6C757D", borderRadius: "1px" }}></div>
            <div style={{ width: "6px", height: "6px", backgroundColor: "#6C757D", borderRadius: "1px" }}></div>
            <div style={{ width: "6px", height: "6px", backgroundColor: "#6C757D", borderRadius: "1px" }}></div>
            <div style={{ width: "6px", height: "6px", backgroundColor: "#6C757D", borderRadius: "1px" }}></div>
          </div>
        </div>

        <div className="d-flex gap-4">
          <span style={{ color: "#6C757D", fontSize: "20px" }}>🚗</span>
          <span style={{ color: "#6C757D", fontSize: "20px" }}>📋</span>
        </div>

      </div>
    </div>
  );
}