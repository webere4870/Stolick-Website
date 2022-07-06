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

    let lastRemoved = $("<div id='block6' class='mover'></div>")
    $('#clickerLeft').click((evt)=>
    {
        $('#biggerBoy').prepend(lastRemoved)
        $('.ssContainer > *').removeClass("transformed")
        $('.ssContainer > *').toggleClass("transformed")
        lastRemoved = $('.mover:last-of-type')
        $('.mover:last-of-type').remove()
        scaleTower()
    })
    $('#clicker').click((evt)=>
    {
        let temp = $('.mover:nth-of-type(1)')
        $('.mover:nth-of-type(1)').remove()
        $('#biggerBoy').append(lastRemoved)
        scaleTower()
        lastRemoved = temp
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

    $('#work').click((evt)=>
    {
      evt.preventDefault()
      $("#dd1").toggle(300)
      $('#carrot').toggleClass("rotated", 300)
    })

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

    $('.files').click((evt)=>
    {
        console.log("Files clicked")
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
        $('#fileTable').css("display", "flex");
        $('#courseContent').toggle(400);
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

    $('.uniqueSquare').click((evt)=>
    {
        console.log("here")
        $(evt.currentTarget).parents('.articleCard').siblings().slideToggle(1000)
        setTimeout(()=>
        {
            $(evt.currentTarget).parents('.articleCard').attr("id", "fullPageCard")
        }, 1200)
    })

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

