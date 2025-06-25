import React from 'react';

function Home() {
  return (
    <div className="container mt-4">
      <section className="mb-5 text-center">
        <h2>"Jewelry is a way of keeping memories alive."</h2>
        <p>Discover timeless elegance and sparkling designs that define your moment.</p>
      </section>

      <section className="mb-5">
        <h3 className="text-center mb-4">Featured Items</h3>
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <img src="https://source.unsplash.com/300x200/?diamond" className="card-img-top" alt="Featured 1" />
              <div className="card-body">
                <h5 className="card-title">Elegant Diamond Ring</h5>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img src="https://source.unsplash.com/300x200/?necklace" className="card-img-top" alt="Featured 2" />
              <div className="card-body">
                <h5 className="card-title">Gold Necklace</h5>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img src="https://source.unsplash.com/300x200/?earrings" className="card-img-top" alt="Featured 3" />
              <div className="card-body">
                <h5 className="card-title">Pearl Earrings</h5>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="text-center">
        <h3>About Us</h3>
        <p className="mt-3">
          At Jewel Store, we believe that jewelry is not just an accessory—it’s a statement. 
          Our mission is to bring you timeless, elegant, and meaningful jewelry that celebrates individuality and style. 
          Each piece in our collection is handpicked for its craftsmanship, beauty, and lasting value.
          Whether you're searching for a gift or a personal treasure, we promise exquisite quality and unparalleled customer service.
        </p>
      </section>
    </div>
  );
}

export default Home;