import React from 'react';
import Layout from '../components/layout';

const Contact = () => {
  return (
    <Layout>
      <main className="page">
        <section className="contact-page">
          <article className="contact-info">
            <h3>Want to get in touch ?</h3>
            <p>
              Semiotics farm-to-table ethical organic letterpress cray tousled
              austin la croix keytar art party normcore banjo you probabl
              haven't heard of them quinoa. Before they sold out snackwave yr
              tonx solarpunk stumptown XOXO chicharrones literally cardigan palo
              santo cred hexagon. Cliche quinoa tattooed hoodie mukbang.
              Asymmetrical glossier slow-carb craft beer succulents solarpunk
              plaid cold-pressed celiac shaman. JOMO vegan gluten-free raclette
              tofu la croix snackwave cupping forage taxidermy echo park.
            </p>
          </article>
          <article>
            <form action="" className="form contact-form">
              <div className="form-row">
                <label htmlFor="name">Your name</label>
                <input type="text" name="name" id="name" />
              </div>
              <div className="form-row">
                <label htmlFor="email">Your email</label>
                <input type="text" name="email" id="email" />
              </div>
              <div className="form-row">
                <label htmlFor="message">Your message</label>
                <textarea name="message" id="message" />
              </div>
              <button className="btn block">Send</button>
            </form>
          </article>
        </section>
      </main>
    </Layout>
  );
};
export default Contact;
