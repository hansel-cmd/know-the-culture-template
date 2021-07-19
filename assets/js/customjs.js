function reduceQty(btn, id) {
    // id is => item-1, item-2, item-3 and so on
    let input_field = document.querySelector(`#${id}`);
    
    if (input_field.value <= 1) {
        btn.classList.add('disabled');
        return;
    }
    
    // add btn is => add-item-1, add-item-2, add-item-3 and so on
    let add_btn = document.querySelector(`#add-${id}`);
    add_btn.classList.remove('disabled');

    input_field.value--;
}

function increaseQty(btn, id) {
    // id is => item-1, item-2, item-3 and so on
    let input_field = document.querySelector(`#${id}`);

    // if qty is over max qty of item then just disabled
    if (input_field.value >= 20) {
        btn.classList.add('disabled');
        return;
    }

    // reduce btn is => reduce-item-1, reduce-item-2, reduce-item-3 and so on
    let reduce_btn = document.querySelector(`#reduce-${id}`);
    reduce_btn.classList.remove('disabled');

    input_field.value++;
}

function checkQty(input, reduce_btn_id, add_btn_id) {
    let reduce_btn = document.querySelector(`#${reduce_btn_id}`);
    let add_btn = document.querySelector(`#${add_btn_id}`);


    if (input.value == "" || input.value == 0) {
        input.value = 1;
        return;
    }
    // if qty is lesser than 1, then disable reduce
    if (input.value <= 1) {
        reduce_btn.classList.add('disabled');
        return;
    }

    // if qty is greater than max qty of an item, then disable add
    if (input.value >= 20) {

        // set the max value to the max qty of an item
        input.value = 20;

        reduce_btn.classList.remove('disabled');
        add_btn.classList.add('disabled');
        return;
    }

    // if somewhere in between
    reduce_btn.classList.remove('disabled');
    add_btn.classList.remove('disabled');
}