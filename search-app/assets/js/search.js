$(document).ready(()=>{
	console.log("ready")

	$('#searchText').on('keyup', ()=>{
		console.log("on change")
		let searchText = $('#searchText').val();
		console.log(searchText)
    if(searchText.length > 1)
	   	searchAPI(searchText)
    else 
       $('#list').empty();

	})


  function getTemplate(model) {
    return `<div>
    <h4>`+ model.target+`</h4>
  </div>`
  }

	function searchAPI(searchText) {
     $('#list').empty();
     console.log("searchText")
      $.ajax({
          type: "post",
          url: "http://localhost:3000/searchAPI",
          headers: { 'Content-Type': 'application/json' },
          data: JSON.stringify({
              "searchText": searchText
          }),
          success: function(response) {
              console.log(JSON.stringify(response));
              $('#list').empty();
              $('#list').append(getTemplate(response.data))
          }
      });
	}
})