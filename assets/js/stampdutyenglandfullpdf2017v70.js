
//stamp duty calculator england, wales and northern ireland

function getStampDutyOnHouse(){

var house_price_input=document.getElementById("price_house").value;
var house_price=parseFloat(house_price_input.replace(/,/g, ''));
var price = house_price_input;

document.cookie = 'c-price=' + price;

if (house_price < 125000.01){var stampDuty= 0;}
else if (house_price >= 125000.01 && house_price <=250000.00){var stampDuty= (house_price - 125000)*0.02;}
else if (house_price >= 250000.01 && house_price <=925000.00){var stampDuty = ((house_price - 250000)*0.05)+2500;}
else if (house_price >= 925000.01 && house_price <=1500000.00){var stampDuty = ((house_price - 925000)*0.1)+36250;}
else if (house_price >= 1500000.01){var stampDuty =((house_price - 1500000)*0.12)+93750;}
stampDuty = Math.floor(stampDuty);
effectiveRateLong = (stampDuty/house_price)*100;
effectiveRate = Math.round(effectiveRateLong * 100)/100.000;

var SDLT = "Stamp Duty:   \u00A3" + parseInt(stampDuty).toLocaleString() + "";
var SDLTNUM = parseInt(stampDuty).toLocaleString() + "";
var SDER  = "" + effectiveRate +"\u0025";

document.getElementById("results").innerHTML = SDLT
document.getElementById("results-effective-rate").innerHTML = SDER

document.cookie = 'c-sdlt=' + SDLTNUM;
document.cookie = 'c-sdlter=' + SDER;

//calculations for stamp duty bands

var stampDutyBandA= 0;
var stampDutyBandB= 0;
var stampDutyBandC= 0;
var stampDutyBandD= 0;
var stampDutyBandE= 0;

if (house_price < 125000.01){var stampDutyBandA= 0;}
else if (house_price >= 125000.01 && house_price <=250000.00){var stampDutyBandB = ((house_price - 125000)*0.02);}
else if (house_price >= 250000.01 && house_price <=925000.00){var stampDutyBandB = 2500; var stampDutyBandC = ((house_price - 250000)*0.05);}
else if (house_price >= 925000.01 && house_price <=1500000.00){var stampDutyBandB = 2500; var stampDutyBandC = 33750; var stampDutyBandD = ((house_price - 925000)*0.1);}
else if (house_price >= 1500000.01){var stampDutyBandB = 2500; var stampDutyBandC = 33750; var stampDutyBandD = 57500; var stampDutyBandE = ((house_price - 1500000)*0.12);}

stampDutyBandA = Math.floor(stampDutyBandA);
stampDutyBandB = Math.floor(stampDutyBandB);
stampDutyBandC = Math.floor(stampDutyBandC);
stampDutyBandD = Math.floor(stampDutyBandD);
stampDutyBandE = Math.floor(stampDutyBandE);

var SDBA  = "\u00A3" + parseInt( stampDutyBandA ).toLocaleString() + "";
var SDBB  = "\u00A3" + parseInt( stampDutyBandB ).toLocaleString() + "";
var SDBC  = "\u00A3" + parseInt( stampDutyBandC ).toLocaleString() + "";
var SDBD  = "\u00A3" + parseInt( stampDutyBandD ).toLocaleString() + "";
var SDBE = "\u00A3" + parseInt(stampDutyBandE).toLocaleString() + "";

var SDBAPDF = parseInt(stampDutyBandA).toLocaleString() + "";
var SDBBPDF = parseInt(stampDutyBandB).toLocaleString() + "";
var SDBCPDF = parseInt(stampDutyBandC).toLocaleString() + "";
var SDBDPDF = parseInt(stampDutyBandD).toLocaleString() + "";
var SDBEPDF = parseInt(stampDutyBandE).toLocaleString() + "";

document.getElementById("results-sdltbanda").innerHTML = SDBA
document.getElementById("results-sdltbandb").innerHTML = SDBB
document.getElementById("results-sdltbandc").innerHTML = SDBC
document.getElementById("results-sdltbandd").innerHTML = SDBD
document.getElementById("results-sdltbande").innerHTML = SDBE

document.cookie = 'c-sdltbanda=' + SDBAPDF;
document.cookie = 'c-sdltbandb=' + SDBBPDF;
document.cookie = 'c-sdltbandc=' + SDBCPDF;
document.cookie = 'c-sdltbandd=' + SDBDPDF;
document.cookie = 'c-sdltbande=' + SDBEPDF;

//calculations for taxable sum for each band

var taxSumBandA = 0;
var taxSumBandB = 0;
var taxSumBandC = 0;
var taxSumBandD = 0;
var taxSumBandE = 0;

if (house_price < 125000.01){var taxSumBandA = 0;}
else if (house_price >= 125000.01 && house_price <=250000.00){var taxSumBandB = (house_price - 125000);}
else if (house_price >= 250000.01 && house_price <=925000.00){var taxSumBandB = 125000; var taxSumBandC = (house_price - 250000);}
else if (house_price >= 925000.01 && house_price <=1500000.00){var taxSumBandB = 125000; var taxSumBandC = 675000; var taxSumBandD = (house_price - 925000);}
else if (house_price >= 1500000.01){var taxSumBandB = 125000; var taxSumBandC = 675000; var taxSumBandD = 575000; var taxSumBandE = (house_price - 1500000);}

taxSumBandA = Math.floor(taxSumBandA);
taxSumBandB = Math.floor(taxSumBandB);
taxSumBandC = Math.floor(taxSumBandC);
taxSumBandD = Math.floor(taxSumBandD);
taxSumBandE = Math.floor(taxSumBandE);

var TSBA  = "\u00A3" + parseInt( taxSumBandA ).toLocaleString() + "";
var TSBB  = "\u00A3" + parseInt( taxSumBandB ).toLocaleString() + "";
var TSBC  = "\u00A3" + parseInt( taxSumBandC ).toLocaleString() + "";
var TSBD  = "\u00A3" + parseInt( taxSumBandD ).toLocaleString() + "";
var TSBE = "\u00A3" + parseInt(taxSumBandE).toLocaleString() + "";

var TSBAPDF = parseInt(taxSumBandA).toLocaleString() + "";
var TSBBPDF = parseInt(taxSumBandB).toLocaleString() + "";
var TSBCPDF = parseInt(taxSumBandC).toLocaleString() + "";
var TSBDPDF = parseInt(taxSumBandD).toLocaleString() + "";
var TSBEPDF = parseInt(taxSumBandE).toLocaleString() + "";

document.getElementById("results-taxsuma").innerHTML = TSBA
document.getElementById("results-taxsumb").innerHTML = TSBB
document.getElementById("results-taxsumc").innerHTML = TSBC
document.getElementById("results-taxsumd").innerHTML = TSBD
document.getElementById("results-taxsume").innerHTML = TSBE

document.cookie = 'c-sdlttaxsuma=' + TSBAPDF;
document.cookie = 'c-sdlttaxsumb=' + TSBBPDF;
document.cookie = 'c-sdlttaxsumc=' + TSBCPDF;
document.cookie = 'c-sdlttaxsumd=' + TSBDPDF;
document.cookie = 'c-sdlttaxsume=' + TSBEPDF;

}





