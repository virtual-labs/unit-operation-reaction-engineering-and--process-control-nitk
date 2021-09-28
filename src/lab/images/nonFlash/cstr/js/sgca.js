let totVol = 1000,
  eaConc = 0.02,
  shConc = 0.02,
  setTemp = 30,
  k = 0;
const e = 2.7182818284590452353602874713527;
let eaLPH = 0,
  shLPH = 0;
let settop = 100;
let oldAngle = 0;
let leftMotorPos = 220;
let rightMotorPos = 220;
let liquidPos = { top: 235, height: 10 };
let imgIndex = 0;
let waveIndex = 0;
let naohSetFirst = false;
let ethyleSetFirst = false;
let naohEthyleSet = 0;
let rotameterImages = [
  "./Images/202.svg",
  "./Images/204.svg",
  "./Images/205.svg",
  "./Images/207.svg",
  "./Images/209.svg",
  "./Images/210.svg",
];
let waveImages = ["./Images/191.svg", "./Images/192.svg"];
let oldCond = 0;
let actCond = 0;
let tau = 0;
let CaO = 0;
let CbO = 0;
let molRatio = 0;
let Xa = 0;
let Ca = 0;
let Cb = 0;
let CondAmb = 0;
let waterTimer = 0,
  liquidTimer = 0;
let timerSet = 0;
let waterFlowCount = 0;
let resetClicked = false;
//on click of next button

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("nextButton").style.visibility = "hidden";
  setTimeout(() => {
    var start = document.getElementById("start");
    start.innerText = "Reaction Kinetic studies in mixed flow reactor";
    start.style.fontSize = "30px";
    start.classList.add("content-shine");
    start.style.left = "410px";
    start.style.top = "170px";
    document.getElementById("landingPageButton").style.visibility = "visible";
    document.getElementById("landingPageButton").style.cursor = "pointer";
    document.getElementById("landingPageButton").onclick = function () {
      gotoPage1();
    };
  }, 3000);
});

//erin
function goToStart(id) {
  var s = document.getElementById(id);
  s.innerText = "Click to choose Experiment or Evaluation";
  s.onclick = function () {
    document.getElementById("canvas1").style.visibility = "visible";
    document.getElementById("canvas5").style.visibility = "hidden";
    document.getElementById("canvas4").style.visibility = "hidden";
    document.getElementById("canvas3").style.visibility = "hidden";
    document.getElementById("canvas6").style.visibility = "hidden";
    document.getElementById("canvas2").style.visibility = "hidden";
    document.getElementById("displayExpValues").style.visibility = "hidden";
    document.getElementById("demoOne").style.visibility = "hidden";
    document.getElementById("configExp").style.visibility = "hidden";
    document.getElementById("evaluatePart").style.visibility = "hidden";
    //eriii
    document.getElementById("buttonsList").style.visibility = "hidden";
    document.getElementById("buttonsListEval").style.visibility = "hidden";
    document.getElementById("labelImage").style.visibility = "hidden";
    document.getElementById("experimentSetup").style.visibility = "hidden";
    document.getElementById("observations").style.visibility = "hidden";
    document.getElementById("demoTwo").style.visibility = "hidden";
    hideAllExperimentParts();
    // console.log("hideworked");
  };
  // s.style.paddingTop="2px";
  s.style.fontSize = "11px";

  /* margin:0px; */
  // s.style.marginLeft="0px";
  // xx-large
  // s.style.fontSize ="15px";
  //s.classList.add("title2 h3");
}

function changeOriginal(id) {
  var r = document.getElementById(id);
  r.innerText = "Reaction Kinetic Studies in Mixed Flow Reactor";
  //xx-large
  // r.style.fontSize = "20px";
  // r.style.paddingTop="2px";
  // r.style.fontSize="15px";
  // r.style.animatearrowmarginLeft="40px";
  //r.classList.add("title2 h3");
}
// erin end

function gotoPage1() {
  for (temp = 0; temp <= 4; temp++) {
    document.getElementById("canvas" + temp).style.visibility = "hidden";
  }
  simsubscreennum = 1;
  document.getElementById("canvas" + simsubscreennum).style.visibility =
    "visible";
  magic();
}

function navNext() {
  for (temp = 0; temp <= 4; temp++) {
    document.getElementById("canvas" + temp).style.visibility = "hidden";
  }

  simsubscreennum += 1;
  document.getElementById("canvas" + simsubscreennum).style.visibility =
    "visible";
  document.getElementById("nextButton").style.visibility = "hidden";
  magic();
}

//-----------------------------------------blink arrow on the next step---------------------------------------------
//blink arrow on the next step
function animatearrow() {
  if (document.getElementById("arrow1").style.visibility == "hidden")
    document.getElementById("arrow1").style.visibility = "visible";
  else document.getElementById("arrow1").style.visibility = "hidden";
}

//stop blinking arrow
function myStopFunction() {
  clearInterval(myInt);
  document.getElementById("arrow1").style.visibility = "hidden";
}

//-------------------------------------function magic starts here----------------------------------------------------
var dataOn = 0,
  observeDataOn = 0;

