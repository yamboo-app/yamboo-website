import { ImageResponse } from "next/og";

export const alt =
  "Yamboo Tech - software, AI automation, and technology consulting";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background: "#f7f6f1",
          color: "#171717",
          display: "flex",
          height: "100%",
          justifyContent: "space-between",
          padding: "74px",
          width: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "34px",
            maxWidth: "760px",
          }}
        >
          <div
            style={{
              alignItems: "center",
              display: "flex",
              gap: "22px",
            }}
          >
            <div
              style={{
                alignItems: "center",
                background: "#171717",
                borderRadius: "12px",
                color: "#ffffff",
                display: "flex",
                fontSize: "30px",
                fontWeight: 800,
                height: "86px",
                justifyContent: "center",
                width: "86px",
              }}
            >
              YT
            </div>
            <div
              style={{
                fontSize: "34px",
                fontWeight: 800,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
              }}
            >
              Yamboo Tech
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: "76px",
              fontWeight: 800,
              letterSpacing: "-0.02em",
              lineHeight: 0.96,
            }}
          >
            <span>Software.</span>
            <span>AI automation.</span>
            <span>Technology consulting.</span>
          </div>
        </div>
        <div
          style={{
            alignItems: "stretch",
            background: "#171717",
            borderRadius: "16px",
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            height: "410px",
            padding: "28px",
            width: "290px",
          }}
        >
          {["Product", "AI", "Ops", "Cloud"].map((item, index) => (
            <div
              key={item}
              style={{
                alignItems: "center",
                background:
                  index === 0
                    ? "#c45a2c"
                    : index === 1
                      ? "#2f5f8f"
                      : index === 2
                        ? "#ffffff"
                        : "#f3e8dc",
                borderRadius: "10px",
                color: index === 2 || index === 3 ? "#171717" : "#ffffff",
                display: "flex",
                flex: 1,
                fontSize: "28px",
                fontWeight: 800,
                justifyContent: "center",
              }}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    ),
    size,
  );
}
