

    const students = [
        { name: "Prithviraj", age: 20 },
        { name: "raj", age: 21 }
    ]
    function addStudent(data) {
        return new Promise(function (resolve, reject) {
            setTimeout(() => {
                students.push(data);
                console.log("Student Enrolled");
                error=true;
                if (!error) {
                    resolve('Hullulu');
                }
                else {
                    reject('ERROR !');
                }
            }, 5000);
        });
    }
    function allStudents() {
        setTimeout(() => {
            console.log(students);
        }, 1000);
    }
    let newStudent = { name: "Prithvi", age: 20 }
    addStudent(newStudent).then(function(response) {
        console.log(response);
        allStudents();
    }).catch(function(error) {
        console.log(error);
    });

