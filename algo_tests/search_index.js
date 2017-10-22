function search_index(tab, num, start){
    let tab1 = tab.slice(0,parseInt(tab.length/2));
    let tab2 = tab.slice(parseInt(tab.length/2),tab.length);

    if(tab2[0] == num)
        return tab1.length+start;
    else if(tab1[tab1.length-1]==num)
        return tab1.length-1+start;
    else if((tab[0]>num) ||(( tab2[0] > num ) && ( tab1[tab1.length-1]<num ))||(tab[tab.length-1]<num) )
        return -1;
    else if( tab1[tab1.length-1]<num )   
        return search_index(tab2, num, tab1.length+start);
    else if( tab2[0] > num )
        return search_index(tab1, num, start);       

}


let tab = [3, 7, 9, 12, 13, 14, 15, 16, 18, 19, 20];
console.log("Looking in "+tab);
console.log("10 => "+search_index(tab, 10, 0));
console.log("3 => "+search_index(tab, 3, 0));
console.log("12 => "+search_index(tab, 12, 0));
console.log("15 => "+search_index(tab, 15, 0));
console.log("30 => "+search_index(tab, 30, 0));