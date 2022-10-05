function getMoneySpent()
{
    // Function Parameter
    b = 10;
    keyboards = [3, 1];
    drives = [5, 8, 2];

    var sum = 0;
    var max = 0 ;
    var R = 0;
    for( var i=0 ; i<keyboards.length ; i++ )
    {
        for( var j=0 ; j<drives.length ; j++ )
        {
            sum = keyboards[i] + drives[j]
            if( sum <= b && sum > max )
            {
                R = sum;
                max = sum;
            }
        }
    }
    if( R==0 )
    {
        R = -1;
    }
    
    // Function Return
    // console.log(R);
    document.getElementById('tag-p').innerHTML = R;
}
