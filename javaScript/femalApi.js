const loadUser = () => {

    fetch('https://randomuser.me/api/?gender=female')

        .then(res => res.json())
        .then(data => displayUser(data))

}




const displayUser = user => {


    const name = document.getElementById('name')

    name.innerHTML = user.results[0].name.title + ' ' + user.results[0].name.first + ' ' + user.results[0].last
    const genderTag = document.getElementById('gender')

    genderTag.innerHTML = user.results[0].gender

    console.log(user.results[0])

}



loadUser()



