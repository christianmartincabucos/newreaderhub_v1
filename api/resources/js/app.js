
var maxCoinTime = 40;
var count;
var credits = 0.00;
var s_beep;
var s_error;
var s_coindrop;
var s_pay;

var tts_hello;
var tts_after;
var tts_goodbye;
var tts_bg;

$(function() {
	if(credits>0)
	{
//		startCoin();
	}

	refreshStatus();

	setInterval(function(){
		refreshStatus();
	}, 10000)

	s_beep = new Howl({
		src: ['/sounds/beep.mp3'],
		volume: 0.1
	});

        s_error = new Howl({
                src: ['/sounds/error.mp3'],
                volume: 0.8
        });

        s_coindrop = new Howl({
                src: ['/sounds/coindrop.mp3'],
                volume: 0.8
        });
        s_pay = new Howl({
                src: ['/sounds/pay.mp3'],
                volume: 0.8
        });

		tts_hello = new Howl({
		                src: ['/sounds/hello.mp3'],
		                volume: 0.8
        });
	tts_after = new Howl({
		                src: ['/sounds/insert.mp3'],
		                volume: 0.8
        });
	tts_goodbye = new Howl({
		                src: ['/sounds/goodbye.mp3'],
		                volume: 0.8
        });

					tts_hello.play();

			tts_after.on('end', function(){
				s_beep.volume(1.0);
			});

			tts_hello.on('end', function(){
				                                tts_bg.volume(1.0);
                                			});


		        tts_bg = new Howl({
	                	                src: ['/sounds/bg.mp3'],
                	        	        volume: 0.1,
			autoplay: true
	        });
	});

function refreshStatus()
{
                var request = $.ajax({
                        url: "/welcome/getStatus",
                        method: "POST",
                        data: null
                });
		request.done(function( jsonObj ) {
                        $('#statInfo').html(jsonObj.statusTxt)
                        checkButtons(jsonObj);
			if(jsonObj.hideCoin==1)
			{
				$('.btn-insert').hide();
			} else
			{
				$('.btn-insert').show();
			}
                });
                request.fail(function( jqXHR, textStatus ) {
                });
}

function mute()
{
	if(tts_bg.playing())
	{
		tts_bg.pause();
	} else
	{
		tts_bg.play();
	}
}

function startCoin(id)
{
	if(!id)
	{
		id = '';
		var data = null;
	} else
	{
		var data = $('#frmELoad').serialize();
	}

	$('.start-coin').hide();
	i = 0;
	//$('#countdown').html((maxCoinTime));

	var request = $.ajax({
	        url: "/welcome/startCoin/"+id,
        	method: "POST",
		data: data
        });

        request.done(function( jsonObj ) {
		if(jsonObj.status=='ok')
		{
			$('#modalLoadNumber').modal('hide');
						tts_hello.stop();
			tts_after.play();
			                                tts_bg.volume(0.1);

						i = jsonObj.coinTimer;
			console.log('Setting coinTimer = '+(maxCoinTime-i));
			$('#countdown').html((maxCoinTime-i));
			$('#alert').html( "Insert your coins now." );
			$('.start-coin').hide();
			$('#divStat').hide();
			$('.end-coin').show();
			$('.countdown').show();
			$('.credits').show();
			recursive();
		} else
		{
			if(jsonObj.message!='')
			{
				$('.error-alert').html('<div class="alert alert-danger" role="alert">'+jsonObj.message+'</div>');
				$('#alert').html('<div class="alert alert-danger" role="alert">'+jsonObj.message+'</div>');
			} else
			{
				$('#alert').html('<div class="alert alert-danger" role="alert">An existing customer is still paying. Please try again soon.</div>');
				$('.error-alert').html('<div class="alert alert-danger" role="alert">An existing customer is still paying. Please try again soon.</div>');
			}
			setTimeout(function(){
				$('#alert').html("");
				$('.error-alert').html("");
				$('.start-coin').show();
			}, 5000);
			s_error.play();
		}
        });

        request.fail(function( jqXHR, textStatus ) {
		$('.start-coin').show();
        });

}

