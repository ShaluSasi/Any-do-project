import Button from "react-bootstrap/Button";
function HomeSection2() {
  return (
    <>
      <section>
        <div className="wrap">
          <div
            className="grid_1"
            style={{ marginTop: "5%", paddingLeft: "80px" }}
          >
            <img
              src="/Lists.png"
              height="411"
              width="400"
              alt="Managing and sharing list on Any.do"
            />
          </div>
          <div
            className="grid_1"
            style={{ marginTop: "5%", paddingRight: "80px" }}
          >
            <h4 style={{ color: "grey" }}>ORGANIZE</h4>{" "}
            <h2 style={{ fontWeight: "bold" }}>Run your life like a pro</h2>{" "}
            <p
              style={{
                fontSize: "24px",
                letterSpacing: "0.8px",
                lineHeight: "1.6",
                marginRight: "30px",
                color: "#000",
                fontFamily:
                  "Inter, HelveticaNeue, Arial, Helvetica, sans-serif",
              }}
            >
              Organize all your to-do’s in lists and projects. Color tag them to
              set priorities and categories. Boost your productivity with notes,
              subtasks and attachments. Get more done with shared lists and
              assigned tasks.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomeSection2;
