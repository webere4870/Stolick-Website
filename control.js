let root = document.documentElement;
if(window.innerWidth <= 500)
{
    let height = window.innerHeight
    root.style.setProperty('--mobileHeight', height + "px");
}

addEventListener('resize', (event) => 
{
    console.log("resized")
    if(window.innerWidth <= 500)
    {
        let height = window.innerHeight
        root.style.setProperty('--mobileHeight', height + "px");
    }
})

$().ready(()=>
{

    function scaleTower()
    {
        let id = $('.mover:nth-of-type(3)').attr("id")
        let newValue = ""
        for(let counter = 0; counter < id.length; counter++)
        {
            if(Number.isInteger(parseInt(id[counter])))
            {
                newValue += id[counter]
            }
        }
        $("#scaleTower").attr("id", "")
        $(`.tower:nth-of-type(${newValue})`).attr("id", "scaleTower")
    }

    let string = `<div class="slideBlock">
    <div class="rowFlex" style="justify-content: flex-start;">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#6610f2" class="bi bi-clock-history" viewBox="0 0 16 16">
            <path d="M8.515 1.019A7 7 0 0 0 8 1V0a8 8 0 0 1 .589.022l-.074.997zm2.004.45a7.003 7.003 0 0 0-.985-.299l.219-.976c.383.086.76.2 1.126.342l-.36.933zm1.37.71a7.01 7.01 0 0 0-.439-.27l.493-.87a8.025 8.025 0 0 1 .979.654l-.615.789a6.996 6.996 0 0 0-.418-.302zm1.834 1.79a6.99 6.99 0 0 0-.653-.796l.724-.69c.27.285.52.59.747.91l-.818.576zm.744 1.352a7.08 7.08 0 0 0-.214-.468l.893-.45a7.976 7.976 0 0 1 .45 1.088l-.95.313a7.023 7.023 0 0 0-.179-.483zm.53 2.507a6.991 6.991 0 0 0-.1-1.025l.985-.17c.067.386.106.778.116 1.17l-1 .025zm-.131 1.538c.033-.17.06-.339.081-.51l.993.123a7.957 7.957 0 0 1-.23 1.155l-.964-.267c.046-.165.086-.332.12-.501zm-.952 2.379c.184-.29.346-.594.486-.908l.914.405c-.16.36-.345.706-.555 1.038l-.845-.535zm-.964 1.205c.122-.122.239-.248.35-.378l.758.653a8.073 8.073 0 0 1-.401.432l-.707-.707z"/>
            <path d="M8 1a7 7 0 1 0 4.95 11.95l.707.707A8.001 8.001 0 1 1 8 0v1z"/>
            <path d="M7.5 3a.5.5 0 0 1 .5.5v5.21l3.248 1.856a.5.5 0 0 1-.496.868l-3.5-2A.5.5 0 0 1 7 9V3.5a.5.5 0 0 1 .5-.5z"/>
          </svg>
        <p style="margin-left: 8px;">January 20, 2020</p>
    </div>
    <h1 class="homeLetters2">some field trip.</h1>
    <button class="homePillBtn" style="box-shadow: 0 0 10px gray; margin-left: 0;" >Read More</button>
</div>`

    $('#biggerBoy').on('click', "button",(evt)=>
    {
        /*console.log("djsa")
        $("#gradientFollow").toggleClass("gradientStretch")
        setTimeout(()=>
        {
            $("#gradientFollow").css("transition", "all .25s linear")
            $("#gradientFollow").toggleClass("gradientDown")
            
        }, 400)
        $("#gradientFollow .colFlex").toggle(500)
        $("body").css("height", "100vh")
        $("body").css("overflow", "hidden")
        $("#closer").toggle(250)*/
    })

    $('#su1').click((evt)=>
    {
        $('.progressDisplays').css("display", "none")
        $('#teachingPage .jFix > div:nth-of-type(1)').fadeToggle(700)
        $('#teachingPage .jFix > div:nth-of-type(1)').css("display", "flex")
    })
    $('#su2').click((evt)=>
    {
        $('.progressDisplays').css("display", "none")
        $('#teachingPage .jFix > div:nth-of-type(2)').fadeToggle(700)
        $('#teachingPage .jFix > div:nth-of-type(2)').css("display", "flex")

    })
    $('#su3').click((evt)=>
    {
        $('.progressDisplays').css("display", "none")
        $('#teachingPage .jFix > div:nth-of-type(3)').fadeToggle(700)
        $('#teachingPage .jFix > div:nth-of-type(3)').css("display", "flex")
    })
    $('#su4').click((evt)=>
    {
        console.log(evt.currentTarget)
        $('.progressDisplays').css("display", "none")
        $('#teachingPage .jFix > div:nth-of-type(4)').fadeToggle(700)
        $('#teachingPage .jFix > div:nth-of-type(4)').css("display", "flex")
    })

    let lastRemoved = $("<div id='block6' class='mover'>"+ string + "</div>")
    $('#clickerLeft').click((evt)=>
    {
        $('#biggerBoy').prepend(lastRemoved)
        lastRemoved = $('.mover:last-of-type')
        $('.mover:last-of-type').remove()
        scaleTower()
    })
    $('#clicker').click((evt)=>
    {
        $('#biggerBoy').append(lastRemoved)
        let temp = $('.mover:nth-of-type(1)')
        lastRemoved = temp
        $('.mover:nth-of-type(1)').remove()
        scaleTower()
        
    })

    $('.hamburger').on('click',(evt)=>
    {
        console.log("here")
        evt.stopPropagation()
        $(".mobileNavigation").slideToggle(1000);
    })

    $('.cancelForm').click((evt)=>
    {
        $('.formCover').toggle(500)
    })

    $('.homePillBtn').click((evt)=>
    {
        console.log("Hello")
    })

    $('.openForm').click((evt)=>
    {
        $('.formCover').toggle(500)
    })
    $('.backBtn').click((evt)=>
    {
        history.back()
    })

    $(".iframe").click((evt)=>
    {
        $('.xBtn').toggle(400)
        $("." + evt.target.id).toggle(400)
    })



    $('.xBtn').click((evt)=>
    {
        $('.xBtn').toggle(400)
        $('.courses').toggle(400)
    })

    // $('#work').click((evt)=>
    // {
    //   evt.preventDefault()
    //   $("#dd1").toggle(300)
    //   $('#carrot').toggleClass("rotated", 300)
    // })

    $('#about').click((evt)=>
    {
      evt.preventDefault()
      console.log('here')
      $("#dd2").toggle(300)
      $('#carrot2').toggleClass("rotated", 300)
    })

    $('#worker').click((evt)=>
    {
      $("#dd3").toggle(300)
      $('#carrot3').toggleClass("rotated", 300)
    })



    $('#swapper').click((evt)=>
    {
        //document.querySelectorAll('.innerSlide .slideBox')[0].style.display="no"
        $('.innerSlide').toggleClass("sliderProperty")
        $('.innerSlide').css("transform", "translateX(200px)")
        let pixelValue = document.querySelectorAll(".innerSlide")[0].style.transform
        let temp = $('.innerSlide .slideBox:nth-of-type(1)')
        $('.innerSlide .slideBox:nth-of-type(1)').toggle(400, ()=>
        {
            $('.innerSlide .slideBox:nth-of-type(1)').remove()
            temp.css("display", "none")
            
        })
        let newValue = ""
        for(let counter = 0; counter < pixelValue.length; counter++)
        {
            if(Number.isInteger(parseInt(pixelValue[counter])))
            {
                newValue += pixelValue[counter]
            }
        }
        let newPixels = 0
        if(newValue)
        {
            newPixels = 400
        }
        else
        {
            newPixels = parseInt(newValue) + 400
        }
        
    })
    $('.files').click((evt)=>
    {
        // $('#fileTable').css("display", "flex");
        // $('#courseContent').toggle(400);
    })

    $('.videos').click((evt)=>
    {
        $('#videoTable').css("display", "flex");
        $('#courseContent').toggle(400);
    })

    $('#closer').click((evt)=>
    {

        $('#courseContent').toggle(400, ()=>
        {
            $('#videoTable').css("display", "none");
            $('#fileTable').css("display", "none");
        })
    })

    /*$('.uniqueSquare').click((evt)=>
    {
        console.log("here")
        $(evt.currentTarget).parents('.articleCard').siblings().slideToggle(1000)
        setTimeout(()=>
        {
            $(evt.currentTarget).parents('.articleCard').attr("id", "fullPageCard")
        }, 1200)
    })*/

    $('.backBtn2').click((evt)=>
    {
        let counter = 0;
        let official = 0;
        for(let temp of document.querySelectorAll('.articleCard'))
        {
            if(temp.id == "fullPageCard")
            {
                official = counter
            }
            counter++
        }
        $(`.articleCard:nth-of-type(${official + 1})`).css("transition", "all 1s linear")
        $('#fullPageCard').removeAttr("id")
        setTimeout(()=>
        {
            $(evt.currentTarget).parents('.articleCard').siblings().slideToggle(1000)
        }, 2000)
        setTimeout(()=>
        {
            $(`.articleCard:nth-of-type(${official + 1})`).css("transition", "unset")
        }, 1000)
        
    })
})

$(window).ready(()=>
{
    $('.preloader').fadeOut(500)
})

let latitude = 41.037660;
let longitude = -83.649540;
let mymap = L.map('mapid', {tap: false}).setView([latitude, longitude], 13);
const attribution = '&copy; <a href="https://www.openstreetmap.org/copyright">Open Street Map</a> contributors';
const tileURL = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
const tiles = L.tileLayer(tileURL, {attribution: attribution});
tiles.addTo(mymap);
var marker = L.marker([latitude, longitude]).addTo(mymap);
marker.bindPopup("113 East Crawford Street, Findlay, OH 45840");
marker.on("click", function (event) {
    event.target.openPopup();
    });
mymap.invalidateSize();

