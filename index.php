<?php include('./database/connection.php');
$sql = 'SELECT * FROM patients';
$result = $conn->query($sql);?>

<?php include('./partial/header.php'); ?>
<div id="form-container">
    <h1 id="h1">List of Patients <a href="patient.php" class="btn-add">Ajouter un nouveau +</a></h1>
    <table class="table" id="table">
        <thead id="thead">
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
        <tbody id="tbody">
        <?php while($row = $result->fetch_assoc()) { ?>
            <tr>
                <td scope="row"><?= $row["id"]; ?></td>
                <td ><?= $row["reference"]; ?></td>
                <td><?= $row["nom"]; ?></td>
                <td><?= $row["prenom"]; ?></td>
                <td><?= $row["cin"]; ?></td>
                <td><?= $row["mutuelle"]; ?></td>
                <td><?= $row["tel"]; ?></td>
                <td>
                    <div  id="btn-group"  role="group" aria-label="">
                        <a href="patient.php?id=<?= $row["id"]; ?>" type="button" class="btn btn-info">Edit</button>
                        <a href="database/delete.php?id=<?= $row["id"]; ?>" type="button" class="btn btn-danger">Delete</a>
                    </div>
                </td>
            </tr>
            <?php } ?>
        </tbody>
        <?php
        } else {
            echo "No Patient";
        } ?>
    </table>
</div>
<?php include('./partial/footer.php'); ?>
<script src="script.js/color.js"></script>
