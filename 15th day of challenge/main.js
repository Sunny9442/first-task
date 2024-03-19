// Question 44: Zinger : Summarize Zingers orders with varifying ingredients.
function make_zinger() {
    var item = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        item[_i] = arguments[_i];
    }
    console.log(" How to make zinger burger : ".concat(item.join(',')));
}
make_zinger("Step:01 ", "Ketchup");
make_zinger("Step:02 ", "Ketchup ", "Coles law");
make_zinger("Step:03 ", "ketchup ", "coles law ", "Zinger petty ");
make_zinger("Step:04 ", "ketchup ", "coles law ", "Zinger petty ", "ketchup ", "Lettuce");
make_zinger("Step:05 ", "ketchup ", "coles law ", "Zinger petty ", "ketchup ", "Lettuce ", "Mayo");
