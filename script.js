const model = {

    "contributionInput" : document.getElementById('contribution'),
}






const controller = {
    "rates" : 0,
    "discount" : 0,
    "gainers" : 0,

    "displayCost" : function() {
        this.rates = document.getElementById('rates').value;
        model.contributionInput.value = this.rates;
    }
}






const viewer = {
    "eventListeners" : function() {
        const form = document.getElementById('form');
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            controller.displayCost();


        });
    }
}


viewer.eventListeners();