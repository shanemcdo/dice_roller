// read query string
let GET = {};
for(const item of window.location.search.split(/&|\?/).filter(substr => substr)){
    let [key, val] = item.split('=').map(decodeURIComponent);
    GET[key] = val;
}

let els = {
    'reps': document.querySelector('#reps'),
    'faces': document.querySelector('#faces'),
    'output': document.querySelector('#output'),
    'roll_type': document.querySelector('#roll-type'),
};

function roll(){
    els.output.innerHTML = roll_die_repeat(
        parseInt(els.reps.value),
        parseInt(els.faces.value),
		els.roll_type.value
    );
}

let [reps, faces] = parse_roll(GET.roll);
els.reps.value = reps;
els.faces.value = faces;
if(GET.type) {
	els.roll_type.value = GET.type
}
roll()
