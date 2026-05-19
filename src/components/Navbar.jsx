import { useLocation, useNavigate } from "react-router-dom";

const tabs = [
  { path: "/",            icon: "🏠", label: "Home"     },
  { path: "/donors",      icon: "🩸", label: "Donors"   },
  { path: "/request",    icon: "🏥", label: "Requests" },
  { path: "/profile",     icon: "👤", label: "Profile"  },
  { path: "/newRequest", icon: "➕", label: "Request"  },
];

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <>
      {/*Header */}
      <div style={{
        position: "fixed", top: 0, left: "50%", transform: "translateX(-50%)",
        width: "100%", maxWidth: 448, zIndex: 20,
        background: "linear-gradient(135deg, #1a0505 0%, #0d0d0f 100%)",
        borderBottom: "1px solid #2a0a0a", padding: "16px 20px"
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <span style={{ fontSize: "1.6rem" }}>🩸</span>
          <div>
            <div style={{ fontSize: "1.2rem", fontWeight: 800 }}>
              Blood<span style={{ color: "#e53e3e" }}>Link</span>
            </div>
            <div style={{ fontSize: "0.7rem", color: "#666" }}>
              Connecting donors · Saving lives
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Nav */}
      <div style={{
        position: "fixed", bottom: 0, left: "50%", transform: "translateX(-50%)",
        width: "100%", maxWidth: 448, zIndex: 20,
        background: "#0d0d0f", borderTop: "1px solid #2a0a0a",
        display: "flex"
      }}>
        {tabs.map(tab => {
          const isActive = location.pathname === tab.path;
          return (
            <button key={tab.path}
              onClick={() => navigate(tab.path)}
              style={{
                flex: 1, padding: "10px 0 8px", background: "none",
                border: "none", cursor: "pointer",
                display: "flex", flexDirection: "column",
                alignItems: "center", gap: 2
              }}>
              <span style={{ fontSize: "1.2rem", opacity: isActive ? 1 : 0.4 }}>
                {tab.icon}
              </span>
              <span style={{
                fontSize: "0.6rem", fontWeight: 700, letterSpacing: "0.03em",
                color: isActive ? "#e53e3e" : "#555"
              }}>
                {tab.label.toUpperCase()}
              </span>
              {isActive && (
                <div style={{
                  width: 20, height: 2,
                  background: "#e53e3e", borderRadius: 1
                }} />
              )}
            </button>
          );
        })}
      </div>
    </>
  );
}