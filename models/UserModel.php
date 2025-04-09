<?php
class UserModel {
    private $dataFile = __DIR__ . '/../data/users.json';

    // Método para obtener usuarios
    public function getUsers() {
        if (file_exists($this->dataFile)) {
            $json = file_get_contents($this->dataFile);
            return json_decode($json, true); // Decodifica el JSON como un arreglo
        }
        return [];
    }
}
?>