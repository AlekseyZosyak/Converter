
const button = document.querySelector('.btn');
button.addEventListener('click', function() {
    let number = +document.getElementById('input').value;
    
    // centimeter
    // meter
    // foot
    // inch
        
        const X = document.querySelector('#li').value;
        const Y = document.querySelector('#li2').value;
        let output = document.querySelector('#out');
        
        const errors = { 
            name1 : 'Вы не ввели значения', 
            name2 : 'Вы не можете сравнивать одинаковые параметры',
            error: function(info) {
                return output.textContent = info;
            }}

      
    
        if (number == 0) {
            errors.error(errors.name1)
        } else if (X === 'meter' && Y === 'meter' || X === 'centimeter' && Y === 'centimeter' ) {
            errors.error(errors.name2)
        }
    
    
        if (X === 'meter' && Y === 'centimeter') {
            add(number, meter, centimeter);
        } else if ( X === 'meter' && Y === 'fut' ) {
            let ft = 3.281;
            add2(number, ft, 'Fut');
        } else if ( X === 'meter' && Y === 'duim') {
            
        }
    
        // if (s === 'meter' && v === 'fut') {
        //     let result = (n * meter) * ft;
        //     output.textContent = `${result} F`;
        // }
    
        // if (s === 'centimeter' && v === 'meter') {
        //     let result = n / centimeter;
        //     output.textContent = `${result} M`;
        // };
       
       
    
    function add(n, x, y) {
        let result = (n * x) * y;
        return output.textContent = `${result} Sn`;
    };
    
    function add2(n, y, e) {
        let result = n * y;
        return output.textContent = `${result} ${e}`;
    }
   

    
});



// function start(user) {

//     const meter = 1;
//     const centimeter = 100;
//     const ft = 30.48;
//     const ins = 2.35;
    
//     const X = document.querySelector('#li').value;
//     const Y = document.querySelector('#li2').value;
//     let output = document.querySelector('#out');
    
//     const errors = { 
//         name1 : 'Вы не ввели значения', 
//         name2 : 'Не корректно!',
//         error: function(info) {
//             return output.textContent = info;
//         }}

//     if (!X || !Y) {
//         errors.error(errors.name1)
//     } else if (X === 'meter' && Y === 'meter' || X === 'centimeter' && Y === 'centimeter' ) {
//         errors.error(errors.name2)
//     }


//     if (X === 'meter' && Y === 'centimeter') {
//         add(user, meter, centimeter);
//     } else if ( X === 'meter' && Y === 'fut' ) {
//         add2(user, meter, ft, 'Fut');
//     } else if ( X === 'meter' && Y === 'duim') {
        
//     }

//     // if (s === 'meter' && v === 'fut') {
//     //     let result = (n * meter) * ft;
//     //     output.textContent = `${result} F`;
//     // }

//     // if (s === 'centimeter' && v === 'meter') {
//     //     let result = n / centimeter;
//     //     output.textContent = `${result} M`;
//     // };
   
   

// function add(n, x, y) {
//     let result = (n * x) * y;
//     return output.textContent = `${result} Sn`;
// };

// function add2(n, x, y, e) {
//     let result = (n * x) / y;
//     return output.textContent = `${result} ${e}`;
// }
// };





let parameterMeter = {
    centimeter : function () {
        let result = (n * x) * y;
        return output.textContent = `${result} Sn`;
    }
}