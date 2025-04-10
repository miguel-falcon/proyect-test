<?php
require_once '../models/UserModel.php';

class UserController {   
    private $apiUrl = 'https://jsonplaceholder.typicode.com/users';

    // Método para manejar solicitudes y devolver datos JSON
    public function getUsers() {
        $ch = curl_init($this->apiUrl);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        $response = curl_exec($ch);
        curl_close($ch);

        header('Content-Type: application/json');
        echo $response;
    }
}

// Ejecuta el controlador si este archivo es accedido
$controller = new UserController();
$controller->getUsers();
?>