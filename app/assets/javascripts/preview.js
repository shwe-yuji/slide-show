$(document).on('turbolinks:load', function() { 

  function buildHTML(image){
    var html = 
      `
        <img src="${image}", class="image-upload__form__preview--image", width="150", height="100">
      `
    return html;
  };

  $('.image-upload__form__file').on('change', function(){
    var file = this.files[0]
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function(){
      var image = this.result;
      $('.image-upload__form__preview').prepend(buildHTML(image));
    }
    // アイコンを削除
    $('.image-upload__form__label').hide();
  })
});
