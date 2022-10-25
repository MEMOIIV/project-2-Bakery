
// select span\\
$('span').eq(1).css( "backgroundColor","#218FE6" );
$('span').eq(2).css( "backgroundColor","#F44336" );
$('span').eq(3).css( "backgroundColor","#E91E63" );
$('span').eq(4).css( "backgroundColor","#9C27B0" );
$('span').eq(5).css( "backgroundColor","#673AB7" );
$('span').eq(6).css( "backgroundColor","#3F51B5" );
$('span').eq(7).css( "backgroundColor","#2196F3" );
$('span').eq(8).css( "backgroundColor","#03A9F4" );
$('span').eq(9).css( "backgroundColor","#00BCD4" );
$('span').eq(10).css( "backgroundColor","#009688" );
$('span').eq(11).css( "backgroundColor","#4CAF50" );
$('span').eq(12).css( "backgroundColor","#8BC34A" );
$('span').eq(13).css( "backgroundColor","#CDDC39" );
$('span').eq(14).css( "backgroundColor","#FFC107" );
$('span').eq(15).css( "backgroundColor","#FF9800" );
$('span').eq(16).css( "backgroundColor","#FF5722" );
$('span').eq(17).css( "backgroundColor","#795548" );
$('span').eq(18).css( "backgroundColor","#607D8B" );

// event boxNav \\ 

let boxNAVWidth = $(".boxNav").innerWidth();

// console.log(boxNAVWidth);

$(".fa-cogs").click(()=>{
    if ( $(".boxNav").css("right") == "0px" ) {
        $(".boxNav").animate({ right:-boxNAVWidth } , 700);

    }else{
        $(".boxNav").animate({ right: 0 } , 700);
    };
});

// $("html","body").click(()=>{
//     $(".boxNav").animate({ right:-boxNAVWidth } , 700);
// })

//  event change color \\ 

$('span').click(()=>{

  let currBg = $(this).css("backgroundColor");

  $('.maincurrBg').css( "color" , currBg )
})
