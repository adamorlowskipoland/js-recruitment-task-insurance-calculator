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

    "form" : document.getElementById('form'),
    "discount" : document.getElementById('discount'),
    "gainers" : document.getElementById('gainers'),

// settings values to model elements from DOM elements, and calling countingContribution function
    "setValues" : function() {
        model.rates = this.setRates(parseInt(this.ratesInput.value));
        model.paymentForms = parseInt(this.paymentFormsInput.value);
        model.discount = parseInt(this.discountInput.value);
        model.gainers = parseInt(this.gainersInput.value);
        this.countContribution();
    },

    "setRates" : function(ratesInputVal) {
        var key = true;
        switch (key) {
            case (ratesInputVal > 9000 && ratesInputVal < 10001):
                return 200;
                break;
                
            case (ratesInputVal > 6000 && ratesInputVal < 9001):
                return 180;
                break;

            case (ratesInputVal > 3000 && ratesInputVal < 6001):
                return 130;
                break;
                
            case (ratesInputVal > 1000 && ratesInputVal < 3001):
                return 70;
                break;
                
            case (ratesInputVal > 99 && ratesInputVal < 1001):
                return 20;
                break;
                
            default:
                break;
        }
        
    },

// counting contribution and calling viewer for displaying
    "countContribution" : function() {
    // for counting contribution we take a rate, substract discoung, add gainers 
        // model.contribution = (model.rates + (model.rates * (model.discount / 100)) + (model.rates * (model.paymentForms / 100)) + (model.rates * (model.gainers / 100)));
        model.contribution = (model.rates * ((100 + model.discount) / 100)) * ((100 + model.paymentForms) / 100) * ((100 + model.gainers) / 100);
        // console.log(model.contribution);
        model.contribution = Math.ceil(model.contribution);
        // console.log(model.contribution);
        viewer.displayCost(model.contribution);
    },



// relation beetwen 2 selectbox disabled/enabled 
    "checkDiscount" : function(element) {
        if (element.value !== "0") {
            controller.gainers.disabled = true;
        } else {
            controller.gainers.disabled = false;
        }
    },
    "checkGainer" : function(element) {
        if (element.value !== "0") {
            controller.discount.disabled = true;
        } else {
            controller.discount.disabled = false;
        }
    }
}

const viewer = {
// puts given value to displayOnly contribution input in a DOM
    "displayCost" : function(countedContribution) {
        controller.contributionInput.value = countedContribution;
    },

// sets event listener for submiting the form
    "eventListeners" : function() {
        const form = controller.form;
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            controller.setValues();
        });
        const discount = controller.discount;
        discount.addEventListener('change', function() {
            controller.checkDiscount(this);
        });
        const gainers = controller.gainers;
        gainers.addEventListener('change', function() {
            controller.checkGainer(this);
        });
    }
}

viewer.eventListeners();