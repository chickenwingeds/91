function adduser(){

    player1name = document.getElementById("Player1name").value;

    player2name = document.getElementById("Player2name").value;

    localStorage.setItem("player1_name" , player1name);
    localStorage.setItem("player2_name" , player2name);

    window.location = "quiz_game.html";
}

