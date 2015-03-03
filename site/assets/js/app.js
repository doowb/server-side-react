(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var Authentication = require('./apps/Authentication.jsx');
var UserList = require('./apps/UserList.jsx');
var Chat = require('./apps/Chat.jsx');

var data = {
  username: null
};


function onSignonSubmit (user) {
  data.username = user.username;
  renderAll();
}

function onSignoutSubmit (user) {
  data.username = null;
  renderAll();
}

var comments = [];

function renderAll () {
  renderAuthentication();
  renderUserList();
  renderChat();
}

function renderChat () {
  console.log('renderChat', data.username);
  React.render(
    React.createElement(Chat, {comments: comments, username: data.username, pollInterval: 10000}),
    document.getElementById('chat')
  );
}

function renderAuthentication () {
  React.render(
    React.createElement(Authentication, {onSignonSubmit: onSignonSubmit, onSignoutSubmit: onSignoutSubmit, username: data.username}),
    document.getElementById('navbar')
  );
}

function renderUserList () {
  React.render(
    React.createElement(UserList, null),
    document.getElementById('userlist')
  );
}

renderAll();


},{"./apps/Authentication.jsx":63,"./apps/Chat.jsx":64,"./apps/UserList.jsx":65}],2:[function(require,module,exports){
'use strict';


module.exports = require('./lib/');

},{"./lib/":16}],3:[function(require,module,exports){
// List of valid entities
//
// Generate with ./support/entities.js script
//
'use strict';

/*eslint quotes:0*/
module.exports = {
  "Aacute":"\u00C1",
  "aacute":"\u00E1",
  "Abreve":"\u0102",
  "abreve":"\u0103",
  "ac":"\u223E",
  "acd":"\u223F",
  "acE":"\u223E\u0333",
  "Acirc":"\u00C2",
  "acirc":"\u00E2",
  "acute":"\u00B4",
  "Acy":"\u0410",
  "acy":"\u0430",
  "AElig":"\u00C6",
  "aelig":"\u00E6",
  "af":"\u2061",
  "Afr":"\uD835\uDD04",
  "afr":"\uD835\uDD1E",
  "Agrave":"\u00C0",
  "agrave":"\u00E0",
  "alefsym":"\u2135",
  "aleph":"\u2135",
  "Alpha":"\u0391",
  "alpha":"\u03B1",
  "Amacr":"\u0100",
  "amacr":"\u0101",
  "amalg":"\u2A3F",
  "AMP":"\u0026",
  "amp":"\u0026",
  "And":"\u2A53",
  "and":"\u2227",
  "andand":"\u2A55",
  "andd":"\u2A5C",
  "andslope":"\u2A58",
  "andv":"\u2A5A",
  "ang":"\u2220",
  "ange":"\u29A4",
  "angle":"\u2220",
  "angmsd":"\u2221",
  "angmsdaa":"\u29A8",
  "angmsdab":"\u29A9",
  "angmsdac":"\u29AA",
  "angmsdad":"\u29AB",
  "angmsdae":"\u29AC",
  "angmsdaf":"\u29AD",
  "angmsdag":"\u29AE",
  "angmsdah":"\u29AF",
  "angrt":"\u221F",
  "angrtvb":"\u22BE",
  "angrtvbd":"\u299D",
  "angsph":"\u2222",
  "angst":"\u00C5",
  "angzarr":"\u237C",
  "Aogon":"\u0104",
  "aogon":"\u0105",
  "Aopf":"\uD835\uDD38",
  "aopf":"\uD835\uDD52",
  "ap":"\u2248",
  "apacir":"\u2A6F",
  "apE":"\u2A70",
  "ape":"\u224A",
  "apid":"\u224B",
  "apos":"\u0027",
  "ApplyFunction":"\u2061",
  "approx":"\u2248",
  "approxeq":"\u224A",
  "Aring":"\u00C5",
  "aring":"\u00E5",
  "Ascr":"\uD835\uDC9C",
  "ascr":"\uD835\uDCB6",
  "Assign":"\u2254",
  "ast":"\u002A",
  "asymp":"\u2248",
  "asympeq":"\u224D",
  "Atilde":"\u00C3",
  "atilde":"\u00E3",
  "Auml":"\u00C4",
  "auml":"\u00E4",
  "awconint":"\u2233",
  "awint":"\u2A11",
  "backcong":"\u224C",
  "backepsilon":"\u03F6",
  "backprime":"\u2035",
  "backsim":"\u223D",
  "backsimeq":"\u22CD",
  "Backslash":"\u2216",
  "Barv":"\u2AE7",
  "barvee":"\u22BD",
  "Barwed":"\u2306",
  "barwed":"\u2305",
  "barwedge":"\u2305",
  "bbrk":"\u23B5",
  "bbrktbrk":"\u23B6",
  "bcong":"\u224C",
  "Bcy":"\u0411",
  "bcy":"\u0431",
  "bdquo":"\u201E",
  "becaus":"\u2235",
  "Because":"\u2235",
  "because":"\u2235",
  "bemptyv":"\u29B0",
  "bepsi":"\u03F6",
  "bernou":"\u212C",
  "Bernoullis":"\u212C",
  "Beta":"\u0392",
  "beta":"\u03B2",
  "beth":"\u2136",
  "between":"\u226C",
  "Bfr":"\uD835\uDD05",
  "bfr":"\uD835\uDD1F",
  "bigcap":"\u22C2",
  "bigcirc":"\u25EF",
  "bigcup":"\u22C3",
  "bigodot":"\u2A00",
  "bigoplus":"\u2A01",
  "bigotimes":"\u2A02",
  "bigsqcup":"\u2A06",
  "bigstar":"\u2605",
  "bigtriangledown":"\u25BD",
  "bigtriangleup":"\u25B3",
  "biguplus":"\u2A04",
  "bigvee":"\u22C1",
  "bigwedge":"\u22C0",
  "bkarow":"\u290D",
  "blacklozenge":"\u29EB",
  "blacksquare":"\u25AA",
  "blacktriangle":"\u25B4",
  "blacktriangledown":"\u25BE",
  "blacktriangleleft":"\u25C2",
  "blacktriangleright":"\u25B8",
  "blank":"\u2423",
  "blk12":"\u2592",
  "blk14":"\u2591",
  "blk34":"\u2593",
  "block":"\u2588",
  "bne":"\u003D\u20E5",
  "bnequiv":"\u2261\u20E5",
  "bNot":"\u2AED",
  "bnot":"\u2310",
  "Bopf":"\uD835\uDD39",
  "bopf":"\uD835\uDD53",
  "bot":"\u22A5",
  "bottom":"\u22A5",
  "bowtie":"\u22C8",
  "boxbox":"\u29C9",
  "boxDL":"\u2557",
  "boxDl":"\u2556",
  "boxdL":"\u2555",
  "boxdl":"\u2510",
  "boxDR":"\u2554",
  "boxDr":"\u2553",
  "boxdR":"\u2552",
  "boxdr":"\u250C",
  "boxH":"\u2550",
  "boxh":"\u2500",
  "boxHD":"\u2566",
  "boxHd":"\u2564",
  "boxhD":"\u2565",
  "boxhd":"\u252C",
  "boxHU":"\u2569",
  "boxHu":"\u2567",
  "boxhU":"\u2568",
  "boxhu":"\u2534",
  "boxminus":"\u229F",
  "boxplus":"\u229E",
  "boxtimes":"\u22A0",
  "boxUL":"\u255D",
  "boxUl":"\u255C",
  "boxuL":"\u255B",
  "boxul":"\u2518",
  "boxUR":"\u255A",
  "boxUr":"\u2559",
  "boxuR":"\u2558",
  "boxur":"\u2514",
  "boxV":"\u2551",
  "boxv":"\u2502",
  "boxVH":"\u256C",
  "boxVh":"\u256B",
  "boxvH":"\u256A",
  "boxvh":"\u253C",
  "boxVL":"\u2563",
  "boxVl":"\u2562",
  "boxvL":"\u2561",
  "boxvl":"\u2524",
  "boxVR":"\u2560",
  "boxVr":"\u255F",
  "boxvR":"\u255E",
  "boxvr":"\u251C",
  "bprime":"\u2035",
  "Breve":"\u02D8",
  "breve":"\u02D8",
  "brvbar":"\u00A6",
  "Bscr":"\u212C",
  "bscr":"\uD835\uDCB7",
  "bsemi":"\u204F",
  "bsim":"\u223D",
  "bsime":"\u22CD",
  "bsol":"\u005C",
  "bsolb":"\u29C5",
  "bsolhsub":"\u27C8",
  "bull":"\u2022",
  "bullet":"\u2022",
  "bump":"\u224E",
  "bumpE":"\u2AAE",
  "bumpe":"\u224F",
  "Bumpeq":"\u224E",
  "bumpeq":"\u224F",
  "Cacute":"\u0106",
  "cacute":"\u0107",
  "Cap":"\u22D2",
  "cap":"\u2229",
  "capand":"\u2A44",
  "capbrcup":"\u2A49",
  "capcap":"\u2A4B",
  "capcup":"\u2A47",
  "capdot":"\u2A40",
  "CapitalDifferentialD":"\u2145",
  "caps":"\u2229\uFE00",
  "caret":"\u2041",
  "caron":"\u02C7",
  "Cayleys":"\u212D",
  "ccaps":"\u2A4D",
  "Ccaron":"\u010C",
  "ccaron":"\u010D",
  "Ccedil":"\u00C7",
  "ccedil":"\u00E7",
  "Ccirc":"\u0108",
  "ccirc":"\u0109",
  "Cconint":"\u2230",
  "ccups":"\u2A4C",
  "ccupssm":"\u2A50",
  "Cdot":"\u010A",
  "cdot":"\u010B",
  "cedil":"\u00B8",
  "Cedilla":"\u00B8",
  "cemptyv":"\u29B2",
  "cent":"\u00A2",
  "CenterDot":"\u00B7",
  "centerdot":"\u00B7",
  "Cfr":"\u212D",
  "cfr":"\uD835\uDD20",
  "CHcy":"\u0427",
  "chcy":"\u0447",
  "check":"\u2713",
  "checkmark":"\u2713",
  "Chi":"\u03A7",
  "chi":"\u03C7",
  "cir":"\u25CB",
  "circ":"\u02C6",
  "circeq":"\u2257",
  "circlearrowleft":"\u21BA",
  "circlearrowright":"\u21BB",
  "circledast":"\u229B",
  "circledcirc":"\u229A",
  "circleddash":"\u229D",
  "CircleDot":"\u2299",
  "circledR":"\u00AE",
  "circledS":"\u24C8",
  "CircleMinus":"\u2296",
  "CirclePlus":"\u2295",
  "CircleTimes":"\u2297",
  "cirE":"\u29C3",
  "cire":"\u2257",
  "cirfnint":"\u2A10",
  "cirmid":"\u2AEF",
  "cirscir":"\u29C2",
  "ClockwiseContourIntegral":"\u2232",
  "CloseCurlyDoubleQuote":"\u201D",
  "CloseCurlyQuote":"\u2019",
  "clubs":"\u2663",
  "clubsuit":"\u2663",
  "Colon":"\u2237",
  "colon":"\u003A",
  "Colone":"\u2A74",
  "colone":"\u2254",
  "coloneq":"\u2254",
  "comma":"\u002C",
  "commat":"\u0040",
  "comp":"\u2201",
  "compfn":"\u2218",
  "complement":"\u2201",
  "complexes":"\u2102",
  "cong":"\u2245",
  "congdot":"\u2A6D",
  "Congruent":"\u2261",
  "Conint":"\u222F",
  "conint":"\u222E",
  "ContourIntegral":"\u222E",
  "Copf":"\u2102",
  "copf":"\uD835\uDD54",
  "coprod":"\u2210",
  "Coproduct":"\u2210",
  "COPY":"\u00A9",
  "copy":"\u00A9",
  "copysr":"\u2117",
  "CounterClockwiseContourIntegral":"\u2233",
  "crarr":"\u21B5",
  "Cross":"\u2A2F",
  "cross":"\u2717",
  "Cscr":"\uD835\uDC9E",
  "cscr":"\uD835\uDCB8",
  "csub":"\u2ACF",
  "csube":"\u2AD1",
  "csup":"\u2AD0",
  "csupe":"\u2AD2",
  "ctdot":"\u22EF",
  "cudarrl":"\u2938",
  "cudarrr":"\u2935",
  "cuepr":"\u22DE",
  "cuesc":"\u22DF",
  "cularr":"\u21B6",
  "cularrp":"\u293D",
  "Cup":"\u22D3",
  "cup":"\u222A",
  "cupbrcap":"\u2A48",
  "CupCap":"\u224D",
  "cupcap":"\u2A46",
  "cupcup":"\u2A4A",
  "cupdot":"\u228D",
  "cupor":"\u2A45",
  "cups":"\u222A\uFE00",
  "curarr":"\u21B7",
  "curarrm":"\u293C",
  "curlyeqprec":"\u22DE",
  "curlyeqsucc":"\u22DF",
  "curlyvee":"\u22CE",
  "curlywedge":"\u22CF",
  "curren":"\u00A4",
  "curvearrowleft":"\u21B6",
  "curvearrowright":"\u21B7",
  "cuvee":"\u22CE",
  "cuwed":"\u22CF",
  "cwconint":"\u2232",
  "cwint":"\u2231",
  "cylcty":"\u232D",
  "Dagger":"\u2021",
  "dagger":"\u2020",
  "daleth":"\u2138",
  "Darr":"\u21A1",
  "dArr":"\u21D3",
  "darr":"\u2193",
  "dash":"\u2010",
  "Dashv":"\u2AE4",
  "dashv":"\u22A3",
  "dbkarow":"\u290F",
  "dblac":"\u02DD",
  "Dcaron":"\u010E",
  "dcaron":"\u010F",
  "Dcy":"\u0414",
  "dcy":"\u0434",
  "DD":"\u2145",
  "dd":"\u2146",
  "ddagger":"\u2021",
  "ddarr":"\u21CA",
  "DDotrahd":"\u2911",
  "ddotseq":"\u2A77",
  "deg":"\u00B0",
  "Del":"\u2207",
  "Delta":"\u0394",
  "delta":"\u03B4",
  "demptyv":"\u29B1",
  "dfisht":"\u297F",
  "Dfr":"\uD835\uDD07",
  "dfr":"\uD835\uDD21",
  "dHar":"\u2965",
  "dharl":"\u21C3",
  "dharr":"\u21C2",
  "DiacriticalAcute":"\u00B4",
  "DiacriticalDot":"\u02D9",
  "DiacriticalDoubleAcute":"\u02DD",
  "DiacriticalGrave":"\u0060",
  "DiacriticalTilde":"\u02DC",
  "diam":"\u22C4",
  "Diamond":"\u22C4",
  "diamond":"\u22C4",
  "diamondsuit":"\u2666",
  "diams":"\u2666",
  "die":"\u00A8",
  "DifferentialD":"\u2146",
  "digamma":"\u03DD",
  "disin":"\u22F2",
  "div":"\u00F7",
  "divide":"\u00F7",
  "divideontimes":"\u22C7",
  "divonx":"\u22C7",
  "DJcy":"\u0402",
  "djcy":"\u0452",
  "dlcorn":"\u231E",
  "dlcrop":"\u230D",
  "dollar":"\u0024",
  "Dopf":"\uD835\uDD3B",
  "dopf":"\uD835\uDD55",
  "Dot":"\u00A8",
  "dot":"\u02D9",
  "DotDot":"\u20DC",
  "doteq":"\u2250",
  "doteqdot":"\u2251",
  "DotEqual":"\u2250",
  "dotminus":"\u2238",
  "dotplus":"\u2214",
  "dotsquare":"\u22A1",
  "doublebarwedge":"\u2306",
  "DoubleContourIntegral":"\u222F",
  "DoubleDot":"\u00A8",
  "DoubleDownArrow":"\u21D3",
  "DoubleLeftArrow":"\u21D0",
  "DoubleLeftRightArrow":"\u21D4",
  "DoubleLeftTee":"\u2AE4",
  "DoubleLongLeftArrow":"\u27F8",
  "DoubleLongLeftRightArrow":"\u27FA",
  "DoubleLongRightArrow":"\u27F9",
  "DoubleRightArrow":"\u21D2",
  "DoubleRightTee":"\u22A8",
  "DoubleUpArrow":"\u21D1",
  "DoubleUpDownArrow":"\u21D5",
  "DoubleVerticalBar":"\u2225",
  "DownArrow":"\u2193",
  "Downarrow":"\u21D3",
  "downarrow":"\u2193",
  "DownArrowBar":"\u2913",
  "DownArrowUpArrow":"\u21F5",
  "DownBreve":"\u0311",
  "downdownarrows":"\u21CA",
  "downharpoonleft":"\u21C3",
  "downharpoonright":"\u21C2",
  "DownLeftRightVector":"\u2950",
  "DownLeftTeeVector":"\u295E",
  "DownLeftVector":"\u21BD",
  "DownLeftVectorBar":"\u2956",
  "DownRightTeeVector":"\u295F",
  "DownRightVector":"\u21C1",
  "DownRightVectorBar":"\u2957",
  "DownTee":"\u22A4",
  "DownTeeArrow":"\u21A7",
  "drbkarow":"\u2910",
  "drcorn":"\u231F",
  "drcrop":"\u230C",
  "Dscr":"\uD835\uDC9F",
  "dscr":"\uD835\uDCB9",
  "DScy":"\u0405",
  "dscy":"\u0455",
  "dsol":"\u29F6",
  "Dstrok":"\u0110",
  "dstrok":"\u0111",
  "dtdot":"\u22F1",
  "dtri":"\u25BF",
  "dtrif":"\u25BE",
  "duarr":"\u21F5",
  "duhar":"\u296F",
  "dwangle":"\u29A6",
  "DZcy":"\u040F",
  "dzcy":"\u045F",
  "dzigrarr":"\u27FF",
  "Eacute":"\u00C9",
  "eacute":"\u00E9",
  "easter":"\u2A6E",
  "Ecaron":"\u011A",
  "ecaron":"\u011B",
  "ecir":"\u2256",
  "Ecirc":"\u00CA",
  "ecirc":"\u00EA",
  "ecolon":"\u2255",
  "Ecy":"\u042D",
  "ecy":"\u044D",
  "eDDot":"\u2A77",
  "Edot":"\u0116",
  "eDot":"\u2251",
  "edot":"\u0117",
  "ee":"\u2147",
  "efDot":"\u2252",
  "Efr":"\uD835\uDD08",
  "efr":"\uD835\uDD22",
  "eg":"\u2A9A",
  "Egrave":"\u00C8",
  "egrave":"\u00E8",
  "egs":"\u2A96",
  "egsdot":"\u2A98",
  "el":"\u2A99",
  "Element":"\u2208",
  "elinters":"\u23E7",
  "ell":"\u2113",
  "els":"\u2A95",
  "elsdot":"\u2A97",
  "Emacr":"\u0112",
  "emacr":"\u0113",
  "empty":"\u2205",
  "emptyset":"\u2205",
  "EmptySmallSquare":"\u25FB",
  "emptyv":"\u2205",
  "EmptyVerySmallSquare":"\u25AB",
  "emsp":"\u2003",
  "emsp13":"\u2004",
  "emsp14":"\u2005",
  "ENG":"\u014A",
  "eng":"\u014B",
  "ensp":"\u2002",
  "Eogon":"\u0118",
  "eogon":"\u0119",
  "Eopf":"\uD835\uDD3C",
  "eopf":"\uD835\uDD56",
  "epar":"\u22D5",
  "eparsl":"\u29E3",
  "eplus":"\u2A71",
  "epsi":"\u03B5",
  "Epsilon":"\u0395",
  "epsilon":"\u03B5",
  "epsiv":"\u03F5",
  "eqcirc":"\u2256",
  "eqcolon":"\u2255",
  "eqsim":"\u2242",
  "eqslantgtr":"\u2A96",
  "eqslantless":"\u2A95",
  "Equal":"\u2A75",
  "equals":"\u003D",
  "EqualTilde":"\u2242",
  "equest":"\u225F",
  "Equilibrium":"\u21CC",
  "equiv":"\u2261",
  "equivDD":"\u2A78",
  "eqvparsl":"\u29E5",
  "erarr":"\u2971",
  "erDot":"\u2253",
  "Escr":"\u2130",
  "escr":"\u212F",
  "esdot":"\u2250",
  "Esim":"\u2A73",
  "esim":"\u2242",
  "Eta":"\u0397",
  "eta":"\u03B7",
  "ETH":"\u00D0",
  "eth":"\u00F0",
  "Euml":"\u00CB",
  "euml":"\u00EB",
  "euro":"\u20AC",
  "excl":"\u0021",
  "exist":"\u2203",
  "Exists":"\u2203",
  "expectation":"\u2130",
  "ExponentialE":"\u2147",
  "exponentiale":"\u2147",
  "fallingdotseq":"\u2252",
  "Fcy":"\u0424",
  "fcy":"\u0444",
  "female":"\u2640",
  "ffilig":"\uFB03",
  "fflig":"\uFB00",
  "ffllig":"\uFB04",
  "Ffr":"\uD835\uDD09",
  "ffr":"\uD835\uDD23",
  "filig":"\uFB01",
  "FilledSmallSquare":"\u25FC",
  "FilledVerySmallSquare":"\u25AA",
  "fjlig":"\u0066\u006A",
  "flat":"\u266D",
  "fllig":"\uFB02",
  "fltns":"\u25B1",
  "fnof":"\u0192",
  "Fopf":"\uD835\uDD3D",
  "fopf":"\uD835\uDD57",
  "ForAll":"\u2200",
  "forall":"\u2200",
  "fork":"\u22D4",
  "forkv":"\u2AD9",
  "Fouriertrf":"\u2131",
  "fpartint":"\u2A0D",
  "frac12":"\u00BD",
  "frac13":"\u2153",
  "frac14":"\u00BC",
  "frac15":"\u2155",
  "frac16":"\u2159",
  "frac18":"\u215B",
  "frac23":"\u2154",
  "frac25":"\u2156",
  "frac34":"\u00BE",
  "frac35":"\u2157",
  "frac38":"\u215C",
  "frac45":"\u2158",
  "frac56":"\u215A",
  "frac58":"\u215D",
  "frac78":"\u215E",
  "frasl":"\u2044",
  "frown":"\u2322",
  "Fscr":"\u2131",
  "fscr":"\uD835\uDCBB",
  "gacute":"\u01F5",
  "Gamma":"\u0393",
  "gamma":"\u03B3",
  "Gammad":"\u03DC",
  "gammad":"\u03DD",
  "gap":"\u2A86",
  "Gbreve":"\u011E",
  "gbreve":"\u011F",
  "Gcedil":"\u0122",
  "Gcirc":"\u011C",
  "gcirc":"\u011D",
  "Gcy":"\u0413",
  "gcy":"\u0433",
  "Gdot":"\u0120",
  "gdot":"\u0121",
  "gE":"\u2267",
  "ge":"\u2265",
  "gEl":"\u2A8C",
  "gel":"\u22DB",
  "geq":"\u2265",
  "geqq":"\u2267",
  "geqslant":"\u2A7E",
  "ges":"\u2A7E",
  "gescc":"\u2AA9",
  "gesdot":"\u2A80",
  "gesdoto":"\u2A82",
  "gesdotol":"\u2A84",
  "gesl":"\u22DB\uFE00",
  "gesles":"\u2A94",
  "Gfr":"\uD835\uDD0A",
  "gfr":"\uD835\uDD24",
  "Gg":"\u22D9",
  "gg":"\u226B",
  "ggg":"\u22D9",
  "gimel":"\u2137",
  "GJcy":"\u0403",
  "gjcy":"\u0453",
  "gl":"\u2277",
  "gla":"\u2AA5",
  "glE":"\u2A92",
  "glj":"\u2AA4",
  "gnap":"\u2A8A",
  "gnapprox":"\u2A8A",
  "gnE":"\u2269",
  "gne":"\u2A88",
  "gneq":"\u2A88",
  "gneqq":"\u2269",
  "gnsim":"\u22E7",
  "Gopf":"\uD835\uDD3E",
  "gopf":"\uD835\uDD58",
  "grave":"\u0060",
  "GreaterEqual":"\u2265",
  "GreaterEqualLess":"\u22DB",
  "GreaterFullEqual":"\u2267",
  "GreaterGreater":"\u2AA2",
  "GreaterLess":"\u2277",
  "GreaterSlantEqual":"\u2A7E",
  "GreaterTilde":"\u2273",
  "Gscr":"\uD835\uDCA2",
  "gscr":"\u210A",
  "gsim":"\u2273",
  "gsime":"\u2A8E",
  "gsiml":"\u2A90",
  "GT":"\u003E",
  "Gt":"\u226B",
  "gt":"\u003E",
  "gtcc":"\u2AA7",
  "gtcir":"\u2A7A",
  "gtdot":"\u22D7",
  "gtlPar":"\u2995",
  "gtquest":"\u2A7C",
  "gtrapprox":"\u2A86",
  "gtrarr":"\u2978",
  "gtrdot":"\u22D7",
  "gtreqless":"\u22DB",
  "gtreqqless":"\u2A8C",
  "gtrless":"\u2277",
  "gtrsim":"\u2273",
  "gvertneqq":"\u2269\uFE00",
  "gvnE":"\u2269\uFE00",
  "Hacek":"\u02C7",
  "hairsp":"\u200A",
  "half":"\u00BD",
  "hamilt":"\u210B",
  "HARDcy":"\u042A",
  "hardcy":"\u044A",
  "hArr":"\u21D4",
  "harr":"\u2194",
  "harrcir":"\u2948",
  "harrw":"\u21AD",
  "Hat":"\u005E",
  "hbar":"\u210F",
  "Hcirc":"\u0124",
  "hcirc":"\u0125",
  "hearts":"\u2665",
  "heartsuit":"\u2665",
  "hellip":"\u2026",
  "hercon":"\u22B9",
  "Hfr":"\u210C",
  "hfr":"\uD835\uDD25",
  "HilbertSpace":"\u210B",
  "hksearow":"\u2925",
  "hkswarow":"\u2926",
  "hoarr":"\u21FF",
  "homtht":"\u223B",
  "hookleftarrow":"\u21A9",
  "hookrightarrow":"\u21AA",
  "Hopf":"\u210D",
  "hopf":"\uD835\uDD59",
  "horbar":"\u2015",
  "HorizontalLine":"\u2500",
  "Hscr":"\u210B",
  "hscr":"\uD835\uDCBD",
  "hslash":"\u210F",
  "Hstrok":"\u0126",
  "hstrok":"\u0127",
  "HumpDownHump":"\u224E",
  "HumpEqual":"\u224F",
  "hybull":"\u2043",
  "hyphen":"\u2010",
  "Iacute":"\u00CD",
  "iacute":"\u00ED",
  "ic":"\u2063",
  "Icirc":"\u00CE",
  "icirc":"\u00EE",
  "Icy":"\u0418",
  "icy":"\u0438",
  "Idot":"\u0130",
  "IEcy":"\u0415",
  "iecy":"\u0435",
  "iexcl":"\u00A1",
  "iff":"\u21D4",
  "Ifr":"\u2111",
  "ifr":"\uD835\uDD26",
  "Igrave":"\u00CC",
  "igrave":"\u00EC",
  "ii":"\u2148",
  "iiiint":"\u2A0C",
  "iiint":"\u222D",
  "iinfin":"\u29DC",
  "iiota":"\u2129",
  "IJlig":"\u0132",
  "ijlig":"\u0133",
  "Im":"\u2111",
  "Imacr":"\u012A",
  "imacr":"\u012B",
  "image":"\u2111",
  "ImaginaryI":"\u2148",
  "imagline":"\u2110",
  "imagpart":"\u2111",
  "imath":"\u0131",
  "imof":"\u22B7",
  "imped":"\u01B5",
  "Implies":"\u21D2",
  "in":"\u2208",
  "incare":"\u2105",
  "infin":"\u221E",
  "infintie":"\u29DD",
  "inodot":"\u0131",
  "Int":"\u222C",
  "int":"\u222B",
  "intcal":"\u22BA",
  "integers":"\u2124",
  "Integral":"\u222B",
  "intercal":"\u22BA",
  "Intersection":"\u22C2",
  "intlarhk":"\u2A17",
  "intprod":"\u2A3C",
  "InvisibleComma":"\u2063",
  "InvisibleTimes":"\u2062",
  "IOcy":"\u0401",
  "iocy":"\u0451",
  "Iogon":"\u012E",
  "iogon":"\u012F",
  "Iopf":"\uD835\uDD40",
  "iopf":"\uD835\uDD5A",
  "Iota":"\u0399",
  "iota":"\u03B9",
  "iprod":"\u2A3C",
  "iquest":"\u00BF",
  "Iscr":"\u2110",
  "iscr":"\uD835\uDCBE",
  "isin":"\u2208",
  "isindot":"\u22F5",
  "isinE":"\u22F9",
  "isins":"\u22F4",
  "isinsv":"\u22F3",
  "isinv":"\u2208",
  "it":"\u2062",
  "Itilde":"\u0128",
  "itilde":"\u0129",
  "Iukcy":"\u0406",
  "iukcy":"\u0456",
  "Iuml":"\u00CF",
  "iuml":"\u00EF",
  "Jcirc":"\u0134",
  "jcirc":"\u0135",
  "Jcy":"\u0419",
  "jcy":"\u0439",
  "Jfr":"\uD835\uDD0D",
  "jfr":"\uD835\uDD27",
  "jmath":"\u0237",
  "Jopf":"\uD835\uDD41",
  "jopf":"\uD835\uDD5B",
  "Jscr":"\uD835\uDCA5",
  "jscr":"\uD835\uDCBF",
  "Jsercy":"\u0408",
  "jsercy":"\u0458",
  "Jukcy":"\u0404",
  "jukcy":"\u0454",
  "Kappa":"\u039A",
  "kappa":"\u03BA",
  "kappav":"\u03F0",
  "Kcedil":"\u0136",
  "kcedil":"\u0137",
  "Kcy":"\u041A",
  "kcy":"\u043A",
  "Kfr":"\uD835\uDD0E",
  "kfr":"\uD835\uDD28",
  "kgreen":"\u0138",
  "KHcy":"\u0425",
  "khcy":"\u0445",
  "KJcy":"\u040C",
  "kjcy":"\u045C",
  "Kopf":"\uD835\uDD42",
  "kopf":"\uD835\uDD5C",
  "Kscr":"\uD835\uDCA6",
  "kscr":"\uD835\uDCC0",
  "lAarr":"\u21DA",
  "Lacute":"\u0139",
  "lacute":"\u013A",
  "laemptyv":"\u29B4",
  "lagran":"\u2112",
  "Lambda":"\u039B",
  "lambda":"\u03BB",
  "Lang":"\u27EA",
  "lang":"\u27E8",
  "langd":"\u2991",
  "langle":"\u27E8",
  "lap":"\u2A85",
  "Laplacetrf":"\u2112",
  "laquo":"\u00AB",
  "Larr":"\u219E",
  "lArr":"\u21D0",
  "larr":"\u2190",
  "larrb":"\u21E4",
  "larrbfs":"\u291F",
  "larrfs":"\u291D",
  "larrhk":"\u21A9",
  "larrlp":"\u21AB",
  "larrpl":"\u2939",
  "larrsim":"\u2973",
  "larrtl":"\u21A2",
  "lat":"\u2AAB",
  "lAtail":"\u291B",
  "latail":"\u2919",
  "late":"\u2AAD",
  "lates":"\u2AAD\uFE00",
  "lBarr":"\u290E",
  "lbarr":"\u290C",
  "lbbrk":"\u2772",
  "lbrace":"\u007B",
  "lbrack":"\u005B",
  "lbrke":"\u298B",
  "lbrksld":"\u298F",
  "lbrkslu":"\u298D",
  "Lcaron":"\u013D",
  "lcaron":"\u013E",
  "Lcedil":"\u013B",
  "lcedil":"\u013C",
  "lceil":"\u2308",
  "lcub":"\u007B",
  "Lcy":"\u041B",
  "lcy":"\u043B",
  "ldca":"\u2936",
  "ldquo":"\u201C",
  "ldquor":"\u201E",
  "ldrdhar":"\u2967",
  "ldrushar":"\u294B",
  "ldsh":"\u21B2",
  "lE":"\u2266",
  "le":"\u2264",
  "LeftAngleBracket":"\u27E8",
  "LeftArrow":"\u2190",
  "Leftarrow":"\u21D0",
  "leftarrow":"\u2190",
  "LeftArrowBar":"\u21E4",
  "LeftArrowRightArrow":"\u21C6",
  "leftarrowtail":"\u21A2",
  "LeftCeiling":"\u2308",
  "LeftDoubleBracket":"\u27E6",
  "LeftDownTeeVector":"\u2961",
  "LeftDownVector":"\u21C3",
  "LeftDownVectorBar":"\u2959",
  "LeftFloor":"\u230A",
  "leftharpoondown":"\u21BD",
  "leftharpoonup":"\u21BC",
  "leftleftarrows":"\u21C7",
  "LeftRightArrow":"\u2194",
  "Leftrightarrow":"\u21D4",
  "leftrightarrow":"\u2194",
  "leftrightarrows":"\u21C6",
  "leftrightharpoons":"\u21CB",
  "leftrightsquigarrow":"\u21AD",
  "LeftRightVector":"\u294E",
  "LeftTee":"\u22A3",
  "LeftTeeArrow":"\u21A4",
  "LeftTeeVector":"\u295A",
  "leftthreetimes":"\u22CB",
  "LeftTriangle":"\u22B2",
  "LeftTriangleBar":"\u29CF",
  "LeftTriangleEqual":"\u22B4",
  "LeftUpDownVector":"\u2951",
  "LeftUpTeeVector":"\u2960",
  "LeftUpVector":"\u21BF",
  "LeftUpVectorBar":"\u2958",
  "LeftVector":"\u21BC",
  "LeftVectorBar":"\u2952",
  "lEg":"\u2A8B",
  "leg":"\u22DA",
  "leq":"\u2264",
  "leqq":"\u2266",
  "leqslant":"\u2A7D",
  "les":"\u2A7D",
  "lescc":"\u2AA8",
  "lesdot":"\u2A7F",
  "lesdoto":"\u2A81",
  "lesdotor":"\u2A83",
  "lesg":"\u22DA\uFE00",
  "lesges":"\u2A93",
  "lessapprox":"\u2A85",
  "lessdot":"\u22D6",
  "lesseqgtr":"\u22DA",
  "lesseqqgtr":"\u2A8B",
  "LessEqualGreater":"\u22DA",
  "LessFullEqual":"\u2266",
  "LessGreater":"\u2276",
  "lessgtr":"\u2276",
  "LessLess":"\u2AA1",
  "lesssim":"\u2272",
  "LessSlantEqual":"\u2A7D",
  "LessTilde":"\u2272",
  "lfisht":"\u297C",
  "lfloor":"\u230A",
  "Lfr":"\uD835\uDD0F",
  "lfr":"\uD835\uDD29",
  "lg":"\u2276",
  "lgE":"\u2A91",
  "lHar":"\u2962",
  "lhard":"\u21BD",
  "lharu":"\u21BC",
  "lharul":"\u296A",
  "lhblk":"\u2584",
  "LJcy":"\u0409",
  "ljcy":"\u0459",
  "Ll":"\u22D8",
  "ll":"\u226A",
  "llarr":"\u21C7",
  "llcorner":"\u231E",
  "Lleftarrow":"\u21DA",
  "llhard":"\u296B",
  "lltri":"\u25FA",
  "Lmidot":"\u013F",
  "lmidot":"\u0140",
  "lmoust":"\u23B0",
  "lmoustache":"\u23B0",
  "lnap":"\u2A89",
  "lnapprox":"\u2A89",
  "lnE":"\u2268",
  "lne":"\u2A87",
  "lneq":"\u2A87",
  "lneqq":"\u2268",
  "lnsim":"\u22E6",
  "loang":"\u27EC",
  "loarr":"\u21FD",
  "lobrk":"\u27E6",
  "LongLeftArrow":"\u27F5",
  "Longleftarrow":"\u27F8",
  "longleftarrow":"\u27F5",
  "LongLeftRightArrow":"\u27F7",
  "Longleftrightarrow":"\u27FA",
  "longleftrightarrow":"\u27F7",
  "longmapsto":"\u27FC",
  "LongRightArrow":"\u27F6",
  "Longrightarrow":"\u27F9",
  "longrightarrow":"\u27F6",
  "looparrowleft":"\u21AB",
  "looparrowright":"\u21AC",
  "lopar":"\u2985",
  "Lopf":"\uD835\uDD43",
  "lopf":"\uD835\uDD5D",
  "loplus":"\u2A2D",
  "lotimes":"\u2A34",
  "lowast":"\u2217",
  "lowbar":"\u005F",
  "LowerLeftArrow":"\u2199",
  "LowerRightArrow":"\u2198",
  "loz":"\u25CA",
  "lozenge":"\u25CA",
  "lozf":"\u29EB",
  "lpar":"\u0028",
  "lparlt":"\u2993",
  "lrarr":"\u21C6",
  "lrcorner":"\u231F",
  "lrhar":"\u21CB",
  "lrhard":"\u296D",
  "lrm":"\u200E",
  "lrtri":"\u22BF",
  "lsaquo":"\u2039",
  "Lscr":"\u2112",
  "lscr":"\uD835\uDCC1",
  "Lsh":"\u21B0",
  "lsh":"\u21B0",
  "lsim":"\u2272",
  "lsime":"\u2A8D",
  "lsimg":"\u2A8F",
  "lsqb":"\u005B",
  "lsquo":"\u2018",
  "lsquor":"\u201A",
  "Lstrok":"\u0141",
  "lstrok":"\u0142",
  "LT":"\u003C",
  "Lt":"\u226A",
  "lt":"\u003C",
  "ltcc":"\u2AA6",
  "ltcir":"\u2A79",
  "ltdot":"\u22D6",
  "lthree":"\u22CB",
  "ltimes":"\u22C9",
  "ltlarr":"\u2976",
  "ltquest":"\u2A7B",
  "ltri":"\u25C3",
  "ltrie":"\u22B4",
  "ltrif":"\u25C2",
  "ltrPar":"\u2996",
  "lurdshar":"\u294A",
  "luruhar":"\u2966",
  "lvertneqq":"\u2268\uFE00",
  "lvnE":"\u2268\uFE00",
  "macr":"\u00AF",
  "male":"\u2642",
  "malt":"\u2720",
  "maltese":"\u2720",
  "Map":"\u2905",
  "map":"\u21A6",
  "mapsto":"\u21A6",
  "mapstodown":"\u21A7",
  "mapstoleft":"\u21A4",
  "mapstoup":"\u21A5",
  "marker":"\u25AE",
  "mcomma":"\u2A29",
  "Mcy":"\u041C",
  "mcy":"\u043C",
  "mdash":"\u2014",
  "mDDot":"\u223A",
  "measuredangle":"\u2221",
  "MediumSpace":"\u205F",
  "Mellintrf":"\u2133",
  "Mfr":"\uD835\uDD10",
  "mfr":"\uD835\uDD2A",
  "mho":"\u2127",
  "micro":"\u00B5",
  "mid":"\u2223",
  "midast":"\u002A",
  "midcir":"\u2AF0",
  "middot":"\u00B7",
  "minus":"\u2212",
  "minusb":"\u229F",
  "minusd":"\u2238",
  "minusdu":"\u2A2A",
  "MinusPlus":"\u2213",
  "mlcp":"\u2ADB",
  "mldr":"\u2026",
  "mnplus":"\u2213",
  "models":"\u22A7",
  "Mopf":"\uD835\uDD44",
  "mopf":"\uD835\uDD5E",
  "mp":"\u2213",
  "Mscr":"\u2133",
  "mscr":"\uD835\uDCC2",
  "mstpos":"\u223E",
  "Mu":"\u039C",
  "mu":"\u03BC",
  "multimap":"\u22B8",
  "mumap":"\u22B8",
  "nabla":"\u2207",
  "Nacute":"\u0143",
  "nacute":"\u0144",
  "nang":"\u2220\u20D2",
  "nap":"\u2249",
  "napE":"\u2A70\u0338",
  "napid":"\u224B\u0338",
  "napos":"\u0149",
  "napprox":"\u2249",
  "natur":"\u266E",
  "natural":"\u266E",
  "naturals":"\u2115",
  "nbsp":"\u00A0",
  "nbump":"\u224E\u0338",
  "nbumpe":"\u224F\u0338",
  "ncap":"\u2A43",
  "Ncaron":"\u0147",
  "ncaron":"\u0148",
  "Ncedil":"\u0145",
  "ncedil":"\u0146",
  "ncong":"\u2247",
  "ncongdot":"\u2A6D\u0338",
  "ncup":"\u2A42",
  "Ncy":"\u041D",
  "ncy":"\u043D",
  "ndash":"\u2013",
  "ne":"\u2260",
  "nearhk":"\u2924",
  "neArr":"\u21D7",
  "nearr":"\u2197",
  "nearrow":"\u2197",
  "nedot":"\u2250\u0338",
  "NegativeMediumSpace":"\u200B",
  "NegativeThickSpace":"\u200B",
  "NegativeThinSpace":"\u200B",
  "NegativeVeryThinSpace":"\u200B",
  "nequiv":"\u2262",
  "nesear":"\u2928",
  "nesim":"\u2242\u0338",
  "NestedGreaterGreater":"\u226B",
  "NestedLessLess":"\u226A",
  "NewLine":"\u000A",
  "nexist":"\u2204",
  "nexists":"\u2204",
  "Nfr":"\uD835\uDD11",
  "nfr":"\uD835\uDD2B",
  "ngE":"\u2267\u0338",
  "nge":"\u2271",
  "ngeq":"\u2271",
  "ngeqq":"\u2267\u0338",
  "ngeqslant":"\u2A7E\u0338",
  "nges":"\u2A7E\u0338",
  "nGg":"\u22D9\u0338",
  "ngsim":"\u2275",
  "nGt":"\u226B\u20D2",
  "ngt":"\u226F",
  "ngtr":"\u226F",
  "nGtv":"\u226B\u0338",
  "nhArr":"\u21CE",
  "nharr":"\u21AE",
  "nhpar":"\u2AF2",
  "ni":"\u220B",
  "nis":"\u22FC",
  "nisd":"\u22FA",
  "niv":"\u220B",
  "NJcy":"\u040A",
  "njcy":"\u045A",
  "nlArr":"\u21CD",
  "nlarr":"\u219A",
  "nldr":"\u2025",
  "nlE":"\u2266\u0338",
  "nle":"\u2270",
  "nLeftarrow":"\u21CD",
  "nleftarrow":"\u219A",
  "nLeftrightarrow":"\u21CE",
  "nleftrightarrow":"\u21AE",
  "nleq":"\u2270",
  "nleqq":"\u2266\u0338",
  "nleqslant":"\u2A7D\u0338",
  "nles":"\u2A7D\u0338",
  "nless":"\u226E",
  "nLl":"\u22D8\u0338",
  "nlsim":"\u2274",
  "nLt":"\u226A\u20D2",
  "nlt":"\u226E",
  "nltri":"\u22EA",
  "nltrie":"\u22EC",
  "nLtv":"\u226A\u0338",
  "nmid":"\u2224",
  "NoBreak":"\u2060",
  "NonBreakingSpace":"\u00A0",
  "Nopf":"\u2115",
  "nopf":"\uD835\uDD5F",
  "Not":"\u2AEC",
  "not":"\u00AC",
  "NotCongruent":"\u2262",
  "NotCupCap":"\u226D",
  "NotDoubleVerticalBar":"\u2226",
  "NotElement":"\u2209",
  "NotEqual":"\u2260",
  "NotEqualTilde":"\u2242\u0338",
  "NotExists":"\u2204",
  "NotGreater":"\u226F",
  "NotGreaterEqual":"\u2271",
  "NotGreaterFullEqual":"\u2267\u0338",
  "NotGreaterGreater":"\u226B\u0338",
  "NotGreaterLess":"\u2279",
  "NotGreaterSlantEqual":"\u2A7E\u0338",
  "NotGreaterTilde":"\u2275",
  "NotHumpDownHump":"\u224E\u0338",
  "NotHumpEqual":"\u224F\u0338",
  "notin":"\u2209",
  "notindot":"\u22F5\u0338",
  "notinE":"\u22F9\u0338",
  "notinva":"\u2209",
  "notinvb":"\u22F7",
  "notinvc":"\u22F6",
  "NotLeftTriangle":"\u22EA",
  "NotLeftTriangleBar":"\u29CF\u0338",
  "NotLeftTriangleEqual":"\u22EC",
  "NotLess":"\u226E",
  "NotLessEqual":"\u2270",
  "NotLessGreater":"\u2278",
  "NotLessLess":"\u226A\u0338",
  "NotLessSlantEqual":"\u2A7D\u0338",
  "NotLessTilde":"\u2274",
  "NotNestedGreaterGreater":"\u2AA2\u0338",
  "NotNestedLessLess":"\u2AA1\u0338",
  "notni":"\u220C",
  "notniva":"\u220C",
  "notnivb":"\u22FE",
  "notnivc":"\u22FD",
  "NotPrecedes":"\u2280",
  "NotPrecedesEqual":"\u2AAF\u0338",
  "NotPrecedesSlantEqual":"\u22E0",
  "NotReverseElement":"\u220C",
  "NotRightTriangle":"\u22EB",
  "NotRightTriangleBar":"\u29D0\u0338",
  "NotRightTriangleEqual":"\u22ED",
  "NotSquareSubset":"\u228F\u0338",
  "NotSquareSubsetEqual":"\u22E2",
  "NotSquareSuperset":"\u2290\u0338",
  "NotSquareSupersetEqual":"\u22E3",
  "NotSubset":"\u2282\u20D2",
  "NotSubsetEqual":"\u2288",
  "NotSucceeds":"\u2281",
  "NotSucceedsEqual":"\u2AB0\u0338",
  "NotSucceedsSlantEqual":"\u22E1",
  "NotSucceedsTilde":"\u227F\u0338",
  "NotSuperset":"\u2283\u20D2",
  "NotSupersetEqual":"\u2289",
  "NotTilde":"\u2241",
  "NotTildeEqual":"\u2244",
  "NotTildeFullEqual":"\u2247",
  "NotTildeTilde":"\u2249",
  "NotVerticalBar":"\u2224",
  "npar":"\u2226",
  "nparallel":"\u2226",
  "nparsl":"\u2AFD\u20E5",
  "npart":"\u2202\u0338",
  "npolint":"\u2A14",
  "npr":"\u2280",
  "nprcue":"\u22E0",
  "npre":"\u2AAF\u0338",
  "nprec":"\u2280",
  "npreceq":"\u2AAF\u0338",
  "nrArr":"\u21CF",
  "nrarr":"\u219B",
  "nrarrc":"\u2933\u0338",
  "nrarrw":"\u219D\u0338",
  "nRightarrow":"\u21CF",
  "nrightarrow":"\u219B",
  "nrtri":"\u22EB",
  "nrtrie":"\u22ED",
  "nsc":"\u2281",
  "nsccue":"\u22E1",
  "nsce":"\u2AB0\u0338",
  "Nscr":"\uD835\uDCA9",
  "nscr":"\uD835\uDCC3",
  "nshortmid":"\u2224",
  "nshortparallel":"\u2226",
  "nsim":"\u2241",
  "nsime":"\u2244",
  "nsimeq":"\u2244",
  "nsmid":"\u2224",
  "nspar":"\u2226",
  "nsqsube":"\u22E2",
  "nsqsupe":"\u22E3",
  "nsub":"\u2284",
  "nsubE":"\u2AC5\u0338",
  "nsube":"\u2288",
  "nsubset":"\u2282\u20D2",
  "nsubseteq":"\u2288",
  "nsubseteqq":"\u2AC5\u0338",
  "nsucc":"\u2281",
  "nsucceq":"\u2AB0\u0338",
  "nsup":"\u2285",
  "nsupE":"\u2AC6\u0338",
  "nsupe":"\u2289",
  "nsupset":"\u2283\u20D2",
  "nsupseteq":"\u2289",
  "nsupseteqq":"\u2AC6\u0338",
  "ntgl":"\u2279",
  "Ntilde":"\u00D1",
  "ntilde":"\u00F1",
  "ntlg":"\u2278",
  "ntriangleleft":"\u22EA",
  "ntrianglelefteq":"\u22EC",
  "ntriangleright":"\u22EB",
  "ntrianglerighteq":"\u22ED",
  "Nu":"\u039D",
  "nu":"\u03BD",
  "num":"\u0023",
  "numero":"\u2116",
  "numsp":"\u2007",
  "nvap":"\u224D\u20D2",
  "nVDash":"\u22AF",
  "nVdash":"\u22AE",
  "nvDash":"\u22AD",
  "nvdash":"\u22AC",
  "nvge":"\u2265\u20D2",
  "nvgt":"\u003E\u20D2",
  "nvHarr":"\u2904",
  "nvinfin":"\u29DE",
  "nvlArr":"\u2902",
  "nvle":"\u2264\u20D2",
  "nvlt":"\u003C\u20D2",
  "nvltrie":"\u22B4\u20D2",
  "nvrArr":"\u2903",
  "nvrtrie":"\u22B5\u20D2",
  "nvsim":"\u223C\u20D2",
  "nwarhk":"\u2923",
  "nwArr":"\u21D6",
  "nwarr":"\u2196",
  "nwarrow":"\u2196",
  "nwnear":"\u2927",
  "Oacute":"\u00D3",
  "oacute":"\u00F3",
  "oast":"\u229B",
  "ocir":"\u229A",
  "Ocirc":"\u00D4",
  "ocirc":"\u00F4",
  "Ocy":"\u041E",
  "ocy":"\u043E",
  "odash":"\u229D",
  "Odblac":"\u0150",
  "odblac":"\u0151",
  "odiv":"\u2A38",
  "odot":"\u2299",
  "odsold":"\u29BC",
  "OElig":"\u0152",
  "oelig":"\u0153",
  "ofcir":"\u29BF",
  "Ofr":"\uD835\uDD12",
  "ofr":"\uD835\uDD2C",
  "ogon":"\u02DB",
  "Ograve":"\u00D2",
  "ograve":"\u00F2",
  "ogt":"\u29C1",
  "ohbar":"\u29B5",
  "ohm":"\u03A9",
  "oint":"\u222E",
  "olarr":"\u21BA",
  "olcir":"\u29BE",
  "olcross":"\u29BB",
  "oline":"\u203E",
  "olt":"\u29C0",
  "Omacr":"\u014C",
  "omacr":"\u014D",
  "Omega":"\u03A9",
  "omega":"\u03C9",
  "Omicron":"\u039F",
  "omicron":"\u03BF",
  "omid":"\u29B6",
  "ominus":"\u2296",
  "Oopf":"\uD835\uDD46",
  "oopf":"\uD835\uDD60",
  "opar":"\u29B7",
  "OpenCurlyDoubleQuote":"\u201C",
  "OpenCurlyQuote":"\u2018",
  "operp":"\u29B9",
  "oplus":"\u2295",
  "Or":"\u2A54",
  "or":"\u2228",
  "orarr":"\u21BB",
  "ord":"\u2A5D",
  "order":"\u2134",
  "orderof":"\u2134",
  "ordf":"\u00AA",
  "ordm":"\u00BA",
  "origof":"\u22B6",
  "oror":"\u2A56",
  "orslope":"\u2A57",
  "orv":"\u2A5B",
  "oS":"\u24C8",
  "Oscr":"\uD835\uDCAA",
  "oscr":"\u2134",
  "Oslash":"\u00D8",
  "oslash":"\u00F8",
  "osol":"\u2298",
  "Otilde":"\u00D5",
  "otilde":"\u00F5",
  "Otimes":"\u2A37",
  "otimes":"\u2297",
  "otimesas":"\u2A36",
  "Ouml":"\u00D6",
  "ouml":"\u00F6",
  "ovbar":"\u233D",
  "OverBar":"\u203E",
  "OverBrace":"\u23DE",
  "OverBracket":"\u23B4",
  "OverParenthesis":"\u23DC",
  "par":"\u2225",
  "para":"\u00B6",
  "parallel":"\u2225",
  "parsim":"\u2AF3",
  "parsl":"\u2AFD",
  "part":"\u2202",
  "PartialD":"\u2202",
  "Pcy":"\u041F",
  "pcy":"\u043F",
  "percnt":"\u0025",
  "period":"\u002E",
  "permil":"\u2030",
  "perp":"\u22A5",
  "pertenk":"\u2031",
  "Pfr":"\uD835\uDD13",
  "pfr":"\uD835\uDD2D",
  "Phi":"\u03A6",
  "phi":"\u03C6",
  "phiv":"\u03D5",
  "phmmat":"\u2133",
  "phone":"\u260E",
  "Pi":"\u03A0",
  "pi":"\u03C0",
  "pitchfork":"\u22D4",
  "piv":"\u03D6",
  "planck":"\u210F",
  "planckh":"\u210E",
  "plankv":"\u210F",
  "plus":"\u002B",
  "plusacir":"\u2A23",
  "plusb":"\u229E",
  "pluscir":"\u2A22",
  "plusdo":"\u2214",
  "plusdu":"\u2A25",
  "pluse":"\u2A72",
  "PlusMinus":"\u00B1",
  "plusmn":"\u00B1",
  "plussim":"\u2A26",
  "plustwo":"\u2A27",
  "pm":"\u00B1",
  "Poincareplane":"\u210C",
  "pointint":"\u2A15",
  "Popf":"\u2119",
  "popf":"\uD835\uDD61",
  "pound":"\u00A3",
  "Pr":"\u2ABB",
  "pr":"\u227A",
  "prap":"\u2AB7",
  "prcue":"\u227C",
  "prE":"\u2AB3",
  "pre":"\u2AAF",
  "prec":"\u227A",
  "precapprox":"\u2AB7",
  "preccurlyeq":"\u227C",
  "Precedes":"\u227A",
  "PrecedesEqual":"\u2AAF",
  "PrecedesSlantEqual":"\u227C",
  "PrecedesTilde":"\u227E",
  "preceq":"\u2AAF",
  "precnapprox":"\u2AB9",
  "precneqq":"\u2AB5",
  "precnsim":"\u22E8",
  "precsim":"\u227E",
  "Prime":"\u2033",
  "prime":"\u2032",
  "primes":"\u2119",
  "prnap":"\u2AB9",
  "prnE":"\u2AB5",
  "prnsim":"\u22E8",
  "prod":"\u220F",
  "Product":"\u220F",
  "profalar":"\u232E",
  "profline":"\u2312",
  "profsurf":"\u2313",
  "prop":"\u221D",
  "Proportion":"\u2237",
  "Proportional":"\u221D",
  "propto":"\u221D",
  "prsim":"\u227E",
  "prurel":"\u22B0",
  "Pscr":"\uD835\uDCAB",
  "pscr":"\uD835\uDCC5",
  "Psi":"\u03A8",
  "psi":"\u03C8",
  "puncsp":"\u2008",
  "Qfr":"\uD835\uDD14",
  "qfr":"\uD835\uDD2E",
  "qint":"\u2A0C",
  "Qopf":"\u211A",
  "qopf":"\uD835\uDD62",
  "qprime":"\u2057",
  "Qscr":"\uD835\uDCAC",
  "qscr":"\uD835\uDCC6",
  "quaternions":"\u210D",
  "quatint":"\u2A16",
  "quest":"\u003F",
  "questeq":"\u225F",
  "QUOT":"\u0022",
  "quot":"\u0022",
  "rAarr":"\u21DB",
  "race":"\u223D\u0331",
  "Racute":"\u0154",
  "racute":"\u0155",
  "radic":"\u221A",
  "raemptyv":"\u29B3",
  "Rang":"\u27EB",
  "rang":"\u27E9",
  "rangd":"\u2992",
  "range":"\u29A5",
  "rangle":"\u27E9",
  "raquo":"\u00BB",
  "Rarr":"\u21A0",
  "rArr":"\u21D2",
  "rarr":"\u2192",
  "rarrap":"\u2975",
  "rarrb":"\u21E5",
  "rarrbfs":"\u2920",
  "rarrc":"\u2933",
  "rarrfs":"\u291E",
  "rarrhk":"\u21AA",
  "rarrlp":"\u21AC",
  "rarrpl":"\u2945",
  "rarrsim":"\u2974",
  "Rarrtl":"\u2916",
  "rarrtl":"\u21A3",
  "rarrw":"\u219D",
  "rAtail":"\u291C",
  "ratail":"\u291A",
  "ratio":"\u2236",
  "rationals":"\u211A",
  "RBarr":"\u2910",
  "rBarr":"\u290F",
  "rbarr":"\u290D",
  "rbbrk":"\u2773",
  "rbrace":"\u007D",
  "rbrack":"\u005D",
  "rbrke":"\u298C",
  "rbrksld":"\u298E",
  "rbrkslu":"\u2990",
  "Rcaron":"\u0158",
  "rcaron":"\u0159",
  "Rcedil":"\u0156",
  "rcedil":"\u0157",
  "rceil":"\u2309",
  "rcub":"\u007D",
  "Rcy":"\u0420",
  "rcy":"\u0440",
  "rdca":"\u2937",
  "rdldhar":"\u2969",
  "rdquo":"\u201D",
  "rdquor":"\u201D",
  "rdsh":"\u21B3",
  "Re":"\u211C",
  "real":"\u211C",
  "realine":"\u211B",
  "realpart":"\u211C",
  "reals":"\u211D",
  "rect":"\u25AD",
  "REG":"\u00AE",
  "reg":"\u00AE",
  "ReverseElement":"\u220B",
  "ReverseEquilibrium":"\u21CB",
  "ReverseUpEquilibrium":"\u296F",
  "rfisht":"\u297D",
  "rfloor":"\u230B",
  "Rfr":"\u211C",
  "rfr":"\uD835\uDD2F",
  "rHar":"\u2964",
  "rhard":"\u21C1",
  "rharu":"\u21C0",
  "rharul":"\u296C",
  "Rho":"\u03A1",
  "rho":"\u03C1",
  "rhov":"\u03F1",
  "RightAngleBracket":"\u27E9",
  "RightArrow":"\u2192",
  "Rightarrow":"\u21D2",
  "rightarrow":"\u2192",
  "RightArrowBar":"\u21E5",
  "RightArrowLeftArrow":"\u21C4",
  "rightarrowtail":"\u21A3",
  "RightCeiling":"\u2309",
  "RightDoubleBracket":"\u27E7",
  "RightDownTeeVector":"\u295D",
  "RightDownVector":"\u21C2",
  "RightDownVectorBar":"\u2955",
  "RightFloor":"\u230B",
  "rightharpoondown":"\u21C1",
  "rightharpoonup":"\u21C0",
  "rightleftarrows":"\u21C4",
  "rightleftharpoons":"\u21CC",
  "rightrightarrows":"\u21C9",
  "rightsquigarrow":"\u219D",
  "RightTee":"\u22A2",
  "RightTeeArrow":"\u21A6",
  "RightTeeVector":"\u295B",
  "rightthreetimes":"\u22CC",
  "RightTriangle":"\u22B3",
  "RightTriangleBar":"\u29D0",
  "RightTriangleEqual":"\u22B5",
  "RightUpDownVector":"\u294F",
  "RightUpTeeVector":"\u295C",
  "RightUpVector":"\u21BE",
  "RightUpVectorBar":"\u2954",
  "RightVector":"\u21C0",
  "RightVectorBar":"\u2953",
  "ring":"\u02DA",
  "risingdotseq":"\u2253",
  "rlarr":"\u21C4",
  "rlhar":"\u21CC",
  "rlm":"\u200F",
  "rmoust":"\u23B1",
  "rmoustache":"\u23B1",
  "rnmid":"\u2AEE",
  "roang":"\u27ED",
  "roarr":"\u21FE",
  "robrk":"\u27E7",
  "ropar":"\u2986",
  "Ropf":"\u211D",
  "ropf":"\uD835\uDD63",
  "roplus":"\u2A2E",
  "rotimes":"\u2A35",
  "RoundImplies":"\u2970",
  "rpar":"\u0029",
  "rpargt":"\u2994",
  "rppolint":"\u2A12",
  "rrarr":"\u21C9",
  "Rrightarrow":"\u21DB",
  "rsaquo":"\u203A",
  "Rscr":"\u211B",
  "rscr":"\uD835\uDCC7",
  "Rsh":"\u21B1",
  "rsh":"\u21B1",
  "rsqb":"\u005D",
  "rsquo":"\u2019",
  "rsquor":"\u2019",
  "rthree":"\u22CC",
  "rtimes":"\u22CA",
  "rtri":"\u25B9",
  "rtrie":"\u22B5",
  "rtrif":"\u25B8",
  "rtriltri":"\u29CE",
  "RuleDelayed":"\u29F4",
  "ruluhar":"\u2968",
  "rx":"\u211E",
  "Sacute":"\u015A",
  "sacute":"\u015B",
  "sbquo":"\u201A",
  "Sc":"\u2ABC",
  "sc":"\u227B",
  "scap":"\u2AB8",
  "Scaron":"\u0160",
  "scaron":"\u0161",
  "sccue":"\u227D",
  "scE":"\u2AB4",
  "sce":"\u2AB0",
  "Scedil":"\u015E",
  "scedil":"\u015F",
  "Scirc":"\u015C",
  "scirc":"\u015D",
  "scnap":"\u2ABA",
  "scnE":"\u2AB6",
  "scnsim":"\u22E9",
  "scpolint":"\u2A13",
  "scsim":"\u227F",
  "Scy":"\u0421",
  "scy":"\u0441",
  "sdot":"\u22C5",
  "sdotb":"\u22A1",
  "sdote":"\u2A66",
  "searhk":"\u2925",
  "seArr":"\u21D8",
  "searr":"\u2198",
  "searrow":"\u2198",
  "sect":"\u00A7",
  "semi":"\u003B",
  "seswar":"\u2929",
  "setminus":"\u2216",
  "setmn":"\u2216",
  "sext":"\u2736",
  "Sfr":"\uD835\uDD16",
  "sfr":"\uD835\uDD30",
  "sfrown":"\u2322",
  "sharp":"\u266F",
  "SHCHcy":"\u0429",
  "shchcy":"\u0449",
  "SHcy":"\u0428",
  "shcy":"\u0448",
  "ShortDownArrow":"\u2193",
  "ShortLeftArrow":"\u2190",
  "shortmid":"\u2223",
  "shortparallel":"\u2225",
  "ShortRightArrow":"\u2192",
  "ShortUpArrow":"\u2191",
  "shy":"\u00AD",
  "Sigma":"\u03A3",
  "sigma":"\u03C3",
  "sigmaf":"\u03C2",
  "sigmav":"\u03C2",
  "sim":"\u223C",
  "simdot":"\u2A6A",
  "sime":"\u2243",
  "simeq":"\u2243",
  "simg":"\u2A9E",
  "simgE":"\u2AA0",
  "siml":"\u2A9D",
  "simlE":"\u2A9F",
  "simne":"\u2246",
  "simplus":"\u2A24",
  "simrarr":"\u2972",
  "slarr":"\u2190",
  "SmallCircle":"\u2218",
  "smallsetminus":"\u2216",
  "smashp":"\u2A33",
  "smeparsl":"\u29E4",
  "smid":"\u2223",
  "smile":"\u2323",
  "smt":"\u2AAA",
  "smte":"\u2AAC",
  "smtes":"\u2AAC\uFE00",
  "SOFTcy":"\u042C",
  "softcy":"\u044C",
  "sol":"\u002F",
  "solb":"\u29C4",
  "solbar":"\u233F",
  "Sopf":"\uD835\uDD4A",
  "sopf":"\uD835\uDD64",
  "spades":"\u2660",
  "spadesuit":"\u2660",
  "spar":"\u2225",
  "sqcap":"\u2293",
  "sqcaps":"\u2293\uFE00",
  "sqcup":"\u2294",
  "sqcups":"\u2294\uFE00",
  "Sqrt":"\u221A",
  "sqsub":"\u228F",
  "sqsube":"\u2291",
  "sqsubset":"\u228F",
  "sqsubseteq":"\u2291",
  "sqsup":"\u2290",
  "sqsupe":"\u2292",
  "sqsupset":"\u2290",
  "sqsupseteq":"\u2292",
  "squ":"\u25A1",
  "Square":"\u25A1",
  "square":"\u25A1",
  "SquareIntersection":"\u2293",
  "SquareSubset":"\u228F",
  "SquareSubsetEqual":"\u2291",
  "SquareSuperset":"\u2290",
  "SquareSupersetEqual":"\u2292",
  "SquareUnion":"\u2294",
  "squarf":"\u25AA",
  "squf":"\u25AA",
  "srarr":"\u2192",
  "Sscr":"\uD835\uDCAE",
  "sscr":"\uD835\uDCC8",
  "ssetmn":"\u2216",
  "ssmile":"\u2323",
  "sstarf":"\u22C6",
  "Star":"\u22C6",
  "star":"\u2606",
  "starf":"\u2605",
  "straightepsilon":"\u03F5",
  "straightphi":"\u03D5",
  "strns":"\u00AF",
  "Sub":"\u22D0",
  "sub":"\u2282",
  "subdot":"\u2ABD",
  "subE":"\u2AC5",
  "sube":"\u2286",
  "subedot":"\u2AC3",
  "submult":"\u2AC1",
  "subnE":"\u2ACB",
  "subne":"\u228A",
  "subplus":"\u2ABF",
  "subrarr":"\u2979",
  "Subset":"\u22D0",
  "subset":"\u2282",
  "subseteq":"\u2286",
  "subseteqq":"\u2AC5",
  "SubsetEqual":"\u2286",
  "subsetneq":"\u228A",
  "subsetneqq":"\u2ACB",
  "subsim":"\u2AC7",
  "subsub":"\u2AD5",
  "subsup":"\u2AD3",
  "succ":"\u227B",
  "succapprox":"\u2AB8",
  "succcurlyeq":"\u227D",
  "Succeeds":"\u227B",
  "SucceedsEqual":"\u2AB0",
  "SucceedsSlantEqual":"\u227D",
  "SucceedsTilde":"\u227F",
  "succeq":"\u2AB0",
  "succnapprox":"\u2ABA",
  "succneqq":"\u2AB6",
  "succnsim":"\u22E9",
  "succsim":"\u227F",
  "SuchThat":"\u220B",
  "Sum":"\u2211",
  "sum":"\u2211",
  "sung":"\u266A",
  "Sup":"\u22D1",
  "sup":"\u2283",
  "sup1":"\u00B9",
  "sup2":"\u00B2",
  "sup3":"\u00B3",
  "supdot":"\u2ABE",
  "supdsub":"\u2AD8",
  "supE":"\u2AC6",
  "supe":"\u2287",
  "supedot":"\u2AC4",
  "Superset":"\u2283",
  "SupersetEqual":"\u2287",
  "suphsol":"\u27C9",
  "suphsub":"\u2AD7",
  "suplarr":"\u297B",
  "supmult":"\u2AC2",
  "supnE":"\u2ACC",
  "supne":"\u228B",
  "supplus":"\u2AC0",
  "Supset":"\u22D1",
  "supset":"\u2283",
  "supseteq":"\u2287",
  "supseteqq":"\u2AC6",
  "supsetneq":"\u228B",
  "supsetneqq":"\u2ACC",
  "supsim":"\u2AC8",
  "supsub":"\u2AD4",
  "supsup":"\u2AD6",
  "swarhk":"\u2926",
  "swArr":"\u21D9",
  "swarr":"\u2199",
  "swarrow":"\u2199",
  "swnwar":"\u292A",
  "szlig":"\u00DF",
  "Tab":"\u0009",
  "target":"\u2316",
  "Tau":"\u03A4",
  "tau":"\u03C4",
  "tbrk":"\u23B4",
  "Tcaron":"\u0164",
  "tcaron":"\u0165",
  "Tcedil":"\u0162",
  "tcedil":"\u0163",
  "Tcy":"\u0422",
  "tcy":"\u0442",
  "tdot":"\u20DB",
  "telrec":"\u2315",
  "Tfr":"\uD835\uDD17",
  "tfr":"\uD835\uDD31",
  "there4":"\u2234",
  "Therefore":"\u2234",
  "therefore":"\u2234",
  "Theta":"\u0398",
  "theta":"\u03B8",
  "thetasym":"\u03D1",
  "thetav":"\u03D1",
  "thickapprox":"\u2248",
  "thicksim":"\u223C",
  "ThickSpace":"\u205F\u200A",
  "thinsp":"\u2009",
  "ThinSpace":"\u2009",
  "thkap":"\u2248",
  "thksim":"\u223C",
  "THORN":"\u00DE",
  "thorn":"\u00FE",
  "Tilde":"\u223C",
  "tilde":"\u02DC",
  "TildeEqual":"\u2243",
  "TildeFullEqual":"\u2245",
  "TildeTilde":"\u2248",
  "times":"\u00D7",
  "timesb":"\u22A0",
  "timesbar":"\u2A31",
  "timesd":"\u2A30",
  "tint":"\u222D",
  "toea":"\u2928",
  "top":"\u22A4",
  "topbot":"\u2336",
  "topcir":"\u2AF1",
  "Topf":"\uD835\uDD4B",
  "topf":"\uD835\uDD65",
  "topfork":"\u2ADA",
  "tosa":"\u2929",
  "tprime":"\u2034",
  "TRADE":"\u2122",
  "trade":"\u2122",
  "triangle":"\u25B5",
  "triangledown":"\u25BF",
  "triangleleft":"\u25C3",
  "trianglelefteq":"\u22B4",
  "triangleq":"\u225C",
  "triangleright":"\u25B9",
  "trianglerighteq":"\u22B5",
  "tridot":"\u25EC",
  "trie":"\u225C",
  "triminus":"\u2A3A",
  "TripleDot":"\u20DB",
  "triplus":"\u2A39",
  "trisb":"\u29CD",
  "tritime":"\u2A3B",
  "trpezium":"\u23E2",
  "Tscr":"\uD835\uDCAF",
  "tscr":"\uD835\uDCC9",
  "TScy":"\u0426",
  "tscy":"\u0446",
  "TSHcy":"\u040B",
  "tshcy":"\u045B",
  "Tstrok":"\u0166",
  "tstrok":"\u0167",
  "twixt":"\u226C",
  "twoheadleftarrow":"\u219E",
  "twoheadrightarrow":"\u21A0",
  "Uacute":"\u00DA",
  "uacute":"\u00FA",
  "Uarr":"\u219F",
  "uArr":"\u21D1",
  "uarr":"\u2191",
  "Uarrocir":"\u2949",
  "Ubrcy":"\u040E",
  "ubrcy":"\u045E",
  "Ubreve":"\u016C",
  "ubreve":"\u016D",
  "Ucirc":"\u00DB",
  "ucirc":"\u00FB",
  "Ucy":"\u0423",
  "ucy":"\u0443",
  "udarr":"\u21C5",
  "Udblac":"\u0170",
  "udblac":"\u0171",
  "udhar":"\u296E",
  "ufisht":"\u297E",
  "Ufr":"\uD835\uDD18",
  "ufr":"\uD835\uDD32",
  "Ugrave":"\u00D9",
  "ugrave":"\u00F9",
  "uHar":"\u2963",
  "uharl":"\u21BF",
  "uharr":"\u21BE",
  "uhblk":"\u2580",
  "ulcorn":"\u231C",
  "ulcorner":"\u231C",
  "ulcrop":"\u230F",
  "ultri":"\u25F8",
  "Umacr":"\u016A",
  "umacr":"\u016B",
  "uml":"\u00A8",
  "UnderBar":"\u005F",
  "UnderBrace":"\u23DF",
  "UnderBracket":"\u23B5",
  "UnderParenthesis":"\u23DD",
  "Union":"\u22C3",
  "UnionPlus":"\u228E",
  "Uogon":"\u0172",
  "uogon":"\u0173",
  "Uopf":"\uD835\uDD4C",
  "uopf":"\uD835\uDD66",
  "UpArrow":"\u2191",
  "Uparrow":"\u21D1",
  "uparrow":"\u2191",
  "UpArrowBar":"\u2912",
  "UpArrowDownArrow":"\u21C5",
  "UpDownArrow":"\u2195",
  "Updownarrow":"\u21D5",
  "updownarrow":"\u2195",
  "UpEquilibrium":"\u296E",
  "upharpoonleft":"\u21BF",
  "upharpoonright":"\u21BE",
  "uplus":"\u228E",
  "UpperLeftArrow":"\u2196",
  "UpperRightArrow":"\u2197",
  "Upsi":"\u03D2",
  "upsi":"\u03C5",
  "upsih":"\u03D2",
  "Upsilon":"\u03A5",
  "upsilon":"\u03C5",
  "UpTee":"\u22A5",
  "UpTeeArrow":"\u21A5",
  "upuparrows":"\u21C8",
  "urcorn":"\u231D",
  "urcorner":"\u231D",
  "urcrop":"\u230E",
  "Uring":"\u016E",
  "uring":"\u016F",
  "urtri":"\u25F9",
  "Uscr":"\uD835\uDCB0",
  "uscr":"\uD835\uDCCA",
  "utdot":"\u22F0",
  "Utilde":"\u0168",
  "utilde":"\u0169",
  "utri":"\u25B5",
  "utrif":"\u25B4",
  "uuarr":"\u21C8",
  "Uuml":"\u00DC",
  "uuml":"\u00FC",
  "uwangle":"\u29A7",
  "vangrt":"\u299C",
  "varepsilon":"\u03F5",
  "varkappa":"\u03F0",
  "varnothing":"\u2205",
  "varphi":"\u03D5",
  "varpi":"\u03D6",
  "varpropto":"\u221D",
  "vArr":"\u21D5",
  "varr":"\u2195",
  "varrho":"\u03F1",
  "varsigma":"\u03C2",
  "varsubsetneq":"\u228A\uFE00",
  "varsubsetneqq":"\u2ACB\uFE00",
  "varsupsetneq":"\u228B\uFE00",
  "varsupsetneqq":"\u2ACC\uFE00",
  "vartheta":"\u03D1",
  "vartriangleleft":"\u22B2",
  "vartriangleright":"\u22B3",
  "Vbar":"\u2AEB",
  "vBar":"\u2AE8",
  "vBarv":"\u2AE9",
  "Vcy":"\u0412",
  "vcy":"\u0432",
  "VDash":"\u22AB",
  "Vdash":"\u22A9",
  "vDash":"\u22A8",
  "vdash":"\u22A2",
  "Vdashl":"\u2AE6",
  "Vee":"\u22C1",
  "vee":"\u2228",
  "veebar":"\u22BB",
  "veeeq":"\u225A",
  "vellip":"\u22EE",
  "Verbar":"\u2016",
  "verbar":"\u007C",
  "Vert":"\u2016",
  "vert":"\u007C",
  "VerticalBar":"\u2223",
  "VerticalLine":"\u007C",
  "VerticalSeparator":"\u2758",
  "VerticalTilde":"\u2240",
  "VeryThinSpace":"\u200A",
  "Vfr":"\uD835\uDD19",
  "vfr":"\uD835\uDD33",
  "vltri":"\u22B2",
  "vnsub":"\u2282\u20D2",
  "vnsup":"\u2283\u20D2",
  "Vopf":"\uD835\uDD4D",
  "vopf":"\uD835\uDD67",
  "vprop":"\u221D",
  "vrtri":"\u22B3",
  "Vscr":"\uD835\uDCB1",
  "vscr":"\uD835\uDCCB",
  "vsubnE":"\u2ACB\uFE00",
  "vsubne":"\u228A\uFE00",
  "vsupnE":"\u2ACC\uFE00",
  "vsupne":"\u228B\uFE00",
  "Vvdash":"\u22AA",
  "vzigzag":"\u299A",
  "Wcirc":"\u0174",
  "wcirc":"\u0175",
  "wedbar":"\u2A5F",
  "Wedge":"\u22C0",
  "wedge":"\u2227",
  "wedgeq":"\u2259",
  "weierp":"\u2118",
  "Wfr":"\uD835\uDD1A",
  "wfr":"\uD835\uDD34",
  "Wopf":"\uD835\uDD4E",
  "wopf":"\uD835\uDD68",
  "wp":"\u2118",
  "wr":"\u2240",
  "wreath":"\u2240",
  "Wscr":"\uD835\uDCB2",
  "wscr":"\uD835\uDCCC",
  "xcap":"\u22C2",
  "xcirc":"\u25EF",
  "xcup":"\u22C3",
  "xdtri":"\u25BD",
  "Xfr":"\uD835\uDD1B",
  "xfr":"\uD835\uDD35",
  "xhArr":"\u27FA",
  "xharr":"\u27F7",
  "Xi":"\u039E",
  "xi":"\u03BE",
  "xlArr":"\u27F8",
  "xlarr":"\u27F5",
  "xmap":"\u27FC",
  "xnis":"\u22FB",
  "xodot":"\u2A00",
  "Xopf":"\uD835\uDD4F",
  "xopf":"\uD835\uDD69",
  "xoplus":"\u2A01",
  "xotime":"\u2A02",
  "xrArr":"\u27F9",
  "xrarr":"\u27F6",
  "Xscr":"\uD835\uDCB3",
  "xscr":"\uD835\uDCCD",
  "xsqcup":"\u2A06",
  "xuplus":"\u2A04",
  "xutri":"\u25B3",
  "xvee":"\u22C1",
  "xwedge":"\u22C0",
  "Yacute":"\u00DD",
  "yacute":"\u00FD",
  "YAcy":"\u042F",
  "yacy":"\u044F",
  "Ycirc":"\u0176",
  "ycirc":"\u0177",
  "Ycy":"\u042B",
  "ycy":"\u044B",
  "yen":"\u00A5",
  "Yfr":"\uD835\uDD1C",
  "yfr":"\uD835\uDD36",
  "YIcy":"\u0407",
  "yicy":"\u0457",
  "Yopf":"\uD835\uDD50",
  "yopf":"\uD835\uDD6A",
  "Yscr":"\uD835\uDCB4",
  "yscr":"\uD835\uDCCE",
  "YUcy":"\u042E",
  "yucy":"\u044E",
  "Yuml":"\u0178",
  "yuml":"\u00FF",
  "Zacute":"\u0179",
  "zacute":"\u017A",
  "Zcaron":"\u017D",
  "zcaron":"\u017E",
  "Zcy":"\u0417",
  "zcy":"\u0437",
  "Zdot":"\u017B",
  "zdot":"\u017C",
  "zeetrf":"\u2128",
  "ZeroWidthSpace":"\u200B",
  "Zeta":"\u0396",
  "zeta":"\u03B6",
  "Zfr":"\u2128",
  "zfr":"\uD835\uDD37",
  "ZHcy":"\u0416",
  "zhcy":"\u0436",
  "zigrarr":"\u21DD",
  "Zopf":"\u2124",
  "zopf":"\uD835\uDD6B",
  "Zscr":"\uD835\uDCB5",
  "zscr":"\uD835\uDCCF",
  "zwj":"\u200D",
  "zwnj":"\u200C"
};

},{}],4:[function(require,module,exports){
// List of valid html blocks names, accorting to commonmark spec
// http://jgm.github.io/CommonMark/spec.html#html-blocks

'use strict';

var html_blocks = {};

[
  'article',
  'aside',
  'button',
  'blockquote',
  'body',
  'canvas',
  'caption',
  'col',
  'colgroup',
  'dd',
  'div',
  'dl',
  'dt',
  'embed',
  'fieldset',
  'figcaption',
  'figure',
  'footer',
  'form',
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'header',
  'hgroup',
  'hr',
  'iframe',
  'li',
  'map',
  'object',
  'ol',
  'output',
  'p',
  'pre',
  'progress',
  'script',
  'section',
  'style',
  'table',
  'tbody',
  'td',
  'textarea',
  'tfoot',
  'th',
  'tr',
  'thead',
  'ul',
  'video'
].forEach(function (name) { html_blocks[name] = true; });


module.exports = html_blocks;

},{}],5:[function(require,module,exports){
// Regexps to match html elements

'use strict';


function replace(regex, options) {
  regex = regex.source;
  options = options || '';

  return function self(name, val) {
    if (!name) {
      return new RegExp(regex, options);
    }
    val = val.source || val;
    regex = regex.replace(name, val);
    return self;
  };
}


var attr_name     = /[a-zA-Z_:][a-zA-Z0-9:._-]*/;

var unquoted      = /[^"'=<>`\x00-\x20]+/;
var single_quoted = /'[^']*'/;
var double_quoted = /"[^"]*"/;

/*eslint no-spaced-func:0*/
var attr_value  = replace(/(?:unquoted|single_quoted|double_quoted)/)
                    ('unquoted', unquoted)
                    ('single_quoted', single_quoted)
                    ('double_quoted', double_quoted)
                    ();

var attribute   = replace(/(?:\s+attr_name(?:\s*=\s*attr_value)?)/)
                    ('attr_name', attr_name)
                    ('attr_value', attr_value)
                    ();

var open_tag    = replace(/<[A-Za-z][A-Za-z0-9]*attribute*\s*\/?>/)
                    ('attribute', attribute)
                    ();

var close_tag   = /<\/[A-Za-z][A-Za-z0-9]*\s*>/;
var comment     = /<!--([^-]+|[-][^-]+)*-->/;
var processing  = /<[?].*?[?]>/;
var declaration = /<![A-Z]+\s+[^>]*>/;
var cdata       = /<!\[CDATA\[([^\]]+|\][^\]]|\]\][^>])*\]\]>/;

var HTML_TAG_RE = replace(/^(?:open_tag|close_tag|comment|processing|declaration|cdata)/)
  ('open_tag', open_tag)
  ('close_tag', close_tag)
  ('comment', comment)
  ('processing', processing)
  ('declaration', declaration)
  ('cdata', cdata)
  ();


module.exports.HTML_TAG_RE = HTML_TAG_RE;

},{}],6:[function(require,module,exports){
// List of valid url schemas, accorting to commonmark spec
// http://jgm.github.io/CommonMark/spec.html#autolinks

'use strict';


module.exports = [
  'coap',
  'doi',
  'javascript',
  'aaa',
  'aaas',
  'about',
  'acap',
  'cap',
  'cid',
  'crid',
  'data',
  'dav',
  'dict',
  'dns',
  'file',
  'ftp',
  'geo',
  'go',
  'gopher',
  'h323',
  'http',
  'https',
  'iax',
  'icap',
  'im',
  'imap',
  'info',
  'ipp',
  'iris',
  'iris.beep',
  'iris.xpc',
  'iris.xpcs',
  'iris.lwz',
  'ldap',
  'mailto',
  'mid',
  'msrp',
  'msrps',
  'mtqp',
  'mupdate',
  'news',
  'nfs',
  'ni',
  'nih',
  'nntp',
  'opaquelocktoken',
  'pop',
  'pres',
  'rtsp',
  'service',
  'session',
  'shttp',
  'sieve',
  'sip',
  'sips',
  'sms',
  'snmp',
  'soap.beep',
  'soap.beeps',
  'tag',
  'tel',
  'telnet',
  'tftp',
  'thismessage',
  'tn3270',
  'tip',
  'tv',
  'urn',
  'vemmi',
  'ws',
  'wss',
  'xcon',
  'xcon-userid',
  'xmlrpc.beep',
  'xmlrpc.beeps',
  'xmpp',
  'z39.50r',
  'z39.50s',
  'adiumxtra',
  'afp',
  'afs',
  'aim',
  'apt',
  'attachment',
  'aw',
  'beshare',
  'bitcoin',
  'bolo',
  'callto',
  'chrome',
  'chrome-extension',
  'com-eventbrite-attendee',
  'content',
  'cvs',
  'dlna-playsingle',
  'dlna-playcontainer',
  'dtn',
  'dvb',
  'ed2k',
  'facetime',
  'feed',
  'finger',
  'fish',
  'gg',
  'git',
  'gizmoproject',
  'gtalk',
  'hcp',
  'icon',
  'ipn',
  'irc',
  'irc6',
  'ircs',
  'itms',
  'jar',
  'jms',
  'keyparc',
  'lastfm',
  'ldaps',
  'magnet',
  'maps',
  'market',
  'message',
  'mms',
  'ms-help',
  'msnim',
  'mumble',
  'mvn',
  'notes',
  'oid',
  'palm',
  'paparazzi',
  'platform',
  'proxy',
  'psyc',
  'query',
  'res',
  'resource',
  'rmi',
  'rsync',
  'rtmp',
  'secondlife',
  'sftp',
  'sgn',
  'skype',
  'smb',
  'soldat',
  'spotify',
  'ssh',
  'steam',
  'svn',
  'teamspeak',
  'things',
  'udp',
  'unreal',
  'ut2004',
  'ventrilo',
  'view-source',
  'webcal',
  'wtai',
  'wyciwyg',
  'xfire',
  'xri',
  'ymsgr'
];

},{}],7:[function(require,module,exports){
'use strict';

/**
 * Utility functions
 */

function typeOf(obj) {
  return Object.prototype.toString.call(obj);
}

function isString(obj) {
  return typeOf(obj) === '[object String]';
}

var hasOwn = Object.prototype.hasOwnProperty;

function has(object, key) {
  return object
    ? hasOwn.call(object, key)
    : false;
}

// Extend objects
//
function assign(obj /*from1, from2, from3, ...*/) {
  var sources = [].slice.call(arguments, 1);

  sources.forEach(function (source) {
    if (!source) { return; }

    if (typeof source !== 'object') {
      throw new TypeError(source + 'must be object');
    }

    Object.keys(source).forEach(function (key) {
      obj[key] = source[key];
    });
  });

  return obj;
}

////////////////////////////////////////////////////////////////////////////////

var UNESCAPE_MD_RE = /\\([\\!"#$%&'()*+,.\/:;<=>?@[\]^_`{|}~-])/g;

function unescapeMd(str) {
  if (str.indexOf('\\') < 0) { return str; }
  return str.replace(UNESCAPE_MD_RE, '$1');
}

////////////////////////////////////////////////////////////////////////////////

function isValidEntityCode(c) {
  /*eslint no-bitwise:0*/
  // broken sequence
  if (c >= 0xD800 && c <= 0xDFFF) { return false; }
  // never used
  if (c >= 0xFDD0 && c <= 0xFDEF) { return false; }
  if ((c & 0xFFFF) === 0xFFFF || (c & 0xFFFF) === 0xFFFE) { return false; }
  // control codes
  if (c >= 0x00 && c <= 0x08) { return false; }
  if (c === 0x0B) { return false; }
  if (c >= 0x0E && c <= 0x1F) { return false; }
  if (c >= 0x7F && c <= 0x9F) { return false; }
  // out of range
  if (c > 0x10FFFF) { return false; }
  return true;
}

function fromCodePoint(c) {
  /*eslint no-bitwise:0*/
  if (c > 0xffff) {
    c -= 0x10000;
    var surrogate1 = 0xd800 + (c >> 10),
        surrogate2 = 0xdc00 + (c & 0x3ff);

    return String.fromCharCode(surrogate1, surrogate2);
  }
  return String.fromCharCode(c);
}

var NAMED_ENTITY_RE   = /&([a-z#][a-z0-9]{1,31});/gi;
var DIGITAL_ENTITY_TEST_RE = /^#((?:x[a-f0-9]{1,8}|[0-9]{1,8}))/i;
var entities = require('./entities');

function replaceEntityPattern(match, name) {
  var code = 0;

  if (has(entities, name)) {
    return entities[name];
  } else if (name.charCodeAt(0) === 0x23/* # */ && DIGITAL_ENTITY_TEST_RE.test(name)) {
    code = name[1].toLowerCase() === 'x' ?
      parseInt(name.slice(2), 16)
    :
      parseInt(name.slice(1), 10);
    if (isValidEntityCode(code)) {
      return fromCodePoint(code);
    }
  }
  return match;
}

function replaceEntities(str) {
  if (str.indexOf('&') < 0) { return str; }

  return str.replace(NAMED_ENTITY_RE, replaceEntityPattern);
}

////////////////////////////////////////////////////////////////////////////////

var HTML_ESCAPE_TEST_RE = /[&<>"]/;
var HTML_ESCAPE_REPLACE_RE = /[&<>"]/g;
var HTML_REPLACEMENTS = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;'
};

function replaceUnsafeChar(ch) {
  return HTML_REPLACEMENTS[ch];
}

function escapeHtml(str) {
  if (HTML_ESCAPE_TEST_RE.test(str)) {
    return str.replace(HTML_ESCAPE_REPLACE_RE, replaceUnsafeChar);
  }
  return str;
}

////////////////////////////////////////////////////////////////////////////////

exports.assign            = assign;
exports.isString          = isString;
exports.has               = has;
exports.unescapeMd        = unescapeMd;
exports.isValidEntityCode = isValidEntityCode;
exports.fromCodePoint     = fromCodePoint;
exports.replaceEntities   = replaceEntities;
exports.escapeHtml        = escapeHtml;

},{"./entities":3}],8:[function(require,module,exports){
// Commonmark default options

'use strict';


module.exports = {
  options: {
    html:         true,         // Enable HTML tags in source
    xhtmlOut:     true,         // Use '/' to close single tags (<br />)
    breaks:       false,        // Convert '\n' in paragraphs into <br>
    langPrefix:   'language-',  // CSS language prefix for fenced blocks
    linkify:      false,        // autoconvert URL-like texts to links

    // Enable some language-neutral replacements + quotes beautification
    typographer:  false,

    // Double + single quotes replacement pairs, when typographer enabled,
    // and smartquotes on. Set doubles to '«»' for Russian, '„“' for German.
    quotes: '“”‘’',

    // Highlighter function. Should return escaped HTML,
    // or '' if input not changed
    //
    // function (/*str, lang*/) { return ''; }
    //
    highlight: null,

    maxNesting:   20            // Internal protection, recursion limit
  },

  components: {

    core: {
      rules: [
        'block',
        'inline',
        'references',
        'abbr2'
      ]
    },

    block: {
      rules: [
        'blockquote',
        'code',
        'fences',
        'heading',
        'hr',
        'htmlblock',
        'lheading',
        'list',
        'paragraph'
      ]
    },

    inline: {
      rules: [
        'autolink',
        'backticks',
        'emphasis',
        'entity',
        'escape',
        'htmltag',
        'links',
        'newline',
        'text'
      ]
    }
  }
};

},{}],9:[function(require,module,exports){
// Remarkable default options

'use strict';


module.exports = {
  options: {
    html:         false,        // Enable HTML tags in source
    xhtmlOut:     false,        // Use '/' to close single tags (<br />)
    breaks:       false,        // Convert '\n' in paragraphs into <br>
    langPrefix:   'language-',  // CSS language prefix for fenced blocks
    linkify:      false,        // autoconvert URL-like texts to links

    // Enable some language-neutral replacements + quotes beautification
    typographer:  false,

    // Double + single quotes replacement pairs, when typographer enabled,
    // and smartquotes on. Set doubles to '«»' for Russian, '„“' for German.
    quotes: '“”‘’',

    // Highlighter function. Should return escaped HTML,
    // or '' if input not changed
    //
    // function (/*str, lang*/) { return ''; }
    //
    highlight: null,

    maxNesting:   20            // Internal protection, recursion limit
  },

  components: {

    core: {
      rules: [
        'block',
        'inline',
        'references',
        'replacements',
        'linkify',
        'smartquotes',
        'references',
        'abbr2',
        'footnote_tail'
      ]
    },

    block: {
      rules: [
        'blockquote',
        'code',
        'fences',
        'heading',
        'hr',
        'htmlblock',
        'lheading',
        'list',
        'paragraph',
        'table'
      ]
    },

    inline: {
      rules: [
        'autolink',
        'backticks',
        'del',
        'emphasis',
        'entity',
        'escape',
        'footnote_ref',
        'htmltag',
        'links',
        'newline',
        'text'
      ]
    }
  }
};

},{}],10:[function(require,module,exports){
// Remarkable default options

'use strict';


module.exports = {
  options: {
    html:         false,        // Enable HTML tags in source
    xhtmlOut:     false,        // Use '/' to close single tags (<br />)
    breaks:       false,        // Convert '\n' in paragraphs into <br>
    langPrefix:   'language-',  // CSS language prefix for fenced blocks
    linkify:      false,        // autoconvert URL-like texts to links

    // Enable some language-neutral replacements + quotes beautification
    typographer:  false,

    // Double + single quotes replacement pairs, when typographer enabled,
    // and smartquotes on. Set doubles to '«»' for Russian, '„“' for German.
    quotes:       '“”‘’',

    // Highlighter function. Should return escaped HTML,
    // or '' if input not changed
    //
    // function (/*str, lang*/) { return ''; }
    //
    highlight:     null,

    maxNesting:    20            // Internal protection, recursion limit
  },

  components: {
    // Don't restrict core/block/inline rules
    core: {},
    block: {},
    inline: {}
  }
};

},{}],11:[function(require,module,exports){
'use strict';

var replaceEntities = require('../common/utils').replaceEntities;

module.exports = function normalizeLink(url) {
  var normalized = replaceEntities(url);
  // We shouldn't care about the result of malformed URIs,
  // and should not throw an exception.
  try {
    normalized = decodeURI(normalized);
  } catch (err) {}
  return encodeURI(normalized);
};

},{"../common/utils":7}],12:[function(require,module,exports){
'use strict';

module.exports = function normalizeReference(str) {
  // use .toUpperCase() instead of .toLowerCase()
  // here to avoid a conflict with Object.prototype
  // members (most notably, `__proto__`)
  return str.trim().replace(/\s+/g, ' ').toUpperCase();
};

},{}],13:[function(require,module,exports){
'use strict';


var normalizeLink = require('./normalize_link');
var unescapeMd    = require('../common/utils').unescapeMd;

/**
 * Parse link destination
 *
 *   - on success it returns a string and updates state.pos;
 *   - on failure it returns null
 *
 * @param  {Object} state
 * @param  {Number} pos
 * @api private
 */

module.exports = function parseLinkDestination(state, pos) {
  var code, level, link,
      start = pos,
      max = state.posMax;

  if (state.src.charCodeAt(pos) === 0x3C /* < */) {
    pos++;
    while (pos < max) {
      code = state.src.charCodeAt(pos);
      if (code === 0x0A /* \n */) { return false; }
      if (code === 0x3E /* > */) {
        link = normalizeLink(unescapeMd(state.src.slice(start + 1, pos)));
        if (!state.parser.validateLink(link)) { return false; }
        state.pos = pos + 1;
        state.linkContent = link;
        return true;
      }
      if (code === 0x5C /* \ */ && pos + 1 < max) {
        pos += 2;
        continue;
      }

      pos++;
    }

    // no closing '>'
    return false;
  }

  // this should be ... } else { ... branch

  level = 0;
  while (pos < max) {
    code = state.src.charCodeAt(pos);

    if (code === 0x20) { break; }

    // ascii control characters
    if (code < 0x20 || code === 0x7F) { break; }

    if (code === 0x5C /* \ */ && pos + 1 < max) {
      pos += 2;
      continue;
    }

    if (code === 0x28 /* ( */) {
      level++;
      if (level > 1) { break; }
    }

    if (code === 0x29 /* ) */) {
      level--;
      if (level < 0) { break; }
    }

    pos++;
  }

  if (start === pos) { return false; }

  link = normalizeLink(unescapeMd(state.src.slice(start, pos)));
  if (!state.parser.validateLink(link)) { return false; }

  state.linkContent = link;
  state.pos = pos;
  return true;
};

},{"../common/utils":7,"./normalize_link":11}],14:[function(require,module,exports){
'use strict';

/**
 * Parse link labels
 *
 * This function assumes that first character (`[`) already matches;
 * returns the end of the label.
 *
 * @param  {Object} state
 * @param  {Number} start
 * @api private
 */

module.exports = function parseLinkLabel(state, start) {
  var level, found, marker,
      labelEnd = -1,
      max = state.posMax,
      oldPos = state.pos,
      oldFlag = state.isInLabel;

  if (state.isInLabel) { return -1; }

  if (state.labelUnmatchedScopes) {
    state.labelUnmatchedScopes--;
    return -1;
  }

  state.pos = start + 1;
  state.isInLabel = true;
  level = 1;

  while (state.pos < max) {
    marker = state.src.charCodeAt(state.pos);
    if (marker === 0x5B /* [ */) {
      level++;
    } else if (marker === 0x5D /* ] */) {
      level--;
      if (level === 0) {
        found = true;
        break;
      }
    }

    state.parser.skipToken(state);
  }

  if (found) {
    labelEnd = state.pos;
    state.labelUnmatchedScopes = 0;
  } else {
    state.labelUnmatchedScopes = level - 1;
  }

  // restore old state
  state.pos = oldPos;
  state.isInLabel = oldFlag;

  return labelEnd;
};

},{}],15:[function(require,module,exports){
'use strict';


var unescapeMd = require('../common/utils').unescapeMd;

/**
 * Parse link title
 *
 *   - on success it returns a string and updates state.pos;
 *   - on failure it returns null
 *
 * @param  {Object} state
 * @param  {Number} pos
 * @api private
 */

module.exports = function parseLinkTitle(state, pos) {
  var code,
      start = pos,
      max = state.posMax,
      marker = state.src.charCodeAt(pos);

  if (marker !== 0x22 /* " */ && marker !== 0x27 /* ' */ && marker !== 0x28 /* ( */) { return false; }

  pos++;

  // if opening marker is "(", switch it to closing marker ")"
  if (marker === 0x28) { marker = 0x29; }

  while (pos < max) {
    code = state.src.charCodeAt(pos);
    if (code === marker) {
      state.pos = pos + 1;
      state.linkContent = unescapeMd(state.src.slice(start + 1, pos));
      return true;
    }
    if (code === 0x5C /* \ */ && pos + 1 < max) {
      pos += 2;
      continue;
    }

    pos++;
  }

  return false;
};

},{"../common/utils":7}],16:[function(require,module,exports){
'use strict';

/**
 * Local dependencies
 */

var assign       = require('./common/utils').assign;
var Renderer     = require('./renderer');
var ParserCore   = require('./parser_core');
var ParserBlock  = require('./parser_block');
var ParserInline = require('./parser_inline');
var Ruler        = require('./ruler');

/**
 * Preset configs
 */

var config = {
  'default':    require('./configs/default'),
  'full':       require('./configs/full'),
  'commonmark': require('./configs/commonmark')
};

/**
 * The `StateCore` class manages state.
 *
 * @param {Object} `self` Remarkable instance
 * @param {String} `str` Markdown string
 * @param {Object} `env`
 */

function StateCore(self, str, env) {
  this.src = str;
  this.env = env;
  this.options = self.options;
  this.tokens = [];
  this.inlineMode = false;

  this.inline = self.inline;
  this.block = self.block;
  this.renderer = self.renderer;
  this.typographer = self.typographer;
}

/**
 * The main `Remarkable` class. Create an instance of
 * `Remarkable` with a `preset` and/or `options`.
 *
 * @param {String} `preset` If no preset is given, `default` is used.
 * @param {Object} `options`
 */

function Remarkable(preset, options) {
  if (typeof preset !== 'string') {
    options = preset;
    preset = 'default';
  }

  this.inline   = new ParserInline();
  this.block    = new ParserBlock();
  this.core     = new ParserCore();
  this.renderer = new Renderer();
  this.ruler    = new Ruler();

  this.options  = {};
  this.configure(config[preset]);
  this.set(options || {});
}

/**
 * Set options as an alternative to passing them
 * to the constructor.
 *
 * ```js
 * md.set({typographer: true});
 * ```
 * @param {Object} `options`
 * @api public
 */

Remarkable.prototype.set = function (options) {
  assign(this.options, options);
};

/**
 * Batch loader for components rules states, and options
 *
 * @param  {Object} `presets`
 */

Remarkable.prototype.configure = function (presets) {
  var self = this;

  if (!presets) { throw new Error('Wrong `remarkable` preset, check name/content'); }
  if (presets.options) { self.set(presets.options); }
  if (presets.components) {
    Object.keys(presets.components).forEach(function (name) {
      if (presets.components[name].rules) {
        self[name].ruler.enable(presets.components[name].rules, true);
      }
    });
  }
};

/**
 * Use a plugin.
 *
 * ```js
 * var md = new Remarkable();
 *
 * md.use(plugin1)
 *   .use(plugin2, opts)
 *   .use(plugin3);
 * ```
 *
 * @param  {Function} `plugin`
 * @param  {Object} `options`
 * @return {Object} `Remarkable` for chaining
 */

Remarkable.prototype.use = function (plugin, options) {
  plugin(this, options);
  return this;
};


/**
 * Parse the input `string` and return a tokens array.
 * Modifies `env` with definitions data.
 *
 * @param  {String} `string`
 * @param  {Object} `env`
 * @return {Array} Array of tokens
 */

Remarkable.prototype.parse = function (str, env) {
  var state = new StateCore(this, str, env);
  this.core.process(state);
  return state.tokens;
};

/**
 * The main `.render()` method that does all the magic :)
 *
 * @param  {String} `string`
 * @param  {Object} `env`
 * @return {String} Rendered HTML.
 */

Remarkable.prototype.render = function (str, env) {
  env = env || {};
  return this.renderer.render(this.parse(str, env), this.options, env);
};

/**
 * Parse the given content `string` as a single string.
 *
 * @param  {String} `string`
 * @param  {Object} `env`
 * @return {Array} Array of tokens
 */

Remarkable.prototype.parseInline = function (str, env) {
  var state = new StateCore(this, str, env);
  state.inlineMode = true;
  this.core.process(state);
  return state.tokens;
};

/**
 * Render a single content `string`, without wrapping it
 * to paragraphs
 *
 * @param  {String} `str`
 * @param  {Object} `env`
 * @return {String}
 */

Remarkable.prototype.renderInline = function (str, env) {
  env = env || {};
  return this.renderer.render(this.parseInline(str, env), this.options, env);
};

/**
 * Expose `Remarkable`
 */

module.exports = Remarkable;

/**
 * Expose `utils`, Useful helper functions for custom
 * rendering.
 */

module.exports.utils = require('./common/utils');

},{"./common/utils":7,"./configs/commonmark":8,"./configs/default":9,"./configs/full":10,"./parser_block":17,"./parser_core":18,"./parser_inline":19,"./renderer":20,"./ruler":21}],17:[function(require,module,exports){
'use strict';

/**
 * Local dependencies
 */

var Ruler      = require('./ruler');
var StateBlock = require('./rules_block/state_block');

/**
 * Parser rules
 */

var _rules = [
  [ 'code',       require('./rules_block/code') ],
  [ 'fences',     require('./rules_block/fences'),     [ 'paragraph', 'blockquote', 'list' ] ],
  [ 'blockquote', require('./rules_block/blockquote'), [ 'paragraph', 'blockquote', 'list' ] ],
  [ 'hr',         require('./rules_block/hr'),         [ 'paragraph', 'blockquote', 'list' ] ],
  [ 'list',       require('./rules_block/list'),       [ 'paragraph', 'blockquote' ] ],
  [ 'footnote',   require('./rules_block/footnote'),   [ 'paragraph' ] ],
  [ 'heading',    require('./rules_block/heading'),    [ 'paragraph', 'blockquote' ] ],
  [ 'lheading',   require('./rules_block/lheading') ],
  [ 'htmlblock',  require('./rules_block/htmlblock'),  [ 'paragraph', 'blockquote' ] ],
  [ 'table',      require('./rules_block/table'),      [ 'paragraph' ] ],
  [ 'deflist',    require('./rules_block/deflist'),    [ 'paragraph' ] ],
  [ 'paragraph',  require('./rules_block/paragraph') ]
];

/**
 * Block Parser class
 *
 * @api private
 */

function ParserBlock() {
  this.ruler = new Ruler();
  for (var i = 0; i < _rules.length; i++) {
    this.ruler.push(_rules[i][0], _rules[i][1], {
      alt: (_rules[i][2] || []).slice()
    });
  }
}

/**
 * Generate tokens for the given input range.
 *
 * @param  {Object} `state` Has properties like `src`, `parser`, `options` etc
 * @param  {Number} `startLine`
 * @param  {Number} `endLine`
 * @api private
 */

ParserBlock.prototype.tokenize = function (state, startLine, endLine) {
  var rules = this.ruler.getRules('');
  var len = rules.length;
  var line = startLine;
  var hasEmptyLines = false;
  var ok, i;

  while (line < endLine) {
    state.line = line = state.skipEmptyLines(line);
    if (line >= endLine) {
      break;
    }

    // Termination condition for nested calls.
    // Nested calls currently used for blockquotes & lists
    if (state.tShift[line] < state.blkIndent) {
      break;
    }

    // Try all possible rules.
    // On success, rule should:
    //
    // - update `state.line`
    // - update `state.tokens`
    // - return true

    for (i = 0; i < len; i++) {
      ok = rules[i](state, line, endLine, false);
      if (ok) {
        break;
      }
    }

    // set state.tight iff we had an empty line before current tag
    // i.e. latest empty line should not count
    state.tight = !hasEmptyLines;

    // paragraph might "eat" one newline after it in nested lists
    if (state.isEmpty(state.line - 1)) {
      hasEmptyLines = true;
    }

    line = state.line;

    if (line < endLine && state.isEmpty(line)) {
      hasEmptyLines = true;
      line++;

      // two empty lines should stop the parser in list mode
      if (line < endLine && state.parentType === 'list' && state.isEmpty(line)) { break; }
      state.line = line;
    }
  }
};

var TABS_SCAN_RE = /[\n\t]/g;
var NEWLINES_RE  = /\r[\n\u0085]|[\u2424\u2028\u0085]/g;
var SPACES_RE    = /\u00a0/g;

/**
 * Tokenize the given `str`.
 *
 * @param  {String} `str` Source string
 * @param  {Object} `options`
 * @param  {Object} `env`
 * @param  {Array} `outTokens`
 * @api private
 */

ParserBlock.prototype.parse = function (str, options, env, outTokens) {
  var state, lineStart = 0, lastTabPos = 0;
  if (!str) { return []; }

  // Normalize spaces
  str = str.replace(SPACES_RE, ' ');

  // Normalize newlines
  str = str.replace(NEWLINES_RE, '\n');

  // Replace tabs with proper number of spaces (1..4)
  if (str.indexOf('\t') >= 0) {
    str = str.replace(TABS_SCAN_RE, function (match, offset) {
      var result;
      if (str.charCodeAt(offset) === 0x0A) {
        lineStart = offset + 1;
        lastTabPos = 0;
        return match;
      }
      result = '    '.slice((offset - lineStart - lastTabPos) % 4);
      lastTabPos = offset - lineStart + 1;
      return result;
    });
  }

  state = new StateBlock(str, this, options, env, outTokens);
  this.tokenize(state, state.line, state.lineMax);
};

/**
 * Expose `ParserBlock`
 */

module.exports = ParserBlock;

},{"./ruler":21,"./rules_block/blockquote":23,"./rules_block/code":24,"./rules_block/deflist":25,"./rules_block/fences":26,"./rules_block/footnote":27,"./rules_block/heading":28,"./rules_block/hr":29,"./rules_block/htmlblock":30,"./rules_block/lheading":31,"./rules_block/list":32,"./rules_block/paragraph":33,"./rules_block/state_block":34,"./rules_block/table":35}],18:[function(require,module,exports){
'use strict';

/**
 * Local dependencies
 */

var Ruler = require('./ruler');

/**
 * Core parser `rules`
 */

var _rules = [
  [ 'block',          require('./rules_core/block')          ],
  [ 'abbr',           require('./rules_core/abbr')           ],
  [ 'references',     require('./rules_core/references')     ],
  [ 'inline',         require('./rules_core/inline')         ],
  [ 'footnote_tail',  require('./rules_core/footnote_tail')  ],
  [ 'abbr2',          require('./rules_core/abbr2')          ],
  [ 'replacements',   require('./rules_core/replacements')   ],
  [ 'smartquotes',    require('./rules_core/smartquotes')    ],
  [ 'linkify',        require('./rules_core/linkify')        ]
];

/**
 * Class for top level (`core`) parser rules
 *
 * @api private
 */

function Core() {
  this.options = {};
  this.ruler = new Ruler();
  for (var i = 0; i < _rules.length; i++) {
    this.ruler.push(_rules[i][0], _rules[i][1]);
  }
}

/**
 * Process rules with the given `state`
 *
 * @param  {Object} `state`
 * @api private
 */

Core.prototype.process = function (state) {
  var i, l, rules;
  rules = this.ruler.getRules('');
  for (i = 0, l = rules.length; i < l; i++) {
    rules[i](state);
  }
};

/**
 * Expose `Core`
 */

module.exports = Core;

},{"./ruler":21,"./rules_core/abbr":36,"./rules_core/abbr2":37,"./rules_core/block":38,"./rules_core/footnote_tail":39,"./rules_core/inline":40,"./rules_core/linkify":41,"./rules_core/references":42,"./rules_core/replacements":43,"./rules_core/smartquotes":44}],19:[function(require,module,exports){
'use strict';

/**
 * Local dependencies
 */

var Ruler       = require('./ruler');
var StateInline = require('./rules_inline/state_inline');
var utils       = require('./common/utils');

/**
 * Inline Parser `rules`
 */

var _rules = [
  [ 'text',            require('./rules_inline/text') ],
  [ 'newline',         require('./rules_inline/newline') ],
  [ 'escape',          require('./rules_inline/escape') ],
  [ 'backticks',       require('./rules_inline/backticks') ],
  [ 'del',             require('./rules_inline/del') ],
  [ 'ins',             require('./rules_inline/ins') ],
  [ 'mark',            require('./rules_inline/mark') ],
  [ 'emphasis',        require('./rules_inline/emphasis') ],
  [ 'sub',             require('./rules_inline/sub') ],
  [ 'sup',             require('./rules_inline/sup') ],
  [ 'links',           require('./rules_inline/links') ],
  [ 'footnote_inline', require('./rules_inline/footnote_inline') ],
  [ 'footnote_ref',    require('./rules_inline/footnote_ref') ],
  [ 'autolink',        require('./rules_inline/autolink') ],
  [ 'htmltag',         require('./rules_inline/htmltag') ],
  [ 'entity',          require('./rules_inline/entity') ]
];

/**
 * Inline Parser class. Note that link validation is stricter
 * in Remarkable than what is specified by CommonMark. If you
 * want to change this you can use a custom validator.
 *
 * @api private
 */

function ParserInline() {
  this.ruler = new Ruler();
  for (var i = 0; i < _rules.length; i++) {
    this.ruler.push(_rules[i][0], _rules[i][1]);
  }

  // Can be overridden with a custom validator
  this.validateLink = validateLink;
}

/**
 * Skip a single token by running all rules in validation mode.
 * Returns `true` if any rule reports success.
 *
 * @param  {Object} `state`
 * @api privage
 */

ParserInline.prototype.skipToken = function (state) {
  var rules = this.ruler.getRules('');
  var len = rules.length;
  var pos = state.pos;
  var i, cached_pos;

  if ((cached_pos = state.cacheGet(pos)) > 0) {
    state.pos = cached_pos;
    return;
  }

  for (i = 0; i < len; i++) {
    if (rules[i](state, true)) {
      state.cacheSet(pos, state.pos);
      return;
    }
  }

  state.pos++;
  state.cacheSet(pos, state.pos);
};

/**
 * Generate tokens for the given input range.
 *
 * @param  {Object} `state`
 * @api private
 */

ParserInline.prototype.tokenize = function (state) {
  var rules = this.ruler.getRules('');
  var len = rules.length;
  var end = state.posMax;
  var ok, i;

  while (state.pos < end) {

    // Try all possible rules.
    // On success, the rule should:
    //
    // - update `state.pos`
    // - update `state.tokens`
    // - return true
    for (i = 0; i < len; i++) {
      ok = rules[i](state, false);

      if (ok) {
        break;
      }
    }

    if (ok) {
      if (state.pos >= end) { break; }
      continue;
    }

    state.pending += state.src[state.pos++];
  }

  if (state.pending) {
    state.pushPending();
  }
};

/**
 * Parse the given input string.
 *
 * @param  {String} `str`
 * @param  {Object} `options`
 * @param  {Object} `env`
 * @param  {Array} `outTokens`
 * @api private
 */

ParserInline.prototype.parse = function (str, options, env, outTokens) {
  var state = new StateInline(str, this, options, env, outTokens);
  this.tokenize(state);
};

/**
 * Validate the given `url` by checking for bad protocols.
 *
 * @param  {String} `url`
 * @return {Boolean}
 */

function validateLink(url) {
  var BAD_PROTOCOLS = [ 'vbscript', 'javascript', 'file' ];
  var str = url.trim().toLowerCase();
  // Care about digital entities "javascript&#x3A;alert(1)"
  str = utils.replaceEntities(str);
  if (str.indexOf(':') !== -1 && BAD_PROTOCOLS.indexOf(str.split(':')[0]) !== -1) {
    return false;
  }
  return true;
}

/**
 * Expose `ParserInline`
 */

module.exports = ParserInline;

},{"./common/utils":7,"./ruler":21,"./rules_inline/autolink":45,"./rules_inline/backticks":46,"./rules_inline/del":47,"./rules_inline/emphasis":48,"./rules_inline/entity":49,"./rules_inline/escape":50,"./rules_inline/footnote_inline":51,"./rules_inline/footnote_ref":52,"./rules_inline/htmltag":53,"./rules_inline/ins":54,"./rules_inline/links":55,"./rules_inline/mark":56,"./rules_inline/newline":57,"./rules_inline/state_inline":58,"./rules_inline/sub":59,"./rules_inline/sup":60,"./rules_inline/text":61}],20:[function(require,module,exports){
'use strict';

/**
 * Local dependencies
 */

var utils = require('./common/utils');
var rules = require('./rules');

/**
 * Expose `Renderer`
 */

module.exports = Renderer;

/**
 * Renderer class. Renders HTML and exposes `rules` to allow
 * local modifications.
 */

function Renderer() {
  this.rules = utils.assign({}, rules);

  // exported helper, for custom rules only
  this.getBreak = rules.getBreak;
}

/**
 * Render a string of inline HTML with the given `tokens` and
 * `options`.
 *
 * @param  {Array} `tokens`
 * @param  {Object} `options`
 * @param  {Object} `env`
 * @return {String}
 * @api public
 */

Renderer.prototype.renderInline = function (tokens, options, env) {
  var _rules = this.rules;
  var len = tokens.length, i = 0;
  var result = '';

  while (len--) {
    result += _rules[tokens[i].type](tokens, i++, options, env, this);
  }

  return result;
};

/**
 * Render a string of HTML with the given `tokens` and
 * `options`.
 *
 * @param  {Array} `tokens`
 * @param  {Object} `options`
 * @param  {Object} `env`
 * @return {String}
 * @api public
 */

Renderer.prototype.render = function (tokens, options, env) {
  var _rules = this.rules;
  var len = tokens.length, i = -1;
  var result = '';

  while (++i < len) {
    if (tokens[i].type === 'inline') {
      result += this.renderInline(tokens[i].children, options, env);
    } else {
      result += _rules[tokens[i].type](tokens, i, options, env, this);
    }
  }
  return result;
};

},{"./common/utils":7,"./rules":22}],21:[function(require,module,exports){
'use strict';

/**
 * Ruler is a helper class for building responsibility chains from
 * parse rules. It allows:
 *
 *   - easy stack rules chains
 *   - getting main chain and named chains content (as arrays of functions)
 *
 * Helper methods, should not be used directly.
 * @api private
 */

function Ruler() {
  // List of added rules. Each element is:
  //
  // { name: XXX,
  //   enabled: Boolean,
  //   fn: Function(),
  //   alt: [ name2, name3 ] }
  //
  this.__rules__ = [];

  // Cached rule chains.
  //
  // First level - chain name, '' for default.
  // Second level - digital anchor for fast filtering by charcodes.
  //
  this.__cache__ = null;
}

/**
 * Find the index of a rule by `name`.
 *
 * @param  {String} `name`
 * @return {Number} Index of the given `name`
 * @api private
 */

Ruler.prototype.__find__ = function (name) {
  var len = this.__rules__.length;
  var i = -1;

  while (len--) {
    if (this.__rules__[++i].name === name) {
      return i;
    }
  }
  return -1;
};

/**
 * Build the rules lookup cache
 *
 * @api private
 */

Ruler.prototype.__compile__ = function () {
  var self = this;
  var chains = [ '' ];

  // collect unique names
  self.__rules__.forEach(function (rule) {
    if (!rule.enabled) {
      return;
    }

    rule.alt.forEach(function (altName) {
      if (chains.indexOf(altName) < 0) {
        chains.push(altName);
      }
    });
  });

  self.__cache__ = {};

  chains.forEach(function (chain) {
    self.__cache__[chain] = [];
    self.__rules__.forEach(function (rule) {
      if (!rule.enabled) {
        return;
      }

      if (chain && rule.alt.indexOf(chain) < 0) {
        return;
      }
      self.__cache__[chain].push(rule.fn);
    });
  });
};

/**
 * Ruler public methods
 * ------------------------------------------------
 */

/**
 * Replace rule function
 *
 * @param  {String} `name` Rule name
 * @param  {Function `fn`
 * @param  {Object} `options`
 * @api private
 */

Ruler.prototype.at = function (name, fn, options) {
  var idx = this.__find__(name);
  var opt = options || {};

  if (idx === -1) {
    throw new Error('Parser rule not found: ' + name);
  }

  this.__rules__[idx].fn = fn;
  this.__rules__[idx].alt = opt.alt || [];
  this.__cache__ = null;
};

/**
 * Add a rule to the chain before given the `ruleName`.
 *
 * @param  {String}   `beforeName`
 * @param  {String}   `ruleName`
 * @param  {Function} `fn`
 * @param  {Object}   `options`
 * @api private
 */

Ruler.prototype.before = function (beforeName, ruleName, fn, options) {
  var idx = this.__find__(beforeName);
  var opt = options || {};

  if (idx === -1) {
    throw new Error('Parser rule not found: ' + beforeName);
  }

  this.__rules__.splice(idx, 0, {
    name: ruleName,
    enabled: true,
    fn: fn,
    alt: opt.alt || []
  });

  this.__cache__ = null;
};

/**
 * Add a rule to the chain after the given `ruleName`.
 *
 * @param  {String}   `afterName`
 * @param  {String}   `ruleName`
 * @param  {Function} `fn`
 * @param  {Object}   `options`
 * @api private
 */

Ruler.prototype.after = function (afterName, ruleName, fn, options) {
  var idx = this.__find__(afterName);
  var opt = options || {};

  if (idx === -1) {
    throw new Error('Parser rule not found: ' + afterName);
  }

  this.__rules__.splice(idx + 1, 0, {
    name: ruleName,
    enabled: true,
    fn: fn,
    alt: opt.alt || []
  });

  this.__cache__ = null;
};

/**
 * Add a rule to the end of chain.
 *
 * @param  {String}   `ruleName`
 * @param  {Function} `fn`
 * @param  {Object}   `options`
 * @return {String}
 */

Ruler.prototype.push = function (ruleName, fn, options) {
  var opt = options || {};

  this.__rules__.push({
    name: ruleName,
    enabled: true,
    fn: fn,
    alt: opt.alt || []
  });

  this.__cache__ = null;
};

/**
 * Enable a rule or list of rules.
 *
 * @param  {String|Array} `list` Name or array of rule names to enable
 * @param  {Boolean} `strict` If `true`, all non listed rules will be disabled.
 * @api private
 */

Ruler.prototype.enable = function (list, strict) {
  list = !Array.isArray(list)
    ? [ list ]
    : list;

  // In strict mode disable all existing rules first
  if (strict) {
    this.__rules__.forEach(function (rule) {
      rule.enabled = false;
    });
  }

  // Search by name and enable
  list.forEach(function (name) {
    var idx = this.__find__(name);
    if (idx < 0) {
      throw new Error('Rules manager: invalid rule name ' + name);
    }
    this.__rules__[idx].enabled = true;
  }, this);

  this.__cache__ = null;
};


/**
 * Disable a rule or list of rules.
 *
 * @param  {String|Array} `list` Name or array of rule names to disable
 * @api private
 */

Ruler.prototype.disable = function (list) {
  list = !Array.isArray(list)
    ? [ list ]
    : list;

  // Search by name and disable
  list.forEach(function (name) {
    var idx = this.__find__(name);
    if (idx < 0) {
      throw new Error('Rules manager: invalid rule name ' + name);
    }
    this.__rules__[idx].enabled = false;
  }, this);

  this.__cache__ = null;
};

/**
 * Get a rules list as an array of functions.
 *
 * @param  {String} `chainName`
 * @return {Object}
 * @api private
 */

Ruler.prototype.getRules = function (chainName) {
  if (this.__cache__ === null) {
    this.__compile__();
  }
  return this.__cache__[chainName];
};

/**
 * Expose `Ruler`
 */

module.exports = Ruler;

},{}],22:[function(require,module,exports){
'use strict';

/**
 * Local dependencies
 */

var has             = require('./common/utils').has;
var unescapeMd      = require('./common/utils').unescapeMd;
var replaceEntities = require('./common/utils').replaceEntities;
var escapeHtml      = require('./common/utils').escapeHtml;

/**
 * Renderer rules cache
 */

var rules = {};

/**
 * Blockquotes
 */

rules.blockquote_open = function (/* tokens, idx, options, env */) {
  return '<blockquote>\n';
};

rules.blockquote_close = function (tokens, idx /*, options, env */) {
  return '</blockquote>' + getBreak(tokens, idx);
};

/**
 * Code
 */

rules.code = function (tokens, idx /*, options, env */) {
  if (tokens[idx].block) {
    return '<pre><code>' + escapeHtml(tokens[idx].content) + '</code></pre>' + getBreak(tokens, idx);
  }
  return '<code>' + escapeHtml(tokens[idx].content) + '</code>';
};

/**
 * Fenced code blocks
 */

rules.fence = function (tokens, idx, options, env, self) {
  var token = tokens[idx];
  var langClass = '';
  var langPrefix = options.langPrefix;
  var langName = '', fenceName;
  var highlighted;

  if (token.params) {

    //
    // ```foo bar
    //
    // Try custom renderer "foo" first. That will simplify overwrite
    // for diagrams, latex, and any other fenced block with custom look
    //

    fenceName = token.params.split(/\s+/g)[0];

    if (has(self.rules.fence_custom, fenceName)) {
      return self.rules.fence_custom[fenceName](tokens, idx, options, env, self);
    }

    langName = escapeHtml(replaceEntities(unescapeMd(fenceName)));
    langClass = ' class="' + langPrefix + langName + '"';
  }

  if (options.highlight) {
    highlighted = options.highlight(token.content, langName) || escapeHtml(token.content);
  } else {
    highlighted = escapeHtml(token.content);
  }

  return '<pre><code' + langClass + '>'
        + highlighted
        + '</code></pre>'
        + getBreak(tokens, idx);
};

rules.fence_custom = {};

/**
 * Headings
 */

rules.heading_open = function (tokens, idx /*, options, env */) {
  return '<h' + tokens[idx].hLevel + '>';
};
rules.heading_close = function (tokens, idx /*, options, env */) {
  return '</h' + tokens[idx].hLevel + '>\n';
};

/**
 * Horizontal rules
 */

rules.hr = function (tokens, idx, options /*, env */) {
  return (options.xhtmlOut ? '<hr />' : '<hr>') + getBreak(tokens, idx);
};

/**
 * Bullets
 */

rules.bullet_list_open = function (/* tokens, idx, options, env */) {
  return '<ul>\n';
};
rules.bullet_list_close = function (tokens, idx /*, options, env */) {
  return '</ul>' + getBreak(tokens, idx);
};

/**
 * List items
 */

rules.list_item_open = function (/* tokens, idx, options, env */) {
  return '<li>';
};
rules.list_item_close = function (/* tokens, idx, options, env */) {
  return '</li>\n';
};

/**
 * Ordered list items
 */

rules.ordered_list_open = function (tokens, idx /*, options, env */) {
  var token = tokens[idx];
  var order = token.order > 1 ? ' start="' + token.order + '"' : '';
  return '<ol' + order + '>\n';
};
rules.ordered_list_close = function (tokens, idx /*, options, env */) {
  return '</ol>' + getBreak(tokens, idx);
};

/**
 * Paragraphs
 */

rules.paragraph_open = function (tokens, idx /*, options, env */) {
  return tokens[idx].tight ? '' : '<p>';
};
rules.paragraph_close = function (tokens, idx /*, options, env */) {
  var addBreak = !(tokens[idx].tight && idx && tokens[idx - 1].type === 'inline' && !tokens[idx - 1].content);
  return (tokens[idx].tight ? '' : '</p>') + (addBreak ? getBreak(tokens, idx) : '');
};

/**
 * Links
 */

rules.link_open = function (tokens, idx /*, options, env */) {
  var title = tokens[idx].title ? (' title="' + escapeHtml(replaceEntities(tokens[idx].title)) + '"') : '';
  return '<a href="' + escapeHtml(tokens[idx].href) + '"' + title + '>';
};
rules.link_close = function (/* tokens, idx, options, env */) {
  return '</a>';
};

/**
 * Images
 */

rules.image = function (tokens, idx, options /*, env */) {
  var src = ' src="' + escapeHtml(tokens[idx].src) + '"';
  var title = tokens[idx].title ? (' title="' + escapeHtml(replaceEntities(tokens[idx].title)) + '"') : '';
  var alt = ' alt="' + (tokens[idx].alt ? escapeHtml(replaceEntities(tokens[idx].alt)) : '') + '"';
  var suffix = options.xhtmlOut ? ' /' : '';
  return '<img' + src + alt + title + suffix + '>';
};

/**
 * Tables
 */

rules.table_open = function (/* tokens, idx, options, env */) {
  return '<table>\n';
};
rules.table_close = function (/* tokens, idx, options, env */) {
  return '</table>\n';
};
rules.thead_open = function (/* tokens, idx, options, env */) {
  return '<thead>\n';
};
rules.thead_close = function (/* tokens, idx, options, env */) {
  return '</thead>\n';
};
rules.tbody_open = function (/* tokens, idx, options, env */) {
  return '<tbody>\n';
};
rules.tbody_close = function (/* tokens, idx, options, env */) {
  return '</tbody>\n';
};
rules.tr_open = function (/* tokens, idx, options, env */) {
  return '<tr>';
};
rules.tr_close = function (/* tokens, idx, options, env */) {
  return '</tr>\n';
};
rules.th_open = function (tokens, idx /*, options, env */) {
  var token = tokens[idx];
  return '<th'
    + (token.align ? ' style="text-align:' + token.align + '"' : '')
    + '>';
};
rules.th_close = function (/* tokens, idx, options, env */) {
  return '</th>';
};
rules.td_open = function (tokens, idx /*, options, env */) {
  var token = tokens[idx];
  return '<td'
    + (token.align ? ' style="text-align:' + token.align + '"' : '')
    + '>';
};
rules.td_close = function (/* tokens, idx, options, env */) {
  return '</td>';
};

/**
 * Bold
 */

rules.strong_open = function (/* tokens, idx, options, env */) {
  return '<strong>';
};
rules.strong_close = function (/* tokens, idx, options, env */) {
  return '</strong>';
};

/**
 * Italicize
 */

rules.em_open = function (/* tokens, idx, options, env */) {
  return '<em>';
};
rules.em_close = function (/* tokens, idx, options, env */) {
  return '</em>';
};

/**
 * Strikethrough
 */

rules.del_open = function (/* tokens, idx, options, env */) {
  return '<del>';
};
rules.del_close = function (/* tokens, idx, options, env */) {
  return '</del>';
};

/**
 * Insert
 */

rules.ins_open = function (/* tokens, idx, options, env */) {
  return '<ins>';
};
rules.ins_close = function (/* tokens, idx, options, env */) {
  return '</ins>';
};

/**
 * Highlight
 */

rules.mark_open = function (/* tokens, idx, options, env */) {
  return '<mark>';
};
rules.mark_close = function (/* tokens, idx, options, env */) {
  return '</mark>';
};

/**
 * Super- and sub-script
 */

rules.sub = function (tokens, idx /*, options, env */) {
  return '<sub>' + escapeHtml(tokens[idx].content) + '</sub>';
};
rules.sup = function (tokens, idx /*, options, env */) {
  return '<sup>' + escapeHtml(tokens[idx].content) + '</sup>';
};

/**
 * Breaks
 */

rules.hardbreak = function (tokens, idx, options /*, env */) {
  return options.xhtmlOut ? '<br />\n' : '<br>\n';
};
rules.softbreak = function (tokens, idx, options /*, env */) {
  return options.breaks ? (options.xhtmlOut ? '<br />\n' : '<br>\n') : '\n';
};

/**
 * Text
 */

rules.text = function (tokens, idx /*, options, env */) {
  return escapeHtml(tokens[idx].content);
};

/**
 * Content
 */

rules.htmlblock = function (tokens, idx /*, options, env */) {
  return tokens[idx].content;
};
rules.htmltag = function (tokens, idx /*, options, env */) {
  return tokens[idx].content;
};

/**
 * Abbreviations, initialism
 */

rules.abbr_open = function (tokens, idx /*, options, env */) {
  return '<abbr title="' + escapeHtml(replaceEntities(tokens[idx].title)) + '">';
};
rules.abbr_close = function (/* tokens, idx, options, env */) {
  return '</abbr>';
};

/**
 * Footnotes
 */

rules.footnote_ref = function (tokens, idx) {
  var n = Number(tokens[idx].id + 1).toString();
  var id = 'fnref' + n;
  if (tokens[idx].subId > 0) {
    id += ':' + tokens[idx].subId;
  }
  return '<sup class="footnote-ref"><a href="#fn' + n + '" id="' + id + '">[' + n + ']</a></sup>';
};
rules.footnote_block_open = function (tokens, idx, options) {
  var hr = options.xhtmlOut
    ? '<hr class="footnotes-sep" />\n'
    : '<hr class="footnotes-sep">\n';
  return  hr + '<section class="footnotes">\n<ol class="footnotes-list">\n';
};
rules.footnote_block_close = function () {
  return '</ol>\n</section>\n';
};
rules.footnote_open = function (tokens, idx) {
  var id = Number(tokens[idx].id + 1).toString();
  return '<li id="fn' + id + '"  class="footnote-item">';
};
rules.footnote_close = function () {
  return '</li>\n';
};
rules.footnote_anchor = function (tokens, idx) {
  var n = Number(tokens[idx].id + 1).toString();
  var id = 'fnref' + n;
  if (tokens[idx].subId > 0) {
    id += ':' + tokens[idx].subId;
  }
  return ' <a href="#' + id + '" class="footnote-backref">↩</a>';
};

/**
 * Definition lists
 */

rules.dl_open = function() {
  return '<dl>\n';
};
rules.dt_open = function() {
  return '<dt>';
};
rules.dd_open = function() {
  return '<dd>';
};
rules.dl_close = function() {
  return '</dl>\n';
};
rules.dt_close = function() {
  return '</dt>\n';
};
rules.dd_close = function() {
  return '</dd>\n';
};

/**
 * Helper functions
 */

function nextToken(tokens, idx) {
  if (++idx >= tokens.length - 2) {
    return idx;
  }
  if ((tokens[idx].type === 'paragraph_open' && tokens[idx].tight) &&
      (tokens[idx + 1].type === 'inline' && tokens[idx + 1].content.length === 0) &&
      (tokens[idx + 2].type === 'paragraph_close' && tokens[idx + 2].tight)) {
    return nextToken(tokens, idx + 2);
  }
  return idx;
}

/**
 * Check to see if `\n` is needed before the next token.
 *
 * @param  {Array} `tokens`
 * @param  {Number} `idx`
 * @return {String} Empty string or newline
 * @api private
 */

var getBreak = rules.getBreak = function getBreak(tokens, idx) {
  idx = nextToken(tokens, idx);
  if (idx < tokens.length && tokens[idx].type === 'list_item_close') {
    return '';
  }
  return '\n';
};

/**
 * Expose `rules`
 */

module.exports = rules;

},{"./common/utils":7}],23:[function(require,module,exports){
// Block quotes

'use strict';


module.exports = function blockquote(state, startLine, endLine, silent) {
  var nextLine, lastLineEmpty, oldTShift, oldBMarks, oldIndent, oldParentType, lines,
      terminatorRules,
      i, l, terminate,
      pos = state.bMarks[startLine] + state.tShift[startLine],
      max = state.eMarks[startLine];

  if (pos > max) { return false; }

  // check the block quote marker
  if (state.src.charCodeAt(pos++) !== 0x3E/* > */) { return false; }

  if (state.level >= state.options.maxNesting) { return false; }

  // we know that it's going to be a valid blockquote,
  // so no point trying to find the end of it in silent mode
  if (silent) { return true; }

  // skip one optional space after '>'
  if (state.src.charCodeAt(pos) === 0x20) { pos++; }

  oldIndent = state.blkIndent;
  state.blkIndent = 0;

  oldBMarks = [ state.bMarks[startLine] ];
  state.bMarks[startLine] = pos;

  // check if we have an empty blockquote
  pos = pos < max ? state.skipSpaces(pos) : pos;
  lastLineEmpty = pos >= max;

  oldTShift = [ state.tShift[startLine] ];
  state.tShift[startLine] = pos - state.bMarks[startLine];

  terminatorRules = state.parser.ruler.getRules('blockquote');

  // Search the end of the block
  //
  // Block ends with either:
  //  1. an empty line outside:
  //     ```
  //     > test
  //
  //     ```
  //  2. an empty line inside:
  //     ```
  //     >
  //     test
  //     ```
  //  3. another tag
  //     ```
  //     > test
  //      - - -
  //     ```
  for (nextLine = startLine + 1; nextLine < endLine; nextLine++) {
    pos = state.bMarks[nextLine] + state.tShift[nextLine];
    max = state.eMarks[nextLine];

    if (pos >= max) {
      // Case 1: line is not inside the blockquote, and this line is empty.
      break;
    }

    if (state.src.charCodeAt(pos++) === 0x3E/* > */) {
      // This line is inside the blockquote.

      // skip one optional space after '>'
      if (state.src.charCodeAt(pos) === 0x20) { pos++; }

      oldBMarks.push(state.bMarks[nextLine]);
      state.bMarks[nextLine] = pos;

      pos = pos < max ? state.skipSpaces(pos) : pos;
      lastLineEmpty = pos >= max;

      oldTShift.push(state.tShift[nextLine]);
      state.tShift[nextLine] = pos - state.bMarks[nextLine];
      continue;
    }

    // Case 2: line is not inside the blockquote, and the last line was empty.
    if (lastLineEmpty) { break; }

    // Case 3: another tag found.
    terminate = false;
    for (i = 0, l = terminatorRules.length; i < l; i++) {
      if (terminatorRules[i](state, nextLine, endLine, true)) {
        terminate = true;
        break;
      }
    }
    if (terminate) { break; }

    oldBMarks.push(state.bMarks[nextLine]);
    oldTShift.push(state.tShift[nextLine]);

    // A negative number means that this is a paragraph continuation;
    //
    // Any negative number will do the job here, but it's better for it
    // to be large enough to make any bugs obvious.
    state.tShift[nextLine] = -1337;
  }

  oldParentType = state.parentType;
  state.parentType = 'blockquote';
  state.tokens.push({
    type: 'blockquote_open',
    lines: lines = [ startLine, 0 ],
    level: state.level++
  });
  state.parser.tokenize(state, startLine, nextLine);
  state.tokens.push({
    type: 'blockquote_close',
    level: --state.level
  });
  state.parentType = oldParentType;
  lines[1] = state.line;

  // Restore original tShift; this might not be necessary since the parser
  // has already been here, but just to make sure we can do that.
  for (i = 0; i < oldTShift.length; i++) {
    state.bMarks[i + startLine] = oldBMarks[i];
    state.tShift[i + startLine] = oldTShift[i];
  }
  state.blkIndent = oldIndent;

  return true;
};

},{}],24:[function(require,module,exports){
// Code block (4 spaces padded)

'use strict';


module.exports = function code(state, startLine, endLine/*, silent*/) {
  var nextLine, last;

  if (state.tShift[startLine] - state.blkIndent < 4) { return false; }

  last = nextLine = startLine + 1;

  while (nextLine < endLine) {
    if (state.isEmpty(nextLine)) {
      nextLine++;
      continue;
    }
    if (state.tShift[nextLine] - state.blkIndent >= 4) {
      nextLine++;
      last = nextLine;
      continue;
    }
    break;
  }

  state.line = nextLine;
  state.tokens.push({
    type: 'code',
    content: state.getLines(startLine, last, 4 + state.blkIndent, true),
    block: true,
    lines: [ startLine, state.line ],
    level: state.level
  });

  return true;
};

},{}],25:[function(require,module,exports){
// Definition lists

'use strict';


// Search `[:~][\n ]`, returns next pos after marker on success
// or -1 on fail.
function skipMarker(state, line) {
  var pos, marker,
      start = state.bMarks[line] + state.tShift[line],
      max = state.eMarks[line];

  if (start >= max) { return -1; }

  // Check bullet
  marker = state.src.charCodeAt(start++);
  if (marker !== 0x7E/* ~ */ && marker !== 0x3A/* : */) { return -1; }

  pos = state.skipSpaces(start);

  // require space after ":"
  if (start === pos) { return -1; }

  // no empty definitions, e.g. "  : "
  if (pos >= max) { return -1; }

  return pos;
}

function markTightParagraphs(state, idx) {
  var i, l,
      level = state.level + 2;

  for (i = idx + 2, l = state.tokens.length - 2; i < l; i++) {
    if (state.tokens[i].level === level && state.tokens[i].type === 'paragraph_open') {
      state.tokens[i + 2].tight = true;
      state.tokens[i].tight = true;
      i += 2;
    }
  }
}

module.exports = function deflist(state, startLine, endLine, silent) {
  var contentStart,
      ddLine,
      dtLine,
      itemLines,
      listLines,
      listTokIdx,
      nextLine,
      oldIndent,
      oldDDIndent,
      oldParentType,
      oldTShift,
      oldTight,
      prevEmptyEnd,
      tight;

  if (silent) {
    // quirk: validation mode validates a dd block only, not a whole deflist
    if (state.ddIndent < 0) { return false; }
    return skipMarker(state, startLine) >= 0;
  }

  nextLine = startLine + 1;
  if (state.isEmpty(nextLine)) {
    if (++nextLine > endLine) { return false; }
  }

  if (state.tShift[nextLine] < state.blkIndent) { return false; }
  contentStart = skipMarker(state, nextLine);
  if (contentStart < 0) { return false; }

  if (state.level >= state.options.maxNesting) { return false; }

  // Start list
  listTokIdx = state.tokens.length;

  state.tokens.push({
    type: 'dl_open',
    lines: listLines = [ startLine, 0 ],
    level: state.level++
  });

  //
  // Iterate list items
  //

  dtLine = startLine;
  ddLine = nextLine;

  // One definition list can contain multiple DTs,
  // and one DT can be followed by multiple DDs.
  //
  // Thus, there is two loops here, and label is
  // needed to break out of the second one
  //
  /*eslint no-labels:0,block-scoped-var:0*/
  OUTER:
  for (;;) {
    tight = true;
    prevEmptyEnd = false;

    state.tokens.push({
      type: 'dt_open',
      lines: [ dtLine, dtLine ],
      level: state.level++
    });
    state.tokens.push({
      type: 'inline',
      content: state.getLines(dtLine, dtLine + 1, state.blkIndent, false).trim(),
      level: state.level + 1,
      lines: [ dtLine, dtLine ],
      children: []
    });
    state.tokens.push({
      type: 'dt_close',
      level: --state.level
    });

    for (;;) {
      state.tokens.push({
        type: 'dd_open',
        lines: itemLines = [ nextLine, 0 ],
        level: state.level++
      });

      oldTight = state.tight;
      oldDDIndent = state.ddIndent;
      oldIndent = state.blkIndent;
      oldTShift = state.tShift[ddLine];
      oldParentType = state.parentType;
      state.blkIndent = state.ddIndent = state.tShift[ddLine] + 2;
      state.tShift[ddLine] = contentStart - state.bMarks[ddLine];
      state.tight = true;
      state.parentType = 'deflist';

      state.parser.tokenize(state, ddLine, endLine, true);

      // If any of list item is tight, mark list as tight
      if (!state.tight || prevEmptyEnd) {
        tight = false;
      }
      // Item become loose if finish with empty line,
      // but we should filter last element, because it means list finish
      prevEmptyEnd = (state.line - ddLine) > 1 && state.isEmpty(state.line - 1);

      state.tShift[ddLine] = oldTShift;
      state.tight = oldTight;
      state.parentType = oldParentType;
      state.blkIndent = oldIndent;
      state.ddIndent = oldDDIndent;

      state.tokens.push({
        type: 'dd_close',
        level: --state.level
      });

      itemLines[1] = nextLine = state.line;

      if (nextLine >= endLine) { break OUTER; }

      if (state.tShift[nextLine] < state.blkIndent) { break OUTER; }
      contentStart = skipMarker(state, nextLine);
      if (contentStart < 0) { break; }

      ddLine = nextLine;

      // go to the next loop iteration:
      // insert DD tag and repeat checking
    }

    if (nextLine >= endLine) { break; }
    dtLine = nextLine;

    if (state.isEmpty(dtLine)) { break; }
    if (state.tShift[dtLine] < state.blkIndent) { break; }

    ddLine = dtLine + 1;
    if (ddLine >= endLine) { break; }
    if (state.isEmpty(ddLine)) { ddLine++; }
    if (ddLine >= endLine) { break; }

    if (state.tShift[ddLine] < state.blkIndent) { break; }
    contentStart = skipMarker(state, ddLine);
    if (contentStart < 0) { break; }

    // go to the next loop iteration:
    // insert DT and DD tags and repeat checking
  }

  // Finilize list
  state.tokens.push({
    type: 'dl_close',
    level: --state.level
  });
  listLines[1] = nextLine;

  state.line = nextLine;

  // mark paragraphs tight if needed
  if (tight) {
    markTightParagraphs(state, listTokIdx);
  }

  return true;
};

},{}],26:[function(require,module,exports){
// fences (``` lang, ~~~ lang)

'use strict';


module.exports = function fences(state, startLine, endLine, silent) {
  var marker, len, params, nextLine, mem,
      haveEndMarker = false,
      pos = state.bMarks[startLine] + state.tShift[startLine],
      max = state.eMarks[startLine];

  if (pos + 3 > max) { return false; }

  marker = state.src.charCodeAt(pos);

  if (marker !== 0x7E/* ~ */ && marker !== 0x60 /* ` */) {
    return false;
  }

  // scan marker length
  mem = pos;
  pos = state.skipChars(pos, marker);

  len = pos - mem;

  if (len < 3) { return false; }

  params = state.src.slice(pos, max).trim();

  if (params.indexOf('`') >= 0) { return false; }

  // Since start is found, we can report success here in validation mode
  if (silent) { return true; }

  // search end of block
  nextLine = startLine;

  for (;;) {
    nextLine++;
    if (nextLine >= endLine) {
      // unclosed block should be autoclosed by end of document.
      // also block seems to be autoclosed by end of parent
      break;
    }

    pos = mem = state.bMarks[nextLine] + state.tShift[nextLine];
    max = state.eMarks[nextLine];

    if (pos < max && state.tShift[nextLine] < state.blkIndent) {
      // non-empty line with negative indent should stop the list:
      // - ```
      //  test
      break;
    }

    if (state.src.charCodeAt(pos) !== marker) { continue; }

    if (state.tShift[nextLine] - state.blkIndent >= 4) {
      // closing fence should be indented less than 4 spaces
      continue;
    }

    pos = state.skipChars(pos, marker);

    // closing code fence must be at least as long as the opening one
    if (pos - mem < len) { continue; }

    // make sure tail has spaces only
    pos = state.skipSpaces(pos);

    if (pos < max) { continue; }

    haveEndMarker = true;
    // found!
    break;
  }

  // If a fence has heading spaces, they should be removed from its inner block
  len = state.tShift[startLine];

  state.line = nextLine + (haveEndMarker ? 1 : 0);
  state.tokens.push({
    type: 'fence',
    params: params,
    content: state.getLines(startLine + 1, nextLine, len, true),
    lines: [ startLine, state.line ],
    level: state.level
  });

  return true;
};

},{}],27:[function(require,module,exports){
// Process footnote reference list

'use strict';


module.exports = function footnote(state, startLine, endLine, silent) {
  var oldBMark, oldTShift, oldParentType, pos, label,
      start = state.bMarks[startLine] + state.tShift[startLine],
      max = state.eMarks[startLine];

  // line should be at least 5 chars - "[^x]:"
  if (start + 4 > max) { return false; }

  if (state.src.charCodeAt(start) !== 0x5B/* [ */) { return false; }
  if (state.src.charCodeAt(start + 1) !== 0x5E/* ^ */) { return false; }
  if (state.level >= state.options.maxNesting) { return false; }

  for (pos = start + 2; pos < max; pos++) {
    if (state.src.charCodeAt(pos) === 0x20) { return false; }
    if (state.src.charCodeAt(pos) === 0x5D /* ] */) {
      break;
    }
  }

  if (pos === start + 2) { return false; } // no empty footnote labels
  if (pos + 1 >= max || state.src.charCodeAt(++pos) !== 0x3A /* : */) { return false; }
  if (silent) { return true; }
  pos++;

  if (!state.env.footnotes) { state.env.footnotes = {}; }
  if (!state.env.footnotes.refs) { state.env.footnotes.refs = {}; }
  label = state.src.slice(start + 2, pos - 2);
  state.env.footnotes.refs[':' + label] = -1;

  state.tokens.push({
    type: 'footnote_reference_open',
    label: label,
    level: state.level++
  });

  oldBMark = state.bMarks[startLine];
  oldTShift = state.tShift[startLine];
  oldParentType = state.parentType;
  state.tShift[startLine] = state.skipSpaces(pos) - pos;
  state.bMarks[startLine] = pos;
  state.blkIndent += 4;
  state.parentType = 'footnote';

  if (state.tShift[startLine] < state.blkIndent) {
    state.tShift[startLine] += state.blkIndent;
    state.bMarks[startLine] -= state.blkIndent;
  }

  state.parser.tokenize(state, startLine, endLine, true);

  state.parentType = oldParentType;
  state.blkIndent -= 4;
  state.tShift[startLine] = oldTShift;
  state.bMarks[startLine] = oldBMark;

  state.tokens.push({
    type: 'footnote_reference_close',
    level: --state.level
  });

  return true;
};

},{}],28:[function(require,module,exports){
// heading (#, ##, ...)

'use strict';


module.exports = function heading(state, startLine, endLine, silent) {
  var ch, level, tmp,
      pos = state.bMarks[startLine] + state.tShift[startLine],
      max = state.eMarks[startLine];

  if (pos >= max) { return false; }

  ch  = state.src.charCodeAt(pos);

  if (ch !== 0x23/* # */ || pos >= max) { return false; }

  // count heading level
  level = 1;
  ch = state.src.charCodeAt(++pos);
  while (ch === 0x23/* # */ && pos < max && level <= 6) {
    level++;
    ch = state.src.charCodeAt(++pos);
  }

  if (level > 6 || (pos < max && ch !== 0x20/* space */)) { return false; }

  if (silent) { return true; }

  // Let's cut tails like '    ###  ' from the end of string

  max = state.skipCharsBack(max, 0x20, pos); // space
  tmp = state.skipCharsBack(max, 0x23, pos); // #
  if (tmp > pos && state.src.charCodeAt(tmp - 1) === 0x20/* space */) {
    max = tmp;
  }

  state.line = startLine + 1;

  state.tokens.push({ type: 'heading_open',
    hLevel: level,
    lines: [ startLine, state.line ],
    level: state.level
  });

  // only if header is not empty
  if (pos < max) {
    state.tokens.push({
      type: 'inline',
      content: state.src.slice(pos, max).trim(),
      level: state.level + 1,
      lines: [ startLine, state.line ],
      children: []
    });
  }
  state.tokens.push({ type: 'heading_close', hLevel: level, level: state.level });

  return true;
};

},{}],29:[function(require,module,exports){
// Horizontal rule

'use strict';


module.exports = function hr(state, startLine, endLine, silent) {
  var marker, cnt, ch,
      pos = state.bMarks[startLine],
      max = state.eMarks[startLine];

  pos += state.tShift[startLine];

  if (pos > max) { return false; }

  marker = state.src.charCodeAt(pos++);

  // Check hr marker
  if (marker !== 0x2A/* * */ &&
      marker !== 0x2D/* - */ &&
      marker !== 0x5F/* _ */) {
    return false;
  }

  // markers can be mixed with spaces, but there should be at least 3 one

  cnt = 1;
  while (pos < max) {
    ch = state.src.charCodeAt(pos++);
    if (ch !== marker && ch !== 0x20/* space */) { return false; }
    if (ch === marker) { cnt++; }
  }

  if (cnt < 3) { return false; }

  if (silent) { return true; }

  state.line = startLine + 1;
  state.tokens.push({
    type: 'hr',
    lines: [ startLine, state.line ],
    level: state.level
  });

  return true;
};

},{}],30:[function(require,module,exports){
// HTML block

'use strict';


var block_names = require('../common/html_blocks');


var HTML_TAG_OPEN_RE = /^<([a-zA-Z]{1,15})[\s\/>]/;
var HTML_TAG_CLOSE_RE = /^<\/([a-zA-Z]{1,15})[\s>]/;

function isLetter(ch) {
  /*eslint no-bitwise:0*/
  var lc = ch | 0x20; // to lower case
  return (lc >= 0x61/* a */) && (lc <= 0x7a/* z */);
}

module.exports = function htmlblock(state, startLine, endLine, silent) {
  var ch, match, nextLine,
      pos = state.bMarks[startLine],
      max = state.eMarks[startLine],
      shift = state.tShift[startLine];

  pos += shift;

  if (!state.options.html) { return false; }

  if (shift > 3 || pos + 2 >= max) { return false; }

  if (state.src.charCodeAt(pos) !== 0x3C/* < */) { return false; }

  ch = state.src.charCodeAt(pos + 1);

  if (ch === 0x21/* ! */ || ch === 0x3F/* ? */) {
    // Directive start / comment start / processing instruction start
    if (silent) { return true; }

  } else if (ch === 0x2F/* / */ || isLetter(ch)) {

    // Probably start or end of tag
    if (ch === 0x2F/* \ */) {
      // closing tag
      match = state.src.slice(pos, max).match(HTML_TAG_CLOSE_RE);
      if (!match) { return false; }
    } else {
      // opening tag
      match = state.src.slice(pos, max).match(HTML_TAG_OPEN_RE);
      if (!match) { return false; }
    }
    // Make sure tag name is valid
    if (block_names[match[1].toLowerCase()] !== true) { return false; }
    if (silent) { return true; }

  } else {
    return false;
  }

  // If we are here - we detected HTML block.
  // Let's roll down till empty line (block end).
  nextLine = startLine + 1;
  while (nextLine < state.lineMax && !state.isEmpty(nextLine)) {
    nextLine++;
  }

  state.line = nextLine;
  state.tokens.push({
    type: 'htmlblock',
    level: state.level,
    lines: [ startLine, state.line ],
    content: state.getLines(startLine, nextLine, 0, true)
  });

  return true;
};

},{"../common/html_blocks":4}],31:[function(require,module,exports){
// lheading (---, ===)

'use strict';


module.exports = function lheading(state, startLine, endLine/*, silent*/) {
  var marker, pos, max,
      next = startLine + 1;

  if (next >= endLine) { return false; }
  if (state.tShift[next] < state.blkIndent) { return false; }

  // Scan next line

  if (state.tShift[next] - state.blkIndent > 3) { return false; }

  pos = state.bMarks[next] + state.tShift[next];
  max = state.eMarks[next];

  if (pos >= max) { return false; }

  marker = state.src.charCodeAt(pos);

  if (marker !== 0x2D/* - */ && marker !== 0x3D/* = */) { return false; }

  pos = state.skipChars(pos, marker);

  pos = state.skipSpaces(pos);

  if (pos < max) { return false; }

  pos = state.bMarks[startLine] + state.tShift[startLine];

  state.line = next + 1;
  state.tokens.push({
    type: 'heading_open',
    hLevel: marker === 0x3D/* = */ ? 1 : 2,
    lines: [ startLine, state.line ],
    level: state.level
  });
  state.tokens.push({
    type: 'inline',
    content: state.src.slice(pos, state.eMarks[startLine]).trim(),
    level: state.level + 1,
    lines: [ startLine, state.line - 1 ],
    children: []
  });
  state.tokens.push({
    type: 'heading_close',
    hLevel: marker === 0x3D/* = */ ? 1 : 2,
    level: state.level
  });

  return true;
};

},{}],32:[function(require,module,exports){
// Lists

'use strict';


// Search `[-+*][\n ]`, returns next pos arter marker on success
// or -1 on fail.
function skipBulletListMarker(state, startLine) {
  var marker, pos, max;

  pos = state.bMarks[startLine] + state.tShift[startLine];
  max = state.eMarks[startLine];

  if (pos >= max) { return -1; }

  marker = state.src.charCodeAt(pos++);
  // Check bullet
  if (marker !== 0x2A/* * */ &&
      marker !== 0x2D/* - */ &&
      marker !== 0x2B/* + */) {
    return -1;
  }

  if (pos < max && state.src.charCodeAt(pos) !== 0x20) {
    // " 1.test " - is not a list item
    return -1;
  }

  return pos;
}

// Search `\d+[.)][\n ]`, returns next pos arter marker on success
// or -1 on fail.
function skipOrderedListMarker(state, startLine) {
  var ch,
      pos = state.bMarks[startLine] + state.tShift[startLine],
      max = state.eMarks[startLine];

  if (pos + 1 >= max) { return -1; }

  ch = state.src.charCodeAt(pos++);

  if (ch < 0x30/* 0 */ || ch > 0x39/* 9 */) { return -1; }

  for (;;) {
    // EOL -> fail
    if (pos >= max) { return -1; }

    ch = state.src.charCodeAt(pos++);

    if (ch >= 0x30/* 0 */ && ch <= 0x39/* 9 */) {
      continue;
    }

    // found valid marker
    if (ch === 0x29/* ) */ || ch === 0x2e/* . */) {
      break;
    }

    return -1;
  }


  if (pos < max && state.src.charCodeAt(pos) !== 0x20/* space */) {
    // " 1.test " - is not a list item
    return -1;
  }
  return pos;
}

function markTightParagraphs(state, idx) {
  var i, l,
      level = state.level + 2;

  for (i = idx + 2, l = state.tokens.length - 2; i < l; i++) {
    if (state.tokens[i].level === level && state.tokens[i].type === 'paragraph_open') {
      state.tokens[i + 2].tight = true;
      state.tokens[i].tight = true;
      i += 2;
    }
  }
}


module.exports = function list(state, startLine, endLine, silent) {
  var nextLine,
      indent,
      oldTShift,
      oldIndent,
      oldTight,
      oldParentType,
      start,
      posAfterMarker,
      max,
      indentAfterMarker,
      markerValue,
      markerCharCode,
      isOrdered,
      contentStart,
      listTokIdx,
      prevEmptyEnd,
      listLines,
      itemLines,
      tight = true,
      terminatorRules,
      i, l, terminate;

  // Detect list type and position after marker
  if ((posAfterMarker = skipOrderedListMarker(state, startLine)) >= 0) {
    isOrdered = true;
  } else if ((posAfterMarker = skipBulletListMarker(state, startLine)) >= 0) {
    isOrdered = false;
  } else {
    return false;
  }

  if (state.level >= state.options.maxNesting) { return false; }

  // We should terminate list on style change. Remember first one to compare.
  markerCharCode = state.src.charCodeAt(posAfterMarker - 1);

  // For validation mode we can terminate immediately
  if (silent) { return true; }

  // Start list
  listTokIdx = state.tokens.length;

  if (isOrdered) {
    start = state.bMarks[startLine] + state.tShift[startLine];
    markerValue = Number(state.src.substr(start, posAfterMarker - start - 1));

    state.tokens.push({
      type: 'ordered_list_open',
      order: markerValue,
      lines: listLines = [ startLine, 0 ],
      level: state.level++
    });

  } else {
    state.tokens.push({
      type: 'bullet_list_open',
      lines: listLines = [ startLine, 0 ],
      level: state.level++
    });
  }

  //
  // Iterate list items
  //

  nextLine = startLine;
  prevEmptyEnd = false;
  terminatorRules = state.parser.ruler.getRules('list');

  while (nextLine < endLine) {
    contentStart = state.skipSpaces(posAfterMarker);
    max = state.eMarks[nextLine];

    if (contentStart >= max) {
      // trimming space in "-    \n  3" case, indent is 1 here
      indentAfterMarker = 1;
    } else {
      indentAfterMarker = contentStart - posAfterMarker;
    }

    // If we have more than 4 spaces, the indent is 1
    // (the rest is just indented code block)
    if (indentAfterMarker > 4) { indentAfterMarker = 1; }

    // If indent is less than 1, assume that it's one, example:
    //  "-\n  test"
    if (indentAfterMarker < 1) { indentAfterMarker = 1; }

    // "  -  test"
    //  ^^^^^ - calculating total length of this thing
    indent = (posAfterMarker - state.bMarks[nextLine]) + indentAfterMarker;

    // Run subparser & write tokens
    state.tokens.push({
      type: 'list_item_open',
      lines: itemLines = [ startLine, 0 ],
      level: state.level++
    });

    oldIndent = state.blkIndent;
    oldTight = state.tight;
    oldTShift = state.tShift[startLine];
    oldParentType = state.parentType;
    state.tShift[startLine] = contentStart - state.bMarks[startLine];
    state.blkIndent = indent;
    state.tight = true;
    state.parentType = 'list';

    state.parser.tokenize(state, startLine, endLine, true);

    // If any of list item is tight, mark list as tight
    if (!state.tight || prevEmptyEnd) {
      tight = false;
    }
    // Item become loose if finish with empty line,
    // but we should filter last element, because it means list finish
    prevEmptyEnd = (state.line - startLine) > 1 && state.isEmpty(state.line - 1);

    state.blkIndent = oldIndent;
    state.tShift[startLine] = oldTShift;
    state.tight = oldTight;
    state.parentType = oldParentType;

    state.tokens.push({
      type: 'list_item_close',
      level: --state.level
    });

    nextLine = startLine = state.line;
    itemLines[1] = nextLine;
    contentStart = state.bMarks[startLine];

    if (nextLine >= endLine) { break; }

    if (state.isEmpty(nextLine)) {
      break;
    }

    //
    // Try to check if list is terminated or continued.
    //
    if (state.tShift[nextLine] < state.blkIndent) { break; }

    // fail if terminating block found
    terminate = false;
    for (i = 0, l = terminatorRules.length; i < l; i++) {
      if (terminatorRules[i](state, nextLine, endLine, true)) {
        terminate = true;
        break;
      }
    }
    if (terminate) { break; }

    // fail if list has another type
    if (isOrdered) {
      posAfterMarker = skipOrderedListMarker(state, nextLine);
      if (posAfterMarker < 0) { break; }
    } else {
      posAfterMarker = skipBulletListMarker(state, nextLine);
      if (posAfterMarker < 0) { break; }
    }

    if (markerCharCode !== state.src.charCodeAt(posAfterMarker - 1)) { break; }
  }

  // Finilize list
  state.tokens.push({
    type: isOrdered ? 'ordered_list_close' : 'bullet_list_close',
    level: --state.level
  });
  listLines[1] = nextLine;

  state.line = nextLine;

  // mark paragraphs tight if needed
  if (tight) {
    markTightParagraphs(state, listTokIdx);
  }

  return true;
};

},{}],33:[function(require,module,exports){
// Paragraph

'use strict';


module.exports = function paragraph(state, startLine/*, endLine*/) {
  var endLine, content, terminate, i, l,
      nextLine = startLine + 1,
      terminatorRules;

  endLine = state.lineMax;

  // jump line-by-line until empty one or EOF
  if (nextLine < endLine && !state.isEmpty(nextLine)) {
    terminatorRules = state.parser.ruler.getRules('paragraph');

    for (; nextLine < endLine && !state.isEmpty(nextLine); nextLine++) {
      // this would be a code block normally, but after paragraph
      // it's considered a lazy continuation regardless of what's there
      if (state.tShift[nextLine] - state.blkIndent > 3) { continue; }

      // Some tags can terminate paragraph without empty line.
      terminate = false;
      for (i = 0, l = terminatorRules.length; i < l; i++) {
        if (terminatorRules[i](state, nextLine, endLine, true)) {
          terminate = true;
          break;
        }
      }
      if (terminate) { break; }
    }
  }

  content = state.getLines(startLine, nextLine, state.blkIndent, false).trim();

  state.line = nextLine;
  if (content.length) {
    state.tokens.push({
      type: 'paragraph_open',
      tight: false,
      lines: [ startLine, state.line ],
      level: state.level
    });
    state.tokens.push({
      type: 'inline',
      content: content,
      level: state.level + 1,
      lines: [ startLine, state.line ],
      children: []
    });
    state.tokens.push({
      type: 'paragraph_close',
      tight: false,
      level: state.level
    });
  }

  return true;
};

},{}],34:[function(require,module,exports){
// Parser state class

'use strict';


function StateBlock(src, parser, options, env, tokens) {
  var ch, s, start, pos, len, indent, indent_found;

  this.src = src;

  // Shortcuts to simplify nested calls
  this.parser = parser;

  this.options = options;

  this.env = env;

  //
  // Internal state vartiables
  //

  this.tokens = tokens;

  this.bMarks = [];  // line begin offsets for fast jumps
  this.eMarks = [];  // line end offsets for fast jumps
  this.tShift = [];  // indent for each line

  // block parser variables
  this.blkIndent  = 0; // required block content indent
                       // (for example, if we are in list)
  this.line       = 0; // line index in src
  this.lineMax    = 0; // lines count
  this.tight      = false;  // loose/tight mode for lists
  this.parentType = 'root'; // if `list`, block parser stops on two newlines
  this.ddIndent   = -1; // indent of the current dd block (-1 if there isn't any)

  this.level = 0;

  // renderer
  this.result = '';

  // Create caches
  // Generate markers.
  s = this.src;
  indent = 0;
  indent_found = false;

  for (start = pos = indent = 0, len = s.length; pos < len; pos++) {
    ch = s.charCodeAt(pos);

    if (!indent_found) {
      if (ch === 0x20/* space */) {
        indent++;
        continue;
      } else {
        indent_found = true;
      }
    }

    if (ch === 0x0A || pos === len - 1) {
      if (ch !== 0x0A) { pos++; }
      this.bMarks.push(start);
      this.eMarks.push(pos);
      this.tShift.push(indent);

      indent_found = false;
      indent = 0;
      start = pos + 1;
    }
  }

  // Push fake entry to simplify cache bounds checks
  this.bMarks.push(s.length);
  this.eMarks.push(s.length);
  this.tShift.push(0);

  this.lineMax = this.bMarks.length - 1; // don't count last fake line
}

StateBlock.prototype.isEmpty = function isEmpty(line) {
  return this.bMarks[line] + this.tShift[line] >= this.eMarks[line];
};

StateBlock.prototype.skipEmptyLines = function skipEmptyLines(from) {
  for (var max = this.lineMax; from < max; from++) {
    if (this.bMarks[from] + this.tShift[from] < this.eMarks[from]) {
      break;
    }
  }
  return from;
};

// Skip spaces from given position.
StateBlock.prototype.skipSpaces = function skipSpaces(pos) {
  for (var max = this.src.length; pos < max; pos++) {
    if (this.src.charCodeAt(pos) !== 0x20/* space */) { break; }
  }
  return pos;
};

// Skip char codes from given position
StateBlock.prototype.skipChars = function skipChars(pos, code) {
  for (var max = this.src.length; pos < max; pos++) {
    if (this.src.charCodeAt(pos) !== code) { break; }
  }
  return pos;
};

// Skip char codes reverse from given position - 1
StateBlock.prototype.skipCharsBack = function skipCharsBack(pos, code, min) {
  if (pos <= min) { return pos; }

  while (pos > min) {
    if (code !== this.src.charCodeAt(--pos)) { return pos + 1; }
  }
  return pos;
};

// cut lines range from source.
StateBlock.prototype.getLines = function getLines(begin, end, indent, keepLastLF) {
  var i, first, last, queue, shift,
      line = begin;

  if (begin >= end) {
    return '';
  }

  // Opt: don't use push queue for single line;
  if (line + 1 === end) {
    first = this.bMarks[line] + Math.min(this.tShift[line], indent);
    last = keepLastLF ? this.bMarks[end] : this.eMarks[end - 1];
    return this.src.slice(first, last);
  }

  queue = new Array(end - begin);

  for (i = 0; line < end; line++, i++) {
    shift = this.tShift[line];
    if (shift > indent) { shift = indent; }
    if (shift < 0) { shift = 0; }

    first = this.bMarks[line] + shift;

    if (line + 1 < end || keepLastLF) {
      // No need for bounds check because we have fake entry on tail.
      last = this.eMarks[line] + 1;
    } else {
      last = this.eMarks[line];
    }

    queue[i] = this.src.slice(first, last);
  }

  return queue.join('');
};


module.exports = StateBlock;

},{}],35:[function(require,module,exports){
// GFM table, non-standard

'use strict';


function getLine(state, line) {
  var pos = state.bMarks[line] + state.blkIndent,
      max = state.eMarks[line];

  return state.src.substr(pos, max - pos);
}


module.exports = function table(state, startLine, endLine, silent) {
  var ch, lineText, pos, i, nextLine, rows,
      aligns, t, tableLines, tbodyLines;

  // should have at least three lines
  if (startLine + 2 > endLine) { return false; }

  nextLine = startLine + 1;

  if (state.tShift[nextLine] < state.blkIndent) { return false; }

  // first character of the second line should be '|' or '-'

  pos = state.bMarks[nextLine] + state.tShift[nextLine];
  if (pos >= state.eMarks[nextLine]) { return false; }

  ch = state.src.charCodeAt(pos);
  if (ch !== 0x7C/* | */ && ch !== 0x2D/* - */ && ch !== 0x3A/* : */) { return false; }

  lineText = getLine(state, startLine + 1);
  if (!/^[-:| ]+$/.test(lineText)) { return false; }

  rows = lineText.split('|');
  if (rows <= 2) { return false; }
  aligns = [];
  for (i = 0; i < rows.length; i++) {
    t = rows[i].trim();
    if (!t) {
      // allow empty columns before and after table, but not in between columns;
      // e.g. allow ` |---| `, disallow ` ---||--- `
      if (i === 0 || i === rows.length - 1) {
        continue;
      } else {
        return false;
      }
    }

    if (!/^:?-+:?$/.test(t)) { return false; }
    if (t.charCodeAt(t.length - 1) === 0x3A/* : */) {
      aligns.push(t.charCodeAt(0) === 0x3A/* : */ ? 'center' : 'right');
    } else if (t.charCodeAt(0) === 0x3A/* : */) {
      aligns.push('left');
    } else {
      aligns.push('');
    }
  }

  lineText = getLine(state, startLine).trim();
  if (lineText.indexOf('|') === -1) { return false; }
  rows = lineText.replace(/^\||\|$/g, '').split('|');
  if (aligns.length !== rows.length) { return false; }
  if (silent) { return true; }

  state.tokens.push({
    type: 'table_open',
    lines: tableLines = [ startLine, 0 ],
    level: state.level++
  });
  state.tokens.push({
    type: 'thead_open',
    lines: [ startLine, startLine + 1 ],
    level: state.level++
  });

  state.tokens.push({
    type: 'tr_open',
    lines: [ startLine, startLine + 1 ],
    level: state.level++
  });
  for (i = 0; i < rows.length; i++) {
    state.tokens.push({
      type: 'th_open',
      align: aligns[i],
      lines: [ startLine, startLine + 1 ],
      level: state.level++
    });
    state.tokens.push({
      type: 'inline',
      content: rows[i].trim(),
      lines: [ startLine, startLine + 1 ],
      level: state.level,
      children: []
    });
    state.tokens.push({ type: 'th_close', level: --state.level });
  }
  state.tokens.push({ type: 'tr_close', level: --state.level });
  state.tokens.push({ type: 'thead_close', level: --state.level });

  state.tokens.push({
    type: 'tbody_open',
    lines: tbodyLines = [ startLine + 2, 0 ],
    level: state.level++
  });

  for (nextLine = startLine + 2; nextLine < endLine; nextLine++) {
    if (state.tShift[nextLine] < state.blkIndent) { break; }

    lineText = getLine(state, nextLine).trim();
    if (lineText.indexOf('|') === -1) { break; }
    rows = lineText.replace(/^\||\|$/g, '').split('|');

    state.tokens.push({ type: 'tr_open', level: state.level++ });
    for (i = 0; i < rows.length; i++) {
      state.tokens.push({ type: 'td_open', align: aligns[i], level: state.level++ });
      state.tokens.push({
        type: 'inline',
        content: rows[i].replace(/^\|? *| *\|?$/g, ''),
        level: state.level,
        children: []
      });
      state.tokens.push({ type: 'td_close', level: --state.level });
    }
    state.tokens.push({ type: 'tr_close', level: --state.level });
  }
  state.tokens.push({ type: 'tbody_close', level: --state.level });
  state.tokens.push({ type: 'table_close', level: --state.level });

  tableLines[1] = tbodyLines[1] = nextLine;
  state.line = nextLine;
  return true;
};

},{}],36:[function(require,module,exports){
// Parse abbreviation definitions, i.e. `*[abbr]: description`
//

'use strict';


var StateInline    = require('../rules_inline/state_inline');
var parseLinkLabel = require('../helpers/parse_link_label');


function parseAbbr(str, parserInline, options, env) {
  var state, labelEnd, pos, max, label, title;

  if (str.charCodeAt(0) !== 0x2A/* * */) { return -1; }
  if (str.charCodeAt(1) !== 0x5B/* [ */) { return -1; }

  if (str.indexOf(']:') === -1) { return -1; }

  state = new StateInline(str, parserInline, options, env, []);
  labelEnd = parseLinkLabel(state, 1);

  if (labelEnd < 0 || str.charCodeAt(labelEnd + 1) !== 0x3A/* : */) { return -1; }

  max = state.posMax;

  // abbr title is always one line, so looking for ending "\n" here
  for (pos = labelEnd + 2; pos < max; pos++) {
    if (state.src.charCodeAt(pos) === 0x0A) { break; }
  }

  label = str.slice(2, labelEnd);
  title = str.slice(labelEnd + 2, pos).trim();
  if (title.length === 0) { return -1; }
  if (!env.abbreviations) { env.abbreviations = {}; }
  // prepend ':' to avoid conflict with Object.prototype members
  if (typeof env.abbreviations[':' + label] === 'undefined') {
    env.abbreviations[':' + label] = title;
  }

  return pos;
}

module.exports = function abbr(state) {
  var tokens = state.tokens, i, l, content, pos;

  if (state.inlineMode) {
    return;
  }

  // Parse inlines
  for (i = 1, l = tokens.length - 1; i < l; i++) {
    if (tokens[i - 1].type === 'paragraph_open' &&
        tokens[i].type === 'inline' &&
        tokens[i + 1].type === 'paragraph_close') {

      content = tokens[i].content;
      while (content.length) {
        pos = parseAbbr(content, state.inline, state.options, state.env);
        if (pos < 0) { break; }
        content = content.slice(pos).trim();
      }

      tokens[i].content = content;
      if (!content.length) {
        tokens[i - 1].tight = true;
        tokens[i + 1].tight = true;
      }
    }
  }
};

},{"../helpers/parse_link_label":14,"../rules_inline/state_inline":58}],37:[function(require,module,exports){
// Enclose abbreviations in <abbr> tags
//
'use strict';


var PUNCT_CHARS = ' \n()[]\'".,!?-';


// from Google closure library
// http://closure-library.googlecode.com/git-history/docs/local_closure_goog_string_string.js.source.html#line1021
function regEscape(s) {
  return s.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, '\\$1');
}


module.exports = function abbr2(state) {
  var i, j, l, tokens, token, text, nodes, pos, level, reg, m, regText,
      blockTokens = state.tokens;

  if (!state.env.abbreviations) { return; }
  if (!state.env.abbrRegExp) {
    regText = '(^|[' + PUNCT_CHARS.split('').map(regEscape).join('') + '])'
            + '(' + Object.keys(state.env.abbreviations).map(function (x) {
                      return x.substr(1);
                    }).sort(function (a, b) {
                      return b.length - a.length;
                    }).map(regEscape).join('|') + ')'
            + '($|[' + PUNCT_CHARS.split('').map(regEscape).join('') + '])';
    state.env.abbrRegExp = new RegExp(regText, 'g');
  }
  reg = state.env.abbrRegExp;

  for (j = 0, l = blockTokens.length; j < l; j++) {
    if (blockTokens[j].type !== 'inline') { continue; }
    tokens = blockTokens[j].children;

    // We scan from the end, to keep position when new tags added.
    for (i = tokens.length - 1; i >= 0; i--) {
      token = tokens[i];
      if (token.type !== 'text') { continue; }

      pos = 0;
      text = token.content;
      reg.lastIndex = 0;
      level = token.level;
      nodes = [];

      while ((m = reg.exec(text))) {
        if (reg.lastIndex > pos) {
          nodes.push({
            type: 'text',
            content: text.slice(pos, m.index + m[1].length),
            level: level
          });
        }

        nodes.push({
          type: 'abbr_open',
          title: state.env.abbreviations[':' + m[2]],
          level: level++
        });
        nodes.push({
          type: 'text',
          content: m[2],
          level: level
        });
        nodes.push({
          type: 'abbr_close',
          level: --level
        });
        pos = reg.lastIndex - m[3].length;
      }

      if (!nodes.length) { continue; }

      if (pos < text.length) {
        nodes.push({
          type: 'text',
          content: text.slice(pos),
          level: level
        });
      }

      // replace current node
      blockTokens[j].children = tokens = [].concat(tokens.slice(0, i), nodes, tokens.slice(i + 1));
    }
  }
};

},{}],38:[function(require,module,exports){
'use strict';

module.exports = function block(state) {

  if (state.inlineMode) {
    state.tokens.push({
      type: 'inline',
      content: state.src.replace(/\n/g, ' ').trim(),
      level: 0,
      lines: [ 0, 1 ],
      children: []
    });

  } else {
    state.block.parse(state.src, state.options, state.env, state.tokens);
  }
};

},{}],39:[function(require,module,exports){
'use strict';


module.exports = function footnote_block(state) {
  var i, l, j, t, lastParagraph, list, tokens, current, currentLabel,
      level = 0,
      insideRef = false,
      refTokens = {};

  if (!state.env.footnotes) { return; }

  state.tokens = state.tokens.filter(function(tok) {
    if (tok.type === 'footnote_reference_open') {
      insideRef = true;
      current = [];
      currentLabel = tok.label;
      return false;
    }
    if (tok.type === 'footnote_reference_close') {
      insideRef = false;
      // prepend ':' to avoid conflict with Object.prototype members
      refTokens[':' + currentLabel] = current;
      return false;
    }
    if (insideRef) { current.push(tok); }
    return !insideRef;
  });

  if (!state.env.footnotes.list) { return; }
  list = state.env.footnotes.list;

  state.tokens.push({
    type: 'footnote_block_open',
    level: level++
  });
  for (i = 0, l = list.length; i < l; i++) {
    state.tokens.push({
      type: 'footnote_open',
      id: i,
      level: level++
    });

    if (list[i].tokens) {
      tokens = [];
      tokens.push({
        type: 'paragraph_open',
        tight: false,
        level: level++
      });
      tokens.push({
        type: 'inline',
        content: '',
        level: level,
        children: list[i].tokens
      });
      tokens.push({
        type: 'paragraph_close',
        tight: false,
        level: --level
      });
    } else if (list[i].label) {
      tokens = refTokens[':' + list[i].label];
    }

    state.tokens = state.tokens.concat(tokens);
    if (state.tokens[state.tokens.length - 1].type === 'paragraph_close') {
      lastParagraph = state.tokens.pop();
    } else {
      lastParagraph = null;
    }

    t = list[i].count > 0 ? list[i].count : 1;
    for (j = 0; j < t; j++) {
      state.tokens.push({
        type: 'footnote_anchor',
        id: i,
        subId: j,
        level: level
      });
    }

    if (lastParagraph) {
      state.tokens.push(lastParagraph);
    }

    state.tokens.push({
      type: 'footnote_close',
      level: --level
    });
  }
  state.tokens.push({
    type: 'footnote_block_close',
    level: --level
  });
};

},{}],40:[function(require,module,exports){
'use strict';

module.exports = function inline(state) {
  var tokens = state.tokens, tok, i, l;

  // Parse inlines
  for (i = 0, l = tokens.length; i < l; i++) {
    tok = tokens[i];
    if (tok.type === 'inline') {
      state.inline.parse(tok.content, state.options, state.env, tok.children);
    }
  }
};

},{}],41:[function(require,module,exports){
// Replace link-like texts with link nodes.
//
// Currently restricted by `inline.validateLink()` to http/https/ftp
//
'use strict';


var Autolinker = require('autolinker');


var LINK_SCAN_RE = /www|@|\:\/\//;


function isLinkOpen(str) {
  return /^<a[>\s]/i.test(str);
}
function isLinkClose(str) {
  return /^<\/a\s*>/i.test(str);
}

// Stupid fabric to avoid singletons, for thread safety.
// Required for engines like Nashorn.
//
function createLinkifier() {
  var links = [];
  var autolinker = new Autolinker({
    stripPrefix: false,
    url: true,
    email: true,
    twitter: false,
    replaceFn: function (autolinker, match) {
      // Only collect matched strings but don't change anything.
      switch (match.getType()) {
        /*eslint default-case:0*/
        case 'url':
          links.push({
            text: match.matchedText,
            url: match.getUrl()
          });
          break;
        case 'email':
          links.push({
            text: match.matchedText,
            // normalize email protocol
            url: 'mailto:' + match.getEmail().replace(/^mailto:/i, '')
          });
          break;
      }
      return false;
    }
  });

  return {
    links: links,
    autolinker: autolinker
  };
}


module.exports = function linkify(state) {
  var i, j, l, tokens, token, text, nodes, ln, pos, level, htmlLinkLevel,
      blockTokens = state.tokens,
      linkifier = null, links, autolinker;

  if (!state.options.linkify) { return; }

  for (j = 0, l = blockTokens.length; j < l; j++) {
    if (blockTokens[j].type !== 'inline') { continue; }
    tokens = blockTokens[j].children;

    htmlLinkLevel = 0;

    // We scan from the end, to keep position when new tags added.
    // Use reversed logic in links start/end match
    for (i = tokens.length - 1; i >= 0; i--) {
      token = tokens[i];

      // Skip content of markdown links
      if (token.type === 'link_close') {
        i--;
        while (tokens[i].level !== token.level && tokens[i].type !== 'link_open') {
          i--;
        }
        continue;
      }

      // Skip content of html tag links
      if (token.type === 'htmltag') {
        if (isLinkOpen(token.content) && htmlLinkLevel > 0) {
          htmlLinkLevel--;
        }
        if (isLinkClose(token.content)) {
          htmlLinkLevel++;
        }
      }
      if (htmlLinkLevel > 0) { continue; }

      if (token.type === 'text' && LINK_SCAN_RE.test(token.content)) {

        // Init linkifier in lazy manner, only if required.
        if (!linkifier) {
          linkifier = createLinkifier();
          links = linkifier.links;
          autolinker = linkifier.autolinker;
        }

        text = token.content;
        links.length = 0;
        autolinker.link(text);

        if (!links.length) { continue; }

        // Now split string to nodes
        nodes = [];
        level = token.level;

        for (ln = 0; ln < links.length; ln++) {

          if (!state.inline.validateLink(links[ln].url)) { continue; }

          pos = text.indexOf(links[ln].text);

          if (pos) {
            level = level;
            nodes.push({
              type: 'text',
              content: text.slice(0, pos),
              level: level
            });
          }
          nodes.push({
            type: 'link_open',
            href: links[ln].url,
            title: '',
            level: level++
          });
          nodes.push({
            type: 'text',
            content: links[ln].text,
            level: level
          });
          nodes.push({
            type: 'link_close',
            level: --level
          });
          text = text.slice(pos + links[ln].text.length);
        }
        if (text.length) {
          nodes.push({
            type: 'text',
            content: text,
            level: level
          });
        }

        // replace current node
        blockTokens[j].children = tokens = [].concat(tokens.slice(0, i), nodes, tokens.slice(i + 1));
      }
    }
  }
};

},{"autolinker":62}],42:[function(require,module,exports){
'use strict';


var StateInline          = require('../rules_inline/state_inline');
var parseLinkLabel       = require('../helpers/parse_link_label');
var parseLinkDestination = require('../helpers/parse_link_destination');
var parseLinkTitle       = require('../helpers/parse_link_title');
var normalizeReference   = require('../helpers/normalize_reference');


function parseReference(str, parser, options, env) {
  var state, labelEnd, pos, max, code, start, href, title, label;

  if (str.charCodeAt(0) !== 0x5B/* [ */) { return -1; }

  if (str.indexOf(']:') === -1) { return -1; }

  state = new StateInline(str, parser, options, env, []);
  labelEnd = parseLinkLabel(state, 0);

  if (labelEnd < 0 || str.charCodeAt(labelEnd + 1) !== 0x3A/* : */) { return -1; }

  max = state.posMax;

  // [label]:   destination   'title'
  //         ^^^ skip optional whitespace here
  for (pos = labelEnd + 2; pos < max; pos++) {
    code = state.src.charCodeAt(pos);
    if (code !== 0x20 && code !== 0x0A) { break; }
  }

  // [label]:   destination   'title'
  //            ^^^^^^^^^^^ parse this
  if (!parseLinkDestination(state, pos)) { return -1; }
  href = state.linkContent;
  pos = state.pos;

  // [label]:   destination   'title'
  //                       ^^^ skipping those spaces
  start = pos;
  for (pos = pos + 1; pos < max; pos++) {
    code = state.src.charCodeAt(pos);
    if (code !== 0x20 && code !== 0x0A) { break; }
  }

  // [label]:   destination   'title'
  //                          ^^^^^^^ parse this
  if (pos < max && start !== pos && parseLinkTitle(state, pos)) {
    title = state.linkContent;
    pos = state.pos;
  } else {
    title = '';
    pos = start;
  }

  // ensure that the end of the line is empty
  while (pos < max && state.src.charCodeAt(pos) === 0x20/* space */) { pos++; }
  if (pos < max && state.src.charCodeAt(pos) !== 0x0A) { return -1; }

  label = normalizeReference(str.slice(1, labelEnd));
  if (typeof env.references[label] === 'undefined') {
    env.references[label] = { title: title, href: href };
  }

  return pos;
}


module.exports = function references(state) {
  var tokens = state.tokens, i, l, content, pos;

  state.env.references = state.env.references || {};

  if (state.inlineMode) {
    return;
  }

  // Scan definitions in paragraph inlines
  for (i = 1, l = tokens.length - 1; i < l; i++) {
    if (tokens[i].type === 'inline' &&
        tokens[i - 1].type === 'paragraph_open' &&
        tokens[i + 1].type === 'paragraph_close') {

      content = tokens[i].content;
      while (content.length) {
        pos = parseReference(content, state.inline, state.options, state.env);
        if (pos < 0) { break; }
        content = content.slice(pos).trim();
      }

      tokens[i].content = content;
      if (!content.length) {
        tokens[i - 1].tight = true;
        tokens[i + 1].tight = true;
      }
    }
  }
};

},{"../helpers/normalize_reference":12,"../helpers/parse_link_destination":13,"../helpers/parse_link_label":14,"../helpers/parse_link_title":15,"../rules_inline/state_inline":58}],43:[function(require,module,exports){
// Simple typographical replacements
//
'use strict';

// TODO:
// - fractionals 1/2, 1/4, 3/4 -> ½, ¼, ¾
// - miltiplication 2 x 4 -> 2 × 4

var RARE_RE = /\+-|\.\.|\?\?\?\?|!!!!|,,|--/;

var SCOPED_ABBR_RE = /\((c|tm|r|p)\)/ig;
var SCOPED_ABBR = {
  'c': '©',
  'r': '®',
  'p': '§',
  'tm': '™'
};

function replaceScopedAbbr(str) {
  if (str.indexOf('(') < 0) { return str; }

  return str.replace(SCOPED_ABBR_RE, function(match, name) {
    return SCOPED_ABBR[name.toLowerCase()];
  });
}


module.exports = function replace(state) {
  var i, token, text, inlineTokens, blkIdx;

  if (!state.options.typographer) { return; }

  for (blkIdx = state.tokens.length - 1; blkIdx >= 0; blkIdx--) {

    if (state.tokens[blkIdx].type !== 'inline') { continue; }

    inlineTokens = state.tokens[blkIdx].children;

    for (i = inlineTokens.length - 1; i >= 0; i--) {
      token = inlineTokens[i];
      if (token.type === 'text') {
        text = token.content;

        text = replaceScopedAbbr(text);

        if (RARE_RE.test(text)) {
          text = text
            .replace(/\+-/g, '±')
            // .., ..., ....... -> …
            // but ?..... & !..... -> ?.. & !..
            .replace(/\.{2,}/g, '…').replace(/([?!])…/g, '$1..')
            .replace(/([?!]){4,}/g, '$1$1$1').replace(/,{2,}/g, ',')
            // em-dash
            .replace(/(^|[^-])---([^-]|$)/mg, '$1\u2014$2')
            // en-dash
            .replace(/(^|\s)--(\s|$)/mg, '$1\u2013$2')
            .replace(/(^|[^-\s])--([^-\s]|$)/mg, '$1\u2013$2');
        }

        token.content = text;
      }
    }
  }
};

},{}],44:[function(require,module,exports){
// Convert straight quotation marks to typographic ones
//
'use strict';


var QUOTE_TEST_RE = /['"]/;
var QUOTE_RE = /['"]/g;
var PUNCT_RE = /[-\s()\[\]]/;
var APOSTROPHE = '’';

// This function returns true if the character at `pos`
// could be inside a word.
function isLetter(str, pos) {
  if (pos < 0 || pos >= str.length) { return false; }
  return !PUNCT_RE.test(str[pos]);
}


function replaceAt(str, index, ch) {
  return str.substr(0, index) + ch + str.substr(index + 1);
}


module.exports = function smartquotes(state) {
  /*eslint max-depth:0*/
  var i, token, text, t, pos, max, thisLevel, lastSpace, nextSpace, item,
      canOpen, canClose, j, isSingle, blkIdx, tokens,
      stack;

  if (!state.options.typographer) { return; }

  stack = [];

  for (blkIdx = state.tokens.length - 1; blkIdx >= 0; blkIdx--) {

    if (state.tokens[blkIdx].type !== 'inline') { continue; }

    tokens = state.tokens[blkIdx].children;
    stack.length = 0;

    for (i = 0; i < tokens.length; i++) {
      token = tokens[i];

      if (token.type !== 'text' || QUOTE_TEST_RE.test(token.text)) { continue; }

      thisLevel = tokens[i].level;

      for (j = stack.length - 1; j >= 0; j--) {
        if (stack[j].level <= thisLevel) { break; }
      }
      stack.length = j + 1;

      text = token.content;
      pos = 0;
      max = text.length;

      /*eslint no-labels:0,block-scoped-var:0*/
      OUTER:
      while (pos < max) {
        QUOTE_RE.lastIndex = pos;
        t = QUOTE_RE.exec(text);
        if (!t) { break; }

        lastSpace = !isLetter(text, t.index - 1);
        pos = t.index + 1;
        isSingle = (t[0] === "'");
        nextSpace = !isLetter(text, pos);

        if (!nextSpace && !lastSpace) {
          // middle of word
          if (isSingle) {
            token.content = replaceAt(token.content, t.index, APOSTROPHE);
          }
          continue;
        }

        canOpen = !nextSpace;
        canClose = !lastSpace;

        if (canClose) {
          // this could be a closing quote, rewind the stack to get a match
          for (j = stack.length - 1; j >= 0; j--) {
            item = stack[j];
            if (stack[j].level < thisLevel) { break; }
            if (item.single === isSingle && stack[j].level === thisLevel) {
              item = stack[j];
              if (isSingle) {
                tokens[item.token].content = replaceAt(tokens[item.token].content, item.pos, state.options.quotes[2]);
                token.content = replaceAt(token.content, t.index, state.options.quotes[3]);
              } else {
                tokens[item.token].content = replaceAt(tokens[item.token].content, item.pos, state.options.quotes[0]);
                token.content = replaceAt(token.content, t.index, state.options.quotes[1]);
              }
              stack.length = j;
              continue OUTER;
            }
          }
        }

        if (canOpen) {
          stack.push({
            token: i,
            pos: t.index,
            single: isSingle,
            level: thisLevel
          });
        } else if (canClose && isSingle) {
          token.content = replaceAt(token.content, t.index, APOSTROPHE);
        }
      }
    }
  }
};

},{}],45:[function(require,module,exports){
// Process autolinks '<protocol:...>'

'use strict';

var url_schemas   = require('../common/url_schemas');
var normalizeLink = require('../helpers/normalize_link');


/*eslint max-len:0*/
var EMAIL_RE    = /^<([a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)>/;
var AUTOLINK_RE = /^<([a-zA-Z.\-]{1,25}):([^<>\x00-\x20]*)>/;


module.exports = function autolink(state, silent) {
  var tail, linkMatch, emailMatch, url, fullUrl, pos = state.pos;

  if (state.src.charCodeAt(pos) !== 0x3C/* < */) { return false; }

  tail = state.src.slice(pos);

  if (tail.indexOf('>') < 0) { return false; }

  linkMatch = tail.match(AUTOLINK_RE);

  if (linkMatch) {
    if (url_schemas.indexOf(linkMatch[1].toLowerCase()) < 0) { return false; }

    url = linkMatch[0].slice(1, -1);
    fullUrl = normalizeLink(url);
    if (!state.parser.validateLink(url)) { return false; }

    if (!silent) {
      state.push({
        type: 'link_open',
        href: fullUrl,
        level: state.level
      });
      state.push({
        type: 'text',
        content: url,
        level: state.level + 1
      });
      state.push({ type: 'link_close', level: state.level });
    }

    state.pos += linkMatch[0].length;
    return true;
  }

  emailMatch = tail.match(EMAIL_RE);

  if (emailMatch) {

    url = emailMatch[0].slice(1, -1);

    fullUrl = normalizeLink('mailto:' + url);
    if (!state.parser.validateLink(fullUrl)) { return false; }

    if (!silent) {
      state.push({
        type: 'link_open',
        href: fullUrl,
        level: state.level
      });
      state.push({
        type: 'text',
        content: url,
        level: state.level + 1
      });
      state.push({ type: 'link_close', level: state.level });
    }

    state.pos += emailMatch[0].length;
    return true;
  }

  return false;
};

},{"../common/url_schemas":6,"../helpers/normalize_link":11}],46:[function(require,module,exports){
// Parse backticks

'use strict';

module.exports = function backticks(state, silent) {
  var start, max, marker, matchStart, matchEnd,
      pos = state.pos,
      ch = state.src.charCodeAt(pos);

  if (ch !== 0x60/* ` */) { return false; }

  start = pos;
  pos++;
  max = state.posMax;

  while (pos < max && state.src.charCodeAt(pos) === 0x60/* ` */) { pos++; }

  marker = state.src.slice(start, pos);

  matchStart = matchEnd = pos;

  while ((matchStart = state.src.indexOf('`', matchEnd)) !== -1) {
    matchEnd = matchStart + 1;

    while (matchEnd < max && state.src.charCodeAt(matchEnd) === 0x60/* ` */) { matchEnd++; }

    if (matchEnd - matchStart === marker.length) {
      if (!silent) {
        state.push({
          type: 'code',
          content: state.src.slice(pos, matchStart)
                              .replace(/[ \n]+/g, ' ')
                              .trim(),
          block: false,
          level: state.level
        });
      }
      state.pos = matchEnd;
      return true;
    }
  }

  if (!silent) { state.pending += marker; }
  state.pos += marker.length;
  return true;
};

},{}],47:[function(require,module,exports){
// Process ~~deleted text~~

'use strict';

module.exports = function del(state, silent) {
  var found,
      pos,
      stack,
      max = state.posMax,
      start = state.pos,
      lastChar,
      nextChar;

  if (state.src.charCodeAt(start) !== 0x7E/* ~ */) { return false; }
  if (silent) { return false; } // don't run any pairs in validation mode
  if (start + 4 >= max) { return false; }
  if (state.src.charCodeAt(start + 1) !== 0x7E/* ~ */) { return false; }
  if (state.level >= state.options.maxNesting) { return false; }

  lastChar = start > 0 ? state.src.charCodeAt(start - 1) : -1;
  nextChar = state.src.charCodeAt(start + 2);

  if (lastChar === 0x7E/* ~ */) { return false; }
  if (nextChar === 0x7E/* ~ */) { return false; }
  if (nextChar === 0x20 || nextChar === 0x0A) { return false; }

  pos = start + 2;
  while (pos < max && state.src.charCodeAt(pos) === 0x7E/* ~ */) { pos++; }
  if (pos > start + 3) {
    // sequence of 4+ markers taking as literal, same as in a emphasis
    state.pos += pos - start;
    if (!silent) { state.pending += state.src.slice(start, pos); }
    return true;
  }

  state.pos = start + 2;
  stack = 1;

  while (state.pos + 1 < max) {
    if (state.src.charCodeAt(state.pos) === 0x7E/* ~ */) {
      if (state.src.charCodeAt(state.pos + 1) === 0x7E/* ~ */) {
        lastChar = state.src.charCodeAt(state.pos - 1);
        nextChar = state.pos + 2 < max ? state.src.charCodeAt(state.pos + 2) : -1;
        if (nextChar !== 0x7E/* ~ */ && lastChar !== 0x7E/* ~ */) {
          if (lastChar !== 0x20 && lastChar !== 0x0A) {
            // closing '~~'
            stack--;
          } else if (nextChar !== 0x20 && nextChar !== 0x0A) {
            // opening '~~'
            stack++;
          } // else {
            //  // standalone ' ~~ ' indented with spaces
            // }
          if (stack <= 0) {
            found = true;
            break;
          }
        }
      }
    }

    state.parser.skipToken(state);
  }

  if (!found) {
    // parser failed to find ending tag, so it's not valid emphasis
    state.pos = start;
    return false;
  }

  // found!
  state.posMax = state.pos;
  state.pos = start + 2;

  if (!silent) {
    state.push({ type: 'del_open', level: state.level++ });
    state.parser.tokenize(state);
    state.push({ type: 'del_close', level: --state.level });
  }

  state.pos = state.posMax + 2;
  state.posMax = max;
  return true;
};

},{}],48:[function(require,module,exports){
// Process *this* and _that_

'use strict';


function isAlphaNum(code) {
  return (code >= 0x30 /* 0 */ && code <= 0x39 /* 9 */) ||
         (code >= 0x41 /* A */ && code <= 0x5A /* Z */) ||
         (code >= 0x61 /* a */ && code <= 0x7A /* z */);
}

// parse sequence of emphasis markers,
// "start" should point at a valid marker
function scanDelims(state, start) {
  var pos = start, lastChar, nextChar, count,
      can_open = true,
      can_close = true,
      max = state.posMax,
      marker = state.src.charCodeAt(start);

  lastChar = start > 0 ? state.src.charCodeAt(start - 1) : -1;

  while (pos < max && state.src.charCodeAt(pos) === marker) { pos++; }
  if (pos >= max) { can_open = false; }
  count = pos - start;

  if (count >= 4) {
    // sequence of four or more unescaped markers can't start/end an emphasis
    can_open = can_close = false;
  } else {
    nextChar = pos < max ? state.src.charCodeAt(pos) : -1;

    // check whitespace conditions
    if (nextChar === 0x20 || nextChar === 0x0A) { can_open = false; }
    if (lastChar === 0x20 || lastChar === 0x0A) { can_close = false; }

    if (marker === 0x5F /* _ */) {
      // check if we aren't inside the word
      if (isAlphaNum(lastChar)) { can_open = false; }
      if (isAlphaNum(nextChar)) { can_close = false; }
    }
  }

  return {
    can_open: can_open,
    can_close: can_close,
    delims: count
  };
}

module.exports = function emphasis(state, silent) {
  var startCount,
      count,
      found,
      oldCount,
      newCount,
      stack,
      res,
      max = state.posMax,
      start = state.pos,
      marker = state.src.charCodeAt(start);

  if (marker !== 0x5F/* _ */ && marker !== 0x2A /* * */) { return false; }
  if (silent) { return false; } // don't run any pairs in validation mode

  res = scanDelims(state, start);
  startCount = res.delims;
  if (!res.can_open) {
    state.pos += startCount;
    if (!silent) { state.pending += state.src.slice(start, state.pos); }
    return true;
  }

  if (state.level >= state.options.maxNesting) { return false; }

  state.pos = start + startCount;
  stack = [ startCount ];

  while (state.pos < max) {
    if (state.src.charCodeAt(state.pos) === marker) {
      res = scanDelims(state, state.pos);
      count = res.delims;
      if (res.can_close) {
        oldCount = stack.pop();
        newCount = count;

        while (oldCount !== newCount) {
          if (newCount < oldCount) {
            stack.push(oldCount - newCount);
            break;
          }

          // assert(newCount > oldCount)
          newCount -= oldCount;

          if (stack.length === 0) { break; }
          state.pos += oldCount;
          oldCount = stack.pop();
        }

        if (stack.length === 0) {
          startCount = oldCount;
          found = true;
          break;
        }
        state.pos += count;
        continue;
      }

      if (res.can_open) { stack.push(count); }
      state.pos += count;
      continue;
    }

    state.parser.skipToken(state);
  }

  if (!found) {
    // parser failed to find ending tag, so it's not valid emphasis
    state.pos = start;
    return false;
  }

  // found!
  state.posMax = state.pos;
  state.pos = start + startCount;

  if (!silent) {
    if (startCount === 2 || startCount === 3) {
      state.push({ type: 'strong_open', level: state.level++ });
    }
    if (startCount === 1 || startCount === 3) {
      state.push({ type: 'em_open', level: state.level++ });
    }

    state.parser.tokenize(state);

    if (startCount === 1 || startCount === 3) {
      state.push({ type: 'em_close', level: --state.level });
    }
    if (startCount === 2 || startCount === 3) {
      state.push({ type: 'strong_close', level: --state.level });
    }
  }

  state.pos = state.posMax + startCount;
  state.posMax = max;
  return true;
};

},{}],49:[function(require,module,exports){
// Process html entity - &#123;, &#xAF;, &quot;, ...

'use strict';

var entities          = require('../common/entities');
var has               = require('../common/utils').has;
var isValidEntityCode = require('../common/utils').isValidEntityCode;
var fromCodePoint     = require('../common/utils').fromCodePoint;


var DIGITAL_RE = /^&#((?:x[a-f0-9]{1,8}|[0-9]{1,8}));/i;
var NAMED_RE   = /^&([a-z][a-z0-9]{1,31});/i;


module.exports = function entity(state, silent) {
  var ch, code, match, pos = state.pos, max = state.posMax;

  if (state.src.charCodeAt(pos) !== 0x26/* & */) { return false; }

  if (pos + 1 < max) {
    ch = state.src.charCodeAt(pos + 1);

    if (ch === 0x23 /* # */) {
      match = state.src.slice(pos).match(DIGITAL_RE);
      if (match) {
        if (!silent) {
          code = match[1][0].toLowerCase() === 'x' ? parseInt(match[1].slice(1), 16) : parseInt(match[1], 10);
          state.pending += isValidEntityCode(code) ? fromCodePoint(code) : fromCodePoint(0xFFFD);
        }
        state.pos += match[0].length;
        return true;
      }
    } else {
      match = state.src.slice(pos).match(NAMED_RE);
      if (match) {
        if (has(entities, match[1])) {
          if (!silent) { state.pending += entities[match[1]]; }
          state.pos += match[0].length;
          return true;
        }
      }
    }
  }

  if (!silent) { state.pending += '&'; }
  state.pos++;
  return true;
};

},{"../common/entities":3,"../common/utils":7}],50:[function(require,module,exports){
// Proceess escaped chars and hardbreaks

'use strict';

var ESCAPED = [];

for (var i = 0; i < 256; i++) { ESCAPED.push(0); }

'\\!"#$%&\'()*+,./:;<=>?@[]^_`{|}~-'
  .split('').forEach(function(ch) { ESCAPED[ch.charCodeAt(0)] = 1; });


module.exports = function escape(state, silent) {
  var ch, pos = state.pos, max = state.posMax;

  if (state.src.charCodeAt(pos) !== 0x5C/* \ */) { return false; }

  pos++;

  if (pos < max) {
    ch = state.src.charCodeAt(pos);

    if (ch < 256 && ESCAPED[ch] !== 0) {
      if (!silent) { state.pending += state.src[pos]; }
      state.pos += 2;
      return true;
    }

    if (ch === 0x0A) {
      if (!silent) {
        state.push({
          type: 'hardbreak',
          level: state.level
        });
      }

      pos++;
      // skip leading whitespaces from next line
      while (pos < max && state.src.charCodeAt(pos) === 0x20) { pos++; }

      state.pos = pos;
      return true;
    }
  }

  if (!silent) { state.pending += '\\'; }
  state.pos++;
  return true;
};

},{}],51:[function(require,module,exports){
// Process inline footnotes (^[...])

'use strict';

var parseLinkLabel = require('../helpers/parse_link_label');


module.exports = function footnote_inline(state, silent) {
  var labelStart,
      labelEnd,
      footnoteId,
      oldLength,
      max = state.posMax,
      start = state.pos;

  if (start + 2 >= max) { return false; }
  if (state.src.charCodeAt(start) !== 0x5E/* ^ */) { return false; }
  if (state.src.charCodeAt(start + 1) !== 0x5B/* [ */) { return false; }
  if (state.level >= state.options.maxNesting) { return false; }

  labelStart = start + 2;
  labelEnd = parseLinkLabel(state, start + 1);

  // parser failed to find ']', so it's not a valid note
  if (labelEnd < 0) { return false; }

  // We found the end of the link, and know for a fact it's a valid link;
  // so all that's left to do is to call tokenizer.
  //
  if (!silent) {
    if (!state.env.footnotes) { state.env.footnotes = {}; }
    if (!state.env.footnotes.list) { state.env.footnotes.list = []; }
    footnoteId = state.env.footnotes.list.length;

    state.pos = labelStart;
    state.posMax = labelEnd;

    state.push({
      type: 'footnote_ref',
      id: footnoteId,
      level: state.level
    });
    state.linkLevel++;
    oldLength = state.tokens.length;
    state.parser.tokenize(state);
    state.env.footnotes.list[footnoteId] = { tokens: state.tokens.splice(oldLength) };
    state.linkLevel--;
  }

  state.pos = labelEnd + 1;
  state.posMax = max;
  return true;
};

},{"../helpers/parse_link_label":14}],52:[function(require,module,exports){
// Process footnote references ([^...])

'use strict';


module.exports = function footnote_ref(state, silent) {
  var label,
      pos,
      footnoteId,
      footnoteSubId,
      max = state.posMax,
      start = state.pos;

  // should be at least 4 chars - "[^x]"
  if (start + 3 > max) { return false; }

  if (!state.env.footnotes || !state.env.footnotes.refs) { return false; }
  if (state.src.charCodeAt(start) !== 0x5B/* [ */) { return false; }
  if (state.src.charCodeAt(start + 1) !== 0x5E/* ^ */) { return false; }
  if (state.level >= state.options.maxNesting) { return false; }

  for (pos = start + 2; pos < max; pos++) {
    if (state.src.charCodeAt(pos) === 0x20) { return false; }
    if (state.src.charCodeAt(pos) === 0x0A) { return false; }
    if (state.src.charCodeAt(pos) === 0x5D /* ] */) {
      break;
    }
  }

  if (pos === start + 2) { return false; } // no empty footnote labels
  if (pos >= max) { return false; }
  pos++;

  label = state.src.slice(start + 2, pos - 1);
  if (typeof state.env.footnotes.refs[':' + label] === 'undefined') { return false; }

  if (!silent) {
    if (!state.env.footnotes.list) { state.env.footnotes.list = []; }

    if (state.env.footnotes.refs[':' + label] < 0) {
      footnoteId = state.env.footnotes.list.length;
      state.env.footnotes.list[footnoteId] = { label: label, count: 0 };
      state.env.footnotes.refs[':' + label] = footnoteId;
    } else {
      footnoteId = state.env.footnotes.refs[':' + label];
    }

    footnoteSubId = state.env.footnotes.list[footnoteId].count;
    state.env.footnotes.list[footnoteId].count++;

    state.push({
      type: 'footnote_ref',
      id: footnoteId,
      subId: footnoteSubId,
      level: state.level
    });
  }

  state.pos = pos;
  state.posMax = max;
  return true;
};

},{}],53:[function(require,module,exports){
// Process html tags

'use strict';


var HTML_TAG_RE = require('../common/html_re').HTML_TAG_RE;


function isLetter(ch) {
  /*eslint no-bitwise:0*/
  var lc = ch | 0x20; // to lower case
  return (lc >= 0x61/* a */) && (lc <= 0x7a/* z */);
}


module.exports = function htmltag(state, silent) {
  var ch, match, max, pos = state.pos;

  if (!state.options.html) { return false; }

  // Check start
  max = state.posMax;
  if (state.src.charCodeAt(pos) !== 0x3C/* < */ ||
      pos + 2 >= max) {
    return false;
  }

  // Quick fail on second char
  ch = state.src.charCodeAt(pos + 1);
  if (ch !== 0x21/* ! */ &&
      ch !== 0x3F/* ? */ &&
      ch !== 0x2F/* / */ &&
      !isLetter(ch)) {
    return false;
  }

  match = state.src.slice(pos).match(HTML_TAG_RE);
  if (!match) { return false; }

  if (!silent) {
    state.push({
      type: 'htmltag',
      content: state.src.slice(pos, pos + match[0].length),
      level: state.level
    });
  }
  state.pos += match[0].length;
  return true;
};

},{"../common/html_re":5}],54:[function(require,module,exports){
// Process ++inserted text++

'use strict';

module.exports = function ins(state, silent) {
  var found,
      pos,
      stack,
      max = state.posMax,
      start = state.pos,
      lastChar,
      nextChar;

  if (state.src.charCodeAt(start) !== 0x2B/* + */) { return false; }
  if (silent) { return false; } // don't run any pairs in validation mode
  if (start + 4 >= max) { return false; }
  if (state.src.charCodeAt(start + 1) !== 0x2B/* + */) { return false; }
  if (state.level >= state.options.maxNesting) { return false; }

  lastChar = start > 0 ? state.src.charCodeAt(start - 1) : -1;
  nextChar = state.src.charCodeAt(start + 2);

  if (lastChar === 0x2B/* + */) { return false; }
  if (nextChar === 0x2B/* + */) { return false; }
  if (nextChar === 0x20 || nextChar === 0x0A) { return false; }

  pos = start + 2;
  while (pos < max && state.src.charCodeAt(pos) === 0x2B/* + */) { pos++; }
  if (pos !== start + 2) {
    // sequence of 3+ markers taking as literal, same as in a emphasis
    state.pos += pos - start;
    if (!silent) { state.pending += state.src.slice(start, pos); }
    return true;
  }

  state.pos = start + 2;
  stack = 1;

  while (state.pos + 1 < max) {
    if (state.src.charCodeAt(state.pos) === 0x2B/* + */) {
      if (state.src.charCodeAt(state.pos + 1) === 0x2B/* + */) {
        lastChar = state.src.charCodeAt(state.pos - 1);
        nextChar = state.pos + 2 < max ? state.src.charCodeAt(state.pos + 2) : -1;
        if (nextChar !== 0x2B/* + */ && lastChar !== 0x2B/* + */) {
          if (lastChar !== 0x20 && lastChar !== 0x0A) {
            // closing '++'
            stack--;
          } else if (nextChar !== 0x20 && nextChar !== 0x0A) {
            // opening '++'
            stack++;
          } // else {
            //  // standalone ' ++ ' indented with spaces
            // }
          if (stack <= 0) {
            found = true;
            break;
          }
        }
      }
    }

    state.parser.skipToken(state);
  }

  if (!found) {
    // parser failed to find ending tag, so it's not valid emphasis
    state.pos = start;
    return false;
  }

  // found!
  state.posMax = state.pos;
  state.pos = start + 2;

  if (!silent) {
    state.push({ type: 'ins_open', level: state.level++ });
    state.parser.tokenize(state);
    state.push({ type: 'ins_close', level: --state.level });
  }

  state.pos = state.posMax + 2;
  state.posMax = max;
  return true;
};

},{}],55:[function(require,module,exports){
// Process [links](<to> "stuff")

'use strict';

var parseLinkLabel       = require('../helpers/parse_link_label');
var parseLinkDestination = require('../helpers/parse_link_destination');
var parseLinkTitle       = require('../helpers/parse_link_title');
var normalizeReference   = require('../helpers/normalize_reference');


module.exports = function links(state, silent) {
  var labelStart,
      labelEnd,
      label,
      href,
      title,
      pos,
      ref,
      code,
      isImage = false,
      oldPos = state.pos,
      max = state.posMax,
      start = state.pos,
      marker = state.src.charCodeAt(start);

  if (marker === 0x21/* ! */) {
    isImage = true;
    marker = state.src.charCodeAt(++start);
  }

  if (marker !== 0x5B/* [ */) { return false; }
  if (state.level >= state.options.maxNesting) { return false; }

  labelStart = start + 1;
  labelEnd = parseLinkLabel(state, start);

  // parser failed to find ']', so it's not a valid link
  if (labelEnd < 0) { return false; }

  pos = labelEnd + 1;
  if (pos < max && state.src.charCodeAt(pos) === 0x28/* ( */) {
    //
    // Inline link
    //

    // [link](  <href>  "title"  )
    //        ^^ skipping these spaces
    pos++;
    for (; pos < max; pos++) {
      code = state.src.charCodeAt(pos);
      if (code !== 0x20 && code !== 0x0A) { break; }
    }
    if (pos >= max) { return false; }

    // [link](  <href>  "title"  )
    //          ^^^^^^ parsing link destination
    start = pos;
    if (parseLinkDestination(state, pos)) {
      href = state.linkContent;
      pos = state.pos;
    } else {
      href = '';
    }

    // [link](  <href>  "title"  )
    //                ^^ skipping these spaces
    start = pos;
    for (; pos < max; pos++) {
      code = state.src.charCodeAt(pos);
      if (code !== 0x20 && code !== 0x0A) { break; }
    }

    // [link](  <href>  "title"  )
    //                  ^^^^^^^ parsing link title
    if (pos < max && start !== pos && parseLinkTitle(state, pos)) {
      title = state.linkContent;
      pos = state.pos;

      // [link](  <href>  "title"  )
      //                         ^^ skipping these spaces
      for (; pos < max; pos++) {
        code = state.src.charCodeAt(pos);
        if (code !== 0x20 && code !== 0x0A) { break; }
      }
    } else {
      title = '';
    }

    if (pos >= max || state.src.charCodeAt(pos) !== 0x29/* ) */) {
      state.pos = oldPos;
      return false;
    }
    pos++;
  } else {
    //
    // Link reference
    //

    // do not allow nested reference links
    if (state.linkLevel > 0) { return false; }

    // [foo]  [bar]
    //      ^^ optional whitespace (can include newlines)
    for (; pos < max; pos++) {
      code = state.src.charCodeAt(pos);
      if (code !== 0x20 && code !== 0x0A) { break; }
    }

    if (pos < max && state.src.charCodeAt(pos) === 0x5B/* [ */) {
      start = pos + 1;
      pos = parseLinkLabel(state, pos);
      if (pos >= 0) {
        label = state.src.slice(start, pos++);
      } else {
        pos = start - 1;
      }
    }

    // covers label === '' and label === undefined
    // (collapsed reference link and shortcut reference link respectively)
    if (!label) { label = state.src.slice(labelStart, labelEnd); }

    ref = state.env.references[normalizeReference(label)];
    if (!ref) {
      state.pos = oldPos;
      return false;
    }
    href = ref.href;
    title = ref.title;
  }

  //
  // We found the end of the link, and know for a fact it's a valid link;
  // so all that's left to do is to call tokenizer.
  //
  if (!silent) {
    state.pos = labelStart;
    state.posMax = labelEnd;

    if (isImage) {
      state.push({
        type: 'image',
        src: href,
        title: title,
        alt: state.src.substr(labelStart, labelEnd - labelStart),
        level: state.level
      });
    } else {
      state.push({
        type: 'link_open',
        href: href,
        title: title,
        level: state.level++
      });
      state.linkLevel++;
      state.parser.tokenize(state);
      state.linkLevel--;
      state.push({ type: 'link_close', level: --state.level });
    }
  }

  state.pos = pos;
  state.posMax = max;
  return true;
};

},{"../helpers/normalize_reference":12,"../helpers/parse_link_destination":13,"../helpers/parse_link_label":14,"../helpers/parse_link_title":15}],56:[function(require,module,exports){
// Process ==highlighted text==

'use strict';

module.exports = function del(state, silent) {
  var found,
      pos,
      stack,
      max = state.posMax,
      start = state.pos,
      lastChar,
      nextChar;

  if (state.src.charCodeAt(start) !== 0x3D/* = */) { return false; }
  if (silent) { return false; } // don't run any pairs in validation mode
  if (start + 4 >= max) { return false; }
  if (state.src.charCodeAt(start + 1) !== 0x3D/* = */) { return false; }
  if (state.level >= state.options.maxNesting) { return false; }

  lastChar = start > 0 ? state.src.charCodeAt(start - 1) : -1;
  nextChar = state.src.charCodeAt(start + 2);

  if (lastChar === 0x3D/* = */) { return false; }
  if (nextChar === 0x3D/* = */) { return false; }
  if (nextChar === 0x20 || nextChar === 0x0A) { return false; }

  pos = start + 2;
  while (pos < max && state.src.charCodeAt(pos) === 0x3D/* = */) { pos++; }
  if (pos !== start + 2) {
    // sequence of 3+ markers taking as literal, same as in a emphasis
    state.pos += pos - start;
    if (!silent) { state.pending += state.src.slice(start, pos); }
    return true;
  }

  state.pos = start + 2;
  stack = 1;

  while (state.pos + 1 < max) {
    if (state.src.charCodeAt(state.pos) === 0x3D/* = */) {
      if (state.src.charCodeAt(state.pos + 1) === 0x3D/* = */) {
        lastChar = state.src.charCodeAt(state.pos - 1);
        nextChar = state.pos + 2 < max ? state.src.charCodeAt(state.pos + 2) : -1;
        if (nextChar !== 0x3D/* = */ && lastChar !== 0x3D/* = */) {
          if (lastChar !== 0x20 && lastChar !== 0x0A) {
            // closing '=='
            stack--;
          } else if (nextChar !== 0x20 && nextChar !== 0x0A) {
            // opening '=='
            stack++;
          } // else {
            //  // standalone ' == ' indented with spaces
            // }
          if (stack <= 0) {
            found = true;
            break;
          }
        }
      }
    }

    state.parser.skipToken(state);
  }

  if (!found) {
    // parser failed to find ending tag, so it's not valid emphasis
    state.pos = start;
    return false;
  }

  // found!
  state.posMax = state.pos;
  state.pos = start + 2;

  if (!silent) {
    state.push({ type: 'mark_open', level: state.level++ });
    state.parser.tokenize(state);
    state.push({ type: 'mark_close', level: --state.level });
  }

  state.pos = state.posMax + 2;
  state.posMax = max;
  return true;
};

},{}],57:[function(require,module,exports){
// Proceess '\n'

'use strict';

module.exports = function newline(state, silent) {
  var pmax, max, pos = state.pos;

  if (state.src.charCodeAt(pos) !== 0x0A/* \n */) { return false; }

  pmax = state.pending.length - 1;
  max = state.posMax;

  // '  \n' -> hardbreak
  // Lookup in pending chars is bad practice! Don't copy to other rules!
  // Pending string is stored in concat mode, indexed lookups will cause
  // convertion to flat mode.
  if (!silent) {
    if (pmax >= 0 && state.pending.charCodeAt(pmax) === 0x20) {
      if (pmax >= 1 && state.pending.charCodeAt(pmax - 1) === 0x20) {
        state.pending = state.pending.replace(/ +$/, '');
        state.push({
          type: 'hardbreak',
          level: state.level
        });
      } else {
        state.pending = state.pending.slice(0, -1);
        state.push({
          type: 'softbreak',
          level: state.level
        });
      }

    } else {
      state.push({
        type: 'softbreak',
        level: state.level
      });
    }
  }

  pos++;

  // skip heading spaces for next line
  while (pos < max && state.src.charCodeAt(pos) === 0x20) { pos++; }

  state.pos = pos;
  return true;
};

},{}],58:[function(require,module,exports){
// Inline parser state

'use strict';


function StateInline(src, parserInline, options, env, outTokens) {
  this.src = src;
  this.env = env;
  this.options = options;
  this.parser = parserInline;
  this.tokens = outTokens;
  this.pos = 0;
  this.posMax = this.src.length;
  this.level = 0;
  this.pending = '';
  this.pendingLevel = 0;

  this.cache = [];        // Stores { start: end } pairs. Useful for backtrack
                          // optimization of pairs parse (emphasis, strikes).

  // Link parser state vars

  this.isInLabel = false; // Set true when seek link label - we should disable
                          // "paired" rules (emphasis, strikes) to not skip
                          // tailing `]`

  this.linkLevel = 0;     // Increment for each nesting link. Used to prevent
                          // nesting in definitions

  this.linkContent = '';  // Temporary storage for link url

  this.labelUnmatchedScopes = 0; // Track unpaired `[` for link labels
                                 // (backtrack optimization)
}


// Flush pending text
//
StateInline.prototype.pushPending = function () {
  this.tokens.push({
    type: 'text',
    content: this.pending,
    level: this.pendingLevel
  });
  this.pending = '';
};


// Push new token to "stream".
// If pending text exists - flush it as text token
//
StateInline.prototype.push = function (token) {
  if (this.pending) {
    this.pushPending();
  }

  this.tokens.push(token);
  this.pendingLevel = this.level;
};


// Store value to cache.
// !!! Implementation has parser-specific optimizations
// !!! keys MUST be integer, >= 0; values MUST be integer, > 0
//
StateInline.prototype.cacheSet = function (key, val) {
  for (var i = this.cache.length; i <= key; i++) {
    this.cache.push(0);
  }

  this.cache[key] = val;
};


// Get cache value
//
StateInline.prototype.cacheGet = function (key) {
  return key < this.cache.length ? this.cache[key] : 0;
};


module.exports = StateInline;

},{}],59:[function(require,module,exports){
// Process ~subscript~

'use strict';

// same as UNESCAPE_MD_RE plus a space
var UNESCAPE_RE = /\\([ \\!"#$%&'()*+,.\/:;<=>?@[\]^_`{|}~-])/g;

module.exports = function sub(state, silent) {
  var found,
      content,
      max = state.posMax,
      start = state.pos;

  if (state.src.charCodeAt(start) !== 0x7E/* ~ */) { return false; }
  if (silent) { return false; } // don't run any pairs in validation mode
  if (start + 2 >= max) { return false; }
  if (state.level >= state.options.maxNesting) { return false; }

  state.pos = start + 1;

  while (state.pos < max) {
    if (state.src.charCodeAt(state.pos) === 0x7E/* ~ */) {
      found = true;
      break;
    }

    state.parser.skipToken(state);
  }

  if (!found || start + 1 === state.pos) {
    state.pos = start;
    return false;
  }

  content = state.src.slice(start + 1, state.pos);

  // don't allow unescaped spaces/newlines inside
  if (content.match(/(^|[^\\])(\\\\)*\s/)) {
    state.pos = start;
    return false;
  }

  // found!
  state.posMax = state.pos;
  state.pos = start + 1;

  if (!silent) {
    state.push({
      type: 'sub',
      level: state.level,
      content: content.replace(UNESCAPE_RE, '$1')
    });
  }

  state.pos = state.posMax + 1;
  state.posMax = max;
  return true;
};

},{}],60:[function(require,module,exports){
// Process ^superscript^

'use strict';

// same as UNESCAPE_MD_RE plus a space
var UNESCAPE_RE = /\\([ \\!"#$%&'()*+,.\/:;<=>?@[\]^_`{|}~-])/g;

module.exports = function sup(state, silent) {
  var found,
      content,
      max = state.posMax,
      start = state.pos;

  if (state.src.charCodeAt(start) !== 0x5E/* ^ */) { return false; }
  if (silent) { return false; } // don't run any pairs in validation mode
  if (start + 2 >= max) { return false; }
  if (state.level >= state.options.maxNesting) { return false; }

  state.pos = start + 1;

  while (state.pos < max) {
    if (state.src.charCodeAt(state.pos) === 0x5E/* ^ */) {
      found = true;
      break;
    }

    state.parser.skipToken(state);
  }

  if (!found || start + 1 === state.pos) {
    state.pos = start;
    return false;
  }

  content = state.src.slice(start + 1, state.pos);

  // don't allow unescaped spaces/newlines inside
  if (content.match(/(^|[^\\])(\\\\)*\s/)) {
    state.pos = start;
    return false;
  }

  // found!
  state.posMax = state.pos;
  state.pos = start + 1;

  if (!silent) {
    state.push({
      type: 'sup',
      level: state.level,
      content: content.replace(UNESCAPE_RE, '$1')
    });
  }

  state.pos = state.posMax + 1;
  state.posMax = max;
  return true;
};

},{}],61:[function(require,module,exports){
// Skip text characters for text token, place those to pending buffer
// and increment current pos

'use strict';


// Rule to skip pure text
// '{}$%@~+=:' reserved for extentions

function isTerminatorChar(ch) {
  switch (ch) {
    case 0x0A/* \n */:
    case 0x5C/* \ */:
    case 0x60/* ` */:
    case 0x2A/* * */:
    case 0x5F/* _ */:
    case 0x5E/* ^ */:
    case 0x5B/* [ */:
    case 0x5D/* ] */:
    case 0x21/* ! */:
    case 0x26/* & */:
    case 0x3C/* < */:
    case 0x3E/* > */:
    case 0x7B/* { */:
    case 0x7D/* } */:
    case 0x24/* $ */:
    case 0x25/* % */:
    case 0x40/* @ */:
    case 0x7E/* ~ */:
    case 0x2B/* + */:
    case 0x3D/* = */:
    case 0x3A/* : */:
      return true;
    default:
      return false;
  }
}

module.exports = function text(state, silent) {
  var pos = state.pos;

  while (pos < state.posMax && !isTerminatorChar(state.src.charCodeAt(pos))) {
    pos++;
  }

  if (pos === state.pos) { return false; }

  if (!silent) { state.pending += state.src.slice(state.pos, pos); }

  state.pos = pos;

  return true;
};

},{}],62:[function(require,module,exports){
(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([], function () {
      return (root.returnExportsGlobal = factory());
    });
  } else if (typeof exports === 'object') {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like enviroments that support module.exports,
    // like Node.
    module.exports = factory();
  } else {
    root['Autolinker'] = factory();
  }
}(this, function () {

	/*!
	 * Autolinker.js
	 * 0.15.2
	 *
	 * Copyright(c) 2015 Gregory Jacobs <greg@greg-jacobs.com>
	 * MIT Licensed. http://www.opensource.org/licenses/mit-license.php
	 *
	 * https://github.com/gregjacobs/Autolinker.js
	 */
	/**
	 * @class Autolinker
	 * @extends Object
	 * 
	 * Utility class used to process a given string of text, and wrap the URLs, email addresses, and Twitter handles in 
	 * the appropriate anchor (&lt;a&gt;) tags to turn them into links.
	 * 
	 * Any of the configuration options may be provided in an Object (map) provided to the Autolinker constructor, which
	 * will configure how the {@link #link link()} method will process the links.
	 * 
	 * For example:
	 * 
	 *     var autolinker = new Autolinker( {
	 *         newWindow : false,
	 *         truncate  : 30
	 *     } );
	 *     
	 *     var html = autolinker.link( "Joe went to www.yahoo.com" );
	 *     // produces: 'Joe went to <a href="http://www.yahoo.com">yahoo.com</a>'
	 * 
	 * 
	 * The {@link #static-link static link()} method may also be used to inline options into a single call, which may
	 * be more convenient for one-off uses. For example:
	 * 
	 *     var html = Autolinker.link( "Joe went to www.yahoo.com", {
	 *         newWindow : false,
	 *         truncate  : 30
	 *     } );
	 *     // produces: 'Joe went to <a href="http://www.yahoo.com">yahoo.com</a>'
	 * 
	 * 
	 * ## Custom Replacements of Links
	 * 
	 * If the configuration options do not provide enough flexibility, a {@link #replaceFn} may be provided to fully customize
	 * the output of Autolinker. This function is called once for each URL/Email/Twitter handle match that is encountered.
	 * 
	 * For example:
	 * 
	 *     var input = "...";  // string with URLs, Email Addresses, and Twitter Handles
	 *     
	 *     var linkedText = Autolinker.link( input, {
	 *         replaceFn : function( autolinker, match ) {
	 *             console.log( "href = ", match.getAnchorHref() );
	 *             console.log( "text = ", match.getAnchorText() );
	 *         
	 *             switch( match.getType() ) {
	 *                 case 'url' : 
	 *                     console.log( "url: ", match.getUrl() );
	 *                     
	 *                     if( match.getUrl().indexOf( 'mysite.com' ) === -1 ) {
	 *                         var tag = autolinker.getTagBuilder().build( match );  // returns an `Autolinker.HtmlTag` instance, which provides mutator methods for easy changes
	 *                         tag.setAttr( 'rel', 'nofollow' );
	 *                         tag.addClass( 'external-link' );
	 *                         
	 *                         return tag;
	 *                         
	 *                     } else {
	 *                         return true;  // let Autolinker perform its normal anchor tag replacement
	 *                     }
	 *                     
	 *                 case 'email' :
	 *                     var email = match.getEmail();
	 *                     console.log( "email: ", email );
	 *                     
	 *                     if( email === "my@own.address" ) {
	 *                         return false;  // don't auto-link this particular email address; leave as-is
	 *                     } else {
	 *                         return;  // no return value will have Autolinker perform its normal anchor tag replacement (same as returning `true`)
	 *                     }
	 *                 
	 *                 case 'twitter' :
	 *                     var twitterHandle = match.getTwitterHandle();
	 *                     console.log( twitterHandle );
	 *                     
	 *                     return '<a href="http://newplace.to.link.twitter.handles.to/">' + twitterHandle + '</a>';
	 *             }
	 *         }
	 *     } );
	 * 
	 * 
	 * The function may return the following values:
	 * 
	 * - `true` (Boolean): Allow Autolinker to replace the match as it normally would.
	 * - `false` (Boolean): Do not replace the current match at all - leave as-is.
	 * - Any String: If a string is returned from the function, the string will be used directly as the replacement HTML for
	 *   the match.
	 * - An {@link Autolinker.HtmlTag} instance, which can be used to build/modify an HTML tag before writing out its HTML text.
	 * 
	 * @constructor
	 * @param {Object} [config] The configuration options for the Autolinker instance, specified in an Object (map).
	 */
	var Autolinker = function( cfg ) {
		Autolinker.Util.assign( this, cfg );  // assign the properties of `cfg` onto the Autolinker instance. Prototype properties will be used for missing configs.

		this.matchValidator = new Autolinker.MatchValidator();
	};


	Autolinker.prototype = {
		constructor : Autolinker,  // fix constructor property

		/**
		 * @cfg {Boolean} urls
		 * 
		 * `true` if miscellaneous URLs should be automatically linked, `false` if they should not be.
		 */
		urls : true,

		/**
		 * @cfg {Boolean} email
		 * 
		 * `true` if email addresses should be automatically linked, `false` if they should not be.
		 */
		email : true,

		/**
		 * @cfg {Boolean} twitter
		 * 
		 * `true` if Twitter handles ("@example") should be automatically linked, `false` if they should not be.
		 */
		twitter : true,

		/**
		 * @cfg {Boolean} newWindow
		 * 
		 * `true` if the links should open in a new window, `false` otherwise.
		 */
		newWindow : true,

		/**
		 * @cfg {Boolean} stripPrefix
		 * 
		 * `true` if 'http://' or 'https://' and/or the 'www.' should be stripped from the beginning of URL links' text, 
		 * `false` otherwise.
		 */
		stripPrefix : true,

		/**
		 * @cfg {Number} truncate
		 * 
		 * A number for how many characters long URLs/emails/twitter handles should be truncated to inside the text of 
		 * a link. If the URL/email/twitter is over this number of characters, it will be truncated to this length by 
		 * adding a two period ellipsis ('..') to the end of the string.
		 * 
		 * For example: A url like 'http://www.yahoo.com/some/long/path/to/a/file' truncated to 25 characters might look
		 * something like this: 'yahoo.com/some/long/pat..'
		 */

		/**
		 * @cfg {String} className
		 * 
		 * A CSS class name to add to the generated links. This class will be added to all links, as well as this class
		 * plus url/email/twitter suffixes for styling url/email/twitter links differently.
		 * 
		 * For example, if this config is provided as "myLink", then:
		 * 
		 * - URL links will have the CSS classes: "myLink myLink-url"
		 * - Email links will have the CSS classes: "myLink myLink-email", and
		 * - Twitter links will have the CSS classes: "myLink myLink-twitter"
		 */
		className : "",

		/**
		 * @cfg {Function} replaceFn
		 * 
		 * A function to individually process each URL/Email/Twitter match found in the input string.
		 * 
		 * See the class's description for usage.
		 * 
		 * This function is called with the following parameters:
		 * 
		 * @cfg {Autolinker} replaceFn.autolinker The Autolinker instance, which may be used to retrieve child objects from (such
		 *   as the instance's {@link #getTagBuilder tag builder}).
		 * @cfg {Autolinker.match.Match} replaceFn.match The Match instance which can be used to retrieve information about the
		 *   {@link Autolinker.match.Url URL}/{@link Autolinker.match.Email email}/{@link Autolinker.match.Twitter Twitter}
		 *   match that the `replaceFn` is currently processing.
		 */


		/**
		 * @private
		 * @property {RegExp} htmlCharacterEntitiesRegex
		 *
		 * The regular expression that matches common HTML character entities.
		 * 
		 * Ignoring &amp; as it could be part of a query string -- handling it separately.
		 */
		htmlCharacterEntitiesRegex: /(&nbsp;|&#160;|&lt;|&#60;|&gt;|&#62;|&quot;|&#34;|&#39;)/gi,

		/**
		 * @private
		 * @property {RegExp} matcherRegex
		 * 
		 * The regular expression that matches URLs, email addresses, and Twitter handles.
		 * 
		 * This regular expression has the following capturing groups:
		 * 
		 * 1. Group that is used to determine if there is a Twitter handle match (i.e. \@someTwitterUser). Simply check for its 
		 *    existence to determine if there is a Twitter handle match. The next couple of capturing groups give information 
		 *    about the Twitter handle match.
		 * 2. The whitespace character before the \@sign in a Twitter handle. This is needed because there are no lookbehinds in
		 *    JS regular expressions, and can be used to reconstruct the original string in a replace().
		 * 3. The Twitter handle itself in a Twitter match. If the match is '@someTwitterUser', the handle is 'someTwitterUser'.
		 * 4. Group that matches an email address. Used to determine if the match is an email address, as well as holding the full 
		 *    address. Ex: 'me@my.com'
		 * 5. Group that matches a URL in the input text. Ex: 'http://google.com', 'www.google.com', or just 'google.com'.
		 *    This also includes a path, url parameters, or hash anchors. Ex: google.com/path/to/file?q1=1&q2=2#myAnchor
		 * 6. Group that matches a protocol URL (i.e. 'http://google.com'). This is used to match protocol URLs with just a single
		 *    word, like 'http://localhost', where we won't double check that the domain name has at least one '.' in it.
		 * 7. A protocol-relative ('//') match for the case of a 'www.' prefixed URL. Will be an empty string if it is not a 
		 *    protocol-relative match. We need to know the character before the '//' in order to determine if it is a valid match
		 *    or the // was in a string we don't want to auto-link.
		 * 8. A protocol-relative ('//') match for the case of a known TLD prefixed URL. Will be an empty string if it is not a 
		 *    protocol-relative match. See #6 for more info. 
		 */
		matcherRegex : (function() {
			var twitterRegex = /(^|[^\w])@(\w{1,15})/,              // For matching a twitter handle. Ex: @gregory_jacobs

			    emailRegex = /(?:[\-;:&=\+\$,\w\.]+@)/,             // something@ for email addresses (a.k.a. local-part)

			    protocolRegex = /(?:[A-Za-z][-.+A-Za-z0-9]+:(?![A-Za-z][-.+A-Za-z0-9]+:\/\/)(?!\d+\/?)(?:\/\/)?)/,  // match protocol, allow in format "http://" or "mailto:". However, do not match the first part of something like 'link:http://www.google.com' (i.e. don't match "link:"). Also, make sure we don't interpret 'google.com:8000' as if 'google.com' was a protocol here (i.e. ignore a trailing port number in this regex)
			    wwwRegex = /(?:www\.)/,                             // starting with 'www.'
			    domainNameRegex = /[A-Za-z0-9\.\-]*[A-Za-z0-9\-]/,  // anything looking at all like a domain, non-unicode domains, not ending in a period
			    tldRegex = /\.(?:international|construction|contractors|enterprises|photography|productions|foundation|immobilien|industries|management|properties|technology|christmas|community|directory|education|equipment|institute|marketing|solutions|vacations|bargains|boutique|builders|catering|cleaning|clothing|computer|democrat|diamonds|graphics|holdings|lighting|partners|plumbing|supplies|training|ventures|academy|careers|company|cruises|domains|exposed|flights|florist|gallery|guitars|holiday|kitchen|neustar|okinawa|recipes|rentals|reviews|shiksha|singles|support|systems|agency|berlin|camera|center|coffee|condos|dating|estate|events|expert|futbol|kaufen|luxury|maison|monash|museum|nagoya|photos|repair|report|social|supply|tattoo|tienda|travel|viajes|villas|vision|voting|voyage|actor|build|cards|cheap|codes|dance|email|glass|house|mango|ninja|parts|photo|shoes|solar|today|tokyo|tools|watch|works|aero|arpa|asia|best|bike|blue|buzz|camp|club|cool|coop|farm|fish|gift|guru|info|jobs|kiwi|kred|land|limo|link|menu|mobi|moda|name|pics|pink|post|qpon|rich|ruhr|sexy|tips|vote|voto|wang|wien|wiki|zone|bar|bid|biz|cab|cat|ceo|com|edu|gov|int|kim|mil|net|onl|org|pro|pub|red|tel|uno|wed|xxx|xyz|ac|ad|ae|af|ag|ai|al|am|an|ao|aq|ar|as|at|au|aw|ax|az|ba|bb|bd|be|bf|bg|bh|bi|bj|bm|bn|bo|br|bs|bt|bv|bw|by|bz|ca|cc|cd|cf|cg|ch|ci|ck|cl|cm|cn|co|cr|cu|cv|cw|cx|cy|cz|de|dj|dk|dm|do|dz|ec|ee|eg|er|es|et|eu|fi|fj|fk|fm|fo|fr|ga|gb|gd|ge|gf|gg|gh|gi|gl|gm|gn|gp|gq|gr|gs|gt|gu|gw|gy|hk|hm|hn|hr|ht|hu|id|ie|il|im|in|io|iq|ir|is|it|je|jm|jo|jp|ke|kg|kh|ki|km|kn|kp|kr|kw|ky|kz|la|lb|lc|li|lk|lr|ls|lt|lu|lv|ly|ma|mc|md|me|mg|mh|mk|ml|mm|mn|mo|mp|mq|mr|ms|mt|mu|mv|mw|mx|my|mz|na|nc|ne|nf|ng|ni|nl|no|np|nr|nu|nz|om|pa|pe|pf|pg|ph|pk|pl|pm|pn|pr|ps|pt|pw|py|qa|re|ro|rs|ru|rw|sa|sb|sc|sd|se|sg|sh|si|sj|sk|sl|sm|sn|so|sr|st|su|sv|sx|sy|sz|tc|td|tf|tg|th|tj|tk|tl|tm|tn|to|tp|tr|tt|tv|tw|tz|ua|ug|uk|us|uy|uz|va|vc|ve|vg|vi|vn|vu|wf|ws|ye|yt|za|zm|zw)\b/,   // match our known top level domains (TLDs)

			    // Allow optional path, query string, and hash anchor, not ending in the following characters: "?!:,.;"
			    // http://blog.codinghorror.com/the-problem-with-urls/
			    urlSuffixRegex = /[\-A-Za-z0-9+&@#\/%=~_()|'$*\[\]?!:,.;]*[\-A-Za-z0-9+&@#\/%=~_()|'$*\[\]]/;

			return new RegExp( [
				'(',  // *** Capturing group $1, which can be used to check for a twitter handle match. Use group $3 for the actual twitter handle though. $2 may be used to reconstruct the original string in a replace() 
					// *** Capturing group $2, which matches the whitespace character before the '@' sign (needed because of no lookbehinds), and 
					// *** Capturing group $3, which matches the actual twitter handle
					twitterRegex.source,
				')',

				'|',

				'(',  // *** Capturing group $4, which is used to determine an email match
					emailRegex.source,
					domainNameRegex.source,
					tldRegex.source,
				')',

				'|',

				'(',  // *** Capturing group $5, which is used to match a URL
					'(?:', // parens to cover match for protocol (optional), and domain
						'(',  // *** Capturing group $6, for a protocol-prefixed url (ex: http://google.com)
							protocolRegex.source,
							domainNameRegex.source,
						')',

						'|',

						'(?:',  // non-capturing paren for a 'www.' prefixed url (ex: www.google.com)
							'(.?//)?',  // *** Capturing group $7 for an optional protocol-relative URL. Must be at the beginning of the string or start with a non-word character
							wwwRegex.source,
							domainNameRegex.source,
						')',

						'|',

						'(?:',  // non-capturing paren for known a TLD url (ex: google.com)
							'(.?//)?',  // *** Capturing group $8 for an optional protocol-relative URL. Must be at the beginning of the string or start with a non-word character
							domainNameRegex.source,
							tldRegex.source,
						')',
					')',

					'(?:' + urlSuffixRegex.source + ')?',  // match for path, query string, and/or hash anchor - optional
				')'
			].join( "" ), 'gi' );
		} )(),

		/**
		 * @private
		 * @property {RegExp} charBeforeProtocolRelMatchRegex
		 * 
		 * The regular expression used to retrieve the character before a protocol-relative URL match.
		 * 
		 * This is used in conjunction with the {@link #matcherRegex}, which needs to grab the character before a protocol-relative
		 * '//' due to the lack of a negative look-behind in JavaScript regular expressions. The character before the match is stripped
		 * from the URL.
		 */
		charBeforeProtocolRelMatchRegex : /^(.)?\/\//,

		/**
		 * @private
		 * @property {Autolinker.MatchValidator} matchValidator
		 * 
		 * The MatchValidator object, used to filter out any false positives from the {@link #matcherRegex}. See
		 * {@link Autolinker.MatchValidator} for details.
		 */

		/**
		 * @private
		 * @property {Autolinker.HtmlParser} htmlParser
		 * 
		 * The HtmlParser instance used to skip over HTML tags, while finding text nodes to process. This is lazily instantiated
		 * in the {@link #getHtmlParser} method.
		 */

		/**
		 * @private
		 * @property {Autolinker.AnchorTagBuilder} tagBuilder
		 * 
		 * The AnchorTagBuilder instance used to build the URL/email/Twitter replacement anchor tags. This is lazily instantiated
		 * in the {@link #getTagBuilder} method.
		 */


		/**
		 * Automatically links URLs, email addresses, and Twitter handles found in the given chunk of HTML. 
		 * Does not link URLs found within HTML tags.
		 * 
		 * For instance, if given the text: `You should go to http://www.yahoo.com`, then the result
		 * will be `You should go to &lt;a href="http://www.yahoo.com"&gt;http://www.yahoo.com&lt;/a&gt;`
		 * 
		 * This method finds the text around any HTML elements in the input `textOrHtml`, which will be the text that is processed.
		 * Any original HTML elements will be left as-is, as well as the text that is already wrapped in anchor (&lt;a&gt;) tags.
		 * 
		 * @param {String} textOrHtml The HTML or text to link URLs, email addresses, and Twitter handles within (depending on if
		 *   the {@link #urls}, {@link #email}, and {@link #twitter} options are enabled).
		 * @return {String} The HTML, with URLs/emails/Twitter handles automatically linked.
		 */
		link : function( textOrHtml ) {
			var me = this,  // for closure
			    htmlParser = this.getHtmlParser(),
			    htmlCharacterEntitiesRegex = this.htmlCharacterEntitiesRegex,
			    anchorTagStackCount = 0,  // used to only process text around anchor tags, and any inner text/html they may have
			    resultHtml = [];

			htmlParser.parse( textOrHtml, {
				// Process HTML nodes in the input `textOrHtml`
				processHtmlNode : function( tagText, tagName, isClosingTag ) {
					if( tagName === 'a' ) {
						if( !isClosingTag ) {  // it's the start <a> tag
							anchorTagStackCount++;
						} else {   // it's the end </a> tag
							anchorTagStackCount = Math.max( anchorTagStackCount - 1, 0 );  // attempt to handle extraneous </a> tags by making sure the stack count never goes below 0
						}
					}
					resultHtml.push( tagText );  // now add the text of the tag itself verbatim
				},

				// Process text nodes in the input `textOrHtml`
				processTextNode : function( text ) {
					if( anchorTagStackCount === 0 ) {
						// If we're not within an <a> tag, process the text node
						var unescapedText = Autolinker.Util.splitAndCapture( text, htmlCharacterEntitiesRegex );  // split at HTML entities, but include the HTML entities in the results array

						for ( var i = 0, len = unescapedText.length; i < len; i++ ) {
							var textToProcess = unescapedText[ i ],
							    processedTextNode = me.processTextNode( textToProcess );

							resultHtml.push( processedTextNode );
						}

					} else {
						// `text` is within an <a> tag, simply append the text - we do not want to autolink anything 
						// already within an <a>...</a> tag
						resultHtml.push( text );
					}
				}
			} );

			return resultHtml.join( "" );
		},


		/**
		 * Lazily instantiates and returns the {@link #htmlParser} instance for this Autolinker instance.
		 * 
		 * @protected
		 * @return {Autolinker.HtmlParser}
		 */
		getHtmlParser : function() {
			var htmlParser = this.htmlParser;

			if( !htmlParser ) {
				htmlParser = this.htmlParser = new Autolinker.HtmlParser();
			}

			return htmlParser;
		},


		/**
		 * Returns the {@link #tagBuilder} instance for this Autolinker instance, lazily instantiating it
		 * if it does not yet exist.
		 * 
		 * This method may be used in a {@link #replaceFn} to generate the {@link Autolinker.HtmlTag HtmlTag} instance that 
		 * Autolinker would normally generate, and then allow for modifications before returning it. For example:
		 * 
		 *     var html = Autolinker.link( "Test google.com", {
		 *         replaceFn : function( autolinker, match ) {
		 *             var tag = autolinker.getTagBuilder().build( match );  // returns an {@link Autolinker.HtmlTag} instance
		 *             tag.setAttr( 'rel', 'nofollow' );
		 *             
		 *             return tag;
		 *         }
		 *     } );
		 *     
		 *     // generated html:
		 *     //   Test <a href="http://google.com" target="_blank" rel="nofollow">google.com</a>
		 * 
		 * @return {Autolinker.AnchorTagBuilder}
		 */
		getTagBuilder : function() {
			var tagBuilder = this.tagBuilder;

			if( !tagBuilder ) {
				tagBuilder = this.tagBuilder = new Autolinker.AnchorTagBuilder( {
					newWindow   : this.newWindow,
					truncate    : this.truncate,
					className   : this.className
				} );
			}

			return tagBuilder;
		},


		/**
		 * Process the text that lies inbetween HTML tags. This method does the actual wrapping of URLs with
		 * anchor tags.
		 * 
		 * @private
		 * @param {String} text The text to auto-link.
		 * @return {String} The text with anchor tags auto-filled.
		 */
		processTextNode : function( text ) {
			var me = this;  // for closure

			return text.replace( this.matcherRegex, function( matchStr, $1, $2, $3, $4, $5, $6, $7, $8 ) {
				var matchDescObj = me.processCandidateMatch( matchStr, $1, $2, $3, $4, $5, $6, $7, $8 );  // match description object

				// Return out with no changes for match types that are disabled (url, email, twitter), or for matches that are 
				// invalid (false positives from the matcherRegex, which can't use look-behinds since they are unavailable in JS).
				if( !matchDescObj ) {
					return matchStr;

				} else {
					// Generate the replacement text for the match
					var matchReturnVal = me.createMatchReturnVal( matchDescObj.match, matchDescObj.matchStr );
					return matchDescObj.prefixStr + matchReturnVal + matchDescObj.suffixStr;
				}
			} );
		},


		/**
		 * Processes a candidate match from the {@link #matcherRegex}. 
		 * 
		 * Not all matches found by the regex are actual URL/email/Twitter matches, as determined by the {@link #matchValidator}. In
		 * this case, the method returns `null`. Otherwise, a valid Object with `prefixStr`, `match`, and `suffixStr` is returned.
		 * 
		 * @private
		 * @param {String} matchStr The full match that was found by the {@link #matcherRegex}.
		 * @param {String} twitterMatch The matched text of a Twitter handle, if the match is a Twitter match.
		 * @param {String} twitterHandlePrefixWhitespaceChar The whitespace char before the @ sign in a Twitter handle match. This 
		 *   is needed because of no lookbehinds in JS regexes, and is need to re-include the character for the anchor tag replacement.
		 * @param {String} twitterHandle The actual Twitter user (i.e the word after the @ sign in a Twitter match).
		 * @param {String} emailAddressMatch The matched email address for an email address match.
		 * @param {String} urlMatch The matched URL string for a URL match.
		 * @param {String} protocolUrlMatch The match URL string for a protocol match. Ex: 'http://yahoo.com'. This is used to match
		 *   something like 'http://localhost', where we won't double check that the domain name has at least one '.' in it.
		 * @param {String} wwwProtocolRelativeMatch The '//' for a protocol-relative match from a 'www' url, with the character that 
		 *   comes before the '//'.
		 * @param {String} tldProtocolRelativeMatch The '//' for a protocol-relative match from a TLD (top level domain) match, with 
		 *   the character that comes before the '//'.
		 *   
		 * @return {Object} A "match description object". This will be `null` if the match was invalid, or if a match type is disabled.
		 *   Otherwise, this will be an Object (map) with the following properties:
		 * @return {String} return.prefixStr The char(s) that should be prepended to the replacement string. These are char(s) that
		 *   were needed to be included from the regex match that were ignored by processing code, and should be re-inserted into 
		 *   the replacement stream.
		 * @return {String} return.suffixStr The char(s) that should be appended to the replacement string. These are char(s) that
		 *   were needed to be included from the regex match that were ignored by processing code, and should be re-inserted into 
		 *   the replacement stream.
		 * @return {String} return.matchStr The `matchStr`, fixed up to remove characters that are no longer needed (which have been
		 *   added to `prefixStr` and `suffixStr`).
		 * @return {Autolinker.match.Match} return.match The Match object that represents the match that was found.
		 */
		processCandidateMatch : function( 
			matchStr, twitterMatch, twitterHandlePrefixWhitespaceChar, twitterHandle, 
			emailAddressMatch, urlMatch, protocolUrlMatch, wwwProtocolRelativeMatch, tldProtocolRelativeMatch
		) {
			var protocolRelativeMatch = wwwProtocolRelativeMatch || tldProtocolRelativeMatch,
			    match,  // Will be an Autolinker.match.Match object

			    prefixStr = "",       // A string to use to prefix the anchor tag that is created. This is needed for the Twitter handle match
			    suffixStr = "";       // A string to suffix the anchor tag that is created. This is used if there is a trailing parenthesis that should not be auto-linked.


			// Return out with `null` for match types that are disabled (url, email, twitter), or for matches that are 
			// invalid (false positives from the matcherRegex, which can't use look-behinds since they are unavailable in JS).
			if(
				( twitterMatch && !this.twitter ) || ( emailAddressMatch && !this.email ) || ( urlMatch && !this.urls ) ||
				!this.matchValidator.isValidMatch( urlMatch, protocolUrlMatch, protocolRelativeMatch ) 
			) {
				return null;
			}

			// Handle a closing parenthesis at the end of the match, and exclude it if there is not a matching open parenthesis
			// in the match itself. 
			if( this.matchHasUnbalancedClosingParen( matchStr ) ) {
				matchStr = matchStr.substr( 0, matchStr.length - 1 );  // remove the trailing ")"
				suffixStr = ")";  // this will be added after the generated <a> tag
			}


			if( emailAddressMatch ) {
				match = new Autolinker.match.Email( { matchedText: matchStr, email: emailAddressMatch } );

			} else if( twitterMatch ) {
				// fix up the `matchStr` if there was a preceding whitespace char, which was needed to determine the match 
				// itself (since there are no look-behinds in JS regexes)
				if( twitterHandlePrefixWhitespaceChar ) {
					prefixStr = twitterHandlePrefixWhitespaceChar;
					matchStr = matchStr.slice( 1 );  // remove the prefixed whitespace char from the match
				}
				match = new Autolinker.match.Twitter( { matchedText: matchStr, twitterHandle: twitterHandle } );

			} else {  // url match
				// If it's a protocol-relative '//' match, remove the character before the '//' (which the matcherRegex needed
				// to match due to the lack of a negative look-behind in JavaScript regular expressions)
				if( protocolRelativeMatch ) {
					var charBeforeMatch = protocolRelativeMatch.match( this.charBeforeProtocolRelMatchRegex )[ 1 ] || "";

					if( charBeforeMatch ) {  // fix up the `matchStr` if there was a preceding char before a protocol-relative match, which was needed to determine the match itself (since there are no look-behinds in JS regexes)
						prefixStr = charBeforeMatch;
						matchStr = matchStr.slice( 1 );  // remove the prefixed char from the match
					}
				}

				match = new Autolinker.match.Url( {
					matchedText : matchStr,
					url : matchStr,
					protocolUrlMatch : !!protocolUrlMatch,
					protocolRelativeMatch : !!protocolRelativeMatch,
					stripPrefix : this.stripPrefix
				} );
			}

			return {
				prefixStr : prefixStr,
				suffixStr : suffixStr,
				matchStr  : matchStr,
				match     : match
			};
		},


		/**
		 * Determines if a match found has an unmatched closing parenthesis. If so, this parenthesis will be removed
		 * from the match itself, and appended after the generated anchor tag in {@link #processTextNode}.
		 * 
		 * A match may have an extra closing parenthesis at the end of the match because the regular expression must include parenthesis
		 * for URLs such as "wikipedia.com/something_(disambiguation)", which should be auto-linked. 
		 * 
		 * However, an extra parenthesis *will* be included when the URL itself is wrapped in parenthesis, such as in the case of
		 * "(wikipedia.com/something_(disambiguation))". In this case, the last closing parenthesis should *not* be part of the URL 
		 * itself, and this method will return `true`.
		 * 
		 * @private
		 * @param {String} matchStr The full match string from the {@link #matcherRegex}.
		 * @return {Boolean} `true` if there is an unbalanced closing parenthesis at the end of the `matchStr`, `false` otherwise.
		 */
		matchHasUnbalancedClosingParen : function( matchStr ) {
			var lastChar = matchStr.charAt( matchStr.length - 1 );

			if( lastChar === ')' ) {
				var openParensMatch = matchStr.match( /\(/g ),
				    closeParensMatch = matchStr.match( /\)/g ),
				    numOpenParens = ( openParensMatch && openParensMatch.length ) || 0,
				    numCloseParens = ( closeParensMatch && closeParensMatch.length ) || 0;

				if( numOpenParens < numCloseParens ) {
					return true;
				}
			}

			return false;
		},


		/**
		 * Creates the return string value for a given match in the input string, for the {@link #processTextNode} method.
		 * 
		 * This method handles the {@link #replaceFn}, if one was provided.
		 * 
		 * @private
		 * @param {Autolinker.match.Match} match The Match object that represents the match.
		 * @param {String} matchStr The original match string, after having been preprocessed to fix match edge cases (see
		 *   the `prefixStr` and `suffixStr` vars in {@link #processTextNode}.
		 * @return {String} The string that the `match` should be replaced with. This is usually the anchor tag string, but
		 *   may be the `matchStr` itself if the match is not to be replaced.
		 */
		createMatchReturnVal : function( match, matchStr ) {
			// Handle a custom `replaceFn` being provided
			var replaceFnResult;
			if( this.replaceFn ) {
				replaceFnResult = this.replaceFn.call( this, this, match );  // Autolinker instance is the context, and the first arg
			}

			if( typeof replaceFnResult === 'string' ) {
				return replaceFnResult;  // `replaceFn` returned a string, use that

			} else if( replaceFnResult === false ) {
				return matchStr;  // no replacement for the match

			} else if( replaceFnResult instanceof Autolinker.HtmlTag ) {
				return replaceFnResult.toString();

			} else {  // replaceFnResult === true, or no/unknown return value from function
				// Perform Autolinker's default anchor tag generation
				var tagBuilder = this.getTagBuilder(),
				    anchorTag = tagBuilder.build( match );  // returns an Autolinker.HtmlTag instance

				return anchorTag.toString();
			}
		}

	};


	/**
	 * Automatically links URLs, email addresses, and Twitter handles found in the given chunk of HTML. 
	 * Does not link URLs found within HTML tags.
	 * 
	 * For instance, if given the text: `You should go to http://www.yahoo.com`, then the result
	 * will be `You should go to &lt;a href="http://www.yahoo.com"&gt;http://www.yahoo.com&lt;/a&gt;`
	 * 
	 * Example:
	 * 
	 *     var linkedText = Autolinker.link( "Go to google.com", { newWindow: false } );
	 *     // Produces: "Go to <a href="http://google.com">google.com</a>"
	 * 
	 * @static
	 * @param {String} textOrHtml The HTML or text to find URLs, email addresses, and Twitter handles within (depending on if
	 *   the {@link #urls}, {@link #email}, and {@link #twitter} options are enabled).
	 * @param {Object} [options] Any of the configuration options for the Autolinker class, specified in an Object (map).
	 *   See the class description for an example call.
	 * @return {String} The HTML text, with URLs automatically linked
	 */
	Autolinker.link = function( textOrHtml, options ) {
		var autolinker = new Autolinker( options );
		return autolinker.link( textOrHtml );
	};


	// Namespace for `match` classes
	Autolinker.match = {};
	/*global Autolinker */
	/*jshint eqnull:true, boss:true */
	/**
	 * @class Autolinker.Util
	 * @singleton
	 * 
	 * A few utility methods for Autolinker.
	 */
	Autolinker.Util = {

		/**
		 * @property {Function} abstractMethod
		 * 
		 * A function object which represents an abstract method.
		 */
		abstractMethod : function() { throw "abstract"; },


		/**
		 * Assigns (shallow copies) the properties of `src` onto `dest`.
		 * 
		 * @param {Object} dest The destination object.
		 * @param {Object} src The source object.
		 * @return {Object} The destination object (`dest`)
		 */
		assign : function( dest, src ) {
			for( var prop in src ) {
				if( src.hasOwnProperty( prop ) ) {
					dest[ prop ] = src[ prop ];
				}
			}

			return dest;
		},


		/**
		 * Extends `superclass` to create a new subclass, adding the `protoProps` to the new subclass's prototype.
		 * 
		 * @param {Function} superclass The constructor function for the superclass.
		 * @param {Object} protoProps The methods/properties to add to the subclass's prototype. This may contain the
		 *   special property `constructor`, which will be used as the new subclass's constructor function.
		 * @return {Function} The new subclass function.
		 */
		extend : function( superclass, protoProps ) {
			var superclassProto = superclass.prototype;

			var F = function() {};
			F.prototype = superclassProto;

			var subclass;
			if( protoProps.hasOwnProperty( 'constructor' ) ) {
				subclass = protoProps.constructor;
			} else {
				subclass = function() { superclassProto.constructor.apply( this, arguments ); };
			}

			var subclassProto = subclass.prototype = new F();  // set up prototype chain
			subclassProto.constructor = subclass;  // fix constructor property
			subclassProto.superclass = superclassProto;

			delete protoProps.constructor;  // don't re-assign constructor property to the prototype, since a new function may have been created (`subclass`), which is now already there
			Autolinker.Util.assign( subclassProto, protoProps );

			return subclass;
		},


		/**
		 * Truncates the `str` at `len - ellipsisChars.length`, and adds the `ellipsisChars` to the
		 * end of the string (by default, two periods: '..'). If the `str` length does not exceed 
		 * `len`, the string will be returned unchanged.
		 * 
		 * @param {String} str The string to truncate and add an ellipsis to.
		 * @param {Number} truncateLen The length to truncate the string at.
		 * @param {String} [ellipsisChars=..] The ellipsis character(s) to add to the end of `str`
		 *   when truncated. Defaults to '..'
		 */
		ellipsis : function( str, truncateLen, ellipsisChars ) {
			if( str.length > truncateLen ) {
				ellipsisChars = ( ellipsisChars == null ) ? '..' : ellipsisChars;
				str = str.substring( 0, truncateLen - ellipsisChars.length ) + ellipsisChars;
			}
			return str;
		},


		/**
		 * Supports `Array.prototype.indexOf()` functionality for old IE (IE8 and below).
		 * 
		 * @param {Array} arr The array to find an element of.
		 * @param {*} element The element to find in the array, and return the index of.
		 * @return {Number} The index of the `element`, or -1 if it was not found.
		 */
		indexOf : function( arr, element ) {
			if( Array.prototype.indexOf ) {
				return arr.indexOf( element );

			} else {
				for( var i = 0, len = arr.length; i < len; i++ ) {
					if( arr[ i ] === element ) return i;
				}
				return -1;
			}
		},



		/**
		 * Performs the functionality of what modern browsers do when `String.prototype.split()` is called
		 * with a regular expression that contains capturing parenthesis.
		 * 
		 * For example:
		 * 
		 *     // Modern browsers: 
		 *     "a,b,c".split( /(,)/ );  // --> [ 'a', ',', 'b', ',', 'c' ]
		 *     
		 *     // Old IE (including IE8):
		 *     "a,b,c".split( /(,)/ );  // --> [ 'a', 'b', 'c' ]
		 *     
		 * This method emulates the functionality of modern browsers for the old IE case.
		 * 
		 * @param {String} str The string to split.
		 * @param {RegExp} splitRegex The regular expression to split the input `str` on. The splitting
		 *   character(s) will be spliced into the array, as in the "modern browsers" example in the 
		 *   description of this method. 
		 *   Note #1: the supplied regular expression **must** have the 'g' flag specified.
		 *   Note #2: for simplicity's sake, the regular expression does not need 
		 *   to contain capturing parenthesis - it will be assumed that any match has them.
		 * @return {String[]} The split array of strings, with the splitting character(s) included.
		 */
		splitAndCapture : function( str, splitRegex ) {
			if( !splitRegex.global ) throw new Error( "`splitRegex` must have the 'g' flag set" );

			var result = [],
			    lastIdx = 0,
			    match;

			while( match = splitRegex.exec( str ) ) {
				result.push( str.substring( lastIdx, match.index ) );
				result.push( match[ 0 ] );  // push the splitting char(s)

				lastIdx = match.index + match[ 0 ].length;
			}
			result.push( str.substring( lastIdx ) );

			return result;
		}

	};
	/*global Autolinker */
	/**
	 * @private
	 * @class Autolinker.HtmlParser
	 * @extends Object
	 * 
	 * An HTML parser implementation which simply walks an HTML string and calls the provided visitor functions to process 
	 * HTML and text nodes.
	 * 
	 * Autolinker uses this to only link URLs/emails/Twitter handles within text nodes, basically ignoring HTML tags.
	 */
	Autolinker.HtmlParser = Autolinker.Util.extend( Object, {

		/**
		 * @private
		 * @property {RegExp} htmlRegex
		 * 
		 * The regular expression used to pull out HTML tags from a string. Handles namespaced HTML tags and
		 * attribute names, as specified by http://www.w3.org/TR/html-markup/syntax.html.
		 * 
		 * Capturing groups:
		 * 
		 * 1. The "!DOCTYPE" tag name, if a tag is a &lt;!DOCTYPE&gt; tag.
		 * 2. If it is an end tag, this group will have the '/'.
		 * 3. The tag name for all tags (other than the &lt;!DOCTYPE&gt; tag)
		 */
		htmlRegex : (function() {
			var tagNameRegex = /[0-9a-zA-Z][0-9a-zA-Z:]*/,
			    attrNameRegex = /[^\s\0"'>\/=\x01-\x1F\x7F]+/,   // the unicode range accounts for excluding control chars, and the delete char
			    attrValueRegex = /(?:"[^"]*?"|'[^']*?'|[^'"=<>`\s]+)/, // double quoted, single quoted, or unquoted attribute values
			    nameEqualsValueRegex = attrNameRegex.source + '(?:\\s*=\\s*' + attrValueRegex.source + ')?';  // optional '=[value]'

			return new RegExp( [
				// for <!DOCTYPE> tag. Ex: <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">) 
				'(?:',
					'<(!DOCTYPE)',  // *** Capturing Group 1 - If it's a doctype tag

						// Zero or more attributes following the tag name
						'(?:',
							'\\s+',  // one or more whitespace chars before an attribute

							// Either:
							// A. attr="value", or 
							// B. "value" alone (To cover example doctype tag: <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">) 
							'(?:', nameEqualsValueRegex, '|', attrValueRegex.source + ')',
						')*',
					'>',
				')',

				'|',

				// All other HTML tags (i.e. tags that are not <!DOCTYPE>)
				'(?:',
					'<(/)?',  // Beginning of a tag. Either '<' for a start tag, or '</' for an end tag. 
					          // *** Capturing Group 2: The slash or an empty string. Slash ('/') for end tag, empty string for start or self-closing tag.

						// *** Capturing Group 3 - The tag name
						'(' + tagNameRegex.source + ')',

						// Zero or more attributes following the tag name
						'(?:',
							'\\s+',                // one or more whitespace chars before an attribute
							nameEqualsValueRegex,  // attr="value" (with optional ="value" part)
						')*',

						'\\s*/?',  // any trailing spaces and optional '/' before the closing '>'
					'>',
				')'
			].join( "" ), 'gi' );
		} )(),


		/**
		 * Walks an HTML string, calling the `options.processHtmlNode` function for each HTML tag that is encountered, and calling
		 * the `options.processTextNode` function when each text around HTML tags is encountered.
		 * 
		 * @param {String} html The HTML to parse.
		 * @param {Object} [options] An Object (map) which may contain the following properties:
		 * 
		 * @param {Function} [options.processHtmlNode] A visitor function which allows processing of an encountered HTML node.
		 *   This function is called with the following arguments:
		 * @param {String} [options.processHtmlNode.tagText] The HTML tag text that was found.
		 * @param {String} [options.processHtmlNode.tagName] The tag name for the HTML tag that was found. Ex: 'a' for an anchor tag.
		 * @param {String} [options.processHtmlNode.isClosingTag] `true` if the tag is a closing tag (ex: &lt;/a&gt;), `false` otherwise.
		 *  
		 * @param {Function} [options.processTextNode] A visitor function which allows processing of an encountered text node.
		 *   This function is called with the following arguments:
		 * @param {String} [options.processTextNode.text] The text node that was matched.
		 */
		parse : function( html, options ) {
			options = options || {};

			var processHtmlNodeVisitor = options.processHtmlNode || function() {},
			    processTextNodeVisitor = options.processTextNode || function() {},
			    htmlRegex = this.htmlRegex,
			    currentResult,
			    lastIndex = 0;

			// Loop over the HTML string, ignoring HTML tags, and processing the text that lies between them,
			// wrapping the URLs in anchor tags
			while( ( currentResult = htmlRegex.exec( html ) ) !== null ) {
				var tagText = currentResult[ 0 ],
				    tagName = currentResult[ 1 ] || currentResult[ 3 ],  // The <!DOCTYPE> tag (ex: "!DOCTYPE"), or another tag (ex: "a") 
				    isClosingTag = !!currentResult[ 2 ],
				    inBetweenTagsText = html.substring( lastIndex, currentResult.index );

				if( inBetweenTagsText ) {
					processTextNodeVisitor( inBetweenTagsText );
				}

				processHtmlNodeVisitor( tagText, tagName.toLowerCase(), isClosingTag );

				lastIndex = currentResult.index + tagText.length;
			}

			// Process any remaining text after the last HTML element. Will process all of the text if there were no HTML elements.
			if( lastIndex < html.length ) {
				var text = html.substring( lastIndex );

				if( text ) {
					processTextNodeVisitor( text );
				}
			}
		}

	} );
	/*global Autolinker */
	/*jshint boss:true */
	/**
	 * @class Autolinker.HtmlTag
	 * @extends Object
	 * 
	 * Represents an HTML tag, which can be used to easily build/modify HTML tags programmatically.
	 * 
	 * Autolinker uses this abstraction to create HTML tags, and then write them out as strings. You may also use
	 * this class in your code, especially within a {@link Autolinker#replaceFn replaceFn}.
	 * 
	 * ## Examples
	 * 
	 * Example instantiation:
	 * 
	 *     var tag = new Autolinker.HtmlTag( {
	 *         tagName : 'a',
	 *         attrs   : { 'href': 'http://google.com', 'class': 'external-link' },
	 *         innerHtml : 'Google'
	 *     } );
	 *     
	 *     tag.toString();  // <a href="http://google.com" class="external-link">Google</a>
	 *     
	 *     // Individual accessor methods
	 *     tag.getTagName();                 // 'a'
	 *     tag.getAttr( 'href' );            // 'http://google.com'
	 *     tag.hasClass( 'external-link' );  // true
	 * 
	 * 
	 * Using mutator methods (which may be used in combination with instantiation config properties):
	 * 
	 *     var tag = new Autolinker.HtmlTag();
	 *     tag.setTagName( 'a' );
	 *     tag.setAttr( 'href', 'http://google.com' );
	 *     tag.addClass( 'external-link' );
	 *     tag.setInnerHtml( 'Google' );
	 *     
	 *     tag.getTagName();                 // 'a'
	 *     tag.getAttr( 'href' );            // 'http://google.com'
	 *     tag.hasClass( 'external-link' );  // true
	 *     
	 *     tag.toString();  // <a href="http://google.com" class="external-link">Google</a>
	 *     
	 * 
	 * ## Example use within a {@link Autolinker#replaceFn replaceFn}
	 * 
	 *     var html = Autolinker.link( "Test google.com", {
	 *         replaceFn : function( autolinker, match ) {
	 *             var tag = autolinker.getTagBuilder().build( match );  // returns an {@link Autolinker.HtmlTag} instance, configured with the Match's href and anchor text
	 *             tag.setAttr( 'rel', 'nofollow' );
	 *             
	 *             return tag;
	 *         }
	 *     } );
	 *     
	 *     // generated html:
	 *     //   Test <a href="http://google.com" target="_blank" rel="nofollow">google.com</a>
	 *     
	 *     
	 * ## Example use with a new tag for the replacement
	 * 
	 *     var html = Autolinker.link( "Test google.com", {
	 *         replaceFn : function( autolinker, match ) {
	 *             var tag = new Autolinker.HtmlTag( {
	 *                 tagName : 'button',
	 *                 attrs   : { 'title': 'Load URL: ' + match.getAnchorHref() },
	 *                 innerHtml : 'Load URL: ' + match.getAnchorText()
	 *             } );
	 *             
	 *             return tag;
	 *         }
	 *     } );
	 *     
	 *     // generated html:
	 *     //   Test <button title="Load URL: http://google.com">Load URL: google.com</button>
	 */
	Autolinker.HtmlTag = Autolinker.Util.extend( Object, {

		/**
		 * @cfg {String} tagName
		 * 
		 * The tag name. Ex: 'a', 'button', etc.
		 * 
		 * Not required at instantiation time, but should be set using {@link #setTagName} before {@link #toString}
		 * is executed.
		 */

		/**
		 * @cfg {Object.<String, String>} attrs
		 * 
		 * An key/value Object (map) of attributes to create the tag with. The keys are the attribute names, and the
		 * values are the attribute values.
		 */

		/**
		 * @cfg {String} innerHtml
		 * 
		 * The inner HTML for the tag. 
		 * 
		 * Note the camel case name on `innerHtml`. Acronyms are camelCased in this utility (such as not to run into the acronym 
		 * naming inconsistency that the DOM developers created with `XMLHttpRequest`). You may alternatively use {@link #innerHTML}
		 * if you prefer, but this one is recommended.
		 */

		/**
		 * @cfg {String} innerHTML
		 * 
		 * Alias of {@link #innerHtml}, accepted for consistency with the browser DOM api, but prefer the camelCased version
		 * for acronym names.
		 */


		/**
		 * @protected
		 * @property {RegExp} whitespaceRegex
		 * 
		 * Regular expression used to match whitespace in a string of CSS classes.
		 */
		whitespaceRegex : /\s+/,


		/**
		 * @constructor
		 * @param {Object} [cfg] The configuration properties for this class, in an Object (map)
		 */
		constructor : function( cfg ) {
			Autolinker.Util.assign( this, cfg );

			this.innerHtml = this.innerHtml || this.innerHTML;  // accept either the camelCased form or the fully capitalized acronym
		},


		/**
		 * Sets the tag name that will be used to generate the tag with.
		 * 
		 * @param {String} tagName
		 * @return {Autolinker.HtmlTag} This HtmlTag instance, so that method calls may be chained.
		 */
		setTagName : function( tagName ) {
			this.tagName = tagName;
			return this;
		},


		/**
		 * Retrieves the tag name.
		 * 
		 * @return {String}
		 */
		getTagName : function() {
			return this.tagName || "";
		},


		/**
		 * Sets an attribute on the HtmlTag.
		 * 
		 * @param {String} attrName The attribute name to set.
		 * @param {String} attrValue The attribute value to set.
		 * @return {Autolinker.HtmlTag} This HtmlTag instance, so that method calls may be chained.
		 */
		setAttr : function( attrName, attrValue ) {
			var tagAttrs = this.getAttrs();
			tagAttrs[ attrName ] = attrValue;

			return this;
		},


		/**
		 * Retrieves an attribute from the HtmlTag. If the attribute does not exist, returns `undefined`.
		 * 
		 * @param {String} name The attribute name to retrieve.
		 * @return {String} The attribute's value, or `undefined` if it does not exist on the HtmlTag.
		 */
		getAttr : function( attrName ) {
			return this.getAttrs()[ attrName ];
		},


		/**
		 * Sets one or more attributes on the HtmlTag.
		 * 
		 * @param {Object.<String, String>} attrs A key/value Object (map) of the attributes to set.
		 * @return {Autolinker.HtmlTag} This HtmlTag instance, so that method calls may be chained.
		 */
		setAttrs : function( attrs ) {
			var tagAttrs = this.getAttrs();
			Autolinker.Util.assign( tagAttrs, attrs );

			return this;
		},


		/**
		 * Retrieves the attributes Object (map) for the HtmlTag.
		 * 
		 * @return {Object.<String, String>} A key/value object of the attributes for the HtmlTag.
		 */
		getAttrs : function() {
			return this.attrs || ( this.attrs = {} );
		},


		/**
		 * Sets the provided `cssClass`, overwriting any current CSS classes on the HtmlTag.
		 * 
		 * @param {String} cssClass One or more space-separated CSS classes to set (overwrite).
		 * @return {Autolinker.HtmlTag} This HtmlTag instance, so that method calls may be chained.
		 */
		setClass : function( cssClass ) {
			return this.setAttr( 'class', cssClass );
		},


		/**
		 * Convenience method to add one or more CSS classes to the HtmlTag. Will not add duplicate CSS classes.
		 * 
		 * @param {String} cssClass One or more space-separated CSS classes to add.
		 * @return {Autolinker.HtmlTag} This HtmlTag instance, so that method calls may be chained.
		 */
		addClass : function( cssClass ) {
			var classAttr = this.getClass(),
			    whitespaceRegex = this.whitespaceRegex,
			    indexOf = Autolinker.Util.indexOf,  // to support IE8 and below
			    classes = ( !classAttr ) ? [] : classAttr.split( whitespaceRegex ),
			    newClasses = cssClass.split( whitespaceRegex ),
			    newClass;

			while( newClass = newClasses.shift() ) {
				if( indexOf( classes, newClass ) === -1 ) {
					classes.push( newClass );
				}
			}

			this.getAttrs()[ 'class' ] = classes.join( " " );
			return this;
		},


		/**
		 * Convenience method to remove one or more CSS classes from the HtmlTag.
		 * 
		 * @param {String} cssClass One or more space-separated CSS classes to remove.
		 * @return {Autolinker.HtmlTag} This HtmlTag instance, so that method calls may be chained.
		 */
		removeClass : function( cssClass ) {
			var classAttr = this.getClass(),
			    whitespaceRegex = this.whitespaceRegex,
			    indexOf = Autolinker.Util.indexOf,  // to support IE8 and below
			    classes = ( !classAttr ) ? [] : classAttr.split( whitespaceRegex ),
			    removeClasses = cssClass.split( whitespaceRegex ),
			    removeClass;

			while( classes.length && ( removeClass = removeClasses.shift() ) ) {
				var idx = indexOf( classes, removeClass );
				if( idx !== -1 ) {
					classes.splice( idx, 1 );
				}
			}

			this.getAttrs()[ 'class' ] = classes.join( " " );
			return this;
		},


		/**
		 * Convenience method to retrieve the CSS class(es) for the HtmlTag, which will each be separated by spaces when
		 * there are multiple.
		 * 
		 * @return {String}
		 */
		getClass : function() {
			return this.getAttrs()[ 'class' ] || "";
		},


		/**
		 * Convenience method to check if the tag has a CSS class or not.
		 * 
		 * @param {String} cssClass The CSS class to check for.
		 * @return {Boolean} `true` if the HtmlTag has the CSS class, `false` otherwise.
		 */
		hasClass : function( cssClass ) {
			return ( ' ' + this.getClass() + ' ' ).indexOf( ' ' + cssClass + ' ' ) !== -1;
		},


		/**
		 * Sets the inner HTML for the tag.
		 * 
		 * @param {String} html The inner HTML to set.
		 * @return {Autolinker.HtmlTag} This HtmlTag instance, so that method calls may be chained.
		 */
		setInnerHtml : function( html ) {
			this.innerHtml = html;

			return this;
		},


		/**
		 * Retrieves the inner HTML for the tag.
		 * 
		 * @return {String}
		 */
		getInnerHtml : function() {
			return this.innerHtml || "";
		},


		/**
		 * Override of superclass method used to generate the HTML string for the tag.
		 * 
		 * @return {String}
		 */
		toString : function() {
			var tagName = this.getTagName(),
			    attrsStr = this.buildAttrsStr();

			attrsStr = ( attrsStr ) ? ' ' + attrsStr : '';  // prepend a space if there are actually attributes

			return [ '<', tagName, attrsStr, '>', this.getInnerHtml(), '</', tagName, '>' ].join( "" );
		},


		/**
		 * Support method for {@link #toString}, returns the string space-separated key="value" pairs, used to populate 
		 * the stringified HtmlTag.
		 * 
		 * @protected
		 * @return {String} Example return: `attr1="value1" attr2="value2"`
		 */
		buildAttrsStr : function() {
			if( !this.attrs ) return "";  // no `attrs` Object (map) has been set, return empty string

			var attrs = this.getAttrs(),
			    attrsArr = [];

			for( var prop in attrs ) {
				if( attrs.hasOwnProperty( prop ) ) {
					attrsArr.push( prop + '="' + attrs[ prop ] + '"' );
				}
			}
			return attrsArr.join( " " );
		}

	} );
	/*global Autolinker */
	/*jshint scripturl:true */
	/**
	 * @private
	 * @class Autolinker.MatchValidator
	 * @extends Object
	 * 
	 * Used by Autolinker to filter out false positives from the {@link Autolinker#matcherRegex}.
	 * 
	 * Due to the limitations of regular expressions (including the missing feature of look-behinds in JS regular expressions),
	 * we cannot always determine the validity of a given match. This class applies a bit of additional logic to filter out any
	 * false positives that have been matched by the {@link Autolinker#matcherRegex}.
	 */
	Autolinker.MatchValidator = Autolinker.Util.extend( Object, {

		/**
		 * @private
		 * @property {RegExp} invalidProtocolRelMatchRegex
		 * 
		 * The regular expression used to check a potential protocol-relative URL match, coming from the 
		 * {@link Autolinker#matcherRegex}. A protocol-relative URL is, for example, "//yahoo.com"
		 * 
		 * This regular expression checks to see if there is a word character before the '//' match in order to determine if 
		 * we should actually autolink a protocol-relative URL. This is needed because there is no negative look-behind in 
		 * JavaScript regular expressions. 
		 * 
		 * For instance, we want to autolink something like "Go to: //google.com", but we don't want to autolink something 
		 * like "abc//google.com"
		 */
		invalidProtocolRelMatchRegex : /^[\w]\/\//,

		/**
		 * Regex to test for a full protocol, with the two trailing slashes. Ex: 'http://'
		 * 
		 * @private
		 * @property {RegExp} hasFullProtocolRegex
		 */
		hasFullProtocolRegex : /^[A-Za-z][-.+A-Za-z0-9]+:\/\//,

		/**
		 * Regex to find the URI scheme, such as 'mailto:'.
		 * 
		 * This is used to filter out 'javascript:' and 'vbscript:' schemes.
		 * 
		 * @private
		 * @property {RegExp} uriSchemeRegex
		 */
		uriSchemeRegex : /^[A-Za-z][-.+A-Za-z0-9]+:/,

		/**
		 * Regex to determine if at least one word char exists after the protocol (i.e. after the ':')
		 * 
		 * @private
		 * @property {RegExp} hasWordCharAfterProtocolRegex
		 */
		hasWordCharAfterProtocolRegex : /:[^\s]*?[A-Za-z]/,


		/**
		 * Determines if a given match found by {@link Autolinker#processTextNode} is valid. Will return `false` for:
		 * 
		 * 1) URL matches which do not have at least have one period ('.') in the domain name (effectively skipping over 
		 *    matches like "abc:def"). However, URL matches with a protocol will be allowed (ex: 'http://localhost')
		 * 2) URL matches which do not have at least one word character in the domain name (effectively skipping over
		 *    matches like "git:1.0").
		 * 3) A protocol-relative url match (a URL beginning with '//') whose previous character is a word character 
		 *    (effectively skipping over strings like "abc//google.com")
		 * 
		 * Otherwise, returns `true`.
		 * 
		 * @param {String} urlMatch The matched URL, if there was one. Will be an empty string if the match is not a URL match.
		 * @param {String} protocolUrlMatch The match URL string for a protocol match. Ex: 'http://yahoo.com'. This is used to match
		 *   something like 'http://localhost', where we won't double check that the domain name has at least one '.' in it.
		 * @param {String} protocolRelativeMatch The protocol-relative string for a URL match (i.e. '//'), possibly with a preceding
		 *   character (ex, a space, such as: ' //', or a letter, such as: 'a//'). The match is invalid if there is a word character
		 *   preceding the '//'.
		 * @return {Boolean} `true` if the match given is valid and should be processed, or `false` if the match is invalid and/or 
		 *   should just not be processed.
		 */
		isValidMatch : function( urlMatch, protocolUrlMatch, protocolRelativeMatch ) {
			if(
				( protocolUrlMatch && !this.isValidUriScheme( protocolUrlMatch ) ) ||
				this.urlMatchDoesNotHaveProtocolOrDot( urlMatch, protocolUrlMatch ) ||       // At least one period ('.') must exist in the URL match for us to consider it an actual URL, *unless* it was a full protocol match (like 'http://localhost')
				this.urlMatchDoesNotHaveAtLeastOneWordChar( urlMatch, protocolUrlMatch ) ||  // At least one letter character must exist in the domain name after a protocol match. Ex: skip over something like "git:1.0"
				this.isInvalidProtocolRelativeMatch( protocolRelativeMatch )                 // A protocol-relative match which has a word character in front of it (so we can skip something like "abc//google.com")
			) {
				return false;
			}

			return true;
		},


		/**
		 * Determines if the URI scheme is a valid scheme to be autolinked. Returns `false` if the scheme is 
		 * 'javascript:' or 'vbscript:'
		 * 
		 * @private
		 * @param {String} uriSchemeMatch The match URL string for a full URI scheme match. Ex: 'http://yahoo.com' 
		 *   or 'mailto:a@a.com'.
		 * @return {Boolean} `true` if the scheme is a valid one, `false` otherwise.
		 */
		isValidUriScheme : function( uriSchemeMatch ) {
			var uriScheme = uriSchemeMatch.match( this.uriSchemeRegex )[ 0 ];

			return ( uriScheme !== 'javascript:' && uriScheme !== 'vbscript:' );
		},


		/**
		 * Determines if a URL match does not have either:
		 * 
		 * a) a full protocol (i.e. 'http://'), or
		 * b) at least one dot ('.') in the domain name (for a non-full-protocol match).
		 * 
		 * Either situation is considered an invalid URL (ex: 'git:d' does not have either the '://' part, or at least one dot
		 * in the domain name. If the match was 'git:abc.com', we would consider this valid.)
		 * 
		 * @private
		 * @param {String} urlMatch The matched URL, if there was one. Will be an empty string if the match is not a URL match.
		 * @param {String} protocolUrlMatch The match URL string for a protocol match. Ex: 'http://yahoo.com'. This is used to match
		 *   something like 'http://localhost', where we won't double check that the domain name has at least one '.' in it.
		 * @return {Boolean} `true` if the URL match does not have a full protocol, or at least one dot ('.') in a non-full-protocol
		 *   match.
		 */
		urlMatchDoesNotHaveProtocolOrDot : function( urlMatch, protocolUrlMatch ) {
			return ( !!urlMatch && ( !protocolUrlMatch || !this.hasFullProtocolRegex.test( protocolUrlMatch ) ) && urlMatch.indexOf( '.' ) === -1 );
		},


		/**
		 * Determines if a URL match does not have at least one word character after the protocol (i.e. in the domain name).
		 * 
		 * At least one letter character must exist in the domain name after a protocol match. Ex: skip over something 
		 * like "git:1.0"
		 * 
		 * @private
		 * @param {String} urlMatch The matched URL, if there was one. Will be an empty string if the match is not a URL match.
		 * @param {String} protocolUrlMatch The match URL string for a protocol match. Ex: 'http://yahoo.com'. This is used to
		 *   know whether or not we have a protocol in the URL string, in order to check for a word character after the protocol
		 *   separator (':').
		 * @return {Boolean} `true` if the URL match does not have at least one word character in it after the protocol, `false`
		 *   otherwise.
		 */
		urlMatchDoesNotHaveAtLeastOneWordChar : function( urlMatch, protocolUrlMatch ) {
			if( urlMatch && protocolUrlMatch ) {
				return !this.hasWordCharAfterProtocolRegex.test( urlMatch );
			} else {
				return false;
			}
		},


		/**
		 * Determines if a protocol-relative match is an invalid one. This method returns `true` if there is a `protocolRelativeMatch`,
		 * and that match contains a word character before the '//' (i.e. it must contain whitespace or nothing before the '//' in
		 * order to be considered valid).
		 * 
		 * @private
		 * @param {String} protocolRelativeMatch The protocol-relative string for a URL match (i.e. '//'), possibly with a preceding
		 *   character (ex, a space, such as: ' //', or a letter, such as: 'a//'). The match is invalid if there is a word character
		 *   preceding the '//'.
		 * @return {Boolean} `true` if it is an invalid protocol-relative match, `false` otherwise.
		 */
		isInvalidProtocolRelativeMatch : function( protocolRelativeMatch ) {
			return ( !!protocolRelativeMatch && this.invalidProtocolRelMatchRegex.test( protocolRelativeMatch ) );
		}

	} );
	/*global Autolinker */
	/*jshint sub:true */
	/**
	 * @protected
	 * @class Autolinker.AnchorTagBuilder
	 * @extends Object
	 * 
	 * Builds anchor (&lt;a&gt;) tags for the Autolinker utility when a match is found.
	 * 
	 * Normally this class is instantiated, configured, and used internally by an {@link Autolinker} instance, but may 
	 * actually be retrieved in a {@link Autolinker#replaceFn replaceFn} to create {@link Autolinker.HtmlTag HtmlTag} instances
	 * which may be modified before returning from the {@link Autolinker#replaceFn replaceFn}. For example:
	 * 
	 *     var html = Autolinker.link( "Test google.com", {
	 *         replaceFn : function( autolinker, match ) {
	 *             var tag = autolinker.getTagBuilder().build( match );  // returns an {@link Autolinker.HtmlTag} instance
	 *             tag.setAttr( 'rel', 'nofollow' );
	 *             
	 *             return tag;
	 *         }
	 *     } );
	 *     
	 *     // generated html:
	 *     //   Test <a href="http://google.com" target="_blank" rel="nofollow">google.com</a>
	 */
	Autolinker.AnchorTagBuilder = Autolinker.Util.extend( Object, {

		/**
		 * @cfg {Boolean} newWindow
		 * @inheritdoc Autolinker#newWindow
		 */

		/**
		 * @cfg {Number} truncate
		 * @inheritdoc Autolinker#truncate
		 */

		/**
		 * @cfg {String} className
		 * @inheritdoc Autolinker#className
		 */


		/**
		 * @constructor
		 * @param {Object} [cfg] The configuration options for the AnchorTagBuilder instance, specified in an Object (map).
		 */
		constructor : function( cfg ) {
			Autolinker.Util.assign( this, cfg );
		},


		/**
		 * Generates the actual anchor (&lt;a&gt;) tag to use in place of the matched URL/email/Twitter text,
		 * via its `match` object.
		 * 
		 * @param {Autolinker.match.Match} match The Match instance to generate an anchor tag from.
		 * @return {Autolinker.HtmlTag} The HtmlTag instance for the anchor tag.
		 */
		build : function( match ) {
			var tag = new Autolinker.HtmlTag( {
				tagName   : 'a',
				attrs     : this.createAttrs( match.getType(), match.getAnchorHref() ),
				innerHtml : this.processAnchorText( match.getAnchorText() )
			} );

			return tag;
		},


		/**
		 * Creates the Object (map) of the HTML attributes for the anchor (&lt;a&gt;) tag being generated.
		 * 
		 * @protected
		 * @param {"url"/"email"/"twitter"} matchType The type of match that an anchor tag is being generated for.
		 * @param {String} href The href for the anchor tag.
		 * @return {Object} A key/value Object (map) of the anchor tag's attributes. 
		 */
		createAttrs : function( matchType, anchorHref ) {
			var attrs = {
				'href' : anchorHref  // we'll always have the `href` attribute
			};

			var cssClass = this.createCssClass( matchType );
			if( cssClass ) {
				attrs[ 'class' ] = cssClass;
			}
			if( this.newWindow ) {
				attrs[ 'target' ] = "_blank";
			}

			return attrs;
		},


		/**
		 * Creates the CSS class that will be used for a given anchor tag, based on the `matchType` and the {@link #className}
		 * config.
		 * 
		 * @private
		 * @param {"url"/"email"/"twitter"} matchType The type of match that an anchor tag is being generated for.
		 * @return {String} The CSS class string for the link. Example return: "myLink myLink-url". If no {@link #className}
		 *   was configured, returns an empty string.
		 */
		createCssClass : function( matchType ) {
			var className = this.className;

			if( !className ) 
				return "";
			else
				return className + " " + className + "-" + matchType;  // ex: "myLink myLink-url", "myLink myLink-email", or "myLink myLink-twitter"
		},


		/**
		 * Processes the `anchorText` by truncating the text according to the {@link #truncate} config.
		 * 
		 * @private
		 * @param {String} anchorText The anchor tag's text (i.e. what will be displayed).
		 * @return {String} The processed `anchorText`.
		 */
		processAnchorText : function( anchorText ) {
			anchorText = this.doTruncate( anchorText );

			return anchorText;
		},


		/**
		 * Performs the truncation of the `anchorText`, if the `anchorText` is longer than the {@link #truncate} option.
		 * Truncates the text to 2 characters fewer than the {@link #truncate} option, and adds ".." to the end.
		 * 
		 * @private
		 * @param {String} text The anchor tag's text (i.e. what will be displayed).
		 * @return {String} The truncated anchor text.
		 */
		doTruncate : function( anchorText ) {
			return Autolinker.Util.ellipsis( anchorText, this.truncate || Number.POSITIVE_INFINITY );
		}

	} );
	/*global Autolinker */
	/**
	 * @abstract
	 * @class Autolinker.match.Match
	 * 
	 * Represents a match found in an input string which should be Autolinked. A Match object is what is provided in a 
	 * {@link Autolinker#replaceFn replaceFn}, and may be used to query for details about the match.
	 * 
	 * For example:
	 * 
	 *     var input = "...";  // string with URLs, Email Addresses, and Twitter Handles
	 *     
	 *     var linkedText = Autolinker.link( input, {
	 *         replaceFn : function( autolinker, match ) {
	 *             console.log( "href = ", match.getAnchorHref() );
	 *             console.log( "text = ", match.getAnchorText() );
	 *         
	 *             switch( match.getType() ) {
	 *                 case 'url' : 
	 *                     console.log( "url: ", match.getUrl() );
	 *                     
	 *                 case 'email' :
	 *                     console.log( "email: ", match.getEmail() );
	 *                     
	 *                 case 'twitter' :
	 *                     console.log( "twitter: ", match.getTwitterHandle() );
	 *             }
	 *         }
	 *     } );
	 *     
	 * See the {@link Autolinker} class for more details on using the {@link Autolinker#replaceFn replaceFn}.
	 */
	Autolinker.match.Match = Autolinker.Util.extend( Object, {

		/**
		 * @cfg {String} matchedText (required)
		 * 
		 * The original text that was matched.
		 */


		/**
		 * @constructor
		 * @param {Object} cfg The configuration properties for the Match instance, specified in an Object (map).
		 */
		constructor : function( cfg ) {
			Autolinker.Util.assign( this, cfg );
		},


		/**
		 * Returns a string name for the type of match that this class represents.
		 * 
		 * @abstract
		 * @return {String}
		 */
		getType : Autolinker.Util.abstractMethod,


		/**
		 * Returns the original text that was matched.
		 * 
		 * @return {String}
		 */
		getMatchedText : function() {
			return this.matchedText;
		},


		/**
		 * Returns the anchor href that should be generated for the match.
		 * 
		 * @abstract
		 * @return {String}
		 */
		getAnchorHref : Autolinker.Util.abstractMethod,


		/**
		 * Returns the anchor text that should be generated for the match.
		 * 
		 * @abstract
		 * @return {String}
		 */
		getAnchorText : Autolinker.Util.abstractMethod

	} );
	/*global Autolinker */
	/**
	 * @class Autolinker.match.Email
	 * @extends Autolinker.match.Match
	 * 
	 * Represents a Email match found in an input string which should be Autolinked.
	 * 
	 * See this class's superclass ({@link Autolinker.match.Match}) for more details.
	 */
	Autolinker.match.Email = Autolinker.Util.extend( Autolinker.match.Match, {

		/**
		 * @cfg {String} email (required)
		 * 
		 * The email address that was matched.
		 */


		/**
		 * Returns a string name for the type of match that this class represents.
		 * 
		 * @return {String}
		 */
		getType : function() {
			return 'email';
		},


		/**
		 * Returns the email address that was matched.
		 * 
		 * @return {String}
		 */
		getEmail : function() {
			return this.email;
		},


		/**
		 * Returns the anchor href that should be generated for the match.
		 * 
		 * @return {String}
		 */
		getAnchorHref : function() {
			return 'mailto:' + this.email;
		},


		/**
		 * Returns the anchor text that should be generated for the match.
		 * 
		 * @return {String}
		 */
		getAnchorText : function() {
			return this.email;
		}

	} );
	/*global Autolinker */
	/**
	 * @class Autolinker.match.Twitter
	 * @extends Autolinker.match.Match
	 * 
	 * Represents a Twitter match found in an input string which should be Autolinked.
	 * 
	 * See this class's superclass ({@link Autolinker.match.Match}) for more details.
	 */
	Autolinker.match.Twitter = Autolinker.Util.extend( Autolinker.match.Match, {

		/**
		 * @cfg {String} twitterHandle (required)
		 * 
		 * The Twitter handle that was matched.
		 */


		/**
		 * Returns the type of match that this class represents.
		 * 
		 * @return {String}
		 */
		getType : function() {
			return 'twitter';
		},


		/**
		 * Returns a string name for the type of match that this class represents.
		 * 
		 * @return {String}
		 */
		getTwitterHandle : function() {
			return this.twitterHandle;
		},


		/**
		 * Returns the anchor href that should be generated for the match.
		 * 
		 * @return {String}
		 */
		getAnchorHref : function() {
			return 'https://twitter.com/' + this.twitterHandle;
		},


		/**
		 * Returns the anchor text that should be generated for the match.
		 * 
		 * @return {String}
		 */
		getAnchorText : function() {
			return '@' + this.twitterHandle;
		}

	} );
	/*global Autolinker */
	/**
	 * @class Autolinker.match.Url
	 * @extends Autolinker.match.Match
	 * 
	 * Represents a Url match found in an input string which should be Autolinked.
	 * 
	 * See this class's superclass ({@link Autolinker.match.Match}) for more details.
	 */
	Autolinker.match.Url = Autolinker.Util.extend( Autolinker.match.Match, {

		/**
		 * @cfg {String} url (required)
		 * 
		 * The url that was matched.
		 */

		/**
		 * @cfg {Boolean} protocolUrlMatch (required)
		 * 
		 * `true` if the URL is a match which already has a protocol (i.e. 'http://'), `false` if the match was from a 'www' or
		 * known TLD match.
		 */

		/**
		 * @cfg {Boolean} protocolRelativeMatch (required)
		 * 
		 * `true` if the URL is a protocol-relative match. A protocol-relative match is a URL that starts with '//',
		 * and will be either http:// or https:// based on the protocol that the site is loaded under.
		 */

		/**
		 * @cfg {Boolean} stripPrefix (required)
		 * @inheritdoc Autolinker#stripPrefix
		 */


		/**
		 * @private
		 * @property {RegExp} urlPrefixRegex
		 * 
		 * A regular expression used to remove the 'http://' or 'https://' and/or the 'www.' from URLs.
		 */
		urlPrefixRegex: /^(https?:\/\/)?(www\.)?/i,

		/**
		 * @private
		 * @property {RegExp} protocolRelativeRegex
		 * 
		 * The regular expression used to remove the protocol-relative '//' from the {@link #url} string, for purposes
		 * of {@link #getAnchorText}. A protocol-relative URL is, for example, "//yahoo.com"
		 */
		protocolRelativeRegex : /^\/\//,

		/**
		 * @private
		 * @property {Boolean} protocolPrepended
		 * 
		 * Will be set to `true` if the 'http://' protocol has been prepended to the {@link #url} (because the
		 * {@link #url} did not have a protocol)
		 */
		protocolPrepended : false,


		/**
		 * Returns a string name for the type of match that this class represents.
		 * 
		 * @return {String}
		 */
		getType : function() {
			return 'url';
		},


		/**
		 * Returns the url that was matched, assuming the protocol to be 'http://' if the original
		 * match was missing a protocol.
		 * 
		 * @return {String}
		 */
		getUrl : function() {
			var url = this.url;

			// if the url string doesn't begin with a protocol, assume 'http://'
			if( !this.protocolRelativeMatch && !this.protocolUrlMatch && !this.protocolPrepended ) {
				url = this.url = 'http://' + url;

				this.protocolPrepended = true;
			}

			return url;
		},


		/**
		 * Returns the anchor href that should be generated for the match.
		 * 
		 * @return {String}
		 */
		getAnchorHref : function() {
			var url = this.getUrl();

			return url.replace( /&amp;/g, '&' );  // any &amp;'s in the URL should be converted back to '&' if they were displayed as &amp; in the source html 
		},


		/**
		 * Returns the anchor text that should be generated for the match.
		 * 
		 * @return {String}
		 */
		getAnchorText : function() {
			var anchorText = this.getUrl();

			if( this.protocolRelativeMatch ) {
				// Strip off any protocol-relative '//' from the anchor text
				anchorText = this.stripProtocolRelativePrefix( anchorText );
			}
			if( this.stripPrefix ) {
				anchorText = this.stripUrlPrefix( anchorText );
			}
			anchorText = this.removeTrailingSlash( anchorText );  // remove trailing slash, if there is one

			return anchorText;
		},


		// ---------------------------------------

		// Utility Functionality

		/**
		 * Strips the URL prefix (such as "http://" or "https://") from the given text.
		 * 
		 * @private
		 * @param {String} text The text of the anchor that is being generated, for which to strip off the
		 *   url prefix (such as stripping off "http://")
		 * @return {String} The `anchorText`, with the prefix stripped.
		 */
		stripUrlPrefix : function( text ) {
			return text.replace( this.urlPrefixRegex, '' );
		},


		/**
		 * Strips any protocol-relative '//' from the anchor text.
		 * 
		 * @private
		 * @param {String} text The text of the anchor that is being generated, for which to strip off the
		 *   protocol-relative prefix (such as stripping off "//")
		 * @return {String} The `anchorText`, with the protocol-relative prefix stripped.
		 */
		stripProtocolRelativePrefix : function( text ) {
			return text.replace( this.protocolRelativeRegex, '' );
		},


		/**
		 * Removes any trailing slash from the given `anchorText`, in preparation for the text to be displayed.
		 * 
		 * @private
		 * @param {String} anchorText The text of the anchor that is being generated, for which to remove any trailing
		 *   slash ('/') that may exist.
		 * @return {String} The `anchorText`, with the trailing slash removed.
		 */
		removeTrailingSlash : function( anchorText ) {
			if( anchorText.charAt( anchorText.length - 1 ) === '/' ) {
				anchorText = anchorText.slice( 0, -1 );
			}
			return anchorText;
		}

	} );

	return Autolinker;


}));

},{}],63:[function(require,module,exports){

var Authentication = React.createClass({displayName: "Authentication",
  getInitialState: function () {
    return {
      username: this.props.username || null
    };
  },
  handleSubmit: function (e) {
    e.preventDefault();
    var username = this.refs.username.getDOMNode().value.trim();
    if (!username) {
      return;
    }
    this.setState({username: username});
    this.refs.username.getDOMNode().value = '';
    this.props.onSignonSubmit({username: username});
  },
  handleLogout: function (e) {
    e.preventDefault();
    var username = this.state.username;
    this.setState({username: null});
    this.props.onSignoutSubmit({username: username});
  },
  render: function() {
    var output = null;
    if (this.state.username) {
      output = (
        React.createElement("form", {className: "navbar-form navbar-right", onSubmit: this.handleLogout}, 
          React.createElement("div", {className: "form-group"}, 
            React.createElement("span", null, "Logged in as ", this.state.username)
          ), 
          React.createElement("button", {type: "submit", className: "btn btn-primary"}, "Sign out")
        )
      );
    } else {
      output = (
        React.createElement("form", {className: "navbar-form navbar-right", onSubmit: this.handleSubmit}, 
          React.createElement("div", {className: "form-group"}, 
            React.createElement("input", {type: "text", placeholder: "Name", className: "form-control", ref: "username"})
          ), 
          React.createElement("button", {type: "submit", className: "btn btn-primary"}, "Sign in")
        )
      );
    }
    return output;
  }
});

module.exports = Authentication;


},{}],64:[function(require,module,exports){

var Remarkable = require('remarkable');
var md = new Remarkable();

var Comment = React.createClass({displayName: "Comment",
  render: function() {
    var rawMarkup = md.render([
      '*',
      this.props.children.toString(),
      '*'
    ].join(''));
    return (
      React.createElement("div", {className: "comment"}, 
        React.createElement("h5", {className: "commentUser"}, this.props.username), 
        React.createElement("span", {dangerouslySetInnerHTML: {__html: rawMarkup}})
      )
    );
  }
});

// Create a form that allows adding a new comment
var CommentForm = React.createClass({displayName: "CommentForm",
  getInitialState: function () {
    return {
      username: this.props.username
    };
  },
  handleSubmit: function (e) {
    e.preventDefault();
    var username = this.state.username || this.props.username;
    var text = this.refs.text.getDOMNode().value.trim();
    console.log(username, text);
    if (!text || !username) {
      return;
    }
    this.props.onCommentSubmit({username: username, text: text});
    this.refs.text.getDOMNode().value = '';
  },
  render: function() {
    return (
      React.createElement("div", {className: "row"}, 
        React.createElement("div", {className: "col-sm-12"}, 
          React.createElement("form", {className: "commentForm", onSubmit: this.handleSubmit}, 
            React.createElement("input", {type: "text", placeholder: "Say something...", ref: "text"}), 
            React.createElement("input", {className: "btn btn.primary", type: "submit", value: "Send"})
          )
        )
      )
    );
  }
});

// Render a list of comments
var CommentList = React.createClass({displayName: "CommentList",
  render: function() {
    var commentNodes = this.props.comments.map(function (comment) {
      return (
        React.createElement(Comment, {key: comment.key, username: comment.username}, 
          comment.text
        )
      );
    });
    return (
      React.createElement("div", {className: "row"}, 
        React.createElement("div", {className: "col-sm-12"}, 
          commentNodes
        )
      )
    );
  }
});

var Chat = React.createClass({displayName: "Chat",
  loadCommentsFromServer: function () {
    // TODO: get from server
    var comments = this.state.comments;
    var username = this.state.username || this.props.username;
    this.setState({comments: comments, username: username});
  },
  handleCommentSubmit: function (comment) {
    var username = this.state.username || this.props.username;
    var comments = this.state.comments;
    var newComments = comments.concat([comment]);
    this.setState({username: username, comments: newComments});
  },
  getInitialState: function () {
    return {
      comments: this.props.comments || [],
      username: this.props.username
    };
  },
  componentDidMount: function () {
    this.loadCommentsFromServer();
    setInterval(this.loadCommentsFromServer, this.props.pollInterval);
  },
  render: function () {
    var username = this.state.username || this.props.username;
    return (
      React.createElement("div", null, 
        React.createElement(CommentList, {comments: this.state.comments}), 
        React.createElement(CommentForm, {onCommentSubmit: this.handleCommentSubmit, username: username})
      )
    );
  }
});

module.exports = Chat;


},{"remarkable":2}],65:[function(require,module,exports){

var UserList = React.createClass({displayName: "UserList",
  render: function () {
    return (
      React.createElement("div", null, "Nothing to see here")
    );
  }
});

module.exports = UserList;


},{}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvZG9vd2Ivd29yay9kb293Yi9zZXJ2ZXItc2lkZS1yZWFjdC9zcmMvY2xpZW50L21haW4uanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvcmVtYXJrYWJsZS9pbmRleC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9yZW1hcmthYmxlL2xpYi9jb21tb24vZW50aXRpZXMuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvcmVtYXJrYWJsZS9saWIvY29tbW9uL2h0bWxfYmxvY2tzLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL3JlbWFya2FibGUvbGliL2NvbW1vbi9odG1sX3JlLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL3JlbWFya2FibGUvbGliL2NvbW1vbi91cmxfc2NoZW1hcy5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9yZW1hcmthYmxlL2xpYi9jb21tb24vdXRpbHMuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvcmVtYXJrYWJsZS9saWIvY29uZmlncy9jb21tb25tYXJrLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL3JlbWFya2FibGUvbGliL2NvbmZpZ3MvZGVmYXVsdC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9yZW1hcmthYmxlL2xpYi9jb25maWdzL2Z1bGwuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvcmVtYXJrYWJsZS9saWIvaGVscGVycy9ub3JtYWxpemVfbGluay5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9yZW1hcmthYmxlL2xpYi9oZWxwZXJzL25vcm1hbGl6ZV9yZWZlcmVuY2UuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvcmVtYXJrYWJsZS9saWIvaGVscGVycy9wYXJzZV9saW5rX2Rlc3RpbmF0aW9uLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL3JlbWFya2FibGUvbGliL2hlbHBlcnMvcGFyc2VfbGlua19sYWJlbC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9yZW1hcmthYmxlL2xpYi9oZWxwZXJzL3BhcnNlX2xpbmtfdGl0bGUuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvcmVtYXJrYWJsZS9saWIvaW5kZXguanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvcmVtYXJrYWJsZS9saWIvcGFyc2VyX2Jsb2NrLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL3JlbWFya2FibGUvbGliL3BhcnNlcl9jb3JlLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL3JlbWFya2FibGUvbGliL3BhcnNlcl9pbmxpbmUuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvcmVtYXJrYWJsZS9saWIvcmVuZGVyZXIuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvcmVtYXJrYWJsZS9saWIvcnVsZXIuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvcmVtYXJrYWJsZS9saWIvcnVsZXMuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvcmVtYXJrYWJsZS9saWIvcnVsZXNfYmxvY2svYmxvY2txdW90ZS5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9yZW1hcmthYmxlL2xpYi9ydWxlc19ibG9jay9jb2RlLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL3JlbWFya2FibGUvbGliL3J1bGVzX2Jsb2NrL2RlZmxpc3QuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvcmVtYXJrYWJsZS9saWIvcnVsZXNfYmxvY2svZmVuY2VzLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL3JlbWFya2FibGUvbGliL3J1bGVzX2Jsb2NrL2Zvb3Rub3RlLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL3JlbWFya2FibGUvbGliL3J1bGVzX2Jsb2NrL2hlYWRpbmcuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvcmVtYXJrYWJsZS9saWIvcnVsZXNfYmxvY2svaHIuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvcmVtYXJrYWJsZS9saWIvcnVsZXNfYmxvY2svaHRtbGJsb2NrLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL3JlbWFya2FibGUvbGliL3J1bGVzX2Jsb2NrL2xoZWFkaW5nLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL3JlbWFya2FibGUvbGliL3J1bGVzX2Jsb2NrL2xpc3QuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvcmVtYXJrYWJsZS9saWIvcnVsZXNfYmxvY2svcGFyYWdyYXBoLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL3JlbWFya2FibGUvbGliL3J1bGVzX2Jsb2NrL3N0YXRlX2Jsb2NrLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL3JlbWFya2FibGUvbGliL3J1bGVzX2Jsb2NrL3RhYmxlLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL3JlbWFya2FibGUvbGliL3J1bGVzX2NvcmUvYWJici5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9yZW1hcmthYmxlL2xpYi9ydWxlc19jb3JlL2FiYnIyLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL3JlbWFya2FibGUvbGliL3J1bGVzX2NvcmUvYmxvY2suanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvcmVtYXJrYWJsZS9saWIvcnVsZXNfY29yZS9mb290bm90ZV90YWlsLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL3JlbWFya2FibGUvbGliL3J1bGVzX2NvcmUvaW5saW5lLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL3JlbWFya2FibGUvbGliL3J1bGVzX2NvcmUvbGlua2lmeS5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9yZW1hcmthYmxlL2xpYi9ydWxlc19jb3JlL3JlZmVyZW5jZXMuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvcmVtYXJrYWJsZS9saWIvcnVsZXNfY29yZS9yZXBsYWNlbWVudHMuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvcmVtYXJrYWJsZS9saWIvcnVsZXNfY29yZS9zbWFydHF1b3Rlcy5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9yZW1hcmthYmxlL2xpYi9ydWxlc19pbmxpbmUvYXV0b2xpbmsuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvcmVtYXJrYWJsZS9saWIvcnVsZXNfaW5saW5lL2JhY2t0aWNrcy5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9yZW1hcmthYmxlL2xpYi9ydWxlc19pbmxpbmUvZGVsLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL3JlbWFya2FibGUvbGliL3J1bGVzX2lubGluZS9lbXBoYXNpcy5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9yZW1hcmthYmxlL2xpYi9ydWxlc19pbmxpbmUvZW50aXR5LmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL3JlbWFya2FibGUvbGliL3J1bGVzX2lubGluZS9lc2NhcGUuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvcmVtYXJrYWJsZS9saWIvcnVsZXNfaW5saW5lL2Zvb3Rub3RlX2lubGluZS5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9yZW1hcmthYmxlL2xpYi9ydWxlc19pbmxpbmUvZm9vdG5vdGVfcmVmLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL3JlbWFya2FibGUvbGliL3J1bGVzX2lubGluZS9odG1sdGFnLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL3JlbWFya2FibGUvbGliL3J1bGVzX2lubGluZS9pbnMuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvcmVtYXJrYWJsZS9saWIvcnVsZXNfaW5saW5lL2xpbmtzLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL3JlbWFya2FibGUvbGliL3J1bGVzX2lubGluZS9tYXJrLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL3JlbWFya2FibGUvbGliL3J1bGVzX2lubGluZS9uZXdsaW5lLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL3JlbWFya2FibGUvbGliL3J1bGVzX2lubGluZS9zdGF0ZV9pbmxpbmUuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvcmVtYXJrYWJsZS9saWIvcnVsZXNfaW5saW5lL3N1Yi5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9yZW1hcmthYmxlL2xpYi9ydWxlc19pbmxpbmUvc3VwLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL3JlbWFya2FibGUvbGliL3J1bGVzX2lubGluZS90ZXh0LmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL3JlbWFya2FibGUvbm9kZV9tb2R1bGVzL2F1dG9saW5rZXIvZGlzdC9BdXRvbGlua2VyLmpzIiwiL1VzZXJzL2Rvb3diL3dvcmsvZG9vd2Ivc2VydmVyLXNpZGUtcmVhY3Qvc3JjL2NsaWVudC9hcHBzL0F1dGhlbnRpY2F0aW9uLmpzeCIsIi9Vc2Vycy9kb293Yi93b3JrL2Rvb3diL3NlcnZlci1zaWRlLXJlYWN0L3NyYy9jbGllbnQvYXBwcy9DaGF0LmpzeCIsIi9Vc2Vycy9kb293Yi93b3JrL2Rvb3diL3NlcnZlci1zaWRlLXJlYWN0L3NyYy9jbGllbnQvYXBwcy9Vc2VyTGlzdC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQSxJQUFJLGNBQWMsR0FBRyxPQUFPLENBQUMsMkJBQTJCLENBQUMsQ0FBQztBQUMxRCxJQUFJLFFBQVEsR0FBRyxPQUFPLENBQUMscUJBQXFCLENBQUMsQ0FBQztBQUM5QyxJQUFJLElBQUksR0FBRyxPQUFPLENBQUMsaUJBQWlCLENBQUMsQ0FBQzs7QUFFdEMsSUFBSSxJQUFJLEdBQUc7RUFDVCxRQUFRLEVBQUUsSUFBSTtBQUNoQixDQUFDLENBQUM7QUFDRjs7QUFFQSxTQUFTLGNBQWMsRUFBRSxJQUFJLEVBQUU7RUFDN0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO0VBQzlCLFNBQVMsRUFBRSxDQUFDO0FBQ2QsQ0FBQzs7QUFFRCxTQUFTLGVBQWUsRUFBRSxJQUFJLEVBQUU7RUFDOUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7RUFDckIsU0FBUyxFQUFFLENBQUM7QUFDZCxDQUFDOztBQUVELElBQUksUUFBUSxHQUFHLEVBQUUsQ0FBQzs7QUFFbEIsU0FBUyxTQUFTLElBQUk7RUFDcEIsb0JBQW9CLEVBQUUsQ0FBQztFQUN2QixjQUFjLEVBQUUsQ0FBQztFQUNqQixVQUFVLEVBQUUsQ0FBQztBQUNmLENBQUM7O0FBRUQsU0FBUyxVQUFVLElBQUk7RUFDckIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0VBQ3pDLEtBQUssQ0FBQyxNQUFNO0lBQ1Ysb0JBQUMsSUFBSSxFQUFBLENBQUEsQ0FBQyxRQUFBLEVBQVEsQ0FBRSxRQUFRLEVBQUMsQ0FBQyxRQUFBLEVBQVEsQ0FBRSxJQUFJLENBQUMsUUFBUSxFQUFDLENBQUMsWUFBQSxFQUFZLENBQUUsS0FBTSxDQUFBLENBQUcsQ0FBQTtJQUMxRSxRQUFRLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQztHQUNoQyxDQUFDO0FBQ0osQ0FBQzs7QUFFRCxTQUFTLG9CQUFvQixJQUFJO0VBQy9CLEtBQUssQ0FBQyxNQUFNO0lBQ1Ysb0JBQUMsY0FBYyxFQUFBLENBQUEsQ0FBQyxjQUFBLEVBQWMsQ0FBRSxjQUFjLEVBQUMsQ0FBQyxlQUFBLEVBQWUsQ0FBRSxlQUFlLEVBQUMsQ0FBQyxRQUFBLEVBQVEsQ0FBRSxJQUFJLENBQUMsUUFBUyxDQUFBLENBQUcsQ0FBQTtJQUM3RyxRQUFRLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQztHQUNsQyxDQUFDO0FBQ0osQ0FBQzs7QUFFRCxTQUFTLGNBQWMsSUFBSTtFQUN6QixLQUFLLENBQUMsTUFBTTtJQUNWLG9CQUFDLFFBQVEsRUFBQSxJQUFBLENBQUcsQ0FBQTtJQUNaLFFBQVEsQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDO0dBQ3BDLENBQUM7QUFDSixDQUFDOztBQUVELFNBQVMsRUFBRSxDQUFDOzs7O0FDakRaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0bEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3SUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25NQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0VBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxYUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNySUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9NQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25FQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdElBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9GQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzM4REE7QUFDQSxJQUFJLG9DQUFvQyw4QkFBQTtFQUN0QyxlQUFlLEVBQUUsWUFBWTtJQUMzQixPQUFPO01BQ0wsUUFBUSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxJQUFJLElBQUk7S0FDdEMsQ0FBQztHQUNIO0VBQ0QsWUFBWSxFQUFFLFVBQVUsQ0FBQyxFQUFFO0lBQ3pCLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUNuQixJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDNUQsSUFBSSxDQUFDLFFBQVEsRUFBRTtNQUNiLE9BQU87S0FDUjtJQUNELElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQztJQUNwQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO0lBQzNDLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUM7R0FDakQ7RUFDRCxZQUFZLEVBQUUsVUFBVSxDQUFDLEVBQUU7SUFDekIsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQ25CLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDO0lBQ25DLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUNoQyxJQUFJLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDO0dBQ2xEO0VBQ0QsTUFBTSxFQUFFLFdBQVc7SUFDakIsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDO0lBQ2xCLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUU7TUFDdkIsTUFBTTtRQUNKLG9CQUFBLE1BQUssRUFBQSxDQUFBLENBQUMsU0FBQSxFQUFTLENBQUMsMEJBQUEsRUFBMEIsQ0FBQyxRQUFBLEVBQVEsQ0FBRSxJQUFJLENBQUMsWUFBYyxDQUFBLEVBQUE7VUFDdEUsb0JBQUEsS0FBSSxFQUFBLENBQUEsQ0FBQyxTQUFBLEVBQVMsQ0FBQyxZQUFhLENBQUEsRUFBQTtZQUMxQixvQkFBQSxNQUFLLEVBQUEsSUFBQyxFQUFBLGVBQUEsRUFBYyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQWdCLENBQUE7VUFDM0MsQ0FBQSxFQUFBO1VBQ04sb0JBQUEsUUFBTyxFQUFBLENBQUEsQ0FBQyxJQUFBLEVBQUksQ0FBQyxRQUFBLEVBQVEsQ0FBQyxTQUFBLEVBQVMsQ0FBQyxpQkFBa0IsQ0FBQSxFQUFBLFVBQWlCLENBQUE7UUFDOUQsQ0FBQTtPQUNSLENBQUM7S0FDSCxNQUFNO01BQ0wsTUFBTTtRQUNKLG9CQUFBLE1BQUssRUFBQSxDQUFBLENBQUMsU0FBQSxFQUFTLENBQUMsMEJBQUEsRUFBMEIsQ0FBQyxRQUFBLEVBQVEsQ0FBRSxJQUFJLENBQUMsWUFBYyxDQUFBLEVBQUE7VUFDdEUsb0JBQUEsS0FBSSxFQUFBLENBQUEsQ0FBQyxTQUFBLEVBQVMsQ0FBQyxZQUFhLENBQUEsRUFBQTtZQUMxQixvQkFBQSxPQUFNLEVBQUEsQ0FBQSxDQUFDLElBQUEsRUFBSSxDQUFDLE1BQUEsRUFBTSxDQUFDLFdBQUEsRUFBVyxDQUFDLE1BQUEsRUFBTSxDQUFDLFNBQUEsRUFBUyxDQUFDLGNBQUEsRUFBYyxDQUFDLEdBQUEsRUFBRyxDQUFDLFVBQVUsQ0FBQSxDQUFHLENBQUE7VUFDNUUsQ0FBQSxFQUFBO1VBQ04sb0JBQUEsUUFBTyxFQUFBLENBQUEsQ0FBQyxJQUFBLEVBQUksQ0FBQyxRQUFBLEVBQVEsQ0FBQyxTQUFBLEVBQVMsQ0FBQyxpQkFBa0IsQ0FBQSxFQUFBLFNBQWdCLENBQUE7UUFDN0QsQ0FBQTtPQUNSLENBQUM7S0FDSDtJQUNELE9BQU8sTUFBTSxDQUFDO0dBQ2Y7QUFDSCxDQUFDLENBQUMsQ0FBQzs7QUFFSCxNQUFNLENBQUMsT0FBTyxHQUFHLGNBQWMsQ0FBQzs7OztBQ2hEaEM7QUFDQSxJQUFJLFVBQVUsR0FBRyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUM7QUFDdkMsSUFBSSxFQUFFLEdBQUcsSUFBSSxVQUFVLEVBQUUsQ0FBQzs7QUFFMUIsSUFBSSw2QkFBNkIsdUJBQUE7RUFDL0IsTUFBTSxFQUFFLFdBQVc7SUFDakIsSUFBSSxTQUFTLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQztNQUN4QixHQUFHO01BQ0gsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFO01BQzlCLEdBQUc7S0FDSixDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ1o7TUFDRSxvQkFBQSxLQUFJLEVBQUEsQ0FBQSxDQUFDLFNBQUEsRUFBUyxDQUFDLFNBQVUsQ0FBQSxFQUFBO1FBQ3ZCLG9CQUFBLElBQUcsRUFBQSxDQUFBLENBQUMsU0FBQSxFQUFTLENBQUMsYUFBYyxDQUFBLEVBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFjLENBQUEsRUFBQTtRQUN0RCxvQkFBQSxNQUFLLEVBQUEsQ0FBQSxDQUFDLHVCQUFBLEVBQXVCLENBQUUsQ0FBQyxNQUFNLEVBQUUsU0FBUyxDQUFFLENBQUEsQ0FBRyxDQUFBO01BQ2xELENBQUE7TUFDTjtHQUNIO0FBQ0gsQ0FBQyxDQUFDLENBQUM7O0FBRUgsaURBQWlEO0FBQ2pELElBQUksaUNBQWlDLDJCQUFBO0VBQ25DLGVBQWUsRUFBRSxZQUFZO0lBQzNCLE9BQU87TUFDTCxRQUFRLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRO0tBQzlCLENBQUM7R0FDSDtFQUNELFlBQVksRUFBRSxVQUFVLENBQUMsRUFBRTtJQUN6QixDQUFDLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDbkIsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUM7SUFDMUQsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3BELE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzVCLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7TUFDdEIsT0FBTztLQUNSO0lBQ0QsSUFBSSxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUMsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQzdELElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7R0FDeEM7RUFDRCxNQUFNLEVBQUUsV0FBVztJQUNqQjtNQUNFLG9CQUFBLEtBQUksRUFBQSxDQUFBLENBQUMsU0FBQSxFQUFTLENBQUMsS0FBTSxDQUFBLEVBQUE7UUFDbkIsb0JBQUEsS0FBSSxFQUFBLENBQUEsQ0FBQyxTQUFBLEVBQVMsQ0FBQyxXQUFZLENBQUEsRUFBQTtVQUN6QixvQkFBQSxNQUFLLEVBQUEsQ0FBQSxDQUFDLFNBQUEsRUFBUyxDQUFDLGFBQUEsRUFBYSxDQUFDLFFBQUEsRUFBUSxDQUFFLElBQUksQ0FBQyxZQUFjLENBQUEsRUFBQTtZQUN6RCxvQkFBQSxPQUFNLEVBQUEsQ0FBQSxDQUFDLElBQUEsRUFBSSxDQUFDLE1BQUEsRUFBTSxDQUFDLFdBQUEsRUFBVyxDQUFDLGtCQUFBLEVBQWtCLENBQUMsR0FBQSxFQUFHLENBQUMsTUFBTSxDQUFBLENBQUcsQ0FBQSxFQUFBO1lBQy9ELG9CQUFBLE9BQU0sRUFBQSxDQUFBLENBQUMsU0FBQSxFQUFTLENBQUMsaUJBQUEsRUFBaUIsQ0FBQyxJQUFBLEVBQUksQ0FBQyxRQUFBLEVBQVEsQ0FBQyxLQUFBLEVBQUssQ0FBQyxNQUFNLENBQUEsQ0FBRyxDQUFBO1VBQzNELENBQUE7UUFDSCxDQUFBO01BQ0YsQ0FBQTtNQUNOO0dBQ0g7QUFDSCxDQUFDLENBQUMsQ0FBQzs7QUFFSCw0QkFBNEI7QUFDNUIsSUFBSSxpQ0FBaUMsMkJBQUE7RUFDbkMsTUFBTSxFQUFFLFdBQVc7SUFDakIsSUFBSSxZQUFZLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLFVBQVUsT0FBTyxFQUFFO01BQzVEO1FBQ0Usb0JBQUMsT0FBTyxFQUFBLENBQUEsQ0FBQyxHQUFBLEVBQUcsQ0FBRSxPQUFPLENBQUMsR0FBRyxFQUFDLENBQUMsUUFBQSxFQUFRLENBQUUsT0FBTyxDQUFDLFFBQVUsQ0FBQSxFQUFBO1VBQ3BELE9BQU8sQ0FBQyxJQUFLO1FBQ04sQ0FBQTtRQUNWO0tBQ0gsQ0FBQyxDQUFDO0lBQ0g7TUFDRSxvQkFBQSxLQUFJLEVBQUEsQ0FBQSxDQUFDLFNBQUEsRUFBUyxDQUFDLEtBQU0sQ0FBQSxFQUFBO1FBQ25CLG9CQUFBLEtBQUksRUFBQSxDQUFBLENBQUMsU0FBQSxFQUFTLENBQUMsV0FBWSxDQUFBLEVBQUE7VUFDeEIsWUFBYTtRQUNWLENBQUE7TUFDRixDQUFBO01BQ047R0FDSDtBQUNILENBQUMsQ0FBQyxDQUFDOztBQUVILElBQUksMEJBQTBCLG9CQUFBO0FBQzlCLEVBQUUsc0JBQXNCLEVBQUUsWUFBWTs7SUFFbEMsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUM7SUFDbkMsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUM7SUFDMUQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUM7R0FDekQ7RUFDRCxtQkFBbUIsRUFBRSxVQUFVLE9BQU8sRUFBRTtJQUN0QyxJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQztJQUMxRCxJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQztJQUNuQyxJQUFJLFdBQVcsR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUM3QyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsV0FBVyxDQUFDLENBQUMsQ0FBQztHQUM1RDtFQUNELGVBQWUsRUFBRSxZQUFZO0lBQzNCLE9BQU87TUFDTCxRQUFRLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLElBQUksRUFBRTtNQUNuQyxRQUFRLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRO0tBQzlCLENBQUM7R0FDSDtFQUNELGlCQUFpQixFQUFFLFlBQVk7SUFDN0IsSUFBSSxDQUFDLHNCQUFzQixFQUFFLENBQUM7SUFDOUIsV0FBVyxDQUFDLElBQUksQ0FBQyxzQkFBc0IsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDO0dBQ25FO0VBQ0QsTUFBTSxFQUFFLFlBQVk7SUFDbEIsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUM7SUFDMUQ7TUFDRSxvQkFBQSxLQUFJLEVBQUEsSUFBQyxFQUFBO1FBQ0gsb0JBQUMsV0FBVyxFQUFBLENBQUEsQ0FBQyxRQUFBLEVBQVEsQ0FBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVMsQ0FBQSxDQUFHLENBQUEsRUFBQTtRQUM5QyxvQkFBQyxXQUFXLEVBQUEsQ0FBQSxDQUFDLGVBQUEsRUFBZSxDQUFFLElBQUksQ0FBQyxtQkFBbUIsRUFBQyxDQUFDLFFBQUEsRUFBUSxDQUFFLFFBQVMsQ0FBQSxDQUFHLENBQUE7TUFDMUUsQ0FBQTtNQUNOO0dBQ0g7QUFDSCxDQUFDLENBQUMsQ0FBQzs7QUFFSCxNQUFNLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQzs7OztBQzFHdEI7QUFDQSxJQUFJLDhCQUE4Qix3QkFBQTtFQUNoQyxNQUFNLEVBQUUsWUFBWTtJQUNsQjtNQUNFLG9CQUFBLEtBQUksRUFBQSxJQUFDLEVBQUEscUJBQXlCLENBQUE7TUFDOUI7R0FDSDtBQUNILENBQUMsQ0FBQyxDQUFDOztBQUVILE1BQU0sQ0FBQyxPQUFPLEdBQUcsUUFBUSxDQUFDIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsInZhciBBdXRoZW50aWNhdGlvbiA9IHJlcXVpcmUoJy4vYXBwcy9BdXRoZW50aWNhdGlvbi5qc3gnKTtcbnZhciBVc2VyTGlzdCA9IHJlcXVpcmUoJy4vYXBwcy9Vc2VyTGlzdC5qc3gnKTtcbnZhciBDaGF0ID0gcmVxdWlyZSgnLi9hcHBzL0NoYXQuanN4Jyk7XG5cbnZhciBkYXRhID0ge1xuICB1c2VybmFtZTogbnVsbFxufTtcblxuXG5mdW5jdGlvbiBvblNpZ25vblN1Ym1pdCAodXNlcikge1xuICBkYXRhLnVzZXJuYW1lID0gdXNlci51c2VybmFtZTtcbiAgcmVuZGVyQWxsKCk7XG59XG5cbmZ1bmN0aW9uIG9uU2lnbm91dFN1Ym1pdCAodXNlcikge1xuICBkYXRhLnVzZXJuYW1lID0gbnVsbDtcbiAgcmVuZGVyQWxsKCk7XG59XG5cbnZhciBjb21tZW50cyA9IFtdO1xuXG5mdW5jdGlvbiByZW5kZXJBbGwgKCkge1xuICByZW5kZXJBdXRoZW50aWNhdGlvbigpO1xuICByZW5kZXJVc2VyTGlzdCgpO1xuICByZW5kZXJDaGF0KCk7XG59XG5cbmZ1bmN0aW9uIHJlbmRlckNoYXQgKCkge1xuICBjb25zb2xlLmxvZygncmVuZGVyQ2hhdCcsIGRhdGEudXNlcm5hbWUpO1xuICBSZWFjdC5yZW5kZXIoXG4gICAgPENoYXQgY29tbWVudHM9e2NvbW1lbnRzfSB1c2VybmFtZT17ZGF0YS51c2VybmFtZX0gcG9sbEludGVydmFsPXsxMDAwMH0gLz4sXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NoYXQnKVxuICApO1xufVxuXG5mdW5jdGlvbiByZW5kZXJBdXRoZW50aWNhdGlvbiAoKSB7XG4gIFJlYWN0LnJlbmRlcihcbiAgICA8QXV0aGVudGljYXRpb24gb25TaWdub25TdWJtaXQ9e29uU2lnbm9uU3VibWl0fSBvblNpZ25vdXRTdWJtaXQ9e29uU2lnbm91dFN1Ym1pdH0gdXNlcm5hbWU9e2RhdGEudXNlcm5hbWV9IC8+LFxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYXZiYXInKVxuICApO1xufVxuXG5mdW5jdGlvbiByZW5kZXJVc2VyTGlzdCAoKSB7XG4gIFJlYWN0LnJlbmRlcihcbiAgICA8VXNlckxpc3QgLz4sXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VzZXJsaXN0JylcbiAgKTtcbn1cblxucmVuZGVyQWxsKCk7XG4iLCIndXNlIHN0cmljdCc7XG5cblxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2xpYi8nKTtcbiIsIi8vIExpc3Qgb2YgdmFsaWQgZW50aXRpZXNcbi8vXG4vLyBHZW5lcmF0ZSB3aXRoIC4vc3VwcG9ydC9lbnRpdGllcy5qcyBzY3JpcHRcbi8vXG4ndXNlIHN0cmljdCc7XG5cbi8qZXNsaW50IHF1b3RlczowKi9cbm1vZHVsZS5leHBvcnRzID0ge1xuICBcIkFhY3V0ZVwiOlwiXFx1MDBDMVwiLFxuICBcImFhY3V0ZVwiOlwiXFx1MDBFMVwiLFxuICBcIkFicmV2ZVwiOlwiXFx1MDEwMlwiLFxuICBcImFicmV2ZVwiOlwiXFx1MDEwM1wiLFxuICBcImFjXCI6XCJcXHUyMjNFXCIsXG4gIFwiYWNkXCI6XCJcXHUyMjNGXCIsXG4gIFwiYWNFXCI6XCJcXHUyMjNFXFx1MDMzM1wiLFxuICBcIkFjaXJjXCI6XCJcXHUwMEMyXCIsXG4gIFwiYWNpcmNcIjpcIlxcdTAwRTJcIixcbiAgXCJhY3V0ZVwiOlwiXFx1MDBCNFwiLFxuICBcIkFjeVwiOlwiXFx1MDQxMFwiLFxuICBcImFjeVwiOlwiXFx1MDQzMFwiLFxuICBcIkFFbGlnXCI6XCJcXHUwMEM2XCIsXG4gIFwiYWVsaWdcIjpcIlxcdTAwRTZcIixcbiAgXCJhZlwiOlwiXFx1MjA2MVwiLFxuICBcIkFmclwiOlwiXFx1RDgzNVxcdUREMDRcIixcbiAgXCJhZnJcIjpcIlxcdUQ4MzVcXHVERDFFXCIsXG4gIFwiQWdyYXZlXCI6XCJcXHUwMEMwXCIsXG4gIFwiYWdyYXZlXCI6XCJcXHUwMEUwXCIsXG4gIFwiYWxlZnN5bVwiOlwiXFx1MjEzNVwiLFxuICBcImFsZXBoXCI6XCJcXHUyMTM1XCIsXG4gIFwiQWxwaGFcIjpcIlxcdTAzOTFcIixcbiAgXCJhbHBoYVwiOlwiXFx1MDNCMVwiLFxuICBcIkFtYWNyXCI6XCJcXHUwMTAwXCIsXG4gIFwiYW1hY3JcIjpcIlxcdTAxMDFcIixcbiAgXCJhbWFsZ1wiOlwiXFx1MkEzRlwiLFxuICBcIkFNUFwiOlwiXFx1MDAyNlwiLFxuICBcImFtcFwiOlwiXFx1MDAyNlwiLFxuICBcIkFuZFwiOlwiXFx1MkE1M1wiLFxuICBcImFuZFwiOlwiXFx1MjIyN1wiLFxuICBcImFuZGFuZFwiOlwiXFx1MkE1NVwiLFxuICBcImFuZGRcIjpcIlxcdTJBNUNcIixcbiAgXCJhbmRzbG9wZVwiOlwiXFx1MkE1OFwiLFxuICBcImFuZHZcIjpcIlxcdTJBNUFcIixcbiAgXCJhbmdcIjpcIlxcdTIyMjBcIixcbiAgXCJhbmdlXCI6XCJcXHUyOUE0XCIsXG4gIFwiYW5nbGVcIjpcIlxcdTIyMjBcIixcbiAgXCJhbmdtc2RcIjpcIlxcdTIyMjFcIixcbiAgXCJhbmdtc2RhYVwiOlwiXFx1MjlBOFwiLFxuICBcImFuZ21zZGFiXCI6XCJcXHUyOUE5XCIsXG4gIFwiYW5nbXNkYWNcIjpcIlxcdTI5QUFcIixcbiAgXCJhbmdtc2RhZFwiOlwiXFx1MjlBQlwiLFxuICBcImFuZ21zZGFlXCI6XCJcXHUyOUFDXCIsXG4gIFwiYW5nbXNkYWZcIjpcIlxcdTI5QURcIixcbiAgXCJhbmdtc2RhZ1wiOlwiXFx1MjlBRVwiLFxuICBcImFuZ21zZGFoXCI6XCJcXHUyOUFGXCIsXG4gIFwiYW5ncnRcIjpcIlxcdTIyMUZcIixcbiAgXCJhbmdydHZiXCI6XCJcXHUyMkJFXCIsXG4gIFwiYW5ncnR2YmRcIjpcIlxcdTI5OURcIixcbiAgXCJhbmdzcGhcIjpcIlxcdTIyMjJcIixcbiAgXCJhbmdzdFwiOlwiXFx1MDBDNVwiLFxuICBcImFuZ3phcnJcIjpcIlxcdTIzN0NcIixcbiAgXCJBb2dvblwiOlwiXFx1MDEwNFwiLFxuICBcImFvZ29uXCI6XCJcXHUwMTA1XCIsXG4gIFwiQW9wZlwiOlwiXFx1RDgzNVxcdUREMzhcIixcbiAgXCJhb3BmXCI6XCJcXHVEODM1XFx1REQ1MlwiLFxuICBcImFwXCI6XCJcXHUyMjQ4XCIsXG4gIFwiYXBhY2lyXCI6XCJcXHUyQTZGXCIsXG4gIFwiYXBFXCI6XCJcXHUyQTcwXCIsXG4gIFwiYXBlXCI6XCJcXHUyMjRBXCIsXG4gIFwiYXBpZFwiOlwiXFx1MjI0QlwiLFxuICBcImFwb3NcIjpcIlxcdTAwMjdcIixcbiAgXCJBcHBseUZ1bmN0aW9uXCI6XCJcXHUyMDYxXCIsXG4gIFwiYXBwcm94XCI6XCJcXHUyMjQ4XCIsXG4gIFwiYXBwcm94ZXFcIjpcIlxcdTIyNEFcIixcbiAgXCJBcmluZ1wiOlwiXFx1MDBDNVwiLFxuICBcImFyaW5nXCI6XCJcXHUwMEU1XCIsXG4gIFwiQXNjclwiOlwiXFx1RDgzNVxcdURDOUNcIixcbiAgXCJhc2NyXCI6XCJcXHVEODM1XFx1RENCNlwiLFxuICBcIkFzc2lnblwiOlwiXFx1MjI1NFwiLFxuICBcImFzdFwiOlwiXFx1MDAyQVwiLFxuICBcImFzeW1wXCI6XCJcXHUyMjQ4XCIsXG4gIFwiYXN5bXBlcVwiOlwiXFx1MjI0RFwiLFxuICBcIkF0aWxkZVwiOlwiXFx1MDBDM1wiLFxuICBcImF0aWxkZVwiOlwiXFx1MDBFM1wiLFxuICBcIkF1bWxcIjpcIlxcdTAwQzRcIixcbiAgXCJhdW1sXCI6XCJcXHUwMEU0XCIsXG4gIFwiYXdjb25pbnRcIjpcIlxcdTIyMzNcIixcbiAgXCJhd2ludFwiOlwiXFx1MkExMVwiLFxuICBcImJhY2tjb25nXCI6XCJcXHUyMjRDXCIsXG4gIFwiYmFja2Vwc2lsb25cIjpcIlxcdTAzRjZcIixcbiAgXCJiYWNrcHJpbWVcIjpcIlxcdTIwMzVcIixcbiAgXCJiYWNrc2ltXCI6XCJcXHUyMjNEXCIsXG4gIFwiYmFja3NpbWVxXCI6XCJcXHUyMkNEXCIsXG4gIFwiQmFja3NsYXNoXCI6XCJcXHUyMjE2XCIsXG4gIFwiQmFydlwiOlwiXFx1MkFFN1wiLFxuICBcImJhcnZlZVwiOlwiXFx1MjJCRFwiLFxuICBcIkJhcndlZFwiOlwiXFx1MjMwNlwiLFxuICBcImJhcndlZFwiOlwiXFx1MjMwNVwiLFxuICBcImJhcndlZGdlXCI6XCJcXHUyMzA1XCIsXG4gIFwiYmJya1wiOlwiXFx1MjNCNVwiLFxuICBcImJicmt0YnJrXCI6XCJcXHUyM0I2XCIsXG4gIFwiYmNvbmdcIjpcIlxcdTIyNENcIixcbiAgXCJCY3lcIjpcIlxcdTA0MTFcIixcbiAgXCJiY3lcIjpcIlxcdTA0MzFcIixcbiAgXCJiZHF1b1wiOlwiXFx1MjAxRVwiLFxuICBcImJlY2F1c1wiOlwiXFx1MjIzNVwiLFxuICBcIkJlY2F1c2VcIjpcIlxcdTIyMzVcIixcbiAgXCJiZWNhdXNlXCI6XCJcXHUyMjM1XCIsXG4gIFwiYmVtcHR5dlwiOlwiXFx1MjlCMFwiLFxuICBcImJlcHNpXCI6XCJcXHUwM0Y2XCIsXG4gIFwiYmVybm91XCI6XCJcXHUyMTJDXCIsXG4gIFwiQmVybm91bGxpc1wiOlwiXFx1MjEyQ1wiLFxuICBcIkJldGFcIjpcIlxcdTAzOTJcIixcbiAgXCJiZXRhXCI6XCJcXHUwM0IyXCIsXG4gIFwiYmV0aFwiOlwiXFx1MjEzNlwiLFxuICBcImJldHdlZW5cIjpcIlxcdTIyNkNcIixcbiAgXCJCZnJcIjpcIlxcdUQ4MzVcXHVERDA1XCIsXG4gIFwiYmZyXCI6XCJcXHVEODM1XFx1REQxRlwiLFxuICBcImJpZ2NhcFwiOlwiXFx1MjJDMlwiLFxuICBcImJpZ2NpcmNcIjpcIlxcdTI1RUZcIixcbiAgXCJiaWdjdXBcIjpcIlxcdTIyQzNcIixcbiAgXCJiaWdvZG90XCI6XCJcXHUyQTAwXCIsXG4gIFwiYmlnb3BsdXNcIjpcIlxcdTJBMDFcIixcbiAgXCJiaWdvdGltZXNcIjpcIlxcdTJBMDJcIixcbiAgXCJiaWdzcWN1cFwiOlwiXFx1MkEwNlwiLFxuICBcImJpZ3N0YXJcIjpcIlxcdTI2MDVcIixcbiAgXCJiaWd0cmlhbmdsZWRvd25cIjpcIlxcdTI1QkRcIixcbiAgXCJiaWd0cmlhbmdsZXVwXCI6XCJcXHUyNUIzXCIsXG4gIFwiYmlndXBsdXNcIjpcIlxcdTJBMDRcIixcbiAgXCJiaWd2ZWVcIjpcIlxcdTIyQzFcIixcbiAgXCJiaWd3ZWRnZVwiOlwiXFx1MjJDMFwiLFxuICBcImJrYXJvd1wiOlwiXFx1MjkwRFwiLFxuICBcImJsYWNrbG96ZW5nZVwiOlwiXFx1MjlFQlwiLFxuICBcImJsYWNrc3F1YXJlXCI6XCJcXHUyNUFBXCIsXG4gIFwiYmxhY2t0cmlhbmdsZVwiOlwiXFx1MjVCNFwiLFxuICBcImJsYWNrdHJpYW5nbGVkb3duXCI6XCJcXHUyNUJFXCIsXG4gIFwiYmxhY2t0cmlhbmdsZWxlZnRcIjpcIlxcdTI1QzJcIixcbiAgXCJibGFja3RyaWFuZ2xlcmlnaHRcIjpcIlxcdTI1QjhcIixcbiAgXCJibGFua1wiOlwiXFx1MjQyM1wiLFxuICBcImJsazEyXCI6XCJcXHUyNTkyXCIsXG4gIFwiYmxrMTRcIjpcIlxcdTI1OTFcIixcbiAgXCJibGszNFwiOlwiXFx1MjU5M1wiLFxuICBcImJsb2NrXCI6XCJcXHUyNTg4XCIsXG4gIFwiYm5lXCI6XCJcXHUwMDNEXFx1MjBFNVwiLFxuICBcImJuZXF1aXZcIjpcIlxcdTIyNjFcXHUyMEU1XCIsXG4gIFwiYk5vdFwiOlwiXFx1MkFFRFwiLFxuICBcImJub3RcIjpcIlxcdTIzMTBcIixcbiAgXCJCb3BmXCI6XCJcXHVEODM1XFx1REQzOVwiLFxuICBcImJvcGZcIjpcIlxcdUQ4MzVcXHVERDUzXCIsXG4gIFwiYm90XCI6XCJcXHUyMkE1XCIsXG4gIFwiYm90dG9tXCI6XCJcXHUyMkE1XCIsXG4gIFwiYm93dGllXCI6XCJcXHUyMkM4XCIsXG4gIFwiYm94Ym94XCI6XCJcXHUyOUM5XCIsXG4gIFwiYm94RExcIjpcIlxcdTI1NTdcIixcbiAgXCJib3hEbFwiOlwiXFx1MjU1NlwiLFxuICBcImJveGRMXCI6XCJcXHUyNTU1XCIsXG4gIFwiYm94ZGxcIjpcIlxcdTI1MTBcIixcbiAgXCJib3hEUlwiOlwiXFx1MjU1NFwiLFxuICBcImJveERyXCI6XCJcXHUyNTUzXCIsXG4gIFwiYm94ZFJcIjpcIlxcdTI1NTJcIixcbiAgXCJib3hkclwiOlwiXFx1MjUwQ1wiLFxuICBcImJveEhcIjpcIlxcdTI1NTBcIixcbiAgXCJib3hoXCI6XCJcXHUyNTAwXCIsXG4gIFwiYm94SERcIjpcIlxcdTI1NjZcIixcbiAgXCJib3hIZFwiOlwiXFx1MjU2NFwiLFxuICBcImJveGhEXCI6XCJcXHUyNTY1XCIsXG4gIFwiYm94aGRcIjpcIlxcdTI1MkNcIixcbiAgXCJib3hIVVwiOlwiXFx1MjU2OVwiLFxuICBcImJveEh1XCI6XCJcXHUyNTY3XCIsXG4gIFwiYm94aFVcIjpcIlxcdTI1NjhcIixcbiAgXCJib3hodVwiOlwiXFx1MjUzNFwiLFxuICBcImJveG1pbnVzXCI6XCJcXHUyMjlGXCIsXG4gIFwiYm94cGx1c1wiOlwiXFx1MjI5RVwiLFxuICBcImJveHRpbWVzXCI6XCJcXHUyMkEwXCIsXG4gIFwiYm94VUxcIjpcIlxcdTI1NURcIixcbiAgXCJib3hVbFwiOlwiXFx1MjU1Q1wiLFxuICBcImJveHVMXCI6XCJcXHUyNTVCXCIsXG4gIFwiYm94dWxcIjpcIlxcdTI1MThcIixcbiAgXCJib3hVUlwiOlwiXFx1MjU1QVwiLFxuICBcImJveFVyXCI6XCJcXHUyNTU5XCIsXG4gIFwiYm94dVJcIjpcIlxcdTI1NThcIixcbiAgXCJib3h1clwiOlwiXFx1MjUxNFwiLFxuICBcImJveFZcIjpcIlxcdTI1NTFcIixcbiAgXCJib3h2XCI6XCJcXHUyNTAyXCIsXG4gIFwiYm94VkhcIjpcIlxcdTI1NkNcIixcbiAgXCJib3hWaFwiOlwiXFx1MjU2QlwiLFxuICBcImJveHZIXCI6XCJcXHUyNTZBXCIsXG4gIFwiYm94dmhcIjpcIlxcdTI1M0NcIixcbiAgXCJib3hWTFwiOlwiXFx1MjU2M1wiLFxuICBcImJveFZsXCI6XCJcXHUyNTYyXCIsXG4gIFwiYm94dkxcIjpcIlxcdTI1NjFcIixcbiAgXCJib3h2bFwiOlwiXFx1MjUyNFwiLFxuICBcImJveFZSXCI6XCJcXHUyNTYwXCIsXG4gIFwiYm94VnJcIjpcIlxcdTI1NUZcIixcbiAgXCJib3h2UlwiOlwiXFx1MjU1RVwiLFxuICBcImJveHZyXCI6XCJcXHUyNTFDXCIsXG4gIFwiYnByaW1lXCI6XCJcXHUyMDM1XCIsXG4gIFwiQnJldmVcIjpcIlxcdTAyRDhcIixcbiAgXCJicmV2ZVwiOlwiXFx1MDJEOFwiLFxuICBcImJydmJhclwiOlwiXFx1MDBBNlwiLFxuICBcIkJzY3JcIjpcIlxcdTIxMkNcIixcbiAgXCJic2NyXCI6XCJcXHVEODM1XFx1RENCN1wiLFxuICBcImJzZW1pXCI6XCJcXHUyMDRGXCIsXG4gIFwiYnNpbVwiOlwiXFx1MjIzRFwiLFxuICBcImJzaW1lXCI6XCJcXHUyMkNEXCIsXG4gIFwiYnNvbFwiOlwiXFx1MDA1Q1wiLFxuICBcImJzb2xiXCI6XCJcXHUyOUM1XCIsXG4gIFwiYnNvbGhzdWJcIjpcIlxcdTI3QzhcIixcbiAgXCJidWxsXCI6XCJcXHUyMDIyXCIsXG4gIFwiYnVsbGV0XCI6XCJcXHUyMDIyXCIsXG4gIFwiYnVtcFwiOlwiXFx1MjI0RVwiLFxuICBcImJ1bXBFXCI6XCJcXHUyQUFFXCIsXG4gIFwiYnVtcGVcIjpcIlxcdTIyNEZcIixcbiAgXCJCdW1wZXFcIjpcIlxcdTIyNEVcIixcbiAgXCJidW1wZXFcIjpcIlxcdTIyNEZcIixcbiAgXCJDYWN1dGVcIjpcIlxcdTAxMDZcIixcbiAgXCJjYWN1dGVcIjpcIlxcdTAxMDdcIixcbiAgXCJDYXBcIjpcIlxcdTIyRDJcIixcbiAgXCJjYXBcIjpcIlxcdTIyMjlcIixcbiAgXCJjYXBhbmRcIjpcIlxcdTJBNDRcIixcbiAgXCJjYXBicmN1cFwiOlwiXFx1MkE0OVwiLFxuICBcImNhcGNhcFwiOlwiXFx1MkE0QlwiLFxuICBcImNhcGN1cFwiOlwiXFx1MkE0N1wiLFxuICBcImNhcGRvdFwiOlwiXFx1MkE0MFwiLFxuICBcIkNhcGl0YWxEaWZmZXJlbnRpYWxEXCI6XCJcXHUyMTQ1XCIsXG4gIFwiY2Fwc1wiOlwiXFx1MjIyOVxcdUZFMDBcIixcbiAgXCJjYXJldFwiOlwiXFx1MjA0MVwiLFxuICBcImNhcm9uXCI6XCJcXHUwMkM3XCIsXG4gIFwiQ2F5bGV5c1wiOlwiXFx1MjEyRFwiLFxuICBcImNjYXBzXCI6XCJcXHUyQTREXCIsXG4gIFwiQ2Nhcm9uXCI6XCJcXHUwMTBDXCIsXG4gIFwiY2Nhcm9uXCI6XCJcXHUwMTBEXCIsXG4gIFwiQ2NlZGlsXCI6XCJcXHUwMEM3XCIsXG4gIFwiY2NlZGlsXCI6XCJcXHUwMEU3XCIsXG4gIFwiQ2NpcmNcIjpcIlxcdTAxMDhcIixcbiAgXCJjY2lyY1wiOlwiXFx1MDEwOVwiLFxuICBcIkNjb25pbnRcIjpcIlxcdTIyMzBcIixcbiAgXCJjY3Vwc1wiOlwiXFx1MkE0Q1wiLFxuICBcImNjdXBzc21cIjpcIlxcdTJBNTBcIixcbiAgXCJDZG90XCI6XCJcXHUwMTBBXCIsXG4gIFwiY2RvdFwiOlwiXFx1MDEwQlwiLFxuICBcImNlZGlsXCI6XCJcXHUwMEI4XCIsXG4gIFwiQ2VkaWxsYVwiOlwiXFx1MDBCOFwiLFxuICBcImNlbXB0eXZcIjpcIlxcdTI5QjJcIixcbiAgXCJjZW50XCI6XCJcXHUwMEEyXCIsXG4gIFwiQ2VudGVyRG90XCI6XCJcXHUwMEI3XCIsXG4gIFwiY2VudGVyZG90XCI6XCJcXHUwMEI3XCIsXG4gIFwiQ2ZyXCI6XCJcXHUyMTJEXCIsXG4gIFwiY2ZyXCI6XCJcXHVEODM1XFx1REQyMFwiLFxuICBcIkNIY3lcIjpcIlxcdTA0MjdcIixcbiAgXCJjaGN5XCI6XCJcXHUwNDQ3XCIsXG4gIFwiY2hlY2tcIjpcIlxcdTI3MTNcIixcbiAgXCJjaGVja21hcmtcIjpcIlxcdTI3MTNcIixcbiAgXCJDaGlcIjpcIlxcdTAzQTdcIixcbiAgXCJjaGlcIjpcIlxcdTAzQzdcIixcbiAgXCJjaXJcIjpcIlxcdTI1Q0JcIixcbiAgXCJjaXJjXCI6XCJcXHUwMkM2XCIsXG4gIFwiY2lyY2VxXCI6XCJcXHUyMjU3XCIsXG4gIFwiY2lyY2xlYXJyb3dsZWZ0XCI6XCJcXHUyMUJBXCIsXG4gIFwiY2lyY2xlYXJyb3dyaWdodFwiOlwiXFx1MjFCQlwiLFxuICBcImNpcmNsZWRhc3RcIjpcIlxcdTIyOUJcIixcbiAgXCJjaXJjbGVkY2lyY1wiOlwiXFx1MjI5QVwiLFxuICBcImNpcmNsZWRkYXNoXCI6XCJcXHUyMjlEXCIsXG4gIFwiQ2lyY2xlRG90XCI6XCJcXHUyMjk5XCIsXG4gIFwiY2lyY2xlZFJcIjpcIlxcdTAwQUVcIixcbiAgXCJjaXJjbGVkU1wiOlwiXFx1MjRDOFwiLFxuICBcIkNpcmNsZU1pbnVzXCI6XCJcXHUyMjk2XCIsXG4gIFwiQ2lyY2xlUGx1c1wiOlwiXFx1MjI5NVwiLFxuICBcIkNpcmNsZVRpbWVzXCI6XCJcXHUyMjk3XCIsXG4gIFwiY2lyRVwiOlwiXFx1MjlDM1wiLFxuICBcImNpcmVcIjpcIlxcdTIyNTdcIixcbiAgXCJjaXJmbmludFwiOlwiXFx1MkExMFwiLFxuICBcImNpcm1pZFwiOlwiXFx1MkFFRlwiLFxuICBcImNpcnNjaXJcIjpcIlxcdTI5QzJcIixcbiAgXCJDbG9ja3dpc2VDb250b3VySW50ZWdyYWxcIjpcIlxcdTIyMzJcIixcbiAgXCJDbG9zZUN1cmx5RG91YmxlUXVvdGVcIjpcIlxcdTIwMURcIixcbiAgXCJDbG9zZUN1cmx5UXVvdGVcIjpcIlxcdTIwMTlcIixcbiAgXCJjbHVic1wiOlwiXFx1MjY2M1wiLFxuICBcImNsdWJzdWl0XCI6XCJcXHUyNjYzXCIsXG4gIFwiQ29sb25cIjpcIlxcdTIyMzdcIixcbiAgXCJjb2xvblwiOlwiXFx1MDAzQVwiLFxuICBcIkNvbG9uZVwiOlwiXFx1MkE3NFwiLFxuICBcImNvbG9uZVwiOlwiXFx1MjI1NFwiLFxuICBcImNvbG9uZXFcIjpcIlxcdTIyNTRcIixcbiAgXCJjb21tYVwiOlwiXFx1MDAyQ1wiLFxuICBcImNvbW1hdFwiOlwiXFx1MDA0MFwiLFxuICBcImNvbXBcIjpcIlxcdTIyMDFcIixcbiAgXCJjb21wZm5cIjpcIlxcdTIyMThcIixcbiAgXCJjb21wbGVtZW50XCI6XCJcXHUyMjAxXCIsXG4gIFwiY29tcGxleGVzXCI6XCJcXHUyMTAyXCIsXG4gIFwiY29uZ1wiOlwiXFx1MjI0NVwiLFxuICBcImNvbmdkb3RcIjpcIlxcdTJBNkRcIixcbiAgXCJDb25ncnVlbnRcIjpcIlxcdTIyNjFcIixcbiAgXCJDb25pbnRcIjpcIlxcdTIyMkZcIixcbiAgXCJjb25pbnRcIjpcIlxcdTIyMkVcIixcbiAgXCJDb250b3VySW50ZWdyYWxcIjpcIlxcdTIyMkVcIixcbiAgXCJDb3BmXCI6XCJcXHUyMTAyXCIsXG4gIFwiY29wZlwiOlwiXFx1RDgzNVxcdURENTRcIixcbiAgXCJjb3Byb2RcIjpcIlxcdTIyMTBcIixcbiAgXCJDb3Byb2R1Y3RcIjpcIlxcdTIyMTBcIixcbiAgXCJDT1BZXCI6XCJcXHUwMEE5XCIsXG4gIFwiY29weVwiOlwiXFx1MDBBOVwiLFxuICBcImNvcHlzclwiOlwiXFx1MjExN1wiLFxuICBcIkNvdW50ZXJDbG9ja3dpc2VDb250b3VySW50ZWdyYWxcIjpcIlxcdTIyMzNcIixcbiAgXCJjcmFyclwiOlwiXFx1MjFCNVwiLFxuICBcIkNyb3NzXCI6XCJcXHUyQTJGXCIsXG4gIFwiY3Jvc3NcIjpcIlxcdTI3MTdcIixcbiAgXCJDc2NyXCI6XCJcXHVEODM1XFx1REM5RVwiLFxuICBcImNzY3JcIjpcIlxcdUQ4MzVcXHVEQ0I4XCIsXG4gIFwiY3N1YlwiOlwiXFx1MkFDRlwiLFxuICBcImNzdWJlXCI6XCJcXHUyQUQxXCIsXG4gIFwiY3N1cFwiOlwiXFx1MkFEMFwiLFxuICBcImNzdXBlXCI6XCJcXHUyQUQyXCIsXG4gIFwiY3Rkb3RcIjpcIlxcdTIyRUZcIixcbiAgXCJjdWRhcnJsXCI6XCJcXHUyOTM4XCIsXG4gIFwiY3VkYXJyclwiOlwiXFx1MjkzNVwiLFxuICBcImN1ZXByXCI6XCJcXHUyMkRFXCIsXG4gIFwiY3Vlc2NcIjpcIlxcdTIyREZcIixcbiAgXCJjdWxhcnJcIjpcIlxcdTIxQjZcIixcbiAgXCJjdWxhcnJwXCI6XCJcXHUyOTNEXCIsXG4gIFwiQ3VwXCI6XCJcXHUyMkQzXCIsXG4gIFwiY3VwXCI6XCJcXHUyMjJBXCIsXG4gIFwiY3VwYnJjYXBcIjpcIlxcdTJBNDhcIixcbiAgXCJDdXBDYXBcIjpcIlxcdTIyNERcIixcbiAgXCJjdXBjYXBcIjpcIlxcdTJBNDZcIixcbiAgXCJjdXBjdXBcIjpcIlxcdTJBNEFcIixcbiAgXCJjdXBkb3RcIjpcIlxcdTIyOERcIixcbiAgXCJjdXBvclwiOlwiXFx1MkE0NVwiLFxuICBcImN1cHNcIjpcIlxcdTIyMkFcXHVGRTAwXCIsXG4gIFwiY3VyYXJyXCI6XCJcXHUyMUI3XCIsXG4gIFwiY3VyYXJybVwiOlwiXFx1MjkzQ1wiLFxuICBcImN1cmx5ZXFwcmVjXCI6XCJcXHUyMkRFXCIsXG4gIFwiY3VybHllcXN1Y2NcIjpcIlxcdTIyREZcIixcbiAgXCJjdXJseXZlZVwiOlwiXFx1MjJDRVwiLFxuICBcImN1cmx5d2VkZ2VcIjpcIlxcdTIyQ0ZcIixcbiAgXCJjdXJyZW5cIjpcIlxcdTAwQTRcIixcbiAgXCJjdXJ2ZWFycm93bGVmdFwiOlwiXFx1MjFCNlwiLFxuICBcImN1cnZlYXJyb3dyaWdodFwiOlwiXFx1MjFCN1wiLFxuICBcImN1dmVlXCI6XCJcXHUyMkNFXCIsXG4gIFwiY3V3ZWRcIjpcIlxcdTIyQ0ZcIixcbiAgXCJjd2NvbmludFwiOlwiXFx1MjIzMlwiLFxuICBcImN3aW50XCI6XCJcXHUyMjMxXCIsXG4gIFwiY3lsY3R5XCI6XCJcXHUyMzJEXCIsXG4gIFwiRGFnZ2VyXCI6XCJcXHUyMDIxXCIsXG4gIFwiZGFnZ2VyXCI6XCJcXHUyMDIwXCIsXG4gIFwiZGFsZXRoXCI6XCJcXHUyMTM4XCIsXG4gIFwiRGFyclwiOlwiXFx1MjFBMVwiLFxuICBcImRBcnJcIjpcIlxcdTIxRDNcIixcbiAgXCJkYXJyXCI6XCJcXHUyMTkzXCIsXG4gIFwiZGFzaFwiOlwiXFx1MjAxMFwiLFxuICBcIkRhc2h2XCI6XCJcXHUyQUU0XCIsXG4gIFwiZGFzaHZcIjpcIlxcdTIyQTNcIixcbiAgXCJkYmthcm93XCI6XCJcXHUyOTBGXCIsXG4gIFwiZGJsYWNcIjpcIlxcdTAyRERcIixcbiAgXCJEY2Fyb25cIjpcIlxcdTAxMEVcIixcbiAgXCJkY2Fyb25cIjpcIlxcdTAxMEZcIixcbiAgXCJEY3lcIjpcIlxcdTA0MTRcIixcbiAgXCJkY3lcIjpcIlxcdTA0MzRcIixcbiAgXCJERFwiOlwiXFx1MjE0NVwiLFxuICBcImRkXCI6XCJcXHUyMTQ2XCIsXG4gIFwiZGRhZ2dlclwiOlwiXFx1MjAyMVwiLFxuICBcImRkYXJyXCI6XCJcXHUyMUNBXCIsXG4gIFwiRERvdHJhaGRcIjpcIlxcdTI5MTFcIixcbiAgXCJkZG90c2VxXCI6XCJcXHUyQTc3XCIsXG4gIFwiZGVnXCI6XCJcXHUwMEIwXCIsXG4gIFwiRGVsXCI6XCJcXHUyMjA3XCIsXG4gIFwiRGVsdGFcIjpcIlxcdTAzOTRcIixcbiAgXCJkZWx0YVwiOlwiXFx1MDNCNFwiLFxuICBcImRlbXB0eXZcIjpcIlxcdTI5QjFcIixcbiAgXCJkZmlzaHRcIjpcIlxcdTI5N0ZcIixcbiAgXCJEZnJcIjpcIlxcdUQ4MzVcXHVERDA3XCIsXG4gIFwiZGZyXCI6XCJcXHVEODM1XFx1REQyMVwiLFxuICBcImRIYXJcIjpcIlxcdTI5NjVcIixcbiAgXCJkaGFybFwiOlwiXFx1MjFDM1wiLFxuICBcImRoYXJyXCI6XCJcXHUyMUMyXCIsXG4gIFwiRGlhY3JpdGljYWxBY3V0ZVwiOlwiXFx1MDBCNFwiLFxuICBcIkRpYWNyaXRpY2FsRG90XCI6XCJcXHUwMkQ5XCIsXG4gIFwiRGlhY3JpdGljYWxEb3VibGVBY3V0ZVwiOlwiXFx1MDJERFwiLFxuICBcIkRpYWNyaXRpY2FsR3JhdmVcIjpcIlxcdTAwNjBcIixcbiAgXCJEaWFjcml0aWNhbFRpbGRlXCI6XCJcXHUwMkRDXCIsXG4gIFwiZGlhbVwiOlwiXFx1MjJDNFwiLFxuICBcIkRpYW1vbmRcIjpcIlxcdTIyQzRcIixcbiAgXCJkaWFtb25kXCI6XCJcXHUyMkM0XCIsXG4gIFwiZGlhbW9uZHN1aXRcIjpcIlxcdTI2NjZcIixcbiAgXCJkaWFtc1wiOlwiXFx1MjY2NlwiLFxuICBcImRpZVwiOlwiXFx1MDBBOFwiLFxuICBcIkRpZmZlcmVudGlhbERcIjpcIlxcdTIxNDZcIixcbiAgXCJkaWdhbW1hXCI6XCJcXHUwM0REXCIsXG4gIFwiZGlzaW5cIjpcIlxcdTIyRjJcIixcbiAgXCJkaXZcIjpcIlxcdTAwRjdcIixcbiAgXCJkaXZpZGVcIjpcIlxcdTAwRjdcIixcbiAgXCJkaXZpZGVvbnRpbWVzXCI6XCJcXHUyMkM3XCIsXG4gIFwiZGl2b254XCI6XCJcXHUyMkM3XCIsXG4gIFwiREpjeVwiOlwiXFx1MDQwMlwiLFxuICBcImRqY3lcIjpcIlxcdTA0NTJcIixcbiAgXCJkbGNvcm5cIjpcIlxcdTIzMUVcIixcbiAgXCJkbGNyb3BcIjpcIlxcdTIzMERcIixcbiAgXCJkb2xsYXJcIjpcIlxcdTAwMjRcIixcbiAgXCJEb3BmXCI6XCJcXHVEODM1XFx1REQzQlwiLFxuICBcImRvcGZcIjpcIlxcdUQ4MzVcXHVERDU1XCIsXG4gIFwiRG90XCI6XCJcXHUwMEE4XCIsXG4gIFwiZG90XCI6XCJcXHUwMkQ5XCIsXG4gIFwiRG90RG90XCI6XCJcXHUyMERDXCIsXG4gIFwiZG90ZXFcIjpcIlxcdTIyNTBcIixcbiAgXCJkb3RlcWRvdFwiOlwiXFx1MjI1MVwiLFxuICBcIkRvdEVxdWFsXCI6XCJcXHUyMjUwXCIsXG4gIFwiZG90bWludXNcIjpcIlxcdTIyMzhcIixcbiAgXCJkb3RwbHVzXCI6XCJcXHUyMjE0XCIsXG4gIFwiZG90c3F1YXJlXCI6XCJcXHUyMkExXCIsXG4gIFwiZG91YmxlYmFyd2VkZ2VcIjpcIlxcdTIzMDZcIixcbiAgXCJEb3VibGVDb250b3VySW50ZWdyYWxcIjpcIlxcdTIyMkZcIixcbiAgXCJEb3VibGVEb3RcIjpcIlxcdTAwQThcIixcbiAgXCJEb3VibGVEb3duQXJyb3dcIjpcIlxcdTIxRDNcIixcbiAgXCJEb3VibGVMZWZ0QXJyb3dcIjpcIlxcdTIxRDBcIixcbiAgXCJEb3VibGVMZWZ0UmlnaHRBcnJvd1wiOlwiXFx1MjFENFwiLFxuICBcIkRvdWJsZUxlZnRUZWVcIjpcIlxcdTJBRTRcIixcbiAgXCJEb3VibGVMb25nTGVmdEFycm93XCI6XCJcXHUyN0Y4XCIsXG4gIFwiRG91YmxlTG9uZ0xlZnRSaWdodEFycm93XCI6XCJcXHUyN0ZBXCIsXG4gIFwiRG91YmxlTG9uZ1JpZ2h0QXJyb3dcIjpcIlxcdTI3RjlcIixcbiAgXCJEb3VibGVSaWdodEFycm93XCI6XCJcXHUyMUQyXCIsXG4gIFwiRG91YmxlUmlnaHRUZWVcIjpcIlxcdTIyQThcIixcbiAgXCJEb3VibGVVcEFycm93XCI6XCJcXHUyMUQxXCIsXG4gIFwiRG91YmxlVXBEb3duQXJyb3dcIjpcIlxcdTIxRDVcIixcbiAgXCJEb3VibGVWZXJ0aWNhbEJhclwiOlwiXFx1MjIyNVwiLFxuICBcIkRvd25BcnJvd1wiOlwiXFx1MjE5M1wiLFxuICBcIkRvd25hcnJvd1wiOlwiXFx1MjFEM1wiLFxuICBcImRvd25hcnJvd1wiOlwiXFx1MjE5M1wiLFxuICBcIkRvd25BcnJvd0JhclwiOlwiXFx1MjkxM1wiLFxuICBcIkRvd25BcnJvd1VwQXJyb3dcIjpcIlxcdTIxRjVcIixcbiAgXCJEb3duQnJldmVcIjpcIlxcdTAzMTFcIixcbiAgXCJkb3duZG93bmFycm93c1wiOlwiXFx1MjFDQVwiLFxuICBcImRvd25oYXJwb29ubGVmdFwiOlwiXFx1MjFDM1wiLFxuICBcImRvd25oYXJwb29ucmlnaHRcIjpcIlxcdTIxQzJcIixcbiAgXCJEb3duTGVmdFJpZ2h0VmVjdG9yXCI6XCJcXHUyOTUwXCIsXG4gIFwiRG93bkxlZnRUZWVWZWN0b3JcIjpcIlxcdTI5NUVcIixcbiAgXCJEb3duTGVmdFZlY3RvclwiOlwiXFx1MjFCRFwiLFxuICBcIkRvd25MZWZ0VmVjdG9yQmFyXCI6XCJcXHUyOTU2XCIsXG4gIFwiRG93blJpZ2h0VGVlVmVjdG9yXCI6XCJcXHUyOTVGXCIsXG4gIFwiRG93blJpZ2h0VmVjdG9yXCI6XCJcXHUyMUMxXCIsXG4gIFwiRG93blJpZ2h0VmVjdG9yQmFyXCI6XCJcXHUyOTU3XCIsXG4gIFwiRG93blRlZVwiOlwiXFx1MjJBNFwiLFxuICBcIkRvd25UZWVBcnJvd1wiOlwiXFx1MjFBN1wiLFxuICBcImRyYmthcm93XCI6XCJcXHUyOTEwXCIsXG4gIFwiZHJjb3JuXCI6XCJcXHUyMzFGXCIsXG4gIFwiZHJjcm9wXCI6XCJcXHUyMzBDXCIsXG4gIFwiRHNjclwiOlwiXFx1RDgzNVxcdURDOUZcIixcbiAgXCJkc2NyXCI6XCJcXHVEODM1XFx1RENCOVwiLFxuICBcIkRTY3lcIjpcIlxcdTA0MDVcIixcbiAgXCJkc2N5XCI6XCJcXHUwNDU1XCIsXG4gIFwiZHNvbFwiOlwiXFx1MjlGNlwiLFxuICBcIkRzdHJva1wiOlwiXFx1MDExMFwiLFxuICBcImRzdHJva1wiOlwiXFx1MDExMVwiLFxuICBcImR0ZG90XCI6XCJcXHUyMkYxXCIsXG4gIFwiZHRyaVwiOlwiXFx1MjVCRlwiLFxuICBcImR0cmlmXCI6XCJcXHUyNUJFXCIsXG4gIFwiZHVhcnJcIjpcIlxcdTIxRjVcIixcbiAgXCJkdWhhclwiOlwiXFx1Mjk2RlwiLFxuICBcImR3YW5nbGVcIjpcIlxcdTI5QTZcIixcbiAgXCJEWmN5XCI6XCJcXHUwNDBGXCIsXG4gIFwiZHpjeVwiOlwiXFx1MDQ1RlwiLFxuICBcImR6aWdyYXJyXCI6XCJcXHUyN0ZGXCIsXG4gIFwiRWFjdXRlXCI6XCJcXHUwMEM5XCIsXG4gIFwiZWFjdXRlXCI6XCJcXHUwMEU5XCIsXG4gIFwiZWFzdGVyXCI6XCJcXHUyQTZFXCIsXG4gIFwiRWNhcm9uXCI6XCJcXHUwMTFBXCIsXG4gIFwiZWNhcm9uXCI6XCJcXHUwMTFCXCIsXG4gIFwiZWNpclwiOlwiXFx1MjI1NlwiLFxuICBcIkVjaXJjXCI6XCJcXHUwMENBXCIsXG4gIFwiZWNpcmNcIjpcIlxcdTAwRUFcIixcbiAgXCJlY29sb25cIjpcIlxcdTIyNTVcIixcbiAgXCJFY3lcIjpcIlxcdTA0MkRcIixcbiAgXCJlY3lcIjpcIlxcdTA0NERcIixcbiAgXCJlRERvdFwiOlwiXFx1MkE3N1wiLFxuICBcIkVkb3RcIjpcIlxcdTAxMTZcIixcbiAgXCJlRG90XCI6XCJcXHUyMjUxXCIsXG4gIFwiZWRvdFwiOlwiXFx1MDExN1wiLFxuICBcImVlXCI6XCJcXHUyMTQ3XCIsXG4gIFwiZWZEb3RcIjpcIlxcdTIyNTJcIixcbiAgXCJFZnJcIjpcIlxcdUQ4MzVcXHVERDA4XCIsXG4gIFwiZWZyXCI6XCJcXHVEODM1XFx1REQyMlwiLFxuICBcImVnXCI6XCJcXHUyQTlBXCIsXG4gIFwiRWdyYXZlXCI6XCJcXHUwMEM4XCIsXG4gIFwiZWdyYXZlXCI6XCJcXHUwMEU4XCIsXG4gIFwiZWdzXCI6XCJcXHUyQTk2XCIsXG4gIFwiZWdzZG90XCI6XCJcXHUyQTk4XCIsXG4gIFwiZWxcIjpcIlxcdTJBOTlcIixcbiAgXCJFbGVtZW50XCI6XCJcXHUyMjA4XCIsXG4gIFwiZWxpbnRlcnNcIjpcIlxcdTIzRTdcIixcbiAgXCJlbGxcIjpcIlxcdTIxMTNcIixcbiAgXCJlbHNcIjpcIlxcdTJBOTVcIixcbiAgXCJlbHNkb3RcIjpcIlxcdTJBOTdcIixcbiAgXCJFbWFjclwiOlwiXFx1MDExMlwiLFxuICBcImVtYWNyXCI6XCJcXHUwMTEzXCIsXG4gIFwiZW1wdHlcIjpcIlxcdTIyMDVcIixcbiAgXCJlbXB0eXNldFwiOlwiXFx1MjIwNVwiLFxuICBcIkVtcHR5U21hbGxTcXVhcmVcIjpcIlxcdTI1RkJcIixcbiAgXCJlbXB0eXZcIjpcIlxcdTIyMDVcIixcbiAgXCJFbXB0eVZlcnlTbWFsbFNxdWFyZVwiOlwiXFx1MjVBQlwiLFxuICBcImVtc3BcIjpcIlxcdTIwMDNcIixcbiAgXCJlbXNwMTNcIjpcIlxcdTIwMDRcIixcbiAgXCJlbXNwMTRcIjpcIlxcdTIwMDVcIixcbiAgXCJFTkdcIjpcIlxcdTAxNEFcIixcbiAgXCJlbmdcIjpcIlxcdTAxNEJcIixcbiAgXCJlbnNwXCI6XCJcXHUyMDAyXCIsXG4gIFwiRW9nb25cIjpcIlxcdTAxMThcIixcbiAgXCJlb2dvblwiOlwiXFx1MDExOVwiLFxuICBcIkVvcGZcIjpcIlxcdUQ4MzVcXHVERDNDXCIsXG4gIFwiZW9wZlwiOlwiXFx1RDgzNVxcdURENTZcIixcbiAgXCJlcGFyXCI6XCJcXHUyMkQ1XCIsXG4gIFwiZXBhcnNsXCI6XCJcXHUyOUUzXCIsXG4gIFwiZXBsdXNcIjpcIlxcdTJBNzFcIixcbiAgXCJlcHNpXCI6XCJcXHUwM0I1XCIsXG4gIFwiRXBzaWxvblwiOlwiXFx1MDM5NVwiLFxuICBcImVwc2lsb25cIjpcIlxcdTAzQjVcIixcbiAgXCJlcHNpdlwiOlwiXFx1MDNGNVwiLFxuICBcImVxY2lyY1wiOlwiXFx1MjI1NlwiLFxuICBcImVxY29sb25cIjpcIlxcdTIyNTVcIixcbiAgXCJlcXNpbVwiOlwiXFx1MjI0MlwiLFxuICBcImVxc2xhbnRndHJcIjpcIlxcdTJBOTZcIixcbiAgXCJlcXNsYW50bGVzc1wiOlwiXFx1MkE5NVwiLFxuICBcIkVxdWFsXCI6XCJcXHUyQTc1XCIsXG4gIFwiZXF1YWxzXCI6XCJcXHUwMDNEXCIsXG4gIFwiRXF1YWxUaWxkZVwiOlwiXFx1MjI0MlwiLFxuICBcImVxdWVzdFwiOlwiXFx1MjI1RlwiLFxuICBcIkVxdWlsaWJyaXVtXCI6XCJcXHUyMUNDXCIsXG4gIFwiZXF1aXZcIjpcIlxcdTIyNjFcIixcbiAgXCJlcXVpdkREXCI6XCJcXHUyQTc4XCIsXG4gIFwiZXF2cGFyc2xcIjpcIlxcdTI5RTVcIixcbiAgXCJlcmFyclwiOlwiXFx1Mjk3MVwiLFxuICBcImVyRG90XCI6XCJcXHUyMjUzXCIsXG4gIFwiRXNjclwiOlwiXFx1MjEzMFwiLFxuICBcImVzY3JcIjpcIlxcdTIxMkZcIixcbiAgXCJlc2RvdFwiOlwiXFx1MjI1MFwiLFxuICBcIkVzaW1cIjpcIlxcdTJBNzNcIixcbiAgXCJlc2ltXCI6XCJcXHUyMjQyXCIsXG4gIFwiRXRhXCI6XCJcXHUwMzk3XCIsXG4gIFwiZXRhXCI6XCJcXHUwM0I3XCIsXG4gIFwiRVRIXCI6XCJcXHUwMEQwXCIsXG4gIFwiZXRoXCI6XCJcXHUwMEYwXCIsXG4gIFwiRXVtbFwiOlwiXFx1MDBDQlwiLFxuICBcImV1bWxcIjpcIlxcdTAwRUJcIixcbiAgXCJldXJvXCI6XCJcXHUyMEFDXCIsXG4gIFwiZXhjbFwiOlwiXFx1MDAyMVwiLFxuICBcImV4aXN0XCI6XCJcXHUyMjAzXCIsXG4gIFwiRXhpc3RzXCI6XCJcXHUyMjAzXCIsXG4gIFwiZXhwZWN0YXRpb25cIjpcIlxcdTIxMzBcIixcbiAgXCJFeHBvbmVudGlhbEVcIjpcIlxcdTIxNDdcIixcbiAgXCJleHBvbmVudGlhbGVcIjpcIlxcdTIxNDdcIixcbiAgXCJmYWxsaW5nZG90c2VxXCI6XCJcXHUyMjUyXCIsXG4gIFwiRmN5XCI6XCJcXHUwNDI0XCIsXG4gIFwiZmN5XCI6XCJcXHUwNDQ0XCIsXG4gIFwiZmVtYWxlXCI6XCJcXHUyNjQwXCIsXG4gIFwiZmZpbGlnXCI6XCJcXHVGQjAzXCIsXG4gIFwiZmZsaWdcIjpcIlxcdUZCMDBcIixcbiAgXCJmZmxsaWdcIjpcIlxcdUZCMDRcIixcbiAgXCJGZnJcIjpcIlxcdUQ4MzVcXHVERDA5XCIsXG4gIFwiZmZyXCI6XCJcXHVEODM1XFx1REQyM1wiLFxuICBcImZpbGlnXCI6XCJcXHVGQjAxXCIsXG4gIFwiRmlsbGVkU21hbGxTcXVhcmVcIjpcIlxcdTI1RkNcIixcbiAgXCJGaWxsZWRWZXJ5U21hbGxTcXVhcmVcIjpcIlxcdTI1QUFcIixcbiAgXCJmamxpZ1wiOlwiXFx1MDA2NlxcdTAwNkFcIixcbiAgXCJmbGF0XCI6XCJcXHUyNjZEXCIsXG4gIFwiZmxsaWdcIjpcIlxcdUZCMDJcIixcbiAgXCJmbHRuc1wiOlwiXFx1MjVCMVwiLFxuICBcImZub2ZcIjpcIlxcdTAxOTJcIixcbiAgXCJGb3BmXCI6XCJcXHVEODM1XFx1REQzRFwiLFxuICBcImZvcGZcIjpcIlxcdUQ4MzVcXHVERDU3XCIsXG4gIFwiRm9yQWxsXCI6XCJcXHUyMjAwXCIsXG4gIFwiZm9yYWxsXCI6XCJcXHUyMjAwXCIsXG4gIFwiZm9ya1wiOlwiXFx1MjJENFwiLFxuICBcImZvcmt2XCI6XCJcXHUyQUQ5XCIsXG4gIFwiRm91cmllcnRyZlwiOlwiXFx1MjEzMVwiLFxuICBcImZwYXJ0aW50XCI6XCJcXHUyQTBEXCIsXG4gIFwiZnJhYzEyXCI6XCJcXHUwMEJEXCIsXG4gIFwiZnJhYzEzXCI6XCJcXHUyMTUzXCIsXG4gIFwiZnJhYzE0XCI6XCJcXHUwMEJDXCIsXG4gIFwiZnJhYzE1XCI6XCJcXHUyMTU1XCIsXG4gIFwiZnJhYzE2XCI6XCJcXHUyMTU5XCIsXG4gIFwiZnJhYzE4XCI6XCJcXHUyMTVCXCIsXG4gIFwiZnJhYzIzXCI6XCJcXHUyMTU0XCIsXG4gIFwiZnJhYzI1XCI6XCJcXHUyMTU2XCIsXG4gIFwiZnJhYzM0XCI6XCJcXHUwMEJFXCIsXG4gIFwiZnJhYzM1XCI6XCJcXHUyMTU3XCIsXG4gIFwiZnJhYzM4XCI6XCJcXHUyMTVDXCIsXG4gIFwiZnJhYzQ1XCI6XCJcXHUyMTU4XCIsXG4gIFwiZnJhYzU2XCI6XCJcXHUyMTVBXCIsXG4gIFwiZnJhYzU4XCI6XCJcXHUyMTVEXCIsXG4gIFwiZnJhYzc4XCI6XCJcXHUyMTVFXCIsXG4gIFwiZnJhc2xcIjpcIlxcdTIwNDRcIixcbiAgXCJmcm93blwiOlwiXFx1MjMyMlwiLFxuICBcIkZzY3JcIjpcIlxcdTIxMzFcIixcbiAgXCJmc2NyXCI6XCJcXHVEODM1XFx1RENCQlwiLFxuICBcImdhY3V0ZVwiOlwiXFx1MDFGNVwiLFxuICBcIkdhbW1hXCI6XCJcXHUwMzkzXCIsXG4gIFwiZ2FtbWFcIjpcIlxcdTAzQjNcIixcbiAgXCJHYW1tYWRcIjpcIlxcdTAzRENcIixcbiAgXCJnYW1tYWRcIjpcIlxcdTAzRERcIixcbiAgXCJnYXBcIjpcIlxcdTJBODZcIixcbiAgXCJHYnJldmVcIjpcIlxcdTAxMUVcIixcbiAgXCJnYnJldmVcIjpcIlxcdTAxMUZcIixcbiAgXCJHY2VkaWxcIjpcIlxcdTAxMjJcIixcbiAgXCJHY2lyY1wiOlwiXFx1MDExQ1wiLFxuICBcImdjaXJjXCI6XCJcXHUwMTFEXCIsXG4gIFwiR2N5XCI6XCJcXHUwNDEzXCIsXG4gIFwiZ2N5XCI6XCJcXHUwNDMzXCIsXG4gIFwiR2RvdFwiOlwiXFx1MDEyMFwiLFxuICBcImdkb3RcIjpcIlxcdTAxMjFcIixcbiAgXCJnRVwiOlwiXFx1MjI2N1wiLFxuICBcImdlXCI6XCJcXHUyMjY1XCIsXG4gIFwiZ0VsXCI6XCJcXHUyQThDXCIsXG4gIFwiZ2VsXCI6XCJcXHUyMkRCXCIsXG4gIFwiZ2VxXCI6XCJcXHUyMjY1XCIsXG4gIFwiZ2VxcVwiOlwiXFx1MjI2N1wiLFxuICBcImdlcXNsYW50XCI6XCJcXHUyQTdFXCIsXG4gIFwiZ2VzXCI6XCJcXHUyQTdFXCIsXG4gIFwiZ2VzY2NcIjpcIlxcdTJBQTlcIixcbiAgXCJnZXNkb3RcIjpcIlxcdTJBODBcIixcbiAgXCJnZXNkb3RvXCI6XCJcXHUyQTgyXCIsXG4gIFwiZ2VzZG90b2xcIjpcIlxcdTJBODRcIixcbiAgXCJnZXNsXCI6XCJcXHUyMkRCXFx1RkUwMFwiLFxuICBcImdlc2xlc1wiOlwiXFx1MkE5NFwiLFxuICBcIkdmclwiOlwiXFx1RDgzNVxcdUREMEFcIixcbiAgXCJnZnJcIjpcIlxcdUQ4MzVcXHVERDI0XCIsXG4gIFwiR2dcIjpcIlxcdTIyRDlcIixcbiAgXCJnZ1wiOlwiXFx1MjI2QlwiLFxuICBcImdnZ1wiOlwiXFx1MjJEOVwiLFxuICBcImdpbWVsXCI6XCJcXHUyMTM3XCIsXG4gIFwiR0pjeVwiOlwiXFx1MDQwM1wiLFxuICBcImdqY3lcIjpcIlxcdTA0NTNcIixcbiAgXCJnbFwiOlwiXFx1MjI3N1wiLFxuICBcImdsYVwiOlwiXFx1MkFBNVwiLFxuICBcImdsRVwiOlwiXFx1MkE5MlwiLFxuICBcImdsalwiOlwiXFx1MkFBNFwiLFxuICBcImduYXBcIjpcIlxcdTJBOEFcIixcbiAgXCJnbmFwcHJveFwiOlwiXFx1MkE4QVwiLFxuICBcImduRVwiOlwiXFx1MjI2OVwiLFxuICBcImduZVwiOlwiXFx1MkE4OFwiLFxuICBcImduZXFcIjpcIlxcdTJBODhcIixcbiAgXCJnbmVxcVwiOlwiXFx1MjI2OVwiLFxuICBcImduc2ltXCI6XCJcXHUyMkU3XCIsXG4gIFwiR29wZlwiOlwiXFx1RDgzNVxcdUREM0VcIixcbiAgXCJnb3BmXCI6XCJcXHVEODM1XFx1REQ1OFwiLFxuICBcImdyYXZlXCI6XCJcXHUwMDYwXCIsXG4gIFwiR3JlYXRlckVxdWFsXCI6XCJcXHUyMjY1XCIsXG4gIFwiR3JlYXRlckVxdWFsTGVzc1wiOlwiXFx1MjJEQlwiLFxuICBcIkdyZWF0ZXJGdWxsRXF1YWxcIjpcIlxcdTIyNjdcIixcbiAgXCJHcmVhdGVyR3JlYXRlclwiOlwiXFx1MkFBMlwiLFxuICBcIkdyZWF0ZXJMZXNzXCI6XCJcXHUyMjc3XCIsXG4gIFwiR3JlYXRlclNsYW50RXF1YWxcIjpcIlxcdTJBN0VcIixcbiAgXCJHcmVhdGVyVGlsZGVcIjpcIlxcdTIyNzNcIixcbiAgXCJHc2NyXCI6XCJcXHVEODM1XFx1RENBMlwiLFxuICBcImdzY3JcIjpcIlxcdTIxMEFcIixcbiAgXCJnc2ltXCI6XCJcXHUyMjczXCIsXG4gIFwiZ3NpbWVcIjpcIlxcdTJBOEVcIixcbiAgXCJnc2ltbFwiOlwiXFx1MkE5MFwiLFxuICBcIkdUXCI6XCJcXHUwMDNFXCIsXG4gIFwiR3RcIjpcIlxcdTIyNkJcIixcbiAgXCJndFwiOlwiXFx1MDAzRVwiLFxuICBcImd0Y2NcIjpcIlxcdTJBQTdcIixcbiAgXCJndGNpclwiOlwiXFx1MkE3QVwiLFxuICBcImd0ZG90XCI6XCJcXHUyMkQ3XCIsXG4gIFwiZ3RsUGFyXCI6XCJcXHUyOTk1XCIsXG4gIFwiZ3RxdWVzdFwiOlwiXFx1MkE3Q1wiLFxuICBcImd0cmFwcHJveFwiOlwiXFx1MkE4NlwiLFxuICBcImd0cmFyclwiOlwiXFx1Mjk3OFwiLFxuICBcImd0cmRvdFwiOlwiXFx1MjJEN1wiLFxuICBcImd0cmVxbGVzc1wiOlwiXFx1MjJEQlwiLFxuICBcImd0cmVxcWxlc3NcIjpcIlxcdTJBOENcIixcbiAgXCJndHJsZXNzXCI6XCJcXHUyMjc3XCIsXG4gIFwiZ3Ryc2ltXCI6XCJcXHUyMjczXCIsXG4gIFwiZ3ZlcnRuZXFxXCI6XCJcXHUyMjY5XFx1RkUwMFwiLFxuICBcImd2bkVcIjpcIlxcdTIyNjlcXHVGRTAwXCIsXG4gIFwiSGFjZWtcIjpcIlxcdTAyQzdcIixcbiAgXCJoYWlyc3BcIjpcIlxcdTIwMEFcIixcbiAgXCJoYWxmXCI6XCJcXHUwMEJEXCIsXG4gIFwiaGFtaWx0XCI6XCJcXHUyMTBCXCIsXG4gIFwiSEFSRGN5XCI6XCJcXHUwNDJBXCIsXG4gIFwiaGFyZGN5XCI6XCJcXHUwNDRBXCIsXG4gIFwiaEFyclwiOlwiXFx1MjFENFwiLFxuICBcImhhcnJcIjpcIlxcdTIxOTRcIixcbiAgXCJoYXJyY2lyXCI6XCJcXHUyOTQ4XCIsXG4gIFwiaGFycndcIjpcIlxcdTIxQURcIixcbiAgXCJIYXRcIjpcIlxcdTAwNUVcIixcbiAgXCJoYmFyXCI6XCJcXHUyMTBGXCIsXG4gIFwiSGNpcmNcIjpcIlxcdTAxMjRcIixcbiAgXCJoY2lyY1wiOlwiXFx1MDEyNVwiLFxuICBcImhlYXJ0c1wiOlwiXFx1MjY2NVwiLFxuICBcImhlYXJ0c3VpdFwiOlwiXFx1MjY2NVwiLFxuICBcImhlbGxpcFwiOlwiXFx1MjAyNlwiLFxuICBcImhlcmNvblwiOlwiXFx1MjJCOVwiLFxuICBcIkhmclwiOlwiXFx1MjEwQ1wiLFxuICBcImhmclwiOlwiXFx1RDgzNVxcdUREMjVcIixcbiAgXCJIaWxiZXJ0U3BhY2VcIjpcIlxcdTIxMEJcIixcbiAgXCJoa3NlYXJvd1wiOlwiXFx1MjkyNVwiLFxuICBcImhrc3dhcm93XCI6XCJcXHUyOTI2XCIsXG4gIFwiaG9hcnJcIjpcIlxcdTIxRkZcIixcbiAgXCJob210aHRcIjpcIlxcdTIyM0JcIixcbiAgXCJob29rbGVmdGFycm93XCI6XCJcXHUyMUE5XCIsXG4gIFwiaG9va3JpZ2h0YXJyb3dcIjpcIlxcdTIxQUFcIixcbiAgXCJIb3BmXCI6XCJcXHUyMTBEXCIsXG4gIFwiaG9wZlwiOlwiXFx1RDgzNVxcdURENTlcIixcbiAgXCJob3JiYXJcIjpcIlxcdTIwMTVcIixcbiAgXCJIb3Jpem9udGFsTGluZVwiOlwiXFx1MjUwMFwiLFxuICBcIkhzY3JcIjpcIlxcdTIxMEJcIixcbiAgXCJoc2NyXCI6XCJcXHVEODM1XFx1RENCRFwiLFxuICBcImhzbGFzaFwiOlwiXFx1MjEwRlwiLFxuICBcIkhzdHJva1wiOlwiXFx1MDEyNlwiLFxuICBcImhzdHJva1wiOlwiXFx1MDEyN1wiLFxuICBcIkh1bXBEb3duSHVtcFwiOlwiXFx1MjI0RVwiLFxuICBcIkh1bXBFcXVhbFwiOlwiXFx1MjI0RlwiLFxuICBcImh5YnVsbFwiOlwiXFx1MjA0M1wiLFxuICBcImh5cGhlblwiOlwiXFx1MjAxMFwiLFxuICBcIklhY3V0ZVwiOlwiXFx1MDBDRFwiLFxuICBcImlhY3V0ZVwiOlwiXFx1MDBFRFwiLFxuICBcImljXCI6XCJcXHUyMDYzXCIsXG4gIFwiSWNpcmNcIjpcIlxcdTAwQ0VcIixcbiAgXCJpY2lyY1wiOlwiXFx1MDBFRVwiLFxuICBcIkljeVwiOlwiXFx1MDQxOFwiLFxuICBcImljeVwiOlwiXFx1MDQzOFwiLFxuICBcIklkb3RcIjpcIlxcdTAxMzBcIixcbiAgXCJJRWN5XCI6XCJcXHUwNDE1XCIsXG4gIFwiaWVjeVwiOlwiXFx1MDQzNVwiLFxuICBcImlleGNsXCI6XCJcXHUwMEExXCIsXG4gIFwiaWZmXCI6XCJcXHUyMUQ0XCIsXG4gIFwiSWZyXCI6XCJcXHUyMTExXCIsXG4gIFwiaWZyXCI6XCJcXHVEODM1XFx1REQyNlwiLFxuICBcIklncmF2ZVwiOlwiXFx1MDBDQ1wiLFxuICBcImlncmF2ZVwiOlwiXFx1MDBFQ1wiLFxuICBcImlpXCI6XCJcXHUyMTQ4XCIsXG4gIFwiaWlpaW50XCI6XCJcXHUyQTBDXCIsXG4gIFwiaWlpbnRcIjpcIlxcdTIyMkRcIixcbiAgXCJpaW5maW5cIjpcIlxcdTI5RENcIixcbiAgXCJpaW90YVwiOlwiXFx1MjEyOVwiLFxuICBcIklKbGlnXCI6XCJcXHUwMTMyXCIsXG4gIFwiaWpsaWdcIjpcIlxcdTAxMzNcIixcbiAgXCJJbVwiOlwiXFx1MjExMVwiLFxuICBcIkltYWNyXCI6XCJcXHUwMTJBXCIsXG4gIFwiaW1hY3JcIjpcIlxcdTAxMkJcIixcbiAgXCJpbWFnZVwiOlwiXFx1MjExMVwiLFxuICBcIkltYWdpbmFyeUlcIjpcIlxcdTIxNDhcIixcbiAgXCJpbWFnbGluZVwiOlwiXFx1MjExMFwiLFxuICBcImltYWdwYXJ0XCI6XCJcXHUyMTExXCIsXG4gIFwiaW1hdGhcIjpcIlxcdTAxMzFcIixcbiAgXCJpbW9mXCI6XCJcXHUyMkI3XCIsXG4gIFwiaW1wZWRcIjpcIlxcdTAxQjVcIixcbiAgXCJJbXBsaWVzXCI6XCJcXHUyMUQyXCIsXG4gIFwiaW5cIjpcIlxcdTIyMDhcIixcbiAgXCJpbmNhcmVcIjpcIlxcdTIxMDVcIixcbiAgXCJpbmZpblwiOlwiXFx1MjIxRVwiLFxuICBcImluZmludGllXCI6XCJcXHUyOUREXCIsXG4gIFwiaW5vZG90XCI6XCJcXHUwMTMxXCIsXG4gIFwiSW50XCI6XCJcXHUyMjJDXCIsXG4gIFwiaW50XCI6XCJcXHUyMjJCXCIsXG4gIFwiaW50Y2FsXCI6XCJcXHUyMkJBXCIsXG4gIFwiaW50ZWdlcnNcIjpcIlxcdTIxMjRcIixcbiAgXCJJbnRlZ3JhbFwiOlwiXFx1MjIyQlwiLFxuICBcImludGVyY2FsXCI6XCJcXHUyMkJBXCIsXG4gIFwiSW50ZXJzZWN0aW9uXCI6XCJcXHUyMkMyXCIsXG4gIFwiaW50bGFyaGtcIjpcIlxcdTJBMTdcIixcbiAgXCJpbnRwcm9kXCI6XCJcXHUyQTNDXCIsXG4gIFwiSW52aXNpYmxlQ29tbWFcIjpcIlxcdTIwNjNcIixcbiAgXCJJbnZpc2libGVUaW1lc1wiOlwiXFx1MjA2MlwiLFxuICBcIklPY3lcIjpcIlxcdTA0MDFcIixcbiAgXCJpb2N5XCI6XCJcXHUwNDUxXCIsXG4gIFwiSW9nb25cIjpcIlxcdTAxMkVcIixcbiAgXCJpb2dvblwiOlwiXFx1MDEyRlwiLFxuICBcIklvcGZcIjpcIlxcdUQ4MzVcXHVERDQwXCIsXG4gIFwiaW9wZlwiOlwiXFx1RDgzNVxcdURENUFcIixcbiAgXCJJb3RhXCI6XCJcXHUwMzk5XCIsXG4gIFwiaW90YVwiOlwiXFx1MDNCOVwiLFxuICBcImlwcm9kXCI6XCJcXHUyQTNDXCIsXG4gIFwiaXF1ZXN0XCI6XCJcXHUwMEJGXCIsXG4gIFwiSXNjclwiOlwiXFx1MjExMFwiLFxuICBcImlzY3JcIjpcIlxcdUQ4MzVcXHVEQ0JFXCIsXG4gIFwiaXNpblwiOlwiXFx1MjIwOFwiLFxuICBcImlzaW5kb3RcIjpcIlxcdTIyRjVcIixcbiAgXCJpc2luRVwiOlwiXFx1MjJGOVwiLFxuICBcImlzaW5zXCI6XCJcXHUyMkY0XCIsXG4gIFwiaXNpbnN2XCI6XCJcXHUyMkYzXCIsXG4gIFwiaXNpbnZcIjpcIlxcdTIyMDhcIixcbiAgXCJpdFwiOlwiXFx1MjA2MlwiLFxuICBcIkl0aWxkZVwiOlwiXFx1MDEyOFwiLFxuICBcIml0aWxkZVwiOlwiXFx1MDEyOVwiLFxuICBcIkl1a2N5XCI6XCJcXHUwNDA2XCIsXG4gIFwiaXVrY3lcIjpcIlxcdTA0NTZcIixcbiAgXCJJdW1sXCI6XCJcXHUwMENGXCIsXG4gIFwiaXVtbFwiOlwiXFx1MDBFRlwiLFxuICBcIkpjaXJjXCI6XCJcXHUwMTM0XCIsXG4gIFwiamNpcmNcIjpcIlxcdTAxMzVcIixcbiAgXCJKY3lcIjpcIlxcdTA0MTlcIixcbiAgXCJqY3lcIjpcIlxcdTA0MzlcIixcbiAgXCJKZnJcIjpcIlxcdUQ4MzVcXHVERDBEXCIsXG4gIFwiamZyXCI6XCJcXHVEODM1XFx1REQyN1wiLFxuICBcImptYXRoXCI6XCJcXHUwMjM3XCIsXG4gIFwiSm9wZlwiOlwiXFx1RDgzNVxcdURENDFcIixcbiAgXCJqb3BmXCI6XCJcXHVEODM1XFx1REQ1QlwiLFxuICBcIkpzY3JcIjpcIlxcdUQ4MzVcXHVEQ0E1XCIsXG4gIFwianNjclwiOlwiXFx1RDgzNVxcdURDQkZcIixcbiAgXCJKc2VyY3lcIjpcIlxcdTA0MDhcIixcbiAgXCJqc2VyY3lcIjpcIlxcdTA0NThcIixcbiAgXCJKdWtjeVwiOlwiXFx1MDQwNFwiLFxuICBcImp1a2N5XCI6XCJcXHUwNDU0XCIsXG4gIFwiS2FwcGFcIjpcIlxcdTAzOUFcIixcbiAgXCJrYXBwYVwiOlwiXFx1MDNCQVwiLFxuICBcImthcHBhdlwiOlwiXFx1MDNGMFwiLFxuICBcIktjZWRpbFwiOlwiXFx1MDEzNlwiLFxuICBcImtjZWRpbFwiOlwiXFx1MDEzN1wiLFxuICBcIktjeVwiOlwiXFx1MDQxQVwiLFxuICBcImtjeVwiOlwiXFx1MDQzQVwiLFxuICBcIktmclwiOlwiXFx1RDgzNVxcdUREMEVcIixcbiAgXCJrZnJcIjpcIlxcdUQ4MzVcXHVERDI4XCIsXG4gIFwia2dyZWVuXCI6XCJcXHUwMTM4XCIsXG4gIFwiS0hjeVwiOlwiXFx1MDQyNVwiLFxuICBcImtoY3lcIjpcIlxcdTA0NDVcIixcbiAgXCJLSmN5XCI6XCJcXHUwNDBDXCIsXG4gIFwia2pjeVwiOlwiXFx1MDQ1Q1wiLFxuICBcIktvcGZcIjpcIlxcdUQ4MzVcXHVERDQyXCIsXG4gIFwia29wZlwiOlwiXFx1RDgzNVxcdURENUNcIixcbiAgXCJLc2NyXCI6XCJcXHVEODM1XFx1RENBNlwiLFxuICBcImtzY3JcIjpcIlxcdUQ4MzVcXHVEQ0MwXCIsXG4gIFwibEFhcnJcIjpcIlxcdTIxREFcIixcbiAgXCJMYWN1dGVcIjpcIlxcdTAxMzlcIixcbiAgXCJsYWN1dGVcIjpcIlxcdTAxM0FcIixcbiAgXCJsYWVtcHR5dlwiOlwiXFx1MjlCNFwiLFxuICBcImxhZ3JhblwiOlwiXFx1MjExMlwiLFxuICBcIkxhbWJkYVwiOlwiXFx1MDM5QlwiLFxuICBcImxhbWJkYVwiOlwiXFx1MDNCQlwiLFxuICBcIkxhbmdcIjpcIlxcdTI3RUFcIixcbiAgXCJsYW5nXCI6XCJcXHUyN0U4XCIsXG4gIFwibGFuZ2RcIjpcIlxcdTI5OTFcIixcbiAgXCJsYW5nbGVcIjpcIlxcdTI3RThcIixcbiAgXCJsYXBcIjpcIlxcdTJBODVcIixcbiAgXCJMYXBsYWNldHJmXCI6XCJcXHUyMTEyXCIsXG4gIFwibGFxdW9cIjpcIlxcdTAwQUJcIixcbiAgXCJMYXJyXCI6XCJcXHUyMTlFXCIsXG4gIFwibEFyclwiOlwiXFx1MjFEMFwiLFxuICBcImxhcnJcIjpcIlxcdTIxOTBcIixcbiAgXCJsYXJyYlwiOlwiXFx1MjFFNFwiLFxuICBcImxhcnJiZnNcIjpcIlxcdTI5MUZcIixcbiAgXCJsYXJyZnNcIjpcIlxcdTI5MURcIixcbiAgXCJsYXJyaGtcIjpcIlxcdTIxQTlcIixcbiAgXCJsYXJybHBcIjpcIlxcdTIxQUJcIixcbiAgXCJsYXJycGxcIjpcIlxcdTI5MzlcIixcbiAgXCJsYXJyc2ltXCI6XCJcXHUyOTczXCIsXG4gIFwibGFycnRsXCI6XCJcXHUyMUEyXCIsXG4gIFwibGF0XCI6XCJcXHUyQUFCXCIsXG4gIFwibEF0YWlsXCI6XCJcXHUyOTFCXCIsXG4gIFwibGF0YWlsXCI6XCJcXHUyOTE5XCIsXG4gIFwibGF0ZVwiOlwiXFx1MkFBRFwiLFxuICBcImxhdGVzXCI6XCJcXHUyQUFEXFx1RkUwMFwiLFxuICBcImxCYXJyXCI6XCJcXHUyOTBFXCIsXG4gIFwibGJhcnJcIjpcIlxcdTI5MENcIixcbiAgXCJsYmJya1wiOlwiXFx1Mjc3MlwiLFxuICBcImxicmFjZVwiOlwiXFx1MDA3QlwiLFxuICBcImxicmFja1wiOlwiXFx1MDA1QlwiLFxuICBcImxicmtlXCI6XCJcXHUyOThCXCIsXG4gIFwibGJya3NsZFwiOlwiXFx1Mjk4RlwiLFxuICBcImxicmtzbHVcIjpcIlxcdTI5OERcIixcbiAgXCJMY2Fyb25cIjpcIlxcdTAxM0RcIixcbiAgXCJsY2Fyb25cIjpcIlxcdTAxM0VcIixcbiAgXCJMY2VkaWxcIjpcIlxcdTAxM0JcIixcbiAgXCJsY2VkaWxcIjpcIlxcdTAxM0NcIixcbiAgXCJsY2VpbFwiOlwiXFx1MjMwOFwiLFxuICBcImxjdWJcIjpcIlxcdTAwN0JcIixcbiAgXCJMY3lcIjpcIlxcdTA0MUJcIixcbiAgXCJsY3lcIjpcIlxcdTA0M0JcIixcbiAgXCJsZGNhXCI6XCJcXHUyOTM2XCIsXG4gIFwibGRxdW9cIjpcIlxcdTIwMUNcIixcbiAgXCJsZHF1b3JcIjpcIlxcdTIwMUVcIixcbiAgXCJsZHJkaGFyXCI6XCJcXHUyOTY3XCIsXG4gIFwibGRydXNoYXJcIjpcIlxcdTI5NEJcIixcbiAgXCJsZHNoXCI6XCJcXHUyMUIyXCIsXG4gIFwibEVcIjpcIlxcdTIyNjZcIixcbiAgXCJsZVwiOlwiXFx1MjI2NFwiLFxuICBcIkxlZnRBbmdsZUJyYWNrZXRcIjpcIlxcdTI3RThcIixcbiAgXCJMZWZ0QXJyb3dcIjpcIlxcdTIxOTBcIixcbiAgXCJMZWZ0YXJyb3dcIjpcIlxcdTIxRDBcIixcbiAgXCJsZWZ0YXJyb3dcIjpcIlxcdTIxOTBcIixcbiAgXCJMZWZ0QXJyb3dCYXJcIjpcIlxcdTIxRTRcIixcbiAgXCJMZWZ0QXJyb3dSaWdodEFycm93XCI6XCJcXHUyMUM2XCIsXG4gIFwibGVmdGFycm93dGFpbFwiOlwiXFx1MjFBMlwiLFxuICBcIkxlZnRDZWlsaW5nXCI6XCJcXHUyMzA4XCIsXG4gIFwiTGVmdERvdWJsZUJyYWNrZXRcIjpcIlxcdTI3RTZcIixcbiAgXCJMZWZ0RG93blRlZVZlY3RvclwiOlwiXFx1Mjk2MVwiLFxuICBcIkxlZnREb3duVmVjdG9yXCI6XCJcXHUyMUMzXCIsXG4gIFwiTGVmdERvd25WZWN0b3JCYXJcIjpcIlxcdTI5NTlcIixcbiAgXCJMZWZ0Rmxvb3JcIjpcIlxcdTIzMEFcIixcbiAgXCJsZWZ0aGFycG9vbmRvd25cIjpcIlxcdTIxQkRcIixcbiAgXCJsZWZ0aGFycG9vbnVwXCI6XCJcXHUyMUJDXCIsXG4gIFwibGVmdGxlZnRhcnJvd3NcIjpcIlxcdTIxQzdcIixcbiAgXCJMZWZ0UmlnaHRBcnJvd1wiOlwiXFx1MjE5NFwiLFxuICBcIkxlZnRyaWdodGFycm93XCI6XCJcXHUyMUQ0XCIsXG4gIFwibGVmdHJpZ2h0YXJyb3dcIjpcIlxcdTIxOTRcIixcbiAgXCJsZWZ0cmlnaHRhcnJvd3NcIjpcIlxcdTIxQzZcIixcbiAgXCJsZWZ0cmlnaHRoYXJwb29uc1wiOlwiXFx1MjFDQlwiLFxuICBcImxlZnRyaWdodHNxdWlnYXJyb3dcIjpcIlxcdTIxQURcIixcbiAgXCJMZWZ0UmlnaHRWZWN0b3JcIjpcIlxcdTI5NEVcIixcbiAgXCJMZWZ0VGVlXCI6XCJcXHUyMkEzXCIsXG4gIFwiTGVmdFRlZUFycm93XCI6XCJcXHUyMUE0XCIsXG4gIFwiTGVmdFRlZVZlY3RvclwiOlwiXFx1Mjk1QVwiLFxuICBcImxlZnR0aHJlZXRpbWVzXCI6XCJcXHUyMkNCXCIsXG4gIFwiTGVmdFRyaWFuZ2xlXCI6XCJcXHUyMkIyXCIsXG4gIFwiTGVmdFRyaWFuZ2xlQmFyXCI6XCJcXHUyOUNGXCIsXG4gIFwiTGVmdFRyaWFuZ2xlRXF1YWxcIjpcIlxcdTIyQjRcIixcbiAgXCJMZWZ0VXBEb3duVmVjdG9yXCI6XCJcXHUyOTUxXCIsXG4gIFwiTGVmdFVwVGVlVmVjdG9yXCI6XCJcXHUyOTYwXCIsXG4gIFwiTGVmdFVwVmVjdG9yXCI6XCJcXHUyMUJGXCIsXG4gIFwiTGVmdFVwVmVjdG9yQmFyXCI6XCJcXHUyOTU4XCIsXG4gIFwiTGVmdFZlY3RvclwiOlwiXFx1MjFCQ1wiLFxuICBcIkxlZnRWZWN0b3JCYXJcIjpcIlxcdTI5NTJcIixcbiAgXCJsRWdcIjpcIlxcdTJBOEJcIixcbiAgXCJsZWdcIjpcIlxcdTIyREFcIixcbiAgXCJsZXFcIjpcIlxcdTIyNjRcIixcbiAgXCJsZXFxXCI6XCJcXHUyMjY2XCIsXG4gIFwibGVxc2xhbnRcIjpcIlxcdTJBN0RcIixcbiAgXCJsZXNcIjpcIlxcdTJBN0RcIixcbiAgXCJsZXNjY1wiOlwiXFx1MkFBOFwiLFxuICBcImxlc2RvdFwiOlwiXFx1MkE3RlwiLFxuICBcImxlc2RvdG9cIjpcIlxcdTJBODFcIixcbiAgXCJsZXNkb3RvclwiOlwiXFx1MkE4M1wiLFxuICBcImxlc2dcIjpcIlxcdTIyREFcXHVGRTAwXCIsXG4gIFwibGVzZ2VzXCI6XCJcXHUyQTkzXCIsXG4gIFwibGVzc2FwcHJveFwiOlwiXFx1MkE4NVwiLFxuICBcImxlc3Nkb3RcIjpcIlxcdTIyRDZcIixcbiAgXCJsZXNzZXFndHJcIjpcIlxcdTIyREFcIixcbiAgXCJsZXNzZXFxZ3RyXCI6XCJcXHUyQThCXCIsXG4gIFwiTGVzc0VxdWFsR3JlYXRlclwiOlwiXFx1MjJEQVwiLFxuICBcIkxlc3NGdWxsRXF1YWxcIjpcIlxcdTIyNjZcIixcbiAgXCJMZXNzR3JlYXRlclwiOlwiXFx1MjI3NlwiLFxuICBcImxlc3NndHJcIjpcIlxcdTIyNzZcIixcbiAgXCJMZXNzTGVzc1wiOlwiXFx1MkFBMVwiLFxuICBcImxlc3NzaW1cIjpcIlxcdTIyNzJcIixcbiAgXCJMZXNzU2xhbnRFcXVhbFwiOlwiXFx1MkE3RFwiLFxuICBcIkxlc3NUaWxkZVwiOlwiXFx1MjI3MlwiLFxuICBcImxmaXNodFwiOlwiXFx1Mjk3Q1wiLFxuICBcImxmbG9vclwiOlwiXFx1MjMwQVwiLFxuICBcIkxmclwiOlwiXFx1RDgzNVxcdUREMEZcIixcbiAgXCJsZnJcIjpcIlxcdUQ4MzVcXHVERDI5XCIsXG4gIFwibGdcIjpcIlxcdTIyNzZcIixcbiAgXCJsZ0VcIjpcIlxcdTJBOTFcIixcbiAgXCJsSGFyXCI6XCJcXHUyOTYyXCIsXG4gIFwibGhhcmRcIjpcIlxcdTIxQkRcIixcbiAgXCJsaGFydVwiOlwiXFx1MjFCQ1wiLFxuICBcImxoYXJ1bFwiOlwiXFx1Mjk2QVwiLFxuICBcImxoYmxrXCI6XCJcXHUyNTg0XCIsXG4gIFwiTEpjeVwiOlwiXFx1MDQwOVwiLFxuICBcImxqY3lcIjpcIlxcdTA0NTlcIixcbiAgXCJMbFwiOlwiXFx1MjJEOFwiLFxuICBcImxsXCI6XCJcXHUyMjZBXCIsXG4gIFwibGxhcnJcIjpcIlxcdTIxQzdcIixcbiAgXCJsbGNvcm5lclwiOlwiXFx1MjMxRVwiLFxuICBcIkxsZWZ0YXJyb3dcIjpcIlxcdTIxREFcIixcbiAgXCJsbGhhcmRcIjpcIlxcdTI5NkJcIixcbiAgXCJsbHRyaVwiOlwiXFx1MjVGQVwiLFxuICBcIkxtaWRvdFwiOlwiXFx1MDEzRlwiLFxuICBcImxtaWRvdFwiOlwiXFx1MDE0MFwiLFxuICBcImxtb3VzdFwiOlwiXFx1MjNCMFwiLFxuICBcImxtb3VzdGFjaGVcIjpcIlxcdTIzQjBcIixcbiAgXCJsbmFwXCI6XCJcXHUyQTg5XCIsXG4gIFwibG5hcHByb3hcIjpcIlxcdTJBODlcIixcbiAgXCJsbkVcIjpcIlxcdTIyNjhcIixcbiAgXCJsbmVcIjpcIlxcdTJBODdcIixcbiAgXCJsbmVxXCI6XCJcXHUyQTg3XCIsXG4gIFwibG5lcXFcIjpcIlxcdTIyNjhcIixcbiAgXCJsbnNpbVwiOlwiXFx1MjJFNlwiLFxuICBcImxvYW5nXCI6XCJcXHUyN0VDXCIsXG4gIFwibG9hcnJcIjpcIlxcdTIxRkRcIixcbiAgXCJsb2Jya1wiOlwiXFx1MjdFNlwiLFxuICBcIkxvbmdMZWZ0QXJyb3dcIjpcIlxcdTI3RjVcIixcbiAgXCJMb25nbGVmdGFycm93XCI6XCJcXHUyN0Y4XCIsXG4gIFwibG9uZ2xlZnRhcnJvd1wiOlwiXFx1MjdGNVwiLFxuICBcIkxvbmdMZWZ0UmlnaHRBcnJvd1wiOlwiXFx1MjdGN1wiLFxuICBcIkxvbmdsZWZ0cmlnaHRhcnJvd1wiOlwiXFx1MjdGQVwiLFxuICBcImxvbmdsZWZ0cmlnaHRhcnJvd1wiOlwiXFx1MjdGN1wiLFxuICBcImxvbmdtYXBzdG9cIjpcIlxcdTI3RkNcIixcbiAgXCJMb25nUmlnaHRBcnJvd1wiOlwiXFx1MjdGNlwiLFxuICBcIkxvbmdyaWdodGFycm93XCI6XCJcXHUyN0Y5XCIsXG4gIFwibG9uZ3JpZ2h0YXJyb3dcIjpcIlxcdTI3RjZcIixcbiAgXCJsb29wYXJyb3dsZWZ0XCI6XCJcXHUyMUFCXCIsXG4gIFwibG9vcGFycm93cmlnaHRcIjpcIlxcdTIxQUNcIixcbiAgXCJsb3BhclwiOlwiXFx1Mjk4NVwiLFxuICBcIkxvcGZcIjpcIlxcdUQ4MzVcXHVERDQzXCIsXG4gIFwibG9wZlwiOlwiXFx1RDgzNVxcdURENURcIixcbiAgXCJsb3BsdXNcIjpcIlxcdTJBMkRcIixcbiAgXCJsb3RpbWVzXCI6XCJcXHUyQTM0XCIsXG4gIFwibG93YXN0XCI6XCJcXHUyMjE3XCIsXG4gIFwibG93YmFyXCI6XCJcXHUwMDVGXCIsXG4gIFwiTG93ZXJMZWZ0QXJyb3dcIjpcIlxcdTIxOTlcIixcbiAgXCJMb3dlclJpZ2h0QXJyb3dcIjpcIlxcdTIxOThcIixcbiAgXCJsb3pcIjpcIlxcdTI1Q0FcIixcbiAgXCJsb3plbmdlXCI6XCJcXHUyNUNBXCIsXG4gIFwibG96ZlwiOlwiXFx1MjlFQlwiLFxuICBcImxwYXJcIjpcIlxcdTAwMjhcIixcbiAgXCJscGFybHRcIjpcIlxcdTI5OTNcIixcbiAgXCJscmFyclwiOlwiXFx1MjFDNlwiLFxuICBcImxyY29ybmVyXCI6XCJcXHUyMzFGXCIsXG4gIFwibHJoYXJcIjpcIlxcdTIxQ0JcIixcbiAgXCJscmhhcmRcIjpcIlxcdTI5NkRcIixcbiAgXCJscm1cIjpcIlxcdTIwMEVcIixcbiAgXCJscnRyaVwiOlwiXFx1MjJCRlwiLFxuICBcImxzYXF1b1wiOlwiXFx1MjAzOVwiLFxuICBcIkxzY3JcIjpcIlxcdTIxMTJcIixcbiAgXCJsc2NyXCI6XCJcXHVEODM1XFx1RENDMVwiLFxuICBcIkxzaFwiOlwiXFx1MjFCMFwiLFxuICBcImxzaFwiOlwiXFx1MjFCMFwiLFxuICBcImxzaW1cIjpcIlxcdTIyNzJcIixcbiAgXCJsc2ltZVwiOlwiXFx1MkE4RFwiLFxuICBcImxzaW1nXCI6XCJcXHUyQThGXCIsXG4gIFwibHNxYlwiOlwiXFx1MDA1QlwiLFxuICBcImxzcXVvXCI6XCJcXHUyMDE4XCIsXG4gIFwibHNxdW9yXCI6XCJcXHUyMDFBXCIsXG4gIFwiTHN0cm9rXCI6XCJcXHUwMTQxXCIsXG4gIFwibHN0cm9rXCI6XCJcXHUwMTQyXCIsXG4gIFwiTFRcIjpcIlxcdTAwM0NcIixcbiAgXCJMdFwiOlwiXFx1MjI2QVwiLFxuICBcImx0XCI6XCJcXHUwMDNDXCIsXG4gIFwibHRjY1wiOlwiXFx1MkFBNlwiLFxuICBcImx0Y2lyXCI6XCJcXHUyQTc5XCIsXG4gIFwibHRkb3RcIjpcIlxcdTIyRDZcIixcbiAgXCJsdGhyZWVcIjpcIlxcdTIyQ0JcIixcbiAgXCJsdGltZXNcIjpcIlxcdTIyQzlcIixcbiAgXCJsdGxhcnJcIjpcIlxcdTI5NzZcIixcbiAgXCJsdHF1ZXN0XCI6XCJcXHUyQTdCXCIsXG4gIFwibHRyaVwiOlwiXFx1MjVDM1wiLFxuICBcImx0cmllXCI6XCJcXHUyMkI0XCIsXG4gIFwibHRyaWZcIjpcIlxcdTI1QzJcIixcbiAgXCJsdHJQYXJcIjpcIlxcdTI5OTZcIixcbiAgXCJsdXJkc2hhclwiOlwiXFx1Mjk0QVwiLFxuICBcImx1cnVoYXJcIjpcIlxcdTI5NjZcIixcbiAgXCJsdmVydG5lcXFcIjpcIlxcdTIyNjhcXHVGRTAwXCIsXG4gIFwibHZuRVwiOlwiXFx1MjI2OFxcdUZFMDBcIixcbiAgXCJtYWNyXCI6XCJcXHUwMEFGXCIsXG4gIFwibWFsZVwiOlwiXFx1MjY0MlwiLFxuICBcIm1hbHRcIjpcIlxcdTI3MjBcIixcbiAgXCJtYWx0ZXNlXCI6XCJcXHUyNzIwXCIsXG4gIFwiTWFwXCI6XCJcXHUyOTA1XCIsXG4gIFwibWFwXCI6XCJcXHUyMUE2XCIsXG4gIFwibWFwc3RvXCI6XCJcXHUyMUE2XCIsXG4gIFwibWFwc3RvZG93blwiOlwiXFx1MjFBN1wiLFxuICBcIm1hcHN0b2xlZnRcIjpcIlxcdTIxQTRcIixcbiAgXCJtYXBzdG91cFwiOlwiXFx1MjFBNVwiLFxuICBcIm1hcmtlclwiOlwiXFx1MjVBRVwiLFxuICBcIm1jb21tYVwiOlwiXFx1MkEyOVwiLFxuICBcIk1jeVwiOlwiXFx1MDQxQ1wiLFxuICBcIm1jeVwiOlwiXFx1MDQzQ1wiLFxuICBcIm1kYXNoXCI6XCJcXHUyMDE0XCIsXG4gIFwibUREb3RcIjpcIlxcdTIyM0FcIixcbiAgXCJtZWFzdXJlZGFuZ2xlXCI6XCJcXHUyMjIxXCIsXG4gIFwiTWVkaXVtU3BhY2VcIjpcIlxcdTIwNUZcIixcbiAgXCJNZWxsaW50cmZcIjpcIlxcdTIxMzNcIixcbiAgXCJNZnJcIjpcIlxcdUQ4MzVcXHVERDEwXCIsXG4gIFwibWZyXCI6XCJcXHVEODM1XFx1REQyQVwiLFxuICBcIm1ob1wiOlwiXFx1MjEyN1wiLFxuICBcIm1pY3JvXCI6XCJcXHUwMEI1XCIsXG4gIFwibWlkXCI6XCJcXHUyMjIzXCIsXG4gIFwibWlkYXN0XCI6XCJcXHUwMDJBXCIsXG4gIFwibWlkY2lyXCI6XCJcXHUyQUYwXCIsXG4gIFwibWlkZG90XCI6XCJcXHUwMEI3XCIsXG4gIFwibWludXNcIjpcIlxcdTIyMTJcIixcbiAgXCJtaW51c2JcIjpcIlxcdTIyOUZcIixcbiAgXCJtaW51c2RcIjpcIlxcdTIyMzhcIixcbiAgXCJtaW51c2R1XCI6XCJcXHUyQTJBXCIsXG4gIFwiTWludXNQbHVzXCI6XCJcXHUyMjEzXCIsXG4gIFwibWxjcFwiOlwiXFx1MkFEQlwiLFxuICBcIm1sZHJcIjpcIlxcdTIwMjZcIixcbiAgXCJtbnBsdXNcIjpcIlxcdTIyMTNcIixcbiAgXCJtb2RlbHNcIjpcIlxcdTIyQTdcIixcbiAgXCJNb3BmXCI6XCJcXHVEODM1XFx1REQ0NFwiLFxuICBcIm1vcGZcIjpcIlxcdUQ4MzVcXHVERDVFXCIsXG4gIFwibXBcIjpcIlxcdTIyMTNcIixcbiAgXCJNc2NyXCI6XCJcXHUyMTMzXCIsXG4gIFwibXNjclwiOlwiXFx1RDgzNVxcdURDQzJcIixcbiAgXCJtc3Rwb3NcIjpcIlxcdTIyM0VcIixcbiAgXCJNdVwiOlwiXFx1MDM5Q1wiLFxuICBcIm11XCI6XCJcXHUwM0JDXCIsXG4gIFwibXVsdGltYXBcIjpcIlxcdTIyQjhcIixcbiAgXCJtdW1hcFwiOlwiXFx1MjJCOFwiLFxuICBcIm5hYmxhXCI6XCJcXHUyMjA3XCIsXG4gIFwiTmFjdXRlXCI6XCJcXHUwMTQzXCIsXG4gIFwibmFjdXRlXCI6XCJcXHUwMTQ0XCIsXG4gIFwibmFuZ1wiOlwiXFx1MjIyMFxcdTIwRDJcIixcbiAgXCJuYXBcIjpcIlxcdTIyNDlcIixcbiAgXCJuYXBFXCI6XCJcXHUyQTcwXFx1MDMzOFwiLFxuICBcIm5hcGlkXCI6XCJcXHUyMjRCXFx1MDMzOFwiLFxuICBcIm5hcG9zXCI6XCJcXHUwMTQ5XCIsXG4gIFwibmFwcHJveFwiOlwiXFx1MjI0OVwiLFxuICBcIm5hdHVyXCI6XCJcXHUyNjZFXCIsXG4gIFwibmF0dXJhbFwiOlwiXFx1MjY2RVwiLFxuICBcIm5hdHVyYWxzXCI6XCJcXHUyMTE1XCIsXG4gIFwibmJzcFwiOlwiXFx1MDBBMFwiLFxuICBcIm5idW1wXCI6XCJcXHUyMjRFXFx1MDMzOFwiLFxuICBcIm5idW1wZVwiOlwiXFx1MjI0RlxcdTAzMzhcIixcbiAgXCJuY2FwXCI6XCJcXHUyQTQzXCIsXG4gIFwiTmNhcm9uXCI6XCJcXHUwMTQ3XCIsXG4gIFwibmNhcm9uXCI6XCJcXHUwMTQ4XCIsXG4gIFwiTmNlZGlsXCI6XCJcXHUwMTQ1XCIsXG4gIFwibmNlZGlsXCI6XCJcXHUwMTQ2XCIsXG4gIFwibmNvbmdcIjpcIlxcdTIyNDdcIixcbiAgXCJuY29uZ2RvdFwiOlwiXFx1MkE2RFxcdTAzMzhcIixcbiAgXCJuY3VwXCI6XCJcXHUyQTQyXCIsXG4gIFwiTmN5XCI6XCJcXHUwNDFEXCIsXG4gIFwibmN5XCI6XCJcXHUwNDNEXCIsXG4gIFwibmRhc2hcIjpcIlxcdTIwMTNcIixcbiAgXCJuZVwiOlwiXFx1MjI2MFwiLFxuICBcIm5lYXJoa1wiOlwiXFx1MjkyNFwiLFxuICBcIm5lQXJyXCI6XCJcXHUyMUQ3XCIsXG4gIFwibmVhcnJcIjpcIlxcdTIxOTdcIixcbiAgXCJuZWFycm93XCI6XCJcXHUyMTk3XCIsXG4gIFwibmVkb3RcIjpcIlxcdTIyNTBcXHUwMzM4XCIsXG4gIFwiTmVnYXRpdmVNZWRpdW1TcGFjZVwiOlwiXFx1MjAwQlwiLFxuICBcIk5lZ2F0aXZlVGhpY2tTcGFjZVwiOlwiXFx1MjAwQlwiLFxuICBcIk5lZ2F0aXZlVGhpblNwYWNlXCI6XCJcXHUyMDBCXCIsXG4gIFwiTmVnYXRpdmVWZXJ5VGhpblNwYWNlXCI6XCJcXHUyMDBCXCIsXG4gIFwibmVxdWl2XCI6XCJcXHUyMjYyXCIsXG4gIFwibmVzZWFyXCI6XCJcXHUyOTI4XCIsXG4gIFwibmVzaW1cIjpcIlxcdTIyNDJcXHUwMzM4XCIsXG4gIFwiTmVzdGVkR3JlYXRlckdyZWF0ZXJcIjpcIlxcdTIyNkJcIixcbiAgXCJOZXN0ZWRMZXNzTGVzc1wiOlwiXFx1MjI2QVwiLFxuICBcIk5ld0xpbmVcIjpcIlxcdTAwMEFcIixcbiAgXCJuZXhpc3RcIjpcIlxcdTIyMDRcIixcbiAgXCJuZXhpc3RzXCI6XCJcXHUyMjA0XCIsXG4gIFwiTmZyXCI6XCJcXHVEODM1XFx1REQxMVwiLFxuICBcIm5mclwiOlwiXFx1RDgzNVxcdUREMkJcIixcbiAgXCJuZ0VcIjpcIlxcdTIyNjdcXHUwMzM4XCIsXG4gIFwibmdlXCI6XCJcXHUyMjcxXCIsXG4gIFwibmdlcVwiOlwiXFx1MjI3MVwiLFxuICBcIm5nZXFxXCI6XCJcXHUyMjY3XFx1MDMzOFwiLFxuICBcIm5nZXFzbGFudFwiOlwiXFx1MkE3RVxcdTAzMzhcIixcbiAgXCJuZ2VzXCI6XCJcXHUyQTdFXFx1MDMzOFwiLFxuICBcIm5HZ1wiOlwiXFx1MjJEOVxcdTAzMzhcIixcbiAgXCJuZ3NpbVwiOlwiXFx1MjI3NVwiLFxuICBcIm5HdFwiOlwiXFx1MjI2QlxcdTIwRDJcIixcbiAgXCJuZ3RcIjpcIlxcdTIyNkZcIixcbiAgXCJuZ3RyXCI6XCJcXHUyMjZGXCIsXG4gIFwibkd0dlwiOlwiXFx1MjI2QlxcdTAzMzhcIixcbiAgXCJuaEFyclwiOlwiXFx1MjFDRVwiLFxuICBcIm5oYXJyXCI6XCJcXHUyMUFFXCIsXG4gIFwibmhwYXJcIjpcIlxcdTJBRjJcIixcbiAgXCJuaVwiOlwiXFx1MjIwQlwiLFxuICBcIm5pc1wiOlwiXFx1MjJGQ1wiLFxuICBcIm5pc2RcIjpcIlxcdTIyRkFcIixcbiAgXCJuaXZcIjpcIlxcdTIyMEJcIixcbiAgXCJOSmN5XCI6XCJcXHUwNDBBXCIsXG4gIFwibmpjeVwiOlwiXFx1MDQ1QVwiLFxuICBcIm5sQXJyXCI6XCJcXHUyMUNEXCIsXG4gIFwibmxhcnJcIjpcIlxcdTIxOUFcIixcbiAgXCJubGRyXCI6XCJcXHUyMDI1XCIsXG4gIFwibmxFXCI6XCJcXHUyMjY2XFx1MDMzOFwiLFxuICBcIm5sZVwiOlwiXFx1MjI3MFwiLFxuICBcIm5MZWZ0YXJyb3dcIjpcIlxcdTIxQ0RcIixcbiAgXCJubGVmdGFycm93XCI6XCJcXHUyMTlBXCIsXG4gIFwibkxlZnRyaWdodGFycm93XCI6XCJcXHUyMUNFXCIsXG4gIFwibmxlZnRyaWdodGFycm93XCI6XCJcXHUyMUFFXCIsXG4gIFwibmxlcVwiOlwiXFx1MjI3MFwiLFxuICBcIm5sZXFxXCI6XCJcXHUyMjY2XFx1MDMzOFwiLFxuICBcIm5sZXFzbGFudFwiOlwiXFx1MkE3RFxcdTAzMzhcIixcbiAgXCJubGVzXCI6XCJcXHUyQTdEXFx1MDMzOFwiLFxuICBcIm5sZXNzXCI6XCJcXHUyMjZFXCIsXG4gIFwibkxsXCI6XCJcXHUyMkQ4XFx1MDMzOFwiLFxuICBcIm5sc2ltXCI6XCJcXHUyMjc0XCIsXG4gIFwibkx0XCI6XCJcXHUyMjZBXFx1MjBEMlwiLFxuICBcIm5sdFwiOlwiXFx1MjI2RVwiLFxuICBcIm5sdHJpXCI6XCJcXHUyMkVBXCIsXG4gIFwibmx0cmllXCI6XCJcXHUyMkVDXCIsXG4gIFwibkx0dlwiOlwiXFx1MjI2QVxcdTAzMzhcIixcbiAgXCJubWlkXCI6XCJcXHUyMjI0XCIsXG4gIFwiTm9CcmVha1wiOlwiXFx1MjA2MFwiLFxuICBcIk5vbkJyZWFraW5nU3BhY2VcIjpcIlxcdTAwQTBcIixcbiAgXCJOb3BmXCI6XCJcXHUyMTE1XCIsXG4gIFwibm9wZlwiOlwiXFx1RDgzNVxcdURENUZcIixcbiAgXCJOb3RcIjpcIlxcdTJBRUNcIixcbiAgXCJub3RcIjpcIlxcdTAwQUNcIixcbiAgXCJOb3RDb25ncnVlbnRcIjpcIlxcdTIyNjJcIixcbiAgXCJOb3RDdXBDYXBcIjpcIlxcdTIyNkRcIixcbiAgXCJOb3REb3VibGVWZXJ0aWNhbEJhclwiOlwiXFx1MjIyNlwiLFxuICBcIk5vdEVsZW1lbnRcIjpcIlxcdTIyMDlcIixcbiAgXCJOb3RFcXVhbFwiOlwiXFx1MjI2MFwiLFxuICBcIk5vdEVxdWFsVGlsZGVcIjpcIlxcdTIyNDJcXHUwMzM4XCIsXG4gIFwiTm90RXhpc3RzXCI6XCJcXHUyMjA0XCIsXG4gIFwiTm90R3JlYXRlclwiOlwiXFx1MjI2RlwiLFxuICBcIk5vdEdyZWF0ZXJFcXVhbFwiOlwiXFx1MjI3MVwiLFxuICBcIk5vdEdyZWF0ZXJGdWxsRXF1YWxcIjpcIlxcdTIyNjdcXHUwMzM4XCIsXG4gIFwiTm90R3JlYXRlckdyZWF0ZXJcIjpcIlxcdTIyNkJcXHUwMzM4XCIsXG4gIFwiTm90R3JlYXRlckxlc3NcIjpcIlxcdTIyNzlcIixcbiAgXCJOb3RHcmVhdGVyU2xhbnRFcXVhbFwiOlwiXFx1MkE3RVxcdTAzMzhcIixcbiAgXCJOb3RHcmVhdGVyVGlsZGVcIjpcIlxcdTIyNzVcIixcbiAgXCJOb3RIdW1wRG93bkh1bXBcIjpcIlxcdTIyNEVcXHUwMzM4XCIsXG4gIFwiTm90SHVtcEVxdWFsXCI6XCJcXHUyMjRGXFx1MDMzOFwiLFxuICBcIm5vdGluXCI6XCJcXHUyMjA5XCIsXG4gIFwibm90aW5kb3RcIjpcIlxcdTIyRjVcXHUwMzM4XCIsXG4gIFwibm90aW5FXCI6XCJcXHUyMkY5XFx1MDMzOFwiLFxuICBcIm5vdGludmFcIjpcIlxcdTIyMDlcIixcbiAgXCJub3RpbnZiXCI6XCJcXHUyMkY3XCIsXG4gIFwibm90aW52Y1wiOlwiXFx1MjJGNlwiLFxuICBcIk5vdExlZnRUcmlhbmdsZVwiOlwiXFx1MjJFQVwiLFxuICBcIk5vdExlZnRUcmlhbmdsZUJhclwiOlwiXFx1MjlDRlxcdTAzMzhcIixcbiAgXCJOb3RMZWZ0VHJpYW5nbGVFcXVhbFwiOlwiXFx1MjJFQ1wiLFxuICBcIk5vdExlc3NcIjpcIlxcdTIyNkVcIixcbiAgXCJOb3RMZXNzRXF1YWxcIjpcIlxcdTIyNzBcIixcbiAgXCJOb3RMZXNzR3JlYXRlclwiOlwiXFx1MjI3OFwiLFxuICBcIk5vdExlc3NMZXNzXCI6XCJcXHUyMjZBXFx1MDMzOFwiLFxuICBcIk5vdExlc3NTbGFudEVxdWFsXCI6XCJcXHUyQTdEXFx1MDMzOFwiLFxuICBcIk5vdExlc3NUaWxkZVwiOlwiXFx1MjI3NFwiLFxuICBcIk5vdE5lc3RlZEdyZWF0ZXJHcmVhdGVyXCI6XCJcXHUyQUEyXFx1MDMzOFwiLFxuICBcIk5vdE5lc3RlZExlc3NMZXNzXCI6XCJcXHUyQUExXFx1MDMzOFwiLFxuICBcIm5vdG5pXCI6XCJcXHUyMjBDXCIsXG4gIFwibm90bml2YVwiOlwiXFx1MjIwQ1wiLFxuICBcIm5vdG5pdmJcIjpcIlxcdTIyRkVcIixcbiAgXCJub3RuaXZjXCI6XCJcXHUyMkZEXCIsXG4gIFwiTm90UHJlY2VkZXNcIjpcIlxcdTIyODBcIixcbiAgXCJOb3RQcmVjZWRlc0VxdWFsXCI6XCJcXHUyQUFGXFx1MDMzOFwiLFxuICBcIk5vdFByZWNlZGVzU2xhbnRFcXVhbFwiOlwiXFx1MjJFMFwiLFxuICBcIk5vdFJldmVyc2VFbGVtZW50XCI6XCJcXHUyMjBDXCIsXG4gIFwiTm90UmlnaHRUcmlhbmdsZVwiOlwiXFx1MjJFQlwiLFxuICBcIk5vdFJpZ2h0VHJpYW5nbGVCYXJcIjpcIlxcdTI5RDBcXHUwMzM4XCIsXG4gIFwiTm90UmlnaHRUcmlhbmdsZUVxdWFsXCI6XCJcXHUyMkVEXCIsXG4gIFwiTm90U3F1YXJlU3Vic2V0XCI6XCJcXHUyMjhGXFx1MDMzOFwiLFxuICBcIk5vdFNxdWFyZVN1YnNldEVxdWFsXCI6XCJcXHUyMkUyXCIsXG4gIFwiTm90U3F1YXJlU3VwZXJzZXRcIjpcIlxcdTIyOTBcXHUwMzM4XCIsXG4gIFwiTm90U3F1YXJlU3VwZXJzZXRFcXVhbFwiOlwiXFx1MjJFM1wiLFxuICBcIk5vdFN1YnNldFwiOlwiXFx1MjI4MlxcdTIwRDJcIixcbiAgXCJOb3RTdWJzZXRFcXVhbFwiOlwiXFx1MjI4OFwiLFxuICBcIk5vdFN1Y2NlZWRzXCI6XCJcXHUyMjgxXCIsXG4gIFwiTm90U3VjY2VlZHNFcXVhbFwiOlwiXFx1MkFCMFxcdTAzMzhcIixcbiAgXCJOb3RTdWNjZWVkc1NsYW50RXF1YWxcIjpcIlxcdTIyRTFcIixcbiAgXCJOb3RTdWNjZWVkc1RpbGRlXCI6XCJcXHUyMjdGXFx1MDMzOFwiLFxuICBcIk5vdFN1cGVyc2V0XCI6XCJcXHUyMjgzXFx1MjBEMlwiLFxuICBcIk5vdFN1cGVyc2V0RXF1YWxcIjpcIlxcdTIyODlcIixcbiAgXCJOb3RUaWxkZVwiOlwiXFx1MjI0MVwiLFxuICBcIk5vdFRpbGRlRXF1YWxcIjpcIlxcdTIyNDRcIixcbiAgXCJOb3RUaWxkZUZ1bGxFcXVhbFwiOlwiXFx1MjI0N1wiLFxuICBcIk5vdFRpbGRlVGlsZGVcIjpcIlxcdTIyNDlcIixcbiAgXCJOb3RWZXJ0aWNhbEJhclwiOlwiXFx1MjIyNFwiLFxuICBcIm5wYXJcIjpcIlxcdTIyMjZcIixcbiAgXCJucGFyYWxsZWxcIjpcIlxcdTIyMjZcIixcbiAgXCJucGFyc2xcIjpcIlxcdTJBRkRcXHUyMEU1XCIsXG4gIFwibnBhcnRcIjpcIlxcdTIyMDJcXHUwMzM4XCIsXG4gIFwibnBvbGludFwiOlwiXFx1MkExNFwiLFxuICBcIm5wclwiOlwiXFx1MjI4MFwiLFxuICBcIm5wcmN1ZVwiOlwiXFx1MjJFMFwiLFxuICBcIm5wcmVcIjpcIlxcdTJBQUZcXHUwMzM4XCIsXG4gIFwibnByZWNcIjpcIlxcdTIyODBcIixcbiAgXCJucHJlY2VxXCI6XCJcXHUyQUFGXFx1MDMzOFwiLFxuICBcIm5yQXJyXCI6XCJcXHUyMUNGXCIsXG4gIFwibnJhcnJcIjpcIlxcdTIxOUJcIixcbiAgXCJucmFycmNcIjpcIlxcdTI5MzNcXHUwMzM4XCIsXG4gIFwibnJhcnJ3XCI6XCJcXHUyMTlEXFx1MDMzOFwiLFxuICBcIm5SaWdodGFycm93XCI6XCJcXHUyMUNGXCIsXG4gIFwibnJpZ2h0YXJyb3dcIjpcIlxcdTIxOUJcIixcbiAgXCJucnRyaVwiOlwiXFx1MjJFQlwiLFxuICBcIm5ydHJpZVwiOlwiXFx1MjJFRFwiLFxuICBcIm5zY1wiOlwiXFx1MjI4MVwiLFxuICBcIm5zY2N1ZVwiOlwiXFx1MjJFMVwiLFxuICBcIm5zY2VcIjpcIlxcdTJBQjBcXHUwMzM4XCIsXG4gIFwiTnNjclwiOlwiXFx1RDgzNVxcdURDQTlcIixcbiAgXCJuc2NyXCI6XCJcXHVEODM1XFx1RENDM1wiLFxuICBcIm5zaG9ydG1pZFwiOlwiXFx1MjIyNFwiLFxuICBcIm5zaG9ydHBhcmFsbGVsXCI6XCJcXHUyMjI2XCIsXG4gIFwibnNpbVwiOlwiXFx1MjI0MVwiLFxuICBcIm5zaW1lXCI6XCJcXHUyMjQ0XCIsXG4gIFwibnNpbWVxXCI6XCJcXHUyMjQ0XCIsXG4gIFwibnNtaWRcIjpcIlxcdTIyMjRcIixcbiAgXCJuc3BhclwiOlwiXFx1MjIyNlwiLFxuICBcIm5zcXN1YmVcIjpcIlxcdTIyRTJcIixcbiAgXCJuc3FzdXBlXCI6XCJcXHUyMkUzXCIsXG4gIFwibnN1YlwiOlwiXFx1MjI4NFwiLFxuICBcIm5zdWJFXCI6XCJcXHUyQUM1XFx1MDMzOFwiLFxuICBcIm5zdWJlXCI6XCJcXHUyMjg4XCIsXG4gIFwibnN1YnNldFwiOlwiXFx1MjI4MlxcdTIwRDJcIixcbiAgXCJuc3Vic2V0ZXFcIjpcIlxcdTIyODhcIixcbiAgXCJuc3Vic2V0ZXFxXCI6XCJcXHUyQUM1XFx1MDMzOFwiLFxuICBcIm5zdWNjXCI6XCJcXHUyMjgxXCIsXG4gIFwibnN1Y2NlcVwiOlwiXFx1MkFCMFxcdTAzMzhcIixcbiAgXCJuc3VwXCI6XCJcXHUyMjg1XCIsXG4gIFwibnN1cEVcIjpcIlxcdTJBQzZcXHUwMzM4XCIsXG4gIFwibnN1cGVcIjpcIlxcdTIyODlcIixcbiAgXCJuc3Vwc2V0XCI6XCJcXHUyMjgzXFx1MjBEMlwiLFxuICBcIm5zdXBzZXRlcVwiOlwiXFx1MjI4OVwiLFxuICBcIm5zdXBzZXRlcXFcIjpcIlxcdTJBQzZcXHUwMzM4XCIsXG4gIFwibnRnbFwiOlwiXFx1MjI3OVwiLFxuICBcIk50aWxkZVwiOlwiXFx1MDBEMVwiLFxuICBcIm50aWxkZVwiOlwiXFx1MDBGMVwiLFxuICBcIm50bGdcIjpcIlxcdTIyNzhcIixcbiAgXCJudHJpYW5nbGVsZWZ0XCI6XCJcXHUyMkVBXCIsXG4gIFwibnRyaWFuZ2xlbGVmdGVxXCI6XCJcXHUyMkVDXCIsXG4gIFwibnRyaWFuZ2xlcmlnaHRcIjpcIlxcdTIyRUJcIixcbiAgXCJudHJpYW5nbGVyaWdodGVxXCI6XCJcXHUyMkVEXCIsXG4gIFwiTnVcIjpcIlxcdTAzOURcIixcbiAgXCJudVwiOlwiXFx1MDNCRFwiLFxuICBcIm51bVwiOlwiXFx1MDAyM1wiLFxuICBcIm51bWVyb1wiOlwiXFx1MjExNlwiLFxuICBcIm51bXNwXCI6XCJcXHUyMDA3XCIsXG4gIFwibnZhcFwiOlwiXFx1MjI0RFxcdTIwRDJcIixcbiAgXCJuVkRhc2hcIjpcIlxcdTIyQUZcIixcbiAgXCJuVmRhc2hcIjpcIlxcdTIyQUVcIixcbiAgXCJudkRhc2hcIjpcIlxcdTIyQURcIixcbiAgXCJudmRhc2hcIjpcIlxcdTIyQUNcIixcbiAgXCJudmdlXCI6XCJcXHUyMjY1XFx1MjBEMlwiLFxuICBcIm52Z3RcIjpcIlxcdTAwM0VcXHUyMEQyXCIsXG4gIFwibnZIYXJyXCI6XCJcXHUyOTA0XCIsXG4gIFwibnZpbmZpblwiOlwiXFx1MjlERVwiLFxuICBcIm52bEFyclwiOlwiXFx1MjkwMlwiLFxuICBcIm52bGVcIjpcIlxcdTIyNjRcXHUyMEQyXCIsXG4gIFwibnZsdFwiOlwiXFx1MDAzQ1xcdTIwRDJcIixcbiAgXCJudmx0cmllXCI6XCJcXHUyMkI0XFx1MjBEMlwiLFxuICBcIm52ckFyclwiOlwiXFx1MjkwM1wiLFxuICBcIm52cnRyaWVcIjpcIlxcdTIyQjVcXHUyMEQyXCIsXG4gIFwibnZzaW1cIjpcIlxcdTIyM0NcXHUyMEQyXCIsXG4gIFwibndhcmhrXCI6XCJcXHUyOTIzXCIsXG4gIFwibndBcnJcIjpcIlxcdTIxRDZcIixcbiAgXCJud2FyclwiOlwiXFx1MjE5NlwiLFxuICBcIm53YXJyb3dcIjpcIlxcdTIxOTZcIixcbiAgXCJud25lYXJcIjpcIlxcdTI5MjdcIixcbiAgXCJPYWN1dGVcIjpcIlxcdTAwRDNcIixcbiAgXCJvYWN1dGVcIjpcIlxcdTAwRjNcIixcbiAgXCJvYXN0XCI6XCJcXHUyMjlCXCIsXG4gIFwib2NpclwiOlwiXFx1MjI5QVwiLFxuICBcIk9jaXJjXCI6XCJcXHUwMEQ0XCIsXG4gIFwib2NpcmNcIjpcIlxcdTAwRjRcIixcbiAgXCJPY3lcIjpcIlxcdTA0MUVcIixcbiAgXCJvY3lcIjpcIlxcdTA0M0VcIixcbiAgXCJvZGFzaFwiOlwiXFx1MjI5RFwiLFxuICBcIk9kYmxhY1wiOlwiXFx1MDE1MFwiLFxuICBcIm9kYmxhY1wiOlwiXFx1MDE1MVwiLFxuICBcIm9kaXZcIjpcIlxcdTJBMzhcIixcbiAgXCJvZG90XCI6XCJcXHUyMjk5XCIsXG4gIFwib2Rzb2xkXCI6XCJcXHUyOUJDXCIsXG4gIFwiT0VsaWdcIjpcIlxcdTAxNTJcIixcbiAgXCJvZWxpZ1wiOlwiXFx1MDE1M1wiLFxuICBcIm9mY2lyXCI6XCJcXHUyOUJGXCIsXG4gIFwiT2ZyXCI6XCJcXHVEODM1XFx1REQxMlwiLFxuICBcIm9mclwiOlwiXFx1RDgzNVxcdUREMkNcIixcbiAgXCJvZ29uXCI6XCJcXHUwMkRCXCIsXG4gIFwiT2dyYXZlXCI6XCJcXHUwMEQyXCIsXG4gIFwib2dyYXZlXCI6XCJcXHUwMEYyXCIsXG4gIFwib2d0XCI6XCJcXHUyOUMxXCIsXG4gIFwib2hiYXJcIjpcIlxcdTI5QjVcIixcbiAgXCJvaG1cIjpcIlxcdTAzQTlcIixcbiAgXCJvaW50XCI6XCJcXHUyMjJFXCIsXG4gIFwib2xhcnJcIjpcIlxcdTIxQkFcIixcbiAgXCJvbGNpclwiOlwiXFx1MjlCRVwiLFxuICBcIm9sY3Jvc3NcIjpcIlxcdTI5QkJcIixcbiAgXCJvbGluZVwiOlwiXFx1MjAzRVwiLFxuICBcIm9sdFwiOlwiXFx1MjlDMFwiLFxuICBcIk9tYWNyXCI6XCJcXHUwMTRDXCIsXG4gIFwib21hY3JcIjpcIlxcdTAxNERcIixcbiAgXCJPbWVnYVwiOlwiXFx1MDNBOVwiLFxuICBcIm9tZWdhXCI6XCJcXHUwM0M5XCIsXG4gIFwiT21pY3JvblwiOlwiXFx1MDM5RlwiLFxuICBcIm9taWNyb25cIjpcIlxcdTAzQkZcIixcbiAgXCJvbWlkXCI6XCJcXHUyOUI2XCIsXG4gIFwib21pbnVzXCI6XCJcXHUyMjk2XCIsXG4gIFwiT29wZlwiOlwiXFx1RDgzNVxcdURENDZcIixcbiAgXCJvb3BmXCI6XCJcXHVEODM1XFx1REQ2MFwiLFxuICBcIm9wYXJcIjpcIlxcdTI5QjdcIixcbiAgXCJPcGVuQ3VybHlEb3VibGVRdW90ZVwiOlwiXFx1MjAxQ1wiLFxuICBcIk9wZW5DdXJseVF1b3RlXCI6XCJcXHUyMDE4XCIsXG4gIFwib3BlcnBcIjpcIlxcdTI5QjlcIixcbiAgXCJvcGx1c1wiOlwiXFx1MjI5NVwiLFxuICBcIk9yXCI6XCJcXHUyQTU0XCIsXG4gIFwib3JcIjpcIlxcdTIyMjhcIixcbiAgXCJvcmFyclwiOlwiXFx1MjFCQlwiLFxuICBcIm9yZFwiOlwiXFx1MkE1RFwiLFxuICBcIm9yZGVyXCI6XCJcXHUyMTM0XCIsXG4gIFwib3JkZXJvZlwiOlwiXFx1MjEzNFwiLFxuICBcIm9yZGZcIjpcIlxcdTAwQUFcIixcbiAgXCJvcmRtXCI6XCJcXHUwMEJBXCIsXG4gIFwib3JpZ29mXCI6XCJcXHUyMkI2XCIsXG4gIFwib3JvclwiOlwiXFx1MkE1NlwiLFxuICBcIm9yc2xvcGVcIjpcIlxcdTJBNTdcIixcbiAgXCJvcnZcIjpcIlxcdTJBNUJcIixcbiAgXCJvU1wiOlwiXFx1MjRDOFwiLFxuICBcIk9zY3JcIjpcIlxcdUQ4MzVcXHVEQ0FBXCIsXG4gIFwib3NjclwiOlwiXFx1MjEzNFwiLFxuICBcIk9zbGFzaFwiOlwiXFx1MDBEOFwiLFxuICBcIm9zbGFzaFwiOlwiXFx1MDBGOFwiLFxuICBcIm9zb2xcIjpcIlxcdTIyOThcIixcbiAgXCJPdGlsZGVcIjpcIlxcdTAwRDVcIixcbiAgXCJvdGlsZGVcIjpcIlxcdTAwRjVcIixcbiAgXCJPdGltZXNcIjpcIlxcdTJBMzdcIixcbiAgXCJvdGltZXNcIjpcIlxcdTIyOTdcIixcbiAgXCJvdGltZXNhc1wiOlwiXFx1MkEzNlwiLFxuICBcIk91bWxcIjpcIlxcdTAwRDZcIixcbiAgXCJvdW1sXCI6XCJcXHUwMEY2XCIsXG4gIFwib3ZiYXJcIjpcIlxcdTIzM0RcIixcbiAgXCJPdmVyQmFyXCI6XCJcXHUyMDNFXCIsXG4gIFwiT3ZlckJyYWNlXCI6XCJcXHUyM0RFXCIsXG4gIFwiT3ZlckJyYWNrZXRcIjpcIlxcdTIzQjRcIixcbiAgXCJPdmVyUGFyZW50aGVzaXNcIjpcIlxcdTIzRENcIixcbiAgXCJwYXJcIjpcIlxcdTIyMjVcIixcbiAgXCJwYXJhXCI6XCJcXHUwMEI2XCIsXG4gIFwicGFyYWxsZWxcIjpcIlxcdTIyMjVcIixcbiAgXCJwYXJzaW1cIjpcIlxcdTJBRjNcIixcbiAgXCJwYXJzbFwiOlwiXFx1MkFGRFwiLFxuICBcInBhcnRcIjpcIlxcdTIyMDJcIixcbiAgXCJQYXJ0aWFsRFwiOlwiXFx1MjIwMlwiLFxuICBcIlBjeVwiOlwiXFx1MDQxRlwiLFxuICBcInBjeVwiOlwiXFx1MDQzRlwiLFxuICBcInBlcmNudFwiOlwiXFx1MDAyNVwiLFxuICBcInBlcmlvZFwiOlwiXFx1MDAyRVwiLFxuICBcInBlcm1pbFwiOlwiXFx1MjAzMFwiLFxuICBcInBlcnBcIjpcIlxcdTIyQTVcIixcbiAgXCJwZXJ0ZW5rXCI6XCJcXHUyMDMxXCIsXG4gIFwiUGZyXCI6XCJcXHVEODM1XFx1REQxM1wiLFxuICBcInBmclwiOlwiXFx1RDgzNVxcdUREMkRcIixcbiAgXCJQaGlcIjpcIlxcdTAzQTZcIixcbiAgXCJwaGlcIjpcIlxcdTAzQzZcIixcbiAgXCJwaGl2XCI6XCJcXHUwM0Q1XCIsXG4gIFwicGhtbWF0XCI6XCJcXHUyMTMzXCIsXG4gIFwicGhvbmVcIjpcIlxcdTI2MEVcIixcbiAgXCJQaVwiOlwiXFx1MDNBMFwiLFxuICBcInBpXCI6XCJcXHUwM0MwXCIsXG4gIFwicGl0Y2hmb3JrXCI6XCJcXHUyMkQ0XCIsXG4gIFwicGl2XCI6XCJcXHUwM0Q2XCIsXG4gIFwicGxhbmNrXCI6XCJcXHUyMTBGXCIsXG4gIFwicGxhbmNraFwiOlwiXFx1MjEwRVwiLFxuICBcInBsYW5rdlwiOlwiXFx1MjEwRlwiLFxuICBcInBsdXNcIjpcIlxcdTAwMkJcIixcbiAgXCJwbHVzYWNpclwiOlwiXFx1MkEyM1wiLFxuICBcInBsdXNiXCI6XCJcXHUyMjlFXCIsXG4gIFwicGx1c2NpclwiOlwiXFx1MkEyMlwiLFxuICBcInBsdXNkb1wiOlwiXFx1MjIxNFwiLFxuICBcInBsdXNkdVwiOlwiXFx1MkEyNVwiLFxuICBcInBsdXNlXCI6XCJcXHUyQTcyXCIsXG4gIFwiUGx1c01pbnVzXCI6XCJcXHUwMEIxXCIsXG4gIFwicGx1c21uXCI6XCJcXHUwMEIxXCIsXG4gIFwicGx1c3NpbVwiOlwiXFx1MkEyNlwiLFxuICBcInBsdXN0d29cIjpcIlxcdTJBMjdcIixcbiAgXCJwbVwiOlwiXFx1MDBCMVwiLFxuICBcIlBvaW5jYXJlcGxhbmVcIjpcIlxcdTIxMENcIixcbiAgXCJwb2ludGludFwiOlwiXFx1MkExNVwiLFxuICBcIlBvcGZcIjpcIlxcdTIxMTlcIixcbiAgXCJwb3BmXCI6XCJcXHVEODM1XFx1REQ2MVwiLFxuICBcInBvdW5kXCI6XCJcXHUwMEEzXCIsXG4gIFwiUHJcIjpcIlxcdTJBQkJcIixcbiAgXCJwclwiOlwiXFx1MjI3QVwiLFxuICBcInByYXBcIjpcIlxcdTJBQjdcIixcbiAgXCJwcmN1ZVwiOlwiXFx1MjI3Q1wiLFxuICBcInByRVwiOlwiXFx1MkFCM1wiLFxuICBcInByZVwiOlwiXFx1MkFBRlwiLFxuICBcInByZWNcIjpcIlxcdTIyN0FcIixcbiAgXCJwcmVjYXBwcm94XCI6XCJcXHUyQUI3XCIsXG4gIFwicHJlY2N1cmx5ZXFcIjpcIlxcdTIyN0NcIixcbiAgXCJQcmVjZWRlc1wiOlwiXFx1MjI3QVwiLFxuICBcIlByZWNlZGVzRXF1YWxcIjpcIlxcdTJBQUZcIixcbiAgXCJQcmVjZWRlc1NsYW50RXF1YWxcIjpcIlxcdTIyN0NcIixcbiAgXCJQcmVjZWRlc1RpbGRlXCI6XCJcXHUyMjdFXCIsXG4gIFwicHJlY2VxXCI6XCJcXHUyQUFGXCIsXG4gIFwicHJlY25hcHByb3hcIjpcIlxcdTJBQjlcIixcbiAgXCJwcmVjbmVxcVwiOlwiXFx1MkFCNVwiLFxuICBcInByZWNuc2ltXCI6XCJcXHUyMkU4XCIsXG4gIFwicHJlY3NpbVwiOlwiXFx1MjI3RVwiLFxuICBcIlByaW1lXCI6XCJcXHUyMDMzXCIsXG4gIFwicHJpbWVcIjpcIlxcdTIwMzJcIixcbiAgXCJwcmltZXNcIjpcIlxcdTIxMTlcIixcbiAgXCJwcm5hcFwiOlwiXFx1MkFCOVwiLFxuICBcInBybkVcIjpcIlxcdTJBQjVcIixcbiAgXCJwcm5zaW1cIjpcIlxcdTIyRThcIixcbiAgXCJwcm9kXCI6XCJcXHUyMjBGXCIsXG4gIFwiUHJvZHVjdFwiOlwiXFx1MjIwRlwiLFxuICBcInByb2ZhbGFyXCI6XCJcXHUyMzJFXCIsXG4gIFwicHJvZmxpbmVcIjpcIlxcdTIzMTJcIixcbiAgXCJwcm9mc3VyZlwiOlwiXFx1MjMxM1wiLFxuICBcInByb3BcIjpcIlxcdTIyMURcIixcbiAgXCJQcm9wb3J0aW9uXCI6XCJcXHUyMjM3XCIsXG4gIFwiUHJvcG9ydGlvbmFsXCI6XCJcXHUyMjFEXCIsXG4gIFwicHJvcHRvXCI6XCJcXHUyMjFEXCIsXG4gIFwicHJzaW1cIjpcIlxcdTIyN0VcIixcbiAgXCJwcnVyZWxcIjpcIlxcdTIyQjBcIixcbiAgXCJQc2NyXCI6XCJcXHVEODM1XFx1RENBQlwiLFxuICBcInBzY3JcIjpcIlxcdUQ4MzVcXHVEQ0M1XCIsXG4gIFwiUHNpXCI6XCJcXHUwM0E4XCIsXG4gIFwicHNpXCI6XCJcXHUwM0M4XCIsXG4gIFwicHVuY3NwXCI6XCJcXHUyMDA4XCIsXG4gIFwiUWZyXCI6XCJcXHVEODM1XFx1REQxNFwiLFxuICBcInFmclwiOlwiXFx1RDgzNVxcdUREMkVcIixcbiAgXCJxaW50XCI6XCJcXHUyQTBDXCIsXG4gIFwiUW9wZlwiOlwiXFx1MjExQVwiLFxuICBcInFvcGZcIjpcIlxcdUQ4MzVcXHVERDYyXCIsXG4gIFwicXByaW1lXCI6XCJcXHUyMDU3XCIsXG4gIFwiUXNjclwiOlwiXFx1RDgzNVxcdURDQUNcIixcbiAgXCJxc2NyXCI6XCJcXHVEODM1XFx1RENDNlwiLFxuICBcInF1YXRlcm5pb25zXCI6XCJcXHUyMTBEXCIsXG4gIFwicXVhdGludFwiOlwiXFx1MkExNlwiLFxuICBcInF1ZXN0XCI6XCJcXHUwMDNGXCIsXG4gIFwicXVlc3RlcVwiOlwiXFx1MjI1RlwiLFxuICBcIlFVT1RcIjpcIlxcdTAwMjJcIixcbiAgXCJxdW90XCI6XCJcXHUwMDIyXCIsXG4gIFwickFhcnJcIjpcIlxcdTIxREJcIixcbiAgXCJyYWNlXCI6XCJcXHUyMjNEXFx1MDMzMVwiLFxuICBcIlJhY3V0ZVwiOlwiXFx1MDE1NFwiLFxuICBcInJhY3V0ZVwiOlwiXFx1MDE1NVwiLFxuICBcInJhZGljXCI6XCJcXHUyMjFBXCIsXG4gIFwicmFlbXB0eXZcIjpcIlxcdTI5QjNcIixcbiAgXCJSYW5nXCI6XCJcXHUyN0VCXCIsXG4gIFwicmFuZ1wiOlwiXFx1MjdFOVwiLFxuICBcInJhbmdkXCI6XCJcXHUyOTkyXCIsXG4gIFwicmFuZ2VcIjpcIlxcdTI5QTVcIixcbiAgXCJyYW5nbGVcIjpcIlxcdTI3RTlcIixcbiAgXCJyYXF1b1wiOlwiXFx1MDBCQlwiLFxuICBcIlJhcnJcIjpcIlxcdTIxQTBcIixcbiAgXCJyQXJyXCI6XCJcXHUyMUQyXCIsXG4gIFwicmFyclwiOlwiXFx1MjE5MlwiLFxuICBcInJhcnJhcFwiOlwiXFx1Mjk3NVwiLFxuICBcInJhcnJiXCI6XCJcXHUyMUU1XCIsXG4gIFwicmFycmJmc1wiOlwiXFx1MjkyMFwiLFxuICBcInJhcnJjXCI6XCJcXHUyOTMzXCIsXG4gIFwicmFycmZzXCI6XCJcXHUyOTFFXCIsXG4gIFwicmFycmhrXCI6XCJcXHUyMUFBXCIsXG4gIFwicmFycmxwXCI6XCJcXHUyMUFDXCIsXG4gIFwicmFycnBsXCI6XCJcXHUyOTQ1XCIsXG4gIFwicmFycnNpbVwiOlwiXFx1Mjk3NFwiLFxuICBcIlJhcnJ0bFwiOlwiXFx1MjkxNlwiLFxuICBcInJhcnJ0bFwiOlwiXFx1MjFBM1wiLFxuICBcInJhcnJ3XCI6XCJcXHUyMTlEXCIsXG4gIFwickF0YWlsXCI6XCJcXHUyOTFDXCIsXG4gIFwicmF0YWlsXCI6XCJcXHUyOTFBXCIsXG4gIFwicmF0aW9cIjpcIlxcdTIyMzZcIixcbiAgXCJyYXRpb25hbHNcIjpcIlxcdTIxMUFcIixcbiAgXCJSQmFyclwiOlwiXFx1MjkxMFwiLFxuICBcInJCYXJyXCI6XCJcXHUyOTBGXCIsXG4gIFwicmJhcnJcIjpcIlxcdTI5MERcIixcbiAgXCJyYmJya1wiOlwiXFx1Mjc3M1wiLFxuICBcInJicmFjZVwiOlwiXFx1MDA3RFwiLFxuICBcInJicmFja1wiOlwiXFx1MDA1RFwiLFxuICBcInJicmtlXCI6XCJcXHUyOThDXCIsXG4gIFwicmJya3NsZFwiOlwiXFx1Mjk4RVwiLFxuICBcInJicmtzbHVcIjpcIlxcdTI5OTBcIixcbiAgXCJSY2Fyb25cIjpcIlxcdTAxNThcIixcbiAgXCJyY2Fyb25cIjpcIlxcdTAxNTlcIixcbiAgXCJSY2VkaWxcIjpcIlxcdTAxNTZcIixcbiAgXCJyY2VkaWxcIjpcIlxcdTAxNTdcIixcbiAgXCJyY2VpbFwiOlwiXFx1MjMwOVwiLFxuICBcInJjdWJcIjpcIlxcdTAwN0RcIixcbiAgXCJSY3lcIjpcIlxcdTA0MjBcIixcbiAgXCJyY3lcIjpcIlxcdTA0NDBcIixcbiAgXCJyZGNhXCI6XCJcXHUyOTM3XCIsXG4gIFwicmRsZGhhclwiOlwiXFx1Mjk2OVwiLFxuICBcInJkcXVvXCI6XCJcXHUyMDFEXCIsXG4gIFwicmRxdW9yXCI6XCJcXHUyMDFEXCIsXG4gIFwicmRzaFwiOlwiXFx1MjFCM1wiLFxuICBcIlJlXCI6XCJcXHUyMTFDXCIsXG4gIFwicmVhbFwiOlwiXFx1MjExQ1wiLFxuICBcInJlYWxpbmVcIjpcIlxcdTIxMUJcIixcbiAgXCJyZWFscGFydFwiOlwiXFx1MjExQ1wiLFxuICBcInJlYWxzXCI6XCJcXHUyMTFEXCIsXG4gIFwicmVjdFwiOlwiXFx1MjVBRFwiLFxuICBcIlJFR1wiOlwiXFx1MDBBRVwiLFxuICBcInJlZ1wiOlwiXFx1MDBBRVwiLFxuICBcIlJldmVyc2VFbGVtZW50XCI6XCJcXHUyMjBCXCIsXG4gIFwiUmV2ZXJzZUVxdWlsaWJyaXVtXCI6XCJcXHUyMUNCXCIsXG4gIFwiUmV2ZXJzZVVwRXF1aWxpYnJpdW1cIjpcIlxcdTI5NkZcIixcbiAgXCJyZmlzaHRcIjpcIlxcdTI5N0RcIixcbiAgXCJyZmxvb3JcIjpcIlxcdTIzMEJcIixcbiAgXCJSZnJcIjpcIlxcdTIxMUNcIixcbiAgXCJyZnJcIjpcIlxcdUQ4MzVcXHVERDJGXCIsXG4gIFwickhhclwiOlwiXFx1Mjk2NFwiLFxuICBcInJoYXJkXCI6XCJcXHUyMUMxXCIsXG4gIFwicmhhcnVcIjpcIlxcdTIxQzBcIixcbiAgXCJyaGFydWxcIjpcIlxcdTI5NkNcIixcbiAgXCJSaG9cIjpcIlxcdTAzQTFcIixcbiAgXCJyaG9cIjpcIlxcdTAzQzFcIixcbiAgXCJyaG92XCI6XCJcXHUwM0YxXCIsXG4gIFwiUmlnaHRBbmdsZUJyYWNrZXRcIjpcIlxcdTI3RTlcIixcbiAgXCJSaWdodEFycm93XCI6XCJcXHUyMTkyXCIsXG4gIFwiUmlnaHRhcnJvd1wiOlwiXFx1MjFEMlwiLFxuICBcInJpZ2h0YXJyb3dcIjpcIlxcdTIxOTJcIixcbiAgXCJSaWdodEFycm93QmFyXCI6XCJcXHUyMUU1XCIsXG4gIFwiUmlnaHRBcnJvd0xlZnRBcnJvd1wiOlwiXFx1MjFDNFwiLFxuICBcInJpZ2h0YXJyb3d0YWlsXCI6XCJcXHUyMUEzXCIsXG4gIFwiUmlnaHRDZWlsaW5nXCI6XCJcXHUyMzA5XCIsXG4gIFwiUmlnaHREb3VibGVCcmFja2V0XCI6XCJcXHUyN0U3XCIsXG4gIFwiUmlnaHREb3duVGVlVmVjdG9yXCI6XCJcXHUyOTVEXCIsXG4gIFwiUmlnaHREb3duVmVjdG9yXCI6XCJcXHUyMUMyXCIsXG4gIFwiUmlnaHREb3duVmVjdG9yQmFyXCI6XCJcXHUyOTU1XCIsXG4gIFwiUmlnaHRGbG9vclwiOlwiXFx1MjMwQlwiLFxuICBcInJpZ2h0aGFycG9vbmRvd25cIjpcIlxcdTIxQzFcIixcbiAgXCJyaWdodGhhcnBvb251cFwiOlwiXFx1MjFDMFwiLFxuICBcInJpZ2h0bGVmdGFycm93c1wiOlwiXFx1MjFDNFwiLFxuICBcInJpZ2h0bGVmdGhhcnBvb25zXCI6XCJcXHUyMUNDXCIsXG4gIFwicmlnaHRyaWdodGFycm93c1wiOlwiXFx1MjFDOVwiLFxuICBcInJpZ2h0c3F1aWdhcnJvd1wiOlwiXFx1MjE5RFwiLFxuICBcIlJpZ2h0VGVlXCI6XCJcXHUyMkEyXCIsXG4gIFwiUmlnaHRUZWVBcnJvd1wiOlwiXFx1MjFBNlwiLFxuICBcIlJpZ2h0VGVlVmVjdG9yXCI6XCJcXHUyOTVCXCIsXG4gIFwicmlnaHR0aHJlZXRpbWVzXCI6XCJcXHUyMkNDXCIsXG4gIFwiUmlnaHRUcmlhbmdsZVwiOlwiXFx1MjJCM1wiLFxuICBcIlJpZ2h0VHJpYW5nbGVCYXJcIjpcIlxcdTI5RDBcIixcbiAgXCJSaWdodFRyaWFuZ2xlRXF1YWxcIjpcIlxcdTIyQjVcIixcbiAgXCJSaWdodFVwRG93blZlY3RvclwiOlwiXFx1Mjk0RlwiLFxuICBcIlJpZ2h0VXBUZWVWZWN0b3JcIjpcIlxcdTI5NUNcIixcbiAgXCJSaWdodFVwVmVjdG9yXCI6XCJcXHUyMUJFXCIsXG4gIFwiUmlnaHRVcFZlY3RvckJhclwiOlwiXFx1Mjk1NFwiLFxuICBcIlJpZ2h0VmVjdG9yXCI6XCJcXHUyMUMwXCIsXG4gIFwiUmlnaHRWZWN0b3JCYXJcIjpcIlxcdTI5NTNcIixcbiAgXCJyaW5nXCI6XCJcXHUwMkRBXCIsXG4gIFwicmlzaW5nZG90c2VxXCI6XCJcXHUyMjUzXCIsXG4gIFwicmxhcnJcIjpcIlxcdTIxQzRcIixcbiAgXCJybGhhclwiOlwiXFx1MjFDQ1wiLFxuICBcInJsbVwiOlwiXFx1MjAwRlwiLFxuICBcInJtb3VzdFwiOlwiXFx1MjNCMVwiLFxuICBcInJtb3VzdGFjaGVcIjpcIlxcdTIzQjFcIixcbiAgXCJybm1pZFwiOlwiXFx1MkFFRVwiLFxuICBcInJvYW5nXCI6XCJcXHUyN0VEXCIsXG4gIFwicm9hcnJcIjpcIlxcdTIxRkVcIixcbiAgXCJyb2Jya1wiOlwiXFx1MjdFN1wiLFxuICBcInJvcGFyXCI6XCJcXHUyOTg2XCIsXG4gIFwiUm9wZlwiOlwiXFx1MjExRFwiLFxuICBcInJvcGZcIjpcIlxcdUQ4MzVcXHVERDYzXCIsXG4gIFwicm9wbHVzXCI6XCJcXHUyQTJFXCIsXG4gIFwicm90aW1lc1wiOlwiXFx1MkEzNVwiLFxuICBcIlJvdW5kSW1wbGllc1wiOlwiXFx1Mjk3MFwiLFxuICBcInJwYXJcIjpcIlxcdTAwMjlcIixcbiAgXCJycGFyZ3RcIjpcIlxcdTI5OTRcIixcbiAgXCJycHBvbGludFwiOlwiXFx1MkExMlwiLFxuICBcInJyYXJyXCI6XCJcXHUyMUM5XCIsXG4gIFwiUnJpZ2h0YXJyb3dcIjpcIlxcdTIxREJcIixcbiAgXCJyc2FxdW9cIjpcIlxcdTIwM0FcIixcbiAgXCJSc2NyXCI6XCJcXHUyMTFCXCIsXG4gIFwicnNjclwiOlwiXFx1RDgzNVxcdURDQzdcIixcbiAgXCJSc2hcIjpcIlxcdTIxQjFcIixcbiAgXCJyc2hcIjpcIlxcdTIxQjFcIixcbiAgXCJyc3FiXCI6XCJcXHUwMDVEXCIsXG4gIFwicnNxdW9cIjpcIlxcdTIwMTlcIixcbiAgXCJyc3F1b3JcIjpcIlxcdTIwMTlcIixcbiAgXCJydGhyZWVcIjpcIlxcdTIyQ0NcIixcbiAgXCJydGltZXNcIjpcIlxcdTIyQ0FcIixcbiAgXCJydHJpXCI6XCJcXHUyNUI5XCIsXG4gIFwicnRyaWVcIjpcIlxcdTIyQjVcIixcbiAgXCJydHJpZlwiOlwiXFx1MjVCOFwiLFxuICBcInJ0cmlsdHJpXCI6XCJcXHUyOUNFXCIsXG4gIFwiUnVsZURlbGF5ZWRcIjpcIlxcdTI5RjRcIixcbiAgXCJydWx1aGFyXCI6XCJcXHUyOTY4XCIsXG4gIFwicnhcIjpcIlxcdTIxMUVcIixcbiAgXCJTYWN1dGVcIjpcIlxcdTAxNUFcIixcbiAgXCJzYWN1dGVcIjpcIlxcdTAxNUJcIixcbiAgXCJzYnF1b1wiOlwiXFx1MjAxQVwiLFxuICBcIlNjXCI6XCJcXHUyQUJDXCIsXG4gIFwic2NcIjpcIlxcdTIyN0JcIixcbiAgXCJzY2FwXCI6XCJcXHUyQUI4XCIsXG4gIFwiU2Nhcm9uXCI6XCJcXHUwMTYwXCIsXG4gIFwic2Nhcm9uXCI6XCJcXHUwMTYxXCIsXG4gIFwic2NjdWVcIjpcIlxcdTIyN0RcIixcbiAgXCJzY0VcIjpcIlxcdTJBQjRcIixcbiAgXCJzY2VcIjpcIlxcdTJBQjBcIixcbiAgXCJTY2VkaWxcIjpcIlxcdTAxNUVcIixcbiAgXCJzY2VkaWxcIjpcIlxcdTAxNUZcIixcbiAgXCJTY2lyY1wiOlwiXFx1MDE1Q1wiLFxuICBcInNjaXJjXCI6XCJcXHUwMTVEXCIsXG4gIFwic2NuYXBcIjpcIlxcdTJBQkFcIixcbiAgXCJzY25FXCI6XCJcXHUyQUI2XCIsXG4gIFwic2Nuc2ltXCI6XCJcXHUyMkU5XCIsXG4gIFwic2Nwb2xpbnRcIjpcIlxcdTJBMTNcIixcbiAgXCJzY3NpbVwiOlwiXFx1MjI3RlwiLFxuICBcIlNjeVwiOlwiXFx1MDQyMVwiLFxuICBcInNjeVwiOlwiXFx1MDQ0MVwiLFxuICBcInNkb3RcIjpcIlxcdTIyQzVcIixcbiAgXCJzZG90YlwiOlwiXFx1MjJBMVwiLFxuICBcInNkb3RlXCI6XCJcXHUyQTY2XCIsXG4gIFwic2VhcmhrXCI6XCJcXHUyOTI1XCIsXG4gIFwic2VBcnJcIjpcIlxcdTIxRDhcIixcbiAgXCJzZWFyclwiOlwiXFx1MjE5OFwiLFxuICBcInNlYXJyb3dcIjpcIlxcdTIxOThcIixcbiAgXCJzZWN0XCI6XCJcXHUwMEE3XCIsXG4gIFwic2VtaVwiOlwiXFx1MDAzQlwiLFxuICBcInNlc3dhclwiOlwiXFx1MjkyOVwiLFxuICBcInNldG1pbnVzXCI6XCJcXHUyMjE2XCIsXG4gIFwic2V0bW5cIjpcIlxcdTIyMTZcIixcbiAgXCJzZXh0XCI6XCJcXHUyNzM2XCIsXG4gIFwiU2ZyXCI6XCJcXHVEODM1XFx1REQxNlwiLFxuICBcInNmclwiOlwiXFx1RDgzNVxcdUREMzBcIixcbiAgXCJzZnJvd25cIjpcIlxcdTIzMjJcIixcbiAgXCJzaGFycFwiOlwiXFx1MjY2RlwiLFxuICBcIlNIQ0hjeVwiOlwiXFx1MDQyOVwiLFxuICBcInNoY2hjeVwiOlwiXFx1MDQ0OVwiLFxuICBcIlNIY3lcIjpcIlxcdTA0MjhcIixcbiAgXCJzaGN5XCI6XCJcXHUwNDQ4XCIsXG4gIFwiU2hvcnREb3duQXJyb3dcIjpcIlxcdTIxOTNcIixcbiAgXCJTaG9ydExlZnRBcnJvd1wiOlwiXFx1MjE5MFwiLFxuICBcInNob3J0bWlkXCI6XCJcXHUyMjIzXCIsXG4gIFwic2hvcnRwYXJhbGxlbFwiOlwiXFx1MjIyNVwiLFxuICBcIlNob3J0UmlnaHRBcnJvd1wiOlwiXFx1MjE5MlwiLFxuICBcIlNob3J0VXBBcnJvd1wiOlwiXFx1MjE5MVwiLFxuICBcInNoeVwiOlwiXFx1MDBBRFwiLFxuICBcIlNpZ21hXCI6XCJcXHUwM0EzXCIsXG4gIFwic2lnbWFcIjpcIlxcdTAzQzNcIixcbiAgXCJzaWdtYWZcIjpcIlxcdTAzQzJcIixcbiAgXCJzaWdtYXZcIjpcIlxcdTAzQzJcIixcbiAgXCJzaW1cIjpcIlxcdTIyM0NcIixcbiAgXCJzaW1kb3RcIjpcIlxcdTJBNkFcIixcbiAgXCJzaW1lXCI6XCJcXHUyMjQzXCIsXG4gIFwic2ltZXFcIjpcIlxcdTIyNDNcIixcbiAgXCJzaW1nXCI6XCJcXHUyQTlFXCIsXG4gIFwic2ltZ0VcIjpcIlxcdTJBQTBcIixcbiAgXCJzaW1sXCI6XCJcXHUyQTlEXCIsXG4gIFwic2ltbEVcIjpcIlxcdTJBOUZcIixcbiAgXCJzaW1uZVwiOlwiXFx1MjI0NlwiLFxuICBcInNpbXBsdXNcIjpcIlxcdTJBMjRcIixcbiAgXCJzaW1yYXJyXCI6XCJcXHUyOTcyXCIsXG4gIFwic2xhcnJcIjpcIlxcdTIxOTBcIixcbiAgXCJTbWFsbENpcmNsZVwiOlwiXFx1MjIxOFwiLFxuICBcInNtYWxsc2V0bWludXNcIjpcIlxcdTIyMTZcIixcbiAgXCJzbWFzaHBcIjpcIlxcdTJBMzNcIixcbiAgXCJzbWVwYXJzbFwiOlwiXFx1MjlFNFwiLFxuICBcInNtaWRcIjpcIlxcdTIyMjNcIixcbiAgXCJzbWlsZVwiOlwiXFx1MjMyM1wiLFxuICBcInNtdFwiOlwiXFx1MkFBQVwiLFxuICBcInNtdGVcIjpcIlxcdTJBQUNcIixcbiAgXCJzbXRlc1wiOlwiXFx1MkFBQ1xcdUZFMDBcIixcbiAgXCJTT0ZUY3lcIjpcIlxcdTA0MkNcIixcbiAgXCJzb2Z0Y3lcIjpcIlxcdTA0NENcIixcbiAgXCJzb2xcIjpcIlxcdTAwMkZcIixcbiAgXCJzb2xiXCI6XCJcXHUyOUM0XCIsXG4gIFwic29sYmFyXCI6XCJcXHUyMzNGXCIsXG4gIFwiU29wZlwiOlwiXFx1RDgzNVxcdURENEFcIixcbiAgXCJzb3BmXCI6XCJcXHVEODM1XFx1REQ2NFwiLFxuICBcInNwYWRlc1wiOlwiXFx1MjY2MFwiLFxuICBcInNwYWRlc3VpdFwiOlwiXFx1MjY2MFwiLFxuICBcInNwYXJcIjpcIlxcdTIyMjVcIixcbiAgXCJzcWNhcFwiOlwiXFx1MjI5M1wiLFxuICBcInNxY2Fwc1wiOlwiXFx1MjI5M1xcdUZFMDBcIixcbiAgXCJzcWN1cFwiOlwiXFx1MjI5NFwiLFxuICBcInNxY3Vwc1wiOlwiXFx1MjI5NFxcdUZFMDBcIixcbiAgXCJTcXJ0XCI6XCJcXHUyMjFBXCIsXG4gIFwic3FzdWJcIjpcIlxcdTIyOEZcIixcbiAgXCJzcXN1YmVcIjpcIlxcdTIyOTFcIixcbiAgXCJzcXN1YnNldFwiOlwiXFx1MjI4RlwiLFxuICBcInNxc3Vic2V0ZXFcIjpcIlxcdTIyOTFcIixcbiAgXCJzcXN1cFwiOlwiXFx1MjI5MFwiLFxuICBcInNxc3VwZVwiOlwiXFx1MjI5MlwiLFxuICBcInNxc3Vwc2V0XCI6XCJcXHUyMjkwXCIsXG4gIFwic3FzdXBzZXRlcVwiOlwiXFx1MjI5MlwiLFxuICBcInNxdVwiOlwiXFx1MjVBMVwiLFxuICBcIlNxdWFyZVwiOlwiXFx1MjVBMVwiLFxuICBcInNxdWFyZVwiOlwiXFx1MjVBMVwiLFxuICBcIlNxdWFyZUludGVyc2VjdGlvblwiOlwiXFx1MjI5M1wiLFxuICBcIlNxdWFyZVN1YnNldFwiOlwiXFx1MjI4RlwiLFxuICBcIlNxdWFyZVN1YnNldEVxdWFsXCI6XCJcXHUyMjkxXCIsXG4gIFwiU3F1YXJlU3VwZXJzZXRcIjpcIlxcdTIyOTBcIixcbiAgXCJTcXVhcmVTdXBlcnNldEVxdWFsXCI6XCJcXHUyMjkyXCIsXG4gIFwiU3F1YXJlVW5pb25cIjpcIlxcdTIyOTRcIixcbiAgXCJzcXVhcmZcIjpcIlxcdTI1QUFcIixcbiAgXCJzcXVmXCI6XCJcXHUyNUFBXCIsXG4gIFwic3JhcnJcIjpcIlxcdTIxOTJcIixcbiAgXCJTc2NyXCI6XCJcXHVEODM1XFx1RENBRVwiLFxuICBcInNzY3JcIjpcIlxcdUQ4MzVcXHVEQ0M4XCIsXG4gIFwic3NldG1uXCI6XCJcXHUyMjE2XCIsXG4gIFwic3NtaWxlXCI6XCJcXHUyMzIzXCIsXG4gIFwic3N0YXJmXCI6XCJcXHUyMkM2XCIsXG4gIFwiU3RhclwiOlwiXFx1MjJDNlwiLFxuICBcInN0YXJcIjpcIlxcdTI2MDZcIixcbiAgXCJzdGFyZlwiOlwiXFx1MjYwNVwiLFxuICBcInN0cmFpZ2h0ZXBzaWxvblwiOlwiXFx1MDNGNVwiLFxuICBcInN0cmFpZ2h0cGhpXCI6XCJcXHUwM0Q1XCIsXG4gIFwic3RybnNcIjpcIlxcdTAwQUZcIixcbiAgXCJTdWJcIjpcIlxcdTIyRDBcIixcbiAgXCJzdWJcIjpcIlxcdTIyODJcIixcbiAgXCJzdWJkb3RcIjpcIlxcdTJBQkRcIixcbiAgXCJzdWJFXCI6XCJcXHUyQUM1XCIsXG4gIFwic3ViZVwiOlwiXFx1MjI4NlwiLFxuICBcInN1YmVkb3RcIjpcIlxcdTJBQzNcIixcbiAgXCJzdWJtdWx0XCI6XCJcXHUyQUMxXCIsXG4gIFwic3VibkVcIjpcIlxcdTJBQ0JcIixcbiAgXCJzdWJuZVwiOlwiXFx1MjI4QVwiLFxuICBcInN1YnBsdXNcIjpcIlxcdTJBQkZcIixcbiAgXCJzdWJyYXJyXCI6XCJcXHUyOTc5XCIsXG4gIFwiU3Vic2V0XCI6XCJcXHUyMkQwXCIsXG4gIFwic3Vic2V0XCI6XCJcXHUyMjgyXCIsXG4gIFwic3Vic2V0ZXFcIjpcIlxcdTIyODZcIixcbiAgXCJzdWJzZXRlcXFcIjpcIlxcdTJBQzVcIixcbiAgXCJTdWJzZXRFcXVhbFwiOlwiXFx1MjI4NlwiLFxuICBcInN1YnNldG5lcVwiOlwiXFx1MjI4QVwiLFxuICBcInN1YnNldG5lcXFcIjpcIlxcdTJBQ0JcIixcbiAgXCJzdWJzaW1cIjpcIlxcdTJBQzdcIixcbiAgXCJzdWJzdWJcIjpcIlxcdTJBRDVcIixcbiAgXCJzdWJzdXBcIjpcIlxcdTJBRDNcIixcbiAgXCJzdWNjXCI6XCJcXHUyMjdCXCIsXG4gIFwic3VjY2FwcHJveFwiOlwiXFx1MkFCOFwiLFxuICBcInN1Y2NjdXJseWVxXCI6XCJcXHUyMjdEXCIsXG4gIFwiU3VjY2VlZHNcIjpcIlxcdTIyN0JcIixcbiAgXCJTdWNjZWVkc0VxdWFsXCI6XCJcXHUyQUIwXCIsXG4gIFwiU3VjY2VlZHNTbGFudEVxdWFsXCI6XCJcXHUyMjdEXCIsXG4gIFwiU3VjY2VlZHNUaWxkZVwiOlwiXFx1MjI3RlwiLFxuICBcInN1Y2NlcVwiOlwiXFx1MkFCMFwiLFxuICBcInN1Y2NuYXBwcm94XCI6XCJcXHUyQUJBXCIsXG4gIFwic3VjY25lcXFcIjpcIlxcdTJBQjZcIixcbiAgXCJzdWNjbnNpbVwiOlwiXFx1MjJFOVwiLFxuICBcInN1Y2NzaW1cIjpcIlxcdTIyN0ZcIixcbiAgXCJTdWNoVGhhdFwiOlwiXFx1MjIwQlwiLFxuICBcIlN1bVwiOlwiXFx1MjIxMVwiLFxuICBcInN1bVwiOlwiXFx1MjIxMVwiLFxuICBcInN1bmdcIjpcIlxcdTI2NkFcIixcbiAgXCJTdXBcIjpcIlxcdTIyRDFcIixcbiAgXCJzdXBcIjpcIlxcdTIyODNcIixcbiAgXCJzdXAxXCI6XCJcXHUwMEI5XCIsXG4gIFwic3VwMlwiOlwiXFx1MDBCMlwiLFxuICBcInN1cDNcIjpcIlxcdTAwQjNcIixcbiAgXCJzdXBkb3RcIjpcIlxcdTJBQkVcIixcbiAgXCJzdXBkc3ViXCI6XCJcXHUyQUQ4XCIsXG4gIFwic3VwRVwiOlwiXFx1MkFDNlwiLFxuICBcInN1cGVcIjpcIlxcdTIyODdcIixcbiAgXCJzdXBlZG90XCI6XCJcXHUyQUM0XCIsXG4gIFwiU3VwZXJzZXRcIjpcIlxcdTIyODNcIixcbiAgXCJTdXBlcnNldEVxdWFsXCI6XCJcXHUyMjg3XCIsXG4gIFwic3VwaHNvbFwiOlwiXFx1MjdDOVwiLFxuICBcInN1cGhzdWJcIjpcIlxcdTJBRDdcIixcbiAgXCJzdXBsYXJyXCI6XCJcXHUyOTdCXCIsXG4gIFwic3VwbXVsdFwiOlwiXFx1MkFDMlwiLFxuICBcInN1cG5FXCI6XCJcXHUyQUNDXCIsXG4gIFwic3VwbmVcIjpcIlxcdTIyOEJcIixcbiAgXCJzdXBwbHVzXCI6XCJcXHUyQUMwXCIsXG4gIFwiU3Vwc2V0XCI6XCJcXHUyMkQxXCIsXG4gIFwic3Vwc2V0XCI6XCJcXHUyMjgzXCIsXG4gIFwic3Vwc2V0ZXFcIjpcIlxcdTIyODdcIixcbiAgXCJzdXBzZXRlcXFcIjpcIlxcdTJBQzZcIixcbiAgXCJzdXBzZXRuZXFcIjpcIlxcdTIyOEJcIixcbiAgXCJzdXBzZXRuZXFxXCI6XCJcXHUyQUNDXCIsXG4gIFwic3Vwc2ltXCI6XCJcXHUyQUM4XCIsXG4gIFwic3Vwc3ViXCI6XCJcXHUyQUQ0XCIsXG4gIFwic3Vwc3VwXCI6XCJcXHUyQUQ2XCIsXG4gIFwic3dhcmhrXCI6XCJcXHUyOTI2XCIsXG4gIFwic3dBcnJcIjpcIlxcdTIxRDlcIixcbiAgXCJzd2FyclwiOlwiXFx1MjE5OVwiLFxuICBcInN3YXJyb3dcIjpcIlxcdTIxOTlcIixcbiAgXCJzd253YXJcIjpcIlxcdTI5MkFcIixcbiAgXCJzemxpZ1wiOlwiXFx1MDBERlwiLFxuICBcIlRhYlwiOlwiXFx1MDAwOVwiLFxuICBcInRhcmdldFwiOlwiXFx1MjMxNlwiLFxuICBcIlRhdVwiOlwiXFx1MDNBNFwiLFxuICBcInRhdVwiOlwiXFx1MDNDNFwiLFxuICBcInRicmtcIjpcIlxcdTIzQjRcIixcbiAgXCJUY2Fyb25cIjpcIlxcdTAxNjRcIixcbiAgXCJ0Y2Fyb25cIjpcIlxcdTAxNjVcIixcbiAgXCJUY2VkaWxcIjpcIlxcdTAxNjJcIixcbiAgXCJ0Y2VkaWxcIjpcIlxcdTAxNjNcIixcbiAgXCJUY3lcIjpcIlxcdTA0MjJcIixcbiAgXCJ0Y3lcIjpcIlxcdTA0NDJcIixcbiAgXCJ0ZG90XCI6XCJcXHUyMERCXCIsXG4gIFwidGVscmVjXCI6XCJcXHUyMzE1XCIsXG4gIFwiVGZyXCI6XCJcXHVEODM1XFx1REQxN1wiLFxuICBcInRmclwiOlwiXFx1RDgzNVxcdUREMzFcIixcbiAgXCJ0aGVyZTRcIjpcIlxcdTIyMzRcIixcbiAgXCJUaGVyZWZvcmVcIjpcIlxcdTIyMzRcIixcbiAgXCJ0aGVyZWZvcmVcIjpcIlxcdTIyMzRcIixcbiAgXCJUaGV0YVwiOlwiXFx1MDM5OFwiLFxuICBcInRoZXRhXCI6XCJcXHUwM0I4XCIsXG4gIFwidGhldGFzeW1cIjpcIlxcdTAzRDFcIixcbiAgXCJ0aGV0YXZcIjpcIlxcdTAzRDFcIixcbiAgXCJ0aGlja2FwcHJveFwiOlwiXFx1MjI0OFwiLFxuICBcInRoaWNrc2ltXCI6XCJcXHUyMjNDXCIsXG4gIFwiVGhpY2tTcGFjZVwiOlwiXFx1MjA1RlxcdTIwMEFcIixcbiAgXCJ0aGluc3BcIjpcIlxcdTIwMDlcIixcbiAgXCJUaGluU3BhY2VcIjpcIlxcdTIwMDlcIixcbiAgXCJ0aGthcFwiOlwiXFx1MjI0OFwiLFxuICBcInRoa3NpbVwiOlwiXFx1MjIzQ1wiLFxuICBcIlRIT1JOXCI6XCJcXHUwMERFXCIsXG4gIFwidGhvcm5cIjpcIlxcdTAwRkVcIixcbiAgXCJUaWxkZVwiOlwiXFx1MjIzQ1wiLFxuICBcInRpbGRlXCI6XCJcXHUwMkRDXCIsXG4gIFwiVGlsZGVFcXVhbFwiOlwiXFx1MjI0M1wiLFxuICBcIlRpbGRlRnVsbEVxdWFsXCI6XCJcXHUyMjQ1XCIsXG4gIFwiVGlsZGVUaWxkZVwiOlwiXFx1MjI0OFwiLFxuICBcInRpbWVzXCI6XCJcXHUwMEQ3XCIsXG4gIFwidGltZXNiXCI6XCJcXHUyMkEwXCIsXG4gIFwidGltZXNiYXJcIjpcIlxcdTJBMzFcIixcbiAgXCJ0aW1lc2RcIjpcIlxcdTJBMzBcIixcbiAgXCJ0aW50XCI6XCJcXHUyMjJEXCIsXG4gIFwidG9lYVwiOlwiXFx1MjkyOFwiLFxuICBcInRvcFwiOlwiXFx1MjJBNFwiLFxuICBcInRvcGJvdFwiOlwiXFx1MjMzNlwiLFxuICBcInRvcGNpclwiOlwiXFx1MkFGMVwiLFxuICBcIlRvcGZcIjpcIlxcdUQ4MzVcXHVERDRCXCIsXG4gIFwidG9wZlwiOlwiXFx1RDgzNVxcdURENjVcIixcbiAgXCJ0b3Bmb3JrXCI6XCJcXHUyQURBXCIsXG4gIFwidG9zYVwiOlwiXFx1MjkyOVwiLFxuICBcInRwcmltZVwiOlwiXFx1MjAzNFwiLFxuICBcIlRSQURFXCI6XCJcXHUyMTIyXCIsXG4gIFwidHJhZGVcIjpcIlxcdTIxMjJcIixcbiAgXCJ0cmlhbmdsZVwiOlwiXFx1MjVCNVwiLFxuICBcInRyaWFuZ2xlZG93blwiOlwiXFx1MjVCRlwiLFxuICBcInRyaWFuZ2xlbGVmdFwiOlwiXFx1MjVDM1wiLFxuICBcInRyaWFuZ2xlbGVmdGVxXCI6XCJcXHUyMkI0XCIsXG4gIFwidHJpYW5nbGVxXCI6XCJcXHUyMjVDXCIsXG4gIFwidHJpYW5nbGVyaWdodFwiOlwiXFx1MjVCOVwiLFxuICBcInRyaWFuZ2xlcmlnaHRlcVwiOlwiXFx1MjJCNVwiLFxuICBcInRyaWRvdFwiOlwiXFx1MjVFQ1wiLFxuICBcInRyaWVcIjpcIlxcdTIyNUNcIixcbiAgXCJ0cmltaW51c1wiOlwiXFx1MkEzQVwiLFxuICBcIlRyaXBsZURvdFwiOlwiXFx1MjBEQlwiLFxuICBcInRyaXBsdXNcIjpcIlxcdTJBMzlcIixcbiAgXCJ0cmlzYlwiOlwiXFx1MjlDRFwiLFxuICBcInRyaXRpbWVcIjpcIlxcdTJBM0JcIixcbiAgXCJ0cnBleml1bVwiOlwiXFx1MjNFMlwiLFxuICBcIlRzY3JcIjpcIlxcdUQ4MzVcXHVEQ0FGXCIsXG4gIFwidHNjclwiOlwiXFx1RDgzNVxcdURDQzlcIixcbiAgXCJUU2N5XCI6XCJcXHUwNDI2XCIsXG4gIFwidHNjeVwiOlwiXFx1MDQ0NlwiLFxuICBcIlRTSGN5XCI6XCJcXHUwNDBCXCIsXG4gIFwidHNoY3lcIjpcIlxcdTA0NUJcIixcbiAgXCJUc3Ryb2tcIjpcIlxcdTAxNjZcIixcbiAgXCJ0c3Ryb2tcIjpcIlxcdTAxNjdcIixcbiAgXCJ0d2l4dFwiOlwiXFx1MjI2Q1wiLFxuICBcInR3b2hlYWRsZWZ0YXJyb3dcIjpcIlxcdTIxOUVcIixcbiAgXCJ0d29oZWFkcmlnaHRhcnJvd1wiOlwiXFx1MjFBMFwiLFxuICBcIlVhY3V0ZVwiOlwiXFx1MDBEQVwiLFxuICBcInVhY3V0ZVwiOlwiXFx1MDBGQVwiLFxuICBcIlVhcnJcIjpcIlxcdTIxOUZcIixcbiAgXCJ1QXJyXCI6XCJcXHUyMUQxXCIsXG4gIFwidWFyclwiOlwiXFx1MjE5MVwiLFxuICBcIlVhcnJvY2lyXCI6XCJcXHUyOTQ5XCIsXG4gIFwiVWJyY3lcIjpcIlxcdTA0MEVcIixcbiAgXCJ1YnJjeVwiOlwiXFx1MDQ1RVwiLFxuICBcIlVicmV2ZVwiOlwiXFx1MDE2Q1wiLFxuICBcInVicmV2ZVwiOlwiXFx1MDE2RFwiLFxuICBcIlVjaXJjXCI6XCJcXHUwMERCXCIsXG4gIFwidWNpcmNcIjpcIlxcdTAwRkJcIixcbiAgXCJVY3lcIjpcIlxcdTA0MjNcIixcbiAgXCJ1Y3lcIjpcIlxcdTA0NDNcIixcbiAgXCJ1ZGFyclwiOlwiXFx1MjFDNVwiLFxuICBcIlVkYmxhY1wiOlwiXFx1MDE3MFwiLFxuICBcInVkYmxhY1wiOlwiXFx1MDE3MVwiLFxuICBcInVkaGFyXCI6XCJcXHUyOTZFXCIsXG4gIFwidWZpc2h0XCI6XCJcXHUyOTdFXCIsXG4gIFwiVWZyXCI6XCJcXHVEODM1XFx1REQxOFwiLFxuICBcInVmclwiOlwiXFx1RDgzNVxcdUREMzJcIixcbiAgXCJVZ3JhdmVcIjpcIlxcdTAwRDlcIixcbiAgXCJ1Z3JhdmVcIjpcIlxcdTAwRjlcIixcbiAgXCJ1SGFyXCI6XCJcXHUyOTYzXCIsXG4gIFwidWhhcmxcIjpcIlxcdTIxQkZcIixcbiAgXCJ1aGFyclwiOlwiXFx1MjFCRVwiLFxuICBcInVoYmxrXCI6XCJcXHUyNTgwXCIsXG4gIFwidWxjb3JuXCI6XCJcXHUyMzFDXCIsXG4gIFwidWxjb3JuZXJcIjpcIlxcdTIzMUNcIixcbiAgXCJ1bGNyb3BcIjpcIlxcdTIzMEZcIixcbiAgXCJ1bHRyaVwiOlwiXFx1MjVGOFwiLFxuICBcIlVtYWNyXCI6XCJcXHUwMTZBXCIsXG4gIFwidW1hY3JcIjpcIlxcdTAxNkJcIixcbiAgXCJ1bWxcIjpcIlxcdTAwQThcIixcbiAgXCJVbmRlckJhclwiOlwiXFx1MDA1RlwiLFxuICBcIlVuZGVyQnJhY2VcIjpcIlxcdTIzREZcIixcbiAgXCJVbmRlckJyYWNrZXRcIjpcIlxcdTIzQjVcIixcbiAgXCJVbmRlclBhcmVudGhlc2lzXCI6XCJcXHUyM0REXCIsXG4gIFwiVW5pb25cIjpcIlxcdTIyQzNcIixcbiAgXCJVbmlvblBsdXNcIjpcIlxcdTIyOEVcIixcbiAgXCJVb2dvblwiOlwiXFx1MDE3MlwiLFxuICBcInVvZ29uXCI6XCJcXHUwMTczXCIsXG4gIFwiVW9wZlwiOlwiXFx1RDgzNVxcdURENENcIixcbiAgXCJ1b3BmXCI6XCJcXHVEODM1XFx1REQ2NlwiLFxuICBcIlVwQXJyb3dcIjpcIlxcdTIxOTFcIixcbiAgXCJVcGFycm93XCI6XCJcXHUyMUQxXCIsXG4gIFwidXBhcnJvd1wiOlwiXFx1MjE5MVwiLFxuICBcIlVwQXJyb3dCYXJcIjpcIlxcdTI5MTJcIixcbiAgXCJVcEFycm93RG93bkFycm93XCI6XCJcXHUyMUM1XCIsXG4gIFwiVXBEb3duQXJyb3dcIjpcIlxcdTIxOTVcIixcbiAgXCJVcGRvd25hcnJvd1wiOlwiXFx1MjFENVwiLFxuICBcInVwZG93bmFycm93XCI6XCJcXHUyMTk1XCIsXG4gIFwiVXBFcXVpbGlicml1bVwiOlwiXFx1Mjk2RVwiLFxuICBcInVwaGFycG9vbmxlZnRcIjpcIlxcdTIxQkZcIixcbiAgXCJ1cGhhcnBvb25yaWdodFwiOlwiXFx1MjFCRVwiLFxuICBcInVwbHVzXCI6XCJcXHUyMjhFXCIsXG4gIFwiVXBwZXJMZWZ0QXJyb3dcIjpcIlxcdTIxOTZcIixcbiAgXCJVcHBlclJpZ2h0QXJyb3dcIjpcIlxcdTIxOTdcIixcbiAgXCJVcHNpXCI6XCJcXHUwM0QyXCIsXG4gIFwidXBzaVwiOlwiXFx1MDNDNVwiLFxuICBcInVwc2loXCI6XCJcXHUwM0QyXCIsXG4gIFwiVXBzaWxvblwiOlwiXFx1MDNBNVwiLFxuICBcInVwc2lsb25cIjpcIlxcdTAzQzVcIixcbiAgXCJVcFRlZVwiOlwiXFx1MjJBNVwiLFxuICBcIlVwVGVlQXJyb3dcIjpcIlxcdTIxQTVcIixcbiAgXCJ1cHVwYXJyb3dzXCI6XCJcXHUyMUM4XCIsXG4gIFwidXJjb3JuXCI6XCJcXHUyMzFEXCIsXG4gIFwidXJjb3JuZXJcIjpcIlxcdTIzMURcIixcbiAgXCJ1cmNyb3BcIjpcIlxcdTIzMEVcIixcbiAgXCJVcmluZ1wiOlwiXFx1MDE2RVwiLFxuICBcInVyaW5nXCI6XCJcXHUwMTZGXCIsXG4gIFwidXJ0cmlcIjpcIlxcdTI1RjlcIixcbiAgXCJVc2NyXCI6XCJcXHVEODM1XFx1RENCMFwiLFxuICBcInVzY3JcIjpcIlxcdUQ4MzVcXHVEQ0NBXCIsXG4gIFwidXRkb3RcIjpcIlxcdTIyRjBcIixcbiAgXCJVdGlsZGVcIjpcIlxcdTAxNjhcIixcbiAgXCJ1dGlsZGVcIjpcIlxcdTAxNjlcIixcbiAgXCJ1dHJpXCI6XCJcXHUyNUI1XCIsXG4gIFwidXRyaWZcIjpcIlxcdTI1QjRcIixcbiAgXCJ1dWFyclwiOlwiXFx1MjFDOFwiLFxuICBcIlV1bWxcIjpcIlxcdTAwRENcIixcbiAgXCJ1dW1sXCI6XCJcXHUwMEZDXCIsXG4gIFwidXdhbmdsZVwiOlwiXFx1MjlBN1wiLFxuICBcInZhbmdydFwiOlwiXFx1Mjk5Q1wiLFxuICBcInZhcmVwc2lsb25cIjpcIlxcdTAzRjVcIixcbiAgXCJ2YXJrYXBwYVwiOlwiXFx1MDNGMFwiLFxuICBcInZhcm5vdGhpbmdcIjpcIlxcdTIyMDVcIixcbiAgXCJ2YXJwaGlcIjpcIlxcdTAzRDVcIixcbiAgXCJ2YXJwaVwiOlwiXFx1MDNENlwiLFxuICBcInZhcnByb3B0b1wiOlwiXFx1MjIxRFwiLFxuICBcInZBcnJcIjpcIlxcdTIxRDVcIixcbiAgXCJ2YXJyXCI6XCJcXHUyMTk1XCIsXG4gIFwidmFycmhvXCI6XCJcXHUwM0YxXCIsXG4gIFwidmFyc2lnbWFcIjpcIlxcdTAzQzJcIixcbiAgXCJ2YXJzdWJzZXRuZXFcIjpcIlxcdTIyOEFcXHVGRTAwXCIsXG4gIFwidmFyc3Vic2V0bmVxcVwiOlwiXFx1MkFDQlxcdUZFMDBcIixcbiAgXCJ2YXJzdXBzZXRuZXFcIjpcIlxcdTIyOEJcXHVGRTAwXCIsXG4gIFwidmFyc3Vwc2V0bmVxcVwiOlwiXFx1MkFDQ1xcdUZFMDBcIixcbiAgXCJ2YXJ0aGV0YVwiOlwiXFx1MDNEMVwiLFxuICBcInZhcnRyaWFuZ2xlbGVmdFwiOlwiXFx1MjJCMlwiLFxuICBcInZhcnRyaWFuZ2xlcmlnaHRcIjpcIlxcdTIyQjNcIixcbiAgXCJWYmFyXCI6XCJcXHUyQUVCXCIsXG4gIFwidkJhclwiOlwiXFx1MkFFOFwiLFxuICBcInZCYXJ2XCI6XCJcXHUyQUU5XCIsXG4gIFwiVmN5XCI6XCJcXHUwNDEyXCIsXG4gIFwidmN5XCI6XCJcXHUwNDMyXCIsXG4gIFwiVkRhc2hcIjpcIlxcdTIyQUJcIixcbiAgXCJWZGFzaFwiOlwiXFx1MjJBOVwiLFxuICBcInZEYXNoXCI6XCJcXHUyMkE4XCIsXG4gIFwidmRhc2hcIjpcIlxcdTIyQTJcIixcbiAgXCJWZGFzaGxcIjpcIlxcdTJBRTZcIixcbiAgXCJWZWVcIjpcIlxcdTIyQzFcIixcbiAgXCJ2ZWVcIjpcIlxcdTIyMjhcIixcbiAgXCJ2ZWViYXJcIjpcIlxcdTIyQkJcIixcbiAgXCJ2ZWVlcVwiOlwiXFx1MjI1QVwiLFxuICBcInZlbGxpcFwiOlwiXFx1MjJFRVwiLFxuICBcIlZlcmJhclwiOlwiXFx1MjAxNlwiLFxuICBcInZlcmJhclwiOlwiXFx1MDA3Q1wiLFxuICBcIlZlcnRcIjpcIlxcdTIwMTZcIixcbiAgXCJ2ZXJ0XCI6XCJcXHUwMDdDXCIsXG4gIFwiVmVydGljYWxCYXJcIjpcIlxcdTIyMjNcIixcbiAgXCJWZXJ0aWNhbExpbmVcIjpcIlxcdTAwN0NcIixcbiAgXCJWZXJ0aWNhbFNlcGFyYXRvclwiOlwiXFx1Mjc1OFwiLFxuICBcIlZlcnRpY2FsVGlsZGVcIjpcIlxcdTIyNDBcIixcbiAgXCJWZXJ5VGhpblNwYWNlXCI6XCJcXHUyMDBBXCIsXG4gIFwiVmZyXCI6XCJcXHVEODM1XFx1REQxOVwiLFxuICBcInZmclwiOlwiXFx1RDgzNVxcdUREMzNcIixcbiAgXCJ2bHRyaVwiOlwiXFx1MjJCMlwiLFxuICBcInZuc3ViXCI6XCJcXHUyMjgyXFx1MjBEMlwiLFxuICBcInZuc3VwXCI6XCJcXHUyMjgzXFx1MjBEMlwiLFxuICBcIlZvcGZcIjpcIlxcdUQ4MzVcXHVERDREXCIsXG4gIFwidm9wZlwiOlwiXFx1RDgzNVxcdURENjdcIixcbiAgXCJ2cHJvcFwiOlwiXFx1MjIxRFwiLFxuICBcInZydHJpXCI6XCJcXHUyMkIzXCIsXG4gIFwiVnNjclwiOlwiXFx1RDgzNVxcdURDQjFcIixcbiAgXCJ2c2NyXCI6XCJcXHVEODM1XFx1RENDQlwiLFxuICBcInZzdWJuRVwiOlwiXFx1MkFDQlxcdUZFMDBcIixcbiAgXCJ2c3VibmVcIjpcIlxcdTIyOEFcXHVGRTAwXCIsXG4gIFwidnN1cG5FXCI6XCJcXHUyQUNDXFx1RkUwMFwiLFxuICBcInZzdXBuZVwiOlwiXFx1MjI4QlxcdUZFMDBcIixcbiAgXCJWdmRhc2hcIjpcIlxcdTIyQUFcIixcbiAgXCJ2emlnemFnXCI6XCJcXHUyOTlBXCIsXG4gIFwiV2NpcmNcIjpcIlxcdTAxNzRcIixcbiAgXCJ3Y2lyY1wiOlwiXFx1MDE3NVwiLFxuICBcIndlZGJhclwiOlwiXFx1MkE1RlwiLFxuICBcIldlZGdlXCI6XCJcXHUyMkMwXCIsXG4gIFwid2VkZ2VcIjpcIlxcdTIyMjdcIixcbiAgXCJ3ZWRnZXFcIjpcIlxcdTIyNTlcIixcbiAgXCJ3ZWllcnBcIjpcIlxcdTIxMThcIixcbiAgXCJXZnJcIjpcIlxcdUQ4MzVcXHVERDFBXCIsXG4gIFwid2ZyXCI6XCJcXHVEODM1XFx1REQzNFwiLFxuICBcIldvcGZcIjpcIlxcdUQ4MzVcXHVERDRFXCIsXG4gIFwid29wZlwiOlwiXFx1RDgzNVxcdURENjhcIixcbiAgXCJ3cFwiOlwiXFx1MjExOFwiLFxuICBcIndyXCI6XCJcXHUyMjQwXCIsXG4gIFwid3JlYXRoXCI6XCJcXHUyMjQwXCIsXG4gIFwiV3NjclwiOlwiXFx1RDgzNVxcdURDQjJcIixcbiAgXCJ3c2NyXCI6XCJcXHVEODM1XFx1RENDQ1wiLFxuICBcInhjYXBcIjpcIlxcdTIyQzJcIixcbiAgXCJ4Y2lyY1wiOlwiXFx1MjVFRlwiLFxuICBcInhjdXBcIjpcIlxcdTIyQzNcIixcbiAgXCJ4ZHRyaVwiOlwiXFx1MjVCRFwiLFxuICBcIlhmclwiOlwiXFx1RDgzNVxcdUREMUJcIixcbiAgXCJ4ZnJcIjpcIlxcdUQ4MzVcXHVERDM1XCIsXG4gIFwieGhBcnJcIjpcIlxcdTI3RkFcIixcbiAgXCJ4aGFyclwiOlwiXFx1MjdGN1wiLFxuICBcIlhpXCI6XCJcXHUwMzlFXCIsXG4gIFwieGlcIjpcIlxcdTAzQkVcIixcbiAgXCJ4bEFyclwiOlwiXFx1MjdGOFwiLFxuICBcInhsYXJyXCI6XCJcXHUyN0Y1XCIsXG4gIFwieG1hcFwiOlwiXFx1MjdGQ1wiLFxuICBcInhuaXNcIjpcIlxcdTIyRkJcIixcbiAgXCJ4b2RvdFwiOlwiXFx1MkEwMFwiLFxuICBcIlhvcGZcIjpcIlxcdUQ4MzVcXHVERDRGXCIsXG4gIFwieG9wZlwiOlwiXFx1RDgzNVxcdURENjlcIixcbiAgXCJ4b3BsdXNcIjpcIlxcdTJBMDFcIixcbiAgXCJ4b3RpbWVcIjpcIlxcdTJBMDJcIixcbiAgXCJ4ckFyclwiOlwiXFx1MjdGOVwiLFxuICBcInhyYXJyXCI6XCJcXHUyN0Y2XCIsXG4gIFwiWHNjclwiOlwiXFx1RDgzNVxcdURDQjNcIixcbiAgXCJ4c2NyXCI6XCJcXHVEODM1XFx1RENDRFwiLFxuICBcInhzcWN1cFwiOlwiXFx1MkEwNlwiLFxuICBcInh1cGx1c1wiOlwiXFx1MkEwNFwiLFxuICBcInh1dHJpXCI6XCJcXHUyNUIzXCIsXG4gIFwieHZlZVwiOlwiXFx1MjJDMVwiLFxuICBcInh3ZWRnZVwiOlwiXFx1MjJDMFwiLFxuICBcIllhY3V0ZVwiOlwiXFx1MDBERFwiLFxuICBcInlhY3V0ZVwiOlwiXFx1MDBGRFwiLFxuICBcIllBY3lcIjpcIlxcdTA0MkZcIixcbiAgXCJ5YWN5XCI6XCJcXHUwNDRGXCIsXG4gIFwiWWNpcmNcIjpcIlxcdTAxNzZcIixcbiAgXCJ5Y2lyY1wiOlwiXFx1MDE3N1wiLFxuICBcIlljeVwiOlwiXFx1MDQyQlwiLFxuICBcInljeVwiOlwiXFx1MDQ0QlwiLFxuICBcInllblwiOlwiXFx1MDBBNVwiLFxuICBcIllmclwiOlwiXFx1RDgzNVxcdUREMUNcIixcbiAgXCJ5ZnJcIjpcIlxcdUQ4MzVcXHVERDM2XCIsXG4gIFwiWUljeVwiOlwiXFx1MDQwN1wiLFxuICBcInlpY3lcIjpcIlxcdTA0NTdcIixcbiAgXCJZb3BmXCI6XCJcXHVEODM1XFx1REQ1MFwiLFxuICBcInlvcGZcIjpcIlxcdUQ4MzVcXHVERDZBXCIsXG4gIFwiWXNjclwiOlwiXFx1RDgzNVxcdURDQjRcIixcbiAgXCJ5c2NyXCI6XCJcXHVEODM1XFx1RENDRVwiLFxuICBcIllVY3lcIjpcIlxcdTA0MkVcIixcbiAgXCJ5dWN5XCI6XCJcXHUwNDRFXCIsXG4gIFwiWXVtbFwiOlwiXFx1MDE3OFwiLFxuICBcInl1bWxcIjpcIlxcdTAwRkZcIixcbiAgXCJaYWN1dGVcIjpcIlxcdTAxNzlcIixcbiAgXCJ6YWN1dGVcIjpcIlxcdTAxN0FcIixcbiAgXCJaY2Fyb25cIjpcIlxcdTAxN0RcIixcbiAgXCJ6Y2Fyb25cIjpcIlxcdTAxN0VcIixcbiAgXCJaY3lcIjpcIlxcdTA0MTdcIixcbiAgXCJ6Y3lcIjpcIlxcdTA0MzdcIixcbiAgXCJaZG90XCI6XCJcXHUwMTdCXCIsXG4gIFwiemRvdFwiOlwiXFx1MDE3Q1wiLFxuICBcInplZXRyZlwiOlwiXFx1MjEyOFwiLFxuICBcIlplcm9XaWR0aFNwYWNlXCI6XCJcXHUyMDBCXCIsXG4gIFwiWmV0YVwiOlwiXFx1MDM5NlwiLFxuICBcInpldGFcIjpcIlxcdTAzQjZcIixcbiAgXCJaZnJcIjpcIlxcdTIxMjhcIixcbiAgXCJ6ZnJcIjpcIlxcdUQ4MzVcXHVERDM3XCIsXG4gIFwiWkhjeVwiOlwiXFx1MDQxNlwiLFxuICBcInpoY3lcIjpcIlxcdTA0MzZcIixcbiAgXCJ6aWdyYXJyXCI6XCJcXHUyMUREXCIsXG4gIFwiWm9wZlwiOlwiXFx1MjEyNFwiLFxuICBcInpvcGZcIjpcIlxcdUQ4MzVcXHVERDZCXCIsXG4gIFwiWnNjclwiOlwiXFx1RDgzNVxcdURDQjVcIixcbiAgXCJ6c2NyXCI6XCJcXHVEODM1XFx1RENDRlwiLFxuICBcInp3alwiOlwiXFx1MjAwRFwiLFxuICBcInp3bmpcIjpcIlxcdTIwMENcIlxufTtcbiIsIi8vIExpc3Qgb2YgdmFsaWQgaHRtbCBibG9ja3MgbmFtZXMsIGFjY29ydGluZyB0byBjb21tb25tYXJrIHNwZWNcbi8vIGh0dHA6Ly9qZ20uZ2l0aHViLmlvL0NvbW1vbk1hcmsvc3BlYy5odG1sI2h0bWwtYmxvY2tzXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIGh0bWxfYmxvY2tzID0ge307XG5cbltcbiAgJ2FydGljbGUnLFxuICAnYXNpZGUnLFxuICAnYnV0dG9uJyxcbiAgJ2Jsb2NrcXVvdGUnLFxuICAnYm9keScsXG4gICdjYW52YXMnLFxuICAnY2FwdGlvbicsXG4gICdjb2wnLFxuICAnY29sZ3JvdXAnLFxuICAnZGQnLFxuICAnZGl2JyxcbiAgJ2RsJyxcbiAgJ2R0JyxcbiAgJ2VtYmVkJyxcbiAgJ2ZpZWxkc2V0JyxcbiAgJ2ZpZ2NhcHRpb24nLFxuICAnZmlndXJlJyxcbiAgJ2Zvb3RlcicsXG4gICdmb3JtJyxcbiAgJ2gxJyxcbiAgJ2gyJyxcbiAgJ2gzJyxcbiAgJ2g0JyxcbiAgJ2g1JyxcbiAgJ2g2JyxcbiAgJ2hlYWRlcicsXG4gICdoZ3JvdXAnLFxuICAnaHInLFxuICAnaWZyYW1lJyxcbiAgJ2xpJyxcbiAgJ21hcCcsXG4gICdvYmplY3QnLFxuICAnb2wnLFxuICAnb3V0cHV0JyxcbiAgJ3AnLFxuICAncHJlJyxcbiAgJ3Byb2dyZXNzJyxcbiAgJ3NjcmlwdCcsXG4gICdzZWN0aW9uJyxcbiAgJ3N0eWxlJyxcbiAgJ3RhYmxlJyxcbiAgJ3Rib2R5JyxcbiAgJ3RkJyxcbiAgJ3RleHRhcmVhJyxcbiAgJ3Rmb290JyxcbiAgJ3RoJyxcbiAgJ3RyJyxcbiAgJ3RoZWFkJyxcbiAgJ3VsJyxcbiAgJ3ZpZGVvJ1xuXS5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lKSB7IGh0bWxfYmxvY2tzW25hbWVdID0gdHJ1ZTsgfSk7XG5cblxubW9kdWxlLmV4cG9ydHMgPSBodG1sX2Jsb2NrcztcbiIsIi8vIFJlZ2V4cHMgdG8gbWF0Y2ggaHRtbCBlbGVtZW50c1xuXG4ndXNlIHN0cmljdCc7XG5cblxuZnVuY3Rpb24gcmVwbGFjZShyZWdleCwgb3B0aW9ucykge1xuICByZWdleCA9IHJlZ2V4LnNvdXJjZTtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwgJyc7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIHNlbGYobmFtZSwgdmFsKSB7XG4gICAgaWYgKCFuYW1lKSB7XG4gICAgICByZXR1cm4gbmV3IFJlZ0V4cChyZWdleCwgb3B0aW9ucyk7XG4gICAgfVxuICAgIHZhbCA9IHZhbC5zb3VyY2UgfHwgdmFsO1xuICAgIHJlZ2V4ID0gcmVnZXgucmVwbGFjZShuYW1lLCB2YWwpO1xuICAgIHJldHVybiBzZWxmO1xuICB9O1xufVxuXG5cbnZhciBhdHRyX25hbWUgICAgID0gL1thLXpBLVpfOl1bYS16QS1aMC05Oi5fLV0qLztcblxudmFyIHVucXVvdGVkICAgICAgPSAvW15cIic9PD5gXFx4MDAtXFx4MjBdKy87XG52YXIgc2luZ2xlX3F1b3RlZCA9IC8nW14nXSonLztcbnZhciBkb3VibGVfcXVvdGVkID0gL1wiW15cIl0qXCIvO1xuXG4vKmVzbGludCBuby1zcGFjZWQtZnVuYzowKi9cbnZhciBhdHRyX3ZhbHVlICA9IHJlcGxhY2UoLyg/OnVucXVvdGVkfHNpbmdsZV9xdW90ZWR8ZG91YmxlX3F1b3RlZCkvKVxuICAgICAgICAgICAgICAgICAgICAoJ3VucXVvdGVkJywgdW5xdW90ZWQpXG4gICAgICAgICAgICAgICAgICAgICgnc2luZ2xlX3F1b3RlZCcsIHNpbmdsZV9xdW90ZWQpXG4gICAgICAgICAgICAgICAgICAgICgnZG91YmxlX3F1b3RlZCcsIGRvdWJsZV9xdW90ZWQpXG4gICAgICAgICAgICAgICAgICAgICgpO1xuXG52YXIgYXR0cmlidXRlICAgPSByZXBsYWNlKC8oPzpcXHMrYXR0cl9uYW1lKD86XFxzKj1cXHMqYXR0cl92YWx1ZSk/KS8pXG4gICAgICAgICAgICAgICAgICAgICgnYXR0cl9uYW1lJywgYXR0cl9uYW1lKVxuICAgICAgICAgICAgICAgICAgICAoJ2F0dHJfdmFsdWUnLCBhdHRyX3ZhbHVlKVxuICAgICAgICAgICAgICAgICAgICAoKTtcblxudmFyIG9wZW5fdGFnICAgID0gcmVwbGFjZSgvPFtBLVphLXpdW0EtWmEtejAtOV0qYXR0cmlidXRlKlxccypcXC8/Pi8pXG4gICAgICAgICAgICAgICAgICAgICgnYXR0cmlidXRlJywgYXR0cmlidXRlKVxuICAgICAgICAgICAgICAgICAgICAoKTtcblxudmFyIGNsb3NlX3RhZyAgID0gLzxcXC9bQS1aYS16XVtBLVphLXowLTldKlxccyo+LztcbnZhciBjb21tZW50ICAgICA9IC88IS0tKFteLV0rfFstXVteLV0rKSotLT4vO1xudmFyIHByb2Nlc3NpbmcgID0gLzxbP10uKj9bP10+LztcbnZhciBkZWNsYXJhdGlvbiA9IC88IVtBLVpdK1xccytbXj5dKj4vO1xudmFyIGNkYXRhICAgICAgID0gLzwhXFxbQ0RBVEFcXFsoW15cXF1dK3xcXF1bXlxcXV18XFxdXFxdW14+XSkqXFxdXFxdPi87XG5cbnZhciBIVE1MX1RBR19SRSA9IHJlcGxhY2UoL14oPzpvcGVuX3RhZ3xjbG9zZV90YWd8Y29tbWVudHxwcm9jZXNzaW5nfGRlY2xhcmF0aW9ufGNkYXRhKS8pXG4gICgnb3Blbl90YWcnLCBvcGVuX3RhZylcbiAgKCdjbG9zZV90YWcnLCBjbG9zZV90YWcpXG4gICgnY29tbWVudCcsIGNvbW1lbnQpXG4gICgncHJvY2Vzc2luZycsIHByb2Nlc3NpbmcpXG4gICgnZGVjbGFyYXRpb24nLCBkZWNsYXJhdGlvbilcbiAgKCdjZGF0YScsIGNkYXRhKVxuICAoKTtcblxuXG5tb2R1bGUuZXhwb3J0cy5IVE1MX1RBR19SRSA9IEhUTUxfVEFHX1JFO1xuIiwiLy8gTGlzdCBvZiB2YWxpZCB1cmwgc2NoZW1hcywgYWNjb3J0aW5nIHRvIGNvbW1vbm1hcmsgc3BlY1xuLy8gaHR0cDovL2pnbS5naXRodWIuaW8vQ29tbW9uTWFyay9zcGVjLmh0bWwjYXV0b2xpbmtzXG5cbid1c2Ugc3RyaWN0JztcblxuXG5tb2R1bGUuZXhwb3J0cyA9IFtcbiAgJ2NvYXAnLFxuICAnZG9pJyxcbiAgJ2phdmFzY3JpcHQnLFxuICAnYWFhJyxcbiAgJ2FhYXMnLFxuICAnYWJvdXQnLFxuICAnYWNhcCcsXG4gICdjYXAnLFxuICAnY2lkJyxcbiAgJ2NyaWQnLFxuICAnZGF0YScsXG4gICdkYXYnLFxuICAnZGljdCcsXG4gICdkbnMnLFxuICAnZmlsZScsXG4gICdmdHAnLFxuICAnZ2VvJyxcbiAgJ2dvJyxcbiAgJ2dvcGhlcicsXG4gICdoMzIzJyxcbiAgJ2h0dHAnLFxuICAnaHR0cHMnLFxuICAnaWF4JyxcbiAgJ2ljYXAnLFxuICAnaW0nLFxuICAnaW1hcCcsXG4gICdpbmZvJyxcbiAgJ2lwcCcsXG4gICdpcmlzJyxcbiAgJ2lyaXMuYmVlcCcsXG4gICdpcmlzLnhwYycsXG4gICdpcmlzLnhwY3MnLFxuICAnaXJpcy5sd3onLFxuICAnbGRhcCcsXG4gICdtYWlsdG8nLFxuICAnbWlkJyxcbiAgJ21zcnAnLFxuICAnbXNycHMnLFxuICAnbXRxcCcsXG4gICdtdXBkYXRlJyxcbiAgJ25ld3MnLFxuICAnbmZzJyxcbiAgJ25pJyxcbiAgJ25paCcsXG4gICdubnRwJyxcbiAgJ29wYXF1ZWxvY2t0b2tlbicsXG4gICdwb3AnLFxuICAncHJlcycsXG4gICdydHNwJyxcbiAgJ3NlcnZpY2UnLFxuICAnc2Vzc2lvbicsXG4gICdzaHR0cCcsXG4gICdzaWV2ZScsXG4gICdzaXAnLFxuICAnc2lwcycsXG4gICdzbXMnLFxuICAnc25tcCcsXG4gICdzb2FwLmJlZXAnLFxuICAnc29hcC5iZWVwcycsXG4gICd0YWcnLFxuICAndGVsJyxcbiAgJ3RlbG5ldCcsXG4gICd0ZnRwJyxcbiAgJ3RoaXNtZXNzYWdlJyxcbiAgJ3RuMzI3MCcsXG4gICd0aXAnLFxuICAndHYnLFxuICAndXJuJyxcbiAgJ3ZlbW1pJyxcbiAgJ3dzJyxcbiAgJ3dzcycsXG4gICd4Y29uJyxcbiAgJ3hjb24tdXNlcmlkJyxcbiAgJ3htbHJwYy5iZWVwJyxcbiAgJ3htbHJwYy5iZWVwcycsXG4gICd4bXBwJyxcbiAgJ3ozOS41MHInLFxuICAnejM5LjUwcycsXG4gICdhZGl1bXh0cmEnLFxuICAnYWZwJyxcbiAgJ2FmcycsXG4gICdhaW0nLFxuICAnYXB0JyxcbiAgJ2F0dGFjaG1lbnQnLFxuICAnYXcnLFxuICAnYmVzaGFyZScsXG4gICdiaXRjb2luJyxcbiAgJ2JvbG8nLFxuICAnY2FsbHRvJyxcbiAgJ2Nocm9tZScsXG4gICdjaHJvbWUtZXh0ZW5zaW9uJyxcbiAgJ2NvbS1ldmVudGJyaXRlLWF0dGVuZGVlJyxcbiAgJ2NvbnRlbnQnLFxuICAnY3ZzJyxcbiAgJ2RsbmEtcGxheXNpbmdsZScsXG4gICdkbG5hLXBsYXljb250YWluZXInLFxuICAnZHRuJyxcbiAgJ2R2YicsXG4gICdlZDJrJyxcbiAgJ2ZhY2V0aW1lJyxcbiAgJ2ZlZWQnLFxuICAnZmluZ2VyJyxcbiAgJ2Zpc2gnLFxuICAnZ2cnLFxuICAnZ2l0JyxcbiAgJ2dpem1vcHJvamVjdCcsXG4gICdndGFsaycsXG4gICdoY3AnLFxuICAnaWNvbicsXG4gICdpcG4nLFxuICAnaXJjJyxcbiAgJ2lyYzYnLFxuICAnaXJjcycsXG4gICdpdG1zJyxcbiAgJ2phcicsXG4gICdqbXMnLFxuICAna2V5cGFyYycsXG4gICdsYXN0Zm0nLFxuICAnbGRhcHMnLFxuICAnbWFnbmV0JyxcbiAgJ21hcHMnLFxuICAnbWFya2V0JyxcbiAgJ21lc3NhZ2UnLFxuICAnbW1zJyxcbiAgJ21zLWhlbHAnLFxuICAnbXNuaW0nLFxuICAnbXVtYmxlJyxcbiAgJ212bicsXG4gICdub3RlcycsXG4gICdvaWQnLFxuICAncGFsbScsXG4gICdwYXBhcmF6emknLFxuICAncGxhdGZvcm0nLFxuICAncHJveHknLFxuICAncHN5YycsXG4gICdxdWVyeScsXG4gICdyZXMnLFxuICAncmVzb3VyY2UnLFxuICAncm1pJyxcbiAgJ3JzeW5jJyxcbiAgJ3J0bXAnLFxuICAnc2Vjb25kbGlmZScsXG4gICdzZnRwJyxcbiAgJ3NnbicsXG4gICdza3lwZScsXG4gICdzbWInLFxuICAnc29sZGF0JyxcbiAgJ3Nwb3RpZnknLFxuICAnc3NoJyxcbiAgJ3N0ZWFtJyxcbiAgJ3N2bicsXG4gICd0ZWFtc3BlYWsnLFxuICAndGhpbmdzJyxcbiAgJ3VkcCcsXG4gICd1bnJlYWwnLFxuICAndXQyMDA0JyxcbiAgJ3ZlbnRyaWxvJyxcbiAgJ3ZpZXctc291cmNlJyxcbiAgJ3dlYmNhbCcsXG4gICd3dGFpJyxcbiAgJ3d5Y2l3eWcnLFxuICAneGZpcmUnLFxuICAneHJpJyxcbiAgJ3ltc2dyJ1xuXTtcbiIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBVdGlsaXR5IGZ1bmN0aW9uc1xuICovXG5cbmZ1bmN0aW9uIHR5cGVPZihvYmopIHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvYmopO1xufVxuXG5mdW5jdGlvbiBpc1N0cmluZyhvYmopIHtcbiAgcmV0dXJuIHR5cGVPZihvYmopID09PSAnW29iamVjdCBTdHJpbmddJztcbn1cblxudmFyIGhhc093biA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG5cbmZ1bmN0aW9uIGhhcyhvYmplY3QsIGtleSkge1xuICByZXR1cm4gb2JqZWN0XG4gICAgPyBoYXNPd24uY2FsbChvYmplY3QsIGtleSlcbiAgICA6IGZhbHNlO1xufVxuXG4vLyBFeHRlbmQgb2JqZWN0c1xuLy9cbmZ1bmN0aW9uIGFzc2lnbihvYmogLypmcm9tMSwgZnJvbTIsIGZyb20zLCAuLi4qLykge1xuICB2YXIgc291cmNlcyA9IFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKTtcblxuICBzb3VyY2VzLmZvckVhY2goZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgIGlmICghc291cmNlKSB7IHJldHVybjsgfVxuXG4gICAgaWYgKHR5cGVvZiBzb3VyY2UgIT09ICdvYmplY3QnKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKHNvdXJjZSArICdtdXN0IGJlIG9iamVjdCcpO1xuICAgIH1cblxuICAgIE9iamVjdC5rZXlzKHNvdXJjZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICBvYmpba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgIH0pO1xuICB9KTtcblxuICByZXR1cm4gb2JqO1xufVxuXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG52YXIgVU5FU0NBUEVfTURfUkUgPSAvXFxcXChbXFxcXCFcIiMkJSYnKCkqKywuXFwvOjs8PT4/QFtcXF1eX2B7fH1+LV0pL2c7XG5cbmZ1bmN0aW9uIHVuZXNjYXBlTWQoc3RyKSB7XG4gIGlmIChzdHIuaW5kZXhPZignXFxcXCcpIDwgMCkgeyByZXR1cm4gc3RyOyB9XG4gIHJldHVybiBzdHIucmVwbGFjZShVTkVTQ0FQRV9NRF9SRSwgJyQxJyk7XG59XG5cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbmZ1bmN0aW9uIGlzVmFsaWRFbnRpdHlDb2RlKGMpIHtcbiAgLyplc2xpbnQgbm8tYml0d2lzZTowKi9cbiAgLy8gYnJva2VuIHNlcXVlbmNlXG4gIGlmIChjID49IDB4RDgwMCAmJiBjIDw9IDB4REZGRikgeyByZXR1cm4gZmFsc2U7IH1cbiAgLy8gbmV2ZXIgdXNlZFxuICBpZiAoYyA+PSAweEZERDAgJiYgYyA8PSAweEZERUYpIHsgcmV0dXJuIGZhbHNlOyB9XG4gIGlmICgoYyAmIDB4RkZGRikgPT09IDB4RkZGRiB8fCAoYyAmIDB4RkZGRikgPT09IDB4RkZGRSkgeyByZXR1cm4gZmFsc2U7IH1cbiAgLy8gY29udHJvbCBjb2Rlc1xuICBpZiAoYyA+PSAweDAwICYmIGMgPD0gMHgwOCkgeyByZXR1cm4gZmFsc2U7IH1cbiAgaWYgKGMgPT09IDB4MEIpIHsgcmV0dXJuIGZhbHNlOyB9XG4gIGlmIChjID49IDB4MEUgJiYgYyA8PSAweDFGKSB7IHJldHVybiBmYWxzZTsgfVxuICBpZiAoYyA+PSAweDdGICYmIGMgPD0gMHg5RikgeyByZXR1cm4gZmFsc2U7IH1cbiAgLy8gb3V0IG9mIHJhbmdlXG4gIGlmIChjID4gMHgxMEZGRkYpIHsgcmV0dXJuIGZhbHNlOyB9XG4gIHJldHVybiB0cnVlO1xufVxuXG5mdW5jdGlvbiBmcm9tQ29kZVBvaW50KGMpIHtcbiAgLyplc2xpbnQgbm8tYml0d2lzZTowKi9cbiAgaWYgKGMgPiAweGZmZmYpIHtcbiAgICBjIC09IDB4MTAwMDA7XG4gICAgdmFyIHN1cnJvZ2F0ZTEgPSAweGQ4MDAgKyAoYyA+PiAxMCksXG4gICAgICAgIHN1cnJvZ2F0ZTIgPSAweGRjMDAgKyAoYyAmIDB4M2ZmKTtcblxuICAgIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlKHN1cnJvZ2F0ZTEsIHN1cnJvZ2F0ZTIpO1xuICB9XG4gIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlKGMpO1xufVxuXG52YXIgTkFNRURfRU5USVRZX1JFICAgPSAvJihbYS16I11bYS16MC05XXsxLDMxfSk7L2dpO1xudmFyIERJR0lUQUxfRU5USVRZX1RFU1RfUkUgPSAvXiMoKD86eFthLWYwLTldezEsOH18WzAtOV17MSw4fSkpL2k7XG52YXIgZW50aXRpZXMgPSByZXF1aXJlKCcuL2VudGl0aWVzJyk7XG5cbmZ1bmN0aW9uIHJlcGxhY2VFbnRpdHlQYXR0ZXJuKG1hdGNoLCBuYW1lKSB7XG4gIHZhciBjb2RlID0gMDtcblxuICBpZiAoaGFzKGVudGl0aWVzLCBuYW1lKSkge1xuICAgIHJldHVybiBlbnRpdGllc1tuYW1lXTtcbiAgfSBlbHNlIGlmIChuYW1lLmNoYXJDb2RlQXQoMCkgPT09IDB4MjMvKiAjICovICYmIERJR0lUQUxfRU5USVRZX1RFU1RfUkUudGVzdChuYW1lKSkge1xuICAgIGNvZGUgPSBuYW1lWzFdLnRvTG93ZXJDYXNlKCkgPT09ICd4JyA/XG4gICAgICBwYXJzZUludChuYW1lLnNsaWNlKDIpLCAxNilcbiAgICA6XG4gICAgICBwYXJzZUludChuYW1lLnNsaWNlKDEpLCAxMCk7XG4gICAgaWYgKGlzVmFsaWRFbnRpdHlDb2RlKGNvZGUpKSB7XG4gICAgICByZXR1cm4gZnJvbUNvZGVQb2ludChjb2RlKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG1hdGNoO1xufVxuXG5mdW5jdGlvbiByZXBsYWNlRW50aXRpZXMoc3RyKSB7XG4gIGlmIChzdHIuaW5kZXhPZignJicpIDwgMCkgeyByZXR1cm4gc3RyOyB9XG5cbiAgcmV0dXJuIHN0ci5yZXBsYWNlKE5BTUVEX0VOVElUWV9SRSwgcmVwbGFjZUVudGl0eVBhdHRlcm4pO1xufVxuXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG52YXIgSFRNTF9FU0NBUEVfVEVTVF9SRSA9IC9bJjw+XCJdLztcbnZhciBIVE1MX0VTQ0FQRV9SRVBMQUNFX1JFID0gL1smPD5cIl0vZztcbnZhciBIVE1MX1JFUExBQ0VNRU5UUyA9IHtcbiAgJyYnOiAnJmFtcDsnLFxuICAnPCc6ICcmbHQ7JyxcbiAgJz4nOiAnJmd0OycsXG4gICdcIic6ICcmcXVvdDsnXG59O1xuXG5mdW5jdGlvbiByZXBsYWNlVW5zYWZlQ2hhcihjaCkge1xuICByZXR1cm4gSFRNTF9SRVBMQUNFTUVOVFNbY2hdO1xufVxuXG5mdW5jdGlvbiBlc2NhcGVIdG1sKHN0cikge1xuICBpZiAoSFRNTF9FU0NBUEVfVEVTVF9SRS50ZXN0KHN0cikpIHtcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoSFRNTF9FU0NBUEVfUkVQTEFDRV9SRSwgcmVwbGFjZVVuc2FmZUNoYXIpO1xuICB9XG4gIHJldHVybiBzdHI7XG59XG5cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbmV4cG9ydHMuYXNzaWduICAgICAgICAgICAgPSBhc3NpZ247XG5leHBvcnRzLmlzU3RyaW5nICAgICAgICAgID0gaXNTdHJpbmc7XG5leHBvcnRzLmhhcyAgICAgICAgICAgICAgID0gaGFzO1xuZXhwb3J0cy51bmVzY2FwZU1kICAgICAgICA9IHVuZXNjYXBlTWQ7XG5leHBvcnRzLmlzVmFsaWRFbnRpdHlDb2RlID0gaXNWYWxpZEVudGl0eUNvZGU7XG5leHBvcnRzLmZyb21Db2RlUG9pbnQgICAgID0gZnJvbUNvZGVQb2ludDtcbmV4cG9ydHMucmVwbGFjZUVudGl0aWVzICAgPSByZXBsYWNlRW50aXRpZXM7XG5leHBvcnRzLmVzY2FwZUh0bWwgICAgICAgID0gZXNjYXBlSHRtbDtcbiIsIi8vIENvbW1vbm1hcmsgZGVmYXVsdCBvcHRpb25zXG5cbid1c2Ugc3RyaWN0JztcblxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgb3B0aW9uczoge1xuICAgIGh0bWw6ICAgICAgICAgdHJ1ZSwgICAgICAgICAvLyBFbmFibGUgSFRNTCB0YWdzIGluIHNvdXJjZVxuICAgIHhodG1sT3V0OiAgICAgdHJ1ZSwgICAgICAgICAvLyBVc2UgJy8nIHRvIGNsb3NlIHNpbmdsZSB0YWdzICg8YnIgLz4pXG4gICAgYnJlYWtzOiAgICAgICBmYWxzZSwgICAgICAgIC8vIENvbnZlcnQgJ1xcbicgaW4gcGFyYWdyYXBocyBpbnRvIDxicj5cbiAgICBsYW5nUHJlZml4OiAgICdsYW5ndWFnZS0nLCAgLy8gQ1NTIGxhbmd1YWdlIHByZWZpeCBmb3IgZmVuY2VkIGJsb2Nrc1xuICAgIGxpbmtpZnk6ICAgICAgZmFsc2UsICAgICAgICAvLyBhdXRvY29udmVydCBVUkwtbGlrZSB0ZXh0cyB0byBsaW5rc1xuXG4gICAgLy8gRW5hYmxlIHNvbWUgbGFuZ3VhZ2UtbmV1dHJhbCByZXBsYWNlbWVudHMgKyBxdW90ZXMgYmVhdXRpZmljYXRpb25cbiAgICB0eXBvZ3JhcGhlcjogIGZhbHNlLFxuXG4gICAgLy8gRG91YmxlICsgc2luZ2xlIHF1b3RlcyByZXBsYWNlbWVudCBwYWlycywgd2hlbiB0eXBvZ3JhcGhlciBlbmFibGVkLFxuICAgIC8vIGFuZCBzbWFydHF1b3RlcyBvbi4gU2V0IGRvdWJsZXMgdG8gJ8KrwrsnIGZvciBSdXNzaWFuLCAn4oCe4oCcJyBmb3IgR2VybWFuLlxuICAgIHF1b3RlczogJ+KAnOKAneKAmOKAmScsXG5cbiAgICAvLyBIaWdobGlnaHRlciBmdW5jdGlvbi4gU2hvdWxkIHJldHVybiBlc2NhcGVkIEhUTUwsXG4gICAgLy8gb3IgJycgaWYgaW5wdXQgbm90IGNoYW5nZWRcbiAgICAvL1xuICAgIC8vIGZ1bmN0aW9uICgvKnN0ciwgbGFuZyovKSB7IHJldHVybiAnJzsgfVxuICAgIC8vXG4gICAgaGlnaGxpZ2h0OiBudWxsLFxuXG4gICAgbWF4TmVzdGluZzogICAyMCAgICAgICAgICAgIC8vIEludGVybmFsIHByb3RlY3Rpb24sIHJlY3Vyc2lvbiBsaW1pdFxuICB9LFxuXG4gIGNvbXBvbmVudHM6IHtcblxuICAgIGNvcmU6IHtcbiAgICAgIHJ1bGVzOiBbXG4gICAgICAgICdibG9jaycsXG4gICAgICAgICdpbmxpbmUnLFxuICAgICAgICAncmVmZXJlbmNlcycsXG4gICAgICAgICdhYmJyMidcbiAgICAgIF1cbiAgICB9LFxuXG4gICAgYmxvY2s6IHtcbiAgICAgIHJ1bGVzOiBbXG4gICAgICAgICdibG9ja3F1b3RlJyxcbiAgICAgICAgJ2NvZGUnLFxuICAgICAgICAnZmVuY2VzJyxcbiAgICAgICAgJ2hlYWRpbmcnLFxuICAgICAgICAnaHInLFxuICAgICAgICAnaHRtbGJsb2NrJyxcbiAgICAgICAgJ2xoZWFkaW5nJyxcbiAgICAgICAgJ2xpc3QnLFxuICAgICAgICAncGFyYWdyYXBoJ1xuICAgICAgXVxuICAgIH0sXG5cbiAgICBpbmxpbmU6IHtcbiAgICAgIHJ1bGVzOiBbXG4gICAgICAgICdhdXRvbGluaycsXG4gICAgICAgICdiYWNrdGlja3MnLFxuICAgICAgICAnZW1waGFzaXMnLFxuICAgICAgICAnZW50aXR5JyxcbiAgICAgICAgJ2VzY2FwZScsXG4gICAgICAgICdodG1sdGFnJyxcbiAgICAgICAgJ2xpbmtzJyxcbiAgICAgICAgJ25ld2xpbmUnLFxuICAgICAgICAndGV4dCdcbiAgICAgIF1cbiAgICB9XG4gIH1cbn07XG4iLCIvLyBSZW1hcmthYmxlIGRlZmF1bHQgb3B0aW9uc1xuXG4ndXNlIHN0cmljdCc7XG5cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIG9wdGlvbnM6IHtcbiAgICBodG1sOiAgICAgICAgIGZhbHNlLCAgICAgICAgLy8gRW5hYmxlIEhUTUwgdGFncyBpbiBzb3VyY2VcbiAgICB4aHRtbE91dDogICAgIGZhbHNlLCAgICAgICAgLy8gVXNlICcvJyB0byBjbG9zZSBzaW5nbGUgdGFncyAoPGJyIC8+KVxuICAgIGJyZWFrczogICAgICAgZmFsc2UsICAgICAgICAvLyBDb252ZXJ0ICdcXG4nIGluIHBhcmFncmFwaHMgaW50byA8YnI+XG4gICAgbGFuZ1ByZWZpeDogICAnbGFuZ3VhZ2UtJywgIC8vIENTUyBsYW5ndWFnZSBwcmVmaXggZm9yIGZlbmNlZCBibG9ja3NcbiAgICBsaW5raWZ5OiAgICAgIGZhbHNlLCAgICAgICAgLy8gYXV0b2NvbnZlcnQgVVJMLWxpa2UgdGV4dHMgdG8gbGlua3NcblxuICAgIC8vIEVuYWJsZSBzb21lIGxhbmd1YWdlLW5ldXRyYWwgcmVwbGFjZW1lbnRzICsgcXVvdGVzIGJlYXV0aWZpY2F0aW9uXG4gICAgdHlwb2dyYXBoZXI6ICBmYWxzZSxcblxuICAgIC8vIERvdWJsZSArIHNpbmdsZSBxdW90ZXMgcmVwbGFjZW1lbnQgcGFpcnMsIHdoZW4gdHlwb2dyYXBoZXIgZW5hYmxlZCxcbiAgICAvLyBhbmQgc21hcnRxdW90ZXMgb24uIFNldCBkb3VibGVzIHRvICfCq8K7JyBmb3IgUnVzc2lhbiwgJ+KAnuKAnCcgZm9yIEdlcm1hbi5cbiAgICBxdW90ZXM6ICfigJzigJ3igJjigJknLFxuXG4gICAgLy8gSGlnaGxpZ2h0ZXIgZnVuY3Rpb24uIFNob3VsZCByZXR1cm4gZXNjYXBlZCBIVE1MLFxuICAgIC8vIG9yICcnIGlmIGlucHV0IG5vdCBjaGFuZ2VkXG4gICAgLy9cbiAgICAvLyBmdW5jdGlvbiAoLypzdHIsIGxhbmcqLykgeyByZXR1cm4gJyc7IH1cbiAgICAvL1xuICAgIGhpZ2hsaWdodDogbnVsbCxcblxuICAgIG1heE5lc3Rpbmc6ICAgMjAgICAgICAgICAgICAvLyBJbnRlcm5hbCBwcm90ZWN0aW9uLCByZWN1cnNpb24gbGltaXRcbiAgfSxcblxuICBjb21wb25lbnRzOiB7XG5cbiAgICBjb3JlOiB7XG4gICAgICBydWxlczogW1xuICAgICAgICAnYmxvY2snLFxuICAgICAgICAnaW5saW5lJyxcbiAgICAgICAgJ3JlZmVyZW5jZXMnLFxuICAgICAgICAncmVwbGFjZW1lbnRzJyxcbiAgICAgICAgJ2xpbmtpZnknLFxuICAgICAgICAnc21hcnRxdW90ZXMnLFxuICAgICAgICAncmVmZXJlbmNlcycsXG4gICAgICAgICdhYmJyMicsXG4gICAgICAgICdmb290bm90ZV90YWlsJ1xuICAgICAgXVxuICAgIH0sXG5cbiAgICBibG9jazoge1xuICAgICAgcnVsZXM6IFtcbiAgICAgICAgJ2Jsb2NrcXVvdGUnLFxuICAgICAgICAnY29kZScsXG4gICAgICAgICdmZW5jZXMnLFxuICAgICAgICAnaGVhZGluZycsXG4gICAgICAgICdocicsXG4gICAgICAgICdodG1sYmxvY2snLFxuICAgICAgICAnbGhlYWRpbmcnLFxuICAgICAgICAnbGlzdCcsXG4gICAgICAgICdwYXJhZ3JhcGgnLFxuICAgICAgICAndGFibGUnXG4gICAgICBdXG4gICAgfSxcblxuICAgIGlubGluZToge1xuICAgICAgcnVsZXM6IFtcbiAgICAgICAgJ2F1dG9saW5rJyxcbiAgICAgICAgJ2JhY2t0aWNrcycsXG4gICAgICAgICdkZWwnLFxuICAgICAgICAnZW1waGFzaXMnLFxuICAgICAgICAnZW50aXR5JyxcbiAgICAgICAgJ2VzY2FwZScsXG4gICAgICAgICdmb290bm90ZV9yZWYnLFxuICAgICAgICAnaHRtbHRhZycsXG4gICAgICAgICdsaW5rcycsXG4gICAgICAgICduZXdsaW5lJyxcbiAgICAgICAgJ3RleHQnXG4gICAgICBdXG4gICAgfVxuICB9XG59O1xuIiwiLy8gUmVtYXJrYWJsZSBkZWZhdWx0IG9wdGlvbnNcblxuJ3VzZSBzdHJpY3QnO1xuXG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBvcHRpb25zOiB7XG4gICAgaHRtbDogICAgICAgICBmYWxzZSwgICAgICAgIC8vIEVuYWJsZSBIVE1MIHRhZ3MgaW4gc291cmNlXG4gICAgeGh0bWxPdXQ6ICAgICBmYWxzZSwgICAgICAgIC8vIFVzZSAnLycgdG8gY2xvc2Ugc2luZ2xlIHRhZ3MgKDxiciAvPilcbiAgICBicmVha3M6ICAgICAgIGZhbHNlLCAgICAgICAgLy8gQ29udmVydCAnXFxuJyBpbiBwYXJhZ3JhcGhzIGludG8gPGJyPlxuICAgIGxhbmdQcmVmaXg6ICAgJ2xhbmd1YWdlLScsICAvLyBDU1MgbGFuZ3VhZ2UgcHJlZml4IGZvciBmZW5jZWQgYmxvY2tzXG4gICAgbGlua2lmeTogICAgICBmYWxzZSwgICAgICAgIC8vIGF1dG9jb252ZXJ0IFVSTC1saWtlIHRleHRzIHRvIGxpbmtzXG5cbiAgICAvLyBFbmFibGUgc29tZSBsYW5ndWFnZS1uZXV0cmFsIHJlcGxhY2VtZW50cyArIHF1b3RlcyBiZWF1dGlmaWNhdGlvblxuICAgIHR5cG9ncmFwaGVyOiAgZmFsc2UsXG5cbiAgICAvLyBEb3VibGUgKyBzaW5nbGUgcXVvdGVzIHJlcGxhY2VtZW50IHBhaXJzLCB3aGVuIHR5cG9ncmFwaGVyIGVuYWJsZWQsXG4gICAgLy8gYW5kIHNtYXJ0cXVvdGVzIG9uLiBTZXQgZG91YmxlcyB0byAnwqvCuycgZm9yIFJ1c3NpYW4sICfigJ7igJwnIGZvciBHZXJtYW4uXG4gICAgcXVvdGVzOiAgICAgICAn4oCc4oCd4oCY4oCZJyxcblxuICAgIC8vIEhpZ2hsaWdodGVyIGZ1bmN0aW9uLiBTaG91bGQgcmV0dXJuIGVzY2FwZWQgSFRNTCxcbiAgICAvLyBvciAnJyBpZiBpbnB1dCBub3QgY2hhbmdlZFxuICAgIC8vXG4gICAgLy8gZnVuY3Rpb24gKC8qc3RyLCBsYW5nKi8pIHsgcmV0dXJuICcnOyB9XG4gICAgLy9cbiAgICBoaWdobGlnaHQ6ICAgICBudWxsLFxuXG4gICAgbWF4TmVzdGluZzogICAgMjAgICAgICAgICAgICAvLyBJbnRlcm5hbCBwcm90ZWN0aW9uLCByZWN1cnNpb24gbGltaXRcbiAgfSxcblxuICBjb21wb25lbnRzOiB7XG4gICAgLy8gRG9uJ3QgcmVzdHJpY3QgY29yZS9ibG9jay9pbmxpbmUgcnVsZXNcbiAgICBjb3JlOiB7fSxcbiAgICBibG9jazoge30sXG4gICAgaW5saW5lOiB7fVxuICB9XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgcmVwbGFjZUVudGl0aWVzID0gcmVxdWlyZSgnLi4vY29tbW9uL3V0aWxzJykucmVwbGFjZUVudGl0aWVzO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIG5vcm1hbGl6ZUxpbmsodXJsKSB7XG4gIHZhciBub3JtYWxpemVkID0gcmVwbGFjZUVudGl0aWVzKHVybCk7XG4gIC8vIFdlIHNob3VsZG4ndCBjYXJlIGFib3V0IHRoZSByZXN1bHQgb2YgbWFsZm9ybWVkIFVSSXMsXG4gIC8vIGFuZCBzaG91bGQgbm90IHRocm93IGFuIGV4Y2VwdGlvbi5cbiAgdHJ5IHtcbiAgICBub3JtYWxpemVkID0gZGVjb2RlVVJJKG5vcm1hbGl6ZWQpO1xuICB9IGNhdGNoIChlcnIpIHt9XG4gIHJldHVybiBlbmNvZGVVUkkobm9ybWFsaXplZCk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIG5vcm1hbGl6ZVJlZmVyZW5jZShzdHIpIHtcbiAgLy8gdXNlIC50b1VwcGVyQ2FzZSgpIGluc3RlYWQgb2YgLnRvTG93ZXJDYXNlKClcbiAgLy8gaGVyZSB0byBhdm9pZCBhIGNvbmZsaWN0IHdpdGggT2JqZWN0LnByb3RvdHlwZVxuICAvLyBtZW1iZXJzIChtb3N0IG5vdGFibHksIGBfX3Byb3RvX19gKVxuICByZXR1cm4gc3RyLnRyaW0oKS5yZXBsYWNlKC9cXHMrL2csICcgJykudG9VcHBlckNhc2UoKTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cblxudmFyIG5vcm1hbGl6ZUxpbmsgPSByZXF1aXJlKCcuL25vcm1hbGl6ZV9saW5rJyk7XG52YXIgdW5lc2NhcGVNZCAgICA9IHJlcXVpcmUoJy4uL2NvbW1vbi91dGlscycpLnVuZXNjYXBlTWQ7XG5cbi8qKlxuICogUGFyc2UgbGluayBkZXN0aW5hdGlvblxuICpcbiAqICAgLSBvbiBzdWNjZXNzIGl0IHJldHVybnMgYSBzdHJpbmcgYW5kIHVwZGF0ZXMgc3RhdGUucG9zO1xuICogICAtIG9uIGZhaWx1cmUgaXQgcmV0dXJucyBudWxsXG4gKlxuICogQHBhcmFtICB7T2JqZWN0fSBzdGF0ZVxuICogQHBhcmFtICB7TnVtYmVyfSBwb3NcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gcGFyc2VMaW5rRGVzdGluYXRpb24oc3RhdGUsIHBvcykge1xuICB2YXIgY29kZSwgbGV2ZWwsIGxpbmssXG4gICAgICBzdGFydCA9IHBvcyxcbiAgICAgIG1heCA9IHN0YXRlLnBvc01heDtcblxuICBpZiAoc3RhdGUuc3JjLmNoYXJDb2RlQXQocG9zKSA9PT0gMHgzQyAvKiA8ICovKSB7XG4gICAgcG9zKys7XG4gICAgd2hpbGUgKHBvcyA8IG1heCkge1xuICAgICAgY29kZSA9IHN0YXRlLnNyYy5jaGFyQ29kZUF0KHBvcyk7XG4gICAgICBpZiAoY29kZSA9PT0gMHgwQSAvKiBcXG4gKi8pIHsgcmV0dXJuIGZhbHNlOyB9XG4gICAgICBpZiAoY29kZSA9PT0gMHgzRSAvKiA+ICovKSB7XG4gICAgICAgIGxpbmsgPSBub3JtYWxpemVMaW5rKHVuZXNjYXBlTWQoc3RhdGUuc3JjLnNsaWNlKHN0YXJ0ICsgMSwgcG9zKSkpO1xuICAgICAgICBpZiAoIXN0YXRlLnBhcnNlci52YWxpZGF0ZUxpbmsobGluaykpIHsgcmV0dXJuIGZhbHNlOyB9XG4gICAgICAgIHN0YXRlLnBvcyA9IHBvcyArIDE7XG4gICAgICAgIHN0YXRlLmxpbmtDb250ZW50ID0gbGluaztcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgICBpZiAoY29kZSA9PT0gMHg1QyAvKiBcXCAqLyAmJiBwb3MgKyAxIDwgbWF4KSB7XG4gICAgICAgIHBvcyArPSAyO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgcG9zKys7XG4gICAgfVxuXG4gICAgLy8gbm8gY2xvc2luZyAnPidcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvLyB0aGlzIHNob3VsZCBiZSAuLi4gfSBlbHNlIHsgLi4uIGJyYW5jaFxuXG4gIGxldmVsID0gMDtcbiAgd2hpbGUgKHBvcyA8IG1heCkge1xuICAgIGNvZGUgPSBzdGF0ZS5zcmMuY2hhckNvZGVBdChwb3MpO1xuXG4gICAgaWYgKGNvZGUgPT09IDB4MjApIHsgYnJlYWs7IH1cblxuICAgIC8vIGFzY2lpIGNvbnRyb2wgY2hhcmFjdGVyc1xuICAgIGlmIChjb2RlIDwgMHgyMCB8fCBjb2RlID09PSAweDdGKSB7IGJyZWFrOyB9XG5cbiAgICBpZiAoY29kZSA9PT0gMHg1QyAvKiBcXCAqLyAmJiBwb3MgKyAxIDwgbWF4KSB7XG4gICAgICBwb3MgKz0gMjtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGlmIChjb2RlID09PSAweDI4IC8qICggKi8pIHtcbiAgICAgIGxldmVsKys7XG4gICAgICBpZiAobGV2ZWwgPiAxKSB7IGJyZWFrOyB9XG4gICAgfVxuXG4gICAgaWYgKGNvZGUgPT09IDB4MjkgLyogKSAqLykge1xuICAgICAgbGV2ZWwtLTtcbiAgICAgIGlmIChsZXZlbCA8IDApIHsgYnJlYWs7IH1cbiAgICB9XG5cbiAgICBwb3MrKztcbiAgfVxuXG4gIGlmIChzdGFydCA9PT0gcG9zKSB7IHJldHVybiBmYWxzZTsgfVxuXG4gIGxpbmsgPSBub3JtYWxpemVMaW5rKHVuZXNjYXBlTWQoc3RhdGUuc3JjLnNsaWNlKHN0YXJ0LCBwb3MpKSk7XG4gIGlmICghc3RhdGUucGFyc2VyLnZhbGlkYXRlTGluayhsaW5rKSkgeyByZXR1cm4gZmFsc2U7IH1cblxuICBzdGF0ZS5saW5rQ29udGVudCA9IGxpbms7XG4gIHN0YXRlLnBvcyA9IHBvcztcbiAgcmV0dXJuIHRydWU7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIFBhcnNlIGxpbmsgbGFiZWxzXG4gKlxuICogVGhpcyBmdW5jdGlvbiBhc3N1bWVzIHRoYXQgZmlyc3QgY2hhcmFjdGVyIChgW2ApIGFscmVhZHkgbWF0Y2hlcztcbiAqIHJldHVybnMgdGhlIGVuZCBvZiB0aGUgbGFiZWwuXG4gKlxuICogQHBhcmFtICB7T2JqZWN0fSBzdGF0ZVxuICogQHBhcmFtICB7TnVtYmVyfSBzdGFydFxuICogQGFwaSBwcml2YXRlXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBwYXJzZUxpbmtMYWJlbChzdGF0ZSwgc3RhcnQpIHtcbiAgdmFyIGxldmVsLCBmb3VuZCwgbWFya2VyLFxuICAgICAgbGFiZWxFbmQgPSAtMSxcbiAgICAgIG1heCA9IHN0YXRlLnBvc01heCxcbiAgICAgIG9sZFBvcyA9IHN0YXRlLnBvcyxcbiAgICAgIG9sZEZsYWcgPSBzdGF0ZS5pc0luTGFiZWw7XG5cbiAgaWYgKHN0YXRlLmlzSW5MYWJlbCkgeyByZXR1cm4gLTE7IH1cblxuICBpZiAoc3RhdGUubGFiZWxVbm1hdGNoZWRTY29wZXMpIHtcbiAgICBzdGF0ZS5sYWJlbFVubWF0Y2hlZFNjb3Blcy0tO1xuICAgIHJldHVybiAtMTtcbiAgfVxuXG4gIHN0YXRlLnBvcyA9IHN0YXJ0ICsgMTtcbiAgc3RhdGUuaXNJbkxhYmVsID0gdHJ1ZTtcbiAgbGV2ZWwgPSAxO1xuXG4gIHdoaWxlIChzdGF0ZS5wb3MgPCBtYXgpIHtcbiAgICBtYXJrZXIgPSBzdGF0ZS5zcmMuY2hhckNvZGVBdChzdGF0ZS5wb3MpO1xuICAgIGlmIChtYXJrZXIgPT09IDB4NUIgLyogWyAqLykge1xuICAgICAgbGV2ZWwrKztcbiAgICB9IGVsc2UgaWYgKG1hcmtlciA9PT0gMHg1RCAvKiBdICovKSB7XG4gICAgICBsZXZlbC0tO1xuICAgICAgaWYgKGxldmVsID09PSAwKSB7XG4gICAgICAgIGZvdW5kID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgc3RhdGUucGFyc2VyLnNraXBUb2tlbihzdGF0ZSk7XG4gIH1cblxuICBpZiAoZm91bmQpIHtcbiAgICBsYWJlbEVuZCA9IHN0YXRlLnBvcztcbiAgICBzdGF0ZS5sYWJlbFVubWF0Y2hlZFNjb3BlcyA9IDA7XG4gIH0gZWxzZSB7XG4gICAgc3RhdGUubGFiZWxVbm1hdGNoZWRTY29wZXMgPSBsZXZlbCAtIDE7XG4gIH1cblxuICAvLyByZXN0b3JlIG9sZCBzdGF0ZVxuICBzdGF0ZS5wb3MgPSBvbGRQb3M7XG4gIHN0YXRlLmlzSW5MYWJlbCA9IG9sZEZsYWc7XG5cbiAgcmV0dXJuIGxhYmVsRW5kO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuXG52YXIgdW5lc2NhcGVNZCA9IHJlcXVpcmUoJy4uL2NvbW1vbi91dGlscycpLnVuZXNjYXBlTWQ7XG5cbi8qKlxuICogUGFyc2UgbGluayB0aXRsZVxuICpcbiAqICAgLSBvbiBzdWNjZXNzIGl0IHJldHVybnMgYSBzdHJpbmcgYW5kIHVwZGF0ZXMgc3RhdGUucG9zO1xuICogICAtIG9uIGZhaWx1cmUgaXQgcmV0dXJucyBudWxsXG4gKlxuICogQHBhcmFtICB7T2JqZWN0fSBzdGF0ZVxuICogQHBhcmFtICB7TnVtYmVyfSBwb3NcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gcGFyc2VMaW5rVGl0bGUoc3RhdGUsIHBvcykge1xuICB2YXIgY29kZSxcbiAgICAgIHN0YXJ0ID0gcG9zLFxuICAgICAgbWF4ID0gc3RhdGUucG9zTWF4LFxuICAgICAgbWFya2VyID0gc3RhdGUuc3JjLmNoYXJDb2RlQXQocG9zKTtcblxuICBpZiAobWFya2VyICE9PSAweDIyIC8qIFwiICovICYmIG1hcmtlciAhPT0gMHgyNyAvKiAnICovICYmIG1hcmtlciAhPT0gMHgyOCAvKiAoICovKSB7IHJldHVybiBmYWxzZTsgfVxuXG4gIHBvcysrO1xuXG4gIC8vIGlmIG9wZW5pbmcgbWFya2VyIGlzIFwiKFwiLCBzd2l0Y2ggaXQgdG8gY2xvc2luZyBtYXJrZXIgXCIpXCJcbiAgaWYgKG1hcmtlciA9PT0gMHgyOCkgeyBtYXJrZXIgPSAweDI5OyB9XG5cbiAgd2hpbGUgKHBvcyA8IG1heCkge1xuICAgIGNvZGUgPSBzdGF0ZS5zcmMuY2hhckNvZGVBdChwb3MpO1xuICAgIGlmIChjb2RlID09PSBtYXJrZXIpIHtcbiAgICAgIHN0YXRlLnBvcyA9IHBvcyArIDE7XG4gICAgICBzdGF0ZS5saW5rQ29udGVudCA9IHVuZXNjYXBlTWQoc3RhdGUuc3JjLnNsaWNlKHN0YXJ0ICsgMSwgcG9zKSk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKGNvZGUgPT09IDB4NUMgLyogXFwgKi8gJiYgcG9zICsgMSA8IG1heCkge1xuICAgICAgcG9zICs9IDI7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBwb3MrKztcbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogTG9jYWwgZGVwZW5kZW5jaWVzXG4gKi9cblxudmFyIGFzc2lnbiAgICAgICA9IHJlcXVpcmUoJy4vY29tbW9uL3V0aWxzJykuYXNzaWduO1xudmFyIFJlbmRlcmVyICAgICA9IHJlcXVpcmUoJy4vcmVuZGVyZXInKTtcbnZhciBQYXJzZXJDb3JlICAgPSByZXF1aXJlKCcuL3BhcnNlcl9jb3JlJyk7XG52YXIgUGFyc2VyQmxvY2sgID0gcmVxdWlyZSgnLi9wYXJzZXJfYmxvY2snKTtcbnZhciBQYXJzZXJJbmxpbmUgPSByZXF1aXJlKCcuL3BhcnNlcl9pbmxpbmUnKTtcbnZhciBSdWxlciAgICAgICAgPSByZXF1aXJlKCcuL3J1bGVyJyk7XG5cbi8qKlxuICogUHJlc2V0IGNvbmZpZ3NcbiAqL1xuXG52YXIgY29uZmlnID0ge1xuICAnZGVmYXVsdCc6ICAgIHJlcXVpcmUoJy4vY29uZmlncy9kZWZhdWx0JyksXG4gICdmdWxsJzogICAgICAgcmVxdWlyZSgnLi9jb25maWdzL2Z1bGwnKSxcbiAgJ2NvbW1vbm1hcmsnOiByZXF1aXJlKCcuL2NvbmZpZ3MvY29tbW9ubWFyaycpXG59O1xuXG4vKipcbiAqIFRoZSBgU3RhdGVDb3JlYCBjbGFzcyBtYW5hZ2VzIHN0YXRlLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBgc2VsZmAgUmVtYXJrYWJsZSBpbnN0YW5jZVxuICogQHBhcmFtIHtTdHJpbmd9IGBzdHJgIE1hcmtkb3duIHN0cmluZ1xuICogQHBhcmFtIHtPYmplY3R9IGBlbnZgXG4gKi9cblxuZnVuY3Rpb24gU3RhdGVDb3JlKHNlbGYsIHN0ciwgZW52KSB7XG4gIHRoaXMuc3JjID0gc3RyO1xuICB0aGlzLmVudiA9IGVudjtcbiAgdGhpcy5vcHRpb25zID0gc2VsZi5vcHRpb25zO1xuICB0aGlzLnRva2VucyA9IFtdO1xuICB0aGlzLmlubGluZU1vZGUgPSBmYWxzZTtcblxuICB0aGlzLmlubGluZSA9IHNlbGYuaW5saW5lO1xuICB0aGlzLmJsb2NrID0gc2VsZi5ibG9jaztcbiAgdGhpcy5yZW5kZXJlciA9IHNlbGYucmVuZGVyZXI7XG4gIHRoaXMudHlwb2dyYXBoZXIgPSBzZWxmLnR5cG9ncmFwaGVyO1xufVxuXG4vKipcbiAqIFRoZSBtYWluIGBSZW1hcmthYmxlYCBjbGFzcy4gQ3JlYXRlIGFuIGluc3RhbmNlIG9mXG4gKiBgUmVtYXJrYWJsZWAgd2l0aCBhIGBwcmVzZXRgIGFuZC9vciBgb3B0aW9uc2AuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGBwcmVzZXRgIElmIG5vIHByZXNldCBpcyBnaXZlbiwgYGRlZmF1bHRgIGlzIHVzZWQuXG4gKiBAcGFyYW0ge09iamVjdH0gYG9wdGlvbnNgXG4gKi9cblxuZnVuY3Rpb24gUmVtYXJrYWJsZShwcmVzZXQsIG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBwcmVzZXQgIT09ICdzdHJpbmcnKSB7XG4gICAgb3B0aW9ucyA9IHByZXNldDtcbiAgICBwcmVzZXQgPSAnZGVmYXVsdCc7XG4gIH1cblxuICB0aGlzLmlubGluZSAgID0gbmV3IFBhcnNlcklubGluZSgpO1xuICB0aGlzLmJsb2NrICAgID0gbmV3IFBhcnNlckJsb2NrKCk7XG4gIHRoaXMuY29yZSAgICAgPSBuZXcgUGFyc2VyQ29yZSgpO1xuICB0aGlzLnJlbmRlcmVyID0gbmV3IFJlbmRlcmVyKCk7XG4gIHRoaXMucnVsZXIgICAgPSBuZXcgUnVsZXIoKTtcblxuICB0aGlzLm9wdGlvbnMgID0ge307XG4gIHRoaXMuY29uZmlndXJlKGNvbmZpZ1twcmVzZXRdKTtcbiAgdGhpcy5zZXQob3B0aW9ucyB8fCB7fSk7XG59XG5cbi8qKlxuICogU2V0IG9wdGlvbnMgYXMgYW4gYWx0ZXJuYXRpdmUgdG8gcGFzc2luZyB0aGVtXG4gKiB0byB0aGUgY29uc3RydWN0b3IuXG4gKlxuICogYGBganNcbiAqIG1kLnNldCh7dHlwb2dyYXBoZXI6IHRydWV9KTtcbiAqIGBgYFxuICogQHBhcmFtIHtPYmplY3R9IGBvcHRpb25zYFxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5SZW1hcmthYmxlLnByb3RvdHlwZS5zZXQgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICBhc3NpZ24odGhpcy5vcHRpb25zLCBvcHRpb25zKTtcbn07XG5cbi8qKlxuICogQmF0Y2ggbG9hZGVyIGZvciBjb21wb25lbnRzIHJ1bGVzIHN0YXRlcywgYW5kIG9wdGlvbnNcbiAqXG4gKiBAcGFyYW0gIHtPYmplY3R9IGBwcmVzZXRzYFxuICovXG5cblJlbWFya2FibGUucHJvdG90eXBlLmNvbmZpZ3VyZSA9IGZ1bmN0aW9uIChwcmVzZXRzKSB7XG4gIHZhciBzZWxmID0gdGhpcztcblxuICBpZiAoIXByZXNldHMpIHsgdGhyb3cgbmV3IEVycm9yKCdXcm9uZyBgcmVtYXJrYWJsZWAgcHJlc2V0LCBjaGVjayBuYW1lL2NvbnRlbnQnKTsgfVxuICBpZiAocHJlc2V0cy5vcHRpb25zKSB7IHNlbGYuc2V0KHByZXNldHMub3B0aW9ucyk7IH1cbiAgaWYgKHByZXNldHMuY29tcG9uZW50cykge1xuICAgIE9iamVjdC5rZXlzKHByZXNldHMuY29tcG9uZW50cykuZm9yRWFjaChmdW5jdGlvbiAobmFtZSkge1xuICAgICAgaWYgKHByZXNldHMuY29tcG9uZW50c1tuYW1lXS5ydWxlcykge1xuICAgICAgICBzZWxmW25hbWVdLnJ1bGVyLmVuYWJsZShwcmVzZXRzLmNvbXBvbmVudHNbbmFtZV0ucnVsZXMsIHRydWUpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59O1xuXG4vKipcbiAqIFVzZSBhIHBsdWdpbi5cbiAqXG4gKiBgYGBqc1xuICogdmFyIG1kID0gbmV3IFJlbWFya2FibGUoKTtcbiAqXG4gKiBtZC51c2UocGx1Z2luMSlcbiAqICAgLnVzZShwbHVnaW4yLCBvcHRzKVxuICogICAudXNlKHBsdWdpbjMpO1xuICogYGBgXG4gKlxuICogQHBhcmFtICB7RnVuY3Rpb259IGBwbHVnaW5gXG4gKiBAcGFyYW0gIHtPYmplY3R9IGBvcHRpb25zYFxuICogQHJldHVybiB7T2JqZWN0fSBgUmVtYXJrYWJsZWAgZm9yIGNoYWluaW5nXG4gKi9cblxuUmVtYXJrYWJsZS5wcm90b3R5cGUudXNlID0gZnVuY3Rpb24gKHBsdWdpbiwgb3B0aW9ucykge1xuICBwbHVnaW4odGhpcywgb3B0aW9ucyk7XG4gIHJldHVybiB0aGlzO1xufTtcblxuXG4vKipcbiAqIFBhcnNlIHRoZSBpbnB1dCBgc3RyaW5nYCBhbmQgcmV0dXJuIGEgdG9rZW5zIGFycmF5LlxuICogTW9kaWZpZXMgYGVudmAgd2l0aCBkZWZpbml0aW9ucyBkYXRhLlxuICpcbiAqIEBwYXJhbSAge1N0cmluZ30gYHN0cmluZ2BcbiAqIEBwYXJhbSAge09iamVjdH0gYGVudmBcbiAqIEByZXR1cm4ge0FycmF5fSBBcnJheSBvZiB0b2tlbnNcbiAqL1xuXG5SZW1hcmthYmxlLnByb3RvdHlwZS5wYXJzZSA9IGZ1bmN0aW9uIChzdHIsIGVudikge1xuICB2YXIgc3RhdGUgPSBuZXcgU3RhdGVDb3JlKHRoaXMsIHN0ciwgZW52KTtcbiAgdGhpcy5jb3JlLnByb2Nlc3Moc3RhdGUpO1xuICByZXR1cm4gc3RhdGUudG9rZW5zO1xufTtcblxuLyoqXG4gKiBUaGUgbWFpbiBgLnJlbmRlcigpYCBtZXRob2QgdGhhdCBkb2VzIGFsbCB0aGUgbWFnaWMgOilcbiAqXG4gKiBAcGFyYW0gIHtTdHJpbmd9IGBzdHJpbmdgXG4gKiBAcGFyYW0gIHtPYmplY3R9IGBlbnZgXG4gKiBAcmV0dXJuIHtTdHJpbmd9IFJlbmRlcmVkIEhUTUwuXG4gKi9cblxuUmVtYXJrYWJsZS5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKHN0ciwgZW52KSB7XG4gIGVudiA9IGVudiB8fCB7fTtcbiAgcmV0dXJuIHRoaXMucmVuZGVyZXIucmVuZGVyKHRoaXMucGFyc2Uoc3RyLCBlbnYpLCB0aGlzLm9wdGlvbnMsIGVudik7XG59O1xuXG4vKipcbiAqIFBhcnNlIHRoZSBnaXZlbiBjb250ZW50IGBzdHJpbmdgIGFzIGEgc2luZ2xlIHN0cmluZy5cbiAqXG4gKiBAcGFyYW0gIHtTdHJpbmd9IGBzdHJpbmdgXG4gKiBAcGFyYW0gIHtPYmplY3R9IGBlbnZgXG4gKiBAcmV0dXJuIHtBcnJheX0gQXJyYXkgb2YgdG9rZW5zXG4gKi9cblxuUmVtYXJrYWJsZS5wcm90b3R5cGUucGFyc2VJbmxpbmUgPSBmdW5jdGlvbiAoc3RyLCBlbnYpIHtcbiAgdmFyIHN0YXRlID0gbmV3IFN0YXRlQ29yZSh0aGlzLCBzdHIsIGVudik7XG4gIHN0YXRlLmlubGluZU1vZGUgPSB0cnVlO1xuICB0aGlzLmNvcmUucHJvY2VzcyhzdGF0ZSk7XG4gIHJldHVybiBzdGF0ZS50b2tlbnM7XG59O1xuXG4vKipcbiAqIFJlbmRlciBhIHNpbmdsZSBjb250ZW50IGBzdHJpbmdgLCB3aXRob3V0IHdyYXBwaW5nIGl0XG4gKiB0byBwYXJhZ3JhcGhzXG4gKlxuICogQHBhcmFtICB7U3RyaW5nfSBgc3RyYFxuICogQHBhcmFtICB7T2JqZWN0fSBgZW52YFxuICogQHJldHVybiB7U3RyaW5nfVxuICovXG5cblJlbWFya2FibGUucHJvdG90eXBlLnJlbmRlcklubGluZSA9IGZ1bmN0aW9uIChzdHIsIGVudikge1xuICBlbnYgPSBlbnYgfHwge307XG4gIHJldHVybiB0aGlzLnJlbmRlcmVyLnJlbmRlcih0aGlzLnBhcnNlSW5saW5lKHN0ciwgZW52KSwgdGhpcy5vcHRpb25zLCBlbnYpO1xufTtcblxuLyoqXG4gKiBFeHBvc2UgYFJlbWFya2FibGVgXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBSZW1hcmthYmxlO1xuXG4vKipcbiAqIEV4cG9zZSBgdXRpbHNgLCBVc2VmdWwgaGVscGVyIGZ1bmN0aW9ucyBmb3IgY3VzdG9tXG4gKiByZW5kZXJpbmcuXG4gKi9cblxubW9kdWxlLmV4cG9ydHMudXRpbHMgPSByZXF1aXJlKCcuL2NvbW1vbi91dGlscycpO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIExvY2FsIGRlcGVuZGVuY2llc1xuICovXG5cbnZhciBSdWxlciAgICAgID0gcmVxdWlyZSgnLi9ydWxlcicpO1xudmFyIFN0YXRlQmxvY2sgPSByZXF1aXJlKCcuL3J1bGVzX2Jsb2NrL3N0YXRlX2Jsb2NrJyk7XG5cbi8qKlxuICogUGFyc2VyIHJ1bGVzXG4gKi9cblxudmFyIF9ydWxlcyA9IFtcbiAgWyAnY29kZScsICAgICAgIHJlcXVpcmUoJy4vcnVsZXNfYmxvY2svY29kZScpIF0sXG4gIFsgJ2ZlbmNlcycsICAgICByZXF1aXJlKCcuL3J1bGVzX2Jsb2NrL2ZlbmNlcycpLCAgICAgWyAncGFyYWdyYXBoJywgJ2Jsb2NrcXVvdGUnLCAnbGlzdCcgXSBdLFxuICBbICdibG9ja3F1b3RlJywgcmVxdWlyZSgnLi9ydWxlc19ibG9jay9ibG9ja3F1b3RlJyksIFsgJ3BhcmFncmFwaCcsICdibG9ja3F1b3RlJywgJ2xpc3QnIF0gXSxcbiAgWyAnaHInLCAgICAgICAgIHJlcXVpcmUoJy4vcnVsZXNfYmxvY2svaHInKSwgICAgICAgICBbICdwYXJhZ3JhcGgnLCAnYmxvY2txdW90ZScsICdsaXN0JyBdIF0sXG4gIFsgJ2xpc3QnLCAgICAgICByZXF1aXJlKCcuL3J1bGVzX2Jsb2NrL2xpc3QnKSwgICAgICAgWyAncGFyYWdyYXBoJywgJ2Jsb2NrcXVvdGUnIF0gXSxcbiAgWyAnZm9vdG5vdGUnLCAgIHJlcXVpcmUoJy4vcnVsZXNfYmxvY2svZm9vdG5vdGUnKSwgICBbICdwYXJhZ3JhcGgnIF0gXSxcbiAgWyAnaGVhZGluZycsICAgIHJlcXVpcmUoJy4vcnVsZXNfYmxvY2svaGVhZGluZycpLCAgICBbICdwYXJhZ3JhcGgnLCAnYmxvY2txdW90ZScgXSBdLFxuICBbICdsaGVhZGluZycsICAgcmVxdWlyZSgnLi9ydWxlc19ibG9jay9saGVhZGluZycpIF0sXG4gIFsgJ2h0bWxibG9jaycsICByZXF1aXJlKCcuL3J1bGVzX2Jsb2NrL2h0bWxibG9jaycpLCAgWyAncGFyYWdyYXBoJywgJ2Jsb2NrcXVvdGUnIF0gXSxcbiAgWyAndGFibGUnLCAgICAgIHJlcXVpcmUoJy4vcnVsZXNfYmxvY2svdGFibGUnKSwgICAgICBbICdwYXJhZ3JhcGgnIF0gXSxcbiAgWyAnZGVmbGlzdCcsICAgIHJlcXVpcmUoJy4vcnVsZXNfYmxvY2svZGVmbGlzdCcpLCAgICBbICdwYXJhZ3JhcGgnIF0gXSxcbiAgWyAncGFyYWdyYXBoJywgIHJlcXVpcmUoJy4vcnVsZXNfYmxvY2svcGFyYWdyYXBoJykgXVxuXTtcblxuLyoqXG4gKiBCbG9jayBQYXJzZXIgY2xhc3NcbiAqXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBQYXJzZXJCbG9jaygpIHtcbiAgdGhpcy5ydWxlciA9IG5ldyBSdWxlcigpO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IF9ydWxlcy5sZW5ndGg7IGkrKykge1xuICAgIHRoaXMucnVsZXIucHVzaChfcnVsZXNbaV1bMF0sIF9ydWxlc1tpXVsxXSwge1xuICAgICAgYWx0OiAoX3J1bGVzW2ldWzJdIHx8IFtdKS5zbGljZSgpXG4gICAgfSk7XG4gIH1cbn1cblxuLyoqXG4gKiBHZW5lcmF0ZSB0b2tlbnMgZm9yIHRoZSBnaXZlbiBpbnB1dCByYW5nZS5cbiAqXG4gKiBAcGFyYW0gIHtPYmplY3R9IGBzdGF0ZWAgSGFzIHByb3BlcnRpZXMgbGlrZSBgc3JjYCwgYHBhcnNlcmAsIGBvcHRpb25zYCBldGNcbiAqIEBwYXJhbSAge051bWJlcn0gYHN0YXJ0TGluZWBcbiAqIEBwYXJhbSAge051bWJlcn0gYGVuZExpbmVgXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5QYXJzZXJCbG9jay5wcm90b3R5cGUudG9rZW5pemUgPSBmdW5jdGlvbiAoc3RhdGUsIHN0YXJ0TGluZSwgZW5kTGluZSkge1xuICB2YXIgcnVsZXMgPSB0aGlzLnJ1bGVyLmdldFJ1bGVzKCcnKTtcbiAgdmFyIGxlbiA9IHJ1bGVzLmxlbmd0aDtcbiAgdmFyIGxpbmUgPSBzdGFydExpbmU7XG4gIHZhciBoYXNFbXB0eUxpbmVzID0gZmFsc2U7XG4gIHZhciBvaywgaTtcblxuICB3aGlsZSAobGluZSA8IGVuZExpbmUpIHtcbiAgICBzdGF0ZS5saW5lID0gbGluZSA9IHN0YXRlLnNraXBFbXB0eUxpbmVzKGxpbmUpO1xuICAgIGlmIChsaW5lID49IGVuZExpbmUpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIC8vIFRlcm1pbmF0aW9uIGNvbmRpdGlvbiBmb3IgbmVzdGVkIGNhbGxzLlxuICAgIC8vIE5lc3RlZCBjYWxscyBjdXJyZW50bHkgdXNlZCBmb3IgYmxvY2txdW90ZXMgJiBsaXN0c1xuICAgIGlmIChzdGF0ZS50U2hpZnRbbGluZV0gPCBzdGF0ZS5ibGtJbmRlbnQpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIC8vIFRyeSBhbGwgcG9zc2libGUgcnVsZXMuXG4gICAgLy8gT24gc3VjY2VzcywgcnVsZSBzaG91bGQ6XG4gICAgLy9cbiAgICAvLyAtIHVwZGF0ZSBgc3RhdGUubGluZWBcbiAgICAvLyAtIHVwZGF0ZSBgc3RhdGUudG9rZW5zYFxuICAgIC8vIC0gcmV0dXJuIHRydWVcblxuICAgIGZvciAoaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgb2sgPSBydWxlc1tpXShzdGF0ZSwgbGluZSwgZW5kTGluZSwgZmFsc2UpO1xuICAgICAgaWYgKG9rKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIHNldCBzdGF0ZS50aWdodCBpZmYgd2UgaGFkIGFuIGVtcHR5IGxpbmUgYmVmb3JlIGN1cnJlbnQgdGFnXG4gICAgLy8gaS5lLiBsYXRlc3QgZW1wdHkgbGluZSBzaG91bGQgbm90IGNvdW50XG4gICAgc3RhdGUudGlnaHQgPSAhaGFzRW1wdHlMaW5lcztcblxuICAgIC8vIHBhcmFncmFwaCBtaWdodCBcImVhdFwiIG9uZSBuZXdsaW5lIGFmdGVyIGl0IGluIG5lc3RlZCBsaXN0c1xuICAgIGlmIChzdGF0ZS5pc0VtcHR5KHN0YXRlLmxpbmUgLSAxKSkge1xuICAgICAgaGFzRW1wdHlMaW5lcyA9IHRydWU7XG4gICAgfVxuXG4gICAgbGluZSA9IHN0YXRlLmxpbmU7XG5cbiAgICBpZiAobGluZSA8IGVuZExpbmUgJiYgc3RhdGUuaXNFbXB0eShsaW5lKSkge1xuICAgICAgaGFzRW1wdHlMaW5lcyA9IHRydWU7XG4gICAgICBsaW5lKys7XG5cbiAgICAgIC8vIHR3byBlbXB0eSBsaW5lcyBzaG91bGQgc3RvcCB0aGUgcGFyc2VyIGluIGxpc3QgbW9kZVxuICAgICAgaWYgKGxpbmUgPCBlbmRMaW5lICYmIHN0YXRlLnBhcmVudFR5cGUgPT09ICdsaXN0JyAmJiBzdGF0ZS5pc0VtcHR5KGxpbmUpKSB7IGJyZWFrOyB9XG4gICAgICBzdGF0ZS5saW5lID0gbGluZTtcbiAgICB9XG4gIH1cbn07XG5cbnZhciBUQUJTX1NDQU5fUkUgPSAvW1xcblxcdF0vZztcbnZhciBORVdMSU5FU19SRSAgPSAvXFxyW1xcblxcdTAwODVdfFtcXHUyNDI0XFx1MjAyOFxcdTAwODVdL2c7XG52YXIgU1BBQ0VTX1JFICAgID0gL1xcdTAwYTAvZztcblxuLyoqXG4gKiBUb2tlbml6ZSB0aGUgZ2l2ZW4gYHN0cmAuXG4gKlxuICogQHBhcmFtICB7U3RyaW5nfSBgc3RyYCBTb3VyY2Ugc3RyaW5nXG4gKiBAcGFyYW0gIHtPYmplY3R9IGBvcHRpb25zYFxuICogQHBhcmFtICB7T2JqZWN0fSBgZW52YFxuICogQHBhcmFtICB7QXJyYXl9IGBvdXRUb2tlbnNgXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5QYXJzZXJCbG9jay5wcm90b3R5cGUucGFyc2UgPSBmdW5jdGlvbiAoc3RyLCBvcHRpb25zLCBlbnYsIG91dFRva2Vucykge1xuICB2YXIgc3RhdGUsIGxpbmVTdGFydCA9IDAsIGxhc3RUYWJQb3MgPSAwO1xuICBpZiAoIXN0cikgeyByZXR1cm4gW107IH1cblxuICAvLyBOb3JtYWxpemUgc3BhY2VzXG4gIHN0ciA9IHN0ci5yZXBsYWNlKFNQQUNFU19SRSwgJyAnKTtcblxuICAvLyBOb3JtYWxpemUgbmV3bGluZXNcbiAgc3RyID0gc3RyLnJlcGxhY2UoTkVXTElORVNfUkUsICdcXG4nKTtcblxuICAvLyBSZXBsYWNlIHRhYnMgd2l0aCBwcm9wZXIgbnVtYmVyIG9mIHNwYWNlcyAoMS4uNClcbiAgaWYgKHN0ci5pbmRleE9mKCdcXHQnKSA+PSAwKSB7XG4gICAgc3RyID0gc3RyLnJlcGxhY2UoVEFCU19TQ0FOX1JFLCBmdW5jdGlvbiAobWF0Y2gsIG9mZnNldCkge1xuICAgICAgdmFyIHJlc3VsdDtcbiAgICAgIGlmIChzdHIuY2hhckNvZGVBdChvZmZzZXQpID09PSAweDBBKSB7XG4gICAgICAgIGxpbmVTdGFydCA9IG9mZnNldCArIDE7XG4gICAgICAgIGxhc3RUYWJQb3MgPSAwO1xuICAgICAgICByZXR1cm4gbWF0Y2g7XG4gICAgICB9XG4gICAgICByZXN1bHQgPSAnICAgICcuc2xpY2UoKG9mZnNldCAtIGxpbmVTdGFydCAtIGxhc3RUYWJQb3MpICUgNCk7XG4gICAgICBsYXN0VGFiUG9zID0gb2Zmc2V0IC0gbGluZVN0YXJ0ICsgMTtcbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfSk7XG4gIH1cblxuICBzdGF0ZSA9IG5ldyBTdGF0ZUJsb2NrKHN0ciwgdGhpcywgb3B0aW9ucywgZW52LCBvdXRUb2tlbnMpO1xuICB0aGlzLnRva2VuaXplKHN0YXRlLCBzdGF0ZS5saW5lLCBzdGF0ZS5saW5lTWF4KTtcbn07XG5cbi8qKlxuICogRXhwb3NlIGBQYXJzZXJCbG9ja2BcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IFBhcnNlckJsb2NrO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIExvY2FsIGRlcGVuZGVuY2llc1xuICovXG5cbnZhciBSdWxlciA9IHJlcXVpcmUoJy4vcnVsZXInKTtcblxuLyoqXG4gKiBDb3JlIHBhcnNlciBgcnVsZXNgXG4gKi9cblxudmFyIF9ydWxlcyA9IFtcbiAgWyAnYmxvY2snLCAgICAgICAgICByZXF1aXJlKCcuL3J1bGVzX2NvcmUvYmxvY2snKSAgICAgICAgICBdLFxuICBbICdhYmJyJywgICAgICAgICAgIHJlcXVpcmUoJy4vcnVsZXNfY29yZS9hYmJyJykgICAgICAgICAgIF0sXG4gIFsgJ3JlZmVyZW5jZXMnLCAgICAgcmVxdWlyZSgnLi9ydWxlc19jb3JlL3JlZmVyZW5jZXMnKSAgICAgXSxcbiAgWyAnaW5saW5lJywgICAgICAgICByZXF1aXJlKCcuL3J1bGVzX2NvcmUvaW5saW5lJykgICAgICAgICBdLFxuICBbICdmb290bm90ZV90YWlsJywgIHJlcXVpcmUoJy4vcnVsZXNfY29yZS9mb290bm90ZV90YWlsJykgIF0sXG4gIFsgJ2FiYnIyJywgICAgICAgICAgcmVxdWlyZSgnLi9ydWxlc19jb3JlL2FiYnIyJykgICAgICAgICAgXSxcbiAgWyAncmVwbGFjZW1lbnRzJywgICByZXF1aXJlKCcuL3J1bGVzX2NvcmUvcmVwbGFjZW1lbnRzJykgICBdLFxuICBbICdzbWFydHF1b3RlcycsICAgIHJlcXVpcmUoJy4vcnVsZXNfY29yZS9zbWFydHF1b3RlcycpICAgIF0sXG4gIFsgJ2xpbmtpZnknLCAgICAgICAgcmVxdWlyZSgnLi9ydWxlc19jb3JlL2xpbmtpZnknKSAgICAgICAgXVxuXTtcblxuLyoqXG4gKiBDbGFzcyBmb3IgdG9wIGxldmVsIChgY29yZWApIHBhcnNlciBydWxlc1xuICpcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIENvcmUoKSB7XG4gIHRoaXMub3B0aW9ucyA9IHt9O1xuICB0aGlzLnJ1bGVyID0gbmV3IFJ1bGVyKCk7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgX3J1bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgdGhpcy5ydWxlci5wdXNoKF9ydWxlc1tpXVswXSwgX3J1bGVzW2ldWzFdKTtcbiAgfVxufVxuXG4vKipcbiAqIFByb2Nlc3MgcnVsZXMgd2l0aCB0aGUgZ2l2ZW4gYHN0YXRlYFxuICpcbiAqIEBwYXJhbSAge09iamVjdH0gYHN0YXRlYFxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuQ29yZS5wcm90b3R5cGUucHJvY2VzcyA9IGZ1bmN0aW9uIChzdGF0ZSkge1xuICB2YXIgaSwgbCwgcnVsZXM7XG4gIHJ1bGVzID0gdGhpcy5ydWxlci5nZXRSdWxlcygnJyk7XG4gIGZvciAoaSA9IDAsIGwgPSBydWxlcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBydWxlc1tpXShzdGF0ZSk7XG4gIH1cbn07XG5cbi8qKlxuICogRXhwb3NlIGBDb3JlYFxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gQ29yZTtcbiIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBMb2NhbCBkZXBlbmRlbmNpZXNcbiAqL1xuXG52YXIgUnVsZXIgICAgICAgPSByZXF1aXJlKCcuL3J1bGVyJyk7XG52YXIgU3RhdGVJbmxpbmUgPSByZXF1aXJlKCcuL3J1bGVzX2lubGluZS9zdGF0ZV9pbmxpbmUnKTtcbnZhciB1dGlscyAgICAgICA9IHJlcXVpcmUoJy4vY29tbW9uL3V0aWxzJyk7XG5cbi8qKlxuICogSW5saW5lIFBhcnNlciBgcnVsZXNgXG4gKi9cblxudmFyIF9ydWxlcyA9IFtcbiAgWyAndGV4dCcsICAgICAgICAgICAgcmVxdWlyZSgnLi9ydWxlc19pbmxpbmUvdGV4dCcpIF0sXG4gIFsgJ25ld2xpbmUnLCAgICAgICAgIHJlcXVpcmUoJy4vcnVsZXNfaW5saW5lL25ld2xpbmUnKSBdLFxuICBbICdlc2NhcGUnLCAgICAgICAgICByZXF1aXJlKCcuL3J1bGVzX2lubGluZS9lc2NhcGUnKSBdLFxuICBbICdiYWNrdGlja3MnLCAgICAgICByZXF1aXJlKCcuL3J1bGVzX2lubGluZS9iYWNrdGlja3MnKSBdLFxuICBbICdkZWwnLCAgICAgICAgICAgICByZXF1aXJlKCcuL3J1bGVzX2lubGluZS9kZWwnKSBdLFxuICBbICdpbnMnLCAgICAgICAgICAgICByZXF1aXJlKCcuL3J1bGVzX2lubGluZS9pbnMnKSBdLFxuICBbICdtYXJrJywgICAgICAgICAgICByZXF1aXJlKCcuL3J1bGVzX2lubGluZS9tYXJrJykgXSxcbiAgWyAnZW1waGFzaXMnLCAgICAgICAgcmVxdWlyZSgnLi9ydWxlc19pbmxpbmUvZW1waGFzaXMnKSBdLFxuICBbICdzdWInLCAgICAgICAgICAgICByZXF1aXJlKCcuL3J1bGVzX2lubGluZS9zdWInKSBdLFxuICBbICdzdXAnLCAgICAgICAgICAgICByZXF1aXJlKCcuL3J1bGVzX2lubGluZS9zdXAnKSBdLFxuICBbICdsaW5rcycsICAgICAgICAgICByZXF1aXJlKCcuL3J1bGVzX2lubGluZS9saW5rcycpIF0sXG4gIFsgJ2Zvb3Rub3RlX2lubGluZScsIHJlcXVpcmUoJy4vcnVsZXNfaW5saW5lL2Zvb3Rub3RlX2lubGluZScpIF0sXG4gIFsgJ2Zvb3Rub3RlX3JlZicsICAgIHJlcXVpcmUoJy4vcnVsZXNfaW5saW5lL2Zvb3Rub3RlX3JlZicpIF0sXG4gIFsgJ2F1dG9saW5rJywgICAgICAgIHJlcXVpcmUoJy4vcnVsZXNfaW5saW5lL2F1dG9saW5rJykgXSxcbiAgWyAnaHRtbHRhZycsICAgICAgICAgcmVxdWlyZSgnLi9ydWxlc19pbmxpbmUvaHRtbHRhZycpIF0sXG4gIFsgJ2VudGl0eScsICAgICAgICAgIHJlcXVpcmUoJy4vcnVsZXNfaW5saW5lL2VudGl0eScpIF1cbl07XG5cbi8qKlxuICogSW5saW5lIFBhcnNlciBjbGFzcy4gTm90ZSB0aGF0IGxpbmsgdmFsaWRhdGlvbiBpcyBzdHJpY3RlclxuICogaW4gUmVtYXJrYWJsZSB0aGFuIHdoYXQgaXMgc3BlY2lmaWVkIGJ5IENvbW1vbk1hcmsuIElmIHlvdVxuICogd2FudCB0byBjaGFuZ2UgdGhpcyB5b3UgY2FuIHVzZSBhIGN1c3RvbSB2YWxpZGF0b3IuXG4gKlxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gUGFyc2VySW5saW5lKCkge1xuICB0aGlzLnJ1bGVyID0gbmV3IFJ1bGVyKCk7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgX3J1bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgdGhpcy5ydWxlci5wdXNoKF9ydWxlc1tpXVswXSwgX3J1bGVzW2ldWzFdKTtcbiAgfVxuXG4gIC8vIENhbiBiZSBvdmVycmlkZGVuIHdpdGggYSBjdXN0b20gdmFsaWRhdG9yXG4gIHRoaXMudmFsaWRhdGVMaW5rID0gdmFsaWRhdGVMaW5rO1xufVxuXG4vKipcbiAqIFNraXAgYSBzaW5nbGUgdG9rZW4gYnkgcnVubmluZyBhbGwgcnVsZXMgaW4gdmFsaWRhdGlvbiBtb2RlLlxuICogUmV0dXJucyBgdHJ1ZWAgaWYgYW55IHJ1bGUgcmVwb3J0cyBzdWNjZXNzLlxuICpcbiAqIEBwYXJhbSAge09iamVjdH0gYHN0YXRlYFxuICogQGFwaSBwcml2YWdlXG4gKi9cblxuUGFyc2VySW5saW5lLnByb3RvdHlwZS5za2lwVG9rZW4gPSBmdW5jdGlvbiAoc3RhdGUpIHtcbiAgdmFyIHJ1bGVzID0gdGhpcy5ydWxlci5nZXRSdWxlcygnJyk7XG4gIHZhciBsZW4gPSBydWxlcy5sZW5ndGg7XG4gIHZhciBwb3MgPSBzdGF0ZS5wb3M7XG4gIHZhciBpLCBjYWNoZWRfcG9zO1xuXG4gIGlmICgoY2FjaGVkX3BvcyA9IHN0YXRlLmNhY2hlR2V0KHBvcykpID4gMCkge1xuICAgIHN0YXRlLnBvcyA9IGNhY2hlZF9wb3M7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgZm9yIChpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgaWYgKHJ1bGVzW2ldKHN0YXRlLCB0cnVlKSkge1xuICAgICAgc3RhdGUuY2FjaGVTZXQocG9zLCBzdGF0ZS5wb3MpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRlLnBvcysrO1xuICBzdGF0ZS5jYWNoZVNldChwb3MsIHN0YXRlLnBvcyk7XG59O1xuXG4vKipcbiAqIEdlbmVyYXRlIHRva2VucyBmb3IgdGhlIGdpdmVuIGlucHV0IHJhbmdlLlxuICpcbiAqIEBwYXJhbSAge09iamVjdH0gYHN0YXRlYFxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuUGFyc2VySW5saW5lLnByb3RvdHlwZS50b2tlbml6ZSA9IGZ1bmN0aW9uIChzdGF0ZSkge1xuICB2YXIgcnVsZXMgPSB0aGlzLnJ1bGVyLmdldFJ1bGVzKCcnKTtcbiAgdmFyIGxlbiA9IHJ1bGVzLmxlbmd0aDtcbiAgdmFyIGVuZCA9IHN0YXRlLnBvc01heDtcbiAgdmFyIG9rLCBpO1xuXG4gIHdoaWxlIChzdGF0ZS5wb3MgPCBlbmQpIHtcblxuICAgIC8vIFRyeSBhbGwgcG9zc2libGUgcnVsZXMuXG4gICAgLy8gT24gc3VjY2VzcywgdGhlIHJ1bGUgc2hvdWxkOlxuICAgIC8vXG4gICAgLy8gLSB1cGRhdGUgYHN0YXRlLnBvc2BcbiAgICAvLyAtIHVwZGF0ZSBgc3RhdGUudG9rZW5zYFxuICAgIC8vIC0gcmV0dXJuIHRydWVcbiAgICBmb3IgKGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIG9rID0gcnVsZXNbaV0oc3RhdGUsIGZhbHNlKTtcblxuICAgICAgaWYgKG9rKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChvaykge1xuICAgICAgaWYgKHN0YXRlLnBvcyA+PSBlbmQpIHsgYnJlYWs7IH1cbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIHN0YXRlLnBlbmRpbmcgKz0gc3RhdGUuc3JjW3N0YXRlLnBvcysrXTtcbiAgfVxuXG4gIGlmIChzdGF0ZS5wZW5kaW5nKSB7XG4gICAgc3RhdGUucHVzaFBlbmRpbmcoKTtcbiAgfVxufTtcblxuLyoqXG4gKiBQYXJzZSB0aGUgZ2l2ZW4gaW5wdXQgc3RyaW5nLlxuICpcbiAqIEBwYXJhbSAge1N0cmluZ30gYHN0cmBcbiAqIEBwYXJhbSAge09iamVjdH0gYG9wdGlvbnNgXG4gKiBAcGFyYW0gIHtPYmplY3R9IGBlbnZgXG4gKiBAcGFyYW0gIHtBcnJheX0gYG91dFRva2Vuc2BcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cblBhcnNlcklubGluZS5wcm90b3R5cGUucGFyc2UgPSBmdW5jdGlvbiAoc3RyLCBvcHRpb25zLCBlbnYsIG91dFRva2Vucykge1xuICB2YXIgc3RhdGUgPSBuZXcgU3RhdGVJbmxpbmUoc3RyLCB0aGlzLCBvcHRpb25zLCBlbnYsIG91dFRva2Vucyk7XG4gIHRoaXMudG9rZW5pemUoc3RhdGUpO1xufTtcblxuLyoqXG4gKiBWYWxpZGF0ZSB0aGUgZ2l2ZW4gYHVybGAgYnkgY2hlY2tpbmcgZm9yIGJhZCBwcm90b2NvbHMuXG4gKlxuICogQHBhcmFtICB7U3RyaW5nfSBgdXJsYFxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqL1xuXG5mdW5jdGlvbiB2YWxpZGF0ZUxpbmsodXJsKSB7XG4gIHZhciBCQURfUFJPVE9DT0xTID0gWyAndmJzY3JpcHQnLCAnamF2YXNjcmlwdCcsICdmaWxlJyBdO1xuICB2YXIgc3RyID0gdXJsLnRyaW0oKS50b0xvd2VyQ2FzZSgpO1xuICAvLyBDYXJlIGFib3V0IGRpZ2l0YWwgZW50aXRpZXMgXCJqYXZhc2NyaXB0JiN4M0E7YWxlcnQoMSlcIlxuICBzdHIgPSB1dGlscy5yZXBsYWNlRW50aXRpZXMoc3RyKTtcbiAgaWYgKHN0ci5pbmRleE9mKCc6JykgIT09IC0xICYmIEJBRF9QUk9UT0NPTFMuaW5kZXhPZihzdHIuc3BsaXQoJzonKVswXSkgIT09IC0xKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHJldHVybiB0cnVlO1xufVxuXG4vKipcbiAqIEV4cG9zZSBgUGFyc2VySW5saW5lYFxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gUGFyc2VySW5saW5lO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIExvY2FsIGRlcGVuZGVuY2llc1xuICovXG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vY29tbW9uL3V0aWxzJyk7XG52YXIgcnVsZXMgPSByZXF1aXJlKCcuL3J1bGVzJyk7XG5cbi8qKlxuICogRXhwb3NlIGBSZW5kZXJlcmBcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlbmRlcmVyO1xuXG4vKipcbiAqIFJlbmRlcmVyIGNsYXNzLiBSZW5kZXJzIEhUTUwgYW5kIGV4cG9zZXMgYHJ1bGVzYCB0byBhbGxvd1xuICogbG9jYWwgbW9kaWZpY2F0aW9ucy5cbiAqL1xuXG5mdW5jdGlvbiBSZW5kZXJlcigpIHtcbiAgdGhpcy5ydWxlcyA9IHV0aWxzLmFzc2lnbih7fSwgcnVsZXMpO1xuXG4gIC8vIGV4cG9ydGVkIGhlbHBlciwgZm9yIGN1c3RvbSBydWxlcyBvbmx5XG4gIHRoaXMuZ2V0QnJlYWsgPSBydWxlcy5nZXRCcmVhaztcbn1cblxuLyoqXG4gKiBSZW5kZXIgYSBzdHJpbmcgb2YgaW5saW5lIEhUTUwgd2l0aCB0aGUgZ2l2ZW4gYHRva2Vuc2AgYW5kXG4gKiBgb3B0aW9uc2AuXG4gKlxuICogQHBhcmFtICB7QXJyYXl9IGB0b2tlbnNgXG4gKiBAcGFyYW0gIHtPYmplY3R9IGBvcHRpb25zYFxuICogQHBhcmFtICB7T2JqZWN0fSBgZW52YFxuICogQHJldHVybiB7U3RyaW5nfVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5SZW5kZXJlci5wcm90b3R5cGUucmVuZGVySW5saW5lID0gZnVuY3Rpb24gKHRva2Vucywgb3B0aW9ucywgZW52KSB7XG4gIHZhciBfcnVsZXMgPSB0aGlzLnJ1bGVzO1xuICB2YXIgbGVuID0gdG9rZW5zLmxlbmd0aCwgaSA9IDA7XG4gIHZhciByZXN1bHQgPSAnJztcblxuICB3aGlsZSAobGVuLS0pIHtcbiAgICByZXN1bHQgKz0gX3J1bGVzW3Rva2Vuc1tpXS50eXBlXSh0b2tlbnMsIGkrKywgb3B0aW9ucywgZW52LCB0aGlzKTtcbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG4vKipcbiAqIFJlbmRlciBhIHN0cmluZyBvZiBIVE1MIHdpdGggdGhlIGdpdmVuIGB0b2tlbnNgIGFuZFxuICogYG9wdGlvbnNgLlxuICpcbiAqIEBwYXJhbSAge0FycmF5fSBgdG9rZW5zYFxuICogQHBhcmFtICB7T2JqZWN0fSBgb3B0aW9uc2BcbiAqIEBwYXJhbSAge09iamVjdH0gYGVudmBcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqIEBhcGkgcHVibGljXG4gKi9cblxuUmVuZGVyZXIucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uICh0b2tlbnMsIG9wdGlvbnMsIGVudikge1xuICB2YXIgX3J1bGVzID0gdGhpcy5ydWxlcztcbiAgdmFyIGxlbiA9IHRva2Vucy5sZW5ndGgsIGkgPSAtMTtcbiAgdmFyIHJlc3VsdCA9ICcnO1xuXG4gIHdoaWxlICgrK2kgPCBsZW4pIHtcbiAgICBpZiAodG9rZW5zW2ldLnR5cGUgPT09ICdpbmxpbmUnKSB7XG4gICAgICByZXN1bHQgKz0gdGhpcy5yZW5kZXJJbmxpbmUodG9rZW5zW2ldLmNoaWxkcmVuLCBvcHRpb25zLCBlbnYpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHQgKz0gX3J1bGVzW3Rva2Vuc1tpXS50eXBlXSh0b2tlbnMsIGksIG9wdGlvbnMsIGVudiwgdGhpcyk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIFJ1bGVyIGlzIGEgaGVscGVyIGNsYXNzIGZvciBidWlsZGluZyByZXNwb25zaWJpbGl0eSBjaGFpbnMgZnJvbVxuICogcGFyc2UgcnVsZXMuIEl0IGFsbG93czpcbiAqXG4gKiAgIC0gZWFzeSBzdGFjayBydWxlcyBjaGFpbnNcbiAqICAgLSBnZXR0aW5nIG1haW4gY2hhaW4gYW5kIG5hbWVkIGNoYWlucyBjb250ZW50IChhcyBhcnJheXMgb2YgZnVuY3Rpb25zKVxuICpcbiAqIEhlbHBlciBtZXRob2RzLCBzaG91bGQgbm90IGJlIHVzZWQgZGlyZWN0bHkuXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBSdWxlcigpIHtcbiAgLy8gTGlzdCBvZiBhZGRlZCBydWxlcy4gRWFjaCBlbGVtZW50IGlzOlxuICAvL1xuICAvLyB7IG5hbWU6IFhYWCxcbiAgLy8gICBlbmFibGVkOiBCb29sZWFuLFxuICAvLyAgIGZuOiBGdW5jdGlvbigpLFxuICAvLyAgIGFsdDogWyBuYW1lMiwgbmFtZTMgXSB9XG4gIC8vXG4gIHRoaXMuX19ydWxlc19fID0gW107XG5cbiAgLy8gQ2FjaGVkIHJ1bGUgY2hhaW5zLlxuICAvL1xuICAvLyBGaXJzdCBsZXZlbCAtIGNoYWluIG5hbWUsICcnIGZvciBkZWZhdWx0LlxuICAvLyBTZWNvbmQgbGV2ZWwgLSBkaWdpdGFsIGFuY2hvciBmb3IgZmFzdCBmaWx0ZXJpbmcgYnkgY2hhcmNvZGVzLlxuICAvL1xuICB0aGlzLl9fY2FjaGVfXyA9IG51bGw7XG59XG5cbi8qKlxuICogRmluZCB0aGUgaW5kZXggb2YgYSBydWxlIGJ5IGBuYW1lYC5cbiAqXG4gKiBAcGFyYW0gIHtTdHJpbmd9IGBuYW1lYFxuICogQHJldHVybiB7TnVtYmVyfSBJbmRleCBvZiB0aGUgZ2l2ZW4gYG5hbWVgXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5SdWxlci5wcm90b3R5cGUuX19maW5kX18gPSBmdW5jdGlvbiAobmFtZSkge1xuICB2YXIgbGVuID0gdGhpcy5fX3J1bGVzX18ubGVuZ3RoO1xuICB2YXIgaSA9IC0xO1xuXG4gIHdoaWxlIChsZW4tLSkge1xuICAgIGlmICh0aGlzLl9fcnVsZXNfX1srK2ldLm5hbWUgPT09IG5hbWUpIHtcbiAgICAgIHJldHVybiBpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gLTE7XG59O1xuXG4vKipcbiAqIEJ1aWxkIHRoZSBydWxlcyBsb29rdXAgY2FjaGVcbiAqXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5SdWxlci5wcm90b3R5cGUuX19jb21waWxlX18gPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBzZWxmID0gdGhpcztcbiAgdmFyIGNoYWlucyA9IFsgJycgXTtcblxuICAvLyBjb2xsZWN0IHVuaXF1ZSBuYW1lc1xuICBzZWxmLl9fcnVsZXNfXy5mb3JFYWNoKGZ1bmN0aW9uIChydWxlKSB7XG4gICAgaWYgKCFydWxlLmVuYWJsZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBydWxlLmFsdC5mb3JFYWNoKGZ1bmN0aW9uIChhbHROYW1lKSB7XG4gICAgICBpZiAoY2hhaW5zLmluZGV4T2YoYWx0TmFtZSkgPCAwKSB7XG4gICAgICAgIGNoYWlucy5wdXNoKGFsdE5hbWUpO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcblxuICBzZWxmLl9fY2FjaGVfXyA9IHt9O1xuXG4gIGNoYWlucy5mb3JFYWNoKGZ1bmN0aW9uIChjaGFpbikge1xuICAgIHNlbGYuX19jYWNoZV9fW2NoYWluXSA9IFtdO1xuICAgIHNlbGYuX19ydWxlc19fLmZvckVhY2goZnVuY3Rpb24gKHJ1bGUpIHtcbiAgICAgIGlmICghcnVsZS5lbmFibGVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKGNoYWluICYmIHJ1bGUuYWx0LmluZGV4T2YoY2hhaW4pIDwgMCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBzZWxmLl9fY2FjaGVfX1tjaGFpbl0ucHVzaChydWxlLmZuKTtcbiAgICB9KTtcbiAgfSk7XG59O1xuXG4vKipcbiAqIFJ1bGVyIHB1YmxpYyBtZXRob2RzXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG4vKipcbiAqIFJlcGxhY2UgcnVsZSBmdW5jdGlvblxuICpcbiAqIEBwYXJhbSAge1N0cmluZ30gYG5hbWVgIFJ1bGUgbmFtZVxuICogQHBhcmFtICB7RnVuY3Rpb24gYGZuYFxuICogQHBhcmFtICB7T2JqZWN0fSBgb3B0aW9uc2BcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cblJ1bGVyLnByb3RvdHlwZS5hdCA9IGZ1bmN0aW9uIChuYW1lLCBmbiwgb3B0aW9ucykge1xuICB2YXIgaWR4ID0gdGhpcy5fX2ZpbmRfXyhuYW1lKTtcbiAgdmFyIG9wdCA9IG9wdGlvbnMgfHwge307XG5cbiAgaWYgKGlkeCA9PT0gLTEpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1BhcnNlciBydWxlIG5vdCBmb3VuZDogJyArIG5hbWUpO1xuICB9XG5cbiAgdGhpcy5fX3J1bGVzX19baWR4XS5mbiA9IGZuO1xuICB0aGlzLl9fcnVsZXNfX1tpZHhdLmFsdCA9IG9wdC5hbHQgfHwgW107XG4gIHRoaXMuX19jYWNoZV9fID0gbnVsbDtcbn07XG5cbi8qKlxuICogQWRkIGEgcnVsZSB0byB0aGUgY2hhaW4gYmVmb3JlIGdpdmVuIHRoZSBgcnVsZU5hbWVgLlxuICpcbiAqIEBwYXJhbSAge1N0cmluZ30gICBgYmVmb3JlTmFtZWBcbiAqIEBwYXJhbSAge1N0cmluZ30gICBgcnVsZU5hbWVgXG4gKiBAcGFyYW0gIHtGdW5jdGlvbn0gYGZuYFxuICogQHBhcmFtICB7T2JqZWN0fSAgIGBvcHRpb25zYFxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuUnVsZXIucHJvdG90eXBlLmJlZm9yZSA9IGZ1bmN0aW9uIChiZWZvcmVOYW1lLCBydWxlTmFtZSwgZm4sIG9wdGlvbnMpIHtcbiAgdmFyIGlkeCA9IHRoaXMuX19maW5kX18oYmVmb3JlTmFtZSk7XG4gIHZhciBvcHQgPSBvcHRpb25zIHx8IHt9O1xuXG4gIGlmIChpZHggPT09IC0xKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdQYXJzZXIgcnVsZSBub3QgZm91bmQ6ICcgKyBiZWZvcmVOYW1lKTtcbiAgfVxuXG4gIHRoaXMuX19ydWxlc19fLnNwbGljZShpZHgsIDAsIHtcbiAgICBuYW1lOiBydWxlTmFtZSxcbiAgICBlbmFibGVkOiB0cnVlLFxuICAgIGZuOiBmbixcbiAgICBhbHQ6IG9wdC5hbHQgfHwgW11cbiAgfSk7XG5cbiAgdGhpcy5fX2NhY2hlX18gPSBudWxsO1xufTtcblxuLyoqXG4gKiBBZGQgYSBydWxlIHRvIHRoZSBjaGFpbiBhZnRlciB0aGUgZ2l2ZW4gYHJ1bGVOYW1lYC5cbiAqXG4gKiBAcGFyYW0gIHtTdHJpbmd9ICAgYGFmdGVyTmFtZWBcbiAqIEBwYXJhbSAge1N0cmluZ30gICBgcnVsZU5hbWVgXG4gKiBAcGFyYW0gIHtGdW5jdGlvbn0gYGZuYFxuICogQHBhcmFtICB7T2JqZWN0fSAgIGBvcHRpb25zYFxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuUnVsZXIucHJvdG90eXBlLmFmdGVyID0gZnVuY3Rpb24gKGFmdGVyTmFtZSwgcnVsZU5hbWUsIGZuLCBvcHRpb25zKSB7XG4gIHZhciBpZHggPSB0aGlzLl9fZmluZF9fKGFmdGVyTmFtZSk7XG4gIHZhciBvcHQgPSBvcHRpb25zIHx8IHt9O1xuXG4gIGlmIChpZHggPT09IC0xKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdQYXJzZXIgcnVsZSBub3QgZm91bmQ6ICcgKyBhZnRlck5hbWUpO1xuICB9XG5cbiAgdGhpcy5fX3J1bGVzX18uc3BsaWNlKGlkeCArIDEsIDAsIHtcbiAgICBuYW1lOiBydWxlTmFtZSxcbiAgICBlbmFibGVkOiB0cnVlLFxuICAgIGZuOiBmbixcbiAgICBhbHQ6IG9wdC5hbHQgfHwgW11cbiAgfSk7XG5cbiAgdGhpcy5fX2NhY2hlX18gPSBudWxsO1xufTtcblxuLyoqXG4gKiBBZGQgYSBydWxlIHRvIHRoZSBlbmQgb2YgY2hhaW4uXG4gKlxuICogQHBhcmFtICB7U3RyaW5nfSAgIGBydWxlTmFtZWBcbiAqIEBwYXJhbSAge0Z1bmN0aW9ufSBgZm5gXG4gKiBAcGFyYW0gIHtPYmplY3R9ICAgYG9wdGlvbnNgXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKi9cblxuUnVsZXIucHJvdG90eXBlLnB1c2ggPSBmdW5jdGlvbiAocnVsZU5hbWUsIGZuLCBvcHRpb25zKSB7XG4gIHZhciBvcHQgPSBvcHRpb25zIHx8IHt9O1xuXG4gIHRoaXMuX19ydWxlc19fLnB1c2goe1xuICAgIG5hbWU6IHJ1bGVOYW1lLFxuICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgZm46IGZuLFxuICAgIGFsdDogb3B0LmFsdCB8fCBbXVxuICB9KTtcblxuICB0aGlzLl9fY2FjaGVfXyA9IG51bGw7XG59O1xuXG4vKipcbiAqIEVuYWJsZSBhIHJ1bGUgb3IgbGlzdCBvZiBydWxlcy5cbiAqXG4gKiBAcGFyYW0gIHtTdHJpbmd8QXJyYXl9IGBsaXN0YCBOYW1lIG9yIGFycmF5IG9mIHJ1bGUgbmFtZXMgdG8gZW5hYmxlXG4gKiBAcGFyYW0gIHtCb29sZWFufSBgc3RyaWN0YCBJZiBgdHJ1ZWAsIGFsbCBub24gbGlzdGVkIHJ1bGVzIHdpbGwgYmUgZGlzYWJsZWQuXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5SdWxlci5wcm90b3R5cGUuZW5hYmxlID0gZnVuY3Rpb24gKGxpc3QsIHN0cmljdCkge1xuICBsaXN0ID0gIUFycmF5LmlzQXJyYXkobGlzdClcbiAgICA/IFsgbGlzdCBdXG4gICAgOiBsaXN0O1xuXG4gIC8vIEluIHN0cmljdCBtb2RlIGRpc2FibGUgYWxsIGV4aXN0aW5nIHJ1bGVzIGZpcnN0XG4gIGlmIChzdHJpY3QpIHtcbiAgICB0aGlzLl9fcnVsZXNfXy5mb3JFYWNoKGZ1bmN0aW9uIChydWxlKSB7XG4gICAgICBydWxlLmVuYWJsZWQgPSBmYWxzZTtcbiAgICB9KTtcbiAgfVxuXG4gIC8vIFNlYXJjaCBieSBuYW1lIGFuZCBlbmFibGVcbiAgbGlzdC5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdmFyIGlkeCA9IHRoaXMuX19maW5kX18obmFtZSk7XG4gICAgaWYgKGlkeCA8IDApIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignUnVsZXMgbWFuYWdlcjogaW52YWxpZCBydWxlIG5hbWUgJyArIG5hbWUpO1xuICAgIH1cbiAgICB0aGlzLl9fcnVsZXNfX1tpZHhdLmVuYWJsZWQgPSB0cnVlO1xuICB9LCB0aGlzKTtcblxuICB0aGlzLl9fY2FjaGVfXyA9IG51bGw7XG59O1xuXG5cbi8qKlxuICogRGlzYWJsZSBhIHJ1bGUgb3IgbGlzdCBvZiBydWxlcy5cbiAqXG4gKiBAcGFyYW0gIHtTdHJpbmd8QXJyYXl9IGBsaXN0YCBOYW1lIG9yIGFycmF5IG9mIHJ1bGUgbmFtZXMgdG8gZGlzYWJsZVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuUnVsZXIucHJvdG90eXBlLmRpc2FibGUgPSBmdW5jdGlvbiAobGlzdCkge1xuICBsaXN0ID0gIUFycmF5LmlzQXJyYXkobGlzdClcbiAgICA/IFsgbGlzdCBdXG4gICAgOiBsaXN0O1xuXG4gIC8vIFNlYXJjaCBieSBuYW1lIGFuZCBkaXNhYmxlXG4gIGxpc3QuZm9yRWFjaChmdW5jdGlvbiAobmFtZSkge1xuICAgIHZhciBpZHggPSB0aGlzLl9fZmluZF9fKG5hbWUpO1xuICAgIGlmIChpZHggPCAwKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1J1bGVzIG1hbmFnZXI6IGludmFsaWQgcnVsZSBuYW1lICcgKyBuYW1lKTtcbiAgICB9XG4gICAgdGhpcy5fX3J1bGVzX19baWR4XS5lbmFibGVkID0gZmFsc2U7XG4gIH0sIHRoaXMpO1xuXG4gIHRoaXMuX19jYWNoZV9fID0gbnVsbDtcbn07XG5cbi8qKlxuICogR2V0IGEgcnVsZXMgbGlzdCBhcyBhbiBhcnJheSBvZiBmdW5jdGlvbnMuXG4gKlxuICogQHBhcmFtICB7U3RyaW5nfSBgY2hhaW5OYW1lYFxuICogQHJldHVybiB7T2JqZWN0fVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuUnVsZXIucHJvdG90eXBlLmdldFJ1bGVzID0gZnVuY3Rpb24gKGNoYWluTmFtZSkge1xuICBpZiAodGhpcy5fX2NhY2hlX18gPT09IG51bGwpIHtcbiAgICB0aGlzLl9fY29tcGlsZV9fKCk7XG4gIH1cbiAgcmV0dXJuIHRoaXMuX19jYWNoZV9fW2NoYWluTmFtZV07XG59O1xuXG4vKipcbiAqIEV4cG9zZSBgUnVsZXJgXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBSdWxlcjtcbiIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBMb2NhbCBkZXBlbmRlbmNpZXNcbiAqL1xuXG52YXIgaGFzICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9jb21tb24vdXRpbHMnKS5oYXM7XG52YXIgdW5lc2NhcGVNZCAgICAgID0gcmVxdWlyZSgnLi9jb21tb24vdXRpbHMnKS51bmVzY2FwZU1kO1xudmFyIHJlcGxhY2VFbnRpdGllcyA9IHJlcXVpcmUoJy4vY29tbW9uL3V0aWxzJykucmVwbGFjZUVudGl0aWVzO1xudmFyIGVzY2FwZUh0bWwgICAgICA9IHJlcXVpcmUoJy4vY29tbW9uL3V0aWxzJykuZXNjYXBlSHRtbDtcblxuLyoqXG4gKiBSZW5kZXJlciBydWxlcyBjYWNoZVxuICovXG5cbnZhciBydWxlcyA9IHt9O1xuXG4vKipcbiAqIEJsb2NrcXVvdGVzXG4gKi9cblxucnVsZXMuYmxvY2txdW90ZV9vcGVuID0gZnVuY3Rpb24gKC8qIHRva2VucywgaWR4LCBvcHRpb25zLCBlbnYgKi8pIHtcbiAgcmV0dXJuICc8YmxvY2txdW90ZT5cXG4nO1xufTtcblxucnVsZXMuYmxvY2txdW90ZV9jbG9zZSA9IGZ1bmN0aW9uICh0b2tlbnMsIGlkeCAvKiwgb3B0aW9ucywgZW52ICovKSB7XG4gIHJldHVybiAnPC9ibG9ja3F1b3RlPicgKyBnZXRCcmVhayh0b2tlbnMsIGlkeCk7XG59O1xuXG4vKipcbiAqIENvZGVcbiAqL1xuXG5ydWxlcy5jb2RlID0gZnVuY3Rpb24gKHRva2VucywgaWR4IC8qLCBvcHRpb25zLCBlbnYgKi8pIHtcbiAgaWYgKHRva2Vuc1tpZHhdLmJsb2NrKSB7XG4gICAgcmV0dXJuICc8cHJlPjxjb2RlPicgKyBlc2NhcGVIdG1sKHRva2Vuc1tpZHhdLmNvbnRlbnQpICsgJzwvY29kZT48L3ByZT4nICsgZ2V0QnJlYWsodG9rZW5zLCBpZHgpO1xuICB9XG4gIHJldHVybiAnPGNvZGU+JyArIGVzY2FwZUh0bWwodG9rZW5zW2lkeF0uY29udGVudCkgKyAnPC9jb2RlPic7XG59O1xuXG4vKipcbiAqIEZlbmNlZCBjb2RlIGJsb2Nrc1xuICovXG5cbnJ1bGVzLmZlbmNlID0gZnVuY3Rpb24gKHRva2VucywgaWR4LCBvcHRpb25zLCBlbnYsIHNlbGYpIHtcbiAgdmFyIHRva2VuID0gdG9rZW5zW2lkeF07XG4gIHZhciBsYW5nQ2xhc3MgPSAnJztcbiAgdmFyIGxhbmdQcmVmaXggPSBvcHRpb25zLmxhbmdQcmVmaXg7XG4gIHZhciBsYW5nTmFtZSA9ICcnLCBmZW5jZU5hbWU7XG4gIHZhciBoaWdobGlnaHRlZDtcblxuICBpZiAodG9rZW4ucGFyYW1zKSB7XG5cbiAgICAvL1xuICAgIC8vIGBgYGZvbyBiYXJcbiAgICAvL1xuICAgIC8vIFRyeSBjdXN0b20gcmVuZGVyZXIgXCJmb29cIiBmaXJzdC4gVGhhdCB3aWxsIHNpbXBsaWZ5IG92ZXJ3cml0ZVxuICAgIC8vIGZvciBkaWFncmFtcywgbGF0ZXgsIGFuZCBhbnkgb3RoZXIgZmVuY2VkIGJsb2NrIHdpdGggY3VzdG9tIGxvb2tcbiAgICAvL1xuXG4gICAgZmVuY2VOYW1lID0gdG9rZW4ucGFyYW1zLnNwbGl0KC9cXHMrL2cpWzBdO1xuXG4gICAgaWYgKGhhcyhzZWxmLnJ1bGVzLmZlbmNlX2N1c3RvbSwgZmVuY2VOYW1lKSkge1xuICAgICAgcmV0dXJuIHNlbGYucnVsZXMuZmVuY2VfY3VzdG9tW2ZlbmNlTmFtZV0odG9rZW5zLCBpZHgsIG9wdGlvbnMsIGVudiwgc2VsZik7XG4gICAgfVxuXG4gICAgbGFuZ05hbWUgPSBlc2NhcGVIdG1sKHJlcGxhY2VFbnRpdGllcyh1bmVzY2FwZU1kKGZlbmNlTmFtZSkpKTtcbiAgICBsYW5nQ2xhc3MgPSAnIGNsYXNzPVwiJyArIGxhbmdQcmVmaXggKyBsYW5nTmFtZSArICdcIic7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oaWdobGlnaHQpIHtcbiAgICBoaWdobGlnaHRlZCA9IG9wdGlvbnMuaGlnaGxpZ2h0KHRva2VuLmNvbnRlbnQsIGxhbmdOYW1lKSB8fCBlc2NhcGVIdG1sKHRva2VuLmNvbnRlbnQpO1xuICB9IGVsc2Uge1xuICAgIGhpZ2hsaWdodGVkID0gZXNjYXBlSHRtbCh0b2tlbi5jb250ZW50KTtcbiAgfVxuXG4gIHJldHVybiAnPHByZT48Y29kZScgKyBsYW5nQ2xhc3MgKyAnPidcbiAgICAgICAgKyBoaWdobGlnaHRlZFxuICAgICAgICArICc8L2NvZGU+PC9wcmU+J1xuICAgICAgICArIGdldEJyZWFrKHRva2VucywgaWR4KTtcbn07XG5cbnJ1bGVzLmZlbmNlX2N1c3RvbSA9IHt9O1xuXG4vKipcbiAqIEhlYWRpbmdzXG4gKi9cblxucnVsZXMuaGVhZGluZ19vcGVuID0gZnVuY3Rpb24gKHRva2VucywgaWR4IC8qLCBvcHRpb25zLCBlbnYgKi8pIHtcbiAgcmV0dXJuICc8aCcgKyB0b2tlbnNbaWR4XS5oTGV2ZWwgKyAnPic7XG59O1xucnVsZXMuaGVhZGluZ19jbG9zZSA9IGZ1bmN0aW9uICh0b2tlbnMsIGlkeCAvKiwgb3B0aW9ucywgZW52ICovKSB7XG4gIHJldHVybiAnPC9oJyArIHRva2Vuc1tpZHhdLmhMZXZlbCArICc+XFxuJztcbn07XG5cbi8qKlxuICogSG9yaXpvbnRhbCBydWxlc1xuICovXG5cbnJ1bGVzLmhyID0gZnVuY3Rpb24gKHRva2VucywgaWR4LCBvcHRpb25zIC8qLCBlbnYgKi8pIHtcbiAgcmV0dXJuIChvcHRpb25zLnhodG1sT3V0ID8gJzxociAvPicgOiAnPGhyPicpICsgZ2V0QnJlYWsodG9rZW5zLCBpZHgpO1xufTtcblxuLyoqXG4gKiBCdWxsZXRzXG4gKi9cblxucnVsZXMuYnVsbGV0X2xpc3Rfb3BlbiA9IGZ1bmN0aW9uICgvKiB0b2tlbnMsIGlkeCwgb3B0aW9ucywgZW52ICovKSB7XG4gIHJldHVybiAnPHVsPlxcbic7XG59O1xucnVsZXMuYnVsbGV0X2xpc3RfY2xvc2UgPSBmdW5jdGlvbiAodG9rZW5zLCBpZHggLyosIG9wdGlvbnMsIGVudiAqLykge1xuICByZXR1cm4gJzwvdWw+JyArIGdldEJyZWFrKHRva2VucywgaWR4KTtcbn07XG5cbi8qKlxuICogTGlzdCBpdGVtc1xuICovXG5cbnJ1bGVzLmxpc3RfaXRlbV9vcGVuID0gZnVuY3Rpb24gKC8qIHRva2VucywgaWR4LCBvcHRpb25zLCBlbnYgKi8pIHtcbiAgcmV0dXJuICc8bGk+Jztcbn07XG5ydWxlcy5saXN0X2l0ZW1fY2xvc2UgPSBmdW5jdGlvbiAoLyogdG9rZW5zLCBpZHgsIG9wdGlvbnMsIGVudiAqLykge1xuICByZXR1cm4gJzwvbGk+XFxuJztcbn07XG5cbi8qKlxuICogT3JkZXJlZCBsaXN0IGl0ZW1zXG4gKi9cblxucnVsZXMub3JkZXJlZF9saXN0X29wZW4gPSBmdW5jdGlvbiAodG9rZW5zLCBpZHggLyosIG9wdGlvbnMsIGVudiAqLykge1xuICB2YXIgdG9rZW4gPSB0b2tlbnNbaWR4XTtcbiAgdmFyIG9yZGVyID0gdG9rZW4ub3JkZXIgPiAxID8gJyBzdGFydD1cIicgKyB0b2tlbi5vcmRlciArICdcIicgOiAnJztcbiAgcmV0dXJuICc8b2wnICsgb3JkZXIgKyAnPlxcbic7XG59O1xucnVsZXMub3JkZXJlZF9saXN0X2Nsb3NlID0gZnVuY3Rpb24gKHRva2VucywgaWR4IC8qLCBvcHRpb25zLCBlbnYgKi8pIHtcbiAgcmV0dXJuICc8L29sPicgKyBnZXRCcmVhayh0b2tlbnMsIGlkeCk7XG59O1xuXG4vKipcbiAqIFBhcmFncmFwaHNcbiAqL1xuXG5ydWxlcy5wYXJhZ3JhcGhfb3BlbiA9IGZ1bmN0aW9uICh0b2tlbnMsIGlkeCAvKiwgb3B0aW9ucywgZW52ICovKSB7XG4gIHJldHVybiB0b2tlbnNbaWR4XS50aWdodCA/ICcnIDogJzxwPic7XG59O1xucnVsZXMucGFyYWdyYXBoX2Nsb3NlID0gZnVuY3Rpb24gKHRva2VucywgaWR4IC8qLCBvcHRpb25zLCBlbnYgKi8pIHtcbiAgdmFyIGFkZEJyZWFrID0gISh0b2tlbnNbaWR4XS50aWdodCAmJiBpZHggJiYgdG9rZW5zW2lkeCAtIDFdLnR5cGUgPT09ICdpbmxpbmUnICYmICF0b2tlbnNbaWR4IC0gMV0uY29udGVudCk7XG4gIHJldHVybiAodG9rZW5zW2lkeF0udGlnaHQgPyAnJyA6ICc8L3A+JykgKyAoYWRkQnJlYWsgPyBnZXRCcmVhayh0b2tlbnMsIGlkeCkgOiAnJyk7XG59O1xuXG4vKipcbiAqIExpbmtzXG4gKi9cblxucnVsZXMubGlua19vcGVuID0gZnVuY3Rpb24gKHRva2VucywgaWR4IC8qLCBvcHRpb25zLCBlbnYgKi8pIHtcbiAgdmFyIHRpdGxlID0gdG9rZW5zW2lkeF0udGl0bGUgPyAoJyB0aXRsZT1cIicgKyBlc2NhcGVIdG1sKHJlcGxhY2VFbnRpdGllcyh0b2tlbnNbaWR4XS50aXRsZSkpICsgJ1wiJykgOiAnJztcbiAgcmV0dXJuICc8YSBocmVmPVwiJyArIGVzY2FwZUh0bWwodG9rZW5zW2lkeF0uaHJlZikgKyAnXCInICsgdGl0bGUgKyAnPic7XG59O1xucnVsZXMubGlua19jbG9zZSA9IGZ1bmN0aW9uICgvKiB0b2tlbnMsIGlkeCwgb3B0aW9ucywgZW52ICovKSB7XG4gIHJldHVybiAnPC9hPic7XG59O1xuXG4vKipcbiAqIEltYWdlc1xuICovXG5cbnJ1bGVzLmltYWdlID0gZnVuY3Rpb24gKHRva2VucywgaWR4LCBvcHRpb25zIC8qLCBlbnYgKi8pIHtcbiAgdmFyIHNyYyA9ICcgc3JjPVwiJyArIGVzY2FwZUh0bWwodG9rZW5zW2lkeF0uc3JjKSArICdcIic7XG4gIHZhciB0aXRsZSA9IHRva2Vuc1tpZHhdLnRpdGxlID8gKCcgdGl0bGU9XCInICsgZXNjYXBlSHRtbChyZXBsYWNlRW50aXRpZXModG9rZW5zW2lkeF0udGl0bGUpKSArICdcIicpIDogJyc7XG4gIHZhciBhbHQgPSAnIGFsdD1cIicgKyAodG9rZW5zW2lkeF0uYWx0ID8gZXNjYXBlSHRtbChyZXBsYWNlRW50aXRpZXModG9rZW5zW2lkeF0uYWx0KSkgOiAnJykgKyAnXCInO1xuICB2YXIgc3VmZml4ID0gb3B0aW9ucy54aHRtbE91dCA/ICcgLycgOiAnJztcbiAgcmV0dXJuICc8aW1nJyArIHNyYyArIGFsdCArIHRpdGxlICsgc3VmZml4ICsgJz4nO1xufTtcblxuLyoqXG4gKiBUYWJsZXNcbiAqL1xuXG5ydWxlcy50YWJsZV9vcGVuID0gZnVuY3Rpb24gKC8qIHRva2VucywgaWR4LCBvcHRpb25zLCBlbnYgKi8pIHtcbiAgcmV0dXJuICc8dGFibGU+XFxuJztcbn07XG5ydWxlcy50YWJsZV9jbG9zZSA9IGZ1bmN0aW9uICgvKiB0b2tlbnMsIGlkeCwgb3B0aW9ucywgZW52ICovKSB7XG4gIHJldHVybiAnPC90YWJsZT5cXG4nO1xufTtcbnJ1bGVzLnRoZWFkX29wZW4gPSBmdW5jdGlvbiAoLyogdG9rZW5zLCBpZHgsIG9wdGlvbnMsIGVudiAqLykge1xuICByZXR1cm4gJzx0aGVhZD5cXG4nO1xufTtcbnJ1bGVzLnRoZWFkX2Nsb3NlID0gZnVuY3Rpb24gKC8qIHRva2VucywgaWR4LCBvcHRpb25zLCBlbnYgKi8pIHtcbiAgcmV0dXJuICc8L3RoZWFkPlxcbic7XG59O1xucnVsZXMudGJvZHlfb3BlbiA9IGZ1bmN0aW9uICgvKiB0b2tlbnMsIGlkeCwgb3B0aW9ucywgZW52ICovKSB7XG4gIHJldHVybiAnPHRib2R5Plxcbic7XG59O1xucnVsZXMudGJvZHlfY2xvc2UgPSBmdW5jdGlvbiAoLyogdG9rZW5zLCBpZHgsIG9wdGlvbnMsIGVudiAqLykge1xuICByZXR1cm4gJzwvdGJvZHk+XFxuJztcbn07XG5ydWxlcy50cl9vcGVuID0gZnVuY3Rpb24gKC8qIHRva2VucywgaWR4LCBvcHRpb25zLCBlbnYgKi8pIHtcbiAgcmV0dXJuICc8dHI+Jztcbn07XG5ydWxlcy50cl9jbG9zZSA9IGZ1bmN0aW9uICgvKiB0b2tlbnMsIGlkeCwgb3B0aW9ucywgZW52ICovKSB7XG4gIHJldHVybiAnPC90cj5cXG4nO1xufTtcbnJ1bGVzLnRoX29wZW4gPSBmdW5jdGlvbiAodG9rZW5zLCBpZHggLyosIG9wdGlvbnMsIGVudiAqLykge1xuICB2YXIgdG9rZW4gPSB0b2tlbnNbaWR4XTtcbiAgcmV0dXJuICc8dGgnXG4gICAgKyAodG9rZW4uYWxpZ24gPyAnIHN0eWxlPVwidGV4dC1hbGlnbjonICsgdG9rZW4uYWxpZ24gKyAnXCInIDogJycpXG4gICAgKyAnPic7XG59O1xucnVsZXMudGhfY2xvc2UgPSBmdW5jdGlvbiAoLyogdG9rZW5zLCBpZHgsIG9wdGlvbnMsIGVudiAqLykge1xuICByZXR1cm4gJzwvdGg+Jztcbn07XG5ydWxlcy50ZF9vcGVuID0gZnVuY3Rpb24gKHRva2VucywgaWR4IC8qLCBvcHRpb25zLCBlbnYgKi8pIHtcbiAgdmFyIHRva2VuID0gdG9rZW5zW2lkeF07XG4gIHJldHVybiAnPHRkJ1xuICAgICsgKHRva2VuLmFsaWduID8gJyBzdHlsZT1cInRleHQtYWxpZ246JyArIHRva2VuLmFsaWduICsgJ1wiJyA6ICcnKVxuICAgICsgJz4nO1xufTtcbnJ1bGVzLnRkX2Nsb3NlID0gZnVuY3Rpb24gKC8qIHRva2VucywgaWR4LCBvcHRpb25zLCBlbnYgKi8pIHtcbiAgcmV0dXJuICc8L3RkPic7XG59O1xuXG4vKipcbiAqIEJvbGRcbiAqL1xuXG5ydWxlcy5zdHJvbmdfb3BlbiA9IGZ1bmN0aW9uICgvKiB0b2tlbnMsIGlkeCwgb3B0aW9ucywgZW52ICovKSB7XG4gIHJldHVybiAnPHN0cm9uZz4nO1xufTtcbnJ1bGVzLnN0cm9uZ19jbG9zZSA9IGZ1bmN0aW9uICgvKiB0b2tlbnMsIGlkeCwgb3B0aW9ucywgZW52ICovKSB7XG4gIHJldHVybiAnPC9zdHJvbmc+Jztcbn07XG5cbi8qKlxuICogSXRhbGljaXplXG4gKi9cblxucnVsZXMuZW1fb3BlbiA9IGZ1bmN0aW9uICgvKiB0b2tlbnMsIGlkeCwgb3B0aW9ucywgZW52ICovKSB7XG4gIHJldHVybiAnPGVtPic7XG59O1xucnVsZXMuZW1fY2xvc2UgPSBmdW5jdGlvbiAoLyogdG9rZW5zLCBpZHgsIG9wdGlvbnMsIGVudiAqLykge1xuICByZXR1cm4gJzwvZW0+Jztcbn07XG5cbi8qKlxuICogU3RyaWtldGhyb3VnaFxuICovXG5cbnJ1bGVzLmRlbF9vcGVuID0gZnVuY3Rpb24gKC8qIHRva2VucywgaWR4LCBvcHRpb25zLCBlbnYgKi8pIHtcbiAgcmV0dXJuICc8ZGVsPic7XG59O1xucnVsZXMuZGVsX2Nsb3NlID0gZnVuY3Rpb24gKC8qIHRva2VucywgaWR4LCBvcHRpb25zLCBlbnYgKi8pIHtcbiAgcmV0dXJuICc8L2RlbD4nO1xufTtcblxuLyoqXG4gKiBJbnNlcnRcbiAqL1xuXG5ydWxlcy5pbnNfb3BlbiA9IGZ1bmN0aW9uICgvKiB0b2tlbnMsIGlkeCwgb3B0aW9ucywgZW52ICovKSB7XG4gIHJldHVybiAnPGlucz4nO1xufTtcbnJ1bGVzLmluc19jbG9zZSA9IGZ1bmN0aW9uICgvKiB0b2tlbnMsIGlkeCwgb3B0aW9ucywgZW52ICovKSB7XG4gIHJldHVybiAnPC9pbnM+Jztcbn07XG5cbi8qKlxuICogSGlnaGxpZ2h0XG4gKi9cblxucnVsZXMubWFya19vcGVuID0gZnVuY3Rpb24gKC8qIHRva2VucywgaWR4LCBvcHRpb25zLCBlbnYgKi8pIHtcbiAgcmV0dXJuICc8bWFyaz4nO1xufTtcbnJ1bGVzLm1hcmtfY2xvc2UgPSBmdW5jdGlvbiAoLyogdG9rZW5zLCBpZHgsIG9wdGlvbnMsIGVudiAqLykge1xuICByZXR1cm4gJzwvbWFyaz4nO1xufTtcblxuLyoqXG4gKiBTdXBlci0gYW5kIHN1Yi1zY3JpcHRcbiAqL1xuXG5ydWxlcy5zdWIgPSBmdW5jdGlvbiAodG9rZW5zLCBpZHggLyosIG9wdGlvbnMsIGVudiAqLykge1xuICByZXR1cm4gJzxzdWI+JyArIGVzY2FwZUh0bWwodG9rZW5zW2lkeF0uY29udGVudCkgKyAnPC9zdWI+Jztcbn07XG5ydWxlcy5zdXAgPSBmdW5jdGlvbiAodG9rZW5zLCBpZHggLyosIG9wdGlvbnMsIGVudiAqLykge1xuICByZXR1cm4gJzxzdXA+JyArIGVzY2FwZUh0bWwodG9rZW5zW2lkeF0uY29udGVudCkgKyAnPC9zdXA+Jztcbn07XG5cbi8qKlxuICogQnJlYWtzXG4gKi9cblxucnVsZXMuaGFyZGJyZWFrID0gZnVuY3Rpb24gKHRva2VucywgaWR4LCBvcHRpb25zIC8qLCBlbnYgKi8pIHtcbiAgcmV0dXJuIG9wdGlvbnMueGh0bWxPdXQgPyAnPGJyIC8+XFxuJyA6ICc8YnI+XFxuJztcbn07XG5ydWxlcy5zb2Z0YnJlYWsgPSBmdW5jdGlvbiAodG9rZW5zLCBpZHgsIG9wdGlvbnMgLyosIGVudiAqLykge1xuICByZXR1cm4gb3B0aW9ucy5icmVha3MgPyAob3B0aW9ucy54aHRtbE91dCA/ICc8YnIgLz5cXG4nIDogJzxicj5cXG4nKSA6ICdcXG4nO1xufTtcblxuLyoqXG4gKiBUZXh0XG4gKi9cblxucnVsZXMudGV4dCA9IGZ1bmN0aW9uICh0b2tlbnMsIGlkeCAvKiwgb3B0aW9ucywgZW52ICovKSB7XG4gIHJldHVybiBlc2NhcGVIdG1sKHRva2Vuc1tpZHhdLmNvbnRlbnQpO1xufTtcblxuLyoqXG4gKiBDb250ZW50XG4gKi9cblxucnVsZXMuaHRtbGJsb2NrID0gZnVuY3Rpb24gKHRva2VucywgaWR4IC8qLCBvcHRpb25zLCBlbnYgKi8pIHtcbiAgcmV0dXJuIHRva2Vuc1tpZHhdLmNvbnRlbnQ7XG59O1xucnVsZXMuaHRtbHRhZyA9IGZ1bmN0aW9uICh0b2tlbnMsIGlkeCAvKiwgb3B0aW9ucywgZW52ICovKSB7XG4gIHJldHVybiB0b2tlbnNbaWR4XS5jb250ZW50O1xufTtcblxuLyoqXG4gKiBBYmJyZXZpYXRpb25zLCBpbml0aWFsaXNtXG4gKi9cblxucnVsZXMuYWJicl9vcGVuID0gZnVuY3Rpb24gKHRva2VucywgaWR4IC8qLCBvcHRpb25zLCBlbnYgKi8pIHtcbiAgcmV0dXJuICc8YWJiciB0aXRsZT1cIicgKyBlc2NhcGVIdG1sKHJlcGxhY2VFbnRpdGllcyh0b2tlbnNbaWR4XS50aXRsZSkpICsgJ1wiPic7XG59O1xucnVsZXMuYWJicl9jbG9zZSA9IGZ1bmN0aW9uICgvKiB0b2tlbnMsIGlkeCwgb3B0aW9ucywgZW52ICovKSB7XG4gIHJldHVybiAnPC9hYmJyPic7XG59O1xuXG4vKipcbiAqIEZvb3Rub3Rlc1xuICovXG5cbnJ1bGVzLmZvb3Rub3RlX3JlZiA9IGZ1bmN0aW9uICh0b2tlbnMsIGlkeCkge1xuICB2YXIgbiA9IE51bWJlcih0b2tlbnNbaWR4XS5pZCArIDEpLnRvU3RyaW5nKCk7XG4gIHZhciBpZCA9ICdmbnJlZicgKyBuO1xuICBpZiAodG9rZW5zW2lkeF0uc3ViSWQgPiAwKSB7XG4gICAgaWQgKz0gJzonICsgdG9rZW5zW2lkeF0uc3ViSWQ7XG4gIH1cbiAgcmV0dXJuICc8c3VwIGNsYXNzPVwiZm9vdG5vdGUtcmVmXCI+PGEgaHJlZj1cIiNmbicgKyBuICsgJ1wiIGlkPVwiJyArIGlkICsgJ1wiPlsnICsgbiArICddPC9hPjwvc3VwPic7XG59O1xucnVsZXMuZm9vdG5vdGVfYmxvY2tfb3BlbiA9IGZ1bmN0aW9uICh0b2tlbnMsIGlkeCwgb3B0aW9ucykge1xuICB2YXIgaHIgPSBvcHRpb25zLnhodG1sT3V0XG4gICAgPyAnPGhyIGNsYXNzPVwiZm9vdG5vdGVzLXNlcFwiIC8+XFxuJ1xuICAgIDogJzxociBjbGFzcz1cImZvb3Rub3Rlcy1zZXBcIj5cXG4nO1xuICByZXR1cm4gIGhyICsgJzxzZWN0aW9uIGNsYXNzPVwiZm9vdG5vdGVzXCI+XFxuPG9sIGNsYXNzPVwiZm9vdG5vdGVzLWxpc3RcIj5cXG4nO1xufTtcbnJ1bGVzLmZvb3Rub3RlX2Jsb2NrX2Nsb3NlID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gJzwvb2w+XFxuPC9zZWN0aW9uPlxcbic7XG59O1xucnVsZXMuZm9vdG5vdGVfb3BlbiA9IGZ1bmN0aW9uICh0b2tlbnMsIGlkeCkge1xuICB2YXIgaWQgPSBOdW1iZXIodG9rZW5zW2lkeF0uaWQgKyAxKS50b1N0cmluZygpO1xuICByZXR1cm4gJzxsaSBpZD1cImZuJyArIGlkICsgJ1wiICBjbGFzcz1cImZvb3Rub3RlLWl0ZW1cIj4nO1xufTtcbnJ1bGVzLmZvb3Rub3RlX2Nsb3NlID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gJzwvbGk+XFxuJztcbn07XG5ydWxlcy5mb290bm90ZV9hbmNob3IgPSBmdW5jdGlvbiAodG9rZW5zLCBpZHgpIHtcbiAgdmFyIG4gPSBOdW1iZXIodG9rZW5zW2lkeF0uaWQgKyAxKS50b1N0cmluZygpO1xuICB2YXIgaWQgPSAnZm5yZWYnICsgbjtcbiAgaWYgKHRva2Vuc1tpZHhdLnN1YklkID4gMCkge1xuICAgIGlkICs9ICc6JyArIHRva2Vuc1tpZHhdLnN1YklkO1xuICB9XG4gIHJldHVybiAnIDxhIGhyZWY9XCIjJyArIGlkICsgJ1wiIGNsYXNzPVwiZm9vdG5vdGUtYmFja3JlZlwiPuKGqTwvYT4nO1xufTtcblxuLyoqXG4gKiBEZWZpbml0aW9uIGxpc3RzXG4gKi9cblxucnVsZXMuZGxfb3BlbiA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gJzxkbD5cXG4nO1xufTtcbnJ1bGVzLmR0X29wZW4gPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuICc8ZHQ+Jztcbn07XG5ydWxlcy5kZF9vcGVuID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiAnPGRkPic7XG59O1xucnVsZXMuZGxfY2xvc2UgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuICc8L2RsPlxcbic7XG59O1xucnVsZXMuZHRfY2xvc2UgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuICc8L2R0Plxcbic7XG59O1xucnVsZXMuZGRfY2xvc2UgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuICc8L2RkPlxcbic7XG59O1xuXG4vKipcbiAqIEhlbHBlciBmdW5jdGlvbnNcbiAqL1xuXG5mdW5jdGlvbiBuZXh0VG9rZW4odG9rZW5zLCBpZHgpIHtcbiAgaWYgKCsraWR4ID49IHRva2Vucy5sZW5ndGggLSAyKSB7XG4gICAgcmV0dXJuIGlkeDtcbiAgfVxuICBpZiAoKHRva2Vuc1tpZHhdLnR5cGUgPT09ICdwYXJhZ3JhcGhfb3BlbicgJiYgdG9rZW5zW2lkeF0udGlnaHQpICYmXG4gICAgICAodG9rZW5zW2lkeCArIDFdLnR5cGUgPT09ICdpbmxpbmUnICYmIHRva2Vuc1tpZHggKyAxXS5jb250ZW50Lmxlbmd0aCA9PT0gMCkgJiZcbiAgICAgICh0b2tlbnNbaWR4ICsgMl0udHlwZSA9PT0gJ3BhcmFncmFwaF9jbG9zZScgJiYgdG9rZW5zW2lkeCArIDJdLnRpZ2h0KSkge1xuICAgIHJldHVybiBuZXh0VG9rZW4odG9rZW5zLCBpZHggKyAyKTtcbiAgfVxuICByZXR1cm4gaWR4O1xufVxuXG4vKipcbiAqIENoZWNrIHRvIHNlZSBpZiBgXFxuYCBpcyBuZWVkZWQgYmVmb3JlIHRoZSBuZXh0IHRva2VuLlxuICpcbiAqIEBwYXJhbSAge0FycmF5fSBgdG9rZW5zYFxuICogQHBhcmFtICB7TnVtYmVyfSBgaWR4YFxuICogQHJldHVybiB7U3RyaW5nfSBFbXB0eSBzdHJpbmcgb3IgbmV3bGluZVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxudmFyIGdldEJyZWFrID0gcnVsZXMuZ2V0QnJlYWsgPSBmdW5jdGlvbiBnZXRCcmVhayh0b2tlbnMsIGlkeCkge1xuICBpZHggPSBuZXh0VG9rZW4odG9rZW5zLCBpZHgpO1xuICBpZiAoaWR4IDwgdG9rZW5zLmxlbmd0aCAmJiB0b2tlbnNbaWR4XS50eXBlID09PSAnbGlzdF9pdGVtX2Nsb3NlJykge1xuICAgIHJldHVybiAnJztcbiAgfVxuICByZXR1cm4gJ1xcbic7XG59O1xuXG4vKipcbiAqIEV4cG9zZSBgcnVsZXNgXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBydWxlcztcbiIsIi8vIEJsb2NrIHF1b3Rlc1xuXG4ndXNlIHN0cmljdCc7XG5cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBibG9ja3F1b3RlKHN0YXRlLCBzdGFydExpbmUsIGVuZExpbmUsIHNpbGVudCkge1xuICB2YXIgbmV4dExpbmUsIGxhc3RMaW5lRW1wdHksIG9sZFRTaGlmdCwgb2xkQk1hcmtzLCBvbGRJbmRlbnQsIG9sZFBhcmVudFR5cGUsIGxpbmVzLFxuICAgICAgdGVybWluYXRvclJ1bGVzLFxuICAgICAgaSwgbCwgdGVybWluYXRlLFxuICAgICAgcG9zID0gc3RhdGUuYk1hcmtzW3N0YXJ0TGluZV0gKyBzdGF0ZS50U2hpZnRbc3RhcnRMaW5lXSxcbiAgICAgIG1heCA9IHN0YXRlLmVNYXJrc1tzdGFydExpbmVdO1xuXG4gIGlmIChwb3MgPiBtYXgpIHsgcmV0dXJuIGZhbHNlOyB9XG5cbiAgLy8gY2hlY2sgdGhlIGJsb2NrIHF1b3RlIG1hcmtlclxuICBpZiAoc3RhdGUuc3JjLmNoYXJDb2RlQXQocG9zKyspICE9PSAweDNFLyogPiAqLykgeyByZXR1cm4gZmFsc2U7IH1cblxuICBpZiAoc3RhdGUubGV2ZWwgPj0gc3RhdGUub3B0aW9ucy5tYXhOZXN0aW5nKSB7IHJldHVybiBmYWxzZTsgfVxuXG4gIC8vIHdlIGtub3cgdGhhdCBpdCdzIGdvaW5nIHRvIGJlIGEgdmFsaWQgYmxvY2txdW90ZSxcbiAgLy8gc28gbm8gcG9pbnQgdHJ5aW5nIHRvIGZpbmQgdGhlIGVuZCBvZiBpdCBpbiBzaWxlbnQgbW9kZVxuICBpZiAoc2lsZW50KSB7IHJldHVybiB0cnVlOyB9XG5cbiAgLy8gc2tpcCBvbmUgb3B0aW9uYWwgc3BhY2UgYWZ0ZXIgJz4nXG4gIGlmIChzdGF0ZS5zcmMuY2hhckNvZGVBdChwb3MpID09PSAweDIwKSB7IHBvcysrOyB9XG5cbiAgb2xkSW5kZW50ID0gc3RhdGUuYmxrSW5kZW50O1xuICBzdGF0ZS5ibGtJbmRlbnQgPSAwO1xuXG4gIG9sZEJNYXJrcyA9IFsgc3RhdGUuYk1hcmtzW3N0YXJ0TGluZV0gXTtcbiAgc3RhdGUuYk1hcmtzW3N0YXJ0TGluZV0gPSBwb3M7XG5cbiAgLy8gY2hlY2sgaWYgd2UgaGF2ZSBhbiBlbXB0eSBibG9ja3F1b3RlXG4gIHBvcyA9IHBvcyA8IG1heCA/IHN0YXRlLnNraXBTcGFjZXMocG9zKSA6IHBvcztcbiAgbGFzdExpbmVFbXB0eSA9IHBvcyA+PSBtYXg7XG5cbiAgb2xkVFNoaWZ0ID0gWyBzdGF0ZS50U2hpZnRbc3RhcnRMaW5lXSBdO1xuICBzdGF0ZS50U2hpZnRbc3RhcnRMaW5lXSA9IHBvcyAtIHN0YXRlLmJNYXJrc1tzdGFydExpbmVdO1xuXG4gIHRlcm1pbmF0b3JSdWxlcyA9IHN0YXRlLnBhcnNlci5ydWxlci5nZXRSdWxlcygnYmxvY2txdW90ZScpO1xuXG4gIC8vIFNlYXJjaCB0aGUgZW5kIG9mIHRoZSBibG9ja1xuICAvL1xuICAvLyBCbG9jayBlbmRzIHdpdGggZWl0aGVyOlxuICAvLyAgMS4gYW4gZW1wdHkgbGluZSBvdXRzaWRlOlxuICAvLyAgICAgYGBgXG4gIC8vICAgICA+IHRlc3RcbiAgLy9cbiAgLy8gICAgIGBgYFxuICAvLyAgMi4gYW4gZW1wdHkgbGluZSBpbnNpZGU6XG4gIC8vICAgICBgYGBcbiAgLy8gICAgID5cbiAgLy8gICAgIHRlc3RcbiAgLy8gICAgIGBgYFxuICAvLyAgMy4gYW5vdGhlciB0YWdcbiAgLy8gICAgIGBgYFxuICAvLyAgICAgPiB0ZXN0XG4gIC8vICAgICAgLSAtIC1cbiAgLy8gICAgIGBgYFxuICBmb3IgKG5leHRMaW5lID0gc3RhcnRMaW5lICsgMTsgbmV4dExpbmUgPCBlbmRMaW5lOyBuZXh0TGluZSsrKSB7XG4gICAgcG9zID0gc3RhdGUuYk1hcmtzW25leHRMaW5lXSArIHN0YXRlLnRTaGlmdFtuZXh0TGluZV07XG4gICAgbWF4ID0gc3RhdGUuZU1hcmtzW25leHRMaW5lXTtcblxuICAgIGlmIChwb3MgPj0gbWF4KSB7XG4gICAgICAvLyBDYXNlIDE6IGxpbmUgaXMgbm90IGluc2lkZSB0aGUgYmxvY2txdW90ZSwgYW5kIHRoaXMgbGluZSBpcyBlbXB0eS5cbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGlmIChzdGF0ZS5zcmMuY2hhckNvZGVBdChwb3MrKykgPT09IDB4M0UvKiA+ICovKSB7XG4gICAgICAvLyBUaGlzIGxpbmUgaXMgaW5zaWRlIHRoZSBibG9ja3F1b3RlLlxuXG4gICAgICAvLyBza2lwIG9uZSBvcHRpb25hbCBzcGFjZSBhZnRlciAnPidcbiAgICAgIGlmIChzdGF0ZS5zcmMuY2hhckNvZGVBdChwb3MpID09PSAweDIwKSB7IHBvcysrOyB9XG5cbiAgICAgIG9sZEJNYXJrcy5wdXNoKHN0YXRlLmJNYXJrc1tuZXh0TGluZV0pO1xuICAgICAgc3RhdGUuYk1hcmtzW25leHRMaW5lXSA9IHBvcztcblxuICAgICAgcG9zID0gcG9zIDwgbWF4ID8gc3RhdGUuc2tpcFNwYWNlcyhwb3MpIDogcG9zO1xuICAgICAgbGFzdExpbmVFbXB0eSA9IHBvcyA+PSBtYXg7XG5cbiAgICAgIG9sZFRTaGlmdC5wdXNoKHN0YXRlLnRTaGlmdFtuZXh0TGluZV0pO1xuICAgICAgc3RhdGUudFNoaWZ0W25leHRMaW5lXSA9IHBvcyAtIHN0YXRlLmJNYXJrc1tuZXh0TGluZV07XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICAvLyBDYXNlIDI6IGxpbmUgaXMgbm90IGluc2lkZSB0aGUgYmxvY2txdW90ZSwgYW5kIHRoZSBsYXN0IGxpbmUgd2FzIGVtcHR5LlxuICAgIGlmIChsYXN0TGluZUVtcHR5KSB7IGJyZWFrOyB9XG5cbiAgICAvLyBDYXNlIDM6IGFub3RoZXIgdGFnIGZvdW5kLlxuICAgIHRlcm1pbmF0ZSA9IGZhbHNlO1xuICAgIGZvciAoaSA9IDAsIGwgPSB0ZXJtaW5hdG9yUnVsZXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBpZiAodGVybWluYXRvclJ1bGVzW2ldKHN0YXRlLCBuZXh0TGluZSwgZW5kTGluZSwgdHJ1ZSkpIHtcbiAgICAgICAgdGVybWluYXRlID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh0ZXJtaW5hdGUpIHsgYnJlYWs7IH1cblxuICAgIG9sZEJNYXJrcy5wdXNoKHN0YXRlLmJNYXJrc1tuZXh0TGluZV0pO1xuICAgIG9sZFRTaGlmdC5wdXNoKHN0YXRlLnRTaGlmdFtuZXh0TGluZV0pO1xuXG4gICAgLy8gQSBuZWdhdGl2ZSBudW1iZXIgbWVhbnMgdGhhdCB0aGlzIGlzIGEgcGFyYWdyYXBoIGNvbnRpbnVhdGlvbjtcbiAgICAvL1xuICAgIC8vIEFueSBuZWdhdGl2ZSBudW1iZXIgd2lsbCBkbyB0aGUgam9iIGhlcmUsIGJ1dCBpdCdzIGJldHRlciBmb3IgaXRcbiAgICAvLyB0byBiZSBsYXJnZSBlbm91Z2ggdG8gbWFrZSBhbnkgYnVncyBvYnZpb3VzLlxuICAgIHN0YXRlLnRTaGlmdFtuZXh0TGluZV0gPSAtMTMzNztcbiAgfVxuXG4gIG9sZFBhcmVudFR5cGUgPSBzdGF0ZS5wYXJlbnRUeXBlO1xuICBzdGF0ZS5wYXJlbnRUeXBlID0gJ2Jsb2NrcXVvdGUnO1xuICBzdGF0ZS50b2tlbnMucHVzaCh7XG4gICAgdHlwZTogJ2Jsb2NrcXVvdGVfb3BlbicsXG4gICAgbGluZXM6IGxpbmVzID0gWyBzdGFydExpbmUsIDAgXSxcbiAgICBsZXZlbDogc3RhdGUubGV2ZWwrK1xuICB9KTtcbiAgc3RhdGUucGFyc2VyLnRva2VuaXplKHN0YXRlLCBzdGFydExpbmUsIG5leHRMaW5lKTtcbiAgc3RhdGUudG9rZW5zLnB1c2goe1xuICAgIHR5cGU6ICdibG9ja3F1b3RlX2Nsb3NlJyxcbiAgICBsZXZlbDogLS1zdGF0ZS5sZXZlbFxuICB9KTtcbiAgc3RhdGUucGFyZW50VHlwZSA9IG9sZFBhcmVudFR5cGU7XG4gIGxpbmVzWzFdID0gc3RhdGUubGluZTtcblxuICAvLyBSZXN0b3JlIG9yaWdpbmFsIHRTaGlmdDsgdGhpcyBtaWdodCBub3QgYmUgbmVjZXNzYXJ5IHNpbmNlIHRoZSBwYXJzZXJcbiAgLy8gaGFzIGFscmVhZHkgYmVlbiBoZXJlLCBidXQganVzdCB0byBtYWtlIHN1cmUgd2UgY2FuIGRvIHRoYXQuXG4gIGZvciAoaSA9IDA7IGkgPCBvbGRUU2hpZnQubGVuZ3RoOyBpKyspIHtcbiAgICBzdGF0ZS5iTWFya3NbaSArIHN0YXJ0TGluZV0gPSBvbGRCTWFya3NbaV07XG4gICAgc3RhdGUudFNoaWZ0W2kgKyBzdGFydExpbmVdID0gb2xkVFNoaWZ0W2ldO1xuICB9XG4gIHN0YXRlLmJsa0luZGVudCA9IG9sZEluZGVudDtcblxuICByZXR1cm4gdHJ1ZTtcbn07XG4iLCIvLyBDb2RlIGJsb2NrICg0IHNwYWNlcyBwYWRkZWQpXG5cbid1c2Ugc3RyaWN0JztcblxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNvZGUoc3RhdGUsIHN0YXJ0TGluZSwgZW5kTGluZS8qLCBzaWxlbnQqLykge1xuICB2YXIgbmV4dExpbmUsIGxhc3Q7XG5cbiAgaWYgKHN0YXRlLnRTaGlmdFtzdGFydExpbmVdIC0gc3RhdGUuYmxrSW5kZW50IDwgNCkgeyByZXR1cm4gZmFsc2U7IH1cblxuICBsYXN0ID0gbmV4dExpbmUgPSBzdGFydExpbmUgKyAxO1xuXG4gIHdoaWxlIChuZXh0TGluZSA8IGVuZExpbmUpIHtcbiAgICBpZiAoc3RhdGUuaXNFbXB0eShuZXh0TGluZSkpIHtcbiAgICAgIG5leHRMaW5lKys7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgaWYgKHN0YXRlLnRTaGlmdFtuZXh0TGluZV0gLSBzdGF0ZS5ibGtJbmRlbnQgPj0gNCkge1xuICAgICAgbmV4dExpbmUrKztcbiAgICAgIGxhc3QgPSBuZXh0TGluZTtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICBicmVhaztcbiAgfVxuXG4gIHN0YXRlLmxpbmUgPSBuZXh0TGluZTtcbiAgc3RhdGUudG9rZW5zLnB1c2goe1xuICAgIHR5cGU6ICdjb2RlJyxcbiAgICBjb250ZW50OiBzdGF0ZS5nZXRMaW5lcyhzdGFydExpbmUsIGxhc3QsIDQgKyBzdGF0ZS5ibGtJbmRlbnQsIHRydWUpLFxuICAgIGJsb2NrOiB0cnVlLFxuICAgIGxpbmVzOiBbIHN0YXJ0TGluZSwgc3RhdGUubGluZSBdLFxuICAgIGxldmVsOiBzdGF0ZS5sZXZlbFxuICB9KTtcblxuICByZXR1cm4gdHJ1ZTtcbn07XG4iLCIvLyBEZWZpbml0aW9uIGxpc3RzXG5cbid1c2Ugc3RyaWN0JztcblxuXG4vLyBTZWFyY2ggYFs6fl1bXFxuIF1gLCByZXR1cm5zIG5leHQgcG9zIGFmdGVyIG1hcmtlciBvbiBzdWNjZXNzXG4vLyBvciAtMSBvbiBmYWlsLlxuZnVuY3Rpb24gc2tpcE1hcmtlcihzdGF0ZSwgbGluZSkge1xuICB2YXIgcG9zLCBtYXJrZXIsXG4gICAgICBzdGFydCA9IHN0YXRlLmJNYXJrc1tsaW5lXSArIHN0YXRlLnRTaGlmdFtsaW5lXSxcbiAgICAgIG1heCA9IHN0YXRlLmVNYXJrc1tsaW5lXTtcblxuICBpZiAoc3RhcnQgPj0gbWF4KSB7IHJldHVybiAtMTsgfVxuXG4gIC8vIENoZWNrIGJ1bGxldFxuICBtYXJrZXIgPSBzdGF0ZS5zcmMuY2hhckNvZGVBdChzdGFydCsrKTtcbiAgaWYgKG1hcmtlciAhPT0gMHg3RS8qIH4gKi8gJiYgbWFya2VyICE9PSAweDNBLyogOiAqLykgeyByZXR1cm4gLTE7IH1cblxuICBwb3MgPSBzdGF0ZS5za2lwU3BhY2VzKHN0YXJ0KTtcblxuICAvLyByZXF1aXJlIHNwYWNlIGFmdGVyIFwiOlwiXG4gIGlmIChzdGFydCA9PT0gcG9zKSB7IHJldHVybiAtMTsgfVxuXG4gIC8vIG5vIGVtcHR5IGRlZmluaXRpb25zLCBlLmcuIFwiICA6IFwiXG4gIGlmIChwb3MgPj0gbWF4KSB7IHJldHVybiAtMTsgfVxuXG4gIHJldHVybiBwb3M7XG59XG5cbmZ1bmN0aW9uIG1hcmtUaWdodFBhcmFncmFwaHMoc3RhdGUsIGlkeCkge1xuICB2YXIgaSwgbCxcbiAgICAgIGxldmVsID0gc3RhdGUubGV2ZWwgKyAyO1xuXG4gIGZvciAoaSA9IGlkeCArIDIsIGwgPSBzdGF0ZS50b2tlbnMubGVuZ3RoIC0gMjsgaSA8IGw7IGkrKykge1xuICAgIGlmIChzdGF0ZS50b2tlbnNbaV0ubGV2ZWwgPT09IGxldmVsICYmIHN0YXRlLnRva2Vuc1tpXS50eXBlID09PSAncGFyYWdyYXBoX29wZW4nKSB7XG4gICAgICBzdGF0ZS50b2tlbnNbaSArIDJdLnRpZ2h0ID0gdHJ1ZTtcbiAgICAgIHN0YXRlLnRva2Vuc1tpXS50aWdodCA9IHRydWU7XG4gICAgICBpICs9IDI7XG4gICAgfVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZGVmbGlzdChzdGF0ZSwgc3RhcnRMaW5lLCBlbmRMaW5lLCBzaWxlbnQpIHtcbiAgdmFyIGNvbnRlbnRTdGFydCxcbiAgICAgIGRkTGluZSxcbiAgICAgIGR0TGluZSxcbiAgICAgIGl0ZW1MaW5lcyxcbiAgICAgIGxpc3RMaW5lcyxcbiAgICAgIGxpc3RUb2tJZHgsXG4gICAgICBuZXh0TGluZSxcbiAgICAgIG9sZEluZGVudCxcbiAgICAgIG9sZERESW5kZW50LFxuICAgICAgb2xkUGFyZW50VHlwZSxcbiAgICAgIG9sZFRTaGlmdCxcbiAgICAgIG9sZFRpZ2h0LFxuICAgICAgcHJldkVtcHR5RW5kLFxuICAgICAgdGlnaHQ7XG5cbiAgaWYgKHNpbGVudCkge1xuICAgIC8vIHF1aXJrOiB2YWxpZGF0aW9uIG1vZGUgdmFsaWRhdGVzIGEgZGQgYmxvY2sgb25seSwgbm90IGEgd2hvbGUgZGVmbGlzdFxuICAgIGlmIChzdGF0ZS5kZEluZGVudCA8IDApIHsgcmV0dXJuIGZhbHNlOyB9XG4gICAgcmV0dXJuIHNraXBNYXJrZXIoc3RhdGUsIHN0YXJ0TGluZSkgPj0gMDtcbiAgfVxuXG4gIG5leHRMaW5lID0gc3RhcnRMaW5lICsgMTtcbiAgaWYgKHN0YXRlLmlzRW1wdHkobmV4dExpbmUpKSB7XG4gICAgaWYgKCsrbmV4dExpbmUgPiBlbmRMaW5lKSB7IHJldHVybiBmYWxzZTsgfVxuICB9XG5cbiAgaWYgKHN0YXRlLnRTaGlmdFtuZXh0TGluZV0gPCBzdGF0ZS5ibGtJbmRlbnQpIHsgcmV0dXJuIGZhbHNlOyB9XG4gIGNvbnRlbnRTdGFydCA9IHNraXBNYXJrZXIoc3RhdGUsIG5leHRMaW5lKTtcbiAgaWYgKGNvbnRlbnRTdGFydCA8IDApIHsgcmV0dXJuIGZhbHNlOyB9XG5cbiAgaWYgKHN0YXRlLmxldmVsID49IHN0YXRlLm9wdGlvbnMubWF4TmVzdGluZykgeyByZXR1cm4gZmFsc2U7IH1cblxuICAvLyBTdGFydCBsaXN0XG4gIGxpc3RUb2tJZHggPSBzdGF0ZS50b2tlbnMubGVuZ3RoO1xuXG4gIHN0YXRlLnRva2Vucy5wdXNoKHtcbiAgICB0eXBlOiAnZGxfb3BlbicsXG4gICAgbGluZXM6IGxpc3RMaW5lcyA9IFsgc3RhcnRMaW5lLCAwIF0sXG4gICAgbGV2ZWw6IHN0YXRlLmxldmVsKytcbiAgfSk7XG5cbiAgLy9cbiAgLy8gSXRlcmF0ZSBsaXN0IGl0ZW1zXG4gIC8vXG5cbiAgZHRMaW5lID0gc3RhcnRMaW5lO1xuICBkZExpbmUgPSBuZXh0TGluZTtcblxuICAvLyBPbmUgZGVmaW5pdGlvbiBsaXN0IGNhbiBjb250YWluIG11bHRpcGxlIERUcyxcbiAgLy8gYW5kIG9uZSBEVCBjYW4gYmUgZm9sbG93ZWQgYnkgbXVsdGlwbGUgRERzLlxuICAvL1xuICAvLyBUaHVzLCB0aGVyZSBpcyB0d28gbG9vcHMgaGVyZSwgYW5kIGxhYmVsIGlzXG4gIC8vIG5lZWRlZCB0byBicmVhayBvdXQgb2YgdGhlIHNlY29uZCBvbmVcbiAgLy9cbiAgLyplc2xpbnQgbm8tbGFiZWxzOjAsYmxvY2stc2NvcGVkLXZhcjowKi9cbiAgT1VURVI6XG4gIGZvciAoOzspIHtcbiAgICB0aWdodCA9IHRydWU7XG4gICAgcHJldkVtcHR5RW5kID0gZmFsc2U7XG5cbiAgICBzdGF0ZS50b2tlbnMucHVzaCh7XG4gICAgICB0eXBlOiAnZHRfb3BlbicsXG4gICAgICBsaW5lczogWyBkdExpbmUsIGR0TGluZSBdLFxuICAgICAgbGV2ZWw6IHN0YXRlLmxldmVsKytcbiAgICB9KTtcbiAgICBzdGF0ZS50b2tlbnMucHVzaCh7XG4gICAgICB0eXBlOiAnaW5saW5lJyxcbiAgICAgIGNvbnRlbnQ6IHN0YXRlLmdldExpbmVzKGR0TGluZSwgZHRMaW5lICsgMSwgc3RhdGUuYmxrSW5kZW50LCBmYWxzZSkudHJpbSgpLFxuICAgICAgbGV2ZWw6IHN0YXRlLmxldmVsICsgMSxcbiAgICAgIGxpbmVzOiBbIGR0TGluZSwgZHRMaW5lIF0sXG4gICAgICBjaGlsZHJlbjogW11cbiAgICB9KTtcbiAgICBzdGF0ZS50b2tlbnMucHVzaCh7XG4gICAgICB0eXBlOiAnZHRfY2xvc2UnLFxuICAgICAgbGV2ZWw6IC0tc3RhdGUubGV2ZWxcbiAgICB9KTtcblxuICAgIGZvciAoOzspIHtcbiAgICAgIHN0YXRlLnRva2Vucy5wdXNoKHtcbiAgICAgICAgdHlwZTogJ2RkX29wZW4nLFxuICAgICAgICBsaW5lczogaXRlbUxpbmVzID0gWyBuZXh0TGluZSwgMCBdLFxuICAgICAgICBsZXZlbDogc3RhdGUubGV2ZWwrK1xuICAgICAgfSk7XG5cbiAgICAgIG9sZFRpZ2h0ID0gc3RhdGUudGlnaHQ7XG4gICAgICBvbGREREluZGVudCA9IHN0YXRlLmRkSW5kZW50O1xuICAgICAgb2xkSW5kZW50ID0gc3RhdGUuYmxrSW5kZW50O1xuICAgICAgb2xkVFNoaWZ0ID0gc3RhdGUudFNoaWZ0W2RkTGluZV07XG4gICAgICBvbGRQYXJlbnRUeXBlID0gc3RhdGUucGFyZW50VHlwZTtcbiAgICAgIHN0YXRlLmJsa0luZGVudCA9IHN0YXRlLmRkSW5kZW50ID0gc3RhdGUudFNoaWZ0W2RkTGluZV0gKyAyO1xuICAgICAgc3RhdGUudFNoaWZ0W2RkTGluZV0gPSBjb250ZW50U3RhcnQgLSBzdGF0ZS5iTWFya3NbZGRMaW5lXTtcbiAgICAgIHN0YXRlLnRpZ2h0ID0gdHJ1ZTtcbiAgICAgIHN0YXRlLnBhcmVudFR5cGUgPSAnZGVmbGlzdCc7XG5cbiAgICAgIHN0YXRlLnBhcnNlci50b2tlbml6ZShzdGF0ZSwgZGRMaW5lLCBlbmRMaW5lLCB0cnVlKTtcblxuICAgICAgLy8gSWYgYW55IG9mIGxpc3QgaXRlbSBpcyB0aWdodCwgbWFyayBsaXN0IGFzIHRpZ2h0XG4gICAgICBpZiAoIXN0YXRlLnRpZ2h0IHx8IHByZXZFbXB0eUVuZCkge1xuICAgICAgICB0aWdodCA9IGZhbHNlO1xuICAgICAgfVxuICAgICAgLy8gSXRlbSBiZWNvbWUgbG9vc2UgaWYgZmluaXNoIHdpdGggZW1wdHkgbGluZSxcbiAgICAgIC8vIGJ1dCB3ZSBzaG91bGQgZmlsdGVyIGxhc3QgZWxlbWVudCwgYmVjYXVzZSBpdCBtZWFucyBsaXN0IGZpbmlzaFxuICAgICAgcHJldkVtcHR5RW5kID0gKHN0YXRlLmxpbmUgLSBkZExpbmUpID4gMSAmJiBzdGF0ZS5pc0VtcHR5KHN0YXRlLmxpbmUgLSAxKTtcblxuICAgICAgc3RhdGUudFNoaWZ0W2RkTGluZV0gPSBvbGRUU2hpZnQ7XG4gICAgICBzdGF0ZS50aWdodCA9IG9sZFRpZ2h0O1xuICAgICAgc3RhdGUucGFyZW50VHlwZSA9IG9sZFBhcmVudFR5cGU7XG4gICAgICBzdGF0ZS5ibGtJbmRlbnQgPSBvbGRJbmRlbnQ7XG4gICAgICBzdGF0ZS5kZEluZGVudCA9IG9sZERESW5kZW50O1xuXG4gICAgICBzdGF0ZS50b2tlbnMucHVzaCh7XG4gICAgICAgIHR5cGU6ICdkZF9jbG9zZScsXG4gICAgICAgIGxldmVsOiAtLXN0YXRlLmxldmVsXG4gICAgICB9KTtcblxuICAgICAgaXRlbUxpbmVzWzFdID0gbmV4dExpbmUgPSBzdGF0ZS5saW5lO1xuXG4gICAgICBpZiAobmV4dExpbmUgPj0gZW5kTGluZSkgeyBicmVhayBPVVRFUjsgfVxuXG4gICAgICBpZiAoc3RhdGUudFNoaWZ0W25leHRMaW5lXSA8IHN0YXRlLmJsa0luZGVudCkgeyBicmVhayBPVVRFUjsgfVxuICAgICAgY29udGVudFN0YXJ0ID0gc2tpcE1hcmtlcihzdGF0ZSwgbmV4dExpbmUpO1xuICAgICAgaWYgKGNvbnRlbnRTdGFydCA8IDApIHsgYnJlYWs7IH1cblxuICAgICAgZGRMaW5lID0gbmV4dExpbmU7XG5cbiAgICAgIC8vIGdvIHRvIHRoZSBuZXh0IGxvb3AgaXRlcmF0aW9uOlxuICAgICAgLy8gaW5zZXJ0IEREIHRhZyBhbmQgcmVwZWF0IGNoZWNraW5nXG4gICAgfVxuXG4gICAgaWYgKG5leHRMaW5lID49IGVuZExpbmUpIHsgYnJlYWs7IH1cbiAgICBkdExpbmUgPSBuZXh0TGluZTtcblxuICAgIGlmIChzdGF0ZS5pc0VtcHR5KGR0TGluZSkpIHsgYnJlYWs7IH1cbiAgICBpZiAoc3RhdGUudFNoaWZ0W2R0TGluZV0gPCBzdGF0ZS5ibGtJbmRlbnQpIHsgYnJlYWs7IH1cblxuICAgIGRkTGluZSA9IGR0TGluZSArIDE7XG4gICAgaWYgKGRkTGluZSA+PSBlbmRMaW5lKSB7IGJyZWFrOyB9XG4gICAgaWYgKHN0YXRlLmlzRW1wdHkoZGRMaW5lKSkgeyBkZExpbmUrKzsgfVxuICAgIGlmIChkZExpbmUgPj0gZW5kTGluZSkgeyBicmVhazsgfVxuXG4gICAgaWYgKHN0YXRlLnRTaGlmdFtkZExpbmVdIDwgc3RhdGUuYmxrSW5kZW50KSB7IGJyZWFrOyB9XG4gICAgY29udGVudFN0YXJ0ID0gc2tpcE1hcmtlcihzdGF0ZSwgZGRMaW5lKTtcbiAgICBpZiAoY29udGVudFN0YXJ0IDwgMCkgeyBicmVhazsgfVxuXG4gICAgLy8gZ28gdG8gdGhlIG5leHQgbG9vcCBpdGVyYXRpb246XG4gICAgLy8gaW5zZXJ0IERUIGFuZCBERCB0YWdzIGFuZCByZXBlYXQgY2hlY2tpbmdcbiAgfVxuXG4gIC8vIEZpbmlsaXplIGxpc3RcbiAgc3RhdGUudG9rZW5zLnB1c2goe1xuICAgIHR5cGU6ICdkbF9jbG9zZScsXG4gICAgbGV2ZWw6IC0tc3RhdGUubGV2ZWxcbiAgfSk7XG4gIGxpc3RMaW5lc1sxXSA9IG5leHRMaW5lO1xuXG4gIHN0YXRlLmxpbmUgPSBuZXh0TGluZTtcblxuICAvLyBtYXJrIHBhcmFncmFwaHMgdGlnaHQgaWYgbmVlZGVkXG4gIGlmICh0aWdodCkge1xuICAgIG1hcmtUaWdodFBhcmFncmFwaHMoc3RhdGUsIGxpc3RUb2tJZHgpO1xuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59O1xuIiwiLy8gZmVuY2VzIChgYGAgbGFuZywgfn5+IGxhbmcpXG5cbid1c2Ugc3RyaWN0JztcblxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGZlbmNlcyhzdGF0ZSwgc3RhcnRMaW5lLCBlbmRMaW5lLCBzaWxlbnQpIHtcbiAgdmFyIG1hcmtlciwgbGVuLCBwYXJhbXMsIG5leHRMaW5lLCBtZW0sXG4gICAgICBoYXZlRW5kTWFya2VyID0gZmFsc2UsXG4gICAgICBwb3MgPSBzdGF0ZS5iTWFya3Nbc3RhcnRMaW5lXSArIHN0YXRlLnRTaGlmdFtzdGFydExpbmVdLFxuICAgICAgbWF4ID0gc3RhdGUuZU1hcmtzW3N0YXJ0TGluZV07XG5cbiAgaWYgKHBvcyArIDMgPiBtYXgpIHsgcmV0dXJuIGZhbHNlOyB9XG5cbiAgbWFya2VyID0gc3RhdGUuc3JjLmNoYXJDb2RlQXQocG9zKTtcblxuICBpZiAobWFya2VyICE9PSAweDdFLyogfiAqLyAmJiBtYXJrZXIgIT09IDB4NjAgLyogYCAqLykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8vIHNjYW4gbWFya2VyIGxlbmd0aFxuICBtZW0gPSBwb3M7XG4gIHBvcyA9IHN0YXRlLnNraXBDaGFycyhwb3MsIG1hcmtlcik7XG5cbiAgbGVuID0gcG9zIC0gbWVtO1xuXG4gIGlmIChsZW4gPCAzKSB7IHJldHVybiBmYWxzZTsgfVxuXG4gIHBhcmFtcyA9IHN0YXRlLnNyYy5zbGljZShwb3MsIG1heCkudHJpbSgpO1xuXG4gIGlmIChwYXJhbXMuaW5kZXhPZignYCcpID49IDApIHsgcmV0dXJuIGZhbHNlOyB9XG5cbiAgLy8gU2luY2Ugc3RhcnQgaXMgZm91bmQsIHdlIGNhbiByZXBvcnQgc3VjY2VzcyBoZXJlIGluIHZhbGlkYXRpb24gbW9kZVxuICBpZiAoc2lsZW50KSB7IHJldHVybiB0cnVlOyB9XG5cbiAgLy8gc2VhcmNoIGVuZCBvZiBibG9ja1xuICBuZXh0TGluZSA9IHN0YXJ0TGluZTtcblxuICBmb3IgKDs7KSB7XG4gICAgbmV4dExpbmUrKztcbiAgICBpZiAobmV4dExpbmUgPj0gZW5kTGluZSkge1xuICAgICAgLy8gdW5jbG9zZWQgYmxvY2sgc2hvdWxkIGJlIGF1dG9jbG9zZWQgYnkgZW5kIG9mIGRvY3VtZW50LlxuICAgICAgLy8gYWxzbyBibG9jayBzZWVtcyB0byBiZSBhdXRvY2xvc2VkIGJ5IGVuZCBvZiBwYXJlbnRcbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIHBvcyA9IG1lbSA9IHN0YXRlLmJNYXJrc1tuZXh0TGluZV0gKyBzdGF0ZS50U2hpZnRbbmV4dExpbmVdO1xuICAgIG1heCA9IHN0YXRlLmVNYXJrc1tuZXh0TGluZV07XG5cbiAgICBpZiAocG9zIDwgbWF4ICYmIHN0YXRlLnRTaGlmdFtuZXh0TGluZV0gPCBzdGF0ZS5ibGtJbmRlbnQpIHtcbiAgICAgIC8vIG5vbi1lbXB0eSBsaW5lIHdpdGggbmVnYXRpdmUgaW5kZW50IHNob3VsZCBzdG9wIHRoZSBsaXN0OlxuICAgICAgLy8gLSBgYGBcbiAgICAgIC8vICB0ZXN0XG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBpZiAoc3RhdGUuc3JjLmNoYXJDb2RlQXQocG9zKSAhPT0gbWFya2VyKSB7IGNvbnRpbnVlOyB9XG5cbiAgICBpZiAoc3RhdGUudFNoaWZ0W25leHRMaW5lXSAtIHN0YXRlLmJsa0luZGVudCA+PSA0KSB7XG4gICAgICAvLyBjbG9zaW5nIGZlbmNlIHNob3VsZCBiZSBpbmRlbnRlZCBsZXNzIHRoYW4gNCBzcGFjZXNcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIHBvcyA9IHN0YXRlLnNraXBDaGFycyhwb3MsIG1hcmtlcik7XG5cbiAgICAvLyBjbG9zaW5nIGNvZGUgZmVuY2UgbXVzdCBiZSBhdCBsZWFzdCBhcyBsb25nIGFzIHRoZSBvcGVuaW5nIG9uZVxuICAgIGlmIChwb3MgLSBtZW0gPCBsZW4pIHsgY29udGludWU7IH1cblxuICAgIC8vIG1ha2Ugc3VyZSB0YWlsIGhhcyBzcGFjZXMgb25seVxuICAgIHBvcyA9IHN0YXRlLnNraXBTcGFjZXMocG9zKTtcblxuICAgIGlmIChwb3MgPCBtYXgpIHsgY29udGludWU7IH1cblxuICAgIGhhdmVFbmRNYXJrZXIgPSB0cnVlO1xuICAgIC8vIGZvdW5kIVxuICAgIGJyZWFrO1xuICB9XG5cbiAgLy8gSWYgYSBmZW5jZSBoYXMgaGVhZGluZyBzcGFjZXMsIHRoZXkgc2hvdWxkIGJlIHJlbW92ZWQgZnJvbSBpdHMgaW5uZXIgYmxvY2tcbiAgbGVuID0gc3RhdGUudFNoaWZ0W3N0YXJ0TGluZV07XG5cbiAgc3RhdGUubGluZSA9IG5leHRMaW5lICsgKGhhdmVFbmRNYXJrZXIgPyAxIDogMCk7XG4gIHN0YXRlLnRva2Vucy5wdXNoKHtcbiAgICB0eXBlOiAnZmVuY2UnLFxuICAgIHBhcmFtczogcGFyYW1zLFxuICAgIGNvbnRlbnQ6IHN0YXRlLmdldExpbmVzKHN0YXJ0TGluZSArIDEsIG5leHRMaW5lLCBsZW4sIHRydWUpLFxuICAgIGxpbmVzOiBbIHN0YXJ0TGluZSwgc3RhdGUubGluZSBdLFxuICAgIGxldmVsOiBzdGF0ZS5sZXZlbFxuICB9KTtcblxuICByZXR1cm4gdHJ1ZTtcbn07XG4iLCIvLyBQcm9jZXNzIGZvb3Rub3RlIHJlZmVyZW5jZSBsaXN0XG5cbid1c2Ugc3RyaWN0JztcblxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGZvb3Rub3RlKHN0YXRlLCBzdGFydExpbmUsIGVuZExpbmUsIHNpbGVudCkge1xuICB2YXIgb2xkQk1hcmssIG9sZFRTaGlmdCwgb2xkUGFyZW50VHlwZSwgcG9zLCBsYWJlbCxcbiAgICAgIHN0YXJ0ID0gc3RhdGUuYk1hcmtzW3N0YXJ0TGluZV0gKyBzdGF0ZS50U2hpZnRbc3RhcnRMaW5lXSxcbiAgICAgIG1heCA9IHN0YXRlLmVNYXJrc1tzdGFydExpbmVdO1xuXG4gIC8vIGxpbmUgc2hvdWxkIGJlIGF0IGxlYXN0IDUgY2hhcnMgLSBcIlteeF06XCJcbiAgaWYgKHN0YXJ0ICsgNCA+IG1heCkgeyByZXR1cm4gZmFsc2U7IH1cblxuICBpZiAoc3RhdGUuc3JjLmNoYXJDb2RlQXQoc3RhcnQpICE9PSAweDVCLyogWyAqLykgeyByZXR1cm4gZmFsc2U7IH1cbiAgaWYgKHN0YXRlLnNyYy5jaGFyQ29kZUF0KHN0YXJ0ICsgMSkgIT09IDB4NUUvKiBeICovKSB7IHJldHVybiBmYWxzZTsgfVxuICBpZiAoc3RhdGUubGV2ZWwgPj0gc3RhdGUub3B0aW9ucy5tYXhOZXN0aW5nKSB7IHJldHVybiBmYWxzZTsgfVxuXG4gIGZvciAocG9zID0gc3RhcnQgKyAyOyBwb3MgPCBtYXg7IHBvcysrKSB7XG4gICAgaWYgKHN0YXRlLnNyYy5jaGFyQ29kZUF0KHBvcykgPT09IDB4MjApIHsgcmV0dXJuIGZhbHNlOyB9XG4gICAgaWYgKHN0YXRlLnNyYy5jaGFyQ29kZUF0KHBvcykgPT09IDB4NUQgLyogXSAqLykge1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgaWYgKHBvcyA9PT0gc3RhcnQgKyAyKSB7IHJldHVybiBmYWxzZTsgfSAvLyBubyBlbXB0eSBmb290bm90ZSBsYWJlbHNcbiAgaWYgKHBvcyArIDEgPj0gbWF4IHx8IHN0YXRlLnNyYy5jaGFyQ29kZUF0KCsrcG9zKSAhPT0gMHgzQSAvKiA6ICovKSB7IHJldHVybiBmYWxzZTsgfVxuICBpZiAoc2lsZW50KSB7IHJldHVybiB0cnVlOyB9XG4gIHBvcysrO1xuXG4gIGlmICghc3RhdGUuZW52LmZvb3Rub3RlcykgeyBzdGF0ZS5lbnYuZm9vdG5vdGVzID0ge307IH1cbiAgaWYgKCFzdGF0ZS5lbnYuZm9vdG5vdGVzLnJlZnMpIHsgc3RhdGUuZW52LmZvb3Rub3Rlcy5yZWZzID0ge307IH1cbiAgbGFiZWwgPSBzdGF0ZS5zcmMuc2xpY2Uoc3RhcnQgKyAyLCBwb3MgLSAyKTtcbiAgc3RhdGUuZW52LmZvb3Rub3Rlcy5yZWZzWyc6JyArIGxhYmVsXSA9IC0xO1xuXG4gIHN0YXRlLnRva2Vucy5wdXNoKHtcbiAgICB0eXBlOiAnZm9vdG5vdGVfcmVmZXJlbmNlX29wZW4nLFxuICAgIGxhYmVsOiBsYWJlbCxcbiAgICBsZXZlbDogc3RhdGUubGV2ZWwrK1xuICB9KTtcblxuICBvbGRCTWFyayA9IHN0YXRlLmJNYXJrc1tzdGFydExpbmVdO1xuICBvbGRUU2hpZnQgPSBzdGF0ZS50U2hpZnRbc3RhcnRMaW5lXTtcbiAgb2xkUGFyZW50VHlwZSA9IHN0YXRlLnBhcmVudFR5cGU7XG4gIHN0YXRlLnRTaGlmdFtzdGFydExpbmVdID0gc3RhdGUuc2tpcFNwYWNlcyhwb3MpIC0gcG9zO1xuICBzdGF0ZS5iTWFya3Nbc3RhcnRMaW5lXSA9IHBvcztcbiAgc3RhdGUuYmxrSW5kZW50ICs9IDQ7XG4gIHN0YXRlLnBhcmVudFR5cGUgPSAnZm9vdG5vdGUnO1xuXG4gIGlmIChzdGF0ZS50U2hpZnRbc3RhcnRMaW5lXSA8IHN0YXRlLmJsa0luZGVudCkge1xuICAgIHN0YXRlLnRTaGlmdFtzdGFydExpbmVdICs9IHN0YXRlLmJsa0luZGVudDtcbiAgICBzdGF0ZS5iTWFya3Nbc3RhcnRMaW5lXSAtPSBzdGF0ZS5ibGtJbmRlbnQ7XG4gIH1cblxuICBzdGF0ZS5wYXJzZXIudG9rZW5pemUoc3RhdGUsIHN0YXJ0TGluZSwgZW5kTGluZSwgdHJ1ZSk7XG5cbiAgc3RhdGUucGFyZW50VHlwZSA9IG9sZFBhcmVudFR5cGU7XG4gIHN0YXRlLmJsa0luZGVudCAtPSA0O1xuICBzdGF0ZS50U2hpZnRbc3RhcnRMaW5lXSA9IG9sZFRTaGlmdDtcbiAgc3RhdGUuYk1hcmtzW3N0YXJ0TGluZV0gPSBvbGRCTWFyaztcblxuICBzdGF0ZS50b2tlbnMucHVzaCh7XG4gICAgdHlwZTogJ2Zvb3Rub3RlX3JlZmVyZW5jZV9jbG9zZScsXG4gICAgbGV2ZWw6IC0tc3RhdGUubGV2ZWxcbiAgfSk7XG5cbiAgcmV0dXJuIHRydWU7XG59O1xuIiwiLy8gaGVhZGluZyAoIywgIyMsIC4uLilcblxuJ3VzZSBzdHJpY3QnO1xuXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaGVhZGluZyhzdGF0ZSwgc3RhcnRMaW5lLCBlbmRMaW5lLCBzaWxlbnQpIHtcbiAgdmFyIGNoLCBsZXZlbCwgdG1wLFxuICAgICAgcG9zID0gc3RhdGUuYk1hcmtzW3N0YXJ0TGluZV0gKyBzdGF0ZS50U2hpZnRbc3RhcnRMaW5lXSxcbiAgICAgIG1heCA9IHN0YXRlLmVNYXJrc1tzdGFydExpbmVdO1xuXG4gIGlmIChwb3MgPj0gbWF4KSB7IHJldHVybiBmYWxzZTsgfVxuXG4gIGNoICA9IHN0YXRlLnNyYy5jaGFyQ29kZUF0KHBvcyk7XG5cbiAgaWYgKGNoICE9PSAweDIzLyogIyAqLyB8fCBwb3MgPj0gbWF4KSB7IHJldHVybiBmYWxzZTsgfVxuXG4gIC8vIGNvdW50IGhlYWRpbmcgbGV2ZWxcbiAgbGV2ZWwgPSAxO1xuICBjaCA9IHN0YXRlLnNyYy5jaGFyQ29kZUF0KCsrcG9zKTtcbiAgd2hpbGUgKGNoID09PSAweDIzLyogIyAqLyAmJiBwb3MgPCBtYXggJiYgbGV2ZWwgPD0gNikge1xuICAgIGxldmVsKys7XG4gICAgY2ggPSBzdGF0ZS5zcmMuY2hhckNvZGVBdCgrK3Bvcyk7XG4gIH1cblxuICBpZiAobGV2ZWwgPiA2IHx8IChwb3MgPCBtYXggJiYgY2ggIT09IDB4MjAvKiBzcGFjZSAqLykpIHsgcmV0dXJuIGZhbHNlOyB9XG5cbiAgaWYgKHNpbGVudCkgeyByZXR1cm4gdHJ1ZTsgfVxuXG4gIC8vIExldCdzIGN1dCB0YWlscyBsaWtlICcgICAgIyMjICAnIGZyb20gdGhlIGVuZCBvZiBzdHJpbmdcblxuICBtYXggPSBzdGF0ZS5za2lwQ2hhcnNCYWNrKG1heCwgMHgyMCwgcG9zKTsgLy8gc3BhY2VcbiAgdG1wID0gc3RhdGUuc2tpcENoYXJzQmFjayhtYXgsIDB4MjMsIHBvcyk7IC8vICNcbiAgaWYgKHRtcCA+IHBvcyAmJiBzdGF0ZS5zcmMuY2hhckNvZGVBdCh0bXAgLSAxKSA9PT0gMHgyMC8qIHNwYWNlICovKSB7XG4gICAgbWF4ID0gdG1wO1xuICB9XG5cbiAgc3RhdGUubGluZSA9IHN0YXJ0TGluZSArIDE7XG5cbiAgc3RhdGUudG9rZW5zLnB1c2goeyB0eXBlOiAnaGVhZGluZ19vcGVuJyxcbiAgICBoTGV2ZWw6IGxldmVsLFxuICAgIGxpbmVzOiBbIHN0YXJ0TGluZSwgc3RhdGUubGluZSBdLFxuICAgIGxldmVsOiBzdGF0ZS5sZXZlbFxuICB9KTtcblxuICAvLyBvbmx5IGlmIGhlYWRlciBpcyBub3QgZW1wdHlcbiAgaWYgKHBvcyA8IG1heCkge1xuICAgIHN0YXRlLnRva2Vucy5wdXNoKHtcbiAgICAgIHR5cGU6ICdpbmxpbmUnLFxuICAgICAgY29udGVudDogc3RhdGUuc3JjLnNsaWNlKHBvcywgbWF4KS50cmltKCksXG4gICAgICBsZXZlbDogc3RhdGUubGV2ZWwgKyAxLFxuICAgICAgbGluZXM6IFsgc3RhcnRMaW5lLCBzdGF0ZS5saW5lIF0sXG4gICAgICBjaGlsZHJlbjogW11cbiAgICB9KTtcbiAgfVxuICBzdGF0ZS50b2tlbnMucHVzaCh7IHR5cGU6ICdoZWFkaW5nX2Nsb3NlJywgaExldmVsOiBsZXZlbCwgbGV2ZWw6IHN0YXRlLmxldmVsIH0pO1xuXG4gIHJldHVybiB0cnVlO1xufTtcbiIsIi8vIEhvcml6b250YWwgcnVsZVxuXG4ndXNlIHN0cmljdCc7XG5cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBocihzdGF0ZSwgc3RhcnRMaW5lLCBlbmRMaW5lLCBzaWxlbnQpIHtcbiAgdmFyIG1hcmtlciwgY250LCBjaCxcbiAgICAgIHBvcyA9IHN0YXRlLmJNYXJrc1tzdGFydExpbmVdLFxuICAgICAgbWF4ID0gc3RhdGUuZU1hcmtzW3N0YXJ0TGluZV07XG5cbiAgcG9zICs9IHN0YXRlLnRTaGlmdFtzdGFydExpbmVdO1xuXG4gIGlmIChwb3MgPiBtYXgpIHsgcmV0dXJuIGZhbHNlOyB9XG5cbiAgbWFya2VyID0gc3RhdGUuc3JjLmNoYXJDb2RlQXQocG9zKyspO1xuXG4gIC8vIENoZWNrIGhyIG1hcmtlclxuICBpZiAobWFya2VyICE9PSAweDJBLyogKiAqLyAmJlxuICAgICAgbWFya2VyICE9PSAweDJELyogLSAqLyAmJlxuICAgICAgbWFya2VyICE9PSAweDVGLyogXyAqLykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8vIG1hcmtlcnMgY2FuIGJlIG1peGVkIHdpdGggc3BhY2VzLCBidXQgdGhlcmUgc2hvdWxkIGJlIGF0IGxlYXN0IDMgb25lXG5cbiAgY250ID0gMTtcbiAgd2hpbGUgKHBvcyA8IG1heCkge1xuICAgIGNoID0gc3RhdGUuc3JjLmNoYXJDb2RlQXQocG9zKyspO1xuICAgIGlmIChjaCAhPT0gbWFya2VyICYmIGNoICE9PSAweDIwLyogc3BhY2UgKi8pIHsgcmV0dXJuIGZhbHNlOyB9XG4gICAgaWYgKGNoID09PSBtYXJrZXIpIHsgY250Kys7IH1cbiAgfVxuXG4gIGlmIChjbnQgPCAzKSB7IHJldHVybiBmYWxzZTsgfVxuXG4gIGlmIChzaWxlbnQpIHsgcmV0dXJuIHRydWU7IH1cblxuICBzdGF0ZS5saW5lID0gc3RhcnRMaW5lICsgMTtcbiAgc3RhdGUudG9rZW5zLnB1c2goe1xuICAgIHR5cGU6ICdocicsXG4gICAgbGluZXM6IFsgc3RhcnRMaW5lLCBzdGF0ZS5saW5lIF0sXG4gICAgbGV2ZWw6IHN0YXRlLmxldmVsXG4gIH0pO1xuXG4gIHJldHVybiB0cnVlO1xufTtcbiIsIi8vIEhUTUwgYmxvY2tcblxuJ3VzZSBzdHJpY3QnO1xuXG5cbnZhciBibG9ja19uYW1lcyA9IHJlcXVpcmUoJy4uL2NvbW1vbi9odG1sX2Jsb2NrcycpO1xuXG5cbnZhciBIVE1MX1RBR19PUEVOX1JFID0gL148KFthLXpBLVpdezEsMTV9KVtcXHNcXC8+XS87XG52YXIgSFRNTF9UQUdfQ0xPU0VfUkUgPSAvXjxcXC8oW2EtekEtWl17MSwxNX0pW1xccz5dLztcblxuZnVuY3Rpb24gaXNMZXR0ZXIoY2gpIHtcbiAgLyplc2xpbnQgbm8tYml0d2lzZTowKi9cbiAgdmFyIGxjID0gY2ggfCAweDIwOyAvLyB0byBsb3dlciBjYXNlXG4gIHJldHVybiAobGMgPj0gMHg2MS8qIGEgKi8pICYmIChsYyA8PSAweDdhLyogeiAqLyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaHRtbGJsb2NrKHN0YXRlLCBzdGFydExpbmUsIGVuZExpbmUsIHNpbGVudCkge1xuICB2YXIgY2gsIG1hdGNoLCBuZXh0TGluZSxcbiAgICAgIHBvcyA9IHN0YXRlLmJNYXJrc1tzdGFydExpbmVdLFxuICAgICAgbWF4ID0gc3RhdGUuZU1hcmtzW3N0YXJ0TGluZV0sXG4gICAgICBzaGlmdCA9IHN0YXRlLnRTaGlmdFtzdGFydExpbmVdO1xuXG4gIHBvcyArPSBzaGlmdDtcblxuICBpZiAoIXN0YXRlLm9wdGlvbnMuaHRtbCkgeyByZXR1cm4gZmFsc2U7IH1cblxuICBpZiAoc2hpZnQgPiAzIHx8IHBvcyArIDIgPj0gbWF4KSB7IHJldHVybiBmYWxzZTsgfVxuXG4gIGlmIChzdGF0ZS5zcmMuY2hhckNvZGVBdChwb3MpICE9PSAweDNDLyogPCAqLykgeyByZXR1cm4gZmFsc2U7IH1cblxuICBjaCA9IHN0YXRlLnNyYy5jaGFyQ29kZUF0KHBvcyArIDEpO1xuXG4gIGlmIChjaCA9PT0gMHgyMS8qICEgKi8gfHwgY2ggPT09IDB4M0YvKiA/ICovKSB7XG4gICAgLy8gRGlyZWN0aXZlIHN0YXJ0IC8gY29tbWVudCBzdGFydCAvIHByb2Nlc3NpbmcgaW5zdHJ1Y3Rpb24gc3RhcnRcbiAgICBpZiAoc2lsZW50KSB7IHJldHVybiB0cnVlOyB9XG5cbiAgfSBlbHNlIGlmIChjaCA9PT0gMHgyRi8qIC8gKi8gfHwgaXNMZXR0ZXIoY2gpKSB7XG5cbiAgICAvLyBQcm9iYWJseSBzdGFydCBvciBlbmQgb2YgdGFnXG4gICAgaWYgKGNoID09PSAweDJGLyogXFwgKi8pIHtcbiAgICAgIC8vIGNsb3NpbmcgdGFnXG4gICAgICBtYXRjaCA9IHN0YXRlLnNyYy5zbGljZShwb3MsIG1heCkubWF0Y2goSFRNTF9UQUdfQ0xPU0VfUkUpO1xuICAgICAgaWYgKCFtYXRjaCkgeyByZXR1cm4gZmFsc2U7IH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gb3BlbmluZyB0YWdcbiAgICAgIG1hdGNoID0gc3RhdGUuc3JjLnNsaWNlKHBvcywgbWF4KS5tYXRjaChIVE1MX1RBR19PUEVOX1JFKTtcbiAgICAgIGlmICghbWF0Y2gpIHsgcmV0dXJuIGZhbHNlOyB9XG4gICAgfVxuICAgIC8vIE1ha2Ugc3VyZSB0YWcgbmFtZSBpcyB2YWxpZFxuICAgIGlmIChibG9ja19uYW1lc1ttYXRjaFsxXS50b0xvd2VyQ2FzZSgpXSAhPT0gdHJ1ZSkgeyByZXR1cm4gZmFsc2U7IH1cbiAgICBpZiAoc2lsZW50KSB7IHJldHVybiB0cnVlOyB9XG5cbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvLyBJZiB3ZSBhcmUgaGVyZSAtIHdlIGRldGVjdGVkIEhUTUwgYmxvY2suXG4gIC8vIExldCdzIHJvbGwgZG93biB0aWxsIGVtcHR5IGxpbmUgKGJsb2NrIGVuZCkuXG4gIG5leHRMaW5lID0gc3RhcnRMaW5lICsgMTtcbiAgd2hpbGUgKG5leHRMaW5lIDwgc3RhdGUubGluZU1heCAmJiAhc3RhdGUuaXNFbXB0eShuZXh0TGluZSkpIHtcbiAgICBuZXh0TGluZSsrO1xuICB9XG5cbiAgc3RhdGUubGluZSA9IG5leHRMaW5lO1xuICBzdGF0ZS50b2tlbnMucHVzaCh7XG4gICAgdHlwZTogJ2h0bWxibG9jaycsXG4gICAgbGV2ZWw6IHN0YXRlLmxldmVsLFxuICAgIGxpbmVzOiBbIHN0YXJ0TGluZSwgc3RhdGUubGluZSBdLFxuICAgIGNvbnRlbnQ6IHN0YXRlLmdldExpbmVzKHN0YXJ0TGluZSwgbmV4dExpbmUsIDAsIHRydWUpXG4gIH0pO1xuXG4gIHJldHVybiB0cnVlO1xufTtcbiIsIi8vIGxoZWFkaW5nICgtLS0sID09PSlcblxuJ3VzZSBzdHJpY3QnO1xuXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gbGhlYWRpbmcoc3RhdGUsIHN0YXJ0TGluZSwgZW5kTGluZS8qLCBzaWxlbnQqLykge1xuICB2YXIgbWFya2VyLCBwb3MsIG1heCxcbiAgICAgIG5leHQgPSBzdGFydExpbmUgKyAxO1xuXG4gIGlmIChuZXh0ID49IGVuZExpbmUpIHsgcmV0dXJuIGZhbHNlOyB9XG4gIGlmIChzdGF0ZS50U2hpZnRbbmV4dF0gPCBzdGF0ZS5ibGtJbmRlbnQpIHsgcmV0dXJuIGZhbHNlOyB9XG5cbiAgLy8gU2NhbiBuZXh0IGxpbmVcblxuICBpZiAoc3RhdGUudFNoaWZ0W25leHRdIC0gc3RhdGUuYmxrSW5kZW50ID4gMykgeyByZXR1cm4gZmFsc2U7IH1cblxuICBwb3MgPSBzdGF0ZS5iTWFya3NbbmV4dF0gKyBzdGF0ZS50U2hpZnRbbmV4dF07XG4gIG1heCA9IHN0YXRlLmVNYXJrc1tuZXh0XTtcblxuICBpZiAocG9zID49IG1heCkgeyByZXR1cm4gZmFsc2U7IH1cblxuICBtYXJrZXIgPSBzdGF0ZS5zcmMuY2hhckNvZGVBdChwb3MpO1xuXG4gIGlmIChtYXJrZXIgIT09IDB4MkQvKiAtICovICYmIG1hcmtlciAhPT0gMHgzRC8qID0gKi8pIHsgcmV0dXJuIGZhbHNlOyB9XG5cbiAgcG9zID0gc3RhdGUuc2tpcENoYXJzKHBvcywgbWFya2VyKTtcblxuICBwb3MgPSBzdGF0ZS5za2lwU3BhY2VzKHBvcyk7XG5cbiAgaWYgKHBvcyA8IG1heCkgeyByZXR1cm4gZmFsc2U7IH1cblxuICBwb3MgPSBzdGF0ZS5iTWFya3Nbc3RhcnRMaW5lXSArIHN0YXRlLnRTaGlmdFtzdGFydExpbmVdO1xuXG4gIHN0YXRlLmxpbmUgPSBuZXh0ICsgMTtcbiAgc3RhdGUudG9rZW5zLnB1c2goe1xuICAgIHR5cGU6ICdoZWFkaW5nX29wZW4nLFxuICAgIGhMZXZlbDogbWFya2VyID09PSAweDNELyogPSAqLyA/IDEgOiAyLFxuICAgIGxpbmVzOiBbIHN0YXJ0TGluZSwgc3RhdGUubGluZSBdLFxuICAgIGxldmVsOiBzdGF0ZS5sZXZlbFxuICB9KTtcbiAgc3RhdGUudG9rZW5zLnB1c2goe1xuICAgIHR5cGU6ICdpbmxpbmUnLFxuICAgIGNvbnRlbnQ6IHN0YXRlLnNyYy5zbGljZShwb3MsIHN0YXRlLmVNYXJrc1tzdGFydExpbmVdKS50cmltKCksXG4gICAgbGV2ZWw6IHN0YXRlLmxldmVsICsgMSxcbiAgICBsaW5lczogWyBzdGFydExpbmUsIHN0YXRlLmxpbmUgLSAxIF0sXG4gICAgY2hpbGRyZW46IFtdXG4gIH0pO1xuICBzdGF0ZS50b2tlbnMucHVzaCh7XG4gICAgdHlwZTogJ2hlYWRpbmdfY2xvc2UnLFxuICAgIGhMZXZlbDogbWFya2VyID09PSAweDNELyogPSAqLyA/IDEgOiAyLFxuICAgIGxldmVsOiBzdGF0ZS5sZXZlbFxuICB9KTtcblxuICByZXR1cm4gdHJ1ZTtcbn07XG4iLCIvLyBMaXN0c1xuXG4ndXNlIHN0cmljdCc7XG5cblxuLy8gU2VhcmNoIGBbLSsqXVtcXG4gXWAsIHJldHVybnMgbmV4dCBwb3MgYXJ0ZXIgbWFya2VyIG9uIHN1Y2Nlc3Ncbi8vIG9yIC0xIG9uIGZhaWwuXG5mdW5jdGlvbiBza2lwQnVsbGV0TGlzdE1hcmtlcihzdGF0ZSwgc3RhcnRMaW5lKSB7XG4gIHZhciBtYXJrZXIsIHBvcywgbWF4O1xuXG4gIHBvcyA9IHN0YXRlLmJNYXJrc1tzdGFydExpbmVdICsgc3RhdGUudFNoaWZ0W3N0YXJ0TGluZV07XG4gIG1heCA9IHN0YXRlLmVNYXJrc1tzdGFydExpbmVdO1xuXG4gIGlmIChwb3MgPj0gbWF4KSB7IHJldHVybiAtMTsgfVxuXG4gIG1hcmtlciA9IHN0YXRlLnNyYy5jaGFyQ29kZUF0KHBvcysrKTtcbiAgLy8gQ2hlY2sgYnVsbGV0XG4gIGlmIChtYXJrZXIgIT09IDB4MkEvKiAqICovICYmXG4gICAgICBtYXJrZXIgIT09IDB4MkQvKiAtICovICYmXG4gICAgICBtYXJrZXIgIT09IDB4MkIvKiArICovKSB7XG4gICAgcmV0dXJuIC0xO1xuICB9XG5cbiAgaWYgKHBvcyA8IG1heCAmJiBzdGF0ZS5zcmMuY2hhckNvZGVBdChwb3MpICE9PSAweDIwKSB7XG4gICAgLy8gXCIgMS50ZXN0IFwiIC0gaXMgbm90IGEgbGlzdCBpdGVtXG4gICAgcmV0dXJuIC0xO1xuICB9XG5cbiAgcmV0dXJuIHBvcztcbn1cblxuLy8gU2VhcmNoIGBcXGQrWy4pXVtcXG4gXWAsIHJldHVybnMgbmV4dCBwb3MgYXJ0ZXIgbWFya2VyIG9uIHN1Y2Nlc3Ncbi8vIG9yIC0xIG9uIGZhaWwuXG5mdW5jdGlvbiBza2lwT3JkZXJlZExpc3RNYXJrZXIoc3RhdGUsIHN0YXJ0TGluZSkge1xuICB2YXIgY2gsXG4gICAgICBwb3MgPSBzdGF0ZS5iTWFya3Nbc3RhcnRMaW5lXSArIHN0YXRlLnRTaGlmdFtzdGFydExpbmVdLFxuICAgICAgbWF4ID0gc3RhdGUuZU1hcmtzW3N0YXJ0TGluZV07XG5cbiAgaWYgKHBvcyArIDEgPj0gbWF4KSB7IHJldHVybiAtMTsgfVxuXG4gIGNoID0gc3RhdGUuc3JjLmNoYXJDb2RlQXQocG9zKyspO1xuXG4gIGlmIChjaCA8IDB4MzAvKiAwICovIHx8IGNoID4gMHgzOS8qIDkgKi8pIHsgcmV0dXJuIC0xOyB9XG5cbiAgZm9yICg7Oykge1xuICAgIC8vIEVPTCAtPiBmYWlsXG4gICAgaWYgKHBvcyA+PSBtYXgpIHsgcmV0dXJuIC0xOyB9XG5cbiAgICBjaCA9IHN0YXRlLnNyYy5jaGFyQ29kZUF0KHBvcysrKTtcblxuICAgIGlmIChjaCA+PSAweDMwLyogMCAqLyAmJiBjaCA8PSAweDM5LyogOSAqLykge1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgLy8gZm91bmQgdmFsaWQgbWFya2VyXG4gICAgaWYgKGNoID09PSAweDI5LyogKSAqLyB8fCBjaCA9PT0gMHgyZS8qIC4gKi8pIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIHJldHVybiAtMTtcbiAgfVxuXG5cbiAgaWYgKHBvcyA8IG1heCAmJiBzdGF0ZS5zcmMuY2hhckNvZGVBdChwb3MpICE9PSAweDIwLyogc3BhY2UgKi8pIHtcbiAgICAvLyBcIiAxLnRlc3QgXCIgLSBpcyBub3QgYSBsaXN0IGl0ZW1cbiAgICByZXR1cm4gLTE7XG4gIH1cbiAgcmV0dXJuIHBvcztcbn1cblxuZnVuY3Rpb24gbWFya1RpZ2h0UGFyYWdyYXBocyhzdGF0ZSwgaWR4KSB7XG4gIHZhciBpLCBsLFxuICAgICAgbGV2ZWwgPSBzdGF0ZS5sZXZlbCArIDI7XG5cbiAgZm9yIChpID0gaWR4ICsgMiwgbCA9IHN0YXRlLnRva2Vucy5sZW5ndGggLSAyOyBpIDwgbDsgaSsrKSB7XG4gICAgaWYgKHN0YXRlLnRva2Vuc1tpXS5sZXZlbCA9PT0gbGV2ZWwgJiYgc3RhdGUudG9rZW5zW2ldLnR5cGUgPT09ICdwYXJhZ3JhcGhfb3BlbicpIHtcbiAgICAgIHN0YXRlLnRva2Vuc1tpICsgMl0udGlnaHQgPSB0cnVlO1xuICAgICAgc3RhdGUudG9rZW5zW2ldLnRpZ2h0ID0gdHJ1ZTtcbiAgICAgIGkgKz0gMjtcbiAgICB9XG4gIH1cbn1cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGxpc3Qoc3RhdGUsIHN0YXJ0TGluZSwgZW5kTGluZSwgc2lsZW50KSB7XG4gIHZhciBuZXh0TGluZSxcbiAgICAgIGluZGVudCxcbiAgICAgIG9sZFRTaGlmdCxcbiAgICAgIG9sZEluZGVudCxcbiAgICAgIG9sZFRpZ2h0LFxuICAgICAgb2xkUGFyZW50VHlwZSxcbiAgICAgIHN0YXJ0LFxuICAgICAgcG9zQWZ0ZXJNYXJrZXIsXG4gICAgICBtYXgsXG4gICAgICBpbmRlbnRBZnRlck1hcmtlcixcbiAgICAgIG1hcmtlclZhbHVlLFxuICAgICAgbWFya2VyQ2hhckNvZGUsXG4gICAgICBpc09yZGVyZWQsXG4gICAgICBjb250ZW50U3RhcnQsXG4gICAgICBsaXN0VG9rSWR4LFxuICAgICAgcHJldkVtcHR5RW5kLFxuICAgICAgbGlzdExpbmVzLFxuICAgICAgaXRlbUxpbmVzLFxuICAgICAgdGlnaHQgPSB0cnVlLFxuICAgICAgdGVybWluYXRvclJ1bGVzLFxuICAgICAgaSwgbCwgdGVybWluYXRlO1xuXG4gIC8vIERldGVjdCBsaXN0IHR5cGUgYW5kIHBvc2l0aW9uIGFmdGVyIG1hcmtlclxuICBpZiAoKHBvc0FmdGVyTWFya2VyID0gc2tpcE9yZGVyZWRMaXN0TWFya2VyKHN0YXRlLCBzdGFydExpbmUpKSA+PSAwKSB7XG4gICAgaXNPcmRlcmVkID0gdHJ1ZTtcbiAgfSBlbHNlIGlmICgocG9zQWZ0ZXJNYXJrZXIgPSBza2lwQnVsbGV0TGlzdE1hcmtlcihzdGF0ZSwgc3RhcnRMaW5lKSkgPj0gMCkge1xuICAgIGlzT3JkZXJlZCA9IGZhbHNlO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmIChzdGF0ZS5sZXZlbCA+PSBzdGF0ZS5vcHRpb25zLm1heE5lc3RpbmcpIHsgcmV0dXJuIGZhbHNlOyB9XG5cbiAgLy8gV2Ugc2hvdWxkIHRlcm1pbmF0ZSBsaXN0IG9uIHN0eWxlIGNoYW5nZS4gUmVtZW1iZXIgZmlyc3Qgb25lIHRvIGNvbXBhcmUuXG4gIG1hcmtlckNoYXJDb2RlID0gc3RhdGUuc3JjLmNoYXJDb2RlQXQocG9zQWZ0ZXJNYXJrZXIgLSAxKTtcblxuICAvLyBGb3IgdmFsaWRhdGlvbiBtb2RlIHdlIGNhbiB0ZXJtaW5hdGUgaW1tZWRpYXRlbHlcbiAgaWYgKHNpbGVudCkgeyByZXR1cm4gdHJ1ZTsgfVxuXG4gIC8vIFN0YXJ0IGxpc3RcbiAgbGlzdFRva0lkeCA9IHN0YXRlLnRva2Vucy5sZW5ndGg7XG5cbiAgaWYgKGlzT3JkZXJlZCkge1xuICAgIHN0YXJ0ID0gc3RhdGUuYk1hcmtzW3N0YXJ0TGluZV0gKyBzdGF0ZS50U2hpZnRbc3RhcnRMaW5lXTtcbiAgICBtYXJrZXJWYWx1ZSA9IE51bWJlcihzdGF0ZS5zcmMuc3Vic3RyKHN0YXJ0LCBwb3NBZnRlck1hcmtlciAtIHN0YXJ0IC0gMSkpO1xuXG4gICAgc3RhdGUudG9rZW5zLnB1c2goe1xuICAgICAgdHlwZTogJ29yZGVyZWRfbGlzdF9vcGVuJyxcbiAgICAgIG9yZGVyOiBtYXJrZXJWYWx1ZSxcbiAgICAgIGxpbmVzOiBsaXN0TGluZXMgPSBbIHN0YXJ0TGluZSwgMCBdLFxuICAgICAgbGV2ZWw6IHN0YXRlLmxldmVsKytcbiAgICB9KTtcblxuICB9IGVsc2Uge1xuICAgIHN0YXRlLnRva2Vucy5wdXNoKHtcbiAgICAgIHR5cGU6ICdidWxsZXRfbGlzdF9vcGVuJyxcbiAgICAgIGxpbmVzOiBsaXN0TGluZXMgPSBbIHN0YXJ0TGluZSwgMCBdLFxuICAgICAgbGV2ZWw6IHN0YXRlLmxldmVsKytcbiAgICB9KTtcbiAgfVxuXG4gIC8vXG4gIC8vIEl0ZXJhdGUgbGlzdCBpdGVtc1xuICAvL1xuXG4gIG5leHRMaW5lID0gc3RhcnRMaW5lO1xuICBwcmV2RW1wdHlFbmQgPSBmYWxzZTtcbiAgdGVybWluYXRvclJ1bGVzID0gc3RhdGUucGFyc2VyLnJ1bGVyLmdldFJ1bGVzKCdsaXN0Jyk7XG5cbiAgd2hpbGUgKG5leHRMaW5lIDwgZW5kTGluZSkge1xuICAgIGNvbnRlbnRTdGFydCA9IHN0YXRlLnNraXBTcGFjZXMocG9zQWZ0ZXJNYXJrZXIpO1xuICAgIG1heCA9IHN0YXRlLmVNYXJrc1tuZXh0TGluZV07XG5cbiAgICBpZiAoY29udGVudFN0YXJ0ID49IG1heCkge1xuICAgICAgLy8gdHJpbW1pbmcgc3BhY2UgaW4gXCItICAgIFxcbiAgM1wiIGNhc2UsIGluZGVudCBpcyAxIGhlcmVcbiAgICAgIGluZGVudEFmdGVyTWFya2VyID0gMTtcbiAgICB9IGVsc2Uge1xuICAgICAgaW5kZW50QWZ0ZXJNYXJrZXIgPSBjb250ZW50U3RhcnQgLSBwb3NBZnRlck1hcmtlcjtcbiAgICB9XG5cbiAgICAvLyBJZiB3ZSBoYXZlIG1vcmUgdGhhbiA0IHNwYWNlcywgdGhlIGluZGVudCBpcyAxXG4gICAgLy8gKHRoZSByZXN0IGlzIGp1c3QgaW5kZW50ZWQgY29kZSBibG9jaylcbiAgICBpZiAoaW5kZW50QWZ0ZXJNYXJrZXIgPiA0KSB7IGluZGVudEFmdGVyTWFya2VyID0gMTsgfVxuXG4gICAgLy8gSWYgaW5kZW50IGlzIGxlc3MgdGhhbiAxLCBhc3N1bWUgdGhhdCBpdCdzIG9uZSwgZXhhbXBsZTpcbiAgICAvLyAgXCItXFxuICB0ZXN0XCJcbiAgICBpZiAoaW5kZW50QWZ0ZXJNYXJrZXIgPCAxKSB7IGluZGVudEFmdGVyTWFya2VyID0gMTsgfVxuXG4gICAgLy8gXCIgIC0gIHRlc3RcIlxuICAgIC8vICBeXl5eXiAtIGNhbGN1bGF0aW5nIHRvdGFsIGxlbmd0aCBvZiB0aGlzIHRoaW5nXG4gICAgaW5kZW50ID0gKHBvc0FmdGVyTWFya2VyIC0gc3RhdGUuYk1hcmtzW25leHRMaW5lXSkgKyBpbmRlbnRBZnRlck1hcmtlcjtcblxuICAgIC8vIFJ1biBzdWJwYXJzZXIgJiB3cml0ZSB0b2tlbnNcbiAgICBzdGF0ZS50b2tlbnMucHVzaCh7XG4gICAgICB0eXBlOiAnbGlzdF9pdGVtX29wZW4nLFxuICAgICAgbGluZXM6IGl0ZW1MaW5lcyA9IFsgc3RhcnRMaW5lLCAwIF0sXG4gICAgICBsZXZlbDogc3RhdGUubGV2ZWwrK1xuICAgIH0pO1xuXG4gICAgb2xkSW5kZW50ID0gc3RhdGUuYmxrSW5kZW50O1xuICAgIG9sZFRpZ2h0ID0gc3RhdGUudGlnaHQ7XG4gICAgb2xkVFNoaWZ0ID0gc3RhdGUudFNoaWZ0W3N0YXJ0TGluZV07XG4gICAgb2xkUGFyZW50VHlwZSA9IHN0YXRlLnBhcmVudFR5cGU7XG4gICAgc3RhdGUudFNoaWZ0W3N0YXJ0TGluZV0gPSBjb250ZW50U3RhcnQgLSBzdGF0ZS5iTWFya3Nbc3RhcnRMaW5lXTtcbiAgICBzdGF0ZS5ibGtJbmRlbnQgPSBpbmRlbnQ7XG4gICAgc3RhdGUudGlnaHQgPSB0cnVlO1xuICAgIHN0YXRlLnBhcmVudFR5cGUgPSAnbGlzdCc7XG5cbiAgICBzdGF0ZS5wYXJzZXIudG9rZW5pemUoc3RhdGUsIHN0YXJ0TGluZSwgZW5kTGluZSwgdHJ1ZSk7XG5cbiAgICAvLyBJZiBhbnkgb2YgbGlzdCBpdGVtIGlzIHRpZ2h0LCBtYXJrIGxpc3QgYXMgdGlnaHRcbiAgICBpZiAoIXN0YXRlLnRpZ2h0IHx8IHByZXZFbXB0eUVuZCkge1xuICAgICAgdGlnaHQgPSBmYWxzZTtcbiAgICB9XG4gICAgLy8gSXRlbSBiZWNvbWUgbG9vc2UgaWYgZmluaXNoIHdpdGggZW1wdHkgbGluZSxcbiAgICAvLyBidXQgd2Ugc2hvdWxkIGZpbHRlciBsYXN0IGVsZW1lbnQsIGJlY2F1c2UgaXQgbWVhbnMgbGlzdCBmaW5pc2hcbiAgICBwcmV2RW1wdHlFbmQgPSAoc3RhdGUubGluZSAtIHN0YXJ0TGluZSkgPiAxICYmIHN0YXRlLmlzRW1wdHkoc3RhdGUubGluZSAtIDEpO1xuXG4gICAgc3RhdGUuYmxrSW5kZW50ID0gb2xkSW5kZW50O1xuICAgIHN0YXRlLnRTaGlmdFtzdGFydExpbmVdID0gb2xkVFNoaWZ0O1xuICAgIHN0YXRlLnRpZ2h0ID0gb2xkVGlnaHQ7XG4gICAgc3RhdGUucGFyZW50VHlwZSA9IG9sZFBhcmVudFR5cGU7XG5cbiAgICBzdGF0ZS50b2tlbnMucHVzaCh7XG4gICAgICB0eXBlOiAnbGlzdF9pdGVtX2Nsb3NlJyxcbiAgICAgIGxldmVsOiAtLXN0YXRlLmxldmVsXG4gICAgfSk7XG5cbiAgICBuZXh0TGluZSA9IHN0YXJ0TGluZSA9IHN0YXRlLmxpbmU7XG4gICAgaXRlbUxpbmVzWzFdID0gbmV4dExpbmU7XG4gICAgY29udGVudFN0YXJ0ID0gc3RhdGUuYk1hcmtzW3N0YXJ0TGluZV07XG5cbiAgICBpZiAobmV4dExpbmUgPj0gZW5kTGluZSkgeyBicmVhazsgfVxuXG4gICAgaWYgKHN0YXRlLmlzRW1wdHkobmV4dExpbmUpKSB7XG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICAvL1xuICAgIC8vIFRyeSB0byBjaGVjayBpZiBsaXN0IGlzIHRlcm1pbmF0ZWQgb3IgY29udGludWVkLlxuICAgIC8vXG4gICAgaWYgKHN0YXRlLnRTaGlmdFtuZXh0TGluZV0gPCBzdGF0ZS5ibGtJbmRlbnQpIHsgYnJlYWs7IH1cblxuICAgIC8vIGZhaWwgaWYgdGVybWluYXRpbmcgYmxvY2sgZm91bmRcbiAgICB0ZXJtaW5hdGUgPSBmYWxzZTtcbiAgICBmb3IgKGkgPSAwLCBsID0gdGVybWluYXRvclJ1bGVzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgaWYgKHRlcm1pbmF0b3JSdWxlc1tpXShzdGF0ZSwgbmV4dExpbmUsIGVuZExpbmUsIHRydWUpKSB7XG4gICAgICAgIHRlcm1pbmF0ZSA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAodGVybWluYXRlKSB7IGJyZWFrOyB9XG5cbiAgICAvLyBmYWlsIGlmIGxpc3QgaGFzIGFub3RoZXIgdHlwZVxuICAgIGlmIChpc09yZGVyZWQpIHtcbiAgICAgIHBvc0FmdGVyTWFya2VyID0gc2tpcE9yZGVyZWRMaXN0TWFya2VyKHN0YXRlLCBuZXh0TGluZSk7XG4gICAgICBpZiAocG9zQWZ0ZXJNYXJrZXIgPCAwKSB7IGJyZWFrOyB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHBvc0FmdGVyTWFya2VyID0gc2tpcEJ1bGxldExpc3RNYXJrZXIoc3RhdGUsIG5leHRMaW5lKTtcbiAgICAgIGlmIChwb3NBZnRlck1hcmtlciA8IDApIHsgYnJlYWs7IH1cbiAgICB9XG5cbiAgICBpZiAobWFya2VyQ2hhckNvZGUgIT09IHN0YXRlLnNyYy5jaGFyQ29kZUF0KHBvc0FmdGVyTWFya2VyIC0gMSkpIHsgYnJlYWs7IH1cbiAgfVxuXG4gIC8vIEZpbmlsaXplIGxpc3RcbiAgc3RhdGUudG9rZW5zLnB1c2goe1xuICAgIHR5cGU6IGlzT3JkZXJlZCA/ICdvcmRlcmVkX2xpc3RfY2xvc2UnIDogJ2J1bGxldF9saXN0X2Nsb3NlJyxcbiAgICBsZXZlbDogLS1zdGF0ZS5sZXZlbFxuICB9KTtcbiAgbGlzdExpbmVzWzFdID0gbmV4dExpbmU7XG5cbiAgc3RhdGUubGluZSA9IG5leHRMaW5lO1xuXG4gIC8vIG1hcmsgcGFyYWdyYXBocyB0aWdodCBpZiBuZWVkZWRcbiAgaWYgKHRpZ2h0KSB7XG4gICAgbWFya1RpZ2h0UGFyYWdyYXBocyhzdGF0ZSwgbGlzdFRva0lkeCk7XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn07XG4iLCIvLyBQYXJhZ3JhcGhcblxuJ3VzZSBzdHJpY3QnO1xuXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gcGFyYWdyYXBoKHN0YXRlLCBzdGFydExpbmUvKiwgZW5kTGluZSovKSB7XG4gIHZhciBlbmRMaW5lLCBjb250ZW50LCB0ZXJtaW5hdGUsIGksIGwsXG4gICAgICBuZXh0TGluZSA9IHN0YXJ0TGluZSArIDEsXG4gICAgICB0ZXJtaW5hdG9yUnVsZXM7XG5cbiAgZW5kTGluZSA9IHN0YXRlLmxpbmVNYXg7XG5cbiAgLy8ganVtcCBsaW5lLWJ5LWxpbmUgdW50aWwgZW1wdHkgb25lIG9yIEVPRlxuICBpZiAobmV4dExpbmUgPCBlbmRMaW5lICYmICFzdGF0ZS5pc0VtcHR5KG5leHRMaW5lKSkge1xuICAgIHRlcm1pbmF0b3JSdWxlcyA9IHN0YXRlLnBhcnNlci5ydWxlci5nZXRSdWxlcygncGFyYWdyYXBoJyk7XG5cbiAgICBmb3IgKDsgbmV4dExpbmUgPCBlbmRMaW5lICYmICFzdGF0ZS5pc0VtcHR5KG5leHRMaW5lKTsgbmV4dExpbmUrKykge1xuICAgICAgLy8gdGhpcyB3b3VsZCBiZSBhIGNvZGUgYmxvY2sgbm9ybWFsbHksIGJ1dCBhZnRlciBwYXJhZ3JhcGhcbiAgICAgIC8vIGl0J3MgY29uc2lkZXJlZCBhIGxhenkgY29udGludWF0aW9uIHJlZ2FyZGxlc3Mgb2Ygd2hhdCdzIHRoZXJlXG4gICAgICBpZiAoc3RhdGUudFNoaWZ0W25leHRMaW5lXSAtIHN0YXRlLmJsa0luZGVudCA+IDMpIHsgY29udGludWU7IH1cblxuICAgICAgLy8gU29tZSB0YWdzIGNhbiB0ZXJtaW5hdGUgcGFyYWdyYXBoIHdpdGhvdXQgZW1wdHkgbGluZS5cbiAgICAgIHRlcm1pbmF0ZSA9IGZhbHNlO1xuICAgICAgZm9yIChpID0gMCwgbCA9IHRlcm1pbmF0b3JSdWxlcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgaWYgKHRlcm1pbmF0b3JSdWxlc1tpXShzdGF0ZSwgbmV4dExpbmUsIGVuZExpbmUsIHRydWUpKSB7XG4gICAgICAgICAgdGVybWluYXRlID0gdHJ1ZTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHRlcm1pbmF0ZSkgeyBicmVhazsgfVxuICAgIH1cbiAgfVxuXG4gIGNvbnRlbnQgPSBzdGF0ZS5nZXRMaW5lcyhzdGFydExpbmUsIG5leHRMaW5lLCBzdGF0ZS5ibGtJbmRlbnQsIGZhbHNlKS50cmltKCk7XG5cbiAgc3RhdGUubGluZSA9IG5leHRMaW5lO1xuICBpZiAoY29udGVudC5sZW5ndGgpIHtcbiAgICBzdGF0ZS50b2tlbnMucHVzaCh7XG4gICAgICB0eXBlOiAncGFyYWdyYXBoX29wZW4nLFxuICAgICAgdGlnaHQ6IGZhbHNlLFxuICAgICAgbGluZXM6IFsgc3RhcnRMaW5lLCBzdGF0ZS5saW5lIF0sXG4gICAgICBsZXZlbDogc3RhdGUubGV2ZWxcbiAgICB9KTtcbiAgICBzdGF0ZS50b2tlbnMucHVzaCh7XG4gICAgICB0eXBlOiAnaW5saW5lJyxcbiAgICAgIGNvbnRlbnQ6IGNvbnRlbnQsXG4gICAgICBsZXZlbDogc3RhdGUubGV2ZWwgKyAxLFxuICAgICAgbGluZXM6IFsgc3RhcnRMaW5lLCBzdGF0ZS5saW5lIF0sXG4gICAgICBjaGlsZHJlbjogW11cbiAgICB9KTtcbiAgICBzdGF0ZS50b2tlbnMucHVzaCh7XG4gICAgICB0eXBlOiAncGFyYWdyYXBoX2Nsb3NlJyxcbiAgICAgIHRpZ2h0OiBmYWxzZSxcbiAgICAgIGxldmVsOiBzdGF0ZS5sZXZlbFxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59O1xuIiwiLy8gUGFyc2VyIHN0YXRlIGNsYXNzXG5cbid1c2Ugc3RyaWN0JztcblxuXG5mdW5jdGlvbiBTdGF0ZUJsb2NrKHNyYywgcGFyc2VyLCBvcHRpb25zLCBlbnYsIHRva2Vucykge1xuICB2YXIgY2gsIHMsIHN0YXJ0LCBwb3MsIGxlbiwgaW5kZW50LCBpbmRlbnRfZm91bmQ7XG5cbiAgdGhpcy5zcmMgPSBzcmM7XG5cbiAgLy8gU2hvcnRjdXRzIHRvIHNpbXBsaWZ5IG5lc3RlZCBjYWxsc1xuICB0aGlzLnBhcnNlciA9IHBhcnNlcjtcblxuICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuXG4gIHRoaXMuZW52ID0gZW52O1xuXG4gIC8vXG4gIC8vIEludGVybmFsIHN0YXRlIHZhcnRpYWJsZXNcbiAgLy9cblxuICB0aGlzLnRva2VucyA9IHRva2VucztcblxuICB0aGlzLmJNYXJrcyA9IFtdOyAgLy8gbGluZSBiZWdpbiBvZmZzZXRzIGZvciBmYXN0IGp1bXBzXG4gIHRoaXMuZU1hcmtzID0gW107ICAvLyBsaW5lIGVuZCBvZmZzZXRzIGZvciBmYXN0IGp1bXBzXG4gIHRoaXMudFNoaWZ0ID0gW107ICAvLyBpbmRlbnQgZm9yIGVhY2ggbGluZVxuXG4gIC8vIGJsb2NrIHBhcnNlciB2YXJpYWJsZXNcbiAgdGhpcy5ibGtJbmRlbnQgID0gMDsgLy8gcmVxdWlyZWQgYmxvY2sgY29udGVudCBpbmRlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgLy8gKGZvciBleGFtcGxlLCBpZiB3ZSBhcmUgaW4gbGlzdClcbiAgdGhpcy5saW5lICAgICAgID0gMDsgLy8gbGluZSBpbmRleCBpbiBzcmNcbiAgdGhpcy5saW5lTWF4ICAgID0gMDsgLy8gbGluZXMgY291bnRcbiAgdGhpcy50aWdodCAgICAgID0gZmFsc2U7ICAvLyBsb29zZS90aWdodCBtb2RlIGZvciBsaXN0c1xuICB0aGlzLnBhcmVudFR5cGUgPSAncm9vdCc7IC8vIGlmIGBsaXN0YCwgYmxvY2sgcGFyc2VyIHN0b3BzIG9uIHR3byBuZXdsaW5lc1xuICB0aGlzLmRkSW5kZW50ICAgPSAtMTsgLy8gaW5kZW50IG9mIHRoZSBjdXJyZW50IGRkIGJsb2NrICgtMSBpZiB0aGVyZSBpc24ndCBhbnkpXG5cbiAgdGhpcy5sZXZlbCA9IDA7XG5cbiAgLy8gcmVuZGVyZXJcbiAgdGhpcy5yZXN1bHQgPSAnJztcblxuICAvLyBDcmVhdGUgY2FjaGVzXG4gIC8vIEdlbmVyYXRlIG1hcmtlcnMuXG4gIHMgPSB0aGlzLnNyYztcbiAgaW5kZW50ID0gMDtcbiAgaW5kZW50X2ZvdW5kID0gZmFsc2U7XG5cbiAgZm9yIChzdGFydCA9IHBvcyA9IGluZGVudCA9IDAsIGxlbiA9IHMubGVuZ3RoOyBwb3MgPCBsZW47IHBvcysrKSB7XG4gICAgY2ggPSBzLmNoYXJDb2RlQXQocG9zKTtcblxuICAgIGlmICghaW5kZW50X2ZvdW5kKSB7XG4gICAgICBpZiAoY2ggPT09IDB4MjAvKiBzcGFjZSAqLykge1xuICAgICAgICBpbmRlbnQrKztcbiAgICAgICAgY29udGludWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpbmRlbnRfZm91bmQgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChjaCA9PT0gMHgwQSB8fCBwb3MgPT09IGxlbiAtIDEpIHtcbiAgICAgIGlmIChjaCAhPT0gMHgwQSkgeyBwb3MrKzsgfVxuICAgICAgdGhpcy5iTWFya3MucHVzaChzdGFydCk7XG4gICAgICB0aGlzLmVNYXJrcy5wdXNoKHBvcyk7XG4gICAgICB0aGlzLnRTaGlmdC5wdXNoKGluZGVudCk7XG5cbiAgICAgIGluZGVudF9mb3VuZCA9IGZhbHNlO1xuICAgICAgaW5kZW50ID0gMDtcbiAgICAgIHN0YXJ0ID0gcG9zICsgMTtcbiAgICB9XG4gIH1cblxuICAvLyBQdXNoIGZha2UgZW50cnkgdG8gc2ltcGxpZnkgY2FjaGUgYm91bmRzIGNoZWNrc1xuICB0aGlzLmJNYXJrcy5wdXNoKHMubGVuZ3RoKTtcbiAgdGhpcy5lTWFya3MucHVzaChzLmxlbmd0aCk7XG4gIHRoaXMudFNoaWZ0LnB1c2goMCk7XG5cbiAgdGhpcy5saW5lTWF4ID0gdGhpcy5iTWFya3MubGVuZ3RoIC0gMTsgLy8gZG9uJ3QgY291bnQgbGFzdCBmYWtlIGxpbmVcbn1cblxuU3RhdGVCbG9jay5wcm90b3R5cGUuaXNFbXB0eSA9IGZ1bmN0aW9uIGlzRW1wdHkobGluZSkge1xuICByZXR1cm4gdGhpcy5iTWFya3NbbGluZV0gKyB0aGlzLnRTaGlmdFtsaW5lXSA+PSB0aGlzLmVNYXJrc1tsaW5lXTtcbn07XG5cblN0YXRlQmxvY2sucHJvdG90eXBlLnNraXBFbXB0eUxpbmVzID0gZnVuY3Rpb24gc2tpcEVtcHR5TGluZXMoZnJvbSkge1xuICBmb3IgKHZhciBtYXggPSB0aGlzLmxpbmVNYXg7IGZyb20gPCBtYXg7IGZyb20rKykge1xuICAgIGlmICh0aGlzLmJNYXJrc1tmcm9tXSArIHRoaXMudFNoaWZ0W2Zyb21dIDwgdGhpcy5lTWFya3NbZnJvbV0pIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZnJvbTtcbn07XG5cbi8vIFNraXAgc3BhY2VzIGZyb20gZ2l2ZW4gcG9zaXRpb24uXG5TdGF0ZUJsb2NrLnByb3RvdHlwZS5za2lwU3BhY2VzID0gZnVuY3Rpb24gc2tpcFNwYWNlcyhwb3MpIHtcbiAgZm9yICh2YXIgbWF4ID0gdGhpcy5zcmMubGVuZ3RoOyBwb3MgPCBtYXg7IHBvcysrKSB7XG4gICAgaWYgKHRoaXMuc3JjLmNoYXJDb2RlQXQocG9zKSAhPT0gMHgyMC8qIHNwYWNlICovKSB7IGJyZWFrOyB9XG4gIH1cbiAgcmV0dXJuIHBvcztcbn07XG5cbi8vIFNraXAgY2hhciBjb2RlcyBmcm9tIGdpdmVuIHBvc2l0aW9uXG5TdGF0ZUJsb2NrLnByb3RvdHlwZS5za2lwQ2hhcnMgPSBmdW5jdGlvbiBza2lwQ2hhcnMocG9zLCBjb2RlKSB7XG4gIGZvciAodmFyIG1heCA9IHRoaXMuc3JjLmxlbmd0aDsgcG9zIDwgbWF4OyBwb3MrKykge1xuICAgIGlmICh0aGlzLnNyYy5jaGFyQ29kZUF0KHBvcykgIT09IGNvZGUpIHsgYnJlYWs7IH1cbiAgfVxuICByZXR1cm4gcG9zO1xufTtcblxuLy8gU2tpcCBjaGFyIGNvZGVzIHJldmVyc2UgZnJvbSBnaXZlbiBwb3NpdGlvbiAtIDFcblN0YXRlQmxvY2sucHJvdG90eXBlLnNraXBDaGFyc0JhY2sgPSBmdW5jdGlvbiBza2lwQ2hhcnNCYWNrKHBvcywgY29kZSwgbWluKSB7XG4gIGlmIChwb3MgPD0gbWluKSB7IHJldHVybiBwb3M7IH1cblxuICB3aGlsZSAocG9zID4gbWluKSB7XG4gICAgaWYgKGNvZGUgIT09IHRoaXMuc3JjLmNoYXJDb2RlQXQoLS1wb3MpKSB7IHJldHVybiBwb3MgKyAxOyB9XG4gIH1cbiAgcmV0dXJuIHBvcztcbn07XG5cbi8vIGN1dCBsaW5lcyByYW5nZSBmcm9tIHNvdXJjZS5cblN0YXRlQmxvY2sucHJvdG90eXBlLmdldExpbmVzID0gZnVuY3Rpb24gZ2V0TGluZXMoYmVnaW4sIGVuZCwgaW5kZW50LCBrZWVwTGFzdExGKSB7XG4gIHZhciBpLCBmaXJzdCwgbGFzdCwgcXVldWUsIHNoaWZ0LFxuICAgICAgbGluZSA9IGJlZ2luO1xuXG4gIGlmIChiZWdpbiA+PSBlbmQpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICAvLyBPcHQ6IGRvbid0IHVzZSBwdXNoIHF1ZXVlIGZvciBzaW5nbGUgbGluZTtcbiAgaWYgKGxpbmUgKyAxID09PSBlbmQpIHtcbiAgICBmaXJzdCA9IHRoaXMuYk1hcmtzW2xpbmVdICsgTWF0aC5taW4odGhpcy50U2hpZnRbbGluZV0sIGluZGVudCk7XG4gICAgbGFzdCA9IGtlZXBMYXN0TEYgPyB0aGlzLmJNYXJrc1tlbmRdIDogdGhpcy5lTWFya3NbZW5kIC0gMV07XG4gICAgcmV0dXJuIHRoaXMuc3JjLnNsaWNlKGZpcnN0LCBsYXN0KTtcbiAgfVxuXG4gIHF1ZXVlID0gbmV3IEFycmF5KGVuZCAtIGJlZ2luKTtcblxuICBmb3IgKGkgPSAwOyBsaW5lIDwgZW5kOyBsaW5lKyssIGkrKykge1xuICAgIHNoaWZ0ID0gdGhpcy50U2hpZnRbbGluZV07XG4gICAgaWYgKHNoaWZ0ID4gaW5kZW50KSB7IHNoaWZ0ID0gaW5kZW50OyB9XG4gICAgaWYgKHNoaWZ0IDwgMCkgeyBzaGlmdCA9IDA7IH1cblxuICAgIGZpcnN0ID0gdGhpcy5iTWFya3NbbGluZV0gKyBzaGlmdDtcblxuICAgIGlmIChsaW5lICsgMSA8IGVuZCB8fCBrZWVwTGFzdExGKSB7XG4gICAgICAvLyBObyBuZWVkIGZvciBib3VuZHMgY2hlY2sgYmVjYXVzZSB3ZSBoYXZlIGZha2UgZW50cnkgb24gdGFpbC5cbiAgICAgIGxhc3QgPSB0aGlzLmVNYXJrc1tsaW5lXSArIDE7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxhc3QgPSB0aGlzLmVNYXJrc1tsaW5lXTtcbiAgICB9XG5cbiAgICBxdWV1ZVtpXSA9IHRoaXMuc3JjLnNsaWNlKGZpcnN0LCBsYXN0KTtcbiAgfVxuXG4gIHJldHVybiBxdWV1ZS5qb2luKCcnKTtcbn07XG5cblxubW9kdWxlLmV4cG9ydHMgPSBTdGF0ZUJsb2NrO1xuIiwiLy8gR0ZNIHRhYmxlLCBub24tc3RhbmRhcmRcblxuJ3VzZSBzdHJpY3QnO1xuXG5cbmZ1bmN0aW9uIGdldExpbmUoc3RhdGUsIGxpbmUpIHtcbiAgdmFyIHBvcyA9IHN0YXRlLmJNYXJrc1tsaW5lXSArIHN0YXRlLmJsa0luZGVudCxcbiAgICAgIG1heCA9IHN0YXRlLmVNYXJrc1tsaW5lXTtcblxuICByZXR1cm4gc3RhdGUuc3JjLnN1YnN0cihwb3MsIG1heCAtIHBvcyk7XG59XG5cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiB0YWJsZShzdGF0ZSwgc3RhcnRMaW5lLCBlbmRMaW5lLCBzaWxlbnQpIHtcbiAgdmFyIGNoLCBsaW5lVGV4dCwgcG9zLCBpLCBuZXh0TGluZSwgcm93cyxcbiAgICAgIGFsaWducywgdCwgdGFibGVMaW5lcywgdGJvZHlMaW5lcztcblxuICAvLyBzaG91bGQgaGF2ZSBhdCBsZWFzdCB0aHJlZSBsaW5lc1xuICBpZiAoc3RhcnRMaW5lICsgMiA+IGVuZExpbmUpIHsgcmV0dXJuIGZhbHNlOyB9XG5cbiAgbmV4dExpbmUgPSBzdGFydExpbmUgKyAxO1xuXG4gIGlmIChzdGF0ZS50U2hpZnRbbmV4dExpbmVdIDwgc3RhdGUuYmxrSW5kZW50KSB7IHJldHVybiBmYWxzZTsgfVxuXG4gIC8vIGZpcnN0IGNoYXJhY3RlciBvZiB0aGUgc2Vjb25kIGxpbmUgc2hvdWxkIGJlICd8JyBvciAnLSdcblxuICBwb3MgPSBzdGF0ZS5iTWFya3NbbmV4dExpbmVdICsgc3RhdGUudFNoaWZ0W25leHRMaW5lXTtcbiAgaWYgKHBvcyA+PSBzdGF0ZS5lTWFya3NbbmV4dExpbmVdKSB7IHJldHVybiBmYWxzZTsgfVxuXG4gIGNoID0gc3RhdGUuc3JjLmNoYXJDb2RlQXQocG9zKTtcbiAgaWYgKGNoICE9PSAweDdDLyogfCAqLyAmJiBjaCAhPT0gMHgyRC8qIC0gKi8gJiYgY2ggIT09IDB4M0EvKiA6ICovKSB7IHJldHVybiBmYWxzZTsgfVxuXG4gIGxpbmVUZXh0ID0gZ2V0TGluZShzdGF0ZSwgc3RhcnRMaW5lICsgMSk7XG4gIGlmICghL15bLTp8IF0rJC8udGVzdChsaW5lVGV4dCkpIHsgcmV0dXJuIGZhbHNlOyB9XG5cbiAgcm93cyA9IGxpbmVUZXh0LnNwbGl0KCd8Jyk7XG4gIGlmIChyb3dzIDw9IDIpIHsgcmV0dXJuIGZhbHNlOyB9XG4gIGFsaWducyA9IFtdO1xuICBmb3IgKGkgPSAwOyBpIDwgcm93cy5sZW5ndGg7IGkrKykge1xuICAgIHQgPSByb3dzW2ldLnRyaW0oKTtcbiAgICBpZiAoIXQpIHtcbiAgICAgIC8vIGFsbG93IGVtcHR5IGNvbHVtbnMgYmVmb3JlIGFuZCBhZnRlciB0YWJsZSwgYnV0IG5vdCBpbiBiZXR3ZWVuIGNvbHVtbnM7XG4gICAgICAvLyBlLmcuIGFsbG93IGAgfC0tLXwgYCwgZGlzYWxsb3cgYCAtLS18fC0tLSBgXG4gICAgICBpZiAoaSA9PT0gMCB8fCBpID09PSByb3dzLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCEvXjo/LSs6PyQvLnRlc3QodCkpIHsgcmV0dXJuIGZhbHNlOyB9XG4gICAgaWYgKHQuY2hhckNvZGVBdCh0Lmxlbmd0aCAtIDEpID09PSAweDNBLyogOiAqLykge1xuICAgICAgYWxpZ25zLnB1c2godC5jaGFyQ29kZUF0KDApID09PSAweDNBLyogOiAqLyA/ICdjZW50ZXInIDogJ3JpZ2h0Jyk7XG4gICAgfSBlbHNlIGlmICh0LmNoYXJDb2RlQXQoMCkgPT09IDB4M0EvKiA6ICovKSB7XG4gICAgICBhbGlnbnMucHVzaCgnbGVmdCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICBhbGlnbnMucHVzaCgnJyk7XG4gICAgfVxuICB9XG5cbiAgbGluZVRleHQgPSBnZXRMaW5lKHN0YXRlLCBzdGFydExpbmUpLnRyaW0oKTtcbiAgaWYgKGxpbmVUZXh0LmluZGV4T2YoJ3wnKSA9PT0gLTEpIHsgcmV0dXJuIGZhbHNlOyB9XG4gIHJvd3MgPSBsaW5lVGV4dC5yZXBsYWNlKC9eXFx8fFxcfCQvZywgJycpLnNwbGl0KCd8Jyk7XG4gIGlmIChhbGlnbnMubGVuZ3RoICE9PSByb3dzLmxlbmd0aCkgeyByZXR1cm4gZmFsc2U7IH1cbiAgaWYgKHNpbGVudCkgeyByZXR1cm4gdHJ1ZTsgfVxuXG4gIHN0YXRlLnRva2Vucy5wdXNoKHtcbiAgICB0eXBlOiAndGFibGVfb3BlbicsXG4gICAgbGluZXM6IHRhYmxlTGluZXMgPSBbIHN0YXJ0TGluZSwgMCBdLFxuICAgIGxldmVsOiBzdGF0ZS5sZXZlbCsrXG4gIH0pO1xuICBzdGF0ZS50b2tlbnMucHVzaCh7XG4gICAgdHlwZTogJ3RoZWFkX29wZW4nLFxuICAgIGxpbmVzOiBbIHN0YXJ0TGluZSwgc3RhcnRMaW5lICsgMSBdLFxuICAgIGxldmVsOiBzdGF0ZS5sZXZlbCsrXG4gIH0pO1xuXG4gIHN0YXRlLnRva2Vucy5wdXNoKHtcbiAgICB0eXBlOiAndHJfb3BlbicsXG4gICAgbGluZXM6IFsgc3RhcnRMaW5lLCBzdGFydExpbmUgKyAxIF0sXG4gICAgbGV2ZWw6IHN0YXRlLmxldmVsKytcbiAgfSk7XG4gIGZvciAoaSA9IDA7IGkgPCByb3dzLmxlbmd0aDsgaSsrKSB7XG4gICAgc3RhdGUudG9rZW5zLnB1c2goe1xuICAgICAgdHlwZTogJ3RoX29wZW4nLFxuICAgICAgYWxpZ246IGFsaWduc1tpXSxcbiAgICAgIGxpbmVzOiBbIHN0YXJ0TGluZSwgc3RhcnRMaW5lICsgMSBdLFxuICAgICAgbGV2ZWw6IHN0YXRlLmxldmVsKytcbiAgICB9KTtcbiAgICBzdGF0ZS50b2tlbnMucHVzaCh7XG4gICAgICB0eXBlOiAnaW5saW5lJyxcbiAgICAgIGNvbnRlbnQ6IHJvd3NbaV0udHJpbSgpLFxuICAgICAgbGluZXM6IFsgc3RhcnRMaW5lLCBzdGFydExpbmUgKyAxIF0sXG4gICAgICBsZXZlbDogc3RhdGUubGV2ZWwsXG4gICAgICBjaGlsZHJlbjogW11cbiAgICB9KTtcbiAgICBzdGF0ZS50b2tlbnMucHVzaCh7IHR5cGU6ICd0aF9jbG9zZScsIGxldmVsOiAtLXN0YXRlLmxldmVsIH0pO1xuICB9XG4gIHN0YXRlLnRva2Vucy5wdXNoKHsgdHlwZTogJ3RyX2Nsb3NlJywgbGV2ZWw6IC0tc3RhdGUubGV2ZWwgfSk7XG4gIHN0YXRlLnRva2Vucy5wdXNoKHsgdHlwZTogJ3RoZWFkX2Nsb3NlJywgbGV2ZWw6IC0tc3RhdGUubGV2ZWwgfSk7XG5cbiAgc3RhdGUudG9rZW5zLnB1c2goe1xuICAgIHR5cGU6ICd0Ym9keV9vcGVuJyxcbiAgICBsaW5lczogdGJvZHlMaW5lcyA9IFsgc3RhcnRMaW5lICsgMiwgMCBdLFxuICAgIGxldmVsOiBzdGF0ZS5sZXZlbCsrXG4gIH0pO1xuXG4gIGZvciAobmV4dExpbmUgPSBzdGFydExpbmUgKyAyOyBuZXh0TGluZSA8IGVuZExpbmU7IG5leHRMaW5lKyspIHtcbiAgICBpZiAoc3RhdGUudFNoaWZ0W25leHRMaW5lXSA8IHN0YXRlLmJsa0luZGVudCkgeyBicmVhazsgfVxuXG4gICAgbGluZVRleHQgPSBnZXRMaW5lKHN0YXRlLCBuZXh0TGluZSkudHJpbSgpO1xuICAgIGlmIChsaW5lVGV4dC5pbmRleE9mKCd8JykgPT09IC0xKSB7IGJyZWFrOyB9XG4gICAgcm93cyA9IGxpbmVUZXh0LnJlcGxhY2UoL15cXHx8XFx8JC9nLCAnJykuc3BsaXQoJ3wnKTtcblxuICAgIHN0YXRlLnRva2Vucy5wdXNoKHsgdHlwZTogJ3RyX29wZW4nLCBsZXZlbDogc3RhdGUubGV2ZWwrKyB9KTtcbiAgICBmb3IgKGkgPSAwOyBpIDwgcm93cy5sZW5ndGg7IGkrKykge1xuICAgICAgc3RhdGUudG9rZW5zLnB1c2goeyB0eXBlOiAndGRfb3BlbicsIGFsaWduOiBhbGlnbnNbaV0sIGxldmVsOiBzdGF0ZS5sZXZlbCsrIH0pO1xuICAgICAgc3RhdGUudG9rZW5zLnB1c2goe1xuICAgICAgICB0eXBlOiAnaW5saW5lJyxcbiAgICAgICAgY29udGVudDogcm93c1tpXS5yZXBsYWNlKC9eXFx8PyAqfCAqXFx8PyQvZywgJycpLFxuICAgICAgICBsZXZlbDogc3RhdGUubGV2ZWwsXG4gICAgICAgIGNoaWxkcmVuOiBbXVxuICAgICAgfSk7XG4gICAgICBzdGF0ZS50b2tlbnMucHVzaCh7IHR5cGU6ICd0ZF9jbG9zZScsIGxldmVsOiAtLXN0YXRlLmxldmVsIH0pO1xuICAgIH1cbiAgICBzdGF0ZS50b2tlbnMucHVzaCh7IHR5cGU6ICd0cl9jbG9zZScsIGxldmVsOiAtLXN0YXRlLmxldmVsIH0pO1xuICB9XG4gIHN0YXRlLnRva2Vucy5wdXNoKHsgdHlwZTogJ3Rib2R5X2Nsb3NlJywgbGV2ZWw6IC0tc3RhdGUubGV2ZWwgfSk7XG4gIHN0YXRlLnRva2Vucy5wdXNoKHsgdHlwZTogJ3RhYmxlX2Nsb3NlJywgbGV2ZWw6IC0tc3RhdGUubGV2ZWwgfSk7XG5cbiAgdGFibGVMaW5lc1sxXSA9IHRib2R5TGluZXNbMV0gPSBuZXh0TGluZTtcbiAgc3RhdGUubGluZSA9IG5leHRMaW5lO1xuICByZXR1cm4gdHJ1ZTtcbn07XG4iLCIvLyBQYXJzZSBhYmJyZXZpYXRpb24gZGVmaW5pdGlvbnMsIGkuZS4gYCpbYWJicl06IGRlc2NyaXB0aW9uYFxuLy9cblxuJ3VzZSBzdHJpY3QnO1xuXG5cbnZhciBTdGF0ZUlubGluZSAgICA9IHJlcXVpcmUoJy4uL3J1bGVzX2lubGluZS9zdGF0ZV9pbmxpbmUnKTtcbnZhciBwYXJzZUxpbmtMYWJlbCA9IHJlcXVpcmUoJy4uL2hlbHBlcnMvcGFyc2VfbGlua19sYWJlbCcpO1xuXG5cbmZ1bmN0aW9uIHBhcnNlQWJicihzdHIsIHBhcnNlcklubGluZSwgb3B0aW9ucywgZW52KSB7XG4gIHZhciBzdGF0ZSwgbGFiZWxFbmQsIHBvcywgbWF4LCBsYWJlbCwgdGl0bGU7XG5cbiAgaWYgKHN0ci5jaGFyQ29kZUF0KDApICE9PSAweDJBLyogKiAqLykgeyByZXR1cm4gLTE7IH1cbiAgaWYgKHN0ci5jaGFyQ29kZUF0KDEpICE9PSAweDVCLyogWyAqLykgeyByZXR1cm4gLTE7IH1cblxuICBpZiAoc3RyLmluZGV4T2YoJ106JykgPT09IC0xKSB7IHJldHVybiAtMTsgfVxuXG4gIHN0YXRlID0gbmV3IFN0YXRlSW5saW5lKHN0ciwgcGFyc2VySW5saW5lLCBvcHRpb25zLCBlbnYsIFtdKTtcbiAgbGFiZWxFbmQgPSBwYXJzZUxpbmtMYWJlbChzdGF0ZSwgMSk7XG5cbiAgaWYgKGxhYmVsRW5kIDwgMCB8fCBzdHIuY2hhckNvZGVBdChsYWJlbEVuZCArIDEpICE9PSAweDNBLyogOiAqLykgeyByZXR1cm4gLTE7IH1cblxuICBtYXggPSBzdGF0ZS5wb3NNYXg7XG5cbiAgLy8gYWJiciB0aXRsZSBpcyBhbHdheXMgb25lIGxpbmUsIHNvIGxvb2tpbmcgZm9yIGVuZGluZyBcIlxcblwiIGhlcmVcbiAgZm9yIChwb3MgPSBsYWJlbEVuZCArIDI7IHBvcyA8IG1heDsgcG9zKyspIHtcbiAgICBpZiAoc3RhdGUuc3JjLmNoYXJDb2RlQXQocG9zKSA9PT0gMHgwQSkgeyBicmVhazsgfVxuICB9XG5cbiAgbGFiZWwgPSBzdHIuc2xpY2UoMiwgbGFiZWxFbmQpO1xuICB0aXRsZSA9IHN0ci5zbGljZShsYWJlbEVuZCArIDIsIHBvcykudHJpbSgpO1xuICBpZiAodGl0bGUubGVuZ3RoID09PSAwKSB7IHJldHVybiAtMTsgfVxuICBpZiAoIWVudi5hYmJyZXZpYXRpb25zKSB7IGVudi5hYmJyZXZpYXRpb25zID0ge307IH1cbiAgLy8gcHJlcGVuZCAnOicgdG8gYXZvaWQgY29uZmxpY3Qgd2l0aCBPYmplY3QucHJvdG90eXBlIG1lbWJlcnNcbiAgaWYgKHR5cGVvZiBlbnYuYWJicmV2aWF0aW9uc1snOicgKyBsYWJlbF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgZW52LmFiYnJldmlhdGlvbnNbJzonICsgbGFiZWxdID0gdGl0bGU7XG4gIH1cblxuICByZXR1cm4gcG9zO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGFiYnIoc3RhdGUpIHtcbiAgdmFyIHRva2VucyA9IHN0YXRlLnRva2VucywgaSwgbCwgY29udGVudCwgcG9zO1xuXG4gIGlmIChzdGF0ZS5pbmxpbmVNb2RlKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gUGFyc2UgaW5saW5lc1xuICBmb3IgKGkgPSAxLCBsID0gdG9rZW5zLmxlbmd0aCAtIDE7IGkgPCBsOyBpKyspIHtcbiAgICBpZiAodG9rZW5zW2kgLSAxXS50eXBlID09PSAncGFyYWdyYXBoX29wZW4nICYmXG4gICAgICAgIHRva2Vuc1tpXS50eXBlID09PSAnaW5saW5lJyAmJlxuICAgICAgICB0b2tlbnNbaSArIDFdLnR5cGUgPT09ICdwYXJhZ3JhcGhfY2xvc2UnKSB7XG5cbiAgICAgIGNvbnRlbnQgPSB0b2tlbnNbaV0uY29udGVudDtcbiAgICAgIHdoaWxlIChjb250ZW50Lmxlbmd0aCkge1xuICAgICAgICBwb3MgPSBwYXJzZUFiYnIoY29udGVudCwgc3RhdGUuaW5saW5lLCBzdGF0ZS5vcHRpb25zLCBzdGF0ZS5lbnYpO1xuICAgICAgICBpZiAocG9zIDwgMCkgeyBicmVhazsgfVxuICAgICAgICBjb250ZW50ID0gY29udGVudC5zbGljZShwb3MpLnRyaW0oKTtcbiAgICAgIH1cblxuICAgICAgdG9rZW5zW2ldLmNvbnRlbnQgPSBjb250ZW50O1xuICAgICAgaWYgKCFjb250ZW50Lmxlbmd0aCkge1xuICAgICAgICB0b2tlbnNbaSAtIDFdLnRpZ2h0ID0gdHJ1ZTtcbiAgICAgICAgdG9rZW5zW2kgKyAxXS50aWdodCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9XG59O1xuIiwiLy8gRW5jbG9zZSBhYmJyZXZpYXRpb25zIGluIDxhYmJyPiB0YWdzXG4vL1xuJ3VzZSBzdHJpY3QnO1xuXG5cbnZhciBQVU5DVF9DSEFSUyA9ICcgXFxuKClbXVxcJ1wiLiwhPy0nO1xuXG5cbi8vIGZyb20gR29vZ2xlIGNsb3N1cmUgbGlicmFyeVxuLy8gaHR0cDovL2Nsb3N1cmUtbGlicmFyeS5nb29nbGVjb2RlLmNvbS9naXQtaGlzdG9yeS9kb2NzL2xvY2FsX2Nsb3N1cmVfZ29vZ19zdHJpbmdfc3RyaW5nLmpzLnNvdXJjZS5odG1sI2xpbmUxMDIxXG5mdW5jdGlvbiByZWdFc2NhcGUocykge1xuICByZXR1cm4gcy5yZXBsYWNlKC8oWy0oKVxcW1xcXXt9Kz8qLiRcXF58LDojPCFcXFxcXSkvZywgJ1xcXFwkMScpO1xufVxuXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gYWJicjIoc3RhdGUpIHtcbiAgdmFyIGksIGosIGwsIHRva2VucywgdG9rZW4sIHRleHQsIG5vZGVzLCBwb3MsIGxldmVsLCByZWcsIG0sIHJlZ1RleHQsXG4gICAgICBibG9ja1Rva2VucyA9IHN0YXRlLnRva2VucztcblxuICBpZiAoIXN0YXRlLmVudi5hYmJyZXZpYXRpb25zKSB7IHJldHVybjsgfVxuICBpZiAoIXN0YXRlLmVudi5hYmJyUmVnRXhwKSB7XG4gICAgcmVnVGV4dCA9ICcoXnxbJyArIFBVTkNUX0NIQVJTLnNwbGl0KCcnKS5tYXAocmVnRXNjYXBlKS5qb2luKCcnKSArICddKSdcbiAgICAgICAgICAgICsgJygnICsgT2JqZWN0LmtleXMoc3RhdGUuZW52LmFiYnJldmlhdGlvbnMpLm1hcChmdW5jdGlvbiAoeCkge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB4LnN1YnN0cigxKTtcbiAgICAgICAgICAgICAgICAgICAgfSkuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBiLmxlbmd0aCAtIGEubGVuZ3RoO1xuICAgICAgICAgICAgICAgICAgICB9KS5tYXAocmVnRXNjYXBlKS5qb2luKCd8JykgKyAnKSdcbiAgICAgICAgICAgICsgJygkfFsnICsgUFVOQ1RfQ0hBUlMuc3BsaXQoJycpLm1hcChyZWdFc2NhcGUpLmpvaW4oJycpICsgJ10pJztcbiAgICBzdGF0ZS5lbnYuYWJiclJlZ0V4cCA9IG5ldyBSZWdFeHAocmVnVGV4dCwgJ2cnKTtcbiAgfVxuICByZWcgPSBzdGF0ZS5lbnYuYWJiclJlZ0V4cDtcblxuICBmb3IgKGogPSAwLCBsID0gYmxvY2tUb2tlbnMubGVuZ3RoOyBqIDwgbDsgaisrKSB7XG4gICAgaWYgKGJsb2NrVG9rZW5zW2pdLnR5cGUgIT09ICdpbmxpbmUnKSB7IGNvbnRpbnVlOyB9XG4gICAgdG9rZW5zID0gYmxvY2tUb2tlbnNbal0uY2hpbGRyZW47XG5cbiAgICAvLyBXZSBzY2FuIGZyb20gdGhlIGVuZCwgdG8ga2VlcCBwb3NpdGlvbiB3aGVuIG5ldyB0YWdzIGFkZGVkLlxuICAgIGZvciAoaSA9IHRva2Vucy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgdG9rZW4gPSB0b2tlbnNbaV07XG4gICAgICBpZiAodG9rZW4udHlwZSAhPT0gJ3RleHQnKSB7IGNvbnRpbnVlOyB9XG5cbiAgICAgIHBvcyA9IDA7XG4gICAgICB0ZXh0ID0gdG9rZW4uY29udGVudDtcbiAgICAgIHJlZy5sYXN0SW5kZXggPSAwO1xuICAgICAgbGV2ZWwgPSB0b2tlbi5sZXZlbDtcbiAgICAgIG5vZGVzID0gW107XG5cbiAgICAgIHdoaWxlICgobSA9IHJlZy5leGVjKHRleHQpKSkge1xuICAgICAgICBpZiAocmVnLmxhc3RJbmRleCA+IHBvcykge1xuICAgICAgICAgIG5vZGVzLnB1c2goe1xuICAgICAgICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgICAgICAgY29udGVudDogdGV4dC5zbGljZShwb3MsIG0uaW5kZXggKyBtWzFdLmxlbmd0aCksXG4gICAgICAgICAgICBsZXZlbDogbGV2ZWxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIG5vZGVzLnB1c2goe1xuICAgICAgICAgIHR5cGU6ICdhYmJyX29wZW4nLFxuICAgICAgICAgIHRpdGxlOiBzdGF0ZS5lbnYuYWJicmV2aWF0aW9uc1snOicgKyBtWzJdXSxcbiAgICAgICAgICBsZXZlbDogbGV2ZWwrK1xuICAgICAgICB9KTtcbiAgICAgICAgbm9kZXMucHVzaCh7XG4gICAgICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgICAgIGNvbnRlbnQ6IG1bMl0sXG4gICAgICAgICAgbGV2ZWw6IGxldmVsXG4gICAgICAgIH0pO1xuICAgICAgICBub2Rlcy5wdXNoKHtcbiAgICAgICAgICB0eXBlOiAnYWJicl9jbG9zZScsXG4gICAgICAgICAgbGV2ZWw6IC0tbGV2ZWxcbiAgICAgICAgfSk7XG4gICAgICAgIHBvcyA9IHJlZy5sYXN0SW5kZXggLSBtWzNdLmxlbmd0aDtcbiAgICAgIH1cblxuICAgICAgaWYgKCFub2Rlcy5sZW5ndGgpIHsgY29udGludWU7IH1cblxuICAgICAgaWYgKHBvcyA8IHRleHQubGVuZ3RoKSB7XG4gICAgICAgIG5vZGVzLnB1c2goe1xuICAgICAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgICAgICBjb250ZW50OiB0ZXh0LnNsaWNlKHBvcyksXG4gICAgICAgICAgbGV2ZWw6IGxldmVsXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICAvLyByZXBsYWNlIGN1cnJlbnQgbm9kZVxuICAgICAgYmxvY2tUb2tlbnNbal0uY2hpbGRyZW4gPSB0b2tlbnMgPSBbXS5jb25jYXQodG9rZW5zLnNsaWNlKDAsIGkpLCBub2RlcywgdG9rZW5zLnNsaWNlKGkgKyAxKSk7XG4gICAgfVxuICB9XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGJsb2NrKHN0YXRlKSB7XG5cbiAgaWYgKHN0YXRlLmlubGluZU1vZGUpIHtcbiAgICBzdGF0ZS50b2tlbnMucHVzaCh7XG4gICAgICB0eXBlOiAnaW5saW5lJyxcbiAgICAgIGNvbnRlbnQ6IHN0YXRlLnNyYy5yZXBsYWNlKC9cXG4vZywgJyAnKS50cmltKCksXG4gICAgICBsZXZlbDogMCxcbiAgICAgIGxpbmVzOiBbIDAsIDEgXSxcbiAgICAgIGNoaWxkcmVuOiBbXVxuICAgIH0pO1xuXG4gIH0gZWxzZSB7XG4gICAgc3RhdGUuYmxvY2sucGFyc2Uoc3RhdGUuc3JjLCBzdGF0ZS5vcHRpb25zLCBzdGF0ZS5lbnYsIHN0YXRlLnRva2Vucyk7XG4gIH1cbn07XG4iLCIndXNlIHN0cmljdCc7XG5cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBmb290bm90ZV9ibG9jayhzdGF0ZSkge1xuICB2YXIgaSwgbCwgaiwgdCwgbGFzdFBhcmFncmFwaCwgbGlzdCwgdG9rZW5zLCBjdXJyZW50LCBjdXJyZW50TGFiZWwsXG4gICAgICBsZXZlbCA9IDAsXG4gICAgICBpbnNpZGVSZWYgPSBmYWxzZSxcbiAgICAgIHJlZlRva2VucyA9IHt9O1xuXG4gIGlmICghc3RhdGUuZW52LmZvb3Rub3RlcykgeyByZXR1cm47IH1cblxuICBzdGF0ZS50b2tlbnMgPSBzdGF0ZS50b2tlbnMuZmlsdGVyKGZ1bmN0aW9uKHRvaykge1xuICAgIGlmICh0b2sudHlwZSA9PT0gJ2Zvb3Rub3RlX3JlZmVyZW5jZV9vcGVuJykge1xuICAgICAgaW5zaWRlUmVmID0gdHJ1ZTtcbiAgICAgIGN1cnJlbnQgPSBbXTtcbiAgICAgIGN1cnJlbnRMYWJlbCA9IHRvay5sYWJlbDtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKHRvay50eXBlID09PSAnZm9vdG5vdGVfcmVmZXJlbmNlX2Nsb3NlJykge1xuICAgICAgaW5zaWRlUmVmID0gZmFsc2U7XG4gICAgICAvLyBwcmVwZW5kICc6JyB0byBhdm9pZCBjb25mbGljdCB3aXRoIE9iamVjdC5wcm90b3R5cGUgbWVtYmVyc1xuICAgICAgcmVmVG9rZW5zWyc6JyArIGN1cnJlbnRMYWJlbF0gPSBjdXJyZW50O1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAoaW5zaWRlUmVmKSB7IGN1cnJlbnQucHVzaCh0b2spOyB9XG4gICAgcmV0dXJuICFpbnNpZGVSZWY7XG4gIH0pO1xuXG4gIGlmICghc3RhdGUuZW52LmZvb3Rub3Rlcy5saXN0KSB7IHJldHVybjsgfVxuICBsaXN0ID0gc3RhdGUuZW52LmZvb3Rub3Rlcy5saXN0O1xuXG4gIHN0YXRlLnRva2Vucy5wdXNoKHtcbiAgICB0eXBlOiAnZm9vdG5vdGVfYmxvY2tfb3BlbicsXG4gICAgbGV2ZWw6IGxldmVsKytcbiAgfSk7XG4gIGZvciAoaSA9IDAsIGwgPSBsaXN0Lmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIHN0YXRlLnRva2Vucy5wdXNoKHtcbiAgICAgIHR5cGU6ICdmb290bm90ZV9vcGVuJyxcbiAgICAgIGlkOiBpLFxuICAgICAgbGV2ZWw6IGxldmVsKytcbiAgICB9KTtcblxuICAgIGlmIChsaXN0W2ldLnRva2Vucykge1xuICAgICAgdG9rZW5zID0gW107XG4gICAgICB0b2tlbnMucHVzaCh7XG4gICAgICAgIHR5cGU6ICdwYXJhZ3JhcGhfb3BlbicsXG4gICAgICAgIHRpZ2h0OiBmYWxzZSxcbiAgICAgICAgbGV2ZWw6IGxldmVsKytcbiAgICAgIH0pO1xuICAgICAgdG9rZW5zLnB1c2goe1xuICAgICAgICB0eXBlOiAnaW5saW5lJyxcbiAgICAgICAgY29udGVudDogJycsXG4gICAgICAgIGxldmVsOiBsZXZlbCxcbiAgICAgICAgY2hpbGRyZW46IGxpc3RbaV0udG9rZW5zXG4gICAgICB9KTtcbiAgICAgIHRva2Vucy5wdXNoKHtcbiAgICAgICAgdHlwZTogJ3BhcmFncmFwaF9jbG9zZScsXG4gICAgICAgIHRpZ2h0OiBmYWxzZSxcbiAgICAgICAgbGV2ZWw6IC0tbGV2ZWxcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAobGlzdFtpXS5sYWJlbCkge1xuICAgICAgdG9rZW5zID0gcmVmVG9rZW5zWyc6JyArIGxpc3RbaV0ubGFiZWxdO1xuICAgIH1cblxuICAgIHN0YXRlLnRva2VucyA9IHN0YXRlLnRva2Vucy5jb25jYXQodG9rZW5zKTtcbiAgICBpZiAoc3RhdGUudG9rZW5zW3N0YXRlLnRva2Vucy5sZW5ndGggLSAxXS50eXBlID09PSAncGFyYWdyYXBoX2Nsb3NlJykge1xuICAgICAgbGFzdFBhcmFncmFwaCA9IHN0YXRlLnRva2Vucy5wb3AoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGFzdFBhcmFncmFwaCA9IG51bGw7XG4gICAgfVxuXG4gICAgdCA9IGxpc3RbaV0uY291bnQgPiAwID8gbGlzdFtpXS5jb3VudCA6IDE7XG4gICAgZm9yIChqID0gMDsgaiA8IHQ7IGorKykge1xuICAgICAgc3RhdGUudG9rZW5zLnB1c2goe1xuICAgICAgICB0eXBlOiAnZm9vdG5vdGVfYW5jaG9yJyxcbiAgICAgICAgaWQ6IGksXG4gICAgICAgIHN1YklkOiBqLFxuICAgICAgICBsZXZlbDogbGV2ZWxcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChsYXN0UGFyYWdyYXBoKSB7XG4gICAgICBzdGF0ZS50b2tlbnMucHVzaChsYXN0UGFyYWdyYXBoKTtcbiAgICB9XG5cbiAgICBzdGF0ZS50b2tlbnMucHVzaCh7XG4gICAgICB0eXBlOiAnZm9vdG5vdGVfY2xvc2UnLFxuICAgICAgbGV2ZWw6IC0tbGV2ZWxcbiAgICB9KTtcbiAgfVxuICBzdGF0ZS50b2tlbnMucHVzaCh7XG4gICAgdHlwZTogJ2Zvb3Rub3RlX2Jsb2NrX2Nsb3NlJyxcbiAgICBsZXZlbDogLS1sZXZlbFxuICB9KTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaW5saW5lKHN0YXRlKSB7XG4gIHZhciB0b2tlbnMgPSBzdGF0ZS50b2tlbnMsIHRvaywgaSwgbDtcblxuICAvLyBQYXJzZSBpbmxpbmVzXG4gIGZvciAoaSA9IDAsIGwgPSB0b2tlbnMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgdG9rID0gdG9rZW5zW2ldO1xuICAgIGlmICh0b2sudHlwZSA9PT0gJ2lubGluZScpIHtcbiAgICAgIHN0YXRlLmlubGluZS5wYXJzZSh0b2suY29udGVudCwgc3RhdGUub3B0aW9ucywgc3RhdGUuZW52LCB0b2suY2hpbGRyZW4pO1xuICAgIH1cbiAgfVxufTtcbiIsIi8vIFJlcGxhY2UgbGluay1saWtlIHRleHRzIHdpdGggbGluayBub2Rlcy5cbi8vXG4vLyBDdXJyZW50bHkgcmVzdHJpY3RlZCBieSBgaW5saW5lLnZhbGlkYXRlTGluaygpYCB0byBodHRwL2h0dHBzL2Z0cFxuLy9cbid1c2Ugc3RyaWN0JztcblxuXG52YXIgQXV0b2xpbmtlciA9IHJlcXVpcmUoJ2F1dG9saW5rZXInKTtcblxuXG52YXIgTElOS19TQ0FOX1JFID0gL3d3d3xAfFxcOlxcL1xcLy87XG5cblxuZnVuY3Rpb24gaXNMaW5rT3BlbihzdHIpIHtcbiAgcmV0dXJuIC9ePGFbPlxcc10vaS50ZXN0KHN0cik7XG59XG5mdW5jdGlvbiBpc0xpbmtDbG9zZShzdHIpIHtcbiAgcmV0dXJuIC9ePFxcL2FcXHMqPi9pLnRlc3Qoc3RyKTtcbn1cblxuLy8gU3R1cGlkIGZhYnJpYyB0byBhdm9pZCBzaW5nbGV0b25zLCBmb3IgdGhyZWFkIHNhZmV0eS5cbi8vIFJlcXVpcmVkIGZvciBlbmdpbmVzIGxpa2UgTmFzaG9ybi5cbi8vXG5mdW5jdGlvbiBjcmVhdGVMaW5raWZpZXIoKSB7XG4gIHZhciBsaW5rcyA9IFtdO1xuICB2YXIgYXV0b2xpbmtlciA9IG5ldyBBdXRvbGlua2VyKHtcbiAgICBzdHJpcFByZWZpeDogZmFsc2UsXG4gICAgdXJsOiB0cnVlLFxuICAgIGVtYWlsOiB0cnVlLFxuICAgIHR3aXR0ZXI6IGZhbHNlLFxuICAgIHJlcGxhY2VGbjogZnVuY3Rpb24gKGF1dG9saW5rZXIsIG1hdGNoKSB7XG4gICAgICAvLyBPbmx5IGNvbGxlY3QgbWF0Y2hlZCBzdHJpbmdzIGJ1dCBkb24ndCBjaGFuZ2UgYW55dGhpbmcuXG4gICAgICBzd2l0Y2ggKG1hdGNoLmdldFR5cGUoKSkge1xuICAgICAgICAvKmVzbGludCBkZWZhdWx0LWNhc2U6MCovXG4gICAgICAgIGNhc2UgJ3VybCc6XG4gICAgICAgICAgbGlua3MucHVzaCh7XG4gICAgICAgICAgICB0ZXh0OiBtYXRjaC5tYXRjaGVkVGV4dCxcbiAgICAgICAgICAgIHVybDogbWF0Y2guZ2V0VXJsKClcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnZW1haWwnOlxuICAgICAgICAgIGxpbmtzLnB1c2goe1xuICAgICAgICAgICAgdGV4dDogbWF0Y2gubWF0Y2hlZFRleHQsXG4gICAgICAgICAgICAvLyBub3JtYWxpemUgZW1haWwgcHJvdG9jb2xcbiAgICAgICAgICAgIHVybDogJ21haWx0bzonICsgbWF0Y2guZ2V0RW1haWwoKS5yZXBsYWNlKC9ebWFpbHRvOi9pLCAnJylcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiB7XG4gICAgbGlua3M6IGxpbmtzLFxuICAgIGF1dG9saW5rZXI6IGF1dG9saW5rZXJcbiAgfTtcbn1cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGxpbmtpZnkoc3RhdGUpIHtcbiAgdmFyIGksIGosIGwsIHRva2VucywgdG9rZW4sIHRleHQsIG5vZGVzLCBsbiwgcG9zLCBsZXZlbCwgaHRtbExpbmtMZXZlbCxcbiAgICAgIGJsb2NrVG9rZW5zID0gc3RhdGUudG9rZW5zLFxuICAgICAgbGlua2lmaWVyID0gbnVsbCwgbGlua3MsIGF1dG9saW5rZXI7XG5cbiAgaWYgKCFzdGF0ZS5vcHRpb25zLmxpbmtpZnkpIHsgcmV0dXJuOyB9XG5cbiAgZm9yIChqID0gMCwgbCA9IGJsb2NrVG9rZW5zLmxlbmd0aDsgaiA8IGw7IGorKykge1xuICAgIGlmIChibG9ja1Rva2Vuc1tqXS50eXBlICE9PSAnaW5saW5lJykgeyBjb250aW51ZTsgfVxuICAgIHRva2VucyA9IGJsb2NrVG9rZW5zW2pdLmNoaWxkcmVuO1xuXG4gICAgaHRtbExpbmtMZXZlbCA9IDA7XG5cbiAgICAvLyBXZSBzY2FuIGZyb20gdGhlIGVuZCwgdG8ga2VlcCBwb3NpdGlvbiB3aGVuIG5ldyB0YWdzIGFkZGVkLlxuICAgIC8vIFVzZSByZXZlcnNlZCBsb2dpYyBpbiBsaW5rcyBzdGFydC9lbmQgbWF0Y2hcbiAgICBmb3IgKGkgPSB0b2tlbnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIHRva2VuID0gdG9rZW5zW2ldO1xuXG4gICAgICAvLyBTa2lwIGNvbnRlbnQgb2YgbWFya2Rvd24gbGlua3NcbiAgICAgIGlmICh0b2tlbi50eXBlID09PSAnbGlua19jbG9zZScpIHtcbiAgICAgICAgaS0tO1xuICAgICAgICB3aGlsZSAodG9rZW5zW2ldLmxldmVsICE9PSB0b2tlbi5sZXZlbCAmJiB0b2tlbnNbaV0udHlwZSAhPT0gJ2xpbmtfb3BlbicpIHtcbiAgICAgICAgICBpLS07XG4gICAgICAgIH1cbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIC8vIFNraXAgY29udGVudCBvZiBodG1sIHRhZyBsaW5rc1xuICAgICAgaWYgKHRva2VuLnR5cGUgPT09ICdodG1sdGFnJykge1xuICAgICAgICBpZiAoaXNMaW5rT3Blbih0b2tlbi5jb250ZW50KSAmJiBodG1sTGlua0xldmVsID4gMCkge1xuICAgICAgICAgIGh0bWxMaW5rTGV2ZWwtLTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNMaW5rQ2xvc2UodG9rZW4uY29udGVudCkpIHtcbiAgICAgICAgICBodG1sTGlua0xldmVsKys7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChodG1sTGlua0xldmVsID4gMCkgeyBjb250aW51ZTsgfVxuXG4gICAgICBpZiAodG9rZW4udHlwZSA9PT0gJ3RleHQnICYmIExJTktfU0NBTl9SRS50ZXN0KHRva2VuLmNvbnRlbnQpKSB7XG5cbiAgICAgICAgLy8gSW5pdCBsaW5raWZpZXIgaW4gbGF6eSBtYW5uZXIsIG9ubHkgaWYgcmVxdWlyZWQuXG4gICAgICAgIGlmICghbGlua2lmaWVyKSB7XG4gICAgICAgICAgbGlua2lmaWVyID0gY3JlYXRlTGlua2lmaWVyKCk7XG4gICAgICAgICAgbGlua3MgPSBsaW5raWZpZXIubGlua3M7XG4gICAgICAgICAgYXV0b2xpbmtlciA9IGxpbmtpZmllci5hdXRvbGlua2VyO1xuICAgICAgICB9XG5cbiAgICAgICAgdGV4dCA9IHRva2VuLmNvbnRlbnQ7XG4gICAgICAgIGxpbmtzLmxlbmd0aCA9IDA7XG4gICAgICAgIGF1dG9saW5rZXIubGluayh0ZXh0KTtcblxuICAgICAgICBpZiAoIWxpbmtzLmxlbmd0aCkgeyBjb250aW51ZTsgfVxuXG4gICAgICAgIC8vIE5vdyBzcGxpdCBzdHJpbmcgdG8gbm9kZXNcbiAgICAgICAgbm9kZXMgPSBbXTtcbiAgICAgICAgbGV2ZWwgPSB0b2tlbi5sZXZlbDtcblxuICAgICAgICBmb3IgKGxuID0gMDsgbG4gPCBsaW5rcy5sZW5ndGg7IGxuKyspIHtcblxuICAgICAgICAgIGlmICghc3RhdGUuaW5saW5lLnZhbGlkYXRlTGluayhsaW5rc1tsbl0udXJsKSkgeyBjb250aW51ZTsgfVxuXG4gICAgICAgICAgcG9zID0gdGV4dC5pbmRleE9mKGxpbmtzW2xuXS50ZXh0KTtcblxuICAgICAgICAgIGlmIChwb3MpIHtcbiAgICAgICAgICAgIGxldmVsID0gbGV2ZWw7XG4gICAgICAgICAgICBub2Rlcy5wdXNoKHtcbiAgICAgICAgICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgICAgICAgICBjb250ZW50OiB0ZXh0LnNsaWNlKDAsIHBvcyksXG4gICAgICAgICAgICAgIGxldmVsOiBsZXZlbFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIG5vZGVzLnB1c2goe1xuICAgICAgICAgICAgdHlwZTogJ2xpbmtfb3BlbicsXG4gICAgICAgICAgICBocmVmOiBsaW5rc1tsbl0udXJsLFxuICAgICAgICAgICAgdGl0bGU6ICcnLFxuICAgICAgICAgICAgbGV2ZWw6IGxldmVsKytcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBub2Rlcy5wdXNoKHtcbiAgICAgICAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgICAgICAgIGNvbnRlbnQ6IGxpbmtzW2xuXS50ZXh0LFxuICAgICAgICAgICAgbGV2ZWw6IGxldmVsXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgbm9kZXMucHVzaCh7XG4gICAgICAgICAgICB0eXBlOiAnbGlua19jbG9zZScsXG4gICAgICAgICAgICBsZXZlbDogLS1sZXZlbFxuICAgICAgICAgIH0pO1xuICAgICAgICAgIHRleHQgPSB0ZXh0LnNsaWNlKHBvcyArIGxpbmtzW2xuXS50ZXh0Lmxlbmd0aCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRleHQubGVuZ3RoKSB7XG4gICAgICAgICAgbm9kZXMucHVzaCh7XG4gICAgICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgICAgICBjb250ZW50OiB0ZXh0LFxuICAgICAgICAgICAgbGV2ZWw6IGxldmVsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyByZXBsYWNlIGN1cnJlbnQgbm9kZVxuICAgICAgICBibG9ja1Rva2Vuc1tqXS5jaGlsZHJlbiA9IHRva2VucyA9IFtdLmNvbmNhdCh0b2tlbnMuc2xpY2UoMCwgaSksIG5vZGVzLCB0b2tlbnMuc2xpY2UoaSArIDEpKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn07XG4iLCIndXNlIHN0cmljdCc7XG5cblxudmFyIFN0YXRlSW5saW5lICAgICAgICAgID0gcmVxdWlyZSgnLi4vcnVsZXNfaW5saW5lL3N0YXRlX2lubGluZScpO1xudmFyIHBhcnNlTGlua0xhYmVsICAgICAgID0gcmVxdWlyZSgnLi4vaGVscGVycy9wYXJzZV9saW5rX2xhYmVsJyk7XG52YXIgcGFyc2VMaW5rRGVzdGluYXRpb24gPSByZXF1aXJlKCcuLi9oZWxwZXJzL3BhcnNlX2xpbmtfZGVzdGluYXRpb24nKTtcbnZhciBwYXJzZUxpbmtUaXRsZSAgICAgICA9IHJlcXVpcmUoJy4uL2hlbHBlcnMvcGFyc2VfbGlua190aXRsZScpO1xudmFyIG5vcm1hbGl6ZVJlZmVyZW5jZSAgID0gcmVxdWlyZSgnLi4vaGVscGVycy9ub3JtYWxpemVfcmVmZXJlbmNlJyk7XG5cblxuZnVuY3Rpb24gcGFyc2VSZWZlcmVuY2Uoc3RyLCBwYXJzZXIsIG9wdGlvbnMsIGVudikge1xuICB2YXIgc3RhdGUsIGxhYmVsRW5kLCBwb3MsIG1heCwgY29kZSwgc3RhcnQsIGhyZWYsIHRpdGxlLCBsYWJlbDtcblxuICBpZiAoc3RyLmNoYXJDb2RlQXQoMCkgIT09IDB4NUIvKiBbICovKSB7IHJldHVybiAtMTsgfVxuXG4gIGlmIChzdHIuaW5kZXhPZignXTonKSA9PT0gLTEpIHsgcmV0dXJuIC0xOyB9XG5cbiAgc3RhdGUgPSBuZXcgU3RhdGVJbmxpbmUoc3RyLCBwYXJzZXIsIG9wdGlvbnMsIGVudiwgW10pO1xuICBsYWJlbEVuZCA9IHBhcnNlTGlua0xhYmVsKHN0YXRlLCAwKTtcblxuICBpZiAobGFiZWxFbmQgPCAwIHx8IHN0ci5jaGFyQ29kZUF0KGxhYmVsRW5kICsgMSkgIT09IDB4M0EvKiA6ICovKSB7IHJldHVybiAtMTsgfVxuXG4gIG1heCA9IHN0YXRlLnBvc01heDtcblxuICAvLyBbbGFiZWxdOiAgIGRlc3RpbmF0aW9uICAgJ3RpdGxlJ1xuICAvLyAgICAgICAgIF5eXiBza2lwIG9wdGlvbmFsIHdoaXRlc3BhY2UgaGVyZVxuICBmb3IgKHBvcyA9IGxhYmVsRW5kICsgMjsgcG9zIDwgbWF4OyBwb3MrKykge1xuICAgIGNvZGUgPSBzdGF0ZS5zcmMuY2hhckNvZGVBdChwb3MpO1xuICAgIGlmIChjb2RlICE9PSAweDIwICYmIGNvZGUgIT09IDB4MEEpIHsgYnJlYWs7IH1cbiAgfVxuXG4gIC8vIFtsYWJlbF06ICAgZGVzdGluYXRpb24gICAndGl0bGUnXG4gIC8vICAgICAgICAgICAgXl5eXl5eXl5eXl4gcGFyc2UgdGhpc1xuICBpZiAoIXBhcnNlTGlua0Rlc3RpbmF0aW9uKHN0YXRlLCBwb3MpKSB7IHJldHVybiAtMTsgfVxuICBocmVmID0gc3RhdGUubGlua0NvbnRlbnQ7XG4gIHBvcyA9IHN0YXRlLnBvcztcblxuICAvLyBbbGFiZWxdOiAgIGRlc3RpbmF0aW9uICAgJ3RpdGxlJ1xuICAvLyAgICAgICAgICAgICAgICAgICAgICAgXl5eIHNraXBwaW5nIHRob3NlIHNwYWNlc1xuICBzdGFydCA9IHBvcztcbiAgZm9yIChwb3MgPSBwb3MgKyAxOyBwb3MgPCBtYXg7IHBvcysrKSB7XG4gICAgY29kZSA9IHN0YXRlLnNyYy5jaGFyQ29kZUF0KHBvcyk7XG4gICAgaWYgKGNvZGUgIT09IDB4MjAgJiYgY29kZSAhPT0gMHgwQSkgeyBicmVhazsgfVxuICB9XG5cbiAgLy8gW2xhYmVsXTogICBkZXN0aW5hdGlvbiAgICd0aXRsZSdcbiAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgIF5eXl5eXl4gcGFyc2UgdGhpc1xuICBpZiAocG9zIDwgbWF4ICYmIHN0YXJ0ICE9PSBwb3MgJiYgcGFyc2VMaW5rVGl0bGUoc3RhdGUsIHBvcykpIHtcbiAgICB0aXRsZSA9IHN0YXRlLmxpbmtDb250ZW50O1xuICAgIHBvcyA9IHN0YXRlLnBvcztcbiAgfSBlbHNlIHtcbiAgICB0aXRsZSA9ICcnO1xuICAgIHBvcyA9IHN0YXJ0O1xuICB9XG5cbiAgLy8gZW5zdXJlIHRoYXQgdGhlIGVuZCBvZiB0aGUgbGluZSBpcyBlbXB0eVxuICB3aGlsZSAocG9zIDwgbWF4ICYmIHN0YXRlLnNyYy5jaGFyQ29kZUF0KHBvcykgPT09IDB4MjAvKiBzcGFjZSAqLykgeyBwb3MrKzsgfVxuICBpZiAocG9zIDwgbWF4ICYmIHN0YXRlLnNyYy5jaGFyQ29kZUF0KHBvcykgIT09IDB4MEEpIHsgcmV0dXJuIC0xOyB9XG5cbiAgbGFiZWwgPSBub3JtYWxpemVSZWZlcmVuY2Uoc3RyLnNsaWNlKDEsIGxhYmVsRW5kKSk7XG4gIGlmICh0eXBlb2YgZW52LnJlZmVyZW5jZXNbbGFiZWxdID09PSAndW5kZWZpbmVkJykge1xuICAgIGVudi5yZWZlcmVuY2VzW2xhYmVsXSA9IHsgdGl0bGU6IHRpdGxlLCBocmVmOiBocmVmIH07XG4gIH1cblxuICByZXR1cm4gcG9zO1xufVxuXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gcmVmZXJlbmNlcyhzdGF0ZSkge1xuICB2YXIgdG9rZW5zID0gc3RhdGUudG9rZW5zLCBpLCBsLCBjb250ZW50LCBwb3M7XG5cbiAgc3RhdGUuZW52LnJlZmVyZW5jZXMgPSBzdGF0ZS5lbnYucmVmZXJlbmNlcyB8fCB7fTtcblxuICBpZiAoc3RhdGUuaW5saW5lTW9kZSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8vIFNjYW4gZGVmaW5pdGlvbnMgaW4gcGFyYWdyYXBoIGlubGluZXNcbiAgZm9yIChpID0gMSwgbCA9IHRva2Vucy5sZW5ndGggLSAxOyBpIDwgbDsgaSsrKSB7XG4gICAgaWYgKHRva2Vuc1tpXS50eXBlID09PSAnaW5saW5lJyAmJlxuICAgICAgICB0b2tlbnNbaSAtIDFdLnR5cGUgPT09ICdwYXJhZ3JhcGhfb3BlbicgJiZcbiAgICAgICAgdG9rZW5zW2kgKyAxXS50eXBlID09PSAncGFyYWdyYXBoX2Nsb3NlJykge1xuXG4gICAgICBjb250ZW50ID0gdG9rZW5zW2ldLmNvbnRlbnQ7XG4gICAgICB3aGlsZSAoY29udGVudC5sZW5ndGgpIHtcbiAgICAgICAgcG9zID0gcGFyc2VSZWZlcmVuY2UoY29udGVudCwgc3RhdGUuaW5saW5lLCBzdGF0ZS5vcHRpb25zLCBzdGF0ZS5lbnYpO1xuICAgICAgICBpZiAocG9zIDwgMCkgeyBicmVhazsgfVxuICAgICAgICBjb250ZW50ID0gY29udGVudC5zbGljZShwb3MpLnRyaW0oKTtcbiAgICAgIH1cblxuICAgICAgdG9rZW5zW2ldLmNvbnRlbnQgPSBjb250ZW50O1xuICAgICAgaWYgKCFjb250ZW50Lmxlbmd0aCkge1xuICAgICAgICB0b2tlbnNbaSAtIDFdLnRpZ2h0ID0gdHJ1ZTtcbiAgICAgICAgdG9rZW5zW2kgKyAxXS50aWdodCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9XG59O1xuIiwiLy8gU2ltcGxlIHR5cG9ncmFwaGljYWwgcmVwbGFjZW1lbnRzXG4vL1xuJ3VzZSBzdHJpY3QnO1xuXG4vLyBUT0RPOlxuLy8gLSBmcmFjdGlvbmFscyAxLzIsIDEvNCwgMy80IC0+IMK9LCDCvCwgwr5cbi8vIC0gbWlsdGlwbGljYXRpb24gMiB4IDQgLT4gMiDDlyA0XG5cbnZhciBSQVJFX1JFID0gL1xcKy18XFwuXFwufFxcP1xcP1xcP1xcP3whISEhfCwsfC0tLztcblxudmFyIFNDT1BFRF9BQkJSX1JFID0gL1xcKChjfHRtfHJ8cClcXCkvaWc7XG52YXIgU0NPUEVEX0FCQlIgPSB7XG4gICdjJzogJ8KpJyxcbiAgJ3InOiAnwq4nLFxuICAncCc6ICfCpycsXG4gICd0bSc6ICfihKInXG59O1xuXG5mdW5jdGlvbiByZXBsYWNlU2NvcGVkQWJicihzdHIpIHtcbiAgaWYgKHN0ci5pbmRleE9mKCcoJykgPCAwKSB7IHJldHVybiBzdHI7IH1cblxuICByZXR1cm4gc3RyLnJlcGxhY2UoU0NPUEVEX0FCQlJfUkUsIGZ1bmN0aW9uKG1hdGNoLCBuYW1lKSB7XG4gICAgcmV0dXJuIFNDT1BFRF9BQkJSW25hbWUudG9Mb3dlckNhc2UoKV07XG4gIH0pO1xufVxuXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gcmVwbGFjZShzdGF0ZSkge1xuICB2YXIgaSwgdG9rZW4sIHRleHQsIGlubGluZVRva2VucywgYmxrSWR4O1xuXG4gIGlmICghc3RhdGUub3B0aW9ucy50eXBvZ3JhcGhlcikgeyByZXR1cm47IH1cblxuICBmb3IgKGJsa0lkeCA9IHN0YXRlLnRva2Vucy5sZW5ndGggLSAxOyBibGtJZHggPj0gMDsgYmxrSWR4LS0pIHtcblxuICAgIGlmIChzdGF0ZS50b2tlbnNbYmxrSWR4XS50eXBlICE9PSAnaW5saW5lJykgeyBjb250aW51ZTsgfVxuXG4gICAgaW5saW5lVG9rZW5zID0gc3RhdGUudG9rZW5zW2Jsa0lkeF0uY2hpbGRyZW47XG5cbiAgICBmb3IgKGkgPSBpbmxpbmVUb2tlbnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIHRva2VuID0gaW5saW5lVG9rZW5zW2ldO1xuICAgICAgaWYgKHRva2VuLnR5cGUgPT09ICd0ZXh0Jykge1xuICAgICAgICB0ZXh0ID0gdG9rZW4uY29udGVudDtcblxuICAgICAgICB0ZXh0ID0gcmVwbGFjZVNjb3BlZEFiYnIodGV4dCk7XG5cbiAgICAgICAgaWYgKFJBUkVfUkUudGVzdCh0ZXh0KSkge1xuICAgICAgICAgIHRleHQgPSB0ZXh0XG4gICAgICAgICAgICAucmVwbGFjZSgvXFwrLS9nLCAnwrEnKVxuICAgICAgICAgICAgLy8gLi4sIC4uLiwgLi4uLi4uLiAtPiDigKZcbiAgICAgICAgICAgIC8vIGJ1dCA/Li4uLi4gJiAhLi4uLi4gLT4gPy4uICYgIS4uXG4gICAgICAgICAgICAucmVwbGFjZSgvXFwuezIsfS9nLCAn4oCmJykucmVwbGFjZSgvKFs/IV0p4oCmL2csICckMS4uJylcbiAgICAgICAgICAgIC5yZXBsYWNlKC8oWz8hXSl7NCx9L2csICckMSQxJDEnKS5yZXBsYWNlKC8sezIsfS9nLCAnLCcpXG4gICAgICAgICAgICAvLyBlbS1kYXNoXG4gICAgICAgICAgICAucmVwbGFjZSgvKF58W14tXSktLS0oW14tXXwkKS9tZywgJyQxXFx1MjAxNCQyJylcbiAgICAgICAgICAgIC8vIGVuLWRhc2hcbiAgICAgICAgICAgIC5yZXBsYWNlKC8oXnxcXHMpLS0oXFxzfCQpL21nLCAnJDFcXHUyMDEzJDInKVxuICAgICAgICAgICAgLnJlcGxhY2UoLyhefFteLVxcc10pLS0oW14tXFxzXXwkKS9tZywgJyQxXFx1MjAxMyQyJyk7XG4gICAgICAgIH1cblxuICAgICAgICB0b2tlbi5jb250ZW50ID0gdGV4dDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn07XG4iLCIvLyBDb252ZXJ0IHN0cmFpZ2h0IHF1b3RhdGlvbiBtYXJrcyB0byB0eXBvZ3JhcGhpYyBvbmVzXG4vL1xuJ3VzZSBzdHJpY3QnO1xuXG5cbnZhciBRVU9URV9URVNUX1JFID0gL1snXCJdLztcbnZhciBRVU9URV9SRSA9IC9bJ1wiXS9nO1xudmFyIFBVTkNUX1JFID0gL1stXFxzKClcXFtcXF1dLztcbnZhciBBUE9TVFJPUEhFID0gJ+KAmSc7XG5cbi8vIFRoaXMgZnVuY3Rpb24gcmV0dXJucyB0cnVlIGlmIHRoZSBjaGFyYWN0ZXIgYXQgYHBvc2Bcbi8vIGNvdWxkIGJlIGluc2lkZSBhIHdvcmQuXG5mdW5jdGlvbiBpc0xldHRlcihzdHIsIHBvcykge1xuICBpZiAocG9zIDwgMCB8fCBwb3MgPj0gc3RyLmxlbmd0aCkgeyByZXR1cm4gZmFsc2U7IH1cbiAgcmV0dXJuICFQVU5DVF9SRS50ZXN0KHN0cltwb3NdKTtcbn1cblxuXG5mdW5jdGlvbiByZXBsYWNlQXQoc3RyLCBpbmRleCwgY2gpIHtcbiAgcmV0dXJuIHN0ci5zdWJzdHIoMCwgaW5kZXgpICsgY2ggKyBzdHIuc3Vic3RyKGluZGV4ICsgMSk7XG59XG5cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBzbWFydHF1b3RlcyhzdGF0ZSkge1xuICAvKmVzbGludCBtYXgtZGVwdGg6MCovXG4gIHZhciBpLCB0b2tlbiwgdGV4dCwgdCwgcG9zLCBtYXgsIHRoaXNMZXZlbCwgbGFzdFNwYWNlLCBuZXh0U3BhY2UsIGl0ZW0sXG4gICAgICBjYW5PcGVuLCBjYW5DbG9zZSwgaiwgaXNTaW5nbGUsIGJsa0lkeCwgdG9rZW5zLFxuICAgICAgc3RhY2s7XG5cbiAgaWYgKCFzdGF0ZS5vcHRpb25zLnR5cG9ncmFwaGVyKSB7IHJldHVybjsgfVxuXG4gIHN0YWNrID0gW107XG5cbiAgZm9yIChibGtJZHggPSBzdGF0ZS50b2tlbnMubGVuZ3RoIC0gMTsgYmxrSWR4ID49IDA7IGJsa0lkeC0tKSB7XG5cbiAgICBpZiAoc3RhdGUudG9rZW5zW2Jsa0lkeF0udHlwZSAhPT0gJ2lubGluZScpIHsgY29udGludWU7IH1cblxuICAgIHRva2VucyA9IHN0YXRlLnRva2Vuc1tibGtJZHhdLmNoaWxkcmVuO1xuICAgIHN0YWNrLmxlbmd0aCA9IDA7XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgdG9rZW5zLmxlbmd0aDsgaSsrKSB7XG4gICAgICB0b2tlbiA9IHRva2Vuc1tpXTtcblxuICAgICAgaWYgKHRva2VuLnR5cGUgIT09ICd0ZXh0JyB8fCBRVU9URV9URVNUX1JFLnRlc3QodG9rZW4udGV4dCkpIHsgY29udGludWU7IH1cblxuICAgICAgdGhpc0xldmVsID0gdG9rZW5zW2ldLmxldmVsO1xuXG4gICAgICBmb3IgKGogPSBzdGFjay5sZW5ndGggLSAxOyBqID49IDA7IGotLSkge1xuICAgICAgICBpZiAoc3RhY2tbal0ubGV2ZWwgPD0gdGhpc0xldmVsKSB7IGJyZWFrOyB9XG4gICAgICB9XG4gICAgICBzdGFjay5sZW5ndGggPSBqICsgMTtcblxuICAgICAgdGV4dCA9IHRva2VuLmNvbnRlbnQ7XG4gICAgICBwb3MgPSAwO1xuICAgICAgbWF4ID0gdGV4dC5sZW5ndGg7XG5cbiAgICAgIC8qZXNsaW50IG5vLWxhYmVsczowLGJsb2NrLXNjb3BlZC12YXI6MCovXG4gICAgICBPVVRFUjpcbiAgICAgIHdoaWxlIChwb3MgPCBtYXgpIHtcbiAgICAgICAgUVVPVEVfUkUubGFzdEluZGV4ID0gcG9zO1xuICAgICAgICB0ID0gUVVPVEVfUkUuZXhlYyh0ZXh0KTtcbiAgICAgICAgaWYgKCF0KSB7IGJyZWFrOyB9XG5cbiAgICAgICAgbGFzdFNwYWNlID0gIWlzTGV0dGVyKHRleHQsIHQuaW5kZXggLSAxKTtcbiAgICAgICAgcG9zID0gdC5pbmRleCArIDE7XG4gICAgICAgIGlzU2luZ2xlID0gKHRbMF0gPT09IFwiJ1wiKTtcbiAgICAgICAgbmV4dFNwYWNlID0gIWlzTGV0dGVyKHRleHQsIHBvcyk7XG5cbiAgICAgICAgaWYgKCFuZXh0U3BhY2UgJiYgIWxhc3RTcGFjZSkge1xuICAgICAgICAgIC8vIG1pZGRsZSBvZiB3b3JkXG4gICAgICAgICAgaWYgKGlzU2luZ2xlKSB7XG4gICAgICAgICAgICB0b2tlbi5jb250ZW50ID0gcmVwbGFjZUF0KHRva2VuLmNvbnRlbnQsIHQuaW5kZXgsIEFQT1NUUk9QSEUpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNhbk9wZW4gPSAhbmV4dFNwYWNlO1xuICAgICAgICBjYW5DbG9zZSA9ICFsYXN0U3BhY2U7XG5cbiAgICAgICAgaWYgKGNhbkNsb3NlKSB7XG4gICAgICAgICAgLy8gdGhpcyBjb3VsZCBiZSBhIGNsb3NpbmcgcXVvdGUsIHJld2luZCB0aGUgc3RhY2sgdG8gZ2V0IGEgbWF0Y2hcbiAgICAgICAgICBmb3IgKGogPSBzdGFjay5sZW5ndGggLSAxOyBqID49IDA7IGotLSkge1xuICAgICAgICAgICAgaXRlbSA9IHN0YWNrW2pdO1xuICAgICAgICAgICAgaWYgKHN0YWNrW2pdLmxldmVsIDwgdGhpc0xldmVsKSB7IGJyZWFrOyB9XG4gICAgICAgICAgICBpZiAoaXRlbS5zaW5nbGUgPT09IGlzU2luZ2xlICYmIHN0YWNrW2pdLmxldmVsID09PSB0aGlzTGV2ZWwpIHtcbiAgICAgICAgICAgICAgaXRlbSA9IHN0YWNrW2pdO1xuICAgICAgICAgICAgICBpZiAoaXNTaW5nbGUpIHtcbiAgICAgICAgICAgICAgICB0b2tlbnNbaXRlbS50b2tlbl0uY29udGVudCA9IHJlcGxhY2VBdCh0b2tlbnNbaXRlbS50b2tlbl0uY29udGVudCwgaXRlbS5wb3MsIHN0YXRlLm9wdGlvbnMucXVvdGVzWzJdKTtcbiAgICAgICAgICAgICAgICB0b2tlbi5jb250ZW50ID0gcmVwbGFjZUF0KHRva2VuLmNvbnRlbnQsIHQuaW5kZXgsIHN0YXRlLm9wdGlvbnMucXVvdGVzWzNdKTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0b2tlbnNbaXRlbS50b2tlbl0uY29udGVudCA9IHJlcGxhY2VBdCh0b2tlbnNbaXRlbS50b2tlbl0uY29udGVudCwgaXRlbS5wb3MsIHN0YXRlLm9wdGlvbnMucXVvdGVzWzBdKTtcbiAgICAgICAgICAgICAgICB0b2tlbi5jb250ZW50ID0gcmVwbGFjZUF0KHRva2VuLmNvbnRlbnQsIHQuaW5kZXgsIHN0YXRlLm9wdGlvbnMucXVvdGVzWzFdKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBzdGFjay5sZW5ndGggPSBqO1xuICAgICAgICAgICAgICBjb250aW51ZSBPVVRFUjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY2FuT3Blbikge1xuICAgICAgICAgIHN0YWNrLnB1c2goe1xuICAgICAgICAgICAgdG9rZW46IGksXG4gICAgICAgICAgICBwb3M6IHQuaW5kZXgsXG4gICAgICAgICAgICBzaW5nbGU6IGlzU2luZ2xlLFxuICAgICAgICAgICAgbGV2ZWw6IHRoaXNMZXZlbFxuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2UgaWYgKGNhbkNsb3NlICYmIGlzU2luZ2xlKSB7XG4gICAgICAgICAgdG9rZW4uY29udGVudCA9IHJlcGxhY2VBdCh0b2tlbi5jb250ZW50LCB0LmluZGV4LCBBUE9TVFJPUEhFKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufTtcbiIsIi8vIFByb2Nlc3MgYXV0b2xpbmtzICc8cHJvdG9jb2w6Li4uPidcblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXJsX3NjaGVtYXMgICA9IHJlcXVpcmUoJy4uL2NvbW1vbi91cmxfc2NoZW1hcycpO1xudmFyIG5vcm1hbGl6ZUxpbmsgPSByZXF1aXJlKCcuLi9oZWxwZXJzL25vcm1hbGl6ZV9saW5rJyk7XG5cblxuLyplc2xpbnQgbWF4LWxlbjowKi9cbnZhciBFTUFJTF9SRSAgICA9IC9ePChbYS16QS1aMC05LiEjJCUmJyorXFwvPT9eX2B7fH1+LV0rQFthLXpBLVowLTldKD86W2EtekEtWjAtOS1dezAsNjF9W2EtekEtWjAtOV0pPyg/OlxcLlthLXpBLVowLTldKD86W2EtekEtWjAtOS1dezAsNjF9W2EtekEtWjAtOV0pPykqKT4vO1xudmFyIEFVVE9MSU5LX1JFID0gL148KFthLXpBLVouXFwtXXsxLDI1fSk6KFtePD5cXHgwMC1cXHgyMF0qKT4vO1xuXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gYXV0b2xpbmsoc3RhdGUsIHNpbGVudCkge1xuICB2YXIgdGFpbCwgbGlua01hdGNoLCBlbWFpbE1hdGNoLCB1cmwsIGZ1bGxVcmwsIHBvcyA9IHN0YXRlLnBvcztcblxuICBpZiAoc3RhdGUuc3JjLmNoYXJDb2RlQXQocG9zKSAhPT0gMHgzQy8qIDwgKi8pIHsgcmV0dXJuIGZhbHNlOyB9XG5cbiAgdGFpbCA9IHN0YXRlLnNyYy5zbGljZShwb3MpO1xuXG4gIGlmICh0YWlsLmluZGV4T2YoJz4nKSA8IDApIHsgcmV0dXJuIGZhbHNlOyB9XG5cbiAgbGlua01hdGNoID0gdGFpbC5tYXRjaChBVVRPTElOS19SRSk7XG5cbiAgaWYgKGxpbmtNYXRjaCkge1xuICAgIGlmICh1cmxfc2NoZW1hcy5pbmRleE9mKGxpbmtNYXRjaFsxXS50b0xvd2VyQ2FzZSgpKSA8IDApIHsgcmV0dXJuIGZhbHNlOyB9XG5cbiAgICB1cmwgPSBsaW5rTWF0Y2hbMF0uc2xpY2UoMSwgLTEpO1xuICAgIGZ1bGxVcmwgPSBub3JtYWxpemVMaW5rKHVybCk7XG4gICAgaWYgKCFzdGF0ZS5wYXJzZXIudmFsaWRhdGVMaW5rKHVybCkpIHsgcmV0dXJuIGZhbHNlOyB9XG5cbiAgICBpZiAoIXNpbGVudCkge1xuICAgICAgc3RhdGUucHVzaCh7XG4gICAgICAgIHR5cGU6ICdsaW5rX29wZW4nLFxuICAgICAgICBocmVmOiBmdWxsVXJsLFxuICAgICAgICBsZXZlbDogc3RhdGUubGV2ZWxcbiAgICAgIH0pO1xuICAgICAgc3RhdGUucHVzaCh7XG4gICAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgICAgY29udGVudDogdXJsLFxuICAgICAgICBsZXZlbDogc3RhdGUubGV2ZWwgKyAxXG4gICAgICB9KTtcbiAgICAgIHN0YXRlLnB1c2goeyB0eXBlOiAnbGlua19jbG9zZScsIGxldmVsOiBzdGF0ZS5sZXZlbCB9KTtcbiAgICB9XG5cbiAgICBzdGF0ZS5wb3MgKz0gbGlua01hdGNoWzBdLmxlbmd0aDtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGVtYWlsTWF0Y2ggPSB0YWlsLm1hdGNoKEVNQUlMX1JFKTtcblxuICBpZiAoZW1haWxNYXRjaCkge1xuXG4gICAgdXJsID0gZW1haWxNYXRjaFswXS5zbGljZSgxLCAtMSk7XG5cbiAgICBmdWxsVXJsID0gbm9ybWFsaXplTGluaygnbWFpbHRvOicgKyB1cmwpO1xuICAgIGlmICghc3RhdGUucGFyc2VyLnZhbGlkYXRlTGluayhmdWxsVXJsKSkgeyByZXR1cm4gZmFsc2U7IH1cblxuICAgIGlmICghc2lsZW50KSB7XG4gICAgICBzdGF0ZS5wdXNoKHtcbiAgICAgICAgdHlwZTogJ2xpbmtfb3BlbicsXG4gICAgICAgIGhyZWY6IGZ1bGxVcmwsXG4gICAgICAgIGxldmVsOiBzdGF0ZS5sZXZlbFxuICAgICAgfSk7XG4gICAgICBzdGF0ZS5wdXNoKHtcbiAgICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgICBjb250ZW50OiB1cmwsXG4gICAgICAgIGxldmVsOiBzdGF0ZS5sZXZlbCArIDFcbiAgICAgIH0pO1xuICAgICAgc3RhdGUucHVzaCh7IHR5cGU6ICdsaW5rX2Nsb3NlJywgbGV2ZWw6IHN0YXRlLmxldmVsIH0pO1xuICAgIH1cblxuICAgIHN0YXRlLnBvcyArPSBlbWFpbE1hdGNoWzBdLmxlbmd0aDtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn07XG4iLCIvLyBQYXJzZSBiYWNrdGlja3NcblxuJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGJhY2t0aWNrcyhzdGF0ZSwgc2lsZW50KSB7XG4gIHZhciBzdGFydCwgbWF4LCBtYXJrZXIsIG1hdGNoU3RhcnQsIG1hdGNoRW5kLFxuICAgICAgcG9zID0gc3RhdGUucG9zLFxuICAgICAgY2ggPSBzdGF0ZS5zcmMuY2hhckNvZGVBdChwb3MpO1xuXG4gIGlmIChjaCAhPT0gMHg2MC8qIGAgKi8pIHsgcmV0dXJuIGZhbHNlOyB9XG5cbiAgc3RhcnQgPSBwb3M7XG4gIHBvcysrO1xuICBtYXggPSBzdGF0ZS5wb3NNYXg7XG5cbiAgd2hpbGUgKHBvcyA8IG1heCAmJiBzdGF0ZS5zcmMuY2hhckNvZGVBdChwb3MpID09PSAweDYwLyogYCAqLykgeyBwb3MrKzsgfVxuXG4gIG1hcmtlciA9IHN0YXRlLnNyYy5zbGljZShzdGFydCwgcG9zKTtcblxuICBtYXRjaFN0YXJ0ID0gbWF0Y2hFbmQgPSBwb3M7XG5cbiAgd2hpbGUgKChtYXRjaFN0YXJ0ID0gc3RhdGUuc3JjLmluZGV4T2YoJ2AnLCBtYXRjaEVuZCkpICE9PSAtMSkge1xuICAgIG1hdGNoRW5kID0gbWF0Y2hTdGFydCArIDE7XG5cbiAgICB3aGlsZSAobWF0Y2hFbmQgPCBtYXggJiYgc3RhdGUuc3JjLmNoYXJDb2RlQXQobWF0Y2hFbmQpID09PSAweDYwLyogYCAqLykgeyBtYXRjaEVuZCsrOyB9XG5cbiAgICBpZiAobWF0Y2hFbmQgLSBtYXRjaFN0YXJ0ID09PSBtYXJrZXIubGVuZ3RoKSB7XG4gICAgICBpZiAoIXNpbGVudCkge1xuICAgICAgICBzdGF0ZS5wdXNoKHtcbiAgICAgICAgICB0eXBlOiAnY29kZScsXG4gICAgICAgICAgY29udGVudDogc3RhdGUuc3JjLnNsaWNlKHBvcywgbWF0Y2hTdGFydClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9bIFxcbl0rL2csICcgJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50cmltKCksXG4gICAgICAgICAgYmxvY2s6IGZhbHNlLFxuICAgICAgICAgIGxldmVsOiBzdGF0ZS5sZXZlbFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHN0YXRlLnBvcyA9IG1hdGNoRW5kO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG5cbiAgaWYgKCFzaWxlbnQpIHsgc3RhdGUucGVuZGluZyArPSBtYXJrZXI7IH1cbiAgc3RhdGUucG9zICs9IG1hcmtlci5sZW5ndGg7XG4gIHJldHVybiB0cnVlO1xufTtcbiIsIi8vIFByb2Nlc3Mgfn5kZWxldGVkIHRleHR+flxuXG4ndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZGVsKHN0YXRlLCBzaWxlbnQpIHtcbiAgdmFyIGZvdW5kLFxuICAgICAgcG9zLFxuICAgICAgc3RhY2ssXG4gICAgICBtYXggPSBzdGF0ZS5wb3NNYXgsXG4gICAgICBzdGFydCA9IHN0YXRlLnBvcyxcbiAgICAgIGxhc3RDaGFyLFxuICAgICAgbmV4dENoYXI7XG5cbiAgaWYgKHN0YXRlLnNyYy5jaGFyQ29kZUF0KHN0YXJ0KSAhPT0gMHg3RS8qIH4gKi8pIHsgcmV0dXJuIGZhbHNlOyB9XG4gIGlmIChzaWxlbnQpIHsgcmV0dXJuIGZhbHNlOyB9IC8vIGRvbid0IHJ1biBhbnkgcGFpcnMgaW4gdmFsaWRhdGlvbiBtb2RlXG4gIGlmIChzdGFydCArIDQgPj0gbWF4KSB7IHJldHVybiBmYWxzZTsgfVxuICBpZiAoc3RhdGUuc3JjLmNoYXJDb2RlQXQoc3RhcnQgKyAxKSAhPT0gMHg3RS8qIH4gKi8pIHsgcmV0dXJuIGZhbHNlOyB9XG4gIGlmIChzdGF0ZS5sZXZlbCA+PSBzdGF0ZS5vcHRpb25zLm1heE5lc3RpbmcpIHsgcmV0dXJuIGZhbHNlOyB9XG5cbiAgbGFzdENoYXIgPSBzdGFydCA+IDAgPyBzdGF0ZS5zcmMuY2hhckNvZGVBdChzdGFydCAtIDEpIDogLTE7XG4gIG5leHRDaGFyID0gc3RhdGUuc3JjLmNoYXJDb2RlQXQoc3RhcnQgKyAyKTtcblxuICBpZiAobGFzdENoYXIgPT09IDB4N0UvKiB+ICovKSB7IHJldHVybiBmYWxzZTsgfVxuICBpZiAobmV4dENoYXIgPT09IDB4N0UvKiB+ICovKSB7IHJldHVybiBmYWxzZTsgfVxuICBpZiAobmV4dENoYXIgPT09IDB4MjAgfHwgbmV4dENoYXIgPT09IDB4MEEpIHsgcmV0dXJuIGZhbHNlOyB9XG5cbiAgcG9zID0gc3RhcnQgKyAyO1xuICB3aGlsZSAocG9zIDwgbWF4ICYmIHN0YXRlLnNyYy5jaGFyQ29kZUF0KHBvcykgPT09IDB4N0UvKiB+ICovKSB7IHBvcysrOyB9XG4gIGlmIChwb3MgPiBzdGFydCArIDMpIHtcbiAgICAvLyBzZXF1ZW5jZSBvZiA0KyBtYXJrZXJzIHRha2luZyBhcyBsaXRlcmFsLCBzYW1lIGFzIGluIGEgZW1waGFzaXNcbiAgICBzdGF0ZS5wb3MgKz0gcG9zIC0gc3RhcnQ7XG4gICAgaWYgKCFzaWxlbnQpIHsgc3RhdGUucGVuZGluZyArPSBzdGF0ZS5zcmMuc2xpY2Uoc3RhcnQsIHBvcyk7IH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHN0YXRlLnBvcyA9IHN0YXJ0ICsgMjtcbiAgc3RhY2sgPSAxO1xuXG4gIHdoaWxlIChzdGF0ZS5wb3MgKyAxIDwgbWF4KSB7XG4gICAgaWYgKHN0YXRlLnNyYy5jaGFyQ29kZUF0KHN0YXRlLnBvcykgPT09IDB4N0UvKiB+ICovKSB7XG4gICAgICBpZiAoc3RhdGUuc3JjLmNoYXJDb2RlQXQoc3RhdGUucG9zICsgMSkgPT09IDB4N0UvKiB+ICovKSB7XG4gICAgICAgIGxhc3RDaGFyID0gc3RhdGUuc3JjLmNoYXJDb2RlQXQoc3RhdGUucG9zIC0gMSk7XG4gICAgICAgIG5leHRDaGFyID0gc3RhdGUucG9zICsgMiA8IG1heCA/IHN0YXRlLnNyYy5jaGFyQ29kZUF0KHN0YXRlLnBvcyArIDIpIDogLTE7XG4gICAgICAgIGlmIChuZXh0Q2hhciAhPT0gMHg3RS8qIH4gKi8gJiYgbGFzdENoYXIgIT09IDB4N0UvKiB+ICovKSB7XG4gICAgICAgICAgaWYgKGxhc3RDaGFyICE9PSAweDIwICYmIGxhc3RDaGFyICE9PSAweDBBKSB7XG4gICAgICAgICAgICAvLyBjbG9zaW5nICd+fidcbiAgICAgICAgICAgIHN0YWNrLS07XG4gICAgICAgICAgfSBlbHNlIGlmIChuZXh0Q2hhciAhPT0gMHgyMCAmJiBuZXh0Q2hhciAhPT0gMHgwQSkge1xuICAgICAgICAgICAgLy8gb3BlbmluZyAnfn4nXG4gICAgICAgICAgICBzdGFjaysrO1xuICAgICAgICAgIH0gLy8gZWxzZSB7XG4gICAgICAgICAgICAvLyAgLy8gc3RhbmRhbG9uZSAnIH5+ICcgaW5kZW50ZWQgd2l0aCBzcGFjZXNcbiAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICBpZiAoc3RhY2sgPD0gMCkge1xuICAgICAgICAgICAgZm91bmQgPSB0cnVlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgc3RhdGUucGFyc2VyLnNraXBUb2tlbihzdGF0ZSk7XG4gIH1cblxuICBpZiAoIWZvdW5kKSB7XG4gICAgLy8gcGFyc2VyIGZhaWxlZCB0byBmaW5kIGVuZGluZyB0YWcsIHNvIGl0J3Mgbm90IHZhbGlkIGVtcGhhc2lzXG4gICAgc3RhdGUucG9zID0gc3RhcnQ7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLy8gZm91bmQhXG4gIHN0YXRlLnBvc01heCA9IHN0YXRlLnBvcztcbiAgc3RhdGUucG9zID0gc3RhcnQgKyAyO1xuXG4gIGlmICghc2lsZW50KSB7XG4gICAgc3RhdGUucHVzaCh7IHR5cGU6ICdkZWxfb3BlbicsIGxldmVsOiBzdGF0ZS5sZXZlbCsrIH0pO1xuICAgIHN0YXRlLnBhcnNlci50b2tlbml6ZShzdGF0ZSk7XG4gICAgc3RhdGUucHVzaCh7IHR5cGU6ICdkZWxfY2xvc2UnLCBsZXZlbDogLS1zdGF0ZS5sZXZlbCB9KTtcbiAgfVxuXG4gIHN0YXRlLnBvcyA9IHN0YXRlLnBvc01heCArIDI7XG4gIHN0YXRlLnBvc01heCA9IG1heDtcbiAgcmV0dXJuIHRydWU7XG59O1xuIiwiLy8gUHJvY2VzcyAqdGhpcyogYW5kIF90aGF0X1xuXG4ndXNlIHN0cmljdCc7XG5cblxuZnVuY3Rpb24gaXNBbHBoYU51bShjb2RlKSB7XG4gIHJldHVybiAoY29kZSA+PSAweDMwIC8qIDAgKi8gJiYgY29kZSA8PSAweDM5IC8qIDkgKi8pIHx8XG4gICAgICAgICAoY29kZSA+PSAweDQxIC8qIEEgKi8gJiYgY29kZSA8PSAweDVBIC8qIFogKi8pIHx8XG4gICAgICAgICAoY29kZSA+PSAweDYxIC8qIGEgKi8gJiYgY29kZSA8PSAweDdBIC8qIHogKi8pO1xufVxuXG4vLyBwYXJzZSBzZXF1ZW5jZSBvZiBlbXBoYXNpcyBtYXJrZXJzLFxuLy8gXCJzdGFydFwiIHNob3VsZCBwb2ludCBhdCBhIHZhbGlkIG1hcmtlclxuZnVuY3Rpb24gc2NhbkRlbGltcyhzdGF0ZSwgc3RhcnQpIHtcbiAgdmFyIHBvcyA9IHN0YXJ0LCBsYXN0Q2hhciwgbmV4dENoYXIsIGNvdW50LFxuICAgICAgY2FuX29wZW4gPSB0cnVlLFxuICAgICAgY2FuX2Nsb3NlID0gdHJ1ZSxcbiAgICAgIG1heCA9IHN0YXRlLnBvc01heCxcbiAgICAgIG1hcmtlciA9IHN0YXRlLnNyYy5jaGFyQ29kZUF0KHN0YXJ0KTtcblxuICBsYXN0Q2hhciA9IHN0YXJ0ID4gMCA/IHN0YXRlLnNyYy5jaGFyQ29kZUF0KHN0YXJ0IC0gMSkgOiAtMTtcblxuICB3aGlsZSAocG9zIDwgbWF4ICYmIHN0YXRlLnNyYy5jaGFyQ29kZUF0KHBvcykgPT09IG1hcmtlcikgeyBwb3MrKzsgfVxuICBpZiAocG9zID49IG1heCkgeyBjYW5fb3BlbiA9IGZhbHNlOyB9XG4gIGNvdW50ID0gcG9zIC0gc3RhcnQ7XG5cbiAgaWYgKGNvdW50ID49IDQpIHtcbiAgICAvLyBzZXF1ZW5jZSBvZiBmb3VyIG9yIG1vcmUgdW5lc2NhcGVkIG1hcmtlcnMgY2FuJ3Qgc3RhcnQvZW5kIGFuIGVtcGhhc2lzXG4gICAgY2FuX29wZW4gPSBjYW5fY2xvc2UgPSBmYWxzZTtcbiAgfSBlbHNlIHtcbiAgICBuZXh0Q2hhciA9IHBvcyA8IG1heCA/IHN0YXRlLnNyYy5jaGFyQ29kZUF0KHBvcykgOiAtMTtcblxuICAgIC8vIGNoZWNrIHdoaXRlc3BhY2UgY29uZGl0aW9uc1xuICAgIGlmIChuZXh0Q2hhciA9PT0gMHgyMCB8fCBuZXh0Q2hhciA9PT0gMHgwQSkgeyBjYW5fb3BlbiA9IGZhbHNlOyB9XG4gICAgaWYgKGxhc3RDaGFyID09PSAweDIwIHx8IGxhc3RDaGFyID09PSAweDBBKSB7IGNhbl9jbG9zZSA9IGZhbHNlOyB9XG5cbiAgICBpZiAobWFya2VyID09PSAweDVGIC8qIF8gKi8pIHtcbiAgICAgIC8vIGNoZWNrIGlmIHdlIGFyZW4ndCBpbnNpZGUgdGhlIHdvcmRcbiAgICAgIGlmIChpc0FscGhhTnVtKGxhc3RDaGFyKSkgeyBjYW5fb3BlbiA9IGZhbHNlOyB9XG4gICAgICBpZiAoaXNBbHBoYU51bShuZXh0Q2hhcikpIHsgY2FuX2Nsb3NlID0gZmFsc2U7IH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGNhbl9vcGVuOiBjYW5fb3BlbixcbiAgICBjYW5fY2xvc2U6IGNhbl9jbG9zZSxcbiAgICBkZWxpbXM6IGNvdW50XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZW1waGFzaXMoc3RhdGUsIHNpbGVudCkge1xuICB2YXIgc3RhcnRDb3VudCxcbiAgICAgIGNvdW50LFxuICAgICAgZm91bmQsXG4gICAgICBvbGRDb3VudCxcbiAgICAgIG5ld0NvdW50LFxuICAgICAgc3RhY2ssXG4gICAgICByZXMsXG4gICAgICBtYXggPSBzdGF0ZS5wb3NNYXgsXG4gICAgICBzdGFydCA9IHN0YXRlLnBvcyxcbiAgICAgIG1hcmtlciA9IHN0YXRlLnNyYy5jaGFyQ29kZUF0KHN0YXJ0KTtcblxuICBpZiAobWFya2VyICE9PSAweDVGLyogXyAqLyAmJiBtYXJrZXIgIT09IDB4MkEgLyogKiAqLykgeyByZXR1cm4gZmFsc2U7IH1cbiAgaWYgKHNpbGVudCkgeyByZXR1cm4gZmFsc2U7IH0gLy8gZG9uJ3QgcnVuIGFueSBwYWlycyBpbiB2YWxpZGF0aW9uIG1vZGVcblxuICByZXMgPSBzY2FuRGVsaW1zKHN0YXRlLCBzdGFydCk7XG4gIHN0YXJ0Q291bnQgPSByZXMuZGVsaW1zO1xuICBpZiAoIXJlcy5jYW5fb3Blbikge1xuICAgIHN0YXRlLnBvcyArPSBzdGFydENvdW50O1xuICAgIGlmICghc2lsZW50KSB7IHN0YXRlLnBlbmRpbmcgKz0gc3RhdGUuc3JjLnNsaWNlKHN0YXJ0LCBzdGF0ZS5wb3MpOyB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBpZiAoc3RhdGUubGV2ZWwgPj0gc3RhdGUub3B0aW9ucy5tYXhOZXN0aW5nKSB7IHJldHVybiBmYWxzZTsgfVxuXG4gIHN0YXRlLnBvcyA9IHN0YXJ0ICsgc3RhcnRDb3VudDtcbiAgc3RhY2sgPSBbIHN0YXJ0Q291bnQgXTtcblxuICB3aGlsZSAoc3RhdGUucG9zIDwgbWF4KSB7XG4gICAgaWYgKHN0YXRlLnNyYy5jaGFyQ29kZUF0KHN0YXRlLnBvcykgPT09IG1hcmtlcikge1xuICAgICAgcmVzID0gc2NhbkRlbGltcyhzdGF0ZSwgc3RhdGUucG9zKTtcbiAgICAgIGNvdW50ID0gcmVzLmRlbGltcztcbiAgICAgIGlmIChyZXMuY2FuX2Nsb3NlKSB7XG4gICAgICAgIG9sZENvdW50ID0gc3RhY2sucG9wKCk7XG4gICAgICAgIG5ld0NvdW50ID0gY291bnQ7XG5cbiAgICAgICAgd2hpbGUgKG9sZENvdW50ICE9PSBuZXdDb3VudCkge1xuICAgICAgICAgIGlmIChuZXdDb3VudCA8IG9sZENvdW50KSB7XG4gICAgICAgICAgICBzdGFjay5wdXNoKG9sZENvdW50IC0gbmV3Q291bnQpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gYXNzZXJ0KG5ld0NvdW50ID4gb2xkQ291bnQpXG4gICAgICAgICAgbmV3Q291bnQgLT0gb2xkQ291bnQ7XG5cbiAgICAgICAgICBpZiAoc3RhY2subGVuZ3RoID09PSAwKSB7IGJyZWFrOyB9XG4gICAgICAgICAgc3RhdGUucG9zICs9IG9sZENvdW50O1xuICAgICAgICAgIG9sZENvdW50ID0gc3RhY2sucG9wKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc3RhY2subGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgc3RhcnRDb3VudCA9IG9sZENvdW50O1xuICAgICAgICAgIGZvdW5kID0gdHJ1ZTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBzdGF0ZS5wb3MgKz0gY291bnQ7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAocmVzLmNhbl9vcGVuKSB7IHN0YWNrLnB1c2goY291bnQpOyB9XG4gICAgICBzdGF0ZS5wb3MgKz0gY291bnQ7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBzdGF0ZS5wYXJzZXIuc2tpcFRva2VuKHN0YXRlKTtcbiAgfVxuXG4gIGlmICghZm91bmQpIHtcbiAgICAvLyBwYXJzZXIgZmFpbGVkIHRvIGZpbmQgZW5kaW5nIHRhZywgc28gaXQncyBub3QgdmFsaWQgZW1waGFzaXNcbiAgICBzdGF0ZS5wb3MgPSBzdGFydDtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvLyBmb3VuZCFcbiAgc3RhdGUucG9zTWF4ID0gc3RhdGUucG9zO1xuICBzdGF0ZS5wb3MgPSBzdGFydCArIHN0YXJ0Q291bnQ7XG5cbiAgaWYgKCFzaWxlbnQpIHtcbiAgICBpZiAoc3RhcnRDb3VudCA9PT0gMiB8fCBzdGFydENvdW50ID09PSAzKSB7XG4gICAgICBzdGF0ZS5wdXNoKHsgdHlwZTogJ3N0cm9uZ19vcGVuJywgbGV2ZWw6IHN0YXRlLmxldmVsKysgfSk7XG4gICAgfVxuICAgIGlmIChzdGFydENvdW50ID09PSAxIHx8IHN0YXJ0Q291bnQgPT09IDMpIHtcbiAgICAgIHN0YXRlLnB1c2goeyB0eXBlOiAnZW1fb3BlbicsIGxldmVsOiBzdGF0ZS5sZXZlbCsrIH0pO1xuICAgIH1cblxuICAgIHN0YXRlLnBhcnNlci50b2tlbml6ZShzdGF0ZSk7XG5cbiAgICBpZiAoc3RhcnRDb3VudCA9PT0gMSB8fCBzdGFydENvdW50ID09PSAzKSB7XG4gICAgICBzdGF0ZS5wdXNoKHsgdHlwZTogJ2VtX2Nsb3NlJywgbGV2ZWw6IC0tc3RhdGUubGV2ZWwgfSk7XG4gICAgfVxuICAgIGlmIChzdGFydENvdW50ID09PSAyIHx8IHN0YXJ0Q291bnQgPT09IDMpIHtcbiAgICAgIHN0YXRlLnB1c2goeyB0eXBlOiAnc3Ryb25nX2Nsb3NlJywgbGV2ZWw6IC0tc3RhdGUubGV2ZWwgfSk7XG4gICAgfVxuICB9XG5cbiAgc3RhdGUucG9zID0gc3RhdGUucG9zTWF4ICsgc3RhcnRDb3VudDtcbiAgc3RhdGUucG9zTWF4ID0gbWF4O1xuICByZXR1cm4gdHJ1ZTtcbn07XG4iLCIvLyBQcm9jZXNzIGh0bWwgZW50aXR5IC0gJiMxMjM7LCAmI3hBRjssICZxdW90OywgLi4uXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIGVudGl0aWVzICAgICAgICAgID0gcmVxdWlyZSgnLi4vY29tbW9uL2VudGl0aWVzJyk7XG52YXIgaGFzICAgICAgICAgICAgICAgPSByZXF1aXJlKCcuLi9jb21tb24vdXRpbHMnKS5oYXM7XG52YXIgaXNWYWxpZEVudGl0eUNvZGUgPSByZXF1aXJlKCcuLi9jb21tb24vdXRpbHMnKS5pc1ZhbGlkRW50aXR5Q29kZTtcbnZhciBmcm9tQ29kZVBvaW50ICAgICA9IHJlcXVpcmUoJy4uL2NvbW1vbi91dGlscycpLmZyb21Db2RlUG9pbnQ7XG5cblxudmFyIERJR0lUQUxfUkUgPSAvXiYjKCg/OnhbYS1mMC05XXsxLDh9fFswLTldezEsOH0pKTsvaTtcbnZhciBOQU1FRF9SRSAgID0gL14mKFthLXpdW2EtejAtOV17MSwzMX0pOy9pO1xuXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZW50aXR5KHN0YXRlLCBzaWxlbnQpIHtcbiAgdmFyIGNoLCBjb2RlLCBtYXRjaCwgcG9zID0gc3RhdGUucG9zLCBtYXggPSBzdGF0ZS5wb3NNYXg7XG5cbiAgaWYgKHN0YXRlLnNyYy5jaGFyQ29kZUF0KHBvcykgIT09IDB4MjYvKiAmICovKSB7IHJldHVybiBmYWxzZTsgfVxuXG4gIGlmIChwb3MgKyAxIDwgbWF4KSB7XG4gICAgY2ggPSBzdGF0ZS5zcmMuY2hhckNvZGVBdChwb3MgKyAxKTtcblxuICAgIGlmIChjaCA9PT0gMHgyMyAvKiAjICovKSB7XG4gICAgICBtYXRjaCA9IHN0YXRlLnNyYy5zbGljZShwb3MpLm1hdGNoKERJR0lUQUxfUkUpO1xuICAgICAgaWYgKG1hdGNoKSB7XG4gICAgICAgIGlmICghc2lsZW50KSB7XG4gICAgICAgICAgY29kZSA9IG1hdGNoWzFdWzBdLnRvTG93ZXJDYXNlKCkgPT09ICd4JyA/IHBhcnNlSW50KG1hdGNoWzFdLnNsaWNlKDEpLCAxNikgOiBwYXJzZUludChtYXRjaFsxXSwgMTApO1xuICAgICAgICAgIHN0YXRlLnBlbmRpbmcgKz0gaXNWYWxpZEVudGl0eUNvZGUoY29kZSkgPyBmcm9tQ29kZVBvaW50KGNvZGUpIDogZnJvbUNvZGVQb2ludCgweEZGRkQpO1xuICAgICAgICB9XG4gICAgICAgIHN0YXRlLnBvcyArPSBtYXRjaFswXS5sZW5ndGg7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBtYXRjaCA9IHN0YXRlLnNyYy5zbGljZShwb3MpLm1hdGNoKE5BTUVEX1JFKTtcbiAgICAgIGlmIChtYXRjaCkge1xuICAgICAgICBpZiAoaGFzKGVudGl0aWVzLCBtYXRjaFsxXSkpIHtcbiAgICAgICAgICBpZiAoIXNpbGVudCkgeyBzdGF0ZS5wZW5kaW5nICs9IGVudGl0aWVzW21hdGNoWzFdXTsgfVxuICAgICAgICAgIHN0YXRlLnBvcyArPSBtYXRjaFswXS5sZW5ndGg7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpZiAoIXNpbGVudCkgeyBzdGF0ZS5wZW5kaW5nICs9ICcmJzsgfVxuICBzdGF0ZS5wb3MrKztcbiAgcmV0dXJuIHRydWU7XG59O1xuIiwiLy8gUHJvY2Vlc3MgZXNjYXBlZCBjaGFycyBhbmQgaGFyZGJyZWFrc1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBFU0NBUEVEID0gW107XG5cbmZvciAodmFyIGkgPSAwOyBpIDwgMjU2OyBpKyspIHsgRVNDQVBFRC5wdXNoKDApOyB9XG5cbidcXFxcIVwiIyQlJlxcJygpKissLi86Ozw9Pj9AW11eX2B7fH1+LSdcbiAgLnNwbGl0KCcnKS5mb3JFYWNoKGZ1bmN0aW9uKGNoKSB7IEVTQ0FQRURbY2guY2hhckNvZGVBdCgwKV0gPSAxOyB9KTtcblxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGVzY2FwZShzdGF0ZSwgc2lsZW50KSB7XG4gIHZhciBjaCwgcG9zID0gc3RhdGUucG9zLCBtYXggPSBzdGF0ZS5wb3NNYXg7XG5cbiAgaWYgKHN0YXRlLnNyYy5jaGFyQ29kZUF0KHBvcykgIT09IDB4NUMvKiBcXCAqLykgeyByZXR1cm4gZmFsc2U7IH1cblxuICBwb3MrKztcblxuICBpZiAocG9zIDwgbWF4KSB7XG4gICAgY2ggPSBzdGF0ZS5zcmMuY2hhckNvZGVBdChwb3MpO1xuXG4gICAgaWYgKGNoIDwgMjU2ICYmIEVTQ0FQRURbY2hdICE9PSAwKSB7XG4gICAgICBpZiAoIXNpbGVudCkgeyBzdGF0ZS5wZW5kaW5nICs9IHN0YXRlLnNyY1twb3NdOyB9XG4gICAgICBzdGF0ZS5wb3MgKz0gMjtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGlmIChjaCA9PT0gMHgwQSkge1xuICAgICAgaWYgKCFzaWxlbnQpIHtcbiAgICAgICAgc3RhdGUucHVzaCh7XG4gICAgICAgICAgdHlwZTogJ2hhcmRicmVhaycsXG4gICAgICAgICAgbGV2ZWw6IHN0YXRlLmxldmVsXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBwb3MrKztcbiAgICAgIC8vIHNraXAgbGVhZGluZyB3aGl0ZXNwYWNlcyBmcm9tIG5leHQgbGluZVxuICAgICAgd2hpbGUgKHBvcyA8IG1heCAmJiBzdGF0ZS5zcmMuY2hhckNvZGVBdChwb3MpID09PSAweDIwKSB7IHBvcysrOyB9XG5cbiAgICAgIHN0YXRlLnBvcyA9IHBvcztcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIGlmICghc2lsZW50KSB7IHN0YXRlLnBlbmRpbmcgKz0gJ1xcXFwnOyB9XG4gIHN0YXRlLnBvcysrO1xuICByZXR1cm4gdHJ1ZTtcbn07XG4iLCIvLyBQcm9jZXNzIGlubGluZSBmb290bm90ZXMgKF5bLi4uXSlcblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgcGFyc2VMaW5rTGFiZWwgPSByZXF1aXJlKCcuLi9oZWxwZXJzL3BhcnNlX2xpbmtfbGFiZWwnKTtcblxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGZvb3Rub3RlX2lubGluZShzdGF0ZSwgc2lsZW50KSB7XG4gIHZhciBsYWJlbFN0YXJ0LFxuICAgICAgbGFiZWxFbmQsXG4gICAgICBmb290bm90ZUlkLFxuICAgICAgb2xkTGVuZ3RoLFxuICAgICAgbWF4ID0gc3RhdGUucG9zTWF4LFxuICAgICAgc3RhcnQgPSBzdGF0ZS5wb3M7XG5cbiAgaWYgKHN0YXJ0ICsgMiA+PSBtYXgpIHsgcmV0dXJuIGZhbHNlOyB9XG4gIGlmIChzdGF0ZS5zcmMuY2hhckNvZGVBdChzdGFydCkgIT09IDB4NUUvKiBeICovKSB7IHJldHVybiBmYWxzZTsgfVxuICBpZiAoc3RhdGUuc3JjLmNoYXJDb2RlQXQoc3RhcnQgKyAxKSAhPT0gMHg1Qi8qIFsgKi8pIHsgcmV0dXJuIGZhbHNlOyB9XG4gIGlmIChzdGF0ZS5sZXZlbCA+PSBzdGF0ZS5vcHRpb25zLm1heE5lc3RpbmcpIHsgcmV0dXJuIGZhbHNlOyB9XG5cbiAgbGFiZWxTdGFydCA9IHN0YXJ0ICsgMjtcbiAgbGFiZWxFbmQgPSBwYXJzZUxpbmtMYWJlbChzdGF0ZSwgc3RhcnQgKyAxKTtcblxuICAvLyBwYXJzZXIgZmFpbGVkIHRvIGZpbmQgJ10nLCBzbyBpdCdzIG5vdCBhIHZhbGlkIG5vdGVcbiAgaWYgKGxhYmVsRW5kIDwgMCkgeyByZXR1cm4gZmFsc2U7IH1cblxuICAvLyBXZSBmb3VuZCB0aGUgZW5kIG9mIHRoZSBsaW5rLCBhbmQga25vdyBmb3IgYSBmYWN0IGl0J3MgYSB2YWxpZCBsaW5rO1xuICAvLyBzbyBhbGwgdGhhdCdzIGxlZnQgdG8gZG8gaXMgdG8gY2FsbCB0b2tlbml6ZXIuXG4gIC8vXG4gIGlmICghc2lsZW50KSB7XG4gICAgaWYgKCFzdGF0ZS5lbnYuZm9vdG5vdGVzKSB7IHN0YXRlLmVudi5mb290bm90ZXMgPSB7fTsgfVxuICAgIGlmICghc3RhdGUuZW52LmZvb3Rub3Rlcy5saXN0KSB7IHN0YXRlLmVudi5mb290bm90ZXMubGlzdCA9IFtdOyB9XG4gICAgZm9vdG5vdGVJZCA9IHN0YXRlLmVudi5mb290bm90ZXMubGlzdC5sZW5ndGg7XG5cbiAgICBzdGF0ZS5wb3MgPSBsYWJlbFN0YXJ0O1xuICAgIHN0YXRlLnBvc01heCA9IGxhYmVsRW5kO1xuXG4gICAgc3RhdGUucHVzaCh7XG4gICAgICB0eXBlOiAnZm9vdG5vdGVfcmVmJyxcbiAgICAgIGlkOiBmb290bm90ZUlkLFxuICAgICAgbGV2ZWw6IHN0YXRlLmxldmVsXG4gICAgfSk7XG4gICAgc3RhdGUubGlua0xldmVsKys7XG4gICAgb2xkTGVuZ3RoID0gc3RhdGUudG9rZW5zLmxlbmd0aDtcbiAgICBzdGF0ZS5wYXJzZXIudG9rZW5pemUoc3RhdGUpO1xuICAgIHN0YXRlLmVudi5mb290bm90ZXMubGlzdFtmb290bm90ZUlkXSA9IHsgdG9rZW5zOiBzdGF0ZS50b2tlbnMuc3BsaWNlKG9sZExlbmd0aCkgfTtcbiAgICBzdGF0ZS5saW5rTGV2ZWwtLTtcbiAgfVxuXG4gIHN0YXRlLnBvcyA9IGxhYmVsRW5kICsgMTtcbiAgc3RhdGUucG9zTWF4ID0gbWF4O1xuICByZXR1cm4gdHJ1ZTtcbn07XG4iLCIvLyBQcm9jZXNzIGZvb3Rub3RlIHJlZmVyZW5jZXMgKFteLi4uXSlcblxuJ3VzZSBzdHJpY3QnO1xuXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZm9vdG5vdGVfcmVmKHN0YXRlLCBzaWxlbnQpIHtcbiAgdmFyIGxhYmVsLFxuICAgICAgcG9zLFxuICAgICAgZm9vdG5vdGVJZCxcbiAgICAgIGZvb3Rub3RlU3ViSWQsXG4gICAgICBtYXggPSBzdGF0ZS5wb3NNYXgsXG4gICAgICBzdGFydCA9IHN0YXRlLnBvcztcblxuICAvLyBzaG91bGQgYmUgYXQgbGVhc3QgNCBjaGFycyAtIFwiW154XVwiXG4gIGlmIChzdGFydCArIDMgPiBtYXgpIHsgcmV0dXJuIGZhbHNlOyB9XG5cbiAgaWYgKCFzdGF0ZS5lbnYuZm9vdG5vdGVzIHx8ICFzdGF0ZS5lbnYuZm9vdG5vdGVzLnJlZnMpIHsgcmV0dXJuIGZhbHNlOyB9XG4gIGlmIChzdGF0ZS5zcmMuY2hhckNvZGVBdChzdGFydCkgIT09IDB4NUIvKiBbICovKSB7IHJldHVybiBmYWxzZTsgfVxuICBpZiAoc3RhdGUuc3JjLmNoYXJDb2RlQXQoc3RhcnQgKyAxKSAhPT0gMHg1RS8qIF4gKi8pIHsgcmV0dXJuIGZhbHNlOyB9XG4gIGlmIChzdGF0ZS5sZXZlbCA+PSBzdGF0ZS5vcHRpb25zLm1heE5lc3RpbmcpIHsgcmV0dXJuIGZhbHNlOyB9XG5cbiAgZm9yIChwb3MgPSBzdGFydCArIDI7IHBvcyA8IG1heDsgcG9zKyspIHtcbiAgICBpZiAoc3RhdGUuc3JjLmNoYXJDb2RlQXQocG9zKSA9PT0gMHgyMCkgeyByZXR1cm4gZmFsc2U7IH1cbiAgICBpZiAoc3RhdGUuc3JjLmNoYXJDb2RlQXQocG9zKSA9PT0gMHgwQSkgeyByZXR1cm4gZmFsc2U7IH1cbiAgICBpZiAoc3RhdGUuc3JjLmNoYXJDb2RlQXQocG9zKSA9PT0gMHg1RCAvKiBdICovKSB7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICBpZiAocG9zID09PSBzdGFydCArIDIpIHsgcmV0dXJuIGZhbHNlOyB9IC8vIG5vIGVtcHR5IGZvb3Rub3RlIGxhYmVsc1xuICBpZiAocG9zID49IG1heCkgeyByZXR1cm4gZmFsc2U7IH1cbiAgcG9zKys7XG5cbiAgbGFiZWwgPSBzdGF0ZS5zcmMuc2xpY2Uoc3RhcnQgKyAyLCBwb3MgLSAxKTtcbiAgaWYgKHR5cGVvZiBzdGF0ZS5lbnYuZm9vdG5vdGVzLnJlZnNbJzonICsgbGFiZWxdID09PSAndW5kZWZpbmVkJykgeyByZXR1cm4gZmFsc2U7IH1cblxuICBpZiAoIXNpbGVudCkge1xuICAgIGlmICghc3RhdGUuZW52LmZvb3Rub3Rlcy5saXN0KSB7IHN0YXRlLmVudi5mb290bm90ZXMubGlzdCA9IFtdOyB9XG5cbiAgICBpZiAoc3RhdGUuZW52LmZvb3Rub3Rlcy5yZWZzWyc6JyArIGxhYmVsXSA8IDApIHtcbiAgICAgIGZvb3Rub3RlSWQgPSBzdGF0ZS5lbnYuZm9vdG5vdGVzLmxpc3QubGVuZ3RoO1xuICAgICAgc3RhdGUuZW52LmZvb3Rub3Rlcy5saXN0W2Zvb3Rub3RlSWRdID0geyBsYWJlbDogbGFiZWwsIGNvdW50OiAwIH07XG4gICAgICBzdGF0ZS5lbnYuZm9vdG5vdGVzLnJlZnNbJzonICsgbGFiZWxdID0gZm9vdG5vdGVJZDtcbiAgICB9IGVsc2Uge1xuICAgICAgZm9vdG5vdGVJZCA9IHN0YXRlLmVudi5mb290bm90ZXMucmVmc1snOicgKyBsYWJlbF07XG4gICAgfVxuXG4gICAgZm9vdG5vdGVTdWJJZCA9IHN0YXRlLmVudi5mb290bm90ZXMubGlzdFtmb290bm90ZUlkXS5jb3VudDtcbiAgICBzdGF0ZS5lbnYuZm9vdG5vdGVzLmxpc3RbZm9vdG5vdGVJZF0uY291bnQrKztcblxuICAgIHN0YXRlLnB1c2goe1xuICAgICAgdHlwZTogJ2Zvb3Rub3RlX3JlZicsXG4gICAgICBpZDogZm9vdG5vdGVJZCxcbiAgICAgIHN1YklkOiBmb290bm90ZVN1YklkLFxuICAgICAgbGV2ZWw6IHN0YXRlLmxldmVsXG4gICAgfSk7XG4gIH1cblxuICBzdGF0ZS5wb3MgPSBwb3M7XG4gIHN0YXRlLnBvc01heCA9IG1heDtcbiAgcmV0dXJuIHRydWU7XG59O1xuIiwiLy8gUHJvY2VzcyBodG1sIHRhZ3NcblxuJ3VzZSBzdHJpY3QnO1xuXG5cbnZhciBIVE1MX1RBR19SRSA9IHJlcXVpcmUoJy4uL2NvbW1vbi9odG1sX3JlJykuSFRNTF9UQUdfUkU7XG5cblxuZnVuY3Rpb24gaXNMZXR0ZXIoY2gpIHtcbiAgLyplc2xpbnQgbm8tYml0d2lzZTowKi9cbiAgdmFyIGxjID0gY2ggfCAweDIwOyAvLyB0byBsb3dlciBjYXNlXG4gIHJldHVybiAobGMgPj0gMHg2MS8qIGEgKi8pICYmIChsYyA8PSAweDdhLyogeiAqLyk7XG59XG5cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBodG1sdGFnKHN0YXRlLCBzaWxlbnQpIHtcbiAgdmFyIGNoLCBtYXRjaCwgbWF4LCBwb3MgPSBzdGF0ZS5wb3M7XG5cbiAgaWYgKCFzdGF0ZS5vcHRpb25zLmh0bWwpIHsgcmV0dXJuIGZhbHNlOyB9XG5cbiAgLy8gQ2hlY2sgc3RhcnRcbiAgbWF4ID0gc3RhdGUucG9zTWF4O1xuICBpZiAoc3RhdGUuc3JjLmNoYXJDb2RlQXQocG9zKSAhPT0gMHgzQy8qIDwgKi8gfHxcbiAgICAgIHBvcyArIDIgPj0gbWF4KSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLy8gUXVpY2sgZmFpbCBvbiBzZWNvbmQgY2hhclxuICBjaCA9IHN0YXRlLnNyYy5jaGFyQ29kZUF0KHBvcyArIDEpO1xuICBpZiAoY2ggIT09IDB4MjEvKiAhICovICYmXG4gICAgICBjaCAhPT0gMHgzRi8qID8gKi8gJiZcbiAgICAgIGNoICE9PSAweDJGLyogLyAqLyAmJlxuICAgICAgIWlzTGV0dGVyKGNoKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIG1hdGNoID0gc3RhdGUuc3JjLnNsaWNlKHBvcykubWF0Y2goSFRNTF9UQUdfUkUpO1xuICBpZiAoIW1hdGNoKSB7IHJldHVybiBmYWxzZTsgfVxuXG4gIGlmICghc2lsZW50KSB7XG4gICAgc3RhdGUucHVzaCh7XG4gICAgICB0eXBlOiAnaHRtbHRhZycsXG4gICAgICBjb250ZW50OiBzdGF0ZS5zcmMuc2xpY2UocG9zLCBwb3MgKyBtYXRjaFswXS5sZW5ndGgpLFxuICAgICAgbGV2ZWw6IHN0YXRlLmxldmVsXG4gICAgfSk7XG4gIH1cbiAgc3RhdGUucG9zICs9IG1hdGNoWzBdLmxlbmd0aDtcbiAgcmV0dXJuIHRydWU7XG59O1xuIiwiLy8gUHJvY2VzcyArK2luc2VydGVkIHRleHQrK1xuXG4ndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaW5zKHN0YXRlLCBzaWxlbnQpIHtcbiAgdmFyIGZvdW5kLFxuICAgICAgcG9zLFxuICAgICAgc3RhY2ssXG4gICAgICBtYXggPSBzdGF0ZS5wb3NNYXgsXG4gICAgICBzdGFydCA9IHN0YXRlLnBvcyxcbiAgICAgIGxhc3RDaGFyLFxuICAgICAgbmV4dENoYXI7XG5cbiAgaWYgKHN0YXRlLnNyYy5jaGFyQ29kZUF0KHN0YXJ0KSAhPT0gMHgyQi8qICsgKi8pIHsgcmV0dXJuIGZhbHNlOyB9XG4gIGlmIChzaWxlbnQpIHsgcmV0dXJuIGZhbHNlOyB9IC8vIGRvbid0IHJ1biBhbnkgcGFpcnMgaW4gdmFsaWRhdGlvbiBtb2RlXG4gIGlmIChzdGFydCArIDQgPj0gbWF4KSB7IHJldHVybiBmYWxzZTsgfVxuICBpZiAoc3RhdGUuc3JjLmNoYXJDb2RlQXQoc3RhcnQgKyAxKSAhPT0gMHgyQi8qICsgKi8pIHsgcmV0dXJuIGZhbHNlOyB9XG4gIGlmIChzdGF0ZS5sZXZlbCA+PSBzdGF0ZS5vcHRpb25zLm1heE5lc3RpbmcpIHsgcmV0dXJuIGZhbHNlOyB9XG5cbiAgbGFzdENoYXIgPSBzdGFydCA+IDAgPyBzdGF0ZS5zcmMuY2hhckNvZGVBdChzdGFydCAtIDEpIDogLTE7XG4gIG5leHRDaGFyID0gc3RhdGUuc3JjLmNoYXJDb2RlQXQoc3RhcnQgKyAyKTtcblxuICBpZiAobGFzdENoYXIgPT09IDB4MkIvKiArICovKSB7IHJldHVybiBmYWxzZTsgfVxuICBpZiAobmV4dENoYXIgPT09IDB4MkIvKiArICovKSB7IHJldHVybiBmYWxzZTsgfVxuICBpZiAobmV4dENoYXIgPT09IDB4MjAgfHwgbmV4dENoYXIgPT09IDB4MEEpIHsgcmV0dXJuIGZhbHNlOyB9XG5cbiAgcG9zID0gc3RhcnQgKyAyO1xuICB3aGlsZSAocG9zIDwgbWF4ICYmIHN0YXRlLnNyYy5jaGFyQ29kZUF0KHBvcykgPT09IDB4MkIvKiArICovKSB7IHBvcysrOyB9XG4gIGlmIChwb3MgIT09IHN0YXJ0ICsgMikge1xuICAgIC8vIHNlcXVlbmNlIG9mIDMrIG1hcmtlcnMgdGFraW5nIGFzIGxpdGVyYWwsIHNhbWUgYXMgaW4gYSBlbXBoYXNpc1xuICAgIHN0YXRlLnBvcyArPSBwb3MgLSBzdGFydDtcbiAgICBpZiAoIXNpbGVudCkgeyBzdGF0ZS5wZW5kaW5nICs9IHN0YXRlLnNyYy5zbGljZShzdGFydCwgcG9zKTsgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgc3RhdGUucG9zID0gc3RhcnQgKyAyO1xuICBzdGFjayA9IDE7XG5cbiAgd2hpbGUgKHN0YXRlLnBvcyArIDEgPCBtYXgpIHtcbiAgICBpZiAoc3RhdGUuc3JjLmNoYXJDb2RlQXQoc3RhdGUucG9zKSA9PT0gMHgyQi8qICsgKi8pIHtcbiAgICAgIGlmIChzdGF0ZS5zcmMuY2hhckNvZGVBdChzdGF0ZS5wb3MgKyAxKSA9PT0gMHgyQi8qICsgKi8pIHtcbiAgICAgICAgbGFzdENoYXIgPSBzdGF0ZS5zcmMuY2hhckNvZGVBdChzdGF0ZS5wb3MgLSAxKTtcbiAgICAgICAgbmV4dENoYXIgPSBzdGF0ZS5wb3MgKyAyIDwgbWF4ID8gc3RhdGUuc3JjLmNoYXJDb2RlQXQoc3RhdGUucG9zICsgMikgOiAtMTtcbiAgICAgICAgaWYgKG5leHRDaGFyICE9PSAweDJCLyogKyAqLyAmJiBsYXN0Q2hhciAhPT0gMHgyQi8qICsgKi8pIHtcbiAgICAgICAgICBpZiAobGFzdENoYXIgIT09IDB4MjAgJiYgbGFzdENoYXIgIT09IDB4MEEpIHtcbiAgICAgICAgICAgIC8vIGNsb3NpbmcgJysrJ1xuICAgICAgICAgICAgc3RhY2stLTtcbiAgICAgICAgICB9IGVsc2UgaWYgKG5leHRDaGFyICE9PSAweDIwICYmIG5leHRDaGFyICE9PSAweDBBKSB7XG4gICAgICAgICAgICAvLyBvcGVuaW5nICcrKydcbiAgICAgICAgICAgIHN0YWNrKys7XG4gICAgICAgICAgfSAvLyBlbHNlIHtcbiAgICAgICAgICAgIC8vICAvLyBzdGFuZGFsb25lICcgKysgJyBpbmRlbnRlZCB3aXRoIHNwYWNlc1xuICAgICAgICAgICAgLy8gfVxuICAgICAgICAgIGlmIChzdGFjayA8PSAwKSB7XG4gICAgICAgICAgICBmb3VuZCA9IHRydWU7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBzdGF0ZS5wYXJzZXIuc2tpcFRva2VuKHN0YXRlKTtcbiAgfVxuXG4gIGlmICghZm91bmQpIHtcbiAgICAvLyBwYXJzZXIgZmFpbGVkIHRvIGZpbmQgZW5kaW5nIHRhZywgc28gaXQncyBub3QgdmFsaWQgZW1waGFzaXNcbiAgICBzdGF0ZS5wb3MgPSBzdGFydDtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvLyBmb3VuZCFcbiAgc3RhdGUucG9zTWF4ID0gc3RhdGUucG9zO1xuICBzdGF0ZS5wb3MgPSBzdGFydCArIDI7XG5cbiAgaWYgKCFzaWxlbnQpIHtcbiAgICBzdGF0ZS5wdXNoKHsgdHlwZTogJ2luc19vcGVuJywgbGV2ZWw6IHN0YXRlLmxldmVsKysgfSk7XG4gICAgc3RhdGUucGFyc2VyLnRva2VuaXplKHN0YXRlKTtcbiAgICBzdGF0ZS5wdXNoKHsgdHlwZTogJ2luc19jbG9zZScsIGxldmVsOiAtLXN0YXRlLmxldmVsIH0pO1xuICB9XG5cbiAgc3RhdGUucG9zID0gc3RhdGUucG9zTWF4ICsgMjtcbiAgc3RhdGUucG9zTWF4ID0gbWF4O1xuICByZXR1cm4gdHJ1ZTtcbn07XG4iLCIvLyBQcm9jZXNzIFtsaW5rc10oPHRvPiBcInN0dWZmXCIpXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIHBhcnNlTGlua0xhYmVsICAgICAgID0gcmVxdWlyZSgnLi4vaGVscGVycy9wYXJzZV9saW5rX2xhYmVsJyk7XG52YXIgcGFyc2VMaW5rRGVzdGluYXRpb24gPSByZXF1aXJlKCcuLi9oZWxwZXJzL3BhcnNlX2xpbmtfZGVzdGluYXRpb24nKTtcbnZhciBwYXJzZUxpbmtUaXRsZSAgICAgICA9IHJlcXVpcmUoJy4uL2hlbHBlcnMvcGFyc2VfbGlua190aXRsZScpO1xudmFyIG5vcm1hbGl6ZVJlZmVyZW5jZSAgID0gcmVxdWlyZSgnLi4vaGVscGVycy9ub3JtYWxpemVfcmVmZXJlbmNlJyk7XG5cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBsaW5rcyhzdGF0ZSwgc2lsZW50KSB7XG4gIHZhciBsYWJlbFN0YXJ0LFxuICAgICAgbGFiZWxFbmQsXG4gICAgICBsYWJlbCxcbiAgICAgIGhyZWYsXG4gICAgICB0aXRsZSxcbiAgICAgIHBvcyxcbiAgICAgIHJlZixcbiAgICAgIGNvZGUsXG4gICAgICBpc0ltYWdlID0gZmFsc2UsXG4gICAgICBvbGRQb3MgPSBzdGF0ZS5wb3MsXG4gICAgICBtYXggPSBzdGF0ZS5wb3NNYXgsXG4gICAgICBzdGFydCA9IHN0YXRlLnBvcyxcbiAgICAgIG1hcmtlciA9IHN0YXRlLnNyYy5jaGFyQ29kZUF0KHN0YXJ0KTtcblxuICBpZiAobWFya2VyID09PSAweDIxLyogISAqLykge1xuICAgIGlzSW1hZ2UgPSB0cnVlO1xuICAgIG1hcmtlciA9IHN0YXRlLnNyYy5jaGFyQ29kZUF0KCsrc3RhcnQpO1xuICB9XG5cbiAgaWYgKG1hcmtlciAhPT0gMHg1Qi8qIFsgKi8pIHsgcmV0dXJuIGZhbHNlOyB9XG4gIGlmIChzdGF0ZS5sZXZlbCA+PSBzdGF0ZS5vcHRpb25zLm1heE5lc3RpbmcpIHsgcmV0dXJuIGZhbHNlOyB9XG5cbiAgbGFiZWxTdGFydCA9IHN0YXJ0ICsgMTtcbiAgbGFiZWxFbmQgPSBwYXJzZUxpbmtMYWJlbChzdGF0ZSwgc3RhcnQpO1xuXG4gIC8vIHBhcnNlciBmYWlsZWQgdG8gZmluZCAnXScsIHNvIGl0J3Mgbm90IGEgdmFsaWQgbGlua1xuICBpZiAobGFiZWxFbmQgPCAwKSB7IHJldHVybiBmYWxzZTsgfVxuXG4gIHBvcyA9IGxhYmVsRW5kICsgMTtcbiAgaWYgKHBvcyA8IG1heCAmJiBzdGF0ZS5zcmMuY2hhckNvZGVBdChwb3MpID09PSAweDI4LyogKCAqLykge1xuICAgIC8vXG4gICAgLy8gSW5saW5lIGxpbmtcbiAgICAvL1xuXG4gICAgLy8gW2xpbmtdKCAgPGhyZWY+ICBcInRpdGxlXCIgIClcbiAgICAvLyAgICAgICAgXl4gc2tpcHBpbmcgdGhlc2Ugc3BhY2VzXG4gICAgcG9zKys7XG4gICAgZm9yICg7IHBvcyA8IG1heDsgcG9zKyspIHtcbiAgICAgIGNvZGUgPSBzdGF0ZS5zcmMuY2hhckNvZGVBdChwb3MpO1xuICAgICAgaWYgKGNvZGUgIT09IDB4MjAgJiYgY29kZSAhPT0gMHgwQSkgeyBicmVhazsgfVxuICAgIH1cbiAgICBpZiAocG9zID49IG1heCkgeyByZXR1cm4gZmFsc2U7IH1cblxuICAgIC8vIFtsaW5rXSggIDxocmVmPiAgXCJ0aXRsZVwiICApXG4gICAgLy8gICAgICAgICAgXl5eXl5eIHBhcnNpbmcgbGluayBkZXN0aW5hdGlvblxuICAgIHN0YXJ0ID0gcG9zO1xuICAgIGlmIChwYXJzZUxpbmtEZXN0aW5hdGlvbihzdGF0ZSwgcG9zKSkge1xuICAgICAgaHJlZiA9IHN0YXRlLmxpbmtDb250ZW50O1xuICAgICAgcG9zID0gc3RhdGUucG9zO1xuICAgIH0gZWxzZSB7XG4gICAgICBocmVmID0gJyc7XG4gICAgfVxuXG4gICAgLy8gW2xpbmtdKCAgPGhyZWY+ICBcInRpdGxlXCIgIClcbiAgICAvLyAgICAgICAgICAgICAgICBeXiBza2lwcGluZyB0aGVzZSBzcGFjZXNcbiAgICBzdGFydCA9IHBvcztcbiAgICBmb3IgKDsgcG9zIDwgbWF4OyBwb3MrKykge1xuICAgICAgY29kZSA9IHN0YXRlLnNyYy5jaGFyQ29kZUF0KHBvcyk7XG4gICAgICBpZiAoY29kZSAhPT0gMHgyMCAmJiBjb2RlICE9PSAweDBBKSB7IGJyZWFrOyB9XG4gICAgfVxuXG4gICAgLy8gW2xpbmtdKCAgPGhyZWY+ICBcInRpdGxlXCIgIClcbiAgICAvLyAgICAgICAgICAgICAgICAgIF5eXl5eXl4gcGFyc2luZyBsaW5rIHRpdGxlXG4gICAgaWYgKHBvcyA8IG1heCAmJiBzdGFydCAhPT0gcG9zICYmIHBhcnNlTGlua1RpdGxlKHN0YXRlLCBwb3MpKSB7XG4gICAgICB0aXRsZSA9IHN0YXRlLmxpbmtDb250ZW50O1xuICAgICAgcG9zID0gc3RhdGUucG9zO1xuXG4gICAgICAvLyBbbGlua10oICA8aHJlZj4gIFwidGl0bGVcIiAgKVxuICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgXl4gc2tpcHBpbmcgdGhlc2Ugc3BhY2VzXG4gICAgICBmb3IgKDsgcG9zIDwgbWF4OyBwb3MrKykge1xuICAgICAgICBjb2RlID0gc3RhdGUuc3JjLmNoYXJDb2RlQXQocG9zKTtcbiAgICAgICAgaWYgKGNvZGUgIT09IDB4MjAgJiYgY29kZSAhPT0gMHgwQSkgeyBicmVhazsgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aXRsZSA9ICcnO1xuICAgIH1cblxuICAgIGlmIChwb3MgPj0gbWF4IHx8IHN0YXRlLnNyYy5jaGFyQ29kZUF0KHBvcykgIT09IDB4MjkvKiApICovKSB7XG4gICAgICBzdGF0ZS5wb3MgPSBvbGRQb3M7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHBvcysrO1xuICB9IGVsc2Uge1xuICAgIC8vXG4gICAgLy8gTGluayByZWZlcmVuY2VcbiAgICAvL1xuXG4gICAgLy8gZG8gbm90IGFsbG93IG5lc3RlZCByZWZlcmVuY2UgbGlua3NcbiAgICBpZiAoc3RhdGUubGlua0xldmVsID4gMCkgeyByZXR1cm4gZmFsc2U7IH1cblxuICAgIC8vIFtmb29dICBbYmFyXVxuICAgIC8vICAgICAgXl4gb3B0aW9uYWwgd2hpdGVzcGFjZSAoY2FuIGluY2x1ZGUgbmV3bGluZXMpXG4gICAgZm9yICg7IHBvcyA8IG1heDsgcG9zKyspIHtcbiAgICAgIGNvZGUgPSBzdGF0ZS5zcmMuY2hhckNvZGVBdChwb3MpO1xuICAgICAgaWYgKGNvZGUgIT09IDB4MjAgJiYgY29kZSAhPT0gMHgwQSkgeyBicmVhazsgfVxuICAgIH1cblxuICAgIGlmIChwb3MgPCBtYXggJiYgc3RhdGUuc3JjLmNoYXJDb2RlQXQocG9zKSA9PT0gMHg1Qi8qIFsgKi8pIHtcbiAgICAgIHN0YXJ0ID0gcG9zICsgMTtcbiAgICAgIHBvcyA9IHBhcnNlTGlua0xhYmVsKHN0YXRlLCBwb3MpO1xuICAgICAgaWYgKHBvcyA+PSAwKSB7XG4gICAgICAgIGxhYmVsID0gc3RhdGUuc3JjLnNsaWNlKHN0YXJ0LCBwb3MrKyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwb3MgPSBzdGFydCAtIDE7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gY292ZXJzIGxhYmVsID09PSAnJyBhbmQgbGFiZWwgPT09IHVuZGVmaW5lZFxuICAgIC8vIChjb2xsYXBzZWQgcmVmZXJlbmNlIGxpbmsgYW5kIHNob3J0Y3V0IHJlZmVyZW5jZSBsaW5rIHJlc3BlY3RpdmVseSlcbiAgICBpZiAoIWxhYmVsKSB7IGxhYmVsID0gc3RhdGUuc3JjLnNsaWNlKGxhYmVsU3RhcnQsIGxhYmVsRW5kKTsgfVxuXG4gICAgcmVmID0gc3RhdGUuZW52LnJlZmVyZW5jZXNbbm9ybWFsaXplUmVmZXJlbmNlKGxhYmVsKV07XG4gICAgaWYgKCFyZWYpIHtcbiAgICAgIHN0YXRlLnBvcyA9IG9sZFBvcztcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaHJlZiA9IHJlZi5ocmVmO1xuICAgIHRpdGxlID0gcmVmLnRpdGxlO1xuICB9XG5cbiAgLy9cbiAgLy8gV2UgZm91bmQgdGhlIGVuZCBvZiB0aGUgbGluaywgYW5kIGtub3cgZm9yIGEgZmFjdCBpdCdzIGEgdmFsaWQgbGluaztcbiAgLy8gc28gYWxsIHRoYXQncyBsZWZ0IHRvIGRvIGlzIHRvIGNhbGwgdG9rZW5pemVyLlxuICAvL1xuICBpZiAoIXNpbGVudCkge1xuICAgIHN0YXRlLnBvcyA9IGxhYmVsU3RhcnQ7XG4gICAgc3RhdGUucG9zTWF4ID0gbGFiZWxFbmQ7XG5cbiAgICBpZiAoaXNJbWFnZSkge1xuICAgICAgc3RhdGUucHVzaCh7XG4gICAgICAgIHR5cGU6ICdpbWFnZScsXG4gICAgICAgIHNyYzogaHJlZixcbiAgICAgICAgdGl0bGU6IHRpdGxlLFxuICAgICAgICBhbHQ6IHN0YXRlLnNyYy5zdWJzdHIobGFiZWxTdGFydCwgbGFiZWxFbmQgLSBsYWJlbFN0YXJ0KSxcbiAgICAgICAgbGV2ZWw6IHN0YXRlLmxldmVsXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3RhdGUucHVzaCh7XG4gICAgICAgIHR5cGU6ICdsaW5rX29wZW4nLFxuICAgICAgICBocmVmOiBocmVmLFxuICAgICAgICB0aXRsZTogdGl0bGUsXG4gICAgICAgIGxldmVsOiBzdGF0ZS5sZXZlbCsrXG4gICAgICB9KTtcbiAgICAgIHN0YXRlLmxpbmtMZXZlbCsrO1xuICAgICAgc3RhdGUucGFyc2VyLnRva2VuaXplKHN0YXRlKTtcbiAgICAgIHN0YXRlLmxpbmtMZXZlbC0tO1xuICAgICAgc3RhdGUucHVzaCh7IHR5cGU6ICdsaW5rX2Nsb3NlJywgbGV2ZWw6IC0tc3RhdGUubGV2ZWwgfSk7XG4gICAgfVxuICB9XG5cbiAgc3RhdGUucG9zID0gcG9zO1xuICBzdGF0ZS5wb3NNYXggPSBtYXg7XG4gIHJldHVybiB0cnVlO1xufTtcbiIsIi8vIFByb2Nlc3MgPT1oaWdobGlnaHRlZCB0ZXh0PT1cblxuJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGRlbChzdGF0ZSwgc2lsZW50KSB7XG4gIHZhciBmb3VuZCxcbiAgICAgIHBvcyxcbiAgICAgIHN0YWNrLFxuICAgICAgbWF4ID0gc3RhdGUucG9zTWF4LFxuICAgICAgc3RhcnQgPSBzdGF0ZS5wb3MsXG4gICAgICBsYXN0Q2hhcixcbiAgICAgIG5leHRDaGFyO1xuXG4gIGlmIChzdGF0ZS5zcmMuY2hhckNvZGVBdChzdGFydCkgIT09IDB4M0QvKiA9ICovKSB7IHJldHVybiBmYWxzZTsgfVxuICBpZiAoc2lsZW50KSB7IHJldHVybiBmYWxzZTsgfSAvLyBkb24ndCBydW4gYW55IHBhaXJzIGluIHZhbGlkYXRpb24gbW9kZVxuICBpZiAoc3RhcnQgKyA0ID49IG1heCkgeyByZXR1cm4gZmFsc2U7IH1cbiAgaWYgKHN0YXRlLnNyYy5jaGFyQ29kZUF0KHN0YXJ0ICsgMSkgIT09IDB4M0QvKiA9ICovKSB7IHJldHVybiBmYWxzZTsgfVxuICBpZiAoc3RhdGUubGV2ZWwgPj0gc3RhdGUub3B0aW9ucy5tYXhOZXN0aW5nKSB7IHJldHVybiBmYWxzZTsgfVxuXG4gIGxhc3RDaGFyID0gc3RhcnQgPiAwID8gc3RhdGUuc3JjLmNoYXJDb2RlQXQoc3RhcnQgLSAxKSA6IC0xO1xuICBuZXh0Q2hhciA9IHN0YXRlLnNyYy5jaGFyQ29kZUF0KHN0YXJ0ICsgMik7XG5cbiAgaWYgKGxhc3RDaGFyID09PSAweDNELyogPSAqLykgeyByZXR1cm4gZmFsc2U7IH1cbiAgaWYgKG5leHRDaGFyID09PSAweDNELyogPSAqLykgeyByZXR1cm4gZmFsc2U7IH1cbiAgaWYgKG5leHRDaGFyID09PSAweDIwIHx8IG5leHRDaGFyID09PSAweDBBKSB7IHJldHVybiBmYWxzZTsgfVxuXG4gIHBvcyA9IHN0YXJ0ICsgMjtcbiAgd2hpbGUgKHBvcyA8IG1heCAmJiBzdGF0ZS5zcmMuY2hhckNvZGVBdChwb3MpID09PSAweDNELyogPSAqLykgeyBwb3MrKzsgfVxuICBpZiAocG9zICE9PSBzdGFydCArIDIpIHtcbiAgICAvLyBzZXF1ZW5jZSBvZiAzKyBtYXJrZXJzIHRha2luZyBhcyBsaXRlcmFsLCBzYW1lIGFzIGluIGEgZW1waGFzaXNcbiAgICBzdGF0ZS5wb3MgKz0gcG9zIC0gc3RhcnQ7XG4gICAgaWYgKCFzaWxlbnQpIHsgc3RhdGUucGVuZGluZyArPSBzdGF0ZS5zcmMuc2xpY2Uoc3RhcnQsIHBvcyk7IH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHN0YXRlLnBvcyA9IHN0YXJ0ICsgMjtcbiAgc3RhY2sgPSAxO1xuXG4gIHdoaWxlIChzdGF0ZS5wb3MgKyAxIDwgbWF4KSB7XG4gICAgaWYgKHN0YXRlLnNyYy5jaGFyQ29kZUF0KHN0YXRlLnBvcykgPT09IDB4M0QvKiA9ICovKSB7XG4gICAgICBpZiAoc3RhdGUuc3JjLmNoYXJDb2RlQXQoc3RhdGUucG9zICsgMSkgPT09IDB4M0QvKiA9ICovKSB7XG4gICAgICAgIGxhc3RDaGFyID0gc3RhdGUuc3JjLmNoYXJDb2RlQXQoc3RhdGUucG9zIC0gMSk7XG4gICAgICAgIG5leHRDaGFyID0gc3RhdGUucG9zICsgMiA8IG1heCA/IHN0YXRlLnNyYy5jaGFyQ29kZUF0KHN0YXRlLnBvcyArIDIpIDogLTE7XG4gICAgICAgIGlmIChuZXh0Q2hhciAhPT0gMHgzRC8qID0gKi8gJiYgbGFzdENoYXIgIT09IDB4M0QvKiA9ICovKSB7XG4gICAgICAgICAgaWYgKGxhc3RDaGFyICE9PSAweDIwICYmIGxhc3RDaGFyICE9PSAweDBBKSB7XG4gICAgICAgICAgICAvLyBjbG9zaW5nICc9PSdcbiAgICAgICAgICAgIHN0YWNrLS07XG4gICAgICAgICAgfSBlbHNlIGlmIChuZXh0Q2hhciAhPT0gMHgyMCAmJiBuZXh0Q2hhciAhPT0gMHgwQSkge1xuICAgICAgICAgICAgLy8gb3BlbmluZyAnPT0nXG4gICAgICAgICAgICBzdGFjaysrO1xuICAgICAgICAgIH0gLy8gZWxzZSB7XG4gICAgICAgICAgICAvLyAgLy8gc3RhbmRhbG9uZSAnID09ICcgaW5kZW50ZWQgd2l0aCBzcGFjZXNcbiAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICBpZiAoc3RhY2sgPD0gMCkge1xuICAgICAgICAgICAgZm91bmQgPSB0cnVlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgc3RhdGUucGFyc2VyLnNraXBUb2tlbihzdGF0ZSk7XG4gIH1cblxuICBpZiAoIWZvdW5kKSB7XG4gICAgLy8gcGFyc2VyIGZhaWxlZCB0byBmaW5kIGVuZGluZyB0YWcsIHNvIGl0J3Mgbm90IHZhbGlkIGVtcGhhc2lzXG4gICAgc3RhdGUucG9zID0gc3RhcnQ7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLy8gZm91bmQhXG4gIHN0YXRlLnBvc01heCA9IHN0YXRlLnBvcztcbiAgc3RhdGUucG9zID0gc3RhcnQgKyAyO1xuXG4gIGlmICghc2lsZW50KSB7XG4gICAgc3RhdGUucHVzaCh7IHR5cGU6ICdtYXJrX29wZW4nLCBsZXZlbDogc3RhdGUubGV2ZWwrKyB9KTtcbiAgICBzdGF0ZS5wYXJzZXIudG9rZW5pemUoc3RhdGUpO1xuICAgIHN0YXRlLnB1c2goeyB0eXBlOiAnbWFya19jbG9zZScsIGxldmVsOiAtLXN0YXRlLmxldmVsIH0pO1xuICB9XG5cbiAgc3RhdGUucG9zID0gc3RhdGUucG9zTWF4ICsgMjtcbiAgc3RhdGUucG9zTWF4ID0gbWF4O1xuICByZXR1cm4gdHJ1ZTtcbn07XG4iLCIvLyBQcm9jZWVzcyAnXFxuJ1xuXG4ndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gbmV3bGluZShzdGF0ZSwgc2lsZW50KSB7XG4gIHZhciBwbWF4LCBtYXgsIHBvcyA9IHN0YXRlLnBvcztcblxuICBpZiAoc3RhdGUuc3JjLmNoYXJDb2RlQXQocG9zKSAhPT0gMHgwQS8qIFxcbiAqLykgeyByZXR1cm4gZmFsc2U7IH1cblxuICBwbWF4ID0gc3RhdGUucGVuZGluZy5sZW5ndGggLSAxO1xuICBtYXggPSBzdGF0ZS5wb3NNYXg7XG5cbiAgLy8gJyAgXFxuJyAtPiBoYXJkYnJlYWtcbiAgLy8gTG9va3VwIGluIHBlbmRpbmcgY2hhcnMgaXMgYmFkIHByYWN0aWNlISBEb24ndCBjb3B5IHRvIG90aGVyIHJ1bGVzIVxuICAvLyBQZW5kaW5nIHN0cmluZyBpcyBzdG9yZWQgaW4gY29uY2F0IG1vZGUsIGluZGV4ZWQgbG9va3VwcyB3aWxsIGNhdXNlXG4gIC8vIGNvbnZlcnRpb24gdG8gZmxhdCBtb2RlLlxuICBpZiAoIXNpbGVudCkge1xuICAgIGlmIChwbWF4ID49IDAgJiYgc3RhdGUucGVuZGluZy5jaGFyQ29kZUF0KHBtYXgpID09PSAweDIwKSB7XG4gICAgICBpZiAocG1heCA+PSAxICYmIHN0YXRlLnBlbmRpbmcuY2hhckNvZGVBdChwbWF4IC0gMSkgPT09IDB4MjApIHtcbiAgICAgICAgc3RhdGUucGVuZGluZyA9IHN0YXRlLnBlbmRpbmcucmVwbGFjZSgvICskLywgJycpO1xuICAgICAgICBzdGF0ZS5wdXNoKHtcbiAgICAgICAgICB0eXBlOiAnaGFyZGJyZWFrJyxcbiAgICAgICAgICBsZXZlbDogc3RhdGUubGV2ZWxcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzdGF0ZS5wZW5kaW5nID0gc3RhdGUucGVuZGluZy5zbGljZSgwLCAtMSk7XG4gICAgICAgIHN0YXRlLnB1c2goe1xuICAgICAgICAgIHR5cGU6ICdzb2Z0YnJlYWsnLFxuICAgICAgICAgIGxldmVsOiBzdGF0ZS5sZXZlbFxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgIH0gZWxzZSB7XG4gICAgICBzdGF0ZS5wdXNoKHtcbiAgICAgICAgdHlwZTogJ3NvZnRicmVhaycsXG4gICAgICAgIGxldmVsOiBzdGF0ZS5sZXZlbFxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcG9zKys7XG5cbiAgLy8gc2tpcCBoZWFkaW5nIHNwYWNlcyBmb3IgbmV4dCBsaW5lXG4gIHdoaWxlIChwb3MgPCBtYXggJiYgc3RhdGUuc3JjLmNoYXJDb2RlQXQocG9zKSA9PT0gMHgyMCkgeyBwb3MrKzsgfVxuXG4gIHN0YXRlLnBvcyA9IHBvcztcbiAgcmV0dXJuIHRydWU7XG59O1xuIiwiLy8gSW5saW5lIHBhcnNlciBzdGF0ZVxuXG4ndXNlIHN0cmljdCc7XG5cblxuZnVuY3Rpb24gU3RhdGVJbmxpbmUoc3JjLCBwYXJzZXJJbmxpbmUsIG9wdGlvbnMsIGVudiwgb3V0VG9rZW5zKSB7XG4gIHRoaXMuc3JjID0gc3JjO1xuICB0aGlzLmVudiA9IGVudjtcbiAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgdGhpcy5wYXJzZXIgPSBwYXJzZXJJbmxpbmU7XG4gIHRoaXMudG9rZW5zID0gb3V0VG9rZW5zO1xuICB0aGlzLnBvcyA9IDA7XG4gIHRoaXMucG9zTWF4ID0gdGhpcy5zcmMubGVuZ3RoO1xuICB0aGlzLmxldmVsID0gMDtcbiAgdGhpcy5wZW5kaW5nID0gJyc7XG4gIHRoaXMucGVuZGluZ0xldmVsID0gMDtcblxuICB0aGlzLmNhY2hlID0gW107ICAgICAgICAvLyBTdG9yZXMgeyBzdGFydDogZW5kIH0gcGFpcnMuIFVzZWZ1bCBmb3IgYmFja3RyYWNrXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8vIG9wdGltaXphdGlvbiBvZiBwYWlycyBwYXJzZSAoZW1waGFzaXMsIHN0cmlrZXMpLlxuXG4gIC8vIExpbmsgcGFyc2VyIHN0YXRlIHZhcnNcblxuICB0aGlzLmlzSW5MYWJlbCA9IGZhbHNlOyAvLyBTZXQgdHJ1ZSB3aGVuIHNlZWsgbGluayBsYWJlbCAtIHdlIHNob3VsZCBkaXNhYmxlXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFwicGFpcmVkXCIgcnVsZXMgKGVtcGhhc2lzLCBzdHJpa2VzKSB0byBub3Qgc2tpcFxuICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0YWlsaW5nIGBdYFxuXG4gIHRoaXMubGlua0xldmVsID0gMDsgICAgIC8vIEluY3JlbWVudCBmb3IgZWFjaCBuZXN0aW5nIGxpbmsuIFVzZWQgdG8gcHJldmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBuZXN0aW5nIGluIGRlZmluaXRpb25zXG5cbiAgdGhpcy5saW5rQ29udGVudCA9ICcnOyAgLy8gVGVtcG9yYXJ5IHN0b3JhZ2UgZm9yIGxpbmsgdXJsXG5cbiAgdGhpcy5sYWJlbFVubWF0Y2hlZFNjb3BlcyA9IDA7IC8vIFRyYWNrIHVucGFpcmVkIGBbYCBmb3IgbGluayBsYWJlbHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIChiYWNrdHJhY2sgb3B0aW1pemF0aW9uKVxufVxuXG5cbi8vIEZsdXNoIHBlbmRpbmcgdGV4dFxuLy9cblN0YXRlSW5saW5lLnByb3RvdHlwZS5wdXNoUGVuZGluZyA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy50b2tlbnMucHVzaCh7XG4gICAgdHlwZTogJ3RleHQnLFxuICAgIGNvbnRlbnQ6IHRoaXMucGVuZGluZyxcbiAgICBsZXZlbDogdGhpcy5wZW5kaW5nTGV2ZWxcbiAgfSk7XG4gIHRoaXMucGVuZGluZyA9ICcnO1xufTtcblxuXG4vLyBQdXNoIG5ldyB0b2tlbiB0byBcInN0cmVhbVwiLlxuLy8gSWYgcGVuZGluZyB0ZXh0IGV4aXN0cyAtIGZsdXNoIGl0IGFzIHRleHQgdG9rZW5cbi8vXG5TdGF0ZUlubGluZS5wcm90b3R5cGUucHVzaCA9IGZ1bmN0aW9uICh0b2tlbikge1xuICBpZiAodGhpcy5wZW5kaW5nKSB7XG4gICAgdGhpcy5wdXNoUGVuZGluZygpO1xuICB9XG5cbiAgdGhpcy50b2tlbnMucHVzaCh0b2tlbik7XG4gIHRoaXMucGVuZGluZ0xldmVsID0gdGhpcy5sZXZlbDtcbn07XG5cblxuLy8gU3RvcmUgdmFsdWUgdG8gY2FjaGUuXG4vLyAhISEgSW1wbGVtZW50YXRpb24gaGFzIHBhcnNlci1zcGVjaWZpYyBvcHRpbWl6YXRpb25zXG4vLyAhISEga2V5cyBNVVNUIGJlIGludGVnZXIsID49IDA7IHZhbHVlcyBNVVNUIGJlIGludGVnZXIsID4gMFxuLy9cblN0YXRlSW5saW5lLnByb3RvdHlwZS5jYWNoZVNldCA9IGZ1bmN0aW9uIChrZXksIHZhbCkge1xuICBmb3IgKHZhciBpID0gdGhpcy5jYWNoZS5sZW5ndGg7IGkgPD0ga2V5OyBpKyspIHtcbiAgICB0aGlzLmNhY2hlLnB1c2goMCk7XG4gIH1cblxuICB0aGlzLmNhY2hlW2tleV0gPSB2YWw7XG59O1xuXG5cbi8vIEdldCBjYWNoZSB2YWx1ZVxuLy9cblN0YXRlSW5saW5lLnByb3RvdHlwZS5jYWNoZUdldCA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgcmV0dXJuIGtleSA8IHRoaXMuY2FjaGUubGVuZ3RoID8gdGhpcy5jYWNoZVtrZXldIDogMDtcbn07XG5cblxubW9kdWxlLmV4cG9ydHMgPSBTdGF0ZUlubGluZTtcbiIsIi8vIFByb2Nlc3MgfnN1YnNjcmlwdH5cblxuJ3VzZSBzdHJpY3QnO1xuXG4vLyBzYW1lIGFzIFVORVNDQVBFX01EX1JFIHBsdXMgYSBzcGFjZVxudmFyIFVORVNDQVBFX1JFID0gL1xcXFwoWyBcXFxcIVwiIyQlJicoKSorLC5cXC86Ozw9Pj9AW1xcXV5fYHt8fX4tXSkvZztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBzdWIoc3RhdGUsIHNpbGVudCkge1xuICB2YXIgZm91bmQsXG4gICAgICBjb250ZW50LFxuICAgICAgbWF4ID0gc3RhdGUucG9zTWF4LFxuICAgICAgc3RhcnQgPSBzdGF0ZS5wb3M7XG5cbiAgaWYgKHN0YXRlLnNyYy5jaGFyQ29kZUF0KHN0YXJ0KSAhPT0gMHg3RS8qIH4gKi8pIHsgcmV0dXJuIGZhbHNlOyB9XG4gIGlmIChzaWxlbnQpIHsgcmV0dXJuIGZhbHNlOyB9IC8vIGRvbid0IHJ1biBhbnkgcGFpcnMgaW4gdmFsaWRhdGlvbiBtb2RlXG4gIGlmIChzdGFydCArIDIgPj0gbWF4KSB7IHJldHVybiBmYWxzZTsgfVxuICBpZiAoc3RhdGUubGV2ZWwgPj0gc3RhdGUub3B0aW9ucy5tYXhOZXN0aW5nKSB7IHJldHVybiBmYWxzZTsgfVxuXG4gIHN0YXRlLnBvcyA9IHN0YXJ0ICsgMTtcblxuICB3aGlsZSAoc3RhdGUucG9zIDwgbWF4KSB7XG4gICAgaWYgKHN0YXRlLnNyYy5jaGFyQ29kZUF0KHN0YXRlLnBvcykgPT09IDB4N0UvKiB+ICovKSB7XG4gICAgICBmb3VuZCA9IHRydWU7XG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBzdGF0ZS5wYXJzZXIuc2tpcFRva2VuKHN0YXRlKTtcbiAgfVxuXG4gIGlmICghZm91bmQgfHwgc3RhcnQgKyAxID09PSBzdGF0ZS5wb3MpIHtcbiAgICBzdGF0ZS5wb3MgPSBzdGFydDtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBjb250ZW50ID0gc3RhdGUuc3JjLnNsaWNlKHN0YXJ0ICsgMSwgc3RhdGUucG9zKTtcblxuICAvLyBkb24ndCBhbGxvdyB1bmVzY2FwZWQgc3BhY2VzL25ld2xpbmVzIGluc2lkZVxuICBpZiAoY29udGVudC5tYXRjaCgvKF58W15cXFxcXSkoXFxcXFxcXFwpKlxccy8pKSB7XG4gICAgc3RhdGUucG9zID0gc3RhcnQ7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLy8gZm91bmQhXG4gIHN0YXRlLnBvc01heCA9IHN0YXRlLnBvcztcbiAgc3RhdGUucG9zID0gc3RhcnQgKyAxO1xuXG4gIGlmICghc2lsZW50KSB7XG4gICAgc3RhdGUucHVzaCh7XG4gICAgICB0eXBlOiAnc3ViJyxcbiAgICAgIGxldmVsOiBzdGF0ZS5sZXZlbCxcbiAgICAgIGNvbnRlbnQ6IGNvbnRlbnQucmVwbGFjZShVTkVTQ0FQRV9SRSwgJyQxJylcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRlLnBvcyA9IHN0YXRlLnBvc01heCArIDE7XG4gIHN0YXRlLnBvc01heCA9IG1heDtcbiAgcmV0dXJuIHRydWU7XG59O1xuIiwiLy8gUHJvY2VzcyBec3VwZXJzY3JpcHReXG5cbid1c2Ugc3RyaWN0JztcblxuLy8gc2FtZSBhcyBVTkVTQ0FQRV9NRF9SRSBwbHVzIGEgc3BhY2VcbnZhciBVTkVTQ0FQRV9SRSA9IC9cXFxcKFsgXFxcXCFcIiMkJSYnKCkqKywuXFwvOjs8PT4/QFtcXF1eX2B7fH1+LV0pL2c7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gc3VwKHN0YXRlLCBzaWxlbnQpIHtcbiAgdmFyIGZvdW5kLFxuICAgICAgY29udGVudCxcbiAgICAgIG1heCA9IHN0YXRlLnBvc01heCxcbiAgICAgIHN0YXJ0ID0gc3RhdGUucG9zO1xuXG4gIGlmIChzdGF0ZS5zcmMuY2hhckNvZGVBdChzdGFydCkgIT09IDB4NUUvKiBeICovKSB7IHJldHVybiBmYWxzZTsgfVxuICBpZiAoc2lsZW50KSB7IHJldHVybiBmYWxzZTsgfSAvLyBkb24ndCBydW4gYW55IHBhaXJzIGluIHZhbGlkYXRpb24gbW9kZVxuICBpZiAoc3RhcnQgKyAyID49IG1heCkgeyByZXR1cm4gZmFsc2U7IH1cbiAgaWYgKHN0YXRlLmxldmVsID49IHN0YXRlLm9wdGlvbnMubWF4TmVzdGluZykgeyByZXR1cm4gZmFsc2U7IH1cblxuICBzdGF0ZS5wb3MgPSBzdGFydCArIDE7XG5cbiAgd2hpbGUgKHN0YXRlLnBvcyA8IG1heCkge1xuICAgIGlmIChzdGF0ZS5zcmMuY2hhckNvZGVBdChzdGF0ZS5wb3MpID09PSAweDVFLyogXiAqLykge1xuICAgICAgZm91bmQgPSB0cnVlO1xuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgc3RhdGUucGFyc2VyLnNraXBUb2tlbihzdGF0ZSk7XG4gIH1cblxuICBpZiAoIWZvdW5kIHx8IHN0YXJ0ICsgMSA9PT0gc3RhdGUucG9zKSB7XG4gICAgc3RhdGUucG9zID0gc3RhcnQ7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgY29udGVudCA9IHN0YXRlLnNyYy5zbGljZShzdGFydCArIDEsIHN0YXRlLnBvcyk7XG5cbiAgLy8gZG9uJ3QgYWxsb3cgdW5lc2NhcGVkIHNwYWNlcy9uZXdsaW5lcyBpbnNpZGVcbiAgaWYgKGNvbnRlbnQubWF0Y2goLyhefFteXFxcXF0pKFxcXFxcXFxcKSpcXHMvKSkge1xuICAgIHN0YXRlLnBvcyA9IHN0YXJ0O1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8vIGZvdW5kIVxuICBzdGF0ZS5wb3NNYXggPSBzdGF0ZS5wb3M7XG4gIHN0YXRlLnBvcyA9IHN0YXJ0ICsgMTtcblxuICBpZiAoIXNpbGVudCkge1xuICAgIHN0YXRlLnB1c2goe1xuICAgICAgdHlwZTogJ3N1cCcsXG4gICAgICBsZXZlbDogc3RhdGUubGV2ZWwsXG4gICAgICBjb250ZW50OiBjb250ZW50LnJlcGxhY2UoVU5FU0NBUEVfUkUsICckMScpXG4gICAgfSk7XG4gIH1cblxuICBzdGF0ZS5wb3MgPSBzdGF0ZS5wb3NNYXggKyAxO1xuICBzdGF0ZS5wb3NNYXggPSBtYXg7XG4gIHJldHVybiB0cnVlO1xufTtcbiIsIi8vIFNraXAgdGV4dCBjaGFyYWN0ZXJzIGZvciB0ZXh0IHRva2VuLCBwbGFjZSB0aG9zZSB0byBwZW5kaW5nIGJ1ZmZlclxuLy8gYW5kIGluY3JlbWVudCBjdXJyZW50IHBvc1xuXG4ndXNlIHN0cmljdCc7XG5cblxuLy8gUnVsZSB0byBza2lwIHB1cmUgdGV4dFxuLy8gJ3t9JCVAfis9OicgcmVzZXJ2ZWQgZm9yIGV4dGVudGlvbnNcblxuZnVuY3Rpb24gaXNUZXJtaW5hdG9yQ2hhcihjaCkge1xuICBzd2l0Y2ggKGNoKSB7XG4gICAgY2FzZSAweDBBLyogXFxuICovOlxuICAgIGNhc2UgMHg1Qy8qIFxcICovOlxuICAgIGNhc2UgMHg2MC8qIGAgKi86XG4gICAgY2FzZSAweDJBLyogKiAqLzpcbiAgICBjYXNlIDB4NUYvKiBfICovOlxuICAgIGNhc2UgMHg1RS8qIF4gKi86XG4gICAgY2FzZSAweDVCLyogWyAqLzpcbiAgICBjYXNlIDB4NUQvKiBdICovOlxuICAgIGNhc2UgMHgyMS8qICEgKi86XG4gICAgY2FzZSAweDI2LyogJiAqLzpcbiAgICBjYXNlIDB4M0MvKiA8ICovOlxuICAgIGNhc2UgMHgzRS8qID4gKi86XG4gICAgY2FzZSAweDdCLyogeyAqLzpcbiAgICBjYXNlIDB4N0QvKiB9ICovOlxuICAgIGNhc2UgMHgyNC8qICQgKi86XG4gICAgY2FzZSAweDI1LyogJSAqLzpcbiAgICBjYXNlIDB4NDAvKiBAICovOlxuICAgIGNhc2UgMHg3RS8qIH4gKi86XG4gICAgY2FzZSAweDJCLyogKyAqLzpcbiAgICBjYXNlIDB4M0QvKiA9ICovOlxuICAgIGNhc2UgMHgzQS8qIDogKi86XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gdGV4dChzdGF0ZSwgc2lsZW50KSB7XG4gIHZhciBwb3MgPSBzdGF0ZS5wb3M7XG5cbiAgd2hpbGUgKHBvcyA8IHN0YXRlLnBvc01heCAmJiAhaXNUZXJtaW5hdG9yQ2hhcihzdGF0ZS5zcmMuY2hhckNvZGVBdChwb3MpKSkge1xuICAgIHBvcysrO1xuICB9XG5cbiAgaWYgKHBvcyA9PT0gc3RhdGUucG9zKSB7IHJldHVybiBmYWxzZTsgfVxuXG4gIGlmICghc2lsZW50KSB7IHN0YXRlLnBlbmRpbmcgKz0gc3RhdGUuc3JjLnNsaWNlKHN0YXRlLnBvcywgcG9zKTsgfVxuXG4gIHN0YXRlLnBvcyA9IHBvcztcblxuICByZXR1cm4gdHJ1ZTtcbn07XG4iLCIoZnVuY3Rpb24gKHJvb3QsIGZhY3RvcnkpIHtcclxuICBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7XHJcbiAgICAvLyBBTUQuIFJlZ2lzdGVyIGFzIGFuIGFub255bW91cyBtb2R1bGUuXHJcbiAgICBkZWZpbmUoW10sIGZ1bmN0aW9uICgpIHtcclxuICAgICAgcmV0dXJuIChyb290LnJldHVybkV4cG9ydHNHbG9iYWwgPSBmYWN0b3J5KCkpO1xyXG4gICAgfSk7XHJcbiAgfSBlbHNlIGlmICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpIHtcclxuICAgIC8vIE5vZGUuIERvZXMgbm90IHdvcmsgd2l0aCBzdHJpY3QgQ29tbW9uSlMsIGJ1dFxyXG4gICAgLy8gb25seSBDb21tb25KUy1saWtlIGVudmlyb21lbnRzIHRoYXQgc3VwcG9ydCBtb2R1bGUuZXhwb3J0cyxcclxuICAgIC8vIGxpa2UgTm9kZS5cclxuICAgIG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICByb290WydBdXRvbGlua2VyJ10gPSBmYWN0b3J5KCk7XHJcbiAgfVxyXG59KHRoaXMsIGZ1bmN0aW9uICgpIHtcclxuXHJcblx0LyohXHJcblx0ICogQXV0b2xpbmtlci5qc1xyXG5cdCAqIDAuMTUuMlxyXG5cdCAqXHJcblx0ICogQ29weXJpZ2h0KGMpIDIwMTUgR3JlZ29yeSBKYWNvYnMgPGdyZWdAZ3JlZy1qYWNvYnMuY29tPlxyXG5cdCAqIE1JVCBMaWNlbnNlZC4gaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcclxuXHQgKlxyXG5cdCAqIGh0dHBzOi8vZ2l0aHViLmNvbS9ncmVnamFjb2JzL0F1dG9saW5rZXIuanNcclxuXHQgKi9cclxuXHQvKipcclxuXHQgKiBAY2xhc3MgQXV0b2xpbmtlclxyXG5cdCAqIEBleHRlbmRzIE9iamVjdFxyXG5cdCAqIFxyXG5cdCAqIFV0aWxpdHkgY2xhc3MgdXNlZCB0byBwcm9jZXNzIGEgZ2l2ZW4gc3RyaW5nIG9mIHRleHQsIGFuZCB3cmFwIHRoZSBVUkxzLCBlbWFpbCBhZGRyZXNzZXMsIGFuZCBUd2l0dGVyIGhhbmRsZXMgaW4gXHJcblx0ICogdGhlIGFwcHJvcHJpYXRlIGFuY2hvciAoJmx0O2EmZ3Q7KSB0YWdzIHRvIHR1cm4gdGhlbSBpbnRvIGxpbmtzLlxyXG5cdCAqIFxyXG5cdCAqIEFueSBvZiB0aGUgY29uZmlndXJhdGlvbiBvcHRpb25zIG1heSBiZSBwcm92aWRlZCBpbiBhbiBPYmplY3QgKG1hcCkgcHJvdmlkZWQgdG8gdGhlIEF1dG9saW5rZXIgY29uc3RydWN0b3IsIHdoaWNoXHJcblx0ICogd2lsbCBjb25maWd1cmUgaG93IHRoZSB7QGxpbmsgI2xpbmsgbGluaygpfSBtZXRob2Qgd2lsbCBwcm9jZXNzIHRoZSBsaW5rcy5cclxuXHQgKiBcclxuXHQgKiBGb3IgZXhhbXBsZTpcclxuXHQgKiBcclxuXHQgKiAgICAgdmFyIGF1dG9saW5rZXIgPSBuZXcgQXV0b2xpbmtlcigge1xyXG5cdCAqICAgICAgICAgbmV3V2luZG93IDogZmFsc2UsXHJcblx0ICogICAgICAgICB0cnVuY2F0ZSAgOiAzMFxyXG5cdCAqICAgICB9ICk7XHJcblx0ICogICAgIFxyXG5cdCAqICAgICB2YXIgaHRtbCA9IGF1dG9saW5rZXIubGluayggXCJKb2Ugd2VudCB0byB3d3cueWFob28uY29tXCIgKTtcclxuXHQgKiAgICAgLy8gcHJvZHVjZXM6ICdKb2Ugd2VudCB0byA8YSBocmVmPVwiaHR0cDovL3d3dy55YWhvby5jb21cIj55YWhvby5jb208L2E+J1xyXG5cdCAqIFxyXG5cdCAqIFxyXG5cdCAqIFRoZSB7QGxpbmsgI3N0YXRpYy1saW5rIHN0YXRpYyBsaW5rKCl9IG1ldGhvZCBtYXkgYWxzbyBiZSB1c2VkIHRvIGlubGluZSBvcHRpb25zIGludG8gYSBzaW5nbGUgY2FsbCwgd2hpY2ggbWF5XHJcblx0ICogYmUgbW9yZSBjb252ZW5pZW50IGZvciBvbmUtb2ZmIHVzZXMuIEZvciBleGFtcGxlOlxyXG5cdCAqIFxyXG5cdCAqICAgICB2YXIgaHRtbCA9IEF1dG9saW5rZXIubGluayggXCJKb2Ugd2VudCB0byB3d3cueWFob28uY29tXCIsIHtcclxuXHQgKiAgICAgICAgIG5ld1dpbmRvdyA6IGZhbHNlLFxyXG5cdCAqICAgICAgICAgdHJ1bmNhdGUgIDogMzBcclxuXHQgKiAgICAgfSApO1xyXG5cdCAqICAgICAvLyBwcm9kdWNlczogJ0pvZSB3ZW50IHRvIDxhIGhyZWY9XCJodHRwOi8vd3d3LnlhaG9vLmNvbVwiPnlhaG9vLmNvbTwvYT4nXHJcblx0ICogXHJcblx0ICogXHJcblx0ICogIyMgQ3VzdG9tIFJlcGxhY2VtZW50cyBvZiBMaW5rc1xyXG5cdCAqIFxyXG5cdCAqIElmIHRoZSBjb25maWd1cmF0aW9uIG9wdGlvbnMgZG8gbm90IHByb3ZpZGUgZW5vdWdoIGZsZXhpYmlsaXR5LCBhIHtAbGluayAjcmVwbGFjZUZufSBtYXkgYmUgcHJvdmlkZWQgdG8gZnVsbHkgY3VzdG9taXplXHJcblx0ICogdGhlIG91dHB1dCBvZiBBdXRvbGlua2VyLiBUaGlzIGZ1bmN0aW9uIGlzIGNhbGxlZCBvbmNlIGZvciBlYWNoIFVSTC9FbWFpbC9Ud2l0dGVyIGhhbmRsZSBtYXRjaCB0aGF0IGlzIGVuY291bnRlcmVkLlxyXG5cdCAqIFxyXG5cdCAqIEZvciBleGFtcGxlOlxyXG5cdCAqIFxyXG5cdCAqICAgICB2YXIgaW5wdXQgPSBcIi4uLlwiOyAgLy8gc3RyaW5nIHdpdGggVVJMcywgRW1haWwgQWRkcmVzc2VzLCBhbmQgVHdpdHRlciBIYW5kbGVzXHJcblx0ICogICAgIFxyXG5cdCAqICAgICB2YXIgbGlua2VkVGV4dCA9IEF1dG9saW5rZXIubGluayggaW5wdXQsIHtcclxuXHQgKiAgICAgICAgIHJlcGxhY2VGbiA6IGZ1bmN0aW9uKCBhdXRvbGlua2VyLCBtYXRjaCApIHtcclxuXHQgKiAgICAgICAgICAgICBjb25zb2xlLmxvZyggXCJocmVmID0gXCIsIG1hdGNoLmdldEFuY2hvckhyZWYoKSApO1xyXG5cdCAqICAgICAgICAgICAgIGNvbnNvbGUubG9nKCBcInRleHQgPSBcIiwgbWF0Y2guZ2V0QW5jaG9yVGV4dCgpICk7XHJcblx0ICogICAgICAgICBcclxuXHQgKiAgICAgICAgICAgICBzd2l0Y2goIG1hdGNoLmdldFR5cGUoKSApIHtcclxuXHQgKiAgICAgICAgICAgICAgICAgY2FzZSAndXJsJyA6IFxyXG5cdCAqICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coIFwidXJsOiBcIiwgbWF0Y2guZ2V0VXJsKCkgKTtcclxuXHQgKiAgICAgICAgICAgICAgICAgICAgIFxyXG5cdCAqICAgICAgICAgICAgICAgICAgICAgaWYoIG1hdGNoLmdldFVybCgpLmluZGV4T2YoICdteXNpdGUuY29tJyApID09PSAtMSApIHtcclxuXHQgKiAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdGFnID0gYXV0b2xpbmtlci5nZXRUYWdCdWlsZGVyKCkuYnVpbGQoIG1hdGNoICk7ICAvLyByZXR1cm5zIGFuIGBBdXRvbGlua2VyLkh0bWxUYWdgIGluc3RhbmNlLCB3aGljaCBwcm92aWRlcyBtdXRhdG9yIG1ldGhvZHMgZm9yIGVhc3kgY2hhbmdlc1xyXG5cdCAqICAgICAgICAgICAgICAgICAgICAgICAgIHRhZy5zZXRBdHRyKCAncmVsJywgJ25vZm9sbG93JyApO1xyXG5cdCAqICAgICAgICAgICAgICAgICAgICAgICAgIHRhZy5hZGRDbGFzcyggJ2V4dGVybmFsLWxpbmsnICk7XHJcblx0ICogICAgICAgICAgICAgICAgICAgICAgICAgXHJcblx0ICogICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRhZztcclxuXHQgKiAgICAgICAgICAgICAgICAgICAgICAgICBcclxuXHQgKiAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcblx0ICogICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7ICAvLyBsZXQgQXV0b2xpbmtlciBwZXJmb3JtIGl0cyBub3JtYWwgYW5jaG9yIHRhZyByZXBsYWNlbWVudFxyXG5cdCAqICAgICAgICAgICAgICAgICAgICAgfVxyXG5cdCAqICAgICAgICAgICAgICAgICAgICAgXHJcblx0ICogICAgICAgICAgICAgICAgIGNhc2UgJ2VtYWlsJyA6XHJcblx0ICogICAgICAgICAgICAgICAgICAgICB2YXIgZW1haWwgPSBtYXRjaC5nZXRFbWFpbCgpO1xyXG5cdCAqICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coIFwiZW1haWw6IFwiLCBlbWFpbCApO1xyXG5cdCAqICAgICAgICAgICAgICAgICAgICAgXHJcblx0ICogICAgICAgICAgICAgICAgICAgICBpZiggZW1haWwgPT09IFwibXlAb3duLmFkZHJlc3NcIiApIHtcclxuXHQgKiAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7ICAvLyBkb24ndCBhdXRvLWxpbmsgdGhpcyBwYXJ0aWN1bGFyIGVtYWlsIGFkZHJlc3M7IGxlYXZlIGFzLWlzXHJcblx0ICogICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG5cdCAqICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjsgIC8vIG5vIHJldHVybiB2YWx1ZSB3aWxsIGhhdmUgQXV0b2xpbmtlciBwZXJmb3JtIGl0cyBub3JtYWwgYW5jaG9yIHRhZyByZXBsYWNlbWVudCAoc2FtZSBhcyByZXR1cm5pbmcgYHRydWVgKVxyXG5cdCAqICAgICAgICAgICAgICAgICAgICAgfVxyXG5cdCAqICAgICAgICAgICAgICAgICBcclxuXHQgKiAgICAgICAgICAgICAgICAgY2FzZSAndHdpdHRlcicgOlxyXG5cdCAqICAgICAgICAgICAgICAgICAgICAgdmFyIHR3aXR0ZXJIYW5kbGUgPSBtYXRjaC5nZXRUd2l0dGVySGFuZGxlKCk7XHJcblx0ICogICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyggdHdpdHRlckhhbmRsZSApO1xyXG5cdCAqICAgICAgICAgICAgICAgICAgICAgXHJcblx0ICogICAgICAgICAgICAgICAgICAgICByZXR1cm4gJzxhIGhyZWY9XCJodHRwOi8vbmV3cGxhY2UudG8ubGluay50d2l0dGVyLmhhbmRsZXMudG8vXCI+JyArIHR3aXR0ZXJIYW5kbGUgKyAnPC9hPic7XHJcblx0ICogICAgICAgICAgICAgfVxyXG5cdCAqICAgICAgICAgfVxyXG5cdCAqICAgICB9ICk7XHJcblx0ICogXHJcblx0ICogXHJcblx0ICogVGhlIGZ1bmN0aW9uIG1heSByZXR1cm4gdGhlIGZvbGxvd2luZyB2YWx1ZXM6XHJcblx0ICogXHJcblx0ICogLSBgdHJ1ZWAgKEJvb2xlYW4pOiBBbGxvdyBBdXRvbGlua2VyIHRvIHJlcGxhY2UgdGhlIG1hdGNoIGFzIGl0IG5vcm1hbGx5IHdvdWxkLlxyXG5cdCAqIC0gYGZhbHNlYCAoQm9vbGVhbik6IERvIG5vdCByZXBsYWNlIHRoZSBjdXJyZW50IG1hdGNoIGF0IGFsbCAtIGxlYXZlIGFzLWlzLlxyXG5cdCAqIC0gQW55IFN0cmluZzogSWYgYSBzdHJpbmcgaXMgcmV0dXJuZWQgZnJvbSB0aGUgZnVuY3Rpb24sIHRoZSBzdHJpbmcgd2lsbCBiZSB1c2VkIGRpcmVjdGx5IGFzIHRoZSByZXBsYWNlbWVudCBIVE1MIGZvclxyXG5cdCAqICAgdGhlIG1hdGNoLlxyXG5cdCAqIC0gQW4ge0BsaW5rIEF1dG9saW5rZXIuSHRtbFRhZ30gaW5zdGFuY2UsIHdoaWNoIGNhbiBiZSB1c2VkIHRvIGJ1aWxkL21vZGlmeSBhbiBIVE1MIHRhZyBiZWZvcmUgd3JpdGluZyBvdXQgaXRzIEhUTUwgdGV4dC5cclxuXHQgKiBcclxuXHQgKiBAY29uc3RydWN0b3JcclxuXHQgKiBAcGFyYW0ge09iamVjdH0gW2NvbmZpZ10gVGhlIGNvbmZpZ3VyYXRpb24gb3B0aW9ucyBmb3IgdGhlIEF1dG9saW5rZXIgaW5zdGFuY2UsIHNwZWNpZmllZCBpbiBhbiBPYmplY3QgKG1hcCkuXHJcblx0ICovXHJcblx0dmFyIEF1dG9saW5rZXIgPSBmdW5jdGlvbiggY2ZnICkge1xyXG5cdFx0QXV0b2xpbmtlci5VdGlsLmFzc2lnbiggdGhpcywgY2ZnICk7ICAvLyBhc3NpZ24gdGhlIHByb3BlcnRpZXMgb2YgYGNmZ2Agb250byB0aGUgQXV0b2xpbmtlciBpbnN0YW5jZS4gUHJvdG90eXBlIHByb3BlcnRpZXMgd2lsbCBiZSB1c2VkIGZvciBtaXNzaW5nIGNvbmZpZ3MuXHJcblxyXG5cdFx0dGhpcy5tYXRjaFZhbGlkYXRvciA9IG5ldyBBdXRvbGlua2VyLk1hdGNoVmFsaWRhdG9yKCk7XHJcblx0fTtcclxuXHJcblxyXG5cdEF1dG9saW5rZXIucHJvdG90eXBlID0ge1xyXG5cdFx0Y29uc3RydWN0b3IgOiBBdXRvbGlua2VyLCAgLy8gZml4IGNvbnN0cnVjdG9yIHByb3BlcnR5XHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBAY2ZnIHtCb29sZWFufSB1cmxzXHJcblx0XHQgKiBcclxuXHRcdCAqIGB0cnVlYCBpZiBtaXNjZWxsYW5lb3VzIFVSTHMgc2hvdWxkIGJlIGF1dG9tYXRpY2FsbHkgbGlua2VkLCBgZmFsc2VgIGlmIHRoZXkgc2hvdWxkIG5vdCBiZS5cclxuXHRcdCAqL1xyXG5cdFx0dXJscyA6IHRydWUsXHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBAY2ZnIHtCb29sZWFufSBlbWFpbFxyXG5cdFx0ICogXHJcblx0XHQgKiBgdHJ1ZWAgaWYgZW1haWwgYWRkcmVzc2VzIHNob3VsZCBiZSBhdXRvbWF0aWNhbGx5IGxpbmtlZCwgYGZhbHNlYCBpZiB0aGV5IHNob3VsZCBub3QgYmUuXHJcblx0XHQgKi9cclxuXHRcdGVtYWlsIDogdHJ1ZSxcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIEBjZmcge0Jvb2xlYW59IHR3aXR0ZXJcclxuXHRcdCAqIFxyXG5cdFx0ICogYHRydWVgIGlmIFR3aXR0ZXIgaGFuZGxlcyAoXCJAZXhhbXBsZVwiKSBzaG91bGQgYmUgYXV0b21hdGljYWxseSBsaW5rZWQsIGBmYWxzZWAgaWYgdGhleSBzaG91bGQgbm90IGJlLlxyXG5cdFx0ICovXHJcblx0XHR0d2l0dGVyIDogdHJ1ZSxcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIEBjZmcge0Jvb2xlYW59IG5ld1dpbmRvd1xyXG5cdFx0ICogXHJcblx0XHQgKiBgdHJ1ZWAgaWYgdGhlIGxpbmtzIHNob3VsZCBvcGVuIGluIGEgbmV3IHdpbmRvdywgYGZhbHNlYCBvdGhlcndpc2UuXHJcblx0XHQgKi9cclxuXHRcdG5ld1dpbmRvdyA6IHRydWUsXHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBAY2ZnIHtCb29sZWFufSBzdHJpcFByZWZpeFxyXG5cdFx0ICogXHJcblx0XHQgKiBgdHJ1ZWAgaWYgJ2h0dHA6Ly8nIG9yICdodHRwczovLycgYW5kL29yIHRoZSAnd3d3Licgc2hvdWxkIGJlIHN0cmlwcGVkIGZyb20gdGhlIGJlZ2lubmluZyBvZiBVUkwgbGlua3MnIHRleHQsIFxyXG5cdFx0ICogYGZhbHNlYCBvdGhlcndpc2UuXHJcblx0XHQgKi9cclxuXHRcdHN0cmlwUHJlZml4IDogdHJ1ZSxcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIEBjZmcge051bWJlcn0gdHJ1bmNhdGVcclxuXHRcdCAqIFxyXG5cdFx0ICogQSBudW1iZXIgZm9yIGhvdyBtYW55IGNoYXJhY3RlcnMgbG9uZyBVUkxzL2VtYWlscy90d2l0dGVyIGhhbmRsZXMgc2hvdWxkIGJlIHRydW5jYXRlZCB0byBpbnNpZGUgdGhlIHRleHQgb2YgXHJcblx0XHQgKiBhIGxpbmsuIElmIHRoZSBVUkwvZW1haWwvdHdpdHRlciBpcyBvdmVyIHRoaXMgbnVtYmVyIG9mIGNoYXJhY3RlcnMsIGl0IHdpbGwgYmUgdHJ1bmNhdGVkIHRvIHRoaXMgbGVuZ3RoIGJ5IFxyXG5cdFx0ICogYWRkaW5nIGEgdHdvIHBlcmlvZCBlbGxpcHNpcyAoJy4uJykgdG8gdGhlIGVuZCBvZiB0aGUgc3RyaW5nLlxyXG5cdFx0ICogXHJcblx0XHQgKiBGb3IgZXhhbXBsZTogQSB1cmwgbGlrZSAnaHR0cDovL3d3dy55YWhvby5jb20vc29tZS9sb25nL3BhdGgvdG8vYS9maWxlJyB0cnVuY2F0ZWQgdG8gMjUgY2hhcmFjdGVycyBtaWdodCBsb29rXHJcblx0XHQgKiBzb21ldGhpbmcgbGlrZSB0aGlzOiAneWFob28uY29tL3NvbWUvbG9uZy9wYXQuLidcclxuXHRcdCAqL1xyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogQGNmZyB7U3RyaW5nfSBjbGFzc05hbWVcclxuXHRcdCAqIFxyXG5cdFx0ICogQSBDU1MgY2xhc3MgbmFtZSB0byBhZGQgdG8gdGhlIGdlbmVyYXRlZCBsaW5rcy4gVGhpcyBjbGFzcyB3aWxsIGJlIGFkZGVkIHRvIGFsbCBsaW5rcywgYXMgd2VsbCBhcyB0aGlzIGNsYXNzXHJcblx0XHQgKiBwbHVzIHVybC9lbWFpbC90d2l0dGVyIHN1ZmZpeGVzIGZvciBzdHlsaW5nIHVybC9lbWFpbC90d2l0dGVyIGxpbmtzIGRpZmZlcmVudGx5LlxyXG5cdFx0ICogXHJcblx0XHQgKiBGb3IgZXhhbXBsZSwgaWYgdGhpcyBjb25maWcgaXMgcHJvdmlkZWQgYXMgXCJteUxpbmtcIiwgdGhlbjpcclxuXHRcdCAqIFxyXG5cdFx0ICogLSBVUkwgbGlua3Mgd2lsbCBoYXZlIHRoZSBDU1MgY2xhc3NlczogXCJteUxpbmsgbXlMaW5rLXVybFwiXHJcblx0XHQgKiAtIEVtYWlsIGxpbmtzIHdpbGwgaGF2ZSB0aGUgQ1NTIGNsYXNzZXM6IFwibXlMaW5rIG15TGluay1lbWFpbFwiLCBhbmRcclxuXHRcdCAqIC0gVHdpdHRlciBsaW5rcyB3aWxsIGhhdmUgdGhlIENTUyBjbGFzc2VzOiBcIm15TGluayBteUxpbmstdHdpdHRlclwiXHJcblx0XHQgKi9cclxuXHRcdGNsYXNzTmFtZSA6IFwiXCIsXHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBAY2ZnIHtGdW5jdGlvbn0gcmVwbGFjZUZuXHJcblx0XHQgKiBcclxuXHRcdCAqIEEgZnVuY3Rpb24gdG8gaW5kaXZpZHVhbGx5IHByb2Nlc3MgZWFjaCBVUkwvRW1haWwvVHdpdHRlciBtYXRjaCBmb3VuZCBpbiB0aGUgaW5wdXQgc3RyaW5nLlxyXG5cdFx0ICogXHJcblx0XHQgKiBTZWUgdGhlIGNsYXNzJ3MgZGVzY3JpcHRpb24gZm9yIHVzYWdlLlxyXG5cdFx0ICogXHJcblx0XHQgKiBUaGlzIGZ1bmN0aW9uIGlzIGNhbGxlZCB3aXRoIHRoZSBmb2xsb3dpbmcgcGFyYW1ldGVyczpcclxuXHRcdCAqIFxyXG5cdFx0ICogQGNmZyB7QXV0b2xpbmtlcn0gcmVwbGFjZUZuLmF1dG9saW5rZXIgVGhlIEF1dG9saW5rZXIgaW5zdGFuY2UsIHdoaWNoIG1heSBiZSB1c2VkIHRvIHJldHJpZXZlIGNoaWxkIG9iamVjdHMgZnJvbSAoc3VjaFxyXG5cdFx0ICogICBhcyB0aGUgaW5zdGFuY2UncyB7QGxpbmsgI2dldFRhZ0J1aWxkZXIgdGFnIGJ1aWxkZXJ9KS5cclxuXHRcdCAqIEBjZmcge0F1dG9saW5rZXIubWF0Y2guTWF0Y2h9IHJlcGxhY2VGbi5tYXRjaCBUaGUgTWF0Y2ggaW5zdGFuY2Ugd2hpY2ggY2FuIGJlIHVzZWQgdG8gcmV0cmlldmUgaW5mb3JtYXRpb24gYWJvdXQgdGhlXHJcblx0XHQgKiAgIHtAbGluayBBdXRvbGlua2VyLm1hdGNoLlVybCBVUkx9L3tAbGluayBBdXRvbGlua2VyLm1hdGNoLkVtYWlsIGVtYWlsfS97QGxpbmsgQXV0b2xpbmtlci5tYXRjaC5Ud2l0dGVyIFR3aXR0ZXJ9XHJcblx0XHQgKiAgIG1hdGNoIHRoYXQgdGhlIGByZXBsYWNlRm5gIGlzIGN1cnJlbnRseSBwcm9jZXNzaW5nLlxyXG5cdFx0ICovXHJcblxyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogQHByaXZhdGVcclxuXHRcdCAqIEBwcm9wZXJ0eSB7UmVnRXhwfSBodG1sQ2hhcmFjdGVyRW50aXRpZXNSZWdleFxyXG5cdFx0ICpcclxuXHRcdCAqIFRoZSByZWd1bGFyIGV4cHJlc3Npb24gdGhhdCBtYXRjaGVzIGNvbW1vbiBIVE1MIGNoYXJhY3RlciBlbnRpdGllcy5cclxuXHRcdCAqIFxyXG5cdFx0ICogSWdub3JpbmcgJmFtcDsgYXMgaXQgY291bGQgYmUgcGFydCBvZiBhIHF1ZXJ5IHN0cmluZyAtLSBoYW5kbGluZyBpdCBzZXBhcmF0ZWx5LlxyXG5cdFx0ICovXHJcblx0XHRodG1sQ2hhcmFjdGVyRW50aXRpZXNSZWdleDogLygmbmJzcDt8JiMxNjA7fCZsdDt8JiM2MDt8Jmd0O3wmIzYyO3wmcXVvdDt8JiMzNDt8JiMzOTspL2dpLFxyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogQHByaXZhdGVcclxuXHRcdCAqIEBwcm9wZXJ0eSB7UmVnRXhwfSBtYXRjaGVyUmVnZXhcclxuXHRcdCAqIFxyXG5cdFx0ICogVGhlIHJlZ3VsYXIgZXhwcmVzc2lvbiB0aGF0IG1hdGNoZXMgVVJMcywgZW1haWwgYWRkcmVzc2VzLCBhbmQgVHdpdHRlciBoYW5kbGVzLlxyXG5cdFx0ICogXHJcblx0XHQgKiBUaGlzIHJlZ3VsYXIgZXhwcmVzc2lvbiBoYXMgdGhlIGZvbGxvd2luZyBjYXB0dXJpbmcgZ3JvdXBzOlxyXG5cdFx0ICogXHJcblx0XHQgKiAxLiBHcm91cCB0aGF0IGlzIHVzZWQgdG8gZGV0ZXJtaW5lIGlmIHRoZXJlIGlzIGEgVHdpdHRlciBoYW5kbGUgbWF0Y2ggKGkuZS4gXFxAc29tZVR3aXR0ZXJVc2VyKS4gU2ltcGx5IGNoZWNrIGZvciBpdHMgXHJcblx0XHQgKiAgICBleGlzdGVuY2UgdG8gZGV0ZXJtaW5lIGlmIHRoZXJlIGlzIGEgVHdpdHRlciBoYW5kbGUgbWF0Y2guIFRoZSBuZXh0IGNvdXBsZSBvZiBjYXB0dXJpbmcgZ3JvdXBzIGdpdmUgaW5mb3JtYXRpb24gXHJcblx0XHQgKiAgICBhYm91dCB0aGUgVHdpdHRlciBoYW5kbGUgbWF0Y2guXHJcblx0XHQgKiAyLiBUaGUgd2hpdGVzcGFjZSBjaGFyYWN0ZXIgYmVmb3JlIHRoZSBcXEBzaWduIGluIGEgVHdpdHRlciBoYW5kbGUuIFRoaXMgaXMgbmVlZGVkIGJlY2F1c2UgdGhlcmUgYXJlIG5vIGxvb2tiZWhpbmRzIGluXHJcblx0XHQgKiAgICBKUyByZWd1bGFyIGV4cHJlc3Npb25zLCBhbmQgY2FuIGJlIHVzZWQgdG8gcmVjb25zdHJ1Y3QgdGhlIG9yaWdpbmFsIHN0cmluZyBpbiBhIHJlcGxhY2UoKS5cclxuXHRcdCAqIDMuIFRoZSBUd2l0dGVyIGhhbmRsZSBpdHNlbGYgaW4gYSBUd2l0dGVyIG1hdGNoLiBJZiB0aGUgbWF0Y2ggaXMgJ0Bzb21lVHdpdHRlclVzZXInLCB0aGUgaGFuZGxlIGlzICdzb21lVHdpdHRlclVzZXInLlxyXG5cdFx0ICogNC4gR3JvdXAgdGhhdCBtYXRjaGVzIGFuIGVtYWlsIGFkZHJlc3MuIFVzZWQgdG8gZGV0ZXJtaW5lIGlmIHRoZSBtYXRjaCBpcyBhbiBlbWFpbCBhZGRyZXNzLCBhcyB3ZWxsIGFzIGhvbGRpbmcgdGhlIGZ1bGwgXHJcblx0XHQgKiAgICBhZGRyZXNzLiBFeDogJ21lQG15LmNvbSdcclxuXHRcdCAqIDUuIEdyb3VwIHRoYXQgbWF0Y2hlcyBhIFVSTCBpbiB0aGUgaW5wdXQgdGV4dC4gRXg6ICdodHRwOi8vZ29vZ2xlLmNvbScsICd3d3cuZ29vZ2xlLmNvbScsIG9yIGp1c3QgJ2dvb2dsZS5jb20nLlxyXG5cdFx0ICogICAgVGhpcyBhbHNvIGluY2x1ZGVzIGEgcGF0aCwgdXJsIHBhcmFtZXRlcnMsIG9yIGhhc2ggYW5jaG9ycy4gRXg6IGdvb2dsZS5jb20vcGF0aC90by9maWxlP3ExPTEmcTI9MiNteUFuY2hvclxyXG5cdFx0ICogNi4gR3JvdXAgdGhhdCBtYXRjaGVzIGEgcHJvdG9jb2wgVVJMIChpLmUuICdodHRwOi8vZ29vZ2xlLmNvbScpLiBUaGlzIGlzIHVzZWQgdG8gbWF0Y2ggcHJvdG9jb2wgVVJMcyB3aXRoIGp1c3QgYSBzaW5nbGVcclxuXHRcdCAqICAgIHdvcmQsIGxpa2UgJ2h0dHA6Ly9sb2NhbGhvc3QnLCB3aGVyZSB3ZSB3b24ndCBkb3VibGUgY2hlY2sgdGhhdCB0aGUgZG9tYWluIG5hbWUgaGFzIGF0IGxlYXN0IG9uZSAnLicgaW4gaXQuXHJcblx0XHQgKiA3LiBBIHByb3RvY29sLXJlbGF0aXZlICgnLy8nKSBtYXRjaCBmb3IgdGhlIGNhc2Ugb2YgYSAnd3d3LicgcHJlZml4ZWQgVVJMLiBXaWxsIGJlIGFuIGVtcHR5IHN0cmluZyBpZiBpdCBpcyBub3QgYSBcclxuXHRcdCAqICAgIHByb3RvY29sLXJlbGF0aXZlIG1hdGNoLiBXZSBuZWVkIHRvIGtub3cgdGhlIGNoYXJhY3RlciBiZWZvcmUgdGhlICcvLycgaW4gb3JkZXIgdG8gZGV0ZXJtaW5lIGlmIGl0IGlzIGEgdmFsaWQgbWF0Y2hcclxuXHRcdCAqICAgIG9yIHRoZSAvLyB3YXMgaW4gYSBzdHJpbmcgd2UgZG9uJ3Qgd2FudCB0byBhdXRvLWxpbmsuXHJcblx0XHQgKiA4LiBBIHByb3RvY29sLXJlbGF0aXZlICgnLy8nKSBtYXRjaCBmb3IgdGhlIGNhc2Ugb2YgYSBrbm93biBUTEQgcHJlZml4ZWQgVVJMLiBXaWxsIGJlIGFuIGVtcHR5IHN0cmluZyBpZiBpdCBpcyBub3QgYSBcclxuXHRcdCAqICAgIHByb3RvY29sLXJlbGF0aXZlIG1hdGNoLiBTZWUgIzYgZm9yIG1vcmUgaW5mby4gXHJcblx0XHQgKi9cclxuXHRcdG1hdGNoZXJSZWdleCA6IChmdW5jdGlvbigpIHtcclxuXHRcdFx0dmFyIHR3aXR0ZXJSZWdleCA9IC8oXnxbXlxcd10pQChcXHd7MSwxNX0pLywgICAgICAgICAgICAgIC8vIEZvciBtYXRjaGluZyBhIHR3aXR0ZXIgaGFuZGxlLiBFeDogQGdyZWdvcnlfamFjb2JzXHJcblxyXG5cdFx0XHQgICAgZW1haWxSZWdleCA9IC8oPzpbXFwtOzomPVxcK1xcJCxcXHdcXC5dK0ApLywgICAgICAgICAgICAgLy8gc29tZXRoaW5nQCBmb3IgZW1haWwgYWRkcmVzc2VzIChhLmsuYS4gbG9jYWwtcGFydClcclxuXHJcblx0XHRcdCAgICBwcm90b2NvbFJlZ2V4ID0gLyg/OltBLVphLXpdWy0uK0EtWmEtejAtOV0rOig/IVtBLVphLXpdWy0uK0EtWmEtejAtOV0rOlxcL1xcLykoPyFcXGQrXFwvPykoPzpcXC9cXC8pPykvLCAgLy8gbWF0Y2ggcHJvdG9jb2wsIGFsbG93IGluIGZvcm1hdCBcImh0dHA6Ly9cIiBvciBcIm1haWx0bzpcIi4gSG93ZXZlciwgZG8gbm90IG1hdGNoIHRoZSBmaXJzdCBwYXJ0IG9mIHNvbWV0aGluZyBsaWtlICdsaW5rOmh0dHA6Ly93d3cuZ29vZ2xlLmNvbScgKGkuZS4gZG9uJ3QgbWF0Y2ggXCJsaW5rOlwiKS4gQWxzbywgbWFrZSBzdXJlIHdlIGRvbid0IGludGVycHJldCAnZ29vZ2xlLmNvbTo4MDAwJyBhcyBpZiAnZ29vZ2xlLmNvbScgd2FzIGEgcHJvdG9jb2wgaGVyZSAoaS5lLiBpZ25vcmUgYSB0cmFpbGluZyBwb3J0IG51bWJlciBpbiB0aGlzIHJlZ2V4KVxyXG5cdFx0XHQgICAgd3d3UmVnZXggPSAvKD86d3d3XFwuKS8sICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBzdGFydGluZyB3aXRoICd3d3cuJ1xyXG5cdFx0XHQgICAgZG9tYWluTmFtZVJlZ2V4ID0gL1tBLVphLXowLTlcXC5cXC1dKltBLVphLXowLTlcXC1dLywgIC8vIGFueXRoaW5nIGxvb2tpbmcgYXQgYWxsIGxpa2UgYSBkb21haW4sIG5vbi11bmljb2RlIGRvbWFpbnMsIG5vdCBlbmRpbmcgaW4gYSBwZXJpb2RcclxuXHRcdFx0ICAgIHRsZFJlZ2V4ID0gL1xcLig/OmludGVybmF0aW9uYWx8Y29uc3RydWN0aW9ufGNvbnRyYWN0b3JzfGVudGVycHJpc2VzfHBob3RvZ3JhcGh5fHByb2R1Y3Rpb25zfGZvdW5kYXRpb258aW1tb2JpbGllbnxpbmR1c3RyaWVzfG1hbmFnZW1lbnR8cHJvcGVydGllc3x0ZWNobm9sb2d5fGNocmlzdG1hc3xjb21tdW5pdHl8ZGlyZWN0b3J5fGVkdWNhdGlvbnxlcXVpcG1lbnR8aW5zdGl0dXRlfG1hcmtldGluZ3xzb2x1dGlvbnN8dmFjYXRpb25zfGJhcmdhaW5zfGJvdXRpcXVlfGJ1aWxkZXJzfGNhdGVyaW5nfGNsZWFuaW5nfGNsb3RoaW5nfGNvbXB1dGVyfGRlbW9jcmF0fGRpYW1vbmRzfGdyYXBoaWNzfGhvbGRpbmdzfGxpZ2h0aW5nfHBhcnRuZXJzfHBsdW1iaW5nfHN1cHBsaWVzfHRyYWluaW5nfHZlbnR1cmVzfGFjYWRlbXl8Y2FyZWVyc3xjb21wYW55fGNydWlzZXN8ZG9tYWluc3xleHBvc2VkfGZsaWdodHN8ZmxvcmlzdHxnYWxsZXJ5fGd1aXRhcnN8aG9saWRheXxraXRjaGVufG5ldXN0YXJ8b2tpbmF3YXxyZWNpcGVzfHJlbnRhbHN8cmV2aWV3c3xzaGlrc2hhfHNpbmdsZXN8c3VwcG9ydHxzeXN0ZW1zfGFnZW5jeXxiZXJsaW58Y2FtZXJhfGNlbnRlcnxjb2ZmZWV8Y29uZG9zfGRhdGluZ3xlc3RhdGV8ZXZlbnRzfGV4cGVydHxmdXRib2x8a2F1ZmVufGx1eHVyeXxtYWlzb258bW9uYXNofG11c2V1bXxuYWdveWF8cGhvdG9zfHJlcGFpcnxyZXBvcnR8c29jaWFsfHN1cHBseXx0YXR0b298dGllbmRhfHRyYXZlbHx2aWFqZXN8dmlsbGFzfHZpc2lvbnx2b3Rpbmd8dm95YWdlfGFjdG9yfGJ1aWxkfGNhcmRzfGNoZWFwfGNvZGVzfGRhbmNlfGVtYWlsfGdsYXNzfGhvdXNlfG1hbmdvfG5pbmphfHBhcnRzfHBob3RvfHNob2VzfHNvbGFyfHRvZGF5fHRva3lvfHRvb2xzfHdhdGNofHdvcmtzfGFlcm98YXJwYXxhc2lhfGJlc3R8YmlrZXxibHVlfGJ1enp8Y2FtcHxjbHVifGNvb2x8Y29vcHxmYXJtfGZpc2h8Z2lmdHxndXJ1fGluZm98am9ic3xraXdpfGtyZWR8bGFuZHxsaW1vfGxpbmt8bWVudXxtb2JpfG1vZGF8bmFtZXxwaWNzfHBpbmt8cG9zdHxxcG9ufHJpY2h8cnVocnxzZXh5fHRpcHN8dm90ZXx2b3RvfHdhbmd8d2llbnx3aWtpfHpvbmV8YmFyfGJpZHxiaXp8Y2FifGNhdHxjZW98Y29tfGVkdXxnb3Z8aW50fGtpbXxtaWx8bmV0fG9ubHxvcmd8cHJvfHB1YnxyZWR8dGVsfHVub3x3ZWR8eHh4fHh5enxhY3xhZHxhZXxhZnxhZ3xhaXxhbHxhbXxhbnxhb3xhcXxhcnxhc3xhdHxhdXxhd3xheHxhenxiYXxiYnxiZHxiZXxiZnxiZ3xiaHxiaXxianxibXxibnxib3xicnxic3xidHxidnxid3xieXxienxjYXxjY3xjZHxjZnxjZ3xjaHxjaXxja3xjbHxjbXxjbnxjb3xjcnxjdXxjdnxjd3xjeHxjeXxjenxkZXxkanxka3xkbXxkb3xkenxlY3xlZXxlZ3xlcnxlc3xldHxldXxmaXxmanxma3xmbXxmb3xmcnxnYXxnYnxnZHxnZXxnZnxnZ3xnaHxnaXxnbHxnbXxnbnxncHxncXxncnxnc3xndHxndXxnd3xneXxoa3xobXxobnxocnxodHxodXxpZHxpZXxpbHxpbXxpbnxpb3xpcXxpcnxpc3xpdHxqZXxqbXxqb3xqcHxrZXxrZ3xraHxraXxrbXxrbnxrcHxrcnxrd3xreXxrenxsYXxsYnxsY3xsaXxsa3xscnxsc3xsdHxsdXxsdnxseXxtYXxtY3xtZHxtZXxtZ3xtaHxta3xtbHxtbXxtbnxtb3xtcHxtcXxtcnxtc3xtdHxtdXxtdnxtd3xteHxteXxtenxuYXxuY3xuZXxuZnxuZ3xuaXxubHxub3xucHxucnxudXxuenxvbXxwYXxwZXxwZnxwZ3xwaHxwa3xwbHxwbXxwbnxwcnxwc3xwdHxwd3xweXxxYXxyZXxyb3xyc3xydXxyd3xzYXxzYnxzY3xzZHxzZXxzZ3xzaHxzaXxzanxza3xzbHxzbXxzbnxzb3xzcnxzdHxzdXxzdnxzeHxzeXxzenx0Y3x0ZHx0Znx0Z3x0aHx0anx0a3x0bHx0bXx0bnx0b3x0cHx0cnx0dHx0dnx0d3x0enx1YXx1Z3x1a3x1c3x1eXx1enx2YXx2Y3x2ZXx2Z3x2aXx2bnx2dXx3Znx3c3x5ZXx5dHx6YXx6bXx6dylcXGIvLCAgIC8vIG1hdGNoIG91ciBrbm93biB0b3AgbGV2ZWwgZG9tYWlucyAoVExEcylcclxuXHJcblx0XHRcdCAgICAvLyBBbGxvdyBvcHRpb25hbCBwYXRoLCBxdWVyeSBzdHJpbmcsIGFuZCBoYXNoIGFuY2hvciwgbm90IGVuZGluZyBpbiB0aGUgZm9sbG93aW5nIGNoYXJhY3RlcnM6IFwiPyE6LC47XCJcclxuXHRcdFx0ICAgIC8vIGh0dHA6Ly9ibG9nLmNvZGluZ2hvcnJvci5jb20vdGhlLXByb2JsZW0td2l0aC11cmxzL1xyXG5cdFx0XHQgICAgdXJsU3VmZml4UmVnZXggPSAvW1xcLUEtWmEtejAtOSsmQCNcXC8lPX5fKCl8JyQqXFxbXFxdPyE6LC47XSpbXFwtQS1aYS16MC05KyZAI1xcLyU9fl8oKXwnJCpcXFtcXF1dLztcclxuXHJcblx0XHRcdHJldHVybiBuZXcgUmVnRXhwKCBbXHJcblx0XHRcdFx0JygnLCAgLy8gKioqIENhcHR1cmluZyBncm91cCAkMSwgd2hpY2ggY2FuIGJlIHVzZWQgdG8gY2hlY2sgZm9yIGEgdHdpdHRlciBoYW5kbGUgbWF0Y2guIFVzZSBncm91cCAkMyBmb3IgdGhlIGFjdHVhbCB0d2l0dGVyIGhhbmRsZSB0aG91Z2guICQyIG1heSBiZSB1c2VkIHRvIHJlY29uc3RydWN0IHRoZSBvcmlnaW5hbCBzdHJpbmcgaW4gYSByZXBsYWNlKCkgXHJcblx0XHRcdFx0XHQvLyAqKiogQ2FwdHVyaW5nIGdyb3VwICQyLCB3aGljaCBtYXRjaGVzIHRoZSB3aGl0ZXNwYWNlIGNoYXJhY3RlciBiZWZvcmUgdGhlICdAJyBzaWduIChuZWVkZWQgYmVjYXVzZSBvZiBubyBsb29rYmVoaW5kcyksIGFuZCBcclxuXHRcdFx0XHRcdC8vICoqKiBDYXB0dXJpbmcgZ3JvdXAgJDMsIHdoaWNoIG1hdGNoZXMgdGhlIGFjdHVhbCB0d2l0dGVyIGhhbmRsZVxyXG5cdFx0XHRcdFx0dHdpdHRlclJlZ2V4LnNvdXJjZSxcclxuXHRcdFx0XHQnKScsXHJcblxyXG5cdFx0XHRcdCd8JyxcclxuXHJcblx0XHRcdFx0JygnLCAgLy8gKioqIENhcHR1cmluZyBncm91cCAkNCwgd2hpY2ggaXMgdXNlZCB0byBkZXRlcm1pbmUgYW4gZW1haWwgbWF0Y2hcclxuXHRcdFx0XHRcdGVtYWlsUmVnZXguc291cmNlLFxyXG5cdFx0XHRcdFx0ZG9tYWluTmFtZVJlZ2V4LnNvdXJjZSxcclxuXHRcdFx0XHRcdHRsZFJlZ2V4LnNvdXJjZSxcclxuXHRcdFx0XHQnKScsXHJcblxyXG5cdFx0XHRcdCd8JyxcclxuXHJcblx0XHRcdFx0JygnLCAgLy8gKioqIENhcHR1cmluZyBncm91cCAkNSwgd2hpY2ggaXMgdXNlZCB0byBtYXRjaCBhIFVSTFxyXG5cdFx0XHRcdFx0Jyg/OicsIC8vIHBhcmVucyB0byBjb3ZlciBtYXRjaCBmb3IgcHJvdG9jb2wgKG9wdGlvbmFsKSwgYW5kIGRvbWFpblxyXG5cdFx0XHRcdFx0XHQnKCcsICAvLyAqKiogQ2FwdHVyaW5nIGdyb3VwICQ2LCBmb3IgYSBwcm90b2NvbC1wcmVmaXhlZCB1cmwgKGV4OiBodHRwOi8vZ29vZ2xlLmNvbSlcclxuXHRcdFx0XHRcdFx0XHRwcm90b2NvbFJlZ2V4LnNvdXJjZSxcclxuXHRcdFx0XHRcdFx0XHRkb21haW5OYW1lUmVnZXguc291cmNlLFxyXG5cdFx0XHRcdFx0XHQnKScsXHJcblxyXG5cdFx0XHRcdFx0XHQnfCcsXHJcblxyXG5cdFx0XHRcdFx0XHQnKD86JywgIC8vIG5vbi1jYXB0dXJpbmcgcGFyZW4gZm9yIGEgJ3d3dy4nIHByZWZpeGVkIHVybCAoZXg6IHd3dy5nb29nbGUuY29tKVxyXG5cdFx0XHRcdFx0XHRcdCcoLj8vLyk/JywgIC8vICoqKiBDYXB0dXJpbmcgZ3JvdXAgJDcgZm9yIGFuIG9wdGlvbmFsIHByb3RvY29sLXJlbGF0aXZlIFVSTC4gTXVzdCBiZSBhdCB0aGUgYmVnaW5uaW5nIG9mIHRoZSBzdHJpbmcgb3Igc3RhcnQgd2l0aCBhIG5vbi13b3JkIGNoYXJhY3RlclxyXG5cdFx0XHRcdFx0XHRcdHd3d1JlZ2V4LnNvdXJjZSxcclxuXHRcdFx0XHRcdFx0XHRkb21haW5OYW1lUmVnZXguc291cmNlLFxyXG5cdFx0XHRcdFx0XHQnKScsXHJcblxyXG5cdFx0XHRcdFx0XHQnfCcsXHJcblxyXG5cdFx0XHRcdFx0XHQnKD86JywgIC8vIG5vbi1jYXB0dXJpbmcgcGFyZW4gZm9yIGtub3duIGEgVExEIHVybCAoZXg6IGdvb2dsZS5jb20pXHJcblx0XHRcdFx0XHRcdFx0JyguPy8vKT8nLCAgLy8gKioqIENhcHR1cmluZyBncm91cCAkOCBmb3IgYW4gb3B0aW9uYWwgcHJvdG9jb2wtcmVsYXRpdmUgVVJMLiBNdXN0IGJlIGF0IHRoZSBiZWdpbm5pbmcgb2YgdGhlIHN0cmluZyBvciBzdGFydCB3aXRoIGEgbm9uLXdvcmQgY2hhcmFjdGVyXHJcblx0XHRcdFx0XHRcdFx0ZG9tYWluTmFtZVJlZ2V4LnNvdXJjZSxcclxuXHRcdFx0XHRcdFx0XHR0bGRSZWdleC5zb3VyY2UsXHJcblx0XHRcdFx0XHRcdCcpJyxcclxuXHRcdFx0XHRcdCcpJyxcclxuXHJcblx0XHRcdFx0XHQnKD86JyArIHVybFN1ZmZpeFJlZ2V4LnNvdXJjZSArICcpPycsICAvLyBtYXRjaCBmb3IgcGF0aCwgcXVlcnkgc3RyaW5nLCBhbmQvb3IgaGFzaCBhbmNob3IgLSBvcHRpb25hbFxyXG5cdFx0XHRcdCcpJ1xyXG5cdFx0XHRdLmpvaW4oIFwiXCIgKSwgJ2dpJyApO1xyXG5cdFx0fSApKCksXHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBAcHJpdmF0ZVxyXG5cdFx0ICogQHByb3BlcnR5IHtSZWdFeHB9IGNoYXJCZWZvcmVQcm90b2NvbFJlbE1hdGNoUmVnZXhcclxuXHRcdCAqIFxyXG5cdFx0ICogVGhlIHJlZ3VsYXIgZXhwcmVzc2lvbiB1c2VkIHRvIHJldHJpZXZlIHRoZSBjaGFyYWN0ZXIgYmVmb3JlIGEgcHJvdG9jb2wtcmVsYXRpdmUgVVJMIG1hdGNoLlxyXG5cdFx0ICogXHJcblx0XHQgKiBUaGlzIGlzIHVzZWQgaW4gY29uanVuY3Rpb24gd2l0aCB0aGUge0BsaW5rICNtYXRjaGVyUmVnZXh9LCB3aGljaCBuZWVkcyB0byBncmFiIHRoZSBjaGFyYWN0ZXIgYmVmb3JlIGEgcHJvdG9jb2wtcmVsYXRpdmVcclxuXHRcdCAqICcvLycgZHVlIHRvIHRoZSBsYWNrIG9mIGEgbmVnYXRpdmUgbG9vay1iZWhpbmQgaW4gSmF2YVNjcmlwdCByZWd1bGFyIGV4cHJlc3Npb25zLiBUaGUgY2hhcmFjdGVyIGJlZm9yZSB0aGUgbWF0Y2ggaXMgc3RyaXBwZWRcclxuXHRcdCAqIGZyb20gdGhlIFVSTC5cclxuXHRcdCAqL1xyXG5cdFx0Y2hhckJlZm9yZVByb3RvY29sUmVsTWF0Y2hSZWdleCA6IC9eKC4pP1xcL1xcLy8sXHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBAcHJpdmF0ZVxyXG5cdFx0ICogQHByb3BlcnR5IHtBdXRvbGlua2VyLk1hdGNoVmFsaWRhdG9yfSBtYXRjaFZhbGlkYXRvclxyXG5cdFx0ICogXHJcblx0XHQgKiBUaGUgTWF0Y2hWYWxpZGF0b3Igb2JqZWN0LCB1c2VkIHRvIGZpbHRlciBvdXQgYW55IGZhbHNlIHBvc2l0aXZlcyBmcm9tIHRoZSB7QGxpbmsgI21hdGNoZXJSZWdleH0uIFNlZVxyXG5cdFx0ICoge0BsaW5rIEF1dG9saW5rZXIuTWF0Y2hWYWxpZGF0b3J9IGZvciBkZXRhaWxzLlxyXG5cdFx0ICovXHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBAcHJpdmF0ZVxyXG5cdFx0ICogQHByb3BlcnR5IHtBdXRvbGlua2VyLkh0bWxQYXJzZXJ9IGh0bWxQYXJzZXJcclxuXHRcdCAqIFxyXG5cdFx0ICogVGhlIEh0bWxQYXJzZXIgaW5zdGFuY2UgdXNlZCB0byBza2lwIG92ZXIgSFRNTCB0YWdzLCB3aGlsZSBmaW5kaW5nIHRleHQgbm9kZXMgdG8gcHJvY2Vzcy4gVGhpcyBpcyBsYXppbHkgaW5zdGFudGlhdGVkXHJcblx0XHQgKiBpbiB0aGUge0BsaW5rICNnZXRIdG1sUGFyc2VyfSBtZXRob2QuXHJcblx0XHQgKi9cclxuXHJcblx0XHQvKipcclxuXHRcdCAqIEBwcml2YXRlXHJcblx0XHQgKiBAcHJvcGVydHkge0F1dG9saW5rZXIuQW5jaG9yVGFnQnVpbGRlcn0gdGFnQnVpbGRlclxyXG5cdFx0ICogXHJcblx0XHQgKiBUaGUgQW5jaG9yVGFnQnVpbGRlciBpbnN0YW5jZSB1c2VkIHRvIGJ1aWxkIHRoZSBVUkwvZW1haWwvVHdpdHRlciByZXBsYWNlbWVudCBhbmNob3IgdGFncy4gVGhpcyBpcyBsYXppbHkgaW5zdGFudGlhdGVkXHJcblx0XHQgKiBpbiB0aGUge0BsaW5rICNnZXRUYWdCdWlsZGVyfSBtZXRob2QuXHJcblx0XHQgKi9cclxuXHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBBdXRvbWF0aWNhbGx5IGxpbmtzIFVSTHMsIGVtYWlsIGFkZHJlc3NlcywgYW5kIFR3aXR0ZXIgaGFuZGxlcyBmb3VuZCBpbiB0aGUgZ2l2ZW4gY2h1bmsgb2YgSFRNTC4gXHJcblx0XHQgKiBEb2VzIG5vdCBsaW5rIFVSTHMgZm91bmQgd2l0aGluIEhUTUwgdGFncy5cclxuXHRcdCAqIFxyXG5cdFx0ICogRm9yIGluc3RhbmNlLCBpZiBnaXZlbiB0aGUgdGV4dDogYFlvdSBzaG91bGQgZ28gdG8gaHR0cDovL3d3dy55YWhvby5jb21gLCB0aGVuIHRoZSByZXN1bHRcclxuXHRcdCAqIHdpbGwgYmUgYFlvdSBzaG91bGQgZ28gdG8gJmx0O2EgaHJlZj1cImh0dHA6Ly93d3cueWFob28uY29tXCImZ3Q7aHR0cDovL3d3dy55YWhvby5jb20mbHQ7L2EmZ3Q7YFxyXG5cdFx0ICogXHJcblx0XHQgKiBUaGlzIG1ldGhvZCBmaW5kcyB0aGUgdGV4dCBhcm91bmQgYW55IEhUTUwgZWxlbWVudHMgaW4gdGhlIGlucHV0IGB0ZXh0T3JIdG1sYCwgd2hpY2ggd2lsbCBiZSB0aGUgdGV4dCB0aGF0IGlzIHByb2Nlc3NlZC5cclxuXHRcdCAqIEFueSBvcmlnaW5hbCBIVE1MIGVsZW1lbnRzIHdpbGwgYmUgbGVmdCBhcy1pcywgYXMgd2VsbCBhcyB0aGUgdGV4dCB0aGF0IGlzIGFscmVhZHkgd3JhcHBlZCBpbiBhbmNob3IgKCZsdDthJmd0OykgdGFncy5cclxuXHRcdCAqIFxyXG5cdFx0ICogQHBhcmFtIHtTdHJpbmd9IHRleHRPckh0bWwgVGhlIEhUTUwgb3IgdGV4dCB0byBsaW5rIFVSTHMsIGVtYWlsIGFkZHJlc3NlcywgYW5kIFR3aXR0ZXIgaGFuZGxlcyB3aXRoaW4gKGRlcGVuZGluZyBvbiBpZlxyXG5cdFx0ICogICB0aGUge0BsaW5rICN1cmxzfSwge0BsaW5rICNlbWFpbH0sIGFuZCB7QGxpbmsgI3R3aXR0ZXJ9IG9wdGlvbnMgYXJlIGVuYWJsZWQpLlxyXG5cdFx0ICogQHJldHVybiB7U3RyaW5nfSBUaGUgSFRNTCwgd2l0aCBVUkxzL2VtYWlscy9Ud2l0dGVyIGhhbmRsZXMgYXV0b21hdGljYWxseSBsaW5rZWQuXHJcblx0XHQgKi9cclxuXHRcdGxpbmsgOiBmdW5jdGlvbiggdGV4dE9ySHRtbCApIHtcclxuXHRcdFx0dmFyIG1lID0gdGhpcywgIC8vIGZvciBjbG9zdXJlXHJcblx0XHRcdCAgICBodG1sUGFyc2VyID0gdGhpcy5nZXRIdG1sUGFyc2VyKCksXHJcblx0XHRcdCAgICBodG1sQ2hhcmFjdGVyRW50aXRpZXNSZWdleCA9IHRoaXMuaHRtbENoYXJhY3RlckVudGl0aWVzUmVnZXgsXHJcblx0XHRcdCAgICBhbmNob3JUYWdTdGFja0NvdW50ID0gMCwgIC8vIHVzZWQgdG8gb25seSBwcm9jZXNzIHRleHQgYXJvdW5kIGFuY2hvciB0YWdzLCBhbmQgYW55IGlubmVyIHRleHQvaHRtbCB0aGV5IG1heSBoYXZlXHJcblx0XHRcdCAgICByZXN1bHRIdG1sID0gW107XHJcblxyXG5cdFx0XHRodG1sUGFyc2VyLnBhcnNlKCB0ZXh0T3JIdG1sLCB7XHJcblx0XHRcdFx0Ly8gUHJvY2VzcyBIVE1MIG5vZGVzIGluIHRoZSBpbnB1dCBgdGV4dE9ySHRtbGBcclxuXHRcdFx0XHRwcm9jZXNzSHRtbE5vZGUgOiBmdW5jdGlvbiggdGFnVGV4dCwgdGFnTmFtZSwgaXNDbG9zaW5nVGFnICkge1xyXG5cdFx0XHRcdFx0aWYoIHRhZ05hbWUgPT09ICdhJyApIHtcclxuXHRcdFx0XHRcdFx0aWYoICFpc0Nsb3NpbmdUYWcgKSB7ICAvLyBpdCdzIHRoZSBzdGFydCA8YT4gdGFnXHJcblx0XHRcdFx0XHRcdFx0YW5jaG9yVGFnU3RhY2tDb3VudCsrO1xyXG5cdFx0XHRcdFx0XHR9IGVsc2UgeyAgIC8vIGl0J3MgdGhlIGVuZCA8L2E+IHRhZ1xyXG5cdFx0XHRcdFx0XHRcdGFuY2hvclRhZ1N0YWNrQ291bnQgPSBNYXRoLm1heCggYW5jaG9yVGFnU3RhY2tDb3VudCAtIDEsIDAgKTsgIC8vIGF0dGVtcHQgdG8gaGFuZGxlIGV4dHJhbmVvdXMgPC9hPiB0YWdzIGJ5IG1ha2luZyBzdXJlIHRoZSBzdGFjayBjb3VudCBuZXZlciBnb2VzIGJlbG93IDBcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0cmVzdWx0SHRtbC5wdXNoKCB0YWdUZXh0ICk7ICAvLyBub3cgYWRkIHRoZSB0ZXh0IG9mIHRoZSB0YWcgaXRzZWxmIHZlcmJhdGltXHJcblx0XHRcdFx0fSxcclxuXHJcblx0XHRcdFx0Ly8gUHJvY2VzcyB0ZXh0IG5vZGVzIGluIHRoZSBpbnB1dCBgdGV4dE9ySHRtbGBcclxuXHRcdFx0XHRwcm9jZXNzVGV4dE5vZGUgOiBmdW5jdGlvbiggdGV4dCApIHtcclxuXHRcdFx0XHRcdGlmKCBhbmNob3JUYWdTdGFja0NvdW50ID09PSAwICkge1xyXG5cdFx0XHRcdFx0XHQvLyBJZiB3ZSdyZSBub3Qgd2l0aGluIGFuIDxhPiB0YWcsIHByb2Nlc3MgdGhlIHRleHQgbm9kZVxyXG5cdFx0XHRcdFx0XHR2YXIgdW5lc2NhcGVkVGV4dCA9IEF1dG9saW5rZXIuVXRpbC5zcGxpdEFuZENhcHR1cmUoIHRleHQsIGh0bWxDaGFyYWN0ZXJFbnRpdGllc1JlZ2V4ICk7ICAvLyBzcGxpdCBhdCBIVE1MIGVudGl0aWVzLCBidXQgaW5jbHVkZSB0aGUgSFRNTCBlbnRpdGllcyBpbiB0aGUgcmVzdWx0cyBhcnJheVxyXG5cclxuXHRcdFx0XHRcdFx0Zm9yICggdmFyIGkgPSAwLCBsZW4gPSB1bmVzY2FwZWRUZXh0Lmxlbmd0aDsgaSA8IGxlbjsgaSsrICkge1xyXG5cdFx0XHRcdFx0XHRcdHZhciB0ZXh0VG9Qcm9jZXNzID0gdW5lc2NhcGVkVGV4dFsgaSBdLFxyXG5cdFx0XHRcdFx0XHRcdCAgICBwcm9jZXNzZWRUZXh0Tm9kZSA9IG1lLnByb2Nlc3NUZXh0Tm9kZSggdGV4dFRvUHJvY2VzcyApO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRyZXN1bHRIdG1sLnB1c2goIHByb2Nlc3NlZFRleHROb2RlICk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHQvLyBgdGV4dGAgaXMgd2l0aGluIGFuIDxhPiB0YWcsIHNpbXBseSBhcHBlbmQgdGhlIHRleHQgLSB3ZSBkbyBub3Qgd2FudCB0byBhdXRvbGluayBhbnl0aGluZyBcclxuXHRcdFx0XHRcdFx0Ly8gYWxyZWFkeSB3aXRoaW4gYW4gPGE+Li4uPC9hPiB0YWdcclxuXHRcdFx0XHRcdFx0cmVzdWx0SHRtbC5wdXNoKCB0ZXh0ICk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9ICk7XHJcblxyXG5cdFx0XHRyZXR1cm4gcmVzdWx0SHRtbC5qb2luKCBcIlwiICk7XHJcblx0XHR9LFxyXG5cclxuXHJcblx0XHQvKipcclxuXHRcdCAqIExhemlseSBpbnN0YW50aWF0ZXMgYW5kIHJldHVybnMgdGhlIHtAbGluayAjaHRtbFBhcnNlcn0gaW5zdGFuY2UgZm9yIHRoaXMgQXV0b2xpbmtlciBpbnN0YW5jZS5cclxuXHRcdCAqIFxyXG5cdFx0ICogQHByb3RlY3RlZFxyXG5cdFx0ICogQHJldHVybiB7QXV0b2xpbmtlci5IdG1sUGFyc2VyfVxyXG5cdFx0ICovXHJcblx0XHRnZXRIdG1sUGFyc2VyIDogZnVuY3Rpb24oKSB7XHJcblx0XHRcdHZhciBodG1sUGFyc2VyID0gdGhpcy5odG1sUGFyc2VyO1xyXG5cclxuXHRcdFx0aWYoICFodG1sUGFyc2VyICkge1xyXG5cdFx0XHRcdGh0bWxQYXJzZXIgPSB0aGlzLmh0bWxQYXJzZXIgPSBuZXcgQXV0b2xpbmtlci5IdG1sUGFyc2VyKCk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHJldHVybiBodG1sUGFyc2VyO1xyXG5cdFx0fSxcclxuXHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBSZXR1cm5zIHRoZSB7QGxpbmsgI3RhZ0J1aWxkZXJ9IGluc3RhbmNlIGZvciB0aGlzIEF1dG9saW5rZXIgaW5zdGFuY2UsIGxhemlseSBpbnN0YW50aWF0aW5nIGl0XHJcblx0XHQgKiBpZiBpdCBkb2VzIG5vdCB5ZXQgZXhpc3QuXHJcblx0XHQgKiBcclxuXHRcdCAqIFRoaXMgbWV0aG9kIG1heSBiZSB1c2VkIGluIGEge0BsaW5rICNyZXBsYWNlRm59IHRvIGdlbmVyYXRlIHRoZSB7QGxpbmsgQXV0b2xpbmtlci5IdG1sVGFnIEh0bWxUYWd9IGluc3RhbmNlIHRoYXQgXHJcblx0XHQgKiBBdXRvbGlua2VyIHdvdWxkIG5vcm1hbGx5IGdlbmVyYXRlLCBhbmQgdGhlbiBhbGxvdyBmb3IgbW9kaWZpY2F0aW9ucyBiZWZvcmUgcmV0dXJuaW5nIGl0LiBGb3IgZXhhbXBsZTpcclxuXHRcdCAqIFxyXG5cdFx0ICogICAgIHZhciBodG1sID0gQXV0b2xpbmtlci5saW5rKCBcIlRlc3QgZ29vZ2xlLmNvbVwiLCB7XHJcblx0XHQgKiAgICAgICAgIHJlcGxhY2VGbiA6IGZ1bmN0aW9uKCBhdXRvbGlua2VyLCBtYXRjaCApIHtcclxuXHRcdCAqICAgICAgICAgICAgIHZhciB0YWcgPSBhdXRvbGlua2VyLmdldFRhZ0J1aWxkZXIoKS5idWlsZCggbWF0Y2ggKTsgIC8vIHJldHVybnMgYW4ge0BsaW5rIEF1dG9saW5rZXIuSHRtbFRhZ30gaW5zdGFuY2VcclxuXHRcdCAqICAgICAgICAgICAgIHRhZy5zZXRBdHRyKCAncmVsJywgJ25vZm9sbG93JyApO1xyXG5cdFx0ICogICAgICAgICAgICAgXHJcblx0XHQgKiAgICAgICAgICAgICByZXR1cm4gdGFnO1xyXG5cdFx0ICogICAgICAgICB9XHJcblx0XHQgKiAgICAgfSApO1xyXG5cdFx0ICogICAgIFxyXG5cdFx0ICogICAgIC8vIGdlbmVyYXRlZCBodG1sOlxyXG5cdFx0ICogICAgIC8vICAgVGVzdCA8YSBocmVmPVwiaHR0cDovL2dvb2dsZS5jb21cIiB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub2ZvbGxvd1wiPmdvb2dsZS5jb208L2E+XHJcblx0XHQgKiBcclxuXHRcdCAqIEByZXR1cm4ge0F1dG9saW5rZXIuQW5jaG9yVGFnQnVpbGRlcn1cclxuXHRcdCAqL1xyXG5cdFx0Z2V0VGFnQnVpbGRlciA6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHR2YXIgdGFnQnVpbGRlciA9IHRoaXMudGFnQnVpbGRlcjtcclxuXHJcblx0XHRcdGlmKCAhdGFnQnVpbGRlciApIHtcclxuXHRcdFx0XHR0YWdCdWlsZGVyID0gdGhpcy50YWdCdWlsZGVyID0gbmV3IEF1dG9saW5rZXIuQW5jaG9yVGFnQnVpbGRlcigge1xyXG5cdFx0XHRcdFx0bmV3V2luZG93ICAgOiB0aGlzLm5ld1dpbmRvdyxcclxuXHRcdFx0XHRcdHRydW5jYXRlICAgIDogdGhpcy50cnVuY2F0ZSxcclxuXHRcdFx0XHRcdGNsYXNzTmFtZSAgIDogdGhpcy5jbGFzc05hbWVcclxuXHRcdFx0XHR9ICk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHJldHVybiB0YWdCdWlsZGVyO1xyXG5cdFx0fSxcclxuXHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBQcm9jZXNzIHRoZSB0ZXh0IHRoYXQgbGllcyBpbmJldHdlZW4gSFRNTCB0YWdzLiBUaGlzIG1ldGhvZCBkb2VzIHRoZSBhY3R1YWwgd3JhcHBpbmcgb2YgVVJMcyB3aXRoXHJcblx0XHQgKiBhbmNob3IgdGFncy5cclxuXHRcdCAqIFxyXG5cdFx0ICogQHByaXZhdGVcclxuXHRcdCAqIEBwYXJhbSB7U3RyaW5nfSB0ZXh0IFRoZSB0ZXh0IHRvIGF1dG8tbGluay5cclxuXHRcdCAqIEByZXR1cm4ge1N0cmluZ30gVGhlIHRleHQgd2l0aCBhbmNob3IgdGFncyBhdXRvLWZpbGxlZC5cclxuXHRcdCAqL1xyXG5cdFx0cHJvY2Vzc1RleHROb2RlIDogZnVuY3Rpb24oIHRleHQgKSB7XHJcblx0XHRcdHZhciBtZSA9IHRoaXM7ICAvLyBmb3IgY2xvc3VyZVxyXG5cclxuXHRcdFx0cmV0dXJuIHRleHQucmVwbGFjZSggdGhpcy5tYXRjaGVyUmVnZXgsIGZ1bmN0aW9uKCBtYXRjaFN0ciwgJDEsICQyLCAkMywgJDQsICQ1LCAkNiwgJDcsICQ4ICkge1xyXG5cdFx0XHRcdHZhciBtYXRjaERlc2NPYmogPSBtZS5wcm9jZXNzQ2FuZGlkYXRlTWF0Y2goIG1hdGNoU3RyLCAkMSwgJDIsICQzLCAkNCwgJDUsICQ2LCAkNywgJDggKTsgIC8vIG1hdGNoIGRlc2NyaXB0aW9uIG9iamVjdFxyXG5cclxuXHRcdFx0XHQvLyBSZXR1cm4gb3V0IHdpdGggbm8gY2hhbmdlcyBmb3IgbWF0Y2ggdHlwZXMgdGhhdCBhcmUgZGlzYWJsZWQgKHVybCwgZW1haWwsIHR3aXR0ZXIpLCBvciBmb3IgbWF0Y2hlcyB0aGF0IGFyZSBcclxuXHRcdFx0XHQvLyBpbnZhbGlkIChmYWxzZSBwb3NpdGl2ZXMgZnJvbSB0aGUgbWF0Y2hlclJlZ2V4LCB3aGljaCBjYW4ndCB1c2UgbG9vay1iZWhpbmRzIHNpbmNlIHRoZXkgYXJlIHVuYXZhaWxhYmxlIGluIEpTKS5cclxuXHRcdFx0XHRpZiggIW1hdGNoRGVzY09iaiApIHtcclxuXHRcdFx0XHRcdHJldHVybiBtYXRjaFN0cjtcclxuXHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdC8vIEdlbmVyYXRlIHRoZSByZXBsYWNlbWVudCB0ZXh0IGZvciB0aGUgbWF0Y2hcclxuXHRcdFx0XHRcdHZhciBtYXRjaFJldHVyblZhbCA9IG1lLmNyZWF0ZU1hdGNoUmV0dXJuVmFsKCBtYXRjaERlc2NPYmoubWF0Y2gsIG1hdGNoRGVzY09iai5tYXRjaFN0ciApO1xyXG5cdFx0XHRcdFx0cmV0dXJuIG1hdGNoRGVzY09iai5wcmVmaXhTdHIgKyBtYXRjaFJldHVyblZhbCArIG1hdGNoRGVzY09iai5zdWZmaXhTdHI7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9ICk7XHJcblx0XHR9LFxyXG5cclxuXHJcblx0XHQvKipcclxuXHRcdCAqIFByb2Nlc3NlcyBhIGNhbmRpZGF0ZSBtYXRjaCBmcm9tIHRoZSB7QGxpbmsgI21hdGNoZXJSZWdleH0uIFxyXG5cdFx0ICogXHJcblx0XHQgKiBOb3QgYWxsIG1hdGNoZXMgZm91bmQgYnkgdGhlIHJlZ2V4IGFyZSBhY3R1YWwgVVJML2VtYWlsL1R3aXR0ZXIgbWF0Y2hlcywgYXMgZGV0ZXJtaW5lZCBieSB0aGUge0BsaW5rICNtYXRjaFZhbGlkYXRvcn0uIEluXHJcblx0XHQgKiB0aGlzIGNhc2UsIHRoZSBtZXRob2QgcmV0dXJucyBgbnVsbGAuIE90aGVyd2lzZSwgYSB2YWxpZCBPYmplY3Qgd2l0aCBgcHJlZml4U3RyYCwgYG1hdGNoYCwgYW5kIGBzdWZmaXhTdHJgIGlzIHJldHVybmVkLlxyXG5cdFx0ICogXHJcblx0XHQgKiBAcHJpdmF0ZVxyXG5cdFx0ICogQHBhcmFtIHtTdHJpbmd9IG1hdGNoU3RyIFRoZSBmdWxsIG1hdGNoIHRoYXQgd2FzIGZvdW5kIGJ5IHRoZSB7QGxpbmsgI21hdGNoZXJSZWdleH0uXHJcblx0XHQgKiBAcGFyYW0ge1N0cmluZ30gdHdpdHRlck1hdGNoIFRoZSBtYXRjaGVkIHRleHQgb2YgYSBUd2l0dGVyIGhhbmRsZSwgaWYgdGhlIG1hdGNoIGlzIGEgVHdpdHRlciBtYXRjaC5cclxuXHRcdCAqIEBwYXJhbSB7U3RyaW5nfSB0d2l0dGVySGFuZGxlUHJlZml4V2hpdGVzcGFjZUNoYXIgVGhlIHdoaXRlc3BhY2UgY2hhciBiZWZvcmUgdGhlIEAgc2lnbiBpbiBhIFR3aXR0ZXIgaGFuZGxlIG1hdGNoLiBUaGlzIFxyXG5cdFx0ICogICBpcyBuZWVkZWQgYmVjYXVzZSBvZiBubyBsb29rYmVoaW5kcyBpbiBKUyByZWdleGVzLCBhbmQgaXMgbmVlZCB0byByZS1pbmNsdWRlIHRoZSBjaGFyYWN0ZXIgZm9yIHRoZSBhbmNob3IgdGFnIHJlcGxhY2VtZW50LlxyXG5cdFx0ICogQHBhcmFtIHtTdHJpbmd9IHR3aXR0ZXJIYW5kbGUgVGhlIGFjdHVhbCBUd2l0dGVyIHVzZXIgKGkuZSB0aGUgd29yZCBhZnRlciB0aGUgQCBzaWduIGluIGEgVHdpdHRlciBtYXRjaCkuXHJcblx0XHQgKiBAcGFyYW0ge1N0cmluZ30gZW1haWxBZGRyZXNzTWF0Y2ggVGhlIG1hdGNoZWQgZW1haWwgYWRkcmVzcyBmb3IgYW4gZW1haWwgYWRkcmVzcyBtYXRjaC5cclxuXHRcdCAqIEBwYXJhbSB7U3RyaW5nfSB1cmxNYXRjaCBUaGUgbWF0Y2hlZCBVUkwgc3RyaW5nIGZvciBhIFVSTCBtYXRjaC5cclxuXHRcdCAqIEBwYXJhbSB7U3RyaW5nfSBwcm90b2NvbFVybE1hdGNoIFRoZSBtYXRjaCBVUkwgc3RyaW5nIGZvciBhIHByb3RvY29sIG1hdGNoLiBFeDogJ2h0dHA6Ly95YWhvby5jb20nLiBUaGlzIGlzIHVzZWQgdG8gbWF0Y2hcclxuXHRcdCAqICAgc29tZXRoaW5nIGxpa2UgJ2h0dHA6Ly9sb2NhbGhvc3QnLCB3aGVyZSB3ZSB3b24ndCBkb3VibGUgY2hlY2sgdGhhdCB0aGUgZG9tYWluIG5hbWUgaGFzIGF0IGxlYXN0IG9uZSAnLicgaW4gaXQuXHJcblx0XHQgKiBAcGFyYW0ge1N0cmluZ30gd3d3UHJvdG9jb2xSZWxhdGl2ZU1hdGNoIFRoZSAnLy8nIGZvciBhIHByb3RvY29sLXJlbGF0aXZlIG1hdGNoIGZyb20gYSAnd3d3JyB1cmwsIHdpdGggdGhlIGNoYXJhY3RlciB0aGF0IFxyXG5cdFx0ICogICBjb21lcyBiZWZvcmUgdGhlICcvLycuXHJcblx0XHQgKiBAcGFyYW0ge1N0cmluZ30gdGxkUHJvdG9jb2xSZWxhdGl2ZU1hdGNoIFRoZSAnLy8nIGZvciBhIHByb3RvY29sLXJlbGF0aXZlIG1hdGNoIGZyb20gYSBUTEQgKHRvcCBsZXZlbCBkb21haW4pIG1hdGNoLCB3aXRoIFxyXG5cdFx0ICogICB0aGUgY2hhcmFjdGVyIHRoYXQgY29tZXMgYmVmb3JlIHRoZSAnLy8nLlxyXG5cdFx0ICogICBcclxuXHRcdCAqIEByZXR1cm4ge09iamVjdH0gQSBcIm1hdGNoIGRlc2NyaXB0aW9uIG9iamVjdFwiLiBUaGlzIHdpbGwgYmUgYG51bGxgIGlmIHRoZSBtYXRjaCB3YXMgaW52YWxpZCwgb3IgaWYgYSBtYXRjaCB0eXBlIGlzIGRpc2FibGVkLlxyXG5cdFx0ICogICBPdGhlcndpc2UsIHRoaXMgd2lsbCBiZSBhbiBPYmplY3QgKG1hcCkgd2l0aCB0aGUgZm9sbG93aW5nIHByb3BlcnRpZXM6XHJcblx0XHQgKiBAcmV0dXJuIHtTdHJpbmd9IHJldHVybi5wcmVmaXhTdHIgVGhlIGNoYXIocykgdGhhdCBzaG91bGQgYmUgcHJlcGVuZGVkIHRvIHRoZSByZXBsYWNlbWVudCBzdHJpbmcuIFRoZXNlIGFyZSBjaGFyKHMpIHRoYXRcclxuXHRcdCAqICAgd2VyZSBuZWVkZWQgdG8gYmUgaW5jbHVkZWQgZnJvbSB0aGUgcmVnZXggbWF0Y2ggdGhhdCB3ZXJlIGlnbm9yZWQgYnkgcHJvY2Vzc2luZyBjb2RlLCBhbmQgc2hvdWxkIGJlIHJlLWluc2VydGVkIGludG8gXHJcblx0XHQgKiAgIHRoZSByZXBsYWNlbWVudCBzdHJlYW0uXHJcblx0XHQgKiBAcmV0dXJuIHtTdHJpbmd9IHJldHVybi5zdWZmaXhTdHIgVGhlIGNoYXIocykgdGhhdCBzaG91bGQgYmUgYXBwZW5kZWQgdG8gdGhlIHJlcGxhY2VtZW50IHN0cmluZy4gVGhlc2UgYXJlIGNoYXIocykgdGhhdFxyXG5cdFx0ICogICB3ZXJlIG5lZWRlZCB0byBiZSBpbmNsdWRlZCBmcm9tIHRoZSByZWdleCBtYXRjaCB0aGF0IHdlcmUgaWdub3JlZCBieSBwcm9jZXNzaW5nIGNvZGUsIGFuZCBzaG91bGQgYmUgcmUtaW5zZXJ0ZWQgaW50byBcclxuXHRcdCAqICAgdGhlIHJlcGxhY2VtZW50IHN0cmVhbS5cclxuXHRcdCAqIEByZXR1cm4ge1N0cmluZ30gcmV0dXJuLm1hdGNoU3RyIFRoZSBgbWF0Y2hTdHJgLCBmaXhlZCB1cCB0byByZW1vdmUgY2hhcmFjdGVycyB0aGF0IGFyZSBubyBsb25nZXIgbmVlZGVkICh3aGljaCBoYXZlIGJlZW5cclxuXHRcdCAqICAgYWRkZWQgdG8gYHByZWZpeFN0cmAgYW5kIGBzdWZmaXhTdHJgKS5cclxuXHRcdCAqIEByZXR1cm4ge0F1dG9saW5rZXIubWF0Y2guTWF0Y2h9IHJldHVybi5tYXRjaCBUaGUgTWF0Y2ggb2JqZWN0IHRoYXQgcmVwcmVzZW50cyB0aGUgbWF0Y2ggdGhhdCB3YXMgZm91bmQuXHJcblx0XHQgKi9cclxuXHRcdHByb2Nlc3NDYW5kaWRhdGVNYXRjaCA6IGZ1bmN0aW9uKCBcclxuXHRcdFx0bWF0Y2hTdHIsIHR3aXR0ZXJNYXRjaCwgdHdpdHRlckhhbmRsZVByZWZpeFdoaXRlc3BhY2VDaGFyLCB0d2l0dGVySGFuZGxlLCBcclxuXHRcdFx0ZW1haWxBZGRyZXNzTWF0Y2gsIHVybE1hdGNoLCBwcm90b2NvbFVybE1hdGNoLCB3d3dQcm90b2NvbFJlbGF0aXZlTWF0Y2gsIHRsZFByb3RvY29sUmVsYXRpdmVNYXRjaFxyXG5cdFx0KSB7XHJcblx0XHRcdHZhciBwcm90b2NvbFJlbGF0aXZlTWF0Y2ggPSB3d3dQcm90b2NvbFJlbGF0aXZlTWF0Y2ggfHwgdGxkUHJvdG9jb2xSZWxhdGl2ZU1hdGNoLFxyXG5cdFx0XHQgICAgbWF0Y2gsICAvLyBXaWxsIGJlIGFuIEF1dG9saW5rZXIubWF0Y2guTWF0Y2ggb2JqZWN0XHJcblxyXG5cdFx0XHQgICAgcHJlZml4U3RyID0gXCJcIiwgICAgICAgLy8gQSBzdHJpbmcgdG8gdXNlIHRvIHByZWZpeCB0aGUgYW5jaG9yIHRhZyB0aGF0IGlzIGNyZWF0ZWQuIFRoaXMgaXMgbmVlZGVkIGZvciB0aGUgVHdpdHRlciBoYW5kbGUgbWF0Y2hcclxuXHRcdFx0ICAgIHN1ZmZpeFN0ciA9IFwiXCI7ICAgICAgIC8vIEEgc3RyaW5nIHRvIHN1ZmZpeCB0aGUgYW5jaG9yIHRhZyB0aGF0IGlzIGNyZWF0ZWQuIFRoaXMgaXMgdXNlZCBpZiB0aGVyZSBpcyBhIHRyYWlsaW5nIHBhcmVudGhlc2lzIHRoYXQgc2hvdWxkIG5vdCBiZSBhdXRvLWxpbmtlZC5cclxuXHJcblxyXG5cdFx0XHQvLyBSZXR1cm4gb3V0IHdpdGggYG51bGxgIGZvciBtYXRjaCB0eXBlcyB0aGF0IGFyZSBkaXNhYmxlZCAodXJsLCBlbWFpbCwgdHdpdHRlciksIG9yIGZvciBtYXRjaGVzIHRoYXQgYXJlIFxyXG5cdFx0XHQvLyBpbnZhbGlkIChmYWxzZSBwb3NpdGl2ZXMgZnJvbSB0aGUgbWF0Y2hlclJlZ2V4LCB3aGljaCBjYW4ndCB1c2UgbG9vay1iZWhpbmRzIHNpbmNlIHRoZXkgYXJlIHVuYXZhaWxhYmxlIGluIEpTKS5cclxuXHRcdFx0aWYoXHJcblx0XHRcdFx0KCB0d2l0dGVyTWF0Y2ggJiYgIXRoaXMudHdpdHRlciApIHx8ICggZW1haWxBZGRyZXNzTWF0Y2ggJiYgIXRoaXMuZW1haWwgKSB8fCAoIHVybE1hdGNoICYmICF0aGlzLnVybHMgKSB8fFxyXG5cdFx0XHRcdCF0aGlzLm1hdGNoVmFsaWRhdG9yLmlzVmFsaWRNYXRjaCggdXJsTWF0Y2gsIHByb3RvY29sVXJsTWF0Y2gsIHByb3RvY29sUmVsYXRpdmVNYXRjaCApIFxyXG5cdFx0XHQpIHtcclxuXHRcdFx0XHRyZXR1cm4gbnVsbDtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Ly8gSGFuZGxlIGEgY2xvc2luZyBwYXJlbnRoZXNpcyBhdCB0aGUgZW5kIG9mIHRoZSBtYXRjaCwgYW5kIGV4Y2x1ZGUgaXQgaWYgdGhlcmUgaXMgbm90IGEgbWF0Y2hpbmcgb3BlbiBwYXJlbnRoZXNpc1xyXG5cdFx0XHQvLyBpbiB0aGUgbWF0Y2ggaXRzZWxmLiBcclxuXHRcdFx0aWYoIHRoaXMubWF0Y2hIYXNVbmJhbGFuY2VkQ2xvc2luZ1BhcmVuKCBtYXRjaFN0ciApICkge1xyXG5cdFx0XHRcdG1hdGNoU3RyID0gbWF0Y2hTdHIuc3Vic3RyKCAwLCBtYXRjaFN0ci5sZW5ndGggLSAxICk7ICAvLyByZW1vdmUgdGhlIHRyYWlsaW5nIFwiKVwiXHJcblx0XHRcdFx0c3VmZml4U3RyID0gXCIpXCI7ICAvLyB0aGlzIHdpbGwgYmUgYWRkZWQgYWZ0ZXIgdGhlIGdlbmVyYXRlZCA8YT4gdGFnXHJcblx0XHRcdH1cclxuXHJcblxyXG5cdFx0XHRpZiggZW1haWxBZGRyZXNzTWF0Y2ggKSB7XHJcblx0XHRcdFx0bWF0Y2ggPSBuZXcgQXV0b2xpbmtlci5tYXRjaC5FbWFpbCggeyBtYXRjaGVkVGV4dDogbWF0Y2hTdHIsIGVtYWlsOiBlbWFpbEFkZHJlc3NNYXRjaCB9ICk7XHJcblxyXG5cdFx0XHR9IGVsc2UgaWYoIHR3aXR0ZXJNYXRjaCApIHtcclxuXHRcdFx0XHQvLyBmaXggdXAgdGhlIGBtYXRjaFN0cmAgaWYgdGhlcmUgd2FzIGEgcHJlY2VkaW5nIHdoaXRlc3BhY2UgY2hhciwgd2hpY2ggd2FzIG5lZWRlZCB0byBkZXRlcm1pbmUgdGhlIG1hdGNoIFxyXG5cdFx0XHRcdC8vIGl0c2VsZiAoc2luY2UgdGhlcmUgYXJlIG5vIGxvb2stYmVoaW5kcyBpbiBKUyByZWdleGVzKVxyXG5cdFx0XHRcdGlmKCB0d2l0dGVySGFuZGxlUHJlZml4V2hpdGVzcGFjZUNoYXIgKSB7XHJcblx0XHRcdFx0XHRwcmVmaXhTdHIgPSB0d2l0dGVySGFuZGxlUHJlZml4V2hpdGVzcGFjZUNoYXI7XHJcblx0XHRcdFx0XHRtYXRjaFN0ciA9IG1hdGNoU3RyLnNsaWNlKCAxICk7ICAvLyByZW1vdmUgdGhlIHByZWZpeGVkIHdoaXRlc3BhY2UgY2hhciBmcm9tIHRoZSBtYXRjaFxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRtYXRjaCA9IG5ldyBBdXRvbGlua2VyLm1hdGNoLlR3aXR0ZXIoIHsgbWF0Y2hlZFRleHQ6IG1hdGNoU3RyLCB0d2l0dGVySGFuZGxlOiB0d2l0dGVySGFuZGxlIH0gKTtcclxuXHJcblx0XHRcdH0gZWxzZSB7ICAvLyB1cmwgbWF0Y2hcclxuXHRcdFx0XHQvLyBJZiBpdCdzIGEgcHJvdG9jb2wtcmVsYXRpdmUgJy8vJyBtYXRjaCwgcmVtb3ZlIHRoZSBjaGFyYWN0ZXIgYmVmb3JlIHRoZSAnLy8nICh3aGljaCB0aGUgbWF0Y2hlclJlZ2V4IG5lZWRlZFxyXG5cdFx0XHRcdC8vIHRvIG1hdGNoIGR1ZSB0byB0aGUgbGFjayBvZiBhIG5lZ2F0aXZlIGxvb2stYmVoaW5kIGluIEphdmFTY3JpcHQgcmVndWxhciBleHByZXNzaW9ucylcclxuXHRcdFx0XHRpZiggcHJvdG9jb2xSZWxhdGl2ZU1hdGNoICkge1xyXG5cdFx0XHRcdFx0dmFyIGNoYXJCZWZvcmVNYXRjaCA9IHByb3RvY29sUmVsYXRpdmVNYXRjaC5tYXRjaCggdGhpcy5jaGFyQmVmb3JlUHJvdG9jb2xSZWxNYXRjaFJlZ2V4IClbIDEgXSB8fCBcIlwiO1xyXG5cclxuXHRcdFx0XHRcdGlmKCBjaGFyQmVmb3JlTWF0Y2ggKSB7ICAvLyBmaXggdXAgdGhlIGBtYXRjaFN0cmAgaWYgdGhlcmUgd2FzIGEgcHJlY2VkaW5nIGNoYXIgYmVmb3JlIGEgcHJvdG9jb2wtcmVsYXRpdmUgbWF0Y2gsIHdoaWNoIHdhcyBuZWVkZWQgdG8gZGV0ZXJtaW5lIHRoZSBtYXRjaCBpdHNlbGYgKHNpbmNlIHRoZXJlIGFyZSBubyBsb29rLWJlaGluZHMgaW4gSlMgcmVnZXhlcylcclxuXHRcdFx0XHRcdFx0cHJlZml4U3RyID0gY2hhckJlZm9yZU1hdGNoO1xyXG5cdFx0XHRcdFx0XHRtYXRjaFN0ciA9IG1hdGNoU3RyLnNsaWNlKCAxICk7ICAvLyByZW1vdmUgdGhlIHByZWZpeGVkIGNoYXIgZnJvbSB0aGUgbWF0Y2hcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdG1hdGNoID0gbmV3IEF1dG9saW5rZXIubWF0Y2guVXJsKCB7XHJcblx0XHRcdFx0XHRtYXRjaGVkVGV4dCA6IG1hdGNoU3RyLFxyXG5cdFx0XHRcdFx0dXJsIDogbWF0Y2hTdHIsXHJcblx0XHRcdFx0XHRwcm90b2NvbFVybE1hdGNoIDogISFwcm90b2NvbFVybE1hdGNoLFxyXG5cdFx0XHRcdFx0cHJvdG9jb2xSZWxhdGl2ZU1hdGNoIDogISFwcm90b2NvbFJlbGF0aXZlTWF0Y2gsXHJcblx0XHRcdFx0XHRzdHJpcFByZWZpeCA6IHRoaXMuc3RyaXBQcmVmaXhcclxuXHRcdFx0XHR9ICk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0cHJlZml4U3RyIDogcHJlZml4U3RyLFxyXG5cdFx0XHRcdHN1ZmZpeFN0ciA6IHN1ZmZpeFN0cixcclxuXHRcdFx0XHRtYXRjaFN0ciAgOiBtYXRjaFN0cixcclxuXHRcdFx0XHRtYXRjaCAgICAgOiBtYXRjaFxyXG5cdFx0XHR9O1xyXG5cdFx0fSxcclxuXHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBEZXRlcm1pbmVzIGlmIGEgbWF0Y2ggZm91bmQgaGFzIGFuIHVubWF0Y2hlZCBjbG9zaW5nIHBhcmVudGhlc2lzLiBJZiBzbywgdGhpcyBwYXJlbnRoZXNpcyB3aWxsIGJlIHJlbW92ZWRcclxuXHRcdCAqIGZyb20gdGhlIG1hdGNoIGl0c2VsZiwgYW5kIGFwcGVuZGVkIGFmdGVyIHRoZSBnZW5lcmF0ZWQgYW5jaG9yIHRhZyBpbiB7QGxpbmsgI3Byb2Nlc3NUZXh0Tm9kZX0uXHJcblx0XHQgKiBcclxuXHRcdCAqIEEgbWF0Y2ggbWF5IGhhdmUgYW4gZXh0cmEgY2xvc2luZyBwYXJlbnRoZXNpcyBhdCB0aGUgZW5kIG9mIHRoZSBtYXRjaCBiZWNhdXNlIHRoZSByZWd1bGFyIGV4cHJlc3Npb24gbXVzdCBpbmNsdWRlIHBhcmVudGhlc2lzXHJcblx0XHQgKiBmb3IgVVJMcyBzdWNoIGFzIFwid2lraXBlZGlhLmNvbS9zb21ldGhpbmdfKGRpc2FtYmlndWF0aW9uKVwiLCB3aGljaCBzaG91bGQgYmUgYXV0by1saW5rZWQuIFxyXG5cdFx0ICogXHJcblx0XHQgKiBIb3dldmVyLCBhbiBleHRyYSBwYXJlbnRoZXNpcyAqd2lsbCogYmUgaW5jbHVkZWQgd2hlbiB0aGUgVVJMIGl0c2VsZiBpcyB3cmFwcGVkIGluIHBhcmVudGhlc2lzLCBzdWNoIGFzIGluIHRoZSBjYXNlIG9mXHJcblx0XHQgKiBcIih3aWtpcGVkaWEuY29tL3NvbWV0aGluZ18oZGlzYW1iaWd1YXRpb24pKVwiLiBJbiB0aGlzIGNhc2UsIHRoZSBsYXN0IGNsb3NpbmcgcGFyZW50aGVzaXMgc2hvdWxkICpub3QqIGJlIHBhcnQgb2YgdGhlIFVSTCBcclxuXHRcdCAqIGl0c2VsZiwgYW5kIHRoaXMgbWV0aG9kIHdpbGwgcmV0dXJuIGB0cnVlYC5cclxuXHRcdCAqIFxyXG5cdFx0ICogQHByaXZhdGVcclxuXHRcdCAqIEBwYXJhbSB7U3RyaW5nfSBtYXRjaFN0ciBUaGUgZnVsbCBtYXRjaCBzdHJpbmcgZnJvbSB0aGUge0BsaW5rICNtYXRjaGVyUmVnZXh9LlxyXG5cdFx0ICogQHJldHVybiB7Qm9vbGVhbn0gYHRydWVgIGlmIHRoZXJlIGlzIGFuIHVuYmFsYW5jZWQgY2xvc2luZyBwYXJlbnRoZXNpcyBhdCB0aGUgZW5kIG9mIHRoZSBgbWF0Y2hTdHJgLCBgZmFsc2VgIG90aGVyd2lzZS5cclxuXHRcdCAqL1xyXG5cdFx0bWF0Y2hIYXNVbmJhbGFuY2VkQ2xvc2luZ1BhcmVuIDogZnVuY3Rpb24oIG1hdGNoU3RyICkge1xyXG5cdFx0XHR2YXIgbGFzdENoYXIgPSBtYXRjaFN0ci5jaGFyQXQoIG1hdGNoU3RyLmxlbmd0aCAtIDEgKTtcclxuXHJcblx0XHRcdGlmKCBsYXN0Q2hhciA9PT0gJyknICkge1xyXG5cdFx0XHRcdHZhciBvcGVuUGFyZW5zTWF0Y2ggPSBtYXRjaFN0ci5tYXRjaCggL1xcKC9nICksXHJcblx0XHRcdFx0ICAgIGNsb3NlUGFyZW5zTWF0Y2ggPSBtYXRjaFN0ci5tYXRjaCggL1xcKS9nICksXHJcblx0XHRcdFx0ICAgIG51bU9wZW5QYXJlbnMgPSAoIG9wZW5QYXJlbnNNYXRjaCAmJiBvcGVuUGFyZW5zTWF0Y2gubGVuZ3RoICkgfHwgMCxcclxuXHRcdFx0XHQgICAgbnVtQ2xvc2VQYXJlbnMgPSAoIGNsb3NlUGFyZW5zTWF0Y2ggJiYgY2xvc2VQYXJlbnNNYXRjaC5sZW5ndGggKSB8fCAwO1xyXG5cclxuXHRcdFx0XHRpZiggbnVtT3BlblBhcmVucyA8IG51bUNsb3NlUGFyZW5zICkge1xyXG5cdFx0XHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHR9LFxyXG5cclxuXHJcblx0XHQvKipcclxuXHRcdCAqIENyZWF0ZXMgdGhlIHJldHVybiBzdHJpbmcgdmFsdWUgZm9yIGEgZ2l2ZW4gbWF0Y2ggaW4gdGhlIGlucHV0IHN0cmluZywgZm9yIHRoZSB7QGxpbmsgI3Byb2Nlc3NUZXh0Tm9kZX0gbWV0aG9kLlxyXG5cdFx0ICogXHJcblx0XHQgKiBUaGlzIG1ldGhvZCBoYW5kbGVzIHRoZSB7QGxpbmsgI3JlcGxhY2VGbn0sIGlmIG9uZSB3YXMgcHJvdmlkZWQuXHJcblx0XHQgKiBcclxuXHRcdCAqIEBwcml2YXRlXHJcblx0XHQgKiBAcGFyYW0ge0F1dG9saW5rZXIubWF0Y2guTWF0Y2h9IG1hdGNoIFRoZSBNYXRjaCBvYmplY3QgdGhhdCByZXByZXNlbnRzIHRoZSBtYXRjaC5cclxuXHRcdCAqIEBwYXJhbSB7U3RyaW5nfSBtYXRjaFN0ciBUaGUgb3JpZ2luYWwgbWF0Y2ggc3RyaW5nLCBhZnRlciBoYXZpbmcgYmVlbiBwcmVwcm9jZXNzZWQgdG8gZml4IG1hdGNoIGVkZ2UgY2FzZXMgKHNlZVxyXG5cdFx0ICogICB0aGUgYHByZWZpeFN0cmAgYW5kIGBzdWZmaXhTdHJgIHZhcnMgaW4ge0BsaW5rICNwcm9jZXNzVGV4dE5vZGV9LlxyXG5cdFx0ICogQHJldHVybiB7U3RyaW5nfSBUaGUgc3RyaW5nIHRoYXQgdGhlIGBtYXRjaGAgc2hvdWxkIGJlIHJlcGxhY2VkIHdpdGguIFRoaXMgaXMgdXN1YWxseSB0aGUgYW5jaG9yIHRhZyBzdHJpbmcsIGJ1dFxyXG5cdFx0ICogICBtYXkgYmUgdGhlIGBtYXRjaFN0cmAgaXRzZWxmIGlmIHRoZSBtYXRjaCBpcyBub3QgdG8gYmUgcmVwbGFjZWQuXHJcblx0XHQgKi9cclxuXHRcdGNyZWF0ZU1hdGNoUmV0dXJuVmFsIDogZnVuY3Rpb24oIG1hdGNoLCBtYXRjaFN0ciApIHtcclxuXHRcdFx0Ly8gSGFuZGxlIGEgY3VzdG9tIGByZXBsYWNlRm5gIGJlaW5nIHByb3ZpZGVkXHJcblx0XHRcdHZhciByZXBsYWNlRm5SZXN1bHQ7XHJcblx0XHRcdGlmKCB0aGlzLnJlcGxhY2VGbiApIHtcclxuXHRcdFx0XHRyZXBsYWNlRm5SZXN1bHQgPSB0aGlzLnJlcGxhY2VGbi5jYWxsKCB0aGlzLCB0aGlzLCBtYXRjaCApOyAgLy8gQXV0b2xpbmtlciBpbnN0YW5jZSBpcyB0aGUgY29udGV4dCwgYW5kIHRoZSBmaXJzdCBhcmdcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYoIHR5cGVvZiByZXBsYWNlRm5SZXN1bHQgPT09ICdzdHJpbmcnICkge1xyXG5cdFx0XHRcdHJldHVybiByZXBsYWNlRm5SZXN1bHQ7ICAvLyBgcmVwbGFjZUZuYCByZXR1cm5lZCBhIHN0cmluZywgdXNlIHRoYXRcclxuXHJcblx0XHRcdH0gZWxzZSBpZiggcmVwbGFjZUZuUmVzdWx0ID09PSBmYWxzZSApIHtcclxuXHRcdFx0XHRyZXR1cm4gbWF0Y2hTdHI7ICAvLyBubyByZXBsYWNlbWVudCBmb3IgdGhlIG1hdGNoXHJcblxyXG5cdFx0XHR9IGVsc2UgaWYoIHJlcGxhY2VGblJlc3VsdCBpbnN0YW5jZW9mIEF1dG9saW5rZXIuSHRtbFRhZyApIHtcclxuXHRcdFx0XHRyZXR1cm4gcmVwbGFjZUZuUmVzdWx0LnRvU3RyaW5nKCk7XHJcblxyXG5cdFx0XHR9IGVsc2UgeyAgLy8gcmVwbGFjZUZuUmVzdWx0ID09PSB0cnVlLCBvciBuby91bmtub3duIHJldHVybiB2YWx1ZSBmcm9tIGZ1bmN0aW9uXHJcblx0XHRcdFx0Ly8gUGVyZm9ybSBBdXRvbGlua2VyJ3MgZGVmYXVsdCBhbmNob3IgdGFnIGdlbmVyYXRpb25cclxuXHRcdFx0XHR2YXIgdGFnQnVpbGRlciA9IHRoaXMuZ2V0VGFnQnVpbGRlcigpLFxyXG5cdFx0XHRcdCAgICBhbmNob3JUYWcgPSB0YWdCdWlsZGVyLmJ1aWxkKCBtYXRjaCApOyAgLy8gcmV0dXJucyBhbiBBdXRvbGlua2VyLkh0bWxUYWcgaW5zdGFuY2VcclxuXHJcblx0XHRcdFx0cmV0dXJuIGFuY2hvclRhZy50b1N0cmluZygpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdH07XHJcblxyXG5cclxuXHQvKipcclxuXHQgKiBBdXRvbWF0aWNhbGx5IGxpbmtzIFVSTHMsIGVtYWlsIGFkZHJlc3NlcywgYW5kIFR3aXR0ZXIgaGFuZGxlcyBmb3VuZCBpbiB0aGUgZ2l2ZW4gY2h1bmsgb2YgSFRNTC4gXHJcblx0ICogRG9lcyBub3QgbGluayBVUkxzIGZvdW5kIHdpdGhpbiBIVE1MIHRhZ3MuXHJcblx0ICogXHJcblx0ICogRm9yIGluc3RhbmNlLCBpZiBnaXZlbiB0aGUgdGV4dDogYFlvdSBzaG91bGQgZ28gdG8gaHR0cDovL3d3dy55YWhvby5jb21gLCB0aGVuIHRoZSByZXN1bHRcclxuXHQgKiB3aWxsIGJlIGBZb3Ugc2hvdWxkIGdvIHRvICZsdDthIGhyZWY9XCJodHRwOi8vd3d3LnlhaG9vLmNvbVwiJmd0O2h0dHA6Ly93d3cueWFob28uY29tJmx0Oy9hJmd0O2BcclxuXHQgKiBcclxuXHQgKiBFeGFtcGxlOlxyXG5cdCAqIFxyXG5cdCAqICAgICB2YXIgbGlua2VkVGV4dCA9IEF1dG9saW5rZXIubGluayggXCJHbyB0byBnb29nbGUuY29tXCIsIHsgbmV3V2luZG93OiBmYWxzZSB9ICk7XHJcblx0ICogICAgIC8vIFByb2R1Y2VzOiBcIkdvIHRvIDxhIGhyZWY9XCJodHRwOi8vZ29vZ2xlLmNvbVwiPmdvb2dsZS5jb208L2E+XCJcclxuXHQgKiBcclxuXHQgKiBAc3RhdGljXHJcblx0ICogQHBhcmFtIHtTdHJpbmd9IHRleHRPckh0bWwgVGhlIEhUTUwgb3IgdGV4dCB0byBmaW5kIFVSTHMsIGVtYWlsIGFkZHJlc3NlcywgYW5kIFR3aXR0ZXIgaGFuZGxlcyB3aXRoaW4gKGRlcGVuZGluZyBvbiBpZlxyXG5cdCAqICAgdGhlIHtAbGluayAjdXJsc30sIHtAbGluayAjZW1haWx9LCBhbmQge0BsaW5rICN0d2l0dGVyfSBvcHRpb25zIGFyZSBlbmFibGVkKS5cclxuXHQgKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIEFueSBvZiB0aGUgY29uZmlndXJhdGlvbiBvcHRpb25zIGZvciB0aGUgQXV0b2xpbmtlciBjbGFzcywgc3BlY2lmaWVkIGluIGFuIE9iamVjdCAobWFwKS5cclxuXHQgKiAgIFNlZSB0aGUgY2xhc3MgZGVzY3JpcHRpb24gZm9yIGFuIGV4YW1wbGUgY2FsbC5cclxuXHQgKiBAcmV0dXJuIHtTdHJpbmd9IFRoZSBIVE1MIHRleHQsIHdpdGggVVJMcyBhdXRvbWF0aWNhbGx5IGxpbmtlZFxyXG5cdCAqL1xyXG5cdEF1dG9saW5rZXIubGluayA9IGZ1bmN0aW9uKCB0ZXh0T3JIdG1sLCBvcHRpb25zICkge1xyXG5cdFx0dmFyIGF1dG9saW5rZXIgPSBuZXcgQXV0b2xpbmtlciggb3B0aW9ucyApO1xyXG5cdFx0cmV0dXJuIGF1dG9saW5rZXIubGluayggdGV4dE9ySHRtbCApO1xyXG5cdH07XHJcblxyXG5cclxuXHQvLyBOYW1lc3BhY2UgZm9yIGBtYXRjaGAgY2xhc3Nlc1xyXG5cdEF1dG9saW5rZXIubWF0Y2ggPSB7fTtcclxuXHQvKmdsb2JhbCBBdXRvbGlua2VyICovXHJcblx0Lypqc2hpbnQgZXFudWxsOnRydWUsIGJvc3M6dHJ1ZSAqL1xyXG5cdC8qKlxyXG5cdCAqIEBjbGFzcyBBdXRvbGlua2VyLlV0aWxcclxuXHQgKiBAc2luZ2xldG9uXHJcblx0ICogXHJcblx0ICogQSBmZXcgdXRpbGl0eSBtZXRob2RzIGZvciBBdXRvbGlua2VyLlxyXG5cdCAqL1xyXG5cdEF1dG9saW5rZXIuVXRpbCA9IHtcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIEBwcm9wZXJ0eSB7RnVuY3Rpb259IGFic3RyYWN0TWV0aG9kXHJcblx0XHQgKiBcclxuXHRcdCAqIEEgZnVuY3Rpb24gb2JqZWN0IHdoaWNoIHJlcHJlc2VudHMgYW4gYWJzdHJhY3QgbWV0aG9kLlxyXG5cdFx0ICovXHJcblx0XHRhYnN0cmFjdE1ldGhvZCA6IGZ1bmN0aW9uKCkgeyB0aHJvdyBcImFic3RyYWN0XCI7IH0sXHJcblxyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogQXNzaWducyAoc2hhbGxvdyBjb3BpZXMpIHRoZSBwcm9wZXJ0aWVzIG9mIGBzcmNgIG9udG8gYGRlc3RgLlxyXG5cdFx0ICogXHJcblx0XHQgKiBAcGFyYW0ge09iamVjdH0gZGVzdCBUaGUgZGVzdGluYXRpb24gb2JqZWN0LlxyXG5cdFx0ICogQHBhcmFtIHtPYmplY3R9IHNyYyBUaGUgc291cmNlIG9iamVjdC5cclxuXHRcdCAqIEByZXR1cm4ge09iamVjdH0gVGhlIGRlc3RpbmF0aW9uIG9iamVjdCAoYGRlc3RgKVxyXG5cdFx0ICovXHJcblx0XHRhc3NpZ24gOiBmdW5jdGlvbiggZGVzdCwgc3JjICkge1xyXG5cdFx0XHRmb3IoIHZhciBwcm9wIGluIHNyYyApIHtcclxuXHRcdFx0XHRpZiggc3JjLmhhc093blByb3BlcnR5KCBwcm9wICkgKSB7XHJcblx0XHRcdFx0XHRkZXN0WyBwcm9wIF0gPSBzcmNbIHByb3AgXTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHJldHVybiBkZXN0O1xyXG5cdFx0fSxcclxuXHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBFeHRlbmRzIGBzdXBlcmNsYXNzYCB0byBjcmVhdGUgYSBuZXcgc3ViY2xhc3MsIGFkZGluZyB0aGUgYHByb3RvUHJvcHNgIHRvIHRoZSBuZXcgc3ViY2xhc3MncyBwcm90b3R5cGUuXHJcblx0XHQgKiBcclxuXHRcdCAqIEBwYXJhbSB7RnVuY3Rpb259IHN1cGVyY2xhc3MgVGhlIGNvbnN0cnVjdG9yIGZ1bmN0aW9uIGZvciB0aGUgc3VwZXJjbGFzcy5cclxuXHRcdCAqIEBwYXJhbSB7T2JqZWN0fSBwcm90b1Byb3BzIFRoZSBtZXRob2RzL3Byb3BlcnRpZXMgdG8gYWRkIHRvIHRoZSBzdWJjbGFzcydzIHByb3RvdHlwZS4gVGhpcyBtYXkgY29udGFpbiB0aGVcclxuXHRcdCAqICAgc3BlY2lhbCBwcm9wZXJ0eSBgY29uc3RydWN0b3JgLCB3aGljaCB3aWxsIGJlIHVzZWQgYXMgdGhlIG5ldyBzdWJjbGFzcydzIGNvbnN0cnVjdG9yIGZ1bmN0aW9uLlxyXG5cdFx0ICogQHJldHVybiB7RnVuY3Rpb259IFRoZSBuZXcgc3ViY2xhc3MgZnVuY3Rpb24uXHJcblx0XHQgKi9cclxuXHRcdGV4dGVuZCA6IGZ1bmN0aW9uKCBzdXBlcmNsYXNzLCBwcm90b1Byb3BzICkge1xyXG5cdFx0XHR2YXIgc3VwZXJjbGFzc1Byb3RvID0gc3VwZXJjbGFzcy5wcm90b3R5cGU7XHJcblxyXG5cdFx0XHR2YXIgRiA9IGZ1bmN0aW9uKCkge307XHJcblx0XHRcdEYucHJvdG90eXBlID0gc3VwZXJjbGFzc1Byb3RvO1xyXG5cclxuXHRcdFx0dmFyIHN1YmNsYXNzO1xyXG5cdFx0XHRpZiggcHJvdG9Qcm9wcy5oYXNPd25Qcm9wZXJ0eSggJ2NvbnN0cnVjdG9yJyApICkge1xyXG5cdFx0XHRcdHN1YmNsYXNzID0gcHJvdG9Qcm9wcy5jb25zdHJ1Y3RvcjtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRzdWJjbGFzcyA9IGZ1bmN0aW9uKCkgeyBzdXBlcmNsYXNzUHJvdG8uY29uc3RydWN0b3IuYXBwbHkoIHRoaXMsIGFyZ3VtZW50cyApOyB9O1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHR2YXIgc3ViY2xhc3NQcm90byA9IHN1YmNsYXNzLnByb3RvdHlwZSA9IG5ldyBGKCk7ICAvLyBzZXQgdXAgcHJvdG90eXBlIGNoYWluXHJcblx0XHRcdHN1YmNsYXNzUHJvdG8uY29uc3RydWN0b3IgPSBzdWJjbGFzczsgIC8vIGZpeCBjb25zdHJ1Y3RvciBwcm9wZXJ0eVxyXG5cdFx0XHRzdWJjbGFzc1Byb3RvLnN1cGVyY2xhc3MgPSBzdXBlcmNsYXNzUHJvdG87XHJcblxyXG5cdFx0XHRkZWxldGUgcHJvdG9Qcm9wcy5jb25zdHJ1Y3RvcjsgIC8vIGRvbid0IHJlLWFzc2lnbiBjb25zdHJ1Y3RvciBwcm9wZXJ0eSB0byB0aGUgcHJvdG90eXBlLCBzaW5jZSBhIG5ldyBmdW5jdGlvbiBtYXkgaGF2ZSBiZWVuIGNyZWF0ZWQgKGBzdWJjbGFzc2ApLCB3aGljaCBpcyBub3cgYWxyZWFkeSB0aGVyZVxyXG5cdFx0XHRBdXRvbGlua2VyLlV0aWwuYXNzaWduKCBzdWJjbGFzc1Byb3RvLCBwcm90b1Byb3BzICk7XHJcblxyXG5cdFx0XHRyZXR1cm4gc3ViY2xhc3M7XHJcblx0XHR9LFxyXG5cclxuXHJcblx0XHQvKipcclxuXHRcdCAqIFRydW5jYXRlcyB0aGUgYHN0cmAgYXQgYGxlbiAtIGVsbGlwc2lzQ2hhcnMubGVuZ3RoYCwgYW5kIGFkZHMgdGhlIGBlbGxpcHNpc0NoYXJzYCB0byB0aGVcclxuXHRcdCAqIGVuZCBvZiB0aGUgc3RyaW5nIChieSBkZWZhdWx0LCB0d28gcGVyaW9kczogJy4uJykuIElmIHRoZSBgc3RyYCBsZW5ndGggZG9lcyBub3QgZXhjZWVkIFxyXG5cdFx0ICogYGxlbmAsIHRoZSBzdHJpbmcgd2lsbCBiZSByZXR1cm5lZCB1bmNoYW5nZWQuXHJcblx0XHQgKiBcclxuXHRcdCAqIEBwYXJhbSB7U3RyaW5nfSBzdHIgVGhlIHN0cmluZyB0byB0cnVuY2F0ZSBhbmQgYWRkIGFuIGVsbGlwc2lzIHRvLlxyXG5cdFx0ICogQHBhcmFtIHtOdW1iZXJ9IHRydW5jYXRlTGVuIFRoZSBsZW5ndGggdG8gdHJ1bmNhdGUgdGhlIHN0cmluZyBhdC5cclxuXHRcdCAqIEBwYXJhbSB7U3RyaW5nfSBbZWxsaXBzaXNDaGFycz0uLl0gVGhlIGVsbGlwc2lzIGNoYXJhY3RlcihzKSB0byBhZGQgdG8gdGhlIGVuZCBvZiBgc3RyYFxyXG5cdFx0ICogICB3aGVuIHRydW5jYXRlZC4gRGVmYXVsdHMgdG8gJy4uJ1xyXG5cdFx0ICovXHJcblx0XHRlbGxpcHNpcyA6IGZ1bmN0aW9uKCBzdHIsIHRydW5jYXRlTGVuLCBlbGxpcHNpc0NoYXJzICkge1xyXG5cdFx0XHRpZiggc3RyLmxlbmd0aCA+IHRydW5jYXRlTGVuICkge1xyXG5cdFx0XHRcdGVsbGlwc2lzQ2hhcnMgPSAoIGVsbGlwc2lzQ2hhcnMgPT0gbnVsbCApID8gJy4uJyA6IGVsbGlwc2lzQ2hhcnM7XHJcblx0XHRcdFx0c3RyID0gc3RyLnN1YnN0cmluZyggMCwgdHJ1bmNhdGVMZW4gLSBlbGxpcHNpc0NoYXJzLmxlbmd0aCApICsgZWxsaXBzaXNDaGFycztcclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm4gc3RyO1xyXG5cdFx0fSxcclxuXHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBTdXBwb3J0cyBgQXJyYXkucHJvdG90eXBlLmluZGV4T2YoKWAgZnVuY3Rpb25hbGl0eSBmb3Igb2xkIElFIChJRTggYW5kIGJlbG93KS5cclxuXHRcdCAqIFxyXG5cdFx0ICogQHBhcmFtIHtBcnJheX0gYXJyIFRoZSBhcnJheSB0byBmaW5kIGFuIGVsZW1lbnQgb2YuXHJcblx0XHQgKiBAcGFyYW0geyp9IGVsZW1lbnQgVGhlIGVsZW1lbnQgdG8gZmluZCBpbiB0aGUgYXJyYXksIGFuZCByZXR1cm4gdGhlIGluZGV4IG9mLlxyXG5cdFx0ICogQHJldHVybiB7TnVtYmVyfSBUaGUgaW5kZXggb2YgdGhlIGBlbGVtZW50YCwgb3IgLTEgaWYgaXQgd2FzIG5vdCBmb3VuZC5cclxuXHRcdCAqL1xyXG5cdFx0aW5kZXhPZiA6IGZ1bmN0aW9uKCBhcnIsIGVsZW1lbnQgKSB7XHJcblx0XHRcdGlmKCBBcnJheS5wcm90b3R5cGUuaW5kZXhPZiApIHtcclxuXHRcdFx0XHRyZXR1cm4gYXJyLmluZGV4T2YoIGVsZW1lbnQgKTtcclxuXHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0Zm9yKCB2YXIgaSA9IDAsIGxlbiA9IGFyci5sZW5ndGg7IGkgPCBsZW47IGkrKyApIHtcclxuXHRcdFx0XHRcdGlmKCBhcnJbIGkgXSA9PT0gZWxlbWVudCApIHJldHVybiBpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRyZXR1cm4gLTE7XHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblxyXG5cclxuXHJcblx0XHQvKipcclxuXHRcdCAqIFBlcmZvcm1zIHRoZSBmdW5jdGlvbmFsaXR5IG9mIHdoYXQgbW9kZXJuIGJyb3dzZXJzIGRvIHdoZW4gYFN0cmluZy5wcm90b3R5cGUuc3BsaXQoKWAgaXMgY2FsbGVkXHJcblx0XHQgKiB3aXRoIGEgcmVndWxhciBleHByZXNzaW9uIHRoYXQgY29udGFpbnMgY2FwdHVyaW5nIHBhcmVudGhlc2lzLlxyXG5cdFx0ICogXHJcblx0XHQgKiBGb3IgZXhhbXBsZTpcclxuXHRcdCAqIFxyXG5cdFx0ICogICAgIC8vIE1vZGVybiBicm93c2VyczogXHJcblx0XHQgKiAgICAgXCJhLGIsY1wiLnNwbGl0KCAvKCwpLyApOyAgLy8gLS0+IFsgJ2EnLCAnLCcsICdiJywgJywnLCAnYycgXVxyXG5cdFx0ICogICAgIFxyXG5cdFx0ICogICAgIC8vIE9sZCBJRSAoaW5jbHVkaW5nIElFOCk6XHJcblx0XHQgKiAgICAgXCJhLGIsY1wiLnNwbGl0KCAvKCwpLyApOyAgLy8gLS0+IFsgJ2EnLCAnYicsICdjJyBdXHJcblx0XHQgKiAgICAgXHJcblx0XHQgKiBUaGlzIG1ldGhvZCBlbXVsYXRlcyB0aGUgZnVuY3Rpb25hbGl0eSBvZiBtb2Rlcm4gYnJvd3NlcnMgZm9yIHRoZSBvbGQgSUUgY2FzZS5cclxuXHRcdCAqIFxyXG5cdFx0ICogQHBhcmFtIHtTdHJpbmd9IHN0ciBUaGUgc3RyaW5nIHRvIHNwbGl0LlxyXG5cdFx0ICogQHBhcmFtIHtSZWdFeHB9IHNwbGl0UmVnZXggVGhlIHJlZ3VsYXIgZXhwcmVzc2lvbiB0byBzcGxpdCB0aGUgaW5wdXQgYHN0cmAgb24uIFRoZSBzcGxpdHRpbmdcclxuXHRcdCAqICAgY2hhcmFjdGVyKHMpIHdpbGwgYmUgc3BsaWNlZCBpbnRvIHRoZSBhcnJheSwgYXMgaW4gdGhlIFwibW9kZXJuIGJyb3dzZXJzXCIgZXhhbXBsZSBpbiB0aGUgXHJcblx0XHQgKiAgIGRlc2NyaXB0aW9uIG9mIHRoaXMgbWV0aG9kLiBcclxuXHRcdCAqICAgTm90ZSAjMTogdGhlIHN1cHBsaWVkIHJlZ3VsYXIgZXhwcmVzc2lvbiAqKm11c3QqKiBoYXZlIHRoZSAnZycgZmxhZyBzcGVjaWZpZWQuXHJcblx0XHQgKiAgIE5vdGUgIzI6IGZvciBzaW1wbGljaXR5J3Mgc2FrZSwgdGhlIHJlZ3VsYXIgZXhwcmVzc2lvbiBkb2VzIG5vdCBuZWVkIFxyXG5cdFx0ICogICB0byBjb250YWluIGNhcHR1cmluZyBwYXJlbnRoZXNpcyAtIGl0IHdpbGwgYmUgYXNzdW1lZCB0aGF0IGFueSBtYXRjaCBoYXMgdGhlbS5cclxuXHRcdCAqIEByZXR1cm4ge1N0cmluZ1tdfSBUaGUgc3BsaXQgYXJyYXkgb2Ygc3RyaW5ncywgd2l0aCB0aGUgc3BsaXR0aW5nIGNoYXJhY3RlcihzKSBpbmNsdWRlZC5cclxuXHRcdCAqL1xyXG5cdFx0c3BsaXRBbmRDYXB0dXJlIDogZnVuY3Rpb24oIHN0ciwgc3BsaXRSZWdleCApIHtcclxuXHRcdFx0aWYoICFzcGxpdFJlZ2V4Lmdsb2JhbCApIHRocm93IG5ldyBFcnJvciggXCJgc3BsaXRSZWdleGAgbXVzdCBoYXZlIHRoZSAnZycgZmxhZyBzZXRcIiApO1xyXG5cclxuXHRcdFx0dmFyIHJlc3VsdCA9IFtdLFxyXG5cdFx0XHQgICAgbGFzdElkeCA9IDAsXHJcblx0XHRcdCAgICBtYXRjaDtcclxuXHJcblx0XHRcdHdoaWxlKCBtYXRjaCA9IHNwbGl0UmVnZXguZXhlYyggc3RyICkgKSB7XHJcblx0XHRcdFx0cmVzdWx0LnB1c2goIHN0ci5zdWJzdHJpbmcoIGxhc3RJZHgsIG1hdGNoLmluZGV4ICkgKTtcclxuXHRcdFx0XHRyZXN1bHQucHVzaCggbWF0Y2hbIDAgXSApOyAgLy8gcHVzaCB0aGUgc3BsaXR0aW5nIGNoYXIocylcclxuXHJcblx0XHRcdFx0bGFzdElkeCA9IG1hdGNoLmluZGV4ICsgbWF0Y2hbIDAgXS5sZW5ndGg7XHJcblx0XHRcdH1cclxuXHRcdFx0cmVzdWx0LnB1c2goIHN0ci5zdWJzdHJpbmcoIGxhc3RJZHggKSApO1xyXG5cclxuXHRcdFx0cmV0dXJuIHJlc3VsdDtcclxuXHRcdH1cclxuXHJcblx0fTtcclxuXHQvKmdsb2JhbCBBdXRvbGlua2VyICovXHJcblx0LyoqXHJcblx0ICogQHByaXZhdGVcclxuXHQgKiBAY2xhc3MgQXV0b2xpbmtlci5IdG1sUGFyc2VyXHJcblx0ICogQGV4dGVuZHMgT2JqZWN0XHJcblx0ICogXHJcblx0ICogQW4gSFRNTCBwYXJzZXIgaW1wbGVtZW50YXRpb24gd2hpY2ggc2ltcGx5IHdhbGtzIGFuIEhUTUwgc3RyaW5nIGFuZCBjYWxscyB0aGUgcHJvdmlkZWQgdmlzaXRvciBmdW5jdGlvbnMgdG8gcHJvY2VzcyBcclxuXHQgKiBIVE1MIGFuZCB0ZXh0IG5vZGVzLlxyXG5cdCAqIFxyXG5cdCAqIEF1dG9saW5rZXIgdXNlcyB0aGlzIHRvIG9ubHkgbGluayBVUkxzL2VtYWlscy9Ud2l0dGVyIGhhbmRsZXMgd2l0aGluIHRleHQgbm9kZXMsIGJhc2ljYWxseSBpZ25vcmluZyBIVE1MIHRhZ3MuXHJcblx0ICovXHJcblx0QXV0b2xpbmtlci5IdG1sUGFyc2VyID0gQXV0b2xpbmtlci5VdGlsLmV4dGVuZCggT2JqZWN0LCB7XHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBAcHJpdmF0ZVxyXG5cdFx0ICogQHByb3BlcnR5IHtSZWdFeHB9IGh0bWxSZWdleFxyXG5cdFx0ICogXHJcblx0XHQgKiBUaGUgcmVndWxhciBleHByZXNzaW9uIHVzZWQgdG8gcHVsbCBvdXQgSFRNTCB0YWdzIGZyb20gYSBzdHJpbmcuIEhhbmRsZXMgbmFtZXNwYWNlZCBIVE1MIHRhZ3MgYW5kXHJcblx0XHQgKiBhdHRyaWJ1dGUgbmFtZXMsIGFzIHNwZWNpZmllZCBieSBodHRwOi8vd3d3LnczLm9yZy9UUi9odG1sLW1hcmt1cC9zeW50YXguaHRtbC5cclxuXHRcdCAqIFxyXG5cdFx0ICogQ2FwdHVyaW5nIGdyb3VwczpcclxuXHRcdCAqIFxyXG5cdFx0ICogMS4gVGhlIFwiIURPQ1RZUEVcIiB0YWcgbmFtZSwgaWYgYSB0YWcgaXMgYSAmbHQ7IURPQ1RZUEUmZ3Q7IHRhZy5cclxuXHRcdCAqIDIuIElmIGl0IGlzIGFuIGVuZCB0YWcsIHRoaXMgZ3JvdXAgd2lsbCBoYXZlIHRoZSAnLycuXHJcblx0XHQgKiAzLiBUaGUgdGFnIG5hbWUgZm9yIGFsbCB0YWdzIChvdGhlciB0aGFuIHRoZSAmbHQ7IURPQ1RZUEUmZ3Q7IHRhZylcclxuXHRcdCAqL1xyXG5cdFx0aHRtbFJlZ2V4IDogKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHR2YXIgdGFnTmFtZVJlZ2V4ID0gL1swLTlhLXpBLVpdWzAtOWEtekEtWjpdKi8sXHJcblx0XHRcdCAgICBhdHRyTmFtZVJlZ2V4ID0gL1teXFxzXFwwXCInPlxcLz1cXHgwMS1cXHgxRlxceDdGXSsvLCAgIC8vIHRoZSB1bmljb2RlIHJhbmdlIGFjY291bnRzIGZvciBleGNsdWRpbmcgY29udHJvbCBjaGFycywgYW5kIHRoZSBkZWxldGUgY2hhclxyXG5cdFx0XHQgICAgYXR0clZhbHVlUmVnZXggPSAvKD86XCJbXlwiXSo/XCJ8J1teJ10qPyd8W14nXCI9PD5gXFxzXSspLywgLy8gZG91YmxlIHF1b3RlZCwgc2luZ2xlIHF1b3RlZCwgb3IgdW5xdW90ZWQgYXR0cmlidXRlIHZhbHVlc1xyXG5cdFx0XHQgICAgbmFtZUVxdWFsc1ZhbHVlUmVnZXggPSBhdHRyTmFtZVJlZ2V4LnNvdXJjZSArICcoPzpcXFxccyo9XFxcXHMqJyArIGF0dHJWYWx1ZVJlZ2V4LnNvdXJjZSArICcpPyc7ICAvLyBvcHRpb25hbCAnPVt2YWx1ZV0nXHJcblxyXG5cdFx0XHRyZXR1cm4gbmV3IFJlZ0V4cCggW1xyXG5cdFx0XHRcdC8vIGZvciA8IURPQ1RZUEU+IHRhZy4gRXg6IDwhRE9DVFlQRSBodG1sIFBVQkxJQyBcIi0vL1czQy8vRFREIFhIVE1MIDEuMCBTdHJpY3QvL0VOXCIgXCJodHRwOi8vd3d3LnczLm9yZy9UUi94aHRtbDEvRFREL3hodG1sMS1zdHJpY3QuZHRkXCI+KSBcclxuXHRcdFx0XHQnKD86JyxcclxuXHRcdFx0XHRcdCc8KCFET0NUWVBFKScsICAvLyAqKiogQ2FwdHVyaW5nIEdyb3VwIDEgLSBJZiBpdCdzIGEgZG9jdHlwZSB0YWdcclxuXHJcblx0XHRcdFx0XHRcdC8vIFplcm8gb3IgbW9yZSBhdHRyaWJ1dGVzIGZvbGxvd2luZyB0aGUgdGFnIG5hbWVcclxuXHRcdFx0XHRcdFx0Jyg/OicsXHJcblx0XHRcdFx0XHRcdFx0J1xcXFxzKycsICAvLyBvbmUgb3IgbW9yZSB3aGl0ZXNwYWNlIGNoYXJzIGJlZm9yZSBhbiBhdHRyaWJ1dGVcclxuXHJcblx0XHRcdFx0XHRcdFx0Ly8gRWl0aGVyOlxyXG5cdFx0XHRcdFx0XHRcdC8vIEEuIGF0dHI9XCJ2YWx1ZVwiLCBvciBcclxuXHRcdFx0XHRcdFx0XHQvLyBCLiBcInZhbHVlXCIgYWxvbmUgKFRvIGNvdmVyIGV4YW1wbGUgZG9jdHlwZSB0YWc6IDwhRE9DVFlQRSBodG1sIFBVQkxJQyBcIi0vL1czQy8vRFREIFhIVE1MIDEuMCBTdHJpY3QvL0VOXCIgXCJodHRwOi8vd3d3LnczLm9yZy9UUi94aHRtbDEvRFREL3hodG1sMS1zdHJpY3QuZHRkXCI+KSBcclxuXHRcdFx0XHRcdFx0XHQnKD86JywgbmFtZUVxdWFsc1ZhbHVlUmVnZXgsICd8JywgYXR0clZhbHVlUmVnZXguc291cmNlICsgJyknLFxyXG5cdFx0XHRcdFx0XHQnKSonLFxyXG5cdFx0XHRcdFx0Jz4nLFxyXG5cdFx0XHRcdCcpJyxcclxuXHJcblx0XHRcdFx0J3wnLFxyXG5cclxuXHRcdFx0XHQvLyBBbGwgb3RoZXIgSFRNTCB0YWdzIChpLmUuIHRhZ3MgdGhhdCBhcmUgbm90IDwhRE9DVFlQRT4pXHJcblx0XHRcdFx0Jyg/OicsXHJcblx0XHRcdFx0XHQnPCgvKT8nLCAgLy8gQmVnaW5uaW5nIG9mIGEgdGFnLiBFaXRoZXIgJzwnIGZvciBhIHN0YXJ0IHRhZywgb3IgJzwvJyBmb3IgYW4gZW5kIHRhZy4gXHJcblx0XHRcdFx0XHQgICAgICAgICAgLy8gKioqIENhcHR1cmluZyBHcm91cCAyOiBUaGUgc2xhc2ggb3IgYW4gZW1wdHkgc3RyaW5nLiBTbGFzaCAoJy8nKSBmb3IgZW5kIHRhZywgZW1wdHkgc3RyaW5nIGZvciBzdGFydCBvciBzZWxmLWNsb3NpbmcgdGFnLlxyXG5cclxuXHRcdFx0XHRcdFx0Ly8gKioqIENhcHR1cmluZyBHcm91cCAzIC0gVGhlIHRhZyBuYW1lXHJcblx0XHRcdFx0XHRcdCcoJyArIHRhZ05hbWVSZWdleC5zb3VyY2UgKyAnKScsXHJcblxyXG5cdFx0XHRcdFx0XHQvLyBaZXJvIG9yIG1vcmUgYXR0cmlidXRlcyBmb2xsb3dpbmcgdGhlIHRhZyBuYW1lXHJcblx0XHRcdFx0XHRcdCcoPzonLFxyXG5cdFx0XHRcdFx0XHRcdCdcXFxccysnLCAgICAgICAgICAgICAgICAvLyBvbmUgb3IgbW9yZSB3aGl0ZXNwYWNlIGNoYXJzIGJlZm9yZSBhbiBhdHRyaWJ1dGVcclxuXHRcdFx0XHRcdFx0XHRuYW1lRXF1YWxzVmFsdWVSZWdleCwgIC8vIGF0dHI9XCJ2YWx1ZVwiICh3aXRoIG9wdGlvbmFsID1cInZhbHVlXCIgcGFydClcclxuXHRcdFx0XHRcdFx0JykqJyxcclxuXHJcblx0XHRcdFx0XHRcdCdcXFxccyovPycsICAvLyBhbnkgdHJhaWxpbmcgc3BhY2VzIGFuZCBvcHRpb25hbCAnLycgYmVmb3JlIHRoZSBjbG9zaW5nICc+J1xyXG5cdFx0XHRcdFx0Jz4nLFxyXG5cdFx0XHRcdCcpJ1xyXG5cdFx0XHRdLmpvaW4oIFwiXCIgKSwgJ2dpJyApO1xyXG5cdFx0fSApKCksXHJcblxyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogV2Fsa3MgYW4gSFRNTCBzdHJpbmcsIGNhbGxpbmcgdGhlIGBvcHRpb25zLnByb2Nlc3NIdG1sTm9kZWAgZnVuY3Rpb24gZm9yIGVhY2ggSFRNTCB0YWcgdGhhdCBpcyBlbmNvdW50ZXJlZCwgYW5kIGNhbGxpbmdcclxuXHRcdCAqIHRoZSBgb3B0aW9ucy5wcm9jZXNzVGV4dE5vZGVgIGZ1bmN0aW9uIHdoZW4gZWFjaCB0ZXh0IGFyb3VuZCBIVE1MIHRhZ3MgaXMgZW5jb3VudGVyZWQuXHJcblx0XHQgKiBcclxuXHRcdCAqIEBwYXJhbSB7U3RyaW5nfSBodG1sIFRoZSBIVE1MIHRvIHBhcnNlLlxyXG5cdFx0ICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSBBbiBPYmplY3QgKG1hcCkgd2hpY2ggbWF5IGNvbnRhaW4gdGhlIGZvbGxvd2luZyBwcm9wZXJ0aWVzOlxyXG5cdFx0ICogXHJcblx0XHQgKiBAcGFyYW0ge0Z1bmN0aW9ufSBbb3B0aW9ucy5wcm9jZXNzSHRtbE5vZGVdIEEgdmlzaXRvciBmdW5jdGlvbiB3aGljaCBhbGxvd3MgcHJvY2Vzc2luZyBvZiBhbiBlbmNvdW50ZXJlZCBIVE1MIG5vZGUuXHJcblx0XHQgKiAgIFRoaXMgZnVuY3Rpb24gaXMgY2FsbGVkIHdpdGggdGhlIGZvbGxvd2luZyBhcmd1bWVudHM6XHJcblx0XHQgKiBAcGFyYW0ge1N0cmluZ30gW29wdGlvbnMucHJvY2Vzc0h0bWxOb2RlLnRhZ1RleHRdIFRoZSBIVE1MIHRhZyB0ZXh0IHRoYXQgd2FzIGZvdW5kLlxyXG5cdFx0ICogQHBhcmFtIHtTdHJpbmd9IFtvcHRpb25zLnByb2Nlc3NIdG1sTm9kZS50YWdOYW1lXSBUaGUgdGFnIG5hbWUgZm9yIHRoZSBIVE1MIHRhZyB0aGF0IHdhcyBmb3VuZC4gRXg6ICdhJyBmb3IgYW4gYW5jaG9yIHRhZy5cclxuXHRcdCAqIEBwYXJhbSB7U3RyaW5nfSBbb3B0aW9ucy5wcm9jZXNzSHRtbE5vZGUuaXNDbG9zaW5nVGFnXSBgdHJ1ZWAgaWYgdGhlIHRhZyBpcyBhIGNsb3NpbmcgdGFnIChleDogJmx0Oy9hJmd0OyksIGBmYWxzZWAgb3RoZXJ3aXNlLlxyXG5cdFx0ICogIFxyXG5cdFx0ICogQHBhcmFtIHtGdW5jdGlvbn0gW29wdGlvbnMucHJvY2Vzc1RleHROb2RlXSBBIHZpc2l0b3IgZnVuY3Rpb24gd2hpY2ggYWxsb3dzIHByb2Nlc3Npbmcgb2YgYW4gZW5jb3VudGVyZWQgdGV4dCBub2RlLlxyXG5cdFx0ICogICBUaGlzIGZ1bmN0aW9uIGlzIGNhbGxlZCB3aXRoIHRoZSBmb2xsb3dpbmcgYXJndW1lbnRzOlxyXG5cdFx0ICogQHBhcmFtIHtTdHJpbmd9IFtvcHRpb25zLnByb2Nlc3NUZXh0Tm9kZS50ZXh0XSBUaGUgdGV4dCBub2RlIHRoYXQgd2FzIG1hdGNoZWQuXHJcblx0XHQgKi9cclxuXHRcdHBhcnNlIDogZnVuY3Rpb24oIGh0bWwsIG9wdGlvbnMgKSB7XHJcblx0XHRcdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xyXG5cclxuXHRcdFx0dmFyIHByb2Nlc3NIdG1sTm9kZVZpc2l0b3IgPSBvcHRpb25zLnByb2Nlc3NIdG1sTm9kZSB8fCBmdW5jdGlvbigpIHt9LFxyXG5cdFx0XHQgICAgcHJvY2Vzc1RleHROb2RlVmlzaXRvciA9IG9wdGlvbnMucHJvY2Vzc1RleHROb2RlIHx8IGZ1bmN0aW9uKCkge30sXHJcblx0XHRcdCAgICBodG1sUmVnZXggPSB0aGlzLmh0bWxSZWdleCxcclxuXHRcdFx0ICAgIGN1cnJlbnRSZXN1bHQsXHJcblx0XHRcdCAgICBsYXN0SW5kZXggPSAwO1xyXG5cclxuXHRcdFx0Ly8gTG9vcCBvdmVyIHRoZSBIVE1MIHN0cmluZywgaWdub3JpbmcgSFRNTCB0YWdzLCBhbmQgcHJvY2Vzc2luZyB0aGUgdGV4dCB0aGF0IGxpZXMgYmV0d2VlbiB0aGVtLFxyXG5cdFx0XHQvLyB3cmFwcGluZyB0aGUgVVJMcyBpbiBhbmNob3IgdGFnc1xyXG5cdFx0XHR3aGlsZSggKCBjdXJyZW50UmVzdWx0ID0gaHRtbFJlZ2V4LmV4ZWMoIGh0bWwgKSApICE9PSBudWxsICkge1xyXG5cdFx0XHRcdHZhciB0YWdUZXh0ID0gY3VycmVudFJlc3VsdFsgMCBdLFxyXG5cdFx0XHRcdCAgICB0YWdOYW1lID0gY3VycmVudFJlc3VsdFsgMSBdIHx8IGN1cnJlbnRSZXN1bHRbIDMgXSwgIC8vIFRoZSA8IURPQ1RZUEU+IHRhZyAoZXg6IFwiIURPQ1RZUEVcIiksIG9yIGFub3RoZXIgdGFnIChleDogXCJhXCIpIFxyXG5cdFx0XHRcdCAgICBpc0Nsb3NpbmdUYWcgPSAhIWN1cnJlbnRSZXN1bHRbIDIgXSxcclxuXHRcdFx0XHQgICAgaW5CZXR3ZWVuVGFnc1RleHQgPSBodG1sLnN1YnN0cmluZyggbGFzdEluZGV4LCBjdXJyZW50UmVzdWx0LmluZGV4ICk7XHJcblxyXG5cdFx0XHRcdGlmKCBpbkJldHdlZW5UYWdzVGV4dCApIHtcclxuXHRcdFx0XHRcdHByb2Nlc3NUZXh0Tm9kZVZpc2l0b3IoIGluQmV0d2VlblRhZ3NUZXh0ICk7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRwcm9jZXNzSHRtbE5vZGVWaXNpdG9yKCB0YWdUZXh0LCB0YWdOYW1lLnRvTG93ZXJDYXNlKCksIGlzQ2xvc2luZ1RhZyApO1xyXG5cclxuXHRcdFx0XHRsYXN0SW5kZXggPSBjdXJyZW50UmVzdWx0LmluZGV4ICsgdGFnVGV4dC5sZW5ndGg7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC8vIFByb2Nlc3MgYW55IHJlbWFpbmluZyB0ZXh0IGFmdGVyIHRoZSBsYXN0IEhUTUwgZWxlbWVudC4gV2lsbCBwcm9jZXNzIGFsbCBvZiB0aGUgdGV4dCBpZiB0aGVyZSB3ZXJlIG5vIEhUTUwgZWxlbWVudHMuXHJcblx0XHRcdGlmKCBsYXN0SW5kZXggPCBodG1sLmxlbmd0aCApIHtcclxuXHRcdFx0XHR2YXIgdGV4dCA9IGh0bWwuc3Vic3RyaW5nKCBsYXN0SW5kZXggKTtcclxuXHJcblx0XHRcdFx0aWYoIHRleHQgKSB7XHJcblx0XHRcdFx0XHRwcm9jZXNzVGV4dE5vZGVWaXNpdG9yKCB0ZXh0ICk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdH0gKTtcclxuXHQvKmdsb2JhbCBBdXRvbGlua2VyICovXHJcblx0Lypqc2hpbnQgYm9zczp0cnVlICovXHJcblx0LyoqXHJcblx0ICogQGNsYXNzIEF1dG9saW5rZXIuSHRtbFRhZ1xyXG5cdCAqIEBleHRlbmRzIE9iamVjdFxyXG5cdCAqIFxyXG5cdCAqIFJlcHJlc2VudHMgYW4gSFRNTCB0YWcsIHdoaWNoIGNhbiBiZSB1c2VkIHRvIGVhc2lseSBidWlsZC9tb2RpZnkgSFRNTCB0YWdzIHByb2dyYW1tYXRpY2FsbHkuXHJcblx0ICogXHJcblx0ICogQXV0b2xpbmtlciB1c2VzIHRoaXMgYWJzdHJhY3Rpb24gdG8gY3JlYXRlIEhUTUwgdGFncywgYW5kIHRoZW4gd3JpdGUgdGhlbSBvdXQgYXMgc3RyaW5ncy4gWW91IG1heSBhbHNvIHVzZVxyXG5cdCAqIHRoaXMgY2xhc3MgaW4geW91ciBjb2RlLCBlc3BlY2lhbGx5IHdpdGhpbiBhIHtAbGluayBBdXRvbGlua2VyI3JlcGxhY2VGbiByZXBsYWNlRm59LlxyXG5cdCAqIFxyXG5cdCAqICMjIEV4YW1wbGVzXHJcblx0ICogXHJcblx0ICogRXhhbXBsZSBpbnN0YW50aWF0aW9uOlxyXG5cdCAqIFxyXG5cdCAqICAgICB2YXIgdGFnID0gbmV3IEF1dG9saW5rZXIuSHRtbFRhZygge1xyXG5cdCAqICAgICAgICAgdGFnTmFtZSA6ICdhJyxcclxuXHQgKiAgICAgICAgIGF0dHJzICAgOiB7ICdocmVmJzogJ2h0dHA6Ly9nb29nbGUuY29tJywgJ2NsYXNzJzogJ2V4dGVybmFsLWxpbmsnIH0sXHJcblx0ICogICAgICAgICBpbm5lckh0bWwgOiAnR29vZ2xlJ1xyXG5cdCAqICAgICB9ICk7XHJcblx0ICogICAgIFxyXG5cdCAqICAgICB0YWcudG9TdHJpbmcoKTsgIC8vIDxhIGhyZWY9XCJodHRwOi8vZ29vZ2xlLmNvbVwiIGNsYXNzPVwiZXh0ZXJuYWwtbGlua1wiPkdvb2dsZTwvYT5cclxuXHQgKiAgICAgXHJcblx0ICogICAgIC8vIEluZGl2aWR1YWwgYWNjZXNzb3IgbWV0aG9kc1xyXG5cdCAqICAgICB0YWcuZ2V0VGFnTmFtZSgpOyAgICAgICAgICAgICAgICAgLy8gJ2EnXHJcblx0ICogICAgIHRhZy5nZXRBdHRyKCAnaHJlZicgKTsgICAgICAgICAgICAvLyAnaHR0cDovL2dvb2dsZS5jb20nXHJcblx0ICogICAgIHRhZy5oYXNDbGFzcyggJ2V4dGVybmFsLWxpbmsnICk7ICAvLyB0cnVlXHJcblx0ICogXHJcblx0ICogXHJcblx0ICogVXNpbmcgbXV0YXRvciBtZXRob2RzICh3aGljaCBtYXkgYmUgdXNlZCBpbiBjb21iaW5hdGlvbiB3aXRoIGluc3RhbnRpYXRpb24gY29uZmlnIHByb3BlcnRpZXMpOlxyXG5cdCAqIFxyXG5cdCAqICAgICB2YXIgdGFnID0gbmV3IEF1dG9saW5rZXIuSHRtbFRhZygpO1xyXG5cdCAqICAgICB0YWcuc2V0VGFnTmFtZSggJ2EnICk7XHJcblx0ICogICAgIHRhZy5zZXRBdHRyKCAnaHJlZicsICdodHRwOi8vZ29vZ2xlLmNvbScgKTtcclxuXHQgKiAgICAgdGFnLmFkZENsYXNzKCAnZXh0ZXJuYWwtbGluaycgKTtcclxuXHQgKiAgICAgdGFnLnNldElubmVySHRtbCggJ0dvb2dsZScgKTtcclxuXHQgKiAgICAgXHJcblx0ICogICAgIHRhZy5nZXRUYWdOYW1lKCk7ICAgICAgICAgICAgICAgICAvLyAnYSdcclxuXHQgKiAgICAgdGFnLmdldEF0dHIoICdocmVmJyApOyAgICAgICAgICAgIC8vICdodHRwOi8vZ29vZ2xlLmNvbSdcclxuXHQgKiAgICAgdGFnLmhhc0NsYXNzKCAnZXh0ZXJuYWwtbGluaycgKTsgIC8vIHRydWVcclxuXHQgKiAgICAgXHJcblx0ICogICAgIHRhZy50b1N0cmluZygpOyAgLy8gPGEgaHJlZj1cImh0dHA6Ly9nb29nbGUuY29tXCIgY2xhc3M9XCJleHRlcm5hbC1saW5rXCI+R29vZ2xlPC9hPlxyXG5cdCAqICAgICBcclxuXHQgKiBcclxuXHQgKiAjIyBFeGFtcGxlIHVzZSB3aXRoaW4gYSB7QGxpbmsgQXV0b2xpbmtlciNyZXBsYWNlRm4gcmVwbGFjZUZufVxyXG5cdCAqIFxyXG5cdCAqICAgICB2YXIgaHRtbCA9IEF1dG9saW5rZXIubGluayggXCJUZXN0IGdvb2dsZS5jb21cIiwge1xyXG5cdCAqICAgICAgICAgcmVwbGFjZUZuIDogZnVuY3Rpb24oIGF1dG9saW5rZXIsIG1hdGNoICkge1xyXG5cdCAqICAgICAgICAgICAgIHZhciB0YWcgPSBhdXRvbGlua2VyLmdldFRhZ0J1aWxkZXIoKS5idWlsZCggbWF0Y2ggKTsgIC8vIHJldHVybnMgYW4ge0BsaW5rIEF1dG9saW5rZXIuSHRtbFRhZ30gaW5zdGFuY2UsIGNvbmZpZ3VyZWQgd2l0aCB0aGUgTWF0Y2gncyBocmVmIGFuZCBhbmNob3IgdGV4dFxyXG5cdCAqICAgICAgICAgICAgIHRhZy5zZXRBdHRyKCAncmVsJywgJ25vZm9sbG93JyApO1xyXG5cdCAqICAgICAgICAgICAgIFxyXG5cdCAqICAgICAgICAgICAgIHJldHVybiB0YWc7XHJcblx0ICogICAgICAgICB9XHJcblx0ICogICAgIH0gKTtcclxuXHQgKiAgICAgXHJcblx0ICogICAgIC8vIGdlbmVyYXRlZCBodG1sOlxyXG5cdCAqICAgICAvLyAgIFRlc3QgPGEgaHJlZj1cImh0dHA6Ly9nb29nbGUuY29tXCIgdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9mb2xsb3dcIj5nb29nbGUuY29tPC9hPlxyXG5cdCAqICAgICBcclxuXHQgKiAgICAgXHJcblx0ICogIyMgRXhhbXBsZSB1c2Ugd2l0aCBhIG5ldyB0YWcgZm9yIHRoZSByZXBsYWNlbWVudFxyXG5cdCAqIFxyXG5cdCAqICAgICB2YXIgaHRtbCA9IEF1dG9saW5rZXIubGluayggXCJUZXN0IGdvb2dsZS5jb21cIiwge1xyXG5cdCAqICAgICAgICAgcmVwbGFjZUZuIDogZnVuY3Rpb24oIGF1dG9saW5rZXIsIG1hdGNoICkge1xyXG5cdCAqICAgICAgICAgICAgIHZhciB0YWcgPSBuZXcgQXV0b2xpbmtlci5IdG1sVGFnKCB7XHJcblx0ICogICAgICAgICAgICAgICAgIHRhZ05hbWUgOiAnYnV0dG9uJyxcclxuXHQgKiAgICAgICAgICAgICAgICAgYXR0cnMgICA6IHsgJ3RpdGxlJzogJ0xvYWQgVVJMOiAnICsgbWF0Y2guZ2V0QW5jaG9ySHJlZigpIH0sXHJcblx0ICogICAgICAgICAgICAgICAgIGlubmVySHRtbCA6ICdMb2FkIFVSTDogJyArIG1hdGNoLmdldEFuY2hvclRleHQoKVxyXG5cdCAqICAgICAgICAgICAgIH0gKTtcclxuXHQgKiAgICAgICAgICAgICBcclxuXHQgKiAgICAgICAgICAgICByZXR1cm4gdGFnO1xyXG5cdCAqICAgICAgICAgfVxyXG5cdCAqICAgICB9ICk7XHJcblx0ICogICAgIFxyXG5cdCAqICAgICAvLyBnZW5lcmF0ZWQgaHRtbDpcclxuXHQgKiAgICAgLy8gICBUZXN0IDxidXR0b24gdGl0bGU9XCJMb2FkIFVSTDogaHR0cDovL2dvb2dsZS5jb21cIj5Mb2FkIFVSTDogZ29vZ2xlLmNvbTwvYnV0dG9uPlxyXG5cdCAqL1xyXG5cdEF1dG9saW5rZXIuSHRtbFRhZyA9IEF1dG9saW5rZXIuVXRpbC5leHRlbmQoIE9iamVjdCwge1xyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogQGNmZyB7U3RyaW5nfSB0YWdOYW1lXHJcblx0XHQgKiBcclxuXHRcdCAqIFRoZSB0YWcgbmFtZS4gRXg6ICdhJywgJ2J1dHRvbicsIGV0Yy5cclxuXHRcdCAqIFxyXG5cdFx0ICogTm90IHJlcXVpcmVkIGF0IGluc3RhbnRpYXRpb24gdGltZSwgYnV0IHNob3VsZCBiZSBzZXQgdXNpbmcge0BsaW5rICNzZXRUYWdOYW1lfSBiZWZvcmUge0BsaW5rICN0b1N0cmluZ31cclxuXHRcdCAqIGlzIGV4ZWN1dGVkLlxyXG5cdFx0ICovXHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBAY2ZnIHtPYmplY3QuPFN0cmluZywgU3RyaW5nPn0gYXR0cnNcclxuXHRcdCAqIFxyXG5cdFx0ICogQW4ga2V5L3ZhbHVlIE9iamVjdCAobWFwKSBvZiBhdHRyaWJ1dGVzIHRvIGNyZWF0ZSB0aGUgdGFnIHdpdGguIFRoZSBrZXlzIGFyZSB0aGUgYXR0cmlidXRlIG5hbWVzLCBhbmQgdGhlXHJcblx0XHQgKiB2YWx1ZXMgYXJlIHRoZSBhdHRyaWJ1dGUgdmFsdWVzLlxyXG5cdFx0ICovXHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBAY2ZnIHtTdHJpbmd9IGlubmVySHRtbFxyXG5cdFx0ICogXHJcblx0XHQgKiBUaGUgaW5uZXIgSFRNTCBmb3IgdGhlIHRhZy4gXHJcblx0XHQgKiBcclxuXHRcdCAqIE5vdGUgdGhlIGNhbWVsIGNhc2UgbmFtZSBvbiBgaW5uZXJIdG1sYC4gQWNyb255bXMgYXJlIGNhbWVsQ2FzZWQgaW4gdGhpcyB1dGlsaXR5IChzdWNoIGFzIG5vdCB0byBydW4gaW50byB0aGUgYWNyb255bSBcclxuXHRcdCAqIG5hbWluZyBpbmNvbnNpc3RlbmN5IHRoYXQgdGhlIERPTSBkZXZlbG9wZXJzIGNyZWF0ZWQgd2l0aCBgWE1MSHR0cFJlcXVlc3RgKS4gWW91IG1heSBhbHRlcm5hdGl2ZWx5IHVzZSB7QGxpbmsgI2lubmVySFRNTH1cclxuXHRcdCAqIGlmIHlvdSBwcmVmZXIsIGJ1dCB0aGlzIG9uZSBpcyByZWNvbW1lbmRlZC5cclxuXHRcdCAqL1xyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogQGNmZyB7U3RyaW5nfSBpbm5lckhUTUxcclxuXHRcdCAqIFxyXG5cdFx0ICogQWxpYXMgb2Yge0BsaW5rICNpbm5lckh0bWx9LCBhY2NlcHRlZCBmb3IgY29uc2lzdGVuY3kgd2l0aCB0aGUgYnJvd3NlciBET00gYXBpLCBidXQgcHJlZmVyIHRoZSBjYW1lbENhc2VkIHZlcnNpb25cclxuXHRcdCAqIGZvciBhY3JvbnltIG5hbWVzLlxyXG5cdFx0ICovXHJcblxyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogQHByb3RlY3RlZFxyXG5cdFx0ICogQHByb3BlcnR5IHtSZWdFeHB9IHdoaXRlc3BhY2VSZWdleFxyXG5cdFx0ICogXHJcblx0XHQgKiBSZWd1bGFyIGV4cHJlc3Npb24gdXNlZCB0byBtYXRjaCB3aGl0ZXNwYWNlIGluIGEgc3RyaW5nIG9mIENTUyBjbGFzc2VzLlxyXG5cdFx0ICovXHJcblx0XHR3aGl0ZXNwYWNlUmVnZXggOiAvXFxzKy8sXHJcblxyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogQGNvbnN0cnVjdG9yXHJcblx0XHQgKiBAcGFyYW0ge09iamVjdH0gW2NmZ10gVGhlIGNvbmZpZ3VyYXRpb24gcHJvcGVydGllcyBmb3IgdGhpcyBjbGFzcywgaW4gYW4gT2JqZWN0IChtYXApXHJcblx0XHQgKi9cclxuXHRcdGNvbnN0cnVjdG9yIDogZnVuY3Rpb24oIGNmZyApIHtcclxuXHRcdFx0QXV0b2xpbmtlci5VdGlsLmFzc2lnbiggdGhpcywgY2ZnICk7XHJcblxyXG5cdFx0XHR0aGlzLmlubmVySHRtbCA9IHRoaXMuaW5uZXJIdG1sIHx8IHRoaXMuaW5uZXJIVE1MOyAgLy8gYWNjZXB0IGVpdGhlciB0aGUgY2FtZWxDYXNlZCBmb3JtIG9yIHRoZSBmdWxseSBjYXBpdGFsaXplZCBhY3JvbnltXHJcblx0XHR9LFxyXG5cclxuXHJcblx0XHQvKipcclxuXHRcdCAqIFNldHMgdGhlIHRhZyBuYW1lIHRoYXQgd2lsbCBiZSB1c2VkIHRvIGdlbmVyYXRlIHRoZSB0YWcgd2l0aC5cclxuXHRcdCAqIFxyXG5cdFx0ICogQHBhcmFtIHtTdHJpbmd9IHRhZ05hbWVcclxuXHRcdCAqIEByZXR1cm4ge0F1dG9saW5rZXIuSHRtbFRhZ30gVGhpcyBIdG1sVGFnIGluc3RhbmNlLCBzbyB0aGF0IG1ldGhvZCBjYWxscyBtYXkgYmUgY2hhaW5lZC5cclxuXHRcdCAqL1xyXG5cdFx0c2V0VGFnTmFtZSA6IGZ1bmN0aW9uKCB0YWdOYW1lICkge1xyXG5cdFx0XHR0aGlzLnRhZ05hbWUgPSB0YWdOYW1lO1xyXG5cdFx0XHRyZXR1cm4gdGhpcztcclxuXHRcdH0sXHJcblxyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogUmV0cmlldmVzIHRoZSB0YWcgbmFtZS5cclxuXHRcdCAqIFxyXG5cdFx0ICogQHJldHVybiB7U3RyaW5nfVxyXG5cdFx0ICovXHJcblx0XHRnZXRUYWdOYW1lIDogZnVuY3Rpb24oKSB7XHJcblx0XHRcdHJldHVybiB0aGlzLnRhZ05hbWUgfHwgXCJcIjtcclxuXHRcdH0sXHJcblxyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogU2V0cyBhbiBhdHRyaWJ1dGUgb24gdGhlIEh0bWxUYWcuXHJcblx0XHQgKiBcclxuXHRcdCAqIEBwYXJhbSB7U3RyaW5nfSBhdHRyTmFtZSBUaGUgYXR0cmlidXRlIG5hbWUgdG8gc2V0LlxyXG5cdFx0ICogQHBhcmFtIHtTdHJpbmd9IGF0dHJWYWx1ZSBUaGUgYXR0cmlidXRlIHZhbHVlIHRvIHNldC5cclxuXHRcdCAqIEByZXR1cm4ge0F1dG9saW5rZXIuSHRtbFRhZ30gVGhpcyBIdG1sVGFnIGluc3RhbmNlLCBzbyB0aGF0IG1ldGhvZCBjYWxscyBtYXkgYmUgY2hhaW5lZC5cclxuXHRcdCAqL1xyXG5cdFx0c2V0QXR0ciA6IGZ1bmN0aW9uKCBhdHRyTmFtZSwgYXR0clZhbHVlICkge1xyXG5cdFx0XHR2YXIgdGFnQXR0cnMgPSB0aGlzLmdldEF0dHJzKCk7XHJcblx0XHRcdHRhZ0F0dHJzWyBhdHRyTmFtZSBdID0gYXR0clZhbHVlO1xyXG5cclxuXHRcdFx0cmV0dXJuIHRoaXM7XHJcblx0XHR9LFxyXG5cclxuXHJcblx0XHQvKipcclxuXHRcdCAqIFJldHJpZXZlcyBhbiBhdHRyaWJ1dGUgZnJvbSB0aGUgSHRtbFRhZy4gSWYgdGhlIGF0dHJpYnV0ZSBkb2VzIG5vdCBleGlzdCwgcmV0dXJucyBgdW5kZWZpbmVkYC5cclxuXHRcdCAqIFxyXG5cdFx0ICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgVGhlIGF0dHJpYnV0ZSBuYW1lIHRvIHJldHJpZXZlLlxyXG5cdFx0ICogQHJldHVybiB7U3RyaW5nfSBUaGUgYXR0cmlidXRlJ3MgdmFsdWUsIG9yIGB1bmRlZmluZWRgIGlmIGl0IGRvZXMgbm90IGV4aXN0IG9uIHRoZSBIdG1sVGFnLlxyXG5cdFx0ICovXHJcblx0XHRnZXRBdHRyIDogZnVuY3Rpb24oIGF0dHJOYW1lICkge1xyXG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRBdHRycygpWyBhdHRyTmFtZSBdO1xyXG5cdFx0fSxcclxuXHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBTZXRzIG9uZSBvciBtb3JlIGF0dHJpYnV0ZXMgb24gdGhlIEh0bWxUYWcuXHJcblx0XHQgKiBcclxuXHRcdCAqIEBwYXJhbSB7T2JqZWN0LjxTdHJpbmcsIFN0cmluZz59IGF0dHJzIEEga2V5L3ZhbHVlIE9iamVjdCAobWFwKSBvZiB0aGUgYXR0cmlidXRlcyB0byBzZXQuXHJcblx0XHQgKiBAcmV0dXJuIHtBdXRvbGlua2VyLkh0bWxUYWd9IFRoaXMgSHRtbFRhZyBpbnN0YW5jZSwgc28gdGhhdCBtZXRob2QgY2FsbHMgbWF5IGJlIGNoYWluZWQuXHJcblx0XHQgKi9cclxuXHRcdHNldEF0dHJzIDogZnVuY3Rpb24oIGF0dHJzICkge1xyXG5cdFx0XHR2YXIgdGFnQXR0cnMgPSB0aGlzLmdldEF0dHJzKCk7XHJcblx0XHRcdEF1dG9saW5rZXIuVXRpbC5hc3NpZ24oIHRhZ0F0dHJzLCBhdHRycyApO1xyXG5cclxuXHRcdFx0cmV0dXJuIHRoaXM7XHJcblx0XHR9LFxyXG5cclxuXHJcblx0XHQvKipcclxuXHRcdCAqIFJldHJpZXZlcyB0aGUgYXR0cmlidXRlcyBPYmplY3QgKG1hcCkgZm9yIHRoZSBIdG1sVGFnLlxyXG5cdFx0ICogXHJcblx0XHQgKiBAcmV0dXJuIHtPYmplY3QuPFN0cmluZywgU3RyaW5nPn0gQSBrZXkvdmFsdWUgb2JqZWN0IG9mIHRoZSBhdHRyaWJ1dGVzIGZvciB0aGUgSHRtbFRhZy5cclxuXHRcdCAqL1xyXG5cdFx0Z2V0QXR0cnMgOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0cmV0dXJuIHRoaXMuYXR0cnMgfHwgKCB0aGlzLmF0dHJzID0ge30gKTtcclxuXHRcdH0sXHJcblxyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogU2V0cyB0aGUgcHJvdmlkZWQgYGNzc0NsYXNzYCwgb3ZlcndyaXRpbmcgYW55IGN1cnJlbnQgQ1NTIGNsYXNzZXMgb24gdGhlIEh0bWxUYWcuXHJcblx0XHQgKiBcclxuXHRcdCAqIEBwYXJhbSB7U3RyaW5nfSBjc3NDbGFzcyBPbmUgb3IgbW9yZSBzcGFjZS1zZXBhcmF0ZWQgQ1NTIGNsYXNzZXMgdG8gc2V0IChvdmVyd3JpdGUpLlxyXG5cdFx0ICogQHJldHVybiB7QXV0b2xpbmtlci5IdG1sVGFnfSBUaGlzIEh0bWxUYWcgaW5zdGFuY2UsIHNvIHRoYXQgbWV0aG9kIGNhbGxzIG1heSBiZSBjaGFpbmVkLlxyXG5cdFx0ICovXHJcblx0XHRzZXRDbGFzcyA6IGZ1bmN0aW9uKCBjc3NDbGFzcyApIHtcclxuXHRcdFx0cmV0dXJuIHRoaXMuc2V0QXR0ciggJ2NsYXNzJywgY3NzQ2xhc3MgKTtcclxuXHRcdH0sXHJcblxyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogQ29udmVuaWVuY2UgbWV0aG9kIHRvIGFkZCBvbmUgb3IgbW9yZSBDU1MgY2xhc3NlcyB0byB0aGUgSHRtbFRhZy4gV2lsbCBub3QgYWRkIGR1cGxpY2F0ZSBDU1MgY2xhc3Nlcy5cclxuXHRcdCAqIFxyXG5cdFx0ICogQHBhcmFtIHtTdHJpbmd9IGNzc0NsYXNzIE9uZSBvciBtb3JlIHNwYWNlLXNlcGFyYXRlZCBDU1MgY2xhc3NlcyB0byBhZGQuXHJcblx0XHQgKiBAcmV0dXJuIHtBdXRvbGlua2VyLkh0bWxUYWd9IFRoaXMgSHRtbFRhZyBpbnN0YW5jZSwgc28gdGhhdCBtZXRob2QgY2FsbHMgbWF5IGJlIGNoYWluZWQuXHJcblx0XHQgKi9cclxuXHRcdGFkZENsYXNzIDogZnVuY3Rpb24oIGNzc0NsYXNzICkge1xyXG5cdFx0XHR2YXIgY2xhc3NBdHRyID0gdGhpcy5nZXRDbGFzcygpLFxyXG5cdFx0XHQgICAgd2hpdGVzcGFjZVJlZ2V4ID0gdGhpcy53aGl0ZXNwYWNlUmVnZXgsXHJcblx0XHRcdCAgICBpbmRleE9mID0gQXV0b2xpbmtlci5VdGlsLmluZGV4T2YsICAvLyB0byBzdXBwb3J0IElFOCBhbmQgYmVsb3dcclxuXHRcdFx0ICAgIGNsYXNzZXMgPSAoICFjbGFzc0F0dHIgKSA/IFtdIDogY2xhc3NBdHRyLnNwbGl0KCB3aGl0ZXNwYWNlUmVnZXggKSxcclxuXHRcdFx0ICAgIG5ld0NsYXNzZXMgPSBjc3NDbGFzcy5zcGxpdCggd2hpdGVzcGFjZVJlZ2V4ICksXHJcblx0XHRcdCAgICBuZXdDbGFzcztcclxuXHJcblx0XHRcdHdoaWxlKCBuZXdDbGFzcyA9IG5ld0NsYXNzZXMuc2hpZnQoKSApIHtcclxuXHRcdFx0XHRpZiggaW5kZXhPZiggY2xhc3NlcywgbmV3Q2xhc3MgKSA9PT0gLTEgKSB7XHJcblx0XHRcdFx0XHRjbGFzc2VzLnB1c2goIG5ld0NsYXNzICk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHR0aGlzLmdldEF0dHJzKClbICdjbGFzcycgXSA9IGNsYXNzZXMuam9pbiggXCIgXCIgKTtcclxuXHRcdFx0cmV0dXJuIHRoaXM7XHJcblx0XHR9LFxyXG5cclxuXHJcblx0XHQvKipcclxuXHRcdCAqIENvbnZlbmllbmNlIG1ldGhvZCB0byByZW1vdmUgb25lIG9yIG1vcmUgQ1NTIGNsYXNzZXMgZnJvbSB0aGUgSHRtbFRhZy5cclxuXHRcdCAqIFxyXG5cdFx0ICogQHBhcmFtIHtTdHJpbmd9IGNzc0NsYXNzIE9uZSBvciBtb3JlIHNwYWNlLXNlcGFyYXRlZCBDU1MgY2xhc3NlcyB0byByZW1vdmUuXHJcblx0XHQgKiBAcmV0dXJuIHtBdXRvbGlua2VyLkh0bWxUYWd9IFRoaXMgSHRtbFRhZyBpbnN0YW5jZSwgc28gdGhhdCBtZXRob2QgY2FsbHMgbWF5IGJlIGNoYWluZWQuXHJcblx0XHQgKi9cclxuXHRcdHJlbW92ZUNsYXNzIDogZnVuY3Rpb24oIGNzc0NsYXNzICkge1xyXG5cdFx0XHR2YXIgY2xhc3NBdHRyID0gdGhpcy5nZXRDbGFzcygpLFxyXG5cdFx0XHQgICAgd2hpdGVzcGFjZVJlZ2V4ID0gdGhpcy53aGl0ZXNwYWNlUmVnZXgsXHJcblx0XHRcdCAgICBpbmRleE9mID0gQXV0b2xpbmtlci5VdGlsLmluZGV4T2YsICAvLyB0byBzdXBwb3J0IElFOCBhbmQgYmVsb3dcclxuXHRcdFx0ICAgIGNsYXNzZXMgPSAoICFjbGFzc0F0dHIgKSA/IFtdIDogY2xhc3NBdHRyLnNwbGl0KCB3aGl0ZXNwYWNlUmVnZXggKSxcclxuXHRcdFx0ICAgIHJlbW92ZUNsYXNzZXMgPSBjc3NDbGFzcy5zcGxpdCggd2hpdGVzcGFjZVJlZ2V4ICksXHJcblx0XHRcdCAgICByZW1vdmVDbGFzcztcclxuXHJcblx0XHRcdHdoaWxlKCBjbGFzc2VzLmxlbmd0aCAmJiAoIHJlbW92ZUNsYXNzID0gcmVtb3ZlQ2xhc3Nlcy5zaGlmdCgpICkgKSB7XHJcblx0XHRcdFx0dmFyIGlkeCA9IGluZGV4T2YoIGNsYXNzZXMsIHJlbW92ZUNsYXNzICk7XHJcblx0XHRcdFx0aWYoIGlkeCAhPT0gLTEgKSB7XHJcblx0XHRcdFx0XHRjbGFzc2VzLnNwbGljZSggaWR4LCAxICk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHR0aGlzLmdldEF0dHJzKClbICdjbGFzcycgXSA9IGNsYXNzZXMuam9pbiggXCIgXCIgKTtcclxuXHRcdFx0cmV0dXJuIHRoaXM7XHJcblx0XHR9LFxyXG5cclxuXHJcblx0XHQvKipcclxuXHRcdCAqIENvbnZlbmllbmNlIG1ldGhvZCB0byByZXRyaWV2ZSB0aGUgQ1NTIGNsYXNzKGVzKSBmb3IgdGhlIEh0bWxUYWcsIHdoaWNoIHdpbGwgZWFjaCBiZSBzZXBhcmF0ZWQgYnkgc3BhY2VzIHdoZW5cclxuXHRcdCAqIHRoZXJlIGFyZSBtdWx0aXBsZS5cclxuXHRcdCAqIFxyXG5cdFx0ICogQHJldHVybiB7U3RyaW5nfVxyXG5cdFx0ICovXHJcblx0XHRnZXRDbGFzcyA6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRBdHRycygpWyAnY2xhc3MnIF0gfHwgXCJcIjtcclxuXHRcdH0sXHJcblxyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogQ29udmVuaWVuY2UgbWV0aG9kIHRvIGNoZWNrIGlmIHRoZSB0YWcgaGFzIGEgQ1NTIGNsYXNzIG9yIG5vdC5cclxuXHRcdCAqIFxyXG5cdFx0ICogQHBhcmFtIHtTdHJpbmd9IGNzc0NsYXNzIFRoZSBDU1MgY2xhc3MgdG8gY2hlY2sgZm9yLlxyXG5cdFx0ICogQHJldHVybiB7Qm9vbGVhbn0gYHRydWVgIGlmIHRoZSBIdG1sVGFnIGhhcyB0aGUgQ1NTIGNsYXNzLCBgZmFsc2VgIG90aGVyd2lzZS5cclxuXHRcdCAqL1xyXG5cdFx0aGFzQ2xhc3MgOiBmdW5jdGlvbiggY3NzQ2xhc3MgKSB7XHJcblx0XHRcdHJldHVybiAoICcgJyArIHRoaXMuZ2V0Q2xhc3MoKSArICcgJyApLmluZGV4T2YoICcgJyArIGNzc0NsYXNzICsgJyAnICkgIT09IC0xO1xyXG5cdFx0fSxcclxuXHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBTZXRzIHRoZSBpbm5lciBIVE1MIGZvciB0aGUgdGFnLlxyXG5cdFx0ICogXHJcblx0XHQgKiBAcGFyYW0ge1N0cmluZ30gaHRtbCBUaGUgaW5uZXIgSFRNTCB0byBzZXQuXHJcblx0XHQgKiBAcmV0dXJuIHtBdXRvbGlua2VyLkh0bWxUYWd9IFRoaXMgSHRtbFRhZyBpbnN0YW5jZSwgc28gdGhhdCBtZXRob2QgY2FsbHMgbWF5IGJlIGNoYWluZWQuXHJcblx0XHQgKi9cclxuXHRcdHNldElubmVySHRtbCA6IGZ1bmN0aW9uKCBodG1sICkge1xyXG5cdFx0XHR0aGlzLmlubmVySHRtbCA9IGh0bWw7XHJcblxyXG5cdFx0XHRyZXR1cm4gdGhpcztcclxuXHRcdH0sXHJcblxyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogUmV0cmlldmVzIHRoZSBpbm5lciBIVE1MIGZvciB0aGUgdGFnLlxyXG5cdFx0ICogXHJcblx0XHQgKiBAcmV0dXJuIHtTdHJpbmd9XHJcblx0XHQgKi9cclxuXHRcdGdldElubmVySHRtbCA6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRyZXR1cm4gdGhpcy5pbm5lckh0bWwgfHwgXCJcIjtcclxuXHRcdH0sXHJcblxyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogT3ZlcnJpZGUgb2Ygc3VwZXJjbGFzcyBtZXRob2QgdXNlZCB0byBnZW5lcmF0ZSB0aGUgSFRNTCBzdHJpbmcgZm9yIHRoZSB0YWcuXHJcblx0XHQgKiBcclxuXHRcdCAqIEByZXR1cm4ge1N0cmluZ31cclxuXHRcdCAqL1xyXG5cdFx0dG9TdHJpbmcgOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0dmFyIHRhZ05hbWUgPSB0aGlzLmdldFRhZ05hbWUoKSxcclxuXHRcdFx0ICAgIGF0dHJzU3RyID0gdGhpcy5idWlsZEF0dHJzU3RyKCk7XHJcblxyXG5cdFx0XHRhdHRyc1N0ciA9ICggYXR0cnNTdHIgKSA/ICcgJyArIGF0dHJzU3RyIDogJyc7ICAvLyBwcmVwZW5kIGEgc3BhY2UgaWYgdGhlcmUgYXJlIGFjdHVhbGx5IGF0dHJpYnV0ZXNcclxuXHJcblx0XHRcdHJldHVybiBbICc8JywgdGFnTmFtZSwgYXR0cnNTdHIsICc+JywgdGhpcy5nZXRJbm5lckh0bWwoKSwgJzwvJywgdGFnTmFtZSwgJz4nIF0uam9pbiggXCJcIiApO1xyXG5cdFx0fSxcclxuXHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBTdXBwb3J0IG1ldGhvZCBmb3Ige0BsaW5rICN0b1N0cmluZ30sIHJldHVybnMgdGhlIHN0cmluZyBzcGFjZS1zZXBhcmF0ZWQga2V5PVwidmFsdWVcIiBwYWlycywgdXNlZCB0byBwb3B1bGF0ZSBcclxuXHRcdCAqIHRoZSBzdHJpbmdpZmllZCBIdG1sVGFnLlxyXG5cdFx0ICogXHJcblx0XHQgKiBAcHJvdGVjdGVkXHJcblx0XHQgKiBAcmV0dXJuIHtTdHJpbmd9IEV4YW1wbGUgcmV0dXJuOiBgYXR0cjE9XCJ2YWx1ZTFcIiBhdHRyMj1cInZhbHVlMlwiYFxyXG5cdFx0ICovXHJcblx0XHRidWlsZEF0dHJzU3RyIDogZnVuY3Rpb24oKSB7XHJcblx0XHRcdGlmKCAhdGhpcy5hdHRycyApIHJldHVybiBcIlwiOyAgLy8gbm8gYGF0dHJzYCBPYmplY3QgKG1hcCkgaGFzIGJlZW4gc2V0LCByZXR1cm4gZW1wdHkgc3RyaW5nXHJcblxyXG5cdFx0XHR2YXIgYXR0cnMgPSB0aGlzLmdldEF0dHJzKCksXHJcblx0XHRcdCAgICBhdHRyc0FyciA9IFtdO1xyXG5cclxuXHRcdFx0Zm9yKCB2YXIgcHJvcCBpbiBhdHRycyApIHtcclxuXHRcdFx0XHRpZiggYXR0cnMuaGFzT3duUHJvcGVydHkoIHByb3AgKSApIHtcclxuXHRcdFx0XHRcdGF0dHJzQXJyLnB1c2goIHByb3AgKyAnPVwiJyArIGF0dHJzWyBwcm9wIF0gKyAnXCInICk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybiBhdHRyc0Fyci5qb2luKCBcIiBcIiApO1xyXG5cdFx0fVxyXG5cclxuXHR9ICk7XHJcblx0LypnbG9iYWwgQXV0b2xpbmtlciAqL1xyXG5cdC8qanNoaW50IHNjcmlwdHVybDp0cnVlICovXHJcblx0LyoqXHJcblx0ICogQHByaXZhdGVcclxuXHQgKiBAY2xhc3MgQXV0b2xpbmtlci5NYXRjaFZhbGlkYXRvclxyXG5cdCAqIEBleHRlbmRzIE9iamVjdFxyXG5cdCAqIFxyXG5cdCAqIFVzZWQgYnkgQXV0b2xpbmtlciB0byBmaWx0ZXIgb3V0IGZhbHNlIHBvc2l0aXZlcyBmcm9tIHRoZSB7QGxpbmsgQXV0b2xpbmtlciNtYXRjaGVyUmVnZXh9LlxyXG5cdCAqIFxyXG5cdCAqIER1ZSB0byB0aGUgbGltaXRhdGlvbnMgb2YgcmVndWxhciBleHByZXNzaW9ucyAoaW5jbHVkaW5nIHRoZSBtaXNzaW5nIGZlYXR1cmUgb2YgbG9vay1iZWhpbmRzIGluIEpTIHJlZ3VsYXIgZXhwcmVzc2lvbnMpLFxyXG5cdCAqIHdlIGNhbm5vdCBhbHdheXMgZGV0ZXJtaW5lIHRoZSB2YWxpZGl0eSBvZiBhIGdpdmVuIG1hdGNoLiBUaGlzIGNsYXNzIGFwcGxpZXMgYSBiaXQgb2YgYWRkaXRpb25hbCBsb2dpYyB0byBmaWx0ZXIgb3V0IGFueVxyXG5cdCAqIGZhbHNlIHBvc2l0aXZlcyB0aGF0IGhhdmUgYmVlbiBtYXRjaGVkIGJ5IHRoZSB7QGxpbmsgQXV0b2xpbmtlciNtYXRjaGVyUmVnZXh9LlxyXG5cdCAqL1xyXG5cdEF1dG9saW5rZXIuTWF0Y2hWYWxpZGF0b3IgPSBBdXRvbGlua2VyLlV0aWwuZXh0ZW5kKCBPYmplY3QsIHtcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIEBwcml2YXRlXHJcblx0XHQgKiBAcHJvcGVydHkge1JlZ0V4cH0gaW52YWxpZFByb3RvY29sUmVsTWF0Y2hSZWdleFxyXG5cdFx0ICogXHJcblx0XHQgKiBUaGUgcmVndWxhciBleHByZXNzaW9uIHVzZWQgdG8gY2hlY2sgYSBwb3RlbnRpYWwgcHJvdG9jb2wtcmVsYXRpdmUgVVJMIG1hdGNoLCBjb21pbmcgZnJvbSB0aGUgXHJcblx0XHQgKiB7QGxpbmsgQXV0b2xpbmtlciNtYXRjaGVyUmVnZXh9LiBBIHByb3RvY29sLXJlbGF0aXZlIFVSTCBpcywgZm9yIGV4YW1wbGUsIFwiLy95YWhvby5jb21cIlxyXG5cdFx0ICogXHJcblx0XHQgKiBUaGlzIHJlZ3VsYXIgZXhwcmVzc2lvbiBjaGVja3MgdG8gc2VlIGlmIHRoZXJlIGlzIGEgd29yZCBjaGFyYWN0ZXIgYmVmb3JlIHRoZSAnLy8nIG1hdGNoIGluIG9yZGVyIHRvIGRldGVybWluZSBpZiBcclxuXHRcdCAqIHdlIHNob3VsZCBhY3R1YWxseSBhdXRvbGluayBhIHByb3RvY29sLXJlbGF0aXZlIFVSTC4gVGhpcyBpcyBuZWVkZWQgYmVjYXVzZSB0aGVyZSBpcyBubyBuZWdhdGl2ZSBsb29rLWJlaGluZCBpbiBcclxuXHRcdCAqIEphdmFTY3JpcHQgcmVndWxhciBleHByZXNzaW9ucy4gXHJcblx0XHQgKiBcclxuXHRcdCAqIEZvciBpbnN0YW5jZSwgd2Ugd2FudCB0byBhdXRvbGluayBzb21ldGhpbmcgbGlrZSBcIkdvIHRvOiAvL2dvb2dsZS5jb21cIiwgYnV0IHdlIGRvbid0IHdhbnQgdG8gYXV0b2xpbmsgc29tZXRoaW5nIFxyXG5cdFx0ICogbGlrZSBcImFiYy8vZ29vZ2xlLmNvbVwiXHJcblx0XHQgKi9cclxuXHRcdGludmFsaWRQcm90b2NvbFJlbE1hdGNoUmVnZXggOiAvXltcXHddXFwvXFwvLyxcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIFJlZ2V4IHRvIHRlc3QgZm9yIGEgZnVsbCBwcm90b2NvbCwgd2l0aCB0aGUgdHdvIHRyYWlsaW5nIHNsYXNoZXMuIEV4OiAnaHR0cDovLydcclxuXHRcdCAqIFxyXG5cdFx0ICogQHByaXZhdGVcclxuXHRcdCAqIEBwcm9wZXJ0eSB7UmVnRXhwfSBoYXNGdWxsUHJvdG9jb2xSZWdleFxyXG5cdFx0ICovXHJcblx0XHRoYXNGdWxsUHJvdG9jb2xSZWdleCA6IC9eW0EtWmEtel1bLS4rQS1aYS16MC05XSs6XFwvXFwvLyxcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIFJlZ2V4IHRvIGZpbmQgdGhlIFVSSSBzY2hlbWUsIHN1Y2ggYXMgJ21haWx0bzonLlxyXG5cdFx0ICogXHJcblx0XHQgKiBUaGlzIGlzIHVzZWQgdG8gZmlsdGVyIG91dCAnamF2YXNjcmlwdDonIGFuZCAndmJzY3JpcHQ6JyBzY2hlbWVzLlxyXG5cdFx0ICogXHJcblx0XHQgKiBAcHJpdmF0ZVxyXG5cdFx0ICogQHByb3BlcnR5IHtSZWdFeHB9IHVyaVNjaGVtZVJlZ2V4XHJcblx0XHQgKi9cclxuXHRcdHVyaVNjaGVtZVJlZ2V4IDogL15bQS1aYS16XVstLitBLVphLXowLTldKzovLFxyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogUmVnZXggdG8gZGV0ZXJtaW5lIGlmIGF0IGxlYXN0IG9uZSB3b3JkIGNoYXIgZXhpc3RzIGFmdGVyIHRoZSBwcm90b2NvbCAoaS5lLiBhZnRlciB0aGUgJzonKVxyXG5cdFx0ICogXHJcblx0XHQgKiBAcHJpdmF0ZVxyXG5cdFx0ICogQHByb3BlcnR5IHtSZWdFeHB9IGhhc1dvcmRDaGFyQWZ0ZXJQcm90b2NvbFJlZ2V4XHJcblx0XHQgKi9cclxuXHRcdGhhc1dvcmRDaGFyQWZ0ZXJQcm90b2NvbFJlZ2V4IDogLzpbXlxcc10qP1tBLVphLXpdLyxcclxuXHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBEZXRlcm1pbmVzIGlmIGEgZ2l2ZW4gbWF0Y2ggZm91bmQgYnkge0BsaW5rIEF1dG9saW5rZXIjcHJvY2Vzc1RleHROb2RlfSBpcyB2YWxpZC4gV2lsbCByZXR1cm4gYGZhbHNlYCBmb3I6XHJcblx0XHQgKiBcclxuXHRcdCAqIDEpIFVSTCBtYXRjaGVzIHdoaWNoIGRvIG5vdCBoYXZlIGF0IGxlYXN0IGhhdmUgb25lIHBlcmlvZCAoJy4nKSBpbiB0aGUgZG9tYWluIG5hbWUgKGVmZmVjdGl2ZWx5IHNraXBwaW5nIG92ZXIgXHJcblx0XHQgKiAgICBtYXRjaGVzIGxpa2UgXCJhYmM6ZGVmXCIpLiBIb3dldmVyLCBVUkwgbWF0Y2hlcyB3aXRoIGEgcHJvdG9jb2wgd2lsbCBiZSBhbGxvd2VkIChleDogJ2h0dHA6Ly9sb2NhbGhvc3QnKVxyXG5cdFx0ICogMikgVVJMIG1hdGNoZXMgd2hpY2ggZG8gbm90IGhhdmUgYXQgbGVhc3Qgb25lIHdvcmQgY2hhcmFjdGVyIGluIHRoZSBkb21haW4gbmFtZSAoZWZmZWN0aXZlbHkgc2tpcHBpbmcgb3ZlclxyXG5cdFx0ICogICAgbWF0Y2hlcyBsaWtlIFwiZ2l0OjEuMFwiKS5cclxuXHRcdCAqIDMpIEEgcHJvdG9jb2wtcmVsYXRpdmUgdXJsIG1hdGNoIChhIFVSTCBiZWdpbm5pbmcgd2l0aCAnLy8nKSB3aG9zZSBwcmV2aW91cyBjaGFyYWN0ZXIgaXMgYSB3b3JkIGNoYXJhY3RlciBcclxuXHRcdCAqICAgIChlZmZlY3RpdmVseSBza2lwcGluZyBvdmVyIHN0cmluZ3MgbGlrZSBcImFiYy8vZ29vZ2xlLmNvbVwiKVxyXG5cdFx0ICogXHJcblx0XHQgKiBPdGhlcndpc2UsIHJldHVybnMgYHRydWVgLlxyXG5cdFx0ICogXHJcblx0XHQgKiBAcGFyYW0ge1N0cmluZ30gdXJsTWF0Y2ggVGhlIG1hdGNoZWQgVVJMLCBpZiB0aGVyZSB3YXMgb25lLiBXaWxsIGJlIGFuIGVtcHR5IHN0cmluZyBpZiB0aGUgbWF0Y2ggaXMgbm90IGEgVVJMIG1hdGNoLlxyXG5cdFx0ICogQHBhcmFtIHtTdHJpbmd9IHByb3RvY29sVXJsTWF0Y2ggVGhlIG1hdGNoIFVSTCBzdHJpbmcgZm9yIGEgcHJvdG9jb2wgbWF0Y2guIEV4OiAnaHR0cDovL3lhaG9vLmNvbScuIFRoaXMgaXMgdXNlZCB0byBtYXRjaFxyXG5cdFx0ICogICBzb21ldGhpbmcgbGlrZSAnaHR0cDovL2xvY2FsaG9zdCcsIHdoZXJlIHdlIHdvbid0IGRvdWJsZSBjaGVjayB0aGF0IHRoZSBkb21haW4gbmFtZSBoYXMgYXQgbGVhc3Qgb25lICcuJyBpbiBpdC5cclxuXHRcdCAqIEBwYXJhbSB7U3RyaW5nfSBwcm90b2NvbFJlbGF0aXZlTWF0Y2ggVGhlIHByb3RvY29sLXJlbGF0aXZlIHN0cmluZyBmb3IgYSBVUkwgbWF0Y2ggKGkuZS4gJy8vJyksIHBvc3NpYmx5IHdpdGggYSBwcmVjZWRpbmdcclxuXHRcdCAqICAgY2hhcmFjdGVyIChleCwgYSBzcGFjZSwgc3VjaCBhczogJyAvLycsIG9yIGEgbGV0dGVyLCBzdWNoIGFzOiAnYS8vJykuIFRoZSBtYXRjaCBpcyBpbnZhbGlkIGlmIHRoZXJlIGlzIGEgd29yZCBjaGFyYWN0ZXJcclxuXHRcdCAqICAgcHJlY2VkaW5nIHRoZSAnLy8nLlxyXG5cdFx0ICogQHJldHVybiB7Qm9vbGVhbn0gYHRydWVgIGlmIHRoZSBtYXRjaCBnaXZlbiBpcyB2YWxpZCBhbmQgc2hvdWxkIGJlIHByb2Nlc3NlZCwgb3IgYGZhbHNlYCBpZiB0aGUgbWF0Y2ggaXMgaW52YWxpZCBhbmQvb3IgXHJcblx0XHQgKiAgIHNob3VsZCBqdXN0IG5vdCBiZSBwcm9jZXNzZWQuXHJcblx0XHQgKi9cclxuXHRcdGlzVmFsaWRNYXRjaCA6IGZ1bmN0aW9uKCB1cmxNYXRjaCwgcHJvdG9jb2xVcmxNYXRjaCwgcHJvdG9jb2xSZWxhdGl2ZU1hdGNoICkge1xyXG5cdFx0XHRpZihcclxuXHRcdFx0XHQoIHByb3RvY29sVXJsTWF0Y2ggJiYgIXRoaXMuaXNWYWxpZFVyaVNjaGVtZSggcHJvdG9jb2xVcmxNYXRjaCApICkgfHxcclxuXHRcdFx0XHR0aGlzLnVybE1hdGNoRG9lc05vdEhhdmVQcm90b2NvbE9yRG90KCB1cmxNYXRjaCwgcHJvdG9jb2xVcmxNYXRjaCApIHx8ICAgICAgIC8vIEF0IGxlYXN0IG9uZSBwZXJpb2QgKCcuJykgbXVzdCBleGlzdCBpbiB0aGUgVVJMIG1hdGNoIGZvciB1cyB0byBjb25zaWRlciBpdCBhbiBhY3R1YWwgVVJMLCAqdW5sZXNzKiBpdCB3YXMgYSBmdWxsIHByb3RvY29sIG1hdGNoIChsaWtlICdodHRwOi8vbG9jYWxob3N0JylcclxuXHRcdFx0XHR0aGlzLnVybE1hdGNoRG9lc05vdEhhdmVBdExlYXN0T25lV29yZENoYXIoIHVybE1hdGNoLCBwcm90b2NvbFVybE1hdGNoICkgfHwgIC8vIEF0IGxlYXN0IG9uZSBsZXR0ZXIgY2hhcmFjdGVyIG11c3QgZXhpc3QgaW4gdGhlIGRvbWFpbiBuYW1lIGFmdGVyIGEgcHJvdG9jb2wgbWF0Y2guIEV4OiBza2lwIG92ZXIgc29tZXRoaW5nIGxpa2UgXCJnaXQ6MS4wXCJcclxuXHRcdFx0XHR0aGlzLmlzSW52YWxpZFByb3RvY29sUmVsYXRpdmVNYXRjaCggcHJvdG9jb2xSZWxhdGl2ZU1hdGNoICkgICAgICAgICAgICAgICAgIC8vIEEgcHJvdG9jb2wtcmVsYXRpdmUgbWF0Y2ggd2hpY2ggaGFzIGEgd29yZCBjaGFyYWN0ZXIgaW4gZnJvbnQgb2YgaXQgKHNvIHdlIGNhbiBza2lwIHNvbWV0aGluZyBsaWtlIFwiYWJjLy9nb29nbGUuY29tXCIpXHJcblx0XHRcdCkge1xyXG5cdFx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHR9LFxyXG5cclxuXHJcblx0XHQvKipcclxuXHRcdCAqIERldGVybWluZXMgaWYgdGhlIFVSSSBzY2hlbWUgaXMgYSB2YWxpZCBzY2hlbWUgdG8gYmUgYXV0b2xpbmtlZC4gUmV0dXJucyBgZmFsc2VgIGlmIHRoZSBzY2hlbWUgaXMgXHJcblx0XHQgKiAnamF2YXNjcmlwdDonIG9yICd2YnNjcmlwdDonXHJcblx0XHQgKiBcclxuXHRcdCAqIEBwcml2YXRlXHJcblx0XHQgKiBAcGFyYW0ge1N0cmluZ30gdXJpU2NoZW1lTWF0Y2ggVGhlIG1hdGNoIFVSTCBzdHJpbmcgZm9yIGEgZnVsbCBVUkkgc2NoZW1lIG1hdGNoLiBFeDogJ2h0dHA6Ly95YWhvby5jb20nIFxyXG5cdFx0ICogICBvciAnbWFpbHRvOmFAYS5jb20nLlxyXG5cdFx0ICogQHJldHVybiB7Qm9vbGVhbn0gYHRydWVgIGlmIHRoZSBzY2hlbWUgaXMgYSB2YWxpZCBvbmUsIGBmYWxzZWAgb3RoZXJ3aXNlLlxyXG5cdFx0ICovXHJcblx0XHRpc1ZhbGlkVXJpU2NoZW1lIDogZnVuY3Rpb24oIHVyaVNjaGVtZU1hdGNoICkge1xyXG5cdFx0XHR2YXIgdXJpU2NoZW1lID0gdXJpU2NoZW1lTWF0Y2gubWF0Y2goIHRoaXMudXJpU2NoZW1lUmVnZXggKVsgMCBdO1xyXG5cclxuXHRcdFx0cmV0dXJuICggdXJpU2NoZW1lICE9PSAnamF2YXNjcmlwdDonICYmIHVyaVNjaGVtZSAhPT0gJ3Zic2NyaXB0OicgKTtcclxuXHRcdH0sXHJcblxyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogRGV0ZXJtaW5lcyBpZiBhIFVSTCBtYXRjaCBkb2VzIG5vdCBoYXZlIGVpdGhlcjpcclxuXHRcdCAqIFxyXG5cdFx0ICogYSkgYSBmdWxsIHByb3RvY29sIChpLmUuICdodHRwOi8vJyksIG9yXHJcblx0XHQgKiBiKSBhdCBsZWFzdCBvbmUgZG90ICgnLicpIGluIHRoZSBkb21haW4gbmFtZSAoZm9yIGEgbm9uLWZ1bGwtcHJvdG9jb2wgbWF0Y2gpLlxyXG5cdFx0ICogXHJcblx0XHQgKiBFaXRoZXIgc2l0dWF0aW9uIGlzIGNvbnNpZGVyZWQgYW4gaW52YWxpZCBVUkwgKGV4OiAnZ2l0OmQnIGRvZXMgbm90IGhhdmUgZWl0aGVyIHRoZSAnOi8vJyBwYXJ0LCBvciBhdCBsZWFzdCBvbmUgZG90XHJcblx0XHQgKiBpbiB0aGUgZG9tYWluIG5hbWUuIElmIHRoZSBtYXRjaCB3YXMgJ2dpdDphYmMuY29tJywgd2Ugd291bGQgY29uc2lkZXIgdGhpcyB2YWxpZC4pXHJcblx0XHQgKiBcclxuXHRcdCAqIEBwcml2YXRlXHJcblx0XHQgKiBAcGFyYW0ge1N0cmluZ30gdXJsTWF0Y2ggVGhlIG1hdGNoZWQgVVJMLCBpZiB0aGVyZSB3YXMgb25lLiBXaWxsIGJlIGFuIGVtcHR5IHN0cmluZyBpZiB0aGUgbWF0Y2ggaXMgbm90IGEgVVJMIG1hdGNoLlxyXG5cdFx0ICogQHBhcmFtIHtTdHJpbmd9IHByb3RvY29sVXJsTWF0Y2ggVGhlIG1hdGNoIFVSTCBzdHJpbmcgZm9yIGEgcHJvdG9jb2wgbWF0Y2guIEV4OiAnaHR0cDovL3lhaG9vLmNvbScuIFRoaXMgaXMgdXNlZCB0byBtYXRjaFxyXG5cdFx0ICogICBzb21ldGhpbmcgbGlrZSAnaHR0cDovL2xvY2FsaG9zdCcsIHdoZXJlIHdlIHdvbid0IGRvdWJsZSBjaGVjayB0aGF0IHRoZSBkb21haW4gbmFtZSBoYXMgYXQgbGVhc3Qgb25lICcuJyBpbiBpdC5cclxuXHRcdCAqIEByZXR1cm4ge0Jvb2xlYW59IGB0cnVlYCBpZiB0aGUgVVJMIG1hdGNoIGRvZXMgbm90IGhhdmUgYSBmdWxsIHByb3RvY29sLCBvciBhdCBsZWFzdCBvbmUgZG90ICgnLicpIGluIGEgbm9uLWZ1bGwtcHJvdG9jb2xcclxuXHRcdCAqICAgbWF0Y2guXHJcblx0XHQgKi9cclxuXHRcdHVybE1hdGNoRG9lc05vdEhhdmVQcm90b2NvbE9yRG90IDogZnVuY3Rpb24oIHVybE1hdGNoLCBwcm90b2NvbFVybE1hdGNoICkge1xyXG5cdFx0XHRyZXR1cm4gKCAhIXVybE1hdGNoICYmICggIXByb3RvY29sVXJsTWF0Y2ggfHwgIXRoaXMuaGFzRnVsbFByb3RvY29sUmVnZXgudGVzdCggcHJvdG9jb2xVcmxNYXRjaCApICkgJiYgdXJsTWF0Y2guaW5kZXhPZiggJy4nICkgPT09IC0xICk7XHJcblx0XHR9LFxyXG5cclxuXHJcblx0XHQvKipcclxuXHRcdCAqIERldGVybWluZXMgaWYgYSBVUkwgbWF0Y2ggZG9lcyBub3QgaGF2ZSBhdCBsZWFzdCBvbmUgd29yZCBjaGFyYWN0ZXIgYWZ0ZXIgdGhlIHByb3RvY29sIChpLmUuIGluIHRoZSBkb21haW4gbmFtZSkuXHJcblx0XHQgKiBcclxuXHRcdCAqIEF0IGxlYXN0IG9uZSBsZXR0ZXIgY2hhcmFjdGVyIG11c3QgZXhpc3QgaW4gdGhlIGRvbWFpbiBuYW1lIGFmdGVyIGEgcHJvdG9jb2wgbWF0Y2guIEV4OiBza2lwIG92ZXIgc29tZXRoaW5nIFxyXG5cdFx0ICogbGlrZSBcImdpdDoxLjBcIlxyXG5cdFx0ICogXHJcblx0XHQgKiBAcHJpdmF0ZVxyXG5cdFx0ICogQHBhcmFtIHtTdHJpbmd9IHVybE1hdGNoIFRoZSBtYXRjaGVkIFVSTCwgaWYgdGhlcmUgd2FzIG9uZS4gV2lsbCBiZSBhbiBlbXB0eSBzdHJpbmcgaWYgdGhlIG1hdGNoIGlzIG5vdCBhIFVSTCBtYXRjaC5cclxuXHRcdCAqIEBwYXJhbSB7U3RyaW5nfSBwcm90b2NvbFVybE1hdGNoIFRoZSBtYXRjaCBVUkwgc3RyaW5nIGZvciBhIHByb3RvY29sIG1hdGNoLiBFeDogJ2h0dHA6Ly95YWhvby5jb20nLiBUaGlzIGlzIHVzZWQgdG9cclxuXHRcdCAqICAga25vdyB3aGV0aGVyIG9yIG5vdCB3ZSBoYXZlIGEgcHJvdG9jb2wgaW4gdGhlIFVSTCBzdHJpbmcsIGluIG9yZGVyIHRvIGNoZWNrIGZvciBhIHdvcmQgY2hhcmFjdGVyIGFmdGVyIHRoZSBwcm90b2NvbFxyXG5cdFx0ICogICBzZXBhcmF0b3IgKCc6JykuXHJcblx0XHQgKiBAcmV0dXJuIHtCb29sZWFufSBgdHJ1ZWAgaWYgdGhlIFVSTCBtYXRjaCBkb2VzIG5vdCBoYXZlIGF0IGxlYXN0IG9uZSB3b3JkIGNoYXJhY3RlciBpbiBpdCBhZnRlciB0aGUgcHJvdG9jb2wsIGBmYWxzZWBcclxuXHRcdCAqICAgb3RoZXJ3aXNlLlxyXG5cdFx0ICovXHJcblx0XHR1cmxNYXRjaERvZXNOb3RIYXZlQXRMZWFzdE9uZVdvcmRDaGFyIDogZnVuY3Rpb24oIHVybE1hdGNoLCBwcm90b2NvbFVybE1hdGNoICkge1xyXG5cdFx0XHRpZiggdXJsTWF0Y2ggJiYgcHJvdG9jb2xVcmxNYXRjaCApIHtcclxuXHRcdFx0XHRyZXR1cm4gIXRoaXMuaGFzV29yZENoYXJBZnRlclByb3RvY29sUmVnZXgudGVzdCggdXJsTWF0Y2ggKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblxyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogRGV0ZXJtaW5lcyBpZiBhIHByb3RvY29sLXJlbGF0aXZlIG1hdGNoIGlzIGFuIGludmFsaWQgb25lLiBUaGlzIG1ldGhvZCByZXR1cm5zIGB0cnVlYCBpZiB0aGVyZSBpcyBhIGBwcm90b2NvbFJlbGF0aXZlTWF0Y2hgLFxyXG5cdFx0ICogYW5kIHRoYXQgbWF0Y2ggY29udGFpbnMgYSB3b3JkIGNoYXJhY3RlciBiZWZvcmUgdGhlICcvLycgKGkuZS4gaXQgbXVzdCBjb250YWluIHdoaXRlc3BhY2Ugb3Igbm90aGluZyBiZWZvcmUgdGhlICcvLycgaW5cclxuXHRcdCAqIG9yZGVyIHRvIGJlIGNvbnNpZGVyZWQgdmFsaWQpLlxyXG5cdFx0ICogXHJcblx0XHQgKiBAcHJpdmF0ZVxyXG5cdFx0ICogQHBhcmFtIHtTdHJpbmd9IHByb3RvY29sUmVsYXRpdmVNYXRjaCBUaGUgcHJvdG9jb2wtcmVsYXRpdmUgc3RyaW5nIGZvciBhIFVSTCBtYXRjaCAoaS5lLiAnLy8nKSwgcG9zc2libHkgd2l0aCBhIHByZWNlZGluZ1xyXG5cdFx0ICogICBjaGFyYWN0ZXIgKGV4LCBhIHNwYWNlLCBzdWNoIGFzOiAnIC8vJywgb3IgYSBsZXR0ZXIsIHN1Y2ggYXM6ICdhLy8nKS4gVGhlIG1hdGNoIGlzIGludmFsaWQgaWYgdGhlcmUgaXMgYSB3b3JkIGNoYXJhY3RlclxyXG5cdFx0ICogICBwcmVjZWRpbmcgdGhlICcvLycuXHJcblx0XHQgKiBAcmV0dXJuIHtCb29sZWFufSBgdHJ1ZWAgaWYgaXQgaXMgYW4gaW52YWxpZCBwcm90b2NvbC1yZWxhdGl2ZSBtYXRjaCwgYGZhbHNlYCBvdGhlcndpc2UuXHJcblx0XHQgKi9cclxuXHRcdGlzSW52YWxpZFByb3RvY29sUmVsYXRpdmVNYXRjaCA6IGZ1bmN0aW9uKCBwcm90b2NvbFJlbGF0aXZlTWF0Y2ggKSB7XHJcblx0XHRcdHJldHVybiAoICEhcHJvdG9jb2xSZWxhdGl2ZU1hdGNoICYmIHRoaXMuaW52YWxpZFByb3RvY29sUmVsTWF0Y2hSZWdleC50ZXN0KCBwcm90b2NvbFJlbGF0aXZlTWF0Y2ggKSApO1xyXG5cdFx0fVxyXG5cclxuXHR9ICk7XHJcblx0LypnbG9iYWwgQXV0b2xpbmtlciAqL1xyXG5cdC8qanNoaW50IHN1Yjp0cnVlICovXHJcblx0LyoqXHJcblx0ICogQHByb3RlY3RlZFxyXG5cdCAqIEBjbGFzcyBBdXRvbGlua2VyLkFuY2hvclRhZ0J1aWxkZXJcclxuXHQgKiBAZXh0ZW5kcyBPYmplY3RcclxuXHQgKiBcclxuXHQgKiBCdWlsZHMgYW5jaG9yICgmbHQ7YSZndDspIHRhZ3MgZm9yIHRoZSBBdXRvbGlua2VyIHV0aWxpdHkgd2hlbiBhIG1hdGNoIGlzIGZvdW5kLlxyXG5cdCAqIFxyXG5cdCAqIE5vcm1hbGx5IHRoaXMgY2xhc3MgaXMgaW5zdGFudGlhdGVkLCBjb25maWd1cmVkLCBhbmQgdXNlZCBpbnRlcm5hbGx5IGJ5IGFuIHtAbGluayBBdXRvbGlua2VyfSBpbnN0YW5jZSwgYnV0IG1heSBcclxuXHQgKiBhY3R1YWxseSBiZSByZXRyaWV2ZWQgaW4gYSB7QGxpbmsgQXV0b2xpbmtlciNyZXBsYWNlRm4gcmVwbGFjZUZufSB0byBjcmVhdGUge0BsaW5rIEF1dG9saW5rZXIuSHRtbFRhZyBIdG1sVGFnfSBpbnN0YW5jZXNcclxuXHQgKiB3aGljaCBtYXkgYmUgbW9kaWZpZWQgYmVmb3JlIHJldHVybmluZyBmcm9tIHRoZSB7QGxpbmsgQXV0b2xpbmtlciNyZXBsYWNlRm4gcmVwbGFjZUZufS4gRm9yIGV4YW1wbGU6XHJcblx0ICogXHJcblx0ICogICAgIHZhciBodG1sID0gQXV0b2xpbmtlci5saW5rKCBcIlRlc3QgZ29vZ2xlLmNvbVwiLCB7XHJcblx0ICogICAgICAgICByZXBsYWNlRm4gOiBmdW5jdGlvbiggYXV0b2xpbmtlciwgbWF0Y2ggKSB7XHJcblx0ICogICAgICAgICAgICAgdmFyIHRhZyA9IGF1dG9saW5rZXIuZ2V0VGFnQnVpbGRlcigpLmJ1aWxkKCBtYXRjaCApOyAgLy8gcmV0dXJucyBhbiB7QGxpbmsgQXV0b2xpbmtlci5IdG1sVGFnfSBpbnN0YW5jZVxyXG5cdCAqICAgICAgICAgICAgIHRhZy5zZXRBdHRyKCAncmVsJywgJ25vZm9sbG93JyApO1xyXG5cdCAqICAgICAgICAgICAgIFxyXG5cdCAqICAgICAgICAgICAgIHJldHVybiB0YWc7XHJcblx0ICogICAgICAgICB9XHJcblx0ICogICAgIH0gKTtcclxuXHQgKiAgICAgXHJcblx0ICogICAgIC8vIGdlbmVyYXRlZCBodG1sOlxyXG5cdCAqICAgICAvLyAgIFRlc3QgPGEgaHJlZj1cImh0dHA6Ly9nb29nbGUuY29tXCIgdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9mb2xsb3dcIj5nb29nbGUuY29tPC9hPlxyXG5cdCAqL1xyXG5cdEF1dG9saW5rZXIuQW5jaG9yVGFnQnVpbGRlciA9IEF1dG9saW5rZXIuVXRpbC5leHRlbmQoIE9iamVjdCwge1xyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogQGNmZyB7Qm9vbGVhbn0gbmV3V2luZG93XHJcblx0XHQgKiBAaW5oZXJpdGRvYyBBdXRvbGlua2VyI25ld1dpbmRvd1xyXG5cdFx0ICovXHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBAY2ZnIHtOdW1iZXJ9IHRydW5jYXRlXHJcblx0XHQgKiBAaW5oZXJpdGRvYyBBdXRvbGlua2VyI3RydW5jYXRlXHJcblx0XHQgKi9cclxuXHJcblx0XHQvKipcclxuXHRcdCAqIEBjZmcge1N0cmluZ30gY2xhc3NOYW1lXHJcblx0XHQgKiBAaW5oZXJpdGRvYyBBdXRvbGlua2VyI2NsYXNzTmFtZVxyXG5cdFx0ICovXHJcblxyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogQGNvbnN0cnVjdG9yXHJcblx0XHQgKiBAcGFyYW0ge09iamVjdH0gW2NmZ10gVGhlIGNvbmZpZ3VyYXRpb24gb3B0aW9ucyBmb3IgdGhlIEFuY2hvclRhZ0J1aWxkZXIgaW5zdGFuY2UsIHNwZWNpZmllZCBpbiBhbiBPYmplY3QgKG1hcCkuXHJcblx0XHQgKi9cclxuXHRcdGNvbnN0cnVjdG9yIDogZnVuY3Rpb24oIGNmZyApIHtcclxuXHRcdFx0QXV0b2xpbmtlci5VdGlsLmFzc2lnbiggdGhpcywgY2ZnICk7XHJcblx0XHR9LFxyXG5cclxuXHJcblx0XHQvKipcclxuXHRcdCAqIEdlbmVyYXRlcyB0aGUgYWN0dWFsIGFuY2hvciAoJmx0O2EmZ3Q7KSB0YWcgdG8gdXNlIGluIHBsYWNlIG9mIHRoZSBtYXRjaGVkIFVSTC9lbWFpbC9Ud2l0dGVyIHRleHQsXHJcblx0XHQgKiB2aWEgaXRzIGBtYXRjaGAgb2JqZWN0LlxyXG5cdFx0ICogXHJcblx0XHQgKiBAcGFyYW0ge0F1dG9saW5rZXIubWF0Y2guTWF0Y2h9IG1hdGNoIFRoZSBNYXRjaCBpbnN0YW5jZSB0byBnZW5lcmF0ZSBhbiBhbmNob3IgdGFnIGZyb20uXHJcblx0XHQgKiBAcmV0dXJuIHtBdXRvbGlua2VyLkh0bWxUYWd9IFRoZSBIdG1sVGFnIGluc3RhbmNlIGZvciB0aGUgYW5jaG9yIHRhZy5cclxuXHRcdCAqL1xyXG5cdFx0YnVpbGQgOiBmdW5jdGlvbiggbWF0Y2ggKSB7XHJcblx0XHRcdHZhciB0YWcgPSBuZXcgQXV0b2xpbmtlci5IdG1sVGFnKCB7XHJcblx0XHRcdFx0dGFnTmFtZSAgIDogJ2EnLFxyXG5cdFx0XHRcdGF0dHJzICAgICA6IHRoaXMuY3JlYXRlQXR0cnMoIG1hdGNoLmdldFR5cGUoKSwgbWF0Y2guZ2V0QW5jaG9ySHJlZigpICksXHJcblx0XHRcdFx0aW5uZXJIdG1sIDogdGhpcy5wcm9jZXNzQW5jaG9yVGV4dCggbWF0Y2guZ2V0QW5jaG9yVGV4dCgpIClcclxuXHRcdFx0fSApO1xyXG5cclxuXHRcdFx0cmV0dXJuIHRhZztcclxuXHRcdH0sXHJcblxyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogQ3JlYXRlcyB0aGUgT2JqZWN0IChtYXApIG9mIHRoZSBIVE1MIGF0dHJpYnV0ZXMgZm9yIHRoZSBhbmNob3IgKCZsdDthJmd0OykgdGFnIGJlaW5nIGdlbmVyYXRlZC5cclxuXHRcdCAqIFxyXG5cdFx0ICogQHByb3RlY3RlZFxyXG5cdFx0ICogQHBhcmFtIHtcInVybFwiL1wiZW1haWxcIi9cInR3aXR0ZXJcIn0gbWF0Y2hUeXBlIFRoZSB0eXBlIG9mIG1hdGNoIHRoYXQgYW4gYW5jaG9yIHRhZyBpcyBiZWluZyBnZW5lcmF0ZWQgZm9yLlxyXG5cdFx0ICogQHBhcmFtIHtTdHJpbmd9IGhyZWYgVGhlIGhyZWYgZm9yIHRoZSBhbmNob3IgdGFnLlxyXG5cdFx0ICogQHJldHVybiB7T2JqZWN0fSBBIGtleS92YWx1ZSBPYmplY3QgKG1hcCkgb2YgdGhlIGFuY2hvciB0YWcncyBhdHRyaWJ1dGVzLiBcclxuXHRcdCAqL1xyXG5cdFx0Y3JlYXRlQXR0cnMgOiBmdW5jdGlvbiggbWF0Y2hUeXBlLCBhbmNob3JIcmVmICkge1xyXG5cdFx0XHR2YXIgYXR0cnMgPSB7XHJcblx0XHRcdFx0J2hyZWYnIDogYW5jaG9ySHJlZiAgLy8gd2UnbGwgYWx3YXlzIGhhdmUgdGhlIGBocmVmYCBhdHRyaWJ1dGVcclxuXHRcdFx0fTtcclxuXHJcblx0XHRcdHZhciBjc3NDbGFzcyA9IHRoaXMuY3JlYXRlQ3NzQ2xhc3MoIG1hdGNoVHlwZSApO1xyXG5cdFx0XHRpZiggY3NzQ2xhc3MgKSB7XHJcblx0XHRcdFx0YXR0cnNbICdjbGFzcycgXSA9IGNzc0NsYXNzO1xyXG5cdFx0XHR9XHJcblx0XHRcdGlmKCB0aGlzLm5ld1dpbmRvdyApIHtcclxuXHRcdFx0XHRhdHRyc1sgJ3RhcmdldCcgXSA9IFwiX2JsYW5rXCI7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHJldHVybiBhdHRycztcclxuXHRcdH0sXHJcblxyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogQ3JlYXRlcyB0aGUgQ1NTIGNsYXNzIHRoYXQgd2lsbCBiZSB1c2VkIGZvciBhIGdpdmVuIGFuY2hvciB0YWcsIGJhc2VkIG9uIHRoZSBgbWF0Y2hUeXBlYCBhbmQgdGhlIHtAbGluayAjY2xhc3NOYW1lfVxyXG5cdFx0ICogY29uZmlnLlxyXG5cdFx0ICogXHJcblx0XHQgKiBAcHJpdmF0ZVxyXG5cdFx0ICogQHBhcmFtIHtcInVybFwiL1wiZW1haWxcIi9cInR3aXR0ZXJcIn0gbWF0Y2hUeXBlIFRoZSB0eXBlIG9mIG1hdGNoIHRoYXQgYW4gYW5jaG9yIHRhZyBpcyBiZWluZyBnZW5lcmF0ZWQgZm9yLlxyXG5cdFx0ICogQHJldHVybiB7U3RyaW5nfSBUaGUgQ1NTIGNsYXNzIHN0cmluZyBmb3IgdGhlIGxpbmsuIEV4YW1wbGUgcmV0dXJuOiBcIm15TGluayBteUxpbmstdXJsXCIuIElmIG5vIHtAbGluayAjY2xhc3NOYW1lfVxyXG5cdFx0ICogICB3YXMgY29uZmlndXJlZCwgcmV0dXJucyBhbiBlbXB0eSBzdHJpbmcuXHJcblx0XHQgKi9cclxuXHRcdGNyZWF0ZUNzc0NsYXNzIDogZnVuY3Rpb24oIG1hdGNoVHlwZSApIHtcclxuXHRcdFx0dmFyIGNsYXNzTmFtZSA9IHRoaXMuY2xhc3NOYW1lO1xyXG5cclxuXHRcdFx0aWYoICFjbGFzc05hbWUgKSBcclxuXHRcdFx0XHRyZXR1cm4gXCJcIjtcclxuXHRcdFx0ZWxzZVxyXG5cdFx0XHRcdHJldHVybiBjbGFzc05hbWUgKyBcIiBcIiArIGNsYXNzTmFtZSArIFwiLVwiICsgbWF0Y2hUeXBlOyAgLy8gZXg6IFwibXlMaW5rIG15TGluay11cmxcIiwgXCJteUxpbmsgbXlMaW5rLWVtYWlsXCIsIG9yIFwibXlMaW5rIG15TGluay10d2l0dGVyXCJcclxuXHRcdH0sXHJcblxyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogUHJvY2Vzc2VzIHRoZSBgYW5jaG9yVGV4dGAgYnkgdHJ1bmNhdGluZyB0aGUgdGV4dCBhY2NvcmRpbmcgdG8gdGhlIHtAbGluayAjdHJ1bmNhdGV9IGNvbmZpZy5cclxuXHRcdCAqIFxyXG5cdFx0ICogQHByaXZhdGVcclxuXHRcdCAqIEBwYXJhbSB7U3RyaW5nfSBhbmNob3JUZXh0IFRoZSBhbmNob3IgdGFnJ3MgdGV4dCAoaS5lLiB3aGF0IHdpbGwgYmUgZGlzcGxheWVkKS5cclxuXHRcdCAqIEByZXR1cm4ge1N0cmluZ30gVGhlIHByb2Nlc3NlZCBgYW5jaG9yVGV4dGAuXHJcblx0XHQgKi9cclxuXHRcdHByb2Nlc3NBbmNob3JUZXh0IDogZnVuY3Rpb24oIGFuY2hvclRleHQgKSB7XHJcblx0XHRcdGFuY2hvclRleHQgPSB0aGlzLmRvVHJ1bmNhdGUoIGFuY2hvclRleHQgKTtcclxuXHJcblx0XHRcdHJldHVybiBhbmNob3JUZXh0O1xyXG5cdFx0fSxcclxuXHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBQZXJmb3JtcyB0aGUgdHJ1bmNhdGlvbiBvZiB0aGUgYGFuY2hvclRleHRgLCBpZiB0aGUgYGFuY2hvclRleHRgIGlzIGxvbmdlciB0aGFuIHRoZSB7QGxpbmsgI3RydW5jYXRlfSBvcHRpb24uXHJcblx0XHQgKiBUcnVuY2F0ZXMgdGhlIHRleHQgdG8gMiBjaGFyYWN0ZXJzIGZld2VyIHRoYW4gdGhlIHtAbGluayAjdHJ1bmNhdGV9IG9wdGlvbiwgYW5kIGFkZHMgXCIuLlwiIHRvIHRoZSBlbmQuXHJcblx0XHQgKiBcclxuXHRcdCAqIEBwcml2YXRlXHJcblx0XHQgKiBAcGFyYW0ge1N0cmluZ30gdGV4dCBUaGUgYW5jaG9yIHRhZydzIHRleHQgKGkuZS4gd2hhdCB3aWxsIGJlIGRpc3BsYXllZCkuXHJcblx0XHQgKiBAcmV0dXJuIHtTdHJpbmd9IFRoZSB0cnVuY2F0ZWQgYW5jaG9yIHRleHQuXHJcblx0XHQgKi9cclxuXHRcdGRvVHJ1bmNhdGUgOiBmdW5jdGlvbiggYW5jaG9yVGV4dCApIHtcclxuXHRcdFx0cmV0dXJuIEF1dG9saW5rZXIuVXRpbC5lbGxpcHNpcyggYW5jaG9yVGV4dCwgdGhpcy50cnVuY2F0ZSB8fCBOdW1iZXIuUE9TSVRJVkVfSU5GSU5JVFkgKTtcclxuXHRcdH1cclxuXHJcblx0fSApO1xyXG5cdC8qZ2xvYmFsIEF1dG9saW5rZXIgKi9cclxuXHQvKipcclxuXHQgKiBAYWJzdHJhY3RcclxuXHQgKiBAY2xhc3MgQXV0b2xpbmtlci5tYXRjaC5NYXRjaFxyXG5cdCAqIFxyXG5cdCAqIFJlcHJlc2VudHMgYSBtYXRjaCBmb3VuZCBpbiBhbiBpbnB1dCBzdHJpbmcgd2hpY2ggc2hvdWxkIGJlIEF1dG9saW5rZWQuIEEgTWF0Y2ggb2JqZWN0IGlzIHdoYXQgaXMgcHJvdmlkZWQgaW4gYSBcclxuXHQgKiB7QGxpbmsgQXV0b2xpbmtlciNyZXBsYWNlRm4gcmVwbGFjZUZufSwgYW5kIG1heSBiZSB1c2VkIHRvIHF1ZXJ5IGZvciBkZXRhaWxzIGFib3V0IHRoZSBtYXRjaC5cclxuXHQgKiBcclxuXHQgKiBGb3IgZXhhbXBsZTpcclxuXHQgKiBcclxuXHQgKiAgICAgdmFyIGlucHV0ID0gXCIuLi5cIjsgIC8vIHN0cmluZyB3aXRoIFVSTHMsIEVtYWlsIEFkZHJlc3NlcywgYW5kIFR3aXR0ZXIgSGFuZGxlc1xyXG5cdCAqICAgICBcclxuXHQgKiAgICAgdmFyIGxpbmtlZFRleHQgPSBBdXRvbGlua2VyLmxpbmsoIGlucHV0LCB7XHJcblx0ICogICAgICAgICByZXBsYWNlRm4gOiBmdW5jdGlvbiggYXV0b2xpbmtlciwgbWF0Y2ggKSB7XHJcblx0ICogICAgICAgICAgICAgY29uc29sZS5sb2coIFwiaHJlZiA9IFwiLCBtYXRjaC5nZXRBbmNob3JIcmVmKCkgKTtcclxuXHQgKiAgICAgICAgICAgICBjb25zb2xlLmxvZyggXCJ0ZXh0ID0gXCIsIG1hdGNoLmdldEFuY2hvclRleHQoKSApO1xyXG5cdCAqICAgICAgICAgXHJcblx0ICogICAgICAgICAgICAgc3dpdGNoKCBtYXRjaC5nZXRUeXBlKCkgKSB7XHJcblx0ICogICAgICAgICAgICAgICAgIGNhc2UgJ3VybCcgOiBcclxuXHQgKiAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCBcInVybDogXCIsIG1hdGNoLmdldFVybCgpICk7XHJcblx0ICogICAgICAgICAgICAgICAgICAgICBcclxuXHQgKiAgICAgICAgICAgICAgICAgY2FzZSAnZW1haWwnIDpcclxuXHQgKiAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCBcImVtYWlsOiBcIiwgbWF0Y2guZ2V0RW1haWwoKSApO1xyXG5cdCAqICAgICAgICAgICAgICAgICAgICAgXHJcblx0ICogICAgICAgICAgICAgICAgIGNhc2UgJ3R3aXR0ZXInIDpcclxuXHQgKiAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCBcInR3aXR0ZXI6IFwiLCBtYXRjaC5nZXRUd2l0dGVySGFuZGxlKCkgKTtcclxuXHQgKiAgICAgICAgICAgICB9XHJcblx0ICogICAgICAgICB9XHJcblx0ICogICAgIH0gKTtcclxuXHQgKiAgICAgXHJcblx0ICogU2VlIHRoZSB7QGxpbmsgQXV0b2xpbmtlcn0gY2xhc3MgZm9yIG1vcmUgZGV0YWlscyBvbiB1c2luZyB0aGUge0BsaW5rIEF1dG9saW5rZXIjcmVwbGFjZUZuIHJlcGxhY2VGbn0uXHJcblx0ICovXHJcblx0QXV0b2xpbmtlci5tYXRjaC5NYXRjaCA9IEF1dG9saW5rZXIuVXRpbC5leHRlbmQoIE9iamVjdCwge1xyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogQGNmZyB7U3RyaW5nfSBtYXRjaGVkVGV4dCAocmVxdWlyZWQpXHJcblx0XHQgKiBcclxuXHRcdCAqIFRoZSBvcmlnaW5hbCB0ZXh0IHRoYXQgd2FzIG1hdGNoZWQuXHJcblx0XHQgKi9cclxuXHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBAY29uc3RydWN0b3JcclxuXHRcdCAqIEBwYXJhbSB7T2JqZWN0fSBjZmcgVGhlIGNvbmZpZ3VyYXRpb24gcHJvcGVydGllcyBmb3IgdGhlIE1hdGNoIGluc3RhbmNlLCBzcGVjaWZpZWQgaW4gYW4gT2JqZWN0IChtYXApLlxyXG5cdFx0ICovXHJcblx0XHRjb25zdHJ1Y3RvciA6IGZ1bmN0aW9uKCBjZmcgKSB7XHJcblx0XHRcdEF1dG9saW5rZXIuVXRpbC5hc3NpZ24oIHRoaXMsIGNmZyApO1xyXG5cdFx0fSxcclxuXHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBSZXR1cm5zIGEgc3RyaW5nIG5hbWUgZm9yIHRoZSB0eXBlIG9mIG1hdGNoIHRoYXQgdGhpcyBjbGFzcyByZXByZXNlbnRzLlxyXG5cdFx0ICogXHJcblx0XHQgKiBAYWJzdHJhY3RcclxuXHRcdCAqIEByZXR1cm4ge1N0cmluZ31cclxuXHRcdCAqL1xyXG5cdFx0Z2V0VHlwZSA6IEF1dG9saW5rZXIuVXRpbC5hYnN0cmFjdE1ldGhvZCxcclxuXHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBSZXR1cm5zIHRoZSBvcmlnaW5hbCB0ZXh0IHRoYXQgd2FzIG1hdGNoZWQuXHJcblx0XHQgKiBcclxuXHRcdCAqIEByZXR1cm4ge1N0cmluZ31cclxuXHRcdCAqL1xyXG5cdFx0Z2V0TWF0Y2hlZFRleHQgOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0cmV0dXJuIHRoaXMubWF0Y2hlZFRleHQ7XHJcblx0XHR9LFxyXG5cclxuXHJcblx0XHQvKipcclxuXHRcdCAqIFJldHVybnMgdGhlIGFuY2hvciBocmVmIHRoYXQgc2hvdWxkIGJlIGdlbmVyYXRlZCBmb3IgdGhlIG1hdGNoLlxyXG5cdFx0ICogXHJcblx0XHQgKiBAYWJzdHJhY3RcclxuXHRcdCAqIEByZXR1cm4ge1N0cmluZ31cclxuXHRcdCAqL1xyXG5cdFx0Z2V0QW5jaG9ySHJlZiA6IEF1dG9saW5rZXIuVXRpbC5hYnN0cmFjdE1ldGhvZCxcclxuXHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBSZXR1cm5zIHRoZSBhbmNob3IgdGV4dCB0aGF0IHNob3VsZCBiZSBnZW5lcmF0ZWQgZm9yIHRoZSBtYXRjaC5cclxuXHRcdCAqIFxyXG5cdFx0ICogQGFic3RyYWN0XHJcblx0XHQgKiBAcmV0dXJuIHtTdHJpbmd9XHJcblx0XHQgKi9cclxuXHRcdGdldEFuY2hvclRleHQgOiBBdXRvbGlua2VyLlV0aWwuYWJzdHJhY3RNZXRob2RcclxuXHJcblx0fSApO1xyXG5cdC8qZ2xvYmFsIEF1dG9saW5rZXIgKi9cclxuXHQvKipcclxuXHQgKiBAY2xhc3MgQXV0b2xpbmtlci5tYXRjaC5FbWFpbFxyXG5cdCAqIEBleHRlbmRzIEF1dG9saW5rZXIubWF0Y2guTWF0Y2hcclxuXHQgKiBcclxuXHQgKiBSZXByZXNlbnRzIGEgRW1haWwgbWF0Y2ggZm91bmQgaW4gYW4gaW5wdXQgc3RyaW5nIHdoaWNoIHNob3VsZCBiZSBBdXRvbGlua2VkLlxyXG5cdCAqIFxyXG5cdCAqIFNlZSB0aGlzIGNsYXNzJ3Mgc3VwZXJjbGFzcyAoe0BsaW5rIEF1dG9saW5rZXIubWF0Y2guTWF0Y2h9KSBmb3IgbW9yZSBkZXRhaWxzLlxyXG5cdCAqL1xyXG5cdEF1dG9saW5rZXIubWF0Y2guRW1haWwgPSBBdXRvbGlua2VyLlV0aWwuZXh0ZW5kKCBBdXRvbGlua2VyLm1hdGNoLk1hdGNoLCB7XHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBAY2ZnIHtTdHJpbmd9IGVtYWlsIChyZXF1aXJlZClcclxuXHRcdCAqIFxyXG5cdFx0ICogVGhlIGVtYWlsIGFkZHJlc3MgdGhhdCB3YXMgbWF0Y2hlZC5cclxuXHRcdCAqL1xyXG5cclxuXHJcblx0XHQvKipcclxuXHRcdCAqIFJldHVybnMgYSBzdHJpbmcgbmFtZSBmb3IgdGhlIHR5cGUgb2YgbWF0Y2ggdGhhdCB0aGlzIGNsYXNzIHJlcHJlc2VudHMuXHJcblx0XHQgKiBcclxuXHRcdCAqIEByZXR1cm4ge1N0cmluZ31cclxuXHRcdCAqL1xyXG5cdFx0Z2V0VHlwZSA6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRyZXR1cm4gJ2VtYWlsJztcclxuXHRcdH0sXHJcblxyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogUmV0dXJucyB0aGUgZW1haWwgYWRkcmVzcyB0aGF0IHdhcyBtYXRjaGVkLlxyXG5cdFx0ICogXHJcblx0XHQgKiBAcmV0dXJuIHtTdHJpbmd9XHJcblx0XHQgKi9cclxuXHRcdGdldEVtYWlsIDogZnVuY3Rpb24oKSB7XHJcblx0XHRcdHJldHVybiB0aGlzLmVtYWlsO1xyXG5cdFx0fSxcclxuXHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBSZXR1cm5zIHRoZSBhbmNob3IgaHJlZiB0aGF0IHNob3VsZCBiZSBnZW5lcmF0ZWQgZm9yIHRoZSBtYXRjaC5cclxuXHRcdCAqIFxyXG5cdFx0ICogQHJldHVybiB7U3RyaW5nfVxyXG5cdFx0ICovXHJcblx0XHRnZXRBbmNob3JIcmVmIDogZnVuY3Rpb24oKSB7XHJcblx0XHRcdHJldHVybiAnbWFpbHRvOicgKyB0aGlzLmVtYWlsO1xyXG5cdFx0fSxcclxuXHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBSZXR1cm5zIHRoZSBhbmNob3IgdGV4dCB0aGF0IHNob3VsZCBiZSBnZW5lcmF0ZWQgZm9yIHRoZSBtYXRjaC5cclxuXHRcdCAqIFxyXG5cdFx0ICogQHJldHVybiB7U3RyaW5nfVxyXG5cdFx0ICovXHJcblx0XHRnZXRBbmNob3JUZXh0IDogZnVuY3Rpb24oKSB7XHJcblx0XHRcdHJldHVybiB0aGlzLmVtYWlsO1xyXG5cdFx0fVxyXG5cclxuXHR9ICk7XHJcblx0LypnbG9iYWwgQXV0b2xpbmtlciAqL1xyXG5cdC8qKlxyXG5cdCAqIEBjbGFzcyBBdXRvbGlua2VyLm1hdGNoLlR3aXR0ZXJcclxuXHQgKiBAZXh0ZW5kcyBBdXRvbGlua2VyLm1hdGNoLk1hdGNoXHJcblx0ICogXHJcblx0ICogUmVwcmVzZW50cyBhIFR3aXR0ZXIgbWF0Y2ggZm91bmQgaW4gYW4gaW5wdXQgc3RyaW5nIHdoaWNoIHNob3VsZCBiZSBBdXRvbGlua2VkLlxyXG5cdCAqIFxyXG5cdCAqIFNlZSB0aGlzIGNsYXNzJ3Mgc3VwZXJjbGFzcyAoe0BsaW5rIEF1dG9saW5rZXIubWF0Y2guTWF0Y2h9KSBmb3IgbW9yZSBkZXRhaWxzLlxyXG5cdCAqL1xyXG5cdEF1dG9saW5rZXIubWF0Y2guVHdpdHRlciA9IEF1dG9saW5rZXIuVXRpbC5leHRlbmQoIEF1dG9saW5rZXIubWF0Y2guTWF0Y2gsIHtcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIEBjZmcge1N0cmluZ30gdHdpdHRlckhhbmRsZSAocmVxdWlyZWQpXHJcblx0XHQgKiBcclxuXHRcdCAqIFRoZSBUd2l0dGVyIGhhbmRsZSB0aGF0IHdhcyBtYXRjaGVkLlxyXG5cdFx0ICovXHJcblxyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogUmV0dXJucyB0aGUgdHlwZSBvZiBtYXRjaCB0aGF0IHRoaXMgY2xhc3MgcmVwcmVzZW50cy5cclxuXHRcdCAqIFxyXG5cdFx0ICogQHJldHVybiB7U3RyaW5nfVxyXG5cdFx0ICovXHJcblx0XHRnZXRUeXBlIDogZnVuY3Rpb24oKSB7XHJcblx0XHRcdHJldHVybiAndHdpdHRlcic7XHJcblx0XHR9LFxyXG5cclxuXHJcblx0XHQvKipcclxuXHRcdCAqIFJldHVybnMgYSBzdHJpbmcgbmFtZSBmb3IgdGhlIHR5cGUgb2YgbWF0Y2ggdGhhdCB0aGlzIGNsYXNzIHJlcHJlc2VudHMuXHJcblx0XHQgKiBcclxuXHRcdCAqIEByZXR1cm4ge1N0cmluZ31cclxuXHRcdCAqL1xyXG5cdFx0Z2V0VHdpdHRlckhhbmRsZSA6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRyZXR1cm4gdGhpcy50d2l0dGVySGFuZGxlO1xyXG5cdFx0fSxcclxuXHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBSZXR1cm5zIHRoZSBhbmNob3IgaHJlZiB0aGF0IHNob3VsZCBiZSBnZW5lcmF0ZWQgZm9yIHRoZSBtYXRjaC5cclxuXHRcdCAqIFxyXG5cdFx0ICogQHJldHVybiB7U3RyaW5nfVxyXG5cdFx0ICovXHJcblx0XHRnZXRBbmNob3JIcmVmIDogZnVuY3Rpb24oKSB7XHJcblx0XHRcdHJldHVybiAnaHR0cHM6Ly90d2l0dGVyLmNvbS8nICsgdGhpcy50d2l0dGVySGFuZGxlO1xyXG5cdFx0fSxcclxuXHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBSZXR1cm5zIHRoZSBhbmNob3IgdGV4dCB0aGF0IHNob3VsZCBiZSBnZW5lcmF0ZWQgZm9yIHRoZSBtYXRjaC5cclxuXHRcdCAqIFxyXG5cdFx0ICogQHJldHVybiB7U3RyaW5nfVxyXG5cdFx0ICovXHJcblx0XHRnZXRBbmNob3JUZXh0IDogZnVuY3Rpb24oKSB7XHJcblx0XHRcdHJldHVybiAnQCcgKyB0aGlzLnR3aXR0ZXJIYW5kbGU7XHJcblx0XHR9XHJcblxyXG5cdH0gKTtcclxuXHQvKmdsb2JhbCBBdXRvbGlua2VyICovXHJcblx0LyoqXHJcblx0ICogQGNsYXNzIEF1dG9saW5rZXIubWF0Y2guVXJsXHJcblx0ICogQGV4dGVuZHMgQXV0b2xpbmtlci5tYXRjaC5NYXRjaFxyXG5cdCAqIFxyXG5cdCAqIFJlcHJlc2VudHMgYSBVcmwgbWF0Y2ggZm91bmQgaW4gYW4gaW5wdXQgc3RyaW5nIHdoaWNoIHNob3VsZCBiZSBBdXRvbGlua2VkLlxyXG5cdCAqIFxyXG5cdCAqIFNlZSB0aGlzIGNsYXNzJ3Mgc3VwZXJjbGFzcyAoe0BsaW5rIEF1dG9saW5rZXIubWF0Y2guTWF0Y2h9KSBmb3IgbW9yZSBkZXRhaWxzLlxyXG5cdCAqL1xyXG5cdEF1dG9saW5rZXIubWF0Y2guVXJsID0gQXV0b2xpbmtlci5VdGlsLmV4dGVuZCggQXV0b2xpbmtlci5tYXRjaC5NYXRjaCwge1xyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogQGNmZyB7U3RyaW5nfSB1cmwgKHJlcXVpcmVkKVxyXG5cdFx0ICogXHJcblx0XHQgKiBUaGUgdXJsIHRoYXQgd2FzIG1hdGNoZWQuXHJcblx0XHQgKi9cclxuXHJcblx0XHQvKipcclxuXHRcdCAqIEBjZmcge0Jvb2xlYW59IHByb3RvY29sVXJsTWF0Y2ggKHJlcXVpcmVkKVxyXG5cdFx0ICogXHJcblx0XHQgKiBgdHJ1ZWAgaWYgdGhlIFVSTCBpcyBhIG1hdGNoIHdoaWNoIGFscmVhZHkgaGFzIGEgcHJvdG9jb2wgKGkuZS4gJ2h0dHA6Ly8nKSwgYGZhbHNlYCBpZiB0aGUgbWF0Y2ggd2FzIGZyb20gYSAnd3d3JyBvclxyXG5cdFx0ICoga25vd24gVExEIG1hdGNoLlxyXG5cdFx0ICovXHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBAY2ZnIHtCb29sZWFufSBwcm90b2NvbFJlbGF0aXZlTWF0Y2ggKHJlcXVpcmVkKVxyXG5cdFx0ICogXHJcblx0XHQgKiBgdHJ1ZWAgaWYgdGhlIFVSTCBpcyBhIHByb3RvY29sLXJlbGF0aXZlIG1hdGNoLiBBIHByb3RvY29sLXJlbGF0aXZlIG1hdGNoIGlzIGEgVVJMIHRoYXQgc3RhcnRzIHdpdGggJy8vJyxcclxuXHRcdCAqIGFuZCB3aWxsIGJlIGVpdGhlciBodHRwOi8vIG9yIGh0dHBzOi8vIGJhc2VkIG9uIHRoZSBwcm90b2NvbCB0aGF0IHRoZSBzaXRlIGlzIGxvYWRlZCB1bmRlci5cclxuXHRcdCAqL1xyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogQGNmZyB7Qm9vbGVhbn0gc3RyaXBQcmVmaXggKHJlcXVpcmVkKVxyXG5cdFx0ICogQGluaGVyaXRkb2MgQXV0b2xpbmtlciNzdHJpcFByZWZpeFxyXG5cdFx0ICovXHJcblxyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogQHByaXZhdGVcclxuXHRcdCAqIEBwcm9wZXJ0eSB7UmVnRXhwfSB1cmxQcmVmaXhSZWdleFxyXG5cdFx0ICogXHJcblx0XHQgKiBBIHJlZ3VsYXIgZXhwcmVzc2lvbiB1c2VkIHRvIHJlbW92ZSB0aGUgJ2h0dHA6Ly8nIG9yICdodHRwczovLycgYW5kL29yIHRoZSAnd3d3LicgZnJvbSBVUkxzLlxyXG5cdFx0ICovXHJcblx0XHR1cmxQcmVmaXhSZWdleDogL14oaHR0cHM/OlxcL1xcLyk/KHd3d1xcLik/L2ksXHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBAcHJpdmF0ZVxyXG5cdFx0ICogQHByb3BlcnR5IHtSZWdFeHB9IHByb3RvY29sUmVsYXRpdmVSZWdleFxyXG5cdFx0ICogXHJcblx0XHQgKiBUaGUgcmVndWxhciBleHByZXNzaW9uIHVzZWQgdG8gcmVtb3ZlIHRoZSBwcm90b2NvbC1yZWxhdGl2ZSAnLy8nIGZyb20gdGhlIHtAbGluayAjdXJsfSBzdHJpbmcsIGZvciBwdXJwb3Nlc1xyXG5cdFx0ICogb2Yge0BsaW5rICNnZXRBbmNob3JUZXh0fS4gQSBwcm90b2NvbC1yZWxhdGl2ZSBVUkwgaXMsIGZvciBleGFtcGxlLCBcIi8veWFob28uY29tXCJcclxuXHRcdCAqL1xyXG5cdFx0cHJvdG9jb2xSZWxhdGl2ZVJlZ2V4IDogL15cXC9cXC8vLFxyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogQHByaXZhdGVcclxuXHRcdCAqIEBwcm9wZXJ0eSB7Qm9vbGVhbn0gcHJvdG9jb2xQcmVwZW5kZWRcclxuXHRcdCAqIFxyXG5cdFx0ICogV2lsbCBiZSBzZXQgdG8gYHRydWVgIGlmIHRoZSAnaHR0cDovLycgcHJvdG9jb2wgaGFzIGJlZW4gcHJlcGVuZGVkIHRvIHRoZSB7QGxpbmsgI3VybH0gKGJlY2F1c2UgdGhlXHJcblx0XHQgKiB7QGxpbmsgI3VybH0gZGlkIG5vdCBoYXZlIGEgcHJvdG9jb2wpXHJcblx0XHQgKi9cclxuXHRcdHByb3RvY29sUHJlcGVuZGVkIDogZmFsc2UsXHJcblxyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogUmV0dXJucyBhIHN0cmluZyBuYW1lIGZvciB0aGUgdHlwZSBvZiBtYXRjaCB0aGF0IHRoaXMgY2xhc3MgcmVwcmVzZW50cy5cclxuXHRcdCAqIFxyXG5cdFx0ICogQHJldHVybiB7U3RyaW5nfVxyXG5cdFx0ICovXHJcblx0XHRnZXRUeXBlIDogZnVuY3Rpb24oKSB7XHJcblx0XHRcdHJldHVybiAndXJsJztcclxuXHRcdH0sXHJcblxyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogUmV0dXJucyB0aGUgdXJsIHRoYXQgd2FzIG1hdGNoZWQsIGFzc3VtaW5nIHRoZSBwcm90b2NvbCB0byBiZSAnaHR0cDovLycgaWYgdGhlIG9yaWdpbmFsXHJcblx0XHQgKiBtYXRjaCB3YXMgbWlzc2luZyBhIHByb3RvY29sLlxyXG5cdFx0ICogXHJcblx0XHQgKiBAcmV0dXJuIHtTdHJpbmd9XHJcblx0XHQgKi9cclxuXHRcdGdldFVybCA6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHR2YXIgdXJsID0gdGhpcy51cmw7XHJcblxyXG5cdFx0XHQvLyBpZiB0aGUgdXJsIHN0cmluZyBkb2Vzbid0IGJlZ2luIHdpdGggYSBwcm90b2NvbCwgYXNzdW1lICdodHRwOi8vJ1xyXG5cdFx0XHRpZiggIXRoaXMucHJvdG9jb2xSZWxhdGl2ZU1hdGNoICYmICF0aGlzLnByb3RvY29sVXJsTWF0Y2ggJiYgIXRoaXMucHJvdG9jb2xQcmVwZW5kZWQgKSB7XHJcblx0XHRcdFx0dXJsID0gdGhpcy51cmwgPSAnaHR0cDovLycgKyB1cmw7XHJcblxyXG5cdFx0XHRcdHRoaXMucHJvdG9jb2xQcmVwZW5kZWQgPSB0cnVlO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRyZXR1cm4gdXJsO1xyXG5cdFx0fSxcclxuXHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBSZXR1cm5zIHRoZSBhbmNob3IgaHJlZiB0aGF0IHNob3VsZCBiZSBnZW5lcmF0ZWQgZm9yIHRoZSBtYXRjaC5cclxuXHRcdCAqIFxyXG5cdFx0ICogQHJldHVybiB7U3RyaW5nfVxyXG5cdFx0ICovXHJcblx0XHRnZXRBbmNob3JIcmVmIDogZnVuY3Rpb24oKSB7XHJcblx0XHRcdHZhciB1cmwgPSB0aGlzLmdldFVybCgpO1xyXG5cclxuXHRcdFx0cmV0dXJuIHVybC5yZXBsYWNlKCAvJmFtcDsvZywgJyYnICk7ICAvLyBhbnkgJmFtcDsncyBpbiB0aGUgVVJMIHNob3VsZCBiZSBjb252ZXJ0ZWQgYmFjayB0byAnJicgaWYgdGhleSB3ZXJlIGRpc3BsYXllZCBhcyAmYW1wOyBpbiB0aGUgc291cmNlIGh0bWwgXHJcblx0XHR9LFxyXG5cclxuXHJcblx0XHQvKipcclxuXHRcdCAqIFJldHVybnMgdGhlIGFuY2hvciB0ZXh0IHRoYXQgc2hvdWxkIGJlIGdlbmVyYXRlZCBmb3IgdGhlIG1hdGNoLlxyXG5cdFx0ICogXHJcblx0XHQgKiBAcmV0dXJuIHtTdHJpbmd9XHJcblx0XHQgKi9cclxuXHRcdGdldEFuY2hvclRleHQgOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0dmFyIGFuY2hvclRleHQgPSB0aGlzLmdldFVybCgpO1xyXG5cclxuXHRcdFx0aWYoIHRoaXMucHJvdG9jb2xSZWxhdGl2ZU1hdGNoICkge1xyXG5cdFx0XHRcdC8vIFN0cmlwIG9mZiBhbnkgcHJvdG9jb2wtcmVsYXRpdmUgJy8vJyBmcm9tIHRoZSBhbmNob3IgdGV4dFxyXG5cdFx0XHRcdGFuY2hvclRleHQgPSB0aGlzLnN0cmlwUHJvdG9jb2xSZWxhdGl2ZVByZWZpeCggYW5jaG9yVGV4dCApO1xyXG5cdFx0XHR9XHJcblx0XHRcdGlmKCB0aGlzLnN0cmlwUHJlZml4ICkge1xyXG5cdFx0XHRcdGFuY2hvclRleHQgPSB0aGlzLnN0cmlwVXJsUHJlZml4KCBhbmNob3JUZXh0ICk7XHJcblx0XHRcdH1cclxuXHRcdFx0YW5jaG9yVGV4dCA9IHRoaXMucmVtb3ZlVHJhaWxpbmdTbGFzaCggYW5jaG9yVGV4dCApOyAgLy8gcmVtb3ZlIHRyYWlsaW5nIHNsYXNoLCBpZiB0aGVyZSBpcyBvbmVcclxuXHJcblx0XHRcdHJldHVybiBhbmNob3JUZXh0O1xyXG5cdFx0fSxcclxuXHJcblxyXG5cdFx0Ly8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5cdFx0Ly8gVXRpbGl0eSBGdW5jdGlvbmFsaXR5XHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBTdHJpcHMgdGhlIFVSTCBwcmVmaXggKHN1Y2ggYXMgXCJodHRwOi8vXCIgb3IgXCJodHRwczovL1wiKSBmcm9tIHRoZSBnaXZlbiB0ZXh0LlxyXG5cdFx0ICogXHJcblx0XHQgKiBAcHJpdmF0ZVxyXG5cdFx0ICogQHBhcmFtIHtTdHJpbmd9IHRleHQgVGhlIHRleHQgb2YgdGhlIGFuY2hvciB0aGF0IGlzIGJlaW5nIGdlbmVyYXRlZCwgZm9yIHdoaWNoIHRvIHN0cmlwIG9mZiB0aGVcclxuXHRcdCAqICAgdXJsIHByZWZpeCAoc3VjaCBhcyBzdHJpcHBpbmcgb2ZmIFwiaHR0cDovL1wiKVxyXG5cdFx0ICogQHJldHVybiB7U3RyaW5nfSBUaGUgYGFuY2hvclRleHRgLCB3aXRoIHRoZSBwcmVmaXggc3RyaXBwZWQuXHJcblx0XHQgKi9cclxuXHRcdHN0cmlwVXJsUHJlZml4IDogZnVuY3Rpb24oIHRleHQgKSB7XHJcblx0XHRcdHJldHVybiB0ZXh0LnJlcGxhY2UoIHRoaXMudXJsUHJlZml4UmVnZXgsICcnICk7XHJcblx0XHR9LFxyXG5cclxuXHJcblx0XHQvKipcclxuXHRcdCAqIFN0cmlwcyBhbnkgcHJvdG9jb2wtcmVsYXRpdmUgJy8vJyBmcm9tIHRoZSBhbmNob3IgdGV4dC5cclxuXHRcdCAqIFxyXG5cdFx0ICogQHByaXZhdGVcclxuXHRcdCAqIEBwYXJhbSB7U3RyaW5nfSB0ZXh0IFRoZSB0ZXh0IG9mIHRoZSBhbmNob3IgdGhhdCBpcyBiZWluZyBnZW5lcmF0ZWQsIGZvciB3aGljaCB0byBzdHJpcCBvZmYgdGhlXHJcblx0XHQgKiAgIHByb3RvY29sLXJlbGF0aXZlIHByZWZpeCAoc3VjaCBhcyBzdHJpcHBpbmcgb2ZmIFwiLy9cIilcclxuXHRcdCAqIEByZXR1cm4ge1N0cmluZ30gVGhlIGBhbmNob3JUZXh0YCwgd2l0aCB0aGUgcHJvdG9jb2wtcmVsYXRpdmUgcHJlZml4IHN0cmlwcGVkLlxyXG5cdFx0ICovXHJcblx0XHRzdHJpcFByb3RvY29sUmVsYXRpdmVQcmVmaXggOiBmdW5jdGlvbiggdGV4dCApIHtcclxuXHRcdFx0cmV0dXJuIHRleHQucmVwbGFjZSggdGhpcy5wcm90b2NvbFJlbGF0aXZlUmVnZXgsICcnICk7XHJcblx0XHR9LFxyXG5cclxuXHJcblx0XHQvKipcclxuXHRcdCAqIFJlbW92ZXMgYW55IHRyYWlsaW5nIHNsYXNoIGZyb20gdGhlIGdpdmVuIGBhbmNob3JUZXh0YCwgaW4gcHJlcGFyYXRpb24gZm9yIHRoZSB0ZXh0IHRvIGJlIGRpc3BsYXllZC5cclxuXHRcdCAqIFxyXG5cdFx0ICogQHByaXZhdGVcclxuXHRcdCAqIEBwYXJhbSB7U3RyaW5nfSBhbmNob3JUZXh0IFRoZSB0ZXh0IG9mIHRoZSBhbmNob3IgdGhhdCBpcyBiZWluZyBnZW5lcmF0ZWQsIGZvciB3aGljaCB0byByZW1vdmUgYW55IHRyYWlsaW5nXHJcblx0XHQgKiAgIHNsYXNoICgnLycpIHRoYXQgbWF5IGV4aXN0LlxyXG5cdFx0ICogQHJldHVybiB7U3RyaW5nfSBUaGUgYGFuY2hvclRleHRgLCB3aXRoIHRoZSB0cmFpbGluZyBzbGFzaCByZW1vdmVkLlxyXG5cdFx0ICovXHJcblx0XHRyZW1vdmVUcmFpbGluZ1NsYXNoIDogZnVuY3Rpb24oIGFuY2hvclRleHQgKSB7XHJcblx0XHRcdGlmKCBhbmNob3JUZXh0LmNoYXJBdCggYW5jaG9yVGV4dC5sZW5ndGggLSAxICkgPT09ICcvJyApIHtcclxuXHRcdFx0XHRhbmNob3JUZXh0ID0gYW5jaG9yVGV4dC5zbGljZSggMCwgLTEgKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm4gYW5jaG9yVGV4dDtcclxuXHRcdH1cclxuXHJcblx0fSApO1xyXG5cclxuXHRyZXR1cm4gQXV0b2xpbmtlcjtcclxuXHJcblxyXG59KSk7XHJcbiIsIlxudmFyIEF1dGhlbnRpY2F0aW9uID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICBnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXNlcm5hbWU6IHRoaXMucHJvcHMudXNlcm5hbWUgfHwgbnVsbFxuICAgIH07XG4gIH0sXG4gIGhhbmRsZVN1Ym1pdDogZnVuY3Rpb24gKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgdmFyIHVzZXJuYW1lID0gdGhpcy5yZWZzLnVzZXJuYW1lLmdldERPTU5vZGUoKS52YWx1ZS50cmltKCk7XG4gICAgaWYgKCF1c2VybmFtZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnNldFN0YXRlKHt1c2VybmFtZTogdXNlcm5hbWV9KTtcbiAgICB0aGlzLnJlZnMudXNlcm5hbWUuZ2V0RE9NTm9kZSgpLnZhbHVlID0gJyc7XG4gICAgdGhpcy5wcm9wcy5vblNpZ25vblN1Ym1pdCh7dXNlcm5hbWU6IHVzZXJuYW1lfSk7XG4gIH0sXG4gIGhhbmRsZUxvZ291dDogZnVuY3Rpb24gKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgdmFyIHVzZXJuYW1lID0gdGhpcy5zdGF0ZS51c2VybmFtZTtcbiAgICB0aGlzLnNldFN0YXRlKHt1c2VybmFtZTogbnVsbH0pO1xuICAgIHRoaXMucHJvcHMub25TaWdub3V0U3VibWl0KHt1c2VybmFtZTogdXNlcm5hbWV9KTtcbiAgfSxcbiAgcmVuZGVyOiBmdW5jdGlvbigpIHtcbiAgICB2YXIgb3V0cHV0ID0gbnVsbDtcbiAgICBpZiAodGhpcy5zdGF0ZS51c2VybmFtZSkge1xuICAgICAgb3V0cHV0ID0gKFxuICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJuYXZiYXItZm9ybSBuYXZiYXItcmlnaHRcIiBvblN1Ym1pdD17dGhpcy5oYW5kbGVMb2dvdXR9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgPHNwYW4+TG9nZ2VkIGluIGFzIHt0aGlzLnN0YXRlLnVzZXJuYW1lfTwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIj5TaWduIG91dDwvYnV0dG9uPlxuICAgICAgICA8L2Zvcm0+XG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICBvdXRwdXQgPSAoXG4gICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cIm5hdmJhci1mb3JtIG5hdmJhci1yaWdodFwiIG9uU3VibWl0PXt0aGlzLmhhbmRsZVN1Ym1pdH0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIk5hbWVcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiByZWY9XCJ1c2VybmFtZVwiIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCI+U2lnbiBpbjwvYnV0dG9uPlxuICAgICAgICA8L2Zvcm0+XG4gICAgICApO1xuICAgIH1cbiAgICByZXR1cm4gb3V0cHV0O1xuICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBBdXRoZW50aWNhdGlvbjtcbiIsIlxudmFyIFJlbWFya2FibGUgPSByZXF1aXJlKCdyZW1hcmthYmxlJyk7XG52YXIgbWQgPSBuZXcgUmVtYXJrYWJsZSgpO1xuXG52YXIgQ29tbWVudCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgcmVuZGVyOiBmdW5jdGlvbigpIHtcbiAgICB2YXIgcmF3TWFya3VwID0gbWQucmVuZGVyKFtcbiAgICAgICcqJyxcbiAgICAgIHRoaXMucHJvcHMuY2hpbGRyZW4udG9TdHJpbmcoKSxcbiAgICAgICcqJ1xuICAgIF0uam9pbignJykpO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbW1lbnRcIj5cbiAgICAgICAgPGg1IGNsYXNzTmFtZT1cImNvbW1lbnRVc2VyXCI+e3RoaXMucHJvcHMudXNlcm5hbWV9PC9oNT5cbiAgICAgICAgPHNwYW4gZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tfX2h0bWw6IHJhd01hcmt1cH19IC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59KTtcblxuLy8gQ3JlYXRlIGEgZm9ybSB0aGF0IGFsbG93cyBhZGRpbmcgYSBuZXcgY29tbWVudFxudmFyIENvbW1lbnRGb3JtID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICBnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXNlcm5hbWU6IHRoaXMucHJvcHMudXNlcm5hbWVcbiAgICB9O1xuICB9LFxuICBoYW5kbGVTdWJtaXQ6IGZ1bmN0aW9uIChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHZhciB1c2VybmFtZSA9IHRoaXMuc3RhdGUudXNlcm5hbWUgfHwgdGhpcy5wcm9wcy51c2VybmFtZTtcbiAgICB2YXIgdGV4dCA9IHRoaXMucmVmcy50ZXh0LmdldERPTU5vZGUoKS52YWx1ZS50cmltKCk7XG4gICAgY29uc29sZS5sb2codXNlcm5hbWUsIHRleHQpO1xuICAgIGlmICghdGV4dCB8fCAhdXNlcm5hbWUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5wcm9wcy5vbkNvbW1lbnRTdWJtaXQoe3VzZXJuYW1lOiB1c2VybmFtZSwgdGV4dDogdGV4dH0pO1xuICAgIHRoaXMucmVmcy50ZXh0LmdldERPTU5vZGUoKS52YWx1ZSA9ICcnO1xuICB9LFxuICByZW5kZXI6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS0xMlwiPlxuICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cImNvbW1lbnRGb3JtXCIgb25TdWJtaXQ9e3RoaXMuaGFuZGxlU3VibWl0fT5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiU2F5IHNvbWV0aGluZy4uLlwiIHJlZj1cInRleHRcIiAvPlxuICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImJ0biBidG4ucHJpbWFyeVwiIHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIlNlbmRcIiAvPlxuICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59KTtcblxuLy8gUmVuZGVyIGEgbGlzdCBvZiBjb21tZW50c1xudmFyIENvbW1lbnRMaXN0ID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICByZW5kZXI6IGZ1bmN0aW9uKCkge1xuICAgIHZhciBjb21tZW50Tm9kZXMgPSB0aGlzLnByb3BzLmNvbW1lbnRzLm1hcChmdW5jdGlvbiAoY29tbWVudCkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPENvbW1lbnQga2V5PXtjb21tZW50LmtleX0gdXNlcm5hbWU9e2NvbW1lbnQudXNlcm5hbWV9PlxuICAgICAgICAgIHtjb21tZW50LnRleHR9XG4gICAgICAgIDwvQ29tbWVudD5cbiAgICAgICk7XG4gICAgfSk7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTEyXCI+XG4gICAgICAgICAge2NvbW1lbnROb2Rlc31cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59KTtcblxudmFyIENoYXQgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIGxvYWRDb21tZW50c0Zyb21TZXJ2ZXI6IGZ1bmN0aW9uICgpIHtcbiAgICAvLyBUT0RPOiBnZXQgZnJvbSBzZXJ2ZXJcbiAgICB2YXIgY29tbWVudHMgPSB0aGlzLnN0YXRlLmNvbW1lbnRzO1xuICAgIHZhciB1c2VybmFtZSA9IHRoaXMuc3RhdGUudXNlcm5hbWUgfHwgdGhpcy5wcm9wcy51c2VybmFtZTtcbiAgICB0aGlzLnNldFN0YXRlKHtjb21tZW50czogY29tbWVudHMsIHVzZXJuYW1lOiB1c2VybmFtZX0pO1xuICB9LFxuICBoYW5kbGVDb21tZW50U3VibWl0OiBmdW5jdGlvbiAoY29tbWVudCkge1xuICAgIHZhciB1c2VybmFtZSA9IHRoaXMuc3RhdGUudXNlcm5hbWUgfHwgdGhpcy5wcm9wcy51c2VybmFtZTtcbiAgICB2YXIgY29tbWVudHMgPSB0aGlzLnN0YXRlLmNvbW1lbnRzO1xuICAgIHZhciBuZXdDb21tZW50cyA9IGNvbW1lbnRzLmNvbmNhdChbY29tbWVudF0pO1xuICAgIHRoaXMuc2V0U3RhdGUoe3VzZXJuYW1lOiB1c2VybmFtZSwgY29tbWVudHM6IG5ld0NvbW1lbnRzfSk7XG4gIH0sXG4gIGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB7XG4gICAgICBjb21tZW50czogdGhpcy5wcm9wcy5jb21tZW50cyB8fCBbXSxcbiAgICAgIHVzZXJuYW1lOiB0aGlzLnByb3BzLnVzZXJuYW1lXG4gICAgfTtcbiAgfSxcbiAgY29tcG9uZW50RGlkTW91bnQ6IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmxvYWRDb21tZW50c0Zyb21TZXJ2ZXIoKTtcbiAgICBzZXRJbnRlcnZhbCh0aGlzLmxvYWRDb21tZW50c0Zyb21TZXJ2ZXIsIHRoaXMucHJvcHMucG9sbEludGVydmFsKTtcbiAgfSxcbiAgcmVuZGVyOiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHVzZXJuYW1lID0gdGhpcy5zdGF0ZS51c2VybmFtZSB8fCB0aGlzLnByb3BzLnVzZXJuYW1lO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8Q29tbWVudExpc3QgY29tbWVudHM9e3RoaXMuc3RhdGUuY29tbWVudHN9IC8+XG4gICAgICAgIDxDb21tZW50Rm9ybSBvbkNvbW1lbnRTdWJtaXQ9e3RoaXMuaGFuZGxlQ29tbWVudFN1Ym1pdH0gdXNlcm5hbWU9e3VzZXJuYW1lfSAvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gQ2hhdDtcbiIsIlxudmFyIFVzZXJMaXN0ID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICByZW5kZXI6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5Ob3RoaW5nIHRvIHNlZSBoZXJlPC9kaXY+XG4gICAgKTtcbiAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gVXNlckxpc3Q7XG4iXX0=
