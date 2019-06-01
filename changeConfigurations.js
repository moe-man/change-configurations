function changeConfigurations (amount, itemPrice) {

if (amount >= itemPrice) {

var difference = ((amount - itemPrice) * 100).toFixed(0)

var limitPennies = Math.floor(difference/1)
var limitNickels = Math.floor(difference/5)
var limitDimes = Math.floor(difference/10)
var limitQuarters = Math.floor(difference/25)
var limitOnes = Math.floor(difference/100)
var limitFives = Math.floor(difference/500)
var limitTwenties = Math.floor(difference/2000)


for (var twenties = 0; twenties <= limitTwenties; twenties++)
    for (var fives = 0; fives <= limitFives; fives++)
        for (var ones = 0; ones <= limitOnes; ones++)
            for (var quarters = 0; quarters <= limitQuarters; quarters++)
                for (var dimes = 0; dimes <= limitDimes; dimes++)
                    for (var nickels = 0; nickels <= limitNickels; nickels++)
                        for (var pennies = 0; pennies <= limitPennies; pennies++)
            
                            if (pennies * 1 + nickels * 5 + dimes * 10 + quarters * 25 + ones * 100
                                + fives * 500 + twenties * 2000 == difference)
                                console.log(`${twenties} twenties, ${fives} fives, ${ones} ones, ${quarters} quarters, ${dimes} dimes, ${nickels} nickels, ${pennies} pennies`)
                               
}

else
    return "Amount must be greater than or equal to item price."
}

changeConfigurations(27.13, 26.79)



