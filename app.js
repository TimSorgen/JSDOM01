document.addEventListener('DOMContentLoaded', function(){
    var list = document.querySelector('#book-list ul');

    // delete books
    list.addEventListener('click',function(e){
        const tgt = e.target; // must define the const to get className, etc.
        if (tgt.className == 'delete'){
            const li = tgt.parentElement;
            list.removeChild(li); //or li.parentNode.removeChild(li);
        }
    });

    // add books
    const addForm = document.forms['add-book'];
    addForm.addEventListener('submit', function(e){
        e.preventDefault();
        const value = addForm.querySelector('input[type="text"]').value;
        
        // create elements
        const li = document.createElement('li');
        const bookName = document.createElement('span');
        const deleteBtn = document.createElement('span');
        
        // TODO: check for duplicates
        // append to document
        li.appendChild(bookName);
        li.appendChild(deleteBtn);
        list.appendChild(li);

        // apply styles and classes
        bookName.classList.add('name');
        deleteBtn.classList.add('delete');

        // add content
        deleteBtn.textContent = 'delete';
        bookName.textContent = value;

    });
    // hide books
    const hideBox = document.querySelector('#hide');
    hideBox.addEventListener('change', function(e){
        if(hideBox.checked){
            list.style.display = "none";
        } else {
            list.style.display = "initial"; // or "block"
        }
    });

    // filter books
    const searchBar = document.forms['search-books'].querySelector('input');
    searchBar.addEventListener('keyup', function(e){
        const term = e.target.value.toLowerCase();
        const books = list.getElementsByTagName('li'); // collection
        Array.from(books).forEach(function(book){
            const title = book.firstElementChild.textContent;
            if(title.toLowerCase().indexOf(term) != -1){
                book.style.display = 'block';
            } else {
                book.style.display = 'none';
            }
        });
    });

    // tabbed content
    const tabs = document.querySelector('.tabs'); // the ul
    const panels = document.querySelectorAll('.panel'); // returns node list
    tabs.addEventListener('click', function(e){
        const tgt = e.target;
        if(tgt.tagName == "LI"){
            //console.log('tgt.tagName == LI');
            const dataSetTarget = tgt.dataset.target;
            console.log('dataSetTarget = ', dataSetTarget);
            const targetPanel = document.querySelector(dataSetTarget);
            console.log('targetPanel = ', targetPanel);
            panels.forEach(function(panel){
                if(panel != targetPanel){
                    console.log('panel != targetPanel');
                    panel.classList.remove('active');
                    console.log('targetPanel classList = ', targetPanel.classList);
                    
                } else {
                    console.log('panel == targetPanel');
                    panel.classList.add('active');
                    console.log('targetPanel classList = ', targetPanel.classList);
                }
            });
        }
    });
});



/* const link = document.querySelector('#page-banner a');

link.addEventListener('click', function(e){
    e.preventDefault();
    console.log('navigation to ', e.target.textContent, ' was prevented.');
}); */