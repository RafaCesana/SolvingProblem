function gradingStudents()
{
    // Function Parameter
    const grades = [73, 67, 38, 33];
    var R = '';

    for( var i=0 ; i<grades.length ; i+=1 )
    {
        if( grades[i] >= 38 )
        {
            let RoundedNumber = _round(grades[i]);
            if( (RoundedNumber - grades[i]) < 3 )
            {
                grades[i] = RoundedNumber;
            }
        }
    }

    R = grades;
     
    function _round(n)
    {
        let r = Math.ceil(n / 5) * 5;
        return r;
    }

    // Function Return
    document.getElementById('tag-p').innerHTML = R;
}