function magic() {
  if (simsubscreennum == 1) {
    document.getElementById("observeTable").style.visibility = "hidden";
  } else if (simsubscreennum == 2) {
    document.getElementById("observeTable").style.visibility = "hidden";
    if (chosenActivity == 1) {
      //   console.log("One has chosen!");
      document.getElementById("experimentSetup").style.visibility = "hidden";
      document.getElementById("labelImage").style.visibility = "visible";
      document.getElementById("nextButton").style.visibility = "hidden";
      document.getElementById("configExp").style.visibility = "hidden";
    } else {
      //   console.log("2 has chosen");
      document.getElementById("step2Heading").innerText = "Choose";
      document.getElementById("configExp").style.visibility = "visible";
      document.getElementById("nextButton").style.visibility = "hidden";
    }
  } else if (simsubscreennum == 3) {
    document.getElementById("observeTable").style.visibility = "hidden";
    if (chosenActivity == 1) {
      document.getElementById("labelImage").style.visibility = "hidden";
      document.getElementById("experimentSetup").style.visibility = "visible";
      document.getElementById("nextButton").style.visibility = "hidden";
      document.getElementById("evaluatePart").style.visibility = "hidden";
    } else {
      //   console.log("2 has chosen");
      document.getElementById("configExp").style.visibility = "hidden";
      document.getElementById("nextButton").style.visibility = "hidden";

      document.getElementById("evaluatePart").style.visibility = "visible";
    }
  } else if (simsubscreennum == 4) {
    document.getElementById("observeTable").style.visibility = "hidden";
    if (chosenActivity == 1) {
      document.getElementById("nextButton").style.visibility = "hidden";
      document.getElementById("step4Heading").innerText = "Experiment";
      // document.getElementById("obserButton").onclick = "";
      document.getElementById("goBackButton").onclick = function () {
        document.getElementById("emailSend").style.visibility = "hidden";
        document.getElementById("noteremsel").style.visibility = "hidden";

        if (dataOn == 0) {
          document.getElementById("displayExpValues").style.visibility =
            "visible";
          document.getElementById("observations").style.visibility = "hidden";
          dataOn = 1;
          //   console.log(dataOn);
        } else if (dataOn == 1) {
          document.getElementById("displayExpValues").style.visibility =
            "hidden";
          document.getElementById("observations").style.visibility = "hidden";
          dataOn = 0;
          //   console.log(dataOn);
        }
      };
      document.getElementById("experimentSetup").style.visibility = "hidden";
      document.getElementById("nextButton").style.visibility = "hidden";

      document.getElementById("experimentID").style.visibility = "visible";
      document.getElementById("obserButton").style.visibility = "visible";
    } else {
      //   console.log("2 has chosen");
    }
  } else if (simsubscreennum == 6) {
    if (chosenActivity == 1) {
      document.getElementById("observeTable").style.visibility = "hidden";
      document.getElementById("experimentSetup").style.visibility = "hidden";
      document.getElementById("labelImage").style.visibility = "hidden";
      document.getElementById("nextButton").style.visibility = "hidden";
    }
  }
}

// function showexpt(){
//     document.getElementById("highlight").style.visibility = "hidden";
//     document.getElementById("restartExpt").style.visibility = "hidden";
//     document.getElementById("noteremsel").style.visibility = "hidden";

//     if (exptDataOn == 0) {
//         document.getElementById("observations").style.visibility = "hidden";
//         document.getElementById("displayExpValues").style.visibility = "visible";

//         exptDataOn = 1;
//     } else if (exptDataOn == 1) {
//         document.getElementById("displayExpValues").style.visibility ="hidden";
//             // document.getElementById("goBackButton").style.visibility = "hidden";
//             exptDataOn = 0;
//     }
// }
function showObservation() {
  document.getElementById("highlight").style.visibility = "hidden";
  document.getElementById("restartExpt").style.visibility = "hidden";
  document.getElementById("noteremsel").style.visibility = "hidden";

  if (observeDataOn == 0) {
    // document.getElementById("").onclick
    document.getElementById("observations").style.visibility = "visible";
    document.getElementById("displayExpValues").style.visibility = "hidden";

    observeDataOn = 1;
  } else if (observeDataOn == 1) {
    document.getElementById("observations").style.visibility = "hidden";
    // document.getElementById("goBackButton").style.visibility = "visible";
    observeDataOn = 0;
  }
}

function gotoPage5() {
  for (temp = 0; temp <= 4; temp++) {
    document.getElementById("canvas" + temp).style.visibility = "hidden";
  }
  simsubscreennum = 5;
  document.getElementById("canvas" + simsubscreennum).style.visibility =
    "visible";
  document.getElementById("titleLarge").style.visibility = "hidden";
  document.getElementById("titleSmall").style.visibility = "visible";
  if (chosenActivity == 1) {
    document.getElementById("buttonsList").style.visibility = "visible";
    document.getElementById("demoButton").style.cursor = "pointer";
    // document.getElementById("labelButton").style.cursor = "pointer";
    document.getElementById("demoButton").onclick = function () {
      document.getElementById("displayExpValues").style.visibility = "hidden";
      hideAllExperimentParts();
      goto6th();
    };
  } else if (chosenActivity == 2) {
    document.getElementById("buttonsListEval").style.visibility = "visible";
    document.getElementById("demoButtonEval").style.cursor = "pointer";
    // document.getElementById("labelButton").style.cursor = "pointer";
    document.getElementById("demoButtonEval").onclick = function () {
      document.getElementById("displayExpValues").style.visibility = "hidden";

      goto6th();
    };
  }
  // document.getElementById("labelButton").onclick = function(){
  // 	gotoLabel();
  // }
}

function goto6th() {
  //   console.log("At 6th canvas");
  for (temp = 0; temp <= 6; temp++) {
    document.getElementById("canvas" + temp).style.visibility = "hidden";
  }
  simsubscreennum = 6;
  document.getElementById("canvas" + simsubscreennum).style.visibility =
    "visible";
  magic();

  if (chosenActivity == 1) {
    document.getElementById("demoOne").style.visibility = "visible";
    document.getElementById("labelButton").style.cursor = "pointer";
    document.getElementById("labelButton").onclick = function () {
      document.getElementById("displayExpValues").style.visibility = "hidden";
      hideAllExperimentParts();
      gotoLabel();
    };
  } else if (chosenActivity == 2) {
    document.getElementById("demoTwo").style.visibility = "visible";
    document.getElementById("labelButtonEval").style.cursor = "pointer";
    document.getElementById("labelButtonEval").onclick = function () {
      document.getElementById("displayExpValues").style.visibility = "hidden";

      gotoLabel();
    };
  }
}

