<?php include('connection.php');


if (isset($_POST['submit'])) {
    # code...
$username = htmlspecialchars(strtolower(trim($_POST["search"])));
$sql = 'SELECT * FROM patients WHERE nom="'.$username.'" ';
$result = $conn->query($sql);
}

?>
   <link rel="stylesheet" href="../bootstrap/css/bootstrap.min.css">
   <link rel="stylesheet" href="../assets/css/style.css">
<?php include('./../partial/header.php'); ?>
    <div class="form-container">
<table class="table">
        <thead>
            <tr>
                <th>Id</th>
                <th>Reference</th>
                <th>Nom</th>
                <th>Prenom</th>
                <th>CIN</th>
                <th>Mutuelle</th>
                <th>Tel</th>
                <th>Action</th>
            </tr>
        </thead>
        <?php
        if ($result->num_rows > 0) { ?>
        <tbody>
        <?php while($row = $result->fetch_assoc()) { ?>
            <tr>
                <td scope="row"><?= $row["id"]; ?></td>
                <td><?= $row["reference"]; ?></td>
                <td><?= $row["nom"]; ?></td>
                <td><?= $row["prenom"]; ?></td>
                <td><?= $row["cin"]; ?></td>
                <td><?= $row["mutuelle"]; ?></td>
                <td><?= $row["tel"]; ?></td>
                <td><div class="btn-group" role="group" aria-label="">
                <a href="patient.php?id=<?= $row["id"]; ?>" type="button" class="btn btn-info">Edit</button>
                <a href="database/delete.php?id=<?= $row["id"]; ?>" type="button" class="btn btn-danger">Delete</a>
               </td>
        </tr>
        <?php } ?>
        </tbody>
    
        <?php
        } else {
            echo "No Patient";
            header("Location: http://localhost/pr/i.php");
        } ?>
        </table>
    </div>  