<?php

//collego al file php il file json dentro la cartella data per poter leggere e stampare l array della todoList
$json_list_content = file_get_contents('../data/todolist.json');


//questo percorso avvisa il browser che riceverà un file json
header('Content-Type: application/json');


//stampiamo a schermo l array
echo $json_list_content;
