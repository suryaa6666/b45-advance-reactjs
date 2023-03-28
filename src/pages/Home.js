// import necessary react-bootstrap component
import { Container } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
// import hooks from react-router-dom here

function Home() {
  const navigate = useNavigate();
  // call that hooks here and store to variable

  // create function here for handle push to another pages
  function transitionWithTime() {
    setTimeout(() => {
      navigate("/about");
    }, 3000);
  }

  return (
    <Container className="text-center">
      <p className="h1">Home</p>
      <Link to={"/about"}>About</Link>
      <p>
        Cras sit amet mauris ac urna pellentesque rhoncus sed nec felis. Sed
        augue tortor, pretium euismod massa eu, fringilla viverra ante. Proin ut
        nisl neque. In varius nibh eget diam pharetra, sed gravida sem commodo.
        Proin in tortor tristique lorem dignissim elementum. Quisque gravida
        augue quis aliquam ultrices. Nullam risus est, malesuada vitae pretium
        eu, congue a magna. Orci varius natoque penatibus et magnis dis
        parturient montes, nascetur ridiculus mus. Donec et maximus tellus, sit
        amet hendrerit augue.
      </p>
      {/* code element here */}
      <button onClick={transitionWithTime}>Click saya</button>
    </Container>
  );
}

export default Home;
