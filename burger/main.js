class Burger {
    constructor(size, topping, optionally){
        this.size = size;
        this.topping = topping;
        this.optionally = optionally;
        this.price = '';
        this.calories = '';
    }

    getSize(){
        document.addEventListener('click', () => {
            if(chooseSize.dataset.size = 1){
                console.log('Big');
                this.size = 'Большой';
                this.price += 100;
                this.calories += 40;
            } else if(chooseSize.dataset.size = 2) {
                console.log('small');
                this.size = 'Маленький';
                this.price += 50;
                this.calories += 20;
            }
        })
    }
}

let burger = new Burger();

function getSizzze() {
    document.addEventListener('click', evt => {
        if(evt.target.dataset.size == 1){
            console.log('Big');

        } if(evt.target.dataset.size == 2) {
            console.log('small');

        }
    });
};
getSizzze();