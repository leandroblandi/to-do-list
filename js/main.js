$(() => {
  $(".entry-item").focus();
  function addNewItem() {
    var eachItem = $(".entry-item").val();
    $("#list").append(
      `<li>${eachItem}<button class='delete'><i class="fas fa-trash"></i></button></li>`
    );
    $(".entry-item").val("");
  }
  function deleteAnItem(e, item) {
    e.preventDefault();
    $(item).parent().remove();
  }
  $(".entry-item").on("keypress", (e) => {
    if(e.keyCode == 13 && $(".entry-item").val() != "") {
      addNewItem();
    }
  });
  $(".add-item").on("click", (e) => {
    e.preventDefault();
    addNewItem();
  });
  $("#list").on("click", ".delete", function (e) {
    var item = this;
    deleteAnItem(e, item);
  });
});
