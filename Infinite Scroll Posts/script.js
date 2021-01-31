const container = document.querySelector('.container')
const errorMessage=container.querySelector('.fetch-error')


let limit = 4;
let pageCount = 1;
let postCount = 1;

const getPost = async () => {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}$_page=${pageCount}`)
        const data=await response.json();
        data.map((currData,index)=>{
            const htmlData=`
            <div class="post">
            <p class="post-id">${postCount++}</p>
            <h2 class="title">${currData.title}</h2>
            <p class="post-info">
                ${currData.body}
            </p>
        </div>`;
        container.insertAdjacentHTML('beforeend',htmlData)


        })
    } catch(e) {
        errorMessage.style.display="block"
    }
}

getPost();

const loadMoreData=()=>{
    setTimeout(()=>{
        
        getPost()
    },300)
}

window.addEventListener('scroll',()=>{
    const{scrollHeight,scrollTop,clientHeight}=document.documentElement;
    if(scrollTop+clientHeight>=scrollHeight){
        pageCount++;
        loadMoreData();
    }
})