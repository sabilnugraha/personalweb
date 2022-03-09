let blogs = [  ]



function addblog() {

     let title = document.getElementById('input-project').value
     let start= document.getElementById('startdate').value;
     let end= document.getElementById('enddate').value;
     let body= document.getElementById('Description').value;
     let nodeJS= document.getElementById('Node JS').value + new Image();
     nodeJS.src= 'nodejs.png';
     let reactJS= document.getElementById('React JS').value;
     let nextJS= document.getElementById('Next JS').value;
     let typeScript= document.getElementById('TypeScript').value;
     let image= document.getElementById('input-blog-image').files[0];

     console.log(start)
     
     const y = new Date(start)
     let startYear= y.getFullYear();
     
     const x = new Date(end)
     let endyear = x.getFullYear()

     let startMonth = y.getMonth()
     let endMonth = x.getMonth()

     let durasi = endMonth - startMonth
     

     image= URL.createObjectURL(image);
     

     
     

     
     



     

     let blog = {
          title: title,
          body: body,
          image: image,
          postedAt: new Date(),
          startYear: startYear,
          durasi: durasi
          
          
           


     } 

     blogs.push(blog)
     
     renderBlog()

    
     
     
     
} 

function renderBlog() {

     let blogContainer = document.getElementById('content')
     
     
     for(let i = 0; i < blogs.length; i++){

          blogContainer.innerHTML += 
          ` <div  class= "blog-list-item" style="
          height: 720px;
          width: 400px;"> 
          <img src="${blogs[i].image}"
          style="
          padding:12px;
          height:250px;
          width: 94%;
          border-radius: 5px;">
      
      <h3
      style=" margin-left: 3%;"
      >
          <span><a href="blog-detail.html" target="_blank"
            >${blogs[i].title}</a
          > - ${blogs[i].startYear} </span>
        </h3>
        <div class="detail-blog-content"
        style="margin-left:3%;">
          Durasi ${blogs[i].durasi} Bulan
        </div>
        <p style="margin-left: 3%;">
          ${blogs[i].body}
        </p>
      
        <div class="bottom">
        <div class="icon" style="
        margin-left:3%;">
            <img 
            style="
            width: 30px;
            height: 30px;"
            src="playstore.png"/>
            <img  style="
            width: 30px;
            height: 30px;
            margin-left: 5px;" src="android.png"/>
            <img  style="
            width: 30px;
            height: 30px;
            margin-left: 5px" src="java.png">
        </div>
          
      
      <div class="btn-group">
                    <button class="btn-edit">Edit Post</button>
                    <button class="btn-post">Delete</button>
                  </div>
          </div>
          </div>`
     }
     

     
}

let month = [
     'January',
     'February',
     'Maret',
     'April',
     'Mei',
     'Juny',
     'July',
     'August',
     'September',
     'Oktober',
     'November',
     'Desember'
]

function duration() {
     let time = new Date()

     let date = time.getDate()
     let monthIndex = time.getMonth()
     let year = time.getFullYear()

     let fulltime= `${date} ${month[monthIndex]} ${year}`

     console.log(date)
     console.log(month[monthIndex])
     console.log(year)

     console.log(fulltime)
}




