function designerPdfViewer(h, word)
{
    const width = word.length;
    const word_characters = word.toLowerCase().split("");
    const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

    var heights = new Array;
    var tallest_letter = 0;
    var area = 0;

    for( var i=0 ; i<alphabet.length ; i++ )
    {
        for( var j=0 ; j<word_characters.length ; j++ )
        {
            if( word_characters[j] == alphabet[i] )
            {
                heights.push(h[i]);
            }
        }
    }

    heights.sort( (a, b) => b - a );
    tallest_letter = heights[0];
    area = tallest_letter*width;

    return area;
}