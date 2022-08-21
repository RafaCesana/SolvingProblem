function timeConversion()
{
    const s = '12:59:59PM';

    // Separating time parts
    var timeTermination = s.substring(s.length - 2);
    var time = s.replace(timeTermination,'',s);
    var hour = time.split(':',1);
    var R = '';
    
    if( timeTermination == 'PM' )
    {
        // Eliminating 0 from 01 to 09.
        var firstCaractere = time.substring(0,1);
        if( firstCaractere == '0' )
        {
            time = time.replace(firstCaractere,'',time);
        }

        hour = time.split(':',1);
        var n = 12;
        for( var i=1 ; i<13 ; i++ )
        {
            if( hour == i )
            {
                n = n + i;
                if( n == 24 )
                {
                    n = 12;
                }
            }
        }
        R = time.replace(hour, n, time);
    }
    else
    {
        if( hour == 12 )
        {
            R = time.replace(hour, '00', time);
        }
        else
        {
            R = time;
        }
    }
    
    // Function Return
    document.getElementById('tag-p').innerHTML = R;
}