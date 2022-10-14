function beautifulDays(i, j, k)
{
    const interval = j-i+1;
    var R = 0;
    var reverse = '';
    var calc = 0;

    for( var c=0 ; c<interval ; c++ )
    {
       reverse = Number(String(i).split('').reverse().join(''));
       calc = (i-reverse)/k;

       if( Number.isInteger(calc) )
       {
            R++;
       }
       i = i+1;
    }

    return R;
}