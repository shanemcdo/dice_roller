const RollType = Object.freeze({
	STANDARD: 'Standard',
	ADVANTAGE: 'Advantage',
	DISADVANTAGE: 'Disadvantage',
});

function get_std_die(faces){
    return ()=>Math.ceil(Math.random() * faces);
}

function roll_std_die(faces){
    return get_std_die(faces)();
}

function roll_d100(){
    return roll_std_die(10) * 10;
}

function roll_die(n, roll_type = RollType.STANDARD){
	const roll = n === 100 ? roll_d100 : get_std_die(n);
	if(roll_type === RollType.STANDARD) {
		return roll();
	}
	const rolls = [roll(), roll()];
	if(roll_type === RollType.ADVANTAGE) {
		return Math.max(...rolls);
	}
	if(roll_type === RollType.DISADVANTAGE) {
		return Math.min(...rolls);
	}
	throw `Roll type "${roll_type}" is unknown`;
}

function roll_die_repeat(reps, n, roll_type = RollType.STANDARD){
    let sum = 0;
    for(let i = 0; i < reps; i++)
        sum += roll_die(n, roll_type);
    return sum;
}

function parse_roll(string){
    if(string){
        let list = string.split(/d/)
            .filter(x=>x!=='');
        if(list.length === 1){
            return [1, list[0]];
        }else if(list.length === 2){
            return list
        }
    }
    return [1, 20];
}
