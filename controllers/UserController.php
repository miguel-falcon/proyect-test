<?php
require_once '../models/UserModel.php';

class UserController {   
    private $apiUrl = 'https://restcountries.com/v3.1/all';

    // Método para manejar solicitudes y devolver datos JSON
    public function getCountrier() {
        $ch = curl_init($this->apiUrl);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        $response = curl_exec($ch);
    
        // Check for cURL errors
        if (curl_errno($ch)) {
            $error = curl_error($ch);
            curl_close($ch);
            header('Content-Type: application/json');
            echo json_encode(['error' => 'Failed to fetch data from API', 'details' => $error]);
            return;
        }
    
        curl_close($ch);
    
        // Return the API response
        header('Content-Type: application/json');
        echo $response;
    }
}

// Ejecuta el controlador si este archivo es accedido
$controller = new UserController();
$controller->getCountrier();
?>