function miniMaxSum()
{
    // Function Parameter
    const arr = [1, 2, 3, 4, 5];

    arr.sort( (a, b) => a - b ); 
    var Min = 0;
    var Max = 0;

    for( var i=0 ; i<arr.length ; i++ )
    {
        if( i<4 )
        {
            Min = Min + arr[i];
        }
        if( i>0 )
        {
            Max = Max + arr[i];
        }
    }

    var R = Min+' '+Max;

    // Function Return
    // console.log(R);
    document.getElementById('tag-p').innerHTML = R;
}