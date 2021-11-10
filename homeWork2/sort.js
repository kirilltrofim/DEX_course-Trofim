const sort = (data) => {
    return data.sort((a,b) =>{
        if(a.toLowerCase() < b.toLowerCase()) return -1;
        else if(a.toLowerCase() > b.toLowerCase()) return 1;
        else return 0;
    });
};