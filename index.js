(function(){
	console.log('Start');


	$('#sendAjaxBtn').click(function(){
		console.log('click btn');

		var url = "http://localhost:3000/places";
		$.ajax(url).done(ajaxDone).fail(ajaxFailed);
	});

	function ajaxDone(data, status){
		console.log('done', data);
		var places = data.places;
		console.log(places);

		for(var i=0; i<places.length; i++){
			var place = places[i];
			var newElement = "<li>" + place.nom +"</li>";
			
			if(place.nom === "IoT Valley"){
				var motDePasse = place.password;
				$('body').append('Mot de passe: ' + motDePasse);
			}

			$('#list').append(places);
		}
	};

	function ajaxFailed(){
		console.log('failed');

	};
})();