var i = 0;
var timeCounter;
function recursive()
{
	$( "#done" ).focus();
	beep();
	getCredits();
	clearTimeout(timeCounter);
        timeCounter = setTimeout(function(){
             i++;
                $('#countdown').html((maxCoinTime-i));
                console.log('timer:' + (maxCoinTime-i));
             if (i <= maxCoinTime) recursive();
        }, 1000);

	if(i >= maxCoinTime)
	{
		endCoin();
	}
}

function endCoin()
{
	clearTimeout(timeCounter);
	$('#alert').html( 'Processing, please wait... <div class="progress"><div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style="width: 100%;"></div></div>' );

	var request = $.ajax({
                url: "/welcome/endCoin/",
                method: "POST",
                data: null
        });

        request.done(function( jsonObj ) {
		setTimeout(function(){
			window.location.reload();
		}, 1000);
        });


//        $.get( "/welcome/endCoin", function( data ) {
          //$( count ).html( data );
          //$('#alert').html( "Timeout." );
//                        setTimeout(function(){
                                //window.location.reload();
				//window.close();
				//window.location.replace("http://10.0.0.1");
				//window.location.href = 'http://10.0.0.1';
				//window.location.href = "";
//				$('#alert').html('<a href="http://10.0.0.1" class="btn btn-sm btn-success">Check Credits</a>');
//                        }, 1000);

//        });
	//$('.start-coin').show();
        $('.end-coin').hide();
	$('.countdown').hide();
	$('.credits').hide();
	//s_pay.play();
		tts_after.stop();
	tts_goodbye.play();
        }

function getCredits()
{
	if(document.visibilityState == "hidden")
	{
		return false;
	}
	$.get( "/welcome/getCredits", function( data ) {
		cCredit = $("#credits").html();
		if(cCredit/1!=data/1)
		{
			i = 0;
			console.log('not eq');
			s_coindrop.play();
		}
		$( "#credits" ).html( data );
	});
}

function beep() {
	s_beep.play();
}

function useVoucher()
{
	var data = $('#frmUseVoucher').serialize();
        var request = $.ajax({
                url: "/welcome/useVoucher/",
                method: "POST",
                data: data
        });
                request.done(function( jsonObj ) {
                        if(jsonObj.status=='ok')
                        {
				window.location.reload();
				s_pay.play();
                        } else
                        {
				$('#alert').html('<div class="alert alert-danger" role="alert">'+jsonObj.message+'</div>');
				setTimeout(function(){
                	                $('#alert').html("");
        	                }, 5000);
	                        s_error.play();
                        }
                });

         request.fail(function( jqXHR, textStatus ) {
         });
}

function checkButtons(jsonObj)
{
	if(jsonObj.pause)
	{
		$('#pauseButton').show();
	} else
	{
		$('#pauseButton').hide();
	}

	if(jsonObj.resume)
        {
                $('#resumeButton').show();
        } else
        {
                $('#resumeButton').hide();
        }
}

function pause()
{
                var request = $.ajax({
                        url: "/welcome/pause",
                        method: "POST",
                        data: null
                });
                request.done(function( jsonObj ) {
			if(jsonObj.status=='ok')
			{
                        	checkButtons(jsonObj);
			}
                });
                request.fail(function( jqXHR, textStatus ) {
                });
}

function resume()
{
                var request = $.ajax({
                        url: "/welcome/resume",
                        method: "POST",
                        data: null
                });
                request.done(function( jsonObj ) {
			if(jsonObj.status=='ok')
                        {
	                        checkButtons(jsonObj);
				window.location.reload();
			}
                });
                request.fail(function( jqXHR, textStatus ) {
                });
}
