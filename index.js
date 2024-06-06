const express = require('express');
const app = express();

app.get("/api", (req, res, next) => {
    res.json({"message": "Hello, World!"});
});

// New route to serve files from Azure Blob Storage
app.get('/pub/:filename', (req, res) => {
    const filename = req.params.filename;
    const storageAccountName = 'titasbs';
    const containerName = 'sharedfiles';
    const blobUrl = `https://${storageAccountName}.blob.core.windows.net/${containerName}/${filename}`;

    // Redirect to the blob URL
    res.redirect(blobUrl);
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});