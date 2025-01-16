<template>
  <div class="flex flex-col items-center justify-center min-h-screen px-4 bg-[#eeeeee] relative overflow-hidden">
    <!-- Mensaje de bienvenida -->
    <div class="text-center mb-8 z-10">
      <h1 class="text-4xl font-bold text-[#1d1616]">Bienvenid@</h1>
      <p class="text-lg mt-4">Este es un sistema de autenticación de usuarios. <br>Elige una opción para continuar.</p>
    </div>

    <!-- Botones de inicio de sesión y registro en fila (responsive) -->
    <div class="flex flex-col sm:flex-row sm:space-x-4 sm:space-y-0 space-y-4 w-full max-w-lg justify-center items-center z-10">
      <button
        class="px-8 py-4 bg-[#1d1616] text-white rounded-lg shadow-lg hover:bg-[#8e1616] focus:outline-none focus:ring-2 focus:ring-[#8e1616] flex items-center justify-center w-full sm:w-auto"
        @click="goToLogin">
        <!-- Icono de inicio de sesión -->
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 mr-2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
        </svg>
        Iniciar Sesión
      </button>
      <button
        class="px-8 py-4 bg-[#1d1616] text-white rounded-lg shadow-lg hover:bg-[#8e1616] focus:outline-none focus:ring-2 focus:ring-[#8e1616] flex items-center justify-center w-full sm:w-auto"
        @click="goToRegister">
        <!-- Icono de registro -->
        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 5v14m7-7H5"></path>
        </svg>
        Registrarse
      </button>
    </div>

    <!-- Onda de fondo -->
    <div class="absolute bottom-0 w-full">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" class="w-full">
        <path fill="#6D2323" fill-opacity="1" d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
      </svg>
    </div>
  </div>
</template>
