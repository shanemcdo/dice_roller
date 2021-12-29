function get_std_die(faces){
    return ()=>Math.ceil(Math.random() * faces);
}

function roll_std_die(faces){
    return get_std_die(faces)();
}

function roll_d100(){
    return roll_std_die(10) * 10;
}

function roll_die(n){
    if(n == 100)
        return roll_d100();
    return roll_std_die(n);
}

function roll_die_repeat(reps, n){
    let sum = 0;
    for(let i = 0; i < reps; i++)
        sum += roll_die(n);
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
