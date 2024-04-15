exports.getKey=(array,findKey,findValue) =>{
    return  Object.keys(array).find(key => array[key][findKey] === findValue);
}

exports.filterData=(array,findKey,findValue)=>{
    return array.filter(function(list){
        if(findKey!='status')
        {
            return list.receiving_unit_code==findValue;
        }else{
            return list.status==findValue;
        }
    })
}  