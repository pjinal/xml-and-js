console.log("here2");
const product= require("./controllers/product");
const http =require("http");


const parseParams = (searchParams)=>{

    const params= new URLSearchParams(searchParams);
    return Array.from(params.entries()).reduce((acc,params)=>({
        ...acc,
        [key]: value,
    
    }), {});

};
const server = http.createServer(async (req, res)=> {
    const [ basePath, searchParams] = req.url.split('?');
    if (req.url === '/api/products'){
        const {code, data} =  product.getAll()
        res.end('products');
    }
    else if (basePath ===/\/api\/users\/\w+/){
        const urlElements = req.url.split('/');
        const id = urlElements[urlElements.length -1];

        const{ code,data} =await product.getById(id);
        res.writeHead(code);
        res.end(JSON.stringify(data));
    }
    else{
        res.writeHead(404)
        res.end(JSON.stringify({message: 'Route not found'}));
    }
   
});
const PORT = 8080;
server.listen(PORT, () =>console.log('Server is running on port ${PORT}'));