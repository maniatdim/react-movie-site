import React from 'react';
import { Outlet, Link }  from 'react-router-dom';

const Footer = () => {
  return (
    <>
      
<footer class="bg-dark text-center text-white">
 
  <div class="container p-4">
    
    <section class="mb-4">
     
      <Link class="btn btn-outline-light btn-floating m-1" to="#!" role="button"
        ><i class="fab fa-facebook-f"></i></Link>

      
      <Link class="btn btn-outline-light btn-floating m-1" to="#!" role="button"
        ><i class="fab fa-twitter"></i
      ></Link>

      
      <Link class="btn btn-outline-light btn-floating m-1" to="#!" role="button"
        ><i class="fab fa-google"></i
      ></Link>

   
      <Link class="btn btn-outline-light btn-floating m-1" to="#!" role="button"
        ><i class="fab fa-instagram"></i>
      </Link>

      <Link class="btn btn-outline-light btn-floating m-1" to="#!" role="button"
        ><i class="fab fa-linkedin-in"></i></Link>

      <Link class="btn btn-outline-light btn-floating m-1" to="#!" role="button"
        ><i class="fab fa-github"></i></Link>
    </section>
    
    <section class="">
      <form action="">
       
        <div class="row d-flex justify-content-center">
         
          <div class="col-auto">
            <p class="pt-2">
              <strong>Sign up for our newsletter</strong>
            </p>
          </div>
         

         
          <div class="col-md-5 col-12">
           
            <div class="form-outline form-white mb-4">
              <input type="email" id="form5Example21" class="form-control" />
              <label class="form-label" for="form5Example21">Email address</label>
            </div>
          </div>
         

         
          <div class="col-auto">
           
            <button type="submit" class="btn btn-outline-light mb-4">
              Subscribe
            </button>
          </div>
          
        </div>
       
      </form>
    </section>
  
    <section class="mb-4">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt distinctio earum
        repellat quaerat voluptatibus placeat nam, commodi optio pariatur est quia magnam
        eum harum corrupti dicta, aliquam sequi voluptate quas.
      </p>
    </section>
   

    
    <section class="">
     
      <div class="row">
      
        <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h5 class="text-uppercase">Links</h5>

          <ul class="list-unstyled mb-0">
            <li>
              <Link to="#!" class="text-white">Link 1</Link>
            </li>
            <li>
              <Link to="#!" class="text-white">Link 2</Link>
            </li>
            <li>
              <Link to="#!" class="text-white">Link 3</Link>
            </li>
            <li>
              <Link to="#!" class="text-white">Link 4</Link>
            </li>
          </ul>
        </div>
      
        <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h5 class="text-uppercase">Links</h5>

          <ul class="list-unstyled mb-0">
            <li>
              <Link to="#!" class="text-white">Link 1</Link>
            </li>
            <li>
              <Link to="#!" class="text-white">Link 2</Link>
            </li>
            <li>
              <Link to="#!" class="text-white">Link 3</Link>
            </li>
            <li>
              <Link to="#!" class="text-white">Link 4</Link>
            </li>
          </ul>
        </div>
       
        <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h5 class="text-uppercase">Links</h5>

          <ul class="list-unstyled mb-0">
            <li>
              <Link to="#!" class="text-white">Link 1</Link>
            </li>
            <li>
              <Link to="#!" class="text-white">Link 2</Link>
            </li>
            <li>
              <Link to="#!" class="text-white">Link 3</Link>
            </li>
            <li>
              <Link to="#!" class="text-white">Link 4</Link>
            </li>
          </ul>
        </div>
       
        <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h5 class="text-uppercase">Links</h5>

          <ul class="list-unstyled mb-0">
            <li>
              <Link to="#!" class="text-white">Link 1</Link>
            </li>
            <li>
              <Link to="#!" class="text-white">Link 2</Link>
            </li>
            <li>
              <Link to="#!" class="text-white">Link 3</Link>
            </li>
            <li>
              <Link to="#!" class="text-white">Link 4</Link>
            </li>
          </ul>
        </div>
       
      </div>
     
    </section>
    
  </div>
 

 
  
</footer>

    </>
  );
}

export default Footer;