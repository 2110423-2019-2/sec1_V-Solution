import React from 'react';
import '../styles/_footer.css'

function Footerbar() {
    return (

        <footer class="page-footer font-medium pt-4">
          <div class="container container-footer">
              
            <ul class="list-unstyled list-inline text-center">
              <li class="list-inline-item">
                <a class="btn-floating btn-fb mx-4">
                  <i class="fab fa-facebook-f"> </i>
                </a>
              </li>
              <li class="list-inline-item">
                <a class="btn-floating btn-tw mx-4">
                  <i class="fab fa-line"> </i>
                </a>
              </li>
              <li class="list-inline-item">
                <a class="btn-floating btn-gplus mx-4">
                  <i class="fab fa-twitter"> </i>
                </a>
              </li>
              <li class="list-inline-item">
                <a class="btn-floating btn-li mx-4">
                  <i class="fab fa-linkedin-in"> </i>
                </a>
              </li>
              <li class="list-inline-item">
                <a class="btn-floating btn-dribbble mx-4">
                  <i class="fab fa-instagram"> </i>
                </a>
              </li>
            </ul>

        
          </div>
          <div class="footer-copyright text-center py-3">
              ©Copyright 2019 - 2020. All right reserved. Powered by V-Solution
          </div>
        
        </footer>     
        // <body>
        //     <footer>
        //         <section className="ft-contact">
        //             <p className="ft-title">Contact Us</p>
        //             <p>Tel: 08X-XXX-XXXX Fax: 08X-XXX-XXXX</p>
        //             <div className="ft-social">
        //                 <ul>
        //                     <li>facebook</li>
        //                     <li>twitter</li>
        //                     <li>google</li>
        //                     <li>instagram</li>
        //                 </ul>
        //             </div>
        //         </section>
        //         <section className="ft-copyright">
        //             <p>Copyright 2019 - 2020. All right reserved. Powered by V-Solution</p>
        //         </section>
        //     </footer>
        // </body>
    );
}

export default Footerbar;