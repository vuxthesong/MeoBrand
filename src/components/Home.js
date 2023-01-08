import banner from "../assets/img/banner1.jpg";
import Products from "./Products";

function Home() {
  return (
    <>
      <div className="card text-bg-dark border-0">
        <img
          src={banner}
          className="card-img rounded"
          alt="..."
          height="550px"
        />

        <div className="banner-text card-img-overlay d-flex flex-column align-items-start justify-content-center fw-bold ">
          <p className="card-title display-3">NEW SEASON ARRIVALS</p>
          <p className="card-title fs-3">CHECK OUT ALL THE TRENDS</p>
        </div>
      </div>

      <Products />
    </>
  );
}

export default Home;
