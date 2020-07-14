
function visitSite(x){
    document.getElementById('changingButtons').innerHTML="<input type='button' onclick=\"location.href=" + x + "value='visit site' class='visitSite'/>"
    document.getElementById('changingButtons').style.display='block'
    document.getElementById('innovationform').style.display='none'

}

// function saronaVenturesDesc1() {
//     document.getElementById("changingDesc").innerHTML = "Sarona Ventures is a sector agnostic fund based in Tel Aviv investing in the most performant companies graduating the Sarona various programs. We help founders where they need us the most, through shifting their business from Product Market Fit into a global scale, exponentially growing venture."
//     document.getElementById("aboutSubChange").innerHTML = 'Sarona Ventures'
//     document.getElementById("saronaProgramsLogo").style.display = 'none;'
//     document.getElementById('changingButtons').style.display='none'
//     visitSite("'https://sarona.vc/';\"");
//     document.getElementById('saronaMediaLogo').style.display='none;'
//     document.getElementById("space").classList.remove("active");
//     document.getElementById("programs").classList.remove("active");
//     document.getElementById("media").classList.remove("active");
//     document.getElementById("ventures").classList.add("active");

//     // document.getElementById("ventures').style.filter = "none";



// }

function saronaVenturesDesc() {
    document.getElementById('innovationform').style.display='none'
    document.getElementById("changingDesc").innerHTML = "Sarona Ventures is a sector agnostic fund based in Tel Aviv investing in the most performant companies graduating the Sarona various programs. We help founders where they need us the most, through shifting their business from Product Market Fit into a global scale, exponentially growing venture."
    document.getElementById("aboutSubChange").innerHTML = 'Sarona Ventures'
    document.getElementById("saronaProgramsLogo").style.display = 'none'
    document.getElementById('changingButtons').style.display='block'
    // document.getElementById('changingButtons').innerHTML="<div>" + "<input type='button' onclick=\"location.href='https://sarona.vc/';\" value='Tel Aviv - HaArba\'s' class='visitSite'/>" + "<input type='button' onclick=\"location.href='https://sarona.vc/';\" value='Tel Aviv - Hahashmonaim' class='visitSite'/>" + "<input type='button' onclick=\"location.href='https://sarona.vc/';\" value='Kfar Saba' class='visitSite'/>" +"<input type='button' onclick=\"location.href='https://sarona.vc/';\" value='Haifa' class='visitSite'/>" + "</div>"
    visitSite("'https://sarona.vc/';\"");
    document.getElementById('saronaMediaLogo').style.display='none'
    document.getElementById("space").classList.remove("active");
    document.getElementById("programs").classList.remove("active");
    document.getElementById("media").classList.remove("active");
    document.getElementById("ventures").classList.add("active");
    document.getElementById("innovation").classList.remove("active");
    document.getElementById('post-message').style.display='none'

}

function saronaSpaceDesc() {
    document.getElementById('innovationform').style.display='none'
    document.getElementById("changingDesc").innerHTML = "Sarona Space is a shared, friendly, and affordable workspace located throughout Israel with locations in Tel Aviv, Kfar Saba, and Haifa. Spanned over 5k sqm we accommodate over 250 high-tech companies. Come for a tour we will be happy to host you."
    document.getElementById("aboutSubChange").innerHTML = 'Sarona Space'
    document.getElementById("saronaProgramsLogo").style.display = 'none'
    document.getElementById('changingButtons').style.display='block'
    // document.getElementById('changingButtons').innerHTML="<div>" + "<input type='button' onclick=\"location.href='https://sarona.vc/';\" value='Tel Aviv - HaArba\'s' class='visitSite'/>" + "<input type='button' onclick=\"location.href='https://sarona.vc/';\" value='Tel Aviv - Hahashmonaim' class='visitSite'/>" + "<input type='button' onclick=\"location.href='https://sarona.vc/';\" value='Kfar Saba' class='visitSite'/>" +"<input type='button' onclick=\"location.href='https://sarona.vc/';\" value='Haifa' class='visitSite'/>" + "</div>"
    visitSite("'http://saronaspace.com/';\"")
    document.getElementById('saronaMediaLogo').style.display='none'
    document.getElementById("ventures").classList.remove("active");
    document.getElementById("programs").classList.remove("active");
    document.getElementById("media").classList.remove("active");
    document.getElementById("space").classList.add("active");
    document.getElementById("innovation").classList.remove("active");
    document.getElementById('post-message').style.display='none'


    // document.getElementById("ventures").classList.toggle("active");
    // document.getElementById('space').style.filter = "none";


}

function saronaProgramsDesc() {
    document.getElementById('innovationform').style.display='none'
    document.getElementById("changingDesc").innerHTML = "Consisting of three unique initiatives: SigmaLabs, 365x Scale-up, and GreenUp City POC Accelerator. These programs range from three to six months and are built to accelerate and scale Israeli high-tech startups. Our programs are backed by a vast network of over 100 multinational corporates, integrators and resellers looking to partner with Israeli startup companies - with cumulative reach to hundreds of thousands of resellers and millions of businesses."
    document.getElementById("aboutSubChange").innerHTML = 'Sarona Programs'
    document.getElementById("saronaProgramsLogo").style.display = 'block'
    document.getElementById('changingButtons').style.display='none'
    document.getElementById('saronaMediaLogo').style.display='none'
    // document.getElementById("programs").classList.toggle("active");
    // document.getElementById('programs').style.filter = "none";
    document.getElementById("ventures").classList.remove("active");
    document.getElementById("space").classList.remove("active");
    document.getElementById("media").classList.remove("active");
    document.getElementById("programs").classList.add("active");
    document.getElementById("innovation").classList.remove("active");
    document.getElementById('post-message').style.display='none'


}

