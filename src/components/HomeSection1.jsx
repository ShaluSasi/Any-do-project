import Button from "react-bootstrap/Button";
function HomeSection1() {
  return (
    <>
      <section className="light-grey">
        <div className="wrap">
          <div
            className="grid_1"
            style={{ marginTop: "5%", paddingLeft: "80px" }}
          >
            <h1 className="h1-style">
              A to-do list you’d <br></br> actually use.
            </h1>
            <h6
              style={{
                fontSize: "26px",
                letterSpacing: "0.8px",
                lineHeight: "1.6",
                marginBottom: "30px",
                color: "#000",
                fontFamily:
                  "Inter, HelveticaNeue, Arial, Helvetica, sans-serif",
              }}
            >
              With award winning design and powerful features, Any.do is the
              to-do list you would actually stick to. Designed to help you get
              organized, achieve your goals and never forget a thing.
            </h6>
            <Button
              style={{
                borderRadius: "20px",
                backgroundColor: "#0083ff",
                color: "white",
              }}
            >
              <b> Get Started - It's Free!</b>
            </Button>
          </div>
          <div className="grid_1">
            <img
              src="/main-image@2x.jpg"
              height="762"
              width="457"
              alt="Any.do to-do list app for iPhone"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default HomeSection1;
