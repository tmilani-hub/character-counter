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
];

const point = [".", "?", "!"];

const $TextArea = document.querySelector("#text-area-unique");
const $totalCardsH4 = document.querySelector("#total-cards");
const $wordCountH4 = document.querySelector("#word-count");
const $sentenceCountH4 = document.querySelector("#sentence-count");
const $So_Space = document.querySelector("#no-space");
const $Limit_Character = document.querySelector("#limit-character");
const $Limit = document.querySelector("#Limit");

let allLetter = 0;
let allword = 0;
let allsentence = 0;
let limit = true;

window.addEventListener("load", () => {
	$totalCardsH4.textContent = allLetter;
	$wordCountH4.textContent = allword;
	$sentenceCountH4.textContent = allsentence;
});

$TextArea.addEventListener("input", () => {
	allLetter = countCharacter($TextArea.value);

	$totalCardsH4.textContent = allLetter;

	allword = countWord($TextArea.value);

	$wordCountH4.textContent = allword;

	allsentence = countSentence($TextArea.value);

	$sentenceCountH4.textContent = allsentence;
});

$So_Space.addEventListener("change", () => {
	allLetter = countCharacter($TextArea.value);
	$totalCardsH4.textContent = allLetter;
});

$Limit_Character.addEventListener("change", () => {
	if ($Limit_Character) {
		$Limit.classList.remove("none");
		$TextArea.textContent = "";
	} else {
		$Limit.classList.add("none");
	}
});

$Limit.addEventListener("input", () => {
	limit = $Limit.value;
	$TextArea.value = "";
	$TextArea.setAttribute(
		"placeholder",
		"Limit is set on " + limit + " character",
	);
	$TextArea.setAttribute("maxlength", limit);
	if ($Limit.value.length === 0) {
		$TextArea.setAttribute("placeholder", "");
	}
});

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
	let total = 1;
	for (let i = 0; i < text.length; i++) {
		if (text[i] == " " && text[i - 1] !== " ") {
			total++;
		}
	}

	return total;
}

function countSentence(text) {
	let total = 0;
	for (let i = 0; i < text.length; i++) {
		for (let l = 0; l < text.length; l++) {
			if (maj.includes(text[i]) && $So_Space) {
				total++;
				break;
			}
		}
	}
	return total;
}
