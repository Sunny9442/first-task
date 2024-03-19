// Question 44: Zinger : Summarize Zingers orders with varifying ingredients.
function make_zinger (...item :string[]){
    console.log(` How to make zinger burger : ${item .join (',')}`)
}
make_zinger ("Step:01 ", "Ketchup")
make_zinger ("Step:02 ", "Ketchup " , "Coles law")
make_zinger ("Step:03 ", "ketchup ", "coles law " , "Zinger petty " )
make_zinger ("Step:04 ", "ketchup ", "coles law " , "Zinger petty " , "ketchup " , "Lettuce")
make_zinger ("Step:05 ", "ketchup ", "coles law " , "Zinger petty " , "ketchup " , "Lettuce " , "Mayo")