function utopianTree()
{
    var NumOfGrowthCycles = 4;
    var H = 1;
    var R = 0;
    var spring = true;

    for( var i=0 ; i<NumOfGrowthCycles ; i++ )
    {
        if( spring )
        {
            H = 2 * H;
            spring = false;
        }
        else
        {
            // Summer
            H = H + 1;
            spring = true;
        }
    }

    // Function Return
    document.getElementById('tag-p').innerHTML = H;
}