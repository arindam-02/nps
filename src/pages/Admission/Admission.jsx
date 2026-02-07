import React from "react";
import Layout from "../../components/Layout/Layout";
import { Link } from "react-router-dom";

const Admission = () => {
  return (
    <Layout>
      <section
        className="hero-wrap hero-wrap-2"
        style={{
          backgroundImage: "url('/assets/images/book_breadcrumbs.jpg')",
        }}
      >
        <div className="overlay"></div>
        <div className="container">
          <div className="row no-gutters slider-text align-items-center justify-content-center">
            <div className="col-md-9 text-center">
              <h1 className="mb-2 bread">Admission</h1>
              <p className="breadcrumbs">
                <span className="mr-2">
                  <Link to="/">
                    Home <i className="ion-ios-arrow-forward"></i>
                  </Link>
                </span>
                <span>
                  Admission <i className="ion-ios-arrow-forward"></i>
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="ftco-section contact-section">
        <div className="container ">
          <div className="row d-flex mb-5 contact-info justify-content-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
            fugit voluptatem, repellat officia nisi, quasi corporis voluptatibus
            doloremque sunt similique quas deserunt, debitis impedit atque
            recusandae itaque molestiae alias praesentium! Eligendi quas nisi,
            mollitia debitis laborum id modi, et iste voluptatum dolores
            laudantium ipsum. Facilis est expedita voluptatibus minus debitis
            odio voluptates doloremque eaque, consequuntur quis optio excepturi,
            magni voluptatum commodi pariatur nihil eius velit! Laboriosam omnis
            error a quo, dolorum fugiat officiis non rerum explicabo ratione
            maiores ad atque, velit minus similique? Adipisci hic dignissimos
            facilis aperiam error beatae. Laborum ratione architecto deserunt
            in. Fugiat laudantium ex reprehenderit, sapiente itaque minima
            suscipit fuga sed eveniet dolores minus eos maiores, hic error?
            Distinctio accusamus soluta voluptas ratione? In debitis tempore ea
            eveniet.
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Admission;