function gotoLabel() {
  for (temp = 0; temp <= 6; temp++) {
    document.getElementById("canvas" + temp).style.visibility = "hidden";
  }
  simsubscreennum = 2;
  document.getElementById("canvas" + simsubscreennum).style.visibility =
    "visible";
  magic();

  if (chosenActivity == 1) {
    document.getElementById("demoButton").onclick = function () {
      document.getElementById("displayExpValues").style.visibility = "hidden";

      goto6th();
    };
    document.getElementById("setupButton").style.cursor = "pointer";
    document.getElementById("setupButton").onclick = function () {
      document.getElementById("displayExpValues").style.visibility = "hidden";
      hideAllExperimentParts();
      resetClicked = false;

      gotoSetup();
    };
  } else if (chosenActivity == 2) {
    document.getElementById("demoButtonEval").onclick = function () {
      document.getElementById("displayExpValues").style.visibility = "hidden";
      document.getElementById("configExp").style.visibility = "hidden";

      //   console.log("Pressed demo");

      // document.getElementById("configExp").style.visibility = "hidden";
      goto6th();
    };
    document.getElementById("setupButtonEval").style.cursor = "pointer";
    document.getElementById("setupButtonEval").onclick = function () {
      document.getElementById("displayExpValues").style.visibility = "hidden";
      document.getElementById("highlightEvaluation").style.visibility =
        "hidden";

      gotoSetup();
    };
  }
}
//delete only table rows (table heading remains)
function clearTable() {
  document.getElementById("noteremsel").style.visibility = "hidden";
  document.getElementById("emailSend").style.visibility = "hidden";
  document.getElementById("emailreq").style.visibility = "hidden";

  var rows = document.getElementById("observTable").rows;
  var i = rows.length;
  while (--i) {
    rows[i].parentNode.removeChild(rows[i]);
  }
}

// erin
// function remAllRead() {
//     // console.log("remove all selected");
//     document.getElementById("emailreq").style.visibility = "hidden";
//     document.getElementById("emailSend").style.visibility = "hidden";
//     document.getElementById("noteremsel").style.visibility = "hidden";
//     if (!document.getElementsByTagName || !document.createTextNode) return;
//     // var table=document.getElementById('observeTable');
//     var rows = document.getElementById('observeTable').getElementsByTagName('thead')[0].getElementsByTagName('tr');
//     var rowsval = document.getElementById('observeTable').getElementsByTagName('thead')[0];
//     var i;
//     for (i = 1; i < rows.length; i++) {
//         // console.log("rows.length" + rows.length);
//         // console.log("i value is " + i);
//         $(rowsval.getElementsByTagName('tr')[i--]).remove();
//         // console.log("loop works");
//     }

// }
// erin 08092021
function emailSend() {
  // console.log("email button clicked");
  document.getElementById("emailSend").style.visibility = "visible";
  document.getElementById("emailreq").style.visibility = "hidden";
  document.getElementById("noteremsel").style.visibility = "hidden";
}
var emid;

function sendEmail() {
  var emid1 = document.getElementById("emailR");
  // console.log(emid1);
  emidlen = emid1.value.length;
  // console.log("email length is " + emidlen);
  if (emidlen > 0) {
    // console.log("send button clicked");

    // console.log(emid);

    document.getElementById("info").innerHTML = "";
    var myTab = document.getElementById("observTable");

    // LOOP THROUGH EACH ROW OF THE TABLE AFTER HEADER.
    for (i = 0; i < myTab.rows.length; i++) {
      // GET THE CELLS COLLECTION OF THE CURRENT ROW.
      var objCells = myTab.rows.item(i).cells;

      // LOOP THROUGH EACH CELL OF THE CURENT ROW TO READ CELL VALUES.
      for (var j = 0; j < objCells.length; j++) {
        info.innerHTML =
          info.innerHTML + "         " + objCells.item(j).innerHTML;
      }
      info.innerHTML = info.innerHTML + "%0D%0A%0D"; // ADD A BREAK (TAG).
    }
    // console.log("body is filled" + info);
    var mailBody = document.getElementById("info").innerHTML;
    window.location =
      "mailto:" + emid + "?subject=The Observation Data &body=" + mailBody;

    // console.log("data sent to mail");
  } else {
    // console.log("else is executing");
    document.getElementById("emailreq").style.visibility = "visible";
  }
}

function setemail(val) {
  emid = val;
  // console.log(emid);
}

