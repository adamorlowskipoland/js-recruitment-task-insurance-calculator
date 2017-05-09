const model = {

}

const viewer = {
    "eventListeners" : function() {
        const form = document.getElementById('form');
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            console.log(e);
        });
    }
}

const controller = {

}

viewer.eventListeners();