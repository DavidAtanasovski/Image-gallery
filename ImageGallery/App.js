var filter = "all";

(function () {

        const buttons = document.querySelectorAll('.btn')
        const storeImages = document.querySelectorAll('.store-items')
        buttons.forEach((button) => {
            button.addEventListener('click', (e) => {
                e.preventDefault()
                filter = e.target.dataset.filter
                
                search();
            })
        })
    })();




    const search = () => {
        const searchbox = document.getElementById("search-item").value.toUpperCase();

        const nature = document.querySelectorAll('.store-items');


        for (var i = 0; i < nature.length; i++) {
            let match = nature[i].getElementsByTagName('p')[0];


            if (match) {
                let textvalue = match.innerText;

                if (textvalue.toUpperCase().indexOf(searchbox) > -1 && (nature[i].classList.contains(filter) || filter === 'all')) {
                    nature[i].style.display = "block";
                } else {
                    nature[i].style.display = "none";
                }
            }
        }
    }



   let elements = document.querySelectorAll('.btn')

elements.forEach(el => {
  el.addEventListener('click', () => {
    elements.forEach(el => el.classList.remove('active'))
    el.classList.add('active')
  })})