function remSelRead() {
  //   console.log("remove selected");
  document.getElementById("emailreq").style.visibility = "hidden";
  document.getElementById("emailSend").style.visibility = "hidden";
  document.getElementById("noteremsel").style.visibility = "visible";

  var tableRef = document.getElementById("observTable");
  var tableRows = tableRef.rows;
  //   console.log("tableRows length", tableRows.length);

  if (!document.getElementsByTagName || !document.createTextNode) return;
  // var table = document.getElementById('observeTable');
  var idx = 0;
  // var rows = document.getElementById('observeTable').getElementsByTagName('thead')[0].getElementsByTagName('tr');
  // console.log("rows ",rows.length);
  for (i = 1; i < tableRows.length; i++) {
    tableRows[i].onclick = function () {
      //alert(this.rowIndex + 1);
      idx = this.rowIndex;
      // console.log(idx);
      tableRef.deleteRow(idx);
    };
  }
  // var checkedIndexes = [];
  // for (var i = 0; i < tableRows.length; i++) {
  //   var checkboxSelected = tableRows[i].cells[0].children[0].checked;
  //   if (checkboxSelected) {
  //     checkedIndexes.push(i);
  //   }
  // }

  // for (var k = checkedIndexes.length - 1; k >= 0; k--) {
  //   tableRef.deleteRow(checkedIndexes[k]);
  // }
  // if (!document.getElementsByTagName || !document.createTextNode) return;
  // console.log("mid step");
  // var table = document.getElementById('observTable');
  // var idx = 0;
  // var rows = table.getElementsByTagName('thead')[0].getElementsByTagName('tr');
  // var  selected = table.getElementsByClassName('selected');
  // table.onclick = highlight;
  // console.log("selected ",selected);
  // function highlight(e) {
  //     if (selected[0]) selected[0].className = '';
  //     e.target.parentNode.className = 'selected';
  //     console.log("selected row ",selected);
  //     idx=selected.rowIndex;
  //     table.deleteRow(idx);
  // }

  //    console.log("row lenght ",rows.length);
  //     for (i = 1; i < rows.length; i++) {
  //         rows[i].onclick = function() {
  // console.log("i value=",i);
  //             // rows[i].parentNode.removeChild(rows[i]);
  //             //alert(this.rowIndex + 1);
  //             idx = this.rowIndex;
  //             console.log(idx);
  //              table.deleteRow(idx);

  //     }
  // }
}

function gotoSetup() {
  for (temp = 0; temp <= 6; temp++) {
    document.getElementById("canvas" + temp).style.visibility = "hidden";
  }
  simsubscreennum = 3;
  document.getElementById("canvas" + simsubscreennum).style.visibility =
    "visible";
  magic();

  document.getElementById("expButton").style.cursor = "pointer";
  document.getElementById("expButton").onclick = function () {
    document.getElementById("displayExpValues").style.visibility = "hidden";
    document.getElementById("msg").style.visibility = "hidden";

    document.getElementById("overflow").style.visibility = "hidden";
    gotoExp();
  };
  if (chosenActivity == 2) {
    document.getElementById("labelButtonEval").onclick = function () {
      goBacktoStep2Eval();
    };
    document.getElementById("demoButtonEval").onclick = function () {
      goBacktoStep1Eval();
    };
  }
}

function goBacktoStep1Eval() {
  console.log("Going to 6th one");
  document.getElementById("configExp").style.visibility = "hidden";
  document.getElementById("evaluatePart").style.visibility = "hidden";
  for (temp = 0; temp <= 6; temp++) {
    document.getElementById("canvas" + temp).style.visibility = "hidden";
  }
  simsubscreennum = 6;
  document.getElementById("canvas" + simsubscreennum).style.visibility =
    "visible";
  magic();
}

function goBacktoStep2Eval() {
  console.log("Going to second");
  document.getElementById("evaluatePart").style.visibility = "hidden";
  for (temp = 0; temp <= 6; temp++) {
    document.getElementById("canvas" + temp).style.visibility = "hidden";
  }
  simsubscreennum = 2;
  document.getElementById("canvas" + simsubscreennum).style.visibility =
    "visible";

  magic();
}

function gotoExp() {
  // erin
  document.getElementById("noteremsel").style.visibility = "hidden";
  document.getElementById("emailSend").style.visibility = "hidden";
  document.getElementById("emailreq").style.visibility = "hidden";
  document.getElementById("observations").style.visibility = "hidden";

  resetClicked = false;
  if (waterTimer == 0) {
    document.getElementById("w3").style.visibility = "visible";
  } else {
    clearInterval(waterTimer);
    if (liquidPos.top == 151.5) {
      if (waterFlowCount == 1) {
        if (resetClicked) {
          document.getElementById("w3").style.visibility = "hidden";
          document.getElementById("w1").style.visibility = "hidden";
          document.getElementById("w2").style.visibility = "hidden";
          clearInterval(waterTimer);
          waterFlowCount = 0;
        } else {
          document.getElementById("w3").style.visibility = "hidden";
          document.getElementById("w2").style.visibility = "hidden";
          document.getElementById("w1").style.visibility = "visible";
        }
        console.log("Reached water level");
        waterTimer = setInterval(function () {
          waterFlowMovement("w1", "w2");
        }, 500);
      }
    }
  }
  // clearInterval(waterTimer);
  // waterTimer = setInterval(function () {
  //   waterFlowMovement("w1", "w2");
  // }, 500);
  console.log("Experiment part.");
  for (temp = 0; temp <= 6; temp++) {
    document.getElementById("canvas" + temp).style.visibility = "hidden";
  }
  simsubscreennum = 4;
  document.getElementById("canvas" + simsubscreennum).style.visibility =
    "visible";
  magic();

  document.getElementById("setupButton").onclick = function () {
    document.getElementById("displayExpValues").style.visibility = "hidden";
    // erin
    document.getElementById("msg").style.visibility = "hidden";
    document.getElementById("condDiv").style.visibility = "hidden";
    document.getElementById("w3").style.visibility = "hidden";
    document.getElementById("observations").style.visibility = "hidden";
    document.getElementById("noteremsel").style.visibility = "hidden";
    document.getElementById("emailSend").style.visibility = "hidden";
    document.getElementById("emailreq").style.visibility = "hidden";
    // erinend

    document.getElementById("overflow").style.visibility = "hidden";
    hideAllExperimentParts();

    console.log("clicked for setup");
    resetClicked = false;

    document.getElementById("nextButton").style.visibility = "hidden";
    document.getElementById("nextButton").style.zIndex = -1;
    goBacktoStep2();
  };
  document.getElementById("labelButton").onclick = function () {
    document.getElementById("displayExpValues").style.visibility = "hidden";
    document.getElementById("observations").style.visibility = "hidden";
    hideAllExperimentParts();
    gotoLabel();
  };
  document.getElementById("demoButton").onclick = function () {
    document.getElementById("displayExpValues").style.visibility = "hidden";
    document.getElementById("observations").style.visibility = "hidden";
    hideAllExperimentParts();
    goto6th();
  };
}

