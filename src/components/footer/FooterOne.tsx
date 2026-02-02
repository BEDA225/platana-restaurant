import React from "react";

function FooterOne() {
  return (
    <div>
      <>
        {/* rts footer one area start */}
        <div className="rts-footer-area pt--80 bg_light-1">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="footer-main-content-wrapper pb--70 pb_sm--30">
                  {/* single footer area wrapper */}
                  <div className="single-footer-wized">
                    <h3 className="footer-title">Platana</h3>
                    <div className="call-area">
                      <div className="icon">
                        <i className="fa-solid fa-phone-rotary" />
                      </div>
                      <div className="info">
                        <span>Des questions? Appelez-nous 24h/24 et 7j/7</span>
                        <a href="#" className="number">
                          +1 (438) 380-5223
                        </a>
                      </div>
                    </div>
                    <div className="opening-hour">
                      <div className="single">
                        <p>
                          Lundi - Samedi : <span>11:00 - 23:00</span>
                        </p>
                      </div>
                      <div className="single">
                        <p>
                          Dimanche : <span>12:00 - 20:00</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* single footer area wrapper */}
                  {/* single footer area wrapper */}
                  <div className="single-footer-wized">
                    <h3 className="footer-title">Nous joindre</h3>
                    <div className="footer-nav">
                      <ul>
                        <li>
                          <a
                            href="https://www.google.com/maps/dir//Restaurant+Le+Platana,+361+BernardO,+Montr%C3%A9al,+QC+H2V+1T6/@45.4516393,-73.5971187,14.5z/data=!4m8!4m7!1m0!1m5!1m1!1s0x4cc9194929f9f9cb:0xf8d2141950db4b1d!2m2!1d-73.605914!2d45.5235196?entry=ttu&g_ep=EgoyMDI2MDEyOC4wIKXMDSoKLDEwMDc5MjA2OUgBUAM%3D"
                            target="_blank"
                          >
                            Itinéraire
                          </a>
                        </li>
                        <li>
                          <a href="#">Formulaire de contact</a>
                        </li>
                        <li>
                          <a href="#">Reserver une table</a>
                        </li>
                        <li>
                          <a href="#">Centre d'assistance</a>
                        </li>
                        <li>
                          <a href="#">Service traiteur</a>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* single footer area wrapper */}
                  {/* single footer area wrapper */}
                  <div className="single-footer-wized">
                    <h3 className="footer-title">Liens utiles</h3>
                    <div className="footer-nav">
                      <ul>
                        <li>
                          <a href="#">Passer une commande</a>
                        </li>
                        <li>
                          <a href="#">Annulation &amp; Retours</a>
                        </li>
                        <li>
                          <a href="#">Signaler un problème</a>
                        </li>
                        <li>
                          <a href="#">Paiements</a>
                        </li>
                        <li>
                          <a href="#">Livraison</a>
                        </li>
                        <li>
                          <a href="#">FAQ</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* single footer area wrapper */}
                  {/* single footer area wrapper */}
                  <div className="single-footer-wized">
                    <h3 className="footer-title">Notre infolettre</h3>
                    <p className="disc-news-letter">
                      Abonnez-vous pour recevoir <br /> les nouvelles arrivées
                      et autres réductions
                    </p>
                    <form className="footersubscribe-form" action="#">
                      <input
                        type="email"
                        placeholder="Votre adresse e-mail"
                        required
                      />
                      <button className="rts-btn btn-primary">S'abonner</button>
                    </form>
                    <p className="dsic">
                      Je souhaite recevoir des nouvelles et des offres spéciales
                    </p>
                  </div>
                  {/* single footer area wrapper */}
                </div>
                <div className="social-and-payment-area-wrapper">
                  <div className="social-one-wrapper">
                    <span>Suivez-nous :</span>
                    <ul>
                      <li>
                        <a href="#">
                          <i className="fa-brands fa-facebook-f" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa-brands fa-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa-brands fa-youtube" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa-brands fa-whatsapp" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa-brands fa-instagram" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="payment-access">
                    <span>Paiements sécurisés :</span>
                    <img src="assets/images/payment/01.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* rts footer one area end */}
        {/* rts copyright-area start */}
        <div className="rts-copyright-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="copyright-between-1">
                  <p className="disc">
                    Copyright {new Date().getFullYear()}{" "}
                    <a href="#">&copy;Platana</a>. Tous droits réservés.
                  </p>
                  {/* <a href="#" className="playstore-app-area">
                    <span>Download App</span>
                    <img src="assets/images/payment/02.png" alt="" />
                    <img src="assets/images/payment/03.png" alt="" />
                  </a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* rts copyright-area end */}
      </>
    </div>
  );
}

export default FooterOne;
