<?php

echo $_POST['thing'];


$json_todolist = file_get_contents('../data/todolist.json');


$todolist_array = json_decode($json_todolist);
var_dump($todolist_array);