function hideAllExperimentParts() {
  document.getElementById("displayExpValues").style.visibility = "hidden";
  document.getElementById("w3").style.visibility = "hidden";
  document.getElementById("w1").style.visibility = "hidden";
  document.getElementById("w2").style.visibility = "hidden";
  document.getElementById("overflow").style.visibility = "hidden";
  document.getElementById("experimentID").style.visibility = "hidden";
  document.getElementById("condDiv").style.visibility = "hidden";
  document.getElementById("msg").style.visibility = "hidden";
  // document.getElementById("waterSteady").style.visibility = "hidden";
  document.getElementById("obserButton").style.visibility = "hidden";
  // erin
  document.getElementById("noteremsel").style.visibility = "hidden";
  document.getElementById("emailSend").style.visibility = "hidden";
  document.getElementById("emailreq").style.visibility = "hidden";

  // erinend

  document.getElementById("obserButton").style.visibility = "hidden";
}

// ADDED By Jaison.
var chosenActivity;

function selectAction(n) {
  chosenActivity = n;
  console.log(chosenActivity);
  simsubscreennum = 5;
  gotoPage5();
}

// Values from experimental page of experiment PART, not the evaluation.:
var firstML = 1;

function setMLone() {
  firstML = document.getElementById("firstMLValue").value;
  console.log(firstML);
}

var secondML = 1;

function setMLtwo() {
  firstML = document.getElementById("secondMLValue").value;
  console.log(firstML);
}

function gotoObservation() {
  document.getElementById("step4Heading").innerText = "Observations";
  document.getElementById("experimentID").style.visibility = "hidden";
  document.getElementById("observeTable").style.visibility = "visible";
  document.getElementById("highlight").style.visibility = "hidden";

  document.getElementById("setupButton").onclick = function () {
    document.getElementById("displayExpValues").style.visibility = "hidden";

    document.getElementById("overflow").style.visibility = "hidden";
    resetClicked = false;
    goBacktoStep2();
  };
}

function goBacktoStep2() {
  document.getElementById("nextButton").style.visibility = "hidden";
  document.getElementById("nextButton").style.zIndex = -1;
  document.getElementById("nextButton").style.visibility = "hidden";
  document.getElementById("experimentID").style.visibility = "hidden";
  document.getElementById("obserButton").style.visibility = "hidden";
  document.getElementById("observeTable").style.visibility = "hidden";

  simsubscreennum = 3;
  document.getElementById("canvas" + 4).style.visibility = "hidden";

  document.getElementById("canvas" + simsubscreennum).style.visibility =
    "visible";
  document.getElementById("experimentSetup").style.visibility = "visible";
  document.getElementById("nextButton").style.visibility = "visible";
}

// ============================  EVALUATION PART

// Step 3

var evalSets = 1;

function setEvalSets() {
  evalSets = document.getElementById("evalSets").value;
  console.log(evalSets);

  var table = document.getElementById("configInputTable");

  var rowCount = table.rows.length - 1;
  console.log("Pre count:  ", rowCount);
  if (rowCount > 0) {
    for (var x = 1; x <= rowCount; x++) {
      table.deleteRow(1);
    }
  }

  for (var i = 1; i <= evalSets; i++) {
    var row = table.insertRow(i);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    cell1.innerHTML = `<input name="length" id="inputSet${i}0" style="width:90px" type="number">`;
    cell2.innerHTML = `<input name="length" id="inputSet${i}1" style="width:90px" type="number">`;
    cell3.innerHTML = `<input name="length" id="inputSet${i}2" style="width:90px" type="number">`;
    cell4.innerHTML = `<input name="length" id="inputSet${i}3" style="width:90px" type="number">`;
  }
}

