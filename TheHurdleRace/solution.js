function hurdleRace()
{
    const height = [1, 6, 3, 5, 2];
    const k = 4;

    height.sort( (a, b) => (a - b) );
    var ordered_height = height.sort( (a, b) => b - a );
    var tallest = ordered_height[0];
    var doses = tallest - k;

    if( doses < 0 )
    {
        doses = 0;
    }

    // Function Return
    document.getElementById('tag-p').innerHTML = doses;
}