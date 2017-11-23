var x = 5;
var y = 5;  

$(function(){
    var player = document.getElementById("player1");
    $(document).keydown(function(e){
        var top = window.getComputedStyle(player, null).getPropertyValue('top');
        var height = window.getComputedStyle(player, null).getPropertyValue('height');
        top = parseInt(top);
        height = parseInt(height);
        if(e.keyCode == 38 || e.keyCode == 87){
            console.log("up");
            top -= 15;
            top = Math.max(top, 0);
            player.style.top = top + "px";
        }
        if(e.keyCode == 40 || e.keyCode == 83){
            console.log("down");
            top += 15;
            top = Math.min(top, window.innerHeight - height);
            player.style.top = top + "px";
        }
    });
    var ball = document.getElementById("ball");
    window.setInterval(function(){
        var ballTop = window.getComputedStyle(ball, null).getPropertyValue('top');
        var ballLeft = window.getComputedStyle(ball, null).getPropertyValue('left');
        var ballWidth = window.getComputedStyle(ball, null).getPropertyValue('width');
        var ballHeight = window.getComputedStyle(ball, null).getPropertyValue('height');
        var playerTop = window.getComputedStyle(player, null).getPropertyValue('top');
        var playerLeft = window.getComputedStyle(player, null).getPropertyValue('left');
        var playerWidth = window.getComputedStyle(player, null).getPropertyValue('width');
        var playerHeight = window.getComputedStyle(player, null).getPropertyValue('height');        
        ballTop = parseInt(ballTop);
        ballLeft = parseInt(ballLeft);
        ballWidth = parseInt(ballWidth);
        ballHeight = parseInt(ballHeight);
        playerTop = parseInt(playerTop);
        playerLeft = parseInt(playerLeft);
        playerWidth = parseInt(playerWidth);
        playerHeight = parseInt(playerHeight);
        if(ballTop > window.innerHeight - 40 || ballTop < 10 || (ballTop + ballHeight > playerTop && ballLeft + ballWidth > playerLeft && ballLeft < playerLeft)){
            y *= -1;
        }
        if(ballLeft > window.innerWidth - 50){
            x *= -1;
        }
        if((ballLeft < playerLeft + playerWidth && ballLeft > playerLeft) && (ballTop > playerTop && ballTop + ballHeight < playerTop + playerHeight)){
            if(x > 0){
                x += 1;
            }
            else{
                x -= 1;
            }
            x *= -1;
            var score = parseInt(document.getElementById("score").innerHTML);
            score++;
            $("#score").text(score);
        }
        if(ballLeft <= 0){
            var pong = document.getElementById("pong");
            pong.innerHTML = "Game Over";
        }
        ballTop += y;
        ballLeft += x;
        ball.style.top = ballTop + "px";
        ball.style.left = ballLeft + "px";
    }, 50);
});