function evaluateConfig() {
  var table = document.getElementById("configInputTable");
  var resultTable = document.getElementById("configResultTable");

  var rowCountPost = table.rows.length - 1;

  console.log("Total rows: ", rowCountPost);
  for (var z = 1; z <= rowCountPost; z++) {
    var out = document.getElementById("showResRey");
    out.innerText = "Calculating...";

    // taking values from columns
    lpm = document.getElementById("inputSet" + z + "0").value;
    pres = document.getElementById("inputSet" + z + "1").value;
    reyn = document.getElementById("inputSet" + z + "2").value;
    fric = document.getElementById("inputSet" + z + "3").value;

    presInMeter = pres / 100;
    if (processFluidEval == "Water") {
      den = 1000;
      // visco = 0.89;
      visco = 0.001;
    } else if (processFluidEval == "Kerosene") {
      den = 820;
      // visco = 0.00164;
      visco = 0.00215;
    }
    diaMeter = chosenPipeDiaEval / 39.37; // convert inch to meter
    console.log("Diameter is inch: ", chosenPipeDiaEval);
    console.log("Diameter of the pipe in meter is: ", diaMeter);
    console.log("Radius is: ", diaMeter / 2);
    lpmConvVelocity =
      (lpm * 0.000017) / (3.14 * (diaMeter / 2) * (diaMeter / 2)); // convert lpm to m3/s              V E L O C I T Y
    console.log("Velocity value is: ", lpmConvVelocity);
    // if(manoFluidEval == "Carbon tetrachloride"){
    // 	visco = 0.901;
    // }
    // else if(manoFluidEval == "Mercury"){
    // 	visco = 1.55;
    // }
    console.log(
      "Viscosity value of " + processFluid + " at 20 deg C is: ",
      visco
    );
    console.log("Density of " + processFluidEval + " fluid is: ", den);
    // Calculate Reynold's
    calculatedReyn = (den * diaMeter * lpmConvVelocity) / visco;
    calculatedReyn = calculatedReyn.toFixed(5); // ======    toFixed(5)
    console.log("Calculated Reynold's value is: ", calculatedReyn);

    var outFric = document.getElementById("showResInFric");

    // ========================================================= Friction Factor calculation.
    if (manoFluidEval == "Carbon tetrachloride") {
      denMano = 1600;
    } else if (manoFluidEval == "Mercury") {
      denMano = 13600;
    }
    console.log(
      "Manometric density value of " + manoFluidEval + " is: ",
      denMano
    );

    // calculate hf value
    hf = ((denMano - den) * presInMeter) / den;
    console.log("Calculated hf value's: ", hf);

    console.log("Length of pipe is: ", pipeLengthEval);
    // calculate FF
    calculatedFricFact =
      (2 * 9.8 * diaMeter * hf) /
      (4 * pipeLengthEval * lpmConvVelocity * lpmConvVelocity);
    calculatedFricFact = calculatedFricFact * 10000;
    calculatedFricFact = calculatedFricFact.toFixed(5); //========     toFixed(5)
    console.log("Calculated F F value is: ", calculatedFricFact);

    // Compare Reynold's and Friction Factor.
    console.log("The rey value taken in is: ", reyn);
    setTimeout(() => {
      // if the count of rows in result table is more than 3, increase the top of both of the result showing paragraph.
      var resultTable = document.getElementById("configResultTable");
      var rowCountPost = resultTable.rows.length - 1;

      //   -----------------------       DELETING ALL ROWS AND CHANGING THE NUMBER OF SETS BACK TO 0.
      var table = document.getElementById("configInputTable");
      table.style.color = "#fff";
      var rowCounttt = table.rows.length - 1;
      console.log("Count of rows after showing result is:  ", rowCounttt);
      document.getElementById("evalSets").value = 0;
      if (rowCounttt > 0) {
        for (var xx = 1; xx <= rowCounttt; xx++) {
          table.deleteRow(1);
        }
      }
      out.innerText = "";
    }, 300);
    setTimeout(() => {
      out.innerText = "";
      outFric.innerText = "";
    }, 5000);

    // Add to result table.
    var row = resultTable.insertRow(z);
    row.style.color = "#fff";
    var reyCell = row.insertCell(0);
    var fricCell = row.insertCell(1);
    reyCell.innerHTML = calculatedReyn;
    fricCell.innerHTML = calculatedFricFact;
  }
}
const waterFlowMovement = function (id1, id2) {
  let w1 = document.getElementById(id1);
  let w2 = document.getElementById(id2);
  if (w1.style.visibility == "visible") {
    w1.style.visibility = "hidden";
    w2.style.visibility = "visible";
  } else if (w2.style.visibility == "visible") {
    w2.style.visibility = "hidden";
    w1.style.visibility = "visible";
  }
};

$(function () {
  // code to execute when the DOM is ready

  $("#rot1").propeller({
    inertia: 0,
    speed: 0,
    onRotate: function () {
      ethyleSetFirst =
        naohSetFirst === true && ethyleSetFirst === false ? false : true;
      displayMsg();
      document.getElementById("liquidLid").style.width = `100px`;
      if (Math.sign(this.deg) == -1) {
        if (leftMotorPos >= 140.5) {
          leftMotorPos = leftMotorPos - 0.5;
          document.getElementById("leftMotor").style.top = `${leftMotorPos}px`;
          setLPH("rot1");
          setLiquidPos();
        }
      } else {
        if (leftMotorPos <= 219.5) {
          leftMotorPos = leftMotorPos + 0.5;
          document.getElementById("leftMotor").style.top = `${leftMotorPos}px`;
          setLPH("rot1");
        }
      }
    },
    onDragStart: function () {
      oldAngle = this.angle;
    },
    onStop: function () {
      oldAngle = this.angle;
      alert("Stopped");
    },
  });
  $("#rot2").propeller({
    inertia: 0,
    speed: 0,
    onRotate: function () {
      naohSetFirst =
        naohSetFirst === false && ethyleSetFirst === true ? false : true;
      displayMsg();
      document.getElementById("liquidLid").style.width = `100px`;
      if (Math.sign(this.deg) == -1) {
        if (rightMotorPos >= 140.5) {
          rightMotorPos = rightMotorPos - 0.5;
          document.getElementById(
            "rightMotor"
          ).style.top = `${rightMotorPos}px`;
          setLPH("rot2");
          setLiquidPos();
        }
      } else {
        if (rightMotorPos <= 219.5) {
          rightMotorPos = rightMotorPos + 0.5;
          document.getElementById(
            "rightMotor"
          ).style.top = `${rightMotorPos}px`;
          setLPH("rot2");
        }
      }
    },
    onDragStart: function () {
      oldAngle = this.angle;
    },
    onStop: function () {
      oldAngle = this.angle;
      alert("Stopped");
    },
  });
});

