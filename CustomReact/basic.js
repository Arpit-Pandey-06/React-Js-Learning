function useFor(heavy){
    // console.log(heavy.first);
    // console.log(heavy.second);
    // console.log(heavy.third);
    for(const my in heavy.second){
        console.log(heavy.second[my]);
        
    }

}


const heavy={
    first:"hello",
    second:{
        type:'one',
        range:'1 to 10',
        nothing:'omg',
        children:'abc'
    },
    third:12
 }
useFor(heavy)