<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;


Route::get('/', function () {
    return view('welcome');
});

// Ruta de registro
Route::post('/register', [AuthController::class, 'register']);

Route::get('/register', function () {
    return view('welcome'); // Asegúrate de que esta vista sirva tu aplicación Vue
});

Route::get('/login', function () {
    return view('welcome'); // Asegúrate de que esta vista sirva tu aplicación Vue
});

