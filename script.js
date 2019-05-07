var count = 0;
var totalCount = 0;
var drakes = 0;
function dtyd(){
  $('#dabbers').prepend('<div class="dabber"></div>')
  count++;
  totalCount++;
  $('.dab-count').text(`${totalCount}`)

  console.log("dtyd count", count);
  if (count < 72 && count%12 === 0) {
    var obj = document.createElement("audio");
    obj.src = "lookatmydab.mp3";
    obj.volume = 0.6;
    obj.autoPlay = false;
    obj.preLoad = true;
    obj.controls = true;
    obj.play();
  } else if (count === 72) {
    $('.dabber').remove();
    $('#dabbers').append('<div class="drake"></div>')
    $('.drake').fadeOut(3300,  function() {
                  $(this).remove();
                });

    var obj = document.createElement("audio");
    obj.src = "call-me-cellphone.mp3";
    obj.volume = 0.7;
    obj.autoPlay = false;
    obj.preLoad = true;
    obj.controls = true;
    obj.play();
    count = 0;
    drakes++
    $('.drake-count').fadeIn(300)
    if (drakes === 1) {
      $('.drake-count').text(`${drakes} Drake`);
    } else {
      $('.drake-count').text(`${drakes} Drakes`);
    }
    $('.drake-count').fadeOut(1300)
  } else {
    var obj = document.createElement("audio");
    obj.src = "dab.mp3";
    obj.volume = 0.4;
    obj.autoPlay = false;
    obj.preLoad = true;
    obj.controls = true;
    obj.play();
  }
}