const rotameterAnimation = function (imgId) {
  if (imgIndex <= 5) {
    if (imgIndex == 5) {
      imgIndex = 0;
    } else imgIndex += 1;
  }
  document.getElementById(imgId).src = rotameterImages[imgIndex];
};
const waveAnimation = function (imgId) {
  if (waveIndex <= 1) {
    if (waveIndex == 1) {
      waveIndex = 0;
    } else waveIndex += 1;
  }
  document.getElementById(imgId).src = waveImages[waveIndex];
};

// timerSet = setInterval(() => {
//   rotameterAnimation("leftMotor");
//   rotameterAnimation("rightMotor");
//   waveAnimation("liquidLid");
// }, 350);

initialiseExp();

function setReactorVolume() {
  totVol = document.getElementById("reactorVolume").value * 1000;
  console.log(totVol);
  document.getElementById("reactVol").innerText = totVol + " Liter(s)";
}

function setReactorTemp() {
  setTemp = Number(document.getElementById("reactionTemp").value);
  document.getElementById("reactTemp").innerText = setTemp + " degree Celsius";
  initialiseExp();
  // console.log(k);
}

// slider
function rangeSlideEthyl(value) {
  eaConc = document.getElementById("acConc").value;
  document.getElementById("rangeValueEthyl").innerHTML = eaConc + " M";
  document.getElementById("acetConc").innerHTML = eaConc + " M";
}

function rangeSlideNaOH(value) {
  shConc = document.getElementById("ohConc").value;
  document.getElementById("rangeValueNaOH").innerHTML = shConc + " M";
  document.getElementById("ohConce").innerHTML = shConc + " M";
}
// 2.7182818284590452353602874713527
function initialiseExp() {
  // let powVal = (-45574/(8.314*(temp+273)));
  // k = 648868942*Math.pow(e, (-45574 / (8.314 *(setTemp + 273))));
  // k = 648868942 * Math.pow(2.7182818284590452353602874713527, powVal)  ;
  // k = 648868942 * Math.pow(e,-45574 / (8.314 * (setTemp + 273)))
  // k  = 648868942 * (2.7182818284590452353602874713527  ** (-45574/(8.314*(temp+273))));
  k =
    648868942 *
    2.7182818284590452353602874713527 ** (-45574 / (8.314 * (setTemp + 273)));
  console.log(setTemp, k, e);
}

let lTop = 0;

function setLiquidPos() {
  // console.log(1);
  if (liquidPos.top >= 152 && liquidPos.top <= 235) {
    lTop = liquidPos.top + (0.9 * (eaLPH + shLPH) + 19.79) / 199.79;
    liquidPos.top = liquidPos.top - 0.5;
    liquidPos.height = liquidPos.height + 0.5;
    document.getElementById("liquidLid").style.top = `${lTop}px`;
    document.getElementById("liquidLid").style.height = `${liquidPos.height}px`;
    if (liquidPos.top == 151.5) {
      waterFlowCount += 1;
      if (waterFlowCount == 1) {
        if (resetClicked) {
          document.getElementById("w3").style.visibility = "hidden";
          document.getElementById("w1").style.visibility = "hidden";
          document.getElementById("w2").style.visibility = "hidden";
          clearInterval(waterTimer);
          waterFlowCount = 0;
        } else {
          document.getElementById("w3").style.visibility = "hidden";
          document.getElementById("w2").style.visibility = "hidden";
          document.getElementById("w1").style.visibility = "visible";
        }
        // console.log("Reached water level")
        waterTimer = setInterval(function () {
          waterFlowMovement("w1", "w2");
        }, 500);
      }
    }
  }
}
let tableArray = [];

function setLPH(sideLPH) {
  if (sideLPH == "rot1") {
    eaLPH = Number(((1100 - 5 * leftMotorPos) / 4).toFixed(2));
    // console.log(leftMotorPos);
    document.getElementById("lR").innerHTML = `${eaLPH} LPH`;
  } else if (sideLPH == "rot2") {
    shLPH = Number(((1100 - 5 * rightMotorPos) / 4).toFixed(2));
    document.getElementById("rR").innerHTML = `${shLPH} LPH`;
  }
  calcConductivity();
  document.getElementById("condDiv").style.visibility = "visible";

  if (eaLPH && shLPH) {
    document.getElementById("addReading").disabled = false;
    document.getElementById("condVal").innerHTML = Number(actCond.toFixed(2));
  } else {
    document.getElementById("addReading").disabled = true;
    document.getElementById("condVal").innerHTML = "NaN";
  }
  if (isNaN(document.getElementById("condVal").innerHTML)) {
    document.getElementById("condVal").innerHTML = (0.0).toFixed(2);
  }
  document.getElementById("addReading").onclick = function () {
    addReadingsToTable(eaLPH, shLPH, Number(actCond.toFixed(2)));
  };
  displayMsg();
}

function displayMsg() {
  if (naohSetFirst === true || shLPH > eaLPH || (eaLPH === 0 && shLPH === 0)) {
    document.getElementById("msg").style.visibility = "hidden";
  } else if (naohSetFirst === false || shLPH < eaLPH) {
    document.getElementById("msg").style.visibility = "visible";
  }
}

function checkForError() {
  if ((shConc * shLPH) / (eaConc * eaLPH) < 1) {
    alert("Error!!");
  }
}

timerSet = setInterval(() => {
  rotameterAnimation("leftMotor");
  rotameterAnimation("rightMotor");
  waveAnimation("liquidLid");
}, 350);

