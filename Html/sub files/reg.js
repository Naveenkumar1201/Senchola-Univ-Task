
        // get the id and store in a one variable
        let form = document.getElementById('form');
        let fname = document.getElementById('fname');
        let lname = document.getElementById('lname');
        let mobno = document.getElementById('mobno');
        let mail = document.getElementById('mail');
        let model = document.getElementById('model');
        let password = document.getElementById('password');
        let password2 = document.getElementById('password2');

        //2. create event for form submit

        form.addEventListener('submit', function (e) {
            e.preventDefault();
            checkrequired([fname, lname, mobno, mail, model, password, password2]);
            checkname(fname, 6, 10);
            checkname(lname, 6, 10);
            checkmob(mobno);
            checkmail(mail.value);
            checkmodel(model);
            checkpassword(password);
            confirmpassword(password2);
            window.location.href='login.html';

        });


        //3. create a main- check required  function for validation

        function checkrequired(inputs) {
            inputs.forEach(input => {
                if (input.value.trim() === '') {
                    //error
                    errorinput(input, 'fill the empty fields, it is mandatory')
                } else {
                    //success
                    successinput(input)
                }

            });


            function checkname(input, min, max) {
                const check = input.value.trim().length;
                if (check < min) {
                    errorinput(input, `${getid(input)} must be atleast greater than ${min} character`);

                } else if (check > max) {
                    errorinput(input, `${getid(input)} must be atleast lesser than ${max} character`);
                }
                else {
                    successinput(input);
                }
            }

            function checkmob(input) {
                if (input.value.trim().length !== 10) {
                    errorinput(input,'should be a enter a 10 digts');
                    
                } else {
                    successinput(input);
                }
                
            }

            function checkmail(input) {
                const pattern = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
                return pattern.test(input);
            }

            function checkmodel(elem) {
                let list = ['hyundai','ferrari','mahindra','toyota','jaguar','ford','vw'];

                 list.forEach(input=>{
                if (list.includes(elem.value.toLowercase())) {
                    errorinput(input,'This brand service not available');
                } else {
                    successinput(input);
                }
            });
            }

            function checkpassword(input) {
                if (input == isNaN(parseInt(input.value))) {
                    errorinput(input, `${getid(input)} must be in a mix with num atleast 1`);
                } else if (input.trim().length < 10 && input.trim().length > 5) {
                    errorinput(input, `${getid(input)} atleast enter min 5char and above`);
                } else {
                    successinput(input);
                }
                
            }

             function confirmpassword(input) {
                if (input.value !== password.value) {
                    errorinput(input,'password doesnot matches');
                } else {
                    successinput(input);
                }
             }




        }

        //4. inside i use a sub functions for error and success purpose

        // 
        function getid(input) {
            return input.id;
        }

        function errorinput(input, message) {
            const formgroup = input.parentElement;
            formgroup.className = 'form-group error';
            const span = formgroup.querySelector('span');
            span.innerHTML = message;

        }

        function successinput(input) {
            const formgroup = input.parentElement;
            formgroup.className = 'form-group success';
            const span = formgroup.querySelector('span');
            span.innerHTML = '';

        }

