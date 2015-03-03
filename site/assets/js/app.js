(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var Authentication = require('./apps/Authentication.jsx');
var UserList = require('./apps/UserList.jsx');
var Chat = require('./apps/Chat.jsx');

var data = {
  username: null
};


function onSignonSubmit (user) {
  data.username = user.username;
  if (!users[data.username]) {
    users[data.username] = 1;
  }
  console.log('data.username', data.username);
  $.ajax({
    url: '/api/users',
    dataType: 'json',
    contentType: 'application/json',
    type: 'POST',
    data: JSON.stringify({ username: data.username }),
    success: function(data) {
      console.log('user online');
    }.bind(this),
    error: function(xhr, status, err) {
      console.error('/api/users', status, err.toString());
    }.bind(this)
  });
  renderAll();
}

function onSignoutSubmit (user) {
  var username = data.username;
  if (users[data.username]) {
    delete users[data.username];
  }
  data.username = null;
  $.ajax({
    url: '/api/users/' + username,
    dataType: 'json',
    type: 'DELETE',
    success: function(data) {
      console.log('user offline');
    }.bind(this),
    error: function(xhr, status, err) {
      console.error('/api/users', status, err.toString());
    }.bind(this)
  });
  renderAll();
}

var comments = [];
var users = {};

function renderAll () {
  renderAuthentication();
  renderUserList();
  renderChat();
}

function renderChat () {
  React.render(
    React.createElement(Chat, {comments: comments, username: data.username, pollInterval: 2000}),
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
    React.createElement(UserList, {users: users, pollInterval: 2000}),
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
    var username = this.props.username;
    var text = this.refs.text.getDOMNode().value.trim();
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
    $.ajax({
      url: '/api/comments',
      dataType: 'json',
      success: function(data) {
        this.setState({comments: data.comments});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error('/api/comments', status, err.toString());
      }.bind(this)
    });
  },
  handleCommentSubmit: function (comment) {
    var username = this.props.username;
    var comments = this.state.comments;
    var newComments = comments.concat([comment]);
    this.setState({username: username, comments: newComments});
    $.ajax({
      url: '/api/comments',
      dataType: 'json',
      contentType: 'application/json',
      type: 'POST',
      data: JSON.stringify(comment),
      success: function (data) {
        this.setState({comments: data.comments});
      }.bind(this),
      error: function (xhr, stauts, err) {
        console.error('/api/comments', status.err.toString());
      }.bind(this)
    });
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
    var username = this.props.username;
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

var User = React.createClass({displayName: "User",
  render: function() {
    return (
      React.createElement("li", null, this.props.username)
    );
  }
});

var UserList = React.createClass({displayName: "UserList",
  loadUsersFromServer: function () {
    // TODO: get from server
    $.ajax({
      url: '/api/users',
      dataType: 'json',
      success: function(data) {
        this.setState({users: data.users});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error('/api/users', status, err.toString());
      }.bind(this)
    });
  },
  getInitialState: function () {
    return {
      users: this.props.users
    };
  },
  componentDidMount: function () {
    this.loadUsersFromServer();
    setInterval(this.loadUsersFromServer, this.props.pollInterval);
  },
  render: function() {
    var users = this.state.users || {};
    var keys = Object.keys(users);
    var userNodes = keys.filter(function (key) {
      return users[key];
    }).map(function (key) {
      if (!users[key]) return;
      return (
        React.createElement(User, {key: key, username: key})
      );
    });
    return (
      React.createElement("div", {className: "row"}, 
        React.createElement("div", {className: "col-sm-12"}, 
          React.createElement("ul", null, 
            userNodes
          )
        )
      )
    );
  }
});

module.exports = UserList;


},{}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvZG9vd2Ivd29yay9kb293Yi9zZXJ2ZXItc2lkZS1yZWFjdC9zcmMvY2xpZW50L21haW4uanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvcmVtYXJrYWJsZS9pbmRleC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9yZW1hcmthYmxlL2xpYi9jb21tb24vZW50aXRpZXMuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvcmVtYXJrYWJsZS9saWIvY29tbW9uL2h0bWxfYmxvY2tzLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL3JlbWFya2FibGUvbGliL2NvbW1vbi9odG1sX3JlLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL3JlbWFya2FibGUvbGliL2NvbW1vbi91cmxfc2NoZW1hcy5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9yZW1hcmthYmxlL2xpYi9jb21tb24vdXRpbHMuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvcmVtYXJrYWJsZS9saWIvY29uZmlncy9jb21tb25tYXJrLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL3JlbWFya2FibGUvbGliL2NvbmZpZ3MvZGVmYXVsdC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9yZW1hcmthYmxlL2xpYi9jb25maWdzL2Z1bGwuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvcmVtYXJrYWJsZS9saWIvaGVscGVycy9ub3JtYWxpemVfbGluay5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9yZW1hcmthYmxlL2xpYi9oZWxwZXJzL25vcm1hbGl6ZV9yZWZlcmVuY2UuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvcmVtYXJrYWJsZS9saWIvaGVscGVycy9wYXJzZV9saW5rX2Rlc3RpbmF0aW9uLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL3JlbWFya2FibGUvbGliL2hlbHBlcnMvcGFyc2VfbGlua19sYWJlbC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9yZW1hcmthYmxlL2xpYi9oZWxwZXJzL3BhcnNlX2xpbmtfdGl0bGUuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvcmVtYXJrYWJsZS9saWIvaW5kZXguanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvcmVtYXJrYWJsZS9saWIvcGFyc2VyX2Jsb2NrLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL3JlbWFya2FibGUvbGliL3BhcnNlcl9jb3JlLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL3JlbWFya2FibGUvbGliL3BhcnNlcl9pbmxpbmUuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvcmVtYXJrYWJsZS9saWIvcmVuZGVyZXIuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvcmVtYXJrYWJsZS9saWIvcnVsZXIuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvcmVtYXJrYWJsZS9saWIvcnVsZXMuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvcmVtYXJrYWJsZS9saWIvcnVsZXNfYmxvY2svYmxvY2txdW90ZS5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9yZW1hcmthYmxlL2xpYi9ydWxlc19ibG9jay9jb2RlLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL3JlbWFya2FibGUvbGliL3J1bGVzX2Jsb2NrL2RlZmxpc3QuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvcmVtYXJrYWJsZS9saWIvcnVsZXNfYmxvY2svZmVuY2VzLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL3JlbWFya2FibGUvbGliL3J1bGVzX2Jsb2NrL2Zvb3Rub3RlLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL3JlbWFya2FibGUvbGliL3J1bGVzX2Jsb2NrL2hlYWRpbmcuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvcmVtYXJrYWJsZS9saWIvcnVsZXNfYmxvY2svaHIuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvcmVtYXJrYWJsZS9saWIvcnVsZXNfYmxvY2svaHRtbGJsb2NrLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL3JlbWFya2FibGUvbGliL3J1bGVzX2Jsb2NrL2xoZWFkaW5nLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL3JlbWFya2FibGUvbGliL3J1bGVzX2Jsb2NrL2xpc3QuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvcmVtYXJrYWJsZS9saWIvcnVsZXNfYmxvY2svcGFyYWdyYXBoLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL3JlbWFya2FibGUvbGliL3J1bGVzX2Jsb2NrL3N0YXRlX2Jsb2NrLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL3JlbWFya2FibGUvbGliL3J1bGVzX2Jsb2NrL3RhYmxlLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL3JlbWFya2FibGUvbGliL3J1bGVzX2NvcmUvYWJici5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9yZW1hcmthYmxlL2xpYi9ydWxlc19jb3JlL2FiYnIyLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL3JlbWFya2FibGUvbGliL3J1bGVzX2NvcmUvYmxvY2suanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvcmVtYXJrYWJsZS9saWIvcnVsZXNfY29yZS9mb290bm90ZV90YWlsLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL3JlbWFya2FibGUvbGliL3J1bGVzX2NvcmUvaW5saW5lLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL3JlbWFya2FibGUvbGliL3J1bGVzX2NvcmUvbGlua2lmeS5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9yZW1hcmthYmxlL2xpYi9ydWxlc19jb3JlL3JlZmVyZW5jZXMuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvcmVtYXJrYWJsZS9saWIvcnVsZXNfY29yZS9yZXBsYWNlbWVudHMuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvcmVtYXJrYWJsZS9saWIvcnVsZXNfY29yZS9zbWFydHF1b3Rlcy5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9yZW1hcmthYmxlL2xpYi9ydWxlc19pbmxpbmUvYXV0b2xpbmsuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvcmVtYXJrYWJsZS9saWIvcnVsZXNfaW5saW5lL2JhY2t0aWNrcy5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9yZW1hcmthYmxlL2xpYi9ydWxlc19pbmxpbmUvZGVsLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL3JlbWFya2FibGUvbGliL3J1bGVzX2lubGluZS9lbXBoYXNpcy5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9yZW1hcmthYmxlL2xpYi9ydWxlc19pbmxpbmUvZW50aXR5LmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL3JlbWFya2FibGUvbGliL3J1bGVzX2lubGluZS9lc2NhcGUuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvcmVtYXJrYWJsZS9saWIvcnVsZXNfaW5saW5lL2Zvb3Rub3RlX2lubGluZS5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9yZW1hcmthYmxlL2xpYi9ydWxlc19pbmxpbmUvZm9vdG5vdGVfcmVmLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL3JlbWFya2FibGUvbGliL3J1bGVzX2lubGluZS9odG1sdGFnLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL3JlbWFya2FibGUvbGliL3J1bGVzX2lubGluZS9pbnMuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvcmVtYXJrYWJsZS9saWIvcnVsZXNfaW5saW5lL2xpbmtzLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL3JlbWFya2FibGUvbGliL3J1bGVzX2lubGluZS9tYXJrLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL3JlbWFya2FibGUvbGliL3J1bGVzX2lubGluZS9uZXdsaW5lLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL3JlbWFya2FibGUvbGliL3J1bGVzX2lubGluZS9zdGF0ZV9pbmxpbmUuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvcmVtYXJrYWJsZS9saWIvcnVsZXNfaW5saW5lL3N1Yi5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9yZW1hcmthYmxlL2xpYi9ydWxlc19pbmxpbmUvc3VwLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL3JlbWFya2FibGUvbGliL3J1bGVzX2lubGluZS90ZXh0LmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL3JlbWFya2FibGUvbm9kZV9tb2R1bGVzL2F1dG9saW5rZXIvZGlzdC9BdXRvbGlua2VyLmpzIiwiL1VzZXJzL2Rvb3diL3dvcmsvZG9vd2Ivc2VydmVyLXNpZGUtcmVhY3Qvc3JjL2NsaWVudC9hcHBzL0F1dGhlbnRpY2F0aW9uLmpzeCIsIi9Vc2Vycy9kb293Yi93b3JrL2Rvb3diL3NlcnZlci1zaWRlLXJlYWN0L3NyYy9jbGllbnQvYXBwcy9DaGF0LmpzeCIsIi9Vc2Vycy9kb293Yi93b3JrL2Rvb3diL3NlcnZlci1zaWRlLXJlYWN0L3NyYy9jbGllbnQvYXBwcy9Vc2VyTGlzdC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQSxJQUFJLGNBQWMsR0FBRyxPQUFPLENBQUMsMkJBQTJCLENBQUMsQ0FBQztBQUMxRCxJQUFJLFFBQVEsR0FBRyxPQUFPLENBQUMscUJBQXFCLENBQUMsQ0FBQztBQUM5QyxJQUFJLElBQUksR0FBRyxPQUFPLENBQUMsaUJBQWlCLENBQUMsQ0FBQzs7QUFFdEMsSUFBSSxJQUFJLEdBQUc7RUFDVCxRQUFRLEVBQUUsSUFBSTtBQUNoQixDQUFDLENBQUM7QUFDRjs7QUFFQSxTQUFTLGNBQWMsRUFBRSxJQUFJLEVBQUU7RUFDN0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO0VBQzlCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFO0lBQ3pCLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0dBQzFCO0VBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0VBQzVDLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFDTCxHQUFHLEVBQUUsWUFBWTtJQUNqQixRQUFRLEVBQUUsTUFBTTtJQUNoQixXQUFXLEVBQUUsa0JBQWtCO0lBQy9CLElBQUksRUFBRSxNQUFNO0lBQ1osSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ2pELE9BQU8sRUFBRSxTQUFTLElBQUksRUFBRTtNQUN0QixPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0tBQzVCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztJQUNaLEtBQUssRUFBRSxTQUFTLEdBQUcsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFO01BQ2hDLE9BQU8sQ0FBQyxLQUFLLENBQUMsWUFBWSxFQUFFLE1BQU0sRUFBRSxHQUFHLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztLQUNyRCxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7R0FDYixDQUFDLENBQUM7RUFDSCxTQUFTLEVBQUUsQ0FBQztBQUNkLENBQUM7O0FBRUQsU0FBUyxlQUFlLEVBQUUsSUFBSSxFQUFFO0VBQzlCLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7RUFDN0IsSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFO0lBQ3hCLE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztHQUM3QjtFQUNELElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO0VBQ3JCLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFDTCxHQUFHLEVBQUUsYUFBYSxHQUFHLFFBQVE7SUFDN0IsUUFBUSxFQUFFLE1BQU07SUFDaEIsSUFBSSxFQUFFLFFBQVE7SUFDZCxPQUFPLEVBQUUsU0FBUyxJQUFJLEVBQUU7TUFDdEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQztLQUM3QixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDWixLQUFLLEVBQUUsU0FBUyxHQUFHLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRTtNQUNoQyxPQUFPLENBQUMsS0FBSyxDQUFDLFlBQVksRUFBRSxNQUFNLEVBQUUsR0FBRyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7S0FDckQsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO0dBQ2IsQ0FBQyxDQUFDO0VBQ0gsU0FBUyxFQUFFLENBQUM7QUFDZCxDQUFDOztBQUVELElBQUksUUFBUSxHQUFHLEVBQUUsQ0FBQztBQUNsQixJQUFJLEtBQUssR0FBRyxFQUFFLENBQUM7O0FBRWYsU0FBUyxTQUFTLElBQUk7RUFDcEIsb0JBQW9CLEVBQUUsQ0FBQztFQUN2QixjQUFjLEVBQUUsQ0FBQztFQUNqQixVQUFVLEVBQUUsQ0FBQztBQUNmLENBQUM7O0FBRUQsU0FBUyxVQUFVLElBQUk7RUFDckIsS0FBSyxDQUFDLE1BQU07SUFDVixvQkFBQyxJQUFJLEVBQUEsQ0FBQSxDQUFDLFFBQUEsRUFBUSxDQUFFLFFBQVEsRUFBQyxDQUFDLFFBQUEsRUFBUSxDQUFFLElBQUksQ0FBQyxRQUFRLEVBQUMsQ0FBQyxZQUFBLEVBQVksQ0FBRSxJQUFLLENBQUEsQ0FBRyxDQUFBO0lBQ3pFLFFBQVEsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDO0dBQ2hDLENBQUM7QUFDSixDQUFDOztBQUVELFNBQVMsb0JBQW9CLElBQUk7RUFDL0IsS0FBSyxDQUFDLE1BQU07SUFDVixvQkFBQyxjQUFjLEVBQUEsQ0FBQSxDQUFDLGNBQUEsRUFBYyxDQUFFLGNBQWMsRUFBQyxDQUFDLGVBQUEsRUFBZSxDQUFFLGVBQWUsRUFBQyxDQUFDLFFBQUEsRUFBUSxDQUFFLElBQUksQ0FBQyxRQUFTLENBQUEsQ0FBRyxDQUFBO0lBQzdHLFFBQVEsQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDO0dBQ2xDLENBQUM7QUFDSixDQUFDOztBQUVELFNBQVMsY0FBYyxJQUFJO0VBQ3pCLEtBQUssQ0FBQyxNQUFNO0lBQ1Ysb0JBQUMsUUFBUSxFQUFBLENBQUEsQ0FBQyxLQUFBLEVBQUssQ0FBRSxLQUFLLEVBQUMsQ0FBQyxZQUFBLEVBQVksQ0FBRSxJQUFLLENBQUEsQ0FBRyxDQUFBO0lBQzlDLFFBQVEsQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDO0dBQ3BDLENBQUM7QUFDSixDQUFDOztBQUVELFNBQVMsRUFBRSxDQUFDOzs7O0FDakZaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0bEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3SUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25NQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0VBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxYUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNySUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9NQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25FQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdElBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9GQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzM4REE7QUFDQSxJQUFJLG9DQUFvQyw4QkFBQTtFQUN0QyxlQUFlLEVBQUUsWUFBWTtJQUMzQixPQUFPO01BQ0wsUUFBUSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxJQUFJLElBQUk7S0FDdEMsQ0FBQztHQUNIO0VBQ0QsWUFBWSxFQUFFLFVBQVUsQ0FBQyxFQUFFO0lBQ3pCLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUNuQixJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDNUQsSUFBSSxDQUFDLFFBQVEsRUFBRTtNQUNiLE9BQU87S0FDUjtJQUNELElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQztJQUNwQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO0lBQzNDLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUM7R0FDakQ7RUFDRCxZQUFZLEVBQUUsVUFBVSxDQUFDLEVBQUU7SUFDekIsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQ25CLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDO0lBQ25DLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUNoQyxJQUFJLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDO0dBQ2xEO0VBQ0QsTUFBTSxFQUFFLFdBQVc7SUFDakIsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDO0lBQ2xCLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUU7TUFDdkIsTUFBTTtRQUNKLG9CQUFBLE1BQUssRUFBQSxDQUFBLENBQUMsU0FBQSxFQUFTLENBQUMsMEJBQUEsRUFBMEIsQ0FBQyxRQUFBLEVBQVEsQ0FBRSxJQUFJLENBQUMsWUFBYyxDQUFBLEVBQUE7VUFDdEUsb0JBQUEsS0FBSSxFQUFBLENBQUEsQ0FBQyxTQUFBLEVBQVMsQ0FBQyxZQUFhLENBQUEsRUFBQTtZQUMxQixvQkFBQSxNQUFLLEVBQUEsSUFBQyxFQUFBLGVBQUEsRUFBYyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQWdCLENBQUE7VUFDM0MsQ0FBQSxFQUFBO1VBQ04sb0JBQUEsUUFBTyxFQUFBLENBQUEsQ0FBQyxJQUFBLEVBQUksQ0FBQyxRQUFBLEVBQVEsQ0FBQyxTQUFBLEVBQVMsQ0FBQyxpQkFBa0IsQ0FBQSxFQUFBLFVBQWlCLENBQUE7UUFDOUQsQ0FBQTtPQUNSLENBQUM7S0FDSCxNQUFNO01BQ0wsTUFBTTtRQUNKLG9CQUFBLE1BQUssRUFBQSxDQUFBLENBQUMsU0FBQSxFQUFTLENBQUMsMEJBQUEsRUFBMEIsQ0FBQyxRQUFBLEVBQVEsQ0FBRSxJQUFJLENBQUMsWUFBYyxDQUFBLEVBQUE7VUFDdEUsb0JBQUEsS0FBSSxFQUFBLENBQUEsQ0FBQyxTQUFBLEVBQVMsQ0FBQyxZQUFhLENBQUEsRUFBQTtZQUMxQixvQkFBQSxPQUFNLEVBQUEsQ0FBQSxDQUFDLElBQUEsRUFBSSxDQUFDLE1BQUEsRUFBTSxDQUFDLFdBQUEsRUFBVyxDQUFDLE1BQUEsRUFBTSxDQUFDLFNBQUEsRUFBUyxDQUFDLGNBQUEsRUFBYyxDQUFDLEdBQUEsRUFBRyxDQUFDLFVBQVUsQ0FBQSxDQUFHLENBQUE7VUFDNUUsQ0FBQSxFQUFBO1VBQ04sb0JBQUEsUUFBTyxFQUFBLENBQUEsQ0FBQyxJQUFBLEVBQUksQ0FBQyxRQUFBLEVBQVEsQ0FBQyxTQUFBLEVBQVMsQ0FBQyxpQkFBa0IsQ0FBQSxFQUFBLFNBQWdCLENBQUE7UUFDN0QsQ0FBQTtPQUNSLENBQUM7S0FDSDtJQUNELE9BQU8sTUFBTSxDQUFDO0dBQ2Y7QUFDSCxDQUFDLENBQUMsQ0FBQzs7QUFFSCxNQUFNLENBQUMsT0FBTyxHQUFHLGNBQWMsQ0FBQzs7OztBQ2hEaEM7QUFDQSxJQUFJLFVBQVUsR0FBRyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUM7QUFDdkMsSUFBSSxFQUFFLEdBQUcsSUFBSSxVQUFVLEVBQUUsQ0FBQzs7QUFFMUIsSUFBSSw2QkFBNkIsdUJBQUE7RUFDL0IsTUFBTSxFQUFFLFdBQVc7SUFDakIsSUFBSSxTQUFTLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQztNQUN4QixHQUFHO01BQ0gsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFO01BQzlCLEdBQUc7S0FDSixDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ1o7TUFDRSxvQkFBQSxLQUFJLEVBQUEsQ0FBQSxDQUFDLFNBQUEsRUFBUyxDQUFDLFNBQVUsQ0FBQSxFQUFBO1FBQ3ZCLG9CQUFBLElBQUcsRUFBQSxDQUFBLENBQUMsU0FBQSxFQUFTLENBQUMsYUFBYyxDQUFBLEVBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFjLENBQUEsRUFBQTtRQUN0RCxvQkFBQSxNQUFLLEVBQUEsQ0FBQSxDQUFDLHVCQUFBLEVBQXVCLENBQUUsQ0FBQyxNQUFNLEVBQUUsU0FBUyxDQUFFLENBQUEsQ0FBRyxDQUFBO01BQ2xELENBQUE7TUFDTjtHQUNIO0FBQ0gsQ0FBQyxDQUFDLENBQUM7O0FBRUgsaURBQWlEO0FBQ2pELElBQUksaUNBQWlDLDJCQUFBO0VBQ25DLGVBQWUsRUFBRSxZQUFZO0lBQzNCLE9BQU87TUFDTCxRQUFRLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRO0tBQzlCLENBQUM7R0FDSDtFQUNELFlBQVksRUFBRSxVQUFVLENBQUMsRUFBRTtJQUN6QixDQUFDLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDbkIsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUM7SUFDbkMsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3BELElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7TUFDdEIsT0FBTztLQUNSO0lBQ0QsSUFBSSxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUMsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQzdELElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7R0FDeEM7RUFDRCxNQUFNLEVBQUUsV0FBVztJQUNqQjtNQUNFLG9CQUFBLEtBQUksRUFBQSxDQUFBLENBQUMsU0FBQSxFQUFTLENBQUMsS0FBTSxDQUFBLEVBQUE7UUFDbkIsb0JBQUEsS0FBSSxFQUFBLENBQUEsQ0FBQyxTQUFBLEVBQVMsQ0FBQyxXQUFZLENBQUEsRUFBQTtVQUN6QixvQkFBQSxNQUFLLEVBQUEsQ0FBQSxDQUFDLFNBQUEsRUFBUyxDQUFDLGFBQUEsRUFBYSxDQUFDLFFBQUEsRUFBUSxDQUFFLElBQUksQ0FBQyxZQUFjLENBQUEsRUFBQTtZQUN6RCxvQkFBQSxPQUFNLEVBQUEsQ0FBQSxDQUFDLElBQUEsRUFBSSxDQUFDLE1BQUEsRUFBTSxDQUFDLFdBQUEsRUFBVyxDQUFDLGtCQUFBLEVBQWtCLENBQUMsR0FBQSxFQUFHLENBQUMsTUFBTSxDQUFBLENBQUcsQ0FBQSxFQUFBO1lBQy9ELG9CQUFBLE9BQU0sRUFBQSxDQUFBLENBQUMsU0FBQSxFQUFTLENBQUMsaUJBQUEsRUFBaUIsQ0FBQyxJQUFBLEVBQUksQ0FBQyxRQUFBLEVBQVEsQ0FBQyxLQUFBLEVBQUssQ0FBQyxNQUFNLENBQUEsQ0FBRyxDQUFBO1VBQzNELENBQUE7UUFDSCxDQUFBO01BQ0YsQ0FBQTtNQUNOO0dBQ0g7QUFDSCxDQUFDLENBQUMsQ0FBQzs7QUFFSCw0QkFBNEI7QUFDNUIsSUFBSSxpQ0FBaUMsMkJBQUE7RUFDbkMsTUFBTSxFQUFFLFdBQVc7SUFDakIsSUFBSSxZQUFZLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLFVBQVUsT0FBTyxFQUFFO01BQzVEO1FBQ0Usb0JBQUMsT0FBTyxFQUFBLENBQUEsQ0FBQyxHQUFBLEVBQUcsQ0FBRSxPQUFPLENBQUMsR0FBRyxFQUFDLENBQUMsUUFBQSxFQUFRLENBQUUsT0FBTyxDQUFDLFFBQVUsQ0FBQSxFQUFBO1VBQ3BELE9BQU8sQ0FBQyxJQUFLO1FBQ04sQ0FBQTtRQUNWO0tBQ0gsQ0FBQyxDQUFDO0lBQ0g7TUFDRSxvQkFBQSxLQUFJLEVBQUEsQ0FBQSxDQUFDLFNBQUEsRUFBUyxDQUFDLEtBQU0sQ0FBQSxFQUFBO1FBQ25CLG9CQUFBLEtBQUksRUFBQSxDQUFBLENBQUMsU0FBQSxFQUFTLENBQUMsV0FBWSxDQUFBLEVBQUE7VUFDeEIsWUFBYTtRQUNWLENBQUE7TUFDRixDQUFBO01BQ047R0FDSDtBQUNILENBQUMsQ0FBQyxDQUFDOztBQUVILElBQUksMEJBQTBCLG9CQUFBO0FBQzlCLEVBQUUsc0JBQXNCLEVBQUUsWUFBWTs7SUFFbEMsQ0FBQyxDQUFDLElBQUksQ0FBQztNQUNMLEdBQUcsRUFBRSxlQUFlO01BQ3BCLFFBQVEsRUFBRSxNQUFNO01BQ2hCLE9BQU8sRUFBRSxTQUFTLElBQUksRUFBRTtRQUN0QixJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO09BQzFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztNQUNaLEtBQUssRUFBRSxTQUFTLEdBQUcsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFO1FBQ2hDLE9BQU8sQ0FBQyxLQUFLLENBQUMsZUFBZSxFQUFFLE1BQU0sRUFBRSxHQUFHLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztPQUN4RCxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7S0FDYixDQUFDLENBQUM7R0FDSjtFQUNELG1CQUFtQixFQUFFLFVBQVUsT0FBTyxFQUFFO0lBQ3RDLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDO0lBQ25DLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDO0lBQ25DLElBQUksV0FBVyxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQzdDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxXQUFXLENBQUMsQ0FBQyxDQUFDO0lBQzNELENBQUMsQ0FBQyxJQUFJLENBQUM7TUFDTCxHQUFHLEVBQUUsZUFBZTtNQUNwQixRQUFRLEVBQUUsTUFBTTtNQUNoQixXQUFXLEVBQUUsa0JBQWtCO01BQy9CLElBQUksRUFBRSxNQUFNO01BQ1osSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDO01BQzdCLE9BQU8sRUFBRSxVQUFVLElBQUksRUFBRTtRQUN2QixJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO09BQzFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztNQUNaLEtBQUssRUFBRSxVQUFVLEdBQUcsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFO1FBQ2pDLE9BQU8sQ0FBQyxLQUFLLENBQUMsZUFBZSxFQUFFLE1BQU0sQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztPQUN2RCxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7S0FDYixDQUFDLENBQUM7R0FDSjtFQUNELGVBQWUsRUFBRSxZQUFZO0lBQzNCLE9BQU87TUFDTCxRQUFRLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLElBQUksRUFBRTtNQUNuQyxRQUFRLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRO0tBQzlCLENBQUM7R0FDSDtFQUNELGlCQUFpQixFQUFFLFlBQVk7SUFDN0IsSUFBSSxDQUFDLHNCQUFzQixFQUFFLENBQUM7SUFDOUIsV0FBVyxDQUFDLElBQUksQ0FBQyxzQkFBc0IsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDO0dBQ25FO0VBQ0QsTUFBTSxFQUFFLFlBQVk7SUFDbEIsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUM7SUFDbkM7TUFDRSxvQkFBQSxLQUFJLEVBQUEsSUFBQyxFQUFBO1FBQ0gsb0JBQUMsV0FBVyxFQUFBLENBQUEsQ0FBQyxRQUFBLEVBQVEsQ0FBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVMsQ0FBQSxDQUFHLENBQUEsRUFBQTtRQUM5QyxvQkFBQyxXQUFXLEVBQUEsQ0FBQSxDQUFDLGVBQUEsRUFBZSxDQUFFLElBQUksQ0FBQyxtQkFBbUIsRUFBQyxDQUFDLFFBQUEsRUFBUSxDQUFFLFFBQVMsQ0FBQSxDQUFHLENBQUE7TUFDMUUsQ0FBQTtNQUNOO0dBQ0g7QUFDSCxDQUFDLENBQUMsQ0FBQzs7QUFFSCxNQUFNLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQzs7OztBQzdIdEI7QUFDQSxJQUFJLDBCQUEwQixvQkFBQTtFQUM1QixNQUFNLEVBQUUsV0FBVztJQUNqQjtNQUNFLG9CQUFBLElBQUcsRUFBQSxJQUFDLEVBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFjLENBQUE7TUFDOUI7R0FDSDtBQUNILENBQUMsQ0FBQyxDQUFDOztBQUVILElBQUksOEJBQThCLHdCQUFBO0FBQ2xDLEVBQUUsbUJBQW1CLEVBQUUsWUFBWTs7SUFFL0IsQ0FBQyxDQUFDLElBQUksQ0FBQztNQUNMLEdBQUcsRUFBRSxZQUFZO01BQ2pCLFFBQVEsRUFBRSxNQUFNO01BQ2hCLE9BQU8sRUFBRSxTQUFTLElBQUksRUFBRTtRQUN0QixJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO09BQ3BDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztNQUNaLEtBQUssRUFBRSxTQUFTLEdBQUcsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFO1FBQ2hDLE9BQU8sQ0FBQyxLQUFLLENBQUMsWUFBWSxFQUFFLE1BQU0sRUFBRSxHQUFHLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztPQUNyRCxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7S0FDYixDQUFDLENBQUM7R0FDSjtFQUNELGVBQWUsRUFBRSxZQUFZO0lBQzNCLE9BQU87TUFDTCxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLO0tBQ3hCLENBQUM7R0FDSDtFQUNELGlCQUFpQixFQUFFLFlBQVk7SUFDN0IsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7SUFDM0IsV0FBVyxDQUFDLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDO0dBQ2hFO0VBQ0QsTUFBTSxFQUFFLFdBQVc7SUFDakIsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLElBQUksRUFBRSxDQUFDO0lBQ25DLElBQUksSUFBSSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDOUIsSUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEdBQUcsRUFBRTtNQUN6QyxPQUFPLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztLQUNuQixDQUFDLENBQUMsR0FBRyxDQUFDLFVBQVUsR0FBRyxFQUFFO01BQ3BCLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUUsT0FBTztNQUN4QjtRQUNFLG9CQUFDLElBQUksRUFBQSxDQUFBLENBQUMsR0FBQSxFQUFHLENBQUUsR0FBRyxFQUFDLENBQUMsUUFBQSxFQUFRLENBQUUsR0FBSSxDQUFBLENBQUcsQ0FBQTtRQUNqQztLQUNILENBQUMsQ0FBQztJQUNIO01BQ0Usb0JBQUEsS0FBSSxFQUFBLENBQUEsQ0FBQyxTQUFBLEVBQVMsQ0FBQyxLQUFNLENBQUEsRUFBQTtRQUNuQixvQkFBQSxLQUFJLEVBQUEsQ0FBQSxDQUFDLFNBQUEsRUFBUyxDQUFDLFdBQVksQ0FBQSxFQUFBO1VBQ3pCLG9CQUFBLElBQUcsRUFBQSxJQUFDLEVBQUE7WUFDRCxTQUFVO1VBQ1IsQ0FBQTtRQUNELENBQUE7TUFDRixDQUFBO01BQ047R0FDSDtBQUNILENBQUMsQ0FBQyxDQUFDOztBQUVILE1BQU0sQ0FBQyxPQUFPLEdBQUcsUUFBUSxDQUFDIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsInZhciBBdXRoZW50aWNhdGlvbiA9IHJlcXVpcmUoJy4vYXBwcy9BdXRoZW50aWNhdGlvbi5qc3gnKTtcbnZhciBVc2VyTGlzdCA9IHJlcXVpcmUoJy4vYXBwcy9Vc2VyTGlzdC5qc3gnKTtcbnZhciBDaGF0ID0gcmVxdWlyZSgnLi9hcHBzL0NoYXQuanN4Jyk7XG5cbnZhciBkYXRhID0ge1xuICB1c2VybmFtZTogbnVsbFxufTtcblxuXG5mdW5jdGlvbiBvblNpZ25vblN1Ym1pdCAodXNlcikge1xuICBkYXRhLnVzZXJuYW1lID0gdXNlci51c2VybmFtZTtcbiAgaWYgKCF1c2Vyc1tkYXRhLnVzZXJuYW1lXSkge1xuICAgIHVzZXJzW2RhdGEudXNlcm5hbWVdID0gMTtcbiAgfVxuICBjb25zb2xlLmxvZygnZGF0YS51c2VybmFtZScsIGRhdGEudXNlcm5hbWUpO1xuICAkLmFqYXgoe1xuICAgIHVybDogJy9hcGkvdXNlcnMnLFxuICAgIGRhdGFUeXBlOiAnanNvbicsXG4gICAgY29udGVudFR5cGU6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICB0eXBlOiAnUE9TVCcsXG4gICAgZGF0YTogSlNPTi5zdHJpbmdpZnkoeyB1c2VybmFtZTogZGF0YS51c2VybmFtZSB9KSxcbiAgICBzdWNjZXNzOiBmdW5jdGlvbihkYXRhKSB7XG4gICAgICBjb25zb2xlLmxvZygndXNlciBvbmxpbmUnKTtcbiAgICB9LmJpbmQodGhpcyksXG4gICAgZXJyb3I6IGZ1bmN0aW9uKHhociwgc3RhdHVzLCBlcnIpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJy9hcGkvdXNlcnMnLCBzdGF0dXMsIGVyci50b1N0cmluZygpKTtcbiAgICB9LmJpbmQodGhpcylcbiAgfSk7XG4gIHJlbmRlckFsbCgpO1xufVxuXG5mdW5jdGlvbiBvblNpZ25vdXRTdWJtaXQgKHVzZXIpIHtcbiAgdmFyIHVzZXJuYW1lID0gZGF0YS51c2VybmFtZTtcbiAgaWYgKHVzZXJzW2RhdGEudXNlcm5hbWVdKSB7XG4gICAgZGVsZXRlIHVzZXJzW2RhdGEudXNlcm5hbWVdO1xuICB9XG4gIGRhdGEudXNlcm5hbWUgPSBudWxsO1xuICAkLmFqYXgoe1xuICAgIHVybDogJy9hcGkvdXNlcnMvJyArIHVzZXJuYW1lLFxuICAgIGRhdGFUeXBlOiAnanNvbicsXG4gICAgdHlwZTogJ0RFTEVURScsXG4gICAgc3VjY2VzczogZnVuY3Rpb24oZGF0YSkge1xuICAgICAgY29uc29sZS5sb2coJ3VzZXIgb2ZmbGluZScpO1xuICAgIH0uYmluZCh0aGlzKSxcbiAgICBlcnJvcjogZnVuY3Rpb24oeGhyLCBzdGF0dXMsIGVycikge1xuICAgICAgY29uc29sZS5lcnJvcignL2FwaS91c2VycycsIHN0YXR1cywgZXJyLnRvU3RyaW5nKCkpO1xuICAgIH0uYmluZCh0aGlzKVxuICB9KTtcbiAgcmVuZGVyQWxsKCk7XG59XG5cbnZhciBjb21tZW50cyA9IFtdO1xudmFyIHVzZXJzID0ge307XG5cbmZ1bmN0aW9uIHJlbmRlckFsbCAoKSB7XG4gIHJlbmRlckF1dGhlbnRpY2F0aW9uKCk7XG4gIHJlbmRlclVzZXJMaXN0KCk7XG4gIHJlbmRlckNoYXQoKTtcbn1cblxuZnVuY3Rpb24gcmVuZGVyQ2hhdCAoKSB7XG4gIFJlYWN0LnJlbmRlcihcbiAgICA8Q2hhdCBjb21tZW50cz17Y29tbWVudHN9IHVzZXJuYW1lPXtkYXRhLnVzZXJuYW1lfSBwb2xsSW50ZXJ2YWw9ezIwMDB9IC8+LFxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjaGF0JylcbiAgKTtcbn1cblxuZnVuY3Rpb24gcmVuZGVyQXV0aGVudGljYXRpb24gKCkge1xuICBSZWFjdC5yZW5kZXIoXG4gICAgPEF1dGhlbnRpY2F0aW9uIG9uU2lnbm9uU3VibWl0PXtvblNpZ25vblN1Ym1pdH0gb25TaWdub3V0U3VibWl0PXtvblNpZ25vdXRTdWJtaXR9IHVzZXJuYW1lPXtkYXRhLnVzZXJuYW1lfSAvPixcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmF2YmFyJylcbiAgKTtcbn1cblxuZnVuY3Rpb24gcmVuZGVyVXNlckxpc3QgKCkge1xuICBSZWFjdC5yZW5kZXIoXG4gICAgPFVzZXJMaXN0IHVzZXJzPXt1c2Vyc30gcG9sbEludGVydmFsPXsyMDAwfSAvPixcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndXNlcmxpc3QnKVxuICApO1xufVxuXG5yZW5kZXJBbGwoKTtcbiIsIid1c2Ugc3RyaWN0JztcblxuXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vbGliLycpO1xuIiwiLy8gTGlzdCBvZiB2YWxpZCBlbnRpdGllc1xuLy9cbi8vIEdlbmVyYXRlIHdpdGggLi9zdXBwb3J0L2VudGl0aWVzLmpzIHNjcmlwdFxuLy9cbid1c2Ugc3RyaWN0JztcblxuLyplc2xpbnQgcXVvdGVzOjAqL1xubW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwiQWFjdXRlXCI6XCJcXHUwMEMxXCIsXG4gIFwiYWFjdXRlXCI6XCJcXHUwMEUxXCIsXG4gIFwiQWJyZXZlXCI6XCJcXHUwMTAyXCIsXG4gIFwiYWJyZXZlXCI6XCJcXHUwMTAzXCIsXG4gIFwiYWNcIjpcIlxcdTIyM0VcIixcbiAgXCJhY2RcIjpcIlxcdTIyM0ZcIixcbiAgXCJhY0VcIjpcIlxcdTIyM0VcXHUwMzMzXCIsXG4gIFwiQWNpcmNcIjpcIlxcdTAwQzJcIixcbiAgXCJhY2lyY1wiOlwiXFx1MDBFMlwiLFxuICBcImFjdXRlXCI6XCJcXHUwMEI0XCIsXG4gIFwiQWN5XCI6XCJcXHUwNDEwXCIsXG4gIFwiYWN5XCI6XCJcXHUwNDMwXCIsXG4gIFwiQUVsaWdcIjpcIlxcdTAwQzZcIixcbiAgXCJhZWxpZ1wiOlwiXFx1MDBFNlwiLFxuICBcImFmXCI6XCJcXHUyMDYxXCIsXG4gIFwiQWZyXCI6XCJcXHVEODM1XFx1REQwNFwiLFxuICBcImFmclwiOlwiXFx1RDgzNVxcdUREMUVcIixcbiAgXCJBZ3JhdmVcIjpcIlxcdTAwQzBcIixcbiAgXCJhZ3JhdmVcIjpcIlxcdTAwRTBcIixcbiAgXCJhbGVmc3ltXCI6XCJcXHUyMTM1XCIsXG4gIFwiYWxlcGhcIjpcIlxcdTIxMzVcIixcbiAgXCJBbHBoYVwiOlwiXFx1MDM5MVwiLFxuICBcImFscGhhXCI6XCJcXHUwM0IxXCIsXG4gIFwiQW1hY3JcIjpcIlxcdTAxMDBcIixcbiAgXCJhbWFjclwiOlwiXFx1MDEwMVwiLFxuICBcImFtYWxnXCI6XCJcXHUyQTNGXCIsXG4gIFwiQU1QXCI6XCJcXHUwMDI2XCIsXG4gIFwiYW1wXCI6XCJcXHUwMDI2XCIsXG4gIFwiQW5kXCI6XCJcXHUyQTUzXCIsXG4gIFwiYW5kXCI6XCJcXHUyMjI3XCIsXG4gIFwiYW5kYW5kXCI6XCJcXHUyQTU1XCIsXG4gIFwiYW5kZFwiOlwiXFx1MkE1Q1wiLFxuICBcImFuZHNsb3BlXCI6XCJcXHUyQTU4XCIsXG4gIFwiYW5kdlwiOlwiXFx1MkE1QVwiLFxuICBcImFuZ1wiOlwiXFx1MjIyMFwiLFxuICBcImFuZ2VcIjpcIlxcdTI5QTRcIixcbiAgXCJhbmdsZVwiOlwiXFx1MjIyMFwiLFxuICBcImFuZ21zZFwiOlwiXFx1MjIyMVwiLFxuICBcImFuZ21zZGFhXCI6XCJcXHUyOUE4XCIsXG4gIFwiYW5nbXNkYWJcIjpcIlxcdTI5QTlcIixcbiAgXCJhbmdtc2RhY1wiOlwiXFx1MjlBQVwiLFxuICBcImFuZ21zZGFkXCI6XCJcXHUyOUFCXCIsXG4gIFwiYW5nbXNkYWVcIjpcIlxcdTI5QUNcIixcbiAgXCJhbmdtc2RhZlwiOlwiXFx1MjlBRFwiLFxuICBcImFuZ21zZGFnXCI6XCJcXHUyOUFFXCIsXG4gIFwiYW5nbXNkYWhcIjpcIlxcdTI5QUZcIixcbiAgXCJhbmdydFwiOlwiXFx1MjIxRlwiLFxuICBcImFuZ3J0dmJcIjpcIlxcdTIyQkVcIixcbiAgXCJhbmdydHZiZFwiOlwiXFx1Mjk5RFwiLFxuICBcImFuZ3NwaFwiOlwiXFx1MjIyMlwiLFxuICBcImFuZ3N0XCI6XCJcXHUwMEM1XCIsXG4gIFwiYW5nemFyclwiOlwiXFx1MjM3Q1wiLFxuICBcIkFvZ29uXCI6XCJcXHUwMTA0XCIsXG4gIFwiYW9nb25cIjpcIlxcdTAxMDVcIixcbiAgXCJBb3BmXCI6XCJcXHVEODM1XFx1REQzOFwiLFxuICBcImFvcGZcIjpcIlxcdUQ4MzVcXHVERDUyXCIsXG4gIFwiYXBcIjpcIlxcdTIyNDhcIixcbiAgXCJhcGFjaXJcIjpcIlxcdTJBNkZcIixcbiAgXCJhcEVcIjpcIlxcdTJBNzBcIixcbiAgXCJhcGVcIjpcIlxcdTIyNEFcIixcbiAgXCJhcGlkXCI6XCJcXHUyMjRCXCIsXG4gIFwiYXBvc1wiOlwiXFx1MDAyN1wiLFxuICBcIkFwcGx5RnVuY3Rpb25cIjpcIlxcdTIwNjFcIixcbiAgXCJhcHByb3hcIjpcIlxcdTIyNDhcIixcbiAgXCJhcHByb3hlcVwiOlwiXFx1MjI0QVwiLFxuICBcIkFyaW5nXCI6XCJcXHUwMEM1XCIsXG4gIFwiYXJpbmdcIjpcIlxcdTAwRTVcIixcbiAgXCJBc2NyXCI6XCJcXHVEODM1XFx1REM5Q1wiLFxuICBcImFzY3JcIjpcIlxcdUQ4MzVcXHVEQ0I2XCIsXG4gIFwiQXNzaWduXCI6XCJcXHUyMjU0XCIsXG4gIFwiYXN0XCI6XCJcXHUwMDJBXCIsXG4gIFwiYXN5bXBcIjpcIlxcdTIyNDhcIixcbiAgXCJhc3ltcGVxXCI6XCJcXHUyMjREXCIsXG4gIFwiQXRpbGRlXCI6XCJcXHUwMEMzXCIsXG4gIFwiYXRpbGRlXCI6XCJcXHUwMEUzXCIsXG4gIFwiQXVtbFwiOlwiXFx1MDBDNFwiLFxuICBcImF1bWxcIjpcIlxcdTAwRTRcIixcbiAgXCJhd2NvbmludFwiOlwiXFx1MjIzM1wiLFxuICBcImF3aW50XCI6XCJcXHUyQTExXCIsXG4gIFwiYmFja2NvbmdcIjpcIlxcdTIyNENcIixcbiAgXCJiYWNrZXBzaWxvblwiOlwiXFx1MDNGNlwiLFxuICBcImJhY2twcmltZVwiOlwiXFx1MjAzNVwiLFxuICBcImJhY2tzaW1cIjpcIlxcdTIyM0RcIixcbiAgXCJiYWNrc2ltZXFcIjpcIlxcdTIyQ0RcIixcbiAgXCJCYWNrc2xhc2hcIjpcIlxcdTIyMTZcIixcbiAgXCJCYXJ2XCI6XCJcXHUyQUU3XCIsXG4gIFwiYmFydmVlXCI6XCJcXHUyMkJEXCIsXG4gIFwiQmFyd2VkXCI6XCJcXHUyMzA2XCIsXG4gIFwiYmFyd2VkXCI6XCJcXHUyMzA1XCIsXG4gIFwiYmFyd2VkZ2VcIjpcIlxcdTIzMDVcIixcbiAgXCJiYnJrXCI6XCJcXHUyM0I1XCIsXG4gIFwiYmJya3RicmtcIjpcIlxcdTIzQjZcIixcbiAgXCJiY29uZ1wiOlwiXFx1MjI0Q1wiLFxuICBcIkJjeVwiOlwiXFx1MDQxMVwiLFxuICBcImJjeVwiOlwiXFx1MDQzMVwiLFxuICBcImJkcXVvXCI6XCJcXHUyMDFFXCIsXG4gIFwiYmVjYXVzXCI6XCJcXHUyMjM1XCIsXG4gIFwiQmVjYXVzZVwiOlwiXFx1MjIzNVwiLFxuICBcImJlY2F1c2VcIjpcIlxcdTIyMzVcIixcbiAgXCJiZW1wdHl2XCI6XCJcXHUyOUIwXCIsXG4gIFwiYmVwc2lcIjpcIlxcdTAzRjZcIixcbiAgXCJiZXJub3VcIjpcIlxcdTIxMkNcIixcbiAgXCJCZXJub3VsbGlzXCI6XCJcXHUyMTJDXCIsXG4gIFwiQmV0YVwiOlwiXFx1MDM5MlwiLFxuICBcImJldGFcIjpcIlxcdTAzQjJcIixcbiAgXCJiZXRoXCI6XCJcXHUyMTM2XCIsXG4gIFwiYmV0d2VlblwiOlwiXFx1MjI2Q1wiLFxuICBcIkJmclwiOlwiXFx1RDgzNVxcdUREMDVcIixcbiAgXCJiZnJcIjpcIlxcdUQ4MzVcXHVERDFGXCIsXG4gIFwiYmlnY2FwXCI6XCJcXHUyMkMyXCIsXG4gIFwiYmlnY2lyY1wiOlwiXFx1MjVFRlwiLFxuICBcImJpZ2N1cFwiOlwiXFx1MjJDM1wiLFxuICBcImJpZ29kb3RcIjpcIlxcdTJBMDBcIixcbiAgXCJiaWdvcGx1c1wiOlwiXFx1MkEwMVwiLFxuICBcImJpZ290aW1lc1wiOlwiXFx1MkEwMlwiLFxuICBcImJpZ3NxY3VwXCI6XCJcXHUyQTA2XCIsXG4gIFwiYmlnc3RhclwiOlwiXFx1MjYwNVwiLFxuICBcImJpZ3RyaWFuZ2xlZG93blwiOlwiXFx1MjVCRFwiLFxuICBcImJpZ3RyaWFuZ2xldXBcIjpcIlxcdTI1QjNcIixcbiAgXCJiaWd1cGx1c1wiOlwiXFx1MkEwNFwiLFxuICBcImJpZ3ZlZVwiOlwiXFx1MjJDMVwiLFxuICBcImJpZ3dlZGdlXCI6XCJcXHUyMkMwXCIsXG4gIFwiYmthcm93XCI6XCJcXHUyOTBEXCIsXG4gIFwiYmxhY2tsb3plbmdlXCI6XCJcXHUyOUVCXCIsXG4gIFwiYmxhY2tzcXVhcmVcIjpcIlxcdTI1QUFcIixcbiAgXCJibGFja3RyaWFuZ2xlXCI6XCJcXHUyNUI0XCIsXG4gIFwiYmxhY2t0cmlhbmdsZWRvd25cIjpcIlxcdTI1QkVcIixcbiAgXCJibGFja3RyaWFuZ2xlbGVmdFwiOlwiXFx1MjVDMlwiLFxuICBcImJsYWNrdHJpYW5nbGVyaWdodFwiOlwiXFx1MjVCOFwiLFxuICBcImJsYW5rXCI6XCJcXHUyNDIzXCIsXG4gIFwiYmxrMTJcIjpcIlxcdTI1OTJcIixcbiAgXCJibGsxNFwiOlwiXFx1MjU5MVwiLFxuICBcImJsazM0XCI6XCJcXHUyNTkzXCIsXG4gIFwiYmxvY2tcIjpcIlxcdTI1ODhcIixcbiAgXCJibmVcIjpcIlxcdTAwM0RcXHUyMEU1XCIsXG4gIFwiYm5lcXVpdlwiOlwiXFx1MjI2MVxcdTIwRTVcIixcbiAgXCJiTm90XCI6XCJcXHUyQUVEXCIsXG4gIFwiYm5vdFwiOlwiXFx1MjMxMFwiLFxuICBcIkJvcGZcIjpcIlxcdUQ4MzVcXHVERDM5XCIsXG4gIFwiYm9wZlwiOlwiXFx1RDgzNVxcdURENTNcIixcbiAgXCJib3RcIjpcIlxcdTIyQTVcIixcbiAgXCJib3R0b21cIjpcIlxcdTIyQTVcIixcbiAgXCJib3d0aWVcIjpcIlxcdTIyQzhcIixcbiAgXCJib3hib3hcIjpcIlxcdTI5QzlcIixcbiAgXCJib3hETFwiOlwiXFx1MjU1N1wiLFxuICBcImJveERsXCI6XCJcXHUyNTU2XCIsXG4gIFwiYm94ZExcIjpcIlxcdTI1NTVcIixcbiAgXCJib3hkbFwiOlwiXFx1MjUxMFwiLFxuICBcImJveERSXCI6XCJcXHUyNTU0XCIsXG4gIFwiYm94RHJcIjpcIlxcdTI1NTNcIixcbiAgXCJib3hkUlwiOlwiXFx1MjU1MlwiLFxuICBcImJveGRyXCI6XCJcXHUyNTBDXCIsXG4gIFwiYm94SFwiOlwiXFx1MjU1MFwiLFxuICBcImJveGhcIjpcIlxcdTI1MDBcIixcbiAgXCJib3hIRFwiOlwiXFx1MjU2NlwiLFxuICBcImJveEhkXCI6XCJcXHUyNTY0XCIsXG4gIFwiYm94aERcIjpcIlxcdTI1NjVcIixcbiAgXCJib3hoZFwiOlwiXFx1MjUyQ1wiLFxuICBcImJveEhVXCI6XCJcXHUyNTY5XCIsXG4gIFwiYm94SHVcIjpcIlxcdTI1NjdcIixcbiAgXCJib3hoVVwiOlwiXFx1MjU2OFwiLFxuICBcImJveGh1XCI6XCJcXHUyNTM0XCIsXG4gIFwiYm94bWludXNcIjpcIlxcdTIyOUZcIixcbiAgXCJib3hwbHVzXCI6XCJcXHUyMjlFXCIsXG4gIFwiYm94dGltZXNcIjpcIlxcdTIyQTBcIixcbiAgXCJib3hVTFwiOlwiXFx1MjU1RFwiLFxuICBcImJveFVsXCI6XCJcXHUyNTVDXCIsXG4gIFwiYm94dUxcIjpcIlxcdTI1NUJcIixcbiAgXCJib3h1bFwiOlwiXFx1MjUxOFwiLFxuICBcImJveFVSXCI6XCJcXHUyNTVBXCIsXG4gIFwiYm94VXJcIjpcIlxcdTI1NTlcIixcbiAgXCJib3h1UlwiOlwiXFx1MjU1OFwiLFxuICBcImJveHVyXCI6XCJcXHUyNTE0XCIsXG4gIFwiYm94VlwiOlwiXFx1MjU1MVwiLFxuICBcImJveHZcIjpcIlxcdTI1MDJcIixcbiAgXCJib3hWSFwiOlwiXFx1MjU2Q1wiLFxuICBcImJveFZoXCI6XCJcXHUyNTZCXCIsXG4gIFwiYm94dkhcIjpcIlxcdTI1NkFcIixcbiAgXCJib3h2aFwiOlwiXFx1MjUzQ1wiLFxuICBcImJveFZMXCI6XCJcXHUyNTYzXCIsXG4gIFwiYm94VmxcIjpcIlxcdTI1NjJcIixcbiAgXCJib3h2TFwiOlwiXFx1MjU2MVwiLFxuICBcImJveHZsXCI6XCJcXHUyNTI0XCIsXG4gIFwiYm94VlJcIjpcIlxcdTI1NjBcIixcbiAgXCJib3hWclwiOlwiXFx1MjU1RlwiLFxuICBcImJveHZSXCI6XCJcXHUyNTVFXCIsXG4gIFwiYm94dnJcIjpcIlxcdTI1MUNcIixcbiAgXCJicHJpbWVcIjpcIlxcdTIwMzVcIixcbiAgXCJCcmV2ZVwiOlwiXFx1MDJEOFwiLFxuICBcImJyZXZlXCI6XCJcXHUwMkQ4XCIsXG4gIFwiYnJ2YmFyXCI6XCJcXHUwMEE2XCIsXG4gIFwiQnNjclwiOlwiXFx1MjEyQ1wiLFxuICBcImJzY3JcIjpcIlxcdUQ4MzVcXHVEQ0I3XCIsXG4gIFwiYnNlbWlcIjpcIlxcdTIwNEZcIixcbiAgXCJic2ltXCI6XCJcXHUyMjNEXCIsXG4gIFwiYnNpbWVcIjpcIlxcdTIyQ0RcIixcbiAgXCJic29sXCI6XCJcXHUwMDVDXCIsXG4gIFwiYnNvbGJcIjpcIlxcdTI5QzVcIixcbiAgXCJic29saHN1YlwiOlwiXFx1MjdDOFwiLFxuICBcImJ1bGxcIjpcIlxcdTIwMjJcIixcbiAgXCJidWxsZXRcIjpcIlxcdTIwMjJcIixcbiAgXCJidW1wXCI6XCJcXHUyMjRFXCIsXG4gIFwiYnVtcEVcIjpcIlxcdTJBQUVcIixcbiAgXCJidW1wZVwiOlwiXFx1MjI0RlwiLFxuICBcIkJ1bXBlcVwiOlwiXFx1MjI0RVwiLFxuICBcImJ1bXBlcVwiOlwiXFx1MjI0RlwiLFxuICBcIkNhY3V0ZVwiOlwiXFx1MDEwNlwiLFxuICBcImNhY3V0ZVwiOlwiXFx1MDEwN1wiLFxuICBcIkNhcFwiOlwiXFx1MjJEMlwiLFxuICBcImNhcFwiOlwiXFx1MjIyOVwiLFxuICBcImNhcGFuZFwiOlwiXFx1MkE0NFwiLFxuICBcImNhcGJyY3VwXCI6XCJcXHUyQTQ5XCIsXG4gIFwiY2FwY2FwXCI6XCJcXHUyQTRCXCIsXG4gIFwiY2FwY3VwXCI6XCJcXHUyQTQ3XCIsXG4gIFwiY2FwZG90XCI6XCJcXHUyQTQwXCIsXG4gIFwiQ2FwaXRhbERpZmZlcmVudGlhbERcIjpcIlxcdTIxNDVcIixcbiAgXCJjYXBzXCI6XCJcXHUyMjI5XFx1RkUwMFwiLFxuICBcImNhcmV0XCI6XCJcXHUyMDQxXCIsXG4gIFwiY2Fyb25cIjpcIlxcdTAyQzdcIixcbiAgXCJDYXlsZXlzXCI6XCJcXHUyMTJEXCIsXG4gIFwiY2NhcHNcIjpcIlxcdTJBNERcIixcbiAgXCJDY2Fyb25cIjpcIlxcdTAxMENcIixcbiAgXCJjY2Fyb25cIjpcIlxcdTAxMERcIixcbiAgXCJDY2VkaWxcIjpcIlxcdTAwQzdcIixcbiAgXCJjY2VkaWxcIjpcIlxcdTAwRTdcIixcbiAgXCJDY2lyY1wiOlwiXFx1MDEwOFwiLFxuICBcImNjaXJjXCI6XCJcXHUwMTA5XCIsXG4gIFwiQ2NvbmludFwiOlwiXFx1MjIzMFwiLFxuICBcImNjdXBzXCI6XCJcXHUyQTRDXCIsXG4gIFwiY2N1cHNzbVwiOlwiXFx1MkE1MFwiLFxuICBcIkNkb3RcIjpcIlxcdTAxMEFcIixcbiAgXCJjZG90XCI6XCJcXHUwMTBCXCIsXG4gIFwiY2VkaWxcIjpcIlxcdTAwQjhcIixcbiAgXCJDZWRpbGxhXCI6XCJcXHUwMEI4XCIsXG4gIFwiY2VtcHR5dlwiOlwiXFx1MjlCMlwiLFxuICBcImNlbnRcIjpcIlxcdTAwQTJcIixcbiAgXCJDZW50ZXJEb3RcIjpcIlxcdTAwQjdcIixcbiAgXCJjZW50ZXJkb3RcIjpcIlxcdTAwQjdcIixcbiAgXCJDZnJcIjpcIlxcdTIxMkRcIixcbiAgXCJjZnJcIjpcIlxcdUQ4MzVcXHVERDIwXCIsXG4gIFwiQ0hjeVwiOlwiXFx1MDQyN1wiLFxuICBcImNoY3lcIjpcIlxcdTA0NDdcIixcbiAgXCJjaGVja1wiOlwiXFx1MjcxM1wiLFxuICBcImNoZWNrbWFya1wiOlwiXFx1MjcxM1wiLFxuICBcIkNoaVwiOlwiXFx1MDNBN1wiLFxuICBcImNoaVwiOlwiXFx1MDNDN1wiLFxuICBcImNpclwiOlwiXFx1MjVDQlwiLFxuICBcImNpcmNcIjpcIlxcdTAyQzZcIixcbiAgXCJjaXJjZXFcIjpcIlxcdTIyNTdcIixcbiAgXCJjaXJjbGVhcnJvd2xlZnRcIjpcIlxcdTIxQkFcIixcbiAgXCJjaXJjbGVhcnJvd3JpZ2h0XCI6XCJcXHUyMUJCXCIsXG4gIFwiY2lyY2xlZGFzdFwiOlwiXFx1MjI5QlwiLFxuICBcImNpcmNsZWRjaXJjXCI6XCJcXHUyMjlBXCIsXG4gIFwiY2lyY2xlZGRhc2hcIjpcIlxcdTIyOURcIixcbiAgXCJDaXJjbGVEb3RcIjpcIlxcdTIyOTlcIixcbiAgXCJjaXJjbGVkUlwiOlwiXFx1MDBBRVwiLFxuICBcImNpcmNsZWRTXCI6XCJcXHUyNEM4XCIsXG4gIFwiQ2lyY2xlTWludXNcIjpcIlxcdTIyOTZcIixcbiAgXCJDaXJjbGVQbHVzXCI6XCJcXHUyMjk1XCIsXG4gIFwiQ2lyY2xlVGltZXNcIjpcIlxcdTIyOTdcIixcbiAgXCJjaXJFXCI6XCJcXHUyOUMzXCIsXG4gIFwiY2lyZVwiOlwiXFx1MjI1N1wiLFxuICBcImNpcmZuaW50XCI6XCJcXHUyQTEwXCIsXG4gIFwiY2lybWlkXCI6XCJcXHUyQUVGXCIsXG4gIFwiY2lyc2NpclwiOlwiXFx1MjlDMlwiLFxuICBcIkNsb2Nrd2lzZUNvbnRvdXJJbnRlZ3JhbFwiOlwiXFx1MjIzMlwiLFxuICBcIkNsb3NlQ3VybHlEb3VibGVRdW90ZVwiOlwiXFx1MjAxRFwiLFxuICBcIkNsb3NlQ3VybHlRdW90ZVwiOlwiXFx1MjAxOVwiLFxuICBcImNsdWJzXCI6XCJcXHUyNjYzXCIsXG4gIFwiY2x1YnN1aXRcIjpcIlxcdTI2NjNcIixcbiAgXCJDb2xvblwiOlwiXFx1MjIzN1wiLFxuICBcImNvbG9uXCI6XCJcXHUwMDNBXCIsXG4gIFwiQ29sb25lXCI6XCJcXHUyQTc0XCIsXG4gIFwiY29sb25lXCI6XCJcXHUyMjU0XCIsXG4gIFwiY29sb25lcVwiOlwiXFx1MjI1NFwiLFxuICBcImNvbW1hXCI6XCJcXHUwMDJDXCIsXG4gIFwiY29tbWF0XCI6XCJcXHUwMDQwXCIsXG4gIFwiY29tcFwiOlwiXFx1MjIwMVwiLFxuICBcImNvbXBmblwiOlwiXFx1MjIxOFwiLFxuICBcImNvbXBsZW1lbnRcIjpcIlxcdTIyMDFcIixcbiAgXCJjb21wbGV4ZXNcIjpcIlxcdTIxMDJcIixcbiAgXCJjb25nXCI6XCJcXHUyMjQ1XCIsXG4gIFwiY29uZ2RvdFwiOlwiXFx1MkE2RFwiLFxuICBcIkNvbmdydWVudFwiOlwiXFx1MjI2MVwiLFxuICBcIkNvbmludFwiOlwiXFx1MjIyRlwiLFxuICBcImNvbmludFwiOlwiXFx1MjIyRVwiLFxuICBcIkNvbnRvdXJJbnRlZ3JhbFwiOlwiXFx1MjIyRVwiLFxuICBcIkNvcGZcIjpcIlxcdTIxMDJcIixcbiAgXCJjb3BmXCI6XCJcXHVEODM1XFx1REQ1NFwiLFxuICBcImNvcHJvZFwiOlwiXFx1MjIxMFwiLFxuICBcIkNvcHJvZHVjdFwiOlwiXFx1MjIxMFwiLFxuICBcIkNPUFlcIjpcIlxcdTAwQTlcIixcbiAgXCJjb3B5XCI6XCJcXHUwMEE5XCIsXG4gIFwiY29weXNyXCI6XCJcXHUyMTE3XCIsXG4gIFwiQ291bnRlckNsb2Nrd2lzZUNvbnRvdXJJbnRlZ3JhbFwiOlwiXFx1MjIzM1wiLFxuICBcImNyYXJyXCI6XCJcXHUyMUI1XCIsXG4gIFwiQ3Jvc3NcIjpcIlxcdTJBMkZcIixcbiAgXCJjcm9zc1wiOlwiXFx1MjcxN1wiLFxuICBcIkNzY3JcIjpcIlxcdUQ4MzVcXHVEQzlFXCIsXG4gIFwiY3NjclwiOlwiXFx1RDgzNVxcdURDQjhcIixcbiAgXCJjc3ViXCI6XCJcXHUyQUNGXCIsXG4gIFwiY3N1YmVcIjpcIlxcdTJBRDFcIixcbiAgXCJjc3VwXCI6XCJcXHUyQUQwXCIsXG4gIFwiY3N1cGVcIjpcIlxcdTJBRDJcIixcbiAgXCJjdGRvdFwiOlwiXFx1MjJFRlwiLFxuICBcImN1ZGFycmxcIjpcIlxcdTI5MzhcIixcbiAgXCJjdWRhcnJyXCI6XCJcXHUyOTM1XCIsXG4gIFwiY3VlcHJcIjpcIlxcdTIyREVcIixcbiAgXCJjdWVzY1wiOlwiXFx1MjJERlwiLFxuICBcImN1bGFyclwiOlwiXFx1MjFCNlwiLFxuICBcImN1bGFycnBcIjpcIlxcdTI5M0RcIixcbiAgXCJDdXBcIjpcIlxcdTIyRDNcIixcbiAgXCJjdXBcIjpcIlxcdTIyMkFcIixcbiAgXCJjdXBicmNhcFwiOlwiXFx1MkE0OFwiLFxuICBcIkN1cENhcFwiOlwiXFx1MjI0RFwiLFxuICBcImN1cGNhcFwiOlwiXFx1MkE0NlwiLFxuICBcImN1cGN1cFwiOlwiXFx1MkE0QVwiLFxuICBcImN1cGRvdFwiOlwiXFx1MjI4RFwiLFxuICBcImN1cG9yXCI6XCJcXHUyQTQ1XCIsXG4gIFwiY3Vwc1wiOlwiXFx1MjIyQVxcdUZFMDBcIixcbiAgXCJjdXJhcnJcIjpcIlxcdTIxQjdcIixcbiAgXCJjdXJhcnJtXCI6XCJcXHUyOTNDXCIsXG4gIFwiY3VybHllcXByZWNcIjpcIlxcdTIyREVcIixcbiAgXCJjdXJseWVxc3VjY1wiOlwiXFx1MjJERlwiLFxuICBcImN1cmx5dmVlXCI6XCJcXHUyMkNFXCIsXG4gIFwiY3VybHl3ZWRnZVwiOlwiXFx1MjJDRlwiLFxuICBcImN1cnJlblwiOlwiXFx1MDBBNFwiLFxuICBcImN1cnZlYXJyb3dsZWZ0XCI6XCJcXHUyMUI2XCIsXG4gIFwiY3VydmVhcnJvd3JpZ2h0XCI6XCJcXHUyMUI3XCIsXG4gIFwiY3V2ZWVcIjpcIlxcdTIyQ0VcIixcbiAgXCJjdXdlZFwiOlwiXFx1MjJDRlwiLFxuICBcImN3Y29uaW50XCI6XCJcXHUyMjMyXCIsXG4gIFwiY3dpbnRcIjpcIlxcdTIyMzFcIixcbiAgXCJjeWxjdHlcIjpcIlxcdTIzMkRcIixcbiAgXCJEYWdnZXJcIjpcIlxcdTIwMjFcIixcbiAgXCJkYWdnZXJcIjpcIlxcdTIwMjBcIixcbiAgXCJkYWxldGhcIjpcIlxcdTIxMzhcIixcbiAgXCJEYXJyXCI6XCJcXHUyMUExXCIsXG4gIFwiZEFyclwiOlwiXFx1MjFEM1wiLFxuICBcImRhcnJcIjpcIlxcdTIxOTNcIixcbiAgXCJkYXNoXCI6XCJcXHUyMDEwXCIsXG4gIFwiRGFzaHZcIjpcIlxcdTJBRTRcIixcbiAgXCJkYXNodlwiOlwiXFx1MjJBM1wiLFxuICBcImRia2Fyb3dcIjpcIlxcdTI5MEZcIixcbiAgXCJkYmxhY1wiOlwiXFx1MDJERFwiLFxuICBcIkRjYXJvblwiOlwiXFx1MDEwRVwiLFxuICBcImRjYXJvblwiOlwiXFx1MDEwRlwiLFxuICBcIkRjeVwiOlwiXFx1MDQxNFwiLFxuICBcImRjeVwiOlwiXFx1MDQzNFwiLFxuICBcIkREXCI6XCJcXHUyMTQ1XCIsXG4gIFwiZGRcIjpcIlxcdTIxNDZcIixcbiAgXCJkZGFnZ2VyXCI6XCJcXHUyMDIxXCIsXG4gIFwiZGRhcnJcIjpcIlxcdTIxQ0FcIixcbiAgXCJERG90cmFoZFwiOlwiXFx1MjkxMVwiLFxuICBcImRkb3RzZXFcIjpcIlxcdTJBNzdcIixcbiAgXCJkZWdcIjpcIlxcdTAwQjBcIixcbiAgXCJEZWxcIjpcIlxcdTIyMDdcIixcbiAgXCJEZWx0YVwiOlwiXFx1MDM5NFwiLFxuICBcImRlbHRhXCI6XCJcXHUwM0I0XCIsXG4gIFwiZGVtcHR5dlwiOlwiXFx1MjlCMVwiLFxuICBcImRmaXNodFwiOlwiXFx1Mjk3RlwiLFxuICBcIkRmclwiOlwiXFx1RDgzNVxcdUREMDdcIixcbiAgXCJkZnJcIjpcIlxcdUQ4MzVcXHVERDIxXCIsXG4gIFwiZEhhclwiOlwiXFx1Mjk2NVwiLFxuICBcImRoYXJsXCI6XCJcXHUyMUMzXCIsXG4gIFwiZGhhcnJcIjpcIlxcdTIxQzJcIixcbiAgXCJEaWFjcml0aWNhbEFjdXRlXCI6XCJcXHUwMEI0XCIsXG4gIFwiRGlhY3JpdGljYWxEb3RcIjpcIlxcdTAyRDlcIixcbiAgXCJEaWFjcml0aWNhbERvdWJsZUFjdXRlXCI6XCJcXHUwMkREXCIsXG4gIFwiRGlhY3JpdGljYWxHcmF2ZVwiOlwiXFx1MDA2MFwiLFxuICBcIkRpYWNyaXRpY2FsVGlsZGVcIjpcIlxcdTAyRENcIixcbiAgXCJkaWFtXCI6XCJcXHUyMkM0XCIsXG4gIFwiRGlhbW9uZFwiOlwiXFx1MjJDNFwiLFxuICBcImRpYW1vbmRcIjpcIlxcdTIyQzRcIixcbiAgXCJkaWFtb25kc3VpdFwiOlwiXFx1MjY2NlwiLFxuICBcImRpYW1zXCI6XCJcXHUyNjY2XCIsXG4gIFwiZGllXCI6XCJcXHUwMEE4XCIsXG4gIFwiRGlmZmVyZW50aWFsRFwiOlwiXFx1MjE0NlwiLFxuICBcImRpZ2FtbWFcIjpcIlxcdTAzRERcIixcbiAgXCJkaXNpblwiOlwiXFx1MjJGMlwiLFxuICBcImRpdlwiOlwiXFx1MDBGN1wiLFxuICBcImRpdmlkZVwiOlwiXFx1MDBGN1wiLFxuICBcImRpdmlkZW9udGltZXNcIjpcIlxcdTIyQzdcIixcbiAgXCJkaXZvbnhcIjpcIlxcdTIyQzdcIixcbiAgXCJESmN5XCI6XCJcXHUwNDAyXCIsXG4gIFwiZGpjeVwiOlwiXFx1MDQ1MlwiLFxuICBcImRsY29yblwiOlwiXFx1MjMxRVwiLFxuICBcImRsY3JvcFwiOlwiXFx1MjMwRFwiLFxuICBcImRvbGxhclwiOlwiXFx1MDAyNFwiLFxuICBcIkRvcGZcIjpcIlxcdUQ4MzVcXHVERDNCXCIsXG4gIFwiZG9wZlwiOlwiXFx1RDgzNVxcdURENTVcIixcbiAgXCJEb3RcIjpcIlxcdTAwQThcIixcbiAgXCJkb3RcIjpcIlxcdTAyRDlcIixcbiAgXCJEb3REb3RcIjpcIlxcdTIwRENcIixcbiAgXCJkb3RlcVwiOlwiXFx1MjI1MFwiLFxuICBcImRvdGVxZG90XCI6XCJcXHUyMjUxXCIsXG4gIFwiRG90RXF1YWxcIjpcIlxcdTIyNTBcIixcbiAgXCJkb3RtaW51c1wiOlwiXFx1MjIzOFwiLFxuICBcImRvdHBsdXNcIjpcIlxcdTIyMTRcIixcbiAgXCJkb3RzcXVhcmVcIjpcIlxcdTIyQTFcIixcbiAgXCJkb3VibGViYXJ3ZWRnZVwiOlwiXFx1MjMwNlwiLFxuICBcIkRvdWJsZUNvbnRvdXJJbnRlZ3JhbFwiOlwiXFx1MjIyRlwiLFxuICBcIkRvdWJsZURvdFwiOlwiXFx1MDBBOFwiLFxuICBcIkRvdWJsZURvd25BcnJvd1wiOlwiXFx1MjFEM1wiLFxuICBcIkRvdWJsZUxlZnRBcnJvd1wiOlwiXFx1MjFEMFwiLFxuICBcIkRvdWJsZUxlZnRSaWdodEFycm93XCI6XCJcXHUyMUQ0XCIsXG4gIFwiRG91YmxlTGVmdFRlZVwiOlwiXFx1MkFFNFwiLFxuICBcIkRvdWJsZUxvbmdMZWZ0QXJyb3dcIjpcIlxcdTI3RjhcIixcbiAgXCJEb3VibGVMb25nTGVmdFJpZ2h0QXJyb3dcIjpcIlxcdTI3RkFcIixcbiAgXCJEb3VibGVMb25nUmlnaHRBcnJvd1wiOlwiXFx1MjdGOVwiLFxuICBcIkRvdWJsZVJpZ2h0QXJyb3dcIjpcIlxcdTIxRDJcIixcbiAgXCJEb3VibGVSaWdodFRlZVwiOlwiXFx1MjJBOFwiLFxuICBcIkRvdWJsZVVwQXJyb3dcIjpcIlxcdTIxRDFcIixcbiAgXCJEb3VibGVVcERvd25BcnJvd1wiOlwiXFx1MjFENVwiLFxuICBcIkRvdWJsZVZlcnRpY2FsQmFyXCI6XCJcXHUyMjI1XCIsXG4gIFwiRG93bkFycm93XCI6XCJcXHUyMTkzXCIsXG4gIFwiRG93bmFycm93XCI6XCJcXHUyMUQzXCIsXG4gIFwiZG93bmFycm93XCI6XCJcXHUyMTkzXCIsXG4gIFwiRG93bkFycm93QmFyXCI6XCJcXHUyOTEzXCIsXG4gIFwiRG93bkFycm93VXBBcnJvd1wiOlwiXFx1MjFGNVwiLFxuICBcIkRvd25CcmV2ZVwiOlwiXFx1MDMxMVwiLFxuICBcImRvd25kb3duYXJyb3dzXCI6XCJcXHUyMUNBXCIsXG4gIFwiZG93bmhhcnBvb25sZWZ0XCI6XCJcXHUyMUMzXCIsXG4gIFwiZG93bmhhcnBvb25yaWdodFwiOlwiXFx1MjFDMlwiLFxuICBcIkRvd25MZWZ0UmlnaHRWZWN0b3JcIjpcIlxcdTI5NTBcIixcbiAgXCJEb3duTGVmdFRlZVZlY3RvclwiOlwiXFx1Mjk1RVwiLFxuICBcIkRvd25MZWZ0VmVjdG9yXCI6XCJcXHUyMUJEXCIsXG4gIFwiRG93bkxlZnRWZWN0b3JCYXJcIjpcIlxcdTI5NTZcIixcbiAgXCJEb3duUmlnaHRUZWVWZWN0b3JcIjpcIlxcdTI5NUZcIixcbiAgXCJEb3duUmlnaHRWZWN0b3JcIjpcIlxcdTIxQzFcIixcbiAgXCJEb3duUmlnaHRWZWN0b3JCYXJcIjpcIlxcdTI5NTdcIixcbiAgXCJEb3duVGVlXCI6XCJcXHUyMkE0XCIsXG4gIFwiRG93blRlZUFycm93XCI6XCJcXHUyMUE3XCIsXG4gIFwiZHJia2Fyb3dcIjpcIlxcdTI5MTBcIixcbiAgXCJkcmNvcm5cIjpcIlxcdTIzMUZcIixcbiAgXCJkcmNyb3BcIjpcIlxcdTIzMENcIixcbiAgXCJEc2NyXCI6XCJcXHVEODM1XFx1REM5RlwiLFxuICBcImRzY3JcIjpcIlxcdUQ4MzVcXHVEQ0I5XCIsXG4gIFwiRFNjeVwiOlwiXFx1MDQwNVwiLFxuICBcImRzY3lcIjpcIlxcdTA0NTVcIixcbiAgXCJkc29sXCI6XCJcXHUyOUY2XCIsXG4gIFwiRHN0cm9rXCI6XCJcXHUwMTEwXCIsXG4gIFwiZHN0cm9rXCI6XCJcXHUwMTExXCIsXG4gIFwiZHRkb3RcIjpcIlxcdTIyRjFcIixcbiAgXCJkdHJpXCI6XCJcXHUyNUJGXCIsXG4gIFwiZHRyaWZcIjpcIlxcdTI1QkVcIixcbiAgXCJkdWFyclwiOlwiXFx1MjFGNVwiLFxuICBcImR1aGFyXCI6XCJcXHUyOTZGXCIsXG4gIFwiZHdhbmdsZVwiOlwiXFx1MjlBNlwiLFxuICBcIkRaY3lcIjpcIlxcdTA0MEZcIixcbiAgXCJkemN5XCI6XCJcXHUwNDVGXCIsXG4gIFwiZHppZ3JhcnJcIjpcIlxcdTI3RkZcIixcbiAgXCJFYWN1dGVcIjpcIlxcdTAwQzlcIixcbiAgXCJlYWN1dGVcIjpcIlxcdTAwRTlcIixcbiAgXCJlYXN0ZXJcIjpcIlxcdTJBNkVcIixcbiAgXCJFY2Fyb25cIjpcIlxcdTAxMUFcIixcbiAgXCJlY2Fyb25cIjpcIlxcdTAxMUJcIixcbiAgXCJlY2lyXCI6XCJcXHUyMjU2XCIsXG4gIFwiRWNpcmNcIjpcIlxcdTAwQ0FcIixcbiAgXCJlY2lyY1wiOlwiXFx1MDBFQVwiLFxuICBcImVjb2xvblwiOlwiXFx1MjI1NVwiLFxuICBcIkVjeVwiOlwiXFx1MDQyRFwiLFxuICBcImVjeVwiOlwiXFx1MDQ0RFwiLFxuICBcImVERG90XCI6XCJcXHUyQTc3XCIsXG4gIFwiRWRvdFwiOlwiXFx1MDExNlwiLFxuICBcImVEb3RcIjpcIlxcdTIyNTFcIixcbiAgXCJlZG90XCI6XCJcXHUwMTE3XCIsXG4gIFwiZWVcIjpcIlxcdTIxNDdcIixcbiAgXCJlZkRvdFwiOlwiXFx1MjI1MlwiLFxuICBcIkVmclwiOlwiXFx1RDgzNVxcdUREMDhcIixcbiAgXCJlZnJcIjpcIlxcdUQ4MzVcXHVERDIyXCIsXG4gIFwiZWdcIjpcIlxcdTJBOUFcIixcbiAgXCJFZ3JhdmVcIjpcIlxcdTAwQzhcIixcbiAgXCJlZ3JhdmVcIjpcIlxcdTAwRThcIixcbiAgXCJlZ3NcIjpcIlxcdTJBOTZcIixcbiAgXCJlZ3Nkb3RcIjpcIlxcdTJBOThcIixcbiAgXCJlbFwiOlwiXFx1MkE5OVwiLFxuICBcIkVsZW1lbnRcIjpcIlxcdTIyMDhcIixcbiAgXCJlbGludGVyc1wiOlwiXFx1MjNFN1wiLFxuICBcImVsbFwiOlwiXFx1MjExM1wiLFxuICBcImVsc1wiOlwiXFx1MkE5NVwiLFxuICBcImVsc2RvdFwiOlwiXFx1MkE5N1wiLFxuICBcIkVtYWNyXCI6XCJcXHUwMTEyXCIsXG4gIFwiZW1hY3JcIjpcIlxcdTAxMTNcIixcbiAgXCJlbXB0eVwiOlwiXFx1MjIwNVwiLFxuICBcImVtcHR5c2V0XCI6XCJcXHUyMjA1XCIsXG4gIFwiRW1wdHlTbWFsbFNxdWFyZVwiOlwiXFx1MjVGQlwiLFxuICBcImVtcHR5dlwiOlwiXFx1MjIwNVwiLFxuICBcIkVtcHR5VmVyeVNtYWxsU3F1YXJlXCI6XCJcXHUyNUFCXCIsXG4gIFwiZW1zcFwiOlwiXFx1MjAwM1wiLFxuICBcImVtc3AxM1wiOlwiXFx1MjAwNFwiLFxuICBcImVtc3AxNFwiOlwiXFx1MjAwNVwiLFxuICBcIkVOR1wiOlwiXFx1MDE0QVwiLFxuICBcImVuZ1wiOlwiXFx1MDE0QlwiLFxuICBcImVuc3BcIjpcIlxcdTIwMDJcIixcbiAgXCJFb2dvblwiOlwiXFx1MDExOFwiLFxuICBcImVvZ29uXCI6XCJcXHUwMTE5XCIsXG4gIFwiRW9wZlwiOlwiXFx1RDgzNVxcdUREM0NcIixcbiAgXCJlb3BmXCI6XCJcXHVEODM1XFx1REQ1NlwiLFxuICBcImVwYXJcIjpcIlxcdTIyRDVcIixcbiAgXCJlcGFyc2xcIjpcIlxcdTI5RTNcIixcbiAgXCJlcGx1c1wiOlwiXFx1MkE3MVwiLFxuICBcImVwc2lcIjpcIlxcdTAzQjVcIixcbiAgXCJFcHNpbG9uXCI6XCJcXHUwMzk1XCIsXG4gIFwiZXBzaWxvblwiOlwiXFx1MDNCNVwiLFxuICBcImVwc2l2XCI6XCJcXHUwM0Y1XCIsXG4gIFwiZXFjaXJjXCI6XCJcXHUyMjU2XCIsXG4gIFwiZXFjb2xvblwiOlwiXFx1MjI1NVwiLFxuICBcImVxc2ltXCI6XCJcXHUyMjQyXCIsXG4gIFwiZXFzbGFudGd0clwiOlwiXFx1MkE5NlwiLFxuICBcImVxc2xhbnRsZXNzXCI6XCJcXHUyQTk1XCIsXG4gIFwiRXF1YWxcIjpcIlxcdTJBNzVcIixcbiAgXCJlcXVhbHNcIjpcIlxcdTAwM0RcIixcbiAgXCJFcXVhbFRpbGRlXCI6XCJcXHUyMjQyXCIsXG4gIFwiZXF1ZXN0XCI6XCJcXHUyMjVGXCIsXG4gIFwiRXF1aWxpYnJpdW1cIjpcIlxcdTIxQ0NcIixcbiAgXCJlcXVpdlwiOlwiXFx1MjI2MVwiLFxuICBcImVxdWl2RERcIjpcIlxcdTJBNzhcIixcbiAgXCJlcXZwYXJzbFwiOlwiXFx1MjlFNVwiLFxuICBcImVyYXJyXCI6XCJcXHUyOTcxXCIsXG4gIFwiZXJEb3RcIjpcIlxcdTIyNTNcIixcbiAgXCJFc2NyXCI6XCJcXHUyMTMwXCIsXG4gIFwiZXNjclwiOlwiXFx1MjEyRlwiLFxuICBcImVzZG90XCI6XCJcXHUyMjUwXCIsXG4gIFwiRXNpbVwiOlwiXFx1MkE3M1wiLFxuICBcImVzaW1cIjpcIlxcdTIyNDJcIixcbiAgXCJFdGFcIjpcIlxcdTAzOTdcIixcbiAgXCJldGFcIjpcIlxcdTAzQjdcIixcbiAgXCJFVEhcIjpcIlxcdTAwRDBcIixcbiAgXCJldGhcIjpcIlxcdTAwRjBcIixcbiAgXCJFdW1sXCI6XCJcXHUwMENCXCIsXG4gIFwiZXVtbFwiOlwiXFx1MDBFQlwiLFxuICBcImV1cm9cIjpcIlxcdTIwQUNcIixcbiAgXCJleGNsXCI6XCJcXHUwMDIxXCIsXG4gIFwiZXhpc3RcIjpcIlxcdTIyMDNcIixcbiAgXCJFeGlzdHNcIjpcIlxcdTIyMDNcIixcbiAgXCJleHBlY3RhdGlvblwiOlwiXFx1MjEzMFwiLFxuICBcIkV4cG9uZW50aWFsRVwiOlwiXFx1MjE0N1wiLFxuICBcImV4cG9uZW50aWFsZVwiOlwiXFx1MjE0N1wiLFxuICBcImZhbGxpbmdkb3RzZXFcIjpcIlxcdTIyNTJcIixcbiAgXCJGY3lcIjpcIlxcdTA0MjRcIixcbiAgXCJmY3lcIjpcIlxcdTA0NDRcIixcbiAgXCJmZW1hbGVcIjpcIlxcdTI2NDBcIixcbiAgXCJmZmlsaWdcIjpcIlxcdUZCMDNcIixcbiAgXCJmZmxpZ1wiOlwiXFx1RkIwMFwiLFxuICBcImZmbGxpZ1wiOlwiXFx1RkIwNFwiLFxuICBcIkZmclwiOlwiXFx1RDgzNVxcdUREMDlcIixcbiAgXCJmZnJcIjpcIlxcdUQ4MzVcXHVERDIzXCIsXG4gIFwiZmlsaWdcIjpcIlxcdUZCMDFcIixcbiAgXCJGaWxsZWRTbWFsbFNxdWFyZVwiOlwiXFx1MjVGQ1wiLFxuICBcIkZpbGxlZFZlcnlTbWFsbFNxdWFyZVwiOlwiXFx1MjVBQVwiLFxuICBcImZqbGlnXCI6XCJcXHUwMDY2XFx1MDA2QVwiLFxuICBcImZsYXRcIjpcIlxcdTI2NkRcIixcbiAgXCJmbGxpZ1wiOlwiXFx1RkIwMlwiLFxuICBcImZsdG5zXCI6XCJcXHUyNUIxXCIsXG4gIFwiZm5vZlwiOlwiXFx1MDE5MlwiLFxuICBcIkZvcGZcIjpcIlxcdUQ4MzVcXHVERDNEXCIsXG4gIFwiZm9wZlwiOlwiXFx1RDgzNVxcdURENTdcIixcbiAgXCJGb3JBbGxcIjpcIlxcdTIyMDBcIixcbiAgXCJmb3JhbGxcIjpcIlxcdTIyMDBcIixcbiAgXCJmb3JrXCI6XCJcXHUyMkQ0XCIsXG4gIFwiZm9ya3ZcIjpcIlxcdTJBRDlcIixcbiAgXCJGb3VyaWVydHJmXCI6XCJcXHUyMTMxXCIsXG4gIFwiZnBhcnRpbnRcIjpcIlxcdTJBMERcIixcbiAgXCJmcmFjMTJcIjpcIlxcdTAwQkRcIixcbiAgXCJmcmFjMTNcIjpcIlxcdTIxNTNcIixcbiAgXCJmcmFjMTRcIjpcIlxcdTAwQkNcIixcbiAgXCJmcmFjMTVcIjpcIlxcdTIxNTVcIixcbiAgXCJmcmFjMTZcIjpcIlxcdTIxNTlcIixcbiAgXCJmcmFjMThcIjpcIlxcdTIxNUJcIixcbiAgXCJmcmFjMjNcIjpcIlxcdTIxNTRcIixcbiAgXCJmcmFjMjVcIjpcIlxcdTIxNTZcIixcbiAgXCJmcmFjMzRcIjpcIlxcdTAwQkVcIixcbiAgXCJmcmFjMzVcIjpcIlxcdTIxNTdcIixcbiAgXCJmcmFjMzhcIjpcIlxcdTIxNUNcIixcbiAgXCJmcmFjNDVcIjpcIlxcdTIxNThcIixcbiAgXCJmcmFjNTZcIjpcIlxcdTIxNUFcIixcbiAgXCJmcmFjNThcIjpcIlxcdTIxNURcIixcbiAgXCJmcmFjNzhcIjpcIlxcdTIxNUVcIixcbiAgXCJmcmFzbFwiOlwiXFx1MjA0NFwiLFxuICBcImZyb3duXCI6XCJcXHUyMzIyXCIsXG4gIFwiRnNjclwiOlwiXFx1MjEzMVwiLFxuICBcImZzY3JcIjpcIlxcdUQ4MzVcXHVEQ0JCXCIsXG4gIFwiZ2FjdXRlXCI6XCJcXHUwMUY1XCIsXG4gIFwiR2FtbWFcIjpcIlxcdTAzOTNcIixcbiAgXCJnYW1tYVwiOlwiXFx1MDNCM1wiLFxuICBcIkdhbW1hZFwiOlwiXFx1MDNEQ1wiLFxuICBcImdhbW1hZFwiOlwiXFx1MDNERFwiLFxuICBcImdhcFwiOlwiXFx1MkE4NlwiLFxuICBcIkdicmV2ZVwiOlwiXFx1MDExRVwiLFxuICBcImdicmV2ZVwiOlwiXFx1MDExRlwiLFxuICBcIkdjZWRpbFwiOlwiXFx1MDEyMlwiLFxuICBcIkdjaXJjXCI6XCJcXHUwMTFDXCIsXG4gIFwiZ2NpcmNcIjpcIlxcdTAxMURcIixcbiAgXCJHY3lcIjpcIlxcdTA0MTNcIixcbiAgXCJnY3lcIjpcIlxcdTA0MzNcIixcbiAgXCJHZG90XCI6XCJcXHUwMTIwXCIsXG4gIFwiZ2RvdFwiOlwiXFx1MDEyMVwiLFxuICBcImdFXCI6XCJcXHUyMjY3XCIsXG4gIFwiZ2VcIjpcIlxcdTIyNjVcIixcbiAgXCJnRWxcIjpcIlxcdTJBOENcIixcbiAgXCJnZWxcIjpcIlxcdTIyREJcIixcbiAgXCJnZXFcIjpcIlxcdTIyNjVcIixcbiAgXCJnZXFxXCI6XCJcXHUyMjY3XCIsXG4gIFwiZ2Vxc2xhbnRcIjpcIlxcdTJBN0VcIixcbiAgXCJnZXNcIjpcIlxcdTJBN0VcIixcbiAgXCJnZXNjY1wiOlwiXFx1MkFBOVwiLFxuICBcImdlc2RvdFwiOlwiXFx1MkE4MFwiLFxuICBcImdlc2RvdG9cIjpcIlxcdTJBODJcIixcbiAgXCJnZXNkb3RvbFwiOlwiXFx1MkE4NFwiLFxuICBcImdlc2xcIjpcIlxcdTIyREJcXHVGRTAwXCIsXG4gIFwiZ2VzbGVzXCI6XCJcXHUyQTk0XCIsXG4gIFwiR2ZyXCI6XCJcXHVEODM1XFx1REQwQVwiLFxuICBcImdmclwiOlwiXFx1RDgzNVxcdUREMjRcIixcbiAgXCJHZ1wiOlwiXFx1MjJEOVwiLFxuICBcImdnXCI6XCJcXHUyMjZCXCIsXG4gIFwiZ2dnXCI6XCJcXHUyMkQ5XCIsXG4gIFwiZ2ltZWxcIjpcIlxcdTIxMzdcIixcbiAgXCJHSmN5XCI6XCJcXHUwNDAzXCIsXG4gIFwiZ2pjeVwiOlwiXFx1MDQ1M1wiLFxuICBcImdsXCI6XCJcXHUyMjc3XCIsXG4gIFwiZ2xhXCI6XCJcXHUyQUE1XCIsXG4gIFwiZ2xFXCI6XCJcXHUyQTkyXCIsXG4gIFwiZ2xqXCI6XCJcXHUyQUE0XCIsXG4gIFwiZ25hcFwiOlwiXFx1MkE4QVwiLFxuICBcImduYXBwcm94XCI6XCJcXHUyQThBXCIsXG4gIFwiZ25FXCI6XCJcXHUyMjY5XCIsXG4gIFwiZ25lXCI6XCJcXHUyQTg4XCIsXG4gIFwiZ25lcVwiOlwiXFx1MkE4OFwiLFxuICBcImduZXFxXCI6XCJcXHUyMjY5XCIsXG4gIFwiZ25zaW1cIjpcIlxcdTIyRTdcIixcbiAgXCJHb3BmXCI6XCJcXHVEODM1XFx1REQzRVwiLFxuICBcImdvcGZcIjpcIlxcdUQ4MzVcXHVERDU4XCIsXG4gIFwiZ3JhdmVcIjpcIlxcdTAwNjBcIixcbiAgXCJHcmVhdGVyRXF1YWxcIjpcIlxcdTIyNjVcIixcbiAgXCJHcmVhdGVyRXF1YWxMZXNzXCI6XCJcXHUyMkRCXCIsXG4gIFwiR3JlYXRlckZ1bGxFcXVhbFwiOlwiXFx1MjI2N1wiLFxuICBcIkdyZWF0ZXJHcmVhdGVyXCI6XCJcXHUyQUEyXCIsXG4gIFwiR3JlYXRlckxlc3NcIjpcIlxcdTIyNzdcIixcbiAgXCJHcmVhdGVyU2xhbnRFcXVhbFwiOlwiXFx1MkE3RVwiLFxuICBcIkdyZWF0ZXJUaWxkZVwiOlwiXFx1MjI3M1wiLFxuICBcIkdzY3JcIjpcIlxcdUQ4MzVcXHVEQ0EyXCIsXG4gIFwiZ3NjclwiOlwiXFx1MjEwQVwiLFxuICBcImdzaW1cIjpcIlxcdTIyNzNcIixcbiAgXCJnc2ltZVwiOlwiXFx1MkE4RVwiLFxuICBcImdzaW1sXCI6XCJcXHUyQTkwXCIsXG4gIFwiR1RcIjpcIlxcdTAwM0VcIixcbiAgXCJHdFwiOlwiXFx1MjI2QlwiLFxuICBcImd0XCI6XCJcXHUwMDNFXCIsXG4gIFwiZ3RjY1wiOlwiXFx1MkFBN1wiLFxuICBcImd0Y2lyXCI6XCJcXHUyQTdBXCIsXG4gIFwiZ3Rkb3RcIjpcIlxcdTIyRDdcIixcbiAgXCJndGxQYXJcIjpcIlxcdTI5OTVcIixcbiAgXCJndHF1ZXN0XCI6XCJcXHUyQTdDXCIsXG4gIFwiZ3RyYXBwcm94XCI6XCJcXHUyQTg2XCIsXG4gIFwiZ3RyYXJyXCI6XCJcXHUyOTc4XCIsXG4gIFwiZ3RyZG90XCI6XCJcXHUyMkQ3XCIsXG4gIFwiZ3RyZXFsZXNzXCI6XCJcXHUyMkRCXCIsXG4gIFwiZ3RyZXFxbGVzc1wiOlwiXFx1MkE4Q1wiLFxuICBcImd0cmxlc3NcIjpcIlxcdTIyNzdcIixcbiAgXCJndHJzaW1cIjpcIlxcdTIyNzNcIixcbiAgXCJndmVydG5lcXFcIjpcIlxcdTIyNjlcXHVGRTAwXCIsXG4gIFwiZ3ZuRVwiOlwiXFx1MjI2OVxcdUZFMDBcIixcbiAgXCJIYWNla1wiOlwiXFx1MDJDN1wiLFxuICBcImhhaXJzcFwiOlwiXFx1MjAwQVwiLFxuICBcImhhbGZcIjpcIlxcdTAwQkRcIixcbiAgXCJoYW1pbHRcIjpcIlxcdTIxMEJcIixcbiAgXCJIQVJEY3lcIjpcIlxcdTA0MkFcIixcbiAgXCJoYXJkY3lcIjpcIlxcdTA0NEFcIixcbiAgXCJoQXJyXCI6XCJcXHUyMUQ0XCIsXG4gIFwiaGFyclwiOlwiXFx1MjE5NFwiLFxuICBcImhhcnJjaXJcIjpcIlxcdTI5NDhcIixcbiAgXCJoYXJyd1wiOlwiXFx1MjFBRFwiLFxuICBcIkhhdFwiOlwiXFx1MDA1RVwiLFxuICBcImhiYXJcIjpcIlxcdTIxMEZcIixcbiAgXCJIY2lyY1wiOlwiXFx1MDEyNFwiLFxuICBcImhjaXJjXCI6XCJcXHUwMTI1XCIsXG4gIFwiaGVhcnRzXCI6XCJcXHUyNjY1XCIsXG4gIFwiaGVhcnRzdWl0XCI6XCJcXHUyNjY1XCIsXG4gIFwiaGVsbGlwXCI6XCJcXHUyMDI2XCIsXG4gIFwiaGVyY29uXCI6XCJcXHUyMkI5XCIsXG4gIFwiSGZyXCI6XCJcXHUyMTBDXCIsXG4gIFwiaGZyXCI6XCJcXHVEODM1XFx1REQyNVwiLFxuICBcIkhpbGJlcnRTcGFjZVwiOlwiXFx1MjEwQlwiLFxuICBcImhrc2Vhcm93XCI6XCJcXHUyOTI1XCIsXG4gIFwiaGtzd2Fyb3dcIjpcIlxcdTI5MjZcIixcbiAgXCJob2FyclwiOlwiXFx1MjFGRlwiLFxuICBcImhvbXRodFwiOlwiXFx1MjIzQlwiLFxuICBcImhvb2tsZWZ0YXJyb3dcIjpcIlxcdTIxQTlcIixcbiAgXCJob29rcmlnaHRhcnJvd1wiOlwiXFx1MjFBQVwiLFxuICBcIkhvcGZcIjpcIlxcdTIxMERcIixcbiAgXCJob3BmXCI6XCJcXHVEODM1XFx1REQ1OVwiLFxuICBcImhvcmJhclwiOlwiXFx1MjAxNVwiLFxuICBcIkhvcml6b250YWxMaW5lXCI6XCJcXHUyNTAwXCIsXG4gIFwiSHNjclwiOlwiXFx1MjEwQlwiLFxuICBcImhzY3JcIjpcIlxcdUQ4MzVcXHVEQ0JEXCIsXG4gIFwiaHNsYXNoXCI6XCJcXHUyMTBGXCIsXG4gIFwiSHN0cm9rXCI6XCJcXHUwMTI2XCIsXG4gIFwiaHN0cm9rXCI6XCJcXHUwMTI3XCIsXG4gIFwiSHVtcERvd25IdW1wXCI6XCJcXHUyMjRFXCIsXG4gIFwiSHVtcEVxdWFsXCI6XCJcXHUyMjRGXCIsXG4gIFwiaHlidWxsXCI6XCJcXHUyMDQzXCIsXG4gIFwiaHlwaGVuXCI6XCJcXHUyMDEwXCIsXG4gIFwiSWFjdXRlXCI6XCJcXHUwMENEXCIsXG4gIFwiaWFjdXRlXCI6XCJcXHUwMEVEXCIsXG4gIFwiaWNcIjpcIlxcdTIwNjNcIixcbiAgXCJJY2lyY1wiOlwiXFx1MDBDRVwiLFxuICBcImljaXJjXCI6XCJcXHUwMEVFXCIsXG4gIFwiSWN5XCI6XCJcXHUwNDE4XCIsXG4gIFwiaWN5XCI6XCJcXHUwNDM4XCIsXG4gIFwiSWRvdFwiOlwiXFx1MDEzMFwiLFxuICBcIklFY3lcIjpcIlxcdTA0MTVcIixcbiAgXCJpZWN5XCI6XCJcXHUwNDM1XCIsXG4gIFwiaWV4Y2xcIjpcIlxcdTAwQTFcIixcbiAgXCJpZmZcIjpcIlxcdTIxRDRcIixcbiAgXCJJZnJcIjpcIlxcdTIxMTFcIixcbiAgXCJpZnJcIjpcIlxcdUQ4MzVcXHVERDI2XCIsXG4gIFwiSWdyYXZlXCI6XCJcXHUwMENDXCIsXG4gIFwiaWdyYXZlXCI6XCJcXHUwMEVDXCIsXG4gIFwiaWlcIjpcIlxcdTIxNDhcIixcbiAgXCJpaWlpbnRcIjpcIlxcdTJBMENcIixcbiAgXCJpaWludFwiOlwiXFx1MjIyRFwiLFxuICBcImlpbmZpblwiOlwiXFx1MjlEQ1wiLFxuICBcImlpb3RhXCI6XCJcXHUyMTI5XCIsXG4gIFwiSUpsaWdcIjpcIlxcdTAxMzJcIixcbiAgXCJpamxpZ1wiOlwiXFx1MDEzM1wiLFxuICBcIkltXCI6XCJcXHUyMTExXCIsXG4gIFwiSW1hY3JcIjpcIlxcdTAxMkFcIixcbiAgXCJpbWFjclwiOlwiXFx1MDEyQlwiLFxuICBcImltYWdlXCI6XCJcXHUyMTExXCIsXG4gIFwiSW1hZ2luYXJ5SVwiOlwiXFx1MjE0OFwiLFxuICBcImltYWdsaW5lXCI6XCJcXHUyMTEwXCIsXG4gIFwiaW1hZ3BhcnRcIjpcIlxcdTIxMTFcIixcbiAgXCJpbWF0aFwiOlwiXFx1MDEzMVwiLFxuICBcImltb2ZcIjpcIlxcdTIyQjdcIixcbiAgXCJpbXBlZFwiOlwiXFx1MDFCNVwiLFxuICBcIkltcGxpZXNcIjpcIlxcdTIxRDJcIixcbiAgXCJpblwiOlwiXFx1MjIwOFwiLFxuICBcImluY2FyZVwiOlwiXFx1MjEwNVwiLFxuICBcImluZmluXCI6XCJcXHUyMjFFXCIsXG4gIFwiaW5maW50aWVcIjpcIlxcdTI5RERcIixcbiAgXCJpbm9kb3RcIjpcIlxcdTAxMzFcIixcbiAgXCJJbnRcIjpcIlxcdTIyMkNcIixcbiAgXCJpbnRcIjpcIlxcdTIyMkJcIixcbiAgXCJpbnRjYWxcIjpcIlxcdTIyQkFcIixcbiAgXCJpbnRlZ2Vyc1wiOlwiXFx1MjEyNFwiLFxuICBcIkludGVncmFsXCI6XCJcXHUyMjJCXCIsXG4gIFwiaW50ZXJjYWxcIjpcIlxcdTIyQkFcIixcbiAgXCJJbnRlcnNlY3Rpb25cIjpcIlxcdTIyQzJcIixcbiAgXCJpbnRsYXJoa1wiOlwiXFx1MkExN1wiLFxuICBcImludHByb2RcIjpcIlxcdTJBM0NcIixcbiAgXCJJbnZpc2libGVDb21tYVwiOlwiXFx1MjA2M1wiLFxuICBcIkludmlzaWJsZVRpbWVzXCI6XCJcXHUyMDYyXCIsXG4gIFwiSU9jeVwiOlwiXFx1MDQwMVwiLFxuICBcImlvY3lcIjpcIlxcdTA0NTFcIixcbiAgXCJJb2dvblwiOlwiXFx1MDEyRVwiLFxuICBcImlvZ29uXCI6XCJcXHUwMTJGXCIsXG4gIFwiSW9wZlwiOlwiXFx1RDgzNVxcdURENDBcIixcbiAgXCJpb3BmXCI6XCJcXHVEODM1XFx1REQ1QVwiLFxuICBcIklvdGFcIjpcIlxcdTAzOTlcIixcbiAgXCJpb3RhXCI6XCJcXHUwM0I5XCIsXG4gIFwiaXByb2RcIjpcIlxcdTJBM0NcIixcbiAgXCJpcXVlc3RcIjpcIlxcdTAwQkZcIixcbiAgXCJJc2NyXCI6XCJcXHUyMTEwXCIsXG4gIFwiaXNjclwiOlwiXFx1RDgzNVxcdURDQkVcIixcbiAgXCJpc2luXCI6XCJcXHUyMjA4XCIsXG4gIFwiaXNpbmRvdFwiOlwiXFx1MjJGNVwiLFxuICBcImlzaW5FXCI6XCJcXHUyMkY5XCIsXG4gIFwiaXNpbnNcIjpcIlxcdTIyRjRcIixcbiAgXCJpc2luc3ZcIjpcIlxcdTIyRjNcIixcbiAgXCJpc2ludlwiOlwiXFx1MjIwOFwiLFxuICBcIml0XCI6XCJcXHUyMDYyXCIsXG4gIFwiSXRpbGRlXCI6XCJcXHUwMTI4XCIsXG4gIFwiaXRpbGRlXCI6XCJcXHUwMTI5XCIsXG4gIFwiSXVrY3lcIjpcIlxcdTA0MDZcIixcbiAgXCJpdWtjeVwiOlwiXFx1MDQ1NlwiLFxuICBcIkl1bWxcIjpcIlxcdTAwQ0ZcIixcbiAgXCJpdW1sXCI6XCJcXHUwMEVGXCIsXG4gIFwiSmNpcmNcIjpcIlxcdTAxMzRcIixcbiAgXCJqY2lyY1wiOlwiXFx1MDEzNVwiLFxuICBcIkpjeVwiOlwiXFx1MDQxOVwiLFxuICBcImpjeVwiOlwiXFx1MDQzOVwiLFxuICBcIkpmclwiOlwiXFx1RDgzNVxcdUREMERcIixcbiAgXCJqZnJcIjpcIlxcdUQ4MzVcXHVERDI3XCIsXG4gIFwiam1hdGhcIjpcIlxcdTAyMzdcIixcbiAgXCJKb3BmXCI6XCJcXHVEODM1XFx1REQ0MVwiLFxuICBcImpvcGZcIjpcIlxcdUQ4MzVcXHVERDVCXCIsXG4gIFwiSnNjclwiOlwiXFx1RDgzNVxcdURDQTVcIixcbiAgXCJqc2NyXCI6XCJcXHVEODM1XFx1RENCRlwiLFxuICBcIkpzZXJjeVwiOlwiXFx1MDQwOFwiLFxuICBcImpzZXJjeVwiOlwiXFx1MDQ1OFwiLFxuICBcIkp1a2N5XCI6XCJcXHUwNDA0XCIsXG4gIFwianVrY3lcIjpcIlxcdTA0NTRcIixcbiAgXCJLYXBwYVwiOlwiXFx1MDM5QVwiLFxuICBcImthcHBhXCI6XCJcXHUwM0JBXCIsXG4gIFwia2FwcGF2XCI6XCJcXHUwM0YwXCIsXG4gIFwiS2NlZGlsXCI6XCJcXHUwMTM2XCIsXG4gIFwia2NlZGlsXCI6XCJcXHUwMTM3XCIsXG4gIFwiS2N5XCI6XCJcXHUwNDFBXCIsXG4gIFwia2N5XCI6XCJcXHUwNDNBXCIsXG4gIFwiS2ZyXCI6XCJcXHVEODM1XFx1REQwRVwiLFxuICBcImtmclwiOlwiXFx1RDgzNVxcdUREMjhcIixcbiAgXCJrZ3JlZW5cIjpcIlxcdTAxMzhcIixcbiAgXCJLSGN5XCI6XCJcXHUwNDI1XCIsXG4gIFwia2hjeVwiOlwiXFx1MDQ0NVwiLFxuICBcIktKY3lcIjpcIlxcdTA0MENcIixcbiAgXCJramN5XCI6XCJcXHUwNDVDXCIsXG4gIFwiS29wZlwiOlwiXFx1RDgzNVxcdURENDJcIixcbiAgXCJrb3BmXCI6XCJcXHVEODM1XFx1REQ1Q1wiLFxuICBcIktzY3JcIjpcIlxcdUQ4MzVcXHVEQ0E2XCIsXG4gIFwia3NjclwiOlwiXFx1RDgzNVxcdURDQzBcIixcbiAgXCJsQWFyclwiOlwiXFx1MjFEQVwiLFxuICBcIkxhY3V0ZVwiOlwiXFx1MDEzOVwiLFxuICBcImxhY3V0ZVwiOlwiXFx1MDEzQVwiLFxuICBcImxhZW1wdHl2XCI6XCJcXHUyOUI0XCIsXG4gIFwibGFncmFuXCI6XCJcXHUyMTEyXCIsXG4gIFwiTGFtYmRhXCI6XCJcXHUwMzlCXCIsXG4gIFwibGFtYmRhXCI6XCJcXHUwM0JCXCIsXG4gIFwiTGFuZ1wiOlwiXFx1MjdFQVwiLFxuICBcImxhbmdcIjpcIlxcdTI3RThcIixcbiAgXCJsYW5nZFwiOlwiXFx1Mjk5MVwiLFxuICBcImxhbmdsZVwiOlwiXFx1MjdFOFwiLFxuICBcImxhcFwiOlwiXFx1MkE4NVwiLFxuICBcIkxhcGxhY2V0cmZcIjpcIlxcdTIxMTJcIixcbiAgXCJsYXF1b1wiOlwiXFx1MDBBQlwiLFxuICBcIkxhcnJcIjpcIlxcdTIxOUVcIixcbiAgXCJsQXJyXCI6XCJcXHUyMUQwXCIsXG4gIFwibGFyclwiOlwiXFx1MjE5MFwiLFxuICBcImxhcnJiXCI6XCJcXHUyMUU0XCIsXG4gIFwibGFycmJmc1wiOlwiXFx1MjkxRlwiLFxuICBcImxhcnJmc1wiOlwiXFx1MjkxRFwiLFxuICBcImxhcnJoa1wiOlwiXFx1MjFBOVwiLFxuICBcImxhcnJscFwiOlwiXFx1MjFBQlwiLFxuICBcImxhcnJwbFwiOlwiXFx1MjkzOVwiLFxuICBcImxhcnJzaW1cIjpcIlxcdTI5NzNcIixcbiAgXCJsYXJydGxcIjpcIlxcdTIxQTJcIixcbiAgXCJsYXRcIjpcIlxcdTJBQUJcIixcbiAgXCJsQXRhaWxcIjpcIlxcdTI5MUJcIixcbiAgXCJsYXRhaWxcIjpcIlxcdTI5MTlcIixcbiAgXCJsYXRlXCI6XCJcXHUyQUFEXCIsXG4gIFwibGF0ZXNcIjpcIlxcdTJBQURcXHVGRTAwXCIsXG4gIFwibEJhcnJcIjpcIlxcdTI5MEVcIixcbiAgXCJsYmFyclwiOlwiXFx1MjkwQ1wiLFxuICBcImxiYnJrXCI6XCJcXHUyNzcyXCIsXG4gIFwibGJyYWNlXCI6XCJcXHUwMDdCXCIsXG4gIFwibGJyYWNrXCI6XCJcXHUwMDVCXCIsXG4gIFwibGJya2VcIjpcIlxcdTI5OEJcIixcbiAgXCJsYnJrc2xkXCI6XCJcXHUyOThGXCIsXG4gIFwibGJya3NsdVwiOlwiXFx1Mjk4RFwiLFxuICBcIkxjYXJvblwiOlwiXFx1MDEzRFwiLFxuICBcImxjYXJvblwiOlwiXFx1MDEzRVwiLFxuICBcIkxjZWRpbFwiOlwiXFx1MDEzQlwiLFxuICBcImxjZWRpbFwiOlwiXFx1MDEzQ1wiLFxuICBcImxjZWlsXCI6XCJcXHUyMzA4XCIsXG4gIFwibGN1YlwiOlwiXFx1MDA3QlwiLFxuICBcIkxjeVwiOlwiXFx1MDQxQlwiLFxuICBcImxjeVwiOlwiXFx1MDQzQlwiLFxuICBcImxkY2FcIjpcIlxcdTI5MzZcIixcbiAgXCJsZHF1b1wiOlwiXFx1MjAxQ1wiLFxuICBcImxkcXVvclwiOlwiXFx1MjAxRVwiLFxuICBcImxkcmRoYXJcIjpcIlxcdTI5NjdcIixcbiAgXCJsZHJ1c2hhclwiOlwiXFx1Mjk0QlwiLFxuICBcImxkc2hcIjpcIlxcdTIxQjJcIixcbiAgXCJsRVwiOlwiXFx1MjI2NlwiLFxuICBcImxlXCI6XCJcXHUyMjY0XCIsXG4gIFwiTGVmdEFuZ2xlQnJhY2tldFwiOlwiXFx1MjdFOFwiLFxuICBcIkxlZnRBcnJvd1wiOlwiXFx1MjE5MFwiLFxuICBcIkxlZnRhcnJvd1wiOlwiXFx1MjFEMFwiLFxuICBcImxlZnRhcnJvd1wiOlwiXFx1MjE5MFwiLFxuICBcIkxlZnRBcnJvd0JhclwiOlwiXFx1MjFFNFwiLFxuICBcIkxlZnRBcnJvd1JpZ2h0QXJyb3dcIjpcIlxcdTIxQzZcIixcbiAgXCJsZWZ0YXJyb3d0YWlsXCI6XCJcXHUyMUEyXCIsXG4gIFwiTGVmdENlaWxpbmdcIjpcIlxcdTIzMDhcIixcbiAgXCJMZWZ0RG91YmxlQnJhY2tldFwiOlwiXFx1MjdFNlwiLFxuICBcIkxlZnREb3duVGVlVmVjdG9yXCI6XCJcXHUyOTYxXCIsXG4gIFwiTGVmdERvd25WZWN0b3JcIjpcIlxcdTIxQzNcIixcbiAgXCJMZWZ0RG93blZlY3RvckJhclwiOlwiXFx1Mjk1OVwiLFxuICBcIkxlZnRGbG9vclwiOlwiXFx1MjMwQVwiLFxuICBcImxlZnRoYXJwb29uZG93blwiOlwiXFx1MjFCRFwiLFxuICBcImxlZnRoYXJwb29udXBcIjpcIlxcdTIxQkNcIixcbiAgXCJsZWZ0bGVmdGFycm93c1wiOlwiXFx1MjFDN1wiLFxuICBcIkxlZnRSaWdodEFycm93XCI6XCJcXHUyMTk0XCIsXG4gIFwiTGVmdHJpZ2h0YXJyb3dcIjpcIlxcdTIxRDRcIixcbiAgXCJsZWZ0cmlnaHRhcnJvd1wiOlwiXFx1MjE5NFwiLFxuICBcImxlZnRyaWdodGFycm93c1wiOlwiXFx1MjFDNlwiLFxuICBcImxlZnRyaWdodGhhcnBvb25zXCI6XCJcXHUyMUNCXCIsXG4gIFwibGVmdHJpZ2h0c3F1aWdhcnJvd1wiOlwiXFx1MjFBRFwiLFxuICBcIkxlZnRSaWdodFZlY3RvclwiOlwiXFx1Mjk0RVwiLFxuICBcIkxlZnRUZWVcIjpcIlxcdTIyQTNcIixcbiAgXCJMZWZ0VGVlQXJyb3dcIjpcIlxcdTIxQTRcIixcbiAgXCJMZWZ0VGVlVmVjdG9yXCI6XCJcXHUyOTVBXCIsXG4gIFwibGVmdHRocmVldGltZXNcIjpcIlxcdTIyQ0JcIixcbiAgXCJMZWZ0VHJpYW5nbGVcIjpcIlxcdTIyQjJcIixcbiAgXCJMZWZ0VHJpYW5nbGVCYXJcIjpcIlxcdTI5Q0ZcIixcbiAgXCJMZWZ0VHJpYW5nbGVFcXVhbFwiOlwiXFx1MjJCNFwiLFxuICBcIkxlZnRVcERvd25WZWN0b3JcIjpcIlxcdTI5NTFcIixcbiAgXCJMZWZ0VXBUZWVWZWN0b3JcIjpcIlxcdTI5NjBcIixcbiAgXCJMZWZ0VXBWZWN0b3JcIjpcIlxcdTIxQkZcIixcbiAgXCJMZWZ0VXBWZWN0b3JCYXJcIjpcIlxcdTI5NThcIixcbiAgXCJMZWZ0VmVjdG9yXCI6XCJcXHUyMUJDXCIsXG4gIFwiTGVmdFZlY3RvckJhclwiOlwiXFx1Mjk1MlwiLFxuICBcImxFZ1wiOlwiXFx1MkE4QlwiLFxuICBcImxlZ1wiOlwiXFx1MjJEQVwiLFxuICBcImxlcVwiOlwiXFx1MjI2NFwiLFxuICBcImxlcXFcIjpcIlxcdTIyNjZcIixcbiAgXCJsZXFzbGFudFwiOlwiXFx1MkE3RFwiLFxuICBcImxlc1wiOlwiXFx1MkE3RFwiLFxuICBcImxlc2NjXCI6XCJcXHUyQUE4XCIsXG4gIFwibGVzZG90XCI6XCJcXHUyQTdGXCIsXG4gIFwibGVzZG90b1wiOlwiXFx1MkE4MVwiLFxuICBcImxlc2RvdG9yXCI6XCJcXHUyQTgzXCIsXG4gIFwibGVzZ1wiOlwiXFx1MjJEQVxcdUZFMDBcIixcbiAgXCJsZXNnZXNcIjpcIlxcdTJBOTNcIixcbiAgXCJsZXNzYXBwcm94XCI6XCJcXHUyQTg1XCIsXG4gIFwibGVzc2RvdFwiOlwiXFx1MjJENlwiLFxuICBcImxlc3NlcWd0clwiOlwiXFx1MjJEQVwiLFxuICBcImxlc3NlcXFndHJcIjpcIlxcdTJBOEJcIixcbiAgXCJMZXNzRXF1YWxHcmVhdGVyXCI6XCJcXHUyMkRBXCIsXG4gIFwiTGVzc0Z1bGxFcXVhbFwiOlwiXFx1MjI2NlwiLFxuICBcIkxlc3NHcmVhdGVyXCI6XCJcXHUyMjc2XCIsXG4gIFwibGVzc2d0clwiOlwiXFx1MjI3NlwiLFxuICBcIkxlc3NMZXNzXCI6XCJcXHUyQUExXCIsXG4gIFwibGVzc3NpbVwiOlwiXFx1MjI3MlwiLFxuICBcIkxlc3NTbGFudEVxdWFsXCI6XCJcXHUyQTdEXCIsXG4gIFwiTGVzc1RpbGRlXCI6XCJcXHUyMjcyXCIsXG4gIFwibGZpc2h0XCI6XCJcXHUyOTdDXCIsXG4gIFwibGZsb29yXCI6XCJcXHUyMzBBXCIsXG4gIFwiTGZyXCI6XCJcXHVEODM1XFx1REQwRlwiLFxuICBcImxmclwiOlwiXFx1RDgzNVxcdUREMjlcIixcbiAgXCJsZ1wiOlwiXFx1MjI3NlwiLFxuICBcImxnRVwiOlwiXFx1MkE5MVwiLFxuICBcImxIYXJcIjpcIlxcdTI5NjJcIixcbiAgXCJsaGFyZFwiOlwiXFx1MjFCRFwiLFxuICBcImxoYXJ1XCI6XCJcXHUyMUJDXCIsXG4gIFwibGhhcnVsXCI6XCJcXHUyOTZBXCIsXG4gIFwibGhibGtcIjpcIlxcdTI1ODRcIixcbiAgXCJMSmN5XCI6XCJcXHUwNDA5XCIsXG4gIFwibGpjeVwiOlwiXFx1MDQ1OVwiLFxuICBcIkxsXCI6XCJcXHUyMkQ4XCIsXG4gIFwibGxcIjpcIlxcdTIyNkFcIixcbiAgXCJsbGFyclwiOlwiXFx1MjFDN1wiLFxuICBcImxsY29ybmVyXCI6XCJcXHUyMzFFXCIsXG4gIFwiTGxlZnRhcnJvd1wiOlwiXFx1MjFEQVwiLFxuICBcImxsaGFyZFwiOlwiXFx1Mjk2QlwiLFxuICBcImxsdHJpXCI6XCJcXHUyNUZBXCIsXG4gIFwiTG1pZG90XCI6XCJcXHUwMTNGXCIsXG4gIFwibG1pZG90XCI6XCJcXHUwMTQwXCIsXG4gIFwibG1vdXN0XCI6XCJcXHUyM0IwXCIsXG4gIFwibG1vdXN0YWNoZVwiOlwiXFx1MjNCMFwiLFxuICBcImxuYXBcIjpcIlxcdTJBODlcIixcbiAgXCJsbmFwcHJveFwiOlwiXFx1MkE4OVwiLFxuICBcImxuRVwiOlwiXFx1MjI2OFwiLFxuICBcImxuZVwiOlwiXFx1MkE4N1wiLFxuICBcImxuZXFcIjpcIlxcdTJBODdcIixcbiAgXCJsbmVxcVwiOlwiXFx1MjI2OFwiLFxuICBcImxuc2ltXCI6XCJcXHUyMkU2XCIsXG4gIFwibG9hbmdcIjpcIlxcdTI3RUNcIixcbiAgXCJsb2FyclwiOlwiXFx1MjFGRFwiLFxuICBcImxvYnJrXCI6XCJcXHUyN0U2XCIsXG4gIFwiTG9uZ0xlZnRBcnJvd1wiOlwiXFx1MjdGNVwiLFxuICBcIkxvbmdsZWZ0YXJyb3dcIjpcIlxcdTI3RjhcIixcbiAgXCJsb25nbGVmdGFycm93XCI6XCJcXHUyN0Y1XCIsXG4gIFwiTG9uZ0xlZnRSaWdodEFycm93XCI6XCJcXHUyN0Y3XCIsXG4gIFwiTG9uZ2xlZnRyaWdodGFycm93XCI6XCJcXHUyN0ZBXCIsXG4gIFwibG9uZ2xlZnRyaWdodGFycm93XCI6XCJcXHUyN0Y3XCIsXG4gIFwibG9uZ21hcHN0b1wiOlwiXFx1MjdGQ1wiLFxuICBcIkxvbmdSaWdodEFycm93XCI6XCJcXHUyN0Y2XCIsXG4gIFwiTG9uZ3JpZ2h0YXJyb3dcIjpcIlxcdTI3RjlcIixcbiAgXCJsb25ncmlnaHRhcnJvd1wiOlwiXFx1MjdGNlwiLFxuICBcImxvb3BhcnJvd2xlZnRcIjpcIlxcdTIxQUJcIixcbiAgXCJsb29wYXJyb3dyaWdodFwiOlwiXFx1MjFBQ1wiLFxuICBcImxvcGFyXCI6XCJcXHUyOTg1XCIsXG4gIFwiTG9wZlwiOlwiXFx1RDgzNVxcdURENDNcIixcbiAgXCJsb3BmXCI6XCJcXHVEODM1XFx1REQ1RFwiLFxuICBcImxvcGx1c1wiOlwiXFx1MkEyRFwiLFxuICBcImxvdGltZXNcIjpcIlxcdTJBMzRcIixcbiAgXCJsb3dhc3RcIjpcIlxcdTIyMTdcIixcbiAgXCJsb3diYXJcIjpcIlxcdTAwNUZcIixcbiAgXCJMb3dlckxlZnRBcnJvd1wiOlwiXFx1MjE5OVwiLFxuICBcIkxvd2VyUmlnaHRBcnJvd1wiOlwiXFx1MjE5OFwiLFxuICBcImxvelwiOlwiXFx1MjVDQVwiLFxuICBcImxvemVuZ2VcIjpcIlxcdTI1Q0FcIixcbiAgXCJsb3pmXCI6XCJcXHUyOUVCXCIsXG4gIFwibHBhclwiOlwiXFx1MDAyOFwiLFxuICBcImxwYXJsdFwiOlwiXFx1Mjk5M1wiLFxuICBcImxyYXJyXCI6XCJcXHUyMUM2XCIsXG4gIFwibHJjb3JuZXJcIjpcIlxcdTIzMUZcIixcbiAgXCJscmhhclwiOlwiXFx1MjFDQlwiLFxuICBcImxyaGFyZFwiOlwiXFx1Mjk2RFwiLFxuICBcImxybVwiOlwiXFx1MjAwRVwiLFxuICBcImxydHJpXCI6XCJcXHUyMkJGXCIsXG4gIFwibHNhcXVvXCI6XCJcXHUyMDM5XCIsXG4gIFwiTHNjclwiOlwiXFx1MjExMlwiLFxuICBcImxzY3JcIjpcIlxcdUQ4MzVcXHVEQ0MxXCIsXG4gIFwiTHNoXCI6XCJcXHUyMUIwXCIsXG4gIFwibHNoXCI6XCJcXHUyMUIwXCIsXG4gIFwibHNpbVwiOlwiXFx1MjI3MlwiLFxuICBcImxzaW1lXCI6XCJcXHUyQThEXCIsXG4gIFwibHNpbWdcIjpcIlxcdTJBOEZcIixcbiAgXCJsc3FiXCI6XCJcXHUwMDVCXCIsXG4gIFwibHNxdW9cIjpcIlxcdTIwMThcIixcbiAgXCJsc3F1b3JcIjpcIlxcdTIwMUFcIixcbiAgXCJMc3Ryb2tcIjpcIlxcdTAxNDFcIixcbiAgXCJsc3Ryb2tcIjpcIlxcdTAxNDJcIixcbiAgXCJMVFwiOlwiXFx1MDAzQ1wiLFxuICBcIkx0XCI6XCJcXHUyMjZBXCIsXG4gIFwibHRcIjpcIlxcdTAwM0NcIixcbiAgXCJsdGNjXCI6XCJcXHUyQUE2XCIsXG4gIFwibHRjaXJcIjpcIlxcdTJBNzlcIixcbiAgXCJsdGRvdFwiOlwiXFx1MjJENlwiLFxuICBcImx0aHJlZVwiOlwiXFx1MjJDQlwiLFxuICBcImx0aW1lc1wiOlwiXFx1MjJDOVwiLFxuICBcImx0bGFyclwiOlwiXFx1Mjk3NlwiLFxuICBcImx0cXVlc3RcIjpcIlxcdTJBN0JcIixcbiAgXCJsdHJpXCI6XCJcXHUyNUMzXCIsXG4gIFwibHRyaWVcIjpcIlxcdTIyQjRcIixcbiAgXCJsdHJpZlwiOlwiXFx1MjVDMlwiLFxuICBcImx0clBhclwiOlwiXFx1Mjk5NlwiLFxuICBcImx1cmRzaGFyXCI6XCJcXHUyOTRBXCIsXG4gIFwibHVydWhhclwiOlwiXFx1Mjk2NlwiLFxuICBcImx2ZXJ0bmVxcVwiOlwiXFx1MjI2OFxcdUZFMDBcIixcbiAgXCJsdm5FXCI6XCJcXHUyMjY4XFx1RkUwMFwiLFxuICBcIm1hY3JcIjpcIlxcdTAwQUZcIixcbiAgXCJtYWxlXCI6XCJcXHUyNjQyXCIsXG4gIFwibWFsdFwiOlwiXFx1MjcyMFwiLFxuICBcIm1hbHRlc2VcIjpcIlxcdTI3MjBcIixcbiAgXCJNYXBcIjpcIlxcdTI5MDVcIixcbiAgXCJtYXBcIjpcIlxcdTIxQTZcIixcbiAgXCJtYXBzdG9cIjpcIlxcdTIxQTZcIixcbiAgXCJtYXBzdG9kb3duXCI6XCJcXHUyMUE3XCIsXG4gIFwibWFwc3RvbGVmdFwiOlwiXFx1MjFBNFwiLFxuICBcIm1hcHN0b3VwXCI6XCJcXHUyMUE1XCIsXG4gIFwibWFya2VyXCI6XCJcXHUyNUFFXCIsXG4gIFwibWNvbW1hXCI6XCJcXHUyQTI5XCIsXG4gIFwiTWN5XCI6XCJcXHUwNDFDXCIsXG4gIFwibWN5XCI6XCJcXHUwNDNDXCIsXG4gIFwibWRhc2hcIjpcIlxcdTIwMTRcIixcbiAgXCJtRERvdFwiOlwiXFx1MjIzQVwiLFxuICBcIm1lYXN1cmVkYW5nbGVcIjpcIlxcdTIyMjFcIixcbiAgXCJNZWRpdW1TcGFjZVwiOlwiXFx1MjA1RlwiLFxuICBcIk1lbGxpbnRyZlwiOlwiXFx1MjEzM1wiLFxuICBcIk1mclwiOlwiXFx1RDgzNVxcdUREMTBcIixcbiAgXCJtZnJcIjpcIlxcdUQ4MzVcXHVERDJBXCIsXG4gIFwibWhvXCI6XCJcXHUyMTI3XCIsXG4gIFwibWljcm9cIjpcIlxcdTAwQjVcIixcbiAgXCJtaWRcIjpcIlxcdTIyMjNcIixcbiAgXCJtaWRhc3RcIjpcIlxcdTAwMkFcIixcbiAgXCJtaWRjaXJcIjpcIlxcdTJBRjBcIixcbiAgXCJtaWRkb3RcIjpcIlxcdTAwQjdcIixcbiAgXCJtaW51c1wiOlwiXFx1MjIxMlwiLFxuICBcIm1pbnVzYlwiOlwiXFx1MjI5RlwiLFxuICBcIm1pbnVzZFwiOlwiXFx1MjIzOFwiLFxuICBcIm1pbnVzZHVcIjpcIlxcdTJBMkFcIixcbiAgXCJNaW51c1BsdXNcIjpcIlxcdTIyMTNcIixcbiAgXCJtbGNwXCI6XCJcXHUyQURCXCIsXG4gIFwibWxkclwiOlwiXFx1MjAyNlwiLFxuICBcIm1ucGx1c1wiOlwiXFx1MjIxM1wiLFxuICBcIm1vZGVsc1wiOlwiXFx1MjJBN1wiLFxuICBcIk1vcGZcIjpcIlxcdUQ4MzVcXHVERDQ0XCIsXG4gIFwibW9wZlwiOlwiXFx1RDgzNVxcdURENUVcIixcbiAgXCJtcFwiOlwiXFx1MjIxM1wiLFxuICBcIk1zY3JcIjpcIlxcdTIxMzNcIixcbiAgXCJtc2NyXCI6XCJcXHVEODM1XFx1RENDMlwiLFxuICBcIm1zdHBvc1wiOlwiXFx1MjIzRVwiLFxuICBcIk11XCI6XCJcXHUwMzlDXCIsXG4gIFwibXVcIjpcIlxcdTAzQkNcIixcbiAgXCJtdWx0aW1hcFwiOlwiXFx1MjJCOFwiLFxuICBcIm11bWFwXCI6XCJcXHUyMkI4XCIsXG4gIFwibmFibGFcIjpcIlxcdTIyMDdcIixcbiAgXCJOYWN1dGVcIjpcIlxcdTAxNDNcIixcbiAgXCJuYWN1dGVcIjpcIlxcdTAxNDRcIixcbiAgXCJuYW5nXCI6XCJcXHUyMjIwXFx1MjBEMlwiLFxuICBcIm5hcFwiOlwiXFx1MjI0OVwiLFxuICBcIm5hcEVcIjpcIlxcdTJBNzBcXHUwMzM4XCIsXG4gIFwibmFwaWRcIjpcIlxcdTIyNEJcXHUwMzM4XCIsXG4gIFwibmFwb3NcIjpcIlxcdTAxNDlcIixcbiAgXCJuYXBwcm94XCI6XCJcXHUyMjQ5XCIsXG4gIFwibmF0dXJcIjpcIlxcdTI2NkVcIixcbiAgXCJuYXR1cmFsXCI6XCJcXHUyNjZFXCIsXG4gIFwibmF0dXJhbHNcIjpcIlxcdTIxMTVcIixcbiAgXCJuYnNwXCI6XCJcXHUwMEEwXCIsXG4gIFwibmJ1bXBcIjpcIlxcdTIyNEVcXHUwMzM4XCIsXG4gIFwibmJ1bXBlXCI6XCJcXHUyMjRGXFx1MDMzOFwiLFxuICBcIm5jYXBcIjpcIlxcdTJBNDNcIixcbiAgXCJOY2Fyb25cIjpcIlxcdTAxNDdcIixcbiAgXCJuY2Fyb25cIjpcIlxcdTAxNDhcIixcbiAgXCJOY2VkaWxcIjpcIlxcdTAxNDVcIixcbiAgXCJuY2VkaWxcIjpcIlxcdTAxNDZcIixcbiAgXCJuY29uZ1wiOlwiXFx1MjI0N1wiLFxuICBcIm5jb25nZG90XCI6XCJcXHUyQTZEXFx1MDMzOFwiLFxuICBcIm5jdXBcIjpcIlxcdTJBNDJcIixcbiAgXCJOY3lcIjpcIlxcdTA0MURcIixcbiAgXCJuY3lcIjpcIlxcdTA0M0RcIixcbiAgXCJuZGFzaFwiOlwiXFx1MjAxM1wiLFxuICBcIm5lXCI6XCJcXHUyMjYwXCIsXG4gIFwibmVhcmhrXCI6XCJcXHUyOTI0XCIsXG4gIFwibmVBcnJcIjpcIlxcdTIxRDdcIixcbiAgXCJuZWFyclwiOlwiXFx1MjE5N1wiLFxuICBcIm5lYXJyb3dcIjpcIlxcdTIxOTdcIixcbiAgXCJuZWRvdFwiOlwiXFx1MjI1MFxcdTAzMzhcIixcbiAgXCJOZWdhdGl2ZU1lZGl1bVNwYWNlXCI6XCJcXHUyMDBCXCIsXG4gIFwiTmVnYXRpdmVUaGlja1NwYWNlXCI6XCJcXHUyMDBCXCIsXG4gIFwiTmVnYXRpdmVUaGluU3BhY2VcIjpcIlxcdTIwMEJcIixcbiAgXCJOZWdhdGl2ZVZlcnlUaGluU3BhY2VcIjpcIlxcdTIwMEJcIixcbiAgXCJuZXF1aXZcIjpcIlxcdTIyNjJcIixcbiAgXCJuZXNlYXJcIjpcIlxcdTI5MjhcIixcbiAgXCJuZXNpbVwiOlwiXFx1MjI0MlxcdTAzMzhcIixcbiAgXCJOZXN0ZWRHcmVhdGVyR3JlYXRlclwiOlwiXFx1MjI2QlwiLFxuICBcIk5lc3RlZExlc3NMZXNzXCI6XCJcXHUyMjZBXCIsXG4gIFwiTmV3TGluZVwiOlwiXFx1MDAwQVwiLFxuICBcIm5leGlzdFwiOlwiXFx1MjIwNFwiLFxuICBcIm5leGlzdHNcIjpcIlxcdTIyMDRcIixcbiAgXCJOZnJcIjpcIlxcdUQ4MzVcXHVERDExXCIsXG4gIFwibmZyXCI6XCJcXHVEODM1XFx1REQyQlwiLFxuICBcIm5nRVwiOlwiXFx1MjI2N1xcdTAzMzhcIixcbiAgXCJuZ2VcIjpcIlxcdTIyNzFcIixcbiAgXCJuZ2VxXCI6XCJcXHUyMjcxXCIsXG4gIFwibmdlcXFcIjpcIlxcdTIyNjdcXHUwMzM4XCIsXG4gIFwibmdlcXNsYW50XCI6XCJcXHUyQTdFXFx1MDMzOFwiLFxuICBcIm5nZXNcIjpcIlxcdTJBN0VcXHUwMzM4XCIsXG4gIFwibkdnXCI6XCJcXHUyMkQ5XFx1MDMzOFwiLFxuICBcIm5nc2ltXCI6XCJcXHUyMjc1XCIsXG4gIFwibkd0XCI6XCJcXHUyMjZCXFx1MjBEMlwiLFxuICBcIm5ndFwiOlwiXFx1MjI2RlwiLFxuICBcIm5ndHJcIjpcIlxcdTIyNkZcIixcbiAgXCJuR3R2XCI6XCJcXHUyMjZCXFx1MDMzOFwiLFxuICBcIm5oQXJyXCI6XCJcXHUyMUNFXCIsXG4gIFwibmhhcnJcIjpcIlxcdTIxQUVcIixcbiAgXCJuaHBhclwiOlwiXFx1MkFGMlwiLFxuICBcIm5pXCI6XCJcXHUyMjBCXCIsXG4gIFwibmlzXCI6XCJcXHUyMkZDXCIsXG4gIFwibmlzZFwiOlwiXFx1MjJGQVwiLFxuICBcIm5pdlwiOlwiXFx1MjIwQlwiLFxuICBcIk5KY3lcIjpcIlxcdTA0MEFcIixcbiAgXCJuamN5XCI6XCJcXHUwNDVBXCIsXG4gIFwibmxBcnJcIjpcIlxcdTIxQ0RcIixcbiAgXCJubGFyclwiOlwiXFx1MjE5QVwiLFxuICBcIm5sZHJcIjpcIlxcdTIwMjVcIixcbiAgXCJubEVcIjpcIlxcdTIyNjZcXHUwMzM4XCIsXG4gIFwibmxlXCI6XCJcXHUyMjcwXCIsXG4gIFwibkxlZnRhcnJvd1wiOlwiXFx1MjFDRFwiLFxuICBcIm5sZWZ0YXJyb3dcIjpcIlxcdTIxOUFcIixcbiAgXCJuTGVmdHJpZ2h0YXJyb3dcIjpcIlxcdTIxQ0VcIixcbiAgXCJubGVmdHJpZ2h0YXJyb3dcIjpcIlxcdTIxQUVcIixcbiAgXCJubGVxXCI6XCJcXHUyMjcwXCIsXG4gIFwibmxlcXFcIjpcIlxcdTIyNjZcXHUwMzM4XCIsXG4gIFwibmxlcXNsYW50XCI6XCJcXHUyQTdEXFx1MDMzOFwiLFxuICBcIm5sZXNcIjpcIlxcdTJBN0RcXHUwMzM4XCIsXG4gIFwibmxlc3NcIjpcIlxcdTIyNkVcIixcbiAgXCJuTGxcIjpcIlxcdTIyRDhcXHUwMzM4XCIsXG4gIFwibmxzaW1cIjpcIlxcdTIyNzRcIixcbiAgXCJuTHRcIjpcIlxcdTIyNkFcXHUyMEQyXCIsXG4gIFwibmx0XCI6XCJcXHUyMjZFXCIsXG4gIFwibmx0cmlcIjpcIlxcdTIyRUFcIixcbiAgXCJubHRyaWVcIjpcIlxcdTIyRUNcIixcbiAgXCJuTHR2XCI6XCJcXHUyMjZBXFx1MDMzOFwiLFxuICBcIm5taWRcIjpcIlxcdTIyMjRcIixcbiAgXCJOb0JyZWFrXCI6XCJcXHUyMDYwXCIsXG4gIFwiTm9uQnJlYWtpbmdTcGFjZVwiOlwiXFx1MDBBMFwiLFxuICBcIk5vcGZcIjpcIlxcdTIxMTVcIixcbiAgXCJub3BmXCI6XCJcXHVEODM1XFx1REQ1RlwiLFxuICBcIk5vdFwiOlwiXFx1MkFFQ1wiLFxuICBcIm5vdFwiOlwiXFx1MDBBQ1wiLFxuICBcIk5vdENvbmdydWVudFwiOlwiXFx1MjI2MlwiLFxuICBcIk5vdEN1cENhcFwiOlwiXFx1MjI2RFwiLFxuICBcIk5vdERvdWJsZVZlcnRpY2FsQmFyXCI6XCJcXHUyMjI2XCIsXG4gIFwiTm90RWxlbWVudFwiOlwiXFx1MjIwOVwiLFxuICBcIk5vdEVxdWFsXCI6XCJcXHUyMjYwXCIsXG4gIFwiTm90RXF1YWxUaWxkZVwiOlwiXFx1MjI0MlxcdTAzMzhcIixcbiAgXCJOb3RFeGlzdHNcIjpcIlxcdTIyMDRcIixcbiAgXCJOb3RHcmVhdGVyXCI6XCJcXHUyMjZGXCIsXG4gIFwiTm90R3JlYXRlckVxdWFsXCI6XCJcXHUyMjcxXCIsXG4gIFwiTm90R3JlYXRlckZ1bGxFcXVhbFwiOlwiXFx1MjI2N1xcdTAzMzhcIixcbiAgXCJOb3RHcmVhdGVyR3JlYXRlclwiOlwiXFx1MjI2QlxcdTAzMzhcIixcbiAgXCJOb3RHcmVhdGVyTGVzc1wiOlwiXFx1MjI3OVwiLFxuICBcIk5vdEdyZWF0ZXJTbGFudEVxdWFsXCI6XCJcXHUyQTdFXFx1MDMzOFwiLFxuICBcIk5vdEdyZWF0ZXJUaWxkZVwiOlwiXFx1MjI3NVwiLFxuICBcIk5vdEh1bXBEb3duSHVtcFwiOlwiXFx1MjI0RVxcdTAzMzhcIixcbiAgXCJOb3RIdW1wRXF1YWxcIjpcIlxcdTIyNEZcXHUwMzM4XCIsXG4gIFwibm90aW5cIjpcIlxcdTIyMDlcIixcbiAgXCJub3RpbmRvdFwiOlwiXFx1MjJGNVxcdTAzMzhcIixcbiAgXCJub3RpbkVcIjpcIlxcdTIyRjlcXHUwMzM4XCIsXG4gIFwibm90aW52YVwiOlwiXFx1MjIwOVwiLFxuICBcIm5vdGludmJcIjpcIlxcdTIyRjdcIixcbiAgXCJub3RpbnZjXCI6XCJcXHUyMkY2XCIsXG4gIFwiTm90TGVmdFRyaWFuZ2xlXCI6XCJcXHUyMkVBXCIsXG4gIFwiTm90TGVmdFRyaWFuZ2xlQmFyXCI6XCJcXHUyOUNGXFx1MDMzOFwiLFxuICBcIk5vdExlZnRUcmlhbmdsZUVxdWFsXCI6XCJcXHUyMkVDXCIsXG4gIFwiTm90TGVzc1wiOlwiXFx1MjI2RVwiLFxuICBcIk5vdExlc3NFcXVhbFwiOlwiXFx1MjI3MFwiLFxuICBcIk5vdExlc3NHcmVhdGVyXCI6XCJcXHUyMjc4XCIsXG4gIFwiTm90TGVzc0xlc3NcIjpcIlxcdTIyNkFcXHUwMzM4XCIsXG4gIFwiTm90TGVzc1NsYW50RXF1YWxcIjpcIlxcdTJBN0RcXHUwMzM4XCIsXG4gIFwiTm90TGVzc1RpbGRlXCI6XCJcXHUyMjc0XCIsXG4gIFwiTm90TmVzdGVkR3JlYXRlckdyZWF0ZXJcIjpcIlxcdTJBQTJcXHUwMzM4XCIsXG4gIFwiTm90TmVzdGVkTGVzc0xlc3NcIjpcIlxcdTJBQTFcXHUwMzM4XCIsXG4gIFwibm90bmlcIjpcIlxcdTIyMENcIixcbiAgXCJub3RuaXZhXCI6XCJcXHUyMjBDXCIsXG4gIFwibm90bml2YlwiOlwiXFx1MjJGRVwiLFxuICBcIm5vdG5pdmNcIjpcIlxcdTIyRkRcIixcbiAgXCJOb3RQcmVjZWRlc1wiOlwiXFx1MjI4MFwiLFxuICBcIk5vdFByZWNlZGVzRXF1YWxcIjpcIlxcdTJBQUZcXHUwMzM4XCIsXG4gIFwiTm90UHJlY2VkZXNTbGFudEVxdWFsXCI6XCJcXHUyMkUwXCIsXG4gIFwiTm90UmV2ZXJzZUVsZW1lbnRcIjpcIlxcdTIyMENcIixcbiAgXCJOb3RSaWdodFRyaWFuZ2xlXCI6XCJcXHUyMkVCXCIsXG4gIFwiTm90UmlnaHRUcmlhbmdsZUJhclwiOlwiXFx1MjlEMFxcdTAzMzhcIixcbiAgXCJOb3RSaWdodFRyaWFuZ2xlRXF1YWxcIjpcIlxcdTIyRURcIixcbiAgXCJOb3RTcXVhcmVTdWJzZXRcIjpcIlxcdTIyOEZcXHUwMzM4XCIsXG4gIFwiTm90U3F1YXJlU3Vic2V0RXF1YWxcIjpcIlxcdTIyRTJcIixcbiAgXCJOb3RTcXVhcmVTdXBlcnNldFwiOlwiXFx1MjI5MFxcdTAzMzhcIixcbiAgXCJOb3RTcXVhcmVTdXBlcnNldEVxdWFsXCI6XCJcXHUyMkUzXCIsXG4gIFwiTm90U3Vic2V0XCI6XCJcXHUyMjgyXFx1MjBEMlwiLFxuICBcIk5vdFN1YnNldEVxdWFsXCI6XCJcXHUyMjg4XCIsXG4gIFwiTm90U3VjY2VlZHNcIjpcIlxcdTIyODFcIixcbiAgXCJOb3RTdWNjZWVkc0VxdWFsXCI6XCJcXHUyQUIwXFx1MDMzOFwiLFxuICBcIk5vdFN1Y2NlZWRzU2xhbnRFcXVhbFwiOlwiXFx1MjJFMVwiLFxuICBcIk5vdFN1Y2NlZWRzVGlsZGVcIjpcIlxcdTIyN0ZcXHUwMzM4XCIsXG4gIFwiTm90U3VwZXJzZXRcIjpcIlxcdTIyODNcXHUyMEQyXCIsXG4gIFwiTm90U3VwZXJzZXRFcXVhbFwiOlwiXFx1MjI4OVwiLFxuICBcIk5vdFRpbGRlXCI6XCJcXHUyMjQxXCIsXG4gIFwiTm90VGlsZGVFcXVhbFwiOlwiXFx1MjI0NFwiLFxuICBcIk5vdFRpbGRlRnVsbEVxdWFsXCI6XCJcXHUyMjQ3XCIsXG4gIFwiTm90VGlsZGVUaWxkZVwiOlwiXFx1MjI0OVwiLFxuICBcIk5vdFZlcnRpY2FsQmFyXCI6XCJcXHUyMjI0XCIsXG4gIFwibnBhclwiOlwiXFx1MjIyNlwiLFxuICBcIm5wYXJhbGxlbFwiOlwiXFx1MjIyNlwiLFxuICBcIm5wYXJzbFwiOlwiXFx1MkFGRFxcdTIwRTVcIixcbiAgXCJucGFydFwiOlwiXFx1MjIwMlxcdTAzMzhcIixcbiAgXCJucG9saW50XCI6XCJcXHUyQTE0XCIsXG4gIFwibnByXCI6XCJcXHUyMjgwXCIsXG4gIFwibnByY3VlXCI6XCJcXHUyMkUwXCIsXG4gIFwibnByZVwiOlwiXFx1MkFBRlxcdTAzMzhcIixcbiAgXCJucHJlY1wiOlwiXFx1MjI4MFwiLFxuICBcIm5wcmVjZXFcIjpcIlxcdTJBQUZcXHUwMzM4XCIsXG4gIFwibnJBcnJcIjpcIlxcdTIxQ0ZcIixcbiAgXCJucmFyclwiOlwiXFx1MjE5QlwiLFxuICBcIm5yYXJyY1wiOlwiXFx1MjkzM1xcdTAzMzhcIixcbiAgXCJucmFycndcIjpcIlxcdTIxOURcXHUwMzM4XCIsXG4gIFwiblJpZ2h0YXJyb3dcIjpcIlxcdTIxQ0ZcIixcbiAgXCJucmlnaHRhcnJvd1wiOlwiXFx1MjE5QlwiLFxuICBcIm5ydHJpXCI6XCJcXHUyMkVCXCIsXG4gIFwibnJ0cmllXCI6XCJcXHUyMkVEXCIsXG4gIFwibnNjXCI6XCJcXHUyMjgxXCIsXG4gIFwibnNjY3VlXCI6XCJcXHUyMkUxXCIsXG4gIFwibnNjZVwiOlwiXFx1MkFCMFxcdTAzMzhcIixcbiAgXCJOc2NyXCI6XCJcXHVEODM1XFx1RENBOVwiLFxuICBcIm5zY3JcIjpcIlxcdUQ4MzVcXHVEQ0MzXCIsXG4gIFwibnNob3J0bWlkXCI6XCJcXHUyMjI0XCIsXG4gIFwibnNob3J0cGFyYWxsZWxcIjpcIlxcdTIyMjZcIixcbiAgXCJuc2ltXCI6XCJcXHUyMjQxXCIsXG4gIFwibnNpbWVcIjpcIlxcdTIyNDRcIixcbiAgXCJuc2ltZXFcIjpcIlxcdTIyNDRcIixcbiAgXCJuc21pZFwiOlwiXFx1MjIyNFwiLFxuICBcIm5zcGFyXCI6XCJcXHUyMjI2XCIsXG4gIFwibnNxc3ViZVwiOlwiXFx1MjJFMlwiLFxuICBcIm5zcXN1cGVcIjpcIlxcdTIyRTNcIixcbiAgXCJuc3ViXCI6XCJcXHUyMjg0XCIsXG4gIFwibnN1YkVcIjpcIlxcdTJBQzVcXHUwMzM4XCIsXG4gIFwibnN1YmVcIjpcIlxcdTIyODhcIixcbiAgXCJuc3Vic2V0XCI6XCJcXHUyMjgyXFx1MjBEMlwiLFxuICBcIm5zdWJzZXRlcVwiOlwiXFx1MjI4OFwiLFxuICBcIm5zdWJzZXRlcXFcIjpcIlxcdTJBQzVcXHUwMzM4XCIsXG4gIFwibnN1Y2NcIjpcIlxcdTIyODFcIixcbiAgXCJuc3VjY2VxXCI6XCJcXHUyQUIwXFx1MDMzOFwiLFxuICBcIm5zdXBcIjpcIlxcdTIyODVcIixcbiAgXCJuc3VwRVwiOlwiXFx1MkFDNlxcdTAzMzhcIixcbiAgXCJuc3VwZVwiOlwiXFx1MjI4OVwiLFxuICBcIm5zdXBzZXRcIjpcIlxcdTIyODNcXHUyMEQyXCIsXG4gIFwibnN1cHNldGVxXCI6XCJcXHUyMjg5XCIsXG4gIFwibnN1cHNldGVxcVwiOlwiXFx1MkFDNlxcdTAzMzhcIixcbiAgXCJudGdsXCI6XCJcXHUyMjc5XCIsXG4gIFwiTnRpbGRlXCI6XCJcXHUwMEQxXCIsXG4gIFwibnRpbGRlXCI6XCJcXHUwMEYxXCIsXG4gIFwibnRsZ1wiOlwiXFx1MjI3OFwiLFxuICBcIm50cmlhbmdsZWxlZnRcIjpcIlxcdTIyRUFcIixcbiAgXCJudHJpYW5nbGVsZWZ0ZXFcIjpcIlxcdTIyRUNcIixcbiAgXCJudHJpYW5nbGVyaWdodFwiOlwiXFx1MjJFQlwiLFxuICBcIm50cmlhbmdsZXJpZ2h0ZXFcIjpcIlxcdTIyRURcIixcbiAgXCJOdVwiOlwiXFx1MDM5RFwiLFxuICBcIm51XCI6XCJcXHUwM0JEXCIsXG4gIFwibnVtXCI6XCJcXHUwMDIzXCIsXG4gIFwibnVtZXJvXCI6XCJcXHUyMTE2XCIsXG4gIFwibnVtc3BcIjpcIlxcdTIwMDdcIixcbiAgXCJudmFwXCI6XCJcXHUyMjREXFx1MjBEMlwiLFxuICBcIm5WRGFzaFwiOlwiXFx1MjJBRlwiLFxuICBcIm5WZGFzaFwiOlwiXFx1MjJBRVwiLFxuICBcIm52RGFzaFwiOlwiXFx1MjJBRFwiLFxuICBcIm52ZGFzaFwiOlwiXFx1MjJBQ1wiLFxuICBcIm52Z2VcIjpcIlxcdTIyNjVcXHUyMEQyXCIsXG4gIFwibnZndFwiOlwiXFx1MDAzRVxcdTIwRDJcIixcbiAgXCJudkhhcnJcIjpcIlxcdTI5MDRcIixcbiAgXCJudmluZmluXCI6XCJcXHUyOURFXCIsXG4gIFwibnZsQXJyXCI6XCJcXHUyOTAyXCIsXG4gIFwibnZsZVwiOlwiXFx1MjI2NFxcdTIwRDJcIixcbiAgXCJudmx0XCI6XCJcXHUwMDNDXFx1MjBEMlwiLFxuICBcIm52bHRyaWVcIjpcIlxcdTIyQjRcXHUyMEQyXCIsXG4gIFwibnZyQXJyXCI6XCJcXHUyOTAzXCIsXG4gIFwibnZydHJpZVwiOlwiXFx1MjJCNVxcdTIwRDJcIixcbiAgXCJudnNpbVwiOlwiXFx1MjIzQ1xcdTIwRDJcIixcbiAgXCJud2FyaGtcIjpcIlxcdTI5MjNcIixcbiAgXCJud0FyclwiOlwiXFx1MjFENlwiLFxuICBcIm53YXJyXCI6XCJcXHUyMTk2XCIsXG4gIFwibndhcnJvd1wiOlwiXFx1MjE5NlwiLFxuICBcIm53bmVhclwiOlwiXFx1MjkyN1wiLFxuICBcIk9hY3V0ZVwiOlwiXFx1MDBEM1wiLFxuICBcIm9hY3V0ZVwiOlwiXFx1MDBGM1wiLFxuICBcIm9hc3RcIjpcIlxcdTIyOUJcIixcbiAgXCJvY2lyXCI6XCJcXHUyMjlBXCIsXG4gIFwiT2NpcmNcIjpcIlxcdTAwRDRcIixcbiAgXCJvY2lyY1wiOlwiXFx1MDBGNFwiLFxuICBcIk9jeVwiOlwiXFx1MDQxRVwiLFxuICBcIm9jeVwiOlwiXFx1MDQzRVwiLFxuICBcIm9kYXNoXCI6XCJcXHUyMjlEXCIsXG4gIFwiT2RibGFjXCI6XCJcXHUwMTUwXCIsXG4gIFwib2RibGFjXCI6XCJcXHUwMTUxXCIsXG4gIFwib2RpdlwiOlwiXFx1MkEzOFwiLFxuICBcIm9kb3RcIjpcIlxcdTIyOTlcIixcbiAgXCJvZHNvbGRcIjpcIlxcdTI5QkNcIixcbiAgXCJPRWxpZ1wiOlwiXFx1MDE1MlwiLFxuICBcIm9lbGlnXCI6XCJcXHUwMTUzXCIsXG4gIFwib2ZjaXJcIjpcIlxcdTI5QkZcIixcbiAgXCJPZnJcIjpcIlxcdUQ4MzVcXHVERDEyXCIsXG4gIFwib2ZyXCI6XCJcXHVEODM1XFx1REQyQ1wiLFxuICBcIm9nb25cIjpcIlxcdTAyREJcIixcbiAgXCJPZ3JhdmVcIjpcIlxcdTAwRDJcIixcbiAgXCJvZ3JhdmVcIjpcIlxcdTAwRjJcIixcbiAgXCJvZ3RcIjpcIlxcdTI5QzFcIixcbiAgXCJvaGJhclwiOlwiXFx1MjlCNVwiLFxuICBcIm9obVwiOlwiXFx1MDNBOVwiLFxuICBcIm9pbnRcIjpcIlxcdTIyMkVcIixcbiAgXCJvbGFyclwiOlwiXFx1MjFCQVwiLFxuICBcIm9sY2lyXCI6XCJcXHUyOUJFXCIsXG4gIFwib2xjcm9zc1wiOlwiXFx1MjlCQlwiLFxuICBcIm9saW5lXCI6XCJcXHUyMDNFXCIsXG4gIFwib2x0XCI6XCJcXHUyOUMwXCIsXG4gIFwiT21hY3JcIjpcIlxcdTAxNENcIixcbiAgXCJvbWFjclwiOlwiXFx1MDE0RFwiLFxuICBcIk9tZWdhXCI6XCJcXHUwM0E5XCIsXG4gIFwib21lZ2FcIjpcIlxcdTAzQzlcIixcbiAgXCJPbWljcm9uXCI6XCJcXHUwMzlGXCIsXG4gIFwib21pY3JvblwiOlwiXFx1MDNCRlwiLFxuICBcIm9taWRcIjpcIlxcdTI5QjZcIixcbiAgXCJvbWludXNcIjpcIlxcdTIyOTZcIixcbiAgXCJPb3BmXCI6XCJcXHVEODM1XFx1REQ0NlwiLFxuICBcIm9vcGZcIjpcIlxcdUQ4MzVcXHVERDYwXCIsXG4gIFwib3BhclwiOlwiXFx1MjlCN1wiLFxuICBcIk9wZW5DdXJseURvdWJsZVF1b3RlXCI6XCJcXHUyMDFDXCIsXG4gIFwiT3BlbkN1cmx5UXVvdGVcIjpcIlxcdTIwMThcIixcbiAgXCJvcGVycFwiOlwiXFx1MjlCOVwiLFxuICBcIm9wbHVzXCI6XCJcXHUyMjk1XCIsXG4gIFwiT3JcIjpcIlxcdTJBNTRcIixcbiAgXCJvclwiOlwiXFx1MjIyOFwiLFxuICBcIm9yYXJyXCI6XCJcXHUyMUJCXCIsXG4gIFwib3JkXCI6XCJcXHUyQTVEXCIsXG4gIFwib3JkZXJcIjpcIlxcdTIxMzRcIixcbiAgXCJvcmRlcm9mXCI6XCJcXHUyMTM0XCIsXG4gIFwib3JkZlwiOlwiXFx1MDBBQVwiLFxuICBcIm9yZG1cIjpcIlxcdTAwQkFcIixcbiAgXCJvcmlnb2ZcIjpcIlxcdTIyQjZcIixcbiAgXCJvcm9yXCI6XCJcXHUyQTU2XCIsXG4gIFwib3JzbG9wZVwiOlwiXFx1MkE1N1wiLFxuICBcIm9ydlwiOlwiXFx1MkE1QlwiLFxuICBcIm9TXCI6XCJcXHUyNEM4XCIsXG4gIFwiT3NjclwiOlwiXFx1RDgzNVxcdURDQUFcIixcbiAgXCJvc2NyXCI6XCJcXHUyMTM0XCIsXG4gIFwiT3NsYXNoXCI6XCJcXHUwMEQ4XCIsXG4gIFwib3NsYXNoXCI6XCJcXHUwMEY4XCIsXG4gIFwib3NvbFwiOlwiXFx1MjI5OFwiLFxuICBcIk90aWxkZVwiOlwiXFx1MDBENVwiLFxuICBcIm90aWxkZVwiOlwiXFx1MDBGNVwiLFxuICBcIk90aW1lc1wiOlwiXFx1MkEzN1wiLFxuICBcIm90aW1lc1wiOlwiXFx1MjI5N1wiLFxuICBcIm90aW1lc2FzXCI6XCJcXHUyQTM2XCIsXG4gIFwiT3VtbFwiOlwiXFx1MDBENlwiLFxuICBcIm91bWxcIjpcIlxcdTAwRjZcIixcbiAgXCJvdmJhclwiOlwiXFx1MjMzRFwiLFxuICBcIk92ZXJCYXJcIjpcIlxcdTIwM0VcIixcbiAgXCJPdmVyQnJhY2VcIjpcIlxcdTIzREVcIixcbiAgXCJPdmVyQnJhY2tldFwiOlwiXFx1MjNCNFwiLFxuICBcIk92ZXJQYXJlbnRoZXNpc1wiOlwiXFx1MjNEQ1wiLFxuICBcInBhclwiOlwiXFx1MjIyNVwiLFxuICBcInBhcmFcIjpcIlxcdTAwQjZcIixcbiAgXCJwYXJhbGxlbFwiOlwiXFx1MjIyNVwiLFxuICBcInBhcnNpbVwiOlwiXFx1MkFGM1wiLFxuICBcInBhcnNsXCI6XCJcXHUyQUZEXCIsXG4gIFwicGFydFwiOlwiXFx1MjIwMlwiLFxuICBcIlBhcnRpYWxEXCI6XCJcXHUyMjAyXCIsXG4gIFwiUGN5XCI6XCJcXHUwNDFGXCIsXG4gIFwicGN5XCI6XCJcXHUwNDNGXCIsXG4gIFwicGVyY250XCI6XCJcXHUwMDI1XCIsXG4gIFwicGVyaW9kXCI6XCJcXHUwMDJFXCIsXG4gIFwicGVybWlsXCI6XCJcXHUyMDMwXCIsXG4gIFwicGVycFwiOlwiXFx1MjJBNVwiLFxuICBcInBlcnRlbmtcIjpcIlxcdTIwMzFcIixcbiAgXCJQZnJcIjpcIlxcdUQ4MzVcXHVERDEzXCIsXG4gIFwicGZyXCI6XCJcXHVEODM1XFx1REQyRFwiLFxuICBcIlBoaVwiOlwiXFx1MDNBNlwiLFxuICBcInBoaVwiOlwiXFx1MDNDNlwiLFxuICBcInBoaXZcIjpcIlxcdTAzRDVcIixcbiAgXCJwaG1tYXRcIjpcIlxcdTIxMzNcIixcbiAgXCJwaG9uZVwiOlwiXFx1MjYwRVwiLFxuICBcIlBpXCI6XCJcXHUwM0EwXCIsXG4gIFwicGlcIjpcIlxcdTAzQzBcIixcbiAgXCJwaXRjaGZvcmtcIjpcIlxcdTIyRDRcIixcbiAgXCJwaXZcIjpcIlxcdTAzRDZcIixcbiAgXCJwbGFuY2tcIjpcIlxcdTIxMEZcIixcbiAgXCJwbGFuY2toXCI6XCJcXHUyMTBFXCIsXG4gIFwicGxhbmt2XCI6XCJcXHUyMTBGXCIsXG4gIFwicGx1c1wiOlwiXFx1MDAyQlwiLFxuICBcInBsdXNhY2lyXCI6XCJcXHUyQTIzXCIsXG4gIFwicGx1c2JcIjpcIlxcdTIyOUVcIixcbiAgXCJwbHVzY2lyXCI6XCJcXHUyQTIyXCIsXG4gIFwicGx1c2RvXCI6XCJcXHUyMjE0XCIsXG4gIFwicGx1c2R1XCI6XCJcXHUyQTI1XCIsXG4gIFwicGx1c2VcIjpcIlxcdTJBNzJcIixcbiAgXCJQbHVzTWludXNcIjpcIlxcdTAwQjFcIixcbiAgXCJwbHVzbW5cIjpcIlxcdTAwQjFcIixcbiAgXCJwbHVzc2ltXCI6XCJcXHUyQTI2XCIsXG4gIFwicGx1c3R3b1wiOlwiXFx1MkEyN1wiLFxuICBcInBtXCI6XCJcXHUwMEIxXCIsXG4gIFwiUG9pbmNhcmVwbGFuZVwiOlwiXFx1MjEwQ1wiLFxuICBcInBvaW50aW50XCI6XCJcXHUyQTE1XCIsXG4gIFwiUG9wZlwiOlwiXFx1MjExOVwiLFxuICBcInBvcGZcIjpcIlxcdUQ4MzVcXHVERDYxXCIsXG4gIFwicG91bmRcIjpcIlxcdTAwQTNcIixcbiAgXCJQclwiOlwiXFx1MkFCQlwiLFxuICBcInByXCI6XCJcXHUyMjdBXCIsXG4gIFwicHJhcFwiOlwiXFx1MkFCN1wiLFxuICBcInByY3VlXCI6XCJcXHUyMjdDXCIsXG4gIFwicHJFXCI6XCJcXHUyQUIzXCIsXG4gIFwicHJlXCI6XCJcXHUyQUFGXCIsXG4gIFwicHJlY1wiOlwiXFx1MjI3QVwiLFxuICBcInByZWNhcHByb3hcIjpcIlxcdTJBQjdcIixcbiAgXCJwcmVjY3VybHllcVwiOlwiXFx1MjI3Q1wiLFxuICBcIlByZWNlZGVzXCI6XCJcXHUyMjdBXCIsXG4gIFwiUHJlY2VkZXNFcXVhbFwiOlwiXFx1MkFBRlwiLFxuICBcIlByZWNlZGVzU2xhbnRFcXVhbFwiOlwiXFx1MjI3Q1wiLFxuICBcIlByZWNlZGVzVGlsZGVcIjpcIlxcdTIyN0VcIixcbiAgXCJwcmVjZXFcIjpcIlxcdTJBQUZcIixcbiAgXCJwcmVjbmFwcHJveFwiOlwiXFx1MkFCOVwiLFxuICBcInByZWNuZXFxXCI6XCJcXHUyQUI1XCIsXG4gIFwicHJlY25zaW1cIjpcIlxcdTIyRThcIixcbiAgXCJwcmVjc2ltXCI6XCJcXHUyMjdFXCIsXG4gIFwiUHJpbWVcIjpcIlxcdTIwMzNcIixcbiAgXCJwcmltZVwiOlwiXFx1MjAzMlwiLFxuICBcInByaW1lc1wiOlwiXFx1MjExOVwiLFxuICBcInBybmFwXCI6XCJcXHUyQUI5XCIsXG4gIFwicHJuRVwiOlwiXFx1MkFCNVwiLFxuICBcInBybnNpbVwiOlwiXFx1MjJFOFwiLFxuICBcInByb2RcIjpcIlxcdTIyMEZcIixcbiAgXCJQcm9kdWN0XCI6XCJcXHUyMjBGXCIsXG4gIFwicHJvZmFsYXJcIjpcIlxcdTIzMkVcIixcbiAgXCJwcm9mbGluZVwiOlwiXFx1MjMxMlwiLFxuICBcInByb2ZzdXJmXCI6XCJcXHUyMzEzXCIsXG4gIFwicHJvcFwiOlwiXFx1MjIxRFwiLFxuICBcIlByb3BvcnRpb25cIjpcIlxcdTIyMzdcIixcbiAgXCJQcm9wb3J0aW9uYWxcIjpcIlxcdTIyMURcIixcbiAgXCJwcm9wdG9cIjpcIlxcdTIyMURcIixcbiAgXCJwcnNpbVwiOlwiXFx1MjI3RVwiLFxuICBcInBydXJlbFwiOlwiXFx1MjJCMFwiLFxuICBcIlBzY3JcIjpcIlxcdUQ4MzVcXHVEQ0FCXCIsXG4gIFwicHNjclwiOlwiXFx1RDgzNVxcdURDQzVcIixcbiAgXCJQc2lcIjpcIlxcdTAzQThcIixcbiAgXCJwc2lcIjpcIlxcdTAzQzhcIixcbiAgXCJwdW5jc3BcIjpcIlxcdTIwMDhcIixcbiAgXCJRZnJcIjpcIlxcdUQ4MzVcXHVERDE0XCIsXG4gIFwicWZyXCI6XCJcXHVEODM1XFx1REQyRVwiLFxuICBcInFpbnRcIjpcIlxcdTJBMENcIixcbiAgXCJRb3BmXCI6XCJcXHUyMTFBXCIsXG4gIFwicW9wZlwiOlwiXFx1RDgzNVxcdURENjJcIixcbiAgXCJxcHJpbWVcIjpcIlxcdTIwNTdcIixcbiAgXCJRc2NyXCI6XCJcXHVEODM1XFx1RENBQ1wiLFxuICBcInFzY3JcIjpcIlxcdUQ4MzVcXHVEQ0M2XCIsXG4gIFwicXVhdGVybmlvbnNcIjpcIlxcdTIxMERcIixcbiAgXCJxdWF0aW50XCI6XCJcXHUyQTE2XCIsXG4gIFwicXVlc3RcIjpcIlxcdTAwM0ZcIixcbiAgXCJxdWVzdGVxXCI6XCJcXHUyMjVGXCIsXG4gIFwiUVVPVFwiOlwiXFx1MDAyMlwiLFxuICBcInF1b3RcIjpcIlxcdTAwMjJcIixcbiAgXCJyQWFyclwiOlwiXFx1MjFEQlwiLFxuICBcInJhY2VcIjpcIlxcdTIyM0RcXHUwMzMxXCIsXG4gIFwiUmFjdXRlXCI6XCJcXHUwMTU0XCIsXG4gIFwicmFjdXRlXCI6XCJcXHUwMTU1XCIsXG4gIFwicmFkaWNcIjpcIlxcdTIyMUFcIixcbiAgXCJyYWVtcHR5dlwiOlwiXFx1MjlCM1wiLFxuICBcIlJhbmdcIjpcIlxcdTI3RUJcIixcbiAgXCJyYW5nXCI6XCJcXHUyN0U5XCIsXG4gIFwicmFuZ2RcIjpcIlxcdTI5OTJcIixcbiAgXCJyYW5nZVwiOlwiXFx1MjlBNVwiLFxuICBcInJhbmdsZVwiOlwiXFx1MjdFOVwiLFxuICBcInJhcXVvXCI6XCJcXHUwMEJCXCIsXG4gIFwiUmFyclwiOlwiXFx1MjFBMFwiLFxuICBcInJBcnJcIjpcIlxcdTIxRDJcIixcbiAgXCJyYXJyXCI6XCJcXHUyMTkyXCIsXG4gIFwicmFycmFwXCI6XCJcXHUyOTc1XCIsXG4gIFwicmFycmJcIjpcIlxcdTIxRTVcIixcbiAgXCJyYXJyYmZzXCI6XCJcXHUyOTIwXCIsXG4gIFwicmFycmNcIjpcIlxcdTI5MzNcIixcbiAgXCJyYXJyZnNcIjpcIlxcdTI5MUVcIixcbiAgXCJyYXJyaGtcIjpcIlxcdTIxQUFcIixcbiAgXCJyYXJybHBcIjpcIlxcdTIxQUNcIixcbiAgXCJyYXJycGxcIjpcIlxcdTI5NDVcIixcbiAgXCJyYXJyc2ltXCI6XCJcXHUyOTc0XCIsXG4gIFwiUmFycnRsXCI6XCJcXHUyOTE2XCIsXG4gIFwicmFycnRsXCI6XCJcXHUyMUEzXCIsXG4gIFwicmFycndcIjpcIlxcdTIxOURcIixcbiAgXCJyQXRhaWxcIjpcIlxcdTI5MUNcIixcbiAgXCJyYXRhaWxcIjpcIlxcdTI5MUFcIixcbiAgXCJyYXRpb1wiOlwiXFx1MjIzNlwiLFxuICBcInJhdGlvbmFsc1wiOlwiXFx1MjExQVwiLFxuICBcIlJCYXJyXCI6XCJcXHUyOTEwXCIsXG4gIFwickJhcnJcIjpcIlxcdTI5MEZcIixcbiAgXCJyYmFyclwiOlwiXFx1MjkwRFwiLFxuICBcInJiYnJrXCI6XCJcXHUyNzczXCIsXG4gIFwicmJyYWNlXCI6XCJcXHUwMDdEXCIsXG4gIFwicmJyYWNrXCI6XCJcXHUwMDVEXCIsXG4gIFwicmJya2VcIjpcIlxcdTI5OENcIixcbiAgXCJyYnJrc2xkXCI6XCJcXHUyOThFXCIsXG4gIFwicmJya3NsdVwiOlwiXFx1Mjk5MFwiLFxuICBcIlJjYXJvblwiOlwiXFx1MDE1OFwiLFxuICBcInJjYXJvblwiOlwiXFx1MDE1OVwiLFxuICBcIlJjZWRpbFwiOlwiXFx1MDE1NlwiLFxuICBcInJjZWRpbFwiOlwiXFx1MDE1N1wiLFxuICBcInJjZWlsXCI6XCJcXHUyMzA5XCIsXG4gIFwicmN1YlwiOlwiXFx1MDA3RFwiLFxuICBcIlJjeVwiOlwiXFx1MDQyMFwiLFxuICBcInJjeVwiOlwiXFx1MDQ0MFwiLFxuICBcInJkY2FcIjpcIlxcdTI5MzdcIixcbiAgXCJyZGxkaGFyXCI6XCJcXHUyOTY5XCIsXG4gIFwicmRxdW9cIjpcIlxcdTIwMURcIixcbiAgXCJyZHF1b3JcIjpcIlxcdTIwMURcIixcbiAgXCJyZHNoXCI6XCJcXHUyMUIzXCIsXG4gIFwiUmVcIjpcIlxcdTIxMUNcIixcbiAgXCJyZWFsXCI6XCJcXHUyMTFDXCIsXG4gIFwicmVhbGluZVwiOlwiXFx1MjExQlwiLFxuICBcInJlYWxwYXJ0XCI6XCJcXHUyMTFDXCIsXG4gIFwicmVhbHNcIjpcIlxcdTIxMURcIixcbiAgXCJyZWN0XCI6XCJcXHUyNUFEXCIsXG4gIFwiUkVHXCI6XCJcXHUwMEFFXCIsXG4gIFwicmVnXCI6XCJcXHUwMEFFXCIsXG4gIFwiUmV2ZXJzZUVsZW1lbnRcIjpcIlxcdTIyMEJcIixcbiAgXCJSZXZlcnNlRXF1aWxpYnJpdW1cIjpcIlxcdTIxQ0JcIixcbiAgXCJSZXZlcnNlVXBFcXVpbGlicml1bVwiOlwiXFx1Mjk2RlwiLFxuICBcInJmaXNodFwiOlwiXFx1Mjk3RFwiLFxuICBcInJmbG9vclwiOlwiXFx1MjMwQlwiLFxuICBcIlJmclwiOlwiXFx1MjExQ1wiLFxuICBcInJmclwiOlwiXFx1RDgzNVxcdUREMkZcIixcbiAgXCJySGFyXCI6XCJcXHUyOTY0XCIsXG4gIFwicmhhcmRcIjpcIlxcdTIxQzFcIixcbiAgXCJyaGFydVwiOlwiXFx1MjFDMFwiLFxuICBcInJoYXJ1bFwiOlwiXFx1Mjk2Q1wiLFxuICBcIlJob1wiOlwiXFx1MDNBMVwiLFxuICBcInJob1wiOlwiXFx1MDNDMVwiLFxuICBcInJob3ZcIjpcIlxcdTAzRjFcIixcbiAgXCJSaWdodEFuZ2xlQnJhY2tldFwiOlwiXFx1MjdFOVwiLFxuICBcIlJpZ2h0QXJyb3dcIjpcIlxcdTIxOTJcIixcbiAgXCJSaWdodGFycm93XCI6XCJcXHUyMUQyXCIsXG4gIFwicmlnaHRhcnJvd1wiOlwiXFx1MjE5MlwiLFxuICBcIlJpZ2h0QXJyb3dCYXJcIjpcIlxcdTIxRTVcIixcbiAgXCJSaWdodEFycm93TGVmdEFycm93XCI6XCJcXHUyMUM0XCIsXG4gIFwicmlnaHRhcnJvd3RhaWxcIjpcIlxcdTIxQTNcIixcbiAgXCJSaWdodENlaWxpbmdcIjpcIlxcdTIzMDlcIixcbiAgXCJSaWdodERvdWJsZUJyYWNrZXRcIjpcIlxcdTI3RTdcIixcbiAgXCJSaWdodERvd25UZWVWZWN0b3JcIjpcIlxcdTI5NURcIixcbiAgXCJSaWdodERvd25WZWN0b3JcIjpcIlxcdTIxQzJcIixcbiAgXCJSaWdodERvd25WZWN0b3JCYXJcIjpcIlxcdTI5NTVcIixcbiAgXCJSaWdodEZsb29yXCI6XCJcXHUyMzBCXCIsXG4gIFwicmlnaHRoYXJwb29uZG93blwiOlwiXFx1MjFDMVwiLFxuICBcInJpZ2h0aGFycG9vbnVwXCI6XCJcXHUyMUMwXCIsXG4gIFwicmlnaHRsZWZ0YXJyb3dzXCI6XCJcXHUyMUM0XCIsXG4gIFwicmlnaHRsZWZ0aGFycG9vbnNcIjpcIlxcdTIxQ0NcIixcbiAgXCJyaWdodHJpZ2h0YXJyb3dzXCI6XCJcXHUyMUM5XCIsXG4gIFwicmlnaHRzcXVpZ2Fycm93XCI6XCJcXHUyMTlEXCIsXG4gIFwiUmlnaHRUZWVcIjpcIlxcdTIyQTJcIixcbiAgXCJSaWdodFRlZUFycm93XCI6XCJcXHUyMUE2XCIsXG4gIFwiUmlnaHRUZWVWZWN0b3JcIjpcIlxcdTI5NUJcIixcbiAgXCJyaWdodHRocmVldGltZXNcIjpcIlxcdTIyQ0NcIixcbiAgXCJSaWdodFRyaWFuZ2xlXCI6XCJcXHUyMkIzXCIsXG4gIFwiUmlnaHRUcmlhbmdsZUJhclwiOlwiXFx1MjlEMFwiLFxuICBcIlJpZ2h0VHJpYW5nbGVFcXVhbFwiOlwiXFx1MjJCNVwiLFxuICBcIlJpZ2h0VXBEb3duVmVjdG9yXCI6XCJcXHUyOTRGXCIsXG4gIFwiUmlnaHRVcFRlZVZlY3RvclwiOlwiXFx1Mjk1Q1wiLFxuICBcIlJpZ2h0VXBWZWN0b3JcIjpcIlxcdTIxQkVcIixcbiAgXCJSaWdodFVwVmVjdG9yQmFyXCI6XCJcXHUyOTU0XCIsXG4gIFwiUmlnaHRWZWN0b3JcIjpcIlxcdTIxQzBcIixcbiAgXCJSaWdodFZlY3RvckJhclwiOlwiXFx1Mjk1M1wiLFxuICBcInJpbmdcIjpcIlxcdTAyREFcIixcbiAgXCJyaXNpbmdkb3RzZXFcIjpcIlxcdTIyNTNcIixcbiAgXCJybGFyclwiOlwiXFx1MjFDNFwiLFxuICBcInJsaGFyXCI6XCJcXHUyMUNDXCIsXG4gIFwicmxtXCI6XCJcXHUyMDBGXCIsXG4gIFwicm1vdXN0XCI6XCJcXHUyM0IxXCIsXG4gIFwicm1vdXN0YWNoZVwiOlwiXFx1MjNCMVwiLFxuICBcInJubWlkXCI6XCJcXHUyQUVFXCIsXG4gIFwicm9hbmdcIjpcIlxcdTI3RURcIixcbiAgXCJyb2FyclwiOlwiXFx1MjFGRVwiLFxuICBcInJvYnJrXCI6XCJcXHUyN0U3XCIsXG4gIFwicm9wYXJcIjpcIlxcdTI5ODZcIixcbiAgXCJSb3BmXCI6XCJcXHUyMTFEXCIsXG4gIFwicm9wZlwiOlwiXFx1RDgzNVxcdURENjNcIixcbiAgXCJyb3BsdXNcIjpcIlxcdTJBMkVcIixcbiAgXCJyb3RpbWVzXCI6XCJcXHUyQTM1XCIsXG4gIFwiUm91bmRJbXBsaWVzXCI6XCJcXHUyOTcwXCIsXG4gIFwicnBhclwiOlwiXFx1MDAyOVwiLFxuICBcInJwYXJndFwiOlwiXFx1Mjk5NFwiLFxuICBcInJwcG9saW50XCI6XCJcXHUyQTEyXCIsXG4gIFwicnJhcnJcIjpcIlxcdTIxQzlcIixcbiAgXCJScmlnaHRhcnJvd1wiOlwiXFx1MjFEQlwiLFxuICBcInJzYXF1b1wiOlwiXFx1MjAzQVwiLFxuICBcIlJzY3JcIjpcIlxcdTIxMUJcIixcbiAgXCJyc2NyXCI6XCJcXHVEODM1XFx1RENDN1wiLFxuICBcIlJzaFwiOlwiXFx1MjFCMVwiLFxuICBcInJzaFwiOlwiXFx1MjFCMVwiLFxuICBcInJzcWJcIjpcIlxcdTAwNURcIixcbiAgXCJyc3F1b1wiOlwiXFx1MjAxOVwiLFxuICBcInJzcXVvclwiOlwiXFx1MjAxOVwiLFxuICBcInJ0aHJlZVwiOlwiXFx1MjJDQ1wiLFxuICBcInJ0aW1lc1wiOlwiXFx1MjJDQVwiLFxuICBcInJ0cmlcIjpcIlxcdTI1QjlcIixcbiAgXCJydHJpZVwiOlwiXFx1MjJCNVwiLFxuICBcInJ0cmlmXCI6XCJcXHUyNUI4XCIsXG4gIFwicnRyaWx0cmlcIjpcIlxcdTI5Q0VcIixcbiAgXCJSdWxlRGVsYXllZFwiOlwiXFx1MjlGNFwiLFxuICBcInJ1bHVoYXJcIjpcIlxcdTI5NjhcIixcbiAgXCJyeFwiOlwiXFx1MjExRVwiLFxuICBcIlNhY3V0ZVwiOlwiXFx1MDE1QVwiLFxuICBcInNhY3V0ZVwiOlwiXFx1MDE1QlwiLFxuICBcInNicXVvXCI6XCJcXHUyMDFBXCIsXG4gIFwiU2NcIjpcIlxcdTJBQkNcIixcbiAgXCJzY1wiOlwiXFx1MjI3QlwiLFxuICBcInNjYXBcIjpcIlxcdTJBQjhcIixcbiAgXCJTY2Fyb25cIjpcIlxcdTAxNjBcIixcbiAgXCJzY2Fyb25cIjpcIlxcdTAxNjFcIixcbiAgXCJzY2N1ZVwiOlwiXFx1MjI3RFwiLFxuICBcInNjRVwiOlwiXFx1MkFCNFwiLFxuICBcInNjZVwiOlwiXFx1MkFCMFwiLFxuICBcIlNjZWRpbFwiOlwiXFx1MDE1RVwiLFxuICBcInNjZWRpbFwiOlwiXFx1MDE1RlwiLFxuICBcIlNjaXJjXCI6XCJcXHUwMTVDXCIsXG4gIFwic2NpcmNcIjpcIlxcdTAxNURcIixcbiAgXCJzY25hcFwiOlwiXFx1MkFCQVwiLFxuICBcInNjbkVcIjpcIlxcdTJBQjZcIixcbiAgXCJzY25zaW1cIjpcIlxcdTIyRTlcIixcbiAgXCJzY3BvbGludFwiOlwiXFx1MkExM1wiLFxuICBcInNjc2ltXCI6XCJcXHUyMjdGXCIsXG4gIFwiU2N5XCI6XCJcXHUwNDIxXCIsXG4gIFwic2N5XCI6XCJcXHUwNDQxXCIsXG4gIFwic2RvdFwiOlwiXFx1MjJDNVwiLFxuICBcInNkb3RiXCI6XCJcXHUyMkExXCIsXG4gIFwic2RvdGVcIjpcIlxcdTJBNjZcIixcbiAgXCJzZWFyaGtcIjpcIlxcdTI5MjVcIixcbiAgXCJzZUFyclwiOlwiXFx1MjFEOFwiLFxuICBcInNlYXJyXCI6XCJcXHUyMTk4XCIsXG4gIFwic2VhcnJvd1wiOlwiXFx1MjE5OFwiLFxuICBcInNlY3RcIjpcIlxcdTAwQTdcIixcbiAgXCJzZW1pXCI6XCJcXHUwMDNCXCIsXG4gIFwic2Vzd2FyXCI6XCJcXHUyOTI5XCIsXG4gIFwic2V0bWludXNcIjpcIlxcdTIyMTZcIixcbiAgXCJzZXRtblwiOlwiXFx1MjIxNlwiLFxuICBcInNleHRcIjpcIlxcdTI3MzZcIixcbiAgXCJTZnJcIjpcIlxcdUQ4MzVcXHVERDE2XCIsXG4gIFwic2ZyXCI6XCJcXHVEODM1XFx1REQzMFwiLFxuICBcInNmcm93blwiOlwiXFx1MjMyMlwiLFxuICBcInNoYXJwXCI6XCJcXHUyNjZGXCIsXG4gIFwiU0hDSGN5XCI6XCJcXHUwNDI5XCIsXG4gIFwic2hjaGN5XCI6XCJcXHUwNDQ5XCIsXG4gIFwiU0hjeVwiOlwiXFx1MDQyOFwiLFxuICBcInNoY3lcIjpcIlxcdTA0NDhcIixcbiAgXCJTaG9ydERvd25BcnJvd1wiOlwiXFx1MjE5M1wiLFxuICBcIlNob3J0TGVmdEFycm93XCI6XCJcXHUyMTkwXCIsXG4gIFwic2hvcnRtaWRcIjpcIlxcdTIyMjNcIixcbiAgXCJzaG9ydHBhcmFsbGVsXCI6XCJcXHUyMjI1XCIsXG4gIFwiU2hvcnRSaWdodEFycm93XCI6XCJcXHUyMTkyXCIsXG4gIFwiU2hvcnRVcEFycm93XCI6XCJcXHUyMTkxXCIsXG4gIFwic2h5XCI6XCJcXHUwMEFEXCIsXG4gIFwiU2lnbWFcIjpcIlxcdTAzQTNcIixcbiAgXCJzaWdtYVwiOlwiXFx1MDNDM1wiLFxuICBcInNpZ21hZlwiOlwiXFx1MDNDMlwiLFxuICBcInNpZ21hdlwiOlwiXFx1MDNDMlwiLFxuICBcInNpbVwiOlwiXFx1MjIzQ1wiLFxuICBcInNpbWRvdFwiOlwiXFx1MkE2QVwiLFxuICBcInNpbWVcIjpcIlxcdTIyNDNcIixcbiAgXCJzaW1lcVwiOlwiXFx1MjI0M1wiLFxuICBcInNpbWdcIjpcIlxcdTJBOUVcIixcbiAgXCJzaW1nRVwiOlwiXFx1MkFBMFwiLFxuICBcInNpbWxcIjpcIlxcdTJBOURcIixcbiAgXCJzaW1sRVwiOlwiXFx1MkE5RlwiLFxuICBcInNpbW5lXCI6XCJcXHUyMjQ2XCIsXG4gIFwic2ltcGx1c1wiOlwiXFx1MkEyNFwiLFxuICBcInNpbXJhcnJcIjpcIlxcdTI5NzJcIixcbiAgXCJzbGFyclwiOlwiXFx1MjE5MFwiLFxuICBcIlNtYWxsQ2lyY2xlXCI6XCJcXHUyMjE4XCIsXG4gIFwic21hbGxzZXRtaW51c1wiOlwiXFx1MjIxNlwiLFxuICBcInNtYXNocFwiOlwiXFx1MkEzM1wiLFxuICBcInNtZXBhcnNsXCI6XCJcXHUyOUU0XCIsXG4gIFwic21pZFwiOlwiXFx1MjIyM1wiLFxuICBcInNtaWxlXCI6XCJcXHUyMzIzXCIsXG4gIFwic210XCI6XCJcXHUyQUFBXCIsXG4gIFwic210ZVwiOlwiXFx1MkFBQ1wiLFxuICBcInNtdGVzXCI6XCJcXHUyQUFDXFx1RkUwMFwiLFxuICBcIlNPRlRjeVwiOlwiXFx1MDQyQ1wiLFxuICBcInNvZnRjeVwiOlwiXFx1MDQ0Q1wiLFxuICBcInNvbFwiOlwiXFx1MDAyRlwiLFxuICBcInNvbGJcIjpcIlxcdTI5QzRcIixcbiAgXCJzb2xiYXJcIjpcIlxcdTIzM0ZcIixcbiAgXCJTb3BmXCI6XCJcXHVEODM1XFx1REQ0QVwiLFxuICBcInNvcGZcIjpcIlxcdUQ4MzVcXHVERDY0XCIsXG4gIFwic3BhZGVzXCI6XCJcXHUyNjYwXCIsXG4gIFwic3BhZGVzdWl0XCI6XCJcXHUyNjYwXCIsXG4gIFwic3BhclwiOlwiXFx1MjIyNVwiLFxuICBcInNxY2FwXCI6XCJcXHUyMjkzXCIsXG4gIFwic3FjYXBzXCI6XCJcXHUyMjkzXFx1RkUwMFwiLFxuICBcInNxY3VwXCI6XCJcXHUyMjk0XCIsXG4gIFwic3FjdXBzXCI6XCJcXHUyMjk0XFx1RkUwMFwiLFxuICBcIlNxcnRcIjpcIlxcdTIyMUFcIixcbiAgXCJzcXN1YlwiOlwiXFx1MjI4RlwiLFxuICBcInNxc3ViZVwiOlwiXFx1MjI5MVwiLFxuICBcInNxc3Vic2V0XCI6XCJcXHUyMjhGXCIsXG4gIFwic3FzdWJzZXRlcVwiOlwiXFx1MjI5MVwiLFxuICBcInNxc3VwXCI6XCJcXHUyMjkwXCIsXG4gIFwic3FzdXBlXCI6XCJcXHUyMjkyXCIsXG4gIFwic3FzdXBzZXRcIjpcIlxcdTIyOTBcIixcbiAgXCJzcXN1cHNldGVxXCI6XCJcXHUyMjkyXCIsXG4gIFwic3F1XCI6XCJcXHUyNUExXCIsXG4gIFwiU3F1YXJlXCI6XCJcXHUyNUExXCIsXG4gIFwic3F1YXJlXCI6XCJcXHUyNUExXCIsXG4gIFwiU3F1YXJlSW50ZXJzZWN0aW9uXCI6XCJcXHUyMjkzXCIsXG4gIFwiU3F1YXJlU3Vic2V0XCI6XCJcXHUyMjhGXCIsXG4gIFwiU3F1YXJlU3Vic2V0RXF1YWxcIjpcIlxcdTIyOTFcIixcbiAgXCJTcXVhcmVTdXBlcnNldFwiOlwiXFx1MjI5MFwiLFxuICBcIlNxdWFyZVN1cGVyc2V0RXF1YWxcIjpcIlxcdTIyOTJcIixcbiAgXCJTcXVhcmVVbmlvblwiOlwiXFx1MjI5NFwiLFxuICBcInNxdWFyZlwiOlwiXFx1MjVBQVwiLFxuICBcInNxdWZcIjpcIlxcdTI1QUFcIixcbiAgXCJzcmFyclwiOlwiXFx1MjE5MlwiLFxuICBcIlNzY3JcIjpcIlxcdUQ4MzVcXHVEQ0FFXCIsXG4gIFwic3NjclwiOlwiXFx1RDgzNVxcdURDQzhcIixcbiAgXCJzc2V0bW5cIjpcIlxcdTIyMTZcIixcbiAgXCJzc21pbGVcIjpcIlxcdTIzMjNcIixcbiAgXCJzc3RhcmZcIjpcIlxcdTIyQzZcIixcbiAgXCJTdGFyXCI6XCJcXHUyMkM2XCIsXG4gIFwic3RhclwiOlwiXFx1MjYwNlwiLFxuICBcInN0YXJmXCI6XCJcXHUyNjA1XCIsXG4gIFwic3RyYWlnaHRlcHNpbG9uXCI6XCJcXHUwM0Y1XCIsXG4gIFwic3RyYWlnaHRwaGlcIjpcIlxcdTAzRDVcIixcbiAgXCJzdHJuc1wiOlwiXFx1MDBBRlwiLFxuICBcIlN1YlwiOlwiXFx1MjJEMFwiLFxuICBcInN1YlwiOlwiXFx1MjI4MlwiLFxuICBcInN1YmRvdFwiOlwiXFx1MkFCRFwiLFxuICBcInN1YkVcIjpcIlxcdTJBQzVcIixcbiAgXCJzdWJlXCI6XCJcXHUyMjg2XCIsXG4gIFwic3ViZWRvdFwiOlwiXFx1MkFDM1wiLFxuICBcInN1Ym11bHRcIjpcIlxcdTJBQzFcIixcbiAgXCJzdWJuRVwiOlwiXFx1MkFDQlwiLFxuICBcInN1Ym5lXCI6XCJcXHUyMjhBXCIsXG4gIFwic3VicGx1c1wiOlwiXFx1MkFCRlwiLFxuICBcInN1YnJhcnJcIjpcIlxcdTI5NzlcIixcbiAgXCJTdWJzZXRcIjpcIlxcdTIyRDBcIixcbiAgXCJzdWJzZXRcIjpcIlxcdTIyODJcIixcbiAgXCJzdWJzZXRlcVwiOlwiXFx1MjI4NlwiLFxuICBcInN1YnNldGVxcVwiOlwiXFx1MkFDNVwiLFxuICBcIlN1YnNldEVxdWFsXCI6XCJcXHUyMjg2XCIsXG4gIFwic3Vic2V0bmVxXCI6XCJcXHUyMjhBXCIsXG4gIFwic3Vic2V0bmVxcVwiOlwiXFx1MkFDQlwiLFxuICBcInN1YnNpbVwiOlwiXFx1MkFDN1wiLFxuICBcInN1YnN1YlwiOlwiXFx1MkFENVwiLFxuICBcInN1YnN1cFwiOlwiXFx1MkFEM1wiLFxuICBcInN1Y2NcIjpcIlxcdTIyN0JcIixcbiAgXCJzdWNjYXBwcm94XCI6XCJcXHUyQUI4XCIsXG4gIFwic3VjY2N1cmx5ZXFcIjpcIlxcdTIyN0RcIixcbiAgXCJTdWNjZWVkc1wiOlwiXFx1MjI3QlwiLFxuICBcIlN1Y2NlZWRzRXF1YWxcIjpcIlxcdTJBQjBcIixcbiAgXCJTdWNjZWVkc1NsYW50RXF1YWxcIjpcIlxcdTIyN0RcIixcbiAgXCJTdWNjZWVkc1RpbGRlXCI6XCJcXHUyMjdGXCIsXG4gIFwic3VjY2VxXCI6XCJcXHUyQUIwXCIsXG4gIFwic3VjY25hcHByb3hcIjpcIlxcdTJBQkFcIixcbiAgXCJzdWNjbmVxcVwiOlwiXFx1MkFCNlwiLFxuICBcInN1Y2Nuc2ltXCI6XCJcXHUyMkU5XCIsXG4gIFwic3VjY3NpbVwiOlwiXFx1MjI3RlwiLFxuICBcIlN1Y2hUaGF0XCI6XCJcXHUyMjBCXCIsXG4gIFwiU3VtXCI6XCJcXHUyMjExXCIsXG4gIFwic3VtXCI6XCJcXHUyMjExXCIsXG4gIFwic3VuZ1wiOlwiXFx1MjY2QVwiLFxuICBcIlN1cFwiOlwiXFx1MjJEMVwiLFxuICBcInN1cFwiOlwiXFx1MjI4M1wiLFxuICBcInN1cDFcIjpcIlxcdTAwQjlcIixcbiAgXCJzdXAyXCI6XCJcXHUwMEIyXCIsXG4gIFwic3VwM1wiOlwiXFx1MDBCM1wiLFxuICBcInN1cGRvdFwiOlwiXFx1MkFCRVwiLFxuICBcInN1cGRzdWJcIjpcIlxcdTJBRDhcIixcbiAgXCJzdXBFXCI6XCJcXHUyQUM2XCIsXG4gIFwic3VwZVwiOlwiXFx1MjI4N1wiLFxuICBcInN1cGVkb3RcIjpcIlxcdTJBQzRcIixcbiAgXCJTdXBlcnNldFwiOlwiXFx1MjI4M1wiLFxuICBcIlN1cGVyc2V0RXF1YWxcIjpcIlxcdTIyODdcIixcbiAgXCJzdXBoc29sXCI6XCJcXHUyN0M5XCIsXG4gIFwic3VwaHN1YlwiOlwiXFx1MkFEN1wiLFxuICBcInN1cGxhcnJcIjpcIlxcdTI5N0JcIixcbiAgXCJzdXBtdWx0XCI6XCJcXHUyQUMyXCIsXG4gIFwic3VwbkVcIjpcIlxcdTJBQ0NcIixcbiAgXCJzdXBuZVwiOlwiXFx1MjI4QlwiLFxuICBcInN1cHBsdXNcIjpcIlxcdTJBQzBcIixcbiAgXCJTdXBzZXRcIjpcIlxcdTIyRDFcIixcbiAgXCJzdXBzZXRcIjpcIlxcdTIyODNcIixcbiAgXCJzdXBzZXRlcVwiOlwiXFx1MjI4N1wiLFxuICBcInN1cHNldGVxcVwiOlwiXFx1MkFDNlwiLFxuICBcInN1cHNldG5lcVwiOlwiXFx1MjI4QlwiLFxuICBcInN1cHNldG5lcXFcIjpcIlxcdTJBQ0NcIixcbiAgXCJzdXBzaW1cIjpcIlxcdTJBQzhcIixcbiAgXCJzdXBzdWJcIjpcIlxcdTJBRDRcIixcbiAgXCJzdXBzdXBcIjpcIlxcdTJBRDZcIixcbiAgXCJzd2FyaGtcIjpcIlxcdTI5MjZcIixcbiAgXCJzd0FyclwiOlwiXFx1MjFEOVwiLFxuICBcInN3YXJyXCI6XCJcXHUyMTk5XCIsXG4gIFwic3dhcnJvd1wiOlwiXFx1MjE5OVwiLFxuICBcInN3bndhclwiOlwiXFx1MjkyQVwiLFxuICBcInN6bGlnXCI6XCJcXHUwMERGXCIsXG4gIFwiVGFiXCI6XCJcXHUwMDA5XCIsXG4gIFwidGFyZ2V0XCI6XCJcXHUyMzE2XCIsXG4gIFwiVGF1XCI6XCJcXHUwM0E0XCIsXG4gIFwidGF1XCI6XCJcXHUwM0M0XCIsXG4gIFwidGJya1wiOlwiXFx1MjNCNFwiLFxuICBcIlRjYXJvblwiOlwiXFx1MDE2NFwiLFxuICBcInRjYXJvblwiOlwiXFx1MDE2NVwiLFxuICBcIlRjZWRpbFwiOlwiXFx1MDE2MlwiLFxuICBcInRjZWRpbFwiOlwiXFx1MDE2M1wiLFxuICBcIlRjeVwiOlwiXFx1MDQyMlwiLFxuICBcInRjeVwiOlwiXFx1MDQ0MlwiLFxuICBcInRkb3RcIjpcIlxcdTIwREJcIixcbiAgXCJ0ZWxyZWNcIjpcIlxcdTIzMTVcIixcbiAgXCJUZnJcIjpcIlxcdUQ4MzVcXHVERDE3XCIsXG4gIFwidGZyXCI6XCJcXHVEODM1XFx1REQzMVwiLFxuICBcInRoZXJlNFwiOlwiXFx1MjIzNFwiLFxuICBcIlRoZXJlZm9yZVwiOlwiXFx1MjIzNFwiLFxuICBcInRoZXJlZm9yZVwiOlwiXFx1MjIzNFwiLFxuICBcIlRoZXRhXCI6XCJcXHUwMzk4XCIsXG4gIFwidGhldGFcIjpcIlxcdTAzQjhcIixcbiAgXCJ0aGV0YXN5bVwiOlwiXFx1MDNEMVwiLFxuICBcInRoZXRhdlwiOlwiXFx1MDNEMVwiLFxuICBcInRoaWNrYXBwcm94XCI6XCJcXHUyMjQ4XCIsXG4gIFwidGhpY2tzaW1cIjpcIlxcdTIyM0NcIixcbiAgXCJUaGlja1NwYWNlXCI6XCJcXHUyMDVGXFx1MjAwQVwiLFxuICBcInRoaW5zcFwiOlwiXFx1MjAwOVwiLFxuICBcIlRoaW5TcGFjZVwiOlwiXFx1MjAwOVwiLFxuICBcInRoa2FwXCI6XCJcXHUyMjQ4XCIsXG4gIFwidGhrc2ltXCI6XCJcXHUyMjNDXCIsXG4gIFwiVEhPUk5cIjpcIlxcdTAwREVcIixcbiAgXCJ0aG9yblwiOlwiXFx1MDBGRVwiLFxuICBcIlRpbGRlXCI6XCJcXHUyMjNDXCIsXG4gIFwidGlsZGVcIjpcIlxcdTAyRENcIixcbiAgXCJUaWxkZUVxdWFsXCI6XCJcXHUyMjQzXCIsXG4gIFwiVGlsZGVGdWxsRXF1YWxcIjpcIlxcdTIyNDVcIixcbiAgXCJUaWxkZVRpbGRlXCI6XCJcXHUyMjQ4XCIsXG4gIFwidGltZXNcIjpcIlxcdTAwRDdcIixcbiAgXCJ0aW1lc2JcIjpcIlxcdTIyQTBcIixcbiAgXCJ0aW1lc2JhclwiOlwiXFx1MkEzMVwiLFxuICBcInRpbWVzZFwiOlwiXFx1MkEzMFwiLFxuICBcInRpbnRcIjpcIlxcdTIyMkRcIixcbiAgXCJ0b2VhXCI6XCJcXHUyOTI4XCIsXG4gIFwidG9wXCI6XCJcXHUyMkE0XCIsXG4gIFwidG9wYm90XCI6XCJcXHUyMzM2XCIsXG4gIFwidG9wY2lyXCI6XCJcXHUyQUYxXCIsXG4gIFwiVG9wZlwiOlwiXFx1RDgzNVxcdURENEJcIixcbiAgXCJ0b3BmXCI6XCJcXHVEODM1XFx1REQ2NVwiLFxuICBcInRvcGZvcmtcIjpcIlxcdTJBREFcIixcbiAgXCJ0b3NhXCI6XCJcXHUyOTI5XCIsXG4gIFwidHByaW1lXCI6XCJcXHUyMDM0XCIsXG4gIFwiVFJBREVcIjpcIlxcdTIxMjJcIixcbiAgXCJ0cmFkZVwiOlwiXFx1MjEyMlwiLFxuICBcInRyaWFuZ2xlXCI6XCJcXHUyNUI1XCIsXG4gIFwidHJpYW5nbGVkb3duXCI6XCJcXHUyNUJGXCIsXG4gIFwidHJpYW5nbGVsZWZ0XCI6XCJcXHUyNUMzXCIsXG4gIFwidHJpYW5nbGVsZWZ0ZXFcIjpcIlxcdTIyQjRcIixcbiAgXCJ0cmlhbmdsZXFcIjpcIlxcdTIyNUNcIixcbiAgXCJ0cmlhbmdsZXJpZ2h0XCI6XCJcXHUyNUI5XCIsXG4gIFwidHJpYW5nbGVyaWdodGVxXCI6XCJcXHUyMkI1XCIsXG4gIFwidHJpZG90XCI6XCJcXHUyNUVDXCIsXG4gIFwidHJpZVwiOlwiXFx1MjI1Q1wiLFxuICBcInRyaW1pbnVzXCI6XCJcXHUyQTNBXCIsXG4gIFwiVHJpcGxlRG90XCI6XCJcXHUyMERCXCIsXG4gIFwidHJpcGx1c1wiOlwiXFx1MkEzOVwiLFxuICBcInRyaXNiXCI6XCJcXHUyOUNEXCIsXG4gIFwidHJpdGltZVwiOlwiXFx1MkEzQlwiLFxuICBcInRycGV6aXVtXCI6XCJcXHUyM0UyXCIsXG4gIFwiVHNjclwiOlwiXFx1RDgzNVxcdURDQUZcIixcbiAgXCJ0c2NyXCI6XCJcXHVEODM1XFx1RENDOVwiLFxuICBcIlRTY3lcIjpcIlxcdTA0MjZcIixcbiAgXCJ0c2N5XCI6XCJcXHUwNDQ2XCIsXG4gIFwiVFNIY3lcIjpcIlxcdTA0MEJcIixcbiAgXCJ0c2hjeVwiOlwiXFx1MDQ1QlwiLFxuICBcIlRzdHJva1wiOlwiXFx1MDE2NlwiLFxuICBcInRzdHJva1wiOlwiXFx1MDE2N1wiLFxuICBcInR3aXh0XCI6XCJcXHUyMjZDXCIsXG4gIFwidHdvaGVhZGxlZnRhcnJvd1wiOlwiXFx1MjE5RVwiLFxuICBcInR3b2hlYWRyaWdodGFycm93XCI6XCJcXHUyMUEwXCIsXG4gIFwiVWFjdXRlXCI6XCJcXHUwMERBXCIsXG4gIFwidWFjdXRlXCI6XCJcXHUwMEZBXCIsXG4gIFwiVWFyclwiOlwiXFx1MjE5RlwiLFxuICBcInVBcnJcIjpcIlxcdTIxRDFcIixcbiAgXCJ1YXJyXCI6XCJcXHUyMTkxXCIsXG4gIFwiVWFycm9jaXJcIjpcIlxcdTI5NDlcIixcbiAgXCJVYnJjeVwiOlwiXFx1MDQwRVwiLFxuICBcInVicmN5XCI6XCJcXHUwNDVFXCIsXG4gIFwiVWJyZXZlXCI6XCJcXHUwMTZDXCIsXG4gIFwidWJyZXZlXCI6XCJcXHUwMTZEXCIsXG4gIFwiVWNpcmNcIjpcIlxcdTAwREJcIixcbiAgXCJ1Y2lyY1wiOlwiXFx1MDBGQlwiLFxuICBcIlVjeVwiOlwiXFx1MDQyM1wiLFxuICBcInVjeVwiOlwiXFx1MDQ0M1wiLFxuICBcInVkYXJyXCI6XCJcXHUyMUM1XCIsXG4gIFwiVWRibGFjXCI6XCJcXHUwMTcwXCIsXG4gIFwidWRibGFjXCI6XCJcXHUwMTcxXCIsXG4gIFwidWRoYXJcIjpcIlxcdTI5NkVcIixcbiAgXCJ1ZmlzaHRcIjpcIlxcdTI5N0VcIixcbiAgXCJVZnJcIjpcIlxcdUQ4MzVcXHVERDE4XCIsXG4gIFwidWZyXCI6XCJcXHVEODM1XFx1REQzMlwiLFxuICBcIlVncmF2ZVwiOlwiXFx1MDBEOVwiLFxuICBcInVncmF2ZVwiOlwiXFx1MDBGOVwiLFxuICBcInVIYXJcIjpcIlxcdTI5NjNcIixcbiAgXCJ1aGFybFwiOlwiXFx1MjFCRlwiLFxuICBcInVoYXJyXCI6XCJcXHUyMUJFXCIsXG4gIFwidWhibGtcIjpcIlxcdTI1ODBcIixcbiAgXCJ1bGNvcm5cIjpcIlxcdTIzMUNcIixcbiAgXCJ1bGNvcm5lclwiOlwiXFx1MjMxQ1wiLFxuICBcInVsY3JvcFwiOlwiXFx1MjMwRlwiLFxuICBcInVsdHJpXCI6XCJcXHUyNUY4XCIsXG4gIFwiVW1hY3JcIjpcIlxcdTAxNkFcIixcbiAgXCJ1bWFjclwiOlwiXFx1MDE2QlwiLFxuICBcInVtbFwiOlwiXFx1MDBBOFwiLFxuICBcIlVuZGVyQmFyXCI6XCJcXHUwMDVGXCIsXG4gIFwiVW5kZXJCcmFjZVwiOlwiXFx1MjNERlwiLFxuICBcIlVuZGVyQnJhY2tldFwiOlwiXFx1MjNCNVwiLFxuICBcIlVuZGVyUGFyZW50aGVzaXNcIjpcIlxcdTIzRERcIixcbiAgXCJVbmlvblwiOlwiXFx1MjJDM1wiLFxuICBcIlVuaW9uUGx1c1wiOlwiXFx1MjI4RVwiLFxuICBcIlVvZ29uXCI6XCJcXHUwMTcyXCIsXG4gIFwidW9nb25cIjpcIlxcdTAxNzNcIixcbiAgXCJVb3BmXCI6XCJcXHVEODM1XFx1REQ0Q1wiLFxuICBcInVvcGZcIjpcIlxcdUQ4MzVcXHVERDY2XCIsXG4gIFwiVXBBcnJvd1wiOlwiXFx1MjE5MVwiLFxuICBcIlVwYXJyb3dcIjpcIlxcdTIxRDFcIixcbiAgXCJ1cGFycm93XCI6XCJcXHUyMTkxXCIsXG4gIFwiVXBBcnJvd0JhclwiOlwiXFx1MjkxMlwiLFxuICBcIlVwQXJyb3dEb3duQXJyb3dcIjpcIlxcdTIxQzVcIixcbiAgXCJVcERvd25BcnJvd1wiOlwiXFx1MjE5NVwiLFxuICBcIlVwZG93bmFycm93XCI6XCJcXHUyMUQ1XCIsXG4gIFwidXBkb3duYXJyb3dcIjpcIlxcdTIxOTVcIixcbiAgXCJVcEVxdWlsaWJyaXVtXCI6XCJcXHUyOTZFXCIsXG4gIFwidXBoYXJwb29ubGVmdFwiOlwiXFx1MjFCRlwiLFxuICBcInVwaGFycG9vbnJpZ2h0XCI6XCJcXHUyMUJFXCIsXG4gIFwidXBsdXNcIjpcIlxcdTIyOEVcIixcbiAgXCJVcHBlckxlZnRBcnJvd1wiOlwiXFx1MjE5NlwiLFxuICBcIlVwcGVyUmlnaHRBcnJvd1wiOlwiXFx1MjE5N1wiLFxuICBcIlVwc2lcIjpcIlxcdTAzRDJcIixcbiAgXCJ1cHNpXCI6XCJcXHUwM0M1XCIsXG4gIFwidXBzaWhcIjpcIlxcdTAzRDJcIixcbiAgXCJVcHNpbG9uXCI6XCJcXHUwM0E1XCIsXG4gIFwidXBzaWxvblwiOlwiXFx1MDNDNVwiLFxuICBcIlVwVGVlXCI6XCJcXHUyMkE1XCIsXG4gIFwiVXBUZWVBcnJvd1wiOlwiXFx1MjFBNVwiLFxuICBcInVwdXBhcnJvd3NcIjpcIlxcdTIxQzhcIixcbiAgXCJ1cmNvcm5cIjpcIlxcdTIzMURcIixcbiAgXCJ1cmNvcm5lclwiOlwiXFx1MjMxRFwiLFxuICBcInVyY3JvcFwiOlwiXFx1MjMwRVwiLFxuICBcIlVyaW5nXCI6XCJcXHUwMTZFXCIsXG4gIFwidXJpbmdcIjpcIlxcdTAxNkZcIixcbiAgXCJ1cnRyaVwiOlwiXFx1MjVGOVwiLFxuICBcIlVzY3JcIjpcIlxcdUQ4MzVcXHVEQ0IwXCIsXG4gIFwidXNjclwiOlwiXFx1RDgzNVxcdURDQ0FcIixcbiAgXCJ1dGRvdFwiOlwiXFx1MjJGMFwiLFxuICBcIlV0aWxkZVwiOlwiXFx1MDE2OFwiLFxuICBcInV0aWxkZVwiOlwiXFx1MDE2OVwiLFxuICBcInV0cmlcIjpcIlxcdTI1QjVcIixcbiAgXCJ1dHJpZlwiOlwiXFx1MjVCNFwiLFxuICBcInV1YXJyXCI6XCJcXHUyMUM4XCIsXG4gIFwiVXVtbFwiOlwiXFx1MDBEQ1wiLFxuICBcInV1bWxcIjpcIlxcdTAwRkNcIixcbiAgXCJ1d2FuZ2xlXCI6XCJcXHUyOUE3XCIsXG4gIFwidmFuZ3J0XCI6XCJcXHUyOTlDXCIsXG4gIFwidmFyZXBzaWxvblwiOlwiXFx1MDNGNVwiLFxuICBcInZhcmthcHBhXCI6XCJcXHUwM0YwXCIsXG4gIFwidmFybm90aGluZ1wiOlwiXFx1MjIwNVwiLFxuICBcInZhcnBoaVwiOlwiXFx1MDNENVwiLFxuICBcInZhcnBpXCI6XCJcXHUwM0Q2XCIsXG4gIFwidmFycHJvcHRvXCI6XCJcXHUyMjFEXCIsXG4gIFwidkFyclwiOlwiXFx1MjFENVwiLFxuICBcInZhcnJcIjpcIlxcdTIxOTVcIixcbiAgXCJ2YXJyaG9cIjpcIlxcdTAzRjFcIixcbiAgXCJ2YXJzaWdtYVwiOlwiXFx1MDNDMlwiLFxuICBcInZhcnN1YnNldG5lcVwiOlwiXFx1MjI4QVxcdUZFMDBcIixcbiAgXCJ2YXJzdWJzZXRuZXFxXCI6XCJcXHUyQUNCXFx1RkUwMFwiLFxuICBcInZhcnN1cHNldG5lcVwiOlwiXFx1MjI4QlxcdUZFMDBcIixcbiAgXCJ2YXJzdXBzZXRuZXFxXCI6XCJcXHUyQUNDXFx1RkUwMFwiLFxuICBcInZhcnRoZXRhXCI6XCJcXHUwM0QxXCIsXG4gIFwidmFydHJpYW5nbGVsZWZ0XCI6XCJcXHUyMkIyXCIsXG4gIFwidmFydHJpYW5nbGVyaWdodFwiOlwiXFx1MjJCM1wiLFxuICBcIlZiYXJcIjpcIlxcdTJBRUJcIixcbiAgXCJ2QmFyXCI6XCJcXHUyQUU4XCIsXG4gIFwidkJhcnZcIjpcIlxcdTJBRTlcIixcbiAgXCJWY3lcIjpcIlxcdTA0MTJcIixcbiAgXCJ2Y3lcIjpcIlxcdTA0MzJcIixcbiAgXCJWRGFzaFwiOlwiXFx1MjJBQlwiLFxuICBcIlZkYXNoXCI6XCJcXHUyMkE5XCIsXG4gIFwidkRhc2hcIjpcIlxcdTIyQThcIixcbiAgXCJ2ZGFzaFwiOlwiXFx1MjJBMlwiLFxuICBcIlZkYXNobFwiOlwiXFx1MkFFNlwiLFxuICBcIlZlZVwiOlwiXFx1MjJDMVwiLFxuICBcInZlZVwiOlwiXFx1MjIyOFwiLFxuICBcInZlZWJhclwiOlwiXFx1MjJCQlwiLFxuICBcInZlZWVxXCI6XCJcXHUyMjVBXCIsXG4gIFwidmVsbGlwXCI6XCJcXHUyMkVFXCIsXG4gIFwiVmVyYmFyXCI6XCJcXHUyMDE2XCIsXG4gIFwidmVyYmFyXCI6XCJcXHUwMDdDXCIsXG4gIFwiVmVydFwiOlwiXFx1MjAxNlwiLFxuICBcInZlcnRcIjpcIlxcdTAwN0NcIixcbiAgXCJWZXJ0aWNhbEJhclwiOlwiXFx1MjIyM1wiLFxuICBcIlZlcnRpY2FsTGluZVwiOlwiXFx1MDA3Q1wiLFxuICBcIlZlcnRpY2FsU2VwYXJhdG9yXCI6XCJcXHUyNzU4XCIsXG4gIFwiVmVydGljYWxUaWxkZVwiOlwiXFx1MjI0MFwiLFxuICBcIlZlcnlUaGluU3BhY2VcIjpcIlxcdTIwMEFcIixcbiAgXCJWZnJcIjpcIlxcdUQ4MzVcXHVERDE5XCIsXG4gIFwidmZyXCI6XCJcXHVEODM1XFx1REQzM1wiLFxuICBcInZsdHJpXCI6XCJcXHUyMkIyXCIsXG4gIFwidm5zdWJcIjpcIlxcdTIyODJcXHUyMEQyXCIsXG4gIFwidm5zdXBcIjpcIlxcdTIyODNcXHUyMEQyXCIsXG4gIFwiVm9wZlwiOlwiXFx1RDgzNVxcdURENERcIixcbiAgXCJ2b3BmXCI6XCJcXHVEODM1XFx1REQ2N1wiLFxuICBcInZwcm9wXCI6XCJcXHUyMjFEXCIsXG4gIFwidnJ0cmlcIjpcIlxcdTIyQjNcIixcbiAgXCJWc2NyXCI6XCJcXHVEODM1XFx1RENCMVwiLFxuICBcInZzY3JcIjpcIlxcdUQ4MzVcXHVEQ0NCXCIsXG4gIFwidnN1Ym5FXCI6XCJcXHUyQUNCXFx1RkUwMFwiLFxuICBcInZzdWJuZVwiOlwiXFx1MjI4QVxcdUZFMDBcIixcbiAgXCJ2c3VwbkVcIjpcIlxcdTJBQ0NcXHVGRTAwXCIsXG4gIFwidnN1cG5lXCI6XCJcXHUyMjhCXFx1RkUwMFwiLFxuICBcIlZ2ZGFzaFwiOlwiXFx1MjJBQVwiLFxuICBcInZ6aWd6YWdcIjpcIlxcdTI5OUFcIixcbiAgXCJXY2lyY1wiOlwiXFx1MDE3NFwiLFxuICBcIndjaXJjXCI6XCJcXHUwMTc1XCIsXG4gIFwid2VkYmFyXCI6XCJcXHUyQTVGXCIsXG4gIFwiV2VkZ2VcIjpcIlxcdTIyQzBcIixcbiAgXCJ3ZWRnZVwiOlwiXFx1MjIyN1wiLFxuICBcIndlZGdlcVwiOlwiXFx1MjI1OVwiLFxuICBcIndlaWVycFwiOlwiXFx1MjExOFwiLFxuICBcIldmclwiOlwiXFx1RDgzNVxcdUREMUFcIixcbiAgXCJ3ZnJcIjpcIlxcdUQ4MzVcXHVERDM0XCIsXG4gIFwiV29wZlwiOlwiXFx1RDgzNVxcdURENEVcIixcbiAgXCJ3b3BmXCI6XCJcXHVEODM1XFx1REQ2OFwiLFxuICBcIndwXCI6XCJcXHUyMTE4XCIsXG4gIFwid3JcIjpcIlxcdTIyNDBcIixcbiAgXCJ3cmVhdGhcIjpcIlxcdTIyNDBcIixcbiAgXCJXc2NyXCI6XCJcXHVEODM1XFx1RENCMlwiLFxuICBcIndzY3JcIjpcIlxcdUQ4MzVcXHVEQ0NDXCIsXG4gIFwieGNhcFwiOlwiXFx1MjJDMlwiLFxuICBcInhjaXJjXCI6XCJcXHUyNUVGXCIsXG4gIFwieGN1cFwiOlwiXFx1MjJDM1wiLFxuICBcInhkdHJpXCI6XCJcXHUyNUJEXCIsXG4gIFwiWGZyXCI6XCJcXHVEODM1XFx1REQxQlwiLFxuICBcInhmclwiOlwiXFx1RDgzNVxcdUREMzVcIixcbiAgXCJ4aEFyclwiOlwiXFx1MjdGQVwiLFxuICBcInhoYXJyXCI6XCJcXHUyN0Y3XCIsXG4gIFwiWGlcIjpcIlxcdTAzOUVcIixcbiAgXCJ4aVwiOlwiXFx1MDNCRVwiLFxuICBcInhsQXJyXCI6XCJcXHUyN0Y4XCIsXG4gIFwieGxhcnJcIjpcIlxcdTI3RjVcIixcbiAgXCJ4bWFwXCI6XCJcXHUyN0ZDXCIsXG4gIFwieG5pc1wiOlwiXFx1MjJGQlwiLFxuICBcInhvZG90XCI6XCJcXHUyQTAwXCIsXG4gIFwiWG9wZlwiOlwiXFx1RDgzNVxcdURENEZcIixcbiAgXCJ4b3BmXCI6XCJcXHVEODM1XFx1REQ2OVwiLFxuICBcInhvcGx1c1wiOlwiXFx1MkEwMVwiLFxuICBcInhvdGltZVwiOlwiXFx1MkEwMlwiLFxuICBcInhyQXJyXCI6XCJcXHUyN0Y5XCIsXG4gIFwieHJhcnJcIjpcIlxcdTI3RjZcIixcbiAgXCJYc2NyXCI6XCJcXHVEODM1XFx1RENCM1wiLFxuICBcInhzY3JcIjpcIlxcdUQ4MzVcXHVEQ0NEXCIsXG4gIFwieHNxY3VwXCI6XCJcXHUyQTA2XCIsXG4gIFwieHVwbHVzXCI6XCJcXHUyQTA0XCIsXG4gIFwieHV0cmlcIjpcIlxcdTI1QjNcIixcbiAgXCJ4dmVlXCI6XCJcXHUyMkMxXCIsXG4gIFwieHdlZGdlXCI6XCJcXHUyMkMwXCIsXG4gIFwiWWFjdXRlXCI6XCJcXHUwMEREXCIsXG4gIFwieWFjdXRlXCI6XCJcXHUwMEZEXCIsXG4gIFwiWUFjeVwiOlwiXFx1MDQyRlwiLFxuICBcInlhY3lcIjpcIlxcdTA0NEZcIixcbiAgXCJZY2lyY1wiOlwiXFx1MDE3NlwiLFxuICBcInljaXJjXCI6XCJcXHUwMTc3XCIsXG4gIFwiWWN5XCI6XCJcXHUwNDJCXCIsXG4gIFwieWN5XCI6XCJcXHUwNDRCXCIsXG4gIFwieWVuXCI6XCJcXHUwMEE1XCIsXG4gIFwiWWZyXCI6XCJcXHVEODM1XFx1REQxQ1wiLFxuICBcInlmclwiOlwiXFx1RDgzNVxcdUREMzZcIixcbiAgXCJZSWN5XCI6XCJcXHUwNDA3XCIsXG4gIFwieWljeVwiOlwiXFx1MDQ1N1wiLFxuICBcIllvcGZcIjpcIlxcdUQ4MzVcXHVERDUwXCIsXG4gIFwieW9wZlwiOlwiXFx1RDgzNVxcdURENkFcIixcbiAgXCJZc2NyXCI6XCJcXHVEODM1XFx1RENCNFwiLFxuICBcInlzY3JcIjpcIlxcdUQ4MzVcXHVEQ0NFXCIsXG4gIFwiWVVjeVwiOlwiXFx1MDQyRVwiLFxuICBcInl1Y3lcIjpcIlxcdTA0NEVcIixcbiAgXCJZdW1sXCI6XCJcXHUwMTc4XCIsXG4gIFwieXVtbFwiOlwiXFx1MDBGRlwiLFxuICBcIlphY3V0ZVwiOlwiXFx1MDE3OVwiLFxuICBcInphY3V0ZVwiOlwiXFx1MDE3QVwiLFxuICBcIlpjYXJvblwiOlwiXFx1MDE3RFwiLFxuICBcInpjYXJvblwiOlwiXFx1MDE3RVwiLFxuICBcIlpjeVwiOlwiXFx1MDQxN1wiLFxuICBcInpjeVwiOlwiXFx1MDQzN1wiLFxuICBcIlpkb3RcIjpcIlxcdTAxN0JcIixcbiAgXCJ6ZG90XCI6XCJcXHUwMTdDXCIsXG4gIFwiemVldHJmXCI6XCJcXHUyMTI4XCIsXG4gIFwiWmVyb1dpZHRoU3BhY2VcIjpcIlxcdTIwMEJcIixcbiAgXCJaZXRhXCI6XCJcXHUwMzk2XCIsXG4gIFwiemV0YVwiOlwiXFx1MDNCNlwiLFxuICBcIlpmclwiOlwiXFx1MjEyOFwiLFxuICBcInpmclwiOlwiXFx1RDgzNVxcdUREMzdcIixcbiAgXCJaSGN5XCI6XCJcXHUwNDE2XCIsXG4gIFwiemhjeVwiOlwiXFx1MDQzNlwiLFxuICBcInppZ3JhcnJcIjpcIlxcdTIxRERcIixcbiAgXCJab3BmXCI6XCJcXHUyMTI0XCIsXG4gIFwiem9wZlwiOlwiXFx1RDgzNVxcdURENkJcIixcbiAgXCJac2NyXCI6XCJcXHVEODM1XFx1RENCNVwiLFxuICBcInpzY3JcIjpcIlxcdUQ4MzVcXHVEQ0NGXCIsXG4gIFwiendqXCI6XCJcXHUyMDBEXCIsXG4gIFwiendualwiOlwiXFx1MjAwQ1wiXG59O1xuIiwiLy8gTGlzdCBvZiB2YWxpZCBodG1sIGJsb2NrcyBuYW1lcywgYWNjb3J0aW5nIHRvIGNvbW1vbm1hcmsgc3BlY1xuLy8gaHR0cDovL2pnbS5naXRodWIuaW8vQ29tbW9uTWFyay9zcGVjLmh0bWwjaHRtbC1ibG9ja3NcblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgaHRtbF9ibG9ja3MgPSB7fTtcblxuW1xuICAnYXJ0aWNsZScsXG4gICdhc2lkZScsXG4gICdidXR0b24nLFxuICAnYmxvY2txdW90ZScsXG4gICdib2R5JyxcbiAgJ2NhbnZhcycsXG4gICdjYXB0aW9uJyxcbiAgJ2NvbCcsXG4gICdjb2xncm91cCcsXG4gICdkZCcsXG4gICdkaXYnLFxuICAnZGwnLFxuICAnZHQnLFxuICAnZW1iZWQnLFxuICAnZmllbGRzZXQnLFxuICAnZmlnY2FwdGlvbicsXG4gICdmaWd1cmUnLFxuICAnZm9vdGVyJyxcbiAgJ2Zvcm0nLFxuICAnaDEnLFxuICAnaDInLFxuICAnaDMnLFxuICAnaDQnLFxuICAnaDUnLFxuICAnaDYnLFxuICAnaGVhZGVyJyxcbiAgJ2hncm91cCcsXG4gICdocicsXG4gICdpZnJhbWUnLFxuICAnbGknLFxuICAnbWFwJyxcbiAgJ29iamVjdCcsXG4gICdvbCcsXG4gICdvdXRwdXQnLFxuICAncCcsXG4gICdwcmUnLFxuICAncHJvZ3Jlc3MnLFxuICAnc2NyaXB0JyxcbiAgJ3NlY3Rpb24nLFxuICAnc3R5bGUnLFxuICAndGFibGUnLFxuICAndGJvZHknLFxuICAndGQnLFxuICAndGV4dGFyZWEnLFxuICAndGZvb3QnLFxuICAndGgnLFxuICAndHInLFxuICAndGhlYWQnLFxuICAndWwnLFxuICAndmlkZW8nXG5dLmZvckVhY2goZnVuY3Rpb24gKG5hbWUpIHsgaHRtbF9ibG9ja3NbbmFtZV0gPSB0cnVlOyB9KTtcblxuXG5tb2R1bGUuZXhwb3J0cyA9IGh0bWxfYmxvY2tzO1xuIiwiLy8gUmVnZXhwcyB0byBtYXRjaCBodG1sIGVsZW1lbnRzXG5cbid1c2Ugc3RyaWN0JztcblxuXG5mdW5jdGlvbiByZXBsYWNlKHJlZ2V4LCBvcHRpb25zKSB7XG4gIHJlZ2V4ID0gcmVnZXguc291cmNlO1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCAnJztcblxuICByZXR1cm4gZnVuY3Rpb24gc2VsZihuYW1lLCB2YWwpIHtcbiAgICBpZiAoIW5hbWUpIHtcbiAgICAgIHJldHVybiBuZXcgUmVnRXhwKHJlZ2V4LCBvcHRpb25zKTtcbiAgICB9XG4gICAgdmFsID0gdmFsLnNvdXJjZSB8fCB2YWw7XG4gICAgcmVnZXggPSByZWdleC5yZXBsYWNlKG5hbWUsIHZhbCk7XG4gICAgcmV0dXJuIHNlbGY7XG4gIH07XG59XG5cblxudmFyIGF0dHJfbmFtZSAgICAgPSAvW2EtekEtWl86XVthLXpBLVowLTk6Ll8tXSovO1xuXG52YXIgdW5xdW90ZWQgICAgICA9IC9bXlwiJz08PmBcXHgwMC1cXHgyMF0rLztcbnZhciBzaW5nbGVfcXVvdGVkID0gLydbXiddKicvO1xudmFyIGRvdWJsZV9xdW90ZWQgPSAvXCJbXlwiXSpcIi87XG5cbi8qZXNsaW50IG5vLXNwYWNlZC1mdW5jOjAqL1xudmFyIGF0dHJfdmFsdWUgID0gcmVwbGFjZSgvKD86dW5xdW90ZWR8c2luZ2xlX3F1b3RlZHxkb3VibGVfcXVvdGVkKS8pXG4gICAgICAgICAgICAgICAgICAgICgndW5xdW90ZWQnLCB1bnF1b3RlZClcbiAgICAgICAgICAgICAgICAgICAgKCdzaW5nbGVfcXVvdGVkJywgc2luZ2xlX3F1b3RlZClcbiAgICAgICAgICAgICAgICAgICAgKCdkb3VibGVfcXVvdGVkJywgZG91YmxlX3F1b3RlZClcbiAgICAgICAgICAgICAgICAgICAgKCk7XG5cbnZhciBhdHRyaWJ1dGUgICA9IHJlcGxhY2UoLyg/OlxccythdHRyX25hbWUoPzpcXHMqPVxccyphdHRyX3ZhbHVlKT8pLylcbiAgICAgICAgICAgICAgICAgICAgKCdhdHRyX25hbWUnLCBhdHRyX25hbWUpXG4gICAgICAgICAgICAgICAgICAgICgnYXR0cl92YWx1ZScsIGF0dHJfdmFsdWUpXG4gICAgICAgICAgICAgICAgICAgICgpO1xuXG52YXIgb3Blbl90YWcgICAgPSByZXBsYWNlKC88W0EtWmEtel1bQS1aYS16MC05XSphdHRyaWJ1dGUqXFxzKlxcLz8+LylcbiAgICAgICAgICAgICAgICAgICAgKCdhdHRyaWJ1dGUnLCBhdHRyaWJ1dGUpXG4gICAgICAgICAgICAgICAgICAgICgpO1xuXG52YXIgY2xvc2VfdGFnICAgPSAvPFxcL1tBLVphLXpdW0EtWmEtejAtOV0qXFxzKj4vO1xudmFyIGNvbW1lbnQgICAgID0gLzwhLS0oW14tXSt8Wy1dW14tXSspKi0tPi87XG52YXIgcHJvY2Vzc2luZyAgPSAvPFs/XS4qP1s/XT4vO1xudmFyIGRlY2xhcmF0aW9uID0gLzwhW0EtWl0rXFxzK1tePl0qPi87XG52YXIgY2RhdGEgICAgICAgPSAvPCFcXFtDREFUQVxcWyhbXlxcXV0rfFxcXVteXFxdXXxcXF1cXF1bXj5dKSpcXF1cXF0+LztcblxudmFyIEhUTUxfVEFHX1JFID0gcmVwbGFjZSgvXig/Om9wZW5fdGFnfGNsb3NlX3RhZ3xjb21tZW50fHByb2Nlc3Npbmd8ZGVjbGFyYXRpb258Y2RhdGEpLylcbiAgKCdvcGVuX3RhZycsIG9wZW5fdGFnKVxuICAoJ2Nsb3NlX3RhZycsIGNsb3NlX3RhZylcbiAgKCdjb21tZW50JywgY29tbWVudClcbiAgKCdwcm9jZXNzaW5nJywgcHJvY2Vzc2luZylcbiAgKCdkZWNsYXJhdGlvbicsIGRlY2xhcmF0aW9uKVxuICAoJ2NkYXRhJywgY2RhdGEpXG4gICgpO1xuXG5cbm1vZHVsZS5leHBvcnRzLkhUTUxfVEFHX1JFID0gSFRNTF9UQUdfUkU7XG4iLCIvLyBMaXN0IG9mIHZhbGlkIHVybCBzY2hlbWFzLCBhY2NvcnRpbmcgdG8gY29tbW9ubWFyayBzcGVjXG4vLyBodHRwOi8vamdtLmdpdGh1Yi5pby9Db21tb25NYXJrL3NwZWMuaHRtbCNhdXRvbGlua3NcblxuJ3VzZSBzdHJpY3QnO1xuXG5cbm1vZHVsZS5leHBvcnRzID0gW1xuICAnY29hcCcsXG4gICdkb2knLFxuICAnamF2YXNjcmlwdCcsXG4gICdhYWEnLFxuICAnYWFhcycsXG4gICdhYm91dCcsXG4gICdhY2FwJyxcbiAgJ2NhcCcsXG4gICdjaWQnLFxuICAnY3JpZCcsXG4gICdkYXRhJyxcbiAgJ2RhdicsXG4gICdkaWN0JyxcbiAgJ2RucycsXG4gICdmaWxlJyxcbiAgJ2Z0cCcsXG4gICdnZW8nLFxuICAnZ28nLFxuICAnZ29waGVyJyxcbiAgJ2gzMjMnLFxuICAnaHR0cCcsXG4gICdodHRwcycsXG4gICdpYXgnLFxuICAnaWNhcCcsXG4gICdpbScsXG4gICdpbWFwJyxcbiAgJ2luZm8nLFxuICAnaXBwJyxcbiAgJ2lyaXMnLFxuICAnaXJpcy5iZWVwJyxcbiAgJ2lyaXMueHBjJyxcbiAgJ2lyaXMueHBjcycsXG4gICdpcmlzLmx3eicsXG4gICdsZGFwJyxcbiAgJ21haWx0bycsXG4gICdtaWQnLFxuICAnbXNycCcsXG4gICdtc3JwcycsXG4gICdtdHFwJyxcbiAgJ211cGRhdGUnLFxuICAnbmV3cycsXG4gICduZnMnLFxuICAnbmknLFxuICAnbmloJyxcbiAgJ25udHAnLFxuICAnb3BhcXVlbG9ja3Rva2VuJyxcbiAgJ3BvcCcsXG4gICdwcmVzJyxcbiAgJ3J0c3AnLFxuICAnc2VydmljZScsXG4gICdzZXNzaW9uJyxcbiAgJ3NodHRwJyxcbiAgJ3NpZXZlJyxcbiAgJ3NpcCcsXG4gICdzaXBzJyxcbiAgJ3NtcycsXG4gICdzbm1wJyxcbiAgJ3NvYXAuYmVlcCcsXG4gICdzb2FwLmJlZXBzJyxcbiAgJ3RhZycsXG4gICd0ZWwnLFxuICAndGVsbmV0JyxcbiAgJ3RmdHAnLFxuICAndGhpc21lc3NhZ2UnLFxuICAndG4zMjcwJyxcbiAgJ3RpcCcsXG4gICd0dicsXG4gICd1cm4nLFxuICAndmVtbWknLFxuICAnd3MnLFxuICAnd3NzJyxcbiAgJ3hjb24nLFxuICAneGNvbi11c2VyaWQnLFxuICAneG1scnBjLmJlZXAnLFxuICAneG1scnBjLmJlZXBzJyxcbiAgJ3htcHAnLFxuICAnejM5LjUwcicsXG4gICd6MzkuNTBzJyxcbiAgJ2FkaXVteHRyYScsXG4gICdhZnAnLFxuICAnYWZzJyxcbiAgJ2FpbScsXG4gICdhcHQnLFxuICAnYXR0YWNobWVudCcsXG4gICdhdycsXG4gICdiZXNoYXJlJyxcbiAgJ2JpdGNvaW4nLFxuICAnYm9sbycsXG4gICdjYWxsdG8nLFxuICAnY2hyb21lJyxcbiAgJ2Nocm9tZS1leHRlbnNpb24nLFxuICAnY29tLWV2ZW50YnJpdGUtYXR0ZW5kZWUnLFxuICAnY29udGVudCcsXG4gICdjdnMnLFxuICAnZGxuYS1wbGF5c2luZ2xlJyxcbiAgJ2RsbmEtcGxheWNvbnRhaW5lcicsXG4gICdkdG4nLFxuICAnZHZiJyxcbiAgJ2VkMmsnLFxuICAnZmFjZXRpbWUnLFxuICAnZmVlZCcsXG4gICdmaW5nZXInLFxuICAnZmlzaCcsXG4gICdnZycsXG4gICdnaXQnLFxuICAnZ2l6bW9wcm9qZWN0JyxcbiAgJ2d0YWxrJyxcbiAgJ2hjcCcsXG4gICdpY29uJyxcbiAgJ2lwbicsXG4gICdpcmMnLFxuICAnaXJjNicsXG4gICdpcmNzJyxcbiAgJ2l0bXMnLFxuICAnamFyJyxcbiAgJ2ptcycsXG4gICdrZXlwYXJjJyxcbiAgJ2xhc3RmbScsXG4gICdsZGFwcycsXG4gICdtYWduZXQnLFxuICAnbWFwcycsXG4gICdtYXJrZXQnLFxuICAnbWVzc2FnZScsXG4gICdtbXMnLFxuICAnbXMtaGVscCcsXG4gICdtc25pbScsXG4gICdtdW1ibGUnLFxuICAnbXZuJyxcbiAgJ25vdGVzJyxcbiAgJ29pZCcsXG4gICdwYWxtJyxcbiAgJ3BhcGFyYXp6aScsXG4gICdwbGF0Zm9ybScsXG4gICdwcm94eScsXG4gICdwc3ljJyxcbiAgJ3F1ZXJ5JyxcbiAgJ3JlcycsXG4gICdyZXNvdXJjZScsXG4gICdybWknLFxuICAncnN5bmMnLFxuICAncnRtcCcsXG4gICdzZWNvbmRsaWZlJyxcbiAgJ3NmdHAnLFxuICAnc2duJyxcbiAgJ3NreXBlJyxcbiAgJ3NtYicsXG4gICdzb2xkYXQnLFxuICAnc3BvdGlmeScsXG4gICdzc2gnLFxuICAnc3RlYW0nLFxuICAnc3ZuJyxcbiAgJ3RlYW1zcGVhaycsXG4gICd0aGluZ3MnLFxuICAndWRwJyxcbiAgJ3VucmVhbCcsXG4gICd1dDIwMDQnLFxuICAndmVudHJpbG8nLFxuICAndmlldy1zb3VyY2UnLFxuICAnd2ViY2FsJyxcbiAgJ3d0YWknLFxuICAnd3ljaXd5ZycsXG4gICd4ZmlyZScsXG4gICd4cmknLFxuICAneW1zZ3InXG5dO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIFV0aWxpdHkgZnVuY3Rpb25zXG4gKi9cblxuZnVuY3Rpb24gdHlwZU9mKG9iaikge1xuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG9iaik7XG59XG5cbmZ1bmN0aW9uIGlzU3RyaW5nKG9iaikge1xuICByZXR1cm4gdHlwZU9mKG9iaikgPT09ICdbb2JqZWN0IFN0cmluZ10nO1xufVxuXG52YXIgaGFzT3duID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcblxuZnVuY3Rpb24gaGFzKG9iamVjdCwga2V5KSB7XG4gIHJldHVybiBvYmplY3RcbiAgICA/IGhhc093bi5jYWxsKG9iamVjdCwga2V5KVxuICAgIDogZmFsc2U7XG59XG5cbi8vIEV4dGVuZCBvYmplY3RzXG4vL1xuZnVuY3Rpb24gYXNzaWduKG9iaiAvKmZyb20xLCBmcm9tMiwgZnJvbTMsIC4uLiovKSB7XG4gIHZhciBzb3VyY2VzID0gW10uc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpO1xuXG4gIHNvdXJjZXMuZm9yRWFjaChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgaWYgKCFzb3VyY2UpIHsgcmV0dXJuOyB9XG5cbiAgICBpZiAodHlwZW9mIHNvdXJjZSAhPT0gJ29iamVjdCcpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3Ioc291cmNlICsgJ211c3QgYmUgb2JqZWN0Jyk7XG4gICAgfVxuXG4gICAgT2JqZWN0LmtleXMoc291cmNlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIG9ialtrZXldID0gc291cmNlW2tleV07XG4gICAgfSk7XG4gIH0pO1xuXG4gIHJldHVybiBvYmo7XG59XG5cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbnZhciBVTkVTQ0FQRV9NRF9SRSA9IC9cXFxcKFtcXFxcIVwiIyQlJicoKSorLC5cXC86Ozw9Pj9AW1xcXV5fYHt8fX4tXSkvZztcblxuZnVuY3Rpb24gdW5lc2NhcGVNZChzdHIpIHtcbiAgaWYgKHN0ci5pbmRleE9mKCdcXFxcJykgPCAwKSB7IHJldHVybiBzdHI7IH1cbiAgcmV0dXJuIHN0ci5yZXBsYWNlKFVORVNDQVBFX01EX1JFLCAnJDEnKTtcbn1cblxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuZnVuY3Rpb24gaXNWYWxpZEVudGl0eUNvZGUoYykge1xuICAvKmVzbGludCBuby1iaXR3aXNlOjAqL1xuICAvLyBicm9rZW4gc2VxdWVuY2VcbiAgaWYgKGMgPj0gMHhEODAwICYmIGMgPD0gMHhERkZGKSB7IHJldHVybiBmYWxzZTsgfVxuICAvLyBuZXZlciB1c2VkXG4gIGlmIChjID49IDB4RkREMCAmJiBjIDw9IDB4RkRFRikgeyByZXR1cm4gZmFsc2U7IH1cbiAgaWYgKChjICYgMHhGRkZGKSA9PT0gMHhGRkZGIHx8IChjICYgMHhGRkZGKSA9PT0gMHhGRkZFKSB7IHJldHVybiBmYWxzZTsgfVxuICAvLyBjb250cm9sIGNvZGVzXG4gIGlmIChjID49IDB4MDAgJiYgYyA8PSAweDA4KSB7IHJldHVybiBmYWxzZTsgfVxuICBpZiAoYyA9PT0gMHgwQikgeyByZXR1cm4gZmFsc2U7IH1cbiAgaWYgKGMgPj0gMHgwRSAmJiBjIDw9IDB4MUYpIHsgcmV0dXJuIGZhbHNlOyB9XG4gIGlmIChjID49IDB4N0YgJiYgYyA8PSAweDlGKSB7IHJldHVybiBmYWxzZTsgfVxuICAvLyBvdXQgb2YgcmFuZ2VcbiAgaWYgKGMgPiAweDEwRkZGRikgeyByZXR1cm4gZmFsc2U7IH1cbiAgcmV0dXJuIHRydWU7XG59XG5cbmZ1bmN0aW9uIGZyb21Db2RlUG9pbnQoYykge1xuICAvKmVzbGludCBuby1iaXR3aXNlOjAqL1xuICBpZiAoYyA+IDB4ZmZmZikge1xuICAgIGMgLT0gMHgxMDAwMDtcbiAgICB2YXIgc3Vycm9nYXRlMSA9IDB4ZDgwMCArIChjID4+IDEwKSxcbiAgICAgICAgc3Vycm9nYXRlMiA9IDB4ZGMwMCArIChjICYgMHgzZmYpO1xuXG4gICAgcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUoc3Vycm9nYXRlMSwgc3Vycm9nYXRlMik7XG4gIH1cbiAgcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUoYyk7XG59XG5cbnZhciBOQU1FRF9FTlRJVFlfUkUgICA9IC8mKFthLXojXVthLXowLTldezEsMzF9KTsvZ2k7XG52YXIgRElHSVRBTF9FTlRJVFlfVEVTVF9SRSA9IC9eIygoPzp4W2EtZjAtOV17MSw4fXxbMC05XXsxLDh9KSkvaTtcbnZhciBlbnRpdGllcyA9IHJlcXVpcmUoJy4vZW50aXRpZXMnKTtcblxuZnVuY3Rpb24gcmVwbGFjZUVudGl0eVBhdHRlcm4obWF0Y2gsIG5hbWUpIHtcbiAgdmFyIGNvZGUgPSAwO1xuXG4gIGlmIChoYXMoZW50aXRpZXMsIG5hbWUpKSB7XG4gICAgcmV0dXJuIGVudGl0aWVzW25hbWVdO1xuICB9IGVsc2UgaWYgKG5hbWUuY2hhckNvZGVBdCgwKSA9PT0gMHgyMy8qICMgKi8gJiYgRElHSVRBTF9FTlRJVFlfVEVTVF9SRS50ZXN0KG5hbWUpKSB7XG4gICAgY29kZSA9IG5hbWVbMV0udG9Mb3dlckNhc2UoKSA9PT0gJ3gnID9cbiAgICAgIHBhcnNlSW50KG5hbWUuc2xpY2UoMiksIDE2KVxuICAgIDpcbiAgICAgIHBhcnNlSW50KG5hbWUuc2xpY2UoMSksIDEwKTtcbiAgICBpZiAoaXNWYWxpZEVudGl0eUNvZGUoY29kZSkpIHtcbiAgICAgIHJldHVybiBmcm9tQ29kZVBvaW50KGNvZGUpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gbWF0Y2g7XG59XG5cbmZ1bmN0aW9uIHJlcGxhY2VFbnRpdGllcyhzdHIpIHtcbiAgaWYgKHN0ci5pbmRleE9mKCcmJykgPCAwKSB7IHJldHVybiBzdHI7IH1cblxuICByZXR1cm4gc3RyLnJlcGxhY2UoTkFNRURfRU5USVRZX1JFLCByZXBsYWNlRW50aXR5UGF0dGVybik7XG59XG5cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbnZhciBIVE1MX0VTQ0FQRV9URVNUX1JFID0gL1smPD5cIl0vO1xudmFyIEhUTUxfRVNDQVBFX1JFUExBQ0VfUkUgPSAvWyY8PlwiXS9nO1xudmFyIEhUTUxfUkVQTEFDRU1FTlRTID0ge1xuICAnJic6ICcmYW1wOycsXG4gICc8JzogJyZsdDsnLFxuICAnPic6ICcmZ3Q7JyxcbiAgJ1wiJzogJyZxdW90Oydcbn07XG5cbmZ1bmN0aW9uIHJlcGxhY2VVbnNhZmVDaGFyKGNoKSB7XG4gIHJldHVybiBIVE1MX1JFUExBQ0VNRU5UU1tjaF07XG59XG5cbmZ1bmN0aW9uIGVzY2FwZUh0bWwoc3RyKSB7XG4gIGlmIChIVE1MX0VTQ0FQRV9URVNUX1JFLnRlc3Qoc3RyKSkge1xuICAgIHJldHVybiBzdHIucmVwbGFjZShIVE1MX0VTQ0FQRV9SRVBMQUNFX1JFLCByZXBsYWNlVW5zYWZlQ2hhcik7XG4gIH1cbiAgcmV0dXJuIHN0cjtcbn1cblxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuZXhwb3J0cy5hc3NpZ24gICAgICAgICAgICA9IGFzc2lnbjtcbmV4cG9ydHMuaXNTdHJpbmcgICAgICAgICAgPSBpc1N0cmluZztcbmV4cG9ydHMuaGFzICAgICAgICAgICAgICAgPSBoYXM7XG5leHBvcnRzLnVuZXNjYXBlTWQgICAgICAgID0gdW5lc2NhcGVNZDtcbmV4cG9ydHMuaXNWYWxpZEVudGl0eUNvZGUgPSBpc1ZhbGlkRW50aXR5Q29kZTtcbmV4cG9ydHMuZnJvbUNvZGVQb2ludCAgICAgPSBmcm9tQ29kZVBvaW50O1xuZXhwb3J0cy5yZXBsYWNlRW50aXRpZXMgICA9IHJlcGxhY2VFbnRpdGllcztcbmV4cG9ydHMuZXNjYXBlSHRtbCAgICAgICAgPSBlc2NhcGVIdG1sO1xuIiwiLy8gQ29tbW9ubWFyayBkZWZhdWx0IG9wdGlvbnNcblxuJ3VzZSBzdHJpY3QnO1xuXG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBvcHRpb25zOiB7XG4gICAgaHRtbDogICAgICAgICB0cnVlLCAgICAgICAgIC8vIEVuYWJsZSBIVE1MIHRhZ3MgaW4gc291cmNlXG4gICAgeGh0bWxPdXQ6ICAgICB0cnVlLCAgICAgICAgIC8vIFVzZSAnLycgdG8gY2xvc2Ugc2luZ2xlIHRhZ3MgKDxiciAvPilcbiAgICBicmVha3M6ICAgICAgIGZhbHNlLCAgICAgICAgLy8gQ29udmVydCAnXFxuJyBpbiBwYXJhZ3JhcGhzIGludG8gPGJyPlxuICAgIGxhbmdQcmVmaXg6ICAgJ2xhbmd1YWdlLScsICAvLyBDU1MgbGFuZ3VhZ2UgcHJlZml4IGZvciBmZW5jZWQgYmxvY2tzXG4gICAgbGlua2lmeTogICAgICBmYWxzZSwgICAgICAgIC8vIGF1dG9jb252ZXJ0IFVSTC1saWtlIHRleHRzIHRvIGxpbmtzXG5cbiAgICAvLyBFbmFibGUgc29tZSBsYW5ndWFnZS1uZXV0cmFsIHJlcGxhY2VtZW50cyArIHF1b3RlcyBiZWF1dGlmaWNhdGlvblxuICAgIHR5cG9ncmFwaGVyOiAgZmFsc2UsXG5cbiAgICAvLyBEb3VibGUgKyBzaW5nbGUgcXVvdGVzIHJlcGxhY2VtZW50IHBhaXJzLCB3aGVuIHR5cG9ncmFwaGVyIGVuYWJsZWQsXG4gICAgLy8gYW5kIHNtYXJ0cXVvdGVzIG9uLiBTZXQgZG91YmxlcyB0byAnwqvCuycgZm9yIFJ1c3NpYW4sICfigJ7igJwnIGZvciBHZXJtYW4uXG4gICAgcXVvdGVzOiAn4oCc4oCd4oCY4oCZJyxcblxuICAgIC8vIEhpZ2hsaWdodGVyIGZ1bmN0aW9uLiBTaG91bGQgcmV0dXJuIGVzY2FwZWQgSFRNTCxcbiAgICAvLyBvciAnJyBpZiBpbnB1dCBub3QgY2hhbmdlZFxuICAgIC8vXG4gICAgLy8gZnVuY3Rpb24gKC8qc3RyLCBsYW5nKi8pIHsgcmV0dXJuICcnOyB9XG4gICAgLy9cbiAgICBoaWdobGlnaHQ6IG51bGwsXG5cbiAgICBtYXhOZXN0aW5nOiAgIDIwICAgICAgICAgICAgLy8gSW50ZXJuYWwgcHJvdGVjdGlvbiwgcmVjdXJzaW9uIGxpbWl0XG4gIH0sXG5cbiAgY29tcG9uZW50czoge1xuXG4gICAgY29yZToge1xuICAgICAgcnVsZXM6IFtcbiAgICAgICAgJ2Jsb2NrJyxcbiAgICAgICAgJ2lubGluZScsXG4gICAgICAgICdyZWZlcmVuY2VzJyxcbiAgICAgICAgJ2FiYnIyJ1xuICAgICAgXVxuICAgIH0sXG5cbiAgICBibG9jazoge1xuICAgICAgcnVsZXM6IFtcbiAgICAgICAgJ2Jsb2NrcXVvdGUnLFxuICAgICAgICAnY29kZScsXG4gICAgICAgICdmZW5jZXMnLFxuICAgICAgICAnaGVhZGluZycsXG4gICAgICAgICdocicsXG4gICAgICAgICdodG1sYmxvY2snLFxuICAgICAgICAnbGhlYWRpbmcnLFxuICAgICAgICAnbGlzdCcsXG4gICAgICAgICdwYXJhZ3JhcGgnXG4gICAgICBdXG4gICAgfSxcblxuICAgIGlubGluZToge1xuICAgICAgcnVsZXM6IFtcbiAgICAgICAgJ2F1dG9saW5rJyxcbiAgICAgICAgJ2JhY2t0aWNrcycsXG4gICAgICAgICdlbXBoYXNpcycsXG4gICAgICAgICdlbnRpdHknLFxuICAgICAgICAnZXNjYXBlJyxcbiAgICAgICAgJ2h0bWx0YWcnLFxuICAgICAgICAnbGlua3MnLFxuICAgICAgICAnbmV3bGluZScsXG4gICAgICAgICd0ZXh0J1xuICAgICAgXVxuICAgIH1cbiAgfVxufTtcbiIsIi8vIFJlbWFya2FibGUgZGVmYXVsdCBvcHRpb25zXG5cbid1c2Ugc3RyaWN0JztcblxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgb3B0aW9uczoge1xuICAgIGh0bWw6ICAgICAgICAgZmFsc2UsICAgICAgICAvLyBFbmFibGUgSFRNTCB0YWdzIGluIHNvdXJjZVxuICAgIHhodG1sT3V0OiAgICAgZmFsc2UsICAgICAgICAvLyBVc2UgJy8nIHRvIGNsb3NlIHNpbmdsZSB0YWdzICg8YnIgLz4pXG4gICAgYnJlYWtzOiAgICAgICBmYWxzZSwgICAgICAgIC8vIENvbnZlcnQgJ1xcbicgaW4gcGFyYWdyYXBocyBpbnRvIDxicj5cbiAgICBsYW5nUHJlZml4OiAgICdsYW5ndWFnZS0nLCAgLy8gQ1NTIGxhbmd1YWdlIHByZWZpeCBmb3IgZmVuY2VkIGJsb2Nrc1xuICAgIGxpbmtpZnk6ICAgICAgZmFsc2UsICAgICAgICAvLyBhdXRvY29udmVydCBVUkwtbGlrZSB0ZXh0cyB0byBsaW5rc1xuXG4gICAgLy8gRW5hYmxlIHNvbWUgbGFuZ3VhZ2UtbmV1dHJhbCByZXBsYWNlbWVudHMgKyBxdW90ZXMgYmVhdXRpZmljYXRpb25cbiAgICB0eXBvZ3JhcGhlcjogIGZhbHNlLFxuXG4gICAgLy8gRG91YmxlICsgc2luZ2xlIHF1b3RlcyByZXBsYWNlbWVudCBwYWlycywgd2hlbiB0eXBvZ3JhcGhlciBlbmFibGVkLFxuICAgIC8vIGFuZCBzbWFydHF1b3RlcyBvbi4gU2V0IGRvdWJsZXMgdG8gJ8KrwrsnIGZvciBSdXNzaWFuLCAn4oCe4oCcJyBmb3IgR2VybWFuLlxuICAgIHF1b3RlczogJ+KAnOKAneKAmOKAmScsXG5cbiAgICAvLyBIaWdobGlnaHRlciBmdW5jdGlvbi4gU2hvdWxkIHJldHVybiBlc2NhcGVkIEhUTUwsXG4gICAgLy8gb3IgJycgaWYgaW5wdXQgbm90IGNoYW5nZWRcbiAgICAvL1xuICAgIC8vIGZ1bmN0aW9uICgvKnN0ciwgbGFuZyovKSB7IHJldHVybiAnJzsgfVxuICAgIC8vXG4gICAgaGlnaGxpZ2h0OiBudWxsLFxuXG4gICAgbWF4TmVzdGluZzogICAyMCAgICAgICAgICAgIC8vIEludGVybmFsIHByb3RlY3Rpb24sIHJlY3Vyc2lvbiBsaW1pdFxuICB9LFxuXG4gIGNvbXBvbmVudHM6IHtcblxuICAgIGNvcmU6IHtcbiAgICAgIHJ1bGVzOiBbXG4gICAgICAgICdibG9jaycsXG4gICAgICAgICdpbmxpbmUnLFxuICAgICAgICAncmVmZXJlbmNlcycsXG4gICAgICAgICdyZXBsYWNlbWVudHMnLFxuICAgICAgICAnbGlua2lmeScsXG4gICAgICAgICdzbWFydHF1b3RlcycsXG4gICAgICAgICdyZWZlcmVuY2VzJyxcbiAgICAgICAgJ2FiYnIyJyxcbiAgICAgICAgJ2Zvb3Rub3RlX3RhaWwnXG4gICAgICBdXG4gICAgfSxcblxuICAgIGJsb2NrOiB7XG4gICAgICBydWxlczogW1xuICAgICAgICAnYmxvY2txdW90ZScsXG4gICAgICAgICdjb2RlJyxcbiAgICAgICAgJ2ZlbmNlcycsXG4gICAgICAgICdoZWFkaW5nJyxcbiAgICAgICAgJ2hyJyxcbiAgICAgICAgJ2h0bWxibG9jaycsXG4gICAgICAgICdsaGVhZGluZycsXG4gICAgICAgICdsaXN0JyxcbiAgICAgICAgJ3BhcmFncmFwaCcsXG4gICAgICAgICd0YWJsZSdcbiAgICAgIF1cbiAgICB9LFxuXG4gICAgaW5saW5lOiB7XG4gICAgICBydWxlczogW1xuICAgICAgICAnYXV0b2xpbmsnLFxuICAgICAgICAnYmFja3RpY2tzJyxcbiAgICAgICAgJ2RlbCcsXG4gICAgICAgICdlbXBoYXNpcycsXG4gICAgICAgICdlbnRpdHknLFxuICAgICAgICAnZXNjYXBlJyxcbiAgICAgICAgJ2Zvb3Rub3RlX3JlZicsXG4gICAgICAgICdodG1sdGFnJyxcbiAgICAgICAgJ2xpbmtzJyxcbiAgICAgICAgJ25ld2xpbmUnLFxuICAgICAgICAndGV4dCdcbiAgICAgIF1cbiAgICB9XG4gIH1cbn07XG4iLCIvLyBSZW1hcmthYmxlIGRlZmF1bHQgb3B0aW9uc1xuXG4ndXNlIHN0cmljdCc7XG5cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIG9wdGlvbnM6IHtcbiAgICBodG1sOiAgICAgICAgIGZhbHNlLCAgICAgICAgLy8gRW5hYmxlIEhUTUwgdGFncyBpbiBzb3VyY2VcbiAgICB4aHRtbE91dDogICAgIGZhbHNlLCAgICAgICAgLy8gVXNlICcvJyB0byBjbG9zZSBzaW5nbGUgdGFncyAoPGJyIC8+KVxuICAgIGJyZWFrczogICAgICAgZmFsc2UsICAgICAgICAvLyBDb252ZXJ0ICdcXG4nIGluIHBhcmFncmFwaHMgaW50byA8YnI+XG4gICAgbGFuZ1ByZWZpeDogICAnbGFuZ3VhZ2UtJywgIC8vIENTUyBsYW5ndWFnZSBwcmVmaXggZm9yIGZlbmNlZCBibG9ja3NcbiAgICBsaW5raWZ5OiAgICAgIGZhbHNlLCAgICAgICAgLy8gYXV0b2NvbnZlcnQgVVJMLWxpa2UgdGV4dHMgdG8gbGlua3NcblxuICAgIC8vIEVuYWJsZSBzb21lIGxhbmd1YWdlLW5ldXRyYWwgcmVwbGFjZW1lbnRzICsgcXVvdGVzIGJlYXV0aWZpY2F0aW9uXG4gICAgdHlwb2dyYXBoZXI6ICBmYWxzZSxcblxuICAgIC8vIERvdWJsZSArIHNpbmdsZSBxdW90ZXMgcmVwbGFjZW1lbnQgcGFpcnMsIHdoZW4gdHlwb2dyYXBoZXIgZW5hYmxlZCxcbiAgICAvLyBhbmQgc21hcnRxdW90ZXMgb24uIFNldCBkb3VibGVzIHRvICfCq8K7JyBmb3IgUnVzc2lhbiwgJ+KAnuKAnCcgZm9yIEdlcm1hbi5cbiAgICBxdW90ZXM6ICAgICAgICfigJzigJ3igJjigJknLFxuXG4gICAgLy8gSGlnaGxpZ2h0ZXIgZnVuY3Rpb24uIFNob3VsZCByZXR1cm4gZXNjYXBlZCBIVE1MLFxuICAgIC8vIG9yICcnIGlmIGlucHV0IG5vdCBjaGFuZ2VkXG4gICAgLy9cbiAgICAvLyBmdW5jdGlvbiAoLypzdHIsIGxhbmcqLykgeyByZXR1cm4gJyc7IH1cbiAgICAvL1xuICAgIGhpZ2hsaWdodDogICAgIG51bGwsXG5cbiAgICBtYXhOZXN0aW5nOiAgICAyMCAgICAgICAgICAgIC8vIEludGVybmFsIHByb3RlY3Rpb24sIHJlY3Vyc2lvbiBsaW1pdFxuICB9LFxuXG4gIGNvbXBvbmVudHM6IHtcbiAgICAvLyBEb24ndCByZXN0cmljdCBjb3JlL2Jsb2NrL2lubGluZSBydWxlc1xuICAgIGNvcmU6IHt9LFxuICAgIGJsb2NrOiB7fSxcbiAgICBpbmxpbmU6IHt9XG4gIH1cbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciByZXBsYWNlRW50aXRpZXMgPSByZXF1aXJlKCcuLi9jb21tb24vdXRpbHMnKS5yZXBsYWNlRW50aXRpZXM7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gbm9ybWFsaXplTGluayh1cmwpIHtcbiAgdmFyIG5vcm1hbGl6ZWQgPSByZXBsYWNlRW50aXRpZXModXJsKTtcbiAgLy8gV2Ugc2hvdWxkbid0IGNhcmUgYWJvdXQgdGhlIHJlc3VsdCBvZiBtYWxmb3JtZWQgVVJJcyxcbiAgLy8gYW5kIHNob3VsZCBub3QgdGhyb3cgYW4gZXhjZXB0aW9uLlxuICB0cnkge1xuICAgIG5vcm1hbGl6ZWQgPSBkZWNvZGVVUkkobm9ybWFsaXplZCk7XG4gIH0gY2F0Y2ggKGVycikge31cbiAgcmV0dXJuIGVuY29kZVVSSShub3JtYWxpemVkKTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gbm9ybWFsaXplUmVmZXJlbmNlKHN0cikge1xuICAvLyB1c2UgLnRvVXBwZXJDYXNlKCkgaW5zdGVhZCBvZiAudG9Mb3dlckNhc2UoKVxuICAvLyBoZXJlIHRvIGF2b2lkIGEgY29uZmxpY3Qgd2l0aCBPYmplY3QucHJvdG90eXBlXG4gIC8vIG1lbWJlcnMgKG1vc3Qgbm90YWJseSwgYF9fcHJvdG9fX2ApXG4gIHJldHVybiBzdHIudHJpbSgpLnJlcGxhY2UoL1xccysvZywgJyAnKS50b1VwcGVyQ2FzZSgpO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuXG52YXIgbm9ybWFsaXplTGluayA9IHJlcXVpcmUoJy4vbm9ybWFsaXplX2xpbmsnKTtcbnZhciB1bmVzY2FwZU1kICAgID0gcmVxdWlyZSgnLi4vY29tbW9uL3V0aWxzJykudW5lc2NhcGVNZDtcblxuLyoqXG4gKiBQYXJzZSBsaW5rIGRlc3RpbmF0aW9uXG4gKlxuICogICAtIG9uIHN1Y2Nlc3MgaXQgcmV0dXJucyBhIHN0cmluZyBhbmQgdXBkYXRlcyBzdGF0ZS5wb3M7XG4gKiAgIC0gb24gZmFpbHVyZSBpdCByZXR1cm5zIG51bGxcbiAqXG4gKiBAcGFyYW0gIHtPYmplY3R9IHN0YXRlXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IHBvc1xuICogQGFwaSBwcml2YXRlXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBwYXJzZUxpbmtEZXN0aW5hdGlvbihzdGF0ZSwgcG9zKSB7XG4gIHZhciBjb2RlLCBsZXZlbCwgbGluayxcbiAgICAgIHN0YXJ0ID0gcG9zLFxuICAgICAgbWF4ID0gc3RhdGUucG9zTWF4O1xuXG4gIGlmIChzdGF0ZS5zcmMuY2hhckNvZGVBdChwb3MpID09PSAweDNDIC8qIDwgKi8pIHtcbiAgICBwb3MrKztcbiAgICB3aGlsZSAocG9zIDwgbWF4KSB7XG4gICAgICBjb2RlID0gc3RhdGUuc3JjLmNoYXJDb2RlQXQocG9zKTtcbiAgICAgIGlmIChjb2RlID09PSAweDBBIC8qIFxcbiAqLykgeyByZXR1cm4gZmFsc2U7IH1cbiAgICAgIGlmIChjb2RlID09PSAweDNFIC8qID4gKi8pIHtcbiAgICAgICAgbGluayA9IG5vcm1hbGl6ZUxpbmsodW5lc2NhcGVNZChzdGF0ZS5zcmMuc2xpY2Uoc3RhcnQgKyAxLCBwb3MpKSk7XG4gICAgICAgIGlmICghc3RhdGUucGFyc2VyLnZhbGlkYXRlTGluayhsaW5rKSkgeyByZXR1cm4gZmFsc2U7IH1cbiAgICAgICAgc3RhdGUucG9zID0gcG9zICsgMTtcbiAgICAgICAgc3RhdGUubGlua0NvbnRlbnQgPSBsaW5rO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIGlmIChjb2RlID09PSAweDVDIC8qIFxcICovICYmIHBvcyArIDEgPCBtYXgpIHtcbiAgICAgICAgcG9zICs9IDI7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBwb3MrKztcbiAgICB9XG5cbiAgICAvLyBubyBjbG9zaW5nICc+J1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8vIHRoaXMgc2hvdWxkIGJlIC4uLiB9IGVsc2UgeyAuLi4gYnJhbmNoXG5cbiAgbGV2ZWwgPSAwO1xuICB3aGlsZSAocG9zIDwgbWF4KSB7XG4gICAgY29kZSA9IHN0YXRlLnNyYy5jaGFyQ29kZUF0KHBvcyk7XG5cbiAgICBpZiAoY29kZSA9PT0gMHgyMCkgeyBicmVhazsgfVxuXG4gICAgLy8gYXNjaWkgY29udHJvbCBjaGFyYWN0ZXJzXG4gICAgaWYgKGNvZGUgPCAweDIwIHx8IGNvZGUgPT09IDB4N0YpIHsgYnJlYWs7IH1cblxuICAgIGlmIChjb2RlID09PSAweDVDIC8qIFxcICovICYmIHBvcyArIDEgPCBtYXgpIHtcbiAgICAgIHBvcyArPSAyO1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgaWYgKGNvZGUgPT09IDB4MjggLyogKCAqLykge1xuICAgICAgbGV2ZWwrKztcbiAgICAgIGlmIChsZXZlbCA+IDEpIHsgYnJlYWs7IH1cbiAgICB9XG5cbiAgICBpZiAoY29kZSA9PT0gMHgyOSAvKiApICovKSB7XG4gICAgICBsZXZlbC0tO1xuICAgICAgaWYgKGxldmVsIDwgMCkgeyBicmVhazsgfVxuICAgIH1cblxuICAgIHBvcysrO1xuICB9XG5cbiAgaWYgKHN0YXJ0ID09PSBwb3MpIHsgcmV0dXJuIGZhbHNlOyB9XG5cbiAgbGluayA9IG5vcm1hbGl6ZUxpbmsodW5lc2NhcGVNZChzdGF0ZS5zcmMuc2xpY2Uoc3RhcnQsIHBvcykpKTtcbiAgaWYgKCFzdGF0ZS5wYXJzZXIudmFsaWRhdGVMaW5rKGxpbmspKSB7IHJldHVybiBmYWxzZTsgfVxuXG4gIHN0YXRlLmxpbmtDb250ZW50ID0gbGluaztcbiAgc3RhdGUucG9zID0gcG9zO1xuICByZXR1cm4gdHJ1ZTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogUGFyc2UgbGluayBsYWJlbHNcbiAqXG4gKiBUaGlzIGZ1bmN0aW9uIGFzc3VtZXMgdGhhdCBmaXJzdCBjaGFyYWN0ZXIgKGBbYCkgYWxyZWFkeSBtYXRjaGVzO1xuICogcmV0dXJucyB0aGUgZW5kIG9mIHRoZSBsYWJlbC5cbiAqXG4gKiBAcGFyYW0gIHtPYmplY3R9IHN0YXRlXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IHN0YXJ0XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHBhcnNlTGlua0xhYmVsKHN0YXRlLCBzdGFydCkge1xuICB2YXIgbGV2ZWwsIGZvdW5kLCBtYXJrZXIsXG4gICAgICBsYWJlbEVuZCA9IC0xLFxuICAgICAgbWF4ID0gc3RhdGUucG9zTWF4LFxuICAgICAgb2xkUG9zID0gc3RhdGUucG9zLFxuICAgICAgb2xkRmxhZyA9IHN0YXRlLmlzSW5MYWJlbDtcblxuICBpZiAoc3RhdGUuaXNJbkxhYmVsKSB7IHJldHVybiAtMTsgfVxuXG4gIGlmIChzdGF0ZS5sYWJlbFVubWF0Y2hlZFNjb3Blcykge1xuICAgIHN0YXRlLmxhYmVsVW5tYXRjaGVkU2NvcGVzLS07XG4gICAgcmV0dXJuIC0xO1xuICB9XG5cbiAgc3RhdGUucG9zID0gc3RhcnQgKyAxO1xuICBzdGF0ZS5pc0luTGFiZWwgPSB0cnVlO1xuICBsZXZlbCA9IDE7XG5cbiAgd2hpbGUgKHN0YXRlLnBvcyA8IG1heCkge1xuICAgIG1hcmtlciA9IHN0YXRlLnNyYy5jaGFyQ29kZUF0KHN0YXRlLnBvcyk7XG4gICAgaWYgKG1hcmtlciA9PT0gMHg1QiAvKiBbICovKSB7XG4gICAgICBsZXZlbCsrO1xuICAgIH0gZWxzZSBpZiAobWFya2VyID09PSAweDVEIC8qIF0gKi8pIHtcbiAgICAgIGxldmVsLS07XG4gICAgICBpZiAobGV2ZWwgPT09IDApIHtcbiAgICAgICAgZm91bmQgPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBzdGF0ZS5wYXJzZXIuc2tpcFRva2VuKHN0YXRlKTtcbiAgfVxuXG4gIGlmIChmb3VuZCkge1xuICAgIGxhYmVsRW5kID0gc3RhdGUucG9zO1xuICAgIHN0YXRlLmxhYmVsVW5tYXRjaGVkU2NvcGVzID0gMDtcbiAgfSBlbHNlIHtcbiAgICBzdGF0ZS5sYWJlbFVubWF0Y2hlZFNjb3BlcyA9IGxldmVsIC0gMTtcbiAgfVxuXG4gIC8vIHJlc3RvcmUgb2xkIHN0YXRlXG4gIHN0YXRlLnBvcyA9IG9sZFBvcztcbiAgc3RhdGUuaXNJbkxhYmVsID0gb2xkRmxhZztcblxuICByZXR1cm4gbGFiZWxFbmQ7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5cbnZhciB1bmVzY2FwZU1kID0gcmVxdWlyZSgnLi4vY29tbW9uL3V0aWxzJykudW5lc2NhcGVNZDtcblxuLyoqXG4gKiBQYXJzZSBsaW5rIHRpdGxlXG4gKlxuICogICAtIG9uIHN1Y2Nlc3MgaXQgcmV0dXJucyBhIHN0cmluZyBhbmQgdXBkYXRlcyBzdGF0ZS5wb3M7XG4gKiAgIC0gb24gZmFpbHVyZSBpdCByZXR1cm5zIG51bGxcbiAqXG4gKiBAcGFyYW0gIHtPYmplY3R9IHN0YXRlXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IHBvc1xuICogQGFwaSBwcml2YXRlXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBwYXJzZUxpbmtUaXRsZShzdGF0ZSwgcG9zKSB7XG4gIHZhciBjb2RlLFxuICAgICAgc3RhcnQgPSBwb3MsXG4gICAgICBtYXggPSBzdGF0ZS5wb3NNYXgsXG4gICAgICBtYXJrZXIgPSBzdGF0ZS5zcmMuY2hhckNvZGVBdChwb3MpO1xuXG4gIGlmIChtYXJrZXIgIT09IDB4MjIgLyogXCIgKi8gJiYgbWFya2VyICE9PSAweDI3IC8qICcgKi8gJiYgbWFya2VyICE9PSAweDI4IC8qICggKi8pIHsgcmV0dXJuIGZhbHNlOyB9XG5cbiAgcG9zKys7XG5cbiAgLy8gaWYgb3BlbmluZyBtYXJrZXIgaXMgXCIoXCIsIHN3aXRjaCBpdCB0byBjbG9zaW5nIG1hcmtlciBcIilcIlxuICBpZiAobWFya2VyID09PSAweDI4KSB7IG1hcmtlciA9IDB4Mjk7IH1cblxuICB3aGlsZSAocG9zIDwgbWF4KSB7XG4gICAgY29kZSA9IHN0YXRlLnNyYy5jaGFyQ29kZUF0KHBvcyk7XG4gICAgaWYgKGNvZGUgPT09IG1hcmtlcikge1xuICAgICAgc3RhdGUucG9zID0gcG9zICsgMTtcbiAgICAgIHN0YXRlLmxpbmtDb250ZW50ID0gdW5lc2NhcGVNZChzdGF0ZS5zcmMuc2xpY2Uoc3RhcnQgKyAxLCBwb3MpKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBpZiAoY29kZSA9PT0gMHg1QyAvKiBcXCAqLyAmJiBwb3MgKyAxIDwgbWF4KSB7XG4gICAgICBwb3MgKz0gMjtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIHBvcysrO1xuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBMb2NhbCBkZXBlbmRlbmNpZXNcbiAqL1xuXG52YXIgYXNzaWduICAgICAgID0gcmVxdWlyZSgnLi9jb21tb24vdXRpbHMnKS5hc3NpZ247XG52YXIgUmVuZGVyZXIgICAgID0gcmVxdWlyZSgnLi9yZW5kZXJlcicpO1xudmFyIFBhcnNlckNvcmUgICA9IHJlcXVpcmUoJy4vcGFyc2VyX2NvcmUnKTtcbnZhciBQYXJzZXJCbG9jayAgPSByZXF1aXJlKCcuL3BhcnNlcl9ibG9jaycpO1xudmFyIFBhcnNlcklubGluZSA9IHJlcXVpcmUoJy4vcGFyc2VyX2lubGluZScpO1xudmFyIFJ1bGVyICAgICAgICA9IHJlcXVpcmUoJy4vcnVsZXInKTtcblxuLyoqXG4gKiBQcmVzZXQgY29uZmlnc1xuICovXG5cbnZhciBjb25maWcgPSB7XG4gICdkZWZhdWx0JzogICAgcmVxdWlyZSgnLi9jb25maWdzL2RlZmF1bHQnKSxcbiAgJ2Z1bGwnOiAgICAgICByZXF1aXJlKCcuL2NvbmZpZ3MvZnVsbCcpLFxuICAnY29tbW9ubWFyayc6IHJlcXVpcmUoJy4vY29uZmlncy9jb21tb25tYXJrJylcbn07XG5cbi8qKlxuICogVGhlIGBTdGF0ZUNvcmVgIGNsYXNzIG1hbmFnZXMgc3RhdGUuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGBzZWxmYCBSZW1hcmthYmxlIGluc3RhbmNlXG4gKiBAcGFyYW0ge1N0cmluZ30gYHN0cmAgTWFya2Rvd24gc3RyaW5nXG4gKiBAcGFyYW0ge09iamVjdH0gYGVudmBcbiAqL1xuXG5mdW5jdGlvbiBTdGF0ZUNvcmUoc2VsZiwgc3RyLCBlbnYpIHtcbiAgdGhpcy5zcmMgPSBzdHI7XG4gIHRoaXMuZW52ID0gZW52O1xuICB0aGlzLm9wdGlvbnMgPSBzZWxmLm9wdGlvbnM7XG4gIHRoaXMudG9rZW5zID0gW107XG4gIHRoaXMuaW5saW5lTW9kZSA9IGZhbHNlO1xuXG4gIHRoaXMuaW5saW5lID0gc2VsZi5pbmxpbmU7XG4gIHRoaXMuYmxvY2sgPSBzZWxmLmJsb2NrO1xuICB0aGlzLnJlbmRlcmVyID0gc2VsZi5yZW5kZXJlcjtcbiAgdGhpcy50eXBvZ3JhcGhlciA9IHNlbGYudHlwb2dyYXBoZXI7XG59XG5cbi8qKlxuICogVGhlIG1haW4gYFJlbWFya2FibGVgIGNsYXNzLiBDcmVhdGUgYW4gaW5zdGFuY2Ugb2ZcbiAqIGBSZW1hcmthYmxlYCB3aXRoIGEgYHByZXNldGAgYW5kL29yIGBvcHRpb25zYC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gYHByZXNldGAgSWYgbm8gcHJlc2V0IGlzIGdpdmVuLCBgZGVmYXVsdGAgaXMgdXNlZC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBgb3B0aW9uc2BcbiAqL1xuXG5mdW5jdGlvbiBSZW1hcmthYmxlKHByZXNldCwgb3B0aW9ucykge1xuICBpZiAodHlwZW9mIHByZXNldCAhPT0gJ3N0cmluZycpIHtcbiAgICBvcHRpb25zID0gcHJlc2V0O1xuICAgIHByZXNldCA9ICdkZWZhdWx0JztcbiAgfVxuXG4gIHRoaXMuaW5saW5lICAgPSBuZXcgUGFyc2VySW5saW5lKCk7XG4gIHRoaXMuYmxvY2sgICAgPSBuZXcgUGFyc2VyQmxvY2soKTtcbiAgdGhpcy5jb3JlICAgICA9IG5ldyBQYXJzZXJDb3JlKCk7XG4gIHRoaXMucmVuZGVyZXIgPSBuZXcgUmVuZGVyZXIoKTtcbiAgdGhpcy5ydWxlciAgICA9IG5ldyBSdWxlcigpO1xuXG4gIHRoaXMub3B0aW9ucyAgPSB7fTtcbiAgdGhpcy5jb25maWd1cmUoY29uZmlnW3ByZXNldF0pO1xuICB0aGlzLnNldChvcHRpb25zIHx8IHt9KTtcbn1cblxuLyoqXG4gKiBTZXQgb3B0aW9ucyBhcyBhbiBhbHRlcm5hdGl2ZSB0byBwYXNzaW5nIHRoZW1cbiAqIHRvIHRoZSBjb25zdHJ1Y3Rvci5cbiAqXG4gKiBgYGBqc1xuICogbWQuc2V0KHt0eXBvZ3JhcGhlcjogdHJ1ZX0pO1xuICogYGBgXG4gKiBAcGFyYW0ge09iamVjdH0gYG9wdGlvbnNgXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cblJlbWFya2FibGUucHJvdG90eXBlLnNldCA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gIGFzc2lnbih0aGlzLm9wdGlvbnMsIG9wdGlvbnMpO1xufTtcblxuLyoqXG4gKiBCYXRjaCBsb2FkZXIgZm9yIGNvbXBvbmVudHMgcnVsZXMgc3RhdGVzLCBhbmQgb3B0aW9uc1xuICpcbiAqIEBwYXJhbSAge09iamVjdH0gYHByZXNldHNgXG4gKi9cblxuUmVtYXJrYWJsZS5wcm90b3R5cGUuY29uZmlndXJlID0gZnVuY3Rpb24gKHByZXNldHMpIHtcbiAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gIGlmICghcHJlc2V0cykgeyB0aHJvdyBuZXcgRXJyb3IoJ1dyb25nIGByZW1hcmthYmxlYCBwcmVzZXQsIGNoZWNrIG5hbWUvY29udGVudCcpOyB9XG4gIGlmIChwcmVzZXRzLm9wdGlvbnMpIHsgc2VsZi5zZXQocHJlc2V0cy5vcHRpb25zKTsgfVxuICBpZiAocHJlc2V0cy5jb21wb25lbnRzKSB7XG4gICAgT2JqZWN0LmtleXMocHJlc2V0cy5jb21wb25lbnRzKS5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICBpZiAocHJlc2V0cy5jb21wb25lbnRzW25hbWVdLnJ1bGVzKSB7XG4gICAgICAgIHNlbGZbbmFtZV0ucnVsZXIuZW5hYmxlKHByZXNldHMuY29tcG9uZW50c1tuYW1lXS5ydWxlcywgdHJ1ZSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn07XG5cbi8qKlxuICogVXNlIGEgcGx1Z2luLlxuICpcbiAqIGBgYGpzXG4gKiB2YXIgbWQgPSBuZXcgUmVtYXJrYWJsZSgpO1xuICpcbiAqIG1kLnVzZShwbHVnaW4xKVxuICogICAudXNlKHBsdWdpbjIsIG9wdHMpXG4gKiAgIC51c2UocGx1Z2luMyk7XG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0gIHtGdW5jdGlvbn0gYHBsdWdpbmBcbiAqIEBwYXJhbSAge09iamVjdH0gYG9wdGlvbnNgXG4gKiBAcmV0dXJuIHtPYmplY3R9IGBSZW1hcmthYmxlYCBmb3IgY2hhaW5pbmdcbiAqL1xuXG5SZW1hcmthYmxlLnByb3RvdHlwZS51c2UgPSBmdW5jdGlvbiAocGx1Z2luLCBvcHRpb25zKSB7XG4gIHBsdWdpbih0aGlzLCBvcHRpb25zKTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5cbi8qKlxuICogUGFyc2UgdGhlIGlucHV0IGBzdHJpbmdgIGFuZCByZXR1cm4gYSB0b2tlbnMgYXJyYXkuXG4gKiBNb2RpZmllcyBgZW52YCB3aXRoIGRlZmluaXRpb25zIGRhdGEuXG4gKlxuICogQHBhcmFtICB7U3RyaW5nfSBgc3RyaW5nYFxuICogQHBhcmFtICB7T2JqZWN0fSBgZW52YFxuICogQHJldHVybiB7QXJyYXl9IEFycmF5IG9mIHRva2Vuc1xuICovXG5cblJlbWFya2FibGUucHJvdG90eXBlLnBhcnNlID0gZnVuY3Rpb24gKHN0ciwgZW52KSB7XG4gIHZhciBzdGF0ZSA9IG5ldyBTdGF0ZUNvcmUodGhpcywgc3RyLCBlbnYpO1xuICB0aGlzLmNvcmUucHJvY2VzcyhzdGF0ZSk7XG4gIHJldHVybiBzdGF0ZS50b2tlbnM7XG59O1xuXG4vKipcbiAqIFRoZSBtYWluIGAucmVuZGVyKClgIG1ldGhvZCB0aGF0IGRvZXMgYWxsIHRoZSBtYWdpYyA6KVxuICpcbiAqIEBwYXJhbSAge1N0cmluZ30gYHN0cmluZ2BcbiAqIEBwYXJhbSAge09iamVjdH0gYGVudmBcbiAqIEByZXR1cm4ge1N0cmluZ30gUmVuZGVyZWQgSFRNTC5cbiAqL1xuXG5SZW1hcmthYmxlLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoc3RyLCBlbnYpIHtcbiAgZW52ID0gZW52IHx8IHt9O1xuICByZXR1cm4gdGhpcy5yZW5kZXJlci5yZW5kZXIodGhpcy5wYXJzZShzdHIsIGVudiksIHRoaXMub3B0aW9ucywgZW52KTtcbn07XG5cbi8qKlxuICogUGFyc2UgdGhlIGdpdmVuIGNvbnRlbnQgYHN0cmluZ2AgYXMgYSBzaW5nbGUgc3RyaW5nLlxuICpcbiAqIEBwYXJhbSAge1N0cmluZ30gYHN0cmluZ2BcbiAqIEBwYXJhbSAge09iamVjdH0gYGVudmBcbiAqIEByZXR1cm4ge0FycmF5fSBBcnJheSBvZiB0b2tlbnNcbiAqL1xuXG5SZW1hcmthYmxlLnByb3RvdHlwZS5wYXJzZUlubGluZSA9IGZ1bmN0aW9uIChzdHIsIGVudikge1xuICB2YXIgc3RhdGUgPSBuZXcgU3RhdGVDb3JlKHRoaXMsIHN0ciwgZW52KTtcbiAgc3RhdGUuaW5saW5lTW9kZSA9IHRydWU7XG4gIHRoaXMuY29yZS5wcm9jZXNzKHN0YXRlKTtcbiAgcmV0dXJuIHN0YXRlLnRva2Vucztcbn07XG5cbi8qKlxuICogUmVuZGVyIGEgc2luZ2xlIGNvbnRlbnQgYHN0cmluZ2AsIHdpdGhvdXQgd3JhcHBpbmcgaXRcbiAqIHRvIHBhcmFncmFwaHNcbiAqXG4gKiBAcGFyYW0gIHtTdHJpbmd9IGBzdHJgXG4gKiBAcGFyYW0gIHtPYmplY3R9IGBlbnZgXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKi9cblxuUmVtYXJrYWJsZS5wcm90b3R5cGUucmVuZGVySW5saW5lID0gZnVuY3Rpb24gKHN0ciwgZW52KSB7XG4gIGVudiA9IGVudiB8fCB7fTtcbiAgcmV0dXJuIHRoaXMucmVuZGVyZXIucmVuZGVyKHRoaXMucGFyc2VJbmxpbmUoc3RyLCBlbnYpLCB0aGlzLm9wdGlvbnMsIGVudik7XG59O1xuXG4vKipcbiAqIEV4cG9zZSBgUmVtYXJrYWJsZWBcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlbWFya2FibGU7XG5cbi8qKlxuICogRXhwb3NlIGB1dGlsc2AsIFVzZWZ1bCBoZWxwZXIgZnVuY3Rpb25zIGZvciBjdXN0b21cbiAqIHJlbmRlcmluZy5cbiAqL1xuXG5tb2R1bGUuZXhwb3J0cy51dGlscyA9IHJlcXVpcmUoJy4vY29tbW9uL3V0aWxzJyk7XG4iLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogTG9jYWwgZGVwZW5kZW5jaWVzXG4gKi9cblxudmFyIFJ1bGVyICAgICAgPSByZXF1aXJlKCcuL3J1bGVyJyk7XG52YXIgU3RhdGVCbG9jayA9IHJlcXVpcmUoJy4vcnVsZXNfYmxvY2svc3RhdGVfYmxvY2snKTtcblxuLyoqXG4gKiBQYXJzZXIgcnVsZXNcbiAqL1xuXG52YXIgX3J1bGVzID0gW1xuICBbICdjb2RlJywgICAgICAgcmVxdWlyZSgnLi9ydWxlc19ibG9jay9jb2RlJykgXSxcbiAgWyAnZmVuY2VzJywgICAgIHJlcXVpcmUoJy4vcnVsZXNfYmxvY2svZmVuY2VzJyksICAgICBbICdwYXJhZ3JhcGgnLCAnYmxvY2txdW90ZScsICdsaXN0JyBdIF0sXG4gIFsgJ2Jsb2NrcXVvdGUnLCByZXF1aXJlKCcuL3J1bGVzX2Jsb2NrL2Jsb2NrcXVvdGUnKSwgWyAncGFyYWdyYXBoJywgJ2Jsb2NrcXVvdGUnLCAnbGlzdCcgXSBdLFxuICBbICdocicsICAgICAgICAgcmVxdWlyZSgnLi9ydWxlc19ibG9jay9ocicpLCAgICAgICAgIFsgJ3BhcmFncmFwaCcsICdibG9ja3F1b3RlJywgJ2xpc3QnIF0gXSxcbiAgWyAnbGlzdCcsICAgICAgIHJlcXVpcmUoJy4vcnVsZXNfYmxvY2svbGlzdCcpLCAgICAgICBbICdwYXJhZ3JhcGgnLCAnYmxvY2txdW90ZScgXSBdLFxuICBbICdmb290bm90ZScsICAgcmVxdWlyZSgnLi9ydWxlc19ibG9jay9mb290bm90ZScpLCAgIFsgJ3BhcmFncmFwaCcgXSBdLFxuICBbICdoZWFkaW5nJywgICAgcmVxdWlyZSgnLi9ydWxlc19ibG9jay9oZWFkaW5nJyksICAgIFsgJ3BhcmFncmFwaCcsICdibG9ja3F1b3RlJyBdIF0sXG4gIFsgJ2xoZWFkaW5nJywgICByZXF1aXJlKCcuL3J1bGVzX2Jsb2NrL2xoZWFkaW5nJykgXSxcbiAgWyAnaHRtbGJsb2NrJywgIHJlcXVpcmUoJy4vcnVsZXNfYmxvY2svaHRtbGJsb2NrJyksICBbICdwYXJhZ3JhcGgnLCAnYmxvY2txdW90ZScgXSBdLFxuICBbICd0YWJsZScsICAgICAgcmVxdWlyZSgnLi9ydWxlc19ibG9jay90YWJsZScpLCAgICAgIFsgJ3BhcmFncmFwaCcgXSBdLFxuICBbICdkZWZsaXN0JywgICAgcmVxdWlyZSgnLi9ydWxlc19ibG9jay9kZWZsaXN0JyksICAgIFsgJ3BhcmFncmFwaCcgXSBdLFxuICBbICdwYXJhZ3JhcGgnLCAgcmVxdWlyZSgnLi9ydWxlc19ibG9jay9wYXJhZ3JhcGgnKSBdXG5dO1xuXG4vKipcbiAqIEJsb2NrIFBhcnNlciBjbGFzc1xuICpcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIFBhcnNlckJsb2NrKCkge1xuICB0aGlzLnJ1bGVyID0gbmV3IFJ1bGVyKCk7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgX3J1bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgdGhpcy5ydWxlci5wdXNoKF9ydWxlc1tpXVswXSwgX3J1bGVzW2ldWzFdLCB7XG4gICAgICBhbHQ6IChfcnVsZXNbaV1bMl0gfHwgW10pLnNsaWNlKClcbiAgICB9KTtcbiAgfVxufVxuXG4vKipcbiAqIEdlbmVyYXRlIHRva2VucyBmb3IgdGhlIGdpdmVuIGlucHV0IHJhbmdlLlxuICpcbiAqIEBwYXJhbSAge09iamVjdH0gYHN0YXRlYCBIYXMgcHJvcGVydGllcyBsaWtlIGBzcmNgLCBgcGFyc2VyYCwgYG9wdGlvbnNgIGV0Y1xuICogQHBhcmFtICB7TnVtYmVyfSBgc3RhcnRMaW5lYFxuICogQHBhcmFtICB7TnVtYmVyfSBgZW5kTGluZWBcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cblBhcnNlckJsb2NrLnByb3RvdHlwZS50b2tlbml6ZSA9IGZ1bmN0aW9uIChzdGF0ZSwgc3RhcnRMaW5lLCBlbmRMaW5lKSB7XG4gIHZhciBydWxlcyA9IHRoaXMucnVsZXIuZ2V0UnVsZXMoJycpO1xuICB2YXIgbGVuID0gcnVsZXMubGVuZ3RoO1xuICB2YXIgbGluZSA9IHN0YXJ0TGluZTtcbiAgdmFyIGhhc0VtcHR5TGluZXMgPSBmYWxzZTtcbiAgdmFyIG9rLCBpO1xuXG4gIHdoaWxlIChsaW5lIDwgZW5kTGluZSkge1xuICAgIHN0YXRlLmxpbmUgPSBsaW5lID0gc3RhdGUuc2tpcEVtcHR5TGluZXMobGluZSk7XG4gICAgaWYgKGxpbmUgPj0gZW5kTGluZSkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgLy8gVGVybWluYXRpb24gY29uZGl0aW9uIGZvciBuZXN0ZWQgY2FsbHMuXG4gICAgLy8gTmVzdGVkIGNhbGxzIGN1cnJlbnRseSB1c2VkIGZvciBibG9ja3F1b3RlcyAmIGxpc3RzXG4gICAgaWYgKHN0YXRlLnRTaGlmdFtsaW5lXSA8IHN0YXRlLmJsa0luZGVudCkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgLy8gVHJ5IGFsbCBwb3NzaWJsZSBydWxlcy5cbiAgICAvLyBPbiBzdWNjZXNzLCBydWxlIHNob3VsZDpcbiAgICAvL1xuICAgIC8vIC0gdXBkYXRlIGBzdGF0ZS5saW5lYFxuICAgIC8vIC0gdXBkYXRlIGBzdGF0ZS50b2tlbnNgXG4gICAgLy8gLSByZXR1cm4gdHJ1ZVxuXG4gICAgZm9yIChpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICBvayA9IHJ1bGVzW2ldKHN0YXRlLCBsaW5lLCBlbmRMaW5lLCBmYWxzZSk7XG4gICAgICBpZiAob2spIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gc2V0IHN0YXRlLnRpZ2h0IGlmZiB3ZSBoYWQgYW4gZW1wdHkgbGluZSBiZWZvcmUgY3VycmVudCB0YWdcbiAgICAvLyBpLmUuIGxhdGVzdCBlbXB0eSBsaW5lIHNob3VsZCBub3QgY291bnRcbiAgICBzdGF0ZS50aWdodCA9ICFoYXNFbXB0eUxpbmVzO1xuXG4gICAgLy8gcGFyYWdyYXBoIG1pZ2h0IFwiZWF0XCIgb25lIG5ld2xpbmUgYWZ0ZXIgaXQgaW4gbmVzdGVkIGxpc3RzXG4gICAgaWYgKHN0YXRlLmlzRW1wdHkoc3RhdGUubGluZSAtIDEpKSB7XG4gICAgICBoYXNFbXB0eUxpbmVzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBsaW5lID0gc3RhdGUubGluZTtcblxuICAgIGlmIChsaW5lIDwgZW5kTGluZSAmJiBzdGF0ZS5pc0VtcHR5KGxpbmUpKSB7XG4gICAgICBoYXNFbXB0eUxpbmVzID0gdHJ1ZTtcbiAgICAgIGxpbmUrKztcblxuICAgICAgLy8gdHdvIGVtcHR5IGxpbmVzIHNob3VsZCBzdG9wIHRoZSBwYXJzZXIgaW4gbGlzdCBtb2RlXG4gICAgICBpZiAobGluZSA8IGVuZExpbmUgJiYgc3RhdGUucGFyZW50VHlwZSA9PT0gJ2xpc3QnICYmIHN0YXRlLmlzRW1wdHkobGluZSkpIHsgYnJlYWs7IH1cbiAgICAgIHN0YXRlLmxpbmUgPSBsaW5lO1xuICAgIH1cbiAgfVxufTtcblxudmFyIFRBQlNfU0NBTl9SRSA9IC9bXFxuXFx0XS9nO1xudmFyIE5FV0xJTkVTX1JFICA9IC9cXHJbXFxuXFx1MDA4NV18W1xcdTI0MjRcXHUyMDI4XFx1MDA4NV0vZztcbnZhciBTUEFDRVNfUkUgICAgPSAvXFx1MDBhMC9nO1xuXG4vKipcbiAqIFRva2VuaXplIHRoZSBnaXZlbiBgc3RyYC5cbiAqXG4gKiBAcGFyYW0gIHtTdHJpbmd9IGBzdHJgIFNvdXJjZSBzdHJpbmdcbiAqIEBwYXJhbSAge09iamVjdH0gYG9wdGlvbnNgXG4gKiBAcGFyYW0gIHtPYmplY3R9IGBlbnZgXG4gKiBAcGFyYW0gIHtBcnJheX0gYG91dFRva2Vuc2BcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cblBhcnNlckJsb2NrLnByb3RvdHlwZS5wYXJzZSA9IGZ1bmN0aW9uIChzdHIsIG9wdGlvbnMsIGVudiwgb3V0VG9rZW5zKSB7XG4gIHZhciBzdGF0ZSwgbGluZVN0YXJ0ID0gMCwgbGFzdFRhYlBvcyA9IDA7XG4gIGlmICghc3RyKSB7IHJldHVybiBbXTsgfVxuXG4gIC8vIE5vcm1hbGl6ZSBzcGFjZXNcbiAgc3RyID0gc3RyLnJlcGxhY2UoU1BBQ0VTX1JFLCAnICcpO1xuXG4gIC8vIE5vcm1hbGl6ZSBuZXdsaW5lc1xuICBzdHIgPSBzdHIucmVwbGFjZShORVdMSU5FU19SRSwgJ1xcbicpO1xuXG4gIC8vIFJlcGxhY2UgdGFicyB3aXRoIHByb3BlciBudW1iZXIgb2Ygc3BhY2VzICgxLi40KVxuICBpZiAoc3RyLmluZGV4T2YoJ1xcdCcpID49IDApIHtcbiAgICBzdHIgPSBzdHIucmVwbGFjZShUQUJTX1NDQU5fUkUsIGZ1bmN0aW9uIChtYXRjaCwgb2Zmc2V0KSB7XG4gICAgICB2YXIgcmVzdWx0O1xuICAgICAgaWYgKHN0ci5jaGFyQ29kZUF0KG9mZnNldCkgPT09IDB4MEEpIHtcbiAgICAgICAgbGluZVN0YXJ0ID0gb2Zmc2V0ICsgMTtcbiAgICAgICAgbGFzdFRhYlBvcyA9IDA7XG4gICAgICAgIHJldHVybiBtYXRjaDtcbiAgICAgIH1cbiAgICAgIHJlc3VsdCA9ICcgICAgJy5zbGljZSgob2Zmc2V0IC0gbGluZVN0YXJ0IC0gbGFzdFRhYlBvcykgJSA0KTtcbiAgICAgIGxhc3RUYWJQb3MgPSBvZmZzZXQgLSBsaW5lU3RhcnQgKyAxO1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRlID0gbmV3IFN0YXRlQmxvY2soc3RyLCB0aGlzLCBvcHRpb25zLCBlbnYsIG91dFRva2Vucyk7XG4gIHRoaXMudG9rZW5pemUoc3RhdGUsIHN0YXRlLmxpbmUsIHN0YXRlLmxpbmVNYXgpO1xufTtcblxuLyoqXG4gKiBFeHBvc2UgYFBhcnNlckJsb2NrYFxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gUGFyc2VyQmxvY2s7XG4iLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogTG9jYWwgZGVwZW5kZW5jaWVzXG4gKi9cblxudmFyIFJ1bGVyID0gcmVxdWlyZSgnLi9ydWxlcicpO1xuXG4vKipcbiAqIENvcmUgcGFyc2VyIGBydWxlc2BcbiAqL1xuXG52YXIgX3J1bGVzID0gW1xuICBbICdibG9jaycsICAgICAgICAgIHJlcXVpcmUoJy4vcnVsZXNfY29yZS9ibG9jaycpICAgICAgICAgIF0sXG4gIFsgJ2FiYnInLCAgICAgICAgICAgcmVxdWlyZSgnLi9ydWxlc19jb3JlL2FiYnInKSAgICAgICAgICAgXSxcbiAgWyAncmVmZXJlbmNlcycsICAgICByZXF1aXJlKCcuL3J1bGVzX2NvcmUvcmVmZXJlbmNlcycpICAgICBdLFxuICBbICdpbmxpbmUnLCAgICAgICAgIHJlcXVpcmUoJy4vcnVsZXNfY29yZS9pbmxpbmUnKSAgICAgICAgIF0sXG4gIFsgJ2Zvb3Rub3RlX3RhaWwnLCAgcmVxdWlyZSgnLi9ydWxlc19jb3JlL2Zvb3Rub3RlX3RhaWwnKSAgXSxcbiAgWyAnYWJicjInLCAgICAgICAgICByZXF1aXJlKCcuL3J1bGVzX2NvcmUvYWJicjInKSAgICAgICAgICBdLFxuICBbICdyZXBsYWNlbWVudHMnLCAgIHJlcXVpcmUoJy4vcnVsZXNfY29yZS9yZXBsYWNlbWVudHMnKSAgIF0sXG4gIFsgJ3NtYXJ0cXVvdGVzJywgICAgcmVxdWlyZSgnLi9ydWxlc19jb3JlL3NtYXJ0cXVvdGVzJykgICAgXSxcbiAgWyAnbGlua2lmeScsICAgICAgICByZXF1aXJlKCcuL3J1bGVzX2NvcmUvbGlua2lmeScpICAgICAgICBdXG5dO1xuXG4vKipcbiAqIENsYXNzIGZvciB0b3AgbGV2ZWwgKGBjb3JlYCkgcGFyc2VyIHJ1bGVzXG4gKlxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gQ29yZSgpIHtcbiAgdGhpcy5vcHRpb25zID0ge307XG4gIHRoaXMucnVsZXIgPSBuZXcgUnVsZXIoKTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBfcnVsZXMubGVuZ3RoOyBpKyspIHtcbiAgICB0aGlzLnJ1bGVyLnB1c2goX3J1bGVzW2ldWzBdLCBfcnVsZXNbaV1bMV0pO1xuICB9XG59XG5cbi8qKlxuICogUHJvY2VzcyBydWxlcyB3aXRoIHRoZSBnaXZlbiBgc3RhdGVgXG4gKlxuICogQHBhcmFtICB7T2JqZWN0fSBgc3RhdGVgXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5Db3JlLnByb3RvdHlwZS5wcm9jZXNzID0gZnVuY3Rpb24gKHN0YXRlKSB7XG4gIHZhciBpLCBsLCBydWxlcztcbiAgcnVsZXMgPSB0aGlzLnJ1bGVyLmdldFJ1bGVzKCcnKTtcbiAgZm9yIChpID0gMCwgbCA9IHJ1bGVzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIHJ1bGVzW2ldKHN0YXRlKTtcbiAgfVxufTtcblxuLyoqXG4gKiBFeHBvc2UgYENvcmVgXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBDb3JlO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIExvY2FsIGRlcGVuZGVuY2llc1xuICovXG5cbnZhciBSdWxlciAgICAgICA9IHJlcXVpcmUoJy4vcnVsZXInKTtcbnZhciBTdGF0ZUlubGluZSA9IHJlcXVpcmUoJy4vcnVsZXNfaW5saW5lL3N0YXRlX2lubGluZScpO1xudmFyIHV0aWxzICAgICAgID0gcmVxdWlyZSgnLi9jb21tb24vdXRpbHMnKTtcblxuLyoqXG4gKiBJbmxpbmUgUGFyc2VyIGBydWxlc2BcbiAqL1xuXG52YXIgX3J1bGVzID0gW1xuICBbICd0ZXh0JywgICAgICAgICAgICByZXF1aXJlKCcuL3J1bGVzX2lubGluZS90ZXh0JykgXSxcbiAgWyAnbmV3bGluZScsICAgICAgICAgcmVxdWlyZSgnLi9ydWxlc19pbmxpbmUvbmV3bGluZScpIF0sXG4gIFsgJ2VzY2FwZScsICAgICAgICAgIHJlcXVpcmUoJy4vcnVsZXNfaW5saW5lL2VzY2FwZScpIF0sXG4gIFsgJ2JhY2t0aWNrcycsICAgICAgIHJlcXVpcmUoJy4vcnVsZXNfaW5saW5lL2JhY2t0aWNrcycpIF0sXG4gIFsgJ2RlbCcsICAgICAgICAgICAgIHJlcXVpcmUoJy4vcnVsZXNfaW5saW5lL2RlbCcpIF0sXG4gIFsgJ2lucycsICAgICAgICAgICAgIHJlcXVpcmUoJy4vcnVsZXNfaW5saW5lL2lucycpIF0sXG4gIFsgJ21hcmsnLCAgICAgICAgICAgIHJlcXVpcmUoJy4vcnVsZXNfaW5saW5lL21hcmsnKSBdLFxuICBbICdlbXBoYXNpcycsICAgICAgICByZXF1aXJlKCcuL3J1bGVzX2lubGluZS9lbXBoYXNpcycpIF0sXG4gIFsgJ3N1YicsICAgICAgICAgICAgIHJlcXVpcmUoJy4vcnVsZXNfaW5saW5lL3N1YicpIF0sXG4gIFsgJ3N1cCcsICAgICAgICAgICAgIHJlcXVpcmUoJy4vcnVsZXNfaW5saW5lL3N1cCcpIF0sXG4gIFsgJ2xpbmtzJywgICAgICAgICAgIHJlcXVpcmUoJy4vcnVsZXNfaW5saW5lL2xpbmtzJykgXSxcbiAgWyAnZm9vdG5vdGVfaW5saW5lJywgcmVxdWlyZSgnLi9ydWxlc19pbmxpbmUvZm9vdG5vdGVfaW5saW5lJykgXSxcbiAgWyAnZm9vdG5vdGVfcmVmJywgICAgcmVxdWlyZSgnLi9ydWxlc19pbmxpbmUvZm9vdG5vdGVfcmVmJykgXSxcbiAgWyAnYXV0b2xpbmsnLCAgICAgICAgcmVxdWlyZSgnLi9ydWxlc19pbmxpbmUvYXV0b2xpbmsnKSBdLFxuICBbICdodG1sdGFnJywgICAgICAgICByZXF1aXJlKCcuL3J1bGVzX2lubGluZS9odG1sdGFnJykgXSxcbiAgWyAnZW50aXR5JywgICAgICAgICAgcmVxdWlyZSgnLi9ydWxlc19pbmxpbmUvZW50aXR5JykgXVxuXTtcblxuLyoqXG4gKiBJbmxpbmUgUGFyc2VyIGNsYXNzLiBOb3RlIHRoYXQgbGluayB2YWxpZGF0aW9uIGlzIHN0cmljdGVyXG4gKiBpbiBSZW1hcmthYmxlIHRoYW4gd2hhdCBpcyBzcGVjaWZpZWQgYnkgQ29tbW9uTWFyay4gSWYgeW91XG4gKiB3YW50IHRvIGNoYW5nZSB0aGlzIHlvdSBjYW4gdXNlIGEgY3VzdG9tIHZhbGlkYXRvci5cbiAqXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBQYXJzZXJJbmxpbmUoKSB7XG4gIHRoaXMucnVsZXIgPSBuZXcgUnVsZXIoKTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBfcnVsZXMubGVuZ3RoOyBpKyspIHtcbiAgICB0aGlzLnJ1bGVyLnB1c2goX3J1bGVzW2ldWzBdLCBfcnVsZXNbaV1bMV0pO1xuICB9XG5cbiAgLy8gQ2FuIGJlIG92ZXJyaWRkZW4gd2l0aCBhIGN1c3RvbSB2YWxpZGF0b3JcbiAgdGhpcy52YWxpZGF0ZUxpbmsgPSB2YWxpZGF0ZUxpbms7XG59XG5cbi8qKlxuICogU2tpcCBhIHNpbmdsZSB0b2tlbiBieSBydW5uaW5nIGFsbCBydWxlcyBpbiB2YWxpZGF0aW9uIG1vZGUuXG4gKiBSZXR1cm5zIGB0cnVlYCBpZiBhbnkgcnVsZSByZXBvcnRzIHN1Y2Nlc3MuXG4gKlxuICogQHBhcmFtICB7T2JqZWN0fSBgc3RhdGVgXG4gKiBAYXBpIHByaXZhZ2VcbiAqL1xuXG5QYXJzZXJJbmxpbmUucHJvdG90eXBlLnNraXBUb2tlbiA9IGZ1bmN0aW9uIChzdGF0ZSkge1xuICB2YXIgcnVsZXMgPSB0aGlzLnJ1bGVyLmdldFJ1bGVzKCcnKTtcbiAgdmFyIGxlbiA9IHJ1bGVzLmxlbmd0aDtcbiAgdmFyIHBvcyA9IHN0YXRlLnBvcztcbiAgdmFyIGksIGNhY2hlZF9wb3M7XG5cbiAgaWYgKChjYWNoZWRfcG9zID0gc3RhdGUuY2FjaGVHZXQocG9zKSkgPiAwKSB7XG4gICAgc3RhdGUucG9zID0gY2FjaGVkX3BvcztcbiAgICByZXR1cm47XG4gIH1cblxuICBmb3IgKGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICBpZiAocnVsZXNbaV0oc3RhdGUsIHRydWUpKSB7XG4gICAgICBzdGF0ZS5jYWNoZVNldChwb3MsIHN0YXRlLnBvcyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICB9XG5cbiAgc3RhdGUucG9zKys7XG4gIHN0YXRlLmNhY2hlU2V0KHBvcywgc3RhdGUucG9zKTtcbn07XG5cbi8qKlxuICogR2VuZXJhdGUgdG9rZW5zIGZvciB0aGUgZ2l2ZW4gaW5wdXQgcmFuZ2UuXG4gKlxuICogQHBhcmFtICB7T2JqZWN0fSBgc3RhdGVgXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5QYXJzZXJJbmxpbmUucHJvdG90eXBlLnRva2VuaXplID0gZnVuY3Rpb24gKHN0YXRlKSB7XG4gIHZhciBydWxlcyA9IHRoaXMucnVsZXIuZ2V0UnVsZXMoJycpO1xuICB2YXIgbGVuID0gcnVsZXMubGVuZ3RoO1xuICB2YXIgZW5kID0gc3RhdGUucG9zTWF4O1xuICB2YXIgb2ssIGk7XG5cbiAgd2hpbGUgKHN0YXRlLnBvcyA8IGVuZCkge1xuXG4gICAgLy8gVHJ5IGFsbCBwb3NzaWJsZSBydWxlcy5cbiAgICAvLyBPbiBzdWNjZXNzLCB0aGUgcnVsZSBzaG91bGQ6XG4gICAgLy9cbiAgICAvLyAtIHVwZGF0ZSBgc3RhdGUucG9zYFxuICAgIC8vIC0gdXBkYXRlIGBzdGF0ZS50b2tlbnNgXG4gICAgLy8gLSByZXR1cm4gdHJ1ZVxuICAgIGZvciAoaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgb2sgPSBydWxlc1tpXShzdGF0ZSwgZmFsc2UpO1xuXG4gICAgICBpZiAob2spIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG9rKSB7XG4gICAgICBpZiAoc3RhdGUucG9zID49IGVuZCkgeyBicmVhazsgfVxuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgc3RhdGUucGVuZGluZyArPSBzdGF0ZS5zcmNbc3RhdGUucG9zKytdO1xuICB9XG5cbiAgaWYgKHN0YXRlLnBlbmRpbmcpIHtcbiAgICBzdGF0ZS5wdXNoUGVuZGluZygpO1xuICB9XG59O1xuXG4vKipcbiAqIFBhcnNlIHRoZSBnaXZlbiBpbnB1dCBzdHJpbmcuXG4gKlxuICogQHBhcmFtICB7U3RyaW5nfSBgc3RyYFxuICogQHBhcmFtICB7T2JqZWN0fSBgb3B0aW9uc2BcbiAqIEBwYXJhbSAge09iamVjdH0gYGVudmBcbiAqIEBwYXJhbSAge0FycmF5fSBgb3V0VG9rZW5zYFxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuUGFyc2VySW5saW5lLnByb3RvdHlwZS5wYXJzZSA9IGZ1bmN0aW9uIChzdHIsIG9wdGlvbnMsIGVudiwgb3V0VG9rZW5zKSB7XG4gIHZhciBzdGF0ZSA9IG5ldyBTdGF0ZUlubGluZShzdHIsIHRoaXMsIG9wdGlvbnMsIGVudiwgb3V0VG9rZW5zKTtcbiAgdGhpcy50b2tlbml6ZShzdGF0ZSk7XG59O1xuXG4vKipcbiAqIFZhbGlkYXRlIHRoZSBnaXZlbiBgdXJsYCBieSBjaGVja2luZyBmb3IgYmFkIHByb3RvY29scy5cbiAqXG4gKiBAcGFyYW0gIHtTdHJpbmd9IGB1cmxgXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICovXG5cbmZ1bmN0aW9uIHZhbGlkYXRlTGluayh1cmwpIHtcbiAgdmFyIEJBRF9QUk9UT0NPTFMgPSBbICd2YnNjcmlwdCcsICdqYXZhc2NyaXB0JywgJ2ZpbGUnIF07XG4gIHZhciBzdHIgPSB1cmwudHJpbSgpLnRvTG93ZXJDYXNlKCk7XG4gIC8vIENhcmUgYWJvdXQgZGlnaXRhbCBlbnRpdGllcyBcImphdmFzY3JpcHQmI3gzQTthbGVydCgxKVwiXG4gIHN0ciA9IHV0aWxzLnJlcGxhY2VFbnRpdGllcyhzdHIpO1xuICBpZiAoc3RyLmluZGV4T2YoJzonKSAhPT0gLTEgJiYgQkFEX1BST1RPQ09MUy5pbmRleE9mKHN0ci5zcGxpdCgnOicpWzBdKSAhPT0gLTEpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59XG5cbi8qKlxuICogRXhwb3NlIGBQYXJzZXJJbmxpbmVgXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBQYXJzZXJJbmxpbmU7XG4iLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogTG9jYWwgZGVwZW5kZW5jaWVzXG4gKi9cblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi9jb21tb24vdXRpbHMnKTtcbnZhciBydWxlcyA9IHJlcXVpcmUoJy4vcnVsZXMnKTtcblxuLyoqXG4gKiBFeHBvc2UgYFJlbmRlcmVyYFxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gUmVuZGVyZXI7XG5cbi8qKlxuICogUmVuZGVyZXIgY2xhc3MuIFJlbmRlcnMgSFRNTCBhbmQgZXhwb3NlcyBgcnVsZXNgIHRvIGFsbG93XG4gKiBsb2NhbCBtb2RpZmljYXRpb25zLlxuICovXG5cbmZ1bmN0aW9uIFJlbmRlcmVyKCkge1xuICB0aGlzLnJ1bGVzID0gdXRpbHMuYXNzaWduKHt9LCBydWxlcyk7XG5cbiAgLy8gZXhwb3J0ZWQgaGVscGVyLCBmb3IgY3VzdG9tIHJ1bGVzIG9ubHlcbiAgdGhpcy5nZXRCcmVhayA9IHJ1bGVzLmdldEJyZWFrO1xufVxuXG4vKipcbiAqIFJlbmRlciBhIHN0cmluZyBvZiBpbmxpbmUgSFRNTCB3aXRoIHRoZSBnaXZlbiBgdG9rZW5zYCBhbmRcbiAqIGBvcHRpb25zYC5cbiAqXG4gKiBAcGFyYW0gIHtBcnJheX0gYHRva2Vuc2BcbiAqIEBwYXJhbSAge09iamVjdH0gYG9wdGlvbnNgXG4gKiBAcGFyYW0gIHtPYmplY3R9IGBlbnZgXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cblJlbmRlcmVyLnByb3RvdHlwZS5yZW5kZXJJbmxpbmUgPSBmdW5jdGlvbiAodG9rZW5zLCBvcHRpb25zLCBlbnYpIHtcbiAgdmFyIF9ydWxlcyA9IHRoaXMucnVsZXM7XG4gIHZhciBsZW4gPSB0b2tlbnMubGVuZ3RoLCBpID0gMDtcbiAgdmFyIHJlc3VsdCA9ICcnO1xuXG4gIHdoaWxlIChsZW4tLSkge1xuICAgIHJlc3VsdCArPSBfcnVsZXNbdG9rZW5zW2ldLnR5cGVdKHRva2VucywgaSsrLCBvcHRpb25zLCBlbnYsIHRoaXMpO1xuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbi8qKlxuICogUmVuZGVyIGEgc3RyaW5nIG9mIEhUTUwgd2l0aCB0aGUgZ2l2ZW4gYHRva2Vuc2AgYW5kXG4gKiBgb3B0aW9uc2AuXG4gKlxuICogQHBhcmFtICB7QXJyYXl9IGB0b2tlbnNgXG4gKiBAcGFyYW0gIHtPYmplY3R9IGBvcHRpb25zYFxuICogQHBhcmFtICB7T2JqZWN0fSBgZW52YFxuICogQHJldHVybiB7U3RyaW5nfVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5SZW5kZXJlci5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKHRva2Vucywgb3B0aW9ucywgZW52KSB7XG4gIHZhciBfcnVsZXMgPSB0aGlzLnJ1bGVzO1xuICB2YXIgbGVuID0gdG9rZW5zLmxlbmd0aCwgaSA9IC0xO1xuICB2YXIgcmVzdWx0ID0gJyc7XG5cbiAgd2hpbGUgKCsraSA8IGxlbikge1xuICAgIGlmICh0b2tlbnNbaV0udHlwZSA9PT0gJ2lubGluZScpIHtcbiAgICAgIHJlc3VsdCArPSB0aGlzLnJlbmRlcklubGluZSh0b2tlbnNbaV0uY2hpbGRyZW4sIG9wdGlvbnMsIGVudik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdCArPSBfcnVsZXNbdG9rZW5zW2ldLnR5cGVdKHRva2VucywgaSwgb3B0aW9ucywgZW52LCB0aGlzKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogUnVsZXIgaXMgYSBoZWxwZXIgY2xhc3MgZm9yIGJ1aWxkaW5nIHJlc3BvbnNpYmlsaXR5IGNoYWlucyBmcm9tXG4gKiBwYXJzZSBydWxlcy4gSXQgYWxsb3dzOlxuICpcbiAqICAgLSBlYXN5IHN0YWNrIHJ1bGVzIGNoYWluc1xuICogICAtIGdldHRpbmcgbWFpbiBjaGFpbiBhbmQgbmFtZWQgY2hhaW5zIGNvbnRlbnQgKGFzIGFycmF5cyBvZiBmdW5jdGlvbnMpXG4gKlxuICogSGVscGVyIG1ldGhvZHMsIHNob3VsZCBub3QgYmUgdXNlZCBkaXJlY3RseS5cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIFJ1bGVyKCkge1xuICAvLyBMaXN0IG9mIGFkZGVkIHJ1bGVzLiBFYWNoIGVsZW1lbnQgaXM6XG4gIC8vXG4gIC8vIHsgbmFtZTogWFhYLFxuICAvLyAgIGVuYWJsZWQ6IEJvb2xlYW4sXG4gIC8vICAgZm46IEZ1bmN0aW9uKCksXG4gIC8vICAgYWx0OiBbIG5hbWUyLCBuYW1lMyBdIH1cbiAgLy9cbiAgdGhpcy5fX3J1bGVzX18gPSBbXTtcblxuICAvLyBDYWNoZWQgcnVsZSBjaGFpbnMuXG4gIC8vXG4gIC8vIEZpcnN0IGxldmVsIC0gY2hhaW4gbmFtZSwgJycgZm9yIGRlZmF1bHQuXG4gIC8vIFNlY29uZCBsZXZlbCAtIGRpZ2l0YWwgYW5jaG9yIGZvciBmYXN0IGZpbHRlcmluZyBieSBjaGFyY29kZXMuXG4gIC8vXG4gIHRoaXMuX19jYWNoZV9fID0gbnVsbDtcbn1cblxuLyoqXG4gKiBGaW5kIHRoZSBpbmRleCBvZiBhIHJ1bGUgYnkgYG5hbWVgLlxuICpcbiAqIEBwYXJhbSAge1N0cmluZ30gYG5hbWVgXG4gKiBAcmV0dXJuIHtOdW1iZXJ9IEluZGV4IG9mIHRoZSBnaXZlbiBgbmFtZWBcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cblJ1bGVyLnByb3RvdHlwZS5fX2ZpbmRfXyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gIHZhciBsZW4gPSB0aGlzLl9fcnVsZXNfXy5sZW5ndGg7XG4gIHZhciBpID0gLTE7XG5cbiAgd2hpbGUgKGxlbi0tKSB7XG4gICAgaWYgKHRoaXMuX19ydWxlc19fWysraV0ubmFtZSA9PT0gbmFtZSkge1xuICAgICAgcmV0dXJuIGk7XG4gICAgfVxuICB9XG4gIHJldHVybiAtMTtcbn07XG5cbi8qKlxuICogQnVpbGQgdGhlIHJ1bGVzIGxvb2t1cCBjYWNoZVxuICpcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cblJ1bGVyLnByb3RvdHlwZS5fX2NvbXBpbGVfXyA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIHNlbGYgPSB0aGlzO1xuICB2YXIgY2hhaW5zID0gWyAnJyBdO1xuXG4gIC8vIGNvbGxlY3QgdW5pcXVlIG5hbWVzXG4gIHNlbGYuX19ydWxlc19fLmZvckVhY2goZnVuY3Rpb24gKHJ1bGUpIHtcbiAgICBpZiAoIXJ1bGUuZW5hYmxlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHJ1bGUuYWx0LmZvckVhY2goZnVuY3Rpb24gKGFsdE5hbWUpIHtcbiAgICAgIGlmIChjaGFpbnMuaW5kZXhPZihhbHROYW1lKSA8IDApIHtcbiAgICAgICAgY2hhaW5zLnB1c2goYWx0TmFtZSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xuXG4gIHNlbGYuX19jYWNoZV9fID0ge307XG5cbiAgY2hhaW5zLmZvckVhY2goZnVuY3Rpb24gKGNoYWluKSB7XG4gICAgc2VsZi5fX2NhY2hlX19bY2hhaW5dID0gW107XG4gICAgc2VsZi5fX3J1bGVzX18uZm9yRWFjaChmdW5jdGlvbiAocnVsZSkge1xuICAgICAgaWYgKCFydWxlLmVuYWJsZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAoY2hhaW4gJiYgcnVsZS5hbHQuaW5kZXhPZihjaGFpbikgPCAwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHNlbGYuX19jYWNoZV9fW2NoYWluXS5wdXNoKHJ1bGUuZm4pO1xuICAgIH0pO1xuICB9KTtcbn07XG5cbi8qKlxuICogUnVsZXIgcHVibGljIG1ldGhvZHNcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbi8qKlxuICogUmVwbGFjZSBydWxlIGZ1bmN0aW9uXG4gKlxuICogQHBhcmFtICB7U3RyaW5nfSBgbmFtZWAgUnVsZSBuYW1lXG4gKiBAcGFyYW0gIHtGdW5jdGlvbiBgZm5gXG4gKiBAcGFyYW0gIHtPYmplY3R9IGBvcHRpb25zYFxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuUnVsZXIucHJvdG90eXBlLmF0ID0gZnVuY3Rpb24gKG5hbWUsIGZuLCBvcHRpb25zKSB7XG4gIHZhciBpZHggPSB0aGlzLl9fZmluZF9fKG5hbWUpO1xuICB2YXIgb3B0ID0gb3B0aW9ucyB8fCB7fTtcblxuICBpZiAoaWR4ID09PSAtMSkge1xuICAgIHRocm93IG5ldyBFcnJvcignUGFyc2VyIHJ1bGUgbm90IGZvdW5kOiAnICsgbmFtZSk7XG4gIH1cblxuICB0aGlzLl9fcnVsZXNfX1tpZHhdLmZuID0gZm47XG4gIHRoaXMuX19ydWxlc19fW2lkeF0uYWx0ID0gb3B0LmFsdCB8fCBbXTtcbiAgdGhpcy5fX2NhY2hlX18gPSBudWxsO1xufTtcblxuLyoqXG4gKiBBZGQgYSBydWxlIHRvIHRoZSBjaGFpbiBiZWZvcmUgZ2l2ZW4gdGhlIGBydWxlTmFtZWAuXG4gKlxuICogQHBhcmFtICB7U3RyaW5nfSAgIGBiZWZvcmVOYW1lYFxuICogQHBhcmFtICB7U3RyaW5nfSAgIGBydWxlTmFtZWBcbiAqIEBwYXJhbSAge0Z1bmN0aW9ufSBgZm5gXG4gKiBAcGFyYW0gIHtPYmplY3R9ICAgYG9wdGlvbnNgXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5SdWxlci5wcm90b3R5cGUuYmVmb3JlID0gZnVuY3Rpb24gKGJlZm9yZU5hbWUsIHJ1bGVOYW1lLCBmbiwgb3B0aW9ucykge1xuICB2YXIgaWR4ID0gdGhpcy5fX2ZpbmRfXyhiZWZvcmVOYW1lKTtcbiAgdmFyIG9wdCA9IG9wdGlvbnMgfHwge307XG5cbiAgaWYgKGlkeCA9PT0gLTEpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1BhcnNlciBydWxlIG5vdCBmb3VuZDogJyArIGJlZm9yZU5hbWUpO1xuICB9XG5cbiAgdGhpcy5fX3J1bGVzX18uc3BsaWNlKGlkeCwgMCwge1xuICAgIG5hbWU6IHJ1bGVOYW1lLFxuICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgZm46IGZuLFxuICAgIGFsdDogb3B0LmFsdCB8fCBbXVxuICB9KTtcblxuICB0aGlzLl9fY2FjaGVfXyA9IG51bGw7XG59O1xuXG4vKipcbiAqIEFkZCBhIHJ1bGUgdG8gdGhlIGNoYWluIGFmdGVyIHRoZSBnaXZlbiBgcnVsZU5hbWVgLlxuICpcbiAqIEBwYXJhbSAge1N0cmluZ30gICBgYWZ0ZXJOYW1lYFxuICogQHBhcmFtICB7U3RyaW5nfSAgIGBydWxlTmFtZWBcbiAqIEBwYXJhbSAge0Z1bmN0aW9ufSBgZm5gXG4gKiBAcGFyYW0gIHtPYmplY3R9ICAgYG9wdGlvbnNgXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5SdWxlci5wcm90b3R5cGUuYWZ0ZXIgPSBmdW5jdGlvbiAoYWZ0ZXJOYW1lLCBydWxlTmFtZSwgZm4sIG9wdGlvbnMpIHtcbiAgdmFyIGlkeCA9IHRoaXMuX19maW5kX18oYWZ0ZXJOYW1lKTtcbiAgdmFyIG9wdCA9IG9wdGlvbnMgfHwge307XG5cbiAgaWYgKGlkeCA9PT0gLTEpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1BhcnNlciBydWxlIG5vdCBmb3VuZDogJyArIGFmdGVyTmFtZSk7XG4gIH1cblxuICB0aGlzLl9fcnVsZXNfXy5zcGxpY2UoaWR4ICsgMSwgMCwge1xuICAgIG5hbWU6IHJ1bGVOYW1lLFxuICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgZm46IGZuLFxuICAgIGFsdDogb3B0LmFsdCB8fCBbXVxuICB9KTtcblxuICB0aGlzLl9fY2FjaGVfXyA9IG51bGw7XG59O1xuXG4vKipcbiAqIEFkZCBhIHJ1bGUgdG8gdGhlIGVuZCBvZiBjaGFpbi5cbiAqXG4gKiBAcGFyYW0gIHtTdHJpbmd9ICAgYHJ1bGVOYW1lYFxuICogQHBhcmFtICB7RnVuY3Rpb259IGBmbmBcbiAqIEBwYXJhbSAge09iamVjdH0gICBgb3B0aW9uc2BcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqL1xuXG5SdWxlci5wcm90b3R5cGUucHVzaCA9IGZ1bmN0aW9uIChydWxlTmFtZSwgZm4sIG9wdGlvbnMpIHtcbiAgdmFyIG9wdCA9IG9wdGlvbnMgfHwge307XG5cbiAgdGhpcy5fX3J1bGVzX18ucHVzaCh7XG4gICAgbmFtZTogcnVsZU5hbWUsXG4gICAgZW5hYmxlZDogdHJ1ZSxcbiAgICBmbjogZm4sXG4gICAgYWx0OiBvcHQuYWx0IHx8IFtdXG4gIH0pO1xuXG4gIHRoaXMuX19jYWNoZV9fID0gbnVsbDtcbn07XG5cbi8qKlxuICogRW5hYmxlIGEgcnVsZSBvciBsaXN0IG9mIHJ1bGVzLlxuICpcbiAqIEBwYXJhbSAge1N0cmluZ3xBcnJheX0gYGxpc3RgIE5hbWUgb3IgYXJyYXkgb2YgcnVsZSBuYW1lcyB0byBlbmFibGVcbiAqIEBwYXJhbSAge0Jvb2xlYW59IGBzdHJpY3RgIElmIGB0cnVlYCwgYWxsIG5vbiBsaXN0ZWQgcnVsZXMgd2lsbCBiZSBkaXNhYmxlZC5cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cblJ1bGVyLnByb3RvdHlwZS5lbmFibGUgPSBmdW5jdGlvbiAobGlzdCwgc3RyaWN0KSB7XG4gIGxpc3QgPSAhQXJyYXkuaXNBcnJheShsaXN0KVxuICAgID8gWyBsaXN0IF1cbiAgICA6IGxpc3Q7XG5cbiAgLy8gSW4gc3RyaWN0IG1vZGUgZGlzYWJsZSBhbGwgZXhpc3RpbmcgcnVsZXMgZmlyc3RcbiAgaWYgKHN0cmljdCkge1xuICAgIHRoaXMuX19ydWxlc19fLmZvckVhY2goZnVuY3Rpb24gKHJ1bGUpIHtcbiAgICAgIHJ1bGUuZW5hYmxlZCA9IGZhbHNlO1xuICAgIH0pO1xuICB9XG5cbiAgLy8gU2VhcmNoIGJ5IG5hbWUgYW5kIGVuYWJsZVxuICBsaXN0LmZvckVhY2goZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB2YXIgaWR4ID0gdGhpcy5fX2ZpbmRfXyhuYW1lKTtcbiAgICBpZiAoaWR4IDwgMCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdSdWxlcyBtYW5hZ2VyOiBpbnZhbGlkIHJ1bGUgbmFtZSAnICsgbmFtZSk7XG4gICAgfVxuICAgIHRoaXMuX19ydWxlc19fW2lkeF0uZW5hYmxlZCA9IHRydWU7XG4gIH0sIHRoaXMpO1xuXG4gIHRoaXMuX19jYWNoZV9fID0gbnVsbDtcbn07XG5cblxuLyoqXG4gKiBEaXNhYmxlIGEgcnVsZSBvciBsaXN0IG9mIHJ1bGVzLlxuICpcbiAqIEBwYXJhbSAge1N0cmluZ3xBcnJheX0gYGxpc3RgIE5hbWUgb3IgYXJyYXkgb2YgcnVsZSBuYW1lcyB0byBkaXNhYmxlXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5SdWxlci5wcm90b3R5cGUuZGlzYWJsZSA9IGZ1bmN0aW9uIChsaXN0KSB7XG4gIGxpc3QgPSAhQXJyYXkuaXNBcnJheShsaXN0KVxuICAgID8gWyBsaXN0IF1cbiAgICA6IGxpc3Q7XG5cbiAgLy8gU2VhcmNoIGJ5IG5hbWUgYW5kIGRpc2FibGVcbiAgbGlzdC5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdmFyIGlkeCA9IHRoaXMuX19maW5kX18obmFtZSk7XG4gICAgaWYgKGlkeCA8IDApIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignUnVsZXMgbWFuYWdlcjogaW52YWxpZCBydWxlIG5hbWUgJyArIG5hbWUpO1xuICAgIH1cbiAgICB0aGlzLl9fcnVsZXNfX1tpZHhdLmVuYWJsZWQgPSBmYWxzZTtcbiAgfSwgdGhpcyk7XG5cbiAgdGhpcy5fX2NhY2hlX18gPSBudWxsO1xufTtcblxuLyoqXG4gKiBHZXQgYSBydWxlcyBsaXN0IGFzIGFuIGFycmF5IG9mIGZ1bmN0aW9ucy5cbiAqXG4gKiBAcGFyYW0gIHtTdHJpbmd9IGBjaGFpbk5hbWVgXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5SdWxlci5wcm90b3R5cGUuZ2V0UnVsZXMgPSBmdW5jdGlvbiAoY2hhaW5OYW1lKSB7XG4gIGlmICh0aGlzLl9fY2FjaGVfXyA9PT0gbnVsbCkge1xuICAgIHRoaXMuX19jb21waWxlX18oKTtcbiAgfVxuICByZXR1cm4gdGhpcy5fX2NhY2hlX19bY2hhaW5OYW1lXTtcbn07XG5cbi8qKlxuICogRXhwb3NlIGBSdWxlcmBcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJ1bGVyO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIExvY2FsIGRlcGVuZGVuY2llc1xuICovXG5cbnZhciBoYXMgICAgICAgICAgICAgPSByZXF1aXJlKCcuL2NvbW1vbi91dGlscycpLmhhcztcbnZhciB1bmVzY2FwZU1kICAgICAgPSByZXF1aXJlKCcuL2NvbW1vbi91dGlscycpLnVuZXNjYXBlTWQ7XG52YXIgcmVwbGFjZUVudGl0aWVzID0gcmVxdWlyZSgnLi9jb21tb24vdXRpbHMnKS5yZXBsYWNlRW50aXRpZXM7XG52YXIgZXNjYXBlSHRtbCAgICAgID0gcmVxdWlyZSgnLi9jb21tb24vdXRpbHMnKS5lc2NhcGVIdG1sO1xuXG4vKipcbiAqIFJlbmRlcmVyIHJ1bGVzIGNhY2hlXG4gKi9cblxudmFyIHJ1bGVzID0ge307XG5cbi8qKlxuICogQmxvY2txdW90ZXNcbiAqL1xuXG5ydWxlcy5ibG9ja3F1b3RlX29wZW4gPSBmdW5jdGlvbiAoLyogdG9rZW5zLCBpZHgsIG9wdGlvbnMsIGVudiAqLykge1xuICByZXR1cm4gJzxibG9ja3F1b3RlPlxcbic7XG59O1xuXG5ydWxlcy5ibG9ja3F1b3RlX2Nsb3NlID0gZnVuY3Rpb24gKHRva2VucywgaWR4IC8qLCBvcHRpb25zLCBlbnYgKi8pIHtcbiAgcmV0dXJuICc8L2Jsb2NrcXVvdGU+JyArIGdldEJyZWFrKHRva2VucywgaWR4KTtcbn07XG5cbi8qKlxuICogQ29kZVxuICovXG5cbnJ1bGVzLmNvZGUgPSBmdW5jdGlvbiAodG9rZW5zLCBpZHggLyosIG9wdGlvbnMsIGVudiAqLykge1xuICBpZiAodG9rZW5zW2lkeF0uYmxvY2spIHtcbiAgICByZXR1cm4gJzxwcmU+PGNvZGU+JyArIGVzY2FwZUh0bWwodG9rZW5zW2lkeF0uY29udGVudCkgKyAnPC9jb2RlPjwvcHJlPicgKyBnZXRCcmVhayh0b2tlbnMsIGlkeCk7XG4gIH1cbiAgcmV0dXJuICc8Y29kZT4nICsgZXNjYXBlSHRtbCh0b2tlbnNbaWR4XS5jb250ZW50KSArICc8L2NvZGU+Jztcbn07XG5cbi8qKlxuICogRmVuY2VkIGNvZGUgYmxvY2tzXG4gKi9cblxucnVsZXMuZmVuY2UgPSBmdW5jdGlvbiAodG9rZW5zLCBpZHgsIG9wdGlvbnMsIGVudiwgc2VsZikge1xuICB2YXIgdG9rZW4gPSB0b2tlbnNbaWR4XTtcbiAgdmFyIGxhbmdDbGFzcyA9ICcnO1xuICB2YXIgbGFuZ1ByZWZpeCA9IG9wdGlvbnMubGFuZ1ByZWZpeDtcbiAgdmFyIGxhbmdOYW1lID0gJycsIGZlbmNlTmFtZTtcbiAgdmFyIGhpZ2hsaWdodGVkO1xuXG4gIGlmICh0b2tlbi5wYXJhbXMpIHtcblxuICAgIC8vXG4gICAgLy8gYGBgZm9vIGJhclxuICAgIC8vXG4gICAgLy8gVHJ5IGN1c3RvbSByZW5kZXJlciBcImZvb1wiIGZpcnN0LiBUaGF0IHdpbGwgc2ltcGxpZnkgb3ZlcndyaXRlXG4gICAgLy8gZm9yIGRpYWdyYW1zLCBsYXRleCwgYW5kIGFueSBvdGhlciBmZW5jZWQgYmxvY2sgd2l0aCBjdXN0b20gbG9va1xuICAgIC8vXG5cbiAgICBmZW5jZU5hbWUgPSB0b2tlbi5wYXJhbXMuc3BsaXQoL1xccysvZylbMF07XG5cbiAgICBpZiAoaGFzKHNlbGYucnVsZXMuZmVuY2VfY3VzdG9tLCBmZW5jZU5hbWUpKSB7XG4gICAgICByZXR1cm4gc2VsZi5ydWxlcy5mZW5jZV9jdXN0b21bZmVuY2VOYW1lXSh0b2tlbnMsIGlkeCwgb3B0aW9ucywgZW52LCBzZWxmKTtcbiAgICB9XG5cbiAgICBsYW5nTmFtZSA9IGVzY2FwZUh0bWwocmVwbGFjZUVudGl0aWVzKHVuZXNjYXBlTWQoZmVuY2VOYW1lKSkpO1xuICAgIGxhbmdDbGFzcyA9ICcgY2xhc3M9XCInICsgbGFuZ1ByZWZpeCArIGxhbmdOYW1lICsgJ1wiJztcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhpZ2hsaWdodCkge1xuICAgIGhpZ2hsaWdodGVkID0gb3B0aW9ucy5oaWdobGlnaHQodG9rZW4uY29udGVudCwgbGFuZ05hbWUpIHx8IGVzY2FwZUh0bWwodG9rZW4uY29udGVudCk7XG4gIH0gZWxzZSB7XG4gICAgaGlnaGxpZ2h0ZWQgPSBlc2NhcGVIdG1sKHRva2VuLmNvbnRlbnQpO1xuICB9XG5cbiAgcmV0dXJuICc8cHJlPjxjb2RlJyArIGxhbmdDbGFzcyArICc+J1xuICAgICAgICArIGhpZ2hsaWdodGVkXG4gICAgICAgICsgJzwvY29kZT48L3ByZT4nXG4gICAgICAgICsgZ2V0QnJlYWsodG9rZW5zLCBpZHgpO1xufTtcblxucnVsZXMuZmVuY2VfY3VzdG9tID0ge307XG5cbi8qKlxuICogSGVhZGluZ3NcbiAqL1xuXG5ydWxlcy5oZWFkaW5nX29wZW4gPSBmdW5jdGlvbiAodG9rZW5zLCBpZHggLyosIG9wdGlvbnMsIGVudiAqLykge1xuICByZXR1cm4gJzxoJyArIHRva2Vuc1tpZHhdLmhMZXZlbCArICc+Jztcbn07XG5ydWxlcy5oZWFkaW5nX2Nsb3NlID0gZnVuY3Rpb24gKHRva2VucywgaWR4IC8qLCBvcHRpb25zLCBlbnYgKi8pIHtcbiAgcmV0dXJuICc8L2gnICsgdG9rZW5zW2lkeF0uaExldmVsICsgJz5cXG4nO1xufTtcblxuLyoqXG4gKiBIb3Jpem9udGFsIHJ1bGVzXG4gKi9cblxucnVsZXMuaHIgPSBmdW5jdGlvbiAodG9rZW5zLCBpZHgsIG9wdGlvbnMgLyosIGVudiAqLykge1xuICByZXR1cm4gKG9wdGlvbnMueGh0bWxPdXQgPyAnPGhyIC8+JyA6ICc8aHI+JykgKyBnZXRCcmVhayh0b2tlbnMsIGlkeCk7XG59O1xuXG4vKipcbiAqIEJ1bGxldHNcbiAqL1xuXG5ydWxlcy5idWxsZXRfbGlzdF9vcGVuID0gZnVuY3Rpb24gKC8qIHRva2VucywgaWR4LCBvcHRpb25zLCBlbnYgKi8pIHtcbiAgcmV0dXJuICc8dWw+XFxuJztcbn07XG5ydWxlcy5idWxsZXRfbGlzdF9jbG9zZSA9IGZ1bmN0aW9uICh0b2tlbnMsIGlkeCAvKiwgb3B0aW9ucywgZW52ICovKSB7XG4gIHJldHVybiAnPC91bD4nICsgZ2V0QnJlYWsodG9rZW5zLCBpZHgpO1xufTtcblxuLyoqXG4gKiBMaXN0IGl0ZW1zXG4gKi9cblxucnVsZXMubGlzdF9pdGVtX29wZW4gPSBmdW5jdGlvbiAoLyogdG9rZW5zLCBpZHgsIG9wdGlvbnMsIGVudiAqLykge1xuICByZXR1cm4gJzxsaT4nO1xufTtcbnJ1bGVzLmxpc3RfaXRlbV9jbG9zZSA9IGZ1bmN0aW9uICgvKiB0b2tlbnMsIGlkeCwgb3B0aW9ucywgZW52ICovKSB7XG4gIHJldHVybiAnPC9saT5cXG4nO1xufTtcblxuLyoqXG4gKiBPcmRlcmVkIGxpc3QgaXRlbXNcbiAqL1xuXG5ydWxlcy5vcmRlcmVkX2xpc3Rfb3BlbiA9IGZ1bmN0aW9uICh0b2tlbnMsIGlkeCAvKiwgb3B0aW9ucywgZW52ICovKSB7XG4gIHZhciB0b2tlbiA9IHRva2Vuc1tpZHhdO1xuICB2YXIgb3JkZXIgPSB0b2tlbi5vcmRlciA+IDEgPyAnIHN0YXJ0PVwiJyArIHRva2VuLm9yZGVyICsgJ1wiJyA6ICcnO1xuICByZXR1cm4gJzxvbCcgKyBvcmRlciArICc+XFxuJztcbn07XG5ydWxlcy5vcmRlcmVkX2xpc3RfY2xvc2UgPSBmdW5jdGlvbiAodG9rZW5zLCBpZHggLyosIG9wdGlvbnMsIGVudiAqLykge1xuICByZXR1cm4gJzwvb2w+JyArIGdldEJyZWFrKHRva2VucywgaWR4KTtcbn07XG5cbi8qKlxuICogUGFyYWdyYXBoc1xuICovXG5cbnJ1bGVzLnBhcmFncmFwaF9vcGVuID0gZnVuY3Rpb24gKHRva2VucywgaWR4IC8qLCBvcHRpb25zLCBlbnYgKi8pIHtcbiAgcmV0dXJuIHRva2Vuc1tpZHhdLnRpZ2h0ID8gJycgOiAnPHA+Jztcbn07XG5ydWxlcy5wYXJhZ3JhcGhfY2xvc2UgPSBmdW5jdGlvbiAodG9rZW5zLCBpZHggLyosIG9wdGlvbnMsIGVudiAqLykge1xuICB2YXIgYWRkQnJlYWsgPSAhKHRva2Vuc1tpZHhdLnRpZ2h0ICYmIGlkeCAmJiB0b2tlbnNbaWR4IC0gMV0udHlwZSA9PT0gJ2lubGluZScgJiYgIXRva2Vuc1tpZHggLSAxXS5jb250ZW50KTtcbiAgcmV0dXJuICh0b2tlbnNbaWR4XS50aWdodCA/ICcnIDogJzwvcD4nKSArIChhZGRCcmVhayA/IGdldEJyZWFrKHRva2VucywgaWR4KSA6ICcnKTtcbn07XG5cbi8qKlxuICogTGlua3NcbiAqL1xuXG5ydWxlcy5saW5rX29wZW4gPSBmdW5jdGlvbiAodG9rZW5zLCBpZHggLyosIG9wdGlvbnMsIGVudiAqLykge1xuICB2YXIgdGl0bGUgPSB0b2tlbnNbaWR4XS50aXRsZSA/ICgnIHRpdGxlPVwiJyArIGVzY2FwZUh0bWwocmVwbGFjZUVudGl0aWVzKHRva2Vuc1tpZHhdLnRpdGxlKSkgKyAnXCInKSA6ICcnO1xuICByZXR1cm4gJzxhIGhyZWY9XCInICsgZXNjYXBlSHRtbCh0b2tlbnNbaWR4XS5ocmVmKSArICdcIicgKyB0aXRsZSArICc+Jztcbn07XG5ydWxlcy5saW5rX2Nsb3NlID0gZnVuY3Rpb24gKC8qIHRva2VucywgaWR4LCBvcHRpb25zLCBlbnYgKi8pIHtcbiAgcmV0dXJuICc8L2E+Jztcbn07XG5cbi8qKlxuICogSW1hZ2VzXG4gKi9cblxucnVsZXMuaW1hZ2UgPSBmdW5jdGlvbiAodG9rZW5zLCBpZHgsIG9wdGlvbnMgLyosIGVudiAqLykge1xuICB2YXIgc3JjID0gJyBzcmM9XCInICsgZXNjYXBlSHRtbCh0b2tlbnNbaWR4XS5zcmMpICsgJ1wiJztcbiAgdmFyIHRpdGxlID0gdG9rZW5zW2lkeF0udGl0bGUgPyAoJyB0aXRsZT1cIicgKyBlc2NhcGVIdG1sKHJlcGxhY2VFbnRpdGllcyh0b2tlbnNbaWR4XS50aXRsZSkpICsgJ1wiJykgOiAnJztcbiAgdmFyIGFsdCA9ICcgYWx0PVwiJyArICh0b2tlbnNbaWR4XS5hbHQgPyBlc2NhcGVIdG1sKHJlcGxhY2VFbnRpdGllcyh0b2tlbnNbaWR4XS5hbHQpKSA6ICcnKSArICdcIic7XG4gIHZhciBzdWZmaXggPSBvcHRpb25zLnhodG1sT3V0ID8gJyAvJyA6ICcnO1xuICByZXR1cm4gJzxpbWcnICsgc3JjICsgYWx0ICsgdGl0bGUgKyBzdWZmaXggKyAnPic7XG59O1xuXG4vKipcbiAqIFRhYmxlc1xuICovXG5cbnJ1bGVzLnRhYmxlX29wZW4gPSBmdW5jdGlvbiAoLyogdG9rZW5zLCBpZHgsIG9wdGlvbnMsIGVudiAqLykge1xuICByZXR1cm4gJzx0YWJsZT5cXG4nO1xufTtcbnJ1bGVzLnRhYmxlX2Nsb3NlID0gZnVuY3Rpb24gKC8qIHRva2VucywgaWR4LCBvcHRpb25zLCBlbnYgKi8pIHtcbiAgcmV0dXJuICc8L3RhYmxlPlxcbic7XG59O1xucnVsZXMudGhlYWRfb3BlbiA9IGZ1bmN0aW9uICgvKiB0b2tlbnMsIGlkeCwgb3B0aW9ucywgZW52ICovKSB7XG4gIHJldHVybiAnPHRoZWFkPlxcbic7XG59O1xucnVsZXMudGhlYWRfY2xvc2UgPSBmdW5jdGlvbiAoLyogdG9rZW5zLCBpZHgsIG9wdGlvbnMsIGVudiAqLykge1xuICByZXR1cm4gJzwvdGhlYWQ+XFxuJztcbn07XG5ydWxlcy50Ym9keV9vcGVuID0gZnVuY3Rpb24gKC8qIHRva2VucywgaWR4LCBvcHRpb25zLCBlbnYgKi8pIHtcbiAgcmV0dXJuICc8dGJvZHk+XFxuJztcbn07XG5ydWxlcy50Ym9keV9jbG9zZSA9IGZ1bmN0aW9uICgvKiB0b2tlbnMsIGlkeCwgb3B0aW9ucywgZW52ICovKSB7XG4gIHJldHVybiAnPC90Ym9keT5cXG4nO1xufTtcbnJ1bGVzLnRyX29wZW4gPSBmdW5jdGlvbiAoLyogdG9rZW5zLCBpZHgsIG9wdGlvbnMsIGVudiAqLykge1xuICByZXR1cm4gJzx0cj4nO1xufTtcbnJ1bGVzLnRyX2Nsb3NlID0gZnVuY3Rpb24gKC8qIHRva2VucywgaWR4LCBvcHRpb25zLCBlbnYgKi8pIHtcbiAgcmV0dXJuICc8L3RyPlxcbic7XG59O1xucnVsZXMudGhfb3BlbiA9IGZ1bmN0aW9uICh0b2tlbnMsIGlkeCAvKiwgb3B0aW9ucywgZW52ICovKSB7XG4gIHZhciB0b2tlbiA9IHRva2Vuc1tpZHhdO1xuICByZXR1cm4gJzx0aCdcbiAgICArICh0b2tlbi5hbGlnbiA/ICcgc3R5bGU9XCJ0ZXh0LWFsaWduOicgKyB0b2tlbi5hbGlnbiArICdcIicgOiAnJylcbiAgICArICc+Jztcbn07XG5ydWxlcy50aF9jbG9zZSA9IGZ1bmN0aW9uICgvKiB0b2tlbnMsIGlkeCwgb3B0aW9ucywgZW52ICovKSB7XG4gIHJldHVybiAnPC90aD4nO1xufTtcbnJ1bGVzLnRkX29wZW4gPSBmdW5jdGlvbiAodG9rZW5zLCBpZHggLyosIG9wdGlvbnMsIGVudiAqLykge1xuICB2YXIgdG9rZW4gPSB0b2tlbnNbaWR4XTtcbiAgcmV0dXJuICc8dGQnXG4gICAgKyAodG9rZW4uYWxpZ24gPyAnIHN0eWxlPVwidGV4dC1hbGlnbjonICsgdG9rZW4uYWxpZ24gKyAnXCInIDogJycpXG4gICAgKyAnPic7XG59O1xucnVsZXMudGRfY2xvc2UgPSBmdW5jdGlvbiAoLyogdG9rZW5zLCBpZHgsIG9wdGlvbnMsIGVudiAqLykge1xuICByZXR1cm4gJzwvdGQ+Jztcbn07XG5cbi8qKlxuICogQm9sZFxuICovXG5cbnJ1bGVzLnN0cm9uZ19vcGVuID0gZnVuY3Rpb24gKC8qIHRva2VucywgaWR4LCBvcHRpb25zLCBlbnYgKi8pIHtcbiAgcmV0dXJuICc8c3Ryb25nPic7XG59O1xucnVsZXMuc3Ryb25nX2Nsb3NlID0gZnVuY3Rpb24gKC8qIHRva2VucywgaWR4LCBvcHRpb25zLCBlbnYgKi8pIHtcbiAgcmV0dXJuICc8L3N0cm9uZz4nO1xufTtcblxuLyoqXG4gKiBJdGFsaWNpemVcbiAqL1xuXG5ydWxlcy5lbV9vcGVuID0gZnVuY3Rpb24gKC8qIHRva2VucywgaWR4LCBvcHRpb25zLCBlbnYgKi8pIHtcbiAgcmV0dXJuICc8ZW0+Jztcbn07XG5ydWxlcy5lbV9jbG9zZSA9IGZ1bmN0aW9uICgvKiB0b2tlbnMsIGlkeCwgb3B0aW9ucywgZW52ICovKSB7XG4gIHJldHVybiAnPC9lbT4nO1xufTtcblxuLyoqXG4gKiBTdHJpa2V0aHJvdWdoXG4gKi9cblxucnVsZXMuZGVsX29wZW4gPSBmdW5jdGlvbiAoLyogdG9rZW5zLCBpZHgsIG9wdGlvbnMsIGVudiAqLykge1xuICByZXR1cm4gJzxkZWw+Jztcbn07XG5ydWxlcy5kZWxfY2xvc2UgPSBmdW5jdGlvbiAoLyogdG9rZW5zLCBpZHgsIG9wdGlvbnMsIGVudiAqLykge1xuICByZXR1cm4gJzwvZGVsPic7XG59O1xuXG4vKipcbiAqIEluc2VydFxuICovXG5cbnJ1bGVzLmluc19vcGVuID0gZnVuY3Rpb24gKC8qIHRva2VucywgaWR4LCBvcHRpb25zLCBlbnYgKi8pIHtcbiAgcmV0dXJuICc8aW5zPic7XG59O1xucnVsZXMuaW5zX2Nsb3NlID0gZnVuY3Rpb24gKC8qIHRva2VucywgaWR4LCBvcHRpb25zLCBlbnYgKi8pIHtcbiAgcmV0dXJuICc8L2lucz4nO1xufTtcblxuLyoqXG4gKiBIaWdobGlnaHRcbiAqL1xuXG5ydWxlcy5tYXJrX29wZW4gPSBmdW5jdGlvbiAoLyogdG9rZW5zLCBpZHgsIG9wdGlvbnMsIGVudiAqLykge1xuICByZXR1cm4gJzxtYXJrPic7XG59O1xucnVsZXMubWFya19jbG9zZSA9IGZ1bmN0aW9uICgvKiB0b2tlbnMsIGlkeCwgb3B0aW9ucywgZW52ICovKSB7XG4gIHJldHVybiAnPC9tYXJrPic7XG59O1xuXG4vKipcbiAqIFN1cGVyLSBhbmQgc3ViLXNjcmlwdFxuICovXG5cbnJ1bGVzLnN1YiA9IGZ1bmN0aW9uICh0b2tlbnMsIGlkeCAvKiwgb3B0aW9ucywgZW52ICovKSB7XG4gIHJldHVybiAnPHN1Yj4nICsgZXNjYXBlSHRtbCh0b2tlbnNbaWR4XS5jb250ZW50KSArICc8L3N1Yj4nO1xufTtcbnJ1bGVzLnN1cCA9IGZ1bmN0aW9uICh0b2tlbnMsIGlkeCAvKiwgb3B0aW9ucywgZW52ICovKSB7XG4gIHJldHVybiAnPHN1cD4nICsgZXNjYXBlSHRtbCh0b2tlbnNbaWR4XS5jb250ZW50KSArICc8L3N1cD4nO1xufTtcblxuLyoqXG4gKiBCcmVha3NcbiAqL1xuXG5ydWxlcy5oYXJkYnJlYWsgPSBmdW5jdGlvbiAodG9rZW5zLCBpZHgsIG9wdGlvbnMgLyosIGVudiAqLykge1xuICByZXR1cm4gb3B0aW9ucy54aHRtbE91dCA/ICc8YnIgLz5cXG4nIDogJzxicj5cXG4nO1xufTtcbnJ1bGVzLnNvZnRicmVhayA9IGZ1bmN0aW9uICh0b2tlbnMsIGlkeCwgb3B0aW9ucyAvKiwgZW52ICovKSB7XG4gIHJldHVybiBvcHRpb25zLmJyZWFrcyA/IChvcHRpb25zLnhodG1sT3V0ID8gJzxiciAvPlxcbicgOiAnPGJyPlxcbicpIDogJ1xcbic7XG59O1xuXG4vKipcbiAqIFRleHRcbiAqL1xuXG5ydWxlcy50ZXh0ID0gZnVuY3Rpb24gKHRva2VucywgaWR4IC8qLCBvcHRpb25zLCBlbnYgKi8pIHtcbiAgcmV0dXJuIGVzY2FwZUh0bWwodG9rZW5zW2lkeF0uY29udGVudCk7XG59O1xuXG4vKipcbiAqIENvbnRlbnRcbiAqL1xuXG5ydWxlcy5odG1sYmxvY2sgPSBmdW5jdGlvbiAodG9rZW5zLCBpZHggLyosIG9wdGlvbnMsIGVudiAqLykge1xuICByZXR1cm4gdG9rZW5zW2lkeF0uY29udGVudDtcbn07XG5ydWxlcy5odG1sdGFnID0gZnVuY3Rpb24gKHRva2VucywgaWR4IC8qLCBvcHRpb25zLCBlbnYgKi8pIHtcbiAgcmV0dXJuIHRva2Vuc1tpZHhdLmNvbnRlbnQ7XG59O1xuXG4vKipcbiAqIEFiYnJldmlhdGlvbnMsIGluaXRpYWxpc21cbiAqL1xuXG5ydWxlcy5hYmJyX29wZW4gPSBmdW5jdGlvbiAodG9rZW5zLCBpZHggLyosIG9wdGlvbnMsIGVudiAqLykge1xuICByZXR1cm4gJzxhYmJyIHRpdGxlPVwiJyArIGVzY2FwZUh0bWwocmVwbGFjZUVudGl0aWVzKHRva2Vuc1tpZHhdLnRpdGxlKSkgKyAnXCI+Jztcbn07XG5ydWxlcy5hYmJyX2Nsb3NlID0gZnVuY3Rpb24gKC8qIHRva2VucywgaWR4LCBvcHRpb25zLCBlbnYgKi8pIHtcbiAgcmV0dXJuICc8L2FiYnI+Jztcbn07XG5cbi8qKlxuICogRm9vdG5vdGVzXG4gKi9cblxucnVsZXMuZm9vdG5vdGVfcmVmID0gZnVuY3Rpb24gKHRva2VucywgaWR4KSB7XG4gIHZhciBuID0gTnVtYmVyKHRva2Vuc1tpZHhdLmlkICsgMSkudG9TdHJpbmcoKTtcbiAgdmFyIGlkID0gJ2ZucmVmJyArIG47XG4gIGlmICh0b2tlbnNbaWR4XS5zdWJJZCA+IDApIHtcbiAgICBpZCArPSAnOicgKyB0b2tlbnNbaWR4XS5zdWJJZDtcbiAgfVxuICByZXR1cm4gJzxzdXAgY2xhc3M9XCJmb290bm90ZS1yZWZcIj48YSBocmVmPVwiI2ZuJyArIG4gKyAnXCIgaWQ9XCInICsgaWQgKyAnXCI+WycgKyBuICsgJ108L2E+PC9zdXA+Jztcbn07XG5ydWxlcy5mb290bm90ZV9ibG9ja19vcGVuID0gZnVuY3Rpb24gKHRva2VucywgaWR4LCBvcHRpb25zKSB7XG4gIHZhciBociA9IG9wdGlvbnMueGh0bWxPdXRcbiAgICA/ICc8aHIgY2xhc3M9XCJmb290bm90ZXMtc2VwXCIgLz5cXG4nXG4gICAgOiAnPGhyIGNsYXNzPVwiZm9vdG5vdGVzLXNlcFwiPlxcbic7XG4gIHJldHVybiAgaHIgKyAnPHNlY3Rpb24gY2xhc3M9XCJmb290bm90ZXNcIj5cXG48b2wgY2xhc3M9XCJmb290bm90ZXMtbGlzdFwiPlxcbic7XG59O1xucnVsZXMuZm9vdG5vdGVfYmxvY2tfY2xvc2UgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiAnPC9vbD5cXG48L3NlY3Rpb24+XFxuJztcbn07XG5ydWxlcy5mb290bm90ZV9vcGVuID0gZnVuY3Rpb24gKHRva2VucywgaWR4KSB7XG4gIHZhciBpZCA9IE51bWJlcih0b2tlbnNbaWR4XS5pZCArIDEpLnRvU3RyaW5nKCk7XG4gIHJldHVybiAnPGxpIGlkPVwiZm4nICsgaWQgKyAnXCIgIGNsYXNzPVwiZm9vdG5vdGUtaXRlbVwiPic7XG59O1xucnVsZXMuZm9vdG5vdGVfY2xvc2UgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiAnPC9saT5cXG4nO1xufTtcbnJ1bGVzLmZvb3Rub3RlX2FuY2hvciA9IGZ1bmN0aW9uICh0b2tlbnMsIGlkeCkge1xuICB2YXIgbiA9IE51bWJlcih0b2tlbnNbaWR4XS5pZCArIDEpLnRvU3RyaW5nKCk7XG4gIHZhciBpZCA9ICdmbnJlZicgKyBuO1xuICBpZiAodG9rZW5zW2lkeF0uc3ViSWQgPiAwKSB7XG4gICAgaWQgKz0gJzonICsgdG9rZW5zW2lkeF0uc3ViSWQ7XG4gIH1cbiAgcmV0dXJuICcgPGEgaHJlZj1cIiMnICsgaWQgKyAnXCIgY2xhc3M9XCJmb290bm90ZS1iYWNrcmVmXCI+4oapPC9hPic7XG59O1xuXG4vKipcbiAqIERlZmluaXRpb24gbGlzdHNcbiAqL1xuXG5ydWxlcy5kbF9vcGVuID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiAnPGRsPlxcbic7XG59O1xucnVsZXMuZHRfb3BlbiA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gJzxkdD4nO1xufTtcbnJ1bGVzLmRkX29wZW4gPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuICc8ZGQ+Jztcbn07XG5ydWxlcy5kbF9jbG9zZSA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gJzwvZGw+XFxuJztcbn07XG5ydWxlcy5kdF9jbG9zZSA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gJzwvZHQ+XFxuJztcbn07XG5ydWxlcy5kZF9jbG9zZSA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gJzwvZGQ+XFxuJztcbn07XG5cbi8qKlxuICogSGVscGVyIGZ1bmN0aW9uc1xuICovXG5cbmZ1bmN0aW9uIG5leHRUb2tlbih0b2tlbnMsIGlkeCkge1xuICBpZiAoKytpZHggPj0gdG9rZW5zLmxlbmd0aCAtIDIpIHtcbiAgICByZXR1cm4gaWR4O1xuICB9XG4gIGlmICgodG9rZW5zW2lkeF0udHlwZSA9PT0gJ3BhcmFncmFwaF9vcGVuJyAmJiB0b2tlbnNbaWR4XS50aWdodCkgJiZcbiAgICAgICh0b2tlbnNbaWR4ICsgMV0udHlwZSA9PT0gJ2lubGluZScgJiYgdG9rZW5zW2lkeCArIDFdLmNvbnRlbnQubGVuZ3RoID09PSAwKSAmJlxuICAgICAgKHRva2Vuc1tpZHggKyAyXS50eXBlID09PSAncGFyYWdyYXBoX2Nsb3NlJyAmJiB0b2tlbnNbaWR4ICsgMl0udGlnaHQpKSB7XG4gICAgcmV0dXJuIG5leHRUb2tlbih0b2tlbnMsIGlkeCArIDIpO1xuICB9XG4gIHJldHVybiBpZHg7XG59XG5cbi8qKlxuICogQ2hlY2sgdG8gc2VlIGlmIGBcXG5gIGlzIG5lZWRlZCBiZWZvcmUgdGhlIG5leHQgdG9rZW4uXG4gKlxuICogQHBhcmFtICB7QXJyYXl9IGB0b2tlbnNgXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IGBpZHhgXG4gKiBAcmV0dXJuIHtTdHJpbmd9IEVtcHR5IHN0cmluZyBvciBuZXdsaW5lXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG52YXIgZ2V0QnJlYWsgPSBydWxlcy5nZXRCcmVhayA9IGZ1bmN0aW9uIGdldEJyZWFrKHRva2VucywgaWR4KSB7XG4gIGlkeCA9IG5leHRUb2tlbih0b2tlbnMsIGlkeCk7XG4gIGlmIChpZHggPCB0b2tlbnMubGVuZ3RoICYmIHRva2Vuc1tpZHhdLnR5cGUgPT09ICdsaXN0X2l0ZW1fY2xvc2UnKSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG4gIHJldHVybiAnXFxuJztcbn07XG5cbi8qKlxuICogRXhwb3NlIGBydWxlc2BcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJ1bGVzO1xuIiwiLy8gQmxvY2sgcXVvdGVzXG5cbid1c2Ugc3RyaWN0JztcblxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGJsb2NrcXVvdGUoc3RhdGUsIHN0YXJ0TGluZSwgZW5kTGluZSwgc2lsZW50KSB7XG4gIHZhciBuZXh0TGluZSwgbGFzdExpbmVFbXB0eSwgb2xkVFNoaWZ0LCBvbGRCTWFya3MsIG9sZEluZGVudCwgb2xkUGFyZW50VHlwZSwgbGluZXMsXG4gICAgICB0ZXJtaW5hdG9yUnVsZXMsXG4gICAgICBpLCBsLCB0ZXJtaW5hdGUsXG4gICAgICBwb3MgPSBzdGF0ZS5iTWFya3Nbc3RhcnRMaW5lXSArIHN0YXRlLnRTaGlmdFtzdGFydExpbmVdLFxuICAgICAgbWF4ID0gc3RhdGUuZU1hcmtzW3N0YXJ0TGluZV07XG5cbiAgaWYgKHBvcyA+IG1heCkgeyByZXR1cm4gZmFsc2U7IH1cblxuICAvLyBjaGVjayB0aGUgYmxvY2sgcXVvdGUgbWFya2VyXG4gIGlmIChzdGF0ZS5zcmMuY2hhckNvZGVBdChwb3MrKykgIT09IDB4M0UvKiA+ICovKSB7IHJldHVybiBmYWxzZTsgfVxuXG4gIGlmIChzdGF0ZS5sZXZlbCA+PSBzdGF0ZS5vcHRpb25zLm1heE5lc3RpbmcpIHsgcmV0dXJuIGZhbHNlOyB9XG5cbiAgLy8gd2Uga25vdyB0aGF0IGl0J3MgZ29pbmcgdG8gYmUgYSB2YWxpZCBibG9ja3F1b3RlLFxuICAvLyBzbyBubyBwb2ludCB0cnlpbmcgdG8gZmluZCB0aGUgZW5kIG9mIGl0IGluIHNpbGVudCBtb2RlXG4gIGlmIChzaWxlbnQpIHsgcmV0dXJuIHRydWU7IH1cblxuICAvLyBza2lwIG9uZSBvcHRpb25hbCBzcGFjZSBhZnRlciAnPidcbiAgaWYgKHN0YXRlLnNyYy5jaGFyQ29kZUF0KHBvcykgPT09IDB4MjApIHsgcG9zKys7IH1cblxuICBvbGRJbmRlbnQgPSBzdGF0ZS5ibGtJbmRlbnQ7XG4gIHN0YXRlLmJsa0luZGVudCA9IDA7XG5cbiAgb2xkQk1hcmtzID0gWyBzdGF0ZS5iTWFya3Nbc3RhcnRMaW5lXSBdO1xuICBzdGF0ZS5iTWFya3Nbc3RhcnRMaW5lXSA9IHBvcztcblxuICAvLyBjaGVjayBpZiB3ZSBoYXZlIGFuIGVtcHR5IGJsb2NrcXVvdGVcbiAgcG9zID0gcG9zIDwgbWF4ID8gc3RhdGUuc2tpcFNwYWNlcyhwb3MpIDogcG9zO1xuICBsYXN0TGluZUVtcHR5ID0gcG9zID49IG1heDtcblxuICBvbGRUU2hpZnQgPSBbIHN0YXRlLnRTaGlmdFtzdGFydExpbmVdIF07XG4gIHN0YXRlLnRTaGlmdFtzdGFydExpbmVdID0gcG9zIC0gc3RhdGUuYk1hcmtzW3N0YXJ0TGluZV07XG5cbiAgdGVybWluYXRvclJ1bGVzID0gc3RhdGUucGFyc2VyLnJ1bGVyLmdldFJ1bGVzKCdibG9ja3F1b3RlJyk7XG5cbiAgLy8gU2VhcmNoIHRoZSBlbmQgb2YgdGhlIGJsb2NrXG4gIC8vXG4gIC8vIEJsb2NrIGVuZHMgd2l0aCBlaXRoZXI6XG4gIC8vICAxLiBhbiBlbXB0eSBsaW5lIG91dHNpZGU6XG4gIC8vICAgICBgYGBcbiAgLy8gICAgID4gdGVzdFxuICAvL1xuICAvLyAgICAgYGBgXG4gIC8vICAyLiBhbiBlbXB0eSBsaW5lIGluc2lkZTpcbiAgLy8gICAgIGBgYFxuICAvLyAgICAgPlxuICAvLyAgICAgdGVzdFxuICAvLyAgICAgYGBgXG4gIC8vICAzLiBhbm90aGVyIHRhZ1xuICAvLyAgICAgYGBgXG4gIC8vICAgICA+IHRlc3RcbiAgLy8gICAgICAtIC0gLVxuICAvLyAgICAgYGBgXG4gIGZvciAobmV4dExpbmUgPSBzdGFydExpbmUgKyAxOyBuZXh0TGluZSA8IGVuZExpbmU7IG5leHRMaW5lKyspIHtcbiAgICBwb3MgPSBzdGF0ZS5iTWFya3NbbmV4dExpbmVdICsgc3RhdGUudFNoaWZ0W25leHRMaW5lXTtcbiAgICBtYXggPSBzdGF0ZS5lTWFya3NbbmV4dExpbmVdO1xuXG4gICAgaWYgKHBvcyA+PSBtYXgpIHtcbiAgICAgIC8vIENhc2UgMTogbGluZSBpcyBub3QgaW5zaWRlIHRoZSBibG9ja3F1b3RlLCBhbmQgdGhpcyBsaW5lIGlzIGVtcHR5LlxuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgaWYgKHN0YXRlLnNyYy5jaGFyQ29kZUF0KHBvcysrKSA9PT0gMHgzRS8qID4gKi8pIHtcbiAgICAgIC8vIFRoaXMgbGluZSBpcyBpbnNpZGUgdGhlIGJsb2NrcXVvdGUuXG5cbiAgICAgIC8vIHNraXAgb25lIG9wdGlvbmFsIHNwYWNlIGFmdGVyICc+J1xuICAgICAgaWYgKHN0YXRlLnNyYy5jaGFyQ29kZUF0KHBvcykgPT09IDB4MjApIHsgcG9zKys7IH1cblxuICAgICAgb2xkQk1hcmtzLnB1c2goc3RhdGUuYk1hcmtzW25leHRMaW5lXSk7XG4gICAgICBzdGF0ZS5iTWFya3NbbmV4dExpbmVdID0gcG9zO1xuXG4gICAgICBwb3MgPSBwb3MgPCBtYXggPyBzdGF0ZS5za2lwU3BhY2VzKHBvcykgOiBwb3M7XG4gICAgICBsYXN0TGluZUVtcHR5ID0gcG9zID49IG1heDtcblxuICAgICAgb2xkVFNoaWZ0LnB1c2goc3RhdGUudFNoaWZ0W25leHRMaW5lXSk7XG4gICAgICBzdGF0ZS50U2hpZnRbbmV4dExpbmVdID0gcG9zIC0gc3RhdGUuYk1hcmtzW25leHRMaW5lXTtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIC8vIENhc2UgMjogbGluZSBpcyBub3QgaW5zaWRlIHRoZSBibG9ja3F1b3RlLCBhbmQgdGhlIGxhc3QgbGluZSB3YXMgZW1wdHkuXG4gICAgaWYgKGxhc3RMaW5lRW1wdHkpIHsgYnJlYWs7IH1cblxuICAgIC8vIENhc2UgMzogYW5vdGhlciB0YWcgZm91bmQuXG4gICAgdGVybWluYXRlID0gZmFsc2U7XG4gICAgZm9yIChpID0gMCwgbCA9IHRlcm1pbmF0b3JSdWxlcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGlmICh0ZXJtaW5hdG9yUnVsZXNbaV0oc3RhdGUsIG5leHRMaW5lLCBlbmRMaW5lLCB0cnVlKSkge1xuICAgICAgICB0ZXJtaW5hdGUgPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHRlcm1pbmF0ZSkgeyBicmVhazsgfVxuXG4gICAgb2xkQk1hcmtzLnB1c2goc3RhdGUuYk1hcmtzW25leHRMaW5lXSk7XG4gICAgb2xkVFNoaWZ0LnB1c2goc3RhdGUudFNoaWZ0W25leHRMaW5lXSk7XG5cbiAgICAvLyBBIG5lZ2F0aXZlIG51bWJlciBtZWFucyB0aGF0IHRoaXMgaXMgYSBwYXJhZ3JhcGggY29udGludWF0aW9uO1xuICAgIC8vXG4gICAgLy8gQW55IG5lZ2F0aXZlIG51bWJlciB3aWxsIGRvIHRoZSBqb2IgaGVyZSwgYnV0IGl0J3MgYmV0dGVyIGZvciBpdFxuICAgIC8vIHRvIGJlIGxhcmdlIGVub3VnaCB0byBtYWtlIGFueSBidWdzIG9idmlvdXMuXG4gICAgc3RhdGUudFNoaWZ0W25leHRMaW5lXSA9IC0xMzM3O1xuICB9XG5cbiAgb2xkUGFyZW50VHlwZSA9IHN0YXRlLnBhcmVudFR5cGU7XG4gIHN0YXRlLnBhcmVudFR5cGUgPSAnYmxvY2txdW90ZSc7XG4gIHN0YXRlLnRva2Vucy5wdXNoKHtcbiAgICB0eXBlOiAnYmxvY2txdW90ZV9vcGVuJyxcbiAgICBsaW5lczogbGluZXMgPSBbIHN0YXJ0TGluZSwgMCBdLFxuICAgIGxldmVsOiBzdGF0ZS5sZXZlbCsrXG4gIH0pO1xuICBzdGF0ZS5wYXJzZXIudG9rZW5pemUoc3RhdGUsIHN0YXJ0TGluZSwgbmV4dExpbmUpO1xuICBzdGF0ZS50b2tlbnMucHVzaCh7XG4gICAgdHlwZTogJ2Jsb2NrcXVvdGVfY2xvc2UnLFxuICAgIGxldmVsOiAtLXN0YXRlLmxldmVsXG4gIH0pO1xuICBzdGF0ZS5wYXJlbnRUeXBlID0gb2xkUGFyZW50VHlwZTtcbiAgbGluZXNbMV0gPSBzdGF0ZS5saW5lO1xuXG4gIC8vIFJlc3RvcmUgb3JpZ2luYWwgdFNoaWZ0OyB0aGlzIG1pZ2h0IG5vdCBiZSBuZWNlc3Nhcnkgc2luY2UgdGhlIHBhcnNlclxuICAvLyBoYXMgYWxyZWFkeSBiZWVuIGhlcmUsIGJ1dCBqdXN0IHRvIG1ha2Ugc3VyZSB3ZSBjYW4gZG8gdGhhdC5cbiAgZm9yIChpID0gMDsgaSA8IG9sZFRTaGlmdC5sZW5ndGg7IGkrKykge1xuICAgIHN0YXRlLmJNYXJrc1tpICsgc3RhcnRMaW5lXSA9IG9sZEJNYXJrc1tpXTtcbiAgICBzdGF0ZS50U2hpZnRbaSArIHN0YXJ0TGluZV0gPSBvbGRUU2hpZnRbaV07XG4gIH1cbiAgc3RhdGUuYmxrSW5kZW50ID0gb2xkSW5kZW50O1xuXG4gIHJldHVybiB0cnVlO1xufTtcbiIsIi8vIENvZGUgYmxvY2sgKDQgc3BhY2VzIHBhZGRlZClcblxuJ3VzZSBzdHJpY3QnO1xuXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY29kZShzdGF0ZSwgc3RhcnRMaW5lLCBlbmRMaW5lLyosIHNpbGVudCovKSB7XG4gIHZhciBuZXh0TGluZSwgbGFzdDtcblxuICBpZiAoc3RhdGUudFNoaWZ0W3N0YXJ0TGluZV0gLSBzdGF0ZS5ibGtJbmRlbnQgPCA0KSB7IHJldHVybiBmYWxzZTsgfVxuXG4gIGxhc3QgPSBuZXh0TGluZSA9IHN0YXJ0TGluZSArIDE7XG5cbiAgd2hpbGUgKG5leHRMaW5lIDwgZW5kTGluZSkge1xuICAgIGlmIChzdGF0ZS5pc0VtcHR5KG5leHRMaW5lKSkge1xuICAgICAgbmV4dExpbmUrKztcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICBpZiAoc3RhdGUudFNoaWZ0W25leHRMaW5lXSAtIHN0YXRlLmJsa0luZGVudCA+PSA0KSB7XG4gICAgICBuZXh0TGluZSsrO1xuICAgICAgbGFzdCA9IG5leHRMaW5lO1xuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIGJyZWFrO1xuICB9XG5cbiAgc3RhdGUubGluZSA9IG5leHRMaW5lO1xuICBzdGF0ZS50b2tlbnMucHVzaCh7XG4gICAgdHlwZTogJ2NvZGUnLFxuICAgIGNvbnRlbnQ6IHN0YXRlLmdldExpbmVzKHN0YXJ0TGluZSwgbGFzdCwgNCArIHN0YXRlLmJsa0luZGVudCwgdHJ1ZSksXG4gICAgYmxvY2s6IHRydWUsXG4gICAgbGluZXM6IFsgc3RhcnRMaW5lLCBzdGF0ZS5saW5lIF0sXG4gICAgbGV2ZWw6IHN0YXRlLmxldmVsXG4gIH0pO1xuXG4gIHJldHVybiB0cnVlO1xufTtcbiIsIi8vIERlZmluaXRpb24gbGlzdHNcblxuJ3VzZSBzdHJpY3QnO1xuXG5cbi8vIFNlYXJjaCBgWzp+XVtcXG4gXWAsIHJldHVybnMgbmV4dCBwb3MgYWZ0ZXIgbWFya2VyIG9uIHN1Y2Nlc3Ncbi8vIG9yIC0xIG9uIGZhaWwuXG5mdW5jdGlvbiBza2lwTWFya2VyKHN0YXRlLCBsaW5lKSB7XG4gIHZhciBwb3MsIG1hcmtlcixcbiAgICAgIHN0YXJ0ID0gc3RhdGUuYk1hcmtzW2xpbmVdICsgc3RhdGUudFNoaWZ0W2xpbmVdLFxuICAgICAgbWF4ID0gc3RhdGUuZU1hcmtzW2xpbmVdO1xuXG4gIGlmIChzdGFydCA+PSBtYXgpIHsgcmV0dXJuIC0xOyB9XG5cbiAgLy8gQ2hlY2sgYnVsbGV0XG4gIG1hcmtlciA9IHN0YXRlLnNyYy5jaGFyQ29kZUF0KHN0YXJ0KyspO1xuICBpZiAobWFya2VyICE9PSAweDdFLyogfiAqLyAmJiBtYXJrZXIgIT09IDB4M0EvKiA6ICovKSB7IHJldHVybiAtMTsgfVxuXG4gIHBvcyA9IHN0YXRlLnNraXBTcGFjZXMoc3RhcnQpO1xuXG4gIC8vIHJlcXVpcmUgc3BhY2UgYWZ0ZXIgXCI6XCJcbiAgaWYgKHN0YXJ0ID09PSBwb3MpIHsgcmV0dXJuIC0xOyB9XG5cbiAgLy8gbm8gZW1wdHkgZGVmaW5pdGlvbnMsIGUuZy4gXCIgIDogXCJcbiAgaWYgKHBvcyA+PSBtYXgpIHsgcmV0dXJuIC0xOyB9XG5cbiAgcmV0dXJuIHBvcztcbn1cblxuZnVuY3Rpb24gbWFya1RpZ2h0UGFyYWdyYXBocyhzdGF0ZSwgaWR4KSB7XG4gIHZhciBpLCBsLFxuICAgICAgbGV2ZWwgPSBzdGF0ZS5sZXZlbCArIDI7XG5cbiAgZm9yIChpID0gaWR4ICsgMiwgbCA9IHN0YXRlLnRva2Vucy5sZW5ndGggLSAyOyBpIDwgbDsgaSsrKSB7XG4gICAgaWYgKHN0YXRlLnRva2Vuc1tpXS5sZXZlbCA9PT0gbGV2ZWwgJiYgc3RhdGUudG9rZW5zW2ldLnR5cGUgPT09ICdwYXJhZ3JhcGhfb3BlbicpIHtcbiAgICAgIHN0YXRlLnRva2Vuc1tpICsgMl0udGlnaHQgPSB0cnVlO1xuICAgICAgc3RhdGUudG9rZW5zW2ldLnRpZ2h0ID0gdHJ1ZTtcbiAgICAgIGkgKz0gMjtcbiAgICB9XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBkZWZsaXN0KHN0YXRlLCBzdGFydExpbmUsIGVuZExpbmUsIHNpbGVudCkge1xuICB2YXIgY29udGVudFN0YXJ0LFxuICAgICAgZGRMaW5lLFxuICAgICAgZHRMaW5lLFxuICAgICAgaXRlbUxpbmVzLFxuICAgICAgbGlzdExpbmVzLFxuICAgICAgbGlzdFRva0lkeCxcbiAgICAgIG5leHRMaW5lLFxuICAgICAgb2xkSW5kZW50LFxuICAgICAgb2xkRERJbmRlbnQsXG4gICAgICBvbGRQYXJlbnRUeXBlLFxuICAgICAgb2xkVFNoaWZ0LFxuICAgICAgb2xkVGlnaHQsXG4gICAgICBwcmV2RW1wdHlFbmQsXG4gICAgICB0aWdodDtcblxuICBpZiAoc2lsZW50KSB7XG4gICAgLy8gcXVpcms6IHZhbGlkYXRpb24gbW9kZSB2YWxpZGF0ZXMgYSBkZCBibG9jayBvbmx5LCBub3QgYSB3aG9sZSBkZWZsaXN0XG4gICAgaWYgKHN0YXRlLmRkSW5kZW50IDwgMCkgeyByZXR1cm4gZmFsc2U7IH1cbiAgICByZXR1cm4gc2tpcE1hcmtlcihzdGF0ZSwgc3RhcnRMaW5lKSA+PSAwO1xuICB9XG5cbiAgbmV4dExpbmUgPSBzdGFydExpbmUgKyAxO1xuICBpZiAoc3RhdGUuaXNFbXB0eShuZXh0TGluZSkpIHtcbiAgICBpZiAoKytuZXh0TGluZSA+IGVuZExpbmUpIHsgcmV0dXJuIGZhbHNlOyB9XG4gIH1cblxuICBpZiAoc3RhdGUudFNoaWZ0W25leHRMaW5lXSA8IHN0YXRlLmJsa0luZGVudCkgeyByZXR1cm4gZmFsc2U7IH1cbiAgY29udGVudFN0YXJ0ID0gc2tpcE1hcmtlcihzdGF0ZSwgbmV4dExpbmUpO1xuICBpZiAoY29udGVudFN0YXJ0IDwgMCkgeyByZXR1cm4gZmFsc2U7IH1cblxuICBpZiAoc3RhdGUubGV2ZWwgPj0gc3RhdGUub3B0aW9ucy5tYXhOZXN0aW5nKSB7IHJldHVybiBmYWxzZTsgfVxuXG4gIC8vIFN0YXJ0IGxpc3RcbiAgbGlzdFRva0lkeCA9IHN0YXRlLnRva2Vucy5sZW5ndGg7XG5cbiAgc3RhdGUudG9rZW5zLnB1c2goe1xuICAgIHR5cGU6ICdkbF9vcGVuJyxcbiAgICBsaW5lczogbGlzdExpbmVzID0gWyBzdGFydExpbmUsIDAgXSxcbiAgICBsZXZlbDogc3RhdGUubGV2ZWwrK1xuICB9KTtcblxuICAvL1xuICAvLyBJdGVyYXRlIGxpc3QgaXRlbXNcbiAgLy9cblxuICBkdExpbmUgPSBzdGFydExpbmU7XG4gIGRkTGluZSA9IG5leHRMaW5lO1xuXG4gIC8vIE9uZSBkZWZpbml0aW9uIGxpc3QgY2FuIGNvbnRhaW4gbXVsdGlwbGUgRFRzLFxuICAvLyBhbmQgb25lIERUIGNhbiBiZSBmb2xsb3dlZCBieSBtdWx0aXBsZSBERHMuXG4gIC8vXG4gIC8vIFRodXMsIHRoZXJlIGlzIHR3byBsb29wcyBoZXJlLCBhbmQgbGFiZWwgaXNcbiAgLy8gbmVlZGVkIHRvIGJyZWFrIG91dCBvZiB0aGUgc2Vjb25kIG9uZVxuICAvL1xuICAvKmVzbGludCBuby1sYWJlbHM6MCxibG9jay1zY29wZWQtdmFyOjAqL1xuICBPVVRFUjpcbiAgZm9yICg7Oykge1xuICAgIHRpZ2h0ID0gdHJ1ZTtcbiAgICBwcmV2RW1wdHlFbmQgPSBmYWxzZTtcblxuICAgIHN0YXRlLnRva2Vucy5wdXNoKHtcbiAgICAgIHR5cGU6ICdkdF9vcGVuJyxcbiAgICAgIGxpbmVzOiBbIGR0TGluZSwgZHRMaW5lIF0sXG4gICAgICBsZXZlbDogc3RhdGUubGV2ZWwrK1xuICAgIH0pO1xuICAgIHN0YXRlLnRva2Vucy5wdXNoKHtcbiAgICAgIHR5cGU6ICdpbmxpbmUnLFxuICAgICAgY29udGVudDogc3RhdGUuZ2V0TGluZXMoZHRMaW5lLCBkdExpbmUgKyAxLCBzdGF0ZS5ibGtJbmRlbnQsIGZhbHNlKS50cmltKCksXG4gICAgICBsZXZlbDogc3RhdGUubGV2ZWwgKyAxLFxuICAgICAgbGluZXM6IFsgZHRMaW5lLCBkdExpbmUgXSxcbiAgICAgIGNoaWxkcmVuOiBbXVxuICAgIH0pO1xuICAgIHN0YXRlLnRva2Vucy5wdXNoKHtcbiAgICAgIHR5cGU6ICdkdF9jbG9zZScsXG4gICAgICBsZXZlbDogLS1zdGF0ZS5sZXZlbFxuICAgIH0pO1xuXG4gICAgZm9yICg7Oykge1xuICAgICAgc3RhdGUudG9rZW5zLnB1c2goe1xuICAgICAgICB0eXBlOiAnZGRfb3BlbicsXG4gICAgICAgIGxpbmVzOiBpdGVtTGluZXMgPSBbIG5leHRMaW5lLCAwIF0sXG4gICAgICAgIGxldmVsOiBzdGF0ZS5sZXZlbCsrXG4gICAgICB9KTtcblxuICAgICAgb2xkVGlnaHQgPSBzdGF0ZS50aWdodDtcbiAgICAgIG9sZERESW5kZW50ID0gc3RhdGUuZGRJbmRlbnQ7XG4gICAgICBvbGRJbmRlbnQgPSBzdGF0ZS5ibGtJbmRlbnQ7XG4gICAgICBvbGRUU2hpZnQgPSBzdGF0ZS50U2hpZnRbZGRMaW5lXTtcbiAgICAgIG9sZFBhcmVudFR5cGUgPSBzdGF0ZS5wYXJlbnRUeXBlO1xuICAgICAgc3RhdGUuYmxrSW5kZW50ID0gc3RhdGUuZGRJbmRlbnQgPSBzdGF0ZS50U2hpZnRbZGRMaW5lXSArIDI7XG4gICAgICBzdGF0ZS50U2hpZnRbZGRMaW5lXSA9IGNvbnRlbnRTdGFydCAtIHN0YXRlLmJNYXJrc1tkZExpbmVdO1xuICAgICAgc3RhdGUudGlnaHQgPSB0cnVlO1xuICAgICAgc3RhdGUucGFyZW50VHlwZSA9ICdkZWZsaXN0JztcblxuICAgICAgc3RhdGUucGFyc2VyLnRva2VuaXplKHN0YXRlLCBkZExpbmUsIGVuZExpbmUsIHRydWUpO1xuXG4gICAgICAvLyBJZiBhbnkgb2YgbGlzdCBpdGVtIGlzIHRpZ2h0LCBtYXJrIGxpc3QgYXMgdGlnaHRcbiAgICAgIGlmICghc3RhdGUudGlnaHQgfHwgcHJldkVtcHR5RW5kKSB7XG4gICAgICAgIHRpZ2h0ID0gZmFsc2U7XG4gICAgICB9XG4gICAgICAvLyBJdGVtIGJlY29tZSBsb29zZSBpZiBmaW5pc2ggd2l0aCBlbXB0eSBsaW5lLFxuICAgICAgLy8gYnV0IHdlIHNob3VsZCBmaWx0ZXIgbGFzdCBlbGVtZW50LCBiZWNhdXNlIGl0IG1lYW5zIGxpc3QgZmluaXNoXG4gICAgICBwcmV2RW1wdHlFbmQgPSAoc3RhdGUubGluZSAtIGRkTGluZSkgPiAxICYmIHN0YXRlLmlzRW1wdHkoc3RhdGUubGluZSAtIDEpO1xuXG4gICAgICBzdGF0ZS50U2hpZnRbZGRMaW5lXSA9IG9sZFRTaGlmdDtcbiAgICAgIHN0YXRlLnRpZ2h0ID0gb2xkVGlnaHQ7XG4gICAgICBzdGF0ZS5wYXJlbnRUeXBlID0gb2xkUGFyZW50VHlwZTtcbiAgICAgIHN0YXRlLmJsa0luZGVudCA9IG9sZEluZGVudDtcbiAgICAgIHN0YXRlLmRkSW5kZW50ID0gb2xkRERJbmRlbnQ7XG5cbiAgICAgIHN0YXRlLnRva2Vucy5wdXNoKHtcbiAgICAgICAgdHlwZTogJ2RkX2Nsb3NlJyxcbiAgICAgICAgbGV2ZWw6IC0tc3RhdGUubGV2ZWxcbiAgICAgIH0pO1xuXG4gICAgICBpdGVtTGluZXNbMV0gPSBuZXh0TGluZSA9IHN0YXRlLmxpbmU7XG5cbiAgICAgIGlmIChuZXh0TGluZSA+PSBlbmRMaW5lKSB7IGJyZWFrIE9VVEVSOyB9XG5cbiAgICAgIGlmIChzdGF0ZS50U2hpZnRbbmV4dExpbmVdIDwgc3RhdGUuYmxrSW5kZW50KSB7IGJyZWFrIE9VVEVSOyB9XG4gICAgICBjb250ZW50U3RhcnQgPSBza2lwTWFya2VyKHN0YXRlLCBuZXh0TGluZSk7XG4gICAgICBpZiAoY29udGVudFN0YXJ0IDwgMCkgeyBicmVhazsgfVxuXG4gICAgICBkZExpbmUgPSBuZXh0TGluZTtcblxuICAgICAgLy8gZ28gdG8gdGhlIG5leHQgbG9vcCBpdGVyYXRpb246XG4gICAgICAvLyBpbnNlcnQgREQgdGFnIGFuZCByZXBlYXQgY2hlY2tpbmdcbiAgICB9XG5cbiAgICBpZiAobmV4dExpbmUgPj0gZW5kTGluZSkgeyBicmVhazsgfVxuICAgIGR0TGluZSA9IG5leHRMaW5lO1xuXG4gICAgaWYgKHN0YXRlLmlzRW1wdHkoZHRMaW5lKSkgeyBicmVhazsgfVxuICAgIGlmIChzdGF0ZS50U2hpZnRbZHRMaW5lXSA8IHN0YXRlLmJsa0luZGVudCkgeyBicmVhazsgfVxuXG4gICAgZGRMaW5lID0gZHRMaW5lICsgMTtcbiAgICBpZiAoZGRMaW5lID49IGVuZExpbmUpIHsgYnJlYWs7IH1cbiAgICBpZiAoc3RhdGUuaXNFbXB0eShkZExpbmUpKSB7IGRkTGluZSsrOyB9XG4gICAgaWYgKGRkTGluZSA+PSBlbmRMaW5lKSB7IGJyZWFrOyB9XG5cbiAgICBpZiAoc3RhdGUudFNoaWZ0W2RkTGluZV0gPCBzdGF0ZS5ibGtJbmRlbnQpIHsgYnJlYWs7IH1cbiAgICBjb250ZW50U3RhcnQgPSBza2lwTWFya2VyKHN0YXRlLCBkZExpbmUpO1xuICAgIGlmIChjb250ZW50U3RhcnQgPCAwKSB7IGJyZWFrOyB9XG5cbiAgICAvLyBnbyB0byB0aGUgbmV4dCBsb29wIGl0ZXJhdGlvbjpcbiAgICAvLyBpbnNlcnQgRFQgYW5kIEREIHRhZ3MgYW5kIHJlcGVhdCBjaGVja2luZ1xuICB9XG5cbiAgLy8gRmluaWxpemUgbGlzdFxuICBzdGF0ZS50b2tlbnMucHVzaCh7XG4gICAgdHlwZTogJ2RsX2Nsb3NlJyxcbiAgICBsZXZlbDogLS1zdGF0ZS5sZXZlbFxuICB9KTtcbiAgbGlzdExpbmVzWzFdID0gbmV4dExpbmU7XG5cbiAgc3RhdGUubGluZSA9IG5leHRMaW5lO1xuXG4gIC8vIG1hcmsgcGFyYWdyYXBocyB0aWdodCBpZiBuZWVkZWRcbiAgaWYgKHRpZ2h0KSB7XG4gICAgbWFya1RpZ2h0UGFyYWdyYXBocyhzdGF0ZSwgbGlzdFRva0lkeCk7XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn07XG4iLCIvLyBmZW5jZXMgKGBgYCBsYW5nLCB+fn4gbGFuZylcblxuJ3VzZSBzdHJpY3QnO1xuXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZmVuY2VzKHN0YXRlLCBzdGFydExpbmUsIGVuZExpbmUsIHNpbGVudCkge1xuICB2YXIgbWFya2VyLCBsZW4sIHBhcmFtcywgbmV4dExpbmUsIG1lbSxcbiAgICAgIGhhdmVFbmRNYXJrZXIgPSBmYWxzZSxcbiAgICAgIHBvcyA9IHN0YXRlLmJNYXJrc1tzdGFydExpbmVdICsgc3RhdGUudFNoaWZ0W3N0YXJ0TGluZV0sXG4gICAgICBtYXggPSBzdGF0ZS5lTWFya3Nbc3RhcnRMaW5lXTtcblxuICBpZiAocG9zICsgMyA+IG1heCkgeyByZXR1cm4gZmFsc2U7IH1cblxuICBtYXJrZXIgPSBzdGF0ZS5zcmMuY2hhckNvZGVBdChwb3MpO1xuXG4gIGlmIChtYXJrZXIgIT09IDB4N0UvKiB+ICovICYmIG1hcmtlciAhPT0gMHg2MCAvKiBgICovKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLy8gc2NhbiBtYXJrZXIgbGVuZ3RoXG4gIG1lbSA9IHBvcztcbiAgcG9zID0gc3RhdGUuc2tpcENoYXJzKHBvcywgbWFya2VyKTtcblxuICBsZW4gPSBwb3MgLSBtZW07XG5cbiAgaWYgKGxlbiA8IDMpIHsgcmV0dXJuIGZhbHNlOyB9XG5cbiAgcGFyYW1zID0gc3RhdGUuc3JjLnNsaWNlKHBvcywgbWF4KS50cmltKCk7XG5cbiAgaWYgKHBhcmFtcy5pbmRleE9mKCdgJykgPj0gMCkgeyByZXR1cm4gZmFsc2U7IH1cblxuICAvLyBTaW5jZSBzdGFydCBpcyBmb3VuZCwgd2UgY2FuIHJlcG9ydCBzdWNjZXNzIGhlcmUgaW4gdmFsaWRhdGlvbiBtb2RlXG4gIGlmIChzaWxlbnQpIHsgcmV0dXJuIHRydWU7IH1cblxuICAvLyBzZWFyY2ggZW5kIG9mIGJsb2NrXG4gIG5leHRMaW5lID0gc3RhcnRMaW5lO1xuXG4gIGZvciAoOzspIHtcbiAgICBuZXh0TGluZSsrO1xuICAgIGlmIChuZXh0TGluZSA+PSBlbmRMaW5lKSB7XG4gICAgICAvLyB1bmNsb3NlZCBibG9jayBzaG91bGQgYmUgYXV0b2Nsb3NlZCBieSBlbmQgb2YgZG9jdW1lbnQuXG4gICAgICAvLyBhbHNvIGJsb2NrIHNlZW1zIHRvIGJlIGF1dG9jbG9zZWQgYnkgZW5kIG9mIHBhcmVudFxuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgcG9zID0gbWVtID0gc3RhdGUuYk1hcmtzW25leHRMaW5lXSArIHN0YXRlLnRTaGlmdFtuZXh0TGluZV07XG4gICAgbWF4ID0gc3RhdGUuZU1hcmtzW25leHRMaW5lXTtcblxuICAgIGlmIChwb3MgPCBtYXggJiYgc3RhdGUudFNoaWZ0W25leHRMaW5lXSA8IHN0YXRlLmJsa0luZGVudCkge1xuICAgICAgLy8gbm9uLWVtcHR5IGxpbmUgd2l0aCBuZWdhdGl2ZSBpbmRlbnQgc2hvdWxkIHN0b3AgdGhlIGxpc3Q6XG4gICAgICAvLyAtIGBgYFxuICAgICAgLy8gIHRlc3RcbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGlmIChzdGF0ZS5zcmMuY2hhckNvZGVBdChwb3MpICE9PSBtYXJrZXIpIHsgY29udGludWU7IH1cblxuICAgIGlmIChzdGF0ZS50U2hpZnRbbmV4dExpbmVdIC0gc3RhdGUuYmxrSW5kZW50ID49IDQpIHtcbiAgICAgIC8vIGNsb3NpbmcgZmVuY2Ugc2hvdWxkIGJlIGluZGVudGVkIGxlc3MgdGhhbiA0IHNwYWNlc1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgcG9zID0gc3RhdGUuc2tpcENoYXJzKHBvcywgbWFya2VyKTtcblxuICAgIC8vIGNsb3NpbmcgY29kZSBmZW5jZSBtdXN0IGJlIGF0IGxlYXN0IGFzIGxvbmcgYXMgdGhlIG9wZW5pbmcgb25lXG4gICAgaWYgKHBvcyAtIG1lbSA8IGxlbikgeyBjb250aW51ZTsgfVxuXG4gICAgLy8gbWFrZSBzdXJlIHRhaWwgaGFzIHNwYWNlcyBvbmx5XG4gICAgcG9zID0gc3RhdGUuc2tpcFNwYWNlcyhwb3MpO1xuXG4gICAgaWYgKHBvcyA8IG1heCkgeyBjb250aW51ZTsgfVxuXG4gICAgaGF2ZUVuZE1hcmtlciA9IHRydWU7XG4gICAgLy8gZm91bmQhXG4gICAgYnJlYWs7XG4gIH1cblxuICAvLyBJZiBhIGZlbmNlIGhhcyBoZWFkaW5nIHNwYWNlcywgdGhleSBzaG91bGQgYmUgcmVtb3ZlZCBmcm9tIGl0cyBpbm5lciBibG9ja1xuICBsZW4gPSBzdGF0ZS50U2hpZnRbc3RhcnRMaW5lXTtcblxuICBzdGF0ZS5saW5lID0gbmV4dExpbmUgKyAoaGF2ZUVuZE1hcmtlciA/IDEgOiAwKTtcbiAgc3RhdGUudG9rZW5zLnB1c2goe1xuICAgIHR5cGU6ICdmZW5jZScsXG4gICAgcGFyYW1zOiBwYXJhbXMsXG4gICAgY29udGVudDogc3RhdGUuZ2V0TGluZXMoc3RhcnRMaW5lICsgMSwgbmV4dExpbmUsIGxlbiwgdHJ1ZSksXG4gICAgbGluZXM6IFsgc3RhcnRMaW5lLCBzdGF0ZS5saW5lIF0sXG4gICAgbGV2ZWw6IHN0YXRlLmxldmVsXG4gIH0pO1xuXG4gIHJldHVybiB0cnVlO1xufTtcbiIsIi8vIFByb2Nlc3MgZm9vdG5vdGUgcmVmZXJlbmNlIGxpc3RcblxuJ3VzZSBzdHJpY3QnO1xuXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZm9vdG5vdGUoc3RhdGUsIHN0YXJ0TGluZSwgZW5kTGluZSwgc2lsZW50KSB7XG4gIHZhciBvbGRCTWFyaywgb2xkVFNoaWZ0LCBvbGRQYXJlbnRUeXBlLCBwb3MsIGxhYmVsLFxuICAgICAgc3RhcnQgPSBzdGF0ZS5iTWFya3Nbc3RhcnRMaW5lXSArIHN0YXRlLnRTaGlmdFtzdGFydExpbmVdLFxuICAgICAgbWF4ID0gc3RhdGUuZU1hcmtzW3N0YXJ0TGluZV07XG5cbiAgLy8gbGluZSBzaG91bGQgYmUgYXQgbGVhc3QgNSBjaGFycyAtIFwiW154XTpcIlxuICBpZiAoc3RhcnQgKyA0ID4gbWF4KSB7IHJldHVybiBmYWxzZTsgfVxuXG4gIGlmIChzdGF0ZS5zcmMuY2hhckNvZGVBdChzdGFydCkgIT09IDB4NUIvKiBbICovKSB7IHJldHVybiBmYWxzZTsgfVxuICBpZiAoc3RhdGUuc3JjLmNoYXJDb2RlQXQoc3RhcnQgKyAxKSAhPT0gMHg1RS8qIF4gKi8pIHsgcmV0dXJuIGZhbHNlOyB9XG4gIGlmIChzdGF0ZS5sZXZlbCA+PSBzdGF0ZS5vcHRpb25zLm1heE5lc3RpbmcpIHsgcmV0dXJuIGZhbHNlOyB9XG5cbiAgZm9yIChwb3MgPSBzdGFydCArIDI7IHBvcyA8IG1heDsgcG9zKyspIHtcbiAgICBpZiAoc3RhdGUuc3JjLmNoYXJDb2RlQXQocG9zKSA9PT0gMHgyMCkgeyByZXR1cm4gZmFsc2U7IH1cbiAgICBpZiAoc3RhdGUuc3JjLmNoYXJDb2RlQXQocG9zKSA9PT0gMHg1RCAvKiBdICovKSB7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICBpZiAocG9zID09PSBzdGFydCArIDIpIHsgcmV0dXJuIGZhbHNlOyB9IC8vIG5vIGVtcHR5IGZvb3Rub3RlIGxhYmVsc1xuICBpZiAocG9zICsgMSA+PSBtYXggfHwgc3RhdGUuc3JjLmNoYXJDb2RlQXQoKytwb3MpICE9PSAweDNBIC8qIDogKi8pIHsgcmV0dXJuIGZhbHNlOyB9XG4gIGlmIChzaWxlbnQpIHsgcmV0dXJuIHRydWU7IH1cbiAgcG9zKys7XG5cbiAgaWYgKCFzdGF0ZS5lbnYuZm9vdG5vdGVzKSB7IHN0YXRlLmVudi5mb290bm90ZXMgPSB7fTsgfVxuICBpZiAoIXN0YXRlLmVudi5mb290bm90ZXMucmVmcykgeyBzdGF0ZS5lbnYuZm9vdG5vdGVzLnJlZnMgPSB7fTsgfVxuICBsYWJlbCA9IHN0YXRlLnNyYy5zbGljZShzdGFydCArIDIsIHBvcyAtIDIpO1xuICBzdGF0ZS5lbnYuZm9vdG5vdGVzLnJlZnNbJzonICsgbGFiZWxdID0gLTE7XG5cbiAgc3RhdGUudG9rZW5zLnB1c2goe1xuICAgIHR5cGU6ICdmb290bm90ZV9yZWZlcmVuY2Vfb3BlbicsXG4gICAgbGFiZWw6IGxhYmVsLFxuICAgIGxldmVsOiBzdGF0ZS5sZXZlbCsrXG4gIH0pO1xuXG4gIG9sZEJNYXJrID0gc3RhdGUuYk1hcmtzW3N0YXJ0TGluZV07XG4gIG9sZFRTaGlmdCA9IHN0YXRlLnRTaGlmdFtzdGFydExpbmVdO1xuICBvbGRQYXJlbnRUeXBlID0gc3RhdGUucGFyZW50VHlwZTtcbiAgc3RhdGUudFNoaWZ0W3N0YXJ0TGluZV0gPSBzdGF0ZS5za2lwU3BhY2VzKHBvcykgLSBwb3M7XG4gIHN0YXRlLmJNYXJrc1tzdGFydExpbmVdID0gcG9zO1xuICBzdGF0ZS5ibGtJbmRlbnQgKz0gNDtcbiAgc3RhdGUucGFyZW50VHlwZSA9ICdmb290bm90ZSc7XG5cbiAgaWYgKHN0YXRlLnRTaGlmdFtzdGFydExpbmVdIDwgc3RhdGUuYmxrSW5kZW50KSB7XG4gICAgc3RhdGUudFNoaWZ0W3N0YXJ0TGluZV0gKz0gc3RhdGUuYmxrSW5kZW50O1xuICAgIHN0YXRlLmJNYXJrc1tzdGFydExpbmVdIC09IHN0YXRlLmJsa0luZGVudDtcbiAgfVxuXG4gIHN0YXRlLnBhcnNlci50b2tlbml6ZShzdGF0ZSwgc3RhcnRMaW5lLCBlbmRMaW5lLCB0cnVlKTtcblxuICBzdGF0ZS5wYXJlbnRUeXBlID0gb2xkUGFyZW50VHlwZTtcbiAgc3RhdGUuYmxrSW5kZW50IC09IDQ7XG4gIHN0YXRlLnRTaGlmdFtzdGFydExpbmVdID0gb2xkVFNoaWZ0O1xuICBzdGF0ZS5iTWFya3Nbc3RhcnRMaW5lXSA9IG9sZEJNYXJrO1xuXG4gIHN0YXRlLnRva2Vucy5wdXNoKHtcbiAgICB0eXBlOiAnZm9vdG5vdGVfcmVmZXJlbmNlX2Nsb3NlJyxcbiAgICBsZXZlbDogLS1zdGF0ZS5sZXZlbFxuICB9KTtcblxuICByZXR1cm4gdHJ1ZTtcbn07XG4iLCIvLyBoZWFkaW5nICgjLCAjIywgLi4uKVxuXG4ndXNlIHN0cmljdCc7XG5cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBoZWFkaW5nKHN0YXRlLCBzdGFydExpbmUsIGVuZExpbmUsIHNpbGVudCkge1xuICB2YXIgY2gsIGxldmVsLCB0bXAsXG4gICAgICBwb3MgPSBzdGF0ZS5iTWFya3Nbc3RhcnRMaW5lXSArIHN0YXRlLnRTaGlmdFtzdGFydExpbmVdLFxuICAgICAgbWF4ID0gc3RhdGUuZU1hcmtzW3N0YXJ0TGluZV07XG5cbiAgaWYgKHBvcyA+PSBtYXgpIHsgcmV0dXJuIGZhbHNlOyB9XG5cbiAgY2ggID0gc3RhdGUuc3JjLmNoYXJDb2RlQXQocG9zKTtcblxuICBpZiAoY2ggIT09IDB4MjMvKiAjICovIHx8IHBvcyA+PSBtYXgpIHsgcmV0dXJuIGZhbHNlOyB9XG5cbiAgLy8gY291bnQgaGVhZGluZyBsZXZlbFxuICBsZXZlbCA9IDE7XG4gIGNoID0gc3RhdGUuc3JjLmNoYXJDb2RlQXQoKytwb3MpO1xuICB3aGlsZSAoY2ggPT09IDB4MjMvKiAjICovICYmIHBvcyA8IG1heCAmJiBsZXZlbCA8PSA2KSB7XG4gICAgbGV2ZWwrKztcbiAgICBjaCA9IHN0YXRlLnNyYy5jaGFyQ29kZUF0KCsrcG9zKTtcbiAgfVxuXG4gIGlmIChsZXZlbCA+IDYgfHwgKHBvcyA8IG1heCAmJiBjaCAhPT0gMHgyMC8qIHNwYWNlICovKSkgeyByZXR1cm4gZmFsc2U7IH1cblxuICBpZiAoc2lsZW50KSB7IHJldHVybiB0cnVlOyB9XG5cbiAgLy8gTGV0J3MgY3V0IHRhaWxzIGxpa2UgJyAgICAjIyMgICcgZnJvbSB0aGUgZW5kIG9mIHN0cmluZ1xuXG4gIG1heCA9IHN0YXRlLnNraXBDaGFyc0JhY2sobWF4LCAweDIwLCBwb3MpOyAvLyBzcGFjZVxuICB0bXAgPSBzdGF0ZS5za2lwQ2hhcnNCYWNrKG1heCwgMHgyMywgcG9zKTsgLy8gI1xuICBpZiAodG1wID4gcG9zICYmIHN0YXRlLnNyYy5jaGFyQ29kZUF0KHRtcCAtIDEpID09PSAweDIwLyogc3BhY2UgKi8pIHtcbiAgICBtYXggPSB0bXA7XG4gIH1cblxuICBzdGF0ZS5saW5lID0gc3RhcnRMaW5lICsgMTtcblxuICBzdGF0ZS50b2tlbnMucHVzaCh7IHR5cGU6ICdoZWFkaW5nX29wZW4nLFxuICAgIGhMZXZlbDogbGV2ZWwsXG4gICAgbGluZXM6IFsgc3RhcnRMaW5lLCBzdGF0ZS5saW5lIF0sXG4gICAgbGV2ZWw6IHN0YXRlLmxldmVsXG4gIH0pO1xuXG4gIC8vIG9ubHkgaWYgaGVhZGVyIGlzIG5vdCBlbXB0eVxuICBpZiAocG9zIDwgbWF4KSB7XG4gICAgc3RhdGUudG9rZW5zLnB1c2goe1xuICAgICAgdHlwZTogJ2lubGluZScsXG4gICAgICBjb250ZW50OiBzdGF0ZS5zcmMuc2xpY2UocG9zLCBtYXgpLnRyaW0oKSxcbiAgICAgIGxldmVsOiBzdGF0ZS5sZXZlbCArIDEsXG4gICAgICBsaW5lczogWyBzdGFydExpbmUsIHN0YXRlLmxpbmUgXSxcbiAgICAgIGNoaWxkcmVuOiBbXVxuICAgIH0pO1xuICB9XG4gIHN0YXRlLnRva2Vucy5wdXNoKHsgdHlwZTogJ2hlYWRpbmdfY2xvc2UnLCBoTGV2ZWw6IGxldmVsLCBsZXZlbDogc3RhdGUubGV2ZWwgfSk7XG5cbiAgcmV0dXJuIHRydWU7XG59O1xuIiwiLy8gSG9yaXpvbnRhbCBydWxlXG5cbid1c2Ugc3RyaWN0JztcblxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGhyKHN0YXRlLCBzdGFydExpbmUsIGVuZExpbmUsIHNpbGVudCkge1xuICB2YXIgbWFya2VyLCBjbnQsIGNoLFxuICAgICAgcG9zID0gc3RhdGUuYk1hcmtzW3N0YXJ0TGluZV0sXG4gICAgICBtYXggPSBzdGF0ZS5lTWFya3Nbc3RhcnRMaW5lXTtcblxuICBwb3MgKz0gc3RhdGUudFNoaWZ0W3N0YXJ0TGluZV07XG5cbiAgaWYgKHBvcyA+IG1heCkgeyByZXR1cm4gZmFsc2U7IH1cblxuICBtYXJrZXIgPSBzdGF0ZS5zcmMuY2hhckNvZGVBdChwb3MrKyk7XG5cbiAgLy8gQ2hlY2sgaHIgbWFya2VyXG4gIGlmIChtYXJrZXIgIT09IDB4MkEvKiAqICovICYmXG4gICAgICBtYXJrZXIgIT09IDB4MkQvKiAtICovICYmXG4gICAgICBtYXJrZXIgIT09IDB4NUYvKiBfICovKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLy8gbWFya2VycyBjYW4gYmUgbWl4ZWQgd2l0aCBzcGFjZXMsIGJ1dCB0aGVyZSBzaG91bGQgYmUgYXQgbGVhc3QgMyBvbmVcblxuICBjbnQgPSAxO1xuICB3aGlsZSAocG9zIDwgbWF4KSB7XG4gICAgY2ggPSBzdGF0ZS5zcmMuY2hhckNvZGVBdChwb3MrKyk7XG4gICAgaWYgKGNoICE9PSBtYXJrZXIgJiYgY2ggIT09IDB4MjAvKiBzcGFjZSAqLykgeyByZXR1cm4gZmFsc2U7IH1cbiAgICBpZiAoY2ggPT09IG1hcmtlcikgeyBjbnQrKzsgfVxuICB9XG5cbiAgaWYgKGNudCA8IDMpIHsgcmV0dXJuIGZhbHNlOyB9XG5cbiAgaWYgKHNpbGVudCkgeyByZXR1cm4gdHJ1ZTsgfVxuXG4gIHN0YXRlLmxpbmUgPSBzdGFydExpbmUgKyAxO1xuICBzdGF0ZS50b2tlbnMucHVzaCh7XG4gICAgdHlwZTogJ2hyJyxcbiAgICBsaW5lczogWyBzdGFydExpbmUsIHN0YXRlLmxpbmUgXSxcbiAgICBsZXZlbDogc3RhdGUubGV2ZWxcbiAgfSk7XG5cbiAgcmV0dXJuIHRydWU7XG59O1xuIiwiLy8gSFRNTCBibG9ja1xuXG4ndXNlIHN0cmljdCc7XG5cblxudmFyIGJsb2NrX25hbWVzID0gcmVxdWlyZSgnLi4vY29tbW9uL2h0bWxfYmxvY2tzJyk7XG5cblxudmFyIEhUTUxfVEFHX09QRU5fUkUgPSAvXjwoW2EtekEtWl17MSwxNX0pW1xcc1xcLz5dLztcbnZhciBIVE1MX1RBR19DTE9TRV9SRSA9IC9ePFxcLyhbYS16QS1aXXsxLDE1fSlbXFxzPl0vO1xuXG5mdW5jdGlvbiBpc0xldHRlcihjaCkge1xuICAvKmVzbGludCBuby1iaXR3aXNlOjAqL1xuICB2YXIgbGMgPSBjaCB8IDB4MjA7IC8vIHRvIGxvd2VyIGNhc2VcbiAgcmV0dXJuIChsYyA+PSAweDYxLyogYSAqLykgJiYgKGxjIDw9IDB4N2EvKiB6ICovKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBodG1sYmxvY2soc3RhdGUsIHN0YXJ0TGluZSwgZW5kTGluZSwgc2lsZW50KSB7XG4gIHZhciBjaCwgbWF0Y2gsIG5leHRMaW5lLFxuICAgICAgcG9zID0gc3RhdGUuYk1hcmtzW3N0YXJ0TGluZV0sXG4gICAgICBtYXggPSBzdGF0ZS5lTWFya3Nbc3RhcnRMaW5lXSxcbiAgICAgIHNoaWZ0ID0gc3RhdGUudFNoaWZ0W3N0YXJ0TGluZV07XG5cbiAgcG9zICs9IHNoaWZ0O1xuXG4gIGlmICghc3RhdGUub3B0aW9ucy5odG1sKSB7IHJldHVybiBmYWxzZTsgfVxuXG4gIGlmIChzaGlmdCA+IDMgfHwgcG9zICsgMiA+PSBtYXgpIHsgcmV0dXJuIGZhbHNlOyB9XG5cbiAgaWYgKHN0YXRlLnNyYy5jaGFyQ29kZUF0KHBvcykgIT09IDB4M0MvKiA8ICovKSB7IHJldHVybiBmYWxzZTsgfVxuXG4gIGNoID0gc3RhdGUuc3JjLmNoYXJDb2RlQXQocG9zICsgMSk7XG5cbiAgaWYgKGNoID09PSAweDIxLyogISAqLyB8fCBjaCA9PT0gMHgzRi8qID8gKi8pIHtcbiAgICAvLyBEaXJlY3RpdmUgc3RhcnQgLyBjb21tZW50IHN0YXJ0IC8gcHJvY2Vzc2luZyBpbnN0cnVjdGlvbiBzdGFydFxuICAgIGlmIChzaWxlbnQpIHsgcmV0dXJuIHRydWU7IH1cblxuICB9IGVsc2UgaWYgKGNoID09PSAweDJGLyogLyAqLyB8fCBpc0xldHRlcihjaCkpIHtcblxuICAgIC8vIFByb2JhYmx5IHN0YXJ0IG9yIGVuZCBvZiB0YWdcbiAgICBpZiAoY2ggPT09IDB4MkYvKiBcXCAqLykge1xuICAgICAgLy8gY2xvc2luZyB0YWdcbiAgICAgIG1hdGNoID0gc3RhdGUuc3JjLnNsaWNlKHBvcywgbWF4KS5tYXRjaChIVE1MX1RBR19DTE9TRV9SRSk7XG4gICAgICBpZiAoIW1hdGNoKSB7IHJldHVybiBmYWxzZTsgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBvcGVuaW5nIHRhZ1xuICAgICAgbWF0Y2ggPSBzdGF0ZS5zcmMuc2xpY2UocG9zLCBtYXgpLm1hdGNoKEhUTUxfVEFHX09QRU5fUkUpO1xuICAgICAgaWYgKCFtYXRjaCkgeyByZXR1cm4gZmFsc2U7IH1cbiAgICB9XG4gICAgLy8gTWFrZSBzdXJlIHRhZyBuYW1lIGlzIHZhbGlkXG4gICAgaWYgKGJsb2NrX25hbWVzW21hdGNoWzFdLnRvTG93ZXJDYXNlKCldICE9PSB0cnVlKSB7IHJldHVybiBmYWxzZTsgfVxuICAgIGlmIChzaWxlbnQpIHsgcmV0dXJuIHRydWU7IH1cblxuICB9IGVsc2Uge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8vIElmIHdlIGFyZSBoZXJlIC0gd2UgZGV0ZWN0ZWQgSFRNTCBibG9jay5cbiAgLy8gTGV0J3Mgcm9sbCBkb3duIHRpbGwgZW1wdHkgbGluZSAoYmxvY2sgZW5kKS5cbiAgbmV4dExpbmUgPSBzdGFydExpbmUgKyAxO1xuICB3aGlsZSAobmV4dExpbmUgPCBzdGF0ZS5saW5lTWF4ICYmICFzdGF0ZS5pc0VtcHR5KG5leHRMaW5lKSkge1xuICAgIG5leHRMaW5lKys7XG4gIH1cblxuICBzdGF0ZS5saW5lID0gbmV4dExpbmU7XG4gIHN0YXRlLnRva2Vucy5wdXNoKHtcbiAgICB0eXBlOiAnaHRtbGJsb2NrJyxcbiAgICBsZXZlbDogc3RhdGUubGV2ZWwsXG4gICAgbGluZXM6IFsgc3RhcnRMaW5lLCBzdGF0ZS5saW5lIF0sXG4gICAgY29udGVudDogc3RhdGUuZ2V0TGluZXMoc3RhcnRMaW5lLCBuZXh0TGluZSwgMCwgdHJ1ZSlcbiAgfSk7XG5cbiAgcmV0dXJuIHRydWU7XG59O1xuIiwiLy8gbGhlYWRpbmcgKC0tLSwgPT09KVxuXG4ndXNlIHN0cmljdCc7XG5cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBsaGVhZGluZyhzdGF0ZSwgc3RhcnRMaW5lLCBlbmRMaW5lLyosIHNpbGVudCovKSB7XG4gIHZhciBtYXJrZXIsIHBvcywgbWF4LFxuICAgICAgbmV4dCA9IHN0YXJ0TGluZSArIDE7XG5cbiAgaWYgKG5leHQgPj0gZW5kTGluZSkgeyByZXR1cm4gZmFsc2U7IH1cbiAgaWYgKHN0YXRlLnRTaGlmdFtuZXh0XSA8IHN0YXRlLmJsa0luZGVudCkgeyByZXR1cm4gZmFsc2U7IH1cblxuICAvLyBTY2FuIG5leHQgbGluZVxuXG4gIGlmIChzdGF0ZS50U2hpZnRbbmV4dF0gLSBzdGF0ZS5ibGtJbmRlbnQgPiAzKSB7IHJldHVybiBmYWxzZTsgfVxuXG4gIHBvcyA9IHN0YXRlLmJNYXJrc1tuZXh0XSArIHN0YXRlLnRTaGlmdFtuZXh0XTtcbiAgbWF4ID0gc3RhdGUuZU1hcmtzW25leHRdO1xuXG4gIGlmIChwb3MgPj0gbWF4KSB7IHJldHVybiBmYWxzZTsgfVxuXG4gIG1hcmtlciA9IHN0YXRlLnNyYy5jaGFyQ29kZUF0KHBvcyk7XG5cbiAgaWYgKG1hcmtlciAhPT0gMHgyRC8qIC0gKi8gJiYgbWFya2VyICE9PSAweDNELyogPSAqLykgeyByZXR1cm4gZmFsc2U7IH1cblxuICBwb3MgPSBzdGF0ZS5za2lwQ2hhcnMocG9zLCBtYXJrZXIpO1xuXG4gIHBvcyA9IHN0YXRlLnNraXBTcGFjZXMocG9zKTtcblxuICBpZiAocG9zIDwgbWF4KSB7IHJldHVybiBmYWxzZTsgfVxuXG4gIHBvcyA9IHN0YXRlLmJNYXJrc1tzdGFydExpbmVdICsgc3RhdGUudFNoaWZ0W3N0YXJ0TGluZV07XG5cbiAgc3RhdGUubGluZSA9IG5leHQgKyAxO1xuICBzdGF0ZS50b2tlbnMucHVzaCh7XG4gICAgdHlwZTogJ2hlYWRpbmdfb3BlbicsXG4gICAgaExldmVsOiBtYXJrZXIgPT09IDB4M0QvKiA9ICovID8gMSA6IDIsXG4gICAgbGluZXM6IFsgc3RhcnRMaW5lLCBzdGF0ZS5saW5lIF0sXG4gICAgbGV2ZWw6IHN0YXRlLmxldmVsXG4gIH0pO1xuICBzdGF0ZS50b2tlbnMucHVzaCh7XG4gICAgdHlwZTogJ2lubGluZScsXG4gICAgY29udGVudDogc3RhdGUuc3JjLnNsaWNlKHBvcywgc3RhdGUuZU1hcmtzW3N0YXJ0TGluZV0pLnRyaW0oKSxcbiAgICBsZXZlbDogc3RhdGUubGV2ZWwgKyAxLFxuICAgIGxpbmVzOiBbIHN0YXJ0TGluZSwgc3RhdGUubGluZSAtIDEgXSxcbiAgICBjaGlsZHJlbjogW11cbiAgfSk7XG4gIHN0YXRlLnRva2Vucy5wdXNoKHtcbiAgICB0eXBlOiAnaGVhZGluZ19jbG9zZScsXG4gICAgaExldmVsOiBtYXJrZXIgPT09IDB4M0QvKiA9ICovID8gMSA6IDIsXG4gICAgbGV2ZWw6IHN0YXRlLmxldmVsXG4gIH0pO1xuXG4gIHJldHVybiB0cnVlO1xufTtcbiIsIi8vIExpc3RzXG5cbid1c2Ugc3RyaWN0JztcblxuXG4vLyBTZWFyY2ggYFstKypdW1xcbiBdYCwgcmV0dXJucyBuZXh0IHBvcyBhcnRlciBtYXJrZXIgb24gc3VjY2Vzc1xuLy8gb3IgLTEgb24gZmFpbC5cbmZ1bmN0aW9uIHNraXBCdWxsZXRMaXN0TWFya2VyKHN0YXRlLCBzdGFydExpbmUpIHtcbiAgdmFyIG1hcmtlciwgcG9zLCBtYXg7XG5cbiAgcG9zID0gc3RhdGUuYk1hcmtzW3N0YXJ0TGluZV0gKyBzdGF0ZS50U2hpZnRbc3RhcnRMaW5lXTtcbiAgbWF4ID0gc3RhdGUuZU1hcmtzW3N0YXJ0TGluZV07XG5cbiAgaWYgKHBvcyA+PSBtYXgpIHsgcmV0dXJuIC0xOyB9XG5cbiAgbWFya2VyID0gc3RhdGUuc3JjLmNoYXJDb2RlQXQocG9zKyspO1xuICAvLyBDaGVjayBidWxsZXRcbiAgaWYgKG1hcmtlciAhPT0gMHgyQS8qICogKi8gJiZcbiAgICAgIG1hcmtlciAhPT0gMHgyRC8qIC0gKi8gJiZcbiAgICAgIG1hcmtlciAhPT0gMHgyQi8qICsgKi8pIHtcbiAgICByZXR1cm4gLTE7XG4gIH1cblxuICBpZiAocG9zIDwgbWF4ICYmIHN0YXRlLnNyYy5jaGFyQ29kZUF0KHBvcykgIT09IDB4MjApIHtcbiAgICAvLyBcIiAxLnRlc3QgXCIgLSBpcyBub3QgYSBsaXN0IGl0ZW1cbiAgICByZXR1cm4gLTE7XG4gIH1cblxuICByZXR1cm4gcG9zO1xufVxuXG4vLyBTZWFyY2ggYFxcZCtbLildW1xcbiBdYCwgcmV0dXJucyBuZXh0IHBvcyBhcnRlciBtYXJrZXIgb24gc3VjY2Vzc1xuLy8gb3IgLTEgb24gZmFpbC5cbmZ1bmN0aW9uIHNraXBPcmRlcmVkTGlzdE1hcmtlcihzdGF0ZSwgc3RhcnRMaW5lKSB7XG4gIHZhciBjaCxcbiAgICAgIHBvcyA9IHN0YXRlLmJNYXJrc1tzdGFydExpbmVdICsgc3RhdGUudFNoaWZ0W3N0YXJ0TGluZV0sXG4gICAgICBtYXggPSBzdGF0ZS5lTWFya3Nbc3RhcnRMaW5lXTtcblxuICBpZiAocG9zICsgMSA+PSBtYXgpIHsgcmV0dXJuIC0xOyB9XG5cbiAgY2ggPSBzdGF0ZS5zcmMuY2hhckNvZGVBdChwb3MrKyk7XG5cbiAgaWYgKGNoIDwgMHgzMC8qIDAgKi8gfHwgY2ggPiAweDM5LyogOSAqLykgeyByZXR1cm4gLTE7IH1cblxuICBmb3IgKDs7KSB7XG4gICAgLy8gRU9MIC0+IGZhaWxcbiAgICBpZiAocG9zID49IG1heCkgeyByZXR1cm4gLTE7IH1cblxuICAgIGNoID0gc3RhdGUuc3JjLmNoYXJDb2RlQXQocG9zKyspO1xuXG4gICAgaWYgKGNoID49IDB4MzAvKiAwICovICYmIGNoIDw9IDB4MzkvKiA5ICovKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICAvLyBmb3VuZCB2YWxpZCBtYXJrZXJcbiAgICBpZiAoY2ggPT09IDB4MjkvKiApICovIHx8IGNoID09PSAweDJlLyogLiAqLykge1xuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgcmV0dXJuIC0xO1xuICB9XG5cblxuICBpZiAocG9zIDwgbWF4ICYmIHN0YXRlLnNyYy5jaGFyQ29kZUF0KHBvcykgIT09IDB4MjAvKiBzcGFjZSAqLykge1xuICAgIC8vIFwiIDEudGVzdCBcIiAtIGlzIG5vdCBhIGxpc3QgaXRlbVxuICAgIHJldHVybiAtMTtcbiAgfVxuICByZXR1cm4gcG9zO1xufVxuXG5mdW5jdGlvbiBtYXJrVGlnaHRQYXJhZ3JhcGhzKHN0YXRlLCBpZHgpIHtcbiAgdmFyIGksIGwsXG4gICAgICBsZXZlbCA9IHN0YXRlLmxldmVsICsgMjtcblxuICBmb3IgKGkgPSBpZHggKyAyLCBsID0gc3RhdGUudG9rZW5zLmxlbmd0aCAtIDI7IGkgPCBsOyBpKyspIHtcbiAgICBpZiAoc3RhdGUudG9rZW5zW2ldLmxldmVsID09PSBsZXZlbCAmJiBzdGF0ZS50b2tlbnNbaV0udHlwZSA9PT0gJ3BhcmFncmFwaF9vcGVuJykge1xuICAgICAgc3RhdGUudG9rZW5zW2kgKyAyXS50aWdodCA9IHRydWU7XG4gICAgICBzdGF0ZS50b2tlbnNbaV0udGlnaHQgPSB0cnVlO1xuICAgICAgaSArPSAyO1xuICAgIH1cbiAgfVxufVxuXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gbGlzdChzdGF0ZSwgc3RhcnRMaW5lLCBlbmRMaW5lLCBzaWxlbnQpIHtcbiAgdmFyIG5leHRMaW5lLFxuICAgICAgaW5kZW50LFxuICAgICAgb2xkVFNoaWZ0LFxuICAgICAgb2xkSW5kZW50LFxuICAgICAgb2xkVGlnaHQsXG4gICAgICBvbGRQYXJlbnRUeXBlLFxuICAgICAgc3RhcnQsXG4gICAgICBwb3NBZnRlck1hcmtlcixcbiAgICAgIG1heCxcbiAgICAgIGluZGVudEFmdGVyTWFya2VyLFxuICAgICAgbWFya2VyVmFsdWUsXG4gICAgICBtYXJrZXJDaGFyQ29kZSxcbiAgICAgIGlzT3JkZXJlZCxcbiAgICAgIGNvbnRlbnRTdGFydCxcbiAgICAgIGxpc3RUb2tJZHgsXG4gICAgICBwcmV2RW1wdHlFbmQsXG4gICAgICBsaXN0TGluZXMsXG4gICAgICBpdGVtTGluZXMsXG4gICAgICB0aWdodCA9IHRydWUsXG4gICAgICB0ZXJtaW5hdG9yUnVsZXMsXG4gICAgICBpLCBsLCB0ZXJtaW5hdGU7XG5cbiAgLy8gRGV0ZWN0IGxpc3QgdHlwZSBhbmQgcG9zaXRpb24gYWZ0ZXIgbWFya2VyXG4gIGlmICgocG9zQWZ0ZXJNYXJrZXIgPSBza2lwT3JkZXJlZExpc3RNYXJrZXIoc3RhdGUsIHN0YXJ0TGluZSkpID49IDApIHtcbiAgICBpc09yZGVyZWQgPSB0cnVlO1xuICB9IGVsc2UgaWYgKChwb3NBZnRlck1hcmtlciA9IHNraXBCdWxsZXRMaXN0TWFya2VyKHN0YXRlLCBzdGFydExpbmUpKSA+PSAwKSB7XG4gICAgaXNPcmRlcmVkID0gZmFsc2U7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKHN0YXRlLmxldmVsID49IHN0YXRlLm9wdGlvbnMubWF4TmVzdGluZykgeyByZXR1cm4gZmFsc2U7IH1cblxuICAvLyBXZSBzaG91bGQgdGVybWluYXRlIGxpc3Qgb24gc3R5bGUgY2hhbmdlLiBSZW1lbWJlciBmaXJzdCBvbmUgdG8gY29tcGFyZS5cbiAgbWFya2VyQ2hhckNvZGUgPSBzdGF0ZS5zcmMuY2hhckNvZGVBdChwb3NBZnRlck1hcmtlciAtIDEpO1xuXG4gIC8vIEZvciB2YWxpZGF0aW9uIG1vZGUgd2UgY2FuIHRlcm1pbmF0ZSBpbW1lZGlhdGVseVxuICBpZiAoc2lsZW50KSB7IHJldHVybiB0cnVlOyB9XG5cbiAgLy8gU3RhcnQgbGlzdFxuICBsaXN0VG9rSWR4ID0gc3RhdGUudG9rZW5zLmxlbmd0aDtcblxuICBpZiAoaXNPcmRlcmVkKSB7XG4gICAgc3RhcnQgPSBzdGF0ZS5iTWFya3Nbc3RhcnRMaW5lXSArIHN0YXRlLnRTaGlmdFtzdGFydExpbmVdO1xuICAgIG1hcmtlclZhbHVlID0gTnVtYmVyKHN0YXRlLnNyYy5zdWJzdHIoc3RhcnQsIHBvc0FmdGVyTWFya2VyIC0gc3RhcnQgLSAxKSk7XG5cbiAgICBzdGF0ZS50b2tlbnMucHVzaCh7XG4gICAgICB0eXBlOiAnb3JkZXJlZF9saXN0X29wZW4nLFxuICAgICAgb3JkZXI6IG1hcmtlclZhbHVlLFxuICAgICAgbGluZXM6IGxpc3RMaW5lcyA9IFsgc3RhcnRMaW5lLCAwIF0sXG4gICAgICBsZXZlbDogc3RhdGUubGV2ZWwrK1xuICAgIH0pO1xuXG4gIH0gZWxzZSB7XG4gICAgc3RhdGUudG9rZW5zLnB1c2goe1xuICAgICAgdHlwZTogJ2J1bGxldF9saXN0X29wZW4nLFxuICAgICAgbGluZXM6IGxpc3RMaW5lcyA9IFsgc3RhcnRMaW5lLCAwIF0sXG4gICAgICBsZXZlbDogc3RhdGUubGV2ZWwrK1xuICAgIH0pO1xuICB9XG5cbiAgLy9cbiAgLy8gSXRlcmF0ZSBsaXN0IGl0ZW1zXG4gIC8vXG5cbiAgbmV4dExpbmUgPSBzdGFydExpbmU7XG4gIHByZXZFbXB0eUVuZCA9IGZhbHNlO1xuICB0ZXJtaW5hdG9yUnVsZXMgPSBzdGF0ZS5wYXJzZXIucnVsZXIuZ2V0UnVsZXMoJ2xpc3QnKTtcblxuICB3aGlsZSAobmV4dExpbmUgPCBlbmRMaW5lKSB7XG4gICAgY29udGVudFN0YXJ0ID0gc3RhdGUuc2tpcFNwYWNlcyhwb3NBZnRlck1hcmtlcik7XG4gICAgbWF4ID0gc3RhdGUuZU1hcmtzW25leHRMaW5lXTtcblxuICAgIGlmIChjb250ZW50U3RhcnQgPj0gbWF4KSB7XG4gICAgICAvLyB0cmltbWluZyBzcGFjZSBpbiBcIi0gICAgXFxuICAzXCIgY2FzZSwgaW5kZW50IGlzIDEgaGVyZVxuICAgICAgaW5kZW50QWZ0ZXJNYXJrZXIgPSAxO1xuICAgIH0gZWxzZSB7XG4gICAgICBpbmRlbnRBZnRlck1hcmtlciA9IGNvbnRlbnRTdGFydCAtIHBvc0FmdGVyTWFya2VyO1xuICAgIH1cblxuICAgIC8vIElmIHdlIGhhdmUgbW9yZSB0aGFuIDQgc3BhY2VzLCB0aGUgaW5kZW50IGlzIDFcbiAgICAvLyAodGhlIHJlc3QgaXMganVzdCBpbmRlbnRlZCBjb2RlIGJsb2NrKVxuICAgIGlmIChpbmRlbnRBZnRlck1hcmtlciA+IDQpIHsgaW5kZW50QWZ0ZXJNYXJrZXIgPSAxOyB9XG5cbiAgICAvLyBJZiBpbmRlbnQgaXMgbGVzcyB0aGFuIDEsIGFzc3VtZSB0aGF0IGl0J3Mgb25lLCBleGFtcGxlOlxuICAgIC8vICBcIi1cXG4gIHRlc3RcIlxuICAgIGlmIChpbmRlbnRBZnRlck1hcmtlciA8IDEpIHsgaW5kZW50QWZ0ZXJNYXJrZXIgPSAxOyB9XG5cbiAgICAvLyBcIiAgLSAgdGVzdFwiXG4gICAgLy8gIF5eXl5eIC0gY2FsY3VsYXRpbmcgdG90YWwgbGVuZ3RoIG9mIHRoaXMgdGhpbmdcbiAgICBpbmRlbnQgPSAocG9zQWZ0ZXJNYXJrZXIgLSBzdGF0ZS5iTWFya3NbbmV4dExpbmVdKSArIGluZGVudEFmdGVyTWFya2VyO1xuXG4gICAgLy8gUnVuIHN1YnBhcnNlciAmIHdyaXRlIHRva2Vuc1xuICAgIHN0YXRlLnRva2Vucy5wdXNoKHtcbiAgICAgIHR5cGU6ICdsaXN0X2l0ZW1fb3BlbicsXG4gICAgICBsaW5lczogaXRlbUxpbmVzID0gWyBzdGFydExpbmUsIDAgXSxcbiAgICAgIGxldmVsOiBzdGF0ZS5sZXZlbCsrXG4gICAgfSk7XG5cbiAgICBvbGRJbmRlbnQgPSBzdGF0ZS5ibGtJbmRlbnQ7XG4gICAgb2xkVGlnaHQgPSBzdGF0ZS50aWdodDtcbiAgICBvbGRUU2hpZnQgPSBzdGF0ZS50U2hpZnRbc3RhcnRMaW5lXTtcbiAgICBvbGRQYXJlbnRUeXBlID0gc3RhdGUucGFyZW50VHlwZTtcbiAgICBzdGF0ZS50U2hpZnRbc3RhcnRMaW5lXSA9IGNvbnRlbnRTdGFydCAtIHN0YXRlLmJNYXJrc1tzdGFydExpbmVdO1xuICAgIHN0YXRlLmJsa0luZGVudCA9IGluZGVudDtcbiAgICBzdGF0ZS50aWdodCA9IHRydWU7XG4gICAgc3RhdGUucGFyZW50VHlwZSA9ICdsaXN0JztcblxuICAgIHN0YXRlLnBhcnNlci50b2tlbml6ZShzdGF0ZSwgc3RhcnRMaW5lLCBlbmRMaW5lLCB0cnVlKTtcblxuICAgIC8vIElmIGFueSBvZiBsaXN0IGl0ZW0gaXMgdGlnaHQsIG1hcmsgbGlzdCBhcyB0aWdodFxuICAgIGlmICghc3RhdGUudGlnaHQgfHwgcHJldkVtcHR5RW5kKSB7XG4gICAgICB0aWdodCA9IGZhbHNlO1xuICAgIH1cbiAgICAvLyBJdGVtIGJlY29tZSBsb29zZSBpZiBmaW5pc2ggd2l0aCBlbXB0eSBsaW5lLFxuICAgIC8vIGJ1dCB3ZSBzaG91bGQgZmlsdGVyIGxhc3QgZWxlbWVudCwgYmVjYXVzZSBpdCBtZWFucyBsaXN0IGZpbmlzaFxuICAgIHByZXZFbXB0eUVuZCA9IChzdGF0ZS5saW5lIC0gc3RhcnRMaW5lKSA+IDEgJiYgc3RhdGUuaXNFbXB0eShzdGF0ZS5saW5lIC0gMSk7XG5cbiAgICBzdGF0ZS5ibGtJbmRlbnQgPSBvbGRJbmRlbnQ7XG4gICAgc3RhdGUudFNoaWZ0W3N0YXJ0TGluZV0gPSBvbGRUU2hpZnQ7XG4gICAgc3RhdGUudGlnaHQgPSBvbGRUaWdodDtcbiAgICBzdGF0ZS5wYXJlbnRUeXBlID0gb2xkUGFyZW50VHlwZTtcblxuICAgIHN0YXRlLnRva2Vucy5wdXNoKHtcbiAgICAgIHR5cGU6ICdsaXN0X2l0ZW1fY2xvc2UnLFxuICAgICAgbGV2ZWw6IC0tc3RhdGUubGV2ZWxcbiAgICB9KTtcblxuICAgIG5leHRMaW5lID0gc3RhcnRMaW5lID0gc3RhdGUubGluZTtcbiAgICBpdGVtTGluZXNbMV0gPSBuZXh0TGluZTtcbiAgICBjb250ZW50U3RhcnQgPSBzdGF0ZS5iTWFya3Nbc3RhcnRMaW5lXTtcblxuICAgIGlmIChuZXh0TGluZSA+PSBlbmRMaW5lKSB7IGJyZWFrOyB9XG5cbiAgICBpZiAoc3RhdGUuaXNFbXB0eShuZXh0TGluZSkpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIC8vXG4gICAgLy8gVHJ5IHRvIGNoZWNrIGlmIGxpc3QgaXMgdGVybWluYXRlZCBvciBjb250aW51ZWQuXG4gICAgLy9cbiAgICBpZiAoc3RhdGUudFNoaWZ0W25leHRMaW5lXSA8IHN0YXRlLmJsa0luZGVudCkgeyBicmVhazsgfVxuXG4gICAgLy8gZmFpbCBpZiB0ZXJtaW5hdGluZyBibG9jayBmb3VuZFxuICAgIHRlcm1pbmF0ZSA9IGZhbHNlO1xuICAgIGZvciAoaSA9IDAsIGwgPSB0ZXJtaW5hdG9yUnVsZXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBpZiAodGVybWluYXRvclJ1bGVzW2ldKHN0YXRlLCBuZXh0TGluZSwgZW5kTGluZSwgdHJ1ZSkpIHtcbiAgICAgICAgdGVybWluYXRlID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh0ZXJtaW5hdGUpIHsgYnJlYWs7IH1cblxuICAgIC8vIGZhaWwgaWYgbGlzdCBoYXMgYW5vdGhlciB0eXBlXG4gICAgaWYgKGlzT3JkZXJlZCkge1xuICAgICAgcG9zQWZ0ZXJNYXJrZXIgPSBza2lwT3JkZXJlZExpc3RNYXJrZXIoc3RhdGUsIG5leHRMaW5lKTtcbiAgICAgIGlmIChwb3NBZnRlck1hcmtlciA8IDApIHsgYnJlYWs7IH1cbiAgICB9IGVsc2Uge1xuICAgICAgcG9zQWZ0ZXJNYXJrZXIgPSBza2lwQnVsbGV0TGlzdE1hcmtlcihzdGF0ZSwgbmV4dExpbmUpO1xuICAgICAgaWYgKHBvc0FmdGVyTWFya2VyIDwgMCkgeyBicmVhazsgfVxuICAgIH1cblxuICAgIGlmIChtYXJrZXJDaGFyQ29kZSAhPT0gc3RhdGUuc3JjLmNoYXJDb2RlQXQocG9zQWZ0ZXJNYXJrZXIgLSAxKSkgeyBicmVhazsgfVxuICB9XG5cbiAgLy8gRmluaWxpemUgbGlzdFxuICBzdGF0ZS50b2tlbnMucHVzaCh7XG4gICAgdHlwZTogaXNPcmRlcmVkID8gJ29yZGVyZWRfbGlzdF9jbG9zZScgOiAnYnVsbGV0X2xpc3RfY2xvc2UnLFxuICAgIGxldmVsOiAtLXN0YXRlLmxldmVsXG4gIH0pO1xuICBsaXN0TGluZXNbMV0gPSBuZXh0TGluZTtcblxuICBzdGF0ZS5saW5lID0gbmV4dExpbmU7XG5cbiAgLy8gbWFyayBwYXJhZ3JhcGhzIHRpZ2h0IGlmIG5lZWRlZFxuICBpZiAodGlnaHQpIHtcbiAgICBtYXJrVGlnaHRQYXJhZ3JhcGhzKHN0YXRlLCBsaXN0VG9rSWR4KTtcbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufTtcbiIsIi8vIFBhcmFncmFwaFxuXG4ndXNlIHN0cmljdCc7XG5cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBwYXJhZ3JhcGgoc3RhdGUsIHN0YXJ0TGluZS8qLCBlbmRMaW5lKi8pIHtcbiAgdmFyIGVuZExpbmUsIGNvbnRlbnQsIHRlcm1pbmF0ZSwgaSwgbCxcbiAgICAgIG5leHRMaW5lID0gc3RhcnRMaW5lICsgMSxcbiAgICAgIHRlcm1pbmF0b3JSdWxlcztcblxuICBlbmRMaW5lID0gc3RhdGUubGluZU1heDtcblxuICAvLyBqdW1wIGxpbmUtYnktbGluZSB1bnRpbCBlbXB0eSBvbmUgb3IgRU9GXG4gIGlmIChuZXh0TGluZSA8IGVuZExpbmUgJiYgIXN0YXRlLmlzRW1wdHkobmV4dExpbmUpKSB7XG4gICAgdGVybWluYXRvclJ1bGVzID0gc3RhdGUucGFyc2VyLnJ1bGVyLmdldFJ1bGVzKCdwYXJhZ3JhcGgnKTtcblxuICAgIGZvciAoOyBuZXh0TGluZSA8IGVuZExpbmUgJiYgIXN0YXRlLmlzRW1wdHkobmV4dExpbmUpOyBuZXh0TGluZSsrKSB7XG4gICAgICAvLyB0aGlzIHdvdWxkIGJlIGEgY29kZSBibG9jayBub3JtYWxseSwgYnV0IGFmdGVyIHBhcmFncmFwaFxuICAgICAgLy8gaXQncyBjb25zaWRlcmVkIGEgbGF6eSBjb250aW51YXRpb24gcmVnYXJkbGVzcyBvZiB3aGF0J3MgdGhlcmVcbiAgICAgIGlmIChzdGF0ZS50U2hpZnRbbmV4dExpbmVdIC0gc3RhdGUuYmxrSW5kZW50ID4gMykgeyBjb250aW51ZTsgfVxuXG4gICAgICAvLyBTb21lIHRhZ3MgY2FuIHRlcm1pbmF0ZSBwYXJhZ3JhcGggd2l0aG91dCBlbXB0eSBsaW5lLlxuICAgICAgdGVybWluYXRlID0gZmFsc2U7XG4gICAgICBmb3IgKGkgPSAwLCBsID0gdGVybWluYXRvclJ1bGVzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICBpZiAodGVybWluYXRvclJ1bGVzW2ldKHN0YXRlLCBuZXh0TGluZSwgZW5kTGluZSwgdHJ1ZSkpIHtcbiAgICAgICAgICB0ZXJtaW5hdGUgPSB0cnVlO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAodGVybWluYXRlKSB7IGJyZWFrOyB9XG4gICAgfVxuICB9XG5cbiAgY29udGVudCA9IHN0YXRlLmdldExpbmVzKHN0YXJ0TGluZSwgbmV4dExpbmUsIHN0YXRlLmJsa0luZGVudCwgZmFsc2UpLnRyaW0oKTtcblxuICBzdGF0ZS5saW5lID0gbmV4dExpbmU7XG4gIGlmIChjb250ZW50Lmxlbmd0aCkge1xuICAgIHN0YXRlLnRva2Vucy5wdXNoKHtcbiAgICAgIHR5cGU6ICdwYXJhZ3JhcGhfb3BlbicsXG4gICAgICB0aWdodDogZmFsc2UsXG4gICAgICBsaW5lczogWyBzdGFydExpbmUsIHN0YXRlLmxpbmUgXSxcbiAgICAgIGxldmVsOiBzdGF0ZS5sZXZlbFxuICAgIH0pO1xuICAgIHN0YXRlLnRva2Vucy5wdXNoKHtcbiAgICAgIHR5cGU6ICdpbmxpbmUnLFxuICAgICAgY29udGVudDogY29udGVudCxcbiAgICAgIGxldmVsOiBzdGF0ZS5sZXZlbCArIDEsXG4gICAgICBsaW5lczogWyBzdGFydExpbmUsIHN0YXRlLmxpbmUgXSxcbiAgICAgIGNoaWxkcmVuOiBbXVxuICAgIH0pO1xuICAgIHN0YXRlLnRva2Vucy5wdXNoKHtcbiAgICAgIHR5cGU6ICdwYXJhZ3JhcGhfY2xvc2UnLFxuICAgICAgdGlnaHQ6IGZhbHNlLFxuICAgICAgbGV2ZWw6IHN0YXRlLmxldmVsXG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn07XG4iLCIvLyBQYXJzZXIgc3RhdGUgY2xhc3NcblxuJ3VzZSBzdHJpY3QnO1xuXG5cbmZ1bmN0aW9uIFN0YXRlQmxvY2soc3JjLCBwYXJzZXIsIG9wdGlvbnMsIGVudiwgdG9rZW5zKSB7XG4gIHZhciBjaCwgcywgc3RhcnQsIHBvcywgbGVuLCBpbmRlbnQsIGluZGVudF9mb3VuZDtcblxuICB0aGlzLnNyYyA9IHNyYztcblxuICAvLyBTaG9ydGN1dHMgdG8gc2ltcGxpZnkgbmVzdGVkIGNhbGxzXG4gIHRoaXMucGFyc2VyID0gcGFyc2VyO1xuXG4gIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG5cbiAgdGhpcy5lbnYgPSBlbnY7XG5cbiAgLy9cbiAgLy8gSW50ZXJuYWwgc3RhdGUgdmFydGlhYmxlc1xuICAvL1xuXG4gIHRoaXMudG9rZW5zID0gdG9rZW5zO1xuXG4gIHRoaXMuYk1hcmtzID0gW107ICAvLyBsaW5lIGJlZ2luIG9mZnNldHMgZm9yIGZhc3QganVtcHNcbiAgdGhpcy5lTWFya3MgPSBbXTsgIC8vIGxpbmUgZW5kIG9mZnNldHMgZm9yIGZhc3QganVtcHNcbiAgdGhpcy50U2hpZnQgPSBbXTsgIC8vIGluZGVudCBmb3IgZWFjaCBsaW5lXG5cbiAgLy8gYmxvY2sgcGFyc2VyIHZhcmlhYmxlc1xuICB0aGlzLmJsa0luZGVudCAgPSAwOyAvLyByZXF1aXJlZCBibG9jayBjb250ZW50IGluZGVudFxuICAgICAgICAgICAgICAgICAgICAgICAvLyAoZm9yIGV4YW1wbGUsIGlmIHdlIGFyZSBpbiBsaXN0KVxuICB0aGlzLmxpbmUgICAgICAgPSAwOyAvLyBsaW5lIGluZGV4IGluIHNyY1xuICB0aGlzLmxpbmVNYXggICAgPSAwOyAvLyBsaW5lcyBjb3VudFxuICB0aGlzLnRpZ2h0ICAgICAgPSBmYWxzZTsgIC8vIGxvb3NlL3RpZ2h0IG1vZGUgZm9yIGxpc3RzXG4gIHRoaXMucGFyZW50VHlwZSA9ICdyb290JzsgLy8gaWYgYGxpc3RgLCBibG9jayBwYXJzZXIgc3RvcHMgb24gdHdvIG5ld2xpbmVzXG4gIHRoaXMuZGRJbmRlbnQgICA9IC0xOyAvLyBpbmRlbnQgb2YgdGhlIGN1cnJlbnQgZGQgYmxvY2sgKC0xIGlmIHRoZXJlIGlzbid0IGFueSlcblxuICB0aGlzLmxldmVsID0gMDtcblxuICAvLyByZW5kZXJlclxuICB0aGlzLnJlc3VsdCA9ICcnO1xuXG4gIC8vIENyZWF0ZSBjYWNoZXNcbiAgLy8gR2VuZXJhdGUgbWFya2Vycy5cbiAgcyA9IHRoaXMuc3JjO1xuICBpbmRlbnQgPSAwO1xuICBpbmRlbnRfZm91bmQgPSBmYWxzZTtcblxuICBmb3IgKHN0YXJ0ID0gcG9zID0gaW5kZW50ID0gMCwgbGVuID0gcy5sZW5ndGg7IHBvcyA8IGxlbjsgcG9zKyspIHtcbiAgICBjaCA9IHMuY2hhckNvZGVBdChwb3MpO1xuXG4gICAgaWYgKCFpbmRlbnRfZm91bmQpIHtcbiAgICAgIGlmIChjaCA9PT0gMHgyMC8qIHNwYWNlICovKSB7XG4gICAgICAgIGluZGVudCsrO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGluZGVudF9mb3VuZCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGNoID09PSAweDBBIHx8IHBvcyA9PT0gbGVuIC0gMSkge1xuICAgICAgaWYgKGNoICE9PSAweDBBKSB7IHBvcysrOyB9XG4gICAgICB0aGlzLmJNYXJrcy5wdXNoKHN0YXJ0KTtcbiAgICAgIHRoaXMuZU1hcmtzLnB1c2gocG9zKTtcbiAgICAgIHRoaXMudFNoaWZ0LnB1c2goaW5kZW50KTtcblxuICAgICAgaW5kZW50X2ZvdW5kID0gZmFsc2U7XG4gICAgICBpbmRlbnQgPSAwO1xuICAgICAgc3RhcnQgPSBwb3MgKyAxO1xuICAgIH1cbiAgfVxuXG4gIC8vIFB1c2ggZmFrZSBlbnRyeSB0byBzaW1wbGlmeSBjYWNoZSBib3VuZHMgY2hlY2tzXG4gIHRoaXMuYk1hcmtzLnB1c2gocy5sZW5ndGgpO1xuICB0aGlzLmVNYXJrcy5wdXNoKHMubGVuZ3RoKTtcbiAgdGhpcy50U2hpZnQucHVzaCgwKTtcblxuICB0aGlzLmxpbmVNYXggPSB0aGlzLmJNYXJrcy5sZW5ndGggLSAxOyAvLyBkb24ndCBjb3VudCBsYXN0IGZha2UgbGluZVxufVxuXG5TdGF0ZUJsb2NrLnByb3RvdHlwZS5pc0VtcHR5ID0gZnVuY3Rpb24gaXNFbXB0eShsaW5lKSB7XG4gIHJldHVybiB0aGlzLmJNYXJrc1tsaW5lXSArIHRoaXMudFNoaWZ0W2xpbmVdID49IHRoaXMuZU1hcmtzW2xpbmVdO1xufTtcblxuU3RhdGVCbG9jay5wcm90b3R5cGUuc2tpcEVtcHR5TGluZXMgPSBmdW5jdGlvbiBza2lwRW1wdHlMaW5lcyhmcm9tKSB7XG4gIGZvciAodmFyIG1heCA9IHRoaXMubGluZU1heDsgZnJvbSA8IG1heDsgZnJvbSsrKSB7XG4gICAgaWYgKHRoaXMuYk1hcmtzW2Zyb21dICsgdGhpcy50U2hpZnRbZnJvbV0gPCB0aGlzLmVNYXJrc1tmcm9tXSkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiBmcm9tO1xufTtcblxuLy8gU2tpcCBzcGFjZXMgZnJvbSBnaXZlbiBwb3NpdGlvbi5cblN0YXRlQmxvY2sucHJvdG90eXBlLnNraXBTcGFjZXMgPSBmdW5jdGlvbiBza2lwU3BhY2VzKHBvcykge1xuICBmb3IgKHZhciBtYXggPSB0aGlzLnNyYy5sZW5ndGg7IHBvcyA8IG1heDsgcG9zKyspIHtcbiAgICBpZiAodGhpcy5zcmMuY2hhckNvZGVBdChwb3MpICE9PSAweDIwLyogc3BhY2UgKi8pIHsgYnJlYWs7IH1cbiAgfVxuICByZXR1cm4gcG9zO1xufTtcblxuLy8gU2tpcCBjaGFyIGNvZGVzIGZyb20gZ2l2ZW4gcG9zaXRpb25cblN0YXRlQmxvY2sucHJvdG90eXBlLnNraXBDaGFycyA9IGZ1bmN0aW9uIHNraXBDaGFycyhwb3MsIGNvZGUpIHtcbiAgZm9yICh2YXIgbWF4ID0gdGhpcy5zcmMubGVuZ3RoOyBwb3MgPCBtYXg7IHBvcysrKSB7XG4gICAgaWYgKHRoaXMuc3JjLmNoYXJDb2RlQXQocG9zKSAhPT0gY29kZSkgeyBicmVhazsgfVxuICB9XG4gIHJldHVybiBwb3M7XG59O1xuXG4vLyBTa2lwIGNoYXIgY29kZXMgcmV2ZXJzZSBmcm9tIGdpdmVuIHBvc2l0aW9uIC0gMVxuU3RhdGVCbG9jay5wcm90b3R5cGUuc2tpcENoYXJzQmFjayA9IGZ1bmN0aW9uIHNraXBDaGFyc0JhY2socG9zLCBjb2RlLCBtaW4pIHtcbiAgaWYgKHBvcyA8PSBtaW4pIHsgcmV0dXJuIHBvczsgfVxuXG4gIHdoaWxlIChwb3MgPiBtaW4pIHtcbiAgICBpZiAoY29kZSAhPT0gdGhpcy5zcmMuY2hhckNvZGVBdCgtLXBvcykpIHsgcmV0dXJuIHBvcyArIDE7IH1cbiAgfVxuICByZXR1cm4gcG9zO1xufTtcblxuLy8gY3V0IGxpbmVzIHJhbmdlIGZyb20gc291cmNlLlxuU3RhdGVCbG9jay5wcm90b3R5cGUuZ2V0TGluZXMgPSBmdW5jdGlvbiBnZXRMaW5lcyhiZWdpbiwgZW5kLCBpbmRlbnQsIGtlZXBMYXN0TEYpIHtcbiAgdmFyIGksIGZpcnN0LCBsYXN0LCBxdWV1ZSwgc2hpZnQsXG4gICAgICBsaW5lID0gYmVnaW47XG5cbiAgaWYgKGJlZ2luID49IGVuZCkge1xuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIC8vIE9wdDogZG9uJ3QgdXNlIHB1c2ggcXVldWUgZm9yIHNpbmdsZSBsaW5lO1xuICBpZiAobGluZSArIDEgPT09IGVuZCkge1xuICAgIGZpcnN0ID0gdGhpcy5iTWFya3NbbGluZV0gKyBNYXRoLm1pbih0aGlzLnRTaGlmdFtsaW5lXSwgaW5kZW50KTtcbiAgICBsYXN0ID0ga2VlcExhc3RMRiA/IHRoaXMuYk1hcmtzW2VuZF0gOiB0aGlzLmVNYXJrc1tlbmQgLSAxXTtcbiAgICByZXR1cm4gdGhpcy5zcmMuc2xpY2UoZmlyc3QsIGxhc3QpO1xuICB9XG5cbiAgcXVldWUgPSBuZXcgQXJyYXkoZW5kIC0gYmVnaW4pO1xuXG4gIGZvciAoaSA9IDA7IGxpbmUgPCBlbmQ7IGxpbmUrKywgaSsrKSB7XG4gICAgc2hpZnQgPSB0aGlzLnRTaGlmdFtsaW5lXTtcbiAgICBpZiAoc2hpZnQgPiBpbmRlbnQpIHsgc2hpZnQgPSBpbmRlbnQ7IH1cbiAgICBpZiAoc2hpZnQgPCAwKSB7IHNoaWZ0ID0gMDsgfVxuXG4gICAgZmlyc3QgPSB0aGlzLmJNYXJrc1tsaW5lXSArIHNoaWZ0O1xuXG4gICAgaWYgKGxpbmUgKyAxIDwgZW5kIHx8IGtlZXBMYXN0TEYpIHtcbiAgICAgIC8vIE5vIG5lZWQgZm9yIGJvdW5kcyBjaGVjayBiZWNhdXNlIHdlIGhhdmUgZmFrZSBlbnRyeSBvbiB0YWlsLlxuICAgICAgbGFzdCA9IHRoaXMuZU1hcmtzW2xpbmVdICsgMTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGFzdCA9IHRoaXMuZU1hcmtzW2xpbmVdO1xuICAgIH1cblxuICAgIHF1ZXVlW2ldID0gdGhpcy5zcmMuc2xpY2UoZmlyc3QsIGxhc3QpO1xuICB9XG5cbiAgcmV0dXJuIHF1ZXVlLmpvaW4oJycpO1xufTtcblxuXG5tb2R1bGUuZXhwb3J0cyA9IFN0YXRlQmxvY2s7XG4iLCIvLyBHRk0gdGFibGUsIG5vbi1zdGFuZGFyZFxuXG4ndXNlIHN0cmljdCc7XG5cblxuZnVuY3Rpb24gZ2V0TGluZShzdGF0ZSwgbGluZSkge1xuICB2YXIgcG9zID0gc3RhdGUuYk1hcmtzW2xpbmVdICsgc3RhdGUuYmxrSW5kZW50LFxuICAgICAgbWF4ID0gc3RhdGUuZU1hcmtzW2xpbmVdO1xuXG4gIHJldHVybiBzdGF0ZS5zcmMuc3Vic3RyKHBvcywgbWF4IC0gcG9zKTtcbn1cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHRhYmxlKHN0YXRlLCBzdGFydExpbmUsIGVuZExpbmUsIHNpbGVudCkge1xuICB2YXIgY2gsIGxpbmVUZXh0LCBwb3MsIGksIG5leHRMaW5lLCByb3dzLFxuICAgICAgYWxpZ25zLCB0LCB0YWJsZUxpbmVzLCB0Ym9keUxpbmVzO1xuXG4gIC8vIHNob3VsZCBoYXZlIGF0IGxlYXN0IHRocmVlIGxpbmVzXG4gIGlmIChzdGFydExpbmUgKyAyID4gZW5kTGluZSkgeyByZXR1cm4gZmFsc2U7IH1cblxuICBuZXh0TGluZSA9IHN0YXJ0TGluZSArIDE7XG5cbiAgaWYgKHN0YXRlLnRTaGlmdFtuZXh0TGluZV0gPCBzdGF0ZS5ibGtJbmRlbnQpIHsgcmV0dXJuIGZhbHNlOyB9XG5cbiAgLy8gZmlyc3QgY2hhcmFjdGVyIG9mIHRoZSBzZWNvbmQgbGluZSBzaG91bGQgYmUgJ3wnIG9yICctJ1xuXG4gIHBvcyA9IHN0YXRlLmJNYXJrc1tuZXh0TGluZV0gKyBzdGF0ZS50U2hpZnRbbmV4dExpbmVdO1xuICBpZiAocG9zID49IHN0YXRlLmVNYXJrc1tuZXh0TGluZV0pIHsgcmV0dXJuIGZhbHNlOyB9XG5cbiAgY2ggPSBzdGF0ZS5zcmMuY2hhckNvZGVBdChwb3MpO1xuICBpZiAoY2ggIT09IDB4N0MvKiB8ICovICYmIGNoICE9PSAweDJELyogLSAqLyAmJiBjaCAhPT0gMHgzQS8qIDogKi8pIHsgcmV0dXJuIGZhbHNlOyB9XG5cbiAgbGluZVRleHQgPSBnZXRMaW5lKHN0YXRlLCBzdGFydExpbmUgKyAxKTtcbiAgaWYgKCEvXlstOnwgXSskLy50ZXN0KGxpbmVUZXh0KSkgeyByZXR1cm4gZmFsc2U7IH1cblxuICByb3dzID0gbGluZVRleHQuc3BsaXQoJ3wnKTtcbiAgaWYgKHJvd3MgPD0gMikgeyByZXR1cm4gZmFsc2U7IH1cbiAgYWxpZ25zID0gW107XG4gIGZvciAoaSA9IDA7IGkgPCByb3dzLmxlbmd0aDsgaSsrKSB7XG4gICAgdCA9IHJvd3NbaV0udHJpbSgpO1xuICAgIGlmICghdCkge1xuICAgICAgLy8gYWxsb3cgZW1wdHkgY29sdW1ucyBiZWZvcmUgYW5kIGFmdGVyIHRhYmxlLCBidXQgbm90IGluIGJldHdlZW4gY29sdW1ucztcbiAgICAgIC8vIGUuZy4gYWxsb3cgYCB8LS0tfCBgLCBkaXNhbGxvdyBgIC0tLXx8LS0tIGBcbiAgICAgIGlmIChpID09PSAwIHx8IGkgPT09IHJvd3MubGVuZ3RoIC0gMSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIS9eOj8tKzo/JC8udGVzdCh0KSkgeyByZXR1cm4gZmFsc2U7IH1cbiAgICBpZiAodC5jaGFyQ29kZUF0KHQubGVuZ3RoIC0gMSkgPT09IDB4M0EvKiA6ICovKSB7XG4gICAgICBhbGlnbnMucHVzaCh0LmNoYXJDb2RlQXQoMCkgPT09IDB4M0EvKiA6ICovID8gJ2NlbnRlcicgOiAncmlnaHQnKTtcbiAgICB9IGVsc2UgaWYgKHQuY2hhckNvZGVBdCgwKSA9PT0gMHgzQS8qIDogKi8pIHtcbiAgICAgIGFsaWducy5wdXNoKCdsZWZ0Jyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFsaWducy5wdXNoKCcnKTtcbiAgICB9XG4gIH1cblxuICBsaW5lVGV4dCA9IGdldExpbmUoc3RhdGUsIHN0YXJ0TGluZSkudHJpbSgpO1xuICBpZiAobGluZVRleHQuaW5kZXhPZignfCcpID09PSAtMSkgeyByZXR1cm4gZmFsc2U7IH1cbiAgcm93cyA9IGxpbmVUZXh0LnJlcGxhY2UoL15cXHx8XFx8JC9nLCAnJykuc3BsaXQoJ3wnKTtcbiAgaWYgKGFsaWducy5sZW5ndGggIT09IHJvd3MubGVuZ3RoKSB7IHJldHVybiBmYWxzZTsgfVxuICBpZiAoc2lsZW50KSB7IHJldHVybiB0cnVlOyB9XG5cbiAgc3RhdGUudG9rZW5zLnB1c2goe1xuICAgIHR5cGU6ICd0YWJsZV9vcGVuJyxcbiAgICBsaW5lczogdGFibGVMaW5lcyA9IFsgc3RhcnRMaW5lLCAwIF0sXG4gICAgbGV2ZWw6IHN0YXRlLmxldmVsKytcbiAgfSk7XG4gIHN0YXRlLnRva2Vucy5wdXNoKHtcbiAgICB0eXBlOiAndGhlYWRfb3BlbicsXG4gICAgbGluZXM6IFsgc3RhcnRMaW5lLCBzdGFydExpbmUgKyAxIF0sXG4gICAgbGV2ZWw6IHN0YXRlLmxldmVsKytcbiAgfSk7XG5cbiAgc3RhdGUudG9rZW5zLnB1c2goe1xuICAgIHR5cGU6ICd0cl9vcGVuJyxcbiAgICBsaW5lczogWyBzdGFydExpbmUsIHN0YXJ0TGluZSArIDEgXSxcbiAgICBsZXZlbDogc3RhdGUubGV2ZWwrK1xuICB9KTtcbiAgZm9yIChpID0gMDsgaSA8IHJvd3MubGVuZ3RoOyBpKyspIHtcbiAgICBzdGF0ZS50b2tlbnMucHVzaCh7XG4gICAgICB0eXBlOiAndGhfb3BlbicsXG4gICAgICBhbGlnbjogYWxpZ25zW2ldLFxuICAgICAgbGluZXM6IFsgc3RhcnRMaW5lLCBzdGFydExpbmUgKyAxIF0sXG4gICAgICBsZXZlbDogc3RhdGUubGV2ZWwrK1xuICAgIH0pO1xuICAgIHN0YXRlLnRva2Vucy5wdXNoKHtcbiAgICAgIHR5cGU6ICdpbmxpbmUnLFxuICAgICAgY29udGVudDogcm93c1tpXS50cmltKCksXG4gICAgICBsaW5lczogWyBzdGFydExpbmUsIHN0YXJ0TGluZSArIDEgXSxcbiAgICAgIGxldmVsOiBzdGF0ZS5sZXZlbCxcbiAgICAgIGNoaWxkcmVuOiBbXVxuICAgIH0pO1xuICAgIHN0YXRlLnRva2Vucy5wdXNoKHsgdHlwZTogJ3RoX2Nsb3NlJywgbGV2ZWw6IC0tc3RhdGUubGV2ZWwgfSk7XG4gIH1cbiAgc3RhdGUudG9rZW5zLnB1c2goeyB0eXBlOiAndHJfY2xvc2UnLCBsZXZlbDogLS1zdGF0ZS5sZXZlbCB9KTtcbiAgc3RhdGUudG9rZW5zLnB1c2goeyB0eXBlOiAndGhlYWRfY2xvc2UnLCBsZXZlbDogLS1zdGF0ZS5sZXZlbCB9KTtcblxuICBzdGF0ZS50b2tlbnMucHVzaCh7XG4gICAgdHlwZTogJ3Rib2R5X29wZW4nLFxuICAgIGxpbmVzOiB0Ym9keUxpbmVzID0gWyBzdGFydExpbmUgKyAyLCAwIF0sXG4gICAgbGV2ZWw6IHN0YXRlLmxldmVsKytcbiAgfSk7XG5cbiAgZm9yIChuZXh0TGluZSA9IHN0YXJ0TGluZSArIDI7IG5leHRMaW5lIDwgZW5kTGluZTsgbmV4dExpbmUrKykge1xuICAgIGlmIChzdGF0ZS50U2hpZnRbbmV4dExpbmVdIDwgc3RhdGUuYmxrSW5kZW50KSB7IGJyZWFrOyB9XG5cbiAgICBsaW5lVGV4dCA9IGdldExpbmUoc3RhdGUsIG5leHRMaW5lKS50cmltKCk7XG4gICAgaWYgKGxpbmVUZXh0LmluZGV4T2YoJ3wnKSA9PT0gLTEpIHsgYnJlYWs7IH1cbiAgICByb3dzID0gbGluZVRleHQucmVwbGFjZSgvXlxcfHxcXHwkL2csICcnKS5zcGxpdCgnfCcpO1xuXG4gICAgc3RhdGUudG9rZW5zLnB1c2goeyB0eXBlOiAndHJfb3BlbicsIGxldmVsOiBzdGF0ZS5sZXZlbCsrIH0pO1xuICAgIGZvciAoaSA9IDA7IGkgPCByb3dzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBzdGF0ZS50b2tlbnMucHVzaCh7IHR5cGU6ICd0ZF9vcGVuJywgYWxpZ246IGFsaWduc1tpXSwgbGV2ZWw6IHN0YXRlLmxldmVsKysgfSk7XG4gICAgICBzdGF0ZS50b2tlbnMucHVzaCh7XG4gICAgICAgIHR5cGU6ICdpbmxpbmUnLFxuICAgICAgICBjb250ZW50OiByb3dzW2ldLnJlcGxhY2UoL15cXHw/ICp8ICpcXHw/JC9nLCAnJyksXG4gICAgICAgIGxldmVsOiBzdGF0ZS5sZXZlbCxcbiAgICAgICAgY2hpbGRyZW46IFtdXG4gICAgICB9KTtcbiAgICAgIHN0YXRlLnRva2Vucy5wdXNoKHsgdHlwZTogJ3RkX2Nsb3NlJywgbGV2ZWw6IC0tc3RhdGUubGV2ZWwgfSk7XG4gICAgfVxuICAgIHN0YXRlLnRva2Vucy5wdXNoKHsgdHlwZTogJ3RyX2Nsb3NlJywgbGV2ZWw6IC0tc3RhdGUubGV2ZWwgfSk7XG4gIH1cbiAgc3RhdGUudG9rZW5zLnB1c2goeyB0eXBlOiAndGJvZHlfY2xvc2UnLCBsZXZlbDogLS1zdGF0ZS5sZXZlbCB9KTtcbiAgc3RhdGUudG9rZW5zLnB1c2goeyB0eXBlOiAndGFibGVfY2xvc2UnLCBsZXZlbDogLS1zdGF0ZS5sZXZlbCB9KTtcblxuICB0YWJsZUxpbmVzWzFdID0gdGJvZHlMaW5lc1sxXSA9IG5leHRMaW5lO1xuICBzdGF0ZS5saW5lID0gbmV4dExpbmU7XG4gIHJldHVybiB0cnVlO1xufTtcbiIsIi8vIFBhcnNlIGFiYnJldmlhdGlvbiBkZWZpbml0aW9ucywgaS5lLiBgKlthYmJyXTogZGVzY3JpcHRpb25gXG4vL1xuXG4ndXNlIHN0cmljdCc7XG5cblxudmFyIFN0YXRlSW5saW5lICAgID0gcmVxdWlyZSgnLi4vcnVsZXNfaW5saW5lL3N0YXRlX2lubGluZScpO1xudmFyIHBhcnNlTGlua0xhYmVsID0gcmVxdWlyZSgnLi4vaGVscGVycy9wYXJzZV9saW5rX2xhYmVsJyk7XG5cblxuZnVuY3Rpb24gcGFyc2VBYmJyKHN0ciwgcGFyc2VySW5saW5lLCBvcHRpb25zLCBlbnYpIHtcbiAgdmFyIHN0YXRlLCBsYWJlbEVuZCwgcG9zLCBtYXgsIGxhYmVsLCB0aXRsZTtcblxuICBpZiAoc3RyLmNoYXJDb2RlQXQoMCkgIT09IDB4MkEvKiAqICovKSB7IHJldHVybiAtMTsgfVxuICBpZiAoc3RyLmNoYXJDb2RlQXQoMSkgIT09IDB4NUIvKiBbICovKSB7IHJldHVybiAtMTsgfVxuXG4gIGlmIChzdHIuaW5kZXhPZignXTonKSA9PT0gLTEpIHsgcmV0dXJuIC0xOyB9XG5cbiAgc3RhdGUgPSBuZXcgU3RhdGVJbmxpbmUoc3RyLCBwYXJzZXJJbmxpbmUsIG9wdGlvbnMsIGVudiwgW10pO1xuICBsYWJlbEVuZCA9IHBhcnNlTGlua0xhYmVsKHN0YXRlLCAxKTtcblxuICBpZiAobGFiZWxFbmQgPCAwIHx8IHN0ci5jaGFyQ29kZUF0KGxhYmVsRW5kICsgMSkgIT09IDB4M0EvKiA6ICovKSB7IHJldHVybiAtMTsgfVxuXG4gIG1heCA9IHN0YXRlLnBvc01heDtcblxuICAvLyBhYmJyIHRpdGxlIGlzIGFsd2F5cyBvbmUgbGluZSwgc28gbG9va2luZyBmb3IgZW5kaW5nIFwiXFxuXCIgaGVyZVxuICBmb3IgKHBvcyA9IGxhYmVsRW5kICsgMjsgcG9zIDwgbWF4OyBwb3MrKykge1xuICAgIGlmIChzdGF0ZS5zcmMuY2hhckNvZGVBdChwb3MpID09PSAweDBBKSB7IGJyZWFrOyB9XG4gIH1cblxuICBsYWJlbCA9IHN0ci5zbGljZSgyLCBsYWJlbEVuZCk7XG4gIHRpdGxlID0gc3RyLnNsaWNlKGxhYmVsRW5kICsgMiwgcG9zKS50cmltKCk7XG4gIGlmICh0aXRsZS5sZW5ndGggPT09IDApIHsgcmV0dXJuIC0xOyB9XG4gIGlmICghZW52LmFiYnJldmlhdGlvbnMpIHsgZW52LmFiYnJldmlhdGlvbnMgPSB7fTsgfVxuICAvLyBwcmVwZW5kICc6JyB0byBhdm9pZCBjb25mbGljdCB3aXRoIE9iamVjdC5wcm90b3R5cGUgbWVtYmVyc1xuICBpZiAodHlwZW9mIGVudi5hYmJyZXZpYXRpb25zWyc6JyArIGxhYmVsXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBlbnYuYWJicmV2aWF0aW9uc1snOicgKyBsYWJlbF0gPSB0aXRsZTtcbiAgfVxuXG4gIHJldHVybiBwb3M7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gYWJicihzdGF0ZSkge1xuICB2YXIgdG9rZW5zID0gc3RhdGUudG9rZW5zLCBpLCBsLCBjb250ZW50LCBwb3M7XG5cbiAgaWYgKHN0YXRlLmlubGluZU1vZGUpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvLyBQYXJzZSBpbmxpbmVzXG4gIGZvciAoaSA9IDEsIGwgPSB0b2tlbnMubGVuZ3RoIC0gMTsgaSA8IGw7IGkrKykge1xuICAgIGlmICh0b2tlbnNbaSAtIDFdLnR5cGUgPT09ICdwYXJhZ3JhcGhfb3BlbicgJiZcbiAgICAgICAgdG9rZW5zW2ldLnR5cGUgPT09ICdpbmxpbmUnICYmXG4gICAgICAgIHRva2Vuc1tpICsgMV0udHlwZSA9PT0gJ3BhcmFncmFwaF9jbG9zZScpIHtcblxuICAgICAgY29udGVudCA9IHRva2Vuc1tpXS5jb250ZW50O1xuICAgICAgd2hpbGUgKGNvbnRlbnQubGVuZ3RoKSB7XG4gICAgICAgIHBvcyA9IHBhcnNlQWJicihjb250ZW50LCBzdGF0ZS5pbmxpbmUsIHN0YXRlLm9wdGlvbnMsIHN0YXRlLmVudik7XG4gICAgICAgIGlmIChwb3MgPCAwKSB7IGJyZWFrOyB9XG4gICAgICAgIGNvbnRlbnQgPSBjb250ZW50LnNsaWNlKHBvcykudHJpbSgpO1xuICAgICAgfVxuXG4gICAgICB0b2tlbnNbaV0uY29udGVudCA9IGNvbnRlbnQ7XG4gICAgICBpZiAoIWNvbnRlbnQubGVuZ3RoKSB7XG4gICAgICAgIHRva2Vuc1tpIC0gMV0udGlnaHQgPSB0cnVlO1xuICAgICAgICB0b2tlbnNbaSArIDFdLnRpZ2h0ID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn07XG4iLCIvLyBFbmNsb3NlIGFiYnJldmlhdGlvbnMgaW4gPGFiYnI+IHRhZ3Ncbi8vXG4ndXNlIHN0cmljdCc7XG5cblxudmFyIFBVTkNUX0NIQVJTID0gJyBcXG4oKVtdXFwnXCIuLCE/LSc7XG5cblxuLy8gZnJvbSBHb29nbGUgY2xvc3VyZSBsaWJyYXJ5XG4vLyBodHRwOi8vY2xvc3VyZS1saWJyYXJ5Lmdvb2dsZWNvZGUuY29tL2dpdC1oaXN0b3J5L2RvY3MvbG9jYWxfY2xvc3VyZV9nb29nX3N0cmluZ19zdHJpbmcuanMuc291cmNlLmh0bWwjbGluZTEwMjFcbmZ1bmN0aW9uIHJlZ0VzY2FwZShzKSB7XG4gIHJldHVybiBzLnJlcGxhY2UoLyhbLSgpXFxbXFxde30rPyouJFxcXnwsOiM8IVxcXFxdKS9nLCAnXFxcXCQxJyk7XG59XG5cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBhYmJyMihzdGF0ZSkge1xuICB2YXIgaSwgaiwgbCwgdG9rZW5zLCB0b2tlbiwgdGV4dCwgbm9kZXMsIHBvcywgbGV2ZWwsIHJlZywgbSwgcmVnVGV4dCxcbiAgICAgIGJsb2NrVG9rZW5zID0gc3RhdGUudG9rZW5zO1xuXG4gIGlmICghc3RhdGUuZW52LmFiYnJldmlhdGlvbnMpIHsgcmV0dXJuOyB9XG4gIGlmICghc3RhdGUuZW52LmFiYnJSZWdFeHApIHtcbiAgICByZWdUZXh0ID0gJyhefFsnICsgUFVOQ1RfQ0hBUlMuc3BsaXQoJycpLm1hcChyZWdFc2NhcGUpLmpvaW4oJycpICsgJ10pJ1xuICAgICAgICAgICAgKyAnKCcgKyBPYmplY3Qua2V5cyhzdGF0ZS5lbnYuYWJicmV2aWF0aW9ucykubWFwKGZ1bmN0aW9uICh4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHguc3Vic3RyKDEpO1xuICAgICAgICAgICAgICAgICAgICB9KS5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGIubGVuZ3RoIC0gYS5sZW5ndGg7XG4gICAgICAgICAgICAgICAgICAgIH0pLm1hcChyZWdFc2NhcGUpLmpvaW4oJ3wnKSArICcpJ1xuICAgICAgICAgICAgKyAnKCR8WycgKyBQVU5DVF9DSEFSUy5zcGxpdCgnJykubWFwKHJlZ0VzY2FwZSkuam9pbignJykgKyAnXSknO1xuICAgIHN0YXRlLmVudi5hYmJyUmVnRXhwID0gbmV3IFJlZ0V4cChyZWdUZXh0LCAnZycpO1xuICB9XG4gIHJlZyA9IHN0YXRlLmVudi5hYmJyUmVnRXhwO1xuXG4gIGZvciAoaiA9IDAsIGwgPSBibG9ja1Rva2Vucy5sZW5ndGg7IGogPCBsOyBqKyspIHtcbiAgICBpZiAoYmxvY2tUb2tlbnNbal0udHlwZSAhPT0gJ2lubGluZScpIHsgY29udGludWU7IH1cbiAgICB0b2tlbnMgPSBibG9ja1Rva2Vuc1tqXS5jaGlsZHJlbjtcblxuICAgIC8vIFdlIHNjYW4gZnJvbSB0aGUgZW5kLCB0byBrZWVwIHBvc2l0aW9uIHdoZW4gbmV3IHRhZ3MgYWRkZWQuXG4gICAgZm9yIChpID0gdG9rZW5zLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICB0b2tlbiA9IHRva2Vuc1tpXTtcbiAgICAgIGlmICh0b2tlbi50eXBlICE9PSAndGV4dCcpIHsgY29udGludWU7IH1cblxuICAgICAgcG9zID0gMDtcbiAgICAgIHRleHQgPSB0b2tlbi5jb250ZW50O1xuICAgICAgcmVnLmxhc3RJbmRleCA9IDA7XG4gICAgICBsZXZlbCA9IHRva2VuLmxldmVsO1xuICAgICAgbm9kZXMgPSBbXTtcblxuICAgICAgd2hpbGUgKChtID0gcmVnLmV4ZWModGV4dCkpKSB7XG4gICAgICAgIGlmIChyZWcubGFzdEluZGV4ID4gcG9zKSB7XG4gICAgICAgICAgbm9kZXMucHVzaCh7XG4gICAgICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgICAgICBjb250ZW50OiB0ZXh0LnNsaWNlKHBvcywgbS5pbmRleCArIG1bMV0ubGVuZ3RoKSxcbiAgICAgICAgICAgIGxldmVsOiBsZXZlbFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgbm9kZXMucHVzaCh7XG4gICAgICAgICAgdHlwZTogJ2FiYnJfb3BlbicsXG4gICAgICAgICAgdGl0bGU6IHN0YXRlLmVudi5hYmJyZXZpYXRpb25zWyc6JyArIG1bMl1dLFxuICAgICAgICAgIGxldmVsOiBsZXZlbCsrXG4gICAgICAgIH0pO1xuICAgICAgICBub2Rlcy5wdXNoKHtcbiAgICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgICAgY29udGVudDogbVsyXSxcbiAgICAgICAgICBsZXZlbDogbGV2ZWxcbiAgICAgICAgfSk7XG4gICAgICAgIG5vZGVzLnB1c2goe1xuICAgICAgICAgIHR5cGU6ICdhYmJyX2Nsb3NlJyxcbiAgICAgICAgICBsZXZlbDogLS1sZXZlbFxuICAgICAgICB9KTtcbiAgICAgICAgcG9zID0gcmVnLmxhc3RJbmRleCAtIG1bM10ubGVuZ3RoO1xuICAgICAgfVxuXG4gICAgICBpZiAoIW5vZGVzLmxlbmd0aCkgeyBjb250aW51ZTsgfVxuXG4gICAgICBpZiAocG9zIDwgdGV4dC5sZW5ndGgpIHtcbiAgICAgICAgbm9kZXMucHVzaCh7XG4gICAgICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgICAgIGNvbnRlbnQ6IHRleHQuc2xpY2UocG9zKSxcbiAgICAgICAgICBsZXZlbDogbGV2ZWxcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIC8vIHJlcGxhY2UgY3VycmVudCBub2RlXG4gICAgICBibG9ja1Rva2Vuc1tqXS5jaGlsZHJlbiA9IHRva2VucyA9IFtdLmNvbmNhdCh0b2tlbnMuc2xpY2UoMCwgaSksIG5vZGVzLCB0b2tlbnMuc2xpY2UoaSArIDEpKTtcbiAgICB9XG4gIH1cbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gYmxvY2soc3RhdGUpIHtcblxuICBpZiAoc3RhdGUuaW5saW5lTW9kZSkge1xuICAgIHN0YXRlLnRva2Vucy5wdXNoKHtcbiAgICAgIHR5cGU6ICdpbmxpbmUnLFxuICAgICAgY29udGVudDogc3RhdGUuc3JjLnJlcGxhY2UoL1xcbi9nLCAnICcpLnRyaW0oKSxcbiAgICAgIGxldmVsOiAwLFxuICAgICAgbGluZXM6IFsgMCwgMSBdLFxuICAgICAgY2hpbGRyZW46IFtdXG4gICAgfSk7XG5cbiAgfSBlbHNlIHtcbiAgICBzdGF0ZS5ibG9jay5wYXJzZShzdGF0ZS5zcmMsIHN0YXRlLm9wdGlvbnMsIHN0YXRlLmVudiwgc3RhdGUudG9rZW5zKTtcbiAgfVxufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGZvb3Rub3RlX2Jsb2NrKHN0YXRlKSB7XG4gIHZhciBpLCBsLCBqLCB0LCBsYXN0UGFyYWdyYXBoLCBsaXN0LCB0b2tlbnMsIGN1cnJlbnQsIGN1cnJlbnRMYWJlbCxcbiAgICAgIGxldmVsID0gMCxcbiAgICAgIGluc2lkZVJlZiA9IGZhbHNlLFxuICAgICAgcmVmVG9rZW5zID0ge307XG5cbiAgaWYgKCFzdGF0ZS5lbnYuZm9vdG5vdGVzKSB7IHJldHVybjsgfVxuXG4gIHN0YXRlLnRva2VucyA9IHN0YXRlLnRva2Vucy5maWx0ZXIoZnVuY3Rpb24odG9rKSB7XG4gICAgaWYgKHRvay50eXBlID09PSAnZm9vdG5vdGVfcmVmZXJlbmNlX29wZW4nKSB7XG4gICAgICBpbnNpZGVSZWYgPSB0cnVlO1xuICAgICAgY3VycmVudCA9IFtdO1xuICAgICAgY3VycmVudExhYmVsID0gdG9rLmxhYmVsO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAodG9rLnR5cGUgPT09ICdmb290bm90ZV9yZWZlcmVuY2VfY2xvc2UnKSB7XG4gICAgICBpbnNpZGVSZWYgPSBmYWxzZTtcbiAgICAgIC8vIHByZXBlbmQgJzonIHRvIGF2b2lkIGNvbmZsaWN0IHdpdGggT2JqZWN0LnByb3RvdHlwZSBtZW1iZXJzXG4gICAgICByZWZUb2tlbnNbJzonICsgY3VycmVudExhYmVsXSA9IGN1cnJlbnQ7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGlmIChpbnNpZGVSZWYpIHsgY3VycmVudC5wdXNoKHRvayk7IH1cbiAgICByZXR1cm4gIWluc2lkZVJlZjtcbiAgfSk7XG5cbiAgaWYgKCFzdGF0ZS5lbnYuZm9vdG5vdGVzLmxpc3QpIHsgcmV0dXJuOyB9XG4gIGxpc3QgPSBzdGF0ZS5lbnYuZm9vdG5vdGVzLmxpc3Q7XG5cbiAgc3RhdGUudG9rZW5zLnB1c2goe1xuICAgIHR5cGU6ICdmb290bm90ZV9ibG9ja19vcGVuJyxcbiAgICBsZXZlbDogbGV2ZWwrK1xuICB9KTtcbiAgZm9yIChpID0gMCwgbCA9IGxpc3QubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgc3RhdGUudG9rZW5zLnB1c2goe1xuICAgICAgdHlwZTogJ2Zvb3Rub3RlX29wZW4nLFxuICAgICAgaWQ6IGksXG4gICAgICBsZXZlbDogbGV2ZWwrK1xuICAgIH0pO1xuXG4gICAgaWYgKGxpc3RbaV0udG9rZW5zKSB7XG4gICAgICB0b2tlbnMgPSBbXTtcbiAgICAgIHRva2Vucy5wdXNoKHtcbiAgICAgICAgdHlwZTogJ3BhcmFncmFwaF9vcGVuJyxcbiAgICAgICAgdGlnaHQ6IGZhbHNlLFxuICAgICAgICBsZXZlbDogbGV2ZWwrK1xuICAgICAgfSk7XG4gICAgICB0b2tlbnMucHVzaCh7XG4gICAgICAgIHR5cGU6ICdpbmxpbmUnLFxuICAgICAgICBjb250ZW50OiAnJyxcbiAgICAgICAgbGV2ZWw6IGxldmVsLFxuICAgICAgICBjaGlsZHJlbjogbGlzdFtpXS50b2tlbnNcbiAgICAgIH0pO1xuICAgICAgdG9rZW5zLnB1c2goe1xuICAgICAgICB0eXBlOiAncGFyYWdyYXBoX2Nsb3NlJyxcbiAgICAgICAgdGlnaHQ6IGZhbHNlLFxuICAgICAgICBsZXZlbDogLS1sZXZlbFxuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmIChsaXN0W2ldLmxhYmVsKSB7XG4gICAgICB0b2tlbnMgPSByZWZUb2tlbnNbJzonICsgbGlzdFtpXS5sYWJlbF07XG4gICAgfVxuXG4gICAgc3RhdGUudG9rZW5zID0gc3RhdGUudG9rZW5zLmNvbmNhdCh0b2tlbnMpO1xuICAgIGlmIChzdGF0ZS50b2tlbnNbc3RhdGUudG9rZW5zLmxlbmd0aCAtIDFdLnR5cGUgPT09ICdwYXJhZ3JhcGhfY2xvc2UnKSB7XG4gICAgICBsYXN0UGFyYWdyYXBoID0gc3RhdGUudG9rZW5zLnBvcCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBsYXN0UGFyYWdyYXBoID0gbnVsbDtcbiAgICB9XG5cbiAgICB0ID0gbGlzdFtpXS5jb3VudCA+IDAgPyBsaXN0W2ldLmNvdW50IDogMTtcbiAgICBmb3IgKGogPSAwOyBqIDwgdDsgaisrKSB7XG4gICAgICBzdGF0ZS50b2tlbnMucHVzaCh7XG4gICAgICAgIHR5cGU6ICdmb290bm90ZV9hbmNob3InLFxuICAgICAgICBpZDogaSxcbiAgICAgICAgc3ViSWQ6IGosXG4gICAgICAgIGxldmVsOiBsZXZlbFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKGxhc3RQYXJhZ3JhcGgpIHtcbiAgICAgIHN0YXRlLnRva2Vucy5wdXNoKGxhc3RQYXJhZ3JhcGgpO1xuICAgIH1cblxuICAgIHN0YXRlLnRva2Vucy5wdXNoKHtcbiAgICAgIHR5cGU6ICdmb290bm90ZV9jbG9zZScsXG4gICAgICBsZXZlbDogLS1sZXZlbFxuICAgIH0pO1xuICB9XG4gIHN0YXRlLnRva2Vucy5wdXNoKHtcbiAgICB0eXBlOiAnZm9vdG5vdGVfYmxvY2tfY2xvc2UnLFxuICAgIGxldmVsOiAtLWxldmVsXG4gIH0pO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpbmxpbmUoc3RhdGUpIHtcbiAgdmFyIHRva2VucyA9IHN0YXRlLnRva2VucywgdG9rLCBpLCBsO1xuXG4gIC8vIFBhcnNlIGlubGluZXNcbiAgZm9yIChpID0gMCwgbCA9IHRva2Vucy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICB0b2sgPSB0b2tlbnNbaV07XG4gICAgaWYgKHRvay50eXBlID09PSAnaW5saW5lJykge1xuICAgICAgc3RhdGUuaW5saW5lLnBhcnNlKHRvay5jb250ZW50LCBzdGF0ZS5vcHRpb25zLCBzdGF0ZS5lbnYsIHRvay5jaGlsZHJlbik7XG4gICAgfVxuICB9XG59O1xuIiwiLy8gUmVwbGFjZSBsaW5rLWxpa2UgdGV4dHMgd2l0aCBsaW5rIG5vZGVzLlxuLy9cbi8vIEN1cnJlbnRseSByZXN0cmljdGVkIGJ5IGBpbmxpbmUudmFsaWRhdGVMaW5rKClgIHRvIGh0dHAvaHR0cHMvZnRwXG4vL1xuJ3VzZSBzdHJpY3QnO1xuXG5cbnZhciBBdXRvbGlua2VyID0gcmVxdWlyZSgnYXV0b2xpbmtlcicpO1xuXG5cbnZhciBMSU5LX1NDQU5fUkUgPSAvd3d3fEB8XFw6XFwvXFwvLztcblxuXG5mdW5jdGlvbiBpc0xpbmtPcGVuKHN0cikge1xuICByZXR1cm4gL148YVs+XFxzXS9pLnRlc3Qoc3RyKTtcbn1cbmZ1bmN0aW9uIGlzTGlua0Nsb3NlKHN0cikge1xuICByZXR1cm4gL148XFwvYVxccyo+L2kudGVzdChzdHIpO1xufVxuXG4vLyBTdHVwaWQgZmFicmljIHRvIGF2b2lkIHNpbmdsZXRvbnMsIGZvciB0aHJlYWQgc2FmZXR5LlxuLy8gUmVxdWlyZWQgZm9yIGVuZ2luZXMgbGlrZSBOYXNob3JuLlxuLy9cbmZ1bmN0aW9uIGNyZWF0ZUxpbmtpZmllcigpIHtcbiAgdmFyIGxpbmtzID0gW107XG4gIHZhciBhdXRvbGlua2VyID0gbmV3IEF1dG9saW5rZXIoe1xuICAgIHN0cmlwUHJlZml4OiBmYWxzZSxcbiAgICB1cmw6IHRydWUsXG4gICAgZW1haWw6IHRydWUsXG4gICAgdHdpdHRlcjogZmFsc2UsXG4gICAgcmVwbGFjZUZuOiBmdW5jdGlvbiAoYXV0b2xpbmtlciwgbWF0Y2gpIHtcbiAgICAgIC8vIE9ubHkgY29sbGVjdCBtYXRjaGVkIHN0cmluZ3MgYnV0IGRvbid0IGNoYW5nZSBhbnl0aGluZy5cbiAgICAgIHN3aXRjaCAobWF0Y2guZ2V0VHlwZSgpKSB7XG4gICAgICAgIC8qZXNsaW50IGRlZmF1bHQtY2FzZTowKi9cbiAgICAgICAgY2FzZSAndXJsJzpcbiAgICAgICAgICBsaW5rcy5wdXNoKHtcbiAgICAgICAgICAgIHRleHQ6IG1hdGNoLm1hdGNoZWRUZXh0LFxuICAgICAgICAgICAgdXJsOiBtYXRjaC5nZXRVcmwoKVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdlbWFpbCc6XG4gICAgICAgICAgbGlua3MucHVzaCh7XG4gICAgICAgICAgICB0ZXh0OiBtYXRjaC5tYXRjaGVkVGV4dCxcbiAgICAgICAgICAgIC8vIG5vcm1hbGl6ZSBlbWFpbCBwcm90b2NvbFxuICAgICAgICAgICAgdXJsOiAnbWFpbHRvOicgKyBtYXRjaC5nZXRFbWFpbCgpLnJlcGxhY2UoL15tYWlsdG86L2ksICcnKVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIHtcbiAgICBsaW5rczogbGlua3MsXG4gICAgYXV0b2xpbmtlcjogYXV0b2xpbmtlclxuICB9O1xufVxuXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gbGlua2lmeShzdGF0ZSkge1xuICB2YXIgaSwgaiwgbCwgdG9rZW5zLCB0b2tlbiwgdGV4dCwgbm9kZXMsIGxuLCBwb3MsIGxldmVsLCBodG1sTGlua0xldmVsLFxuICAgICAgYmxvY2tUb2tlbnMgPSBzdGF0ZS50b2tlbnMsXG4gICAgICBsaW5raWZpZXIgPSBudWxsLCBsaW5rcywgYXV0b2xpbmtlcjtcblxuICBpZiAoIXN0YXRlLm9wdGlvbnMubGlua2lmeSkgeyByZXR1cm47IH1cblxuICBmb3IgKGogPSAwLCBsID0gYmxvY2tUb2tlbnMubGVuZ3RoOyBqIDwgbDsgaisrKSB7XG4gICAgaWYgKGJsb2NrVG9rZW5zW2pdLnR5cGUgIT09ICdpbmxpbmUnKSB7IGNvbnRpbnVlOyB9XG4gICAgdG9rZW5zID0gYmxvY2tUb2tlbnNbal0uY2hpbGRyZW47XG5cbiAgICBodG1sTGlua0xldmVsID0gMDtcblxuICAgIC8vIFdlIHNjYW4gZnJvbSB0aGUgZW5kLCB0byBrZWVwIHBvc2l0aW9uIHdoZW4gbmV3IHRhZ3MgYWRkZWQuXG4gICAgLy8gVXNlIHJldmVyc2VkIGxvZ2ljIGluIGxpbmtzIHN0YXJ0L2VuZCBtYXRjaFxuICAgIGZvciAoaSA9IHRva2Vucy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgdG9rZW4gPSB0b2tlbnNbaV07XG5cbiAgICAgIC8vIFNraXAgY29udGVudCBvZiBtYXJrZG93biBsaW5rc1xuICAgICAgaWYgKHRva2VuLnR5cGUgPT09ICdsaW5rX2Nsb3NlJykge1xuICAgICAgICBpLS07XG4gICAgICAgIHdoaWxlICh0b2tlbnNbaV0ubGV2ZWwgIT09IHRva2VuLmxldmVsICYmIHRva2Vuc1tpXS50eXBlICE9PSAnbGlua19vcGVuJykge1xuICAgICAgICAgIGktLTtcbiAgICAgICAgfVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgLy8gU2tpcCBjb250ZW50IG9mIGh0bWwgdGFnIGxpbmtzXG4gICAgICBpZiAodG9rZW4udHlwZSA9PT0gJ2h0bWx0YWcnKSB7XG4gICAgICAgIGlmIChpc0xpbmtPcGVuKHRva2VuLmNvbnRlbnQpICYmIGh0bWxMaW5rTGV2ZWwgPiAwKSB7XG4gICAgICAgICAgaHRtbExpbmtMZXZlbC0tO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc0xpbmtDbG9zZSh0b2tlbi5jb250ZW50KSkge1xuICAgICAgICAgIGh0bWxMaW5rTGV2ZWwrKztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKGh0bWxMaW5rTGV2ZWwgPiAwKSB7IGNvbnRpbnVlOyB9XG5cbiAgICAgIGlmICh0b2tlbi50eXBlID09PSAndGV4dCcgJiYgTElOS19TQ0FOX1JFLnRlc3QodG9rZW4uY29udGVudCkpIHtcblxuICAgICAgICAvLyBJbml0IGxpbmtpZmllciBpbiBsYXp5IG1hbm5lciwgb25seSBpZiByZXF1aXJlZC5cbiAgICAgICAgaWYgKCFsaW5raWZpZXIpIHtcbiAgICAgICAgICBsaW5raWZpZXIgPSBjcmVhdGVMaW5raWZpZXIoKTtcbiAgICAgICAgICBsaW5rcyA9IGxpbmtpZmllci5saW5rcztcbiAgICAgICAgICBhdXRvbGlua2VyID0gbGlua2lmaWVyLmF1dG9saW5rZXI7XG4gICAgICAgIH1cblxuICAgICAgICB0ZXh0ID0gdG9rZW4uY29udGVudDtcbiAgICAgICAgbGlua3MubGVuZ3RoID0gMDtcbiAgICAgICAgYXV0b2xpbmtlci5saW5rKHRleHQpO1xuXG4gICAgICAgIGlmICghbGlua3MubGVuZ3RoKSB7IGNvbnRpbnVlOyB9XG5cbiAgICAgICAgLy8gTm93IHNwbGl0IHN0cmluZyB0byBub2Rlc1xuICAgICAgICBub2RlcyA9IFtdO1xuICAgICAgICBsZXZlbCA9IHRva2VuLmxldmVsO1xuXG4gICAgICAgIGZvciAobG4gPSAwOyBsbiA8IGxpbmtzLmxlbmd0aDsgbG4rKykge1xuXG4gICAgICAgICAgaWYgKCFzdGF0ZS5pbmxpbmUudmFsaWRhdGVMaW5rKGxpbmtzW2xuXS51cmwpKSB7IGNvbnRpbnVlOyB9XG5cbiAgICAgICAgICBwb3MgPSB0ZXh0LmluZGV4T2YobGlua3NbbG5dLnRleHQpO1xuXG4gICAgICAgICAgaWYgKHBvcykge1xuICAgICAgICAgICAgbGV2ZWwgPSBsZXZlbDtcbiAgICAgICAgICAgIG5vZGVzLnB1c2goe1xuICAgICAgICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgICAgICAgIGNvbnRlbnQ6IHRleHQuc2xpY2UoMCwgcG9zKSxcbiAgICAgICAgICAgICAgbGV2ZWw6IGxldmVsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgbm9kZXMucHVzaCh7XG4gICAgICAgICAgICB0eXBlOiAnbGlua19vcGVuJyxcbiAgICAgICAgICAgIGhyZWY6IGxpbmtzW2xuXS51cmwsXG4gICAgICAgICAgICB0aXRsZTogJycsXG4gICAgICAgICAgICBsZXZlbDogbGV2ZWwrK1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIG5vZGVzLnB1c2goe1xuICAgICAgICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgICAgICAgY29udGVudDogbGlua3NbbG5dLnRleHQsXG4gICAgICAgICAgICBsZXZlbDogbGV2ZWxcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBub2Rlcy5wdXNoKHtcbiAgICAgICAgICAgIHR5cGU6ICdsaW5rX2Nsb3NlJyxcbiAgICAgICAgICAgIGxldmVsOiAtLWxldmVsXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgdGV4dCA9IHRleHQuc2xpY2UocG9zICsgbGlua3NbbG5dLnRleHQubGVuZ3RoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGV4dC5sZW5ndGgpIHtcbiAgICAgICAgICBub2Rlcy5wdXNoKHtcbiAgICAgICAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgICAgICAgIGNvbnRlbnQ6IHRleHQsXG4gICAgICAgICAgICBsZXZlbDogbGV2ZWxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHJlcGxhY2UgY3VycmVudCBub2RlXG4gICAgICAgIGJsb2NrVG9rZW5zW2pdLmNoaWxkcmVuID0gdG9rZW5zID0gW10uY29uY2F0KHRva2Vucy5zbGljZSgwLCBpKSwgbm9kZXMsIHRva2Vucy5zbGljZShpICsgMSkpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuXG52YXIgU3RhdGVJbmxpbmUgICAgICAgICAgPSByZXF1aXJlKCcuLi9ydWxlc19pbmxpbmUvc3RhdGVfaW5saW5lJyk7XG52YXIgcGFyc2VMaW5rTGFiZWwgICAgICAgPSByZXF1aXJlKCcuLi9oZWxwZXJzL3BhcnNlX2xpbmtfbGFiZWwnKTtcbnZhciBwYXJzZUxpbmtEZXN0aW5hdGlvbiA9IHJlcXVpcmUoJy4uL2hlbHBlcnMvcGFyc2VfbGlua19kZXN0aW5hdGlvbicpO1xudmFyIHBhcnNlTGlua1RpdGxlICAgICAgID0gcmVxdWlyZSgnLi4vaGVscGVycy9wYXJzZV9saW5rX3RpdGxlJyk7XG52YXIgbm9ybWFsaXplUmVmZXJlbmNlICAgPSByZXF1aXJlKCcuLi9oZWxwZXJzL25vcm1hbGl6ZV9yZWZlcmVuY2UnKTtcblxuXG5mdW5jdGlvbiBwYXJzZVJlZmVyZW5jZShzdHIsIHBhcnNlciwgb3B0aW9ucywgZW52KSB7XG4gIHZhciBzdGF0ZSwgbGFiZWxFbmQsIHBvcywgbWF4LCBjb2RlLCBzdGFydCwgaHJlZiwgdGl0bGUsIGxhYmVsO1xuXG4gIGlmIChzdHIuY2hhckNvZGVBdCgwKSAhPT0gMHg1Qi8qIFsgKi8pIHsgcmV0dXJuIC0xOyB9XG5cbiAgaWYgKHN0ci5pbmRleE9mKCddOicpID09PSAtMSkgeyByZXR1cm4gLTE7IH1cblxuICBzdGF0ZSA9IG5ldyBTdGF0ZUlubGluZShzdHIsIHBhcnNlciwgb3B0aW9ucywgZW52LCBbXSk7XG4gIGxhYmVsRW5kID0gcGFyc2VMaW5rTGFiZWwoc3RhdGUsIDApO1xuXG4gIGlmIChsYWJlbEVuZCA8IDAgfHwgc3RyLmNoYXJDb2RlQXQobGFiZWxFbmQgKyAxKSAhPT0gMHgzQS8qIDogKi8pIHsgcmV0dXJuIC0xOyB9XG5cbiAgbWF4ID0gc3RhdGUucG9zTWF4O1xuXG4gIC8vIFtsYWJlbF06ICAgZGVzdGluYXRpb24gICAndGl0bGUnXG4gIC8vICAgICAgICAgXl5eIHNraXAgb3B0aW9uYWwgd2hpdGVzcGFjZSBoZXJlXG4gIGZvciAocG9zID0gbGFiZWxFbmQgKyAyOyBwb3MgPCBtYXg7IHBvcysrKSB7XG4gICAgY29kZSA9IHN0YXRlLnNyYy5jaGFyQ29kZUF0KHBvcyk7XG4gICAgaWYgKGNvZGUgIT09IDB4MjAgJiYgY29kZSAhPT0gMHgwQSkgeyBicmVhazsgfVxuICB9XG5cbiAgLy8gW2xhYmVsXTogICBkZXN0aW5hdGlvbiAgICd0aXRsZSdcbiAgLy8gICAgICAgICAgICBeXl5eXl5eXl5eXiBwYXJzZSB0aGlzXG4gIGlmICghcGFyc2VMaW5rRGVzdGluYXRpb24oc3RhdGUsIHBvcykpIHsgcmV0dXJuIC0xOyB9XG4gIGhyZWYgPSBzdGF0ZS5saW5rQ29udGVudDtcbiAgcG9zID0gc3RhdGUucG9zO1xuXG4gIC8vIFtsYWJlbF06ICAgZGVzdGluYXRpb24gICAndGl0bGUnXG4gIC8vICAgICAgICAgICAgICAgICAgICAgICBeXl4gc2tpcHBpbmcgdGhvc2Ugc3BhY2VzXG4gIHN0YXJ0ID0gcG9zO1xuICBmb3IgKHBvcyA9IHBvcyArIDE7IHBvcyA8IG1heDsgcG9zKyspIHtcbiAgICBjb2RlID0gc3RhdGUuc3JjLmNoYXJDb2RlQXQocG9zKTtcbiAgICBpZiAoY29kZSAhPT0gMHgyMCAmJiBjb2RlICE9PSAweDBBKSB7IGJyZWFrOyB9XG4gIH1cblxuICAvLyBbbGFiZWxdOiAgIGRlc3RpbmF0aW9uICAgJ3RpdGxlJ1xuICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgXl5eXl5eXiBwYXJzZSB0aGlzXG4gIGlmIChwb3MgPCBtYXggJiYgc3RhcnQgIT09IHBvcyAmJiBwYXJzZUxpbmtUaXRsZShzdGF0ZSwgcG9zKSkge1xuICAgIHRpdGxlID0gc3RhdGUubGlua0NvbnRlbnQ7XG4gICAgcG9zID0gc3RhdGUucG9zO1xuICB9IGVsc2Uge1xuICAgIHRpdGxlID0gJyc7XG4gICAgcG9zID0gc3RhcnQ7XG4gIH1cblxuICAvLyBlbnN1cmUgdGhhdCB0aGUgZW5kIG9mIHRoZSBsaW5lIGlzIGVtcHR5XG4gIHdoaWxlIChwb3MgPCBtYXggJiYgc3RhdGUuc3JjLmNoYXJDb2RlQXQocG9zKSA9PT0gMHgyMC8qIHNwYWNlICovKSB7IHBvcysrOyB9XG4gIGlmIChwb3MgPCBtYXggJiYgc3RhdGUuc3JjLmNoYXJDb2RlQXQocG9zKSAhPT0gMHgwQSkgeyByZXR1cm4gLTE7IH1cblxuICBsYWJlbCA9IG5vcm1hbGl6ZVJlZmVyZW5jZShzdHIuc2xpY2UoMSwgbGFiZWxFbmQpKTtcbiAgaWYgKHR5cGVvZiBlbnYucmVmZXJlbmNlc1tsYWJlbF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgZW52LnJlZmVyZW5jZXNbbGFiZWxdID0geyB0aXRsZTogdGl0bGUsIGhyZWY6IGhyZWYgfTtcbiAgfVxuXG4gIHJldHVybiBwb3M7XG59XG5cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiByZWZlcmVuY2VzKHN0YXRlKSB7XG4gIHZhciB0b2tlbnMgPSBzdGF0ZS50b2tlbnMsIGksIGwsIGNvbnRlbnQsIHBvcztcblxuICBzdGF0ZS5lbnYucmVmZXJlbmNlcyA9IHN0YXRlLmVudi5yZWZlcmVuY2VzIHx8IHt9O1xuXG4gIGlmIChzdGF0ZS5pbmxpbmVNb2RlKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gU2NhbiBkZWZpbml0aW9ucyBpbiBwYXJhZ3JhcGggaW5saW5lc1xuICBmb3IgKGkgPSAxLCBsID0gdG9rZW5zLmxlbmd0aCAtIDE7IGkgPCBsOyBpKyspIHtcbiAgICBpZiAodG9rZW5zW2ldLnR5cGUgPT09ICdpbmxpbmUnICYmXG4gICAgICAgIHRva2Vuc1tpIC0gMV0udHlwZSA9PT0gJ3BhcmFncmFwaF9vcGVuJyAmJlxuICAgICAgICB0b2tlbnNbaSArIDFdLnR5cGUgPT09ICdwYXJhZ3JhcGhfY2xvc2UnKSB7XG5cbiAgICAgIGNvbnRlbnQgPSB0b2tlbnNbaV0uY29udGVudDtcbiAgICAgIHdoaWxlIChjb250ZW50Lmxlbmd0aCkge1xuICAgICAgICBwb3MgPSBwYXJzZVJlZmVyZW5jZShjb250ZW50LCBzdGF0ZS5pbmxpbmUsIHN0YXRlLm9wdGlvbnMsIHN0YXRlLmVudik7XG4gICAgICAgIGlmIChwb3MgPCAwKSB7IGJyZWFrOyB9XG4gICAgICAgIGNvbnRlbnQgPSBjb250ZW50LnNsaWNlKHBvcykudHJpbSgpO1xuICAgICAgfVxuXG4gICAgICB0b2tlbnNbaV0uY29udGVudCA9IGNvbnRlbnQ7XG4gICAgICBpZiAoIWNvbnRlbnQubGVuZ3RoKSB7XG4gICAgICAgIHRva2Vuc1tpIC0gMV0udGlnaHQgPSB0cnVlO1xuICAgICAgICB0b2tlbnNbaSArIDFdLnRpZ2h0ID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn07XG4iLCIvLyBTaW1wbGUgdHlwb2dyYXBoaWNhbCByZXBsYWNlbWVudHNcbi8vXG4ndXNlIHN0cmljdCc7XG5cbi8vIFRPRE86XG4vLyAtIGZyYWN0aW9uYWxzIDEvMiwgMS80LCAzLzQgLT4gwr0sIMK8LCDCvlxuLy8gLSBtaWx0aXBsaWNhdGlvbiAyIHggNCAtPiAyIMOXIDRcblxudmFyIFJBUkVfUkUgPSAvXFwrLXxcXC5cXC58XFw/XFw/XFw/XFw/fCEhISF8LCx8LS0vO1xuXG52YXIgU0NPUEVEX0FCQlJfUkUgPSAvXFwoKGN8dG18cnxwKVxcKS9pZztcbnZhciBTQ09QRURfQUJCUiA9IHtcbiAgJ2MnOiAnwqknLFxuICAncic6ICfCricsXG4gICdwJzogJ8KnJyxcbiAgJ3RtJzogJ+KEoidcbn07XG5cbmZ1bmN0aW9uIHJlcGxhY2VTY29wZWRBYmJyKHN0cikge1xuICBpZiAoc3RyLmluZGV4T2YoJygnKSA8IDApIHsgcmV0dXJuIHN0cjsgfVxuXG4gIHJldHVybiBzdHIucmVwbGFjZShTQ09QRURfQUJCUl9SRSwgZnVuY3Rpb24obWF0Y2gsIG5hbWUpIHtcbiAgICByZXR1cm4gU0NPUEVEX0FCQlJbbmFtZS50b0xvd2VyQ2FzZSgpXTtcbiAgfSk7XG59XG5cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiByZXBsYWNlKHN0YXRlKSB7XG4gIHZhciBpLCB0b2tlbiwgdGV4dCwgaW5saW5lVG9rZW5zLCBibGtJZHg7XG5cbiAgaWYgKCFzdGF0ZS5vcHRpb25zLnR5cG9ncmFwaGVyKSB7IHJldHVybjsgfVxuXG4gIGZvciAoYmxrSWR4ID0gc3RhdGUudG9rZW5zLmxlbmd0aCAtIDE7IGJsa0lkeCA+PSAwOyBibGtJZHgtLSkge1xuXG4gICAgaWYgKHN0YXRlLnRva2Vuc1tibGtJZHhdLnR5cGUgIT09ICdpbmxpbmUnKSB7IGNvbnRpbnVlOyB9XG5cbiAgICBpbmxpbmVUb2tlbnMgPSBzdGF0ZS50b2tlbnNbYmxrSWR4XS5jaGlsZHJlbjtcblxuICAgIGZvciAoaSA9IGlubGluZVRva2Vucy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgdG9rZW4gPSBpbmxpbmVUb2tlbnNbaV07XG4gICAgICBpZiAodG9rZW4udHlwZSA9PT0gJ3RleHQnKSB7XG4gICAgICAgIHRleHQgPSB0b2tlbi5jb250ZW50O1xuXG4gICAgICAgIHRleHQgPSByZXBsYWNlU2NvcGVkQWJicih0ZXh0KTtcblxuICAgICAgICBpZiAoUkFSRV9SRS50ZXN0KHRleHQpKSB7XG4gICAgICAgICAgdGV4dCA9IHRleHRcbiAgICAgICAgICAgIC5yZXBsYWNlKC9cXCstL2csICfCsScpXG4gICAgICAgICAgICAvLyAuLiwgLi4uLCAuLi4uLi4uIC0+IOKAplxuICAgICAgICAgICAgLy8gYnV0ID8uLi4uLiAmICEuLi4uLiAtPiA/Li4gJiAhLi5cbiAgICAgICAgICAgIC5yZXBsYWNlKC9cXC57Mix9L2csICfigKYnKS5yZXBsYWNlKC8oWz8hXSnigKYvZywgJyQxLi4nKVxuICAgICAgICAgICAgLnJlcGxhY2UoLyhbPyFdKXs0LH0vZywgJyQxJDEkMScpLnJlcGxhY2UoLyx7Mix9L2csICcsJylcbiAgICAgICAgICAgIC8vIGVtLWRhc2hcbiAgICAgICAgICAgIC5yZXBsYWNlKC8oXnxbXi1dKS0tLShbXi1dfCQpL21nLCAnJDFcXHUyMDE0JDInKVxuICAgICAgICAgICAgLy8gZW4tZGFzaFxuICAgICAgICAgICAgLnJlcGxhY2UoLyhefFxccyktLShcXHN8JCkvbWcsICckMVxcdTIwMTMkMicpXG4gICAgICAgICAgICAucmVwbGFjZSgvKF58W14tXFxzXSktLShbXi1cXHNdfCQpL21nLCAnJDFcXHUyMDEzJDInKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRva2VuLmNvbnRlbnQgPSB0ZXh0O1xuICAgICAgfVxuICAgIH1cbiAgfVxufTtcbiIsIi8vIENvbnZlcnQgc3RyYWlnaHQgcXVvdGF0aW9uIG1hcmtzIHRvIHR5cG9ncmFwaGljIG9uZXNcbi8vXG4ndXNlIHN0cmljdCc7XG5cblxudmFyIFFVT1RFX1RFU1RfUkUgPSAvWydcIl0vO1xudmFyIFFVT1RFX1JFID0gL1snXCJdL2c7XG52YXIgUFVOQ1RfUkUgPSAvWy1cXHMoKVxcW1xcXV0vO1xudmFyIEFQT1NUUk9QSEUgPSAn4oCZJztcblxuLy8gVGhpcyBmdW5jdGlvbiByZXR1cm5zIHRydWUgaWYgdGhlIGNoYXJhY3RlciBhdCBgcG9zYFxuLy8gY291bGQgYmUgaW5zaWRlIGEgd29yZC5cbmZ1bmN0aW9uIGlzTGV0dGVyKHN0ciwgcG9zKSB7XG4gIGlmIChwb3MgPCAwIHx8IHBvcyA+PSBzdHIubGVuZ3RoKSB7IHJldHVybiBmYWxzZTsgfVxuICByZXR1cm4gIVBVTkNUX1JFLnRlc3Qoc3RyW3Bvc10pO1xufVxuXG5cbmZ1bmN0aW9uIHJlcGxhY2VBdChzdHIsIGluZGV4LCBjaCkge1xuICByZXR1cm4gc3RyLnN1YnN0cigwLCBpbmRleCkgKyBjaCArIHN0ci5zdWJzdHIoaW5kZXggKyAxKTtcbn1cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHNtYXJ0cXVvdGVzKHN0YXRlKSB7XG4gIC8qZXNsaW50IG1heC1kZXB0aDowKi9cbiAgdmFyIGksIHRva2VuLCB0ZXh0LCB0LCBwb3MsIG1heCwgdGhpc0xldmVsLCBsYXN0U3BhY2UsIG5leHRTcGFjZSwgaXRlbSxcbiAgICAgIGNhbk9wZW4sIGNhbkNsb3NlLCBqLCBpc1NpbmdsZSwgYmxrSWR4LCB0b2tlbnMsXG4gICAgICBzdGFjaztcblxuICBpZiAoIXN0YXRlLm9wdGlvbnMudHlwb2dyYXBoZXIpIHsgcmV0dXJuOyB9XG5cbiAgc3RhY2sgPSBbXTtcblxuICBmb3IgKGJsa0lkeCA9IHN0YXRlLnRva2Vucy5sZW5ndGggLSAxOyBibGtJZHggPj0gMDsgYmxrSWR4LS0pIHtcblxuICAgIGlmIChzdGF0ZS50b2tlbnNbYmxrSWR4XS50eXBlICE9PSAnaW5saW5lJykgeyBjb250aW51ZTsgfVxuXG4gICAgdG9rZW5zID0gc3RhdGUudG9rZW5zW2Jsa0lkeF0uY2hpbGRyZW47XG4gICAgc3RhY2subGVuZ3RoID0gMDtcblxuICAgIGZvciAoaSA9IDA7IGkgPCB0b2tlbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHRva2VuID0gdG9rZW5zW2ldO1xuXG4gICAgICBpZiAodG9rZW4udHlwZSAhPT0gJ3RleHQnIHx8IFFVT1RFX1RFU1RfUkUudGVzdCh0b2tlbi50ZXh0KSkgeyBjb250aW51ZTsgfVxuXG4gICAgICB0aGlzTGV2ZWwgPSB0b2tlbnNbaV0ubGV2ZWw7XG5cbiAgICAgIGZvciAoaiA9IHN0YWNrLmxlbmd0aCAtIDE7IGogPj0gMDsgai0tKSB7XG4gICAgICAgIGlmIChzdGFja1tqXS5sZXZlbCA8PSB0aGlzTGV2ZWwpIHsgYnJlYWs7IH1cbiAgICAgIH1cbiAgICAgIHN0YWNrLmxlbmd0aCA9IGogKyAxO1xuXG4gICAgICB0ZXh0ID0gdG9rZW4uY29udGVudDtcbiAgICAgIHBvcyA9IDA7XG4gICAgICBtYXggPSB0ZXh0Lmxlbmd0aDtcblxuICAgICAgLyplc2xpbnQgbm8tbGFiZWxzOjAsYmxvY2stc2NvcGVkLXZhcjowKi9cbiAgICAgIE9VVEVSOlxuICAgICAgd2hpbGUgKHBvcyA8IG1heCkge1xuICAgICAgICBRVU9URV9SRS5sYXN0SW5kZXggPSBwb3M7XG4gICAgICAgIHQgPSBRVU9URV9SRS5leGVjKHRleHQpO1xuICAgICAgICBpZiAoIXQpIHsgYnJlYWs7IH1cblxuICAgICAgICBsYXN0U3BhY2UgPSAhaXNMZXR0ZXIodGV4dCwgdC5pbmRleCAtIDEpO1xuICAgICAgICBwb3MgPSB0LmluZGV4ICsgMTtcbiAgICAgICAgaXNTaW5nbGUgPSAodFswXSA9PT0gXCInXCIpO1xuICAgICAgICBuZXh0U3BhY2UgPSAhaXNMZXR0ZXIodGV4dCwgcG9zKTtcblxuICAgICAgICBpZiAoIW5leHRTcGFjZSAmJiAhbGFzdFNwYWNlKSB7XG4gICAgICAgICAgLy8gbWlkZGxlIG9mIHdvcmRcbiAgICAgICAgICBpZiAoaXNTaW5nbGUpIHtcbiAgICAgICAgICAgIHRva2VuLmNvbnRlbnQgPSByZXBsYWNlQXQodG9rZW4uY29udGVudCwgdC5pbmRleCwgQVBPU1RST1BIRSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgY2FuT3BlbiA9ICFuZXh0U3BhY2U7XG4gICAgICAgIGNhbkNsb3NlID0gIWxhc3RTcGFjZTtcblxuICAgICAgICBpZiAoY2FuQ2xvc2UpIHtcbiAgICAgICAgICAvLyB0aGlzIGNvdWxkIGJlIGEgY2xvc2luZyBxdW90ZSwgcmV3aW5kIHRoZSBzdGFjayB0byBnZXQgYSBtYXRjaFxuICAgICAgICAgIGZvciAoaiA9IHN0YWNrLmxlbmd0aCAtIDE7IGogPj0gMDsgai0tKSB7XG4gICAgICAgICAgICBpdGVtID0gc3RhY2tbal07XG4gICAgICAgICAgICBpZiAoc3RhY2tbal0ubGV2ZWwgPCB0aGlzTGV2ZWwpIHsgYnJlYWs7IH1cbiAgICAgICAgICAgIGlmIChpdGVtLnNpbmdsZSA9PT0gaXNTaW5nbGUgJiYgc3RhY2tbal0ubGV2ZWwgPT09IHRoaXNMZXZlbCkge1xuICAgICAgICAgICAgICBpdGVtID0gc3RhY2tbal07XG4gICAgICAgICAgICAgIGlmIChpc1NpbmdsZSkge1xuICAgICAgICAgICAgICAgIHRva2Vuc1tpdGVtLnRva2VuXS5jb250ZW50ID0gcmVwbGFjZUF0KHRva2Vuc1tpdGVtLnRva2VuXS5jb250ZW50LCBpdGVtLnBvcywgc3RhdGUub3B0aW9ucy5xdW90ZXNbMl0pO1xuICAgICAgICAgICAgICAgIHRva2VuLmNvbnRlbnQgPSByZXBsYWNlQXQodG9rZW4uY29udGVudCwgdC5pbmRleCwgc3RhdGUub3B0aW9ucy5xdW90ZXNbM10pO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRva2Vuc1tpdGVtLnRva2VuXS5jb250ZW50ID0gcmVwbGFjZUF0KHRva2Vuc1tpdGVtLnRva2VuXS5jb250ZW50LCBpdGVtLnBvcywgc3RhdGUub3B0aW9ucy5xdW90ZXNbMF0pO1xuICAgICAgICAgICAgICAgIHRva2VuLmNvbnRlbnQgPSByZXBsYWNlQXQodG9rZW4uY29udGVudCwgdC5pbmRleCwgc3RhdGUub3B0aW9ucy5xdW90ZXNbMV0pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHN0YWNrLmxlbmd0aCA9IGo7XG4gICAgICAgICAgICAgIGNvbnRpbnVlIE9VVEVSO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjYW5PcGVuKSB7XG4gICAgICAgICAgc3RhY2sucHVzaCh7XG4gICAgICAgICAgICB0b2tlbjogaSxcbiAgICAgICAgICAgIHBvczogdC5pbmRleCxcbiAgICAgICAgICAgIHNpbmdsZTogaXNTaW5nbGUsXG4gICAgICAgICAgICBsZXZlbDogdGhpc0xldmVsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSBpZiAoY2FuQ2xvc2UgJiYgaXNTaW5nbGUpIHtcbiAgICAgICAgICB0b2tlbi5jb250ZW50ID0gcmVwbGFjZUF0KHRva2VuLmNvbnRlbnQsIHQuaW5kZXgsIEFQT1NUUk9QSEUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59O1xuIiwiLy8gUHJvY2VzcyBhdXRvbGlua3MgJzxwcm90b2NvbDouLi4+J1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciB1cmxfc2NoZW1hcyAgID0gcmVxdWlyZSgnLi4vY29tbW9uL3VybF9zY2hlbWFzJyk7XG52YXIgbm9ybWFsaXplTGluayA9IHJlcXVpcmUoJy4uL2hlbHBlcnMvbm9ybWFsaXplX2xpbmsnKTtcblxuXG4vKmVzbGludCBtYXgtbGVuOjAqL1xudmFyIEVNQUlMX1JFICAgID0gL148KFthLXpBLVowLTkuISMkJSYnKitcXC89P15fYHt8fX4tXStAW2EtekEtWjAtOV0oPzpbYS16QS1aMC05LV17MCw2MX1bYS16QS1aMC05XSk/KD86XFwuW2EtekEtWjAtOV0oPzpbYS16QS1aMC05LV17MCw2MX1bYS16QS1aMC05XSk/KSopPi87XG52YXIgQVVUT0xJTktfUkUgPSAvXjwoW2EtekEtWi5cXC1dezEsMjV9KTooW148PlxceDAwLVxceDIwXSopPi87XG5cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBhdXRvbGluayhzdGF0ZSwgc2lsZW50KSB7XG4gIHZhciB0YWlsLCBsaW5rTWF0Y2gsIGVtYWlsTWF0Y2gsIHVybCwgZnVsbFVybCwgcG9zID0gc3RhdGUucG9zO1xuXG4gIGlmIChzdGF0ZS5zcmMuY2hhckNvZGVBdChwb3MpICE9PSAweDNDLyogPCAqLykgeyByZXR1cm4gZmFsc2U7IH1cblxuICB0YWlsID0gc3RhdGUuc3JjLnNsaWNlKHBvcyk7XG5cbiAgaWYgKHRhaWwuaW5kZXhPZignPicpIDwgMCkgeyByZXR1cm4gZmFsc2U7IH1cblxuICBsaW5rTWF0Y2ggPSB0YWlsLm1hdGNoKEFVVE9MSU5LX1JFKTtcblxuICBpZiAobGlua01hdGNoKSB7XG4gICAgaWYgKHVybF9zY2hlbWFzLmluZGV4T2YobGlua01hdGNoWzFdLnRvTG93ZXJDYXNlKCkpIDwgMCkgeyByZXR1cm4gZmFsc2U7IH1cblxuICAgIHVybCA9IGxpbmtNYXRjaFswXS5zbGljZSgxLCAtMSk7XG4gICAgZnVsbFVybCA9IG5vcm1hbGl6ZUxpbmsodXJsKTtcbiAgICBpZiAoIXN0YXRlLnBhcnNlci52YWxpZGF0ZUxpbmsodXJsKSkgeyByZXR1cm4gZmFsc2U7IH1cblxuICAgIGlmICghc2lsZW50KSB7XG4gICAgICBzdGF0ZS5wdXNoKHtcbiAgICAgICAgdHlwZTogJ2xpbmtfb3BlbicsXG4gICAgICAgIGhyZWY6IGZ1bGxVcmwsXG4gICAgICAgIGxldmVsOiBzdGF0ZS5sZXZlbFxuICAgICAgfSk7XG4gICAgICBzdGF0ZS5wdXNoKHtcbiAgICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgICBjb250ZW50OiB1cmwsXG4gICAgICAgIGxldmVsOiBzdGF0ZS5sZXZlbCArIDFcbiAgICAgIH0pO1xuICAgICAgc3RhdGUucHVzaCh7IHR5cGU6ICdsaW5rX2Nsb3NlJywgbGV2ZWw6IHN0YXRlLmxldmVsIH0pO1xuICAgIH1cblxuICAgIHN0YXRlLnBvcyArPSBsaW5rTWF0Y2hbMF0ubGVuZ3RoO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgZW1haWxNYXRjaCA9IHRhaWwubWF0Y2goRU1BSUxfUkUpO1xuXG4gIGlmIChlbWFpbE1hdGNoKSB7XG5cbiAgICB1cmwgPSBlbWFpbE1hdGNoWzBdLnNsaWNlKDEsIC0xKTtcblxuICAgIGZ1bGxVcmwgPSBub3JtYWxpemVMaW5rKCdtYWlsdG86JyArIHVybCk7XG4gICAgaWYgKCFzdGF0ZS5wYXJzZXIudmFsaWRhdGVMaW5rKGZ1bGxVcmwpKSB7IHJldHVybiBmYWxzZTsgfVxuXG4gICAgaWYgKCFzaWxlbnQpIHtcbiAgICAgIHN0YXRlLnB1c2goe1xuICAgICAgICB0eXBlOiAnbGlua19vcGVuJyxcbiAgICAgICAgaHJlZjogZnVsbFVybCxcbiAgICAgICAgbGV2ZWw6IHN0YXRlLmxldmVsXG4gICAgICB9KTtcbiAgICAgIHN0YXRlLnB1c2goe1xuICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgIGNvbnRlbnQ6IHVybCxcbiAgICAgICAgbGV2ZWw6IHN0YXRlLmxldmVsICsgMVxuICAgICAgfSk7XG4gICAgICBzdGF0ZS5wdXNoKHsgdHlwZTogJ2xpbmtfY2xvc2UnLCBsZXZlbDogc3RhdGUubGV2ZWwgfSk7XG4gICAgfVxuXG4gICAgc3RhdGUucG9zICs9IGVtYWlsTWF0Y2hbMF0ubGVuZ3RoO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufTtcbiIsIi8vIFBhcnNlIGJhY2t0aWNrc1xuXG4ndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gYmFja3RpY2tzKHN0YXRlLCBzaWxlbnQpIHtcbiAgdmFyIHN0YXJ0LCBtYXgsIG1hcmtlciwgbWF0Y2hTdGFydCwgbWF0Y2hFbmQsXG4gICAgICBwb3MgPSBzdGF0ZS5wb3MsXG4gICAgICBjaCA9IHN0YXRlLnNyYy5jaGFyQ29kZUF0KHBvcyk7XG5cbiAgaWYgKGNoICE9PSAweDYwLyogYCAqLykgeyByZXR1cm4gZmFsc2U7IH1cblxuICBzdGFydCA9IHBvcztcbiAgcG9zKys7XG4gIG1heCA9IHN0YXRlLnBvc01heDtcblxuICB3aGlsZSAocG9zIDwgbWF4ICYmIHN0YXRlLnNyYy5jaGFyQ29kZUF0KHBvcykgPT09IDB4NjAvKiBgICovKSB7IHBvcysrOyB9XG5cbiAgbWFya2VyID0gc3RhdGUuc3JjLnNsaWNlKHN0YXJ0LCBwb3MpO1xuXG4gIG1hdGNoU3RhcnQgPSBtYXRjaEVuZCA9IHBvcztcblxuICB3aGlsZSAoKG1hdGNoU3RhcnQgPSBzdGF0ZS5zcmMuaW5kZXhPZignYCcsIG1hdGNoRW5kKSkgIT09IC0xKSB7XG4gICAgbWF0Y2hFbmQgPSBtYXRjaFN0YXJ0ICsgMTtcblxuICAgIHdoaWxlIChtYXRjaEVuZCA8IG1heCAmJiBzdGF0ZS5zcmMuY2hhckNvZGVBdChtYXRjaEVuZCkgPT09IDB4NjAvKiBgICovKSB7IG1hdGNoRW5kKys7IH1cblxuICAgIGlmIChtYXRjaEVuZCAtIG1hdGNoU3RhcnQgPT09IG1hcmtlci5sZW5ndGgpIHtcbiAgICAgIGlmICghc2lsZW50KSB7XG4gICAgICAgIHN0YXRlLnB1c2goe1xuICAgICAgICAgIHR5cGU6ICdjb2RlJyxcbiAgICAgICAgICBjb250ZW50OiBzdGF0ZS5zcmMuc2xpY2UocG9zLCBtYXRjaFN0YXJ0KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoL1sgXFxuXSsvZywgJyAnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRyaW0oKSxcbiAgICAgICAgICBibG9jazogZmFsc2UsXG4gICAgICAgICAgbGV2ZWw6IHN0YXRlLmxldmVsXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgc3RhdGUucG9zID0gbWF0Y2hFbmQ7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBpZiAoIXNpbGVudCkgeyBzdGF0ZS5wZW5kaW5nICs9IG1hcmtlcjsgfVxuICBzdGF0ZS5wb3MgKz0gbWFya2VyLmxlbmd0aDtcbiAgcmV0dXJuIHRydWU7XG59O1xuIiwiLy8gUHJvY2VzcyB+fmRlbGV0ZWQgdGV4dH5+XG5cbid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBkZWwoc3RhdGUsIHNpbGVudCkge1xuICB2YXIgZm91bmQsXG4gICAgICBwb3MsXG4gICAgICBzdGFjayxcbiAgICAgIG1heCA9IHN0YXRlLnBvc01heCxcbiAgICAgIHN0YXJ0ID0gc3RhdGUucG9zLFxuICAgICAgbGFzdENoYXIsXG4gICAgICBuZXh0Q2hhcjtcblxuICBpZiAoc3RhdGUuc3JjLmNoYXJDb2RlQXQoc3RhcnQpICE9PSAweDdFLyogfiAqLykgeyByZXR1cm4gZmFsc2U7IH1cbiAgaWYgKHNpbGVudCkgeyByZXR1cm4gZmFsc2U7IH0gLy8gZG9uJ3QgcnVuIGFueSBwYWlycyBpbiB2YWxpZGF0aW9uIG1vZGVcbiAgaWYgKHN0YXJ0ICsgNCA+PSBtYXgpIHsgcmV0dXJuIGZhbHNlOyB9XG4gIGlmIChzdGF0ZS5zcmMuY2hhckNvZGVBdChzdGFydCArIDEpICE9PSAweDdFLyogfiAqLykgeyByZXR1cm4gZmFsc2U7IH1cbiAgaWYgKHN0YXRlLmxldmVsID49IHN0YXRlLm9wdGlvbnMubWF4TmVzdGluZykgeyByZXR1cm4gZmFsc2U7IH1cblxuICBsYXN0Q2hhciA9IHN0YXJ0ID4gMCA/IHN0YXRlLnNyYy5jaGFyQ29kZUF0KHN0YXJ0IC0gMSkgOiAtMTtcbiAgbmV4dENoYXIgPSBzdGF0ZS5zcmMuY2hhckNvZGVBdChzdGFydCArIDIpO1xuXG4gIGlmIChsYXN0Q2hhciA9PT0gMHg3RS8qIH4gKi8pIHsgcmV0dXJuIGZhbHNlOyB9XG4gIGlmIChuZXh0Q2hhciA9PT0gMHg3RS8qIH4gKi8pIHsgcmV0dXJuIGZhbHNlOyB9XG4gIGlmIChuZXh0Q2hhciA9PT0gMHgyMCB8fCBuZXh0Q2hhciA9PT0gMHgwQSkgeyByZXR1cm4gZmFsc2U7IH1cblxuICBwb3MgPSBzdGFydCArIDI7XG4gIHdoaWxlIChwb3MgPCBtYXggJiYgc3RhdGUuc3JjLmNoYXJDb2RlQXQocG9zKSA9PT0gMHg3RS8qIH4gKi8pIHsgcG9zKys7IH1cbiAgaWYgKHBvcyA+IHN0YXJ0ICsgMykge1xuICAgIC8vIHNlcXVlbmNlIG9mIDQrIG1hcmtlcnMgdGFraW5nIGFzIGxpdGVyYWwsIHNhbWUgYXMgaW4gYSBlbXBoYXNpc1xuICAgIHN0YXRlLnBvcyArPSBwb3MgLSBzdGFydDtcbiAgICBpZiAoIXNpbGVudCkgeyBzdGF0ZS5wZW5kaW5nICs9IHN0YXRlLnNyYy5zbGljZShzdGFydCwgcG9zKTsgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgc3RhdGUucG9zID0gc3RhcnQgKyAyO1xuICBzdGFjayA9IDE7XG5cbiAgd2hpbGUgKHN0YXRlLnBvcyArIDEgPCBtYXgpIHtcbiAgICBpZiAoc3RhdGUuc3JjLmNoYXJDb2RlQXQoc3RhdGUucG9zKSA9PT0gMHg3RS8qIH4gKi8pIHtcbiAgICAgIGlmIChzdGF0ZS5zcmMuY2hhckNvZGVBdChzdGF0ZS5wb3MgKyAxKSA9PT0gMHg3RS8qIH4gKi8pIHtcbiAgICAgICAgbGFzdENoYXIgPSBzdGF0ZS5zcmMuY2hhckNvZGVBdChzdGF0ZS5wb3MgLSAxKTtcbiAgICAgICAgbmV4dENoYXIgPSBzdGF0ZS5wb3MgKyAyIDwgbWF4ID8gc3RhdGUuc3JjLmNoYXJDb2RlQXQoc3RhdGUucG9zICsgMikgOiAtMTtcbiAgICAgICAgaWYgKG5leHRDaGFyICE9PSAweDdFLyogfiAqLyAmJiBsYXN0Q2hhciAhPT0gMHg3RS8qIH4gKi8pIHtcbiAgICAgICAgICBpZiAobGFzdENoYXIgIT09IDB4MjAgJiYgbGFzdENoYXIgIT09IDB4MEEpIHtcbiAgICAgICAgICAgIC8vIGNsb3NpbmcgJ35+J1xuICAgICAgICAgICAgc3RhY2stLTtcbiAgICAgICAgICB9IGVsc2UgaWYgKG5leHRDaGFyICE9PSAweDIwICYmIG5leHRDaGFyICE9PSAweDBBKSB7XG4gICAgICAgICAgICAvLyBvcGVuaW5nICd+fidcbiAgICAgICAgICAgIHN0YWNrKys7XG4gICAgICAgICAgfSAvLyBlbHNlIHtcbiAgICAgICAgICAgIC8vICAvLyBzdGFuZGFsb25lICcgfn4gJyBpbmRlbnRlZCB3aXRoIHNwYWNlc1xuICAgICAgICAgICAgLy8gfVxuICAgICAgICAgIGlmIChzdGFjayA8PSAwKSB7XG4gICAgICAgICAgICBmb3VuZCA9IHRydWU7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBzdGF0ZS5wYXJzZXIuc2tpcFRva2VuKHN0YXRlKTtcbiAgfVxuXG4gIGlmICghZm91bmQpIHtcbiAgICAvLyBwYXJzZXIgZmFpbGVkIHRvIGZpbmQgZW5kaW5nIHRhZywgc28gaXQncyBub3QgdmFsaWQgZW1waGFzaXNcbiAgICBzdGF0ZS5wb3MgPSBzdGFydDtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvLyBmb3VuZCFcbiAgc3RhdGUucG9zTWF4ID0gc3RhdGUucG9zO1xuICBzdGF0ZS5wb3MgPSBzdGFydCArIDI7XG5cbiAgaWYgKCFzaWxlbnQpIHtcbiAgICBzdGF0ZS5wdXNoKHsgdHlwZTogJ2RlbF9vcGVuJywgbGV2ZWw6IHN0YXRlLmxldmVsKysgfSk7XG4gICAgc3RhdGUucGFyc2VyLnRva2VuaXplKHN0YXRlKTtcbiAgICBzdGF0ZS5wdXNoKHsgdHlwZTogJ2RlbF9jbG9zZScsIGxldmVsOiAtLXN0YXRlLmxldmVsIH0pO1xuICB9XG5cbiAgc3RhdGUucG9zID0gc3RhdGUucG9zTWF4ICsgMjtcbiAgc3RhdGUucG9zTWF4ID0gbWF4O1xuICByZXR1cm4gdHJ1ZTtcbn07XG4iLCIvLyBQcm9jZXNzICp0aGlzKiBhbmQgX3RoYXRfXG5cbid1c2Ugc3RyaWN0JztcblxuXG5mdW5jdGlvbiBpc0FscGhhTnVtKGNvZGUpIHtcbiAgcmV0dXJuIChjb2RlID49IDB4MzAgLyogMCAqLyAmJiBjb2RlIDw9IDB4MzkgLyogOSAqLykgfHxcbiAgICAgICAgIChjb2RlID49IDB4NDEgLyogQSAqLyAmJiBjb2RlIDw9IDB4NUEgLyogWiAqLykgfHxcbiAgICAgICAgIChjb2RlID49IDB4NjEgLyogYSAqLyAmJiBjb2RlIDw9IDB4N0EgLyogeiAqLyk7XG59XG5cbi8vIHBhcnNlIHNlcXVlbmNlIG9mIGVtcGhhc2lzIG1hcmtlcnMsXG4vLyBcInN0YXJ0XCIgc2hvdWxkIHBvaW50IGF0IGEgdmFsaWQgbWFya2VyXG5mdW5jdGlvbiBzY2FuRGVsaW1zKHN0YXRlLCBzdGFydCkge1xuICB2YXIgcG9zID0gc3RhcnQsIGxhc3RDaGFyLCBuZXh0Q2hhciwgY291bnQsXG4gICAgICBjYW5fb3BlbiA9IHRydWUsXG4gICAgICBjYW5fY2xvc2UgPSB0cnVlLFxuICAgICAgbWF4ID0gc3RhdGUucG9zTWF4LFxuICAgICAgbWFya2VyID0gc3RhdGUuc3JjLmNoYXJDb2RlQXQoc3RhcnQpO1xuXG4gIGxhc3RDaGFyID0gc3RhcnQgPiAwID8gc3RhdGUuc3JjLmNoYXJDb2RlQXQoc3RhcnQgLSAxKSA6IC0xO1xuXG4gIHdoaWxlIChwb3MgPCBtYXggJiYgc3RhdGUuc3JjLmNoYXJDb2RlQXQocG9zKSA9PT0gbWFya2VyKSB7IHBvcysrOyB9XG4gIGlmIChwb3MgPj0gbWF4KSB7IGNhbl9vcGVuID0gZmFsc2U7IH1cbiAgY291bnQgPSBwb3MgLSBzdGFydDtcblxuICBpZiAoY291bnQgPj0gNCkge1xuICAgIC8vIHNlcXVlbmNlIG9mIGZvdXIgb3IgbW9yZSB1bmVzY2FwZWQgbWFya2VycyBjYW4ndCBzdGFydC9lbmQgYW4gZW1waGFzaXNcbiAgICBjYW5fb3BlbiA9IGNhbl9jbG9zZSA9IGZhbHNlO1xuICB9IGVsc2Uge1xuICAgIG5leHRDaGFyID0gcG9zIDwgbWF4ID8gc3RhdGUuc3JjLmNoYXJDb2RlQXQocG9zKSA6IC0xO1xuXG4gICAgLy8gY2hlY2sgd2hpdGVzcGFjZSBjb25kaXRpb25zXG4gICAgaWYgKG5leHRDaGFyID09PSAweDIwIHx8IG5leHRDaGFyID09PSAweDBBKSB7IGNhbl9vcGVuID0gZmFsc2U7IH1cbiAgICBpZiAobGFzdENoYXIgPT09IDB4MjAgfHwgbGFzdENoYXIgPT09IDB4MEEpIHsgY2FuX2Nsb3NlID0gZmFsc2U7IH1cblxuICAgIGlmIChtYXJrZXIgPT09IDB4NUYgLyogXyAqLykge1xuICAgICAgLy8gY2hlY2sgaWYgd2UgYXJlbid0IGluc2lkZSB0aGUgd29yZFxuICAgICAgaWYgKGlzQWxwaGFOdW0obGFzdENoYXIpKSB7IGNhbl9vcGVuID0gZmFsc2U7IH1cbiAgICAgIGlmIChpc0FscGhhTnVtKG5leHRDaGFyKSkgeyBjYW5fY2xvc2UgPSBmYWxzZTsgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgY2FuX29wZW46IGNhbl9vcGVuLFxuICAgIGNhbl9jbG9zZTogY2FuX2Nsb3NlLFxuICAgIGRlbGltczogY291bnRcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBlbXBoYXNpcyhzdGF0ZSwgc2lsZW50KSB7XG4gIHZhciBzdGFydENvdW50LFxuICAgICAgY291bnQsXG4gICAgICBmb3VuZCxcbiAgICAgIG9sZENvdW50LFxuICAgICAgbmV3Q291bnQsXG4gICAgICBzdGFjayxcbiAgICAgIHJlcyxcbiAgICAgIG1heCA9IHN0YXRlLnBvc01heCxcbiAgICAgIHN0YXJ0ID0gc3RhdGUucG9zLFxuICAgICAgbWFya2VyID0gc3RhdGUuc3JjLmNoYXJDb2RlQXQoc3RhcnQpO1xuXG4gIGlmIChtYXJrZXIgIT09IDB4NUYvKiBfICovICYmIG1hcmtlciAhPT0gMHgyQSAvKiAqICovKSB7IHJldHVybiBmYWxzZTsgfVxuICBpZiAoc2lsZW50KSB7IHJldHVybiBmYWxzZTsgfSAvLyBkb24ndCBydW4gYW55IHBhaXJzIGluIHZhbGlkYXRpb24gbW9kZVxuXG4gIHJlcyA9IHNjYW5EZWxpbXMoc3RhdGUsIHN0YXJ0KTtcbiAgc3RhcnRDb3VudCA9IHJlcy5kZWxpbXM7XG4gIGlmICghcmVzLmNhbl9vcGVuKSB7XG4gICAgc3RhdGUucG9zICs9IHN0YXJ0Q291bnQ7XG4gICAgaWYgKCFzaWxlbnQpIHsgc3RhdGUucGVuZGluZyArPSBzdGF0ZS5zcmMuc2xpY2Uoc3RhcnQsIHN0YXRlLnBvcyk7IH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGlmIChzdGF0ZS5sZXZlbCA+PSBzdGF0ZS5vcHRpb25zLm1heE5lc3RpbmcpIHsgcmV0dXJuIGZhbHNlOyB9XG5cbiAgc3RhdGUucG9zID0gc3RhcnQgKyBzdGFydENvdW50O1xuICBzdGFjayA9IFsgc3RhcnRDb3VudCBdO1xuXG4gIHdoaWxlIChzdGF0ZS5wb3MgPCBtYXgpIHtcbiAgICBpZiAoc3RhdGUuc3JjLmNoYXJDb2RlQXQoc3RhdGUucG9zKSA9PT0gbWFya2VyKSB7XG4gICAgICByZXMgPSBzY2FuRGVsaW1zKHN0YXRlLCBzdGF0ZS5wb3MpO1xuICAgICAgY291bnQgPSByZXMuZGVsaW1zO1xuICAgICAgaWYgKHJlcy5jYW5fY2xvc2UpIHtcbiAgICAgICAgb2xkQ291bnQgPSBzdGFjay5wb3AoKTtcbiAgICAgICAgbmV3Q291bnQgPSBjb3VudDtcblxuICAgICAgICB3aGlsZSAob2xkQ291bnQgIT09IG5ld0NvdW50KSB7XG4gICAgICAgICAgaWYgKG5ld0NvdW50IDwgb2xkQ291bnQpIHtcbiAgICAgICAgICAgIHN0YWNrLnB1c2gob2xkQ291bnQgLSBuZXdDb3VudCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBhc3NlcnQobmV3Q291bnQgPiBvbGRDb3VudClcbiAgICAgICAgICBuZXdDb3VudCAtPSBvbGRDb3VudDtcblxuICAgICAgICAgIGlmIChzdGFjay5sZW5ndGggPT09IDApIHsgYnJlYWs7IH1cbiAgICAgICAgICBzdGF0ZS5wb3MgKz0gb2xkQ291bnQ7XG4gICAgICAgICAgb2xkQ291bnQgPSBzdGFjay5wb3AoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzdGFjay5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICBzdGFydENvdW50ID0gb2xkQ291bnQ7XG4gICAgICAgICAgZm91bmQgPSB0cnVlO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIHN0YXRlLnBvcyArPSBjb3VudDtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChyZXMuY2FuX29wZW4pIHsgc3RhY2sucHVzaChjb3VudCk7IH1cbiAgICAgIHN0YXRlLnBvcyArPSBjb3VudDtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIHN0YXRlLnBhcnNlci5za2lwVG9rZW4oc3RhdGUpO1xuICB9XG5cbiAgaWYgKCFmb3VuZCkge1xuICAgIC8vIHBhcnNlciBmYWlsZWQgdG8gZmluZCBlbmRpbmcgdGFnLCBzbyBpdCdzIG5vdCB2YWxpZCBlbXBoYXNpc1xuICAgIHN0YXRlLnBvcyA9IHN0YXJ0O1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8vIGZvdW5kIVxuICBzdGF0ZS5wb3NNYXggPSBzdGF0ZS5wb3M7XG4gIHN0YXRlLnBvcyA9IHN0YXJ0ICsgc3RhcnRDb3VudDtcblxuICBpZiAoIXNpbGVudCkge1xuICAgIGlmIChzdGFydENvdW50ID09PSAyIHx8IHN0YXJ0Q291bnQgPT09IDMpIHtcbiAgICAgIHN0YXRlLnB1c2goeyB0eXBlOiAnc3Ryb25nX29wZW4nLCBsZXZlbDogc3RhdGUubGV2ZWwrKyB9KTtcbiAgICB9XG4gICAgaWYgKHN0YXJ0Q291bnQgPT09IDEgfHwgc3RhcnRDb3VudCA9PT0gMykge1xuICAgICAgc3RhdGUucHVzaCh7IHR5cGU6ICdlbV9vcGVuJywgbGV2ZWw6IHN0YXRlLmxldmVsKysgfSk7XG4gICAgfVxuXG4gICAgc3RhdGUucGFyc2VyLnRva2VuaXplKHN0YXRlKTtcblxuICAgIGlmIChzdGFydENvdW50ID09PSAxIHx8IHN0YXJ0Q291bnQgPT09IDMpIHtcbiAgICAgIHN0YXRlLnB1c2goeyB0eXBlOiAnZW1fY2xvc2UnLCBsZXZlbDogLS1zdGF0ZS5sZXZlbCB9KTtcbiAgICB9XG4gICAgaWYgKHN0YXJ0Q291bnQgPT09IDIgfHwgc3RhcnRDb3VudCA9PT0gMykge1xuICAgICAgc3RhdGUucHVzaCh7IHR5cGU6ICdzdHJvbmdfY2xvc2UnLCBsZXZlbDogLS1zdGF0ZS5sZXZlbCB9KTtcbiAgICB9XG4gIH1cblxuICBzdGF0ZS5wb3MgPSBzdGF0ZS5wb3NNYXggKyBzdGFydENvdW50O1xuICBzdGF0ZS5wb3NNYXggPSBtYXg7XG4gIHJldHVybiB0cnVlO1xufTtcbiIsIi8vIFByb2Nlc3MgaHRtbCBlbnRpdHkgLSAmIzEyMzssICYjeEFGOywgJnF1b3Q7LCAuLi5cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgZW50aXRpZXMgICAgICAgICAgPSByZXF1aXJlKCcuLi9jb21tb24vZW50aXRpZXMnKTtcbnZhciBoYXMgICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4uL2NvbW1vbi91dGlscycpLmhhcztcbnZhciBpc1ZhbGlkRW50aXR5Q29kZSA9IHJlcXVpcmUoJy4uL2NvbW1vbi91dGlscycpLmlzVmFsaWRFbnRpdHlDb2RlO1xudmFyIGZyb21Db2RlUG9pbnQgICAgID0gcmVxdWlyZSgnLi4vY29tbW9uL3V0aWxzJykuZnJvbUNvZGVQb2ludDtcblxuXG52YXIgRElHSVRBTF9SRSA9IC9eJiMoKD86eFthLWYwLTldezEsOH18WzAtOV17MSw4fSkpOy9pO1xudmFyIE5BTUVEX1JFICAgPSAvXiYoW2Etel1bYS16MC05XXsxLDMxfSk7L2k7XG5cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBlbnRpdHkoc3RhdGUsIHNpbGVudCkge1xuICB2YXIgY2gsIGNvZGUsIG1hdGNoLCBwb3MgPSBzdGF0ZS5wb3MsIG1heCA9IHN0YXRlLnBvc01heDtcblxuICBpZiAoc3RhdGUuc3JjLmNoYXJDb2RlQXQocG9zKSAhPT0gMHgyNi8qICYgKi8pIHsgcmV0dXJuIGZhbHNlOyB9XG5cbiAgaWYgKHBvcyArIDEgPCBtYXgpIHtcbiAgICBjaCA9IHN0YXRlLnNyYy5jaGFyQ29kZUF0KHBvcyArIDEpO1xuXG4gICAgaWYgKGNoID09PSAweDIzIC8qICMgKi8pIHtcbiAgICAgIG1hdGNoID0gc3RhdGUuc3JjLnNsaWNlKHBvcykubWF0Y2goRElHSVRBTF9SRSk7XG4gICAgICBpZiAobWF0Y2gpIHtcbiAgICAgICAgaWYgKCFzaWxlbnQpIHtcbiAgICAgICAgICBjb2RlID0gbWF0Y2hbMV1bMF0udG9Mb3dlckNhc2UoKSA9PT0gJ3gnID8gcGFyc2VJbnQobWF0Y2hbMV0uc2xpY2UoMSksIDE2KSA6IHBhcnNlSW50KG1hdGNoWzFdLCAxMCk7XG4gICAgICAgICAgc3RhdGUucGVuZGluZyArPSBpc1ZhbGlkRW50aXR5Q29kZShjb2RlKSA/IGZyb21Db2RlUG9pbnQoY29kZSkgOiBmcm9tQ29kZVBvaW50KDB4RkZGRCk7XG4gICAgICAgIH1cbiAgICAgICAgc3RhdGUucG9zICs9IG1hdGNoWzBdLmxlbmd0aDtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIG1hdGNoID0gc3RhdGUuc3JjLnNsaWNlKHBvcykubWF0Y2goTkFNRURfUkUpO1xuICAgICAgaWYgKG1hdGNoKSB7XG4gICAgICAgIGlmIChoYXMoZW50aXRpZXMsIG1hdGNoWzFdKSkge1xuICAgICAgICAgIGlmICghc2lsZW50KSB7IHN0YXRlLnBlbmRpbmcgKz0gZW50aXRpZXNbbWF0Y2hbMV1dOyB9XG4gICAgICAgICAgc3RhdGUucG9zICs9IG1hdGNoWzBdLmxlbmd0aDtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlmICghc2lsZW50KSB7IHN0YXRlLnBlbmRpbmcgKz0gJyYnOyB9XG4gIHN0YXRlLnBvcysrO1xuICByZXR1cm4gdHJ1ZTtcbn07XG4iLCIvLyBQcm9jZWVzcyBlc2NhcGVkIGNoYXJzIGFuZCBoYXJkYnJlYWtzXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIEVTQ0FQRUQgPSBbXTtcblxuZm9yICh2YXIgaSA9IDA7IGkgPCAyNTY7IGkrKykgeyBFU0NBUEVELnB1c2goMCk7IH1cblxuJ1xcXFwhXCIjJCUmXFwnKCkqKywuLzo7PD0+P0BbXV5fYHt8fX4tJ1xuICAuc3BsaXQoJycpLmZvckVhY2goZnVuY3Rpb24oY2gpIHsgRVNDQVBFRFtjaC5jaGFyQ29kZUF0KDApXSA9IDE7IH0pO1xuXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZXNjYXBlKHN0YXRlLCBzaWxlbnQpIHtcbiAgdmFyIGNoLCBwb3MgPSBzdGF0ZS5wb3MsIG1heCA9IHN0YXRlLnBvc01heDtcblxuICBpZiAoc3RhdGUuc3JjLmNoYXJDb2RlQXQocG9zKSAhPT0gMHg1Qy8qIFxcICovKSB7IHJldHVybiBmYWxzZTsgfVxuXG4gIHBvcysrO1xuXG4gIGlmIChwb3MgPCBtYXgpIHtcbiAgICBjaCA9IHN0YXRlLnNyYy5jaGFyQ29kZUF0KHBvcyk7XG5cbiAgICBpZiAoY2ggPCAyNTYgJiYgRVNDQVBFRFtjaF0gIT09IDApIHtcbiAgICAgIGlmICghc2lsZW50KSB7IHN0YXRlLnBlbmRpbmcgKz0gc3RhdGUuc3JjW3Bvc107IH1cbiAgICAgIHN0YXRlLnBvcyArPSAyO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgaWYgKGNoID09PSAweDBBKSB7XG4gICAgICBpZiAoIXNpbGVudCkge1xuICAgICAgICBzdGF0ZS5wdXNoKHtcbiAgICAgICAgICB0eXBlOiAnaGFyZGJyZWFrJyxcbiAgICAgICAgICBsZXZlbDogc3RhdGUubGV2ZWxcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHBvcysrO1xuICAgICAgLy8gc2tpcCBsZWFkaW5nIHdoaXRlc3BhY2VzIGZyb20gbmV4dCBsaW5lXG4gICAgICB3aGlsZSAocG9zIDwgbWF4ICYmIHN0YXRlLnNyYy5jaGFyQ29kZUF0KHBvcykgPT09IDB4MjApIHsgcG9zKys7IH1cblxuICAgICAgc3RhdGUucG9zID0gcG9zO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG5cbiAgaWYgKCFzaWxlbnQpIHsgc3RhdGUucGVuZGluZyArPSAnXFxcXCc7IH1cbiAgc3RhdGUucG9zKys7XG4gIHJldHVybiB0cnVlO1xufTtcbiIsIi8vIFByb2Nlc3MgaW5saW5lIGZvb3Rub3RlcyAoXlsuLi5dKVxuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBwYXJzZUxpbmtMYWJlbCA9IHJlcXVpcmUoJy4uL2hlbHBlcnMvcGFyc2VfbGlua19sYWJlbCcpO1xuXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZm9vdG5vdGVfaW5saW5lKHN0YXRlLCBzaWxlbnQpIHtcbiAgdmFyIGxhYmVsU3RhcnQsXG4gICAgICBsYWJlbEVuZCxcbiAgICAgIGZvb3Rub3RlSWQsXG4gICAgICBvbGRMZW5ndGgsXG4gICAgICBtYXggPSBzdGF0ZS5wb3NNYXgsXG4gICAgICBzdGFydCA9IHN0YXRlLnBvcztcblxuICBpZiAoc3RhcnQgKyAyID49IG1heCkgeyByZXR1cm4gZmFsc2U7IH1cbiAgaWYgKHN0YXRlLnNyYy5jaGFyQ29kZUF0KHN0YXJ0KSAhPT0gMHg1RS8qIF4gKi8pIHsgcmV0dXJuIGZhbHNlOyB9XG4gIGlmIChzdGF0ZS5zcmMuY2hhckNvZGVBdChzdGFydCArIDEpICE9PSAweDVCLyogWyAqLykgeyByZXR1cm4gZmFsc2U7IH1cbiAgaWYgKHN0YXRlLmxldmVsID49IHN0YXRlLm9wdGlvbnMubWF4TmVzdGluZykgeyByZXR1cm4gZmFsc2U7IH1cblxuICBsYWJlbFN0YXJ0ID0gc3RhcnQgKyAyO1xuICBsYWJlbEVuZCA9IHBhcnNlTGlua0xhYmVsKHN0YXRlLCBzdGFydCArIDEpO1xuXG4gIC8vIHBhcnNlciBmYWlsZWQgdG8gZmluZCAnXScsIHNvIGl0J3Mgbm90IGEgdmFsaWQgbm90ZVxuICBpZiAobGFiZWxFbmQgPCAwKSB7IHJldHVybiBmYWxzZTsgfVxuXG4gIC8vIFdlIGZvdW5kIHRoZSBlbmQgb2YgdGhlIGxpbmssIGFuZCBrbm93IGZvciBhIGZhY3QgaXQncyBhIHZhbGlkIGxpbms7XG4gIC8vIHNvIGFsbCB0aGF0J3MgbGVmdCB0byBkbyBpcyB0byBjYWxsIHRva2VuaXplci5cbiAgLy9cbiAgaWYgKCFzaWxlbnQpIHtcbiAgICBpZiAoIXN0YXRlLmVudi5mb290bm90ZXMpIHsgc3RhdGUuZW52LmZvb3Rub3RlcyA9IHt9OyB9XG4gICAgaWYgKCFzdGF0ZS5lbnYuZm9vdG5vdGVzLmxpc3QpIHsgc3RhdGUuZW52LmZvb3Rub3Rlcy5saXN0ID0gW107IH1cbiAgICBmb290bm90ZUlkID0gc3RhdGUuZW52LmZvb3Rub3Rlcy5saXN0Lmxlbmd0aDtcblxuICAgIHN0YXRlLnBvcyA9IGxhYmVsU3RhcnQ7XG4gICAgc3RhdGUucG9zTWF4ID0gbGFiZWxFbmQ7XG5cbiAgICBzdGF0ZS5wdXNoKHtcbiAgICAgIHR5cGU6ICdmb290bm90ZV9yZWYnLFxuICAgICAgaWQ6IGZvb3Rub3RlSWQsXG4gICAgICBsZXZlbDogc3RhdGUubGV2ZWxcbiAgICB9KTtcbiAgICBzdGF0ZS5saW5rTGV2ZWwrKztcbiAgICBvbGRMZW5ndGggPSBzdGF0ZS50b2tlbnMubGVuZ3RoO1xuICAgIHN0YXRlLnBhcnNlci50b2tlbml6ZShzdGF0ZSk7XG4gICAgc3RhdGUuZW52LmZvb3Rub3Rlcy5saXN0W2Zvb3Rub3RlSWRdID0geyB0b2tlbnM6IHN0YXRlLnRva2Vucy5zcGxpY2Uob2xkTGVuZ3RoKSB9O1xuICAgIHN0YXRlLmxpbmtMZXZlbC0tO1xuICB9XG5cbiAgc3RhdGUucG9zID0gbGFiZWxFbmQgKyAxO1xuICBzdGF0ZS5wb3NNYXggPSBtYXg7XG4gIHJldHVybiB0cnVlO1xufTtcbiIsIi8vIFByb2Nlc3MgZm9vdG5vdGUgcmVmZXJlbmNlcyAoW14uLi5dKVxuXG4ndXNlIHN0cmljdCc7XG5cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBmb290bm90ZV9yZWYoc3RhdGUsIHNpbGVudCkge1xuICB2YXIgbGFiZWwsXG4gICAgICBwb3MsXG4gICAgICBmb290bm90ZUlkLFxuICAgICAgZm9vdG5vdGVTdWJJZCxcbiAgICAgIG1heCA9IHN0YXRlLnBvc01heCxcbiAgICAgIHN0YXJ0ID0gc3RhdGUucG9zO1xuXG4gIC8vIHNob3VsZCBiZSBhdCBsZWFzdCA0IGNoYXJzIC0gXCJbXnhdXCJcbiAgaWYgKHN0YXJ0ICsgMyA+IG1heCkgeyByZXR1cm4gZmFsc2U7IH1cblxuICBpZiAoIXN0YXRlLmVudi5mb290bm90ZXMgfHwgIXN0YXRlLmVudi5mb290bm90ZXMucmVmcykgeyByZXR1cm4gZmFsc2U7IH1cbiAgaWYgKHN0YXRlLnNyYy5jaGFyQ29kZUF0KHN0YXJ0KSAhPT0gMHg1Qi8qIFsgKi8pIHsgcmV0dXJuIGZhbHNlOyB9XG4gIGlmIChzdGF0ZS5zcmMuY2hhckNvZGVBdChzdGFydCArIDEpICE9PSAweDVFLyogXiAqLykgeyByZXR1cm4gZmFsc2U7IH1cbiAgaWYgKHN0YXRlLmxldmVsID49IHN0YXRlLm9wdGlvbnMubWF4TmVzdGluZykgeyByZXR1cm4gZmFsc2U7IH1cblxuICBmb3IgKHBvcyA9IHN0YXJ0ICsgMjsgcG9zIDwgbWF4OyBwb3MrKykge1xuICAgIGlmIChzdGF0ZS5zcmMuY2hhckNvZGVBdChwb3MpID09PSAweDIwKSB7IHJldHVybiBmYWxzZTsgfVxuICAgIGlmIChzdGF0ZS5zcmMuY2hhckNvZGVBdChwb3MpID09PSAweDBBKSB7IHJldHVybiBmYWxzZTsgfVxuICAgIGlmIChzdGF0ZS5zcmMuY2hhckNvZGVBdChwb3MpID09PSAweDVEIC8qIF0gKi8pIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIGlmIChwb3MgPT09IHN0YXJ0ICsgMikgeyByZXR1cm4gZmFsc2U7IH0gLy8gbm8gZW1wdHkgZm9vdG5vdGUgbGFiZWxzXG4gIGlmIChwb3MgPj0gbWF4KSB7IHJldHVybiBmYWxzZTsgfVxuICBwb3MrKztcblxuICBsYWJlbCA9IHN0YXRlLnNyYy5zbGljZShzdGFydCArIDIsIHBvcyAtIDEpO1xuICBpZiAodHlwZW9mIHN0YXRlLmVudi5mb290bm90ZXMucmVmc1snOicgKyBsYWJlbF0gPT09ICd1bmRlZmluZWQnKSB7IHJldHVybiBmYWxzZTsgfVxuXG4gIGlmICghc2lsZW50KSB7XG4gICAgaWYgKCFzdGF0ZS5lbnYuZm9vdG5vdGVzLmxpc3QpIHsgc3RhdGUuZW52LmZvb3Rub3Rlcy5saXN0ID0gW107IH1cblxuICAgIGlmIChzdGF0ZS5lbnYuZm9vdG5vdGVzLnJlZnNbJzonICsgbGFiZWxdIDwgMCkge1xuICAgICAgZm9vdG5vdGVJZCA9IHN0YXRlLmVudi5mb290bm90ZXMubGlzdC5sZW5ndGg7XG4gICAgICBzdGF0ZS5lbnYuZm9vdG5vdGVzLmxpc3RbZm9vdG5vdGVJZF0gPSB7IGxhYmVsOiBsYWJlbCwgY291bnQ6IDAgfTtcbiAgICAgIHN0YXRlLmVudi5mb290bm90ZXMucmVmc1snOicgKyBsYWJlbF0gPSBmb290bm90ZUlkO1xuICAgIH0gZWxzZSB7XG4gICAgICBmb290bm90ZUlkID0gc3RhdGUuZW52LmZvb3Rub3Rlcy5yZWZzWyc6JyArIGxhYmVsXTtcbiAgICB9XG5cbiAgICBmb290bm90ZVN1YklkID0gc3RhdGUuZW52LmZvb3Rub3Rlcy5saXN0W2Zvb3Rub3RlSWRdLmNvdW50O1xuICAgIHN0YXRlLmVudi5mb290bm90ZXMubGlzdFtmb290bm90ZUlkXS5jb3VudCsrO1xuXG4gICAgc3RhdGUucHVzaCh7XG4gICAgICB0eXBlOiAnZm9vdG5vdGVfcmVmJyxcbiAgICAgIGlkOiBmb290bm90ZUlkLFxuICAgICAgc3ViSWQ6IGZvb3Rub3RlU3ViSWQsXG4gICAgICBsZXZlbDogc3RhdGUubGV2ZWxcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRlLnBvcyA9IHBvcztcbiAgc3RhdGUucG9zTWF4ID0gbWF4O1xuICByZXR1cm4gdHJ1ZTtcbn07XG4iLCIvLyBQcm9jZXNzIGh0bWwgdGFnc1xuXG4ndXNlIHN0cmljdCc7XG5cblxudmFyIEhUTUxfVEFHX1JFID0gcmVxdWlyZSgnLi4vY29tbW9uL2h0bWxfcmUnKS5IVE1MX1RBR19SRTtcblxuXG5mdW5jdGlvbiBpc0xldHRlcihjaCkge1xuICAvKmVzbGludCBuby1iaXR3aXNlOjAqL1xuICB2YXIgbGMgPSBjaCB8IDB4MjA7IC8vIHRvIGxvd2VyIGNhc2VcbiAgcmV0dXJuIChsYyA+PSAweDYxLyogYSAqLykgJiYgKGxjIDw9IDB4N2EvKiB6ICovKTtcbn1cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGh0bWx0YWcoc3RhdGUsIHNpbGVudCkge1xuICB2YXIgY2gsIG1hdGNoLCBtYXgsIHBvcyA9IHN0YXRlLnBvcztcblxuICBpZiAoIXN0YXRlLm9wdGlvbnMuaHRtbCkgeyByZXR1cm4gZmFsc2U7IH1cblxuICAvLyBDaGVjayBzdGFydFxuICBtYXggPSBzdGF0ZS5wb3NNYXg7XG4gIGlmIChzdGF0ZS5zcmMuY2hhckNvZGVBdChwb3MpICE9PSAweDNDLyogPCAqLyB8fFxuICAgICAgcG9zICsgMiA+PSBtYXgpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvLyBRdWljayBmYWlsIG9uIHNlY29uZCBjaGFyXG4gIGNoID0gc3RhdGUuc3JjLmNoYXJDb2RlQXQocG9zICsgMSk7XG4gIGlmIChjaCAhPT0gMHgyMS8qICEgKi8gJiZcbiAgICAgIGNoICE9PSAweDNGLyogPyAqLyAmJlxuICAgICAgY2ggIT09IDB4MkYvKiAvICovICYmXG4gICAgICAhaXNMZXR0ZXIoY2gpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgbWF0Y2ggPSBzdGF0ZS5zcmMuc2xpY2UocG9zKS5tYXRjaChIVE1MX1RBR19SRSk7XG4gIGlmICghbWF0Y2gpIHsgcmV0dXJuIGZhbHNlOyB9XG5cbiAgaWYgKCFzaWxlbnQpIHtcbiAgICBzdGF0ZS5wdXNoKHtcbiAgICAgIHR5cGU6ICdodG1sdGFnJyxcbiAgICAgIGNvbnRlbnQ6IHN0YXRlLnNyYy5zbGljZShwb3MsIHBvcyArIG1hdGNoWzBdLmxlbmd0aCksXG4gICAgICBsZXZlbDogc3RhdGUubGV2ZWxcbiAgICB9KTtcbiAgfVxuICBzdGF0ZS5wb3MgKz0gbWF0Y2hbMF0ubGVuZ3RoO1xuICByZXR1cm4gdHJ1ZTtcbn07XG4iLCIvLyBQcm9jZXNzICsraW5zZXJ0ZWQgdGV4dCsrXG5cbid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpbnMoc3RhdGUsIHNpbGVudCkge1xuICB2YXIgZm91bmQsXG4gICAgICBwb3MsXG4gICAgICBzdGFjayxcbiAgICAgIG1heCA9IHN0YXRlLnBvc01heCxcbiAgICAgIHN0YXJ0ID0gc3RhdGUucG9zLFxuICAgICAgbGFzdENoYXIsXG4gICAgICBuZXh0Q2hhcjtcblxuICBpZiAoc3RhdGUuc3JjLmNoYXJDb2RlQXQoc3RhcnQpICE9PSAweDJCLyogKyAqLykgeyByZXR1cm4gZmFsc2U7IH1cbiAgaWYgKHNpbGVudCkgeyByZXR1cm4gZmFsc2U7IH0gLy8gZG9uJ3QgcnVuIGFueSBwYWlycyBpbiB2YWxpZGF0aW9uIG1vZGVcbiAgaWYgKHN0YXJ0ICsgNCA+PSBtYXgpIHsgcmV0dXJuIGZhbHNlOyB9XG4gIGlmIChzdGF0ZS5zcmMuY2hhckNvZGVBdChzdGFydCArIDEpICE9PSAweDJCLyogKyAqLykgeyByZXR1cm4gZmFsc2U7IH1cbiAgaWYgKHN0YXRlLmxldmVsID49IHN0YXRlLm9wdGlvbnMubWF4TmVzdGluZykgeyByZXR1cm4gZmFsc2U7IH1cblxuICBsYXN0Q2hhciA9IHN0YXJ0ID4gMCA/IHN0YXRlLnNyYy5jaGFyQ29kZUF0KHN0YXJ0IC0gMSkgOiAtMTtcbiAgbmV4dENoYXIgPSBzdGF0ZS5zcmMuY2hhckNvZGVBdChzdGFydCArIDIpO1xuXG4gIGlmIChsYXN0Q2hhciA9PT0gMHgyQi8qICsgKi8pIHsgcmV0dXJuIGZhbHNlOyB9XG4gIGlmIChuZXh0Q2hhciA9PT0gMHgyQi8qICsgKi8pIHsgcmV0dXJuIGZhbHNlOyB9XG4gIGlmIChuZXh0Q2hhciA9PT0gMHgyMCB8fCBuZXh0Q2hhciA9PT0gMHgwQSkgeyByZXR1cm4gZmFsc2U7IH1cblxuICBwb3MgPSBzdGFydCArIDI7XG4gIHdoaWxlIChwb3MgPCBtYXggJiYgc3RhdGUuc3JjLmNoYXJDb2RlQXQocG9zKSA9PT0gMHgyQi8qICsgKi8pIHsgcG9zKys7IH1cbiAgaWYgKHBvcyAhPT0gc3RhcnQgKyAyKSB7XG4gICAgLy8gc2VxdWVuY2Ugb2YgMysgbWFya2VycyB0YWtpbmcgYXMgbGl0ZXJhbCwgc2FtZSBhcyBpbiBhIGVtcGhhc2lzXG4gICAgc3RhdGUucG9zICs9IHBvcyAtIHN0YXJ0O1xuICAgIGlmICghc2lsZW50KSB7IHN0YXRlLnBlbmRpbmcgKz0gc3RhdGUuc3JjLnNsaWNlKHN0YXJ0LCBwb3MpOyB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBzdGF0ZS5wb3MgPSBzdGFydCArIDI7XG4gIHN0YWNrID0gMTtcblxuICB3aGlsZSAoc3RhdGUucG9zICsgMSA8IG1heCkge1xuICAgIGlmIChzdGF0ZS5zcmMuY2hhckNvZGVBdChzdGF0ZS5wb3MpID09PSAweDJCLyogKyAqLykge1xuICAgICAgaWYgKHN0YXRlLnNyYy5jaGFyQ29kZUF0KHN0YXRlLnBvcyArIDEpID09PSAweDJCLyogKyAqLykge1xuICAgICAgICBsYXN0Q2hhciA9IHN0YXRlLnNyYy5jaGFyQ29kZUF0KHN0YXRlLnBvcyAtIDEpO1xuICAgICAgICBuZXh0Q2hhciA9IHN0YXRlLnBvcyArIDIgPCBtYXggPyBzdGF0ZS5zcmMuY2hhckNvZGVBdChzdGF0ZS5wb3MgKyAyKSA6IC0xO1xuICAgICAgICBpZiAobmV4dENoYXIgIT09IDB4MkIvKiArICovICYmIGxhc3RDaGFyICE9PSAweDJCLyogKyAqLykge1xuICAgICAgICAgIGlmIChsYXN0Q2hhciAhPT0gMHgyMCAmJiBsYXN0Q2hhciAhPT0gMHgwQSkge1xuICAgICAgICAgICAgLy8gY2xvc2luZyAnKysnXG4gICAgICAgICAgICBzdGFjay0tO1xuICAgICAgICAgIH0gZWxzZSBpZiAobmV4dENoYXIgIT09IDB4MjAgJiYgbmV4dENoYXIgIT09IDB4MEEpIHtcbiAgICAgICAgICAgIC8vIG9wZW5pbmcgJysrJ1xuICAgICAgICAgICAgc3RhY2srKztcbiAgICAgICAgICB9IC8vIGVsc2Uge1xuICAgICAgICAgICAgLy8gIC8vIHN0YW5kYWxvbmUgJyArKyAnIGluZGVudGVkIHdpdGggc3BhY2VzXG4gICAgICAgICAgICAvLyB9XG4gICAgICAgICAgaWYgKHN0YWNrIDw9IDApIHtcbiAgICAgICAgICAgIGZvdW5kID0gdHJ1ZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHN0YXRlLnBhcnNlci5za2lwVG9rZW4oc3RhdGUpO1xuICB9XG5cbiAgaWYgKCFmb3VuZCkge1xuICAgIC8vIHBhcnNlciBmYWlsZWQgdG8gZmluZCBlbmRpbmcgdGFnLCBzbyBpdCdzIG5vdCB2YWxpZCBlbXBoYXNpc1xuICAgIHN0YXRlLnBvcyA9IHN0YXJ0O1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8vIGZvdW5kIVxuICBzdGF0ZS5wb3NNYXggPSBzdGF0ZS5wb3M7XG4gIHN0YXRlLnBvcyA9IHN0YXJ0ICsgMjtcblxuICBpZiAoIXNpbGVudCkge1xuICAgIHN0YXRlLnB1c2goeyB0eXBlOiAnaW5zX29wZW4nLCBsZXZlbDogc3RhdGUubGV2ZWwrKyB9KTtcbiAgICBzdGF0ZS5wYXJzZXIudG9rZW5pemUoc3RhdGUpO1xuICAgIHN0YXRlLnB1c2goeyB0eXBlOiAnaW5zX2Nsb3NlJywgbGV2ZWw6IC0tc3RhdGUubGV2ZWwgfSk7XG4gIH1cblxuICBzdGF0ZS5wb3MgPSBzdGF0ZS5wb3NNYXggKyAyO1xuICBzdGF0ZS5wb3NNYXggPSBtYXg7XG4gIHJldHVybiB0cnVlO1xufTtcbiIsIi8vIFByb2Nlc3MgW2xpbmtzXSg8dG8+IFwic3R1ZmZcIilcblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgcGFyc2VMaW5rTGFiZWwgICAgICAgPSByZXF1aXJlKCcuLi9oZWxwZXJzL3BhcnNlX2xpbmtfbGFiZWwnKTtcbnZhciBwYXJzZUxpbmtEZXN0aW5hdGlvbiA9IHJlcXVpcmUoJy4uL2hlbHBlcnMvcGFyc2VfbGlua19kZXN0aW5hdGlvbicpO1xudmFyIHBhcnNlTGlua1RpdGxlICAgICAgID0gcmVxdWlyZSgnLi4vaGVscGVycy9wYXJzZV9saW5rX3RpdGxlJyk7XG52YXIgbm9ybWFsaXplUmVmZXJlbmNlICAgPSByZXF1aXJlKCcuLi9oZWxwZXJzL25vcm1hbGl6ZV9yZWZlcmVuY2UnKTtcblxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGxpbmtzKHN0YXRlLCBzaWxlbnQpIHtcbiAgdmFyIGxhYmVsU3RhcnQsXG4gICAgICBsYWJlbEVuZCxcbiAgICAgIGxhYmVsLFxuICAgICAgaHJlZixcbiAgICAgIHRpdGxlLFxuICAgICAgcG9zLFxuICAgICAgcmVmLFxuICAgICAgY29kZSxcbiAgICAgIGlzSW1hZ2UgPSBmYWxzZSxcbiAgICAgIG9sZFBvcyA9IHN0YXRlLnBvcyxcbiAgICAgIG1heCA9IHN0YXRlLnBvc01heCxcbiAgICAgIHN0YXJ0ID0gc3RhdGUucG9zLFxuICAgICAgbWFya2VyID0gc3RhdGUuc3JjLmNoYXJDb2RlQXQoc3RhcnQpO1xuXG4gIGlmIChtYXJrZXIgPT09IDB4MjEvKiAhICovKSB7XG4gICAgaXNJbWFnZSA9IHRydWU7XG4gICAgbWFya2VyID0gc3RhdGUuc3JjLmNoYXJDb2RlQXQoKytzdGFydCk7XG4gIH1cblxuICBpZiAobWFya2VyICE9PSAweDVCLyogWyAqLykgeyByZXR1cm4gZmFsc2U7IH1cbiAgaWYgKHN0YXRlLmxldmVsID49IHN0YXRlLm9wdGlvbnMubWF4TmVzdGluZykgeyByZXR1cm4gZmFsc2U7IH1cblxuICBsYWJlbFN0YXJ0ID0gc3RhcnQgKyAxO1xuICBsYWJlbEVuZCA9IHBhcnNlTGlua0xhYmVsKHN0YXRlLCBzdGFydCk7XG5cbiAgLy8gcGFyc2VyIGZhaWxlZCB0byBmaW5kICddJywgc28gaXQncyBub3QgYSB2YWxpZCBsaW5rXG4gIGlmIChsYWJlbEVuZCA8IDApIHsgcmV0dXJuIGZhbHNlOyB9XG5cbiAgcG9zID0gbGFiZWxFbmQgKyAxO1xuICBpZiAocG9zIDwgbWF4ICYmIHN0YXRlLnNyYy5jaGFyQ29kZUF0KHBvcykgPT09IDB4MjgvKiAoICovKSB7XG4gICAgLy9cbiAgICAvLyBJbmxpbmUgbGlua1xuICAgIC8vXG5cbiAgICAvLyBbbGlua10oICA8aHJlZj4gIFwidGl0bGVcIiAgKVxuICAgIC8vICAgICAgICBeXiBza2lwcGluZyB0aGVzZSBzcGFjZXNcbiAgICBwb3MrKztcbiAgICBmb3IgKDsgcG9zIDwgbWF4OyBwb3MrKykge1xuICAgICAgY29kZSA9IHN0YXRlLnNyYy5jaGFyQ29kZUF0KHBvcyk7XG4gICAgICBpZiAoY29kZSAhPT0gMHgyMCAmJiBjb2RlICE9PSAweDBBKSB7IGJyZWFrOyB9XG4gICAgfVxuICAgIGlmIChwb3MgPj0gbWF4KSB7IHJldHVybiBmYWxzZTsgfVxuXG4gICAgLy8gW2xpbmtdKCAgPGhyZWY+ICBcInRpdGxlXCIgIClcbiAgICAvLyAgICAgICAgICBeXl5eXl4gcGFyc2luZyBsaW5rIGRlc3RpbmF0aW9uXG4gICAgc3RhcnQgPSBwb3M7XG4gICAgaWYgKHBhcnNlTGlua0Rlc3RpbmF0aW9uKHN0YXRlLCBwb3MpKSB7XG4gICAgICBocmVmID0gc3RhdGUubGlua0NvbnRlbnQ7XG4gICAgICBwb3MgPSBzdGF0ZS5wb3M7XG4gICAgfSBlbHNlIHtcbiAgICAgIGhyZWYgPSAnJztcbiAgICB9XG5cbiAgICAvLyBbbGlua10oICA8aHJlZj4gIFwidGl0bGVcIiAgKVxuICAgIC8vICAgICAgICAgICAgICAgIF5eIHNraXBwaW5nIHRoZXNlIHNwYWNlc1xuICAgIHN0YXJ0ID0gcG9zO1xuICAgIGZvciAoOyBwb3MgPCBtYXg7IHBvcysrKSB7XG4gICAgICBjb2RlID0gc3RhdGUuc3JjLmNoYXJDb2RlQXQocG9zKTtcbiAgICAgIGlmIChjb2RlICE9PSAweDIwICYmIGNvZGUgIT09IDB4MEEpIHsgYnJlYWs7IH1cbiAgICB9XG5cbiAgICAvLyBbbGlua10oICA8aHJlZj4gIFwidGl0bGVcIiAgKVxuICAgIC8vICAgICAgICAgICAgICAgICAgXl5eXl5eXiBwYXJzaW5nIGxpbmsgdGl0bGVcbiAgICBpZiAocG9zIDwgbWF4ICYmIHN0YXJ0ICE9PSBwb3MgJiYgcGFyc2VMaW5rVGl0bGUoc3RhdGUsIHBvcykpIHtcbiAgICAgIHRpdGxlID0gc3RhdGUubGlua0NvbnRlbnQ7XG4gICAgICBwb3MgPSBzdGF0ZS5wb3M7XG5cbiAgICAgIC8vIFtsaW5rXSggIDxocmVmPiAgXCJ0aXRsZVwiICApXG4gICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICBeXiBza2lwcGluZyB0aGVzZSBzcGFjZXNcbiAgICAgIGZvciAoOyBwb3MgPCBtYXg7IHBvcysrKSB7XG4gICAgICAgIGNvZGUgPSBzdGF0ZS5zcmMuY2hhckNvZGVBdChwb3MpO1xuICAgICAgICBpZiAoY29kZSAhPT0gMHgyMCAmJiBjb2RlICE9PSAweDBBKSB7IGJyZWFrOyB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRpdGxlID0gJyc7XG4gICAgfVxuXG4gICAgaWYgKHBvcyA+PSBtYXggfHwgc3RhdGUuc3JjLmNoYXJDb2RlQXQocG9zKSAhPT0gMHgyOS8qICkgKi8pIHtcbiAgICAgIHN0YXRlLnBvcyA9IG9sZFBvcztcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcG9zKys7XG4gIH0gZWxzZSB7XG4gICAgLy9cbiAgICAvLyBMaW5rIHJlZmVyZW5jZVxuICAgIC8vXG5cbiAgICAvLyBkbyBub3QgYWxsb3cgbmVzdGVkIHJlZmVyZW5jZSBsaW5rc1xuICAgIGlmIChzdGF0ZS5saW5rTGV2ZWwgPiAwKSB7IHJldHVybiBmYWxzZTsgfVxuXG4gICAgLy8gW2Zvb10gIFtiYXJdXG4gICAgLy8gICAgICBeXiBvcHRpb25hbCB3aGl0ZXNwYWNlIChjYW4gaW5jbHVkZSBuZXdsaW5lcylcbiAgICBmb3IgKDsgcG9zIDwgbWF4OyBwb3MrKykge1xuICAgICAgY29kZSA9IHN0YXRlLnNyYy5jaGFyQ29kZUF0KHBvcyk7XG4gICAgICBpZiAoY29kZSAhPT0gMHgyMCAmJiBjb2RlICE9PSAweDBBKSB7IGJyZWFrOyB9XG4gICAgfVxuXG4gICAgaWYgKHBvcyA8IG1heCAmJiBzdGF0ZS5zcmMuY2hhckNvZGVBdChwb3MpID09PSAweDVCLyogWyAqLykge1xuICAgICAgc3RhcnQgPSBwb3MgKyAxO1xuICAgICAgcG9zID0gcGFyc2VMaW5rTGFiZWwoc3RhdGUsIHBvcyk7XG4gICAgICBpZiAocG9zID49IDApIHtcbiAgICAgICAgbGFiZWwgPSBzdGF0ZS5zcmMuc2xpY2Uoc3RhcnQsIHBvcysrKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBvcyA9IHN0YXJ0IC0gMTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBjb3ZlcnMgbGFiZWwgPT09ICcnIGFuZCBsYWJlbCA9PT0gdW5kZWZpbmVkXG4gICAgLy8gKGNvbGxhcHNlZCByZWZlcmVuY2UgbGluayBhbmQgc2hvcnRjdXQgcmVmZXJlbmNlIGxpbmsgcmVzcGVjdGl2ZWx5KVxuICAgIGlmICghbGFiZWwpIHsgbGFiZWwgPSBzdGF0ZS5zcmMuc2xpY2UobGFiZWxTdGFydCwgbGFiZWxFbmQpOyB9XG5cbiAgICByZWYgPSBzdGF0ZS5lbnYucmVmZXJlbmNlc1tub3JtYWxpemVSZWZlcmVuY2UobGFiZWwpXTtcbiAgICBpZiAoIXJlZikge1xuICAgICAgc3RhdGUucG9zID0gb2xkUG9zO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBocmVmID0gcmVmLmhyZWY7XG4gICAgdGl0bGUgPSByZWYudGl0bGU7XG4gIH1cblxuICAvL1xuICAvLyBXZSBmb3VuZCB0aGUgZW5kIG9mIHRoZSBsaW5rLCBhbmQga25vdyBmb3IgYSBmYWN0IGl0J3MgYSB2YWxpZCBsaW5rO1xuICAvLyBzbyBhbGwgdGhhdCdzIGxlZnQgdG8gZG8gaXMgdG8gY2FsbCB0b2tlbml6ZXIuXG4gIC8vXG4gIGlmICghc2lsZW50KSB7XG4gICAgc3RhdGUucG9zID0gbGFiZWxTdGFydDtcbiAgICBzdGF0ZS5wb3NNYXggPSBsYWJlbEVuZDtcblxuICAgIGlmIChpc0ltYWdlKSB7XG4gICAgICBzdGF0ZS5wdXNoKHtcbiAgICAgICAgdHlwZTogJ2ltYWdlJyxcbiAgICAgICAgc3JjOiBocmVmLFxuICAgICAgICB0aXRsZTogdGl0bGUsXG4gICAgICAgIGFsdDogc3RhdGUuc3JjLnN1YnN0cihsYWJlbFN0YXJ0LCBsYWJlbEVuZCAtIGxhYmVsU3RhcnQpLFxuICAgICAgICBsZXZlbDogc3RhdGUubGV2ZWxcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdGF0ZS5wdXNoKHtcbiAgICAgICAgdHlwZTogJ2xpbmtfb3BlbicsXG4gICAgICAgIGhyZWY6IGhyZWYsXG4gICAgICAgIHRpdGxlOiB0aXRsZSxcbiAgICAgICAgbGV2ZWw6IHN0YXRlLmxldmVsKytcbiAgICAgIH0pO1xuICAgICAgc3RhdGUubGlua0xldmVsKys7XG4gICAgICBzdGF0ZS5wYXJzZXIudG9rZW5pemUoc3RhdGUpO1xuICAgICAgc3RhdGUubGlua0xldmVsLS07XG4gICAgICBzdGF0ZS5wdXNoKHsgdHlwZTogJ2xpbmtfY2xvc2UnLCBsZXZlbDogLS1zdGF0ZS5sZXZlbCB9KTtcbiAgICB9XG4gIH1cblxuICBzdGF0ZS5wb3MgPSBwb3M7XG4gIHN0YXRlLnBvc01heCA9IG1heDtcbiAgcmV0dXJuIHRydWU7XG59O1xuIiwiLy8gUHJvY2VzcyA9PWhpZ2hsaWdodGVkIHRleHQ9PVxuXG4ndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZGVsKHN0YXRlLCBzaWxlbnQpIHtcbiAgdmFyIGZvdW5kLFxuICAgICAgcG9zLFxuICAgICAgc3RhY2ssXG4gICAgICBtYXggPSBzdGF0ZS5wb3NNYXgsXG4gICAgICBzdGFydCA9IHN0YXRlLnBvcyxcbiAgICAgIGxhc3RDaGFyLFxuICAgICAgbmV4dENoYXI7XG5cbiAgaWYgKHN0YXRlLnNyYy5jaGFyQ29kZUF0KHN0YXJ0KSAhPT0gMHgzRC8qID0gKi8pIHsgcmV0dXJuIGZhbHNlOyB9XG4gIGlmIChzaWxlbnQpIHsgcmV0dXJuIGZhbHNlOyB9IC8vIGRvbid0IHJ1biBhbnkgcGFpcnMgaW4gdmFsaWRhdGlvbiBtb2RlXG4gIGlmIChzdGFydCArIDQgPj0gbWF4KSB7IHJldHVybiBmYWxzZTsgfVxuICBpZiAoc3RhdGUuc3JjLmNoYXJDb2RlQXQoc3RhcnQgKyAxKSAhPT0gMHgzRC8qID0gKi8pIHsgcmV0dXJuIGZhbHNlOyB9XG4gIGlmIChzdGF0ZS5sZXZlbCA+PSBzdGF0ZS5vcHRpb25zLm1heE5lc3RpbmcpIHsgcmV0dXJuIGZhbHNlOyB9XG5cbiAgbGFzdENoYXIgPSBzdGFydCA+IDAgPyBzdGF0ZS5zcmMuY2hhckNvZGVBdChzdGFydCAtIDEpIDogLTE7XG4gIG5leHRDaGFyID0gc3RhdGUuc3JjLmNoYXJDb2RlQXQoc3RhcnQgKyAyKTtcblxuICBpZiAobGFzdENoYXIgPT09IDB4M0QvKiA9ICovKSB7IHJldHVybiBmYWxzZTsgfVxuICBpZiAobmV4dENoYXIgPT09IDB4M0QvKiA9ICovKSB7IHJldHVybiBmYWxzZTsgfVxuICBpZiAobmV4dENoYXIgPT09IDB4MjAgfHwgbmV4dENoYXIgPT09IDB4MEEpIHsgcmV0dXJuIGZhbHNlOyB9XG5cbiAgcG9zID0gc3RhcnQgKyAyO1xuICB3aGlsZSAocG9zIDwgbWF4ICYmIHN0YXRlLnNyYy5jaGFyQ29kZUF0KHBvcykgPT09IDB4M0QvKiA9ICovKSB7IHBvcysrOyB9XG4gIGlmIChwb3MgIT09IHN0YXJ0ICsgMikge1xuICAgIC8vIHNlcXVlbmNlIG9mIDMrIG1hcmtlcnMgdGFraW5nIGFzIGxpdGVyYWwsIHNhbWUgYXMgaW4gYSBlbXBoYXNpc1xuICAgIHN0YXRlLnBvcyArPSBwb3MgLSBzdGFydDtcbiAgICBpZiAoIXNpbGVudCkgeyBzdGF0ZS5wZW5kaW5nICs9IHN0YXRlLnNyYy5zbGljZShzdGFydCwgcG9zKTsgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgc3RhdGUucG9zID0gc3RhcnQgKyAyO1xuICBzdGFjayA9IDE7XG5cbiAgd2hpbGUgKHN0YXRlLnBvcyArIDEgPCBtYXgpIHtcbiAgICBpZiAoc3RhdGUuc3JjLmNoYXJDb2RlQXQoc3RhdGUucG9zKSA9PT0gMHgzRC8qID0gKi8pIHtcbiAgICAgIGlmIChzdGF0ZS5zcmMuY2hhckNvZGVBdChzdGF0ZS5wb3MgKyAxKSA9PT0gMHgzRC8qID0gKi8pIHtcbiAgICAgICAgbGFzdENoYXIgPSBzdGF0ZS5zcmMuY2hhckNvZGVBdChzdGF0ZS5wb3MgLSAxKTtcbiAgICAgICAgbmV4dENoYXIgPSBzdGF0ZS5wb3MgKyAyIDwgbWF4ID8gc3RhdGUuc3JjLmNoYXJDb2RlQXQoc3RhdGUucG9zICsgMikgOiAtMTtcbiAgICAgICAgaWYgKG5leHRDaGFyICE9PSAweDNELyogPSAqLyAmJiBsYXN0Q2hhciAhPT0gMHgzRC8qID0gKi8pIHtcbiAgICAgICAgICBpZiAobGFzdENoYXIgIT09IDB4MjAgJiYgbGFzdENoYXIgIT09IDB4MEEpIHtcbiAgICAgICAgICAgIC8vIGNsb3NpbmcgJz09J1xuICAgICAgICAgICAgc3RhY2stLTtcbiAgICAgICAgICB9IGVsc2UgaWYgKG5leHRDaGFyICE9PSAweDIwICYmIG5leHRDaGFyICE9PSAweDBBKSB7XG4gICAgICAgICAgICAvLyBvcGVuaW5nICc9PSdcbiAgICAgICAgICAgIHN0YWNrKys7XG4gICAgICAgICAgfSAvLyBlbHNlIHtcbiAgICAgICAgICAgIC8vICAvLyBzdGFuZGFsb25lICcgPT0gJyBpbmRlbnRlZCB3aXRoIHNwYWNlc1xuICAgICAgICAgICAgLy8gfVxuICAgICAgICAgIGlmIChzdGFjayA8PSAwKSB7XG4gICAgICAgICAgICBmb3VuZCA9IHRydWU7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBzdGF0ZS5wYXJzZXIuc2tpcFRva2VuKHN0YXRlKTtcbiAgfVxuXG4gIGlmICghZm91bmQpIHtcbiAgICAvLyBwYXJzZXIgZmFpbGVkIHRvIGZpbmQgZW5kaW5nIHRhZywgc28gaXQncyBub3QgdmFsaWQgZW1waGFzaXNcbiAgICBzdGF0ZS5wb3MgPSBzdGFydDtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvLyBmb3VuZCFcbiAgc3RhdGUucG9zTWF4ID0gc3RhdGUucG9zO1xuICBzdGF0ZS5wb3MgPSBzdGFydCArIDI7XG5cbiAgaWYgKCFzaWxlbnQpIHtcbiAgICBzdGF0ZS5wdXNoKHsgdHlwZTogJ21hcmtfb3BlbicsIGxldmVsOiBzdGF0ZS5sZXZlbCsrIH0pO1xuICAgIHN0YXRlLnBhcnNlci50b2tlbml6ZShzdGF0ZSk7XG4gICAgc3RhdGUucHVzaCh7IHR5cGU6ICdtYXJrX2Nsb3NlJywgbGV2ZWw6IC0tc3RhdGUubGV2ZWwgfSk7XG4gIH1cblxuICBzdGF0ZS5wb3MgPSBzdGF0ZS5wb3NNYXggKyAyO1xuICBzdGF0ZS5wb3NNYXggPSBtYXg7XG4gIHJldHVybiB0cnVlO1xufTtcbiIsIi8vIFByb2NlZXNzICdcXG4nXG5cbid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBuZXdsaW5lKHN0YXRlLCBzaWxlbnQpIHtcbiAgdmFyIHBtYXgsIG1heCwgcG9zID0gc3RhdGUucG9zO1xuXG4gIGlmIChzdGF0ZS5zcmMuY2hhckNvZGVBdChwb3MpICE9PSAweDBBLyogXFxuICovKSB7IHJldHVybiBmYWxzZTsgfVxuXG4gIHBtYXggPSBzdGF0ZS5wZW5kaW5nLmxlbmd0aCAtIDE7XG4gIG1heCA9IHN0YXRlLnBvc01heDtcblxuICAvLyAnICBcXG4nIC0+IGhhcmRicmVha1xuICAvLyBMb29rdXAgaW4gcGVuZGluZyBjaGFycyBpcyBiYWQgcHJhY3RpY2UhIERvbid0IGNvcHkgdG8gb3RoZXIgcnVsZXMhXG4gIC8vIFBlbmRpbmcgc3RyaW5nIGlzIHN0b3JlZCBpbiBjb25jYXQgbW9kZSwgaW5kZXhlZCBsb29rdXBzIHdpbGwgY2F1c2VcbiAgLy8gY29udmVydGlvbiB0byBmbGF0IG1vZGUuXG4gIGlmICghc2lsZW50KSB7XG4gICAgaWYgKHBtYXggPj0gMCAmJiBzdGF0ZS5wZW5kaW5nLmNoYXJDb2RlQXQocG1heCkgPT09IDB4MjApIHtcbiAgICAgIGlmIChwbWF4ID49IDEgJiYgc3RhdGUucGVuZGluZy5jaGFyQ29kZUF0KHBtYXggLSAxKSA9PT0gMHgyMCkge1xuICAgICAgICBzdGF0ZS5wZW5kaW5nID0gc3RhdGUucGVuZGluZy5yZXBsYWNlKC8gKyQvLCAnJyk7XG4gICAgICAgIHN0YXRlLnB1c2goe1xuICAgICAgICAgIHR5cGU6ICdoYXJkYnJlYWsnLFxuICAgICAgICAgIGxldmVsOiBzdGF0ZS5sZXZlbFxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN0YXRlLnBlbmRpbmcgPSBzdGF0ZS5wZW5kaW5nLnNsaWNlKDAsIC0xKTtcbiAgICAgICAgc3RhdGUucHVzaCh7XG4gICAgICAgICAgdHlwZTogJ3NvZnRicmVhaycsXG4gICAgICAgICAgbGV2ZWw6IHN0YXRlLmxldmVsXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgfSBlbHNlIHtcbiAgICAgIHN0YXRlLnB1c2goe1xuICAgICAgICB0eXBlOiAnc29mdGJyZWFrJyxcbiAgICAgICAgbGV2ZWw6IHN0YXRlLmxldmVsXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBwb3MrKztcblxuICAvLyBza2lwIGhlYWRpbmcgc3BhY2VzIGZvciBuZXh0IGxpbmVcbiAgd2hpbGUgKHBvcyA8IG1heCAmJiBzdGF0ZS5zcmMuY2hhckNvZGVBdChwb3MpID09PSAweDIwKSB7IHBvcysrOyB9XG5cbiAgc3RhdGUucG9zID0gcG9zO1xuICByZXR1cm4gdHJ1ZTtcbn07XG4iLCIvLyBJbmxpbmUgcGFyc2VyIHN0YXRlXG5cbid1c2Ugc3RyaWN0JztcblxuXG5mdW5jdGlvbiBTdGF0ZUlubGluZShzcmMsIHBhcnNlcklubGluZSwgb3B0aW9ucywgZW52LCBvdXRUb2tlbnMpIHtcbiAgdGhpcy5zcmMgPSBzcmM7XG4gIHRoaXMuZW52ID0gZW52O1xuICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICB0aGlzLnBhcnNlciA9IHBhcnNlcklubGluZTtcbiAgdGhpcy50b2tlbnMgPSBvdXRUb2tlbnM7XG4gIHRoaXMucG9zID0gMDtcbiAgdGhpcy5wb3NNYXggPSB0aGlzLnNyYy5sZW5ndGg7XG4gIHRoaXMubGV2ZWwgPSAwO1xuICB0aGlzLnBlbmRpbmcgPSAnJztcbiAgdGhpcy5wZW5kaW5nTGV2ZWwgPSAwO1xuXG4gIHRoaXMuY2FjaGUgPSBbXTsgICAgICAgIC8vIFN0b3JlcyB7IHN0YXJ0OiBlbmQgfSBwYWlycy4gVXNlZnVsIGZvciBiYWNrdHJhY2tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gb3B0aW1pemF0aW9uIG9mIHBhaXJzIHBhcnNlIChlbXBoYXNpcywgc3RyaWtlcykuXG5cbiAgLy8gTGluayBwYXJzZXIgc3RhdGUgdmFyc1xuXG4gIHRoaXMuaXNJbkxhYmVsID0gZmFsc2U7IC8vIFNldCB0cnVlIHdoZW4gc2VlayBsaW5rIGxhYmVsIC0gd2Ugc2hvdWxkIGRpc2FibGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gXCJwYWlyZWRcIiBydWxlcyAoZW1waGFzaXMsIHN0cmlrZXMpIHRvIG5vdCBza2lwXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRhaWxpbmcgYF1gXG5cbiAgdGhpcy5saW5rTGV2ZWwgPSAwOyAgICAgLy8gSW5jcmVtZW50IGZvciBlYWNoIG5lc3RpbmcgbGluay4gVXNlZCB0byBwcmV2ZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8vIG5lc3RpbmcgaW4gZGVmaW5pdGlvbnNcblxuICB0aGlzLmxpbmtDb250ZW50ID0gJyc7ICAvLyBUZW1wb3Jhcnkgc3RvcmFnZSBmb3IgbGluayB1cmxcblxuICB0aGlzLmxhYmVsVW5tYXRjaGVkU2NvcGVzID0gMDsgLy8gVHJhY2sgdW5wYWlyZWQgYFtgIGZvciBsaW5rIGxhYmVsc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gKGJhY2t0cmFjayBvcHRpbWl6YXRpb24pXG59XG5cblxuLy8gRmx1c2ggcGVuZGluZyB0ZXh0XG4vL1xuU3RhdGVJbmxpbmUucHJvdG90eXBlLnB1c2hQZW5kaW5nID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLnRva2Vucy5wdXNoKHtcbiAgICB0eXBlOiAndGV4dCcsXG4gICAgY29udGVudDogdGhpcy5wZW5kaW5nLFxuICAgIGxldmVsOiB0aGlzLnBlbmRpbmdMZXZlbFxuICB9KTtcbiAgdGhpcy5wZW5kaW5nID0gJyc7XG59O1xuXG5cbi8vIFB1c2ggbmV3IHRva2VuIHRvIFwic3RyZWFtXCIuXG4vLyBJZiBwZW5kaW5nIHRleHQgZXhpc3RzIC0gZmx1c2ggaXQgYXMgdGV4dCB0b2tlblxuLy9cblN0YXRlSW5saW5lLnByb3RvdHlwZS5wdXNoID0gZnVuY3Rpb24gKHRva2VuKSB7XG4gIGlmICh0aGlzLnBlbmRpbmcpIHtcbiAgICB0aGlzLnB1c2hQZW5kaW5nKCk7XG4gIH1cblxuICB0aGlzLnRva2Vucy5wdXNoKHRva2VuKTtcbiAgdGhpcy5wZW5kaW5nTGV2ZWwgPSB0aGlzLmxldmVsO1xufTtcblxuXG4vLyBTdG9yZSB2YWx1ZSB0byBjYWNoZS5cbi8vICEhISBJbXBsZW1lbnRhdGlvbiBoYXMgcGFyc2VyLXNwZWNpZmljIG9wdGltaXphdGlvbnNcbi8vICEhISBrZXlzIE1VU1QgYmUgaW50ZWdlciwgPj0gMDsgdmFsdWVzIE1VU1QgYmUgaW50ZWdlciwgPiAwXG4vL1xuU3RhdGVJbmxpbmUucHJvdG90eXBlLmNhY2hlU2V0ID0gZnVuY3Rpb24gKGtleSwgdmFsKSB7XG4gIGZvciAodmFyIGkgPSB0aGlzLmNhY2hlLmxlbmd0aDsgaSA8PSBrZXk7IGkrKykge1xuICAgIHRoaXMuY2FjaGUucHVzaCgwKTtcbiAgfVxuXG4gIHRoaXMuY2FjaGVba2V5XSA9IHZhbDtcbn07XG5cblxuLy8gR2V0IGNhY2hlIHZhbHVlXG4vL1xuU3RhdGVJbmxpbmUucHJvdG90eXBlLmNhY2hlR2V0ID0gZnVuY3Rpb24gKGtleSkge1xuICByZXR1cm4ga2V5IDwgdGhpcy5jYWNoZS5sZW5ndGggPyB0aGlzLmNhY2hlW2tleV0gOiAwO1xufTtcblxuXG5tb2R1bGUuZXhwb3J0cyA9IFN0YXRlSW5saW5lO1xuIiwiLy8gUHJvY2VzcyB+c3Vic2NyaXB0flxuXG4ndXNlIHN0cmljdCc7XG5cbi8vIHNhbWUgYXMgVU5FU0NBUEVfTURfUkUgcGx1cyBhIHNwYWNlXG52YXIgVU5FU0NBUEVfUkUgPSAvXFxcXChbIFxcXFwhXCIjJCUmJygpKissLlxcLzo7PD0+P0BbXFxdXl9ge3x9fi1dKS9nO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHN1YihzdGF0ZSwgc2lsZW50KSB7XG4gIHZhciBmb3VuZCxcbiAgICAgIGNvbnRlbnQsXG4gICAgICBtYXggPSBzdGF0ZS5wb3NNYXgsXG4gICAgICBzdGFydCA9IHN0YXRlLnBvcztcblxuICBpZiAoc3RhdGUuc3JjLmNoYXJDb2RlQXQoc3RhcnQpICE9PSAweDdFLyogfiAqLykgeyByZXR1cm4gZmFsc2U7IH1cbiAgaWYgKHNpbGVudCkgeyByZXR1cm4gZmFsc2U7IH0gLy8gZG9uJ3QgcnVuIGFueSBwYWlycyBpbiB2YWxpZGF0aW9uIG1vZGVcbiAgaWYgKHN0YXJ0ICsgMiA+PSBtYXgpIHsgcmV0dXJuIGZhbHNlOyB9XG4gIGlmIChzdGF0ZS5sZXZlbCA+PSBzdGF0ZS5vcHRpb25zLm1heE5lc3RpbmcpIHsgcmV0dXJuIGZhbHNlOyB9XG5cbiAgc3RhdGUucG9zID0gc3RhcnQgKyAxO1xuXG4gIHdoaWxlIChzdGF0ZS5wb3MgPCBtYXgpIHtcbiAgICBpZiAoc3RhdGUuc3JjLmNoYXJDb2RlQXQoc3RhdGUucG9zKSA9PT0gMHg3RS8qIH4gKi8pIHtcbiAgICAgIGZvdW5kID0gdHJ1ZTtcbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIHN0YXRlLnBhcnNlci5za2lwVG9rZW4oc3RhdGUpO1xuICB9XG5cbiAgaWYgKCFmb3VuZCB8fCBzdGFydCArIDEgPT09IHN0YXRlLnBvcykge1xuICAgIHN0YXRlLnBvcyA9IHN0YXJ0O1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGNvbnRlbnQgPSBzdGF0ZS5zcmMuc2xpY2Uoc3RhcnQgKyAxLCBzdGF0ZS5wb3MpO1xuXG4gIC8vIGRvbid0IGFsbG93IHVuZXNjYXBlZCBzcGFjZXMvbmV3bGluZXMgaW5zaWRlXG4gIGlmIChjb250ZW50Lm1hdGNoKC8oXnxbXlxcXFxdKShcXFxcXFxcXCkqXFxzLykpIHtcbiAgICBzdGF0ZS5wb3MgPSBzdGFydDtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvLyBmb3VuZCFcbiAgc3RhdGUucG9zTWF4ID0gc3RhdGUucG9zO1xuICBzdGF0ZS5wb3MgPSBzdGFydCArIDE7XG5cbiAgaWYgKCFzaWxlbnQpIHtcbiAgICBzdGF0ZS5wdXNoKHtcbiAgICAgIHR5cGU6ICdzdWInLFxuICAgICAgbGV2ZWw6IHN0YXRlLmxldmVsLFxuICAgICAgY29udGVudDogY29udGVudC5yZXBsYWNlKFVORVNDQVBFX1JFLCAnJDEnKVxuICAgIH0pO1xuICB9XG5cbiAgc3RhdGUucG9zID0gc3RhdGUucG9zTWF4ICsgMTtcbiAgc3RhdGUucG9zTWF4ID0gbWF4O1xuICByZXR1cm4gdHJ1ZTtcbn07XG4iLCIvLyBQcm9jZXNzIF5zdXBlcnNjcmlwdF5cblxuJ3VzZSBzdHJpY3QnO1xuXG4vLyBzYW1lIGFzIFVORVNDQVBFX01EX1JFIHBsdXMgYSBzcGFjZVxudmFyIFVORVNDQVBFX1JFID0gL1xcXFwoWyBcXFxcIVwiIyQlJicoKSorLC5cXC86Ozw9Pj9AW1xcXV5fYHt8fX4tXSkvZztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBzdXAoc3RhdGUsIHNpbGVudCkge1xuICB2YXIgZm91bmQsXG4gICAgICBjb250ZW50LFxuICAgICAgbWF4ID0gc3RhdGUucG9zTWF4LFxuICAgICAgc3RhcnQgPSBzdGF0ZS5wb3M7XG5cbiAgaWYgKHN0YXRlLnNyYy5jaGFyQ29kZUF0KHN0YXJ0KSAhPT0gMHg1RS8qIF4gKi8pIHsgcmV0dXJuIGZhbHNlOyB9XG4gIGlmIChzaWxlbnQpIHsgcmV0dXJuIGZhbHNlOyB9IC8vIGRvbid0IHJ1biBhbnkgcGFpcnMgaW4gdmFsaWRhdGlvbiBtb2RlXG4gIGlmIChzdGFydCArIDIgPj0gbWF4KSB7IHJldHVybiBmYWxzZTsgfVxuICBpZiAoc3RhdGUubGV2ZWwgPj0gc3RhdGUub3B0aW9ucy5tYXhOZXN0aW5nKSB7IHJldHVybiBmYWxzZTsgfVxuXG4gIHN0YXRlLnBvcyA9IHN0YXJ0ICsgMTtcblxuICB3aGlsZSAoc3RhdGUucG9zIDwgbWF4KSB7XG4gICAgaWYgKHN0YXRlLnNyYy5jaGFyQ29kZUF0KHN0YXRlLnBvcykgPT09IDB4NUUvKiBeICovKSB7XG4gICAgICBmb3VuZCA9IHRydWU7XG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBzdGF0ZS5wYXJzZXIuc2tpcFRva2VuKHN0YXRlKTtcbiAgfVxuXG4gIGlmICghZm91bmQgfHwgc3RhcnQgKyAxID09PSBzdGF0ZS5wb3MpIHtcbiAgICBzdGF0ZS5wb3MgPSBzdGFydDtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBjb250ZW50ID0gc3RhdGUuc3JjLnNsaWNlKHN0YXJ0ICsgMSwgc3RhdGUucG9zKTtcblxuICAvLyBkb24ndCBhbGxvdyB1bmVzY2FwZWQgc3BhY2VzL25ld2xpbmVzIGluc2lkZVxuICBpZiAoY29udGVudC5tYXRjaCgvKF58W15cXFxcXSkoXFxcXFxcXFwpKlxccy8pKSB7XG4gICAgc3RhdGUucG9zID0gc3RhcnQ7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLy8gZm91bmQhXG4gIHN0YXRlLnBvc01heCA9IHN0YXRlLnBvcztcbiAgc3RhdGUucG9zID0gc3RhcnQgKyAxO1xuXG4gIGlmICghc2lsZW50KSB7XG4gICAgc3RhdGUucHVzaCh7XG4gICAgICB0eXBlOiAnc3VwJyxcbiAgICAgIGxldmVsOiBzdGF0ZS5sZXZlbCxcbiAgICAgIGNvbnRlbnQ6IGNvbnRlbnQucmVwbGFjZShVTkVTQ0FQRV9SRSwgJyQxJylcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRlLnBvcyA9IHN0YXRlLnBvc01heCArIDE7XG4gIHN0YXRlLnBvc01heCA9IG1heDtcbiAgcmV0dXJuIHRydWU7XG59O1xuIiwiLy8gU2tpcCB0ZXh0IGNoYXJhY3RlcnMgZm9yIHRleHQgdG9rZW4sIHBsYWNlIHRob3NlIHRvIHBlbmRpbmcgYnVmZmVyXG4vLyBhbmQgaW5jcmVtZW50IGN1cnJlbnQgcG9zXG5cbid1c2Ugc3RyaWN0JztcblxuXG4vLyBSdWxlIHRvIHNraXAgcHVyZSB0ZXh0XG4vLyAne30kJUB+Kz06JyByZXNlcnZlZCBmb3IgZXh0ZW50aW9uc1xuXG5mdW5jdGlvbiBpc1Rlcm1pbmF0b3JDaGFyKGNoKSB7XG4gIHN3aXRjaCAoY2gpIHtcbiAgICBjYXNlIDB4MEEvKiBcXG4gKi86XG4gICAgY2FzZSAweDVDLyogXFwgKi86XG4gICAgY2FzZSAweDYwLyogYCAqLzpcbiAgICBjYXNlIDB4MkEvKiAqICovOlxuICAgIGNhc2UgMHg1Ri8qIF8gKi86XG4gICAgY2FzZSAweDVFLyogXiAqLzpcbiAgICBjYXNlIDB4NUIvKiBbICovOlxuICAgIGNhc2UgMHg1RC8qIF0gKi86XG4gICAgY2FzZSAweDIxLyogISAqLzpcbiAgICBjYXNlIDB4MjYvKiAmICovOlxuICAgIGNhc2UgMHgzQy8qIDwgKi86XG4gICAgY2FzZSAweDNFLyogPiAqLzpcbiAgICBjYXNlIDB4N0IvKiB7ICovOlxuICAgIGNhc2UgMHg3RC8qIH0gKi86XG4gICAgY2FzZSAweDI0LyogJCAqLzpcbiAgICBjYXNlIDB4MjUvKiAlICovOlxuICAgIGNhc2UgMHg0MC8qIEAgKi86XG4gICAgY2FzZSAweDdFLyogfiAqLzpcbiAgICBjYXNlIDB4MkIvKiArICovOlxuICAgIGNhc2UgMHgzRC8qID0gKi86XG4gICAgY2FzZSAweDNBLyogOiAqLzpcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiB0ZXh0KHN0YXRlLCBzaWxlbnQpIHtcbiAgdmFyIHBvcyA9IHN0YXRlLnBvcztcblxuICB3aGlsZSAocG9zIDwgc3RhdGUucG9zTWF4ICYmICFpc1Rlcm1pbmF0b3JDaGFyKHN0YXRlLnNyYy5jaGFyQ29kZUF0KHBvcykpKSB7XG4gICAgcG9zKys7XG4gIH1cblxuICBpZiAocG9zID09PSBzdGF0ZS5wb3MpIHsgcmV0dXJuIGZhbHNlOyB9XG5cbiAgaWYgKCFzaWxlbnQpIHsgc3RhdGUucGVuZGluZyArPSBzdGF0ZS5zcmMuc2xpY2Uoc3RhdGUucG9zLCBwb3MpOyB9XG5cbiAgc3RhdGUucG9zID0gcG9zO1xuXG4gIHJldHVybiB0cnVlO1xufTtcbiIsIihmdW5jdGlvbiAocm9vdCwgZmFjdG9yeSkge1xyXG4gIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHtcclxuICAgIC8vIEFNRC4gUmVnaXN0ZXIgYXMgYW4gYW5vbnltb3VzIG1vZHVsZS5cclxuICAgIGRlZmluZShbXSwgZnVuY3Rpb24gKCkge1xyXG4gICAgICByZXR1cm4gKHJvb3QucmV0dXJuRXhwb3J0c0dsb2JhbCA9IGZhY3RvcnkoKSk7XHJcbiAgICB9KTtcclxuICB9IGVsc2UgaWYgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jykge1xyXG4gICAgLy8gTm9kZS4gRG9lcyBub3Qgd29yayB3aXRoIHN0cmljdCBDb21tb25KUywgYnV0XHJcbiAgICAvLyBvbmx5IENvbW1vbkpTLWxpa2UgZW52aXJvbWVudHMgdGhhdCBzdXBwb3J0IG1vZHVsZS5leHBvcnRzLFxyXG4gICAgLy8gbGlrZSBOb2RlLlxyXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XHJcbiAgfSBlbHNlIHtcclxuICAgIHJvb3RbJ0F1dG9saW5rZXInXSA9IGZhY3RvcnkoKTtcclxuICB9XHJcbn0odGhpcywgZnVuY3Rpb24gKCkge1xyXG5cclxuXHQvKiFcclxuXHQgKiBBdXRvbGlua2VyLmpzXHJcblx0ICogMC4xNS4yXHJcblx0ICpcclxuXHQgKiBDb3B5cmlnaHQoYykgMjAxNSBHcmVnb3J5IEphY29icyA8Z3JlZ0BncmVnLWphY29icy5jb20+XHJcblx0ICogTUlUIExpY2Vuc2VkLiBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxyXG5cdCAqXHJcblx0ICogaHR0cHM6Ly9naXRodWIuY29tL2dyZWdqYWNvYnMvQXV0b2xpbmtlci5qc1xyXG5cdCAqL1xyXG5cdC8qKlxyXG5cdCAqIEBjbGFzcyBBdXRvbGlua2VyXHJcblx0ICogQGV4dGVuZHMgT2JqZWN0XHJcblx0ICogXHJcblx0ICogVXRpbGl0eSBjbGFzcyB1c2VkIHRvIHByb2Nlc3MgYSBnaXZlbiBzdHJpbmcgb2YgdGV4dCwgYW5kIHdyYXAgdGhlIFVSTHMsIGVtYWlsIGFkZHJlc3NlcywgYW5kIFR3aXR0ZXIgaGFuZGxlcyBpbiBcclxuXHQgKiB0aGUgYXBwcm9wcmlhdGUgYW5jaG9yICgmbHQ7YSZndDspIHRhZ3MgdG8gdHVybiB0aGVtIGludG8gbGlua3MuXHJcblx0ICogXHJcblx0ICogQW55IG9mIHRoZSBjb25maWd1cmF0aW9uIG9wdGlvbnMgbWF5IGJlIHByb3ZpZGVkIGluIGFuIE9iamVjdCAobWFwKSBwcm92aWRlZCB0byB0aGUgQXV0b2xpbmtlciBjb25zdHJ1Y3Rvciwgd2hpY2hcclxuXHQgKiB3aWxsIGNvbmZpZ3VyZSBob3cgdGhlIHtAbGluayAjbGluayBsaW5rKCl9IG1ldGhvZCB3aWxsIHByb2Nlc3MgdGhlIGxpbmtzLlxyXG5cdCAqIFxyXG5cdCAqIEZvciBleGFtcGxlOlxyXG5cdCAqIFxyXG5cdCAqICAgICB2YXIgYXV0b2xpbmtlciA9IG5ldyBBdXRvbGlua2VyKCB7XHJcblx0ICogICAgICAgICBuZXdXaW5kb3cgOiBmYWxzZSxcclxuXHQgKiAgICAgICAgIHRydW5jYXRlICA6IDMwXHJcblx0ICogICAgIH0gKTtcclxuXHQgKiAgICAgXHJcblx0ICogICAgIHZhciBodG1sID0gYXV0b2xpbmtlci5saW5rKCBcIkpvZSB3ZW50IHRvIHd3dy55YWhvby5jb21cIiApO1xyXG5cdCAqICAgICAvLyBwcm9kdWNlczogJ0pvZSB3ZW50IHRvIDxhIGhyZWY9XCJodHRwOi8vd3d3LnlhaG9vLmNvbVwiPnlhaG9vLmNvbTwvYT4nXHJcblx0ICogXHJcblx0ICogXHJcblx0ICogVGhlIHtAbGluayAjc3RhdGljLWxpbmsgc3RhdGljIGxpbmsoKX0gbWV0aG9kIG1heSBhbHNvIGJlIHVzZWQgdG8gaW5saW5lIG9wdGlvbnMgaW50byBhIHNpbmdsZSBjYWxsLCB3aGljaCBtYXlcclxuXHQgKiBiZSBtb3JlIGNvbnZlbmllbnQgZm9yIG9uZS1vZmYgdXNlcy4gRm9yIGV4YW1wbGU6XHJcblx0ICogXHJcblx0ICogICAgIHZhciBodG1sID0gQXV0b2xpbmtlci5saW5rKCBcIkpvZSB3ZW50IHRvIHd3dy55YWhvby5jb21cIiwge1xyXG5cdCAqICAgICAgICAgbmV3V2luZG93IDogZmFsc2UsXHJcblx0ICogICAgICAgICB0cnVuY2F0ZSAgOiAzMFxyXG5cdCAqICAgICB9ICk7XHJcblx0ICogICAgIC8vIHByb2R1Y2VzOiAnSm9lIHdlbnQgdG8gPGEgaHJlZj1cImh0dHA6Ly93d3cueWFob28uY29tXCI+eWFob28uY29tPC9hPidcclxuXHQgKiBcclxuXHQgKiBcclxuXHQgKiAjIyBDdXN0b20gUmVwbGFjZW1lbnRzIG9mIExpbmtzXHJcblx0ICogXHJcblx0ICogSWYgdGhlIGNvbmZpZ3VyYXRpb24gb3B0aW9ucyBkbyBub3QgcHJvdmlkZSBlbm91Z2ggZmxleGliaWxpdHksIGEge0BsaW5rICNyZXBsYWNlRm59IG1heSBiZSBwcm92aWRlZCB0byBmdWxseSBjdXN0b21pemVcclxuXHQgKiB0aGUgb3V0cHV0IG9mIEF1dG9saW5rZXIuIFRoaXMgZnVuY3Rpb24gaXMgY2FsbGVkIG9uY2UgZm9yIGVhY2ggVVJML0VtYWlsL1R3aXR0ZXIgaGFuZGxlIG1hdGNoIHRoYXQgaXMgZW5jb3VudGVyZWQuXHJcblx0ICogXHJcblx0ICogRm9yIGV4YW1wbGU6XHJcblx0ICogXHJcblx0ICogICAgIHZhciBpbnB1dCA9IFwiLi4uXCI7ICAvLyBzdHJpbmcgd2l0aCBVUkxzLCBFbWFpbCBBZGRyZXNzZXMsIGFuZCBUd2l0dGVyIEhhbmRsZXNcclxuXHQgKiAgICAgXHJcblx0ICogICAgIHZhciBsaW5rZWRUZXh0ID0gQXV0b2xpbmtlci5saW5rKCBpbnB1dCwge1xyXG5cdCAqICAgICAgICAgcmVwbGFjZUZuIDogZnVuY3Rpb24oIGF1dG9saW5rZXIsIG1hdGNoICkge1xyXG5cdCAqICAgICAgICAgICAgIGNvbnNvbGUubG9nKCBcImhyZWYgPSBcIiwgbWF0Y2guZ2V0QW5jaG9ySHJlZigpICk7XHJcblx0ICogICAgICAgICAgICAgY29uc29sZS5sb2coIFwidGV4dCA9IFwiLCBtYXRjaC5nZXRBbmNob3JUZXh0KCkgKTtcclxuXHQgKiAgICAgICAgIFxyXG5cdCAqICAgICAgICAgICAgIHN3aXRjaCggbWF0Y2guZ2V0VHlwZSgpICkge1xyXG5cdCAqICAgICAgICAgICAgICAgICBjYXNlICd1cmwnIDogXHJcblx0ICogICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyggXCJ1cmw6IFwiLCBtYXRjaC5nZXRVcmwoKSApO1xyXG5cdCAqICAgICAgICAgICAgICAgICAgICAgXHJcblx0ICogICAgICAgICAgICAgICAgICAgICBpZiggbWF0Y2guZ2V0VXJsKCkuaW5kZXhPZiggJ215c2l0ZS5jb20nICkgPT09IC0xICkge1xyXG5cdCAqICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0YWcgPSBhdXRvbGlua2VyLmdldFRhZ0J1aWxkZXIoKS5idWlsZCggbWF0Y2ggKTsgIC8vIHJldHVybnMgYW4gYEF1dG9saW5rZXIuSHRtbFRhZ2AgaW5zdGFuY2UsIHdoaWNoIHByb3ZpZGVzIG11dGF0b3IgbWV0aG9kcyBmb3IgZWFzeSBjaGFuZ2VzXHJcblx0ICogICAgICAgICAgICAgICAgICAgICAgICAgdGFnLnNldEF0dHIoICdyZWwnLCAnbm9mb2xsb3cnICk7XHJcblx0ICogICAgICAgICAgICAgICAgICAgICAgICAgdGFnLmFkZENsYXNzKCAnZXh0ZXJuYWwtbGluaycgKTtcclxuXHQgKiAgICAgICAgICAgICAgICAgICAgICAgICBcclxuXHQgKiAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGFnO1xyXG5cdCAqICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG5cdCAqICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuXHQgKiAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTsgIC8vIGxldCBBdXRvbGlua2VyIHBlcmZvcm0gaXRzIG5vcm1hbCBhbmNob3IgdGFnIHJlcGxhY2VtZW50XHJcblx0ICogICAgICAgICAgICAgICAgICAgICB9XHJcblx0ICogICAgICAgICAgICAgICAgICAgICBcclxuXHQgKiAgICAgICAgICAgICAgICAgY2FzZSAnZW1haWwnIDpcclxuXHQgKiAgICAgICAgICAgICAgICAgICAgIHZhciBlbWFpbCA9IG1hdGNoLmdldEVtYWlsKCk7XHJcblx0ICogICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyggXCJlbWFpbDogXCIsIGVtYWlsICk7XHJcblx0ICogICAgICAgICAgICAgICAgICAgICBcclxuXHQgKiAgICAgICAgICAgICAgICAgICAgIGlmKCBlbWFpbCA9PT0gXCJteUBvd24uYWRkcmVzc1wiICkge1xyXG5cdCAqICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTsgIC8vIGRvbid0IGF1dG8tbGluayB0aGlzIHBhcnRpY3VsYXIgZW1haWwgYWRkcmVzczsgbGVhdmUgYXMtaXNcclxuXHQgKiAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcblx0ICogICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuOyAgLy8gbm8gcmV0dXJuIHZhbHVlIHdpbGwgaGF2ZSBBdXRvbGlua2VyIHBlcmZvcm0gaXRzIG5vcm1hbCBhbmNob3IgdGFnIHJlcGxhY2VtZW50IChzYW1lIGFzIHJldHVybmluZyBgdHJ1ZWApXHJcblx0ICogICAgICAgICAgICAgICAgICAgICB9XHJcblx0ICogICAgICAgICAgICAgICAgIFxyXG5cdCAqICAgICAgICAgICAgICAgICBjYXNlICd0d2l0dGVyJyA6XHJcblx0ICogICAgICAgICAgICAgICAgICAgICB2YXIgdHdpdHRlckhhbmRsZSA9IG1hdGNoLmdldFR3aXR0ZXJIYW5kbGUoKTtcclxuXHQgKiAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCB0d2l0dGVySGFuZGxlICk7XHJcblx0ICogICAgICAgICAgICAgICAgICAgICBcclxuXHQgKiAgICAgICAgICAgICAgICAgICAgIHJldHVybiAnPGEgaHJlZj1cImh0dHA6Ly9uZXdwbGFjZS50by5saW5rLnR3aXR0ZXIuaGFuZGxlcy50by9cIj4nICsgdHdpdHRlckhhbmRsZSArICc8L2E+JztcclxuXHQgKiAgICAgICAgICAgICB9XHJcblx0ICogICAgICAgICB9XHJcblx0ICogICAgIH0gKTtcclxuXHQgKiBcclxuXHQgKiBcclxuXHQgKiBUaGUgZnVuY3Rpb24gbWF5IHJldHVybiB0aGUgZm9sbG93aW5nIHZhbHVlczpcclxuXHQgKiBcclxuXHQgKiAtIGB0cnVlYCAoQm9vbGVhbik6IEFsbG93IEF1dG9saW5rZXIgdG8gcmVwbGFjZSB0aGUgbWF0Y2ggYXMgaXQgbm9ybWFsbHkgd291bGQuXHJcblx0ICogLSBgZmFsc2VgIChCb29sZWFuKTogRG8gbm90IHJlcGxhY2UgdGhlIGN1cnJlbnQgbWF0Y2ggYXQgYWxsIC0gbGVhdmUgYXMtaXMuXHJcblx0ICogLSBBbnkgU3RyaW5nOiBJZiBhIHN0cmluZyBpcyByZXR1cm5lZCBmcm9tIHRoZSBmdW5jdGlvbiwgdGhlIHN0cmluZyB3aWxsIGJlIHVzZWQgZGlyZWN0bHkgYXMgdGhlIHJlcGxhY2VtZW50IEhUTUwgZm9yXHJcblx0ICogICB0aGUgbWF0Y2guXHJcblx0ICogLSBBbiB7QGxpbmsgQXV0b2xpbmtlci5IdG1sVGFnfSBpbnN0YW5jZSwgd2hpY2ggY2FuIGJlIHVzZWQgdG8gYnVpbGQvbW9kaWZ5IGFuIEhUTUwgdGFnIGJlZm9yZSB3cml0aW5nIG91dCBpdHMgSFRNTCB0ZXh0LlxyXG5cdCAqIFxyXG5cdCAqIEBjb25zdHJ1Y3RvclxyXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSBbY29uZmlnXSBUaGUgY29uZmlndXJhdGlvbiBvcHRpb25zIGZvciB0aGUgQXV0b2xpbmtlciBpbnN0YW5jZSwgc3BlY2lmaWVkIGluIGFuIE9iamVjdCAobWFwKS5cclxuXHQgKi9cclxuXHR2YXIgQXV0b2xpbmtlciA9IGZ1bmN0aW9uKCBjZmcgKSB7XHJcblx0XHRBdXRvbGlua2VyLlV0aWwuYXNzaWduKCB0aGlzLCBjZmcgKTsgIC8vIGFzc2lnbiB0aGUgcHJvcGVydGllcyBvZiBgY2ZnYCBvbnRvIHRoZSBBdXRvbGlua2VyIGluc3RhbmNlLiBQcm90b3R5cGUgcHJvcGVydGllcyB3aWxsIGJlIHVzZWQgZm9yIG1pc3NpbmcgY29uZmlncy5cclxuXHJcblx0XHR0aGlzLm1hdGNoVmFsaWRhdG9yID0gbmV3IEF1dG9saW5rZXIuTWF0Y2hWYWxpZGF0b3IoKTtcclxuXHR9O1xyXG5cclxuXHJcblx0QXV0b2xpbmtlci5wcm90b3R5cGUgPSB7XHJcblx0XHRjb25zdHJ1Y3RvciA6IEF1dG9saW5rZXIsICAvLyBmaXggY29uc3RydWN0b3IgcHJvcGVydHlcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIEBjZmcge0Jvb2xlYW59IHVybHNcclxuXHRcdCAqIFxyXG5cdFx0ICogYHRydWVgIGlmIG1pc2NlbGxhbmVvdXMgVVJMcyBzaG91bGQgYmUgYXV0b21hdGljYWxseSBsaW5rZWQsIGBmYWxzZWAgaWYgdGhleSBzaG91bGQgbm90IGJlLlxyXG5cdFx0ICovXHJcblx0XHR1cmxzIDogdHJ1ZSxcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIEBjZmcge0Jvb2xlYW59IGVtYWlsXHJcblx0XHQgKiBcclxuXHRcdCAqIGB0cnVlYCBpZiBlbWFpbCBhZGRyZXNzZXMgc2hvdWxkIGJlIGF1dG9tYXRpY2FsbHkgbGlua2VkLCBgZmFsc2VgIGlmIHRoZXkgc2hvdWxkIG5vdCBiZS5cclxuXHRcdCAqL1xyXG5cdFx0ZW1haWwgOiB0cnVlLFxyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogQGNmZyB7Qm9vbGVhbn0gdHdpdHRlclxyXG5cdFx0ICogXHJcblx0XHQgKiBgdHJ1ZWAgaWYgVHdpdHRlciBoYW5kbGVzIChcIkBleGFtcGxlXCIpIHNob3VsZCBiZSBhdXRvbWF0aWNhbGx5IGxpbmtlZCwgYGZhbHNlYCBpZiB0aGV5IHNob3VsZCBub3QgYmUuXHJcblx0XHQgKi9cclxuXHRcdHR3aXR0ZXIgOiB0cnVlLFxyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogQGNmZyB7Qm9vbGVhbn0gbmV3V2luZG93XHJcblx0XHQgKiBcclxuXHRcdCAqIGB0cnVlYCBpZiB0aGUgbGlua3Mgc2hvdWxkIG9wZW4gaW4gYSBuZXcgd2luZG93LCBgZmFsc2VgIG90aGVyd2lzZS5cclxuXHRcdCAqL1xyXG5cdFx0bmV3V2luZG93IDogdHJ1ZSxcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIEBjZmcge0Jvb2xlYW59IHN0cmlwUHJlZml4XHJcblx0XHQgKiBcclxuXHRcdCAqIGB0cnVlYCBpZiAnaHR0cDovLycgb3IgJ2h0dHBzOi8vJyBhbmQvb3IgdGhlICd3d3cuJyBzaG91bGQgYmUgc3RyaXBwZWQgZnJvbSB0aGUgYmVnaW5uaW5nIG9mIFVSTCBsaW5rcycgdGV4dCwgXHJcblx0XHQgKiBgZmFsc2VgIG90aGVyd2lzZS5cclxuXHRcdCAqL1xyXG5cdFx0c3RyaXBQcmVmaXggOiB0cnVlLFxyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogQGNmZyB7TnVtYmVyfSB0cnVuY2F0ZVxyXG5cdFx0ICogXHJcblx0XHQgKiBBIG51bWJlciBmb3IgaG93IG1hbnkgY2hhcmFjdGVycyBsb25nIFVSTHMvZW1haWxzL3R3aXR0ZXIgaGFuZGxlcyBzaG91bGQgYmUgdHJ1bmNhdGVkIHRvIGluc2lkZSB0aGUgdGV4dCBvZiBcclxuXHRcdCAqIGEgbGluay4gSWYgdGhlIFVSTC9lbWFpbC90d2l0dGVyIGlzIG92ZXIgdGhpcyBudW1iZXIgb2YgY2hhcmFjdGVycywgaXQgd2lsbCBiZSB0cnVuY2F0ZWQgdG8gdGhpcyBsZW5ndGggYnkgXHJcblx0XHQgKiBhZGRpbmcgYSB0d28gcGVyaW9kIGVsbGlwc2lzICgnLi4nKSB0byB0aGUgZW5kIG9mIHRoZSBzdHJpbmcuXHJcblx0XHQgKiBcclxuXHRcdCAqIEZvciBleGFtcGxlOiBBIHVybCBsaWtlICdodHRwOi8vd3d3LnlhaG9vLmNvbS9zb21lL2xvbmcvcGF0aC90by9hL2ZpbGUnIHRydW5jYXRlZCB0byAyNSBjaGFyYWN0ZXJzIG1pZ2h0IGxvb2tcclxuXHRcdCAqIHNvbWV0aGluZyBsaWtlIHRoaXM6ICd5YWhvby5jb20vc29tZS9sb25nL3BhdC4uJ1xyXG5cdFx0ICovXHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBAY2ZnIHtTdHJpbmd9IGNsYXNzTmFtZVxyXG5cdFx0ICogXHJcblx0XHQgKiBBIENTUyBjbGFzcyBuYW1lIHRvIGFkZCB0byB0aGUgZ2VuZXJhdGVkIGxpbmtzLiBUaGlzIGNsYXNzIHdpbGwgYmUgYWRkZWQgdG8gYWxsIGxpbmtzLCBhcyB3ZWxsIGFzIHRoaXMgY2xhc3NcclxuXHRcdCAqIHBsdXMgdXJsL2VtYWlsL3R3aXR0ZXIgc3VmZml4ZXMgZm9yIHN0eWxpbmcgdXJsL2VtYWlsL3R3aXR0ZXIgbGlua3MgZGlmZmVyZW50bHkuXHJcblx0XHQgKiBcclxuXHRcdCAqIEZvciBleGFtcGxlLCBpZiB0aGlzIGNvbmZpZyBpcyBwcm92aWRlZCBhcyBcIm15TGlua1wiLCB0aGVuOlxyXG5cdFx0ICogXHJcblx0XHQgKiAtIFVSTCBsaW5rcyB3aWxsIGhhdmUgdGhlIENTUyBjbGFzc2VzOiBcIm15TGluayBteUxpbmstdXJsXCJcclxuXHRcdCAqIC0gRW1haWwgbGlua3Mgd2lsbCBoYXZlIHRoZSBDU1MgY2xhc3NlczogXCJteUxpbmsgbXlMaW5rLWVtYWlsXCIsIGFuZFxyXG5cdFx0ICogLSBUd2l0dGVyIGxpbmtzIHdpbGwgaGF2ZSB0aGUgQ1NTIGNsYXNzZXM6IFwibXlMaW5rIG15TGluay10d2l0dGVyXCJcclxuXHRcdCAqL1xyXG5cdFx0Y2xhc3NOYW1lIDogXCJcIixcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIEBjZmcge0Z1bmN0aW9ufSByZXBsYWNlRm5cclxuXHRcdCAqIFxyXG5cdFx0ICogQSBmdW5jdGlvbiB0byBpbmRpdmlkdWFsbHkgcHJvY2VzcyBlYWNoIFVSTC9FbWFpbC9Ud2l0dGVyIG1hdGNoIGZvdW5kIGluIHRoZSBpbnB1dCBzdHJpbmcuXHJcblx0XHQgKiBcclxuXHRcdCAqIFNlZSB0aGUgY2xhc3MncyBkZXNjcmlwdGlvbiBmb3IgdXNhZ2UuXHJcblx0XHQgKiBcclxuXHRcdCAqIFRoaXMgZnVuY3Rpb24gaXMgY2FsbGVkIHdpdGggdGhlIGZvbGxvd2luZyBwYXJhbWV0ZXJzOlxyXG5cdFx0ICogXHJcblx0XHQgKiBAY2ZnIHtBdXRvbGlua2VyfSByZXBsYWNlRm4uYXV0b2xpbmtlciBUaGUgQXV0b2xpbmtlciBpbnN0YW5jZSwgd2hpY2ggbWF5IGJlIHVzZWQgdG8gcmV0cmlldmUgY2hpbGQgb2JqZWN0cyBmcm9tIChzdWNoXHJcblx0XHQgKiAgIGFzIHRoZSBpbnN0YW5jZSdzIHtAbGluayAjZ2V0VGFnQnVpbGRlciB0YWcgYnVpbGRlcn0pLlxyXG5cdFx0ICogQGNmZyB7QXV0b2xpbmtlci5tYXRjaC5NYXRjaH0gcmVwbGFjZUZuLm1hdGNoIFRoZSBNYXRjaCBpbnN0YW5jZSB3aGljaCBjYW4gYmUgdXNlZCB0byByZXRyaWV2ZSBpbmZvcm1hdGlvbiBhYm91dCB0aGVcclxuXHRcdCAqICAge0BsaW5rIEF1dG9saW5rZXIubWF0Y2guVXJsIFVSTH0ve0BsaW5rIEF1dG9saW5rZXIubWF0Y2guRW1haWwgZW1haWx9L3tAbGluayBBdXRvbGlua2VyLm1hdGNoLlR3aXR0ZXIgVHdpdHRlcn1cclxuXHRcdCAqICAgbWF0Y2ggdGhhdCB0aGUgYHJlcGxhY2VGbmAgaXMgY3VycmVudGx5IHByb2Nlc3NpbmcuXHJcblx0XHQgKi9cclxuXHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBAcHJpdmF0ZVxyXG5cdFx0ICogQHByb3BlcnR5IHtSZWdFeHB9IGh0bWxDaGFyYWN0ZXJFbnRpdGllc1JlZ2V4XHJcblx0XHQgKlxyXG5cdFx0ICogVGhlIHJlZ3VsYXIgZXhwcmVzc2lvbiB0aGF0IG1hdGNoZXMgY29tbW9uIEhUTUwgY2hhcmFjdGVyIGVudGl0aWVzLlxyXG5cdFx0ICogXHJcblx0XHQgKiBJZ25vcmluZyAmYW1wOyBhcyBpdCBjb3VsZCBiZSBwYXJ0IG9mIGEgcXVlcnkgc3RyaW5nIC0tIGhhbmRsaW5nIGl0IHNlcGFyYXRlbHkuXHJcblx0XHQgKi9cclxuXHRcdGh0bWxDaGFyYWN0ZXJFbnRpdGllc1JlZ2V4OiAvKCZuYnNwO3wmIzE2MDt8Jmx0O3wmIzYwO3wmZ3Q7fCYjNjI7fCZxdW90O3wmIzM0O3wmIzM5OykvZ2ksXHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBAcHJpdmF0ZVxyXG5cdFx0ICogQHByb3BlcnR5IHtSZWdFeHB9IG1hdGNoZXJSZWdleFxyXG5cdFx0ICogXHJcblx0XHQgKiBUaGUgcmVndWxhciBleHByZXNzaW9uIHRoYXQgbWF0Y2hlcyBVUkxzLCBlbWFpbCBhZGRyZXNzZXMsIGFuZCBUd2l0dGVyIGhhbmRsZXMuXHJcblx0XHQgKiBcclxuXHRcdCAqIFRoaXMgcmVndWxhciBleHByZXNzaW9uIGhhcyB0aGUgZm9sbG93aW5nIGNhcHR1cmluZyBncm91cHM6XHJcblx0XHQgKiBcclxuXHRcdCAqIDEuIEdyb3VwIHRoYXQgaXMgdXNlZCB0byBkZXRlcm1pbmUgaWYgdGhlcmUgaXMgYSBUd2l0dGVyIGhhbmRsZSBtYXRjaCAoaS5lLiBcXEBzb21lVHdpdHRlclVzZXIpLiBTaW1wbHkgY2hlY2sgZm9yIGl0cyBcclxuXHRcdCAqICAgIGV4aXN0ZW5jZSB0byBkZXRlcm1pbmUgaWYgdGhlcmUgaXMgYSBUd2l0dGVyIGhhbmRsZSBtYXRjaC4gVGhlIG5leHQgY291cGxlIG9mIGNhcHR1cmluZyBncm91cHMgZ2l2ZSBpbmZvcm1hdGlvbiBcclxuXHRcdCAqICAgIGFib3V0IHRoZSBUd2l0dGVyIGhhbmRsZSBtYXRjaC5cclxuXHRcdCAqIDIuIFRoZSB3aGl0ZXNwYWNlIGNoYXJhY3RlciBiZWZvcmUgdGhlIFxcQHNpZ24gaW4gYSBUd2l0dGVyIGhhbmRsZS4gVGhpcyBpcyBuZWVkZWQgYmVjYXVzZSB0aGVyZSBhcmUgbm8gbG9va2JlaGluZHMgaW5cclxuXHRcdCAqICAgIEpTIHJlZ3VsYXIgZXhwcmVzc2lvbnMsIGFuZCBjYW4gYmUgdXNlZCB0byByZWNvbnN0cnVjdCB0aGUgb3JpZ2luYWwgc3RyaW5nIGluIGEgcmVwbGFjZSgpLlxyXG5cdFx0ICogMy4gVGhlIFR3aXR0ZXIgaGFuZGxlIGl0c2VsZiBpbiBhIFR3aXR0ZXIgbWF0Y2guIElmIHRoZSBtYXRjaCBpcyAnQHNvbWVUd2l0dGVyVXNlcicsIHRoZSBoYW5kbGUgaXMgJ3NvbWVUd2l0dGVyVXNlcicuXHJcblx0XHQgKiA0LiBHcm91cCB0aGF0IG1hdGNoZXMgYW4gZW1haWwgYWRkcmVzcy4gVXNlZCB0byBkZXRlcm1pbmUgaWYgdGhlIG1hdGNoIGlzIGFuIGVtYWlsIGFkZHJlc3MsIGFzIHdlbGwgYXMgaG9sZGluZyB0aGUgZnVsbCBcclxuXHRcdCAqICAgIGFkZHJlc3MuIEV4OiAnbWVAbXkuY29tJ1xyXG5cdFx0ICogNS4gR3JvdXAgdGhhdCBtYXRjaGVzIGEgVVJMIGluIHRoZSBpbnB1dCB0ZXh0LiBFeDogJ2h0dHA6Ly9nb29nbGUuY29tJywgJ3d3dy5nb29nbGUuY29tJywgb3IganVzdCAnZ29vZ2xlLmNvbScuXHJcblx0XHQgKiAgICBUaGlzIGFsc28gaW5jbHVkZXMgYSBwYXRoLCB1cmwgcGFyYW1ldGVycywgb3IgaGFzaCBhbmNob3JzLiBFeDogZ29vZ2xlLmNvbS9wYXRoL3RvL2ZpbGU/cTE9MSZxMj0yI215QW5jaG9yXHJcblx0XHQgKiA2LiBHcm91cCB0aGF0IG1hdGNoZXMgYSBwcm90b2NvbCBVUkwgKGkuZS4gJ2h0dHA6Ly9nb29nbGUuY29tJykuIFRoaXMgaXMgdXNlZCB0byBtYXRjaCBwcm90b2NvbCBVUkxzIHdpdGgganVzdCBhIHNpbmdsZVxyXG5cdFx0ICogICAgd29yZCwgbGlrZSAnaHR0cDovL2xvY2FsaG9zdCcsIHdoZXJlIHdlIHdvbid0IGRvdWJsZSBjaGVjayB0aGF0IHRoZSBkb21haW4gbmFtZSBoYXMgYXQgbGVhc3Qgb25lICcuJyBpbiBpdC5cclxuXHRcdCAqIDcuIEEgcHJvdG9jb2wtcmVsYXRpdmUgKCcvLycpIG1hdGNoIGZvciB0aGUgY2FzZSBvZiBhICd3d3cuJyBwcmVmaXhlZCBVUkwuIFdpbGwgYmUgYW4gZW1wdHkgc3RyaW5nIGlmIGl0IGlzIG5vdCBhIFxyXG5cdFx0ICogICAgcHJvdG9jb2wtcmVsYXRpdmUgbWF0Y2guIFdlIG5lZWQgdG8ga25vdyB0aGUgY2hhcmFjdGVyIGJlZm9yZSB0aGUgJy8vJyBpbiBvcmRlciB0byBkZXRlcm1pbmUgaWYgaXQgaXMgYSB2YWxpZCBtYXRjaFxyXG5cdFx0ICogICAgb3IgdGhlIC8vIHdhcyBpbiBhIHN0cmluZyB3ZSBkb24ndCB3YW50IHRvIGF1dG8tbGluay5cclxuXHRcdCAqIDguIEEgcHJvdG9jb2wtcmVsYXRpdmUgKCcvLycpIG1hdGNoIGZvciB0aGUgY2FzZSBvZiBhIGtub3duIFRMRCBwcmVmaXhlZCBVUkwuIFdpbGwgYmUgYW4gZW1wdHkgc3RyaW5nIGlmIGl0IGlzIG5vdCBhIFxyXG5cdFx0ICogICAgcHJvdG9jb2wtcmVsYXRpdmUgbWF0Y2guIFNlZSAjNiBmb3IgbW9yZSBpbmZvLiBcclxuXHRcdCAqL1xyXG5cdFx0bWF0Y2hlclJlZ2V4IDogKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHR2YXIgdHdpdHRlclJlZ2V4ID0gLyhefFteXFx3XSlAKFxcd3sxLDE1fSkvLCAgICAgICAgICAgICAgLy8gRm9yIG1hdGNoaW5nIGEgdHdpdHRlciBoYW5kbGUuIEV4OiBAZ3JlZ29yeV9qYWNvYnNcclxuXHJcblx0XHRcdCAgICBlbWFpbFJlZ2V4ID0gLyg/OltcXC07OiY9XFwrXFwkLFxcd1xcLl0rQCkvLCAgICAgICAgICAgICAvLyBzb21ldGhpbmdAIGZvciBlbWFpbCBhZGRyZXNzZXMgKGEuay5hLiBsb2NhbC1wYXJ0KVxyXG5cclxuXHRcdFx0ICAgIHByb3RvY29sUmVnZXggPSAvKD86W0EtWmEtel1bLS4rQS1aYS16MC05XSs6KD8hW0EtWmEtel1bLS4rQS1aYS16MC05XSs6XFwvXFwvKSg/IVxcZCtcXC8/KSg/OlxcL1xcLyk/KS8sICAvLyBtYXRjaCBwcm90b2NvbCwgYWxsb3cgaW4gZm9ybWF0IFwiaHR0cDovL1wiIG9yIFwibWFpbHRvOlwiLiBIb3dldmVyLCBkbyBub3QgbWF0Y2ggdGhlIGZpcnN0IHBhcnQgb2Ygc29tZXRoaW5nIGxpa2UgJ2xpbms6aHR0cDovL3d3dy5nb29nbGUuY29tJyAoaS5lLiBkb24ndCBtYXRjaCBcImxpbms6XCIpLiBBbHNvLCBtYWtlIHN1cmUgd2UgZG9uJ3QgaW50ZXJwcmV0ICdnb29nbGUuY29tOjgwMDAnIGFzIGlmICdnb29nbGUuY29tJyB3YXMgYSBwcm90b2NvbCBoZXJlIChpLmUuIGlnbm9yZSBhIHRyYWlsaW5nIHBvcnQgbnVtYmVyIGluIHRoaXMgcmVnZXgpXHJcblx0XHRcdCAgICB3d3dSZWdleCA9IC8oPzp3d3dcXC4pLywgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHN0YXJ0aW5nIHdpdGggJ3d3dy4nXHJcblx0XHRcdCAgICBkb21haW5OYW1lUmVnZXggPSAvW0EtWmEtejAtOVxcLlxcLV0qW0EtWmEtejAtOVxcLV0vLCAgLy8gYW55dGhpbmcgbG9va2luZyBhdCBhbGwgbGlrZSBhIGRvbWFpbiwgbm9uLXVuaWNvZGUgZG9tYWlucywgbm90IGVuZGluZyBpbiBhIHBlcmlvZFxyXG5cdFx0XHQgICAgdGxkUmVnZXggPSAvXFwuKD86aW50ZXJuYXRpb25hbHxjb25zdHJ1Y3Rpb258Y29udHJhY3RvcnN8ZW50ZXJwcmlzZXN8cGhvdG9ncmFwaHl8cHJvZHVjdGlvbnN8Zm91bmRhdGlvbnxpbW1vYmlsaWVufGluZHVzdHJpZXN8bWFuYWdlbWVudHxwcm9wZXJ0aWVzfHRlY2hub2xvZ3l8Y2hyaXN0bWFzfGNvbW11bml0eXxkaXJlY3Rvcnl8ZWR1Y2F0aW9ufGVxdWlwbWVudHxpbnN0aXR1dGV8bWFya2V0aW5nfHNvbHV0aW9uc3x2YWNhdGlvbnN8YmFyZ2FpbnN8Ym91dGlxdWV8YnVpbGRlcnN8Y2F0ZXJpbmd8Y2xlYW5pbmd8Y2xvdGhpbmd8Y29tcHV0ZXJ8ZGVtb2NyYXR8ZGlhbW9uZHN8Z3JhcGhpY3N8aG9sZGluZ3N8bGlnaHRpbmd8cGFydG5lcnN8cGx1bWJpbmd8c3VwcGxpZXN8dHJhaW5pbmd8dmVudHVyZXN8YWNhZGVteXxjYXJlZXJzfGNvbXBhbnl8Y3J1aXNlc3xkb21haW5zfGV4cG9zZWR8ZmxpZ2h0c3xmbG9yaXN0fGdhbGxlcnl8Z3VpdGFyc3xob2xpZGF5fGtpdGNoZW58bmV1c3Rhcnxva2luYXdhfHJlY2lwZXN8cmVudGFsc3xyZXZpZXdzfHNoaWtzaGF8c2luZ2xlc3xzdXBwb3J0fHN5c3RlbXN8YWdlbmN5fGJlcmxpbnxjYW1lcmF8Y2VudGVyfGNvZmZlZXxjb25kb3N8ZGF0aW5nfGVzdGF0ZXxldmVudHN8ZXhwZXJ0fGZ1dGJvbHxrYXVmZW58bHV4dXJ5fG1haXNvbnxtb25hc2h8bXVzZXVtfG5hZ295YXxwaG90b3N8cmVwYWlyfHJlcG9ydHxzb2NpYWx8c3VwcGx5fHRhdHRvb3x0aWVuZGF8dHJhdmVsfHZpYWplc3x2aWxsYXN8dmlzaW9ufHZvdGluZ3x2b3lhZ2V8YWN0b3J8YnVpbGR8Y2FyZHN8Y2hlYXB8Y29kZXN8ZGFuY2V8ZW1haWx8Z2xhc3N8aG91c2V8bWFuZ298bmluamF8cGFydHN8cGhvdG98c2hvZXN8c29sYXJ8dG9kYXl8dG9reW98dG9vbHN8d2F0Y2h8d29ya3N8YWVyb3xhcnBhfGFzaWF8YmVzdHxiaWtlfGJsdWV8YnV6enxjYW1wfGNsdWJ8Y29vbHxjb29wfGZhcm18ZmlzaHxnaWZ0fGd1cnV8aW5mb3xqb2JzfGtpd2l8a3JlZHxsYW5kfGxpbW98bGlua3xtZW51fG1vYml8bW9kYXxuYW1lfHBpY3N8cGlua3xwb3N0fHFwb258cmljaHxydWhyfHNleHl8dGlwc3x2b3RlfHZvdG98d2FuZ3x3aWVufHdpa2l8em9uZXxiYXJ8YmlkfGJpenxjYWJ8Y2F0fGNlb3xjb218ZWR1fGdvdnxpbnR8a2ltfG1pbHxuZXR8b25sfG9yZ3xwcm98cHVifHJlZHx0ZWx8dW5vfHdlZHx4eHh8eHl6fGFjfGFkfGFlfGFmfGFnfGFpfGFsfGFtfGFufGFvfGFxfGFyfGFzfGF0fGF1fGF3fGF4fGF6fGJhfGJifGJkfGJlfGJmfGJnfGJofGJpfGJqfGJtfGJufGJvfGJyfGJzfGJ0fGJ2fGJ3fGJ5fGJ6fGNhfGNjfGNkfGNmfGNnfGNofGNpfGNrfGNsfGNtfGNufGNvfGNyfGN1fGN2fGN3fGN4fGN5fGN6fGRlfGRqfGRrfGRtfGRvfGR6fGVjfGVlfGVnfGVyfGVzfGV0fGV1fGZpfGZqfGZrfGZtfGZvfGZyfGdhfGdifGdkfGdlfGdmfGdnfGdofGdpfGdsfGdtfGdufGdwfGdxfGdyfGdzfGd0fGd1fGd3fGd5fGhrfGhtfGhufGhyfGh0fGh1fGlkfGllfGlsfGltfGlufGlvfGlxfGlyfGlzfGl0fGplfGptfGpvfGpwfGtlfGtnfGtofGtpfGttfGtufGtwfGtyfGt3fGt5fGt6fGxhfGxifGxjfGxpfGxrfGxyfGxzfGx0fGx1fGx2fGx5fG1hfG1jfG1kfG1lfG1nfG1ofG1rfG1sfG1tfG1ufG1vfG1wfG1xfG1yfG1zfG10fG11fG12fG13fG14fG15fG16fG5hfG5jfG5lfG5mfG5nfG5pfG5sfG5vfG5wfG5yfG51fG56fG9tfHBhfHBlfHBmfHBnfHBofHBrfHBsfHBtfHBufHByfHBzfHB0fHB3fHB5fHFhfHJlfHJvfHJzfHJ1fHJ3fHNhfHNifHNjfHNkfHNlfHNnfHNofHNpfHNqfHNrfHNsfHNtfHNufHNvfHNyfHN0fHN1fHN2fHN4fHN5fHN6fHRjfHRkfHRmfHRnfHRofHRqfHRrfHRsfHRtfHRufHRvfHRwfHRyfHR0fHR2fHR3fHR6fHVhfHVnfHVrfHVzfHV5fHV6fHZhfHZjfHZlfHZnfHZpfHZufHZ1fHdmfHdzfHllfHl0fHphfHptfHp3KVxcYi8sICAgLy8gbWF0Y2ggb3VyIGtub3duIHRvcCBsZXZlbCBkb21haW5zIChUTERzKVxyXG5cclxuXHRcdFx0ICAgIC8vIEFsbG93IG9wdGlvbmFsIHBhdGgsIHF1ZXJ5IHN0cmluZywgYW5kIGhhc2ggYW5jaG9yLCBub3QgZW5kaW5nIGluIHRoZSBmb2xsb3dpbmcgY2hhcmFjdGVyczogXCI/ITosLjtcIlxyXG5cdFx0XHQgICAgLy8gaHR0cDovL2Jsb2cuY29kaW5naG9ycm9yLmNvbS90aGUtcHJvYmxlbS13aXRoLXVybHMvXHJcblx0XHRcdCAgICB1cmxTdWZmaXhSZWdleCA9IC9bXFwtQS1aYS16MC05KyZAI1xcLyU9fl8oKXwnJCpcXFtcXF0/ITosLjtdKltcXC1BLVphLXowLTkrJkAjXFwvJT1+XygpfCckKlxcW1xcXV0vO1xyXG5cclxuXHRcdFx0cmV0dXJuIG5ldyBSZWdFeHAoIFtcclxuXHRcdFx0XHQnKCcsICAvLyAqKiogQ2FwdHVyaW5nIGdyb3VwICQxLCB3aGljaCBjYW4gYmUgdXNlZCB0byBjaGVjayBmb3IgYSB0d2l0dGVyIGhhbmRsZSBtYXRjaC4gVXNlIGdyb3VwICQzIGZvciB0aGUgYWN0dWFsIHR3aXR0ZXIgaGFuZGxlIHRob3VnaC4gJDIgbWF5IGJlIHVzZWQgdG8gcmVjb25zdHJ1Y3QgdGhlIG9yaWdpbmFsIHN0cmluZyBpbiBhIHJlcGxhY2UoKSBcclxuXHRcdFx0XHRcdC8vICoqKiBDYXB0dXJpbmcgZ3JvdXAgJDIsIHdoaWNoIG1hdGNoZXMgdGhlIHdoaXRlc3BhY2UgY2hhcmFjdGVyIGJlZm9yZSB0aGUgJ0AnIHNpZ24gKG5lZWRlZCBiZWNhdXNlIG9mIG5vIGxvb2tiZWhpbmRzKSwgYW5kIFxyXG5cdFx0XHRcdFx0Ly8gKioqIENhcHR1cmluZyBncm91cCAkMywgd2hpY2ggbWF0Y2hlcyB0aGUgYWN0dWFsIHR3aXR0ZXIgaGFuZGxlXHJcblx0XHRcdFx0XHR0d2l0dGVyUmVnZXguc291cmNlLFxyXG5cdFx0XHRcdCcpJyxcclxuXHJcblx0XHRcdFx0J3wnLFxyXG5cclxuXHRcdFx0XHQnKCcsICAvLyAqKiogQ2FwdHVyaW5nIGdyb3VwICQ0LCB3aGljaCBpcyB1c2VkIHRvIGRldGVybWluZSBhbiBlbWFpbCBtYXRjaFxyXG5cdFx0XHRcdFx0ZW1haWxSZWdleC5zb3VyY2UsXHJcblx0XHRcdFx0XHRkb21haW5OYW1lUmVnZXguc291cmNlLFxyXG5cdFx0XHRcdFx0dGxkUmVnZXguc291cmNlLFxyXG5cdFx0XHRcdCcpJyxcclxuXHJcblx0XHRcdFx0J3wnLFxyXG5cclxuXHRcdFx0XHQnKCcsICAvLyAqKiogQ2FwdHVyaW5nIGdyb3VwICQ1LCB3aGljaCBpcyB1c2VkIHRvIG1hdGNoIGEgVVJMXHJcblx0XHRcdFx0XHQnKD86JywgLy8gcGFyZW5zIHRvIGNvdmVyIG1hdGNoIGZvciBwcm90b2NvbCAob3B0aW9uYWwpLCBhbmQgZG9tYWluXHJcblx0XHRcdFx0XHRcdCcoJywgIC8vICoqKiBDYXB0dXJpbmcgZ3JvdXAgJDYsIGZvciBhIHByb3RvY29sLXByZWZpeGVkIHVybCAoZXg6IGh0dHA6Ly9nb29nbGUuY29tKVxyXG5cdFx0XHRcdFx0XHRcdHByb3RvY29sUmVnZXguc291cmNlLFxyXG5cdFx0XHRcdFx0XHRcdGRvbWFpbk5hbWVSZWdleC5zb3VyY2UsXHJcblx0XHRcdFx0XHRcdCcpJyxcclxuXHJcblx0XHRcdFx0XHRcdCd8JyxcclxuXHJcblx0XHRcdFx0XHRcdCcoPzonLCAgLy8gbm9uLWNhcHR1cmluZyBwYXJlbiBmb3IgYSAnd3d3LicgcHJlZml4ZWQgdXJsIChleDogd3d3Lmdvb2dsZS5jb20pXHJcblx0XHRcdFx0XHRcdFx0JyguPy8vKT8nLCAgLy8gKioqIENhcHR1cmluZyBncm91cCAkNyBmb3IgYW4gb3B0aW9uYWwgcHJvdG9jb2wtcmVsYXRpdmUgVVJMLiBNdXN0IGJlIGF0IHRoZSBiZWdpbm5pbmcgb2YgdGhlIHN0cmluZyBvciBzdGFydCB3aXRoIGEgbm9uLXdvcmQgY2hhcmFjdGVyXHJcblx0XHRcdFx0XHRcdFx0d3d3UmVnZXguc291cmNlLFxyXG5cdFx0XHRcdFx0XHRcdGRvbWFpbk5hbWVSZWdleC5zb3VyY2UsXHJcblx0XHRcdFx0XHRcdCcpJyxcclxuXHJcblx0XHRcdFx0XHRcdCd8JyxcclxuXHJcblx0XHRcdFx0XHRcdCcoPzonLCAgLy8gbm9uLWNhcHR1cmluZyBwYXJlbiBmb3Iga25vd24gYSBUTEQgdXJsIChleDogZ29vZ2xlLmNvbSlcclxuXHRcdFx0XHRcdFx0XHQnKC4/Ly8pPycsICAvLyAqKiogQ2FwdHVyaW5nIGdyb3VwICQ4IGZvciBhbiBvcHRpb25hbCBwcm90b2NvbC1yZWxhdGl2ZSBVUkwuIE11c3QgYmUgYXQgdGhlIGJlZ2lubmluZyBvZiB0aGUgc3RyaW5nIG9yIHN0YXJ0IHdpdGggYSBub24td29yZCBjaGFyYWN0ZXJcclxuXHRcdFx0XHRcdFx0XHRkb21haW5OYW1lUmVnZXguc291cmNlLFxyXG5cdFx0XHRcdFx0XHRcdHRsZFJlZ2V4LnNvdXJjZSxcclxuXHRcdFx0XHRcdFx0JyknLFxyXG5cdFx0XHRcdFx0JyknLFxyXG5cclxuXHRcdFx0XHRcdCcoPzonICsgdXJsU3VmZml4UmVnZXguc291cmNlICsgJyk/JywgIC8vIG1hdGNoIGZvciBwYXRoLCBxdWVyeSBzdHJpbmcsIGFuZC9vciBoYXNoIGFuY2hvciAtIG9wdGlvbmFsXHJcblx0XHRcdFx0JyknXHJcblx0XHRcdF0uam9pbiggXCJcIiApLCAnZ2knICk7XHJcblx0XHR9ICkoKSxcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIEBwcml2YXRlXHJcblx0XHQgKiBAcHJvcGVydHkge1JlZ0V4cH0gY2hhckJlZm9yZVByb3RvY29sUmVsTWF0Y2hSZWdleFxyXG5cdFx0ICogXHJcblx0XHQgKiBUaGUgcmVndWxhciBleHByZXNzaW9uIHVzZWQgdG8gcmV0cmlldmUgdGhlIGNoYXJhY3RlciBiZWZvcmUgYSBwcm90b2NvbC1yZWxhdGl2ZSBVUkwgbWF0Y2guXHJcblx0XHQgKiBcclxuXHRcdCAqIFRoaXMgaXMgdXNlZCBpbiBjb25qdW5jdGlvbiB3aXRoIHRoZSB7QGxpbmsgI21hdGNoZXJSZWdleH0sIHdoaWNoIG5lZWRzIHRvIGdyYWIgdGhlIGNoYXJhY3RlciBiZWZvcmUgYSBwcm90b2NvbC1yZWxhdGl2ZVxyXG5cdFx0ICogJy8vJyBkdWUgdG8gdGhlIGxhY2sgb2YgYSBuZWdhdGl2ZSBsb29rLWJlaGluZCBpbiBKYXZhU2NyaXB0IHJlZ3VsYXIgZXhwcmVzc2lvbnMuIFRoZSBjaGFyYWN0ZXIgYmVmb3JlIHRoZSBtYXRjaCBpcyBzdHJpcHBlZFxyXG5cdFx0ICogZnJvbSB0aGUgVVJMLlxyXG5cdFx0ICovXHJcblx0XHRjaGFyQmVmb3JlUHJvdG9jb2xSZWxNYXRjaFJlZ2V4IDogL14oLik/XFwvXFwvLyxcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIEBwcml2YXRlXHJcblx0XHQgKiBAcHJvcGVydHkge0F1dG9saW5rZXIuTWF0Y2hWYWxpZGF0b3J9IG1hdGNoVmFsaWRhdG9yXHJcblx0XHQgKiBcclxuXHRcdCAqIFRoZSBNYXRjaFZhbGlkYXRvciBvYmplY3QsIHVzZWQgdG8gZmlsdGVyIG91dCBhbnkgZmFsc2UgcG9zaXRpdmVzIGZyb20gdGhlIHtAbGluayAjbWF0Y2hlclJlZ2V4fS4gU2VlXHJcblx0XHQgKiB7QGxpbmsgQXV0b2xpbmtlci5NYXRjaFZhbGlkYXRvcn0gZm9yIGRldGFpbHMuXHJcblx0XHQgKi9cclxuXHJcblx0XHQvKipcclxuXHRcdCAqIEBwcml2YXRlXHJcblx0XHQgKiBAcHJvcGVydHkge0F1dG9saW5rZXIuSHRtbFBhcnNlcn0gaHRtbFBhcnNlclxyXG5cdFx0ICogXHJcblx0XHQgKiBUaGUgSHRtbFBhcnNlciBpbnN0YW5jZSB1c2VkIHRvIHNraXAgb3ZlciBIVE1MIHRhZ3MsIHdoaWxlIGZpbmRpbmcgdGV4dCBub2RlcyB0byBwcm9jZXNzLiBUaGlzIGlzIGxhemlseSBpbnN0YW50aWF0ZWRcclxuXHRcdCAqIGluIHRoZSB7QGxpbmsgI2dldEh0bWxQYXJzZXJ9IG1ldGhvZC5cclxuXHRcdCAqL1xyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogQHByaXZhdGVcclxuXHRcdCAqIEBwcm9wZXJ0eSB7QXV0b2xpbmtlci5BbmNob3JUYWdCdWlsZGVyfSB0YWdCdWlsZGVyXHJcblx0XHQgKiBcclxuXHRcdCAqIFRoZSBBbmNob3JUYWdCdWlsZGVyIGluc3RhbmNlIHVzZWQgdG8gYnVpbGQgdGhlIFVSTC9lbWFpbC9Ud2l0dGVyIHJlcGxhY2VtZW50IGFuY2hvciB0YWdzLiBUaGlzIGlzIGxhemlseSBpbnN0YW50aWF0ZWRcclxuXHRcdCAqIGluIHRoZSB7QGxpbmsgI2dldFRhZ0J1aWxkZXJ9IG1ldGhvZC5cclxuXHRcdCAqL1xyXG5cclxuXHJcblx0XHQvKipcclxuXHRcdCAqIEF1dG9tYXRpY2FsbHkgbGlua3MgVVJMcywgZW1haWwgYWRkcmVzc2VzLCBhbmQgVHdpdHRlciBoYW5kbGVzIGZvdW5kIGluIHRoZSBnaXZlbiBjaHVuayBvZiBIVE1MLiBcclxuXHRcdCAqIERvZXMgbm90IGxpbmsgVVJMcyBmb3VuZCB3aXRoaW4gSFRNTCB0YWdzLlxyXG5cdFx0ICogXHJcblx0XHQgKiBGb3IgaW5zdGFuY2UsIGlmIGdpdmVuIHRoZSB0ZXh0OiBgWW91IHNob3VsZCBnbyB0byBodHRwOi8vd3d3LnlhaG9vLmNvbWAsIHRoZW4gdGhlIHJlc3VsdFxyXG5cdFx0ICogd2lsbCBiZSBgWW91IHNob3VsZCBnbyB0byAmbHQ7YSBocmVmPVwiaHR0cDovL3d3dy55YWhvby5jb21cIiZndDtodHRwOi8vd3d3LnlhaG9vLmNvbSZsdDsvYSZndDtgXHJcblx0XHQgKiBcclxuXHRcdCAqIFRoaXMgbWV0aG9kIGZpbmRzIHRoZSB0ZXh0IGFyb3VuZCBhbnkgSFRNTCBlbGVtZW50cyBpbiB0aGUgaW5wdXQgYHRleHRPckh0bWxgLCB3aGljaCB3aWxsIGJlIHRoZSB0ZXh0IHRoYXQgaXMgcHJvY2Vzc2VkLlxyXG5cdFx0ICogQW55IG9yaWdpbmFsIEhUTUwgZWxlbWVudHMgd2lsbCBiZSBsZWZ0IGFzLWlzLCBhcyB3ZWxsIGFzIHRoZSB0ZXh0IHRoYXQgaXMgYWxyZWFkeSB3cmFwcGVkIGluIGFuY2hvciAoJmx0O2EmZ3Q7KSB0YWdzLlxyXG5cdFx0ICogXHJcblx0XHQgKiBAcGFyYW0ge1N0cmluZ30gdGV4dE9ySHRtbCBUaGUgSFRNTCBvciB0ZXh0IHRvIGxpbmsgVVJMcywgZW1haWwgYWRkcmVzc2VzLCBhbmQgVHdpdHRlciBoYW5kbGVzIHdpdGhpbiAoZGVwZW5kaW5nIG9uIGlmXHJcblx0XHQgKiAgIHRoZSB7QGxpbmsgI3VybHN9LCB7QGxpbmsgI2VtYWlsfSwgYW5kIHtAbGluayAjdHdpdHRlcn0gb3B0aW9ucyBhcmUgZW5hYmxlZCkuXHJcblx0XHQgKiBAcmV0dXJuIHtTdHJpbmd9IFRoZSBIVE1MLCB3aXRoIFVSTHMvZW1haWxzL1R3aXR0ZXIgaGFuZGxlcyBhdXRvbWF0aWNhbGx5IGxpbmtlZC5cclxuXHRcdCAqL1xyXG5cdFx0bGluayA6IGZ1bmN0aW9uKCB0ZXh0T3JIdG1sICkge1xyXG5cdFx0XHR2YXIgbWUgPSB0aGlzLCAgLy8gZm9yIGNsb3N1cmVcclxuXHRcdFx0ICAgIGh0bWxQYXJzZXIgPSB0aGlzLmdldEh0bWxQYXJzZXIoKSxcclxuXHRcdFx0ICAgIGh0bWxDaGFyYWN0ZXJFbnRpdGllc1JlZ2V4ID0gdGhpcy5odG1sQ2hhcmFjdGVyRW50aXRpZXNSZWdleCxcclxuXHRcdFx0ICAgIGFuY2hvclRhZ1N0YWNrQ291bnQgPSAwLCAgLy8gdXNlZCB0byBvbmx5IHByb2Nlc3MgdGV4dCBhcm91bmQgYW5jaG9yIHRhZ3MsIGFuZCBhbnkgaW5uZXIgdGV4dC9odG1sIHRoZXkgbWF5IGhhdmVcclxuXHRcdFx0ICAgIHJlc3VsdEh0bWwgPSBbXTtcclxuXHJcblx0XHRcdGh0bWxQYXJzZXIucGFyc2UoIHRleHRPckh0bWwsIHtcclxuXHRcdFx0XHQvLyBQcm9jZXNzIEhUTUwgbm9kZXMgaW4gdGhlIGlucHV0IGB0ZXh0T3JIdG1sYFxyXG5cdFx0XHRcdHByb2Nlc3NIdG1sTm9kZSA6IGZ1bmN0aW9uKCB0YWdUZXh0LCB0YWdOYW1lLCBpc0Nsb3NpbmdUYWcgKSB7XHJcblx0XHRcdFx0XHRpZiggdGFnTmFtZSA9PT0gJ2EnICkge1xyXG5cdFx0XHRcdFx0XHRpZiggIWlzQ2xvc2luZ1RhZyApIHsgIC8vIGl0J3MgdGhlIHN0YXJ0IDxhPiB0YWdcclxuXHRcdFx0XHRcdFx0XHRhbmNob3JUYWdTdGFja0NvdW50Kys7XHJcblx0XHRcdFx0XHRcdH0gZWxzZSB7ICAgLy8gaXQncyB0aGUgZW5kIDwvYT4gdGFnXHJcblx0XHRcdFx0XHRcdFx0YW5jaG9yVGFnU3RhY2tDb3VudCA9IE1hdGgubWF4KCBhbmNob3JUYWdTdGFja0NvdW50IC0gMSwgMCApOyAgLy8gYXR0ZW1wdCB0byBoYW5kbGUgZXh0cmFuZW91cyA8L2E+IHRhZ3MgYnkgbWFraW5nIHN1cmUgdGhlIHN0YWNrIGNvdW50IG5ldmVyIGdvZXMgYmVsb3cgMFxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRyZXN1bHRIdG1sLnB1c2goIHRhZ1RleHQgKTsgIC8vIG5vdyBhZGQgdGhlIHRleHQgb2YgdGhlIHRhZyBpdHNlbGYgdmVyYmF0aW1cclxuXHRcdFx0XHR9LFxyXG5cclxuXHRcdFx0XHQvLyBQcm9jZXNzIHRleHQgbm9kZXMgaW4gdGhlIGlucHV0IGB0ZXh0T3JIdG1sYFxyXG5cdFx0XHRcdHByb2Nlc3NUZXh0Tm9kZSA6IGZ1bmN0aW9uKCB0ZXh0ICkge1xyXG5cdFx0XHRcdFx0aWYoIGFuY2hvclRhZ1N0YWNrQ291bnQgPT09IDAgKSB7XHJcblx0XHRcdFx0XHRcdC8vIElmIHdlJ3JlIG5vdCB3aXRoaW4gYW4gPGE+IHRhZywgcHJvY2VzcyB0aGUgdGV4dCBub2RlXHJcblx0XHRcdFx0XHRcdHZhciB1bmVzY2FwZWRUZXh0ID0gQXV0b2xpbmtlci5VdGlsLnNwbGl0QW5kQ2FwdHVyZSggdGV4dCwgaHRtbENoYXJhY3RlckVudGl0aWVzUmVnZXggKTsgIC8vIHNwbGl0IGF0IEhUTUwgZW50aXRpZXMsIGJ1dCBpbmNsdWRlIHRoZSBIVE1MIGVudGl0aWVzIGluIHRoZSByZXN1bHRzIGFycmF5XHJcblxyXG5cdFx0XHRcdFx0XHRmb3IgKCB2YXIgaSA9IDAsIGxlbiA9IHVuZXNjYXBlZFRleHQubGVuZ3RoOyBpIDwgbGVuOyBpKysgKSB7XHJcblx0XHRcdFx0XHRcdFx0dmFyIHRleHRUb1Byb2Nlc3MgPSB1bmVzY2FwZWRUZXh0WyBpIF0sXHJcblx0XHRcdFx0XHRcdFx0ICAgIHByb2Nlc3NlZFRleHROb2RlID0gbWUucHJvY2Vzc1RleHROb2RlKCB0ZXh0VG9Qcm9jZXNzICk7XHJcblxyXG5cdFx0XHRcdFx0XHRcdHJlc3VsdEh0bWwucHVzaCggcHJvY2Vzc2VkVGV4dE5vZGUgKTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdC8vIGB0ZXh0YCBpcyB3aXRoaW4gYW4gPGE+IHRhZywgc2ltcGx5IGFwcGVuZCB0aGUgdGV4dCAtIHdlIGRvIG5vdCB3YW50IHRvIGF1dG9saW5rIGFueXRoaW5nIFxyXG5cdFx0XHRcdFx0XHQvLyBhbHJlYWR5IHdpdGhpbiBhbiA8YT4uLi48L2E+IHRhZ1xyXG5cdFx0XHRcdFx0XHRyZXN1bHRIdG1sLnB1c2goIHRleHQgKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH0gKTtcclxuXHJcblx0XHRcdHJldHVybiByZXN1bHRIdG1sLmpvaW4oIFwiXCIgKTtcclxuXHRcdH0sXHJcblxyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogTGF6aWx5IGluc3RhbnRpYXRlcyBhbmQgcmV0dXJucyB0aGUge0BsaW5rICNodG1sUGFyc2VyfSBpbnN0YW5jZSBmb3IgdGhpcyBBdXRvbGlua2VyIGluc3RhbmNlLlxyXG5cdFx0ICogXHJcblx0XHQgKiBAcHJvdGVjdGVkXHJcblx0XHQgKiBAcmV0dXJuIHtBdXRvbGlua2VyLkh0bWxQYXJzZXJ9XHJcblx0XHQgKi9cclxuXHRcdGdldEh0bWxQYXJzZXIgOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0dmFyIGh0bWxQYXJzZXIgPSB0aGlzLmh0bWxQYXJzZXI7XHJcblxyXG5cdFx0XHRpZiggIWh0bWxQYXJzZXIgKSB7XHJcblx0XHRcdFx0aHRtbFBhcnNlciA9IHRoaXMuaHRtbFBhcnNlciA9IG5ldyBBdXRvbGlua2VyLkh0bWxQYXJzZXIoKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0cmV0dXJuIGh0bWxQYXJzZXI7XHJcblx0XHR9LFxyXG5cclxuXHJcblx0XHQvKipcclxuXHRcdCAqIFJldHVybnMgdGhlIHtAbGluayAjdGFnQnVpbGRlcn0gaW5zdGFuY2UgZm9yIHRoaXMgQXV0b2xpbmtlciBpbnN0YW5jZSwgbGF6aWx5IGluc3RhbnRpYXRpbmcgaXRcclxuXHRcdCAqIGlmIGl0IGRvZXMgbm90IHlldCBleGlzdC5cclxuXHRcdCAqIFxyXG5cdFx0ICogVGhpcyBtZXRob2QgbWF5IGJlIHVzZWQgaW4gYSB7QGxpbmsgI3JlcGxhY2VGbn0gdG8gZ2VuZXJhdGUgdGhlIHtAbGluayBBdXRvbGlua2VyLkh0bWxUYWcgSHRtbFRhZ30gaW5zdGFuY2UgdGhhdCBcclxuXHRcdCAqIEF1dG9saW5rZXIgd291bGQgbm9ybWFsbHkgZ2VuZXJhdGUsIGFuZCB0aGVuIGFsbG93IGZvciBtb2RpZmljYXRpb25zIGJlZm9yZSByZXR1cm5pbmcgaXQuIEZvciBleGFtcGxlOlxyXG5cdFx0ICogXHJcblx0XHQgKiAgICAgdmFyIGh0bWwgPSBBdXRvbGlua2VyLmxpbmsoIFwiVGVzdCBnb29nbGUuY29tXCIsIHtcclxuXHRcdCAqICAgICAgICAgcmVwbGFjZUZuIDogZnVuY3Rpb24oIGF1dG9saW5rZXIsIG1hdGNoICkge1xyXG5cdFx0ICogICAgICAgICAgICAgdmFyIHRhZyA9IGF1dG9saW5rZXIuZ2V0VGFnQnVpbGRlcigpLmJ1aWxkKCBtYXRjaCApOyAgLy8gcmV0dXJucyBhbiB7QGxpbmsgQXV0b2xpbmtlci5IdG1sVGFnfSBpbnN0YW5jZVxyXG5cdFx0ICogICAgICAgICAgICAgdGFnLnNldEF0dHIoICdyZWwnLCAnbm9mb2xsb3cnICk7XHJcblx0XHQgKiAgICAgICAgICAgICBcclxuXHRcdCAqICAgICAgICAgICAgIHJldHVybiB0YWc7XHJcblx0XHQgKiAgICAgICAgIH1cclxuXHRcdCAqICAgICB9ICk7XHJcblx0XHQgKiAgICAgXHJcblx0XHQgKiAgICAgLy8gZ2VuZXJhdGVkIGh0bWw6XHJcblx0XHQgKiAgICAgLy8gICBUZXN0IDxhIGhyZWY9XCJodHRwOi8vZ29vZ2xlLmNvbVwiIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vZm9sbG93XCI+Z29vZ2xlLmNvbTwvYT5cclxuXHRcdCAqIFxyXG5cdFx0ICogQHJldHVybiB7QXV0b2xpbmtlci5BbmNob3JUYWdCdWlsZGVyfVxyXG5cdFx0ICovXHJcblx0XHRnZXRUYWdCdWlsZGVyIDogZnVuY3Rpb24oKSB7XHJcblx0XHRcdHZhciB0YWdCdWlsZGVyID0gdGhpcy50YWdCdWlsZGVyO1xyXG5cclxuXHRcdFx0aWYoICF0YWdCdWlsZGVyICkge1xyXG5cdFx0XHRcdHRhZ0J1aWxkZXIgPSB0aGlzLnRhZ0J1aWxkZXIgPSBuZXcgQXV0b2xpbmtlci5BbmNob3JUYWdCdWlsZGVyKCB7XHJcblx0XHRcdFx0XHRuZXdXaW5kb3cgICA6IHRoaXMubmV3V2luZG93LFxyXG5cdFx0XHRcdFx0dHJ1bmNhdGUgICAgOiB0aGlzLnRydW5jYXRlLFxyXG5cdFx0XHRcdFx0Y2xhc3NOYW1lICAgOiB0aGlzLmNsYXNzTmFtZVxyXG5cdFx0XHRcdH0gKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0cmV0dXJuIHRhZ0J1aWxkZXI7XHJcblx0XHR9LFxyXG5cclxuXHJcblx0XHQvKipcclxuXHRcdCAqIFByb2Nlc3MgdGhlIHRleHQgdGhhdCBsaWVzIGluYmV0d2VlbiBIVE1MIHRhZ3MuIFRoaXMgbWV0aG9kIGRvZXMgdGhlIGFjdHVhbCB3cmFwcGluZyBvZiBVUkxzIHdpdGhcclxuXHRcdCAqIGFuY2hvciB0YWdzLlxyXG5cdFx0ICogXHJcblx0XHQgKiBAcHJpdmF0ZVxyXG5cdFx0ICogQHBhcmFtIHtTdHJpbmd9IHRleHQgVGhlIHRleHQgdG8gYXV0by1saW5rLlxyXG5cdFx0ICogQHJldHVybiB7U3RyaW5nfSBUaGUgdGV4dCB3aXRoIGFuY2hvciB0YWdzIGF1dG8tZmlsbGVkLlxyXG5cdFx0ICovXHJcblx0XHRwcm9jZXNzVGV4dE5vZGUgOiBmdW5jdGlvbiggdGV4dCApIHtcclxuXHRcdFx0dmFyIG1lID0gdGhpczsgIC8vIGZvciBjbG9zdXJlXHJcblxyXG5cdFx0XHRyZXR1cm4gdGV4dC5yZXBsYWNlKCB0aGlzLm1hdGNoZXJSZWdleCwgZnVuY3Rpb24oIG1hdGNoU3RyLCAkMSwgJDIsICQzLCAkNCwgJDUsICQ2LCAkNywgJDggKSB7XHJcblx0XHRcdFx0dmFyIG1hdGNoRGVzY09iaiA9IG1lLnByb2Nlc3NDYW5kaWRhdGVNYXRjaCggbWF0Y2hTdHIsICQxLCAkMiwgJDMsICQ0LCAkNSwgJDYsICQ3LCAkOCApOyAgLy8gbWF0Y2ggZGVzY3JpcHRpb24gb2JqZWN0XHJcblxyXG5cdFx0XHRcdC8vIFJldHVybiBvdXQgd2l0aCBubyBjaGFuZ2VzIGZvciBtYXRjaCB0eXBlcyB0aGF0IGFyZSBkaXNhYmxlZCAodXJsLCBlbWFpbCwgdHdpdHRlciksIG9yIGZvciBtYXRjaGVzIHRoYXQgYXJlIFxyXG5cdFx0XHRcdC8vIGludmFsaWQgKGZhbHNlIHBvc2l0aXZlcyBmcm9tIHRoZSBtYXRjaGVyUmVnZXgsIHdoaWNoIGNhbid0IHVzZSBsb29rLWJlaGluZHMgc2luY2UgdGhleSBhcmUgdW5hdmFpbGFibGUgaW4gSlMpLlxyXG5cdFx0XHRcdGlmKCAhbWF0Y2hEZXNjT2JqICkge1xyXG5cdFx0XHRcdFx0cmV0dXJuIG1hdGNoU3RyO1xyXG5cclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0Ly8gR2VuZXJhdGUgdGhlIHJlcGxhY2VtZW50IHRleHQgZm9yIHRoZSBtYXRjaFxyXG5cdFx0XHRcdFx0dmFyIG1hdGNoUmV0dXJuVmFsID0gbWUuY3JlYXRlTWF0Y2hSZXR1cm5WYWwoIG1hdGNoRGVzY09iai5tYXRjaCwgbWF0Y2hEZXNjT2JqLm1hdGNoU3RyICk7XHJcblx0XHRcdFx0XHRyZXR1cm4gbWF0Y2hEZXNjT2JqLnByZWZpeFN0ciArIG1hdGNoUmV0dXJuVmFsICsgbWF0Y2hEZXNjT2JqLnN1ZmZpeFN0cjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0gKTtcclxuXHRcdH0sXHJcblxyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogUHJvY2Vzc2VzIGEgY2FuZGlkYXRlIG1hdGNoIGZyb20gdGhlIHtAbGluayAjbWF0Y2hlclJlZ2V4fS4gXHJcblx0XHQgKiBcclxuXHRcdCAqIE5vdCBhbGwgbWF0Y2hlcyBmb3VuZCBieSB0aGUgcmVnZXggYXJlIGFjdHVhbCBVUkwvZW1haWwvVHdpdHRlciBtYXRjaGVzLCBhcyBkZXRlcm1pbmVkIGJ5IHRoZSB7QGxpbmsgI21hdGNoVmFsaWRhdG9yfS4gSW5cclxuXHRcdCAqIHRoaXMgY2FzZSwgdGhlIG1ldGhvZCByZXR1cm5zIGBudWxsYC4gT3RoZXJ3aXNlLCBhIHZhbGlkIE9iamVjdCB3aXRoIGBwcmVmaXhTdHJgLCBgbWF0Y2hgLCBhbmQgYHN1ZmZpeFN0cmAgaXMgcmV0dXJuZWQuXHJcblx0XHQgKiBcclxuXHRcdCAqIEBwcml2YXRlXHJcblx0XHQgKiBAcGFyYW0ge1N0cmluZ30gbWF0Y2hTdHIgVGhlIGZ1bGwgbWF0Y2ggdGhhdCB3YXMgZm91bmQgYnkgdGhlIHtAbGluayAjbWF0Y2hlclJlZ2V4fS5cclxuXHRcdCAqIEBwYXJhbSB7U3RyaW5nfSB0d2l0dGVyTWF0Y2ggVGhlIG1hdGNoZWQgdGV4dCBvZiBhIFR3aXR0ZXIgaGFuZGxlLCBpZiB0aGUgbWF0Y2ggaXMgYSBUd2l0dGVyIG1hdGNoLlxyXG5cdFx0ICogQHBhcmFtIHtTdHJpbmd9IHR3aXR0ZXJIYW5kbGVQcmVmaXhXaGl0ZXNwYWNlQ2hhciBUaGUgd2hpdGVzcGFjZSBjaGFyIGJlZm9yZSB0aGUgQCBzaWduIGluIGEgVHdpdHRlciBoYW5kbGUgbWF0Y2guIFRoaXMgXHJcblx0XHQgKiAgIGlzIG5lZWRlZCBiZWNhdXNlIG9mIG5vIGxvb2tiZWhpbmRzIGluIEpTIHJlZ2V4ZXMsIGFuZCBpcyBuZWVkIHRvIHJlLWluY2x1ZGUgdGhlIGNoYXJhY3RlciBmb3IgdGhlIGFuY2hvciB0YWcgcmVwbGFjZW1lbnQuXHJcblx0XHQgKiBAcGFyYW0ge1N0cmluZ30gdHdpdHRlckhhbmRsZSBUaGUgYWN0dWFsIFR3aXR0ZXIgdXNlciAoaS5lIHRoZSB3b3JkIGFmdGVyIHRoZSBAIHNpZ24gaW4gYSBUd2l0dGVyIG1hdGNoKS5cclxuXHRcdCAqIEBwYXJhbSB7U3RyaW5nfSBlbWFpbEFkZHJlc3NNYXRjaCBUaGUgbWF0Y2hlZCBlbWFpbCBhZGRyZXNzIGZvciBhbiBlbWFpbCBhZGRyZXNzIG1hdGNoLlxyXG5cdFx0ICogQHBhcmFtIHtTdHJpbmd9IHVybE1hdGNoIFRoZSBtYXRjaGVkIFVSTCBzdHJpbmcgZm9yIGEgVVJMIG1hdGNoLlxyXG5cdFx0ICogQHBhcmFtIHtTdHJpbmd9IHByb3RvY29sVXJsTWF0Y2ggVGhlIG1hdGNoIFVSTCBzdHJpbmcgZm9yIGEgcHJvdG9jb2wgbWF0Y2guIEV4OiAnaHR0cDovL3lhaG9vLmNvbScuIFRoaXMgaXMgdXNlZCB0byBtYXRjaFxyXG5cdFx0ICogICBzb21ldGhpbmcgbGlrZSAnaHR0cDovL2xvY2FsaG9zdCcsIHdoZXJlIHdlIHdvbid0IGRvdWJsZSBjaGVjayB0aGF0IHRoZSBkb21haW4gbmFtZSBoYXMgYXQgbGVhc3Qgb25lICcuJyBpbiBpdC5cclxuXHRcdCAqIEBwYXJhbSB7U3RyaW5nfSB3d3dQcm90b2NvbFJlbGF0aXZlTWF0Y2ggVGhlICcvLycgZm9yIGEgcHJvdG9jb2wtcmVsYXRpdmUgbWF0Y2ggZnJvbSBhICd3d3cnIHVybCwgd2l0aCB0aGUgY2hhcmFjdGVyIHRoYXQgXHJcblx0XHQgKiAgIGNvbWVzIGJlZm9yZSB0aGUgJy8vJy5cclxuXHRcdCAqIEBwYXJhbSB7U3RyaW5nfSB0bGRQcm90b2NvbFJlbGF0aXZlTWF0Y2ggVGhlICcvLycgZm9yIGEgcHJvdG9jb2wtcmVsYXRpdmUgbWF0Y2ggZnJvbSBhIFRMRCAodG9wIGxldmVsIGRvbWFpbikgbWF0Y2gsIHdpdGggXHJcblx0XHQgKiAgIHRoZSBjaGFyYWN0ZXIgdGhhdCBjb21lcyBiZWZvcmUgdGhlICcvLycuXHJcblx0XHQgKiAgIFxyXG5cdFx0ICogQHJldHVybiB7T2JqZWN0fSBBIFwibWF0Y2ggZGVzY3JpcHRpb24gb2JqZWN0XCIuIFRoaXMgd2lsbCBiZSBgbnVsbGAgaWYgdGhlIG1hdGNoIHdhcyBpbnZhbGlkLCBvciBpZiBhIG1hdGNoIHR5cGUgaXMgZGlzYWJsZWQuXHJcblx0XHQgKiAgIE90aGVyd2lzZSwgdGhpcyB3aWxsIGJlIGFuIE9iamVjdCAobWFwKSB3aXRoIHRoZSBmb2xsb3dpbmcgcHJvcGVydGllczpcclxuXHRcdCAqIEByZXR1cm4ge1N0cmluZ30gcmV0dXJuLnByZWZpeFN0ciBUaGUgY2hhcihzKSB0aGF0IHNob3VsZCBiZSBwcmVwZW5kZWQgdG8gdGhlIHJlcGxhY2VtZW50IHN0cmluZy4gVGhlc2UgYXJlIGNoYXIocykgdGhhdFxyXG5cdFx0ICogICB3ZXJlIG5lZWRlZCB0byBiZSBpbmNsdWRlZCBmcm9tIHRoZSByZWdleCBtYXRjaCB0aGF0IHdlcmUgaWdub3JlZCBieSBwcm9jZXNzaW5nIGNvZGUsIGFuZCBzaG91bGQgYmUgcmUtaW5zZXJ0ZWQgaW50byBcclxuXHRcdCAqICAgdGhlIHJlcGxhY2VtZW50IHN0cmVhbS5cclxuXHRcdCAqIEByZXR1cm4ge1N0cmluZ30gcmV0dXJuLnN1ZmZpeFN0ciBUaGUgY2hhcihzKSB0aGF0IHNob3VsZCBiZSBhcHBlbmRlZCB0byB0aGUgcmVwbGFjZW1lbnQgc3RyaW5nLiBUaGVzZSBhcmUgY2hhcihzKSB0aGF0XHJcblx0XHQgKiAgIHdlcmUgbmVlZGVkIHRvIGJlIGluY2x1ZGVkIGZyb20gdGhlIHJlZ2V4IG1hdGNoIHRoYXQgd2VyZSBpZ25vcmVkIGJ5IHByb2Nlc3NpbmcgY29kZSwgYW5kIHNob3VsZCBiZSByZS1pbnNlcnRlZCBpbnRvIFxyXG5cdFx0ICogICB0aGUgcmVwbGFjZW1lbnQgc3RyZWFtLlxyXG5cdFx0ICogQHJldHVybiB7U3RyaW5nfSByZXR1cm4ubWF0Y2hTdHIgVGhlIGBtYXRjaFN0cmAsIGZpeGVkIHVwIHRvIHJlbW92ZSBjaGFyYWN0ZXJzIHRoYXQgYXJlIG5vIGxvbmdlciBuZWVkZWQgKHdoaWNoIGhhdmUgYmVlblxyXG5cdFx0ICogICBhZGRlZCB0byBgcHJlZml4U3RyYCBhbmQgYHN1ZmZpeFN0cmApLlxyXG5cdFx0ICogQHJldHVybiB7QXV0b2xpbmtlci5tYXRjaC5NYXRjaH0gcmV0dXJuLm1hdGNoIFRoZSBNYXRjaCBvYmplY3QgdGhhdCByZXByZXNlbnRzIHRoZSBtYXRjaCB0aGF0IHdhcyBmb3VuZC5cclxuXHRcdCAqL1xyXG5cdFx0cHJvY2Vzc0NhbmRpZGF0ZU1hdGNoIDogZnVuY3Rpb24oIFxyXG5cdFx0XHRtYXRjaFN0ciwgdHdpdHRlck1hdGNoLCB0d2l0dGVySGFuZGxlUHJlZml4V2hpdGVzcGFjZUNoYXIsIHR3aXR0ZXJIYW5kbGUsIFxyXG5cdFx0XHRlbWFpbEFkZHJlc3NNYXRjaCwgdXJsTWF0Y2gsIHByb3RvY29sVXJsTWF0Y2gsIHd3d1Byb3RvY29sUmVsYXRpdmVNYXRjaCwgdGxkUHJvdG9jb2xSZWxhdGl2ZU1hdGNoXHJcblx0XHQpIHtcclxuXHRcdFx0dmFyIHByb3RvY29sUmVsYXRpdmVNYXRjaCA9IHd3d1Byb3RvY29sUmVsYXRpdmVNYXRjaCB8fCB0bGRQcm90b2NvbFJlbGF0aXZlTWF0Y2gsXHJcblx0XHRcdCAgICBtYXRjaCwgIC8vIFdpbGwgYmUgYW4gQXV0b2xpbmtlci5tYXRjaC5NYXRjaCBvYmplY3RcclxuXHJcblx0XHRcdCAgICBwcmVmaXhTdHIgPSBcIlwiLCAgICAgICAvLyBBIHN0cmluZyB0byB1c2UgdG8gcHJlZml4IHRoZSBhbmNob3IgdGFnIHRoYXQgaXMgY3JlYXRlZC4gVGhpcyBpcyBuZWVkZWQgZm9yIHRoZSBUd2l0dGVyIGhhbmRsZSBtYXRjaFxyXG5cdFx0XHQgICAgc3VmZml4U3RyID0gXCJcIjsgICAgICAgLy8gQSBzdHJpbmcgdG8gc3VmZml4IHRoZSBhbmNob3IgdGFnIHRoYXQgaXMgY3JlYXRlZC4gVGhpcyBpcyB1c2VkIGlmIHRoZXJlIGlzIGEgdHJhaWxpbmcgcGFyZW50aGVzaXMgdGhhdCBzaG91bGQgbm90IGJlIGF1dG8tbGlua2VkLlxyXG5cclxuXHJcblx0XHRcdC8vIFJldHVybiBvdXQgd2l0aCBgbnVsbGAgZm9yIG1hdGNoIHR5cGVzIHRoYXQgYXJlIGRpc2FibGVkICh1cmwsIGVtYWlsLCB0d2l0dGVyKSwgb3IgZm9yIG1hdGNoZXMgdGhhdCBhcmUgXHJcblx0XHRcdC8vIGludmFsaWQgKGZhbHNlIHBvc2l0aXZlcyBmcm9tIHRoZSBtYXRjaGVyUmVnZXgsIHdoaWNoIGNhbid0IHVzZSBsb29rLWJlaGluZHMgc2luY2UgdGhleSBhcmUgdW5hdmFpbGFibGUgaW4gSlMpLlxyXG5cdFx0XHRpZihcclxuXHRcdFx0XHQoIHR3aXR0ZXJNYXRjaCAmJiAhdGhpcy50d2l0dGVyICkgfHwgKCBlbWFpbEFkZHJlc3NNYXRjaCAmJiAhdGhpcy5lbWFpbCApIHx8ICggdXJsTWF0Y2ggJiYgIXRoaXMudXJscyApIHx8XHJcblx0XHRcdFx0IXRoaXMubWF0Y2hWYWxpZGF0b3IuaXNWYWxpZE1hdGNoKCB1cmxNYXRjaCwgcHJvdG9jb2xVcmxNYXRjaCwgcHJvdG9jb2xSZWxhdGl2ZU1hdGNoICkgXHJcblx0XHRcdCkge1xyXG5cdFx0XHRcdHJldHVybiBudWxsO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQvLyBIYW5kbGUgYSBjbG9zaW5nIHBhcmVudGhlc2lzIGF0IHRoZSBlbmQgb2YgdGhlIG1hdGNoLCBhbmQgZXhjbHVkZSBpdCBpZiB0aGVyZSBpcyBub3QgYSBtYXRjaGluZyBvcGVuIHBhcmVudGhlc2lzXHJcblx0XHRcdC8vIGluIHRoZSBtYXRjaCBpdHNlbGYuIFxyXG5cdFx0XHRpZiggdGhpcy5tYXRjaEhhc1VuYmFsYW5jZWRDbG9zaW5nUGFyZW4oIG1hdGNoU3RyICkgKSB7XHJcblx0XHRcdFx0bWF0Y2hTdHIgPSBtYXRjaFN0ci5zdWJzdHIoIDAsIG1hdGNoU3RyLmxlbmd0aCAtIDEgKTsgIC8vIHJlbW92ZSB0aGUgdHJhaWxpbmcgXCIpXCJcclxuXHRcdFx0XHRzdWZmaXhTdHIgPSBcIilcIjsgIC8vIHRoaXMgd2lsbCBiZSBhZGRlZCBhZnRlciB0aGUgZ2VuZXJhdGVkIDxhPiB0YWdcclxuXHRcdFx0fVxyXG5cclxuXHJcblx0XHRcdGlmKCBlbWFpbEFkZHJlc3NNYXRjaCApIHtcclxuXHRcdFx0XHRtYXRjaCA9IG5ldyBBdXRvbGlua2VyLm1hdGNoLkVtYWlsKCB7IG1hdGNoZWRUZXh0OiBtYXRjaFN0ciwgZW1haWw6IGVtYWlsQWRkcmVzc01hdGNoIH0gKTtcclxuXHJcblx0XHRcdH0gZWxzZSBpZiggdHdpdHRlck1hdGNoICkge1xyXG5cdFx0XHRcdC8vIGZpeCB1cCB0aGUgYG1hdGNoU3RyYCBpZiB0aGVyZSB3YXMgYSBwcmVjZWRpbmcgd2hpdGVzcGFjZSBjaGFyLCB3aGljaCB3YXMgbmVlZGVkIHRvIGRldGVybWluZSB0aGUgbWF0Y2ggXHJcblx0XHRcdFx0Ly8gaXRzZWxmIChzaW5jZSB0aGVyZSBhcmUgbm8gbG9vay1iZWhpbmRzIGluIEpTIHJlZ2V4ZXMpXHJcblx0XHRcdFx0aWYoIHR3aXR0ZXJIYW5kbGVQcmVmaXhXaGl0ZXNwYWNlQ2hhciApIHtcclxuXHRcdFx0XHRcdHByZWZpeFN0ciA9IHR3aXR0ZXJIYW5kbGVQcmVmaXhXaGl0ZXNwYWNlQ2hhcjtcclxuXHRcdFx0XHRcdG1hdGNoU3RyID0gbWF0Y2hTdHIuc2xpY2UoIDEgKTsgIC8vIHJlbW92ZSB0aGUgcHJlZml4ZWQgd2hpdGVzcGFjZSBjaGFyIGZyb20gdGhlIG1hdGNoXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdG1hdGNoID0gbmV3IEF1dG9saW5rZXIubWF0Y2guVHdpdHRlciggeyBtYXRjaGVkVGV4dDogbWF0Y2hTdHIsIHR3aXR0ZXJIYW5kbGU6IHR3aXR0ZXJIYW5kbGUgfSApO1xyXG5cclxuXHRcdFx0fSBlbHNlIHsgIC8vIHVybCBtYXRjaFxyXG5cdFx0XHRcdC8vIElmIGl0J3MgYSBwcm90b2NvbC1yZWxhdGl2ZSAnLy8nIG1hdGNoLCByZW1vdmUgdGhlIGNoYXJhY3RlciBiZWZvcmUgdGhlICcvLycgKHdoaWNoIHRoZSBtYXRjaGVyUmVnZXggbmVlZGVkXHJcblx0XHRcdFx0Ly8gdG8gbWF0Y2ggZHVlIHRvIHRoZSBsYWNrIG9mIGEgbmVnYXRpdmUgbG9vay1iZWhpbmQgaW4gSmF2YVNjcmlwdCByZWd1bGFyIGV4cHJlc3Npb25zKVxyXG5cdFx0XHRcdGlmKCBwcm90b2NvbFJlbGF0aXZlTWF0Y2ggKSB7XHJcblx0XHRcdFx0XHR2YXIgY2hhckJlZm9yZU1hdGNoID0gcHJvdG9jb2xSZWxhdGl2ZU1hdGNoLm1hdGNoKCB0aGlzLmNoYXJCZWZvcmVQcm90b2NvbFJlbE1hdGNoUmVnZXggKVsgMSBdIHx8IFwiXCI7XHJcblxyXG5cdFx0XHRcdFx0aWYoIGNoYXJCZWZvcmVNYXRjaCApIHsgIC8vIGZpeCB1cCB0aGUgYG1hdGNoU3RyYCBpZiB0aGVyZSB3YXMgYSBwcmVjZWRpbmcgY2hhciBiZWZvcmUgYSBwcm90b2NvbC1yZWxhdGl2ZSBtYXRjaCwgd2hpY2ggd2FzIG5lZWRlZCB0byBkZXRlcm1pbmUgdGhlIG1hdGNoIGl0c2VsZiAoc2luY2UgdGhlcmUgYXJlIG5vIGxvb2stYmVoaW5kcyBpbiBKUyByZWdleGVzKVxyXG5cdFx0XHRcdFx0XHRwcmVmaXhTdHIgPSBjaGFyQmVmb3JlTWF0Y2g7XHJcblx0XHRcdFx0XHRcdG1hdGNoU3RyID0gbWF0Y2hTdHIuc2xpY2UoIDEgKTsgIC8vIHJlbW92ZSB0aGUgcHJlZml4ZWQgY2hhciBmcm9tIHRoZSBtYXRjaFxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0bWF0Y2ggPSBuZXcgQXV0b2xpbmtlci5tYXRjaC5VcmwoIHtcclxuXHRcdFx0XHRcdG1hdGNoZWRUZXh0IDogbWF0Y2hTdHIsXHJcblx0XHRcdFx0XHR1cmwgOiBtYXRjaFN0cixcclxuXHRcdFx0XHRcdHByb3RvY29sVXJsTWF0Y2ggOiAhIXByb3RvY29sVXJsTWF0Y2gsXHJcblx0XHRcdFx0XHRwcm90b2NvbFJlbGF0aXZlTWF0Y2ggOiAhIXByb3RvY29sUmVsYXRpdmVNYXRjaCxcclxuXHRcdFx0XHRcdHN0cmlwUHJlZml4IDogdGhpcy5zdHJpcFByZWZpeFxyXG5cdFx0XHRcdH0gKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRwcmVmaXhTdHIgOiBwcmVmaXhTdHIsXHJcblx0XHRcdFx0c3VmZml4U3RyIDogc3VmZml4U3RyLFxyXG5cdFx0XHRcdG1hdGNoU3RyICA6IG1hdGNoU3RyLFxyXG5cdFx0XHRcdG1hdGNoICAgICA6IG1hdGNoXHJcblx0XHRcdH07XHJcblx0XHR9LFxyXG5cclxuXHJcblx0XHQvKipcclxuXHRcdCAqIERldGVybWluZXMgaWYgYSBtYXRjaCBmb3VuZCBoYXMgYW4gdW5tYXRjaGVkIGNsb3NpbmcgcGFyZW50aGVzaXMuIElmIHNvLCB0aGlzIHBhcmVudGhlc2lzIHdpbGwgYmUgcmVtb3ZlZFxyXG5cdFx0ICogZnJvbSB0aGUgbWF0Y2ggaXRzZWxmLCBhbmQgYXBwZW5kZWQgYWZ0ZXIgdGhlIGdlbmVyYXRlZCBhbmNob3IgdGFnIGluIHtAbGluayAjcHJvY2Vzc1RleHROb2RlfS5cclxuXHRcdCAqIFxyXG5cdFx0ICogQSBtYXRjaCBtYXkgaGF2ZSBhbiBleHRyYSBjbG9zaW5nIHBhcmVudGhlc2lzIGF0IHRoZSBlbmQgb2YgdGhlIG1hdGNoIGJlY2F1c2UgdGhlIHJlZ3VsYXIgZXhwcmVzc2lvbiBtdXN0IGluY2x1ZGUgcGFyZW50aGVzaXNcclxuXHRcdCAqIGZvciBVUkxzIHN1Y2ggYXMgXCJ3aWtpcGVkaWEuY29tL3NvbWV0aGluZ18oZGlzYW1iaWd1YXRpb24pXCIsIHdoaWNoIHNob3VsZCBiZSBhdXRvLWxpbmtlZC4gXHJcblx0XHQgKiBcclxuXHRcdCAqIEhvd2V2ZXIsIGFuIGV4dHJhIHBhcmVudGhlc2lzICp3aWxsKiBiZSBpbmNsdWRlZCB3aGVuIHRoZSBVUkwgaXRzZWxmIGlzIHdyYXBwZWQgaW4gcGFyZW50aGVzaXMsIHN1Y2ggYXMgaW4gdGhlIGNhc2Ugb2ZcclxuXHRcdCAqIFwiKHdpa2lwZWRpYS5jb20vc29tZXRoaW5nXyhkaXNhbWJpZ3VhdGlvbikpXCIuIEluIHRoaXMgY2FzZSwgdGhlIGxhc3QgY2xvc2luZyBwYXJlbnRoZXNpcyBzaG91bGQgKm5vdCogYmUgcGFydCBvZiB0aGUgVVJMIFxyXG5cdFx0ICogaXRzZWxmLCBhbmQgdGhpcyBtZXRob2Qgd2lsbCByZXR1cm4gYHRydWVgLlxyXG5cdFx0ICogXHJcblx0XHQgKiBAcHJpdmF0ZVxyXG5cdFx0ICogQHBhcmFtIHtTdHJpbmd9IG1hdGNoU3RyIFRoZSBmdWxsIG1hdGNoIHN0cmluZyBmcm9tIHRoZSB7QGxpbmsgI21hdGNoZXJSZWdleH0uXHJcblx0XHQgKiBAcmV0dXJuIHtCb29sZWFufSBgdHJ1ZWAgaWYgdGhlcmUgaXMgYW4gdW5iYWxhbmNlZCBjbG9zaW5nIHBhcmVudGhlc2lzIGF0IHRoZSBlbmQgb2YgdGhlIGBtYXRjaFN0cmAsIGBmYWxzZWAgb3RoZXJ3aXNlLlxyXG5cdFx0ICovXHJcblx0XHRtYXRjaEhhc1VuYmFsYW5jZWRDbG9zaW5nUGFyZW4gOiBmdW5jdGlvbiggbWF0Y2hTdHIgKSB7XHJcblx0XHRcdHZhciBsYXN0Q2hhciA9IG1hdGNoU3RyLmNoYXJBdCggbWF0Y2hTdHIubGVuZ3RoIC0gMSApO1xyXG5cclxuXHRcdFx0aWYoIGxhc3RDaGFyID09PSAnKScgKSB7XHJcblx0XHRcdFx0dmFyIG9wZW5QYXJlbnNNYXRjaCA9IG1hdGNoU3RyLm1hdGNoKCAvXFwoL2cgKSxcclxuXHRcdFx0XHQgICAgY2xvc2VQYXJlbnNNYXRjaCA9IG1hdGNoU3RyLm1hdGNoKCAvXFwpL2cgKSxcclxuXHRcdFx0XHQgICAgbnVtT3BlblBhcmVucyA9ICggb3BlblBhcmVuc01hdGNoICYmIG9wZW5QYXJlbnNNYXRjaC5sZW5ndGggKSB8fCAwLFxyXG5cdFx0XHRcdCAgICBudW1DbG9zZVBhcmVucyA9ICggY2xvc2VQYXJlbnNNYXRjaCAmJiBjbG9zZVBhcmVuc01hdGNoLmxlbmd0aCApIHx8IDA7XHJcblxyXG5cdFx0XHRcdGlmKCBudW1PcGVuUGFyZW5zIDwgbnVtQ2xvc2VQYXJlbnMgKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdH0sXHJcblxyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogQ3JlYXRlcyB0aGUgcmV0dXJuIHN0cmluZyB2YWx1ZSBmb3IgYSBnaXZlbiBtYXRjaCBpbiB0aGUgaW5wdXQgc3RyaW5nLCBmb3IgdGhlIHtAbGluayAjcHJvY2Vzc1RleHROb2RlfSBtZXRob2QuXHJcblx0XHQgKiBcclxuXHRcdCAqIFRoaXMgbWV0aG9kIGhhbmRsZXMgdGhlIHtAbGluayAjcmVwbGFjZUZufSwgaWYgb25lIHdhcyBwcm92aWRlZC5cclxuXHRcdCAqIFxyXG5cdFx0ICogQHByaXZhdGVcclxuXHRcdCAqIEBwYXJhbSB7QXV0b2xpbmtlci5tYXRjaC5NYXRjaH0gbWF0Y2ggVGhlIE1hdGNoIG9iamVjdCB0aGF0IHJlcHJlc2VudHMgdGhlIG1hdGNoLlxyXG5cdFx0ICogQHBhcmFtIHtTdHJpbmd9IG1hdGNoU3RyIFRoZSBvcmlnaW5hbCBtYXRjaCBzdHJpbmcsIGFmdGVyIGhhdmluZyBiZWVuIHByZXByb2Nlc3NlZCB0byBmaXggbWF0Y2ggZWRnZSBjYXNlcyAoc2VlXHJcblx0XHQgKiAgIHRoZSBgcHJlZml4U3RyYCBhbmQgYHN1ZmZpeFN0cmAgdmFycyBpbiB7QGxpbmsgI3Byb2Nlc3NUZXh0Tm9kZX0uXHJcblx0XHQgKiBAcmV0dXJuIHtTdHJpbmd9IFRoZSBzdHJpbmcgdGhhdCB0aGUgYG1hdGNoYCBzaG91bGQgYmUgcmVwbGFjZWQgd2l0aC4gVGhpcyBpcyB1c3VhbGx5IHRoZSBhbmNob3IgdGFnIHN0cmluZywgYnV0XHJcblx0XHQgKiAgIG1heSBiZSB0aGUgYG1hdGNoU3RyYCBpdHNlbGYgaWYgdGhlIG1hdGNoIGlzIG5vdCB0byBiZSByZXBsYWNlZC5cclxuXHRcdCAqL1xyXG5cdFx0Y3JlYXRlTWF0Y2hSZXR1cm5WYWwgOiBmdW5jdGlvbiggbWF0Y2gsIG1hdGNoU3RyICkge1xyXG5cdFx0XHQvLyBIYW5kbGUgYSBjdXN0b20gYHJlcGxhY2VGbmAgYmVpbmcgcHJvdmlkZWRcclxuXHRcdFx0dmFyIHJlcGxhY2VGblJlc3VsdDtcclxuXHRcdFx0aWYoIHRoaXMucmVwbGFjZUZuICkge1xyXG5cdFx0XHRcdHJlcGxhY2VGblJlc3VsdCA9IHRoaXMucmVwbGFjZUZuLmNhbGwoIHRoaXMsIHRoaXMsIG1hdGNoICk7ICAvLyBBdXRvbGlua2VyIGluc3RhbmNlIGlzIHRoZSBjb250ZXh0LCBhbmQgdGhlIGZpcnN0IGFyZ1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiggdHlwZW9mIHJlcGxhY2VGblJlc3VsdCA9PT0gJ3N0cmluZycgKSB7XHJcblx0XHRcdFx0cmV0dXJuIHJlcGxhY2VGblJlc3VsdDsgIC8vIGByZXBsYWNlRm5gIHJldHVybmVkIGEgc3RyaW5nLCB1c2UgdGhhdFxyXG5cclxuXHRcdFx0fSBlbHNlIGlmKCByZXBsYWNlRm5SZXN1bHQgPT09IGZhbHNlICkge1xyXG5cdFx0XHRcdHJldHVybiBtYXRjaFN0cjsgIC8vIG5vIHJlcGxhY2VtZW50IGZvciB0aGUgbWF0Y2hcclxuXHJcblx0XHRcdH0gZWxzZSBpZiggcmVwbGFjZUZuUmVzdWx0IGluc3RhbmNlb2YgQXV0b2xpbmtlci5IdG1sVGFnICkge1xyXG5cdFx0XHRcdHJldHVybiByZXBsYWNlRm5SZXN1bHQudG9TdHJpbmcoKTtcclxuXHJcblx0XHRcdH0gZWxzZSB7ICAvLyByZXBsYWNlRm5SZXN1bHQgPT09IHRydWUsIG9yIG5vL3Vua25vd24gcmV0dXJuIHZhbHVlIGZyb20gZnVuY3Rpb25cclxuXHRcdFx0XHQvLyBQZXJmb3JtIEF1dG9saW5rZXIncyBkZWZhdWx0IGFuY2hvciB0YWcgZ2VuZXJhdGlvblxyXG5cdFx0XHRcdHZhciB0YWdCdWlsZGVyID0gdGhpcy5nZXRUYWdCdWlsZGVyKCksXHJcblx0XHRcdFx0ICAgIGFuY2hvclRhZyA9IHRhZ0J1aWxkZXIuYnVpbGQoIG1hdGNoICk7ICAvLyByZXR1cm5zIGFuIEF1dG9saW5rZXIuSHRtbFRhZyBpbnN0YW5jZVxyXG5cclxuXHRcdFx0XHRyZXR1cm4gYW5jaG9yVGFnLnRvU3RyaW5nKCk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0fTtcclxuXHJcblxyXG5cdC8qKlxyXG5cdCAqIEF1dG9tYXRpY2FsbHkgbGlua3MgVVJMcywgZW1haWwgYWRkcmVzc2VzLCBhbmQgVHdpdHRlciBoYW5kbGVzIGZvdW5kIGluIHRoZSBnaXZlbiBjaHVuayBvZiBIVE1MLiBcclxuXHQgKiBEb2VzIG5vdCBsaW5rIFVSTHMgZm91bmQgd2l0aGluIEhUTUwgdGFncy5cclxuXHQgKiBcclxuXHQgKiBGb3IgaW5zdGFuY2UsIGlmIGdpdmVuIHRoZSB0ZXh0OiBgWW91IHNob3VsZCBnbyB0byBodHRwOi8vd3d3LnlhaG9vLmNvbWAsIHRoZW4gdGhlIHJlc3VsdFxyXG5cdCAqIHdpbGwgYmUgYFlvdSBzaG91bGQgZ28gdG8gJmx0O2EgaHJlZj1cImh0dHA6Ly93d3cueWFob28uY29tXCImZ3Q7aHR0cDovL3d3dy55YWhvby5jb20mbHQ7L2EmZ3Q7YFxyXG5cdCAqIFxyXG5cdCAqIEV4YW1wbGU6XHJcblx0ICogXHJcblx0ICogICAgIHZhciBsaW5rZWRUZXh0ID0gQXV0b2xpbmtlci5saW5rKCBcIkdvIHRvIGdvb2dsZS5jb21cIiwgeyBuZXdXaW5kb3c6IGZhbHNlIH0gKTtcclxuXHQgKiAgICAgLy8gUHJvZHVjZXM6IFwiR28gdG8gPGEgaHJlZj1cImh0dHA6Ly9nb29nbGUuY29tXCI+Z29vZ2xlLmNvbTwvYT5cIlxyXG5cdCAqIFxyXG5cdCAqIEBzdGF0aWNcclxuXHQgKiBAcGFyYW0ge1N0cmluZ30gdGV4dE9ySHRtbCBUaGUgSFRNTCBvciB0ZXh0IHRvIGZpbmQgVVJMcywgZW1haWwgYWRkcmVzc2VzLCBhbmQgVHdpdHRlciBoYW5kbGVzIHdpdGhpbiAoZGVwZW5kaW5nIG9uIGlmXHJcblx0ICogICB0aGUge0BsaW5rICN1cmxzfSwge0BsaW5rICNlbWFpbH0sIGFuZCB7QGxpbmsgI3R3aXR0ZXJ9IG9wdGlvbnMgYXJlIGVuYWJsZWQpLlxyXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gQW55IG9mIHRoZSBjb25maWd1cmF0aW9uIG9wdGlvbnMgZm9yIHRoZSBBdXRvbGlua2VyIGNsYXNzLCBzcGVjaWZpZWQgaW4gYW4gT2JqZWN0IChtYXApLlxyXG5cdCAqICAgU2VlIHRoZSBjbGFzcyBkZXNjcmlwdGlvbiBmb3IgYW4gZXhhbXBsZSBjYWxsLlxyXG5cdCAqIEByZXR1cm4ge1N0cmluZ30gVGhlIEhUTUwgdGV4dCwgd2l0aCBVUkxzIGF1dG9tYXRpY2FsbHkgbGlua2VkXHJcblx0ICovXHJcblx0QXV0b2xpbmtlci5saW5rID0gZnVuY3Rpb24oIHRleHRPckh0bWwsIG9wdGlvbnMgKSB7XHJcblx0XHR2YXIgYXV0b2xpbmtlciA9IG5ldyBBdXRvbGlua2VyKCBvcHRpb25zICk7XHJcblx0XHRyZXR1cm4gYXV0b2xpbmtlci5saW5rKCB0ZXh0T3JIdG1sICk7XHJcblx0fTtcclxuXHJcblxyXG5cdC8vIE5hbWVzcGFjZSBmb3IgYG1hdGNoYCBjbGFzc2VzXHJcblx0QXV0b2xpbmtlci5tYXRjaCA9IHt9O1xyXG5cdC8qZ2xvYmFsIEF1dG9saW5rZXIgKi9cclxuXHQvKmpzaGludCBlcW51bGw6dHJ1ZSwgYm9zczp0cnVlICovXHJcblx0LyoqXHJcblx0ICogQGNsYXNzIEF1dG9saW5rZXIuVXRpbFxyXG5cdCAqIEBzaW5nbGV0b25cclxuXHQgKiBcclxuXHQgKiBBIGZldyB1dGlsaXR5IG1ldGhvZHMgZm9yIEF1dG9saW5rZXIuXHJcblx0ICovXHJcblx0QXV0b2xpbmtlci5VdGlsID0ge1xyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogQHByb3BlcnR5IHtGdW5jdGlvbn0gYWJzdHJhY3RNZXRob2RcclxuXHRcdCAqIFxyXG5cdFx0ICogQSBmdW5jdGlvbiBvYmplY3Qgd2hpY2ggcmVwcmVzZW50cyBhbiBhYnN0cmFjdCBtZXRob2QuXHJcblx0XHQgKi9cclxuXHRcdGFic3RyYWN0TWV0aG9kIDogZnVuY3Rpb24oKSB7IHRocm93IFwiYWJzdHJhY3RcIjsgfSxcclxuXHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBBc3NpZ25zIChzaGFsbG93IGNvcGllcykgdGhlIHByb3BlcnRpZXMgb2YgYHNyY2Agb250byBgZGVzdGAuXHJcblx0XHQgKiBcclxuXHRcdCAqIEBwYXJhbSB7T2JqZWN0fSBkZXN0IFRoZSBkZXN0aW5hdGlvbiBvYmplY3QuXHJcblx0XHQgKiBAcGFyYW0ge09iamVjdH0gc3JjIFRoZSBzb3VyY2Ugb2JqZWN0LlxyXG5cdFx0ICogQHJldHVybiB7T2JqZWN0fSBUaGUgZGVzdGluYXRpb24gb2JqZWN0IChgZGVzdGApXHJcblx0XHQgKi9cclxuXHRcdGFzc2lnbiA6IGZ1bmN0aW9uKCBkZXN0LCBzcmMgKSB7XHJcblx0XHRcdGZvciggdmFyIHByb3AgaW4gc3JjICkge1xyXG5cdFx0XHRcdGlmKCBzcmMuaGFzT3duUHJvcGVydHkoIHByb3AgKSApIHtcclxuXHRcdFx0XHRcdGRlc3RbIHByb3AgXSA9IHNyY1sgcHJvcCBdO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0cmV0dXJuIGRlc3Q7XHJcblx0XHR9LFxyXG5cclxuXHJcblx0XHQvKipcclxuXHRcdCAqIEV4dGVuZHMgYHN1cGVyY2xhc3NgIHRvIGNyZWF0ZSBhIG5ldyBzdWJjbGFzcywgYWRkaW5nIHRoZSBgcHJvdG9Qcm9wc2AgdG8gdGhlIG5ldyBzdWJjbGFzcydzIHByb3RvdHlwZS5cclxuXHRcdCAqIFxyXG5cdFx0ICogQHBhcmFtIHtGdW5jdGlvbn0gc3VwZXJjbGFzcyBUaGUgY29uc3RydWN0b3IgZnVuY3Rpb24gZm9yIHRoZSBzdXBlcmNsYXNzLlxyXG5cdFx0ICogQHBhcmFtIHtPYmplY3R9IHByb3RvUHJvcHMgVGhlIG1ldGhvZHMvcHJvcGVydGllcyB0byBhZGQgdG8gdGhlIHN1YmNsYXNzJ3MgcHJvdG90eXBlLiBUaGlzIG1heSBjb250YWluIHRoZVxyXG5cdFx0ICogICBzcGVjaWFsIHByb3BlcnR5IGBjb25zdHJ1Y3RvcmAsIHdoaWNoIHdpbGwgYmUgdXNlZCBhcyB0aGUgbmV3IHN1YmNsYXNzJ3MgY29uc3RydWN0b3IgZnVuY3Rpb24uXHJcblx0XHQgKiBAcmV0dXJuIHtGdW5jdGlvbn0gVGhlIG5ldyBzdWJjbGFzcyBmdW5jdGlvbi5cclxuXHRcdCAqL1xyXG5cdFx0ZXh0ZW5kIDogZnVuY3Rpb24oIHN1cGVyY2xhc3MsIHByb3RvUHJvcHMgKSB7XHJcblx0XHRcdHZhciBzdXBlcmNsYXNzUHJvdG8gPSBzdXBlcmNsYXNzLnByb3RvdHlwZTtcclxuXHJcblx0XHRcdHZhciBGID0gZnVuY3Rpb24oKSB7fTtcclxuXHRcdFx0Ri5wcm90b3R5cGUgPSBzdXBlcmNsYXNzUHJvdG87XHJcblxyXG5cdFx0XHR2YXIgc3ViY2xhc3M7XHJcblx0XHRcdGlmKCBwcm90b1Byb3BzLmhhc093blByb3BlcnR5KCAnY29uc3RydWN0b3InICkgKSB7XHJcblx0XHRcdFx0c3ViY2xhc3MgPSBwcm90b1Byb3BzLmNvbnN0cnVjdG9yO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHN1YmNsYXNzID0gZnVuY3Rpb24oKSB7IHN1cGVyY2xhc3NQcm90by5jb25zdHJ1Y3Rvci5hcHBseSggdGhpcywgYXJndW1lbnRzICk7IH07XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHZhciBzdWJjbGFzc1Byb3RvID0gc3ViY2xhc3MucHJvdG90eXBlID0gbmV3IEYoKTsgIC8vIHNldCB1cCBwcm90b3R5cGUgY2hhaW5cclxuXHRcdFx0c3ViY2xhc3NQcm90by5jb25zdHJ1Y3RvciA9IHN1YmNsYXNzOyAgLy8gZml4IGNvbnN0cnVjdG9yIHByb3BlcnR5XHJcblx0XHRcdHN1YmNsYXNzUHJvdG8uc3VwZXJjbGFzcyA9IHN1cGVyY2xhc3NQcm90bztcclxuXHJcblx0XHRcdGRlbGV0ZSBwcm90b1Byb3BzLmNvbnN0cnVjdG9yOyAgLy8gZG9uJ3QgcmUtYXNzaWduIGNvbnN0cnVjdG9yIHByb3BlcnR5IHRvIHRoZSBwcm90b3R5cGUsIHNpbmNlIGEgbmV3IGZ1bmN0aW9uIG1heSBoYXZlIGJlZW4gY3JlYXRlZCAoYHN1YmNsYXNzYCksIHdoaWNoIGlzIG5vdyBhbHJlYWR5IHRoZXJlXHJcblx0XHRcdEF1dG9saW5rZXIuVXRpbC5hc3NpZ24oIHN1YmNsYXNzUHJvdG8sIHByb3RvUHJvcHMgKTtcclxuXHJcblx0XHRcdHJldHVybiBzdWJjbGFzcztcclxuXHRcdH0sXHJcblxyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogVHJ1bmNhdGVzIHRoZSBgc3RyYCBhdCBgbGVuIC0gZWxsaXBzaXNDaGFycy5sZW5ndGhgLCBhbmQgYWRkcyB0aGUgYGVsbGlwc2lzQ2hhcnNgIHRvIHRoZVxyXG5cdFx0ICogZW5kIG9mIHRoZSBzdHJpbmcgKGJ5IGRlZmF1bHQsIHR3byBwZXJpb2RzOiAnLi4nKS4gSWYgdGhlIGBzdHJgIGxlbmd0aCBkb2VzIG5vdCBleGNlZWQgXHJcblx0XHQgKiBgbGVuYCwgdGhlIHN0cmluZyB3aWxsIGJlIHJldHVybmVkIHVuY2hhbmdlZC5cclxuXHRcdCAqIFxyXG5cdFx0ICogQHBhcmFtIHtTdHJpbmd9IHN0ciBUaGUgc3RyaW5nIHRvIHRydW5jYXRlIGFuZCBhZGQgYW4gZWxsaXBzaXMgdG8uXHJcblx0XHQgKiBAcGFyYW0ge051bWJlcn0gdHJ1bmNhdGVMZW4gVGhlIGxlbmd0aCB0byB0cnVuY2F0ZSB0aGUgc3RyaW5nIGF0LlxyXG5cdFx0ICogQHBhcmFtIHtTdHJpbmd9IFtlbGxpcHNpc0NoYXJzPS4uXSBUaGUgZWxsaXBzaXMgY2hhcmFjdGVyKHMpIHRvIGFkZCB0byB0aGUgZW5kIG9mIGBzdHJgXHJcblx0XHQgKiAgIHdoZW4gdHJ1bmNhdGVkLiBEZWZhdWx0cyB0byAnLi4nXHJcblx0XHQgKi9cclxuXHRcdGVsbGlwc2lzIDogZnVuY3Rpb24oIHN0ciwgdHJ1bmNhdGVMZW4sIGVsbGlwc2lzQ2hhcnMgKSB7XHJcblx0XHRcdGlmKCBzdHIubGVuZ3RoID4gdHJ1bmNhdGVMZW4gKSB7XHJcblx0XHRcdFx0ZWxsaXBzaXNDaGFycyA9ICggZWxsaXBzaXNDaGFycyA9PSBudWxsICkgPyAnLi4nIDogZWxsaXBzaXNDaGFycztcclxuXHRcdFx0XHRzdHIgPSBzdHIuc3Vic3RyaW5nKCAwLCB0cnVuY2F0ZUxlbiAtIGVsbGlwc2lzQ2hhcnMubGVuZ3RoICkgKyBlbGxpcHNpc0NoYXJzO1xyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybiBzdHI7XHJcblx0XHR9LFxyXG5cclxuXHJcblx0XHQvKipcclxuXHRcdCAqIFN1cHBvcnRzIGBBcnJheS5wcm90b3R5cGUuaW5kZXhPZigpYCBmdW5jdGlvbmFsaXR5IGZvciBvbGQgSUUgKElFOCBhbmQgYmVsb3cpLlxyXG5cdFx0ICogXHJcblx0XHQgKiBAcGFyYW0ge0FycmF5fSBhcnIgVGhlIGFycmF5IHRvIGZpbmQgYW4gZWxlbWVudCBvZi5cclxuXHRcdCAqIEBwYXJhbSB7Kn0gZWxlbWVudCBUaGUgZWxlbWVudCB0byBmaW5kIGluIHRoZSBhcnJheSwgYW5kIHJldHVybiB0aGUgaW5kZXggb2YuXHJcblx0XHQgKiBAcmV0dXJuIHtOdW1iZXJ9IFRoZSBpbmRleCBvZiB0aGUgYGVsZW1lbnRgLCBvciAtMSBpZiBpdCB3YXMgbm90IGZvdW5kLlxyXG5cdFx0ICovXHJcblx0XHRpbmRleE9mIDogZnVuY3Rpb24oIGFyciwgZWxlbWVudCApIHtcclxuXHRcdFx0aWYoIEFycmF5LnByb3RvdHlwZS5pbmRleE9mICkge1xyXG5cdFx0XHRcdHJldHVybiBhcnIuaW5kZXhPZiggZWxlbWVudCApO1xyXG5cclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRmb3IoIHZhciBpID0gMCwgbGVuID0gYXJyLmxlbmd0aDsgaSA8IGxlbjsgaSsrICkge1xyXG5cdFx0XHRcdFx0aWYoIGFyclsgaSBdID09PSBlbGVtZW50ICkgcmV0dXJuIGk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHJldHVybiAtMTtcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHJcblxyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogUGVyZm9ybXMgdGhlIGZ1bmN0aW9uYWxpdHkgb2Ygd2hhdCBtb2Rlcm4gYnJvd3NlcnMgZG8gd2hlbiBgU3RyaW5nLnByb3RvdHlwZS5zcGxpdCgpYCBpcyBjYWxsZWRcclxuXHRcdCAqIHdpdGggYSByZWd1bGFyIGV4cHJlc3Npb24gdGhhdCBjb250YWlucyBjYXB0dXJpbmcgcGFyZW50aGVzaXMuXHJcblx0XHQgKiBcclxuXHRcdCAqIEZvciBleGFtcGxlOlxyXG5cdFx0ICogXHJcblx0XHQgKiAgICAgLy8gTW9kZXJuIGJyb3dzZXJzOiBcclxuXHRcdCAqICAgICBcImEsYixjXCIuc3BsaXQoIC8oLCkvICk7ICAvLyAtLT4gWyAnYScsICcsJywgJ2InLCAnLCcsICdjJyBdXHJcblx0XHQgKiAgICAgXHJcblx0XHQgKiAgICAgLy8gT2xkIElFIChpbmNsdWRpbmcgSUU4KTpcclxuXHRcdCAqICAgICBcImEsYixjXCIuc3BsaXQoIC8oLCkvICk7ICAvLyAtLT4gWyAnYScsICdiJywgJ2MnIF1cclxuXHRcdCAqICAgICBcclxuXHRcdCAqIFRoaXMgbWV0aG9kIGVtdWxhdGVzIHRoZSBmdW5jdGlvbmFsaXR5IG9mIG1vZGVybiBicm93c2VycyBmb3IgdGhlIG9sZCBJRSBjYXNlLlxyXG5cdFx0ICogXHJcblx0XHQgKiBAcGFyYW0ge1N0cmluZ30gc3RyIFRoZSBzdHJpbmcgdG8gc3BsaXQuXHJcblx0XHQgKiBAcGFyYW0ge1JlZ0V4cH0gc3BsaXRSZWdleCBUaGUgcmVndWxhciBleHByZXNzaW9uIHRvIHNwbGl0IHRoZSBpbnB1dCBgc3RyYCBvbi4gVGhlIHNwbGl0dGluZ1xyXG5cdFx0ICogICBjaGFyYWN0ZXIocykgd2lsbCBiZSBzcGxpY2VkIGludG8gdGhlIGFycmF5LCBhcyBpbiB0aGUgXCJtb2Rlcm4gYnJvd3NlcnNcIiBleGFtcGxlIGluIHRoZSBcclxuXHRcdCAqICAgZGVzY3JpcHRpb24gb2YgdGhpcyBtZXRob2QuIFxyXG5cdFx0ICogICBOb3RlICMxOiB0aGUgc3VwcGxpZWQgcmVndWxhciBleHByZXNzaW9uICoqbXVzdCoqIGhhdmUgdGhlICdnJyBmbGFnIHNwZWNpZmllZC5cclxuXHRcdCAqICAgTm90ZSAjMjogZm9yIHNpbXBsaWNpdHkncyBzYWtlLCB0aGUgcmVndWxhciBleHByZXNzaW9uIGRvZXMgbm90IG5lZWQgXHJcblx0XHQgKiAgIHRvIGNvbnRhaW4gY2FwdHVyaW5nIHBhcmVudGhlc2lzIC0gaXQgd2lsbCBiZSBhc3N1bWVkIHRoYXQgYW55IG1hdGNoIGhhcyB0aGVtLlxyXG5cdFx0ICogQHJldHVybiB7U3RyaW5nW119IFRoZSBzcGxpdCBhcnJheSBvZiBzdHJpbmdzLCB3aXRoIHRoZSBzcGxpdHRpbmcgY2hhcmFjdGVyKHMpIGluY2x1ZGVkLlxyXG5cdFx0ICovXHJcblx0XHRzcGxpdEFuZENhcHR1cmUgOiBmdW5jdGlvbiggc3RyLCBzcGxpdFJlZ2V4ICkge1xyXG5cdFx0XHRpZiggIXNwbGl0UmVnZXguZ2xvYmFsICkgdGhyb3cgbmV3IEVycm9yKCBcImBzcGxpdFJlZ2V4YCBtdXN0IGhhdmUgdGhlICdnJyBmbGFnIHNldFwiICk7XHJcblxyXG5cdFx0XHR2YXIgcmVzdWx0ID0gW10sXHJcblx0XHRcdCAgICBsYXN0SWR4ID0gMCxcclxuXHRcdFx0ICAgIG1hdGNoO1xyXG5cclxuXHRcdFx0d2hpbGUoIG1hdGNoID0gc3BsaXRSZWdleC5leGVjKCBzdHIgKSApIHtcclxuXHRcdFx0XHRyZXN1bHQucHVzaCggc3RyLnN1YnN0cmluZyggbGFzdElkeCwgbWF0Y2guaW5kZXggKSApO1xyXG5cdFx0XHRcdHJlc3VsdC5wdXNoKCBtYXRjaFsgMCBdICk7ICAvLyBwdXNoIHRoZSBzcGxpdHRpbmcgY2hhcihzKVxyXG5cclxuXHRcdFx0XHRsYXN0SWR4ID0gbWF0Y2guaW5kZXggKyBtYXRjaFsgMCBdLmxlbmd0aDtcclxuXHRcdFx0fVxyXG5cdFx0XHRyZXN1bHQucHVzaCggc3RyLnN1YnN0cmluZyggbGFzdElkeCApICk7XHJcblxyXG5cdFx0XHRyZXR1cm4gcmVzdWx0O1xyXG5cdFx0fVxyXG5cclxuXHR9O1xyXG5cdC8qZ2xvYmFsIEF1dG9saW5rZXIgKi9cclxuXHQvKipcclxuXHQgKiBAcHJpdmF0ZVxyXG5cdCAqIEBjbGFzcyBBdXRvbGlua2VyLkh0bWxQYXJzZXJcclxuXHQgKiBAZXh0ZW5kcyBPYmplY3RcclxuXHQgKiBcclxuXHQgKiBBbiBIVE1MIHBhcnNlciBpbXBsZW1lbnRhdGlvbiB3aGljaCBzaW1wbHkgd2Fsa3MgYW4gSFRNTCBzdHJpbmcgYW5kIGNhbGxzIHRoZSBwcm92aWRlZCB2aXNpdG9yIGZ1bmN0aW9ucyB0byBwcm9jZXNzIFxyXG5cdCAqIEhUTUwgYW5kIHRleHQgbm9kZXMuXHJcblx0ICogXHJcblx0ICogQXV0b2xpbmtlciB1c2VzIHRoaXMgdG8gb25seSBsaW5rIFVSTHMvZW1haWxzL1R3aXR0ZXIgaGFuZGxlcyB3aXRoaW4gdGV4dCBub2RlcywgYmFzaWNhbGx5IGlnbm9yaW5nIEhUTUwgdGFncy5cclxuXHQgKi9cclxuXHRBdXRvbGlua2VyLkh0bWxQYXJzZXIgPSBBdXRvbGlua2VyLlV0aWwuZXh0ZW5kKCBPYmplY3QsIHtcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIEBwcml2YXRlXHJcblx0XHQgKiBAcHJvcGVydHkge1JlZ0V4cH0gaHRtbFJlZ2V4XHJcblx0XHQgKiBcclxuXHRcdCAqIFRoZSByZWd1bGFyIGV4cHJlc3Npb24gdXNlZCB0byBwdWxsIG91dCBIVE1MIHRhZ3MgZnJvbSBhIHN0cmluZy4gSGFuZGxlcyBuYW1lc3BhY2VkIEhUTUwgdGFncyBhbmRcclxuXHRcdCAqIGF0dHJpYnV0ZSBuYW1lcywgYXMgc3BlY2lmaWVkIGJ5IGh0dHA6Ly93d3cudzMub3JnL1RSL2h0bWwtbWFya3VwL3N5bnRheC5odG1sLlxyXG5cdFx0ICogXHJcblx0XHQgKiBDYXB0dXJpbmcgZ3JvdXBzOlxyXG5cdFx0ICogXHJcblx0XHQgKiAxLiBUaGUgXCIhRE9DVFlQRVwiIHRhZyBuYW1lLCBpZiBhIHRhZyBpcyBhICZsdDshRE9DVFlQRSZndDsgdGFnLlxyXG5cdFx0ICogMi4gSWYgaXQgaXMgYW4gZW5kIHRhZywgdGhpcyBncm91cCB3aWxsIGhhdmUgdGhlICcvJy5cclxuXHRcdCAqIDMuIFRoZSB0YWcgbmFtZSBmb3IgYWxsIHRhZ3MgKG90aGVyIHRoYW4gdGhlICZsdDshRE9DVFlQRSZndDsgdGFnKVxyXG5cdFx0ICovXHJcblx0XHRodG1sUmVnZXggOiAoZnVuY3Rpb24oKSB7XHJcblx0XHRcdHZhciB0YWdOYW1lUmVnZXggPSAvWzAtOWEtekEtWl1bMC05YS16QS1aOl0qLyxcclxuXHRcdFx0ICAgIGF0dHJOYW1lUmVnZXggPSAvW15cXHNcXDBcIic+XFwvPVxceDAxLVxceDFGXFx4N0ZdKy8sICAgLy8gdGhlIHVuaWNvZGUgcmFuZ2UgYWNjb3VudHMgZm9yIGV4Y2x1ZGluZyBjb250cm9sIGNoYXJzLCBhbmQgdGhlIGRlbGV0ZSBjaGFyXHJcblx0XHRcdCAgICBhdHRyVmFsdWVSZWdleCA9IC8oPzpcIlteXCJdKj9cInwnW14nXSo/J3xbXidcIj08PmBcXHNdKykvLCAvLyBkb3VibGUgcXVvdGVkLCBzaW5nbGUgcXVvdGVkLCBvciB1bnF1b3RlZCBhdHRyaWJ1dGUgdmFsdWVzXHJcblx0XHRcdCAgICBuYW1lRXF1YWxzVmFsdWVSZWdleCA9IGF0dHJOYW1lUmVnZXguc291cmNlICsgJyg/OlxcXFxzKj1cXFxccyonICsgYXR0clZhbHVlUmVnZXguc291cmNlICsgJyk/JzsgIC8vIG9wdGlvbmFsICc9W3ZhbHVlXSdcclxuXHJcblx0XHRcdHJldHVybiBuZXcgUmVnRXhwKCBbXHJcblx0XHRcdFx0Ly8gZm9yIDwhRE9DVFlQRT4gdGFnLiBFeDogPCFET0NUWVBFIGh0bWwgUFVCTElDIFwiLS8vVzNDLy9EVEQgWEhUTUwgMS4wIFN0cmljdC8vRU5cIiBcImh0dHA6Ly93d3cudzMub3JnL1RSL3hodG1sMS9EVEQveGh0bWwxLXN0cmljdC5kdGRcIj4pIFxyXG5cdFx0XHRcdCcoPzonLFxyXG5cdFx0XHRcdFx0JzwoIURPQ1RZUEUpJywgIC8vICoqKiBDYXB0dXJpbmcgR3JvdXAgMSAtIElmIGl0J3MgYSBkb2N0eXBlIHRhZ1xyXG5cclxuXHRcdFx0XHRcdFx0Ly8gWmVybyBvciBtb3JlIGF0dHJpYnV0ZXMgZm9sbG93aW5nIHRoZSB0YWcgbmFtZVxyXG5cdFx0XHRcdFx0XHQnKD86JyxcclxuXHRcdFx0XHRcdFx0XHQnXFxcXHMrJywgIC8vIG9uZSBvciBtb3JlIHdoaXRlc3BhY2UgY2hhcnMgYmVmb3JlIGFuIGF0dHJpYnV0ZVxyXG5cclxuXHRcdFx0XHRcdFx0XHQvLyBFaXRoZXI6XHJcblx0XHRcdFx0XHRcdFx0Ly8gQS4gYXR0cj1cInZhbHVlXCIsIG9yIFxyXG5cdFx0XHRcdFx0XHRcdC8vIEIuIFwidmFsdWVcIiBhbG9uZSAoVG8gY292ZXIgZXhhbXBsZSBkb2N0eXBlIHRhZzogPCFET0NUWVBFIGh0bWwgUFVCTElDIFwiLS8vVzNDLy9EVEQgWEhUTUwgMS4wIFN0cmljdC8vRU5cIiBcImh0dHA6Ly93d3cudzMub3JnL1RSL3hodG1sMS9EVEQveGh0bWwxLXN0cmljdC5kdGRcIj4pIFxyXG5cdFx0XHRcdFx0XHRcdCcoPzonLCBuYW1lRXF1YWxzVmFsdWVSZWdleCwgJ3wnLCBhdHRyVmFsdWVSZWdleC5zb3VyY2UgKyAnKScsXHJcblx0XHRcdFx0XHRcdCcpKicsXHJcblx0XHRcdFx0XHQnPicsXHJcblx0XHRcdFx0JyknLFxyXG5cclxuXHRcdFx0XHQnfCcsXHJcblxyXG5cdFx0XHRcdC8vIEFsbCBvdGhlciBIVE1MIHRhZ3MgKGkuZS4gdGFncyB0aGF0IGFyZSBub3QgPCFET0NUWVBFPilcclxuXHRcdFx0XHQnKD86JyxcclxuXHRcdFx0XHRcdCc8KC8pPycsICAvLyBCZWdpbm5pbmcgb2YgYSB0YWcuIEVpdGhlciAnPCcgZm9yIGEgc3RhcnQgdGFnLCBvciAnPC8nIGZvciBhbiBlbmQgdGFnLiBcclxuXHRcdFx0XHRcdCAgICAgICAgICAvLyAqKiogQ2FwdHVyaW5nIEdyb3VwIDI6IFRoZSBzbGFzaCBvciBhbiBlbXB0eSBzdHJpbmcuIFNsYXNoICgnLycpIGZvciBlbmQgdGFnLCBlbXB0eSBzdHJpbmcgZm9yIHN0YXJ0IG9yIHNlbGYtY2xvc2luZyB0YWcuXHJcblxyXG5cdFx0XHRcdFx0XHQvLyAqKiogQ2FwdHVyaW5nIEdyb3VwIDMgLSBUaGUgdGFnIG5hbWVcclxuXHRcdFx0XHRcdFx0JygnICsgdGFnTmFtZVJlZ2V4LnNvdXJjZSArICcpJyxcclxuXHJcblx0XHRcdFx0XHRcdC8vIFplcm8gb3IgbW9yZSBhdHRyaWJ1dGVzIGZvbGxvd2luZyB0aGUgdGFnIG5hbWVcclxuXHRcdFx0XHRcdFx0Jyg/OicsXHJcblx0XHRcdFx0XHRcdFx0J1xcXFxzKycsICAgICAgICAgICAgICAgIC8vIG9uZSBvciBtb3JlIHdoaXRlc3BhY2UgY2hhcnMgYmVmb3JlIGFuIGF0dHJpYnV0ZVxyXG5cdFx0XHRcdFx0XHRcdG5hbWVFcXVhbHNWYWx1ZVJlZ2V4LCAgLy8gYXR0cj1cInZhbHVlXCIgKHdpdGggb3B0aW9uYWwgPVwidmFsdWVcIiBwYXJ0KVxyXG5cdFx0XHRcdFx0XHQnKSonLFxyXG5cclxuXHRcdFx0XHRcdFx0J1xcXFxzKi8/JywgIC8vIGFueSB0cmFpbGluZyBzcGFjZXMgYW5kIG9wdGlvbmFsICcvJyBiZWZvcmUgdGhlIGNsb3NpbmcgJz4nXHJcblx0XHRcdFx0XHQnPicsXHJcblx0XHRcdFx0JyknXHJcblx0XHRcdF0uam9pbiggXCJcIiApLCAnZ2knICk7XHJcblx0XHR9ICkoKSxcclxuXHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBXYWxrcyBhbiBIVE1MIHN0cmluZywgY2FsbGluZyB0aGUgYG9wdGlvbnMucHJvY2Vzc0h0bWxOb2RlYCBmdW5jdGlvbiBmb3IgZWFjaCBIVE1MIHRhZyB0aGF0IGlzIGVuY291bnRlcmVkLCBhbmQgY2FsbGluZ1xyXG5cdFx0ICogdGhlIGBvcHRpb25zLnByb2Nlc3NUZXh0Tm9kZWAgZnVuY3Rpb24gd2hlbiBlYWNoIHRleHQgYXJvdW5kIEhUTUwgdGFncyBpcyBlbmNvdW50ZXJlZC5cclxuXHRcdCAqIFxyXG5cdFx0ICogQHBhcmFtIHtTdHJpbmd9IGh0bWwgVGhlIEhUTUwgdG8gcGFyc2UuXHJcblx0XHQgKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIEFuIE9iamVjdCAobWFwKSB3aGljaCBtYXkgY29udGFpbiB0aGUgZm9sbG93aW5nIHByb3BlcnRpZXM6XHJcblx0XHQgKiBcclxuXHRcdCAqIEBwYXJhbSB7RnVuY3Rpb259IFtvcHRpb25zLnByb2Nlc3NIdG1sTm9kZV0gQSB2aXNpdG9yIGZ1bmN0aW9uIHdoaWNoIGFsbG93cyBwcm9jZXNzaW5nIG9mIGFuIGVuY291bnRlcmVkIEhUTUwgbm9kZS5cclxuXHRcdCAqICAgVGhpcyBmdW5jdGlvbiBpcyBjYWxsZWQgd2l0aCB0aGUgZm9sbG93aW5nIGFyZ3VtZW50czpcclxuXHRcdCAqIEBwYXJhbSB7U3RyaW5nfSBbb3B0aW9ucy5wcm9jZXNzSHRtbE5vZGUudGFnVGV4dF0gVGhlIEhUTUwgdGFnIHRleHQgdGhhdCB3YXMgZm91bmQuXHJcblx0XHQgKiBAcGFyYW0ge1N0cmluZ30gW29wdGlvbnMucHJvY2Vzc0h0bWxOb2RlLnRhZ05hbWVdIFRoZSB0YWcgbmFtZSBmb3IgdGhlIEhUTUwgdGFnIHRoYXQgd2FzIGZvdW5kLiBFeDogJ2EnIGZvciBhbiBhbmNob3IgdGFnLlxyXG5cdFx0ICogQHBhcmFtIHtTdHJpbmd9IFtvcHRpb25zLnByb2Nlc3NIdG1sTm9kZS5pc0Nsb3NpbmdUYWddIGB0cnVlYCBpZiB0aGUgdGFnIGlzIGEgY2xvc2luZyB0YWcgKGV4OiAmbHQ7L2EmZ3Q7KSwgYGZhbHNlYCBvdGhlcndpc2UuXHJcblx0XHQgKiAgXHJcblx0XHQgKiBAcGFyYW0ge0Z1bmN0aW9ufSBbb3B0aW9ucy5wcm9jZXNzVGV4dE5vZGVdIEEgdmlzaXRvciBmdW5jdGlvbiB3aGljaCBhbGxvd3MgcHJvY2Vzc2luZyBvZiBhbiBlbmNvdW50ZXJlZCB0ZXh0IG5vZGUuXHJcblx0XHQgKiAgIFRoaXMgZnVuY3Rpb24gaXMgY2FsbGVkIHdpdGggdGhlIGZvbGxvd2luZyBhcmd1bWVudHM6XHJcblx0XHQgKiBAcGFyYW0ge1N0cmluZ30gW29wdGlvbnMucHJvY2Vzc1RleHROb2RlLnRleHRdIFRoZSB0ZXh0IG5vZGUgdGhhdCB3YXMgbWF0Y2hlZC5cclxuXHRcdCAqL1xyXG5cdFx0cGFyc2UgOiBmdW5jdGlvbiggaHRtbCwgb3B0aW9ucyApIHtcclxuXHRcdFx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XHJcblxyXG5cdFx0XHR2YXIgcHJvY2Vzc0h0bWxOb2RlVmlzaXRvciA9IG9wdGlvbnMucHJvY2Vzc0h0bWxOb2RlIHx8IGZ1bmN0aW9uKCkge30sXHJcblx0XHRcdCAgICBwcm9jZXNzVGV4dE5vZGVWaXNpdG9yID0gb3B0aW9ucy5wcm9jZXNzVGV4dE5vZGUgfHwgZnVuY3Rpb24oKSB7fSxcclxuXHRcdFx0ICAgIGh0bWxSZWdleCA9IHRoaXMuaHRtbFJlZ2V4LFxyXG5cdFx0XHQgICAgY3VycmVudFJlc3VsdCxcclxuXHRcdFx0ICAgIGxhc3RJbmRleCA9IDA7XHJcblxyXG5cdFx0XHQvLyBMb29wIG92ZXIgdGhlIEhUTUwgc3RyaW5nLCBpZ25vcmluZyBIVE1MIHRhZ3MsIGFuZCBwcm9jZXNzaW5nIHRoZSB0ZXh0IHRoYXQgbGllcyBiZXR3ZWVuIHRoZW0sXHJcblx0XHRcdC8vIHdyYXBwaW5nIHRoZSBVUkxzIGluIGFuY2hvciB0YWdzXHJcblx0XHRcdHdoaWxlKCAoIGN1cnJlbnRSZXN1bHQgPSBodG1sUmVnZXguZXhlYyggaHRtbCApICkgIT09IG51bGwgKSB7XHJcblx0XHRcdFx0dmFyIHRhZ1RleHQgPSBjdXJyZW50UmVzdWx0WyAwIF0sXHJcblx0XHRcdFx0ICAgIHRhZ05hbWUgPSBjdXJyZW50UmVzdWx0WyAxIF0gfHwgY3VycmVudFJlc3VsdFsgMyBdLCAgLy8gVGhlIDwhRE9DVFlQRT4gdGFnIChleDogXCIhRE9DVFlQRVwiKSwgb3IgYW5vdGhlciB0YWcgKGV4OiBcImFcIikgXHJcblx0XHRcdFx0ICAgIGlzQ2xvc2luZ1RhZyA9ICEhY3VycmVudFJlc3VsdFsgMiBdLFxyXG5cdFx0XHRcdCAgICBpbkJldHdlZW5UYWdzVGV4dCA9IGh0bWwuc3Vic3RyaW5nKCBsYXN0SW5kZXgsIGN1cnJlbnRSZXN1bHQuaW5kZXggKTtcclxuXHJcblx0XHRcdFx0aWYoIGluQmV0d2VlblRhZ3NUZXh0ICkge1xyXG5cdFx0XHRcdFx0cHJvY2Vzc1RleHROb2RlVmlzaXRvciggaW5CZXR3ZWVuVGFnc1RleHQgKTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdHByb2Nlc3NIdG1sTm9kZVZpc2l0b3IoIHRhZ1RleHQsIHRhZ05hbWUudG9Mb3dlckNhc2UoKSwgaXNDbG9zaW5nVGFnICk7XHJcblxyXG5cdFx0XHRcdGxhc3RJbmRleCA9IGN1cnJlbnRSZXN1bHQuaW5kZXggKyB0YWdUZXh0Lmxlbmd0aDtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Ly8gUHJvY2VzcyBhbnkgcmVtYWluaW5nIHRleHQgYWZ0ZXIgdGhlIGxhc3QgSFRNTCBlbGVtZW50LiBXaWxsIHByb2Nlc3MgYWxsIG9mIHRoZSB0ZXh0IGlmIHRoZXJlIHdlcmUgbm8gSFRNTCBlbGVtZW50cy5cclxuXHRcdFx0aWYoIGxhc3RJbmRleCA8IGh0bWwubGVuZ3RoICkge1xyXG5cdFx0XHRcdHZhciB0ZXh0ID0gaHRtbC5zdWJzdHJpbmcoIGxhc3RJbmRleCApO1xyXG5cclxuXHRcdFx0XHRpZiggdGV4dCApIHtcclxuXHRcdFx0XHRcdHByb2Nlc3NUZXh0Tm9kZVZpc2l0b3IoIHRleHQgKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0fSApO1xyXG5cdC8qZ2xvYmFsIEF1dG9saW5rZXIgKi9cclxuXHQvKmpzaGludCBib3NzOnRydWUgKi9cclxuXHQvKipcclxuXHQgKiBAY2xhc3MgQXV0b2xpbmtlci5IdG1sVGFnXHJcblx0ICogQGV4dGVuZHMgT2JqZWN0XHJcblx0ICogXHJcblx0ICogUmVwcmVzZW50cyBhbiBIVE1MIHRhZywgd2hpY2ggY2FuIGJlIHVzZWQgdG8gZWFzaWx5IGJ1aWxkL21vZGlmeSBIVE1MIHRhZ3MgcHJvZ3JhbW1hdGljYWxseS5cclxuXHQgKiBcclxuXHQgKiBBdXRvbGlua2VyIHVzZXMgdGhpcyBhYnN0cmFjdGlvbiB0byBjcmVhdGUgSFRNTCB0YWdzLCBhbmQgdGhlbiB3cml0ZSB0aGVtIG91dCBhcyBzdHJpbmdzLiBZb3UgbWF5IGFsc28gdXNlXHJcblx0ICogdGhpcyBjbGFzcyBpbiB5b3VyIGNvZGUsIGVzcGVjaWFsbHkgd2l0aGluIGEge0BsaW5rIEF1dG9saW5rZXIjcmVwbGFjZUZuIHJlcGxhY2VGbn0uXHJcblx0ICogXHJcblx0ICogIyMgRXhhbXBsZXNcclxuXHQgKiBcclxuXHQgKiBFeGFtcGxlIGluc3RhbnRpYXRpb246XHJcblx0ICogXHJcblx0ICogICAgIHZhciB0YWcgPSBuZXcgQXV0b2xpbmtlci5IdG1sVGFnKCB7XHJcblx0ICogICAgICAgICB0YWdOYW1lIDogJ2EnLFxyXG5cdCAqICAgICAgICAgYXR0cnMgICA6IHsgJ2hyZWYnOiAnaHR0cDovL2dvb2dsZS5jb20nLCAnY2xhc3MnOiAnZXh0ZXJuYWwtbGluaycgfSxcclxuXHQgKiAgICAgICAgIGlubmVySHRtbCA6ICdHb29nbGUnXHJcblx0ICogICAgIH0gKTtcclxuXHQgKiAgICAgXHJcblx0ICogICAgIHRhZy50b1N0cmluZygpOyAgLy8gPGEgaHJlZj1cImh0dHA6Ly9nb29nbGUuY29tXCIgY2xhc3M9XCJleHRlcm5hbC1saW5rXCI+R29vZ2xlPC9hPlxyXG5cdCAqICAgICBcclxuXHQgKiAgICAgLy8gSW5kaXZpZHVhbCBhY2Nlc3NvciBtZXRob2RzXHJcblx0ICogICAgIHRhZy5nZXRUYWdOYW1lKCk7ICAgICAgICAgICAgICAgICAvLyAnYSdcclxuXHQgKiAgICAgdGFnLmdldEF0dHIoICdocmVmJyApOyAgICAgICAgICAgIC8vICdodHRwOi8vZ29vZ2xlLmNvbSdcclxuXHQgKiAgICAgdGFnLmhhc0NsYXNzKCAnZXh0ZXJuYWwtbGluaycgKTsgIC8vIHRydWVcclxuXHQgKiBcclxuXHQgKiBcclxuXHQgKiBVc2luZyBtdXRhdG9yIG1ldGhvZHMgKHdoaWNoIG1heSBiZSB1c2VkIGluIGNvbWJpbmF0aW9uIHdpdGggaW5zdGFudGlhdGlvbiBjb25maWcgcHJvcGVydGllcyk6XHJcblx0ICogXHJcblx0ICogICAgIHZhciB0YWcgPSBuZXcgQXV0b2xpbmtlci5IdG1sVGFnKCk7XHJcblx0ICogICAgIHRhZy5zZXRUYWdOYW1lKCAnYScgKTtcclxuXHQgKiAgICAgdGFnLnNldEF0dHIoICdocmVmJywgJ2h0dHA6Ly9nb29nbGUuY29tJyApO1xyXG5cdCAqICAgICB0YWcuYWRkQ2xhc3MoICdleHRlcm5hbC1saW5rJyApO1xyXG5cdCAqICAgICB0YWcuc2V0SW5uZXJIdG1sKCAnR29vZ2xlJyApO1xyXG5cdCAqICAgICBcclxuXHQgKiAgICAgdGFnLmdldFRhZ05hbWUoKTsgICAgICAgICAgICAgICAgIC8vICdhJ1xyXG5cdCAqICAgICB0YWcuZ2V0QXR0ciggJ2hyZWYnICk7ICAgICAgICAgICAgLy8gJ2h0dHA6Ly9nb29nbGUuY29tJ1xyXG5cdCAqICAgICB0YWcuaGFzQ2xhc3MoICdleHRlcm5hbC1saW5rJyApOyAgLy8gdHJ1ZVxyXG5cdCAqICAgICBcclxuXHQgKiAgICAgdGFnLnRvU3RyaW5nKCk7ICAvLyA8YSBocmVmPVwiaHR0cDovL2dvb2dsZS5jb21cIiBjbGFzcz1cImV4dGVybmFsLWxpbmtcIj5Hb29nbGU8L2E+XHJcblx0ICogICAgIFxyXG5cdCAqIFxyXG5cdCAqICMjIEV4YW1wbGUgdXNlIHdpdGhpbiBhIHtAbGluayBBdXRvbGlua2VyI3JlcGxhY2VGbiByZXBsYWNlRm59XHJcblx0ICogXHJcblx0ICogICAgIHZhciBodG1sID0gQXV0b2xpbmtlci5saW5rKCBcIlRlc3QgZ29vZ2xlLmNvbVwiLCB7XHJcblx0ICogICAgICAgICByZXBsYWNlRm4gOiBmdW5jdGlvbiggYXV0b2xpbmtlciwgbWF0Y2ggKSB7XHJcblx0ICogICAgICAgICAgICAgdmFyIHRhZyA9IGF1dG9saW5rZXIuZ2V0VGFnQnVpbGRlcigpLmJ1aWxkKCBtYXRjaCApOyAgLy8gcmV0dXJucyBhbiB7QGxpbmsgQXV0b2xpbmtlci5IdG1sVGFnfSBpbnN0YW5jZSwgY29uZmlndXJlZCB3aXRoIHRoZSBNYXRjaCdzIGhyZWYgYW5kIGFuY2hvciB0ZXh0XHJcblx0ICogICAgICAgICAgICAgdGFnLnNldEF0dHIoICdyZWwnLCAnbm9mb2xsb3cnICk7XHJcblx0ICogICAgICAgICAgICAgXHJcblx0ICogICAgICAgICAgICAgcmV0dXJuIHRhZztcclxuXHQgKiAgICAgICAgIH1cclxuXHQgKiAgICAgfSApO1xyXG5cdCAqICAgICBcclxuXHQgKiAgICAgLy8gZ2VuZXJhdGVkIGh0bWw6XHJcblx0ICogICAgIC8vICAgVGVzdCA8YSBocmVmPVwiaHR0cDovL2dvb2dsZS5jb21cIiB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub2ZvbGxvd1wiPmdvb2dsZS5jb208L2E+XHJcblx0ICogICAgIFxyXG5cdCAqICAgICBcclxuXHQgKiAjIyBFeGFtcGxlIHVzZSB3aXRoIGEgbmV3IHRhZyBmb3IgdGhlIHJlcGxhY2VtZW50XHJcblx0ICogXHJcblx0ICogICAgIHZhciBodG1sID0gQXV0b2xpbmtlci5saW5rKCBcIlRlc3QgZ29vZ2xlLmNvbVwiLCB7XHJcblx0ICogICAgICAgICByZXBsYWNlRm4gOiBmdW5jdGlvbiggYXV0b2xpbmtlciwgbWF0Y2ggKSB7XHJcblx0ICogICAgICAgICAgICAgdmFyIHRhZyA9IG5ldyBBdXRvbGlua2VyLkh0bWxUYWcoIHtcclxuXHQgKiAgICAgICAgICAgICAgICAgdGFnTmFtZSA6ICdidXR0b24nLFxyXG5cdCAqICAgICAgICAgICAgICAgICBhdHRycyAgIDogeyAndGl0bGUnOiAnTG9hZCBVUkw6ICcgKyBtYXRjaC5nZXRBbmNob3JIcmVmKCkgfSxcclxuXHQgKiAgICAgICAgICAgICAgICAgaW5uZXJIdG1sIDogJ0xvYWQgVVJMOiAnICsgbWF0Y2guZ2V0QW5jaG9yVGV4dCgpXHJcblx0ICogICAgICAgICAgICAgfSApO1xyXG5cdCAqICAgICAgICAgICAgIFxyXG5cdCAqICAgICAgICAgICAgIHJldHVybiB0YWc7XHJcblx0ICogICAgICAgICB9XHJcblx0ICogICAgIH0gKTtcclxuXHQgKiAgICAgXHJcblx0ICogICAgIC8vIGdlbmVyYXRlZCBodG1sOlxyXG5cdCAqICAgICAvLyAgIFRlc3QgPGJ1dHRvbiB0aXRsZT1cIkxvYWQgVVJMOiBodHRwOi8vZ29vZ2xlLmNvbVwiPkxvYWQgVVJMOiBnb29nbGUuY29tPC9idXR0b24+XHJcblx0ICovXHJcblx0QXV0b2xpbmtlci5IdG1sVGFnID0gQXV0b2xpbmtlci5VdGlsLmV4dGVuZCggT2JqZWN0LCB7XHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBAY2ZnIHtTdHJpbmd9IHRhZ05hbWVcclxuXHRcdCAqIFxyXG5cdFx0ICogVGhlIHRhZyBuYW1lLiBFeDogJ2EnLCAnYnV0dG9uJywgZXRjLlxyXG5cdFx0ICogXHJcblx0XHQgKiBOb3QgcmVxdWlyZWQgYXQgaW5zdGFudGlhdGlvbiB0aW1lLCBidXQgc2hvdWxkIGJlIHNldCB1c2luZyB7QGxpbmsgI3NldFRhZ05hbWV9IGJlZm9yZSB7QGxpbmsgI3RvU3RyaW5nfVxyXG5cdFx0ICogaXMgZXhlY3V0ZWQuXHJcblx0XHQgKi9cclxuXHJcblx0XHQvKipcclxuXHRcdCAqIEBjZmcge09iamVjdC48U3RyaW5nLCBTdHJpbmc+fSBhdHRyc1xyXG5cdFx0ICogXHJcblx0XHQgKiBBbiBrZXkvdmFsdWUgT2JqZWN0IChtYXApIG9mIGF0dHJpYnV0ZXMgdG8gY3JlYXRlIHRoZSB0YWcgd2l0aC4gVGhlIGtleXMgYXJlIHRoZSBhdHRyaWJ1dGUgbmFtZXMsIGFuZCB0aGVcclxuXHRcdCAqIHZhbHVlcyBhcmUgdGhlIGF0dHJpYnV0ZSB2YWx1ZXMuXHJcblx0XHQgKi9cclxuXHJcblx0XHQvKipcclxuXHRcdCAqIEBjZmcge1N0cmluZ30gaW5uZXJIdG1sXHJcblx0XHQgKiBcclxuXHRcdCAqIFRoZSBpbm5lciBIVE1MIGZvciB0aGUgdGFnLiBcclxuXHRcdCAqIFxyXG5cdFx0ICogTm90ZSB0aGUgY2FtZWwgY2FzZSBuYW1lIG9uIGBpbm5lckh0bWxgLiBBY3JvbnltcyBhcmUgY2FtZWxDYXNlZCBpbiB0aGlzIHV0aWxpdHkgKHN1Y2ggYXMgbm90IHRvIHJ1biBpbnRvIHRoZSBhY3JvbnltIFxyXG5cdFx0ICogbmFtaW5nIGluY29uc2lzdGVuY3kgdGhhdCB0aGUgRE9NIGRldmVsb3BlcnMgY3JlYXRlZCB3aXRoIGBYTUxIdHRwUmVxdWVzdGApLiBZb3UgbWF5IGFsdGVybmF0aXZlbHkgdXNlIHtAbGluayAjaW5uZXJIVE1MfVxyXG5cdFx0ICogaWYgeW91IHByZWZlciwgYnV0IHRoaXMgb25lIGlzIHJlY29tbWVuZGVkLlxyXG5cdFx0ICovXHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBAY2ZnIHtTdHJpbmd9IGlubmVySFRNTFxyXG5cdFx0ICogXHJcblx0XHQgKiBBbGlhcyBvZiB7QGxpbmsgI2lubmVySHRtbH0sIGFjY2VwdGVkIGZvciBjb25zaXN0ZW5jeSB3aXRoIHRoZSBicm93c2VyIERPTSBhcGksIGJ1dCBwcmVmZXIgdGhlIGNhbWVsQ2FzZWQgdmVyc2lvblxyXG5cdFx0ICogZm9yIGFjcm9ueW0gbmFtZXMuXHJcblx0XHQgKi9cclxuXHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBAcHJvdGVjdGVkXHJcblx0XHQgKiBAcHJvcGVydHkge1JlZ0V4cH0gd2hpdGVzcGFjZVJlZ2V4XHJcblx0XHQgKiBcclxuXHRcdCAqIFJlZ3VsYXIgZXhwcmVzc2lvbiB1c2VkIHRvIG1hdGNoIHdoaXRlc3BhY2UgaW4gYSBzdHJpbmcgb2YgQ1NTIGNsYXNzZXMuXHJcblx0XHQgKi9cclxuXHRcdHdoaXRlc3BhY2VSZWdleCA6IC9cXHMrLyxcclxuXHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBAY29uc3RydWN0b3JcclxuXHRcdCAqIEBwYXJhbSB7T2JqZWN0fSBbY2ZnXSBUaGUgY29uZmlndXJhdGlvbiBwcm9wZXJ0aWVzIGZvciB0aGlzIGNsYXNzLCBpbiBhbiBPYmplY3QgKG1hcClcclxuXHRcdCAqL1xyXG5cdFx0Y29uc3RydWN0b3IgOiBmdW5jdGlvbiggY2ZnICkge1xyXG5cdFx0XHRBdXRvbGlua2VyLlV0aWwuYXNzaWduKCB0aGlzLCBjZmcgKTtcclxuXHJcblx0XHRcdHRoaXMuaW5uZXJIdG1sID0gdGhpcy5pbm5lckh0bWwgfHwgdGhpcy5pbm5lckhUTUw7ICAvLyBhY2NlcHQgZWl0aGVyIHRoZSBjYW1lbENhc2VkIGZvcm0gb3IgdGhlIGZ1bGx5IGNhcGl0YWxpemVkIGFjcm9ueW1cclxuXHRcdH0sXHJcblxyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogU2V0cyB0aGUgdGFnIG5hbWUgdGhhdCB3aWxsIGJlIHVzZWQgdG8gZ2VuZXJhdGUgdGhlIHRhZyB3aXRoLlxyXG5cdFx0ICogXHJcblx0XHQgKiBAcGFyYW0ge1N0cmluZ30gdGFnTmFtZVxyXG5cdFx0ICogQHJldHVybiB7QXV0b2xpbmtlci5IdG1sVGFnfSBUaGlzIEh0bWxUYWcgaW5zdGFuY2UsIHNvIHRoYXQgbWV0aG9kIGNhbGxzIG1heSBiZSBjaGFpbmVkLlxyXG5cdFx0ICovXHJcblx0XHRzZXRUYWdOYW1lIDogZnVuY3Rpb24oIHRhZ05hbWUgKSB7XHJcblx0XHRcdHRoaXMudGFnTmFtZSA9IHRhZ05hbWU7XHJcblx0XHRcdHJldHVybiB0aGlzO1xyXG5cdFx0fSxcclxuXHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBSZXRyaWV2ZXMgdGhlIHRhZyBuYW1lLlxyXG5cdFx0ICogXHJcblx0XHQgKiBAcmV0dXJuIHtTdHJpbmd9XHJcblx0XHQgKi9cclxuXHRcdGdldFRhZ05hbWUgOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0cmV0dXJuIHRoaXMudGFnTmFtZSB8fCBcIlwiO1xyXG5cdFx0fSxcclxuXHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBTZXRzIGFuIGF0dHJpYnV0ZSBvbiB0aGUgSHRtbFRhZy5cclxuXHRcdCAqIFxyXG5cdFx0ICogQHBhcmFtIHtTdHJpbmd9IGF0dHJOYW1lIFRoZSBhdHRyaWJ1dGUgbmFtZSB0byBzZXQuXHJcblx0XHQgKiBAcGFyYW0ge1N0cmluZ30gYXR0clZhbHVlIFRoZSBhdHRyaWJ1dGUgdmFsdWUgdG8gc2V0LlxyXG5cdFx0ICogQHJldHVybiB7QXV0b2xpbmtlci5IdG1sVGFnfSBUaGlzIEh0bWxUYWcgaW5zdGFuY2UsIHNvIHRoYXQgbWV0aG9kIGNhbGxzIG1heSBiZSBjaGFpbmVkLlxyXG5cdFx0ICovXHJcblx0XHRzZXRBdHRyIDogZnVuY3Rpb24oIGF0dHJOYW1lLCBhdHRyVmFsdWUgKSB7XHJcblx0XHRcdHZhciB0YWdBdHRycyA9IHRoaXMuZ2V0QXR0cnMoKTtcclxuXHRcdFx0dGFnQXR0cnNbIGF0dHJOYW1lIF0gPSBhdHRyVmFsdWU7XHJcblxyXG5cdFx0XHRyZXR1cm4gdGhpcztcclxuXHRcdH0sXHJcblxyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogUmV0cmlldmVzIGFuIGF0dHJpYnV0ZSBmcm9tIHRoZSBIdG1sVGFnLiBJZiB0aGUgYXR0cmlidXRlIGRvZXMgbm90IGV4aXN0LCByZXR1cm5zIGB1bmRlZmluZWRgLlxyXG5cdFx0ICogXHJcblx0XHQgKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBUaGUgYXR0cmlidXRlIG5hbWUgdG8gcmV0cmlldmUuXHJcblx0XHQgKiBAcmV0dXJuIHtTdHJpbmd9IFRoZSBhdHRyaWJ1dGUncyB2YWx1ZSwgb3IgYHVuZGVmaW5lZGAgaWYgaXQgZG9lcyBub3QgZXhpc3Qgb24gdGhlIEh0bWxUYWcuXHJcblx0XHQgKi9cclxuXHRcdGdldEF0dHIgOiBmdW5jdGlvbiggYXR0ck5hbWUgKSB7XHJcblx0XHRcdHJldHVybiB0aGlzLmdldEF0dHJzKClbIGF0dHJOYW1lIF07XHJcblx0XHR9LFxyXG5cclxuXHJcblx0XHQvKipcclxuXHRcdCAqIFNldHMgb25lIG9yIG1vcmUgYXR0cmlidXRlcyBvbiB0aGUgSHRtbFRhZy5cclxuXHRcdCAqIFxyXG5cdFx0ICogQHBhcmFtIHtPYmplY3QuPFN0cmluZywgU3RyaW5nPn0gYXR0cnMgQSBrZXkvdmFsdWUgT2JqZWN0IChtYXApIG9mIHRoZSBhdHRyaWJ1dGVzIHRvIHNldC5cclxuXHRcdCAqIEByZXR1cm4ge0F1dG9saW5rZXIuSHRtbFRhZ30gVGhpcyBIdG1sVGFnIGluc3RhbmNlLCBzbyB0aGF0IG1ldGhvZCBjYWxscyBtYXkgYmUgY2hhaW5lZC5cclxuXHRcdCAqL1xyXG5cdFx0c2V0QXR0cnMgOiBmdW5jdGlvbiggYXR0cnMgKSB7XHJcblx0XHRcdHZhciB0YWdBdHRycyA9IHRoaXMuZ2V0QXR0cnMoKTtcclxuXHRcdFx0QXV0b2xpbmtlci5VdGlsLmFzc2lnbiggdGFnQXR0cnMsIGF0dHJzICk7XHJcblxyXG5cdFx0XHRyZXR1cm4gdGhpcztcclxuXHRcdH0sXHJcblxyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogUmV0cmlldmVzIHRoZSBhdHRyaWJ1dGVzIE9iamVjdCAobWFwKSBmb3IgdGhlIEh0bWxUYWcuXHJcblx0XHQgKiBcclxuXHRcdCAqIEByZXR1cm4ge09iamVjdC48U3RyaW5nLCBTdHJpbmc+fSBBIGtleS92YWx1ZSBvYmplY3Qgb2YgdGhlIGF0dHJpYnV0ZXMgZm9yIHRoZSBIdG1sVGFnLlxyXG5cdFx0ICovXHJcblx0XHRnZXRBdHRycyA6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRyZXR1cm4gdGhpcy5hdHRycyB8fCAoIHRoaXMuYXR0cnMgPSB7fSApO1xyXG5cdFx0fSxcclxuXHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBTZXRzIHRoZSBwcm92aWRlZCBgY3NzQ2xhc3NgLCBvdmVyd3JpdGluZyBhbnkgY3VycmVudCBDU1MgY2xhc3NlcyBvbiB0aGUgSHRtbFRhZy5cclxuXHRcdCAqIFxyXG5cdFx0ICogQHBhcmFtIHtTdHJpbmd9IGNzc0NsYXNzIE9uZSBvciBtb3JlIHNwYWNlLXNlcGFyYXRlZCBDU1MgY2xhc3NlcyB0byBzZXQgKG92ZXJ3cml0ZSkuXHJcblx0XHQgKiBAcmV0dXJuIHtBdXRvbGlua2VyLkh0bWxUYWd9IFRoaXMgSHRtbFRhZyBpbnN0YW5jZSwgc28gdGhhdCBtZXRob2QgY2FsbHMgbWF5IGJlIGNoYWluZWQuXHJcblx0XHQgKi9cclxuXHRcdHNldENsYXNzIDogZnVuY3Rpb24oIGNzc0NsYXNzICkge1xyXG5cdFx0XHRyZXR1cm4gdGhpcy5zZXRBdHRyKCAnY2xhc3MnLCBjc3NDbGFzcyApO1xyXG5cdFx0fSxcclxuXHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBDb252ZW5pZW5jZSBtZXRob2QgdG8gYWRkIG9uZSBvciBtb3JlIENTUyBjbGFzc2VzIHRvIHRoZSBIdG1sVGFnLiBXaWxsIG5vdCBhZGQgZHVwbGljYXRlIENTUyBjbGFzc2VzLlxyXG5cdFx0ICogXHJcblx0XHQgKiBAcGFyYW0ge1N0cmluZ30gY3NzQ2xhc3MgT25lIG9yIG1vcmUgc3BhY2Utc2VwYXJhdGVkIENTUyBjbGFzc2VzIHRvIGFkZC5cclxuXHRcdCAqIEByZXR1cm4ge0F1dG9saW5rZXIuSHRtbFRhZ30gVGhpcyBIdG1sVGFnIGluc3RhbmNlLCBzbyB0aGF0IG1ldGhvZCBjYWxscyBtYXkgYmUgY2hhaW5lZC5cclxuXHRcdCAqL1xyXG5cdFx0YWRkQ2xhc3MgOiBmdW5jdGlvbiggY3NzQ2xhc3MgKSB7XHJcblx0XHRcdHZhciBjbGFzc0F0dHIgPSB0aGlzLmdldENsYXNzKCksXHJcblx0XHRcdCAgICB3aGl0ZXNwYWNlUmVnZXggPSB0aGlzLndoaXRlc3BhY2VSZWdleCxcclxuXHRcdFx0ICAgIGluZGV4T2YgPSBBdXRvbGlua2VyLlV0aWwuaW5kZXhPZiwgIC8vIHRvIHN1cHBvcnQgSUU4IGFuZCBiZWxvd1xyXG5cdFx0XHQgICAgY2xhc3NlcyA9ICggIWNsYXNzQXR0ciApID8gW10gOiBjbGFzc0F0dHIuc3BsaXQoIHdoaXRlc3BhY2VSZWdleCApLFxyXG5cdFx0XHQgICAgbmV3Q2xhc3NlcyA9IGNzc0NsYXNzLnNwbGl0KCB3aGl0ZXNwYWNlUmVnZXggKSxcclxuXHRcdFx0ICAgIG5ld0NsYXNzO1xyXG5cclxuXHRcdFx0d2hpbGUoIG5ld0NsYXNzID0gbmV3Q2xhc3Nlcy5zaGlmdCgpICkge1xyXG5cdFx0XHRcdGlmKCBpbmRleE9mKCBjbGFzc2VzLCBuZXdDbGFzcyApID09PSAtMSApIHtcclxuXHRcdFx0XHRcdGNsYXNzZXMucHVzaCggbmV3Q2xhc3MgKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHRoaXMuZ2V0QXR0cnMoKVsgJ2NsYXNzJyBdID0gY2xhc3Nlcy5qb2luKCBcIiBcIiApO1xyXG5cdFx0XHRyZXR1cm4gdGhpcztcclxuXHRcdH0sXHJcblxyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogQ29udmVuaWVuY2UgbWV0aG9kIHRvIHJlbW92ZSBvbmUgb3IgbW9yZSBDU1MgY2xhc3NlcyBmcm9tIHRoZSBIdG1sVGFnLlxyXG5cdFx0ICogXHJcblx0XHQgKiBAcGFyYW0ge1N0cmluZ30gY3NzQ2xhc3MgT25lIG9yIG1vcmUgc3BhY2Utc2VwYXJhdGVkIENTUyBjbGFzc2VzIHRvIHJlbW92ZS5cclxuXHRcdCAqIEByZXR1cm4ge0F1dG9saW5rZXIuSHRtbFRhZ30gVGhpcyBIdG1sVGFnIGluc3RhbmNlLCBzbyB0aGF0IG1ldGhvZCBjYWxscyBtYXkgYmUgY2hhaW5lZC5cclxuXHRcdCAqL1xyXG5cdFx0cmVtb3ZlQ2xhc3MgOiBmdW5jdGlvbiggY3NzQ2xhc3MgKSB7XHJcblx0XHRcdHZhciBjbGFzc0F0dHIgPSB0aGlzLmdldENsYXNzKCksXHJcblx0XHRcdCAgICB3aGl0ZXNwYWNlUmVnZXggPSB0aGlzLndoaXRlc3BhY2VSZWdleCxcclxuXHRcdFx0ICAgIGluZGV4T2YgPSBBdXRvbGlua2VyLlV0aWwuaW5kZXhPZiwgIC8vIHRvIHN1cHBvcnQgSUU4IGFuZCBiZWxvd1xyXG5cdFx0XHQgICAgY2xhc3NlcyA9ICggIWNsYXNzQXR0ciApID8gW10gOiBjbGFzc0F0dHIuc3BsaXQoIHdoaXRlc3BhY2VSZWdleCApLFxyXG5cdFx0XHQgICAgcmVtb3ZlQ2xhc3NlcyA9IGNzc0NsYXNzLnNwbGl0KCB3aGl0ZXNwYWNlUmVnZXggKSxcclxuXHRcdFx0ICAgIHJlbW92ZUNsYXNzO1xyXG5cclxuXHRcdFx0d2hpbGUoIGNsYXNzZXMubGVuZ3RoICYmICggcmVtb3ZlQ2xhc3MgPSByZW1vdmVDbGFzc2VzLnNoaWZ0KCkgKSApIHtcclxuXHRcdFx0XHR2YXIgaWR4ID0gaW5kZXhPZiggY2xhc3NlcywgcmVtb3ZlQ2xhc3MgKTtcclxuXHRcdFx0XHRpZiggaWR4ICE9PSAtMSApIHtcclxuXHRcdFx0XHRcdGNsYXNzZXMuc3BsaWNlKCBpZHgsIDEgKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHRoaXMuZ2V0QXR0cnMoKVsgJ2NsYXNzJyBdID0gY2xhc3Nlcy5qb2luKCBcIiBcIiApO1xyXG5cdFx0XHRyZXR1cm4gdGhpcztcclxuXHRcdH0sXHJcblxyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogQ29udmVuaWVuY2UgbWV0aG9kIHRvIHJldHJpZXZlIHRoZSBDU1MgY2xhc3MoZXMpIGZvciB0aGUgSHRtbFRhZywgd2hpY2ggd2lsbCBlYWNoIGJlIHNlcGFyYXRlZCBieSBzcGFjZXMgd2hlblxyXG5cdFx0ICogdGhlcmUgYXJlIG11bHRpcGxlLlxyXG5cdFx0ICogXHJcblx0XHQgKiBAcmV0dXJuIHtTdHJpbmd9XHJcblx0XHQgKi9cclxuXHRcdGdldENsYXNzIDogZnVuY3Rpb24oKSB7XHJcblx0XHRcdHJldHVybiB0aGlzLmdldEF0dHJzKClbICdjbGFzcycgXSB8fCBcIlwiO1xyXG5cdFx0fSxcclxuXHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBDb252ZW5pZW5jZSBtZXRob2QgdG8gY2hlY2sgaWYgdGhlIHRhZyBoYXMgYSBDU1MgY2xhc3Mgb3Igbm90LlxyXG5cdFx0ICogXHJcblx0XHQgKiBAcGFyYW0ge1N0cmluZ30gY3NzQ2xhc3MgVGhlIENTUyBjbGFzcyB0byBjaGVjayBmb3IuXHJcblx0XHQgKiBAcmV0dXJuIHtCb29sZWFufSBgdHJ1ZWAgaWYgdGhlIEh0bWxUYWcgaGFzIHRoZSBDU1MgY2xhc3MsIGBmYWxzZWAgb3RoZXJ3aXNlLlxyXG5cdFx0ICovXHJcblx0XHRoYXNDbGFzcyA6IGZ1bmN0aW9uKCBjc3NDbGFzcyApIHtcclxuXHRcdFx0cmV0dXJuICggJyAnICsgdGhpcy5nZXRDbGFzcygpICsgJyAnICkuaW5kZXhPZiggJyAnICsgY3NzQ2xhc3MgKyAnICcgKSAhPT0gLTE7XHJcblx0XHR9LFxyXG5cclxuXHJcblx0XHQvKipcclxuXHRcdCAqIFNldHMgdGhlIGlubmVyIEhUTUwgZm9yIHRoZSB0YWcuXHJcblx0XHQgKiBcclxuXHRcdCAqIEBwYXJhbSB7U3RyaW5nfSBodG1sIFRoZSBpbm5lciBIVE1MIHRvIHNldC5cclxuXHRcdCAqIEByZXR1cm4ge0F1dG9saW5rZXIuSHRtbFRhZ30gVGhpcyBIdG1sVGFnIGluc3RhbmNlLCBzbyB0aGF0IG1ldGhvZCBjYWxscyBtYXkgYmUgY2hhaW5lZC5cclxuXHRcdCAqL1xyXG5cdFx0c2V0SW5uZXJIdG1sIDogZnVuY3Rpb24oIGh0bWwgKSB7XHJcblx0XHRcdHRoaXMuaW5uZXJIdG1sID0gaHRtbDtcclxuXHJcblx0XHRcdHJldHVybiB0aGlzO1xyXG5cdFx0fSxcclxuXHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBSZXRyaWV2ZXMgdGhlIGlubmVyIEhUTUwgZm9yIHRoZSB0YWcuXHJcblx0XHQgKiBcclxuXHRcdCAqIEByZXR1cm4ge1N0cmluZ31cclxuXHRcdCAqL1xyXG5cdFx0Z2V0SW5uZXJIdG1sIDogZnVuY3Rpb24oKSB7XHJcblx0XHRcdHJldHVybiB0aGlzLmlubmVySHRtbCB8fCBcIlwiO1xyXG5cdFx0fSxcclxuXHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBPdmVycmlkZSBvZiBzdXBlcmNsYXNzIG1ldGhvZCB1c2VkIHRvIGdlbmVyYXRlIHRoZSBIVE1MIHN0cmluZyBmb3IgdGhlIHRhZy5cclxuXHRcdCAqIFxyXG5cdFx0ICogQHJldHVybiB7U3RyaW5nfVxyXG5cdFx0ICovXHJcblx0XHR0b1N0cmluZyA6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHR2YXIgdGFnTmFtZSA9IHRoaXMuZ2V0VGFnTmFtZSgpLFxyXG5cdFx0XHQgICAgYXR0cnNTdHIgPSB0aGlzLmJ1aWxkQXR0cnNTdHIoKTtcclxuXHJcblx0XHRcdGF0dHJzU3RyID0gKCBhdHRyc1N0ciApID8gJyAnICsgYXR0cnNTdHIgOiAnJzsgIC8vIHByZXBlbmQgYSBzcGFjZSBpZiB0aGVyZSBhcmUgYWN0dWFsbHkgYXR0cmlidXRlc1xyXG5cclxuXHRcdFx0cmV0dXJuIFsgJzwnLCB0YWdOYW1lLCBhdHRyc1N0ciwgJz4nLCB0aGlzLmdldElubmVySHRtbCgpLCAnPC8nLCB0YWdOYW1lLCAnPicgXS5qb2luKCBcIlwiICk7XHJcblx0XHR9LFxyXG5cclxuXHJcblx0XHQvKipcclxuXHRcdCAqIFN1cHBvcnQgbWV0aG9kIGZvciB7QGxpbmsgI3RvU3RyaW5nfSwgcmV0dXJucyB0aGUgc3RyaW5nIHNwYWNlLXNlcGFyYXRlZCBrZXk9XCJ2YWx1ZVwiIHBhaXJzLCB1c2VkIHRvIHBvcHVsYXRlIFxyXG5cdFx0ICogdGhlIHN0cmluZ2lmaWVkIEh0bWxUYWcuXHJcblx0XHQgKiBcclxuXHRcdCAqIEBwcm90ZWN0ZWRcclxuXHRcdCAqIEByZXR1cm4ge1N0cmluZ30gRXhhbXBsZSByZXR1cm46IGBhdHRyMT1cInZhbHVlMVwiIGF0dHIyPVwidmFsdWUyXCJgXHJcblx0XHQgKi9cclxuXHRcdGJ1aWxkQXR0cnNTdHIgOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0aWYoICF0aGlzLmF0dHJzICkgcmV0dXJuIFwiXCI7ICAvLyBubyBgYXR0cnNgIE9iamVjdCAobWFwKSBoYXMgYmVlbiBzZXQsIHJldHVybiBlbXB0eSBzdHJpbmdcclxuXHJcblx0XHRcdHZhciBhdHRycyA9IHRoaXMuZ2V0QXR0cnMoKSxcclxuXHRcdFx0ICAgIGF0dHJzQXJyID0gW107XHJcblxyXG5cdFx0XHRmb3IoIHZhciBwcm9wIGluIGF0dHJzICkge1xyXG5cdFx0XHRcdGlmKCBhdHRycy5oYXNPd25Qcm9wZXJ0eSggcHJvcCApICkge1xyXG5cdFx0XHRcdFx0YXR0cnNBcnIucHVzaCggcHJvcCArICc9XCInICsgYXR0cnNbIHByb3AgXSArICdcIicgKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0cmV0dXJuIGF0dHJzQXJyLmpvaW4oIFwiIFwiICk7XHJcblx0XHR9XHJcblxyXG5cdH0gKTtcclxuXHQvKmdsb2JhbCBBdXRvbGlua2VyICovXHJcblx0Lypqc2hpbnQgc2NyaXB0dXJsOnRydWUgKi9cclxuXHQvKipcclxuXHQgKiBAcHJpdmF0ZVxyXG5cdCAqIEBjbGFzcyBBdXRvbGlua2VyLk1hdGNoVmFsaWRhdG9yXHJcblx0ICogQGV4dGVuZHMgT2JqZWN0XHJcblx0ICogXHJcblx0ICogVXNlZCBieSBBdXRvbGlua2VyIHRvIGZpbHRlciBvdXQgZmFsc2UgcG9zaXRpdmVzIGZyb20gdGhlIHtAbGluayBBdXRvbGlua2VyI21hdGNoZXJSZWdleH0uXHJcblx0ICogXHJcblx0ICogRHVlIHRvIHRoZSBsaW1pdGF0aW9ucyBvZiByZWd1bGFyIGV4cHJlc3Npb25zIChpbmNsdWRpbmcgdGhlIG1pc3NpbmcgZmVhdHVyZSBvZiBsb29rLWJlaGluZHMgaW4gSlMgcmVndWxhciBleHByZXNzaW9ucyksXHJcblx0ICogd2UgY2Fubm90IGFsd2F5cyBkZXRlcm1pbmUgdGhlIHZhbGlkaXR5IG9mIGEgZ2l2ZW4gbWF0Y2guIFRoaXMgY2xhc3MgYXBwbGllcyBhIGJpdCBvZiBhZGRpdGlvbmFsIGxvZ2ljIHRvIGZpbHRlciBvdXQgYW55XHJcblx0ICogZmFsc2UgcG9zaXRpdmVzIHRoYXQgaGF2ZSBiZWVuIG1hdGNoZWQgYnkgdGhlIHtAbGluayBBdXRvbGlua2VyI21hdGNoZXJSZWdleH0uXHJcblx0ICovXHJcblx0QXV0b2xpbmtlci5NYXRjaFZhbGlkYXRvciA9IEF1dG9saW5rZXIuVXRpbC5leHRlbmQoIE9iamVjdCwge1xyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogQHByaXZhdGVcclxuXHRcdCAqIEBwcm9wZXJ0eSB7UmVnRXhwfSBpbnZhbGlkUHJvdG9jb2xSZWxNYXRjaFJlZ2V4XHJcblx0XHQgKiBcclxuXHRcdCAqIFRoZSByZWd1bGFyIGV4cHJlc3Npb24gdXNlZCB0byBjaGVjayBhIHBvdGVudGlhbCBwcm90b2NvbC1yZWxhdGl2ZSBVUkwgbWF0Y2gsIGNvbWluZyBmcm9tIHRoZSBcclxuXHRcdCAqIHtAbGluayBBdXRvbGlua2VyI21hdGNoZXJSZWdleH0uIEEgcHJvdG9jb2wtcmVsYXRpdmUgVVJMIGlzLCBmb3IgZXhhbXBsZSwgXCIvL3lhaG9vLmNvbVwiXHJcblx0XHQgKiBcclxuXHRcdCAqIFRoaXMgcmVndWxhciBleHByZXNzaW9uIGNoZWNrcyB0byBzZWUgaWYgdGhlcmUgaXMgYSB3b3JkIGNoYXJhY3RlciBiZWZvcmUgdGhlICcvLycgbWF0Y2ggaW4gb3JkZXIgdG8gZGV0ZXJtaW5lIGlmIFxyXG5cdFx0ICogd2Ugc2hvdWxkIGFjdHVhbGx5IGF1dG9saW5rIGEgcHJvdG9jb2wtcmVsYXRpdmUgVVJMLiBUaGlzIGlzIG5lZWRlZCBiZWNhdXNlIHRoZXJlIGlzIG5vIG5lZ2F0aXZlIGxvb2stYmVoaW5kIGluIFxyXG5cdFx0ICogSmF2YVNjcmlwdCByZWd1bGFyIGV4cHJlc3Npb25zLiBcclxuXHRcdCAqIFxyXG5cdFx0ICogRm9yIGluc3RhbmNlLCB3ZSB3YW50IHRvIGF1dG9saW5rIHNvbWV0aGluZyBsaWtlIFwiR28gdG86IC8vZ29vZ2xlLmNvbVwiLCBidXQgd2UgZG9uJ3Qgd2FudCB0byBhdXRvbGluayBzb21ldGhpbmcgXHJcblx0XHQgKiBsaWtlIFwiYWJjLy9nb29nbGUuY29tXCJcclxuXHRcdCAqL1xyXG5cdFx0aW52YWxpZFByb3RvY29sUmVsTWF0Y2hSZWdleCA6IC9eW1xcd11cXC9cXC8vLFxyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogUmVnZXggdG8gdGVzdCBmb3IgYSBmdWxsIHByb3RvY29sLCB3aXRoIHRoZSB0d28gdHJhaWxpbmcgc2xhc2hlcy4gRXg6ICdodHRwOi8vJ1xyXG5cdFx0ICogXHJcblx0XHQgKiBAcHJpdmF0ZVxyXG5cdFx0ICogQHByb3BlcnR5IHtSZWdFeHB9IGhhc0Z1bGxQcm90b2NvbFJlZ2V4XHJcblx0XHQgKi9cclxuXHRcdGhhc0Z1bGxQcm90b2NvbFJlZ2V4IDogL15bQS1aYS16XVstLitBLVphLXowLTldKzpcXC9cXC8vLFxyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogUmVnZXggdG8gZmluZCB0aGUgVVJJIHNjaGVtZSwgc3VjaCBhcyAnbWFpbHRvOicuXHJcblx0XHQgKiBcclxuXHRcdCAqIFRoaXMgaXMgdXNlZCB0byBmaWx0ZXIgb3V0ICdqYXZhc2NyaXB0OicgYW5kICd2YnNjcmlwdDonIHNjaGVtZXMuXHJcblx0XHQgKiBcclxuXHRcdCAqIEBwcml2YXRlXHJcblx0XHQgKiBAcHJvcGVydHkge1JlZ0V4cH0gdXJpU2NoZW1lUmVnZXhcclxuXHRcdCAqL1xyXG5cdFx0dXJpU2NoZW1lUmVnZXggOiAvXltBLVphLXpdWy0uK0EtWmEtejAtOV0rOi8sXHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBSZWdleCB0byBkZXRlcm1pbmUgaWYgYXQgbGVhc3Qgb25lIHdvcmQgY2hhciBleGlzdHMgYWZ0ZXIgdGhlIHByb3RvY29sIChpLmUuIGFmdGVyIHRoZSAnOicpXHJcblx0XHQgKiBcclxuXHRcdCAqIEBwcml2YXRlXHJcblx0XHQgKiBAcHJvcGVydHkge1JlZ0V4cH0gaGFzV29yZENoYXJBZnRlclByb3RvY29sUmVnZXhcclxuXHRcdCAqL1xyXG5cdFx0aGFzV29yZENoYXJBZnRlclByb3RvY29sUmVnZXggOiAvOlteXFxzXSo/W0EtWmEtel0vLFxyXG5cclxuXHJcblx0XHQvKipcclxuXHRcdCAqIERldGVybWluZXMgaWYgYSBnaXZlbiBtYXRjaCBmb3VuZCBieSB7QGxpbmsgQXV0b2xpbmtlciNwcm9jZXNzVGV4dE5vZGV9IGlzIHZhbGlkLiBXaWxsIHJldHVybiBgZmFsc2VgIGZvcjpcclxuXHRcdCAqIFxyXG5cdFx0ICogMSkgVVJMIG1hdGNoZXMgd2hpY2ggZG8gbm90IGhhdmUgYXQgbGVhc3QgaGF2ZSBvbmUgcGVyaW9kICgnLicpIGluIHRoZSBkb21haW4gbmFtZSAoZWZmZWN0aXZlbHkgc2tpcHBpbmcgb3ZlciBcclxuXHRcdCAqICAgIG1hdGNoZXMgbGlrZSBcImFiYzpkZWZcIikuIEhvd2V2ZXIsIFVSTCBtYXRjaGVzIHdpdGggYSBwcm90b2NvbCB3aWxsIGJlIGFsbG93ZWQgKGV4OiAnaHR0cDovL2xvY2FsaG9zdCcpXHJcblx0XHQgKiAyKSBVUkwgbWF0Y2hlcyB3aGljaCBkbyBub3QgaGF2ZSBhdCBsZWFzdCBvbmUgd29yZCBjaGFyYWN0ZXIgaW4gdGhlIGRvbWFpbiBuYW1lIChlZmZlY3RpdmVseSBza2lwcGluZyBvdmVyXHJcblx0XHQgKiAgICBtYXRjaGVzIGxpa2UgXCJnaXQ6MS4wXCIpLlxyXG5cdFx0ICogMykgQSBwcm90b2NvbC1yZWxhdGl2ZSB1cmwgbWF0Y2ggKGEgVVJMIGJlZ2lubmluZyB3aXRoICcvLycpIHdob3NlIHByZXZpb3VzIGNoYXJhY3RlciBpcyBhIHdvcmQgY2hhcmFjdGVyIFxyXG5cdFx0ICogICAgKGVmZmVjdGl2ZWx5IHNraXBwaW5nIG92ZXIgc3RyaW5ncyBsaWtlIFwiYWJjLy9nb29nbGUuY29tXCIpXHJcblx0XHQgKiBcclxuXHRcdCAqIE90aGVyd2lzZSwgcmV0dXJucyBgdHJ1ZWAuXHJcblx0XHQgKiBcclxuXHRcdCAqIEBwYXJhbSB7U3RyaW5nfSB1cmxNYXRjaCBUaGUgbWF0Y2hlZCBVUkwsIGlmIHRoZXJlIHdhcyBvbmUuIFdpbGwgYmUgYW4gZW1wdHkgc3RyaW5nIGlmIHRoZSBtYXRjaCBpcyBub3QgYSBVUkwgbWF0Y2guXHJcblx0XHQgKiBAcGFyYW0ge1N0cmluZ30gcHJvdG9jb2xVcmxNYXRjaCBUaGUgbWF0Y2ggVVJMIHN0cmluZyBmb3IgYSBwcm90b2NvbCBtYXRjaC4gRXg6ICdodHRwOi8veWFob28uY29tJy4gVGhpcyBpcyB1c2VkIHRvIG1hdGNoXHJcblx0XHQgKiAgIHNvbWV0aGluZyBsaWtlICdodHRwOi8vbG9jYWxob3N0Jywgd2hlcmUgd2Ugd29uJ3QgZG91YmxlIGNoZWNrIHRoYXQgdGhlIGRvbWFpbiBuYW1lIGhhcyBhdCBsZWFzdCBvbmUgJy4nIGluIGl0LlxyXG5cdFx0ICogQHBhcmFtIHtTdHJpbmd9IHByb3RvY29sUmVsYXRpdmVNYXRjaCBUaGUgcHJvdG9jb2wtcmVsYXRpdmUgc3RyaW5nIGZvciBhIFVSTCBtYXRjaCAoaS5lLiAnLy8nKSwgcG9zc2libHkgd2l0aCBhIHByZWNlZGluZ1xyXG5cdFx0ICogICBjaGFyYWN0ZXIgKGV4LCBhIHNwYWNlLCBzdWNoIGFzOiAnIC8vJywgb3IgYSBsZXR0ZXIsIHN1Y2ggYXM6ICdhLy8nKS4gVGhlIG1hdGNoIGlzIGludmFsaWQgaWYgdGhlcmUgaXMgYSB3b3JkIGNoYXJhY3RlclxyXG5cdFx0ICogICBwcmVjZWRpbmcgdGhlICcvLycuXHJcblx0XHQgKiBAcmV0dXJuIHtCb29sZWFufSBgdHJ1ZWAgaWYgdGhlIG1hdGNoIGdpdmVuIGlzIHZhbGlkIGFuZCBzaG91bGQgYmUgcHJvY2Vzc2VkLCBvciBgZmFsc2VgIGlmIHRoZSBtYXRjaCBpcyBpbnZhbGlkIGFuZC9vciBcclxuXHRcdCAqICAgc2hvdWxkIGp1c3Qgbm90IGJlIHByb2Nlc3NlZC5cclxuXHRcdCAqL1xyXG5cdFx0aXNWYWxpZE1hdGNoIDogZnVuY3Rpb24oIHVybE1hdGNoLCBwcm90b2NvbFVybE1hdGNoLCBwcm90b2NvbFJlbGF0aXZlTWF0Y2ggKSB7XHJcblx0XHRcdGlmKFxyXG5cdFx0XHRcdCggcHJvdG9jb2xVcmxNYXRjaCAmJiAhdGhpcy5pc1ZhbGlkVXJpU2NoZW1lKCBwcm90b2NvbFVybE1hdGNoICkgKSB8fFxyXG5cdFx0XHRcdHRoaXMudXJsTWF0Y2hEb2VzTm90SGF2ZVByb3RvY29sT3JEb3QoIHVybE1hdGNoLCBwcm90b2NvbFVybE1hdGNoICkgfHwgICAgICAgLy8gQXQgbGVhc3Qgb25lIHBlcmlvZCAoJy4nKSBtdXN0IGV4aXN0IGluIHRoZSBVUkwgbWF0Y2ggZm9yIHVzIHRvIGNvbnNpZGVyIGl0IGFuIGFjdHVhbCBVUkwsICp1bmxlc3MqIGl0IHdhcyBhIGZ1bGwgcHJvdG9jb2wgbWF0Y2ggKGxpa2UgJ2h0dHA6Ly9sb2NhbGhvc3QnKVxyXG5cdFx0XHRcdHRoaXMudXJsTWF0Y2hEb2VzTm90SGF2ZUF0TGVhc3RPbmVXb3JkQ2hhciggdXJsTWF0Y2gsIHByb3RvY29sVXJsTWF0Y2ggKSB8fCAgLy8gQXQgbGVhc3Qgb25lIGxldHRlciBjaGFyYWN0ZXIgbXVzdCBleGlzdCBpbiB0aGUgZG9tYWluIG5hbWUgYWZ0ZXIgYSBwcm90b2NvbCBtYXRjaC4gRXg6IHNraXAgb3ZlciBzb21ldGhpbmcgbGlrZSBcImdpdDoxLjBcIlxyXG5cdFx0XHRcdHRoaXMuaXNJbnZhbGlkUHJvdG9jb2xSZWxhdGl2ZU1hdGNoKCBwcm90b2NvbFJlbGF0aXZlTWF0Y2ggKSAgICAgICAgICAgICAgICAgLy8gQSBwcm90b2NvbC1yZWxhdGl2ZSBtYXRjaCB3aGljaCBoYXMgYSB3b3JkIGNoYXJhY3RlciBpbiBmcm9udCBvZiBpdCAoc28gd2UgY2FuIHNraXAgc29tZXRoaW5nIGxpa2UgXCJhYmMvL2dvb2dsZS5jb21cIilcclxuXHRcdFx0KSB7XHJcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdH0sXHJcblxyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogRGV0ZXJtaW5lcyBpZiB0aGUgVVJJIHNjaGVtZSBpcyBhIHZhbGlkIHNjaGVtZSB0byBiZSBhdXRvbGlua2VkLiBSZXR1cm5zIGBmYWxzZWAgaWYgdGhlIHNjaGVtZSBpcyBcclxuXHRcdCAqICdqYXZhc2NyaXB0Oicgb3IgJ3Zic2NyaXB0OidcclxuXHRcdCAqIFxyXG5cdFx0ICogQHByaXZhdGVcclxuXHRcdCAqIEBwYXJhbSB7U3RyaW5nfSB1cmlTY2hlbWVNYXRjaCBUaGUgbWF0Y2ggVVJMIHN0cmluZyBmb3IgYSBmdWxsIFVSSSBzY2hlbWUgbWF0Y2guIEV4OiAnaHR0cDovL3lhaG9vLmNvbScgXHJcblx0XHQgKiAgIG9yICdtYWlsdG86YUBhLmNvbScuXHJcblx0XHQgKiBAcmV0dXJuIHtCb29sZWFufSBgdHJ1ZWAgaWYgdGhlIHNjaGVtZSBpcyBhIHZhbGlkIG9uZSwgYGZhbHNlYCBvdGhlcndpc2UuXHJcblx0XHQgKi9cclxuXHRcdGlzVmFsaWRVcmlTY2hlbWUgOiBmdW5jdGlvbiggdXJpU2NoZW1lTWF0Y2ggKSB7XHJcblx0XHRcdHZhciB1cmlTY2hlbWUgPSB1cmlTY2hlbWVNYXRjaC5tYXRjaCggdGhpcy51cmlTY2hlbWVSZWdleCApWyAwIF07XHJcblxyXG5cdFx0XHRyZXR1cm4gKCB1cmlTY2hlbWUgIT09ICdqYXZhc2NyaXB0OicgJiYgdXJpU2NoZW1lICE9PSAndmJzY3JpcHQ6JyApO1xyXG5cdFx0fSxcclxuXHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBEZXRlcm1pbmVzIGlmIGEgVVJMIG1hdGNoIGRvZXMgbm90IGhhdmUgZWl0aGVyOlxyXG5cdFx0ICogXHJcblx0XHQgKiBhKSBhIGZ1bGwgcHJvdG9jb2wgKGkuZS4gJ2h0dHA6Ly8nKSwgb3JcclxuXHRcdCAqIGIpIGF0IGxlYXN0IG9uZSBkb3QgKCcuJykgaW4gdGhlIGRvbWFpbiBuYW1lIChmb3IgYSBub24tZnVsbC1wcm90b2NvbCBtYXRjaCkuXHJcblx0XHQgKiBcclxuXHRcdCAqIEVpdGhlciBzaXR1YXRpb24gaXMgY29uc2lkZXJlZCBhbiBpbnZhbGlkIFVSTCAoZXg6ICdnaXQ6ZCcgZG9lcyBub3QgaGF2ZSBlaXRoZXIgdGhlICc6Ly8nIHBhcnQsIG9yIGF0IGxlYXN0IG9uZSBkb3RcclxuXHRcdCAqIGluIHRoZSBkb21haW4gbmFtZS4gSWYgdGhlIG1hdGNoIHdhcyAnZ2l0OmFiYy5jb20nLCB3ZSB3b3VsZCBjb25zaWRlciB0aGlzIHZhbGlkLilcclxuXHRcdCAqIFxyXG5cdFx0ICogQHByaXZhdGVcclxuXHRcdCAqIEBwYXJhbSB7U3RyaW5nfSB1cmxNYXRjaCBUaGUgbWF0Y2hlZCBVUkwsIGlmIHRoZXJlIHdhcyBvbmUuIFdpbGwgYmUgYW4gZW1wdHkgc3RyaW5nIGlmIHRoZSBtYXRjaCBpcyBub3QgYSBVUkwgbWF0Y2guXHJcblx0XHQgKiBAcGFyYW0ge1N0cmluZ30gcHJvdG9jb2xVcmxNYXRjaCBUaGUgbWF0Y2ggVVJMIHN0cmluZyBmb3IgYSBwcm90b2NvbCBtYXRjaC4gRXg6ICdodHRwOi8veWFob28uY29tJy4gVGhpcyBpcyB1c2VkIHRvIG1hdGNoXHJcblx0XHQgKiAgIHNvbWV0aGluZyBsaWtlICdodHRwOi8vbG9jYWxob3N0Jywgd2hlcmUgd2Ugd29uJ3QgZG91YmxlIGNoZWNrIHRoYXQgdGhlIGRvbWFpbiBuYW1lIGhhcyBhdCBsZWFzdCBvbmUgJy4nIGluIGl0LlxyXG5cdFx0ICogQHJldHVybiB7Qm9vbGVhbn0gYHRydWVgIGlmIHRoZSBVUkwgbWF0Y2ggZG9lcyBub3QgaGF2ZSBhIGZ1bGwgcHJvdG9jb2wsIG9yIGF0IGxlYXN0IG9uZSBkb3QgKCcuJykgaW4gYSBub24tZnVsbC1wcm90b2NvbFxyXG5cdFx0ICogICBtYXRjaC5cclxuXHRcdCAqL1xyXG5cdFx0dXJsTWF0Y2hEb2VzTm90SGF2ZVByb3RvY29sT3JEb3QgOiBmdW5jdGlvbiggdXJsTWF0Y2gsIHByb3RvY29sVXJsTWF0Y2ggKSB7XHJcblx0XHRcdHJldHVybiAoICEhdXJsTWF0Y2ggJiYgKCAhcHJvdG9jb2xVcmxNYXRjaCB8fCAhdGhpcy5oYXNGdWxsUHJvdG9jb2xSZWdleC50ZXN0KCBwcm90b2NvbFVybE1hdGNoICkgKSAmJiB1cmxNYXRjaC5pbmRleE9mKCAnLicgKSA9PT0gLTEgKTtcclxuXHRcdH0sXHJcblxyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogRGV0ZXJtaW5lcyBpZiBhIFVSTCBtYXRjaCBkb2VzIG5vdCBoYXZlIGF0IGxlYXN0IG9uZSB3b3JkIGNoYXJhY3RlciBhZnRlciB0aGUgcHJvdG9jb2wgKGkuZS4gaW4gdGhlIGRvbWFpbiBuYW1lKS5cclxuXHRcdCAqIFxyXG5cdFx0ICogQXQgbGVhc3Qgb25lIGxldHRlciBjaGFyYWN0ZXIgbXVzdCBleGlzdCBpbiB0aGUgZG9tYWluIG5hbWUgYWZ0ZXIgYSBwcm90b2NvbCBtYXRjaC4gRXg6IHNraXAgb3ZlciBzb21ldGhpbmcgXHJcblx0XHQgKiBsaWtlIFwiZ2l0OjEuMFwiXHJcblx0XHQgKiBcclxuXHRcdCAqIEBwcml2YXRlXHJcblx0XHQgKiBAcGFyYW0ge1N0cmluZ30gdXJsTWF0Y2ggVGhlIG1hdGNoZWQgVVJMLCBpZiB0aGVyZSB3YXMgb25lLiBXaWxsIGJlIGFuIGVtcHR5IHN0cmluZyBpZiB0aGUgbWF0Y2ggaXMgbm90IGEgVVJMIG1hdGNoLlxyXG5cdFx0ICogQHBhcmFtIHtTdHJpbmd9IHByb3RvY29sVXJsTWF0Y2ggVGhlIG1hdGNoIFVSTCBzdHJpbmcgZm9yIGEgcHJvdG9jb2wgbWF0Y2guIEV4OiAnaHR0cDovL3lhaG9vLmNvbScuIFRoaXMgaXMgdXNlZCB0b1xyXG5cdFx0ICogICBrbm93IHdoZXRoZXIgb3Igbm90IHdlIGhhdmUgYSBwcm90b2NvbCBpbiB0aGUgVVJMIHN0cmluZywgaW4gb3JkZXIgdG8gY2hlY2sgZm9yIGEgd29yZCBjaGFyYWN0ZXIgYWZ0ZXIgdGhlIHByb3RvY29sXHJcblx0XHQgKiAgIHNlcGFyYXRvciAoJzonKS5cclxuXHRcdCAqIEByZXR1cm4ge0Jvb2xlYW59IGB0cnVlYCBpZiB0aGUgVVJMIG1hdGNoIGRvZXMgbm90IGhhdmUgYXQgbGVhc3Qgb25lIHdvcmQgY2hhcmFjdGVyIGluIGl0IGFmdGVyIHRoZSBwcm90b2NvbCwgYGZhbHNlYFxyXG5cdFx0ICogICBvdGhlcndpc2UuXHJcblx0XHQgKi9cclxuXHRcdHVybE1hdGNoRG9lc05vdEhhdmVBdExlYXN0T25lV29yZENoYXIgOiBmdW5jdGlvbiggdXJsTWF0Y2gsIHByb3RvY29sVXJsTWF0Y2ggKSB7XHJcblx0XHRcdGlmKCB1cmxNYXRjaCAmJiBwcm90b2NvbFVybE1hdGNoICkge1xyXG5cdFx0XHRcdHJldHVybiAhdGhpcy5oYXNXb3JkQ2hhckFmdGVyUHJvdG9jb2xSZWdleC50ZXN0KCB1cmxNYXRjaCApO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBEZXRlcm1pbmVzIGlmIGEgcHJvdG9jb2wtcmVsYXRpdmUgbWF0Y2ggaXMgYW4gaW52YWxpZCBvbmUuIFRoaXMgbWV0aG9kIHJldHVybnMgYHRydWVgIGlmIHRoZXJlIGlzIGEgYHByb3RvY29sUmVsYXRpdmVNYXRjaGAsXHJcblx0XHQgKiBhbmQgdGhhdCBtYXRjaCBjb250YWlucyBhIHdvcmQgY2hhcmFjdGVyIGJlZm9yZSB0aGUgJy8vJyAoaS5lLiBpdCBtdXN0IGNvbnRhaW4gd2hpdGVzcGFjZSBvciBub3RoaW5nIGJlZm9yZSB0aGUgJy8vJyBpblxyXG5cdFx0ICogb3JkZXIgdG8gYmUgY29uc2lkZXJlZCB2YWxpZCkuXHJcblx0XHQgKiBcclxuXHRcdCAqIEBwcml2YXRlXHJcblx0XHQgKiBAcGFyYW0ge1N0cmluZ30gcHJvdG9jb2xSZWxhdGl2ZU1hdGNoIFRoZSBwcm90b2NvbC1yZWxhdGl2ZSBzdHJpbmcgZm9yIGEgVVJMIG1hdGNoIChpLmUuICcvLycpLCBwb3NzaWJseSB3aXRoIGEgcHJlY2VkaW5nXHJcblx0XHQgKiAgIGNoYXJhY3RlciAoZXgsIGEgc3BhY2UsIHN1Y2ggYXM6ICcgLy8nLCBvciBhIGxldHRlciwgc3VjaCBhczogJ2EvLycpLiBUaGUgbWF0Y2ggaXMgaW52YWxpZCBpZiB0aGVyZSBpcyBhIHdvcmQgY2hhcmFjdGVyXHJcblx0XHQgKiAgIHByZWNlZGluZyB0aGUgJy8vJy5cclxuXHRcdCAqIEByZXR1cm4ge0Jvb2xlYW59IGB0cnVlYCBpZiBpdCBpcyBhbiBpbnZhbGlkIHByb3RvY29sLXJlbGF0aXZlIG1hdGNoLCBgZmFsc2VgIG90aGVyd2lzZS5cclxuXHRcdCAqL1xyXG5cdFx0aXNJbnZhbGlkUHJvdG9jb2xSZWxhdGl2ZU1hdGNoIDogZnVuY3Rpb24oIHByb3RvY29sUmVsYXRpdmVNYXRjaCApIHtcclxuXHRcdFx0cmV0dXJuICggISFwcm90b2NvbFJlbGF0aXZlTWF0Y2ggJiYgdGhpcy5pbnZhbGlkUHJvdG9jb2xSZWxNYXRjaFJlZ2V4LnRlc3QoIHByb3RvY29sUmVsYXRpdmVNYXRjaCApICk7XHJcblx0XHR9XHJcblxyXG5cdH0gKTtcclxuXHQvKmdsb2JhbCBBdXRvbGlua2VyICovXHJcblx0Lypqc2hpbnQgc3ViOnRydWUgKi9cclxuXHQvKipcclxuXHQgKiBAcHJvdGVjdGVkXHJcblx0ICogQGNsYXNzIEF1dG9saW5rZXIuQW5jaG9yVGFnQnVpbGRlclxyXG5cdCAqIEBleHRlbmRzIE9iamVjdFxyXG5cdCAqIFxyXG5cdCAqIEJ1aWxkcyBhbmNob3IgKCZsdDthJmd0OykgdGFncyBmb3IgdGhlIEF1dG9saW5rZXIgdXRpbGl0eSB3aGVuIGEgbWF0Y2ggaXMgZm91bmQuXHJcblx0ICogXHJcblx0ICogTm9ybWFsbHkgdGhpcyBjbGFzcyBpcyBpbnN0YW50aWF0ZWQsIGNvbmZpZ3VyZWQsIGFuZCB1c2VkIGludGVybmFsbHkgYnkgYW4ge0BsaW5rIEF1dG9saW5rZXJ9IGluc3RhbmNlLCBidXQgbWF5IFxyXG5cdCAqIGFjdHVhbGx5IGJlIHJldHJpZXZlZCBpbiBhIHtAbGluayBBdXRvbGlua2VyI3JlcGxhY2VGbiByZXBsYWNlRm59IHRvIGNyZWF0ZSB7QGxpbmsgQXV0b2xpbmtlci5IdG1sVGFnIEh0bWxUYWd9IGluc3RhbmNlc1xyXG5cdCAqIHdoaWNoIG1heSBiZSBtb2RpZmllZCBiZWZvcmUgcmV0dXJuaW5nIGZyb20gdGhlIHtAbGluayBBdXRvbGlua2VyI3JlcGxhY2VGbiByZXBsYWNlRm59LiBGb3IgZXhhbXBsZTpcclxuXHQgKiBcclxuXHQgKiAgICAgdmFyIGh0bWwgPSBBdXRvbGlua2VyLmxpbmsoIFwiVGVzdCBnb29nbGUuY29tXCIsIHtcclxuXHQgKiAgICAgICAgIHJlcGxhY2VGbiA6IGZ1bmN0aW9uKCBhdXRvbGlua2VyLCBtYXRjaCApIHtcclxuXHQgKiAgICAgICAgICAgICB2YXIgdGFnID0gYXV0b2xpbmtlci5nZXRUYWdCdWlsZGVyKCkuYnVpbGQoIG1hdGNoICk7ICAvLyByZXR1cm5zIGFuIHtAbGluayBBdXRvbGlua2VyLkh0bWxUYWd9IGluc3RhbmNlXHJcblx0ICogICAgICAgICAgICAgdGFnLnNldEF0dHIoICdyZWwnLCAnbm9mb2xsb3cnICk7XHJcblx0ICogICAgICAgICAgICAgXHJcblx0ICogICAgICAgICAgICAgcmV0dXJuIHRhZztcclxuXHQgKiAgICAgICAgIH1cclxuXHQgKiAgICAgfSApO1xyXG5cdCAqICAgICBcclxuXHQgKiAgICAgLy8gZ2VuZXJhdGVkIGh0bWw6XHJcblx0ICogICAgIC8vICAgVGVzdCA8YSBocmVmPVwiaHR0cDovL2dvb2dsZS5jb21cIiB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub2ZvbGxvd1wiPmdvb2dsZS5jb208L2E+XHJcblx0ICovXHJcblx0QXV0b2xpbmtlci5BbmNob3JUYWdCdWlsZGVyID0gQXV0b2xpbmtlci5VdGlsLmV4dGVuZCggT2JqZWN0LCB7XHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBAY2ZnIHtCb29sZWFufSBuZXdXaW5kb3dcclxuXHRcdCAqIEBpbmhlcml0ZG9jIEF1dG9saW5rZXIjbmV3V2luZG93XHJcblx0XHQgKi9cclxuXHJcblx0XHQvKipcclxuXHRcdCAqIEBjZmcge051bWJlcn0gdHJ1bmNhdGVcclxuXHRcdCAqIEBpbmhlcml0ZG9jIEF1dG9saW5rZXIjdHJ1bmNhdGVcclxuXHRcdCAqL1xyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogQGNmZyB7U3RyaW5nfSBjbGFzc05hbWVcclxuXHRcdCAqIEBpbmhlcml0ZG9jIEF1dG9saW5rZXIjY2xhc3NOYW1lXHJcblx0XHQgKi9cclxuXHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBAY29uc3RydWN0b3JcclxuXHRcdCAqIEBwYXJhbSB7T2JqZWN0fSBbY2ZnXSBUaGUgY29uZmlndXJhdGlvbiBvcHRpb25zIGZvciB0aGUgQW5jaG9yVGFnQnVpbGRlciBpbnN0YW5jZSwgc3BlY2lmaWVkIGluIGFuIE9iamVjdCAobWFwKS5cclxuXHRcdCAqL1xyXG5cdFx0Y29uc3RydWN0b3IgOiBmdW5jdGlvbiggY2ZnICkge1xyXG5cdFx0XHRBdXRvbGlua2VyLlV0aWwuYXNzaWduKCB0aGlzLCBjZmcgKTtcclxuXHRcdH0sXHJcblxyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogR2VuZXJhdGVzIHRoZSBhY3R1YWwgYW5jaG9yICgmbHQ7YSZndDspIHRhZyB0byB1c2UgaW4gcGxhY2Ugb2YgdGhlIG1hdGNoZWQgVVJML2VtYWlsL1R3aXR0ZXIgdGV4dCxcclxuXHRcdCAqIHZpYSBpdHMgYG1hdGNoYCBvYmplY3QuXHJcblx0XHQgKiBcclxuXHRcdCAqIEBwYXJhbSB7QXV0b2xpbmtlci5tYXRjaC5NYXRjaH0gbWF0Y2ggVGhlIE1hdGNoIGluc3RhbmNlIHRvIGdlbmVyYXRlIGFuIGFuY2hvciB0YWcgZnJvbS5cclxuXHRcdCAqIEByZXR1cm4ge0F1dG9saW5rZXIuSHRtbFRhZ30gVGhlIEh0bWxUYWcgaW5zdGFuY2UgZm9yIHRoZSBhbmNob3IgdGFnLlxyXG5cdFx0ICovXHJcblx0XHRidWlsZCA6IGZ1bmN0aW9uKCBtYXRjaCApIHtcclxuXHRcdFx0dmFyIHRhZyA9IG5ldyBBdXRvbGlua2VyLkh0bWxUYWcoIHtcclxuXHRcdFx0XHR0YWdOYW1lICAgOiAnYScsXHJcblx0XHRcdFx0YXR0cnMgICAgIDogdGhpcy5jcmVhdGVBdHRycyggbWF0Y2guZ2V0VHlwZSgpLCBtYXRjaC5nZXRBbmNob3JIcmVmKCkgKSxcclxuXHRcdFx0XHRpbm5lckh0bWwgOiB0aGlzLnByb2Nlc3NBbmNob3JUZXh0KCBtYXRjaC5nZXRBbmNob3JUZXh0KCkgKVxyXG5cdFx0XHR9ICk7XHJcblxyXG5cdFx0XHRyZXR1cm4gdGFnO1xyXG5cdFx0fSxcclxuXHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBDcmVhdGVzIHRoZSBPYmplY3QgKG1hcCkgb2YgdGhlIEhUTUwgYXR0cmlidXRlcyBmb3IgdGhlIGFuY2hvciAoJmx0O2EmZ3Q7KSB0YWcgYmVpbmcgZ2VuZXJhdGVkLlxyXG5cdFx0ICogXHJcblx0XHQgKiBAcHJvdGVjdGVkXHJcblx0XHQgKiBAcGFyYW0ge1widXJsXCIvXCJlbWFpbFwiL1widHdpdHRlclwifSBtYXRjaFR5cGUgVGhlIHR5cGUgb2YgbWF0Y2ggdGhhdCBhbiBhbmNob3IgdGFnIGlzIGJlaW5nIGdlbmVyYXRlZCBmb3IuXHJcblx0XHQgKiBAcGFyYW0ge1N0cmluZ30gaHJlZiBUaGUgaHJlZiBmb3IgdGhlIGFuY2hvciB0YWcuXHJcblx0XHQgKiBAcmV0dXJuIHtPYmplY3R9IEEga2V5L3ZhbHVlIE9iamVjdCAobWFwKSBvZiB0aGUgYW5jaG9yIHRhZydzIGF0dHJpYnV0ZXMuIFxyXG5cdFx0ICovXHJcblx0XHRjcmVhdGVBdHRycyA6IGZ1bmN0aW9uKCBtYXRjaFR5cGUsIGFuY2hvckhyZWYgKSB7XHJcblx0XHRcdHZhciBhdHRycyA9IHtcclxuXHRcdFx0XHQnaHJlZicgOiBhbmNob3JIcmVmICAvLyB3ZSdsbCBhbHdheXMgaGF2ZSB0aGUgYGhyZWZgIGF0dHJpYnV0ZVxyXG5cdFx0XHR9O1xyXG5cclxuXHRcdFx0dmFyIGNzc0NsYXNzID0gdGhpcy5jcmVhdGVDc3NDbGFzcyggbWF0Y2hUeXBlICk7XHJcblx0XHRcdGlmKCBjc3NDbGFzcyApIHtcclxuXHRcdFx0XHRhdHRyc1sgJ2NsYXNzJyBdID0gY3NzQ2xhc3M7XHJcblx0XHRcdH1cclxuXHRcdFx0aWYoIHRoaXMubmV3V2luZG93ICkge1xyXG5cdFx0XHRcdGF0dHJzWyAndGFyZ2V0JyBdID0gXCJfYmxhbmtcIjtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0cmV0dXJuIGF0dHJzO1xyXG5cdFx0fSxcclxuXHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBDcmVhdGVzIHRoZSBDU1MgY2xhc3MgdGhhdCB3aWxsIGJlIHVzZWQgZm9yIGEgZ2l2ZW4gYW5jaG9yIHRhZywgYmFzZWQgb24gdGhlIGBtYXRjaFR5cGVgIGFuZCB0aGUge0BsaW5rICNjbGFzc05hbWV9XHJcblx0XHQgKiBjb25maWcuXHJcblx0XHQgKiBcclxuXHRcdCAqIEBwcml2YXRlXHJcblx0XHQgKiBAcGFyYW0ge1widXJsXCIvXCJlbWFpbFwiL1widHdpdHRlclwifSBtYXRjaFR5cGUgVGhlIHR5cGUgb2YgbWF0Y2ggdGhhdCBhbiBhbmNob3IgdGFnIGlzIGJlaW5nIGdlbmVyYXRlZCBmb3IuXHJcblx0XHQgKiBAcmV0dXJuIHtTdHJpbmd9IFRoZSBDU1MgY2xhc3Mgc3RyaW5nIGZvciB0aGUgbGluay4gRXhhbXBsZSByZXR1cm46IFwibXlMaW5rIG15TGluay11cmxcIi4gSWYgbm8ge0BsaW5rICNjbGFzc05hbWV9XHJcblx0XHQgKiAgIHdhcyBjb25maWd1cmVkLCByZXR1cm5zIGFuIGVtcHR5IHN0cmluZy5cclxuXHRcdCAqL1xyXG5cdFx0Y3JlYXRlQ3NzQ2xhc3MgOiBmdW5jdGlvbiggbWF0Y2hUeXBlICkge1xyXG5cdFx0XHR2YXIgY2xhc3NOYW1lID0gdGhpcy5jbGFzc05hbWU7XHJcblxyXG5cdFx0XHRpZiggIWNsYXNzTmFtZSApIFxyXG5cdFx0XHRcdHJldHVybiBcIlwiO1xyXG5cdFx0XHRlbHNlXHJcblx0XHRcdFx0cmV0dXJuIGNsYXNzTmFtZSArIFwiIFwiICsgY2xhc3NOYW1lICsgXCItXCIgKyBtYXRjaFR5cGU7ICAvLyBleDogXCJteUxpbmsgbXlMaW5rLXVybFwiLCBcIm15TGluayBteUxpbmstZW1haWxcIiwgb3IgXCJteUxpbmsgbXlMaW5rLXR3aXR0ZXJcIlxyXG5cdFx0fSxcclxuXHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBQcm9jZXNzZXMgdGhlIGBhbmNob3JUZXh0YCBieSB0cnVuY2F0aW5nIHRoZSB0ZXh0IGFjY29yZGluZyB0byB0aGUge0BsaW5rICN0cnVuY2F0ZX0gY29uZmlnLlxyXG5cdFx0ICogXHJcblx0XHQgKiBAcHJpdmF0ZVxyXG5cdFx0ICogQHBhcmFtIHtTdHJpbmd9IGFuY2hvclRleHQgVGhlIGFuY2hvciB0YWcncyB0ZXh0IChpLmUuIHdoYXQgd2lsbCBiZSBkaXNwbGF5ZWQpLlxyXG5cdFx0ICogQHJldHVybiB7U3RyaW5nfSBUaGUgcHJvY2Vzc2VkIGBhbmNob3JUZXh0YC5cclxuXHRcdCAqL1xyXG5cdFx0cHJvY2Vzc0FuY2hvclRleHQgOiBmdW5jdGlvbiggYW5jaG9yVGV4dCApIHtcclxuXHRcdFx0YW5jaG9yVGV4dCA9IHRoaXMuZG9UcnVuY2F0ZSggYW5jaG9yVGV4dCApO1xyXG5cclxuXHRcdFx0cmV0dXJuIGFuY2hvclRleHQ7XHJcblx0XHR9LFxyXG5cclxuXHJcblx0XHQvKipcclxuXHRcdCAqIFBlcmZvcm1zIHRoZSB0cnVuY2F0aW9uIG9mIHRoZSBgYW5jaG9yVGV4dGAsIGlmIHRoZSBgYW5jaG9yVGV4dGAgaXMgbG9uZ2VyIHRoYW4gdGhlIHtAbGluayAjdHJ1bmNhdGV9IG9wdGlvbi5cclxuXHRcdCAqIFRydW5jYXRlcyB0aGUgdGV4dCB0byAyIGNoYXJhY3RlcnMgZmV3ZXIgdGhhbiB0aGUge0BsaW5rICN0cnVuY2F0ZX0gb3B0aW9uLCBhbmQgYWRkcyBcIi4uXCIgdG8gdGhlIGVuZC5cclxuXHRcdCAqIFxyXG5cdFx0ICogQHByaXZhdGVcclxuXHRcdCAqIEBwYXJhbSB7U3RyaW5nfSB0ZXh0IFRoZSBhbmNob3IgdGFnJ3MgdGV4dCAoaS5lLiB3aGF0IHdpbGwgYmUgZGlzcGxheWVkKS5cclxuXHRcdCAqIEByZXR1cm4ge1N0cmluZ30gVGhlIHRydW5jYXRlZCBhbmNob3IgdGV4dC5cclxuXHRcdCAqL1xyXG5cdFx0ZG9UcnVuY2F0ZSA6IGZ1bmN0aW9uKCBhbmNob3JUZXh0ICkge1xyXG5cdFx0XHRyZXR1cm4gQXV0b2xpbmtlci5VdGlsLmVsbGlwc2lzKCBhbmNob3JUZXh0LCB0aGlzLnRydW5jYXRlIHx8IE51bWJlci5QT1NJVElWRV9JTkZJTklUWSApO1xyXG5cdFx0fVxyXG5cclxuXHR9ICk7XHJcblx0LypnbG9iYWwgQXV0b2xpbmtlciAqL1xyXG5cdC8qKlxyXG5cdCAqIEBhYnN0cmFjdFxyXG5cdCAqIEBjbGFzcyBBdXRvbGlua2VyLm1hdGNoLk1hdGNoXHJcblx0ICogXHJcblx0ICogUmVwcmVzZW50cyBhIG1hdGNoIGZvdW5kIGluIGFuIGlucHV0IHN0cmluZyB3aGljaCBzaG91bGQgYmUgQXV0b2xpbmtlZC4gQSBNYXRjaCBvYmplY3QgaXMgd2hhdCBpcyBwcm92aWRlZCBpbiBhIFxyXG5cdCAqIHtAbGluayBBdXRvbGlua2VyI3JlcGxhY2VGbiByZXBsYWNlRm59LCBhbmQgbWF5IGJlIHVzZWQgdG8gcXVlcnkgZm9yIGRldGFpbHMgYWJvdXQgdGhlIG1hdGNoLlxyXG5cdCAqIFxyXG5cdCAqIEZvciBleGFtcGxlOlxyXG5cdCAqIFxyXG5cdCAqICAgICB2YXIgaW5wdXQgPSBcIi4uLlwiOyAgLy8gc3RyaW5nIHdpdGggVVJMcywgRW1haWwgQWRkcmVzc2VzLCBhbmQgVHdpdHRlciBIYW5kbGVzXHJcblx0ICogICAgIFxyXG5cdCAqICAgICB2YXIgbGlua2VkVGV4dCA9IEF1dG9saW5rZXIubGluayggaW5wdXQsIHtcclxuXHQgKiAgICAgICAgIHJlcGxhY2VGbiA6IGZ1bmN0aW9uKCBhdXRvbGlua2VyLCBtYXRjaCApIHtcclxuXHQgKiAgICAgICAgICAgICBjb25zb2xlLmxvZyggXCJocmVmID0gXCIsIG1hdGNoLmdldEFuY2hvckhyZWYoKSApO1xyXG5cdCAqICAgICAgICAgICAgIGNvbnNvbGUubG9nKCBcInRleHQgPSBcIiwgbWF0Y2guZ2V0QW5jaG9yVGV4dCgpICk7XHJcblx0ICogICAgICAgICBcclxuXHQgKiAgICAgICAgICAgICBzd2l0Y2goIG1hdGNoLmdldFR5cGUoKSApIHtcclxuXHQgKiAgICAgICAgICAgICAgICAgY2FzZSAndXJsJyA6IFxyXG5cdCAqICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coIFwidXJsOiBcIiwgbWF0Y2guZ2V0VXJsKCkgKTtcclxuXHQgKiAgICAgICAgICAgICAgICAgICAgIFxyXG5cdCAqICAgICAgICAgICAgICAgICBjYXNlICdlbWFpbCcgOlxyXG5cdCAqICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coIFwiZW1haWw6IFwiLCBtYXRjaC5nZXRFbWFpbCgpICk7XHJcblx0ICogICAgICAgICAgICAgICAgICAgICBcclxuXHQgKiAgICAgICAgICAgICAgICAgY2FzZSAndHdpdHRlcicgOlxyXG5cdCAqICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coIFwidHdpdHRlcjogXCIsIG1hdGNoLmdldFR3aXR0ZXJIYW5kbGUoKSApO1xyXG5cdCAqICAgICAgICAgICAgIH1cclxuXHQgKiAgICAgICAgIH1cclxuXHQgKiAgICAgfSApO1xyXG5cdCAqICAgICBcclxuXHQgKiBTZWUgdGhlIHtAbGluayBBdXRvbGlua2VyfSBjbGFzcyBmb3IgbW9yZSBkZXRhaWxzIG9uIHVzaW5nIHRoZSB7QGxpbmsgQXV0b2xpbmtlciNyZXBsYWNlRm4gcmVwbGFjZUZufS5cclxuXHQgKi9cclxuXHRBdXRvbGlua2VyLm1hdGNoLk1hdGNoID0gQXV0b2xpbmtlci5VdGlsLmV4dGVuZCggT2JqZWN0LCB7XHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBAY2ZnIHtTdHJpbmd9IG1hdGNoZWRUZXh0IChyZXF1aXJlZClcclxuXHRcdCAqIFxyXG5cdFx0ICogVGhlIG9yaWdpbmFsIHRleHQgdGhhdCB3YXMgbWF0Y2hlZC5cclxuXHRcdCAqL1xyXG5cclxuXHJcblx0XHQvKipcclxuXHRcdCAqIEBjb25zdHJ1Y3RvclxyXG5cdFx0ICogQHBhcmFtIHtPYmplY3R9IGNmZyBUaGUgY29uZmlndXJhdGlvbiBwcm9wZXJ0aWVzIGZvciB0aGUgTWF0Y2ggaW5zdGFuY2UsIHNwZWNpZmllZCBpbiBhbiBPYmplY3QgKG1hcCkuXHJcblx0XHQgKi9cclxuXHRcdGNvbnN0cnVjdG9yIDogZnVuY3Rpb24oIGNmZyApIHtcclxuXHRcdFx0QXV0b2xpbmtlci5VdGlsLmFzc2lnbiggdGhpcywgY2ZnICk7XHJcblx0XHR9LFxyXG5cclxuXHJcblx0XHQvKipcclxuXHRcdCAqIFJldHVybnMgYSBzdHJpbmcgbmFtZSBmb3IgdGhlIHR5cGUgb2YgbWF0Y2ggdGhhdCB0aGlzIGNsYXNzIHJlcHJlc2VudHMuXHJcblx0XHQgKiBcclxuXHRcdCAqIEBhYnN0cmFjdFxyXG5cdFx0ICogQHJldHVybiB7U3RyaW5nfVxyXG5cdFx0ICovXHJcblx0XHRnZXRUeXBlIDogQXV0b2xpbmtlci5VdGlsLmFic3RyYWN0TWV0aG9kLFxyXG5cclxuXHJcblx0XHQvKipcclxuXHRcdCAqIFJldHVybnMgdGhlIG9yaWdpbmFsIHRleHQgdGhhdCB3YXMgbWF0Y2hlZC5cclxuXHRcdCAqIFxyXG5cdFx0ICogQHJldHVybiB7U3RyaW5nfVxyXG5cdFx0ICovXHJcblx0XHRnZXRNYXRjaGVkVGV4dCA6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRyZXR1cm4gdGhpcy5tYXRjaGVkVGV4dDtcclxuXHRcdH0sXHJcblxyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogUmV0dXJucyB0aGUgYW5jaG9yIGhyZWYgdGhhdCBzaG91bGQgYmUgZ2VuZXJhdGVkIGZvciB0aGUgbWF0Y2guXHJcblx0XHQgKiBcclxuXHRcdCAqIEBhYnN0cmFjdFxyXG5cdFx0ICogQHJldHVybiB7U3RyaW5nfVxyXG5cdFx0ICovXHJcblx0XHRnZXRBbmNob3JIcmVmIDogQXV0b2xpbmtlci5VdGlsLmFic3RyYWN0TWV0aG9kLFxyXG5cclxuXHJcblx0XHQvKipcclxuXHRcdCAqIFJldHVybnMgdGhlIGFuY2hvciB0ZXh0IHRoYXQgc2hvdWxkIGJlIGdlbmVyYXRlZCBmb3IgdGhlIG1hdGNoLlxyXG5cdFx0ICogXHJcblx0XHQgKiBAYWJzdHJhY3RcclxuXHRcdCAqIEByZXR1cm4ge1N0cmluZ31cclxuXHRcdCAqL1xyXG5cdFx0Z2V0QW5jaG9yVGV4dCA6IEF1dG9saW5rZXIuVXRpbC5hYnN0cmFjdE1ldGhvZFxyXG5cclxuXHR9ICk7XHJcblx0LypnbG9iYWwgQXV0b2xpbmtlciAqL1xyXG5cdC8qKlxyXG5cdCAqIEBjbGFzcyBBdXRvbGlua2VyLm1hdGNoLkVtYWlsXHJcblx0ICogQGV4dGVuZHMgQXV0b2xpbmtlci5tYXRjaC5NYXRjaFxyXG5cdCAqIFxyXG5cdCAqIFJlcHJlc2VudHMgYSBFbWFpbCBtYXRjaCBmb3VuZCBpbiBhbiBpbnB1dCBzdHJpbmcgd2hpY2ggc2hvdWxkIGJlIEF1dG9saW5rZWQuXHJcblx0ICogXHJcblx0ICogU2VlIHRoaXMgY2xhc3MncyBzdXBlcmNsYXNzICh7QGxpbmsgQXV0b2xpbmtlci5tYXRjaC5NYXRjaH0pIGZvciBtb3JlIGRldGFpbHMuXHJcblx0ICovXHJcblx0QXV0b2xpbmtlci5tYXRjaC5FbWFpbCA9IEF1dG9saW5rZXIuVXRpbC5leHRlbmQoIEF1dG9saW5rZXIubWF0Y2guTWF0Y2gsIHtcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIEBjZmcge1N0cmluZ30gZW1haWwgKHJlcXVpcmVkKVxyXG5cdFx0ICogXHJcblx0XHQgKiBUaGUgZW1haWwgYWRkcmVzcyB0aGF0IHdhcyBtYXRjaGVkLlxyXG5cdFx0ICovXHJcblxyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogUmV0dXJucyBhIHN0cmluZyBuYW1lIGZvciB0aGUgdHlwZSBvZiBtYXRjaCB0aGF0IHRoaXMgY2xhc3MgcmVwcmVzZW50cy5cclxuXHRcdCAqIFxyXG5cdFx0ICogQHJldHVybiB7U3RyaW5nfVxyXG5cdFx0ICovXHJcblx0XHRnZXRUeXBlIDogZnVuY3Rpb24oKSB7XHJcblx0XHRcdHJldHVybiAnZW1haWwnO1xyXG5cdFx0fSxcclxuXHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBSZXR1cm5zIHRoZSBlbWFpbCBhZGRyZXNzIHRoYXQgd2FzIG1hdGNoZWQuXHJcblx0XHQgKiBcclxuXHRcdCAqIEByZXR1cm4ge1N0cmluZ31cclxuXHRcdCAqL1xyXG5cdFx0Z2V0RW1haWwgOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0cmV0dXJuIHRoaXMuZW1haWw7XHJcblx0XHR9LFxyXG5cclxuXHJcblx0XHQvKipcclxuXHRcdCAqIFJldHVybnMgdGhlIGFuY2hvciBocmVmIHRoYXQgc2hvdWxkIGJlIGdlbmVyYXRlZCBmb3IgdGhlIG1hdGNoLlxyXG5cdFx0ICogXHJcblx0XHQgKiBAcmV0dXJuIHtTdHJpbmd9XHJcblx0XHQgKi9cclxuXHRcdGdldEFuY2hvckhyZWYgOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0cmV0dXJuICdtYWlsdG86JyArIHRoaXMuZW1haWw7XHJcblx0XHR9LFxyXG5cclxuXHJcblx0XHQvKipcclxuXHRcdCAqIFJldHVybnMgdGhlIGFuY2hvciB0ZXh0IHRoYXQgc2hvdWxkIGJlIGdlbmVyYXRlZCBmb3IgdGhlIG1hdGNoLlxyXG5cdFx0ICogXHJcblx0XHQgKiBAcmV0dXJuIHtTdHJpbmd9XHJcblx0XHQgKi9cclxuXHRcdGdldEFuY2hvclRleHQgOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0cmV0dXJuIHRoaXMuZW1haWw7XHJcblx0XHR9XHJcblxyXG5cdH0gKTtcclxuXHQvKmdsb2JhbCBBdXRvbGlua2VyICovXHJcblx0LyoqXHJcblx0ICogQGNsYXNzIEF1dG9saW5rZXIubWF0Y2guVHdpdHRlclxyXG5cdCAqIEBleHRlbmRzIEF1dG9saW5rZXIubWF0Y2guTWF0Y2hcclxuXHQgKiBcclxuXHQgKiBSZXByZXNlbnRzIGEgVHdpdHRlciBtYXRjaCBmb3VuZCBpbiBhbiBpbnB1dCBzdHJpbmcgd2hpY2ggc2hvdWxkIGJlIEF1dG9saW5rZWQuXHJcblx0ICogXHJcblx0ICogU2VlIHRoaXMgY2xhc3MncyBzdXBlcmNsYXNzICh7QGxpbmsgQXV0b2xpbmtlci5tYXRjaC5NYXRjaH0pIGZvciBtb3JlIGRldGFpbHMuXHJcblx0ICovXHJcblx0QXV0b2xpbmtlci5tYXRjaC5Ud2l0dGVyID0gQXV0b2xpbmtlci5VdGlsLmV4dGVuZCggQXV0b2xpbmtlci5tYXRjaC5NYXRjaCwge1xyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogQGNmZyB7U3RyaW5nfSB0d2l0dGVySGFuZGxlIChyZXF1aXJlZClcclxuXHRcdCAqIFxyXG5cdFx0ICogVGhlIFR3aXR0ZXIgaGFuZGxlIHRoYXQgd2FzIG1hdGNoZWQuXHJcblx0XHQgKi9cclxuXHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBSZXR1cm5zIHRoZSB0eXBlIG9mIG1hdGNoIHRoYXQgdGhpcyBjbGFzcyByZXByZXNlbnRzLlxyXG5cdFx0ICogXHJcblx0XHQgKiBAcmV0dXJuIHtTdHJpbmd9XHJcblx0XHQgKi9cclxuXHRcdGdldFR5cGUgOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0cmV0dXJuICd0d2l0dGVyJztcclxuXHRcdH0sXHJcblxyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogUmV0dXJucyBhIHN0cmluZyBuYW1lIGZvciB0aGUgdHlwZSBvZiBtYXRjaCB0aGF0IHRoaXMgY2xhc3MgcmVwcmVzZW50cy5cclxuXHRcdCAqIFxyXG5cdFx0ICogQHJldHVybiB7U3RyaW5nfVxyXG5cdFx0ICovXHJcblx0XHRnZXRUd2l0dGVySGFuZGxlIDogZnVuY3Rpb24oKSB7XHJcblx0XHRcdHJldHVybiB0aGlzLnR3aXR0ZXJIYW5kbGU7XHJcblx0XHR9LFxyXG5cclxuXHJcblx0XHQvKipcclxuXHRcdCAqIFJldHVybnMgdGhlIGFuY2hvciBocmVmIHRoYXQgc2hvdWxkIGJlIGdlbmVyYXRlZCBmb3IgdGhlIG1hdGNoLlxyXG5cdFx0ICogXHJcblx0XHQgKiBAcmV0dXJuIHtTdHJpbmd9XHJcblx0XHQgKi9cclxuXHRcdGdldEFuY2hvckhyZWYgOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0cmV0dXJuICdodHRwczovL3R3aXR0ZXIuY29tLycgKyB0aGlzLnR3aXR0ZXJIYW5kbGU7XHJcblx0XHR9LFxyXG5cclxuXHJcblx0XHQvKipcclxuXHRcdCAqIFJldHVybnMgdGhlIGFuY2hvciB0ZXh0IHRoYXQgc2hvdWxkIGJlIGdlbmVyYXRlZCBmb3IgdGhlIG1hdGNoLlxyXG5cdFx0ICogXHJcblx0XHQgKiBAcmV0dXJuIHtTdHJpbmd9XHJcblx0XHQgKi9cclxuXHRcdGdldEFuY2hvclRleHQgOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0cmV0dXJuICdAJyArIHRoaXMudHdpdHRlckhhbmRsZTtcclxuXHRcdH1cclxuXHJcblx0fSApO1xyXG5cdC8qZ2xvYmFsIEF1dG9saW5rZXIgKi9cclxuXHQvKipcclxuXHQgKiBAY2xhc3MgQXV0b2xpbmtlci5tYXRjaC5VcmxcclxuXHQgKiBAZXh0ZW5kcyBBdXRvbGlua2VyLm1hdGNoLk1hdGNoXHJcblx0ICogXHJcblx0ICogUmVwcmVzZW50cyBhIFVybCBtYXRjaCBmb3VuZCBpbiBhbiBpbnB1dCBzdHJpbmcgd2hpY2ggc2hvdWxkIGJlIEF1dG9saW5rZWQuXHJcblx0ICogXHJcblx0ICogU2VlIHRoaXMgY2xhc3MncyBzdXBlcmNsYXNzICh7QGxpbmsgQXV0b2xpbmtlci5tYXRjaC5NYXRjaH0pIGZvciBtb3JlIGRldGFpbHMuXHJcblx0ICovXHJcblx0QXV0b2xpbmtlci5tYXRjaC5VcmwgPSBBdXRvbGlua2VyLlV0aWwuZXh0ZW5kKCBBdXRvbGlua2VyLm1hdGNoLk1hdGNoLCB7XHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBAY2ZnIHtTdHJpbmd9IHVybCAocmVxdWlyZWQpXHJcblx0XHQgKiBcclxuXHRcdCAqIFRoZSB1cmwgdGhhdCB3YXMgbWF0Y2hlZC5cclxuXHRcdCAqL1xyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogQGNmZyB7Qm9vbGVhbn0gcHJvdG9jb2xVcmxNYXRjaCAocmVxdWlyZWQpXHJcblx0XHQgKiBcclxuXHRcdCAqIGB0cnVlYCBpZiB0aGUgVVJMIGlzIGEgbWF0Y2ggd2hpY2ggYWxyZWFkeSBoYXMgYSBwcm90b2NvbCAoaS5lLiAnaHR0cDovLycpLCBgZmFsc2VgIGlmIHRoZSBtYXRjaCB3YXMgZnJvbSBhICd3d3cnIG9yXHJcblx0XHQgKiBrbm93biBUTEQgbWF0Y2guXHJcblx0XHQgKi9cclxuXHJcblx0XHQvKipcclxuXHRcdCAqIEBjZmcge0Jvb2xlYW59IHByb3RvY29sUmVsYXRpdmVNYXRjaCAocmVxdWlyZWQpXHJcblx0XHQgKiBcclxuXHRcdCAqIGB0cnVlYCBpZiB0aGUgVVJMIGlzIGEgcHJvdG9jb2wtcmVsYXRpdmUgbWF0Y2guIEEgcHJvdG9jb2wtcmVsYXRpdmUgbWF0Y2ggaXMgYSBVUkwgdGhhdCBzdGFydHMgd2l0aCAnLy8nLFxyXG5cdFx0ICogYW5kIHdpbGwgYmUgZWl0aGVyIGh0dHA6Ly8gb3IgaHR0cHM6Ly8gYmFzZWQgb24gdGhlIHByb3RvY29sIHRoYXQgdGhlIHNpdGUgaXMgbG9hZGVkIHVuZGVyLlxyXG5cdFx0ICovXHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBAY2ZnIHtCb29sZWFufSBzdHJpcFByZWZpeCAocmVxdWlyZWQpXHJcblx0XHQgKiBAaW5oZXJpdGRvYyBBdXRvbGlua2VyI3N0cmlwUHJlZml4XHJcblx0XHQgKi9cclxuXHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBAcHJpdmF0ZVxyXG5cdFx0ICogQHByb3BlcnR5IHtSZWdFeHB9IHVybFByZWZpeFJlZ2V4XHJcblx0XHQgKiBcclxuXHRcdCAqIEEgcmVndWxhciBleHByZXNzaW9uIHVzZWQgdG8gcmVtb3ZlIHRoZSAnaHR0cDovLycgb3IgJ2h0dHBzOi8vJyBhbmQvb3IgdGhlICd3d3cuJyBmcm9tIFVSTHMuXHJcblx0XHQgKi9cclxuXHRcdHVybFByZWZpeFJlZ2V4OiAvXihodHRwcz86XFwvXFwvKT8od3d3XFwuKT8vaSxcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIEBwcml2YXRlXHJcblx0XHQgKiBAcHJvcGVydHkge1JlZ0V4cH0gcHJvdG9jb2xSZWxhdGl2ZVJlZ2V4XHJcblx0XHQgKiBcclxuXHRcdCAqIFRoZSByZWd1bGFyIGV4cHJlc3Npb24gdXNlZCB0byByZW1vdmUgdGhlIHByb3RvY29sLXJlbGF0aXZlICcvLycgZnJvbSB0aGUge0BsaW5rICN1cmx9IHN0cmluZywgZm9yIHB1cnBvc2VzXHJcblx0XHQgKiBvZiB7QGxpbmsgI2dldEFuY2hvclRleHR9LiBBIHByb3RvY29sLXJlbGF0aXZlIFVSTCBpcywgZm9yIGV4YW1wbGUsIFwiLy95YWhvby5jb21cIlxyXG5cdFx0ICovXHJcblx0XHRwcm90b2NvbFJlbGF0aXZlUmVnZXggOiAvXlxcL1xcLy8sXHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBAcHJpdmF0ZVxyXG5cdFx0ICogQHByb3BlcnR5IHtCb29sZWFufSBwcm90b2NvbFByZXBlbmRlZFxyXG5cdFx0ICogXHJcblx0XHQgKiBXaWxsIGJlIHNldCB0byBgdHJ1ZWAgaWYgdGhlICdodHRwOi8vJyBwcm90b2NvbCBoYXMgYmVlbiBwcmVwZW5kZWQgdG8gdGhlIHtAbGluayAjdXJsfSAoYmVjYXVzZSB0aGVcclxuXHRcdCAqIHtAbGluayAjdXJsfSBkaWQgbm90IGhhdmUgYSBwcm90b2NvbClcclxuXHRcdCAqL1xyXG5cdFx0cHJvdG9jb2xQcmVwZW5kZWQgOiBmYWxzZSxcclxuXHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBSZXR1cm5zIGEgc3RyaW5nIG5hbWUgZm9yIHRoZSB0eXBlIG9mIG1hdGNoIHRoYXQgdGhpcyBjbGFzcyByZXByZXNlbnRzLlxyXG5cdFx0ICogXHJcblx0XHQgKiBAcmV0dXJuIHtTdHJpbmd9XHJcblx0XHQgKi9cclxuXHRcdGdldFR5cGUgOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0cmV0dXJuICd1cmwnO1xyXG5cdFx0fSxcclxuXHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBSZXR1cm5zIHRoZSB1cmwgdGhhdCB3YXMgbWF0Y2hlZCwgYXNzdW1pbmcgdGhlIHByb3RvY29sIHRvIGJlICdodHRwOi8vJyBpZiB0aGUgb3JpZ2luYWxcclxuXHRcdCAqIG1hdGNoIHdhcyBtaXNzaW5nIGEgcHJvdG9jb2wuXHJcblx0XHQgKiBcclxuXHRcdCAqIEByZXR1cm4ge1N0cmluZ31cclxuXHRcdCAqL1xyXG5cdFx0Z2V0VXJsIDogZnVuY3Rpb24oKSB7XHJcblx0XHRcdHZhciB1cmwgPSB0aGlzLnVybDtcclxuXHJcblx0XHRcdC8vIGlmIHRoZSB1cmwgc3RyaW5nIGRvZXNuJ3QgYmVnaW4gd2l0aCBhIHByb3RvY29sLCBhc3N1bWUgJ2h0dHA6Ly8nXHJcblx0XHRcdGlmKCAhdGhpcy5wcm90b2NvbFJlbGF0aXZlTWF0Y2ggJiYgIXRoaXMucHJvdG9jb2xVcmxNYXRjaCAmJiAhdGhpcy5wcm90b2NvbFByZXBlbmRlZCApIHtcclxuXHRcdFx0XHR1cmwgPSB0aGlzLnVybCA9ICdodHRwOi8vJyArIHVybDtcclxuXHJcblx0XHRcdFx0dGhpcy5wcm90b2NvbFByZXBlbmRlZCA9IHRydWU7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHJldHVybiB1cmw7XHJcblx0XHR9LFxyXG5cclxuXHJcblx0XHQvKipcclxuXHRcdCAqIFJldHVybnMgdGhlIGFuY2hvciBocmVmIHRoYXQgc2hvdWxkIGJlIGdlbmVyYXRlZCBmb3IgdGhlIG1hdGNoLlxyXG5cdFx0ICogXHJcblx0XHQgKiBAcmV0dXJuIHtTdHJpbmd9XHJcblx0XHQgKi9cclxuXHRcdGdldEFuY2hvckhyZWYgOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0dmFyIHVybCA9IHRoaXMuZ2V0VXJsKCk7XHJcblxyXG5cdFx0XHRyZXR1cm4gdXJsLnJlcGxhY2UoIC8mYW1wOy9nLCAnJicgKTsgIC8vIGFueSAmYW1wOydzIGluIHRoZSBVUkwgc2hvdWxkIGJlIGNvbnZlcnRlZCBiYWNrIHRvICcmJyBpZiB0aGV5IHdlcmUgZGlzcGxheWVkIGFzICZhbXA7IGluIHRoZSBzb3VyY2UgaHRtbCBcclxuXHRcdH0sXHJcblxyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogUmV0dXJucyB0aGUgYW5jaG9yIHRleHQgdGhhdCBzaG91bGQgYmUgZ2VuZXJhdGVkIGZvciB0aGUgbWF0Y2guXHJcblx0XHQgKiBcclxuXHRcdCAqIEByZXR1cm4ge1N0cmluZ31cclxuXHRcdCAqL1xyXG5cdFx0Z2V0QW5jaG9yVGV4dCA6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHR2YXIgYW5jaG9yVGV4dCA9IHRoaXMuZ2V0VXJsKCk7XHJcblxyXG5cdFx0XHRpZiggdGhpcy5wcm90b2NvbFJlbGF0aXZlTWF0Y2ggKSB7XHJcblx0XHRcdFx0Ly8gU3RyaXAgb2ZmIGFueSBwcm90b2NvbC1yZWxhdGl2ZSAnLy8nIGZyb20gdGhlIGFuY2hvciB0ZXh0XHJcblx0XHRcdFx0YW5jaG9yVGV4dCA9IHRoaXMuc3RyaXBQcm90b2NvbFJlbGF0aXZlUHJlZml4KCBhbmNob3JUZXh0ICk7XHJcblx0XHRcdH1cclxuXHRcdFx0aWYoIHRoaXMuc3RyaXBQcmVmaXggKSB7XHJcblx0XHRcdFx0YW5jaG9yVGV4dCA9IHRoaXMuc3RyaXBVcmxQcmVmaXgoIGFuY2hvclRleHQgKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRhbmNob3JUZXh0ID0gdGhpcy5yZW1vdmVUcmFpbGluZ1NsYXNoKCBhbmNob3JUZXh0ICk7ICAvLyByZW1vdmUgdHJhaWxpbmcgc2xhc2gsIGlmIHRoZXJlIGlzIG9uZVxyXG5cclxuXHRcdFx0cmV0dXJuIGFuY2hvclRleHQ7XHJcblx0XHR9LFxyXG5cclxuXHJcblx0XHQvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcblx0XHQvLyBVdGlsaXR5IEZ1bmN0aW9uYWxpdHlcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIFN0cmlwcyB0aGUgVVJMIHByZWZpeCAoc3VjaCBhcyBcImh0dHA6Ly9cIiBvciBcImh0dHBzOi8vXCIpIGZyb20gdGhlIGdpdmVuIHRleHQuXHJcblx0XHQgKiBcclxuXHRcdCAqIEBwcml2YXRlXHJcblx0XHQgKiBAcGFyYW0ge1N0cmluZ30gdGV4dCBUaGUgdGV4dCBvZiB0aGUgYW5jaG9yIHRoYXQgaXMgYmVpbmcgZ2VuZXJhdGVkLCBmb3Igd2hpY2ggdG8gc3RyaXAgb2ZmIHRoZVxyXG5cdFx0ICogICB1cmwgcHJlZml4IChzdWNoIGFzIHN0cmlwcGluZyBvZmYgXCJodHRwOi8vXCIpXHJcblx0XHQgKiBAcmV0dXJuIHtTdHJpbmd9IFRoZSBgYW5jaG9yVGV4dGAsIHdpdGggdGhlIHByZWZpeCBzdHJpcHBlZC5cclxuXHRcdCAqL1xyXG5cdFx0c3RyaXBVcmxQcmVmaXggOiBmdW5jdGlvbiggdGV4dCApIHtcclxuXHRcdFx0cmV0dXJuIHRleHQucmVwbGFjZSggdGhpcy51cmxQcmVmaXhSZWdleCwgJycgKTtcclxuXHRcdH0sXHJcblxyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogU3RyaXBzIGFueSBwcm90b2NvbC1yZWxhdGl2ZSAnLy8nIGZyb20gdGhlIGFuY2hvciB0ZXh0LlxyXG5cdFx0ICogXHJcblx0XHQgKiBAcHJpdmF0ZVxyXG5cdFx0ICogQHBhcmFtIHtTdHJpbmd9IHRleHQgVGhlIHRleHQgb2YgdGhlIGFuY2hvciB0aGF0IGlzIGJlaW5nIGdlbmVyYXRlZCwgZm9yIHdoaWNoIHRvIHN0cmlwIG9mZiB0aGVcclxuXHRcdCAqICAgcHJvdG9jb2wtcmVsYXRpdmUgcHJlZml4IChzdWNoIGFzIHN0cmlwcGluZyBvZmYgXCIvL1wiKVxyXG5cdFx0ICogQHJldHVybiB7U3RyaW5nfSBUaGUgYGFuY2hvclRleHRgLCB3aXRoIHRoZSBwcm90b2NvbC1yZWxhdGl2ZSBwcmVmaXggc3RyaXBwZWQuXHJcblx0XHQgKi9cclxuXHRcdHN0cmlwUHJvdG9jb2xSZWxhdGl2ZVByZWZpeCA6IGZ1bmN0aW9uKCB0ZXh0ICkge1xyXG5cdFx0XHRyZXR1cm4gdGV4dC5yZXBsYWNlKCB0aGlzLnByb3RvY29sUmVsYXRpdmVSZWdleCwgJycgKTtcclxuXHRcdH0sXHJcblxyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogUmVtb3ZlcyBhbnkgdHJhaWxpbmcgc2xhc2ggZnJvbSB0aGUgZ2l2ZW4gYGFuY2hvclRleHRgLCBpbiBwcmVwYXJhdGlvbiBmb3IgdGhlIHRleHQgdG8gYmUgZGlzcGxheWVkLlxyXG5cdFx0ICogXHJcblx0XHQgKiBAcHJpdmF0ZVxyXG5cdFx0ICogQHBhcmFtIHtTdHJpbmd9IGFuY2hvclRleHQgVGhlIHRleHQgb2YgdGhlIGFuY2hvciB0aGF0IGlzIGJlaW5nIGdlbmVyYXRlZCwgZm9yIHdoaWNoIHRvIHJlbW92ZSBhbnkgdHJhaWxpbmdcclxuXHRcdCAqICAgc2xhc2ggKCcvJykgdGhhdCBtYXkgZXhpc3QuXHJcblx0XHQgKiBAcmV0dXJuIHtTdHJpbmd9IFRoZSBgYW5jaG9yVGV4dGAsIHdpdGggdGhlIHRyYWlsaW5nIHNsYXNoIHJlbW92ZWQuXHJcblx0XHQgKi9cclxuXHRcdHJlbW92ZVRyYWlsaW5nU2xhc2ggOiBmdW5jdGlvbiggYW5jaG9yVGV4dCApIHtcclxuXHRcdFx0aWYoIGFuY2hvclRleHQuY2hhckF0KCBhbmNob3JUZXh0Lmxlbmd0aCAtIDEgKSA9PT0gJy8nICkge1xyXG5cdFx0XHRcdGFuY2hvclRleHQgPSBhbmNob3JUZXh0LnNsaWNlKCAwLCAtMSApO1xyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybiBhbmNob3JUZXh0O1xyXG5cdFx0fVxyXG5cclxuXHR9ICk7XHJcblxyXG5cdHJldHVybiBBdXRvbGlua2VyO1xyXG5cclxuXHJcbn0pKTtcclxuIiwiXG52YXIgQXV0aGVudGljYXRpb24gPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB7XG4gICAgICB1c2VybmFtZTogdGhpcy5wcm9wcy51c2VybmFtZSB8fCBudWxsXG4gICAgfTtcbiAgfSxcbiAgaGFuZGxlU3VibWl0OiBmdW5jdGlvbiAoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB2YXIgdXNlcm5hbWUgPSB0aGlzLnJlZnMudXNlcm5hbWUuZ2V0RE9NTm9kZSgpLnZhbHVlLnRyaW0oKTtcbiAgICBpZiAoIXVzZXJuYW1lKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuc2V0U3RhdGUoe3VzZXJuYW1lOiB1c2VybmFtZX0pO1xuICAgIHRoaXMucmVmcy51c2VybmFtZS5nZXRET01Ob2RlKCkudmFsdWUgPSAnJztcbiAgICB0aGlzLnByb3BzLm9uU2lnbm9uU3VibWl0KHt1c2VybmFtZTogdXNlcm5hbWV9KTtcbiAgfSxcbiAgaGFuZGxlTG9nb3V0OiBmdW5jdGlvbiAoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB2YXIgdXNlcm5hbWUgPSB0aGlzLnN0YXRlLnVzZXJuYW1lO1xuICAgIHRoaXMuc2V0U3RhdGUoe3VzZXJuYW1lOiBudWxsfSk7XG4gICAgdGhpcy5wcm9wcy5vblNpZ25vdXRTdWJtaXQoe3VzZXJuYW1lOiB1c2VybmFtZX0pO1xuICB9LFxuICByZW5kZXI6IGZ1bmN0aW9uKCkge1xuICAgIHZhciBvdXRwdXQgPSBudWxsO1xuICAgIGlmICh0aGlzLnN0YXRlLnVzZXJuYW1lKSB7XG4gICAgICBvdXRwdXQgPSAoXG4gICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cIm5hdmJhci1mb3JtIG5hdmJhci1yaWdodFwiIG9uU3VibWl0PXt0aGlzLmhhbmRsZUxvZ291dH0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICA8c3Bhbj5Mb2dnZWQgaW4gYXMge3RoaXMuc3RhdGUudXNlcm5hbWV9PC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiPlNpZ24gb3V0PC9idXR0b24+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG91dHB1dCA9IChcbiAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwibmF2YmFyLWZvcm0gbmF2YmFyLXJpZ2h0XCIgb25TdWJtaXQ9e3RoaXMuaGFuZGxlU3VibWl0fT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiTmFtZVwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIHJlZj1cInVzZXJuYW1lXCIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIj5TaWduIGluPC9idXR0b24+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgICk7XG4gICAgfVxuICAgIHJldHVybiBvdXRwdXQ7XG4gIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEF1dGhlbnRpY2F0aW9uO1xuIiwiXG52YXIgUmVtYXJrYWJsZSA9IHJlcXVpcmUoJ3JlbWFya2FibGUnKTtcbnZhciBtZCA9IG5ldyBSZW1hcmthYmxlKCk7XG5cbnZhciBDb21tZW50ID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICByZW5kZXI6IGZ1bmN0aW9uKCkge1xuICAgIHZhciByYXdNYXJrdXAgPSBtZC5yZW5kZXIoW1xuICAgICAgJyonLFxuICAgICAgdGhpcy5wcm9wcy5jaGlsZHJlbi50b1N0cmluZygpLFxuICAgICAgJyonXG4gICAgXS5qb2luKCcnKSk7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tbWVudFwiPlxuICAgICAgICA8aDUgY2xhc3NOYW1lPVwiY29tbWVudFVzZXJcIj57dGhpcy5wcm9wcy51c2VybmFtZX08L2g1PlxuICAgICAgICA8c3BhbiBkYW5nZXJvdXNseVNldElubmVySFRNTD17e19faHRtbDogcmF3TWFya3VwfX0gLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn0pO1xuXG4vLyBDcmVhdGUgYSBmb3JtIHRoYXQgYWxsb3dzIGFkZGluZyBhIG5ldyBjb21tZW50XG52YXIgQ29tbWVudEZvcm0gPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB7XG4gICAgICB1c2VybmFtZTogdGhpcy5wcm9wcy51c2VybmFtZVxuICAgIH07XG4gIH0sXG4gIGhhbmRsZVN1Ym1pdDogZnVuY3Rpb24gKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgdmFyIHVzZXJuYW1lID0gdGhpcy5wcm9wcy51c2VybmFtZTtcbiAgICB2YXIgdGV4dCA9IHRoaXMucmVmcy50ZXh0LmdldERPTU5vZGUoKS52YWx1ZS50cmltKCk7XG4gICAgaWYgKCF0ZXh0IHx8ICF1c2VybmFtZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnByb3BzLm9uQ29tbWVudFN1Ym1pdCh7dXNlcm5hbWU6IHVzZXJuYW1lLCB0ZXh0OiB0ZXh0fSk7XG4gICAgdGhpcy5yZWZzLnRleHQuZ2V0RE9NTm9kZSgpLnZhbHVlID0gJyc7XG4gIH0sXG4gIHJlbmRlcjogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTEyXCI+XG4gICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwiY29tbWVudEZvcm1cIiBvblN1Ym1pdD17dGhpcy5oYW5kbGVTdWJtaXR9PlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJTYXkgc29tZXRoaW5nLi4uXCIgcmVmPVwidGV4dFwiIC8+XG4gICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiYnRuIGJ0bi5wcmltYXJ5XCIgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiU2VuZFwiIC8+XG4gICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn0pO1xuXG4vLyBSZW5kZXIgYSBsaXN0IG9mIGNvbW1lbnRzXG52YXIgQ29tbWVudExpc3QgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIHJlbmRlcjogZnVuY3Rpb24oKSB7XG4gICAgdmFyIGNvbW1lbnROb2RlcyA9IHRoaXMucHJvcHMuY29tbWVudHMubWFwKGZ1bmN0aW9uIChjb21tZW50KSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8Q29tbWVudCBrZXk9e2NvbW1lbnQua2V5fSB1c2VybmFtZT17Y29tbWVudC51c2VybmFtZX0+XG4gICAgICAgICAge2NvbW1lbnQudGV4dH1cbiAgICAgICAgPC9Db21tZW50PlxuICAgICAgKTtcbiAgICB9KTtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tMTJcIj5cbiAgICAgICAgICB7Y29tbWVudE5vZGVzfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn0pO1xuXG52YXIgQ2hhdCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgbG9hZENvbW1lbnRzRnJvbVNlcnZlcjogZnVuY3Rpb24gKCkge1xuICAgIC8vIFRPRE86IGdldCBmcm9tIHNlcnZlclxuICAgICQuYWpheCh7XG4gICAgICB1cmw6ICcvYXBpL2NvbW1lbnRzJyxcbiAgICAgIGRhdGFUeXBlOiAnanNvbicsXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2NvbW1lbnRzOiBkYXRhLmNvbW1lbnRzfSk7XG4gICAgICB9LmJpbmQodGhpcyksXG4gICAgICBlcnJvcjogZnVuY3Rpb24oeGhyLCBzdGF0dXMsIGVycikge1xuICAgICAgICBjb25zb2xlLmVycm9yKCcvYXBpL2NvbW1lbnRzJywgc3RhdHVzLCBlcnIudG9TdHJpbmcoKSk7XG4gICAgICB9LmJpbmQodGhpcylcbiAgICB9KTtcbiAgfSxcbiAgaGFuZGxlQ29tbWVudFN1Ym1pdDogZnVuY3Rpb24gKGNvbW1lbnQpIHtcbiAgICB2YXIgdXNlcm5hbWUgPSB0aGlzLnByb3BzLnVzZXJuYW1lO1xuICAgIHZhciBjb21tZW50cyA9IHRoaXMuc3RhdGUuY29tbWVudHM7XG4gICAgdmFyIG5ld0NvbW1lbnRzID0gY29tbWVudHMuY29uY2F0KFtjb21tZW50XSk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7dXNlcm5hbWU6IHVzZXJuYW1lLCBjb21tZW50czogbmV3Q29tbWVudHN9KTtcbiAgICAkLmFqYXgoe1xuICAgICAgdXJsOiAnL2FwaS9jb21tZW50cycsXG4gICAgICBkYXRhVHlwZTogJ2pzb24nLFxuICAgICAgY29udGVudFR5cGU6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgIHR5cGU6ICdQT1NUJyxcbiAgICAgIGRhdGE6IEpTT04uc3RyaW5naWZ5KGNvbW1lbnQpLFxuICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7Y29tbWVudHM6IGRhdGEuY29tbWVudHN9KTtcbiAgICAgIH0uYmluZCh0aGlzKSxcbiAgICAgIGVycm9yOiBmdW5jdGlvbiAoeGhyLCBzdGF1dHMsIGVycikge1xuICAgICAgICBjb25zb2xlLmVycm9yKCcvYXBpL2NvbW1lbnRzJywgc3RhdHVzLmVyci50b1N0cmluZygpKTtcbiAgICAgIH0uYmluZCh0aGlzKVxuICAgIH0pO1xuICB9LFxuICBnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgY29tbWVudHM6IHRoaXMucHJvcHMuY29tbWVudHMgfHwgW10sXG4gICAgICB1c2VybmFtZTogdGhpcy5wcm9wcy51c2VybmFtZVxuICAgIH07XG4gIH0sXG4gIGNvbXBvbmVudERpZE1vdW50OiBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5sb2FkQ29tbWVudHNGcm9tU2VydmVyKCk7XG4gICAgc2V0SW50ZXJ2YWwodGhpcy5sb2FkQ29tbWVudHNGcm9tU2VydmVyLCB0aGlzLnByb3BzLnBvbGxJbnRlcnZhbCk7XG4gIH0sXG4gIHJlbmRlcjogZnVuY3Rpb24gKCkge1xuICAgIHZhciB1c2VybmFtZSA9IHRoaXMucHJvcHMudXNlcm5hbWU7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxDb21tZW50TGlzdCBjb21tZW50cz17dGhpcy5zdGF0ZS5jb21tZW50c30gLz5cbiAgICAgICAgPENvbW1lbnRGb3JtIG9uQ29tbWVudFN1Ym1pdD17dGhpcy5oYW5kbGVDb21tZW50U3VibWl0fSB1c2VybmFtZT17dXNlcm5hbWV9IC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBDaGF0O1xuIiwiXG52YXIgVXNlciA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgcmVuZGVyOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGxpPnt0aGlzLnByb3BzLnVzZXJuYW1lfTwvbGk+XG4gICAgKTtcbiAgfVxufSk7XG5cbnZhciBVc2VyTGlzdCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgbG9hZFVzZXJzRnJvbVNlcnZlcjogZnVuY3Rpb24gKCkge1xuICAgIC8vIFRPRE86IGdldCBmcm9tIHNlcnZlclxuICAgICQuYWpheCh7XG4gICAgICB1cmw6ICcvYXBpL3VzZXJzJyxcbiAgICAgIGRhdGFUeXBlOiAnanNvbicsXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3VzZXJzOiBkYXRhLnVzZXJzfSk7XG4gICAgICB9LmJpbmQodGhpcyksXG4gICAgICBlcnJvcjogZnVuY3Rpb24oeGhyLCBzdGF0dXMsIGVycikge1xuICAgICAgICBjb25zb2xlLmVycm9yKCcvYXBpL3VzZXJzJywgc3RhdHVzLCBlcnIudG9TdHJpbmcoKSk7XG4gICAgICB9LmJpbmQodGhpcylcbiAgICB9KTtcbiAgfSxcbiAgZ2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVzZXJzOiB0aGlzLnByb3BzLnVzZXJzXG4gICAgfTtcbiAgfSxcbiAgY29tcG9uZW50RGlkTW91bnQ6IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmxvYWRVc2Vyc0Zyb21TZXJ2ZXIoKTtcbiAgICBzZXRJbnRlcnZhbCh0aGlzLmxvYWRVc2Vyc0Zyb21TZXJ2ZXIsIHRoaXMucHJvcHMucG9sbEludGVydmFsKTtcbiAgfSxcbiAgcmVuZGVyOiBmdW5jdGlvbigpIHtcbiAgICB2YXIgdXNlcnMgPSB0aGlzLnN0YXRlLnVzZXJzIHx8IHt9O1xuICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXModXNlcnMpO1xuICAgIHZhciB1c2VyTm9kZXMgPSBrZXlzLmZpbHRlcihmdW5jdGlvbiAoa2V5KSB7XG4gICAgICByZXR1cm4gdXNlcnNba2V5XTtcbiAgICB9KS5tYXAoZnVuY3Rpb24gKGtleSkge1xuICAgICAgaWYgKCF1c2Vyc1trZXldKSByZXR1cm47XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8VXNlciBrZXk9e2tleX0gdXNlcm5hbWU9e2tleX0gLz5cbiAgICAgICk7XG4gICAgfSk7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTEyXCI+XG4gICAgICAgICAgPHVsPlxuICAgICAgICAgICAge3VzZXJOb2Rlc31cbiAgICAgICAgICA8L3VsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFVzZXJMaXN0O1xuIl19
