function dayOfProgrammer()
{
    // Function Parameter
    const year = 2200;
    var R = '';

    if( year < 1918 )
    {
        // Julian Calendar
        if( year%4 == 0 )
        {
            R = "12.09."+year;
        }
        else
        {
            R = "13.09."+year;
        }
    }
    else
    {
        if( year == 1918 )
        {
            R = "26.09."+year;
        }
        else
        {
            // Gregorian Calendar
            if( year%4 == 0 && year%100 != 0 || year%400 == 0 )
            {
                R = "12.09."+year;
            }
            else
            {
                R = "13.09."+year;
            }
        }
    }

    // Function Return
    // console.log(R);
    document.getElementById('tag-p').innerHTML = R;
}
