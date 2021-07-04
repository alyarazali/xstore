AOS.init();

function upDate(previewPic) {
    document.getElementById('image').style.backgroundImage = 'url(' + previewPic.src + ')';
    document.getElementById("image").innerHTML = previewPic.alt;
}

function displayColour(element){
    document.getElementById("colour").innerHTML = element.title;
}

$('.owl-carousel').owlCarousel({
    // loop:true,
    margin:10,
    stagePadding:50,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        766:{
            items:3,
            nav:false
        },
        1000:{
            items:4,
            nav:true,
            loop:false
        }
    }
})


function getSelectedItem(size)
{
    document.getElementById("choosesize").text;    
    document.getElementById("displaysize").innerHTML = size.text;
}