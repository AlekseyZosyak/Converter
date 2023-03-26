'use strict';

const button = document.querySelector('.btn');
    button.addEventListener('click', function(e) {
        e.preventDefault(); 

        const number = +document.querySelector('#input').value;
        const X = document.querySelector('#li').value;
        const Y = document.querySelector('#li2').value;
        let output = document.querySelector('#out');

        startCalc(number, X, Y, output);
        
    });

function startCalc(number, X, Y, output) {
  
    const calc = { 
        key: {
            meter: { centimeter: 100, foot: 3.281, inch: 39.37 }, // pod
            centimeter: { meter: 100, foot: 30.48, inch: 2.54}, // raz
            foot: { meter: 3.281, centimeter: 30.48, inch: 12},
            inch: { meter: 39.37, centimeter: 2.54, foot: 12}
        },
        errortext: ['Вы не ввели значения', 'Вы не можете сравнивать одинаковые параметры'],
        error: function(info, output) {
            output.style.backgroundColor = '#fa7673';
            return output.textContent = info;
        },
        multiplication: function (number, sum, info) {
            output.style.backgroundColor = '';
            let result = number * sum;
            result = result.toFixed(4);
            return output.textContent = `${result} ${info}`;
        },
        division: function(number, sum, info) {
            output.style.backgroundColor = '';
            let result = number / sum;
            result = result.toFixed(4);
            return output.textContent = `${result} ${info}`;
        },
        start: function(number, X, Y, output) {

            if (number === null || number === 0) {
                calc.error(calc.errortext[0], output);
                console.log(number) 
            } else {
                    if (X === 'meter' && Y === 'meter' || X === 'centimeter' && Y === 'centimeter' || X === 'foot' && Y === 'foot' || X === 'inch' && Y === 'inch') {
                        calc.error(calc.errortext[1], output);
                    };
                
                    const {meter, centimeter, foot, inch} = calc.key;
                
                    if (X === 'meter' && Y === 'centimeter') {
                        calc.multiplication(number, meter.centimeter, Y);
                    } else if (X === 'meter' && Y === 'foot' ) {
                        calc.multiplication(number, meter.foot, Y);
                    } else if (X === 'meter' && Y === 'inch') {
                        calc.multiplication(number, meter.inch, Y);
                    };
                
                    if (X === 'centimeter' && Y === 'meter') {
                        calc.division(number, centimeter.meter, Y);
                    } else if (X === 'centimeter' && Y === 'foot' ) {
                        calc.division(number, centimeter.foot, Y);
                    } else if (X === 'centimeter' && Y === 'inch') {
                        calc.division(number, centimeter.inch, Y);
                    };
                
                    if (X === 'foot' && Y === 'meter') {
                        calc.division(number, foot.meter, Y);
                    } else if (X === 'foot' && Y === 'centimeter' ) {
                        calc.multiplication(number, foot.centimeter, Y);
                    } else if (X === 'foot' && Y === 'inch') {
                        calc.multiplication(number, foot.inch, Y);
                    };
                
                    if (X === 'inch' && Y === 'meter') {
                        calc.division(number, inch.meter, Y);
                    } else if (X === 'inch' && Y === 'centimeter' ) {
                        calc.multiplication(number, inch.centimeter, Y);
                    } else if (X === 'inch' && Y === 'foot') {
                        calc.division(number, inch.foot, Y);
                    };
                }
                
            }
        }
        calc.start(number, X, Y, output);

    };

    
  


     
      
    
//  function addTest(number, X, Y, output) {

//     if (number === '' || number === 0) {
//         calc.error(calc.errortext[0])
//     } else if (X === 'meter' && Y === 'meter' || X === 'centimeter' && Y === 'centimeter' || 
//     X === 'foot' && Y === 'foot' || X === 'inch' && Y === 'icnh') {
//         calc.error(calc.errortext[1])
//     }

//     const {meter, centimeter, foot, inch} = calc.key;

//     if (X === 'meter' && Y === 'centimeter') {
//         calc.multiplication(number, meter.centimeter, Y);
//     } else if (X === 'meter' && Y === 'foot' ) {
//         calc.multiplication(number, meter.foot, Y);
//     } else if (X === 'meter' && Y === 'inch') {
//         calc.multiplication(number, meter.inch, Y);
//     };

//     if (X === 'centimeter' && Y === 'meter') {
//         calc.division(number, centimeter.meter, Y);
//     } else if (X === 'centimeter' && Y === 'foot' ) {
//         calc.division(number, centimeter.foot, Y);
//     } else if (X === 'centimeter' && Y === 'inch') {
//         calc.division(number, centimeter.inch, Y);
//     };

//     if (X === 'foot' && Y === 'meter') {
//         calc.division(number, foot.meter, Y);
//     } else if (X === 'foot' && Y === 'centimeter' ) {
//         calc.multiplication(number, foot.centimeter, Y);
//     } else if (X === 'foot' && Y === 'inch') {
//         calc.multiplication(number, foot.inch, Y);
//     };

//     if (X === 'inch' && Y === 'meter') {
//         calc.division(number, inch.meter, Y);
//     } else if (X === 'inch' && Y === 'centimeter' ) {
//         calc.multiplication(number, inch.centimeter, Y);
//     } else if (X === 'inch' && Y === 'foot') {
//         calc.division(number, inch.foot, Y);
//     };
//  };
    
   





