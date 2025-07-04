import React from 'react'
import './footer.css'

function Footer() {
  return (
    <footer id="footer">
      <div className="footer-top">
        <div className="container">
          <div className="row">
            {/* Coluna 1 - Informação e redes sociais */}
            <div className="col-lg-3 col-md-6 footer-info">
              <h3>Pacote Pro</h3>
              <p>
                A108 Adam Street <br />
                NY 535022, USA<br /><br />
                <strong>Phone:</strong> +1 5589 55488 55<br />
                <strong>Email:</strong> 5KZUk@example.com<br />
              </p>

              <div className="social-links mt-3">
{/*                 <a href="#" className="twitter"><i className="bx bxl-twitter"></i></a> */}
                <a href="https://www.facebook.com/mahomedakil.mahomedbashir/" target="_blank" rel="noopener noreferrer" className="facebook"><i className="bi bi-facebook"></i></a>
                <a href="https://www.instagram.com/mahomedakilmahomed/" target="_blank" rel="noopener noreferrer" className="instagram"><i className="bi bi-instagram"></i></a>
                <a href="https://www.linkedin.com/in/mahomed-akil-mahomed-bashir-3a5970314/" target="_blank" rel="noopener noreferrer" className="linkedin"><i className="bi bi-linkedin"></i></a>
                <a href="https://wa.me/258877937188" target="_blank" rel="noopener noreferrer" className="whatsapp"><i className="bi bi-whatsapp"></i></a>
              </div>
            </div>

            {/* Coluna 2 - Links úteis */}
            <div className="col-lg-2 col-md-6 footer-links">
              <h4>Useful Links</h4>
              <ul>
                <li><i className="bx bx-chevron-right"></i> <a href="#">Home</a></li>
                <li><i className="bx bx-chevron-right"></i> <a href="#">About us</a></li>
                <li><i className="bx bx-chevron-right"></i> <a href="#">Menu</a></li>
                <li><i className="bx bx-chevron-right"></i> <a href="#">Events</a></li>
                <li><i className="bx bx-chevron-right"></i> <a href="#">Gallery</a></li>
              </ul>
            </div>

            {/* Coluna 3 - Serviços */}
            <div className="col-lg-3 col-md-6 footer-links">
              <h4>Our Services</h4>
              <ul>
                <li><i className="bx bx-chevron-right"></i> <a href="#">Functions</a></li>
                <li><i className="bx bx-chevron-right"></i> <a href="#">Parties</a></li>
                <li><i className="bx bx-chevron-right"></i> <a href="#">Events</a></li>
                <li><i className="bx bx-chevron-right"></i> <a href="#">Weddings</a></li>
                <li><i className="bx bx-chevron-right"></i> <a href="#">Ceremony</a></li>
                <li><i className="bx bx-chevron-right"></i> <a href="#">Private Chef</a></li>
                <li><i className="bx bx-chevron-right"></i> <a href="#">Catering</a></li>
              </ul>
            </div>

            {/* Coluna 4 - Newsletter */}
            <div className="col-lg-4 col-md-6 footer-newsletter">
              <h4>Our Newsletter</h4>
              <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
              <form action="" method="post">
                <input type="email" name="email" placeholder="Your email" />
                <input type="submit" value="Subscribe" />
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Rodapé */}
      <div className="container">
        <div className="copyright">
          &copy; Copyright <strong><span>Pacote Pro</span></strong>. All Rights Reserved
        </div>
        <div className="credits">
          Designed by <a href="#">DStudio Technology</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
