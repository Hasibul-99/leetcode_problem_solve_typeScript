function wordPattern(pattern: string, s: string): boolean {
    let a : string[] = pattern.split(''), 
        b : string[] = s.split(' '), 
        pt : any = [], 
        x : any = {};

    if(a.length !== b.length)return false;

    for(var i=0;i<a.length;i++){
        if(!x[a[i]]){
            x[a[i]] = b[i];
            if(pt.indexOf(b[i])!== -1)return false;
            pt.push(b[i]);
        }
        else if(x[a[i]]!==b[i])return false;
    }
    return true
    
};

console.log("wordPattern", wordPattern("abba", "dog cat cat dog"));
