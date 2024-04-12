$(".upload-field").on("dragover", function (event) {
    event.preventDefault();
    event.stopPropagation();
});

$(".upload-field").on("dragleave", function (event) {
    event.preventDefault();
    event.stopPropagation();
});

$(".upload-field").on("drop", function (event) {
    event.preventDefault();
    event.stopPropagation();
    const files = Array.from(event.originalEvent.dataTransfer.files);
    if (!files) return new Error('Drag and drop file is missing');
    $('#upload-file').files = files[0];
    console.log($('#upload-file').files);
    console.log(files[0]);
    formData = new FormData($('form')[0]);
    formData.set('file', files[0]);
    alert('Файл успено загружен. Отправка на сервер будет реализована с помощью фреймворка React');
});