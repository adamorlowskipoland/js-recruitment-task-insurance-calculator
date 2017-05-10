const model = {
    "rates" : 0,
    "paymentForms" : 0,
    "discount" : 0,
    "gainers" : 0,
    "contribution" : 0,
}

const controller = {
// DOM elements
    "contributionInput" : document.getElementById('contribution'),
    "ratesInput" : document.getElementById('rates'),
    "paymentFormsInput" : document.getElementById('paymentForms'),
    "discountInput" : document.getElementById('discount'),
    "gainersInput" : document.getElementById('gainers'),

// settings values to model elements from DOM elements, and calling countingContribution function
    "setValues" : function() {
        model.rates = parseInt(this.ratesInput.value);
        model.paymentForms = parseInt(this.paymentFormsInput.value);
        model.discount = parseInt(this.discountInput.value);
        model.gainers = parseInt(this.gainersInput.value);
        this.countContribution();
    },

// counting contribution and calling viewer for displaying
    "countContribution" : function() {
    // for counting contribution we take a rate, substract discoung, add gainers 
        // model.contribution = (model.rates + (model.rates * (model.discount / 100)) + (model.rates * (model.paymentForms / 100)) + (model.rates * (model.gainers / 100)));
        model.contribution = (model.rates * ((100 + model.discount) / 100)) * ((100 + model.paymentForms) / 100) * ((100 + model.gainers) / 100);
        console.log(model.contribution);
        model.contribution = Math.ceil(model.contribution);
        console.log(model.contribution);
        viewer.displayCost(model.contribution);
    }
}

const viewer = {
// puts given value to displayOnly contribution input in a DOM
    "displayCost" : function(countedContribution) {
        controller.contributionInput.value = countedContribution;
    },

// sets event listener for submiting the form
    "eventListeners" : function() {
        const form = document.getElementById('form');
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            controller.setValues();
        });
    }
}

viewer.eventListeners();