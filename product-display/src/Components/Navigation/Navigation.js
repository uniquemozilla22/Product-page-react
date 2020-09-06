import React from 'react'
import './Navigation.css'

const Navigation = () => {
    return (
        <div>
            <div class="container-fluid px-0">
    <header>
        <div class="shape"></div> 
        <nav class="navbar fixed-top navbar-expand-lg navbar-transparent"> <a class="navbar-brand" href="#">SPORT SHOES</a> <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> <span class="navbar-toggler-icon"></span> </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active"> <a class="nav-link" href="#">HOME <span class="sr-only">(current)</span></a> </li>
                    <li class="nav-item"> <a class="nav-link" href="#">MEN</a> </li>
                    <li class="nav-item"> <a class="nav-link" href="#">WOMEN</a> </li>
                    <li class="nav-item"> <a class="nav-link" href="#">KIDS</a> </li>
                    <li class="nav-item"> <a class="nav-link" href="#">BOYS</a> </li>
                    <li class="nav-item"> <a class="nav-link" href="#">GIRLS</a> </li>
                </ul>
            </div>
        </nav> 
                <div class="container">
                <div class="row">
                <div class="col-md-6 left-side"> <img src="https://i.imgur.com/jrRBTai.png" class="w-100" /> </div>
                <div class="col-md-6 right-side">
                    <h1>SPORTS SHOES</h1>
                    <p>FREE DELIVERY</p>
                    <div class="text-center"> <button class="btn order-button">ORDER NOW</button> </div>
                </div>
                </div>
                 </div>
                </header>
            </div>
        </div>
    )
}

export default Navigation
