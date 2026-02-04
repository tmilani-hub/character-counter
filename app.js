const maj = [
	"A",
	"B",
	"C",
	"D",
	"E",
	"F",
	"G",
	"H",
	"I",
	"J",
	"K",
	"L",
	"M",
	"N",
	"O",
	"P",
	"Q",
	"R",
	"S",
	"T",
	"U",
	"V",
	"W",
	"X",
	"Y",
	"Z",
	"a",
	"b",
	"c",
	"d",
	"e",
	"f",
	"g",
	"h",
	"i",
	"j",
	"k",
	"l",
	"m",
	"n",
	"o",
	"p",
	"q",
	"r",
	"s",
	"t",
	"u",
	"v",
	"w",
	"x",
	"y",
	"z",
	"0",
	"1",
	"2",
	"3",
	"4",
	"5",
	"6",
	"7",
	"8",
	"9",
	"É",
	"é",
	"ç",
	"Ç",
	"à",
	"À",
	"ù",
	"Ù",
	undefined,
];

const point = [".", "?", "!"];
const spaceword = [" ", ".", "?", "!", "'", ",", "(", ")"];
const letter_unique_count = [];
const letter_unique_count_number = [];
const letter_unique_count_cards = [];

// const letter_unique = [
// 	{
// 		total: 0,
// 		id: "",
// 		$cards: HTMLElement
// 	}
// ];

const $TextArea = document.querySelector("#text-area-unique");
const $totalCardsH4 = document.querySelector("#total-cards");
const $wordCountH4 = document.querySelector("#word-count");
const $sentenceCountH4 = document.querySelector("#sentence-count");
const $So_Space = document.querySelector("#no-space");
const $Limit_Character = document.querySelector("#limit-character");
const $Limit = document.querySelector("#Limit");
const $pErrorLimit = document.querySelector("#p");
const $foure_tout = document.querySelector("#foure-tout");
const $foure_tout_back = document.querySelector("details");

let allLetter = 0;
let allword = 0;
let allsentence = 0;
let limit = -1;

function countCharacter(text) {
	let total = 0;
	for (let i = 0; i < text.length; i++) {
		if ($So_Space.checked) {
			if (text[i] !== " ") {
				total++;
			}
		} else total++;
	}
	return total;
}
function countWord(text) {
	let total = 0;
	if (maj.includes(text[0])) {
		total = 1;
	}
	for (let i = 0; i < text.length; i++) {
		if (maj.includes(text[i]) && spaceword.includes(text[i - 1])) {
			total++;
		}
	}
	if (text.length == 0) {
		total = 0;
	}
	return total;
}
function countSentence(text) {
	let total = 0;
	for (let i = 0; i < text.length; i++) {
		if (maj.includes(text[i])) {
			total = 1;
			break;
		}
	}
	for (let i = 0; i < text.length; i++) {
		for (let l = i; l < text.length; l++) {
			if (point.includes(text[i]) && maj.includes(text[l])) {
				total++;
				i = l;
				break;
			}
		}
	}
	if (text.length == 0) {
		total = 0;
	}
	return total;
}

$So_Space.addEventListener("change", () => {
	allLetter = countCharacter($TextArea.value);
	$totalCardsH4.textContent = allLetter;
});
$Limit_Character.addEventListener("change", () => {
	if ($Limit_Character.checked) {
		$Limit.classList.remove("none");
		$TextArea.textContent = "";
	} else {
		$Limit.classList.add("none");
		$TextArea.setAttribute("maxlength", Infinity);
		$TextArea.setAttribute("placeholder", "");
		limit = -1;
		$pErrorLimit.classList.add("none");
		$Limit.value = "";
	}
});
$Limit.addEventListener("input", () => {
	limit = $Limit.value;
	$TextArea.value = "";
	$TextArea.setAttribute(
		"placeholder",
		"Limit is set on " + limit + " character",
	);
	allLetter = countCharacter($TextArea.value);
	$totalCardsH4.textContent = allLetter;
	allword = countWord($TextArea.value);
	$wordCountH4.textContent = allword;
	allsentence = countSentence($TextArea.value);
	$sentenceCountH4.textContent = allsentence;
	$TextArea.setAttribute("maxlength", limit);
	if ($Limit.value.length == 0) {
		$TextArea.setAttribute("placeholder", "");
	}
});

window.addEventListener("load", () => {
	$totalCardsH4.textContent = allLetter;
	$wordCountH4.textContent = allword;
	$sentenceCountH4.textContent = allsentence;
});

$TextArea.addEventListener("input", () => {
	let text = $TextArea.value;

	allLetter = countCharacter(text);
	$totalCardsH4.textContent = allLetter;

	allword = countWord(text);
	$wordCountH4.textContent = allword;

	allsentence = countSentence(text);
	$sentenceCountH4.textContent = allsentence;

	if ($TextArea.value.length == limit) {
		$pErrorLimit.classList.remove("none");
		$pErrorLimit.textContent =
			"Limit atteinte, baisser la limite ou faut racoursire le text, limit is " +
			limit +
			".";
	} else {
		$pErrorLimit.classList.add("none");
	}
});

function create_letter_cards(newLetter) {
	const $cards = document.createElement("div");
	const $letter = document.createElement("p");
	const $cent = document.createElement("div");
	const $zero = document.createElement("div");
	const $p = document.createElement("p");
	const $SP_letter_total = document.createElement("span");
	const $SP_letter_forcent = document.createElement("span");

	return $cards;
	// <div class="letter">
	// <p>e</p>
	// <div class="cent">
	// <div class="zero">
	// </div>
	// </div>
	// <p>
	// <span>40</span> <span>(16.06%)
	// </span>
	// </p>
	// </div>
}
