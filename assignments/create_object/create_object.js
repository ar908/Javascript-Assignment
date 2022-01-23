function CreateObject(arr) {
    // Write your code here
    var temp = {};
    for(var i = 0; i<arr.length; i+=2){
        temp[arr[i]]=arr[i+1];

    }
    return temp;
}

module.exports = CreateObject;
