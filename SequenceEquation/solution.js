function permutationEquation()
{
    const p = [5, 2, 1, 3, 4]

    // Adding 0 at the beginning of array
    p.unshift(0)

    var R = []
    var y = 0
    for(var i=1 ; i<p.length+1 ; i++)
    {
        for( var y=0 ; y<p.length ; y++ )
        {
            if( p[p[y]] == i )
            {
                R.push(y)
            }
        }
    }

    // Function Return
    document.getElementById('tag-p').innerHTML = R
}