function encryption(s)
{
    // Taking out string blank spaces
    var string = s.replace(/ /g,'');

    // Finding the number of rows and columns
    var L = string.length;
    var sqrt = Math.sqrt(L);
    var bottom  = Math.floor(sqrt);
    var ceil = Math.ceil(sqrt);

    // If needed one more row to the rest of characters
    if( (bottom*ceil) < L )
    {
        bottom = bottom + 1;
    }

    // Separating string in rows
    var a = new Array();
    var counter = 0;
    var aString = string.split('');
    for( var i=0 ; i<bottom ; i++ )
    {
        a[i] = new Array();
        for( var j=0 ; j<ceil ; j++ )
        {
            a[i].push(aString[counter]);
            counter++;
        }
    }
    
    // Encryption
    var z = 0;
    var R = '';
    for( var m=0 ; m<ceil ; m++ )
    {
        for( var k=0 ; k<a.length ; k++ )
        {
            for( var l=0 ; l<a[k].length ; l++ )
            {
                if( l == z )
                {
                    if( a[k][l] )
                    {
                        R += a[k][l];
                    }
                    else
                    {
                        R += '';
                    }
                }
            }
        }
        R += ' ';
        z++;
    }

    R = R.slice(0,-1);
    
    return R;
}