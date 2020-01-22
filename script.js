
$(document).ready(function() {
    const m = moment();
console.log(m.format("dddd MMMM DDD YYYY"));
$('.jumbotron-fluid').append(m.format("dddd MMMM DDD YYYY"));


  
    // test flag
    const test = false;
  
    // get times from moment
    const now = moment().format('MMMM Do YYYY');
  
    // commented out for test in non-standard hours
    let nowHour24 = moment().format('H');
    let nowHour12 = moment().format('h');
  
    // set times for tesitng after hours
    if (test) {
      nowHour24 = 13;
      nowHour12 = 1;
    }
  
    let storedPlans = JSON.parse(localStorage.getItem("storedPlans"));
  
    if (test) { console.log(storedPlans); }
  

    if (storedPlans !== null) {
      planTextArr = storedPlans;
    } else {

      planTextArr = new Array(9);
      
    }
  
    if (test) { console.log("full array of plned text",planTextArr); }
  
    // set variable referencing planner element
    let $plannerDiv = $('#plannerContainer');
    // clear existing elements
    $plannerDiv.empty();
  
    if (test) { console.log("current time",nowHour12); }
  
  
    // build calendar by row for fix set of hours
    for (let hour = 9; hour <= 17; hour++) {
      // index for array use offset from hour
      let index = hour - 9;
      
      // build row components
      let $rowDiv = $('<div>');
      $rowDiv.addClass('row');
      $rowDiv.addClass('.plannerRow');
      $rowDiv.attr('hour-index',hour);
      
    
      // Start building Time box portion of row
      let $col2TimeDiv = $('<div>');
      $col2TimeDiv.addClass('col-md-2');
    
      // create timeBox element (contains time)
      const $timeBoxSpn = $('<span>');
      // can use this to get value
      $timeBoxSpn.attr('class','btn btn-secondary btn-lg');
      
      // format hours for display
      let displayHour = 0;
      let ampm = "";
      if (hour > 12) { 
        displayHour = hour - 12;
        ampm = "pm";
      } else {
        displayHour = hour;
        ampm = "am";
      }
      
      
      $timeBoxSpn.text(`${displayHour} ${ampm}`);
  
      
      $rowDiv.append($col2TimeDiv);
      $col2TimeDiv.append($timeBoxSpn);
  
  
      // START building textarea portion of row
      // build row components
      let $dailyPlanSpn = $('<textarea>');
  
      $dailyPlanSpn.attr('id',`input-${index}`);
      $dailyPlanSpn.attr('hour-index',index);
      $dailyPlanSpn.attr('type','text');
      $dailyPlanSpn.attr('class','dailyPlan');
      $dailyPlanSpn.attr('placeholder', "New Event");
  
      // access index from data array for hour 
      $dailyPlanSpn.val( planTextArr[index] );
      
      // create col to control width
      let $col9IptDiv = $('<div>');
      $col9IptDiv.addClass('col-md-9');
  
      // add col width and row component to row
      $rowDiv.append($col9IptDiv);
      $col9IptDiv.append($dailyPlanSpn);
      // STOP building Time box portion of row
  
      // START building save portion of row
      let $col1SaveDiv = $('<div>');
      $col1SaveDiv.addClass('col-md-1');
  
      let $saveBtn = $('<button>');
      $saveBtn.attr('id',`saveid-${index}`);
      $saveBtn.attr('save-id',index);
      $saveBtn.attr('class',"far fa-save saveIcon fa-3x btn");
      
      // add col width and row component to row
      $rowDiv.append($col1SaveDiv);
      $col1SaveDiv.append($saveBtn);
      // STOP building save portion of row
  
      // set row color based on time
      updateRowColor($rowDiv, hour);
      
      // add row to planner container
      $plannerDiv.append($rowDiv);
    };
     
    // function to update row color
    function updateRowColor ($hourRow,hour) { 
    
      if (test) { console.log("rowColor ",nowHour24, hour); }
  
      if ( hour < nowHour24) {
        // $hourRow.css('')
        if (test) { console.log("lessThan"); }
        $hourRow.css("background-color","lightgrey")
      } else if ( hour > nowHour24) {
        if (test) { console.log("greaterthan"); }
        $hourRow.css("background-color","lightyellow");
      } else {
        if (test) { console.log("equal"); }
        $hourRow.css("background-color","lightgreen")
      }
    };
  
    // saves to local storage
    // onclick function to listen for user clicks on save button
    $(document).on('click','button', function(event) {
      event.preventDefault();  
  
      if (test) { console.log('click pta before '+ planTextArr); }
  
      let $index = $(this).attr('save-id');
  
      let inputId = '#input-'+$index;
      let $value = $(inputId).val();
  
      planTextArr[$index] = $value;
  
      // remove shawdow pulse class
      $(`#saveid-${$index}`).removeClass('shadowPulse');
      localStorage.setItem("storedPlans", JSON.stringify(planTextArr));
    });  
  
    });

