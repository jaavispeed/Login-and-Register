<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Hash;  // Agregar esta línea


use Illuminate\Http\Request;
use App\Models\User;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        try {
            $user = new User();
            $user->name = $request->name;
            $user->lastname = $request->lastname;
            $user->email = $request->email;
            $user->phone = $request->phone;
            $user->password = bcrypt($request->password);
            $user->save();
            return response()->json(['message' => 'Usuario creado con éxito!'], 201);
        } catch (\Exception $e) {
            return response()->json(['error' => 'Error al registrar el usuario: ' . $e->getMessage()], 500);
        }
    }

    public function login(Request $request)
    {
        $credentials = $request->only('email', 'password');

        // Buscamos al usuario con el email
        $user = User::where('email', $credentials['email'])->first();

        if ($user && Hash::check($credentials['password'], $user->password)) {
            // Si la contraseña coincide con la almacenada en la base de datos
            return response()->json([
                'message' => 'Login exitoso',
                'user' => $user
            ], 200);
        } else {
            // Si la contraseña no coincide
            return response()->json(['error' => 'No autorizado'], 401);
        }
    }

}

