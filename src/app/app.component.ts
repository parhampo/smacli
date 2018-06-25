import { Component } from '@angular/core';

@Component({ 
  selector: 'app-root',
  styleUrls:['./app.component.css'],
  template: `<span class="glyphicon glyphicon-refresh glyphicon-spin spinner" *ngIf="loading"></span>
  
  <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
      <a class="navbar-brand" href="#">Show Me Auctions</a>
      <button class="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
    
      <div class="collapse navbar-collapse" id="navbarsExampleDefault">
        <ul class="navbar-nav mr-auto">
           <li routerLinkActive="active" class="nav-item active">
              <a [routerLink]="['/whysell']">Canada</a>
          </li>
          <li routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }">
            <a [routerLink]="['/nextsales']">USA</a>
        </li>
          <li class="nav-item">
            <a [routerLink]="['/defaultauction']">Plans</a>
          </li>
          <li class="nav-item">
            <a [routerLink]="['/products', '0']">Post Your Auction</a>
          </li>
          <li class="nav-item">
          <a href="../payform.html">payment</a>
        </li>
        </ul>
        <form class="form-inline mt-2 mt-md-0">
          <input class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search">
          <span class="glyphicon glyphicon-search"></span>
        </form>
      </div>
    </nav>
<router-outlet></router-outlet>

<footer id="footer">
<div class="container-fluid">
    <div class="row">
        <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
            <div class="footer-padder">
                <h5>Email</h5>
                <p class="emailtxt"><span class="glyphicon glyphicon-envelope" aria-hidden="true"></span>
          <a href="mailto:info@showmeauctions.com">info@showmeauctions.com</a></p>
              </div><!-- /.footer-padder -->
              <div class="footer-padder">
                <h5>Telephone</h5>
        <p><span class="glyphicon glyphicon-phone-alt" aria-hidden="true"></span>(613)970-0024<br/>
          <span class="glyphicon glyphicon-phone-alt" aria-hidden="true"></span>(416)700-2538</p>
             </div><!-- /.footer-padder -->
          </div><!-- /.col-lg-4 -->
          <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
            <div class="footer-logo">
              <figure class="responsive"><a href="http://www.showmeauctions.com">
              <img class="footer-badge" src="assets/images/smalogo2.jpg" alt="ShowMeAuctions.com"></a>
            </figure>
              </div><!-- /.footer-padder -->
          </div><!-- /.col-lg-4 -->
          <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
            <div class="footer-padder2">
              <h5>Social</h5>
                <ul class="list-inline">
                    <li class="social"><a href="https://www.facebook.com/Husqeecom-693406797450591/" target="_blank" class="icon-facebook"></a></li>
                      <li class="social"><a href="https://twitter.com/" target="_blank" class="icon-twitter"></a></li>
                      <li class="social"><a href="https://www.instagram.com/husqee_dot_com/" target="_blank" class="icon-instagram"></a></li>
                      <li class="social"><a href="https://www.pinterest.com/" target="_blank" class="icon-pinterest"></a></li>
                   </ul>
              </div><!-- /.footer-padder -->
              <div class="footer-padder2">
                <h5>Signup</h5>
                  <div id="mc_embed_signup">
                    <form action="" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate="">
                  <input class="underline" type="email" id="mce-EMAIL" name="EMAIL" value="" placeholder="enter your@email"></form>
                  </div>
              </div><!-- /.footer-padder -->
          </div><!-- /.col-lg-4 -->
          <div id="credits" class="col-xs-12">
          <p class="terms">©2017 ShowMeAuctions.com&nbsp;&nbsp;&nbsp;&nbsp;
          <a href="http://wwww.showmeauctions.com">FAQs</a>&nbsp;&nbsp;&nbsp;&nbsp;
          
          </p>
        </div><!-- /.col-xs-12 -->
       </div><!-- /.row -->
</div><!-- /.container-fluid -->


</footer>

`
})
export class AppComponent {

}
