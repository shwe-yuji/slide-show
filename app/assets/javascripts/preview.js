$(document).on('turbolinks:load', function() { 

  function buildHTML(image){
    var html = 
      `
        <img src="${image}", class="image-upload__form__preview--image", width="150", height="100">
      `
    return html;
  };

//   アイコンをクリックして画像を選択したら発火
  $('.image-upload__form__file').on('change', function(){
    
    var image_cnt = $('.slide-show__dots__dot').length
    if (image_cnt >= 5) {
      window.alert("これ以上画像を投稿できません");
      return false;

    } else {
    //   プレビューを表示
      var file = this.files[0];
      var reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = function(){
        var image = this.result;
        $('.image-upload__form__preview').prepend(buildHTML(image));
      };
      // アイコンを削除
      $('.image-upload__form__label').hide();
    };
  })
});
