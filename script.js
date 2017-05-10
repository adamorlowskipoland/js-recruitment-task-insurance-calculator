const model = {
    "contributionInput" : document.getElementById('contribution'),
    "ratesInput" : document.getElementById('rates'),
    "paymentFormsInput" : document.getElementById('paymentForms'),
    "discountInput" : document.getElementById('discount'),
    "gainersInput" : document.getElementById('gainers')
}






const controller = {
    "rates" : 0,
    "paymentForms" : 0,
    "discount" : 0,
    "gainers" : 0,
    "contribution" : 0,

    "setValues" : function() {
        this.rates = parseInt(model.ratesInput.value);
        this.paymentForms = parseInt(model.paymentFormsInput.value);
        this.discount = parseInt(model.discountInput.value);
        this.gainers = parseInt(model.gainersInput.value);


        this.countContribution();
    },

    "countContribution" : function() {

        this.contribution = (this.rates + (this.rates * (this.paymentForms / 100)) + (this.rates * (this.discount / 100)) + (this.rates * (this.gainers / 100)));
        console.log(this.contribution);
        // (this.rates * (100 + this.discount)) * (100 + this.gainers)



        this.displayCost();
    },

    "displayCost" : function() {
        model.contributionInput.value = this.contribution;
        console.log(this.rates);
        console.log(this.paymentForms);
        console.log(this.discount);
        console.log(this.gainers);
    }
}






const viewer = {
    
    "eventListeners" : function() {
        const form = document.getElementById('form');
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            controller.setValues();


        });
    }
}


viewer.eventListeners();