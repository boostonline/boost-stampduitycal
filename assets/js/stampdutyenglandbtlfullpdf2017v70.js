
//stamp duty calculator england, wales and northern ireland buy to let

function StampDutyBTL(){

var house_price_input=document.getElementById("price_house_btl").value;
var house_price=parseFloat(house_price_input.replace(/,/g, ''));
var price_btl = house_price_input;

document.cookie = 'c-pricebtl='+ price_btl;

if (house_price < 40000){var stampDuty= 0;}
else if (house_price >= 40000 && house_price <=125000.00){var stampDuty = (house_price)*0.03;}
else if (house_price >= 125000.01 && house_price <=250000.00){var stampDuty = ((house_price - 125000)*0.05)+3750;}
else if (house_price >= 250000.01 && house_price <=925000.00){var stampDuty = ((house_price - 250000)*0.08)+10000;}
else if (house_price >= 925000.01 && house_price <=1500000.00){var stampDuty = ((house_price - 925000)*0.13)+64000;}
else if (house_price >= 1500000.01){var stampDuty = ((house_price - 1500000)*0.15)+138750;}
stampDuty = Math.floor(stampDuty);
effectiveRateLong = (stampDuty/house_price)*100;
effectiveRate = Math.round(effectiveRateLong * 100)/100.000;

var SDLT = "Stamp Duty:   \u00A3" + parseInt(stampDuty).toLocaleString() + "";
var SDLTNUM = parseInt(stampDuty).toLocaleString() + "";
var SDER  = "" + effectiveRate +"\u0025";

document.getElementById("results_btl").innerHTML = SDLT
document.getElementById("results-btl-effective-rate").innerHTML = SDER

document.cookie = 'c-sdltbtl=' + SDLTNUM;
document.cookie = 'c-sdltbtler=' + SDER;


//calculations for stamp duty bands

var stampDutyBandA= 0;
var stampDutyBandB= 0;
var stampDutyBandC= 0;
var stampDutyBandD= 0;
var stampDutyBandE= 0;

if (house_price < 40000){var stampDutyBandA= 0;}
else if (house_price >= 40000 && house_price <=125000.00){var stampDutyBandA = (house_price)*0.03;}
else if (house_price >= 125000.01 && house_price <=250000.00){var stampDutyBandA = 3750; var stampDutyBandB = ((house_price - 125000)*0.05);}
else if (house_price >= 250000.01 && house_price <=925000.00){var stampDutyBandA = 3750; var stampDutyBandB = 6250; var stampDutyBandC = ((house_price - 250000)*0.08);}
else if (house_price >= 925000.01 && house_price <=1500000.00){var stampDutyBandA = 3750; var stampDutyBandB = 6250; var stampDutyBandC = 54000; var stampDutyBandD = ((house_price - 925000)*0.13);}
else if (house_price >= 1500000.01){var stampDutyBandA = 3750; var stampDutyBandB = 6250; var stampDutyBandC = 54000; var stampDutyBandD = 74750; stampDutyBandE = ((house_price - 1500000)*0.15);}

stampDutyBandA = Math.floor(stampDutyBandA);
stampDutyBandB = Math.floor(stampDutyBandB);
stampDutyBandC = Math.floor(stampDutyBandC);
stampDutyBandD = Math.floor(stampDutyBandD);
stampDutyBandE = Math.floor(stampDutyBandE);

var SDBA = "\u00A3" + parseInt(stampDutyBandA).toLocaleString() + "";
var SDBB  = "\u00A3" + parseInt( stampDutyBandB ).toLocaleString() + "";
var SDBC  = "\u00A3" + parseInt( stampDutyBandC ).toLocaleString() + "";
var SDBD  = "\u00A3" + parseInt( stampDutyBandD ).toLocaleString() + "";
var SDBE = "\u00A3" + parseInt(stampDutyBandE).toLocaleString() + "";

var SDBAPDF = parseInt(stampDutyBandA).toLocaleString() + "";
var SDBBPDF = parseInt(stampDutyBandB).toLocaleString() + "";
var SDBCPDF = parseInt(stampDutyBandC).toLocaleString() + "";
var SDBDPDF = parseInt(stampDutyBandD).toLocaleString() + "";
var SDBEPDF = parseInt(stampDutyBandE).toLocaleString() + "";

document.getElementById("results-btlsdltbanda").innerHTML = SDBA
document.getElementById("results-btlsdltbandb").innerHTML = SDBB
document.getElementById("results-btlsdltbandc").innerHTML = SDBC
document.getElementById("results-btlsdltbandd").innerHTML = SDBD
document.getElementById("results-btlsdltbande").innerHTML = SDBE

document.cookie = 'c-sdltbtlbanda=' + SDBAPDF;
document.cookie = 'c-sdltbtlbandb=' + SDBBPDF;
document.cookie = 'c-sdltbtlbandc=' + SDBCPDF;
document.cookie = 'c-sdltbtlbandd=' + SDBDPDF;
document.cookie = 'c-sdltbtlbande=' + SDBEPDF;

//calculations for taxable sum for each band

var taxSumBandA = 0;
var taxSumBandB = 0;
var taxSumBandC = 0;
var taxSumBandD = 0;
var taxSumBandE = 0;

if (house_price < 40000){var taxSumBandA = 0;}
else if (house_price >= 40000 && house_price <= 125000.00){var taxSumBandA = house_price;}
else if (house_price >= 125000.01 && house_price <=250000.00){var taxSumBandA = 125000; var taxSumBandB = (house_price - 125000);}
else if (house_price >= 250000.01 && house_price <=925000.00){var taxSumBandA = 125000; var taxSumBandB = 125000; var taxSumBandC = (house_price - 250000);}
else if (house_price >= 925000.01 && house_price <=1500000.00){var taxSumBandA = 125000; var taxSumBandB = 125000; var taxSumBandC = 675000; var taxSumBandD = (house_price - 925000);}
else if (house_price >= 1500000.01){var taxSumBandA = 125000; var taxSumBandB = 125000; var taxSumBandC = 675000; var taxSumBandD = 575000; var taxSumBandE = (house_price - 1500000);}

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

document.getElementById("results-btltaxsuma").innerHTML = TSBA
document.getElementById("results-btltaxsumb").innerHTML = TSBB
document.getElementById("results-btltaxsumc").innerHTML = TSBC
document.getElementById("results-btltaxsumd").innerHTML = TSBD
document.getElementById("results-btltaxsume").innerHTML = TSBE

document.cookie = 'c-sdltbtltaxsuma=' + TSBAPDF;
document.cookie = 'c-sdltbtltaxsumb=' + TSBBPDF;
document.cookie = 'c-sdltbtltaxsumc=' + TSBCPDF;
document.cookie = 'c-sdltbtltaxsumd=' + TSBDPDF;
document.cookie = 'c-sdltbtltaxsume=' + TSBEPDF;

}

