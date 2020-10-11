<?php

use Twig\Environment;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Error\SyntaxError;
use Twig\Loader\FilesystemLoader;

require_once __DIR__ . '/vendor/autoload.php';

$loader = new FilesystemLoader(__DIR__ . '/src/templates');
$twig = new Environment($loader);

try {
    echo $twig->render('index.html.twig', [
        'name' => 'Boss',
        'styles' => [
            ['href' => 'src/css/style.css'],
        ],
        'javascripts' => [
            ['src' => 'src/js/game_utils.js'],
            ['src' => 'src/js/game_events.js'],
        ],
    ]);
} catch (LoaderError | RuntimeError | SyntaxError $e) {
}
