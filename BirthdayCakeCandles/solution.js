function birthdayCakeCandles()
{
    const arr = [3, 9, 9, 2, 1, 3];

    // Putting array in decreasing order
    var arrDecrOrder = arr.sort( (a, b) => b - a );
    var MaxElement = arrDecrOrder[0];

    var n = 0;
    for( var i=0 ; i<arr.length ; i++ )
    {
        if( MaxElement == arrDecrOrder[i] )
        {
            n = n + 1;
        }
    }
    R = n;

    // Function Return (origginaly the arr is the function parameter and a new array is returned)
    document.getElementById('tag-p').innerHTML = R;
}