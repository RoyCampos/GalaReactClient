import React from 'react';

const navbar = (props) => {
        console.log("Entrando al props de Menu")
        console.log(props)
        
        //console.log(props.dataUser);
        /*const testUser=()=>{
            if (props.dataUser['id'] === 'nulo') {
                return
            } {
                fetch(('http://localhost:8080/galarestapi/api/v1/user/by/' + props.dataUser['id']), {
                    method: 'get',}).then(response => response.json())
                    .then(dataresponse => console.log(dataresponse))}    
        }
        testUser();
        */
       let validation= props;
       console.log(props.dataUser['location']['state'])
if (typeof(props.dataUser['location']['rstate'])=='undefined') {
    return (
        <header className="header-global">
            <nav id="navbar-main" className="navbar navbar-main navbar-expand-lg navbar-transparent navbar-dark navbar-theme-primary headroom py-lg-2 px-lg-6 headroom--not-bottom headroom--pinned headroom--top">
                <div className="container">
                    <a className="navbar-brand" href="/home">Gala Spaces</a>
                    <div className="navbar-collapse collapse" id="navbar_global">
                        <div className="navbar-collapse-header">
                            <div className="row">
                                <div className="col-6 collapse-brand">
                                    <a href="main.html"><img src="./Spaces - Coworking Listing Web Template_files/primary.svg" alt="menuimage" /></a>
                                </div>
                                <div className="col-6 collapse-close">
                                    <a href="https://demo.themesberg.com/bootstrap/spaces/index.html#navbar_global" className="fas fa-times" data-toggle="collapse" data-target="#navbar_global" aria-controls="navbar_global" aria-expanded="false" aria-label="Toggle navigation"></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="d-none d-lg-block"><a href="/" className="btn btn-sm btn-primary animate-up-1 ml-3">Login</a> <a href="/registro" className="btn btn-sm btn-white animate-up-1 ml-3">Sign up</a> <a href="https://demo.themesberg.com/bootstrap/spaces/html/pages/submit-space.html" className="btn btn-sm btn-outline-white ml-3"><i className="fas fa-plus mr-2"></i>List a Space</a></div>
                    <div className="d-flex align-items-center">
                        <button className="navbar-toggler ml-2" type="button" data-toggle="collapse" data-target="#navbar_global" aria-controls="navbar_global" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                    </div>
                </div>
            </nav>
        </header>
    );
} else if(typeof(props.dataUser['location']['state'])=='undefined') {
    return (
        <header className="header-global">
            {
            alert(`Registro exitoso ${props.dataUser['location']['rstate']['detail']['email']} \n Aceptar para ir al Home`)
            }
            <nav id="navbar-main" className="navbar navbar-main navbar-expand-lg navbar-transparent navbar-dark navbar-theme-primary headroom py-lg-2 px-lg-6 headroom--not-bottom headroom--pinned headroom--top">
                <div className="container">
                    <a className="navbar-brand" href="/home">Gala Spaces</a>
                    <div className="navbar-collapse collapse" id="navbar_global">
                        <div className="navbar-collapse-header">
                            <div className="row">
                                <div className="col-6 collapse-brand">
                                    <a href="main.html"><img src="./Spaces - Coworking Listing Web Template_files/primary.svg" alt="menuimage" /></a>
                                </div>
                                <div className="col-6 collapse-close">
                                    <a href="https://demo.themesberg.com/bootstrap/spaces/index.html#navbar_global" className="fas fa-times" data-toggle="collapse" data-target="#navbar_global" aria-controls="navbar_global" aria-expanded="false" aria-label="Toggle navigation"></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="d-none d-lg-block"><a href="#" className="btn btn-sm btn-primary animate-up-1 ml-3">Perfil</a> <a href="/" className="btn btn-sm btn-white animate-up-1 ml-3">Close</a> <a href="https://demo.themesberg.com/bootstrap/spaces/html/pages/submit-space.html" className="btn btn-sm btn-outline-white ml-3"><i className="fas fa-plus mr-2"></i>List a Space</a></div>
                    <div className="d-flex align-items-center">
                        <button className="navbar-toggler ml-2" type="button" data-toggle="collapse" data-target="#navbar_global" aria-controls="navbar_global" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                    </div>
                </div>
            </nav>
        </header>
    );
}
    
}

export default navbar;