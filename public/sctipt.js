const user = [{nombre: 'Leonardo', apellido: 'Szejpiacki'}];

async function register(ev){
    ev.preventDefault();
    let {username, password} = ev.target.elements;
    username = username.value;
    password = password.value;
    const data = await axios.post('/user/register', {username, password})
    console.log('registro', data);
}

async function login(ev){
    ev.preventDefault();
    let {username, password} = ev.target.elements;
    username = username.value;
    password = password.value;
    const data = await axios.post('/user/login', {username, password})
    console.log('login', data);
}

async function adminPanel(){
    const data = await axios.get('/user/adminPanel');
    console.log(data.data.message);
}