<?php include('./partial/header.php'); ?>
<?php include('./database/connection.php');

$sql = 'SELECT * FROM medicaments';
$result = $conn->query($sql);
?>
        <div id="form-container" class="form-container">
        <h1 id="h1">List of Patients <a href="medicament.php" class="btn-add">Ajouter un nouveau +</a></h1>
            <table class="table" id="table">
                <thead id="thead">
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <?php
                if ($result->num_rows > 0) { ?>
                <tbody id="tbody">
                <?php while($row = $result->fetch_assoc()) { ?>
                    <tr>
                        <td scope="row"><?= $row['name'] ?? '' ?></td>
                        <td><?= $row['description'] ?? '' ?></td>
                        <td>
                        <div  id="btn-group">
                            <a href="med_edit.php?id=<?= $row['id'] ?>" class="btn btn-warning">Edit</a>
                            <a href="med_delete.php?id=<?= $row['id'] ?>" class="btn btn-danger">Delete</a>
                        </div>
                        </td>
                    </tr>
                <?php } ?>
                </tbody>
                <?php } ?>
            </table>
        </div>
        <?php include('./partial/footer.php'); ?>
   <script src="script.js/color.js"></script>
</div>
</body>
</html>