function calcConductivity() {
  // oldCond = actCond;
  tau = (totVol * 60 * 60) / (1000 * (eaLPH + shLPH));
  CaO = (eaConc * eaLPH) / (eaLPH + shLPH);
  CbO = (shConc * shLPH) / (eaLPH + shLPH);
  molRatio = (shConc * shLPH) / (eaConc * eaLPH);
  Xa =
    (1 +
      molRatio +
      1 / (k * tau * CaO) -
      Math.pow(
        Math.pow(1 + molRatio + 1 / (k * tau * CaO), 2) - 4 * molRatio,
        0.5
      )) /
    2;
  // Xa =((1 + molRatio + 1 / (k * tau * CaO)) - Math.sqrt((1 + molRatio + 1 / (k * tau * CaO)) * (1 + molRatio + 1 / (k * tau * CaO)) - 4 * molRatio)) / 2;
  // Xa = (1 +  molRatio + 1 /  k /  tau /  CaO - Math.sqrt((1 +  molRatio + 1 /  k /  tau /  CaO) * (1 +  molRatio + 1 /  k /  tau /  CaO) - 4 *  molRatio)) / 2;
  Ca = CaO * (1 - Xa);
  Cb = Ca - CaO + CbO;
  CondAmb = (Cb + 6.38 * Math.pow(10, -5)) / (2.6 * Math.pow(10, -4));
  actCond = CondAmb / (1 + 0.0145 * (setTemp - 28));
  //   console.log(`
  //   Reactor Volume: ${totVol}litre,
  //   Volume Rate of Ethyl alchohol(LPM): ${eaLPH},
  //   Stock concentration of Ethyl Acetate: ${eaConc},
  //   Volume Rate of NaOH(LPM): ${shLPH},
  //   Stock concentration of NaOH:${shConc},
  //   Temp: ${setTemp},

  //   k: ${k},
  //   Tau: ${tau},
  //   Cao: ${CaO},
  //   Cbo: ${CbO},
  //   Xa: ${Xa},
  //   Ca: ${Ca},
  //   Cb: ${Cb},
  //   CondAmb = ${CondAmb},
  //   molRatio: ${molRatio},
  //   Conductivity: ${actCond}`);
  // }
}

function highlight() {
  if (document.getElementById("highlight").style.visibility == "hidden")
    document.getElementById("highlight").style.visibility = "visible";
  else document.getElementById("highlight").style.visibility = "hidden";
}
let stophighlight = 0;

function addReadingsToTable(eaLPH, shLPH, conductivity) {
  stophighlight = setInterval(function () {
    highlight();
  }, 300);
  setTimeout(function () {
    clearInterval(stophighlight);
  }, 1400);
  $("#observTable")
    .delay(900)
    .queue(function (generate_table) {
      $(this).append(
        "<thead><tr style='text-align:center;'><td>" +
          eaLPH +
          "</td><td>" +
          shLPH +
          "</td><td>" +
          conductivity +
          "</td></tr></thead>"
      );
      generate_table();
    });
}

function restartExperiment() {
  gotoSetup();
  hideAllExperimentParts();
  document.getElementById("w3").style.visibility = "hidden";
  document.getElementById("w1").style.visibility = "hidden";
  document.getElementById("w2").style.visibility = "hidden";
  resetClicked = true;
}

function hideSomeApparatus() {
  document.getElementById("condDiv").style.visibility = "hidden";
  document.getElementById("w1").style.visibility = "hidden";
  document.getElementById("w2").style.visibility = "hidden";
  document.getElementById("w3").style.visibility = "visible";
}

let reactTemp = 0,
  rateConst = 0,
  freqFact = 0,
  actEng = 0;

function evaluateEntries() {
  reactTemp = document.getElementById("reactionTempEval").value;
  rateConst = document.getElementById("rateConstEval").value;
  freqFact = document.getElementById("freqFactor").value;
  actEng = document.getElementById("activationEnergy").value;
  if (
    !reactTemp ||
    reactTemp == null ||
    !rateConst ||
    rateConst == null ||
    !freqFact ||
    freqFact == null ||
    actEng == null ||
    !actEng
  ) {
    alert(" Enter appropriate values in the input field to proceed....");
  } else {
    document.getElementById("highlightEvaluation").style.visibility = "visible";
    addEvaluationFormReadingsToTable(reactTemp, rateConst, freqFact, actEng);
  }
}

let simRateConst = 0,
  simFreqFact = 0,
  simActEng = 0;

function addEvaluationFormReadingsToTable(
  reactTemp,
  rateConst,
  freqFact,
  actEng
) {
  $("#configInputTable")
    .delay(900)
    .queue(function (generate_table) {
      $(this).append(
        "<tr style='text-align:center; background-color:lightgrey;'><td>" +
          reactTemp +
          "</td><td>" +
          rateConst +
          "</td><td>" +
          freqFact +
          "</td><td>" +
          actEng +
          "</td></tr>"
      );
      generate_table();
    });
  let temp = Number(document.getElementById("reactionTempEval").value);
  simRateConst = Number(
    648868942 *
      2.7182818284590452353602874713527 ** (-45574 / (8.314 * (temp + 273)))
  ); //same as k
  simFreqFact = 6.49;
  simActEng = 45574;
  $("#configSimulatedTable")
    .delay(900)
    .queue(function (generate_table) {
      $(this).append(
        "<tr style='text-align:center; background-color:lightgrey;'><td>" +
          reactTemp +
          "</td><td>" +
          simRateConst.toFixed(2) +
          "</td><td>" +
          simFreqFact +
          "</td><td>" +
          simActEng +
          "</td></tr>"
      );
      generate_table();
    });
}

function clearEvalReadings() {
  clearTableRows("configInputTable");
  clearTableRows("configSimulatedTable");
}

function clearTableRows(tableId) {
  var rows = document.getElementById(tableId).rows;
  var i = rows.length;
  while (--i) {
    rows[i].parentNode.removeChild(rows[i]);
  }
}
