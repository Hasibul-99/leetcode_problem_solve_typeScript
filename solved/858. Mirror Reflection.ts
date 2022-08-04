function mirrorReflection(p: number, q: number): number {

    let ref = p,
        ext = q;

    while (ref%2 === 0 && ext%2 ===0) {
        console.log('ref', ref);
        
        ref = ref/2;
        ext = ext/2
    }

    if (ext % 2 === 0 && ref%2 !== 0) return 0;
    if (ext % 2 === 1 && ref%2 === 0) return 2;
    if (ext % 2 === 1 && ref%2 !== 0) return 1;

    return -1;
};
console.log(mirrorReflection(4, 2));