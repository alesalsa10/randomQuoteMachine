let quotes = [
    ['Things work out best for those who make the best of how things work out.', 'John Wooden'],
    ['If you are not willing to risk the usual you will have to settle for the ordinary.', 'Jim Rohn'],
    ['All our dreams can come true if we have the courage to pursue them.','Walt Disney'],
    ['Success is walking from failure to failure with no loss of enthusiasm.','Winston Churchill'],
    ["Opportunities don't happen, you create them.", 'Chris Grosser']
]

function chooseColor(){
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return 'rgb(' + r + ',' + g + ',' + b + ')';
}

function chooseQuote(){
    $('input').on('click', function(){
        let chosenQuote = quotes[Math.floor(Math.random() * quotes.length)];
        let quote = chosenQuote[0];
        let author = chosenQuote[1];
        let color = chooseColor();
        //$('p').text(quote);
        $('p').hide().text(quote).fadeIn('slow');
        $('footer').hide().text(author).fadeIn('slow');
        $('body').animate({backgroundColor: color}, 'slow');
        $('.value').animate({color: color}, 'slow');
        $(this).animate({backgroundColor: color}, 'fast');      
    })
}
chooseQuote();
$('input').click(); //start the page with a quote already loaded

