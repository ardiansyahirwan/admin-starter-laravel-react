<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/**
 * Welcome route, is a inherit with laravel 11.
 */

// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });

/**
 * 
 * redirect any route to login page
 */
Route::fallback(function () {
    return redirect()->route('login');
});

/**
 * 
 * Old dashboard from laravel Breeze with React JS
 * New dashboard is new layout, choose one layout that you want
 */
Route::get('/dashboard', function () {
    // return Inertia::render('Dashboard');
    return Inertia::render('NewDashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

/**
 * 
 * Profile Page Routes
 */
Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
