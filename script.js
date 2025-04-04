window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    document.getElementById('avoidance').value = urlParams.get('avoidance') || "";
    document.getElementById('physique').value = urlParams.get('physique') || "";
    document.getElementById('color').value = urlParams.get('color') || "";
    document.getElementById('head').value = urlParams.get('head') || "";
    document.getElementById('antenna').value = urlParams.get('antenna') || "";
    document.getElementById('features').value = urlParams.get('feature') || "";

    const qrDataURL = urlParams.get('qrData');
    if (qrDataURL) {
        const qrImage = new Image();
        qrImage.src = qrDataURL;
        qrImage.onload = function() {
            document.getElementById('qrImageContainer').appendChild(qrImage);
        };
    }
};
