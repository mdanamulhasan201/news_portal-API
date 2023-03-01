const fetchCategories = () =>{
    fetch('https://openapi.programming-hero.com/api/news/categories')
    .then(res => res.json())
    .then(data => showCategories (data.data))
};

const showCategories = data => {
    // console.log(data.data.news_category)
    // console.log(data)
    // capture categories container to append all the category link
    const categoriesContainer = document.getElementById('categories-container');

    // navbar list item added
    data.news_category.forEach(singleCategory => { 
        // console.log(singleCategory)
        // if it seems difficult, we can skip it. step: 1(advanced)
        // categoriesContainer.innerHTML += `
        // <a class="nav-link" href="#">${singleCategory?.category_name}</a>
        // `;
        // step : 2 (recommended for all us)
        const linkContainer = document.createElement("p");
        linkContainer.innerHTML = `<a class="nav-link" href="#" onclick="fetchCategoriesNews('${singleCategory.category_id}', '${singleCategory.category_name}')"> ${singleCategory.category_name}</a>`;
        categoriesContainer.appendChild(linkContainer);

    })
}

// fetch all news available in a category
const fetchCategoriesNews = (category_id, category_name) => {
    // console.log(category_id);
    const url = `https://openapi.programming-hero.com/api/news/category/${category_id}`;
    // console.log(url)
    fetch(url)
    .then(res => res.json())
    .then(data => showAllNews(data.data, category_name))

}


// news counting alert box

const showAllNews = (data, category_name) => {
    console.log(data, category_name)
    document.getElementById('news-count').innerText = data.length;
    document.getElementById('category-name').innerText = category_name;

}