<?php

// echo $_POST['thing'];


$json_todolist = file_get_contents('../data/todolist.json');


$todolist_array = json_decode($json_todolist);

$todolist_array[] = [
    "name" => $_POST['thing'],
    "done" => false,
];


// var_dump($todolist_array);

$json_result = json_encode($todolist_array);

file_put_contents('../data/todolist.json', $json_result);


header('Content-Type: application/json');

echo $json_result;
