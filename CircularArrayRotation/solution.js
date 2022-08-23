function circularArrayRotation()
{
    // Function Parameters
    const a = [3, 4, 5];
    const k = 2;
    const queries = [1, 2];

    var LastArrayElementRemoved = '';
    var NewArrayFormed          = '';

    // Times that array right rotation will happen
    for( var i=0 ; i<k ; i+=1 )
    {
        LastArrayElementRemoved = a.pop();
        NewArrayFormed = a.unshift(LastArrayElementRemoved);
    }

    // Creating a new array using queries array elements as indexes
    var index = '';
    var aR = [];
    for( var j=0 ; j<queries.length ; j+=1 )
    {
        index = queries[j];
        aR.push(a[index]);
    }
    
    // Function Return
    document.getElementById('tag-p').innerHTML = aR;
}