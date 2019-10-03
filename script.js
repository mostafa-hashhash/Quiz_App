question_list =
	[
		{
			q: "What's The Product os 5^3 ? ",
			a: "125",
			o: ["15", "25", "75", "125", "225"]
		},

		{
			q: "What's The Result of 8+13 ? ",
			a: "21",
			o: ["21", "22", "20"]
		},

		{
			q: "How Many Seasons per Year ? ",
			a: "4",
			o: ["6", "4", "2", "3"]
		},

		{
			q: "What's The Binary of 25 ? ",
			a: "11001",
			o: ["10011", "10110", "11010", "11001"]
		}
	]

if (!localStorage.getItem('counter')) localStorage.setItem('counter', 100);

let index = 0;
let correct = 0;

document.addEventListener("DOMContentLoaded", () => {

	document.querySelector("h4").innerHTML = localStorage.getItem('counter');

	load_next_question();

	document.querySelector("#next").onclick = () => {
		if (index < question_list.length-1)
			index++;

		else
			document.querySelector("h2").innerHTML =
				` Score : ${correct} `;

		load_next_question();
	}

	document.querySelector("#back").onclick = () => {
		if (index > 0)
			index--;
		load_next_question();
	}

	function load_next_question() {
		document.querySelector("opt").innerHTML = " ";

		document.querySelector("h2").innerHTML =
			question_list[index].q;
		/*
		for ( const opt of question_list[q_index].o ){
		document.querySelector("div").innerHTML +=
			`<button> ${opt} </button>` ;
		}
		*/
		question_list[index].o.forEach((opt) => {
			document.querySelector("opt").innerHTML +=
				`<button id="option" > ${opt} </button>`;
		});

		document.querySelector("span").innerHTML =
			`${index + 1} of &nbsp${question_list.length} `;

		document.querySelectorAll("#option").forEach(opt => {
			opt.onclick = () => {
				if (toString(opt.textContent) === toString(question_list[index].a))
					correct++;
			}

		});
	}

	setInterval(() => {

		let counter = localStorage.getItem('counter');

		if (counter > 0) {
			counter--;
			document.querySelector("h4").innerHTML = counter;
			localStorage.setItem('counter', counter);
		}
		else {
			document.querySelector("h4").innerHTML = " Time Out :( ";
			document.querySelector("body").style.backgroundColor = "red";
		}
	}, 1000);

	// load >> count ( strorage -> var -> increament var >> update content,var )
});
