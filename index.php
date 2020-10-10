<?php

require_once __DIR__ . '/vendor/autoload.php';

$loader = new \Twig\Loader\FilesystemLoader(__DIR__ . '/src/templates');
$twig = new \Twig\Environment($loader);

echo $twig->render('index.html.twig', [
    'name' => 'Boss',
    'styles' => [
        ['href' =>  'src/css/style.css'],
    ],
    'javascripts' => [
        [ 'src' => 'src/js/game.js'],
    ],
]);
