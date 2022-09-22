function bonAppetit()
{
    // Function Parameter
    const bill = [3, 10, 2, 9]
    const k = 1
    const b = 7

    var ate_togheter = 0
    var annas_part = 0
    var difference = 0
    var R = ''
    for( var i=0 ; i<bill.length ; i++ )
    {
        if( i != k )
        {
            ate_togheter = ate_togheter + bill[i]
        }
    }

    annas_part = ate_togheter/2
    difference = b - annas_part
    if( difference != 0 )
    {
        R = difference
    }
    else
    {
        R = "Bon Appetit"
    }

    // Function Return
    // console.log(R);
    document.getElementById('tag-p').innerHTML = R;
}