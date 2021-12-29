let els = {
    'reps': document.querySelector('#reps'),
    'faces': document.querySelector('#faces'),
    'output': document.querySelector('#output'),
};

function roll(){
    els.output.innerHTML = roll_die_repeat(
        parseInt(els.reps.value),
        parseInt(els.faces.value)
    );
}
