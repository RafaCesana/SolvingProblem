function minimalHeaviestSetA()
{
    const arr = [5, 3, 2, 4, 1, 2];

    // Putting array in decreasing order
    var arrDecrOrder = arr.sort( (a, b) => b - a );

    // Calculating array sum
    var sumArr = 0;
    for( var i=0 ; i<arrDecrOrder.length ; i++ )
    {
        sumArr = sumArr + arrDecrOrder[i];
    }
    
    var aux = 0;
    var arrSetA = new Array();
    var R = '';
    for( var i=0 ; i<arrDecrOrder.length ; i++ )
    {
        arrSetA[i] = arrDecrOrder[i];
        aux = aux + arrDecrOrder[i];
        if( aux > (sumArr - aux) )
        {
            R = arrSetA.sort( (a, b) => a - b );
            break;
        }
    }
    
    // Function Return (origginaly the arr is the function parameter and a new array is returned)
    document.getElementById('tag-p').innerHTML = R;
}