    newFunction();

        let myLibrary = [
            {
                title: "God's Generals",
                author: "Robert Liardon",
                pages: "465",
                read: false
            },
            {
                title: "Good Morning, Holy Spirit",
                author: "Benny Hinn",
                pages: "165",
                read: true
            }
        ];


        class Book {
            constructor(title, author, pages, read) {
                this.title = title;
                this.author = author;
                this.pages = pages;
                this.read = read;
            }
        }

function newFunction() {
    document.addEventListener("DOMContentLoaded", function () {
        render();
    });
}

        function addBookToLibrary(event){
            const title = document.querySelector("#title").value;
            const author = document.querySelector("#author").value;
            const pages = document.querySelector("#pages").value;
            const read = document.querySelector("#read");
            let readStatus;

            if(read.checked){
                readStatus = true;
            } else {
                readStatus = false;
            }

            let book = new Book(title, author, pages, readStatus)
            myLibrary.push(book)
            render()
            event.preventDefault();

        }

        function deleteBook(index){
            myLibrary.splice(index, 1)
            render()
        }

        function submit(){
            // creating a button to add a new book to the array list
            let submit = document.querySelector('#submit')
            submit.addEventListener("click", addBookToLibrary);
            document.getElementById("myForm").reset()
        }


        // the function to render the library is created
        function render(){

            submit()

            const tableBody = document.querySelector("tbody");

            // this loop removes all the data from the table that are already being displayed
            if (tableBody.children.length > 0) {
            while (tableBody.children.length !== 0) {
                // remove all datas of the table starting with the last element, expect the new element being added
                 tableBody.removeChild(tableBody.lastChild);
                }
            }
            
           
        
            // creating a loop on the array to add new row with new data to table body
            for(let i = 0; i < myLibrary.length; i++){
                // create the row first
                let tRow = document.createElement("tr")
                tRow.setAttribute("data-index", (i))


                // then create the cells in the row to add new data
                let bookIndex  = document.createElement("td")
                let bookTitle  = document.createElement("td")
                let bookAuthor = document.createElement("td")
                let bookPages  = document.createElement("td")
                let bookRead   = document.createElement("td")
                let dlt        = document.createElement("button")
                
                dlt.addEventListener("click", function(e){
                    let rowIndex = e.target.parentNode.getAttribute("data-index")
                    deleteBook(rowIndex)
                })

                // updating the values of the cells
                bookIndex.innerHTML = (i+1)
                bookTitle.innerHTML = myLibrary[i].title
                bookAuthor.innerHTML = myLibrary[i].author
                bookPages.innerHTML = myLibrary[i].pages

                // bookRead.innerHTML  = myLibrary[i].read
                bookRead.innerHTML  = '<label class="switch"><input type="checkbox"> <span class="slider round"></span> </label>'

                // if (myLibrary[i].readStatus) {
                //     readStatus.style.background = '#fff url("icons/toggle-on.png") no-repeat center center';
                //   } else {
                //     readStatus.style.background = '#fff url("icons/toggle-off.png") no-repeat center center';
                //   }

                dlt.innerHTML       = "Delete"
                dlt.setAttribute("class", "btn btn-danger btn-sm btn-block")

                // append the table datas to the table row, then add the row to the the table itself
                tRow.append(bookIndex)
                tRow.append(bookTitle)
                tRow.append(bookAuthor)
                tRow.append(bookPages)
                tRow.append(bookRead)
                tRow.append(dlt)
                tableBody.append(tRow)

                }
        }
        
    

