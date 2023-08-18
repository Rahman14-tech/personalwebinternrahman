import home1 from "../assets/home1.jpg";
import sheet2 from "../assets/sheet2.jpg";
import formpengisian from "../assets/formpengisian.jpg";
const Projects = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <main className="container">
      <p className="pformat">
        <ul>
          <li>
            <a
              href="https://rahmanecommerce.netlify.app/"
              className="notextdecor"
            >
              <h3 className="autoMargin">Rahman E-Commerce</h3>
            </a>
          </li>
          A React-based application that is e-commerce. The project implements
          redux, react-router, hooks, google authentication, <br></br>hooks,
          etc. In addition, the project is already mobile responsive and also
          uses tailwind CSS. I create this app while doing<br></br> my
          university courses and because of that if there are any things to
          improve / advice feel free to message me. <br></br>In addition, the
          data is received by using Axios from the fake store API.(NOTE: the app
          doesn't use a database so I can <br></br>deploy it free without cost)
          <br></br>
          <br></br>
          <li>
            <h3 className="autoMargin">YourTalent</h3>
          </li>
          Django-based project (capstone/final project) for my certification at
          Harvard CS50 Web Development. The capabilities <br></br> of the
          websites are authentication, verification, CRUD, and mobile
          responsivity. First, the authentication part checks <br></br> using
          the login system to validate the user. The second part there is
          verification which appears after the user register,<br></br> the
          verification code is sent to the email of the user. The third part is
          the CRUD operation that works on the database <br></br>based on the
          user action. The last one is responsivity, it can be seen that the
          project is mobile responsive.
          <br></br>
          <br></br>
          <iframe
            src="https://www.youtube.com/embed/JX7QGK9x00g"
            id="the_vid"
            style={{
              border: "0px #ffffff none",
              width: "100%",
              height: "30rem",
            }}
            name="myiFrame"
            scrolling="no"
            frameborder="1"
            marginheight="0px"
            marginwidth="0px"
            allowfullscreen
          ></iframe>
          <br></br>
          <br></br>
          <li>
            <h3 className="autoMargin">Simple Manage</h3>
          </li>
          A Django-based project integrated with React user interface. The
          project implements redux, react-router, hooks, API,<br></br> and
          recharts for the graph. The App consists of home, sheet1, sheet2,
          update buy, add sales, form, and generate excel.<br></br> At home page
          there are graphs that represent the total sales and buy, also there is
          a pie chart that represents the items<br></br> that have been sold
          based on the category. Then, Sheet1 consist of data for the item that
          have been bought and sheet2<br></br> consist of the data of buy and
          also sales. Also, for each data inside of sheet1 or sheet2 there are
          update that will update <br></br> some data if the user mistakenly
          input some data into the database. Not to forget, the add sales will
          add some sales data <br></br> from the sheet1 if the user have filled
          the sales data, then the data from sheet1 will be moved into the
          sheet2. Lastly, the <br></br>form is the place to insert data into the
          sheet1 and the generate excel has the functionality to create excel
          file based on <br></br>the data inside of the database.
          <br></br>
          <br></br>
          <img src={home1} style={{ height: "25rem" }}></img>
          <br></br>
          <br></br>
          <img src={sheet2} style={{ height: "25rem" }}></img>
          <br></br>
          <br></br>
          <img src={formpengisian} style={{ height: "25rem" }}></img>
          <br></br>
          <br></br>
          <li>
            <a
              href="https://github.com/Rahman14-tech/JimProject"
              className="notextdecor"
            >
              <h3 className="autoMargin">JimSkuy</h3>
            </a>
          </li>
          A Laravel-based application includes authentication, authorization,
          JWT, API, and CRUD. This application aims to make <br></br> exercises
          accessible to everyone without any costs required. The application was
          built with my colleague and my role <br></br>in building the
          application are making the login, register, database design, selection
          page, exercise detail page, jwt,<br></br> and API.
        </ul>
      </p>
    </main>
  );
};
export default Projects;
