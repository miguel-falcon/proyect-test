<?php
require_once '../models/UserModel.php';

class UserController {
    private $userModel;

    public function __construct() {
        $this->userModel = new UserModel();
    }

    // Método para manejar solicitudes y devolver datos JSON
    public function getUsers() {
        $users = $this->userModel->getUsers();
        header('Content-Type: application/json');
        echo json_encode($users);
    }
}

// Ejecuta el controlador si este archivo es accedido
$controller = new UserController();
$controller->getUsers();
?>