function saronaMediaDesc() {
    document.getElementById('innovationform').style.display='none'
    document.getElementById("changingDesc").innerHTML = "Geektime Media, is the largest tech media platform covering news, data and trends of the Israeli high-tech scene, with 10 years of historical coverage and over 2 million monthly readers."
    document.getElementById("aboutSubChange").innerHTML = 'Sarona Media'
    document.getElementById("saronaProgramsLogo").style.display = 'none'
    document.getElementById('saronaMediaLogo').style.display='block'
    document.getElementById('changingButtons').style.display='none'
    // document.getElementById("ventures").classList.toggle("active");
    // document.getElementById('media').style.filter = "none";
    document.getElementById("space").classList.remove("active");
    document.getElementById("programs").classList.remove("active");
    document.getElementById("ventures").classList.remove("active");
    document.getElementById("media").classList.add("active");
    document.getElementById("innovation").classList.remove("active");
    document.getElementById('post-message').style.display='none'


}

function saronaInnovationDesc() {
    document.getElementById("changingDesc").innerHTML = "Serving forward thinking corporations towards the Starup Nation startup technologies and innovations. Leveraging the Sarona ecosystem and the strong foothold within the Startup Nation, providing our Corporate Partners with a powerful platform to perform partnerships, Investments and acquisitions with optimized ROI. <br><br> <p style='font-weight:bold' >For more information schedule an introduction call:</p>"
    document.getElementById("aboutSubChange").innerHTML = 'Sarona Innovation'
    document.getElementById("saronaProgramsLogo").style.display = 'none'
    document.getElementById('saronaMediaLogo').style.display='none'
    document.getElementById('innovationform').style.display='block'
    document.getElementById('post-message').style.display='block'
    // document.getElementById("ventures").classList.toggle("active");
    // document.getElementById('media').style.filter = "none";
    document.getElementById("space").classList.remove("active");
    document.getElementById("programs").classList.remove("active");
    document.getElementById("ventures").classList.remove("active");
    document.getElementById("media").classList.remove("active");
    document.getElementById("innovation").classList.add("active");
    showForm1()
}

function showForm1() {
    document.getElementById("innovationform").style.display = "flex";
}



function myFunction(x) {
    x.classList.toggle("change");

    var y = document.getElementById("burgerContent");
    if (y.style.display === "inline-block") {
        y.style.display = "none";
    } else {
        y.style.display = "inline-block";
    }
}



$(document).ready(function(){
  $('.carousel-partners-item').slick({
    infinite: true,
    centerMode: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
  });
});

$(document).ready(function(){
  $('.carousel-ecosystem-item').slick({
    infinite: true,
    slidesToShow: 4,
    centerMode: true,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
  });
});






// $('#carousel-partners').carousel({
//   interval: 40000
// });

// $('.carousel .item').each(function(){
//   var next = $(this).next();
//   if (!next.length) {
//     next = $(this).siblings(':first');
//   }
//   next.children(':first-child').clone().appendTo($(this));

//   if (next.next().length>0) {

//       next.next().children(':first-child').clone().appendTo($(this)).addClass('rightest');

//   }
//   else {
//       $(this).siblings(':first').children(':first-child').clone().appendTo($(this));

//   }
// });









// $(document).ready(function() {
//   // Test for placeholder support
//     $.support.placeholder = (function(){
//         var i = document.createElement('input');
//         return 'placeholder' in i;
//     })();

//     // Hide labels by default if placeholders are supported
//     if($.support.placeholder) {
//         $('.form-label').each(function(){
//             $(this).addClass('js-hide-label');
//         });

//         // Code for adding/removing classes here
//         $('.form-group').find('input, textarea').on('keyup blur focus', function(e){

//             // Cache our selectors
//             var $this = $(this),
//                 $label = $this.parent().find("label");

//             switch(e.type) {
//               case 'keyup': {
//                  $label.toggleClass('js-hide-label', $this.val() == '');
//               } break;
//               case 'blur': {
//                 if( $this.val() == '' ) {
//                     $label.addClass('js-hide-label');
//                 } else {
//                     $label.removeClass('js-hide-label').addClass('js-unhighlight-label');
//                 }
//               } break;
//               case 'focus': {
//                 if( $this.val() !== '' ) {
//                     $label.removeClass('js-unhighlight-label');
//                 }
//               } break;
//               default: break;
//             }
//             // previous implementation with ifs
//             /*if (e.type == 'keyup') {
//                 if( $this.val() == '' ) {
//                     $parent.addClass('js-hide-label');
//                 } else {
//                     $parent.removeClass('js-hide-label');
//                 }
//             }
//             else if (e.type == 'blur') {
//                 if( $this.val() == '' ) {
//                     $parent.addClass('js-hide-label');
//                 }
//                 else {
//                     $parent.removeClass('js-hide-label').addClass('js-unhighlight-label');
//                 }
//             }
//             else if (e.type == 'focus') {
//                 if( $this.val() !== '' ) {
//                     $parent.removeClass('js-unhighlight-label');
//                 }
//             }*/
//         });
//     }
// });
