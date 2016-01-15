function main () {
    
    console.log("App started.");
    
    const DELAY = 3000;
        
    $("main")
      .queue(function () {
          var self = this;
          $("main > p#one")
            .fadeIn()
            .delay(DELAY)
            .fadeOut(1000, function () {
                $(self).dequeue();
          });
      })
      .queue(function () {
          var self = this;
          $("main > p#two")
            .fadeIn()
            .delay(DELAY)
            .fadeOut(1000, function () {
                $(self).dequeue();
           });
      })
      .queue(function () {
          var self = this;
          $("main > p#three")
            .fadeIn()
            .delay(DELAY)
            .fadeOut(1000, function () {
                $(self).dequeue();
           });
      }).queue(function () {
          var self = this;
          $("body").addClass("normal");
      });
}

$(document).ready(main);