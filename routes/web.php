<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;


Route::get('/', function () {
    return view('welcome');
});

// Ruta de Registro
Route::post('/register', [AuthController::class, 'register']);
// Ruta de Login
Route::post('/login', [AuthController::class, 'login']);


Route::get('/register', function () {
    return view('welcome');
});
Route::get('/login', function () {
    return view('welcome');
});
Route::get('/profile', function () {
    return view('welcome');
});


