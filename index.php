<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        table, th, td{
            border: 1px solid black;
        }
    </style>
</head>
<body>
    <?php
    $barang = array("Tepung","gula","pisang","terigu","burung");
    $stok = array("20","25","20","30","0");
    ?>
    <table style="width: 100;">
        <tr>
            <th>No</th>
            <th>Nama Barang</th>
            <th>Berat(Kg)</th>
            <th>Berat(gram)</th>
            <th>Berat(miligram)</th>
            <th>Stok</th>
        </tr>
        <tr>
            <td>1</td>
            <td>Tepung</td>
            <td>1</td>
            <td>1000</td>
            <td>1000000</td>
            <td>20</td>
        </tr>
        <tr>
            <td>2</td>
            <td>gula</td>
            <td>5</td>
            <td>5000</td>
            <td>5000000</td>
            <td>25</td>
        </tr>
        <tr>
            <td>3</td>
            <td>pisang</td>
            <td>2</td>
            <td>2000</td>
            <td>2000000</td>
            <td>20</td>
        </tr>
        <tr>
            <td>4</td>
            <td>terigu</td>
            <td>7</td>
            <td>7000</td>
            <td>7000000</td>
            <td>30</td>
        </tr>
        <tr style="background: red;">
            <td>5</td>
            <td>burung</td>
            <td>1</td>
            <td>1000</td>
            <td>1000000</td>
            <td>0</td>
        </tr>
    </table>
</body>
</html>