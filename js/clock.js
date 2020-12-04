clock()
    window.onload = maxWindow;
    
    //document.getElementById("clockLabel").innerHTML = "Hello World!";

    function clock() {

      var time = new Date

      var hour = addCero(time.getHours())
      var minutes = addCero(time.getMinutes())
      var seconds = addCero(time.getSeconds())

      document.getElementById('clockLabel').innerHTML = `${hour}:${minutes}:${seconds}`;
      document.getElementById('dateLabel').innerHTML = `${getDayName(time.getDay())} ${time.getDay()}/${time.getMonth()}/${time.getFullYear()}`;
      setTimeout("clock()", 1000)
    }


    function maxWindow() {
           window.moveTo(0, 0);
           console.log("full screen executed")


           if (document.all) {
               top.window.resizeTo(screen.availWidth, screen.availHeight);
           }

           else if (document.layers || document.getElementById) {
               if (top.window.outerHeight < screen.availHeight || top.window.outerWidth < screen.availWidth) {
                   top.window.outerHeight = screen.availHeight;
                   top.window.outerWidth = screen.availWidth;
               }
           }
       }

    function addCero(time) {
      if (time < 10) {
        return '0' + time
      } else {
        return time
      }
    }
    function getDayName(number) {
      switch (number) {
        case 1: return "Monday"
          break
        case 2: return "Tuesday"
          break
        case 3: return "Wednesday"
          break
        case 4: return "Thursday"
          break
        case 5: return "Friday"
          break
        case 6: return "Saturday"
          break
        case 7: return "Sunday"
          break
        default: return "Not found"
      }
    }