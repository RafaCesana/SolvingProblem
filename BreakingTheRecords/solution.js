function breakingRecords()
{
    const scores = [10, 5, 20, 20, 4, 5, 2, 25, 1];
    var R = [];
    var n = scores[0];
    var m = scores[0];
    var NumOfTimesBreakingRecord = 0;
    var NumOfTimesBreakingLeastRecord = 0;

    for( var i=0 ; i<scores.length ; i++ )
    {
        if( scores[i] > n )
        {
            NumOfTimesBreakingRecord++;
            n = scores[i];
        }
        if( scores[i] < m )
        {
            NumOfTimesBreakingLeastRecord++;
            m = scores[i];
        }
    }

    R.push(NumOfTimesBreakingRecord);
    R.push(NumOfTimesBreakingLeastRecord);
    
    // Function Return
    document.getElementById('tag-p').innerHTML = R;
}